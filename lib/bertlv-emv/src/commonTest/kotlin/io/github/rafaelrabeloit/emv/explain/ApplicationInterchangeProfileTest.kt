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
    fun `Given AIP with CDA supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(
            meaning,
            "CDA Supported - Card supports Combined Dynamic Data Authentication and " +
                "Application Cryptogram Generation",
        )
    }

    @Test
    fun `Given AIP with DDA supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "DDA Supported - Card supports Dynamic Data Authentication")
    }

    @Test
    fun `Given AIP with SDA supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "SDA Supported - Card supports Static Data Authentication")
    }

    @Test
    fun `Given AIP with Cardholder Verification supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x10.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Cardholder Verification is supported")
    }

    @Test
    fun `Given AIP with Terminal Risk Management When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x08.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Terminal Risk Management is to be performed")
    }

    @Test
    fun `Given AIP with Issuer Authentication supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x04.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Issuer Authentication is supported")
    }

    @Test
    fun `Given AIP with On-device Cardholder Verification supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x02.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "On-device Cardholder Verification is supported")
    }

    @Test
    fun `Given AIP with RFU bit set When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given AIP with EMV Mode supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x00, 0x80.toByte())
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "EMV Mode supported")
    }

    @Test
    fun `Given AIP with Contactless EMV Mode supported When explaining Then shows correct bit explanation`() {
        val aip = byteArrayOf(0x00, 0x40.toByte())
        val meaning = ApplicationInterchangeProfile.explain(aip, "\n").toString()
        assertContains(meaning, "Contactless EMV Mode supported")
    }

    @Test
    fun `Given AIP with all bits set When explaining Then shows all bit explanations`() {
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
    fun `Given AIP with invalid length When explaining Then throws exception`() {
        val aip = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationInterchangeProfile.explain(aip, "\n").toString()
        }
    }

    @Test
    fun `Given AIP with custom line separator When explaining Then uses correct separator`() {
        val aip = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = ApplicationInterchangeProfile.explain(aip, "|").toString()
        assertContains(
            meaning,
            "CDA Supported - Card supports Combined Dynamic Data Authentication and " +
                "Application Cryptogram Generation|",
        )
    }
}
