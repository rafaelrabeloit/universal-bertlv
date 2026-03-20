package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NumericNumberValueParserTest {
    private val parser = NumericNumberValueParser()

    @Test
    fun `Given valid BCD bytes When bytesToValue is called Then it returns the correct Long value`() {
        val bytes = byteArrayOf(0x12, 0x34, 0x56, 0x78)
        val expected = 12345678L
        val result = parser.bytesToValue(bytes)
        assertEquals(expected, result)
    }

    @Test
    fun `Given invalid BCD bytes When bytesToValue is called Then it throws an exception`() {
        val bytes = byteArrayOf(0x12, 0x3A, 0x56, 0x78)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given a valid Long value When valueToBytes is called Then it returns the correct BCD bytes`() {
        val value = 12345678L
        val expected = byteArrayOf(0x12, 0x34, 0x56, 0x78)
        val result = parser.valueToBytes(value)
        assertEquals(expected.toList(), result.toList())
    }

    @Test
    fun `Given an invalid Long value When valueToBytes is called Then it throws an exception`() {
        val value = -1L
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun `Given a Long value When valueToString is called Then it returns the correct string representation`() {
        val value = 12345678L
        val expected = "12345678"
        val result = parser.valueToString(value)
        assertEquals(expected, result)
    }
}
