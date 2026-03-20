package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AlphanumericSpecialValueParserTest {
    private val parser = AlphanumericSpecialValueParser()

    @Test
    fun givenValidBytesWhenParseThenShouldCorrectlyParseAlphanumericSpecialValue() {
        val bytes = "ABC=123".toByteArray()
        val result = parser.bytesToValue(bytes)
        assertEquals("ABC=123", result)
    }

    @Test
    fun givenInvalidAlphanumericSpecialValueWhenParseThenShouldThrowException() {
        val bytes = byteArrayOf(0x41, 0x42, 0x43, 0x0A, 0x31, 0x32, 0x33) // "ABC\n123"
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
        val value = "ABC=123"
        val bytes = parser.valueToBytes(value)
        assertContentEquals("ABC=123".toByteArray(), bytes)
    }

    @Test
    fun givenInvalidStringWhenConvertToBytesThenShouldThrowException() {
        val value = "ABC\n123"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun givenValidStringWhenConvertToStringThenShouldReturnSameString() {
        val value = "ABC@123"
        val result = parser.valueToString(value)
        assertEquals("ABC@123", result)
    }
}
