package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class LanguagePreferenceTest {
    @Test
    fun `test single language code`() {
        assertEquals("English", LanguagePreference.explain("en", "\n").toString())
        assertEquals("Spanish", LanguagePreference.explain("es", "\n").toString())
        assertEquals("Japanese", LanguagePreference.explain("ja", "\n").toString())
    }

    @Test
    fun `test multiple language codes`() {
        assertEquals(
            "English\nFrench",
            LanguagePreference.explain("enfr", "\n").toString(),
        )
        assertEquals(
            "English\nFrench\nGerman",
            LanguagePreference.explain("enfrde", "\n").toString(),
        )
        assertEquals(
            "English\nFrench\nGerman\nItalian",
            LanguagePreference.explain("enfrdeit", "\n").toString(),
        )
    }

    @Test
    fun `test invalid language code`() {
        assertEquals("Unknown Language Code", LanguagePreference.explain("xx", "\n").toString())
        assertEquals(
            "English\nUnknown Language Code",
            LanguagePreference.explain("enxx", "\n").toString(),
        )
    }

    @Test
    fun `test incorrect length`() {
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("eng", "\n").toString()
        }
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("enfrdeitx", "\n").toString()
        }
    }

    @Test
    fun `test empty string`() {
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("", "\n").toString()
        }
    }

    @Test
    fun `test odd length`() {
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("enf", "\n").toString()
        }
    }
}
