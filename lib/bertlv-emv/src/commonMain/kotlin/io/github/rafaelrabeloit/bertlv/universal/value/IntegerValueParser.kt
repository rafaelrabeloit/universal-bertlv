package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BITS_IN_BYTE
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK

/**
 * Parser for ASN.1 INTEGER type (Universal tag 2) as defined in ITU-T X.690.
 *
 * The ASN.1 INTEGER type represents signed integers of arbitrary magnitude using
 * two's complement binary representation.
 *
 * **Encoding Format (BER/DER):**
 * - Universal tag: 2 (0x02)
 * - Always uses primitive encoding
 * - Content octets encode the integer value in two's complement form
 * - Most significant octet appears first (big-endian)
 * - Sign bit is the most significant bit of the first content octet
 *
 * **Minimal Encoding Rule:**
 * Per ITU-T X.690, integers must be encoded in the minimum number of octets.
 * The bits of the first octet and bit 8 of the second octet:
 * - SHALL NOT all be ones (prevents unnecessary 0xFF padding)
 * - SHALL NOT all be zero (prevents unnecessary 0x00 padding)
 *
 * **Sign Handling:**
 * - Positive integers: If the natural encoding would set bit 8 of the first octet,
 *   a leading 0x00 byte must be added to maintain positive sign
 * - Negative integers: Encoded in two's complement; leading 0xFF bytes are
 *   forbidden unless required to maintain the correct negative value
 *
 * **Examples:**
 * - 0: 0x02 0x01 0x00
 * - 127: 0x02 0x01 0x7F
 * - 128: 0x02 0x02 0x00 0x80 (leading zero required)
 * - -1: 0x02 0x01 0xFF
 * - -128: 0x02 0x01 0x80
 *
 * **Standards Compliance:**
 * - ITU-T X.690 (BER/DER encoding rules)
 * - RFC 5280 (for certificate applications)
 * - ASN.1 Universal class, primitive type, tag number 2
 */
class IntegerValueParser : TLVValue.ValueParser<Long> {
    companion object {
        private const val SIGN_BIT_MASK = 0x80
        private const val NEGATIVE_BYTE = 0xFF.toByte()
        private const val LONG_BYTES = 8
        private const val MIN_LENGTH_FOR_CHECK = 2
    }

    override fun bytesToValue(bytes: ByteArray): Long {
        require(bytes.isNotEmpty()) { "Integer value cannot be empty" }

        // Validate ASN.1 minimal encoding rule (ITU-T X.690)
        if (bytes.size >= MIN_LENGTH_FOR_CHECK) {
            val firstByte = bytes[0].toInt() and BYTE_MASK
            val secondByte = bytes[1].toInt() and SIGN_BIT_MASK

            // Check if bits of first octet and bit 8 of second octet are all zeros
            require(!(firstByte == 0x00 && secondByte == 0x00)) {
                "Invalid ASN.1 INTEGER encoding: unnecessary leading zero bytes"
            }

            // Check if bits of first octet and bit 8 of second octet are all ones
            require(!(firstByte == BYTE_MASK && secondByte == SIGN_BIT_MASK)) {
                "Invalid ASN.1 INTEGER encoding: unnecessary leading 0xFF bytes"
            }
        }

        // Handle special case of Long.MIN_VALUE
        if (bytes.size == LONG_BYTES &&
            bytes[0] == SIGN_BIT_MASK.toByte() &&
            bytes.drop(1).all { it.toInt() == 0x00 }
        ) {
            return Long.MIN_VALUE
        }

        var result = 0L
        for (byte in bytes) {
            result = (result shl BITS_IN_BYTE) or (byte.toInt() and BYTE_MASK).toLong()
        }

        // If the highest bit of the first byte is set, it's negative (two's complement)
        if ((bytes[0].toInt() and SIGN_BIT_MASK) != 0) {
            result = result or (-1L shl (bytes.size * BITS_IN_BYTE))
        }

        return result
    }

    override fun valueToBytes(value: Long): ByteArray {
        // Handle special cases first
        val specialCase = getSpecialCaseBytes(value)
        if (specialCase != null) return specialCase

        val bytes = mutableListOf<Byte>()
        var v = value
        val negative = value < 0

        // Extract bytes from least significant to most significant
        do {
            bytes.add(0, (v and BYTE_MASK.toLong()).toByte())
            v = v shr BITS_IN_BYTE
        } while (shouldContinueExtraction(v, negative))

        // For positive values, ensure the highest bit is not set (add 0x00 if needed)
        if (!negative && (bytes[0].toInt() and SIGN_BIT_MASK) != 0) {
            bytes.add(0, 0x00)
        }
        // For negative values, ensure the highest bit is set (add 0xFF if needed)
        if (negative && (bytes[0].toInt() and SIGN_BIT_MASK) == 0) {
            bytes.add(0, NEGATIVE_BYTE)
        }

        return bytes.toByteArray()
    }

    private fun getSpecialCaseBytes(value: Long): ByteArray? {
        return when (value) {
            0L -> byteArrayOf(0x00)
            Long.MIN_VALUE -> byteArrayOf(
                SIGN_BIT_MASK.toByte(),
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            else -> null
        }
    }

    override fun valueToString(value: Long): String = value.toString()

    private fun shouldContinueExtraction(v: Long, negative: Boolean): Boolean {
        return (negative && v != -1L) || (!negative && v != 0L)
    }
}
