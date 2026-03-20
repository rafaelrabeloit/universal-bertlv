package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AlphanumericValueParserTest {
    private val parser = AlphanumericValueParser()

    @Test
    fun givenValidBytesWhenParseThenShouldCorrectlyParseAlphanumericValue() {
        val bytes = "ABC123".encodeToByteArray()
        val result = parser.bytesToValue(bytes)
        assertEquals("ABC123", result)
    }

    @Test
    fun givenInvalidAlphanumericValueWhenParseThenShouldThrowException() {
        val bytes = "ABC@123".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyValue() {
        val bytes = ByteArray(0)
        val result = parser.bytesToValue(bytes)
        assertEquals("", result)
    }

    @Test
    fun givenValidStringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val value = "ABC123"
        val bytes = parser.valueToBytes(value)
        assertContentEquals("ABC123".encodeToByteArray(), bytes)
    }

    @Test
    fun givenInvalidStringWhenConvertToBytesThenShouldThrowException() {
        val value = "ABC@123"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun givenValidStringWhenConvertToStringThenShouldReturnSameString() {
        val value = "ABC123"
        val result = parser.valueToString(value)
        assertEquals("ABC123", result)
    }
}
