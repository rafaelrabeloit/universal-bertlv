package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Terminal Transaction Qualifiers (TTQ) explanation functionality.
 * Tests cover all bits in the 4-byte TTQ field according to EMV specifications.
 */
class TerminalTransactionQualifiersTest {

    /**
     * Tests for Byte 1 - Contactless EMV Mode Support
     */
    class ContactlessEMVModeSupportTests {
        @Test
        fun `Given TTQ with EMV mode supported When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x80.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "EMV Mode Supported")
        }

        @Test
        fun `Given TTQ with Magstripe mode supported When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Magstripe Mode Supported")
        }

        @Test
        fun `Given TTQ with ODA for EMV mode supported When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x20.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "ODA for EMV Mode Supported")
        }

        @Test
        fun `Given TTQ with CDA supported When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x10.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "CDA Supported")
        }
    }

    /**
     * Tests for Byte 2 - Cardholder Verification and Online Capabilities
     */
    class CardholderVerificationAndOnlineTests {
        @Test
        fun `Given TTQ with Reader supports online PIN When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Online PIN")
        }

        @Test
        fun `Given TTQ with Reader supports signature When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x40.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Signature")
        }

        @Test
        fun `Given TTQ with Reader supports Consumer Device CVM When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x20.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Consumer Device CVM")
        }

        @Test
        fun `Given TTQ with Reader supports contact chip When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x10.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Contact Chip")
        }
    }

    /**
     * Tests for Byte 3 - Transaction Qualifiers
     */
    class TransactionQualifiersTests {
        @Test
        fun `Given TTQ with Reader is offline only When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x80.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader is Offline Only")
        }

        @Test
        fun `Given TTQ with Online cryptogram required When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x40.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Online Cryptogram Required")
        }

        @Test
        fun `Given TTQ with Receipt required When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x20.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Receipt Required")
        }

        @Test
        fun `Given TTQ with CVM required When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x10.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "CVM Required")
        }
    }

    /**
     * Tests for Byte 4 - Contactless Transaction Limitations
     */
    class ContactlessTransactionLimitationsTests {
        @Test
        fun `Given TTQ with No contactless EMV transaction supported When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte())
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "No Contactless EMV Transaction Supported")
        }

        @Test
        fun `Given TTQ with No contactless magstripe transaction supported When explaining Then shows correct bit explanation`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x00, 0x40.toByte())
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "No Contactless Magstripe Transaction Supported")
        }
    }

    /**
     * General tests
     */
    class GeneralTests {
        @Test
        fun `Given TTQ with all bits set When explaining Then shows all bit explanations`() {
            val ttq = byteArrayOf(
                0xFF.toByte(),
                0xFF.toByte(),
                0xFF.toByte(),
                0xFF.toByte(),
            )
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "EMV Mode Supported")
            assertContains(meaning, "Reader Supports Online PIN")
            assertContains(meaning, "Reader is Offline Only")
            assertContains(meaning, "No Contactless EMV Transaction Supported")
        }

        @Test
        fun `Given TTQ with invalid length When explaining Then throws exception`() {
            val ttq = byteArrayOf(0x00, 0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            }
        }
    }
}
