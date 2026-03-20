package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class PrintableStringValueParserTest {
    private val parser = PrintableStringValueParser()

    @Test
    fun givenValidPrintableBytesWhenParseThenShouldReturnCorrectString() {
        val bytes = "Hello World'()+,-./:=?".encodeToByteArray()
        assertEquals("Hello World'()+,-./:=?", parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyString() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun givenBytesWithInvalidCharactersWhenParseThenShouldThrowException() {
        val bytes = "Hello!@#".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenBytesWithControlCharactersWhenParseThenShouldThrowException() {
        val bytes = "Hello\u0000World".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenBytesWithNonPrintableCharactersWhenParseThenShouldThrowException() {
        val bytes = "Hello\u007FWorld".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidPrintableStringWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val value = "Hello World'()+,-./:=?"
        val bytes = parser.valueToBytes(value)
        assertContentEquals(value.encodeToByteArray(), bytes)
    }

    @Test
    fun givenEmptyStringWhenConvertToBytesThenShouldReturnEmptyArray() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun givenStringWithInvalidCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello!@#")
        }
    }

    @Test
    fun givenStringWithControlCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u0000World")
        }
    }

    @Test
    fun givenStringWithNonPrintableCharactersWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u007FWorld")
        }
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnSameString() {
        assertEquals("Hello World'()+,-./:=?", parser.valueToString("Hello World'()+,-./:=?"))
    }
}
