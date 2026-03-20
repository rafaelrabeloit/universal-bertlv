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
    fun givenValidAlpha3CountryCodeWhenExplainingThenReturnsCountryName() {
        val meaning = IssuerCountryCodeAlpha3.explain("USA", "\n").toString()
        assertEquals("United States", meaning)
    }

    @Test
    fun givenInvalidAlpha3CountryCodeWhenExplainingThenReturnsUnknownMessage() {
        val meaning = IssuerCountryCodeAlpha3.explain("XXX", "\n").toString()
        assertEquals("Unknown Country Code", meaning)
    }

    @Test
    fun givenAlpha3CountryCodeWithWrongLengthWhenExplainingThenThrowsException() {
        assertFailsWith<IllegalArgumentException> {
            IssuerCountryCodeAlpha3.explain("US", "\n").toString()
        }
    }

    @Test
    fun givenAlpha3CountryCodeWithCustomLineSeparatorWhenExplainingThenReturnsCountryName() {
        val meaning = IssuerCountryCodeAlpha3.explain("BRA", "|").toString()
        assertEquals("Brazil", meaning)
    }
}
