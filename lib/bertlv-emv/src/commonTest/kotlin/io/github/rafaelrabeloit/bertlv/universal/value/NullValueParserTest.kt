package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NullValueParserTest {
    private val parser = NullValueParser()

    @Test
    fun givenEmptyBytesWhenParseThenShouldReturnUnit() {
        assertEquals(Unit, parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun givenNonEmptyBytesWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x00.toByte()))
        }
    }

    @Test
    fun givenUnitWhenConvertToBytesThenShouldReturnEmptyArray() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(Unit))
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnNull() {
        assertEquals("NULL", parser.valueToString(Unit))
    }
}
