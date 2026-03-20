package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class IA5StringValueParserTest {
    private val parser = IA5StringValueParser()

    @Test
    fun `Given valid IA5 bytes When parse Then should return correct string`() {
        val bytes = "Hello, World!".toByteArray(Charsets.US_ASCII)
        assertEquals("Hello, World!", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given bytes with special characters When parse Then should return correct string`() {
        val bytes = "Hello, World! (123)".toByteArray(Charsets.US_ASCII)
        assertEquals("Hello, World! (123)", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given bytes with all ASCII characters When parse Then should return correct string`() {
        val bytes = ByteArray(128) { it.toByte() }
        val result = parser.bytesToValue(bytes)
        assertEquals(128, result.length)
        for (i in 0..127) {
            assertEquals(i.toChar(), result[i])
        }
    }

    @Test
    fun `Given empty bytes When parse Then should return empty string`() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun `Given bytes with invalid characters When parse Then should throw exception`() {
        // "Hello" + 0x80 + "World"
        val bytes = byteArrayOf(72, 101, 108, 108, 111, 128.toByte(), 87, 111, 114, 108, 100)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid IA5 string When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes("Hello, World!")
        assertContentEquals("Hello, World!".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given string with special characters When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes("Hello, World! (123)")
        assertContentEquals("Hello, World! (123)".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given string with all ASCII characters When convert to bytes Then should return correct bytes`() {
        val str = String(ByteArray(128) { it.toByte() })
        val bytes = parser.valueToBytes(str)
        assertEquals(128, bytes.size)
        for (i in 0..127) {
            assertEquals(i.toByte(), bytes[i])
        }
    }

    @Test
    fun `Given empty string When convert to bytes Then should return empty array`() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun `Given string with invalid characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u0080World")
        }
    }

    @Test
    fun `Given value When convert to string Then should return same string`() {
        assertEquals("Hello, World!", parser.valueToString("Hello, World!"))
        assertEquals("Hello, World! (123)", parser.valueToString("Hello, World! (123)"))
    }
}
