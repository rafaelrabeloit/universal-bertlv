package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for Issuer Country Code (alpha2 format) explanation functionality.
 * Tests cover the explanation of ISO 3166-1 alpha-2 country codes.
 */
class IssuerCountryCodeAlpha2Test {

    @Test
    fun `Given valid alpha2 country code When explaining Then returns country name`() {
        val meaning = IssuerCountryCodeAlpha2.explain("US", "\n").toString()
        assertEquals("United States", meaning)
    }

    @Test
    fun `Given invalid alpha2 country code When explaining Then returns unknown message`() {
        val meaning = IssuerCountryCodeAlpha2.explain("XX", "\n").toString()
        assertEquals("Unknown Country Code", meaning)
    }

    @Test
    fun `Given alpha2 country code with wrong length When explaining Then throws exception`() {
        assertFailsWith<IllegalArgumentException> {
            IssuerCountryCodeAlpha2.explain("USA", "\n").toString()
        }
    }

    @Test
    fun `Given alpha2 country code with custom line separator When explaining Then returns country name`() {
        val meaning = IssuerCountryCodeAlpha2.explain("BR", "|").toString()
        assertEquals("Brazil", meaning)
    }
}
