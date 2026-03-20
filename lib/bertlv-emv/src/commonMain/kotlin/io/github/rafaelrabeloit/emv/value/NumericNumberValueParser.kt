package io.github.rafaelrabeloit.emv.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for numeric number EMV values.
 * Handles BCD (Binary-Coded Decimal) representation, converting it to a Long value.
 * Each byte represents two decimal digits in BCD format.
 */
class NumericNumberValueParser : TLVValue.ValueParser<Long> {
    companion object {
        private const val HIGH_NIBBLE_MASK = 0xF0
        private const val LOW_NIBBLE_MASK = 0x0F
        private const val NIBBLE_SHIFT = 4
        private const val MAX_DECIMAL_DIGIT = 9
    }

    override fun bytesToValue(bytes: ByteArray): Long {
        return bytes.joinToString("") { byte ->
            val highNibble = (byte.toInt() and HIGH_NIBBLE_MASK) shr NIBBLE_SHIFT
            val lowNibble = byte.toInt() and LOW_NIBBLE_MASK
            require(
                highNibble in 0..MAX_DECIMAL_DIGIT && lowNibble in 0..MAX_DECIMAL_DIGIT,
            ) { "Invalid BCD value: $byte" }
            "$highNibble$lowNibble"
        }.toLong()
    }

    override fun valueToBytes(value: Long): ByteArray {
        require(value >= 0) { "Value must be non-negative" }
        val digits = value.toString()
        require(digits.length % 2 == 0) { "Value must have an even number of digits for BCD encoding" }
        return digits.chunked(2).map { pair ->
            val highNibble = pair[0].digitToInt() shl NIBBLE_SHIFT
            val lowNibble = pair[1].digitToInt()
            (highNibble or lowNibble).toByte()
        }.toByteArray()
    }

    override fun valueToString(value: Long): String {
        return value.toString()
    }
}
