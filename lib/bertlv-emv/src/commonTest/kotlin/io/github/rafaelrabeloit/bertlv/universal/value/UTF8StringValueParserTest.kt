package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class UTF8StringValueParserTest {
    private val parser = UTF8StringValueParser()

    @Test
    fun `Given ASCII bytes When parse Then should return correct string`() {
        val bytes = "Hello, World!".toByteArray(Charsets.UTF_8)
        assertEquals("Hello, World!", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given UTF-8 bytes When parse Then should return correct string`() {
        val bytes = "Hello, 世界!".toByteArray(Charsets.UTF_8)
        assertEquals("Hello, 世界!", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should return empty string`() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun `Given ASCII string When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes("Hello, World!")
        assertContentEquals("Hello, World!".toByteArray(Charsets.UTF_8), bytes)
    }

    @Test
    fun `Given UTF-8 string When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes("Hello, 世界!")
        assertContentEquals("Hello, 世界!".toByteArray(Charsets.UTF_8), bytes)
    }

    @Test
    fun `Given empty string When convert to bytes Then should return empty array`() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun `Given value When convert to string Then should return same string`() {
        assertEquals("Hello, World!", parser.valueToString("Hello, World!"))
        assertEquals("Hello, 世界!", parser.valueToString("Hello, 世界!"))
    }
}
