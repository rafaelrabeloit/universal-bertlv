package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for Application Reference Currency explanation functionality.
 * Tests cover the explanation of ISO 4217 currency codes in the Application Reference Currency field.
 */
class ApplicationReferenceCurrencyTest {

    @Test
    fun givenSingleValidCurrencyCodeWhenExplainingThenReturnsCurrencyName() {
        val meaning = ApplicationReferenceCurrency.explain("840", "\n").toString()
        assertEquals("US Dollar", meaning)
    }

    @Test
    fun givenMultipleValidCurrencyCodesWhenExplainingThenReturnsAllCurrencyNames() {
        val meaning = ApplicationReferenceCurrency.explain("840978", "\n").toString()
        assertEquals("US Dollar\nEuro", meaning)
    }

    @Test
    fun givenInvalidCurrencyCodeWhenExplainingThenReturnsUnknownMessage() {
        val meaning = ApplicationReferenceCurrency.explain("000", "\n").toString()
        assertEquals("Unknown Currency Code", meaning)
    }

    @Test
    fun givenCurrencyCodeWithWrongLengthWhenExplainingThenThrowsException() {
        assertFailsWith<IllegalArgumentException> {
            ApplicationReferenceCurrency.explain("12345", "\n").toString()
        }
    }

    @Test
    fun givenCurrencyCodeWithOddLengthWhenExplainingThenThrowsException() {
        assertFailsWith<IllegalArgumentException> {
            ApplicationReferenceCurrency.explain("12", "\n").toString()
        }
    }

    @Test
    fun givenCurrencyCodeWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val meaning = ApplicationReferenceCurrency.explain("840978", "|").toString()
        assertEquals("US Dollar|Euro", meaning)
    }

    @Test
    fun givenMaximumLengthCurrencyCodesWhenExplainingThenReturnsAllCurrencyNames() {
        val meaning = ApplicationReferenceCurrency.explain("840978826", "\n").toString()
        assertEquals("US Dollar\nEuro\nPound Sterling", meaning)
    }

    @Test
    fun givenMinimumLengthCurrencyCodeWhenExplainingThenReturnsCurrencyName() {
        val meaning = ApplicationReferenceCurrency.explain("840", "\n").toString()
        assertEquals("US Dollar", meaning)
    }
}
