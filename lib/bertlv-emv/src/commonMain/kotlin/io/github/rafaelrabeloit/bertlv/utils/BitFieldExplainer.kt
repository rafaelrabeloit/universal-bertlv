package io.github.rafaelrabeloit.bertlv.utils

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bitfield.BitFieldSchema
import io.github.rafaelrabeloit.bitfield.ParsedEntry
import io.github.rafaelrabeloit.bitfield.RfuField

/**
 * Generic adapter that bridges [BitFieldSchema] (from bitfield-parser)
 * to the emv-tools [ValueExplainer] interface.
 *
 * Given a schema, it parses the byte array and produces an [Explanation]
 * with one [Tab] per byte, each containing a bit table.
 */
class BitFieldExplainer(private val schema: BitFieldSchema) : ValueExplainer<ByteArray> {

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        val result = schema.parse(value)
        val explanation = Explanation(lineSeparator)

        val grouped = result.entries.groupBy { it.byteIndex }
        val tabs = grouped.keys.sorted()
            .map { byteIndex -> createTab(byteIndex, grouped[byteIndex]!!, value[byteIndex - 1]) }

        explanation.add(TabGroup(tabs))
        return explanation
    }

    private fun createTab(byteIndex: Int, entries: List<ParsedEntry>, byte: Byte): Tab {
        val bits = byte.toBitStrings()
        // +1 for header row
        val table = Table.createBitTable(rows = entries.size + 1)

        entries.forEachIndexed { index, entry ->
            val def = entry.field
            table.setBitRow(
                index + 1,
                bits,
                def.startBit,
                def.endBit + 1,
                if (entry.field is RfuField) ExplainConstants.RFU else entry.resolvedLabel,
            )
        }

        val byteLabel = schema.bytes.find { it.index == byteIndex }?.label ?: "Byte $byteIndex"
        return Tab(byteLabel, table)
    }
}
