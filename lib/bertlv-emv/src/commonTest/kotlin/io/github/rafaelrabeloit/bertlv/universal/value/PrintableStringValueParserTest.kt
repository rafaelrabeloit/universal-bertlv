package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class PrintableStringValueParserTest {
    private val parser = PrintableStringValueParser()

    @Test
    fun `Given valid printable bytes When parse Then should return correct string`() {
        val bytes = "Hello World'()+,-./:=?".toByteArray(Charsets.US_ASCII)
        assertEquals("Hello World'()+,-./:=?", parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should return empty string`() {
        assertEquals("", parser.bytesToValue(ByteArray(0)))
    }

    @Test
    fun `Given bytes with invalid characters When parse Then should throw exception`() {
        val bytes = "Hello!@#".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given bytes with control characters When parse Then should throw exception`() {
        val bytes = "Hello\u0000World".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given bytes with non-printable characters When parse Then should throw exception`() {
        val bytes = "Hello\u007FWorld".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid printable string When convert to bytes Then should return correct bytes`() {
        val value = "Hello World'()+,-./:=?"
        val bytes = parser.valueToBytes(value)
        assertContentEquals(value.toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given empty string When convert to bytes Then should return empty array`() {
        assertContentEquals(ByteArray(0), parser.valueToBytes(""))
    }

    @Test
    fun `Given string with invalid characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello!@#")
        }
    }

    @Test
    fun `Given string with control characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u0000World")
        }
    }

    @Test
    fun `Given string with non-printable characters When convert to bytes Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.valueToBytes("Hello\u007FWorld")
        }
    }

    @Test
    fun `Given value When convert to string Then should return same string`() {
        assertEquals("Hello World'()+,-./:=?", parser.valueToString("Hello World'()+,-./:=?"))
    }
}
