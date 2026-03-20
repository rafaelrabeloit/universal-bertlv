package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Cryptogram Information Data (CID) explanation functionality.
 * Tests cover all bits in the 1-byte CID field according to EMV specifications.
 */
class CryptogramInformationDataTest {

    @Test
    fun `Given CID with AAC cryptogram When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Application Authentication Cryptogram (AAC)")
    }

    @Test
    fun `Given CID with ARQC cryptogram When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x01)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Authorization Request Cryptogram (ARQC)")
    }

    @Test
    fun `Given CID with TC cryptogram When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x02)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Transaction Certificate (TC)")
    }

    @Test
    fun `Given CID with RFU cryptogram When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x03)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Reserved for Future Use")
    }

    @Test
    fun `Given CID with ATC provided When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x04)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Application Transaction Counter (ATC) - ATC provided")
    }

    @Test
    fun `Given CID with ATC not provided When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Application Transaction Counter (ATC) - ATC not provided")
    }

    @Test
    fun `Given CID with IAD provided When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x08)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Issuer Application Data (IAD) - IAD provided")
    }

    @Test
    fun `Given CID with IAD not provided When explaining Then shows correct bit explanation`() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Issuer Application Data (IAD) - IAD not provided")
    }

    @Test
    fun `Given CID with all bits set When explaining Then shows all bit explanations`() {
        val cid = byteArrayOf(0xFF.toByte())
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Reserved for Future Use")
        assertContains(meaning, "Application Transaction Counter (ATC) - ATC provided")
        assertContains(meaning, "Issuer Application Data (IAD) - IAD provided")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given CID with invalid length When explaining Then throws exception`() {
        val cid = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            CryptogramInformationData.explain(cid, "\n").toString()
        }
    }

    @Test
    fun `Given CID with custom line separator When explaining Then uses correct separator`() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "|").toString()
        assertContains(meaning, "Application Authentication Cryptogram (AAC)|")
    }
}
