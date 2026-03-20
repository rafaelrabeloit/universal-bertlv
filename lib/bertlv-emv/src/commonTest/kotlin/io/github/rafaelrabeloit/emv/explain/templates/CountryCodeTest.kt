package io.github.rafaelrabeloit.emv.explain.templates

import io.github.rafaelrabeloit.emv.EmvTagDescription
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for CountryCode base class functionality.
 * Tests cover the common functionality provided by the CountryCode class.
 */
class CountryCodeTest {

    /**
     * Test implementation of CountryCode for testing purposes.
     */
    private object TestCountryCode : CountryCode(
        EmvTagDescription.ISSUER_COUNTRY_CODE,
    )

    /**
     * Tests for general CountryCode functionality
     */
    class GeneralTests {
        @Test
        fun `Given valid country code When explaining Then shows correct country description`() {
            val meaning = TestCountryCode.explain(840, "\n").toString()
            assertEquals("United States", meaning)
        }

        @Test
        fun `Given invalid country code When explaining Then shows unknown country code`() {
            val meaning = TestCountryCode.explain(999, "\n").toString()
            assertEquals("Unknown Country Code", meaning)
        }

        @Test
        fun `Given negative country code When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                TestCountryCode.explain(-1, "\n").toString()
            }
        }

        @Test
        fun `Given country code above 999 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                TestCountryCode.explain(1000, "\n").toString()
            }
        }
    }

    /**
     * Tests for specific country codes
     */
    class SpecificCountryCodeTests {
        @Test
        fun `Given US country code When explaining Then shows United States description`() {
            val meaning = TestCountryCode.explain(840, "\n").toString()
            assertEquals("United States", meaning)
        }

        @Test
        fun `Given GB country code When explaining Then shows United Kingdom description`() {
            val meaning = TestCountryCode.explain(826, "\n").toString()
            assertEquals("United Kingdom", meaning)
        }

        @Test
        fun `Given JP country code When explaining Then shows Japan description`() {
            val meaning = TestCountryCode.explain(392, "\n").toString()
            assertEquals("Japan", meaning)
        }
    }
}
