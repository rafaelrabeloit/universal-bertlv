package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NumericStringValueParserTest {
    private val parser = NumericStringValueParser()

    @Test
    fun givenValidNumericBytesWhenParseThenShouldReturnCorrectString() {
        val bytes = "1234567890".toByteArray(Charsets.US_ASCII)
        assertEquals("1234567890", parser.bytesToValue(bytes))
    }

    @Test
    fun givenBytesWithSpacesWhenParseThenShouldReturnCorrectString() {
        val bytes = "123 456 7890".toByteArray(Charsets.US_ASCII)
        assertEquals("123 456 7890", parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyString() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun givenBytesWithInvalidCharactersWhenParseThenShouldThrowException() {
        val bytes = "123abc".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidNumericStringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes("1234567890")
        assertContentEquals("1234567890".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun givenStringWithSpacesWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes("123 456 7890")
        assertContentEquals("123 456 7890".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun givenEmptyStringWhenConvertToBytesThenShouldReturnEmptyArray() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun givenStringWithInvalidCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("123abc")
        }
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnSameString() {
        assertEquals("1234567890", parser.valueToString("1234567890"))
        assertEquals("123 456 7890", parser.valueToString("123 456 7890"))
    }
}
