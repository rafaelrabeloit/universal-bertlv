package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.ExplainConstants
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Tab
import io.github.rafaelrabeloit.bertlv.utils.TabGroup
import io.github.rafaelrabeloit.bertlv.utils.Table
import io.github.rafaelrabeloit.bertlv.utils.toBitStrings
import io.github.rafaelrabeloit.emv.EmvTagDescription

/**
 * Terminal Type explanation.
 * Terminal Type is a 1-byte binary field where each bit has a specific meaning
 * according to the EMV specification.
 *
 * This is a [ValueExplainer] implementation that provides a detailed explanation of the
 * Terminal Type bits.
 * It can be used with [TLVValue.ValueHandler] to provide human-readable explanations of
 * Terminal Type values.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.TERMINAL_TYPE
 */
object TerminalType : ValueExplainer<ByteArray> {
    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        require(value.size == EmvTagDescription.TERMINAL_TYPE.lengthRange?.first) {
            "Terminal Type must be exactly ${EmvTagDescription.TERMINAL_TYPE.lengthRange?.first} bytes long"
        }

        val explanation = Explanation(lineSeparator)
        val tab = createByteTab(value[BYTE_INDEX])
        explanation.add(TabGroup(listOf(tab)))
        return explanation
    }

    private fun createByteTab(byte: Byte): Tab {
        val bits = byte.toBitStrings()
        val mainTable = Table.createBitTable(rows = BYTE_TABLE_ROWS)

        mainTable.apply {
            setBitRow(
                ATTENDED_ROW_INDEX,
                bits,
                ATTENDED_BIT,
                ATTENDED_BIT + 1,
                "Attended - Terminal is attended by a merchant",
            )
            setBitRow(
                UNATTENDED_ROW_INDEX,
                bits,
                UNATTENDED_BIT,
                UNATTENDED_BIT + 1,
                "Unattended - Terminal is unattended",
            )
            setBitRow(
                ELECTRONIC_CASH_REGISTER_ROW_INDEX,
                bits,
                ELECTRONIC_CASH_REGISTER_BIT,
                ELECTRONIC_CASH_REGISTER_BIT + 1,
                "Electronic Cash Register - Terminal is an electronic cash register",
            )
            setBitRow(
                POS_TERMINAL_ROW_INDEX,
                bits,
                POS_TERMINAL_BIT,
                POS_TERMINAL_BIT + 1,
                "POS Terminal - Terminal is a point of sale terminal",
            )
            setBitRow(
                MOBILE_ROW_INDEX,
                bits,
                MOBILE_BIT,
                MOBILE_BIT + 1,
                "Mobile - Terminal is mobile",
            )
            setBitRow(
                INTERNET_ROW_INDEX,
                bits,
                INTERNET_BIT,
                INTERNET_BIT + 1,
                "Internet - Terminal is internet-based",
            )
            setBitRow(
                RFU_ROW_INDEX_1,
                bits,
                RFU_BIT_1_START,
                RFU_BIT_1_END,
                ExplainConstants.RFU,
            )
            setBitRow(
                RFU_ROW_INDEX_2,
                bits,
                RFU_BIT_2_START,
                RFU_BIT_2_END,
                ExplainConstants.RFU,
            )
        }

        return Tab("Byte 1 - Terminal Environment", mainTable)
    }

    private const val BYTE_INDEX = 0

    private const val ATTENDED_BIT = 0
    private const val UNATTENDED_BIT = 1
    private const val ELECTRONIC_CASH_REGISTER_BIT = 2
    private const val POS_TERMINAL_BIT = 3
    private const val MOBILE_BIT = 4
    private const val INTERNET_BIT = 5
    private const val RFU_BIT_1_START = 6
    private const val RFU_BIT_1_END = 7
    private const val RFU_BIT_2_START = 7
    private const val RFU_BIT_2_END = 8

    private const val BYTE_TABLE_ROWS = 9

    private const val ATTENDED_ROW_INDEX = 1
    private const val UNATTENDED_ROW_INDEX = 2
    private const val ELECTRONIC_CASH_REGISTER_ROW_INDEX = 3
    private const val POS_TERMINAL_ROW_INDEX = 4
    private const val MOBILE_ROW_INDEX = 5
    private const val INTERNET_ROW_INDEX = 6
    private const val RFU_ROW_INDEX_1 = 7
    private const val RFU_ROW_INDEX_2 = 8
}
