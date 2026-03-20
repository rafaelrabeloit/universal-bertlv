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
        fun givenTerminalTypeWithAttendedBitSetWhenExplainingThenShowsCorrectBitExplanation() {
            val terminalType = byteArrayOf(0x80.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Attended - Terminal is attended by a merchant")
        }

        @Test
        fun givenTerminalTypeWithUnattendedBitSetWhenExplainingThenShowsCorrectBitExplanation() {
            val terminalType = byteArrayOf(0x40.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Unattended - Terminal is unattended")
        }

        @Test
        fun givenTerminalTypeWithElectronicCashRegisterBitSetWhenExplainingThenShowsBitExplanation() {
            val terminalType = byteArrayOf(0x20.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Electronic Cash Register - Terminal is an electronic cash register")
        }

        @Test
        fun givenTerminalTypeWithPosTerminalBitSetWhenExplainingThenShowsCorrectBitExplanation() {
            val terminalType = byteArrayOf(0x10.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "POS Terminal - Terminal is a point of sale terminal")
        }

        @Test
        fun givenTerminalTypeWithMobileBitSetWhenExplainingThenShowsCorrectBitExplanation() {
            val terminalType = byteArrayOf(0x08.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Mobile - Terminal is mobile")
        }

        @Test
        fun givenTerminalTypeWithInternetBitSetWhenExplainingThenShowsCorrectBitExplanation() {
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
        fun givenTerminalTypeWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
            val terminalType = byteArrayOf(0xFF.toByte())
            val meaning = TerminalType.explain(terminalType, "\n").toString()
            assertContains(meaning, "Attended - Terminal is attended by a merchant")
            assertContains(meaning, "Unattended - Terminal is unattended")
            assertContains(meaning, "Electronic Cash Register - Terminal is an electronic cash register")
        }

        @Test
        fun givenTerminalTypeWithInvalidLengthWhenExplainingThenThrowsException() {
            val terminalType = byteArrayOf(0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TerminalType.explain(terminalType, "\n").toString()
            }
        }

        @Test
        fun givenTerminalTypeWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
            val terminalType = byteArrayOf(0x80.toByte())
            val meaning = TerminalType.explain(terminalType, "|").toString()
            assertContains(meaning, "Attended - Terminal is attended by a merchant|")
        }
    }
}
