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
    fun givenValidAlpha2CountryCodeWhenExplainingThenReturnsCountryName() {
        val meaning = IssuerCountryCodeAlpha2.explain("US", "\n").toString()
        assertEquals("United States", meaning)
    }

    @Test
    fun givenInvalidAlpha2CountryCodeWhenExplainingThenReturnsUnknownMessage() {
        val meaning = IssuerCountryCodeAlpha2.explain("XX", "\n").toString()
        assertEquals("Unknown Country Code", meaning)
    }

    @Test
    fun givenAlpha2CountryCodeWithWrongLengthWhenExplainingThenThrowsException() {
        assertFailsWith<IllegalArgumentException> {
            IssuerCountryCodeAlpha2.explain("USA", "\n").toString()
        }
    }

    @Test
    fun givenAlpha2CountryCodeWithCustomLineSeparatorWhenExplainingThenReturnsCountryName() {
        val meaning = IssuerCountryCodeAlpha2.explain("BR", "|").toString()
        assertEquals("Brazil", meaning)
    }
}
