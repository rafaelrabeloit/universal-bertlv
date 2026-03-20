package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NumericValueParserTest {
    private val parser = NumericValueParser()

    @Test
    fun `Given valid bytes When parse Then should correctly parse numeric value`() {
        val bytes = byteArrayOf(0x12, 0x34, 0x56) // BCD representation of "123456"
        val result = parser.bytesToValue(bytes)
        assertEquals("123456", result)
    }

    @Test
    fun `Given invalid numeric value When parse Then should throw exception`() {
        val bytes = byteArrayOf(0x1A, 0x34) // Invalid BCD value (A is not a valid decimal digit)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given empty bytes When parse Then should return empty value`() {
        val bytes = ByteArray(0)
        val result = parser.bytesToValue(bytes)
        assertEquals("", result)
    }

    @Test
    fun `Given valid string When convert to bytes Then should return correct BCD bytes`() {
        val value = "123456"
        val bytes = parser.valueToBytes(value)
        assertContentEquals(byteArrayOf(0x12, 0x34, 0x56), bytes)
    }

    @Test
    fun `Given invalid string When convert to bytes Then should throw exception`() {
        val value = "123A56"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun `Given odd length string When convert to bytes Then should throw exception`() {
        val value = "12345"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun `Given valid string When convert to string Then should return same string`() {
        val value = "123456"
        val result = parser.valueToString(value)
        assertEquals("123456", result)
    }
}
