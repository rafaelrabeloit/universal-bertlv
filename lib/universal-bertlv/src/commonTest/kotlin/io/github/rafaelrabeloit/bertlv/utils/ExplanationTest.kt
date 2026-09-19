package io.github.rafaelrabeloit.bertlv.utils

import io.github.rafaelrabeloit.bertlv.components.TLVTag
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class ExplanationTest {
    @Test
    fun explanationShouldCollectAndIterateElements() {
        val explanation = Explanation("\n")
        explanation.add(Line("first"))
        explanation.add(Line("second"))

        assertEquals(2, explanation.size)
        val items = explanation.toList()
        assertEquals(Line("first"), items[0])
        assertEquals(Line("second"), items[1])
    }

    @Test
    fun tableShouldRequireAtLeastTwoRowsAndOneColumn() {
        assertFailsWith<IllegalArgumentException> { Table(rows = 1, columns = 1) }
        assertFailsWith<IllegalArgumentException> { Table(rows = 2, columns = 0) }
    }

    @Test
    fun tableHeaderAndCellOperationsShouldWork() {
        val table = Table(rows = 2, columns = 2)
        table.header.cells[0] = "H1"
        table.set(1, 0, "V1")

        assertEquals("H1", table[0, 0])
        assertEquals("V1", table[1, 0])

        val rows = table.toList()
        assertEquals(2, rows.size)
        assertTrue(rows[0].cells.contains("H1"))
    }

    @Test
    fun tabgroupShouldExposeItsTabs() {
        val group = TabGroup(
            listOf(
                Tab("A", Line("alpha")),
                Tab("B", Line("beta")),
            ),
        )
        assertEquals(2, group.tabs.size)
        assertEquals("A", group.tabs[0].title)
        assertEquals("beta", (group.tabs[1].content as Line).text)
    }

    @Test
    fun explanationTostringShouldJoinLines() {
        val explanation = Explanation(
            "\n",
            listOf(
                Line("first"),
                LineSeparator,
                Line("second"),
            ),
        )

        val result = explanation.toString()

        assertEquals(
            """
            first
            second
            """.trimIndent(),
            result,
        )
    }

    @Test
    fun tabgroupTostringShouldRenderTabs() {
        val explanation = Explanation(
            "\n",
            listOf(
                TabGroup(
                    listOf(
                        Tab("One", Line("1")),
                        Tab("Two", Line("2")),
                    ),
                ),
            ),
        )

        val result = explanation.toString()

        assertEquals(
            """
            One
            1
            Two
            2
            """.trimIndent(),
            result,
        )
    }

    @Test
    fun tableTostringShouldRenderRows() {
        val table = Table(rows = 2, columns = 2)
        table.header.cells[0] = "H1"
        table.header.cells[1] = "H2"
        table.set(1, 0, "V1")
        table.set(1, 1, "V2")

        val explanation = Explanation("\n", listOf(table))

        val result = explanation.toString()

        assertEquals(
            """
            | H1 | H2
            =========
            | V1 | V2
            """.trimIndent() + "\n",
            result,
        )
    }

    @Test
    @Suppress("LongMethod")
    fun explanationShouldMatchTlvtagExplainOutput() {
        val classification = TLVTag.Classification.CONTEXT_SPECIFIC.run { "$info - $description" }
        val construction = TLVTag.Construction.PRIMITIVE.run { "$info - $description" }
        val form = TLVTag.Form.SHORT.run { "$info - $description" }

        val table = Table(rows = 4, columns = 9).apply {
            val headers = listOf("b8", "b7", "b6", "b5", "b4", "b3", "b2", "b1", "  Meaning")
            headers.forEachIndexed { index, value ->
                header.cells[index] = value
            }

            val classificationRow = listOf("1 ", "0 ", "- ", "- ", "- ", "- ", "- ", "- ", "  $classification")
            classificationRow.forEachIndexed { i, v ->
                set(1, i, v)
            }

            val constructionRow = listOf("- ", "- ", "0 ", "- ", "- ", "- ", "- ", "- ", "  $construction")
            constructionRow.forEachIndexed { i, v ->
                set(2, i, v)
            }

            val formRow = listOf("- ", "- ", "- ", "1 ", "0 ", "1 ", "0 ", "1 ", "  $form")
            formRow.forEachIndexed { i, v ->
                set(3, i, v)
            }
        }

        val explanation = Explanation(
            "\n",
            listOf(
                Line("95"),
                LineSeparator,
                Line("Number: 21"),
                LineSeparator,
                Line("Unknown tag"),
                LineSeparator,
                LineSeparator,
                Tab(
                    "Byte 1",
                    table,
                ),
            ),
        )

        val expected = """
            95
            Number: 21
            Unknown tag

            Byte 1
            | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
            ===================================================
            | 1  | 0  | -  | -  | -  | -  | -  | -  |   $classification
            | -  | -  | 0  | -  | -  | -  | -  | -  |   $construction
            | -  | -  | -  | 1  | 0  | 1  | 0  | 1  |   $form
        """.trimIndent() + "\n"

        assertEquals(expected, explanation.toString())
    }

    @Test
    fun explanationShouldMatchValueexplainerOutput() {
        val explanation = Explanation(
            "\n",
            listOf(
                Line("0102030405"),
                LineSeparator,
                LineSeparator,
                Line("Byte 1: 1"),
                LineSeparator,
                Line("Byte 2: 2"),
                LineSeparator,
                Line("Byte 3: 3"),
                LineSeparator,
                Line("Byte 4: 4"),
                LineSeparator,
                Line("Byte 5: 5"),
            ),
        )

        val expected = """
            0102030405

            Byte 1: 1
            Byte 2: 2
            Byte 3: 3
            Byte 4: 4
            Byte 5: 5
        """.trimIndent()

        assertEquals(expected, explanation.toString())
    }
}
