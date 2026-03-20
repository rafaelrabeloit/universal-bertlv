package io.github.rafaelrabeloit.emv.explain.templates

import io.github.rafaelrabeloit.emv.EmvTagDescription
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

/**
 * Test suite for ActionCode base class functionality.
 * Tests cover the common functionality provided by the ActionCode class.
 */
class ActionCodeTest {

    /**
     * Test implementation of ActionCode for testing purposes.
     */
    private object TestActionCode : ActionCode(
        EmvTagDescription.ISSUER_ACTION_CODE_DENIAL,
    )

    /**
     * Tests for general ActionCode functionality
     */
    class GeneralTests {
        @Test
        fun givenActionCodeWithAllBitsSetWhenExplainingThenShowsAllBitExplanations() {
            val actionCode = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte(), 0xFF.toByte())
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "SDA Failed - Static Data Authentication failed")
            assertContains(meaning, "DDA Failed - Dynamic Data Authentication failed")
            assertContains(meaning, "CDA Failed - Combined DDA/AC Generation failed")
        }

        @Test
        fun givenActionCodeWithInvalidLengthWhenExplainingThenThrowsException() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x00, 0x00)
            assertFailsWith<IllegalArgumentException> {
                TestActionCode.explain(actionCode, "\n").toString()
            }
        }

        @Test
        fun givenActionCodeWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
            val actionCode = byteArrayOf(0x80.toByte(), 0x00, 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "|").toString()
            assertContains(meaning, "SDA Failed - Static Data Authentication failed|")
        }
    }

    /**
     * Tests for Byte 1 - Offline Data Authentication
     */
    class OfflineDataAuthenticationTests {
        @Test
        fun givenActionCodeWithSdaFailedWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x80.toByte(), 0x00, 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "SDA Failed - Static Data Authentication failed")
        }

        @Test
        fun givenActionCodeWithIccDataMissingWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x40.toByte(), 0x00, 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "ICC Data Missing - ICC data required for offline processing is missing")
        }

        @Test
        fun givenActionCodeWithCardOnExceptionFileWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x20.toByte(), 0x00, 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(
                meaning,
                "Card Appears on Terminal Exception File - Card is in the terminal's exception file",
            )
        }
    }

    /**
     * Tests for Byte 2 - Cardholder Verification
     */
    class CardholderVerificationTests {
        @Test
        fun givenActionCodeWithDifferentApplicationVersionsWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x80.toByte(), 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "ICC and Terminal Have Different Application Versions")
        }

        @Test
        fun givenActionCodeWithExpiredApplicationWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x40.toByte(), 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Expired Application - Application has expired")
        }

        @Test
        fun givenActionCodeWithApplicationNotYetEffectiveWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x20.toByte(), 0x00, 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Application Not Yet Effective - Application is not yet effective")
        }
    }

    /**
     * Tests for Byte 3 - Transaction Results
     */
    class TransactionResultsTests {
        @Test
        fun givenActionCodeWithFloorLimitExceededWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x80.toByte(), 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Transaction Exceeds Floor Limit")
        }

        @Test
        fun givenActionCodeWithLowerOfflineLimitExceededWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x40.toByte(), 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Lower Consecutive Offline Limit Exceeded")
        }

        @Test
        fun givenActionCodeWithUpperOfflineLimitExceededWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x20.toByte(), 0x00, 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Upper Consecutive Offline Limit Exceeded")
        }
    }

    /**
     * Tests for Byte 4 - Terminal Risk Management
     */
    class TerminalRiskManagementTests {
        @Test
        fun givenActionCodeWithDefaultTdolUsedWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x00, 0x80.toByte(), 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(
                meaning,
                "Default TDOL Used - Default Transaction Certificate Data Object List was used",
            )
        }

        @Test
        fun givenActionCodeWithIssuerAuthenticationFailedWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x00, 0x40.toByte(), 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Issuer Authentication Failed")
        }

        @Test
        fun givenActionCodeWithScriptProcessingFailedWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x00, 0x20.toByte(), 0x00)
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Script Processing Failed Before Final GENERATE AC")
        }
    }

    /**
     * Tests for Byte 5 - Issuer Discretionary
     */
    class IssuerDiscretionaryTests {
        @Test
        fun givenActionCodeWithIssuerDiscretionaryBitsWhenExplainingThenShowsCorrectBitExplanation() {
            val actionCode = byteArrayOf(0x00, 0x00, 0x00, 0x00, 0xFF.toByte())
            val meaning = TestActionCode.explain(actionCode, "\n").toString()
            assertContains(meaning, "Issuer Discretionary - All bits in this byte are reserved for issuer use")
        }
    }
}
