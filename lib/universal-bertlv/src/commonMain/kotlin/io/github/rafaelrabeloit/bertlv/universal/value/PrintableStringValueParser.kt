package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for ASN.1 PrintableString type.
 * According to ASN.1 encoding rules:
 * - Can only contain a restricted set of printable ASCII characters
 * - Allowed characters: A-Z, a-z, 0-9, space, apostrophe, parentheses, plus, comma, hyphen, period,
 *   slash, colon, equals, question mark
 * - Commonly used for names, addresses, and other textual data in certificates
 */
class PrintableStringValueParser : TLVValue.ValueParser<String> {
    private val allowedChars = setOf(
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        ' ', '\'', '(', ')', '+', ',', '-', '.', '/', ':', '=', '?',
    )

    override fun bytesToValue(bytes: ByteArray): String {
        val result = bytes.decodeToString()
        require(result.all { it in allowedChars }) {
            "PrintableString can only contain ASN.1 PrintableString characters" +
                " (A-Z, a-z, 0-9, space, ', (, ), +, ,, -, ., /, :, =, ?)"
        }
        return result
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { it in allowedChars }) {
            "PrintableString can only contain ASN.1 PrintableString characters" +
                " (A-Z, a-z, 0-9, space, ', (, ), +, ,, -, ., /, :, =, ?)"
        }
        return value.encodeToByteArray()
    }

    override fun valueToString(value: String): String = value
}
