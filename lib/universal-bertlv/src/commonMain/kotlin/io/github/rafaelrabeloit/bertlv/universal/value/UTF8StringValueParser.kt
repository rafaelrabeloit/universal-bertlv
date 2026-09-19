package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for ASN.1 UTF8String type.
 * According to ASN.1 encoding rules:
 * - Contains a string encoded in UTF-8 format
 * - Can represent any Unicode character
 * - No restrictions on character set
 */
class UTF8StringValueParser : TLVValue.ValueParser<String> {
    override fun bytesToValue(bytes: ByteArray): String {
        return bytes.decodeToString()
    }

    override fun valueToBytes(value: String): ByteArray {
        return value.encodeToByteArray()
    }

    override fun valueToString(value: String): String = value
}
