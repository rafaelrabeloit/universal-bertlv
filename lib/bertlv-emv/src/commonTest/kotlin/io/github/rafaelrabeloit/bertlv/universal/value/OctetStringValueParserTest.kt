package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class OctetStringValueParserTest {
    private val parser = OctetStringValueParser()

    @Test
    fun givenByteArrayWhenParseThenShouldReturnSameArray() {
        val bytes = byteArrayOf(0x01, 0x02, 0x03, 0xFF.toByte())
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }

    @Test
    fun givenValueWhenConvertToBytesThenShouldReturnSameArray() {
        val value = byteArrayOf(0x0A, 0x0B, 0x0C)
        assertContentEquals(value, parser.valueToBytes(value))
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnHexString() {
        val value = byteArrayOf(0xDE.toByte(), 0xAD.toByte(), 0xBE.toByte(), 0xEF.toByte())
        assertEquals("deadbeef", parser.valueToString(value))
    }

    @Test
    fun givenEmptyArrayWhenParseThenShouldReturnEmptyArray() {
        val bytes = ByteArray(0)
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyArrayWhenConvertToBytesThenShouldReturnEmptyArray() {
        val value = ByteArray(0)
        assertContentEquals(value, parser.valueToBytes(value))
    }

    @Test
    fun givenSingleByteArrayWhenParseThenShouldReturnSameArray() {
        val bytes = byteArrayOf(0x7F)
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }

    @Test
    fun givenLargeArrayWhenParseThenShouldReturnSameArray() {
        val bytes = ByteArray(256) { it.toByte() }
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }
}
