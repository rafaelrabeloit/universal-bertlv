package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK

/**
 * Parser for ASN.1 IA5String type.
 * According to ASN.1 encoding rules:
 * - IA5 stands for International Alphabet 5 (equivalent to ASCII)
 * - Can only contain ASCII characters (codes 0-127)
 * - Commonly used for email addresses and URIs
 */
class IA5StringValueParser : TLVValue.ValueParser<String> {
    companion object {
        private const val MAX_ASCII_VALUE = 127
    }

    override fun bytesToValue(bytes: ByteArray): String {
        require(bytes.all { it.toInt() and BYTE_MASK <= MAX_ASCII_VALUE }) {
            "IA5String can only contain ASCII characters (0-127)"
        }
        return bytes.decodeToString()
    }

    override fun valueToBytes(value: String): ByteArray {
        require(value.all { it.code <= MAX_ASCII_VALUE }) {
            "IA5String can only contain ASCII characters (0-127)"
        }
        return value.encodeToByteArray()
    }

    override fun valueToString(value: String): String = value
}
