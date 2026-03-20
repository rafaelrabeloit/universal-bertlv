package io.github.rafaelrabeloit.bertlv.components

import io.github.rafaelrabeloit.bertlv.universal.value.OctetStringValueParser
import io.github.rafaelrabeloit.bertlv.utils.Buffered
import io.github.rafaelrabeloit.bertlv.utils.Explainable
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator

class TLVValue<V> private constructor(
    override val bytes: ByteArray,
    private val handler: ValueHandler<V>,
) : Buffered, Explainable {

    val value: V
        get() = handler.parser.bytesToValue(bytes)

    override fun explain(lineSeparator: String): Explanation {
        val explanation = Explanation(lineSeparator)
        explanation.add(Line(handler.parser.valueToString(value)))

        handler.explainer?.explain(value, lineSeparator)?.let { extra ->
            explanation.add(LineSeparator)
            explanation.add(LineSeparator)
            for (element in extra) {
                explanation.add(element)
            }
        }

        return explanation
    }

    // convert content bytes to language-specific types, such as String or Date
    interface ValueParser<V> {
        // deserialize bytes into value of type V
        fun bytesToValue(bytes: ByteArray): V

        // serialize value of type V into bytes
        fun valueToBytes(value: V): ByteArray

        // to pretty-print the bytes
        fun valueToString(value: V): String
    }

    interface ValueExplainer<V> {
        fun explain(value: V, lineSeparator: String): Explanation
    }

    data class ValueHandler<V>(
        val parser: ValueParser<V>,
        val explainer: ValueExplainer<V>? = null,
    )

    companion object {
        fun <V> fromTlvBuffer(
            bytes: ByteArray,
            tag: TLVTag,
            length: TLVLength,
            handler: ValueHandler<V>,
        ): TLVValue<V> {
            val valueStart = tag.size + length.size
            val valueBytes = bytes.copyOfRange(valueStart, valueStart + length.length)
            return TLVValue(
                bytes = valueBytes,
                handler = handler,
            )
        }

        fun <V> fromValue(
            value: V,
            handler: ValueHandler<V>,
        ): TLVValue<V> = TLVValue(
            bytes = handler.parser.valueToBytes(value),
            handler = handler,
        )

        fun fromBinaryTlvBuffer(
            bytes: ByteArray,
            tag: TLVTag,
            length: TLVLength,
        ): TLVValue<ByteArray> = fromTlvBuffer(
            bytes = bytes,
            tag = tag,
            length = length,
            handler = ValueHandler(OctetStringValueParser()),
        )

        fun fromBinaryValue(
            value: ByteArray,
        ): TLVValue<ByteArray> = TLVValue(
            bytes = value,
            handler = ValueHandler(OctetStringValueParser()),
        )
    }
}
