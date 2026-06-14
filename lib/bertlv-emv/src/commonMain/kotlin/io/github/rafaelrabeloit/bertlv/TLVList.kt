package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import io.github.rafaelrabeloit.bertlv.utils.Buffered
import io.github.rafaelrabeloit.bertlv.utils.hexToByteArray

enum class TlvFindMode {
    /** Returns the only match, or fails if more than one TLV shares the tag. */
    STRICT,

    /** Returns the first TLV with the given tag, or null if none is found. */
    FIRST,

    /** Returns the last TLV with the given tag, or null if none is found. */
    LAST,
}

class TLVList private constructor(
    override val bytes: ByteArray,
    val tlvs: List<TLV<*>>,
) : Buffered {

    fun find(tag: Int, mode: TlvFindMode = TlvFindMode.STRICT): TLV<*>? {
        val matches = tlvs.filter { it.tag == tag }
        return when (mode) {
            TlvFindMode.STRICT -> when (matches.size) {
                0 -> null
                1 -> matches.first()
                else -> throw IllegalStateException(
                    "Multiple TLVs found for tag 0x${tag.toString(16).uppercase()}",
                )
            }

            TlvFindMode.FIRST -> matches.firstOrNull()
            TlvFindMode.LAST -> matches.lastOrNull()
        }
    }

    companion object {
        fun fromTlvListBuffer(
            bytes: ByteArray,
            specifications: List<Specification> = listOf(ASNOneSpecification),
        ): TLVList {
            val result = mutableListOf<TLV<*>>()
            var offset = 0

            while (offset < bytes.size) {
                val tlv = TLV.fromTlvBuffer(bytes, specifications, offset)
                result.add(tlv)
                offset += tlv.tlvTag.size + tlv.tlvLength.size + tlv.tlvValue.size
            }

            return TLVList(bytes, result)
        }

        fun fromTlvListBuffer(
            hex: String,
            specifications: List<Specification> = listOf(ASNOneSpecification),
        ): TLVList = fromTlvListBuffer(hex.hexToByteArray(), specifications)

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
