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
        assertContains(meaning, "Offline Data Authentication Performed - Offline data authentication was performed")
    }

    @Test
    fun givenTransactionStatusInformationWithOfflineDataAuthenticationFailedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Offline Data Authentication Failed - Offline data authentication failed")
    }

    @Test
    fun givenTransactionStatusInformationWithSdaPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "SDA Performed - Static Data Authentication was performed")
    }

    @Test
    fun givenTransactionStatusInformationWithDdaPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x10.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "DDA Performed - Dynamic Data Authentication was performed")
    }

    @Test
    fun givenTransactionStatusInformationWithCdaPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x08.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "CDA Performed - Combined DDA/AC was performed")
    }

    @Test
    fun givenTransactionStatusInformationWithCardholderVerificationPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x04.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Performed - Cardholder verification was performed")
    }

    @Test
    fun givenTransactionStatusInformationWithCardholderVerificationFailedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x02.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Failed - Cardholder verification failed")
    }

    @Test
    fun givenTransactionStatusInformationWithCardholderVerificationNotPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Not Performed - Cardholder verification was not performed")
    }

    @Test
    fun givenTransactionStatusInformationWithIssuerAuthenticationPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x00, 0x80.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Performed - Issuer authentication was performed")
    }

    @Test
    fun givenTransactionStatusInformationWithIssuerAuthenticationFailedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x00, 0x40.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Failed - Issuer authentication failed")
    }

    @Test
    fun givenTransactionStatusInformationWithIssuerAuthenticationNotPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x00, 0x20.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Not Performed - Issuer authentication was not performed")
    }

    @Test
    fun givenTransactionStatusInformationWithRfuBitsSetWhenExplainingThenShowsCorrectBitExplanation() {
        val statusInfo = byteArrayOf(0x00, 0x1F.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenTransactionStatusInformationWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val statusInfo = byteArrayOf(0xFF.toByte(), 0xFF.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Offline Data Authentication Performed - Offline data authentication was performed")
        assertContains(meaning, "Offline Data Authentication Failed - Offline data authentication failed")
        assertContains(meaning, "SDA Performed - Static Data Authentication was performed")
        assertContains(meaning, "DDA Performed - Dynamic Data Authentication was performed")
        assertContains(meaning, "CDA Performed - Combined DDA/AC was performed")
        assertContains(meaning, "Cardholder Verification Performed - Cardholder verification was performed")
        assertContains(meaning, "Cardholder Verification Failed - Cardholder verification failed")
        assertContains(meaning, "Cardholder Verification Not Performed - Cardholder verification was not performed")
        assertContains(meaning, "Issuer Authentication Performed - Issuer authentication was performed")
        assertContains(meaning, "Issuer Authentication Failed - Issuer authentication failed")
        assertContains(meaning, "Issuer Authentication Not Performed - Issuer authentication was not performed")
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
        assertContains(meaning, "Offline Data Authentication Performed - Offline data authentication was performed|")
    }
}
