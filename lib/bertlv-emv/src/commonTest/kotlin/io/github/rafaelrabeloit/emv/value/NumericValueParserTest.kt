package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NumericValueParserTest {
    private val parser = NumericValueParser()

    @Test
    fun givenValidBytesWhenParseThenShouldCorrectlyParseNumericValue() {
        val bytes = byteArrayOf(0x12, 0x34, 0x56) // BCD representation of "123456"
        val result = parser.bytesToValue(bytes)
        assertEquals("123456", result)
    }

    @Test
    fun givenInvalidNumericValueWhenParseThenShouldThrowException() {
        val bytes = byteArrayOf(0x1A, 0x34) // Invalid BCD value (A is not a valid decimal digit)
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
    fun givenValidStringWhenConvertToBytesThenShouldReturnCorrectBcdBytes() {
        val value = "123456"
        val bytes = parser.valueToBytes(value)
        assertContentEquals(byteArrayOf(0x12, 0x34, 0x56), bytes)
    }

    @Test
    fun givenInvalidStringWhenConvertToBytesThenShouldThrowException() {
        val value = "123A56"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun givenOddLengthStringWhenConvertToBytesThenShouldThrowException() {
        val value = "12345"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun givenValidStringWhenConvertToStringThenShouldReturnSameString() {
        val value = "123456"
        val result = parser.valueToString(value)
        assertEquals("123456", result)
    }
}
