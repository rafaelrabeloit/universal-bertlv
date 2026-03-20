package io.github.rafaelrabeloit.emv.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK

/**
 * Parser for alphanumeric with special characters EMV values (ANS format).
 * According to EMV specifications:
 * - Can contain letters (A-Z, a-z), digits (0-9), and special characters
 * - Special characters allowed: space, apostrophe, parentheses, plus, comma, hyphen,
 *   period, slash, colon, equals, question mark
 * - Used for fields like Merchant Name and Location, Track Data, etc.
 * - Example: "JOHN'S STORE", "123 MAIN ST.", "A+B=C?"
 */
class AlphanumericSpecialValueParser : TLVValue.ValueParser<String> {

    override fun bytesToValue(bytes: ByteArray): String {
        return bytes.joinToString("") { byte ->
            val char = byte.toInt() and BYTE_MASK
            require(isValidAlphanumericSpecial(char)) { "Invalid alphanumeric special value: $char" }
            char.toChar().toString()
        }
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { isValidAlphanumericSpecial(it.code) }) {
            "Alphanumeric special value can only contain printable ASCII characters"
        }
        return value.map { it.code.toByte() }.toByteArray()
    }

    override fun valueToString(value: String): String = value

    private fun isValidAlphanumericSpecial(char: Int): Boolean {
        return char in '0'.code..'9'.code ||
            char in 'A'.code..'Z'.code ||
            char in 'a'.code..'z'.code ||
            char in setOf(
                ' '.code, // space
                '\''.code, // apostrophe
                '('.code, // left parenthesis
                ')'.code, // right parenthesis
                '+'.code, // plus
                ','.code, // comma
                '-'.code, // hyphen
                '.'.code, // period
                '/'.code, // slash
                ':'.code, // colon
                '='.code, // equals
                '?'.code, // question mark
            )
    }
}
