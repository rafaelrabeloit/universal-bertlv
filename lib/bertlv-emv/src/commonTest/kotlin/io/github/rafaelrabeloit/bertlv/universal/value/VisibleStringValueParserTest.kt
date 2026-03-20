package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class VisibleStringValueParserTest {
    private val parser = VisibleStringValueParser()

    @Test
    fun `Given valid visible bytes When parse Then should return correct string`() {
        val bytes = (0x20..0x7E).map { it.toByte() }.toByteArray()
        val expected = (0x20..0x7E).map { it.toChar() }.joinToString("")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should return empty string`() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun `Given bytes with control characters When parse Then should throw exception`() {
        val bytes = byteArrayOf(0x19, 0x20, 0x7E, 0x7F)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given bytes with non-visible characters When parse Then should throw exception`() {
        val bytes = byteArrayOf(0x20, 0x7F, 0x7E) // space, DEL, tilde
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid visible string When convert to bytes Then should return correct bytes`() {
        val value = (0x20..0x7E).map { it.toChar() }.joinToString("")
        val expected = (0x20..0x7E).map { it.toByte() }.toByteArray()
        assertContentEquals(expected, parser.valueToBytes(value))
    }

    @Test
    fun `Given empty string When convert to bytes Then should return empty array`() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun `Given string with control characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u0000World")
        }
    }

    @Test
    fun `Given string with non-visible characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u007FWorld")
        }
    }

    @Test
    fun `Given value When convert to string Then should return same string`() {
        val value = (0x20..0x7E).map { it.toChar() }.joinToString("")
        assertEquals(value, parser.valueToString(value))
    }
}
