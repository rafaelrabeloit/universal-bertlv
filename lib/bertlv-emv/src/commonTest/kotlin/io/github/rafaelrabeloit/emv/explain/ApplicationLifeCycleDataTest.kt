package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for Application Life Cycle Data explanation functionality.
 * Tests cover all bits in the 1-byte Application Life Cycle Data field according to EMV specifications.
 */
class ApplicationLifeCycleDataTest {

    @Test
    fun `Given Application Life Cycle Data with Application Not Yet Active When explaining Then shows correct bit explanation`() {
        val data = byteArrayOf(0x80.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Not Yet Active - Application is not yet active")
    }

    @Test
    fun `Given Application Life Cycle Data with Application Active When explaining Then shows correct bit explanation`() {
        val data = byteArrayOf(0x40.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Active - Application is active")
    }

    @Test
    fun `Given Application Life Cycle Data with Application Suspended When explaining Then shows correct bit explanation`() {
        val data = byteArrayOf(0x20.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Suspended - Application is suspended")
    }

    @Test
    fun `Given Application Life Cycle Data with Application Terminated When explaining Then shows correct bit explanation`() {
        val data = byteArrayOf(0x10.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Terminated - Application is terminated")
    }

    @Test
    fun `Given Application Life Cycle Data with RFU bits set When explaining Then shows correct bit explanation`() {
        val data = byteArrayOf(0x0F.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given Application Life Cycle Data with all bits set When explaining Then shows all bit explanations`() {
        val data = byteArrayOf(0xFF.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Not Yet Active - Application is not yet active")
        assertContains(meaning, "Application Active - Application is active")
        assertContains(meaning, "Application Suspended - Application is suspended")
        assertContains(meaning, "Application Terminated - Application is terminated")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun `Given Application Life Cycle Data with invalid length When explaining Then throws exception`() {
        val data = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationLifeCycleData.explain(data, "\n").toString()
        }
    }

    @Test
    fun `Given Application Life Cycle Data with custom line separator When explaining Then uses correct separator`() {
        val data = byteArrayOf(0x80.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "|").toString()
        assertContains(meaning, "Application Not Yet Active - Application is not yet active|")
    }
}
