package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class BooleanValueParserTest {
    private val parser = BooleanValueParser()

    @Test
    fun givenTrueBytesWhenParseThenShouldReturnTrue() {
        val bytes = byteArrayOf(0xFF.toByte())
        assertEquals(true, parser.bytesToValue(bytes))
    }

    @Test
    fun givenFalseBytesWhenParseThenShouldReturnFalse() {
        val bytes = byteArrayOf(0x00.toByte())
        assertEquals(false, parser.bytesToValue(bytes))
    }

    @Test
    fun givenNonZeroByteWhenParseThenShouldReturnTrue() {
        val bytes = byteArrayOf(0x01.toByte())
        assertEquals(true, parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun givenMultipleBytesWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0xFF.toByte(), 0x00.toByte()))
        }
    }

    @Test
    fun givenTrueValueWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes(true)
        assertContentEquals(byteArrayOf(0xFF.toByte()), bytes)
    }

    @Test
    fun givenFalseValueWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val bytes = parser.valueToBytes(false)
        assertContentEquals(byteArrayOf(0x00.toByte()), bytes)
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnCorrectString() {
        assertEquals("true", parser.valueToString(true))
        assertEquals("false", parser.valueToString(false))
    }
}
