package io.github.rafaelrabeloit.emv.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class BinaryValueParserTest {
    private val parser = BinaryValueParser()

    @Test
    fun `Given valid bytes When parse Then should correctly parse binary value`() {
        val bytes = byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05)
        val result = parser.bytesToValue(bytes)
        assertContentEquals(bytes, result)
    }

    @Test
    fun `Given empty bytes When parse Then should return empty value`() {
        val bytes = ByteArray(0)
        val result = parser.bytesToValue(bytes)
        assertContentEquals(ByteArray(0), result)
    }

    @Test
    fun `Given valid bytes When convert to bytes Then should return same bytes`() {
        val value = byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05)
        val bytes = parser.valueToBytes(value)
        assertContentEquals(value, bytes)
    }

    @Test
    fun `Given valid bytes When convert to string Then should return hex string`() {
        val value = byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05)
        val result = parser.valueToString(value)
        assertEquals("0102030405", result)
    }
}
