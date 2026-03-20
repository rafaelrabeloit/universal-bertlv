package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class LanguagePreferenceTest {
    @Test
    fun testSingleLanguageCode() {
        assertEquals("English", LanguagePreference.explain("en", "\n").toString())
        assertEquals("Spanish", LanguagePreference.explain("es", "\n").toString())
        assertEquals("Japanese", LanguagePreference.explain("ja", "\n").toString())
    }

    @Test
    fun testMultipleLanguageCodes() {
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
    fun testInvalidLanguageCode() {
        assertEquals("Unknown Language Code", LanguagePreference.explain("xx", "\n").toString())
        assertEquals(
            "English\nUnknown Language Code",
            LanguagePreference.explain("enxx", "\n").toString(),
        )
    }

    @Test
    fun testIncorrectLength() {
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("eng", "\n").toString()
        }
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("enfrdeitx", "\n").toString()
        }
    }

    @Test
    fun testEmptyString() {
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("", "\n").toString()
        }
    }

    @Test
    fun testOddLength() {
        assertFailsWith<IllegalArgumentException> {
            LanguagePreference.explain("enf", "\n").toString()
        }
    }
}
