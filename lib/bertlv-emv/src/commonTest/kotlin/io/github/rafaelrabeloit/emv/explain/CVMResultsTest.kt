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
    fun `Given CVM Results with CVM performed When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x80.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Performed - Cardholder verification was performed")
    }

    @Test
    fun `Given CVM Results with CVM failed When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x40.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Failed - Cardholder verification failed")
    }

    @Test
    fun `Given CVM Results with CVM not performed When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x20.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Performed - Cardholder verification was not performed")
    }

    @Test
    fun `Given CVM Results with CVM not supported When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x10.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Supported - Cardholder verification is not supported")
    }

    @Test
    fun `Given CVM Results with CVM not required When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x08.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Required - Cardholder verification is not required")
    }

    @Test
    fun `Given CVM Results with CVM not available When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x04.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Available - Cardholder verification is not available")
    }

    @Test
    fun `Given CVM Results with CVM not applicable When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x02.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "CVM Not Applicable - Cardholder verification is not applicable")
    }

    @Test
    fun `Given CVM Results with RFU bit set When explaining Then shows correct bit explanation`() {
        val cvmResults = byteArrayOf(0x01.toByte())
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given CVM Results with all bits set When explaining Then shows all bit explanations`() {
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
    fun `Given CVM Results with invalid length When explaining Then throws exception`() {
        val cvmResults = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            CVMResults.explain(cvmResults, "\n").toString()
        }
    }

    @Test
    fun `Given CVM Results with custom line separator When explaining Then uses correct separator`() {
        val cvmResults = byteArrayOf(0x80.toByte())
        val meaning = CVMResults.explain(cvmResults, "|").toString()
        assertContains(meaning, "CVM Performed - Cardholder verification was performed|")
    }
}
