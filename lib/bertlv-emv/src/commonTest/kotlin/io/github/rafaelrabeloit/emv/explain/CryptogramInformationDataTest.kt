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
    fun givenCidWithAacCryptogramWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Application Authentication Cryptogram (AAC)")
    }

    @Test
    fun givenCidWithArqcCryptogramWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x01)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Authorization Request Cryptogram (ARQC)")
    }

    @Test
    fun givenCidWithTcCryptogramWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x02)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Transaction Certificate (TC)")
    }

    @Test
    fun givenCidWithRfuCryptogramWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x03)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Reserved for Future Use")
    }

    @Test
    fun givenCidWithAtcProvidedWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x04)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Application Transaction Counter (ATC) - ATC provided")
    }

    @Test
    fun givenCidWithAtcNotProvidedWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Application Transaction Counter (ATC) - ATC not provided")
    }

    @Test
    fun givenCidWithIadProvidedWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x08)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Issuer Application Data (IAD) - IAD provided")
    }

    @Test
    fun givenCidWithIadNotProvidedWhenExplainingThenShowsCorrectBitExplanation() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Issuer Application Data (IAD) - IAD not provided")
    }

    @Test
    fun givenCidWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val cid = byteArrayOf(0xFF.toByte())
        val meaning = CryptogramInformationData.explain(cid, "\n").toString()
        assertContains(meaning, "Reserved for Future Use")
        assertContains(meaning, "Application Transaction Counter (ATC) - ATC provided")
        assertContains(meaning, "Issuer Application Data (IAD) - IAD provided")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenCidWithInvalidLengthWhenExplainingThenThrowsException() {
        val cid = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            CryptogramInformationData.explain(cid, "\n").toString()
        }
    }

    @Test
    fun givenCidWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val cid = byteArrayOf(0x00)
        val meaning = CryptogramInformationData.explain(cid, "|").toString()
        assertContains(meaning, "Application Authentication Cryptogram (AAC)|")
    }
}
