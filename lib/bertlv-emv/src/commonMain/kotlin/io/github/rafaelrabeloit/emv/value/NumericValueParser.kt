package io.github.rafaelrabeloit.emv.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for numeric EMV values.
 * Handles BCD (Binary-Coded Decimal) representation, where each byte represents two decimal digits.
 * Each nibble (4 bits) represents a single decimal digit.
 */
class NumericValueParser : TLVValue.ValueParser<String> {
    companion object {
        private const val HIGH_NIBBLE_MASK = 0xF0
        private const val LOW_NIBBLE_MASK = 0x0F
        private const val NIBBLE_SHIFT = 4
        private const val MAX_DECIMAL_DIGIT = 9
    }

    override fun bytesToValue(bytes: ByteArray): String {
        return bytes.joinToString("") { byte ->
            val highNibble = (byte.toInt() and HIGH_NIBBLE_MASK) shr NIBBLE_SHIFT
            val lowNibble = byte.toInt() and LOW_NIBBLE_MASK

            require(
                highNibble in 0..MAX_DECIMAL_DIGIT && lowNibble in 0..MAX_DECIMAL_DIGIT,
            ) { "Invalid BCD value: $byte" }
            "$highNibble$lowNibble"
        }
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { it.isDigit() }) {
            "Numeric value can only contain digits"
        }
        require(value.length % 2 == 0) {
            "Numeric value length must be even for BCD encoding"
        }

        return value.chunked(2).map { pair ->
            val highNibble = pair[0].digitToInt() shl NIBBLE_SHIFT
            val lowNibble = pair[1].digitToInt()
            (highNibble or lowNibble).toByte()
        }.toByteArray()
    }

    override fun valueToString(value: String): String = value
}
