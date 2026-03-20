package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NumericNumberValueParserTest {
    private val parser = NumericNumberValueParser()

    @Test
    fun givenValidBcdBytesWhenBytestovalueIsCalledThenItReturnsTheCorrectLongValue() {
        val bytes = byteArrayOf(0x12, 0x34, 0x56, 0x78)
        val expected = 12345678L
        val result = parser.bytesToValue(bytes)
        assertEquals(expected, result)
    }

    @Test
    fun givenInvalidBcdBytesWhenBytestovalueIsCalledThenItThrowsAnException() {
        val bytes = byteArrayOf(0x12, 0x3A, 0x56, 0x78)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenAValidLongValueWhenValuetobytesIsCalledThenItReturnsTheCorrectBcdBytes() {
        val value = 12345678L
        val expected = byteArrayOf(0x12, 0x34, 0x56, 0x78)
        val result = parser.valueToBytes(value)
        assertEquals(expected.toList(), result.toList())
    }

    @Test
    fun givenAnInvalidLongValueWhenValuetobytesIsCalledThenItThrowsAnException() {
        val value = -1L
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun givenALongValueWhenValuetostringIsCalledThenItReturnsTheCorrectStringRepresentation() {
        val value = 12345678L
        val expected = "12345678"
        val result = parser.valueToString(value)
        assertEquals(expected, result)
    }
}
