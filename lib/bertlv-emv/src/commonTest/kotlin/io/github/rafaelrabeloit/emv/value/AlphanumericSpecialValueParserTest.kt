package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AlphanumericSpecialValueParserTest {
    private val parser = AlphanumericSpecialValueParser()

    @Test
    fun `Given valid bytes When parse Then should correctly parse alphanumeric special value`() {
        val bytes = "ABC=123".toByteArray()
        val result = parser.bytesToValue(bytes)
        assertEquals("ABC=123", result)
    }

    @Test
    fun `Given invalid alphanumeric special value When parse Then should throw exception`() {
        val bytes = byteArrayOf(0x41, 0x42, 0x43, 0x0A, 0x31, 0x32, 0x33) // "ABC\n123"
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
    fun `Given valid string When convert to bytes Then should return correct bytes`() {
        val value = "ABC=123"
        val bytes = parser.valueToBytes(value)
        assertContentEquals("ABC=123".toByteArray(), bytes)
    }

    @Test
    fun `Given invalid string When convert to bytes Then should throw exception`() {
        val value = "ABC\n123"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun `Given valid string When convert to string Then should return same string`() {
        val value = "ABC@123"
        val result = parser.valueToString(value)
        assertEquals("ABC@123", result)
    }
}
