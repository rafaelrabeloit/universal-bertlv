package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Application Usage Control explanation functionality.
 * Tests cover all bits in the 2-byte Application Usage Control field according to EMV specifications.
 */
class ApplicationUsageControlTest {

    @Test
    fun givenApplicationUsageControlWithDomesticCashTransactionsAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "Domestic Cash Transactions - Domestic cash transactions are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithInternationalCashTransactionsAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x40.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "International Cash Transactions - International cash transactions are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithDomesticGoodsAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x20.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "Domestic Goods - Domestic goods purchases are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithInternationalGoodsAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x10.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "International Goods - International goods purchases are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithDomesticServicesAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x08.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "Domestic Services - Domestic services purchases are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithInternationalServicesAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x04.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "International Services - International services purchases are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithDomesticAtmAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x02.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "Domestic ATM - Domestic ATM transactions are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithInternationalAtmAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x01.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "International ATM - International ATM transactions are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithDomesticCashbackAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x00, 0x80.toByte())
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "Domestic Cashback - Domestic cashback transactions are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithInternationalCashbackAllowedWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x00, 0x40.toByte())
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "International Cashback - International cashback transactions are allowed")
    }

    @Test
    fun givenApplicationUsageControlWithRfuBitsSetWhenExplainingThenShowsCorrectBitExplanation() {
        val auc = byteArrayOf(0x00, 0x3F.toByte())
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenApplicationUsageControlWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val auc = byteArrayOf(0xFF.toByte(), 0xFF.toByte())
        val meaning = ApplicationUsageControl.explain(auc, "\n").toString()
        assertContains(meaning, "Domestic Cash Transactions - Domestic cash transactions are allowed")
        assertContains(meaning, "International Cash Transactions - International cash transactions are allowed")
        assertContains(meaning, "Domestic Goods - Domestic goods purchases are allowed")
        assertContains(meaning, "International Goods - International goods purchases are allowed")
        assertContains(meaning, "Domestic Services - Domestic services purchases are allowed")
        assertContains(meaning, "International Services - International services purchases are allowed")
        assertContains(meaning, "Domestic ATM - Domestic ATM transactions are allowed")
        assertContains(meaning, "International ATM - International ATM transactions are allowed")
        assertContains(meaning, "Domestic Cashback - Domestic cashback transactions are allowed")
        assertContains(meaning, "International Cashback - International cashback transactions are allowed")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenApplicationUsageControlWithInvalidLengthWhenExplainingThenThrowsException() {
        val auc = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationUsageControl.explain(auc, "\n").toString()
        }
    }

    @Test
    fun givenApplicationUsageControlWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val auc = byteArrayOf(0x80.toByte(), 0x00)
        val meaning = ApplicationUsageControl.explain(auc, "|").toString()
        assertContains(meaning, "Domestic Cash Transactions - Domestic cash transactions are allowed|")
    }
}
