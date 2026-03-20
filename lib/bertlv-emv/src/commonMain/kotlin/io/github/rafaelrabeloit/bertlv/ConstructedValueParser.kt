package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.toHexString

/**
 * Parser for constructed TLV values.
 * According to ASN.1 encoding rules:
 * - Constructed values contain one or more nested TLV structures
 * - The value bytes are parsed as a sequence of TLV structures
 * - The result is a TLVList containing all nested TLV structures
 */
class ConstructedValueParser(
    private val specifications: List<Specification>,
) : TLVValue.ValueParser<TLVList> {

    override fun bytesToValue(bytes: ByteArray): TLVList =
        TLVList.fromTlvListBuffer(bytes, specifications)

    override fun valueToBytes(value: TLVList): ByteArray =
        value.bytes

    override fun valueToString(value: TLVList): String =
        value.bytes.toHexString()
}
