package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for CVM List (Tag 8E) explanation functionality.
 * Tests cover CVM rule parsing, amount extraction, and condition codes.
 */
class CvmListTest {

    /**
     * Tests for amount extraction from CVM List header
     */
    class AmountExtractionTests {
        @Test
        fun givenCvmListWithZeroAmountsAndNoRulesWhenExplainingThenShowsAmounts() {
            // 8 bytes: Amount X = 0, Amount Y = 0, no rules
            val value = byteArrayOf(0, 0, 0, 0, 0, 0, 0, 0)
            val result = CvmList.explain(value, "\n").toString()
            assertContains(result, "Amount X: 0")
            assertContains(result, "Amount Y: 0")
            assertContains(result, "No CVM rules defined")
        }

        @Test
        fun givenCvmListWithNonZeroAmountsWhenExplainingThenShowsCorrectAmounts() {
            // Amount X = 1000 (0x000003E8), Amount Y = 5000 (0x00001388)
            val value = byteArrayOf(
                0x00, 0x00, 0x03, 0xE8.toByte(),
                0x00, 0x00, 0x13, 0x88.toByte(),
                0x01, 0x00, // Rule: plaintext PIN, condition always
            )
            val result = CvmList.explain(value, "\n").toString()
            assertContains(result, "Amount X: 1000")
            assertContains(result, "Amount Y: 5000")
        }
    }

    /**
     * Tests for CVM code descriptions
     */
    class CvmCodeTests {
        @Test
        fun givenRuleWithFailCvmProcessingWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x00)
            assertEquals("Fail CVM processing", result)
        }

        @Test
        fun givenRuleWithPlaintextPinByIccWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x01)
            assertContains(result, "Plaintext PIN")
            assertContains(result, "ICC")
        }

        @Test
        fun givenRuleWithEncipheredPinOnlineWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x02)
            assertContains(result, "Enciphered PIN")
            assertContains(result, "online")
        }

        @Test
        fun givenRuleWithPlaintextPinAndSignatureWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x03)
            assertContains(result, "Plaintext PIN")
            assertContains(result, "signature")
        }

        @Test
        fun givenRuleWithEncipheredPinByIccWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x04)
            assertContains(result, "Enciphered PIN")
            assertContains(result, "ICC")
        }

        @Test
        fun givenRuleWithEncipheredPinAndSignatureWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x05)
            assertContains(result, "Enciphered PIN")
            assertContains(result, "signature")
        }

        @Test
        fun givenRuleWithSignatureWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x1E)
            assertContains(result, "Signature")
        }

        @Test
        fun givenRuleWithNoCvmRequiredWhenExplainingThenDescribesCorrectly() {
            val result = CvmList.describeCvmCode(0x1F)
            assertEquals("No CVM required", result)
        }
    }

    /**
     * Tests for CVM condition code descriptions
     */
    class CvmConditionTests {
        @Test
        fun givenConditionAlwaysWhenExplainingThenDescribesCorrectly() {
            assertEquals("Always", CvmList.describeCvmCondition(0x00))
        }

        @Test
        fun givenConditionUnattendedCashWhenExplainingThenDescribesCorrectly() {
            assertContains(
                CvmList.describeCvmCondition(0x01),
                "unattended cash",
            )
        }

        @Test
        fun givenConditionTerminalSupportsCvmWhenExplainingThenDescribesCorrectly() {
            assertContains(
                CvmList.describeCvmCondition(0x03),
                "terminal supports the CVM",
            )
        }

        @Test
        fun givenConditionUnderXValueWhenExplainingThenDescribesCorrectly() {
            assertContains(
                CvmList.describeCvmCondition(0x06),
                "under X value",
            )
        }

        @Test
        fun givenConditionOverXValueWhenExplainingThenDescribesCorrectly() {
            assertContains(
                CvmList.describeCvmCondition(0x07),
                "over X value",
            )
        }

        @Test
        fun givenReservedConditionWhenExplainingThenDescribesAsReserved() {
            assertContains(
                CvmList.describeCvmCondition(0x0A),
                "Reserved",
            )
        }

        @Test
        fun givenPaymentSystemConditionWhenExplainingThenDescribesAsReserved() {
            assertContains(
                CvmList.describeCvmCondition(0x80),
                "Reserved",
            )
        }
    }

    /**
     * Tests for full CVM List rule parsing
     */
    class RuleParsingTests {
        @Test
        @Suppress("MagicNumber")
        fun givenCvmListWithSingleRuleWhenExplainingThenShowsRuleDetails() {
            // Amount X = 0, Amount Y = 0
            // Rule: 0x42 = apply next + enciphered PIN online, condition 0x00 = always
            val value = byteArrayOf(
                0, 0, 0, 0, 0, 0, 0, 0,
                0x42, 0x00,
            )
            val result = CvmList.explain(value, "\n").toString()
            assertContains(result, "Rule 1:")
            assertContains(result, "Enciphered PIN verified online")
            assertContains(result, "Apply succeeding CV Rule")
            assertContains(result, "Condition: Always")
        }

        @Test
        @Suppress("MagicNumber")
        fun givenCvmListWithFailOnUnsuccessfulRuleWhenExplainingThenShowsFail() {
            // Rule: 0x02 = do NOT apply next + enciphered PIN online
            val value = byteArrayOf(
                0, 0, 0, 0, 0, 0, 0, 0,
                0x02, 0x00,
            )
            val result = CvmList.explain(value, "\n").toString()
            assertContains(result, "Fail cardholder verification")
        }

        @Test
        @Suppress("MagicNumber")
        fun givenCvmListWithMultipleRulesWhenExplainingThenShowsAllRules() {
            // Rule 1: 0x42 = apply next + enciphered PIN online, always
            // Rule 2: 0x5E = apply next + signature, always
            // Rule 3: 0x1F = no CVM required (fail if unsuccessful), always
            val value = byteArrayOf(
                0, 0, 0, 0, 0, 0, 0, 0,
                0x42, 0x00,
                0x5E.toByte(), 0x00,
                0x1F, 0x00,
            )
            val result = CvmList.explain(value, "\n").toString()
            assertContains(result, "Rule 1:")
            assertContains(result, "Rule 2:")
            assertContains(result, "Rule 3:")
            assertContains(result, "Enciphered PIN verified online")
            assertContains(result, "Signature")
            assertContains(result, "No CVM required")
        }

        @Test
        @Suppress("MagicNumber")
        fun givenTypicalVisaCvmListWhenExplainingThenParsesCorrectly() {
            // Real-world example: Amount X=5000, Amount Y=10000
            // Rule 1: Enciphered PIN online, apply next, if terminal supports
            // Rule 2: Signature, apply next, always
            // Rule 3: No CVM required, fail if unsuccessful, always
            val value = byteArrayOf(
                0x00, 0x00, 0x13, 0x88.toByte(), // Amount X = 5000
                0x00, 0x00, 0x27, 0x10, // Amount Y = 10000
                0x42, 0x03, // Enciphered PIN, if supported
                0x5E.toByte(), 0x00, // Signature, always
                0x1F, 0x00, // No CVM required, always
            )
            val result = CvmList.explain(value, "\n").toString()
            assertContains(result, "Amount X: 5000")
            assertContains(result, "Amount Y: 10000")
            assertContains(result, "Enciphered PIN verified online")
            assertContains(result, "terminal supports the CVM")
            assertContains(result, "Signature")
            assertContains(result, "No CVM required")
        }
    }

    /**
     * Tests for invalid input
     */
    class InvalidInputTests {
        @Test
        fun givenEmptyByteArrayWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                CvmList.explain(byteArrayOf(), "\n")
            }
        }

        @Test
        fun givenByteArrayTooShortWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                CvmList.explain(ByteArray(7), "\n")
            }
        }

        @Test
        fun givenByteArrayWithOddRuleBytesWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                CvmList.explain(ByteArray(9), "\n")
            }
        }
    }
}
