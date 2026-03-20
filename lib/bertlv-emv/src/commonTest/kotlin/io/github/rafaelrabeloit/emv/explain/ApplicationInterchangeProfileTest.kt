package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Application Interchange Profile (AIP) explanation functionality.
 * Tests cover all bits in the 2-byte AIP field according to EMV specifications.
 */
class ApplicationInterchangeProfileTest {

    @Test
    fun givenAipWithCdaSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(
            meaning,
            "CDA Supported - Card supports Combined Dynamic Data Authentication and " +
                "Application Cryptogram Generation",
        )
    }

    @Test
    fun givenAipWithDdaSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "DDA Supported - Card supports Dynamic Data Authentication")
    }

    @Test
    fun givenAipWithSdaSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "SDA Supported - Card supports Static Data Authentication")
    }

    @Test
    fun givenAipWithCardholderVerificationSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x10.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Cardholder Verification is supported")
    }

    @Test
    fun givenAipWithTerminalRiskManagementWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x08.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Terminal Risk Management is to be performed")
    }

    @Test
    fun givenAipWithIssuerAuthenticationSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x04.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Issuer Authentication is supported")
    }

    @Test
    fun givenAipWithOnDeviceCardholderVerificationSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x02.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "On-device Cardholder Verification is supported")
    }

    @Test
    fun givenAipWithRfuBitSetWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenAipWithEmvModeSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x00, 0x80.toByte())
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "EMV Mode supported")
    }

    @Test
    fun givenAipWithContactlessEmvModeSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val aip = byteArrayOf(0x00, 0x40.toByte())
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Contactless EMV Mode supported")
    }

    @Test
    fun givenAipWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val aip = byteArrayOf(0xFF.toByte(), 0xFF.toByte())
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(
            meaning,
            "CDA Supported - Card supports Combined Dynamic Data Authentication and " +
                "Application Cryptogram Generation",
        )
        assertContains(meaning, "DDA Supported - Card supports Dynamic Data Authentication")
        assertContains(meaning, "SDA Supported - Card supports Static Data Authentication")
        assertContains(meaning, "Cardholder Verification is supported")
        assertContains(meaning, "Terminal Risk Management is to be performed")
        assertContains(meaning, "Issuer Authentication is supported")
        assertContains(meaning, "On-device Cardholder Verification is supported")
        assertContains(meaning, "RFU - Reserved for Future Use")
        assertContains(meaning, "EMV Mode supported")
        assertContains(meaning, "Contactless EMV Mode supported")
    }

    @Test
    fun givenAipWithInvalidLengthWhenExplainingThenThrowsException() {
        val aip = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationInterchangeProfile.explain(aip, "\n").toString()
        }
    }

    @Test
    fun givenAipWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val aip = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "|").toString()
        assertContains(
            meaning,
            "CDA Supported - Card supports Combined Dynamic Data Authentication and " +
                "Application Cryptogram Generation|",
        )
    }
}
