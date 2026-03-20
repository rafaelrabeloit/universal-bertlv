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
    fun `Given Transaction Status Information with offline data authentication performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Offline Data Authentication Performed - Offline data authentication was performed")
    }

    @Test
    fun `Given Transaction Status Information with offline data authentication failed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Offline Data Authentication Failed - Offline data authentication failed")
    }

    @Test
    fun `Given Transaction Status Information with SDA performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "SDA Performed - Static Data Authentication was performed")
    }

    @Test
    fun `Given Transaction Status Information with DDA performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x10.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "DDA Performed - Dynamic Data Authentication was performed")
    }

    @Test
    fun `Given Transaction Status Information with CDA performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x08.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "CDA Performed - Combined DDA/AC was performed")
    }

    @Test
    fun `Given Transaction Status Information with cardholder verification performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x04.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Performed - Cardholder verification was performed")
    }

    @Test
    fun `Given Transaction Status Information with cardholder verification failed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x02.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Failed - Cardholder verification failed")
    }

    @Test
    fun `Given Transaction Status Information with cardholder verification not performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Cardholder Verification Not Performed - Cardholder verification was not performed")
    }

    @Test
    fun `Given Transaction Status Information with issuer authentication performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x00, 0x80.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Performed - Issuer authentication was performed")
    }

    @Test
    fun `Given Transaction Status Information with issuer authentication failed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x00, 0x40.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Failed - Issuer authentication failed")
    }

    @Test
    fun `Given Transaction Status Information with issuer authentication not performed When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x00, 0x20.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "Issuer Authentication Not Performed - Issuer authentication was not performed")
    }

    @Test
    fun `Given Transaction Status Information with RFU bits set When explaining Then shows correct bit explanation`() {
        val statusInfo = byteArrayOf(0x00, 0x1F.toByte())
        val meaning = TransactionStatusInformation.explain(statusInfo, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given Transaction Status Information with all bits set When explaining Then shows all bit explanations`() {
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
    fun `Given Transaction Status Information with invalid length When explaining Then throws exception`() {
        val statusInfo = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            TransactionStatusInformation.explain(statusInfo, "\n").toString()
        }
    }

    @Test
    fun `Given Transaction Status Information with custom line separator When explaining Then uses correct separator`() {
        val statusInfo = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = TransactionStatusInformation.explain(statusInfo, "|").toString()
        assertContains(meaning, "Offline Data Authentication Performed - Offline data authentication was performed|")
    }
}
