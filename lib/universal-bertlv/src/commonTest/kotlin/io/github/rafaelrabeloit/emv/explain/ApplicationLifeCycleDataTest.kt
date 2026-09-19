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
    fun givenApplicationLifeCycleDataWithApplicationNotYetActiveWhenExplainingThenShowsCorrectBitExplanation() {
        val data = byteArrayOf(0x80.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Not Yet Active - Application is not yet active")
    }

    @Test
    fun givenApplicationLifeCycleDataWithApplicationActiveWhenExplainingThenShowsCorrectBitExplanation() {
        val data = byteArrayOf(0x40.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Active - Application is active")
    }

    @Test
    fun givenApplicationLifeCycleDataWithApplicationSuspendedWhenExplainingThenShowsCorrectBitExplanation() {
        val data = byteArrayOf(0x20.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Suspended - Application is suspended")
    }

    @Test
    fun givenApplicationLifeCycleDataWithApplicationTerminatedWhenExplainingThenShowsCorrectBitExplanation() {
        val data = byteArrayOf(0x10.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Terminated - Application is terminated")
    }

    @Test
    fun givenApplicationLifeCycleDataWithRfuBitsSetWhenExplainingThenShowsCorrectBitExplanation() {
        val data = byteArrayOf(0x0F.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenApplicationLifeCycleDataWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
        val data = byteArrayOf(0xFF.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "\n").toString()
        assertContains(meaning, "Application Not Yet Active - Application is not yet active")
        assertContains(meaning, "Application Active - Application is active")
        assertContains(meaning, "Application Suspended - Application is suspended")
        assertContains(meaning, "Application Terminated - Application is terminated")
        assertContains(meaning, "RFU - Reserved for Future Use")
    }

    @Test
    fun givenApplicationLifeCycleDataWithInvalidLengthWhenExplainingThenThrowsException() {
        val data = byteArrayOf(0x00, 0x00)
        assertFailsWith<IllegalArgumentException> {
            ApplicationLifeCycleData.explain(data, "\n").toString()
        }
    }

    @Test
    fun givenApplicationLifeCycleDataWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val data = byteArrayOf(0x80.toByte())
        val meaning = ApplicationLifeCycleData.explain(data, "|").toString()
        assertContains(meaning, "Application Not Yet Active - Application is not yet active|")
    }
}
