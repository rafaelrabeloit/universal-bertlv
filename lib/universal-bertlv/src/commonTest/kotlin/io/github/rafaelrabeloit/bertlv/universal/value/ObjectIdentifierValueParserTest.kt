package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class ObjectIdentifierValueParserTest {
    private val parser = ObjectIdentifierValueParser()

    @Test
    fun givenValidOidBytesWhenParseThenShouldReturnCorrectComponents() {
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
    fun givenEmptyBytesWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun givenInvalidFirstComponentWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(listOf(3, 40))
        }
    }

    @Test
    fun givenInvalidSecondComponentWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(listOf(1, 40))
        }
    }

    @Test
    fun givenTooFewComponentsWhenConvertToBytesThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes(listOf(1))
        }
    }

    @Test
    fun givenValidOidWhenConvertToBytesThenShouldReturnCorrectBytes() {
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
    fun givenValueWhenConvertToStringThenShouldReturnDotSeparatedString() {
        assertEquals("1.3.6.1.4.1.311.21.20", parser.valueToString(listOf(1, 3, 6, 1, 4, 1, 311, 21, 20)))
    }
}
