package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Terminal Capabilities explanation functionality.
 * Tests cover all bits in the 3-byte Terminal Capabilities field according to EMV specifications.
 */
class TerminalCapabilitiesTest {

    /**
     * Tests for Byte 1 - Card Data Input Capability
     */
    class CardDataInputCapabilityTests {
        @Test
        fun givenTerminalCapabilitiesWithManualKeyEntryWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x80.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Manual Key Entry - Terminal can accept manual key entry",
            )
        }

        @Test
        fun givenTerminalCapabilitiesWithMagneticStripeWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x40.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Magnetic Stripe - Terminal can read magnetic stripe",
            )
        }

        @Test
        fun givenTerminalCapabilitiesWithIccWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x20.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "ICC - Terminal can read ICC",
            )
        }
    }

    /**
     * Tests for Byte 2 - CVM Capability
     */
    class CVMCapabilityTests {
        @Test
        fun givenTerminalCapabilitiesWithPlaintextPinWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x00, 0x80.toByte(), 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Plaintext PIN for ICC Verification - Terminal can accept plaintext PIN for ICC verification",
            )
        }

        @Test
        fun givenTerminalCapabilitiesWithEncipheredPinWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x00, 0x40.toByte(), 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Enciphered PIN for Online Verification - Terminal can accept enciphered PIN for online verification",
            )
        }

        @Test
        fun givenTerminalCapabilitiesWithSignatureWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x00, 0x20.toByte(), 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Signature - Terminal can accept signature",
            )
        }
    }

    /**
     * Tests for Byte 3 - Security Capability
     */
    class SecurityCapabilityTests {
        @Test
        fun givenTerminalCapabilitiesWithSdaWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x00, 0x00, 0x80.toByte())
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "SDA - Terminal can perform Static Data Authentication",
            )
        }

        @Test
        fun givenTerminalCapabilitiesWithDdaWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x00, 0x00, 0x40.toByte())
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "DDA - Terminal can perform Dynamic Data Authentication",
            )
        }

        @Test
        fun givenTerminalCapabilitiesWithCdaWhenExplainingThenShowsCorrectBitExplanation() {
            val capabilities = byteArrayOf(0x00, 0x00, 0x20.toByte())
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "CDA - Terminal can perform Combined DDA/AC Generation",
            )
        }
    }

    /**
     * Tests for general Terminal Capabilities functionality
     */
    class GeneralTests {
        @Test
        fun givenTerminalCapabilitiesWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
            val capabilities = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte())
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(meaning, "Manual Key Entry - Terminal can accept manual key entry")
            assertContains(
                meaning,
                "Plaintext PIN for ICC Verification - Terminal can accept plaintext PIN for ICC verification",
            )
            assertContains(meaning, "SDA - Terminal can perform Static Data Authentication")
        }

        @Test
        fun givenTerminalCapabilitiesWithInvalidLengthWhenExplainingThenThrowsException() {
            val capabilities = byteArrayOf(0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TerminalCapabilities.explain(capabilities, "\n").toString()
            }
        }

        @Test
        fun givenTerminalCapabilitiesWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
            val capabilities = byteArrayOf(0x80.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "|").toString()
            assertContains(meaning, "Manual Key Entry - Terminal can accept manual key entry|")
        }
    }
}
