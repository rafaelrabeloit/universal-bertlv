package io.github.rafaelrabeloit.bertlv.components

import io.github.rafaelrabeloit.bertlv.components.TLVConstants.LENGTH_LONG_MASK
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.LENGTH_SHORT_MASK
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.MAX_SHORT_LENGTH
import io.github.rafaelrabeloit.bertlv.utils.BITS_IN_BYTE
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK
import io.github.rafaelrabeloit.bertlv.utils.Buffered
import io.github.rafaelrabeloit.bertlv.utils.Explainable
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import io.github.rafaelrabeloit.bertlv.utils.Tab
import io.github.rafaelrabeloit.bertlv.utils.TabGroup
import io.github.rafaelrabeloit.bertlv.utils.Table
import io.github.rafaelrabeloit.bertlv.utils.matches
import io.github.rafaelrabeloit.bertlv.utils.toBitStrings
import io.github.rafaelrabeloit.bertlv.utils.toHexString

class TLVLength private constructor(
    override val bytes: ByteArray,
    val form: Form,
    val length: Int,
) : Buffered, Explainable {

    override fun explain(lineSeparator: String): Explanation {
        val explanation = Explanation(lineSeparator)

        explanation.apply {
            add(Line(bytes.toHexString()))
            add(LineSeparator)
            add(Line("Length: $length"))
            add(LineSeparator)
            add(LineSeparator)
        }

        val tabElements = mutableListOf<Tab>()
        tabElements.add(createFirstByteTable())

        if (form == Form.LONG) {
            for (n in 1 until bytes.size) {
                tabElements.add(createSubsequentByteTable(n))
            }
        }

        explanation.add(TabGroup(tabElements))
        return explanation
    }

    private fun createFirstByteTable(): Tab {
        val firstBits = bytes[FIRST_BYTE_INDEX].toBitStrings()
        val mainTable = Table.createBitTable(rows = MAIN_TABLE_ROWS)

        mainTable.apply {
            setBitRow(
                FORM_ROW_INDEX,
                firstBits,
                FORM_BITS_START,
                FORM_BITS_END,
                "${form.info} - ${form.description}",
            )

            val meaningForLength = if (form == Form.SHORT) "Length value" else "Number of subsequent bytes"
            setBitRow(
                LENGTH_ROW_INDEX,
                firstBits,
                LENGTH_BITS_START,
                LENGTH_BITS_END,
                meaningForLength,
            )
        }

        return Tab("Byte 1", mainTable)
    }

    private fun createSubsequentByteTable(byteIndex: Int): Tab {
        val bits = bytes[byteIndex].toBitStrings()
        val table = Table.createBitTable(rows = SUBSEQUENT_TABLE_ROWS)

        table.setBitRow(
            VALUE_ROW_INDEX,
            bits,
            LENGTH_VALUE_BITS_START,
            LENGTH_VALUE_BITS_END,
            "Length value",
        )

        return Tab("Byte ${byteIndex + 1}", table)
    }

    companion object {
        private const val FIRST_BYTE_INDEX = 0
        private const val FORM_BITS_START = 0
        private const val FORM_BITS_END = 1
        private const val LENGTH_BITS_START = 1
        private const val LENGTH_BITS_END = 8
        private const val LENGTH_VALUE_BITS_START = 0
        private const val LENGTH_VALUE_BITS_END = 8
        private const val INITIAL_BYTE_INDEX = 0
        private const val BYTE_COUNT_OFFSET = 1
        private const val MAIN_TABLE_ROWS = 3
        private const val SUBSEQUENT_TABLE_ROWS = 2
        private const val FORM_ROW_INDEX = 1
        private const val LENGTH_ROW_INDEX = 2
        private const val VALUE_ROW_INDEX = 1

        fun fromTlvBuffer(bytes: ByteArray, tag: TLVTag): TLVLength {
            val noTagBytes = extractNoTagBytes(bytes, tag)
            val form = determineForm(noTagBytes)
            val lengthSize = calculateLengthSize(form, noTagBytes)
            val lengthBytes = extractLengthBytes(noTagBytes, lengthSize)
            val length = calculateLength(bytes, tag, form, lengthSize)

            return TLVLength(lengthBytes, form, length)
        }

        fun fromLength(length: Int): TLVLength {
            val form = determineFormFromLength(length)
            val bytes = createLengthBytes(length, form)
            return TLVLength(bytes, form, length)
        }

        private fun createLengthBytes(length: Int, form: Form): ByteArray {
            return when (form) {
                Form.SHORT -> byteArrayOf(length.toByte())
                Form.LONG -> {
                    val byteCount = calculateByteCount(length)
                    val result = ByteArray(byteCount + BYTE_COUNT_OFFSET)
                    result[INITIAL_BYTE_INDEX] = (LENGTH_LONG_MASK or byteCount).toByte()

                    var remaining = length
                    for (i in byteCount downTo 1) {
                        result[i] = (remaining and BYTE_MASK).toByte()
                        remaining = remaining shr BITS_IN_BYTE
                    }
                    result
                }
            }
        }

        private fun determineFormFromLength(length: Int): Form {
            return if (length <= MAX_SHORT_LENGTH) Form.SHORT else Form.LONG
        }

        private fun calculateByteCount(length: Int): Int {
            var count = 0
            var value = length
            while (value > 0) {
                count++
                value = value shr BITS_IN_BYTE
            }
            return count
        }

        private fun extractNoTagBytes(bytes: ByteArray, tag: TLVTag): ByteArray {
            return bytes.copyOfRange(tag.size, bytes.size)
        }

        private fun determineForm(noTagBytes: ByteArray): Form {
            return if (noTagBytes.first().matches(LENGTH_LONG_MASK)) Form.LONG else Form.SHORT
        }

        private fun calculateLengthSize(form: Form, noTagBytes: ByteArray): Int {
            return when (form) {
                Form.SHORT -> 1
                Form.LONG -> {
                    val subsequentBytes = noTagBytes.first().toInt() and LENGTH_SHORT_MASK
                    subsequentBytes + 1
                }
            }
        }

        private fun extractLengthBytes(noTagBytes: ByteArray, lengthSize: Int): ByteArray {
            return noTagBytes.copyOfRange(0, lengthSize)
        }

        private fun calculateLength(bytes: ByteArray, tag: TLVTag, form: Form, lengthSize: Int): Int {
            return when (form) {
                Form.SHORT -> bytes[tag.size].toInt() and LENGTH_SHORT_MASK
                Form.LONG -> {
                    var result = 0
                    for (i in (tag.size + 1) until (tag.size + lengthSize)) {
                        result = (result shl BITS_IN_BYTE) or (bytes[i].toInt() and BYTE_MASK)
                    }
                    result
                }
            }
        }
    }

    enum class Form(val info: String, val description: String) {
        SHORT(
            info = "Short Form",
            description = "Length value fits in 7 bits (0-127)",
        ),
        LONG(
            info = "Long Form",
            description = "Length value requires multiple bytes to represent",
        ),
    }
}
