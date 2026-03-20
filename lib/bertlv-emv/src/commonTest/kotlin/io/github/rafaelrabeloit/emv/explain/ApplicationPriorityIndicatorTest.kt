package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Application Priority Indicator explanation functionality.
 * Tests cover all bits in the 1-byte Application Priority Indicator field according to EMV specifications.
 */
class ApplicationPriorityIndicatorTest {

    @Test
    fun givenApplicationPriorityIndicatorWithPriorityBitSetWhenExplainingThenShowsCorrectBitExplanation() {
        val priorityIndicator = byteArrayOf(0x80.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        assertContains(meaning, "Priority - Application has priority")
    }

    @Test
    fun givenApplicationPriorityIndicatorWithRfuBitsSetWhenExplainingThenShowsCorrectBitExplanation() {
        val priorityIndicator = byteArrayOf(0x7F.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenApplicationPriorityIndicatorWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val priorityIndicator = byteArrayOf(0xFF.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        assertContains(meaning, "Priority - Application has priority")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenApplicationPriorityIndicatorWithInvalidLengthWhenExplainingThenThrowsException() {
        val priorityIndicator = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        }
    }

    @Test
    fun givenApplicationPriorityIndicatorWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val priorityIndicator = byteArrayOf(0x80.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "|").toString()
        assertContains(meaning, "Priority - Application has priority|")
    }
}
