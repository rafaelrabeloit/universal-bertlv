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
        fun `Given Terminal Capabilities with manual key entry When explaining Then shows correct bit explanation`() {
            val capabilities = byteArrayOf(0x80.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Manual Key Entry - Terminal can accept manual key entry",
            )
        }

        @Test
        fun `Given Terminal Capabilities with magnetic stripe When explaining Then shows correct bit explanation`() {
            val capabilities = byteArrayOf(0x40.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Magnetic Stripe - Terminal can read magnetic stripe",
            )
        }

        @Test
        fun `Given Terminal Capabilities with ICC When explaining Then shows correct bit explanation`() {
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
        fun `Given Terminal Capabilities with plaintext PIN When explaining Then shows correct bit explanation`() {
            val capabilities = byteArrayOf(0x00, 0x80.toByte(), 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Plaintext PIN for ICC Verification - Terminal can accept plaintext PIN for ICC verification",
            )
        }

        @Test
        fun `Given Terminal Capabilities with enciphered PIN When explaining Then shows correct bit explanation`() {
            val capabilities = byteArrayOf(0x00, 0x40.toByte(), 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "Enciphered PIN for Online Verification - Terminal can accept enciphered PIN for online verification",
            )
        }

        @Test
        fun `Given Terminal Capabilities with signature When explaining Then shows correct bit explanation`() {
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
        fun `Given Terminal Capabilities with SDA When explaining Then shows correct bit explanation`() {
            val capabilities = byteArrayOf(0x00, 0x00, 0x80.toByte())
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "SDA - Terminal can perform Static Data Authentication",
            )
        }

        @Test
        fun `Given Terminal Capabilities with DDA When explaining Then shows correct bit explanation`() {
            val capabilities = byteArrayOf(0x00, 0x00, 0x40.toByte())
            val meaning = TerminalCapabilities.explain(capabilities, "\n").toString()
            assertContains(
                meaning,
                "DDA - Terminal can perform Dynamic Data Authentication",
            )
        }

        @Test
        fun `Given Terminal Capabilities with CDA When explaining Then shows correct bit explanation`() {
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
        fun `Given Terminal Capabilities with all bits set When explaining Then shows all bit explanations`() {
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
        fun `Given Terminal Capabilities with invalid length When explaining Then throws exception`() {
            val capabilities = byteArrayOf(0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TerminalCapabilities.explain(capabilities, "\n").toString()
            }
        }

        @Test
        fun `Given Terminal Capabilities with custom line separator When explaining Then uses correct separator`() {
            val capabilities = byteArrayOf(0x80.toByte(), 0x00, 0x00)
            val meaning = TerminalCapabilities.explain(capabilities, "|").toString()
            assertContains(meaning, "Manual Key Entry - Terminal can accept manual key entry|")
        }
    }
}
