package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class BooleanValueParserTest {
    private val parser = BooleanValueParser()

    @Test
    fun `Given true bytes When parse Then should return true`() {
        val bytes = byteArrayOf(0xFF.toByte())
        assertEquals(true, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given false bytes When parse Then should return false`() {
        val bytes = byteArrayOf(0x00.toByte())
        assertEquals(false, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given non-zero byte When parse Then should return true`() {
        val bytes = byteArrayOf(0x01.toByte())
        assertEquals(true, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun `Given multiple bytes When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0xFF.toByte(), 0x00.toByte()))
        }
    }

    @Test
    fun `Given true value When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes(true)
        assertContentEquals(byteArrayOf(0xFF.toByte()), bytes)
    }

    @Test
    fun `Given false value When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes(false)
        assertContentEquals(byteArrayOf(0x00.toByte()), bytes)
    }

    @Test
    fun `Given value When convert to string Then should return correct string`() {
        assertEquals("true", parser.valueToString(true))
        assertEquals("false", parser.valueToString(false))
    }
}
