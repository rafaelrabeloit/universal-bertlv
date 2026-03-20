package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class UTF8StringValueParserTest {
    private val parser = UTF8StringValueParser()

    @Test
    fun givenAsciiBytesWhenParseThenShouldReturnCorrectString() {
        val bytes = "Hello, World!".toByteArray(Charsets.UTF_8)
        assertEquals("Hello, World!", parser.bytesToValue(bytes))
    }

    @Test
    fun givenUtf8BytesWhenParseThenShouldReturnCorrectString() {
        val bytes = "Hello, 世界!".toByteArray(Charsets.UTF_8)
        assertEquals("Hello, 世界!", parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyString() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun givenAsciiStringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes("Hello, World!")
        assertContentEquals("Hello, World!".toByteArray(Charsets.UTF_8), bytes)
    }

    @Test
    fun givenUtf8StringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes("Hello, 世界!")
        assertContentEquals("Hello, 世界!".toByteArray(Charsets.UTF_8), bytes)
    }

    @Test
    fun givenEmptyStringWhenConvertToBytesThenShouldReturnEmptyArray() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnSameString() {
        assertEquals("Hello, World!", parser.valueToString("Hello, World!"))
        assertEquals("Hello, 世界!", parser.valueToString("Hello, 世界!"))
    }
}
