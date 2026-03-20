package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for Issuer Country Code (alpha3 format) explanation functionality.
 * Tests cover the explanation of ISO 3166-1 alpha-3 country codes.
 */
class IssuerCountryCodeAlpha3Test {

    @Test
    fun `Given valid alpha3 country code When explaining Then returns country name`() {
        val meaning = IssuerCountryCodeAlpha3.explain("USA", "\n").toString()
        assertEquals("United States", meaning)
    }

    @Test
    fun `Given invalid alpha3 country code When explaining Then returns unknown message`() {
        val meaning = IssuerCountryCodeAlpha3.explain("XXX", "\n").toString()
        assertEquals("Unknown Country Code", meaning)
    }

    @Test
    fun `Given alpha3 country code with wrong length When explaining Then throws exception`() {
        assertFailsWith<IllegalArgumentException> {
            IssuerCountryCodeAlpha3.explain("US", "\n").toString()
        }
    }

    @Test
    fun `Given alpha3 country code with custom line separator When explaining Then returns country name`() {
        val meaning = IssuerCountryCodeAlpha3.explain("BRA", "|").toString()
        assertEquals("Brazil", meaning)
    }
}
