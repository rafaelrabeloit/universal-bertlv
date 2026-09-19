package io.github.rafaelrabeloit.bertlv.utils

// Constants for table formatting
const val EMPTY_CELL = "- "
const val MEANING_CELL_PREFIX = "  "

val BIT_HEADER_CELLS = listOf("b8", "b7", "b6", "b5", "b4", "b3", "b2", "b1", "  Meaning")

/**
 * Creates a table row with bit information and meaning.
 * @param bits List of bit strings to display
 * @param start Starting bit position (inclusive)
 * @param end Ending bit position (exclusive)
 * @param meaning Description of what the bits represent
 * @return List of strings representing the table row
 */
fun createBitRow(bits: List<String>, start: Int, end: Int, meaning: String): List<String> {
    val cells = MutableList(BITS_IN_BYTE) { EMPTY_CELL }
    for (i in start until end) {
        cells[i] = bits[i] + " "
    }
    cells += "$MEANING_CELL_PREFIX$meaning"
    return cells
}

/**
 * Collection of [ExplainElement] items used to build explanations.
 */
class Explanation(
    val lineSeparator: String = "\n",
    elements: List<ExplainElement> = emptyList(),
) : Iterable<ExplainElement> {
    private val items = elements.toMutableList()

    val size: Int
        get() = items.size

    fun add(element: ExplainElement) {
        items.add(element)
    }

    override fun iterator(): Iterator<ExplainElement> = items.iterator()

    override fun toString(): String {
        val builder = StringBuilder()
        for (element in items) {
            builder.append(element.toString(lineSeparator))
        }
        return builder.toString()
    }
}

/**
 * Base element for an explanation.
 */
sealed class ExplainElement {
    abstract fun toString(lineSeparator: String): String
    final override fun toString(): String = toString("\n")
}

/**
 * Element representing a single line of text.
 */
data class Line(val text: String) : ExplainElement() {
    override fun toString(lineSeparator: String): String = text
}

/**
 * Element representing a line separator.
 */
object LineSeparator : ExplainElement() {
    override fun toString(lineSeparator: String): String = lineSeparator
}

/**
 * Element representing a group of tabs.
 */
data class TabGroup(val tabs: List<Tab>) : ExplainElement() {
    override fun toString(lineSeparator: String): String {
        val builder = StringBuilder()
        tabs.forEachIndexed { index, tab ->
            if (index > 0) builder.append(lineSeparator)
            builder.append(tab.toString(lineSeparator))
        }
        return builder.toString()
    }
}

/**
 * Element representing a tab with a title and nested content.
 */
data class Tab(val title: String, val content: ExplainElement) : ExplainElement() {
    override fun toString(lineSeparator: String): String {
        val builder = StringBuilder()
        builder.append(title)
        builder.append(lineSeparator)
        builder.append(content.toString(lineSeparator))
        return builder.toString()
    }
}

/**
 * Element representing a table with a fixed number of rows and columns.
 * The first row is always considered the header.
 */
class Table(
    val rows: Int,
    val columns: Int,
) : ExplainElement(), Iterable<Table.Row> {
    init {
        require(rows >= 2) { "Table must have at least 2 rows" }
        require(columns > 0) { "Table must have at least one column" }
    }

    private val data: MutableList<Row> = MutableList(rows) { Row(MutableList(columns) { "" }) }

    val header: Row
        get() = data[0]

    fun set(row: Int, column: Int, value: String) {
        data[row].cells[column] = value
    }

    operator fun get(row: Int, column: Int): String = data[row].cells[column]

    /**
     * Sets the bit header cells for the table.
     */
    fun setBitHeaders() {
        BIT_HEADER_CELLS.forEachIndexed { i, headerCell ->
            header.cells[i] = headerCell
        }
    }

    /**
     * Sets a row with bit information.
     * @param rowIndex The row index to set
     * @param bits List of bit strings to display
     * @param start Starting bit position (inclusive)
     * @param end Ending bit position (exclusive)
     * @param meaning Description of what the bits represent
     */
    fun setBitRow(rowIndex: Int, bits: List<String>, start: Int, end: Int, meaning: String) {
        val rowData = createBitRow(bits, start, end, meaning)
        rowData.forEachIndexed { index, value -> set(rowIndex, index, value) }
    }

    override fun iterator(): Iterator<Row> = data.iterator()

    override fun toString(lineSeparator: String): String {
        val builder = StringBuilder()
        val headerString = header.cells.joinToString(" | ")
        builder.append("| ").append(headerString).append(lineSeparator)

        val headerLength = 2 + headerString.length
        builder.append("=".repeat(headerLength)).append(lineSeparator)

        for (i in 1 until data.size) {
            val row = data[i]
            val rowString = row.cells.joinToString(" | ")
            builder.append("| ").append(rowString).append(lineSeparator)
        }
        return builder.toString()
    }

    data class Row(val cells: MutableList<String>)

    companion object {
        /**
         * Creates a table with the standard bit table configuration.
         * @param rows Number of rows for the table
         * @return A new Table instance with bit headers already set
         */
        fun createBitTable(rows: Int): Table {
            val table = Table(rows = rows, columns = BITS_IN_BYTE + 1)
            table.setBitHeaders()
            return table
        }
    }
}
