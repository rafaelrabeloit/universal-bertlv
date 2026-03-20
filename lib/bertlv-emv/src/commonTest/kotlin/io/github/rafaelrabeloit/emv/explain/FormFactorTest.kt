package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class FormFactorTest {

    @Test
    fun `Given FFI with standard card form factor When explaining Then shows Standard Card`() {
        val ffi = byteArrayOf(0x10.toByte(), 0x00, 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Standard Card")
    }

    @Test
    fun `Given FFI with consumer mobile phone form factor When explaining Then shows Consumer Mobile Phone`() {
        val ffi = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Consumer Mobile Phone")
    }

    @Test
    fun `Given FFI with passcode capable When explaining Then shows correct bit explanation`() {
        val ffi = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Passcode Capable - Passcode capable")
    }

    @Test
    fun `Given FFI with CVV2 present When explaining Then shows correct bit explanation`() {
        val ffi = byteArrayOf(0x00, 0x10.toByte(), 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "CVV2 - CVV2 present")
    }

    @Test
    fun `Given FFI with cloud-based payment When explaining Then shows correct bit explanation`() {
        val ffi = byteArrayOf(0x00, 0x04.toByte(), 0x00, 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Cloud-Based Payment - Cloud-based payment credentials")
    }

    @Test
    fun `Given FFI with Type A contactless interface When explaining Then shows Type A`() {
        val ffi = byteArrayOf(0x00, 0x00, 0x10.toByte(), 0x00)
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Type A")
    }

    @Test
    fun `Given FFI with contact transaction capability When explaining Then shows correct bit explanation`() {
        val ffi = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte())
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Contact - Contact transaction capability")
    }

    @Test
    fun `Given FFI with contactless EMV mode When explaining Then shows correct bit explanation`() {
        val ffi = byteArrayOf(0x00, 0x00, 0x00, 0x40.toByte())
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Contactless EMV - Contactless EMV mode supported")
    }

    @Test
    fun `Given FFI with all bits set When explaining Then shows all capabilities`() {
        val ffi = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte())
        val meaning = FormFactor.explain(ffi, "\n").toString()
        assertContains(meaning, "Passcode Capable - Passcode capable")
        assertContains(meaning, "CVV2 - CVV2 present")
        assertContains(meaning, "Contact - Contact transaction capability")
        assertContains(meaning, "Contactless EMV - Contactless EMV mode supported")
    }

    @Test
    fun `Given FFI with invalid length When explaining Then throws exception`() {
        val ffi = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            FormFactor.explain(ffi, "\n").toString()
        }
    }
}
