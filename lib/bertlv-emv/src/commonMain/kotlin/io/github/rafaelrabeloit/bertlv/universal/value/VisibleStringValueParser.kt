package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for ASN.1 VISIBLE STRING type.
 * This type represents a string of visible characters (printable ASCII characters).
 * According to ASN.1 specification, it can only contain characters from the visible character set.
 */
class VisibleStringValueParser : TLVValue.ValueParser<String> {
    private fun isVisibleChar(c: Char) = c in '\u0020'..'\u007E'

    override fun bytesToValue(bytes: ByteArray): String {
        val result = bytes.decodeToString()
        require(result.all { isVisibleChar(it) }) {
            "VisibleString can only contain visible ASCII characters (0x20-0x7E)"
        }
        return result
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { isVisibleChar(it) }) {
            "VisibleString can only contain visible ASCII characters (0x20-0x7E)"
        }
        return value.encodeToByteArray()
    }

    override fun valueToString(value: String): String = value
}
