package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AlphanumericValueParserTest {
    private val parser = AlphanumericValueParser()

    @Test
    fun `Given valid bytes When parse Then should correctly parse alphanumeric value`() {
        val bytes = "ABC123".toByteArray()
        val result = parser.bytesToValue(bytes)
        assertEquals("ABC123", result)
    }

    @Test
    fun `Given invalid alphanumeric value When parse Then should throw exception`() {
        val bytes = "ABC@123".toByteArray()
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
        val value = "ABC123"
        val bytes = parser.valueToBytes(value)
        assertContentEquals("ABC123".toByteArray(), bytes)
    }

    @Test
    fun `Given invalid string When convert to bytes Then should throw exception`() {
        val value = "ABC@123"
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(value)
        }
    }

    @Test
    fun `Given valid string When convert to string Then should return same string`() {
        val value = "ABC123"
        val result = parser.valueToString(value)
        assertEquals("ABC123", result)
    }
}
