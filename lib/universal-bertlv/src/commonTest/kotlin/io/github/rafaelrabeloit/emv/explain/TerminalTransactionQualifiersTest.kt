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
        fun givenTtqWithEmvModeSupportedWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x80.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "EMV Mode Supported")
        }

        @Test
        fun givenTtqWithMagstripeModeSupportedWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Magstripe Mode Supported")
        }

        @Test
        fun givenTtqWithOdaForEmvModeSupportedWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x20.toByte(), 0x00, 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "ODA for EMV Mode Supported")
        }

        @Test
        fun givenTtqWithCdaSupportedWhenExplainingThenShowsCorrectBitExplanation() {
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
        fun givenTtqWithReaderSupportsOnlinePinWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Online PIN")
        }

        @Test
        fun givenTtqWithReaderSupportsSignatureWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x40.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Signature")
        }

        @Test
        fun givenTtqWithReaderSupportsConsumerDeviceCvmWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x20.toByte(), 0x00, 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader Supports Consumer Device CVM")
        }

        @Test
        fun givenTtqWithReaderSupportsContactChipWhenExplainingThenShowsCorrectBitExplanation() {
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
        fun givenTtqWithReaderIsOfflineOnlyWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x00, 0x80.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Reader is Offline Only")
        }

        @Test
        fun givenTtqWithOnlineCryptogramRequiredWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x00, 0x40.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Online Cryptogram Required")
        }

        @Test
        fun givenTtqWithReceiptRequiredWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x00, 0x20.toByte(), 0x00)
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "Receipt Required")
        }

        @Test
        fun givenTtqWithCvmRequiredWhenExplainingThenShowsCorrectBitExplanation() {
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
        fun givenTtqWithNoContactlessEmvTransactionSupportedWhenExplainingThenShowsCorrectBitExplanation() {
            val ttq = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte())
            val meaning = TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            assertContains(meaning, "No Contactless EMV Transaction Supported")
        }

        @Test
        fun givenTtqWithNoContactlessMagstripeTransactionSupportedWhenExplainingThenShowsCorrectBitExplanation() {
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
        fun givenTtqWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
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
        fun givenTtqWithInvalidLengthWhenExplainingThenThrowsException() {
            val ttq = byteArrayOf(0x00, 0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TerminalTransactionQualifiers.explain(ttq, "\n").toString()
            }
        }
    }
}
