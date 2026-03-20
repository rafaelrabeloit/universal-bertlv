package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class RealValueParserTest {
    private val parser = RealValueParser()

    @Test
    fun `Given positive infinity bytes When parse Then should return positive infinity`() {
        val bytes = byteArrayOf(0x40.toByte())
        assertEquals(Double.POSITIVE_INFINITY, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given negative infinity bytes When parse Then should return negative infinity`() {
        val bytes = byteArrayOf(0x41.toByte())
        assertEquals(Double.NEGATIVE_INFINITY, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given NaN bytes When parse Then should return NaN`() {
        val bytes = byteArrayOf(0x42.toByte())
        assertEquals(Double.NaN, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given binary encoding bytes with base 2 When parse Then should return correct value`() {
        // ASN.1 compliant: 0x80 = binary, positive, base 2, single octet exponent
        // Bit structure: 10000000 (sign=1-neg/0-pos, base=00-base2, scaling=00, exp_len=00, reserved=0)
        val bytes = byteArrayOf(
            0x80.toByte(), // ASN.1: binary, positive, base 2, single octet exponent
            0x01.toByte(), // exponent = 1
            0xF1.toByte(), // mantissa high byte
            0x20.toByte(), // mantissa low byte (mantissa = 61728)
        )
        // Result: 61728 * 2^1 = 123456
        assertEquals(123456.0, parser.bytesToValue(bytes), 0.001)
    }

    @Test
    fun `Given binary encoding bytes with base 8 When parse Then should return correct value`() {
        // ASN.1 compliant: 0x90 = binary, positive, base 8, single octet exponent
        // Bit structure: 10010000 (binary=1, sign=0-pos, base=01-base8, scaling=00, exp_len=00, reserved=0)
        val bytes = byteArrayOf(
            0x90.toByte(), // ASN.1: binary, positive, base 8, single octet exponent
            0x01.toByte(), // exponent = 1
            0x3C.toByte(), // mantissa high byte
            0x48.toByte(), // mantissa low byte (mantissa = 15432)
        )
        // Result: 15432 * 8^1 = 123456
        assertEquals(123456.0, parser.bytesToValue(bytes), 0.001)
    }

    @Test
    fun `Given negative binary encoding bytes When parse Then should return correct value`() {
        // ASN.1 compliant: 0xC0 = binary, negative, base 2, single octet exponent
        // Bit structure: 11000000 (binary=1, sign=1-neg, base=00-base2, scaling=00, exp_len=00, reserved=0)
        val bytes = byteArrayOf(
            0xC0.toByte(), // ASN.1: binary, negative, base 2, single octet exponent
            0x01.toByte(), // exponent = 1
            0xF1.toByte(), // mantissa high byte
            0x20.toByte(), // mantissa low byte (mantissa = 61728)
        )
        // Result: -(61728 * 2^1) = -123456
        assertEquals(-123456.0, parser.bytesToValue(bytes), 0.001)
    }

    @Test
    fun `Given empty bytes When parse Then should return zero`() {
        // Per ASN.1 X.690: Empty content octets represent zero (0.0)
        val bytes = ByteArray(0)
        assertEquals(0.0, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given invalid special value When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x43.toByte()))
        }
    }

    @Test
    fun `Given unsupported decimal encoding When parse Then should throw exception`() {
        // 0x03 would be decimal encoding (not supported in this implementation)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x03.toByte()))
        }
    }

    @Test
    fun `Given unsupported first octet format When parse Then should throw exception`() {
        // 0x30 is not a valid first octet format for REAL
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x30.toByte()))
        }
    }

    @Test
    fun `Given positive infinity When convert to bytes Then should return correct bytes`() {
        assertContentEquals(byteArrayOf(0x40.toByte()), parser.valueToBytes(Double.POSITIVE_INFINITY))
    }

    @Test
    fun `Given negative infinity When convert to bytes Then should return correct bytes`() {
        assertContentEquals(byteArrayOf(0x41.toByte()), parser.valueToBytes(Double.NEGATIVE_INFINITY))
    }

    @Test
    fun `Given NaN When convert to bytes Then should return correct bytes`() {
        assertContentEquals(byteArrayOf(0x42.toByte()), parser.valueToBytes(Double.NaN))
    }

    @Test
    fun `Given zero When convert to bytes Then should return empty bytes`() {
        // Per ASN.1 X.690: Zero is represented by empty content octets
        assertContentEquals(ByteArray(0), parser.valueToBytes(0.0))
    }

    @Test
    fun `Given zero value When round trip Then should preserve value`() {
        // Test zero round-trip: 0.0 -> empty bytes -> 0.0
        val originalValue = 0.0
        val bytes = parser.valueToBytes(originalValue)
        val parsedValue = parser.bytesToValue(bytes)
        assertEquals(originalValue, parsedValue)
    }

    @Test
    fun `Given positive value When convert to bytes Then should return correct binary encoding`() {
        val bytes = parser.valueToBytes(123456.0)
        assertEquals(0x80.toByte(), bytes[0]) // ASN.1: binary, positive, base 2
        val value = parser.bytesToValue(bytes)
        assertEquals(123456.0, value, 0.001)
    }

    @Test
    fun `Given negative value When convert to bytes Then should return correct binary encoding`() {
        val bytes = parser.valueToBytes(-123456.0)
        assertEquals(0xC0.toByte(), bytes[0]) // ASN.1: binary, negative, base 2
        val value = parser.bytesToValue(bytes)
        assertEquals(-123456.0, value, 0.001)
    }

    @Test
    fun `Given value When convert to string Then should return correct string`() {
        assertEquals("123.456", parser.valueToString(123.456))
        assertEquals("Infinity", parser.valueToString(Double.POSITIVE_INFINITY))
        assertEquals("-Infinity", parser.valueToString(Double.NEGATIVE_INFINITY))
        assertEquals("NaN", parser.valueToString(Double.NaN))
    }
}
