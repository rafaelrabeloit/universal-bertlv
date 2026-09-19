package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for ASN.1 NumericString type.
 * According to ASN.1 encoding rules:
 * - Can only contain digits (0-9) and space characters
 * - Encoded using ASCII character set
 * - Used for numeric data that may include spaces for formatting
 */
class NumericStringValueParser : TLVValue.ValueParser<String> {
    override fun bytesToValue(bytes: ByteArray): String {
        val result = bytes.decodeToString()
        require(result.all { it.isDigit() || it == ' ' }) {
            "NumericString can only contain digits and spaces"
        }
        return result
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { it.isDigit() || it == ' ' }) {
            "NumericString can only contain digits and spaces"
        }
        return value.encodeToByteArray()
    }

    override fun valueToString(value: String): String = value
}
