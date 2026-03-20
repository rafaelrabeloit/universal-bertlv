package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import io.github.rafaelrabeloit.bertlv.utils.Buffered

class TLVList private constructor(
    override val bytes: ByteArray,
    val tlvs: List<TLV<*>>,
) : Buffered {

    companion object {
        fun fromTlvListBuffer(
            bytes: ByteArray,
            specifications: List<Specification> = listOf(ASNOneSpecification),
        ): TLVList {
            val result = mutableListOf<TLV<*>>()
            var offset = 0

            while (offset < bytes.size) {
                val tlv = TLV.fromTlvBuffer(bytes.copyOfRange(offset, bytes.size), specifications)
                result.add(tlv)
                offset += tlv.tlvTag.size + tlv.tlvLength.size + tlv.tlvValue.size
            }

            return TLVList(bytes, result)
        }

        fun fromTlvs(tlvs: List<TLV<*>>): TLVList {
            val totalSize = tlvs.sumOf { it.tlvTag.size + it.tlvLength.size + it.tlvValue.size }
            val bytes = ByteArray(totalSize)
            var offset = 0

            for (tlv in tlvs) {
                tlv.bytes.copyInto(bytes, offset)
                offset += tlv.tlvTag.size + tlv.tlvLength.size + tlv.tlvValue.size
            }

            return TLVList(bytes, tlvs)
        }
    }
}
