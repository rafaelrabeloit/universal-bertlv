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
        fun givenValidCountryCodeWhenExplainingThenShowsCorrectCountryDescription() {
            val meaning = TestCountryCode.explain(840, "\n").toString()
            assertEquals("United States", meaning)
        }

        @Test
        fun givenInvalidCountryCodeWhenExplainingThenShowsUnknownCountryCode() {
            val meaning = TestCountryCode.explain(999, "\n").toString()
            assertEquals("Unknown Country Code", meaning)
        }

        @Test
        fun givenNegativeCountryCodeWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                TestCountryCode.explain(-1, "\n").toString()
            }
        }

        @Test
        fun givenCountryCodeAbove999WhenExplainingThenThrowsException() {
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
        fun givenUsCountryCodeWhenExplainingThenShowsUnitedStatesDescription() {
            val meaning = TestCountryCode.explain(840, "\n").toString()
            assertEquals("United States", meaning)
        }

        @Test
        fun givenGbCountryCodeWhenExplainingThenShowsUnitedKingdomDescription() {
            val meaning = TestCountryCode.explain(826, "\n").toString()
            assertEquals("United Kingdom", meaning)
        }

        @Test
        fun givenJpCountryCodeWhenExplainingThenShowsJapanDescription() {
            val meaning = TestCountryCode.explain(392, "\n").toString()
            assertEquals("Japan", meaning)
        }
    }
}
