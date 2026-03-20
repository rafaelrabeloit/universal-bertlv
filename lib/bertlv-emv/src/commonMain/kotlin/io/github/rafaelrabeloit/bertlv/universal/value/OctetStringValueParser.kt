package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue

/**
 * Parser for ASN.1 OCTET STRING type.
 * According to ASN.1 encoding rules:
 * - Contains arbitrary binary data
 * - No interpretation of the content is performed
 * - Used for raw binary data, encrypted data, or nested structures
 */
@OptIn(ExperimentalStdlibApi::class)
class OctetStringValueParser : TLVValue.ValueParser<ByteArray> {
    override fun bytesToValue(bytes: ByteArray): ByteArray = bytes

    override fun valueToBytes(value: ByteArray): ByteArray = value

    override fun valueToString(value: ByteArray): String = value.toHexString()
}
