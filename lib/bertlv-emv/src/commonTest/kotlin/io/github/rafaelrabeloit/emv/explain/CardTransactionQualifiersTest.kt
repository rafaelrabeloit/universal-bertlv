package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class CardTransactionQualifiersTest {

    @Test
    fun `Given CTQ with online cryptogram required When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Online Cryptogram Required - Online cryptogram required")
    }

    @Test
    fun `Given CTQ with CVM required When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "CVM Required - CVM required")
    }

    @Test
    fun `Given CTQ with contact chip offline PIN required When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "(Contact Chip) Offline PIN Required")
    }

    @Test
    fun `Given CTQ with go online if ODA fails When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Go Online If Offline Data Authentication Fails And Reader Is Online Capable")
    }

    @Test
    fun `Given CTQ with online PIN required When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x00, 0x80.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Online PIN Required - Online PIN required")
    }

    @Test
    fun `Given CTQ with signature required When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x00, 0x40.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Signature Required - Signature required")
    }

    @Test
    fun `Given CTQ with issuer update processing supported When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x00, 0x20.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Issuer Update Processing Supported - Issuer update processing supported")
    }

    @Test
    fun `Given CTQ with consumer device CVM performed When explaining Then shows correct bit explanation`() {
        val ctq = byteArrayOf(0x00, 0x10.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Consumer Device CVM Performed - Consumer device CVM performed")
    }

    @Test
    fun `Given CTQ with all bits set When explaining Then shows all capabilities`() {
        val ctq = byteArrayOf(0xFF.toByte(), 0xFF.toByte())
        val meaning = CardTransactionQualifiers.explain(ctq, "\n").toString()
        assertContains(meaning, "Online Cryptogram Required - Online cryptogram required")
        assertContains(meaning, "CVM Required - CVM required")
        assertContains(meaning, "Online PIN Required - Online PIN required")
        assertContains(meaning, "Consumer Device CVM Performed - Consumer device CVM performed")
    }

    @Test
    fun `Given CTQ with invalid length When explaining Then throws exception`() {
        val ctq = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            CardTransactionQualifiers.explain(ctq, "\n").toString()
        }
    }
}
