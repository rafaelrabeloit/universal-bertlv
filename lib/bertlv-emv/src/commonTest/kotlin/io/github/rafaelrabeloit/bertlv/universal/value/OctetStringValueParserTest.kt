package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class OctetStringValueParserTest {
    private val parser = OctetStringValueParser()

    @Test
    fun `Given byte array When parse Then should return same array`() {
        val bytes = byteArrayOf(0x01, 0x02, 0x03, 0xFF.toByte())
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given value When convert to bytes Then should return same array`() {
        val value = byteArrayOf(0x0A, 0x0B, 0x0C)
        assertContentEquals(value, parser.valueToBytes(value))
    }

    @Test
    fun `Given value When convert to string Then should return hex string`() {
        val value = byteArrayOf(0xDE.toByte(), 0xAD.toByte(), 0xBE.toByte(), 0xEF.toByte())
        assertEquals("deadbeef", parser.valueToString(value))
    }

    @Test
    fun `Given empty array When parse Then should return empty array`() {
        val bytes = ByteArray(0)
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty array When convert to bytes Then should return empty array`() {
        val value = ByteArray(0)
        assertContentEquals(value, parser.valueToBytes(value))
    }

    @Test
    fun `Given single byte array When parse Then should return same array`() {
        val bytes = byteArrayOf(0x7F)
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given large array When parse Then should return same array`() {
        val bytes = ByteArray(256) { it.toByte() }
        assertContentEquals(bytes, parser.bytesToValue(bytes))
    }
}
