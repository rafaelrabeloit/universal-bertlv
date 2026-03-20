package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class AdditionalTerminalCapabilitiesTest {

    @Test
    fun `Given ATC with cash supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x80.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cash - Cash transactions supported")
    }

    @Test
    fun `Given ATC with goods supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Goods - Goods transactions supported")
    }

    @Test
    fun `Given ATC with services supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x20.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Services - Services transactions supported")
    }

    @Test
    fun `Given ATC with cashback supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x10.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cashback - Cashback transactions supported")
    }

    @Test
    fun `Given ATC with cash deposit supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cash Deposit - Cash deposit supported")
    }

    @Test
    fun `Given ATC with numeric keys supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x00, 0x00, 0x80.toByte(), 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Numeric Keys - Numeric keys supported")
    }

    @Test
    fun `Given ATC with print attendant capability When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte(), 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Print, Attendant - Print capability, attendant")
    }

    @Test
    fun `Given ATC with display cardholder capability When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x00, 0x00, 0x00, 0x08.toByte(), 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Display, Cardholder - Display capability, cardholder")
    }

    @Test
    fun `Given ATC with code table 1 supported When explaining Then shows correct bit explanation`() {
        val atc = byteArrayOf(0x00, 0x00, 0x00, 0x00, 0x01)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Code Table 1 - Code table 1 supported")
    }

    @Test
    fun `Given ATC with all bits set When explaining Then shows all capabilities`() {
        val atc = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte())
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cash - Cash transactions supported")
        assertContains(meaning, "Cash Deposit - Cash deposit supported")
        assertContains(meaning, "Numeric Keys - Numeric keys supported")
        assertContains(meaning, "Print, Attendant - Print capability, attendant")
        assertContains(meaning, "Code Table 1 - Code table 1 supported")
    }

    @Test
    fun `Given ATC with invalid length When explaining Then throws exception`() {
        val atc = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        }
    }
}
