package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class ObjectIdentifierValueParserTest {
    private val parser = ObjectIdentifierValueParser()

    @Test
    fun `Given valid OID bytes When parse Then should return correct components`() {
        // 1.3.6.1.4.1.311.21.20
        val bytes = byteArrayOf(
            0x2B.toByte(), // 1.3
            0x06.toByte(), // 6
            0x01.toByte(), // 1
            0x04.toByte(), // 4
            0x01.toByte(), // 1
            0x82.toByte(), 0x37.toByte(), // 311
            0x15.toByte(), // 21
            0x14.toByte(), // 20
        )
        assertEquals(listOf(1, 3, 6, 1, 4, 1, 311, 21, 20), parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun `Given invalid first component When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(listOf(3, 40))
        }
    }

    @Test
    fun `Given invalid second component When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(listOf(1, 40))
        }
    }

    @Test
    fun `Given too few components When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(listOf(1))
        }
    }

    @Test
    fun `Given valid OID When convert to bytes Then should return correct bytes`() {
        val bytes = parser.valueToBytes(listOf(1, 3, 6, 1, 4, 1, 311, 21, 20))
        assertContentEquals(
            byteArrayOf(
                0x2B.toByte(), // 1.3
                0x06.toByte(), // 6
                0x01.toByte(), // 1
                0x04.toByte(), // 4
                0x01.toByte(), // 1
                0x82.toByte(), 0x37.toByte(), // 311
                0x15.toByte(), // 21
                0x14.toByte(), // 20
            ),
            bytes,
        )
    }

    @Test
    fun `Given value When convert to string Then should return dot-separated string`() {
        assertEquals("1.3.6.1.4.1.311.21.20", parser.valueToString(listOf(1, 3, 6, 1, 4, 1, 311, 21, 20)))
    }
}
