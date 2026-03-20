package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class IA5StringValueParserTest {
    private val parser = IA5StringValueParser()

    @Test
    fun givenValidIa5BytesWhenParseThenShouldReturnCorrectString() {
        val bytes = "Hello, World!".encodeToByteArray()
        assertEquals("Hello, World!", parser.bytesToValue(bytes))
    }

    @Test
    fun givenBytesWithSpecialCharactersWhenParseThenShouldReturnCorrectString() {
        val bytes = "Hello, World! (123)".encodeToByteArray()
        assertEquals("Hello, World! (123)", parser.bytesToValue(bytes))
    }

    @Test
    fun givenBytesWithAllAsciiCharactersWhenParseThenShouldReturnCorrectString() {
        val bytes = ByteArray(128) { it.toByte() }
        val result = parser.bytesToValue(bytes)
        assertEquals(128, result.length)
        for (i in 0..127) {
            assertEquals(i.toChar(), result[i])
        }
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyString() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun givenBytesWithInvalidCharactersWhenParseThenShouldThrowException() {
        // "Hello" + 0x80 + "World"
        val bytes = byteArrayOf(72, 101, 108, 108, 111, 128.toByte(), 87, 111, 114, 108, 100)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidIa5StringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes("Hello, World!")
        assertContentEquals("Hello, World!".encodeToByteArray(), bytes)
    }

    @Test
    fun givenStringWithSpecialCharactersWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes("Hello, World! (123)")
        assertContentEquals("Hello, World! (123)".encodeToByteArray(), bytes)
    }

    @Test
    fun givenStringWithAllAsciiCharactersWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val str = ByteArray(128) { it.toByte() }.decodeToString()
        val bytes = parser.valueToBytes(str)
        assertEquals(128, bytes.size)
        for (i in 0..127) {
            assertEquals(i.toByte(), bytes[i])
        }
    }

    @Test
    fun givenEmptyStringWhenConvertToBytesThenShouldReturnEmptyArray() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun givenStringWithInvalidCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u0080World")
        }
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnSameString() {
        assertEquals("Hello, World!", parser.valueToString("Hello, World!"))
        assertEquals("Hello, World! (123)", parser.valueToString("Hello, World! (123)"))
    }
}
