package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Cardholder Verification Method (CVM) Results explanation functionality.
 * Tests cover all bits in the 1-byte CVM Results field according to EMV specifications.
 */
class CVMResultsTest {

    @Test
    fun givenCvmResultsWithCvmPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x80.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Performed - Cardholder verification was performed")
    }

    @Test
    fun givenCvmResultsWithCvmFailedWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x40.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Failed - Cardholder verification failed")
    }

    @Test
    fun givenCvmResultsWithCvmNotPerformedWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x20.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Performed - Cardholder verification was not performed")
    }

    @Test
    fun givenCvmResultsWithCvmNotSupportedWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x10.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Supported - Cardholder verification is not supported")
    }

    @Test
    fun givenCvmResultsWithCvmNotRequiredWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x08.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Required - Cardholder verification is not required")
    }

    @Test
    fun givenCvmResultsWithCvmNotAvailableWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x04.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Available - Cardholder verification is not available")
    }

    @Test
    fun givenCvmResultsWithCvmNotApplicableWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x02.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Applicable - Cardholder verification is not applicable")
    }

    @Test
    fun givenCvmResultsWithRfuBitSetWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x01.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenCvmResultsWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val cvmResults = byteArrayOf(0xFF.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Performed - Cardholder verification was performed")
        assertContains(meaning, "CVM Failed - Cardholder verification failed")
        assertContains(meaning, "CVM Not Performed - Cardholder verification was not performed")
        assertContains(meaning, "CVM Not Supported - Cardholder verification is not supported")
        assertContains(meaning, "CVM Not Required - Cardholder verification is not required")
        assertContains(meaning, "CVM Not Available - Cardholder verification is not available")
        assertContains(meaning, "CVM Not Applicable - Cardholder verification is not applicable")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenCvmResultsWithInvalidLengthWhenExplainingThenThrowsException() {
        val cvmResults = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            CVMResults.explain(cvmResults, "\n").toString()
        }
    }

    @Test
    fun givenCvmResultsWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val cvmResults = byteArrayOf(0x80.toByte())
        val meaning = CVMResults.explain(cvmResults, "|").toString()
        assertContains(meaning, "CVM Performed - Cardholder verification was performed|")
    }
}
