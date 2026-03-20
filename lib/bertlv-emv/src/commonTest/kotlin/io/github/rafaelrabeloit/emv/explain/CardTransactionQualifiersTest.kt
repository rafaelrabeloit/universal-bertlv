package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class CardTransactionQualifiersTest {

    @Test
    fun givenCtqWithOnlineCryptogramRequiredWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Online Cryptogram Required - Online cryptogram required")
    }

    @Test
    fun givenCtqWithCvmRequiredWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "CVM Required - CVM required")
    }

    @Test
    fun givenCtqWithContactChipOfflinePinRequiredWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "(Contact Chip) Offline PIN Required")
    }

    @Test
    fun givenCtqWithGoOnlineIfOdaFailsWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Go Online If Offline Data Authentication Fails And Reader Is Online Capable")
    }

    @Test
    fun givenCtqWithOnlinePinRequiredWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x00, 0x80.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Online PIN Required - Online PIN required")
    }

    @Test
    fun givenCtqWithSignatureRequiredWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x00, 0x40.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Signature Required - Signature required")
    }

    @Test
    fun givenCtqWithIssuerUpdateProcessingSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x00, 0x20.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Issuer Update Processing Supported - Issuer update processing supported")
    }

    @Test
    fun givenCtqWithConsumerDeviceCvmPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val ctq = byteArrayOf(0x00, 0x10.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Consumer Device CVM Performed - Consumer device CVM performed")
    }

    @Test
    fun givenCtqWithAllBitsSetWhenExplainingThenShowsAllCapabilities() {
        val ctq = byteArrayOf(0xFF.toByte(), 0xFF.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Online Cryptogram Required - Online cryptogram required")
        assertContains(meaning, "CVM Required - CVM required")
        assertContains(meaning, "Online PIN Required - Online PIN required")
        assertContains(meaning, "Consumer Device CVM Performed - Consumer device CVM performed")
    }

    @Test
    fun givenCtqWithInvalidLengthWhenExplainingThenThrowsException() {
        val ctq = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            CardTransactionQualifiers.explain(ctq, "\n").toString()
        }
    }
}
