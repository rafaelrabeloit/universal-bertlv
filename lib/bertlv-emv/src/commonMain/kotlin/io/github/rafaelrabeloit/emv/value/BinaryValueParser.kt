package io.github.rafaelrabeloit.emv.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.toHexString

/**
 * Parser for binary EMV values.
 * Handles fixed-length binary data as specified in the EMV specification.
 */
class BinaryValueParser : TLVValue.ValueParser<ByteArray> {
    override fun bytesToValue(bytes: ByteArray): ByteArray {
        return bytes.copyOf()
    }

    override fun valueToBytes(value: ByteArray): ByteArray {
        return value.copyOf()
    }

    override fun valueToString(value: ByteArray): String {
        return value.toHexString()
    }
}
