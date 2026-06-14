package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.components.TLVLength
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueHandler
import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import io.github.rafaelrabeloit.bertlv.universal.value.OctetStringValueParser
import io.github.rafaelrabeloit.bertlv.utils.Buffered
import io.github.rafaelrabeloit.bertlv.utils.Explainable
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import io.github.rafaelrabeloit.bertlv.utils.hexToByteArray
import io.github.rafaelrabeloit.bertlv.utils.toHexString

class TLV<V> private constructor(
    override val bytes: ByteArray,
    val tlvTag: TLVTag,
    val tlvLength: TLVLength,
    val tlvValue: TLVValue<V>,
) : Buffered, Explainable {
    val tag: Int get() = tlvTag.tag
    val length: Int get() = tlvLength.length
    val value: V get() = tlvValue.value

    /** Raw value bytes encoded as an uppercase hex string (e.g. `"A000000001010"`). */
    val hexValue: String get() = tlvValue.bytes.toHexString()

    /** Human-readable value string produced by the tag's value parser. */
    val valueString: String get() = tlvValue.asString()

    override fun explain(lineSeparator: String): Explanation {
        val explanation = Explanation(lineSeparator)

        explanation.add(Line("TAG:"))
        for (element in tlvTag.explain(lineSeparator)) {
            explanation.add(element)
        }
        explanation.add(LineSeparator)

        explanation.add(Line("LENGTH:"))
        for (element in tlvLength.explain(lineSeparator)) {
            explanation.add(element)
        }
        explanation.add(LineSeparator)

        explanation.add(Line("VALUE:"))
        for (element in tlvValue.explain(lineSeparator)) {
            explanation.add(element)
        }

        return explanation
    }

    companion object {
        fun <V> fromTlvBuffer(
            bytes: ByteArray,
            handler: ValueHandler<V>,
            offset: Int = 0,
        ): TLV<V> {
            val tag = TLVTag.fromTlvBuffer(bytes, offset)
            val length = TLVLength.fromTlvBuffer(bytes, tag, offset)
            val value = TLVValue.fromTlvBuffer(bytes, tag, length, handler, offset)
            return TLV(assembleBytes(tag, length, value), tag, length, value)
        }

        fun <V> fromComponents(
            tag: TLVTag,
            value: TLVValue<V>,
        ): TLV<V> {
            val length = TLVLength.fromLength(value.size)
            val bytes = ByteArray(tag.size + length.size + value.size).apply {
                tag.bytes.copyInto(this, 0)
                length.bytes.copyInto(this, tag.size)
                value.bytes.copyInto(this, tag.size + length.size)
            }
            return TLV(bytes, tag, length, value)
        }

        fun <V> fromTagAndValue(
            tag: Int,
            value: V,
            handler: ValueHandler<V>,
        ): TLV<V> {
            val tlvTag = TLVTag.fromTag(tag)
            val tlvValue = TLVValue.fromValue(value, handler)
            return fromComponents(tlvTag, tlvValue)
        }

        fun fromTlvBuffer(
            bytes: ByteArray,
            specifications: List<Specification> = listOf(ASNOneSpecification),
            offset: Int = 0,
        ): TLV<*> {
            val tag = TLVTag.fromTlvBuffer(bytes, offset, specifications::contextualize)
            val length = TLVLength.fromTlvBuffer(bytes, tag, offset)

            val value = when {
                tag.construction == TLVTag.Construction.CONSTRUCTED -> {
                    val handler = ValueHandler(ConstructedValueParser(specifications))
                    TLVValue.fromTlvBuffer(bytes, tag, length, handler, offset)
                }

                else -> {
                    val specification = specifications.find { it.tagExists(tag) }
                    if (specification == null) {
                        TLVValue.fromTlvBuffer(bytes, tag, length, ValueHandler(OctetStringValueParser()), offset)
                    } else {
                        val handler = specification.handlerOfValue(tag)
                        TLVValue.fromTlvBuffer(bytes, tag, length, handler, offset)
                    }
                }
            }

            return TLV(assembleBytes(tag, length, value), tag, length, value)
        }

        private fun assembleBytes(tag: TLVTag, length: TLVLength, value: TLVValue<*>): ByteArray =
            ByteArray(tag.size + length.size + value.size).apply {
                tag.bytes.copyInto(this, 0)
                length.bytes.copyInto(this, tag.size)
                value.bytes.copyInto(this, tag.size + length.size)
            }

        fun fromBinaryTlvBuffer(bytes: ByteArray): TLV<ByteArray> =
            fromTlvBuffer(bytes, ValueHandler(OctetStringValueParser()))

        fun fromBinaryTlvBuffer(hex: String): TLV<ByteArray> =
            fromBinaryTlvBuffer(hex.hexToByteArray())

        fun fromTlvBuffer(
            hex: String,
            specifications: List<Specification> = listOf(ASNOneSpecification),
        ): TLV<*> = fromTlvBuffer(hex.hexToByteArray(), specifications)

        fun fromBinaryComponents(tag: TLVTag, value: TLVValue<ByteArray>): TLV<ByteArray> =
            fromComponents(tag, value)

        fun fromTagAndBinaryValue(tag: Int, value: ByteArray): TLV<ByteArray> =
            fromTagAndValue(tag, value, ValueHandler(OctetStringValueParser()))

        fun fromTagAndBinaryValue(tag: Int, valueHex: String): TLV<ByteArray> =
            fromTagAndBinaryValue(tag, valueHex.hexToByteArray())
    }
}
