package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class FormFactorTest {

    @Test
    fun givenFfiWithStandardCardFormFactorWhenExplainingThenShowsStandardCard() {
        val ffi = byteArrayOf(0x10.toByte(), 0x00, 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Standard Card")
    }

    @Test
    fun givenFfiWithConsumerMobilePhoneFormFactorWhenExplainingThenShowsConsumerMobilePhone() {
        val ffi = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Consumer Mobile Phone")
    }

    @Test
    fun givenFfiWithPasscodeCapableWhenExplainingThenShowsCorrectBitExplanation() {
        val ffi = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Passcode Capable - Passcode capable")
    }

    @Test
    fun givenFfiWithCvv2PresentWhenExplainingThenShowsCorrectBitExplanation() {
        val ffi = byteArrayOf(0x00, 0x10.toByte(), 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "CVV2 - CVV2 present")
    }

    @Test
    fun givenFfiWithCloudBasedPaymentWhenExplainingThenShowsCorrectBitExplanation() {
        val ffi = byteArrayOf(0x00, 0x04.toByte(), 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Cloud-Based Payment - Cloud-based payment credentials")
    }

    @Test
    fun givenFfiWithTypeAContactlessInterfaceWhenExplainingThenShowsTypeA() {
        val ffi = byteArrayOf(0x00, 0x00, 0x10.toByte(), 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Type A")
    }

    @Test
    fun givenFfiWithContactTransactionCapabilityWhenExplainingThenShowsCorrectBitExplanation() {
        val ffi = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte())
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Contact - Contact transaction capability")
    }

    @Test
    fun givenFfiWithContactlessEmvModeWhenExplainingThenShowsCorrectBitExplanation() {
        val ffi = byteArrayOf(0x00, 0x00, 0x00, 0x40.toByte())
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Contactless EMV - Contactless EMV mode supported")
    }

    @Test
    fun givenFfiWithAllBitsSetWhenExplainingThenShowsAllCapabilities() {
        val ffi = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte())
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Passcode Capable - Passcode capable")
        assertContains(meaning, "CVV2 - CVV2 present")
        assertContains(meaning, "Contact - Contact transaction capability")
        assertContains(meaning, "Contactless EMV - Contactless EMV mode supported")
    }

    @Test
    fun givenFfiWithInvalidLengthWhenExplainingThenThrowsException() {
        val ffi = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            FormFactor.explain(ffi, "\n").toString()
        }
    }
}
