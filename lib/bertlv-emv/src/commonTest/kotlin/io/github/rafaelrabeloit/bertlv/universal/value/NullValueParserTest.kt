package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class NullValueParserTest {
    private val parser = NullValueParser()

    @Test
    fun `Given empty bytes When parse Then should return Unit`() {
        assertEquals(Unit, parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun `Given non-empty bytes When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x00.toByte()))
        }
    }

    @Test
    fun `Given Unit When convert to bytes Then should return empty array`() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(Unit))
    }

    @Test
    fun `Given value When convert to string Then should return NULL`() {
        assertEquals("NULL", parser.valueToString(Unit))
    }
}
