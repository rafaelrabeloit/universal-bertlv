package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Transaction Status Information explanation functionality.
 * Tests cover all bits in the 2-byte Transaction Status Information field according to EMV specifications.
 */
class TransactionStatusInformationTest {

    @Test
    fun givenTransactionStatusInformationWithOfflineDataAuthenticationPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Offline Data Authentication Was Performed")
    }

    @Test
    fun givenTransactionStatusInformationWithCardholderVerificationPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Was Performed")
    }

    @Test
    fun givenTransactionStatusInformationWithCardRiskManagementPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Card Risk Management Was Performed")
    }

    @Test
    fun givenTransactionStatusInformationWithIssuerAuthenticationPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x10.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Was Performed")
    }

    @Test
    fun givenTransactionStatusInformationWithTerminalRiskManagementPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x08.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Terminal Risk Management Was Performed")
    }

    @Test
    fun givenTransactionStatusInformationWithScriptProcessingPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x04.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Script Processing Was Performed")
    }

    @Test
    fun givenTransactionStatusInformationWithRfuBitsSetWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x03.toByte(), 0x80.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenTransactionStatusInformationWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val statusInfo = byteArrayOf(0xFF.toByte(), 0xFF.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Offline Data Authentication Was Performed")
        assertContains(meaning, "Cardholder Verification Was Performed")
        assertContains(meaning, "Card Risk Management Was Performed")
        assertContains(meaning, "Issuer Authentication Was Performed")
        assertContains(meaning, "Terminal Risk Management Was Performed")
        assertContains(meaning, "Script Processing Was Performed")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenTransactionStatusInformationWithInvalidLengthWhenExplainingThenThrowsException() {
        val statusInfo = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            TransactionStatusInformation.explain(statusInfo, "\n").toString()
        }
    }

    @Test
    fun givenTransactionStatusInformationWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val statusInfo = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "|").toString()
        assertContains(meaning, "Offline Data Authentication Was Performed|")
    }
}
