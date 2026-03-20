package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Terminal Type explanation functionality.
 * Tests cover all bits in the Terminal Type field according to EMV specifications.
 */
class TerminalTypeTest {

    /**
     * Tests for Terminal Environment bits
     */
    class TerminalEnvironmentTests {
        @Test
        fun `Given Terminal Type with attended bit set When explaining Then shows correct bit explanation`() {
            val terminalType = byteArrayOf(0x80.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Attended - Terminal is attended by a merchant")
        }

        @Test
        fun `Given Terminal Type with unattended bit set When explaining Then shows correct bit explanation`() {
            val terminalType = byteArrayOf(0x40.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Unattended - Terminal is unattended")
        }

        @Test
        fun `Given Terminal Type with electronic cash register bit set When explaining Then shows bit explanation`() {
            val terminalType = byteArrayOf(0x20.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Electronic Cash Register - Terminal is an electronic cash register")
        }

        @Test
        fun `Given Terminal Type with POS terminal bit set When explaining Then shows correct bit explanation`() {
            val terminalType = byteArrayOf(0x10.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "POS Terminal - Terminal is a point of sale terminal")
        }

        @Test
        fun `Given Terminal Type with mobile bit set When explaining Then shows correct bit explanation`() {
            val terminalType = byteArrayOf(0x08.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Mobile - Terminal is mobile")
        }

        @Test
        fun `Given Terminal Type with internet bit set When explaining Then shows correct bit explanation`() {
            val terminalType = byteArrayOf(0x04.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Internet - Terminal is internet-based")
        }
    }

    /**
     * Tests for general Terminal Type functionality
     */
    class GeneralTests {
        @Test
        fun `Given Terminal Type with all bits set When explaining Then shows all bit explanations`() {
            val terminalType = byteArrayOf(0xFF.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Attended - Terminal is attended by a merchant")
            assertContains(meaning, "Unattended - Terminal is unattended")
            assertContains(meaning, "Electronic Cash Register - Terminal is an electronic cash register")
        }

        @Test
        fun `Given Terminal Type with invalid length When explaining Then throws exception`() {
            val terminalType = byteArrayOf(0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TerminalType.explain(terminalType, "\n").toString()
            }
        }

        @Test
        fun `Given Terminal Type with custom line separator When explaining Then uses correct separator`() {
            val terminalType = byteArrayOf(0x80.toByte())
            val meaning = TerminalType.explain(terminalType, "|").toString()
            assertContains(meaning, "Attended - Terminal is attended by a merchant|")
        }
    }
}
