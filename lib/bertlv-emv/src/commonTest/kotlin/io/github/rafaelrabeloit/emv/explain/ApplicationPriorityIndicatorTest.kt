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
    fun `Given Application Priority Indicator with priority bit set When explaining Then shows correct bit explanation`() {
        val priorityIndicator = byteArrayOf(0x80.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        assertContains(meaning, "Priority - Application has priority")
    }

    @Test
    fun `Given Application Priority Indicator with RFU bits set When explaining Then shows correct bit explanation`() {
        val priorityIndicator = byteArrayOf(0x7F.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given Application Priority Indicator with all bits set When explaining Then shows all bit explanations`() {
        val priorityIndicator = byteArrayOf(0xFF.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        assertContains(meaning, "Priority - Application has priority")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given Application Priority Indicator with invalid length When explaining Then throws exception`() {
        val priorityIndicator = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationPriorityIndicator.explain(priorityIndicator, "\n").toString()
        }
    }

    @Test
    fun `Given Application Priority Indicator with custom line separator When explaining Then uses correct separator`() {
        val priorityIndicator = byteArrayOf(0x80.toByte())
        val meaning = ApplicationPriorityIndicator.explain(priorityIndicator, "|").toString()
        assertContains(meaning, "Priority - Application has priority|")
    }
}
