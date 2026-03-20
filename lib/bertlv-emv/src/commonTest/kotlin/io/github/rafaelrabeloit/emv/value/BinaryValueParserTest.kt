package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class BinaryValueParserTest {
    private val parser = BinaryValueParser()

    @Test
    fun givenValidBytesWhenParseThenShouldCorrectlyParseBinaryValue() {
        val bytes = byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05)
        val result = parser.bytesToValue(bytes)
        assertContentEquals(bytes, result)
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnEmptyValue() {
        val bytes = ByteArray(0)
        val result = parser.bytesToValue(bytes)
        assertContentEquals(ByteArray(0), result)
    }

    @Test
    fun givenValidBytesWhenConvertToBytesThenShouldReturnSameBytes() {
        val value = byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05)
        val bytes = parser.valueToBytes(value)
        assertContentEquals(value, bytes)
    }

    @Test
    fun givenValidBytesWhenConvertToStringThenShouldReturnHexString() {
        val value = byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05)
        val result = parser.valueToString(value)
        assertEquals("0102030405", result)
    }
}
