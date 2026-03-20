package io.github.rafaelrabeloit.emv.explain.templates

import io.github.rafaelrabeloit.emv.EmvTagDescription
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for CurrencyCode base class functionality.
 * Tests cover the common functionality provided by the CurrencyCode class.
 */
class CurrencyCodeTest {

    /**
     * Test implementation of CurrencyCode for testing purposes.
     */
    private object TestCurrencyCode : CurrencyCode(
        EmvTagDescription.TRANSACTION_CURRENCY_CODE,
    )

    /**
     * Tests for general CurrencyCode functionality
     */
    class GeneralTests {
        @Test
        fun `Given valid currency code When explaining Then shows correct currency description`() {
            val meaning = TestCurrencyCode.explain(840, "\n").toString()
            assertEquals("US Dollar", meaning)
        }

        @Test
        fun `Given invalid currency code When explaining Then shows unknown currency code`() {
            val meaning = TestCurrencyCode.explain(998, "\n").toString()
            assertEquals("Unknown Currency Code", meaning)
        }

        @Test
        fun `Given negative currency code When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                TestCurrencyCode.explain(-1, "\n").toString()
            }
        }

        @Test
        fun `Given currency code above 999 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                TestCurrencyCode.explain(1000, "\n").toString()
            }
        }
    }

    /**
     * Tests for specific currency codes
     */
    class SpecificCurrencyCodeTests {
        @Test
        fun `Given EUR currency code When explaining Then shows Euro description`() {
            val meaning = TestCurrencyCode.explain(978, "\n").toString()
            assertEquals("Euro", meaning)
        }

        @Test
        fun `Given GBP currency code When explaining Then shows Pound Sterling description`() {
            val meaning = TestCurrencyCode.explain(826, "\n").toString()
            assertEquals("Pound Sterling", meaning)
        }

        @Test
        fun `Given JPY currency code When explaining Then shows Yen description`() {
            val meaning = TestCurrencyCode.explain(392, "\n").toString()
            assertEquals("Yen", meaning)
        }
    }
}
