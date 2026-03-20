package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NumericStringValueParserTest {
    private val parser = NumericStringValueParser()

    @Test
    fun `Given valid numeric bytes When parse Then should return correct string`() {
        val bytes = "1234567890".toByteArray(Charsets.US_ASCII)
        assertEquals("1234567890", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given bytes with spaces When parse Then should return correct string`() {
        val bytes = "123 456 7890".toByteArray(Charsets.US_ASCII)
        assertEquals("123 456 7890", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should return empty string`() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun `Given bytes with invalid characters When parse Then should throw exception`() {
        val bytes = "123abc".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid numeric string When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes("1234567890")
        assertContentEquals("1234567890".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given string with spaces When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes("123 456 7890")
        assertContentEquals("123 456 7890".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given empty string When convert to bytes Then should return empty array`() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun `Given string with invalid characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("123abc")
        }
    }

    @Test
    fun `Given value When convert to string Then should return same string`() {
        assertEquals("1234567890", parser.valueToString("1234567890"))
        assertEquals("123 456 7890", parser.valueToString("123 456 7890"))
    }
}
