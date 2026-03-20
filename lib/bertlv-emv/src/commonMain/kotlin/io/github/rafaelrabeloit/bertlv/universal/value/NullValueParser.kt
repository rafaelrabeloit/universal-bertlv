package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for ASN.1 NULL type.
 * According to ASN.1 DER encoding rules:
 * - NULL must have zero length (empty content)
 * - Used to represent the absence of a value
 */
class NullValueParser : TLVValue.ValueParser<Unit> {
    override fun bytesToValue(bytes: ByteArray) {
        require(bytes.isEmpty()) { "NULL value must be empty" }
        return Unit
    }

    override fun valueToBytes(value: Unit): ByteArray = ByteArray(0)

    override fun valueToString(value: Unit): String = "NULL"
}
