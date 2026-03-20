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
    fun `Given single valid currency code When explaining Then returns currency name`() {
        val meaning = ApplicationReferenceCurrency.explain("840", "\n").toString()
        assertEquals("US Dollar", meaning)
    }

    @Test
    fun `Given multiple valid currency codes When explaining Then returns all currency names`() {
        val meaning = ApplicationReferenceCurrency.explain("840978", "\n").toString()
        assertEquals("US Dollar\nEuro", meaning)
    }

    @Test
    fun `Given invalid currency code When explaining Then returns unknown message`() {
        val meaning = ApplicationReferenceCurrency.explain("000", "\n").toString()
        assertEquals("Unknown Currency Code", meaning)
    }

    @Test
    fun `Given currency code with wrong length When explaining Then throws exception`() {
        assertFailsWith<IllegalArgumentException> {
            ApplicationReferenceCurrency.explain("12345", "\n").toString()
        }
    }

    @Test
    fun `Given currency code with odd length When explaining Then throws exception`() {
        assertFailsWith<IllegalArgumentException> {
            ApplicationReferenceCurrency.explain("12", "\n").toString()
        }
    }

    @Test
    fun `Given currency code with custom line separator When explaining Then uses correct separator`() {
        val meaning = ApplicationReferenceCurrency.explain("840978", "|").toString()
        assertEquals("US Dollar|Euro", meaning)
    }

    @Test
    fun `Given maximum length currency codes When explaining Then returns all currency names`() {
        val meaning = ApplicationReferenceCurrency.explain("840978826", "\n").toString()
        assertEquals("US Dollar\nEuro\nPound Sterling", meaning)
    }

    @Test
    fun `Given minimum length currency code When explaining Then returns currency name`() {
        val meaning = ApplicationReferenceCurrency.explain("840", "\n").toString()
        assertEquals("US Dollar", meaning)
    }
}
