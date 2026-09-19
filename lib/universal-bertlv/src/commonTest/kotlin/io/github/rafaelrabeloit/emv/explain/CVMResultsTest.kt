package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Cardholder Verification Method (CVM) Results explanation functionality.
 * Tests cover the 3-byte CVM Results field (Tag 9F34) according to EMV specifications.
 *
 * Byte 1: CVM Performed (method code)
 * Byte 2: CVM Condition Code
 * Byte 3: CVM Result
 */
class CVMResultsTest {

    // --- Byte 1: CVM Performed ---

    @Test
    fun givenCvmResultsWithApplySucceedingRuleWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x40.toByte(), 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Apply succeeding CV Rule if this CVM is unsuccessful")
    }

    @Test
    fun givenCvmResultsWithFailOnUnsuccessfulWhenExplainingThenShowsCorrectBitExplanation() {
        val cvmResults = byteArrayOf(0x00.toByte(), 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Fail cardholder verification if this CVM is unsuccessful")
    }

    @Test
    fun givenCvmResultsWithPlaintextPinWhenExplainingThenShowsCorrectMethod() {
        // CVM Type = 000001 (bits 2-7) = Plaintext PIN by ICC
        // 000001 in bits 2-7 -> byte value: 0b0_0_000001 = 0x01
        val cvmResults = byteArrayOf(0x01.toByte(), 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Plaintext PIN verification performed by ICC")
    }

    @Test
    fun givenCvmResultsWithSignatureWhenExplainingThenShowsCorrectMethod() {
        // CVM Type = 011110 (bits 2-7) = Signature
        // 011110 in bits 2-7 -> 0b0_0_011110 = 0x1E
        val cvmResults = byteArrayOf(0x1E.toByte(), 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Signature (paper)")
    }

    @Test
    fun givenCvmResultsWithNoCvmRequiredWhenExplainingThenShowsCorrectMethod() {
        // CVM Type = 011111 (bits 2-7) = No CVM required
        // 0b0_0_011111 = 0x1F
        val cvmResults = byteArrayOf(0x1F.toByte(), 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "No CVM required")
    }

    // --- Byte 2: CVM Condition ---

    @Test
    fun givenCvmResultsWithConditionAlwaysWhenExplainingThenShowsCorrectCondition() {
        val cvmResults = byteArrayOf(0x00, 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Always")
    }

    @Test
    fun givenCvmResultsWithConditionTerminalSupportsCvmWhenExplainingThenShowsCorrectCondition() {
        val cvmResults = byteArrayOf(0x00, 0x03, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "If terminal supports the CVM")
    }

    // --- Byte 3: CVM Result ---

    @Test
    fun givenCvmResultsWithResultUnknownWhenExplainingThenShowsCorrectResult() {
        val cvmResults = byteArrayOf(0x00, 0x00, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        // Byte 3 has enum value 0x00 = Unknown
        assertContains(meaning, "Byte 3 - CVM Result")
    }

    @Test
    fun givenCvmResultsWithResultSuccessfulWhenExplainingThenShowsCorrectResult() {
        val cvmResults = byteArrayOf(0x00, 0x00, 0x02)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Successful")
    }

    @Test
    fun givenCvmResultsWithResultFailedWhenExplainingThenShowsCorrectResult() {
        val cvmResults = byteArrayOf(0x00, 0x00, 0x01)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Failed")
    }

    // --- Regression: real-world 3-byte CVM Results ---

    @Test
    fun givenRealWorldCvmResults420300WhenExplainingThenDoesNotThrow() {
        // This is the exact value from the production bug:
        // Tag 9F34 with value 42 03 00
        // Byte 1: 0x42 = 0b01000010 -> Apply succeeding rule (b7=1), CVM type=000010 (Enciphered PIN online)
        // Byte 2: 0x03 -> Condition: If terminal supports the CVM
        // Byte 3: 0x00 -> Result: Unknown
        val cvmResults = byteArrayOf(0x42.toByte(), 0x03, 0x00)
        val meaning = CVMResults.explain(cvmResults, "\n").toString()
        assertContains(meaning, "Apply succeeding CV Rule if this CVM is unsuccessful")
        assertContains(meaning, "Enciphered PIN verified online")
        assertContains(meaning, "If terminal supports the CVM")
    }

    // --- Invalid length ---

    @Test
    fun givenCvmResultsWithInvalidLengthWhenExplainingThenThrowsException() {
        val cvmResults = byteArrayOf(0x00)
        assertFailsWith<IllegalArgumentException> {
            CVMResults.explain(cvmResults, "\n").toString()
        }
    }

    @Test
    fun givenCvmResultsWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val cvmResults = byteArrayOf(0x42.toByte(), 0x03, 0x02)
        val meaning = CVMResults.explain(cvmResults, "|").toString()
        assertContains(meaning, "Successful")
    }
}
