package io.github.rafaelrabeloit.emv.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK

/**
 * Parser for alphanumeric EMV values.
 * Handles letters and digits as specified in the EMV specification.
 */
class AlphanumericValueParser : TLVValue.ValueParser<String> {

    override fun bytesToValue(bytes: ByteArray): String {
        return bytes.joinToString("") { byte ->
            val char = byte.toInt() and BYTE_MASK
            require(isValidAlphanumeric(char)) { "Invalid alphanumeric value: $char" }
            char.toChar().toString()
        }
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { isValidAlphanumeric(it.code) }) {
            "Alphanumeric value can only contain letters and digits"
        }
        return value.map { it.code.toByte() }.toByteArray()
    }

    override fun valueToString(value: String): String = value

    private fun isValidAlphanumeric(char: Int): Boolean {
        return char in '0'.code..'9'.code ||
            char in 'A'.code..'Z'.code ||
            char in 'a'.code..'z'.code ||
            char == ' '.code
    }
}
