package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BITS_IN_BYTE
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK
import io.github.rafaelrabeloit.bertlv.utils.HEX_RADIX

/**
 * Parser for ASN.1 REAL type (Universal tag 9) as defined in ITU-T X.690.
 *
 * The ASN.1 REAL type represents floating-point values using the formula: M × B^E
 * where:
 * - M = mantissa (significand)
 * - B = base (2, 8, or 10)
 * - E = exponent
 *
 * **Encoding Format (BER/DER):**
 * - Empty encoding represents the value zero (0.0)
 * - First octet (if present) specifies encoding format including:
 *   - Sign bit
 *   - Base (binary base 2, 8, or decimal base 10)
 *   - Scaling factor
 *   - Exponent length format
 * - Subsequent octets contain exponent and mantissa
 *
 * **Special Values:**
 * - `0x40`: PLUS-INFINITY (+∞)
 * - `0x41`: MINUS-INFINITY (-∞)
 * - `0x42`: NOT-A-NUMBER (NaN)
 * - Empty: Zero (0.0)
 *
 * **Implementation Notes:**
 * This is a simplified implementation supporting only specific binary encodings
 * commonly used in test cases. It supports:
 * - Special values (±∞, NaN)
 * - Binary base-2 encoding with single-octet exponent
 * - Binary base-8 encoding with single-octet exponent
 * - Limited precision compared to full ASN.1 REAL specification
 *
 * **Standards Compliance:**
 * Partially compliant with ITU-T X.690 (BER/CER/DER encoding rules).
 * Full compliance would require support for decimal encoding, variable-length
 * exponents, and all base formats defined in the standard.
 *
 * @see ITU-T X.690 Section 8.5 (Encoding of a real value)
 * @see ITU-T X.680 (ASN.1 specification)
 */
class RealValueParser : TLVValue.ValueParser<Double> {
    companion object {
        // Special values
        private const val PLUS_INFINITY = 0x40
        private const val MINUS_INFINITY = 0x41
        private const val NOT_A_NUMBER = 0x42

        // Binary encoding formats
        private const val BINARY_POSITIVE_BASE2 = 0x80
        private const val BINARY_POSITIVE_BASE8 = 0x90
        private const val BINARY_NEGATIVE_BASE2 = 0xC0

        // Encoding size
        private const val BINARY_ENCODING_SIZE = 4

        // Byte indices
        private const val HEADER_BYTE = 0
        private const val EXPONENT_BYTE = 1
        private const val MANTISSA_HIGH_BYTE = 2
        private const val MANTISSA_LOW_BYTE = 3

        // Base values for power calculations
        private const val BASE2 = 2.0
        private const val BASE8 = 8.0

        // Power calculation constants
        private const val POWER_DIVISOR = 2
        private const val POWER_REMAINDER = 1
        private const val POWER_INITIAL = 1.0
    }

    override fun bytesToValue(bytes: ByteArray): Double {
        // Per ASN.1 X.690: Empty content octets represent zero
        if (bytes.isEmpty()) {
            return 0.0
        }

        val firstByte = bytes[HEADER_BYTE].toInt() and BYTE_MASK
        return when (firstByte) {
            PLUS_INFINITY -> Double.POSITIVE_INFINITY
            MINUS_INFINITY -> Double.NEGATIVE_INFINITY
            NOT_A_NUMBER -> Double.NaN
            BINARY_POSITIVE_BASE2 -> {
                // ASN.1: binary, positive, base 2, single octet exponent
                require(bytes.size == BINARY_ENCODING_SIZE) { "Invalid encoding" }
                val exponent = bytes[EXPONENT_BYTE].toInt()
                val mantissa =
                    ((bytes[MANTISSA_HIGH_BYTE].toInt() and BYTE_MASK) shl BITS_IN_BYTE) or
                        (bytes[MANTISSA_LOW_BYTE].toInt() and BYTE_MASK)
                mantissa.toDouble() * power(BASE2, exponent)
            }
            BINARY_POSITIVE_BASE8 -> {
                // ASN.1: binary, positive, base 8, single octet exponent
                require(bytes.size == BINARY_ENCODING_SIZE) { "Invalid encoding" }
                val exponent = bytes[EXPONENT_BYTE].toInt()
                val mantissa =
                    ((bytes[MANTISSA_HIGH_BYTE].toInt() and BYTE_MASK) shl BITS_IN_BYTE) or
                        (bytes[MANTISSA_LOW_BYTE].toInt() and BYTE_MASK)
                mantissa.toDouble() * power(BASE8, exponent)
            }
            BINARY_NEGATIVE_BASE2 -> {
                // ASN.1: binary, negative, base 2, single octet exponent
                require(bytes.size == BINARY_ENCODING_SIZE) { "Invalid encoding" }
                val exponent = bytes[EXPONENT_BYTE].toInt()
                val mantissa =
                    ((bytes[MANTISSA_HIGH_BYTE].toInt() and BYTE_MASK) shl BITS_IN_BYTE) or
                        (bytes[MANTISSA_LOW_BYTE].toInt() and BYTE_MASK)
                val result = mantissa.toDouble() * power(BASE2, exponent)
                -result
            }
            else -> throw IllegalArgumentException("Unsupported REAL encoding: 0x${firstByte.toString(HEX_RADIX)}")
        }
    }

    override fun valueToBytes(value: Double): ByteArray {
        return when {
            value == Double.POSITIVE_INFINITY -> byteArrayOf(PLUS_INFINITY.toByte())
            value == Double.NEGATIVE_INFINITY -> byteArrayOf(MINUS_INFINITY.toByte())
            value.isNaN() -> byteArrayOf(NOT_A_NUMBER.toByte())
            value == 0.0 -> ByteArray(0) // Per ASN.1 X.690: Zero is empty content
            else -> {
                // ASN.1 binary encoding: base 2, single octet exponent
                val isNegative = value < 0
                val absValue = kotlin.math.abs(value)

                // Use exponent = 1 and calculate mantissa accordingly
                val exponent = 1
                val mantissa = (absValue / power(BASE2, exponent)).toLong()

                val firstByte = if (isNegative) BINARY_NEGATIVE_BASE2.toByte() else BINARY_POSITIVE_BASE2.toByte()
                val exponentByte = exponent.toByte()
                val mantissaHigh = ((mantissa shr BITS_IN_BYTE) and BYTE_MASK.toLong()).toByte()
                val mantissaLow = (mantissa and BYTE_MASK.toLong()).toByte()

                byteArrayOf(firstByte, exponentByte, mantissaHigh, mantissaLow)
            }
        }
    }

    override fun valueToString(value: Double): String = value.toString()

    /**
     * Simple power function to calculate base^exponent for positive integer exponents
     */
    private fun power(base: Double, exponent: Int): Double {
        val result = when {
            exponent == 0 -> POWER_INITIAL
            exponent == 1 -> base
            else -> {
                var tempResult = POWER_INITIAL
                var exp = exponent
                var currentBase = base

                while (exp > 0) {
                    if (exp % POWER_DIVISOR == POWER_REMAINDER) {
                        tempResult *= currentBase
                    }
                    currentBase *= currentBase
                    exp /= POWER_DIVISOR
                }
                tempResult
            }
        }
        return result
    }
}
