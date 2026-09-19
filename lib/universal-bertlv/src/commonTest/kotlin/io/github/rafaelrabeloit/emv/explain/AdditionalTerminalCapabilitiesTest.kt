package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class AdditionalTerminalCapabilitiesTest {

    @Test
    fun givenAtcWithCashSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x80.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cash - Cash transactions supported")
    }

    @Test
    fun givenAtcWithGoodsSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Goods - Goods transactions supported")
    }

    @Test
    fun givenAtcWithServicesSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x20.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Services - Services transactions supported")
    }

    @Test
    fun givenAtcWithCashbackSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x10.toByte(), 0x00, 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cashback - Cashback transactions supported")
    }

    @Test
    fun givenAtcWithCashDepositSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cash Deposit - Cash deposit supported")
    }

    @Test
    fun givenAtcWithNumericKeysSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x00, 0x00, 0x80.toByte(), 0x00, 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Numeric Keys - Numeric keys supported")
    }

    @Test
    fun givenAtcWithPrintAttendantCapabilityWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte(), 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Print, Attendant - Print capability, attendant")
    }

    @Test
    fun givenAtcWithDisplayCardholderCapabilityWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x00, 0x00, 0x00, 0x08.toByte(), 0x00)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Display, Cardholder - Display capability, cardholder")
    }

    @Test
    fun givenAtcWithCodeTable1SupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val atc = byteArrayOf(0x00, 0x00, 0x00, 0x00, 0x01)
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Code Table 1 - Code table 1 supported")
    }

    @Test
    fun givenAtcWithAllBitsSetWhenExplainingThenShowsAllCapabilities() {
        val atc = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte())
        val meaning = AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        assertContains(meaning, "Cash - Cash transactions supported")
        assertContains(meaning, "Cash Deposit - Cash deposit supported")
        assertContains(meaning, "Numeric Keys - Numeric keys supported")
        assertContains(meaning, "Print, Attendant - Print capability, attendant")
        assertContains(meaning, "Code Table 1 - Code table 1 supported")
    }

    @Test
    fun givenAtcWithInvalidLengthWhenExplainingThenThrowsException() {
        val atc = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            AdditionalTerminalCapabilities.explain(atc, "\n").toString()
        }
    }
}
