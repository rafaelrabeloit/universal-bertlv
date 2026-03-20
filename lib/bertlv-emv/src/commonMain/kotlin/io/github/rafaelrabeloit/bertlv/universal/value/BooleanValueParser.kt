package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.MAX_BYTE_VALUE

/**
 * Parser for ASN.1 BOOLEAN type.
 * According to ASN.1 DER encoding rules:
 * - BOOLEAN must be exactly one byte
 * - 0x00 represents FALSE
 * - 0xFF represents TRUE (DER canonical form)
 */
class BooleanValueParser : TLVValue.ValueParser<Boolean> {
    override fun bytesToValue(bytes: ByteArray): Boolean {
        require(bytes.size == 1) { "Boolean value must be exactly one byte" }
        return bytes[0] != 0.toByte()
    }

    override fun valueToBytes(value: Boolean): ByteArray {
        return byteArrayOf(if (value) MAX_BYTE_VALUE.toByte() else 0x00.toByte())
    }

    override fun valueToString(value: Boolean): String = value.toString()
}
