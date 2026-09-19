package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class VisibleStringValueParserTest {
    private val parser = VisibleStringValueParser()

    @Test
    fun givenValidVisibleBytesWhenParseThenShouldReturnCorrectString() {
        val bytes = (0x20..0x7E).map { it.toByte() }.toByteArray()
        val expected = (0x20..0x7E).map { it.toChar() }.joinToString("")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyString() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun givenBytesWithControlCharactersWhenParseThenShouldThrowException() {
        val bytes = byteArrayOf(0x19, 0x20, 0x7E, 0x7F)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenBytesWithNonVisibleCharactersWhenParseThenShouldThrowException() {
        val bytes = byteArrayOf(0x20, 0x7F, 0x7E) // space, DEL, tilde
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidVisibleStringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val value = (0x20..0x7E).map { it.toChar() }.joinToString("")
        val expected = (0x20..0x7E).map { it.toByte() }.toByteArray()
        assertContentEquals(expected, parser.valueToBytes(value))
    }

    @Test
    fun givenEmptyStringWhenConvertToBytesThenShouldReturnEmptyArray() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun givenStringWithControlCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u0000World")
        }
    }

    @Test
    fun givenStringWithNonVisibleCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u007FWorld")
        }
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnSameString() {
        val value = (0x20..0x7E).map { it.toChar() }.joinToString("")
        assertEquals(value, parser.valueToString(value))
    }
}
