package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class RealValueParserTest {
    private val parser = RealValueParser()

    @Test
    fun givenPositiveInfinityBytesWhenParseThenShouldReturnPositiveInfinity() {
        val bytes = byteArrayOf(0x40.toByte())
        assertEquals(Double.POSITIVE_INFINITY, parser.bytesToValue(bytes))
    }

    @Test
    fun givenNegativeInfinityBytesWhenParseThenShouldReturnNegativeInfinity() {
        val bytes = byteArrayOf(0x41.toByte())
        assertEquals(Double.NEGATIVE_INFINITY, parser.bytesToValue(bytes))
    }

    @Test
    fun givenNanBytesWhenParseThenShouldReturnNan() {
        val bytes = byteArrayOf(0x42.toByte())
        assertEquals(Double.NaN, parser.bytesToValue(bytes))
    }

    @Test
    fun givenBinaryEncodingBytesWithBase2WhenParseThenShouldReturnCorrectValue() {
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
    fun givenBinaryEncodingBytesWithBase8WhenParseThenShouldReturnCorrectValue() {
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
    fun givenNegativeBinaryEncodingBytesWhenParseThenShouldReturnCorrectValue() {
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
    fun givenEmptyBytesWhenParseThenShouldReturnZero() {
        // Per ASN.1 X.690: Empty content octets represent zero (0.0)
        val bytes = ByteArray(0)
        assertEquals(0.0, parser.bytesToValue(bytes))
    }

    @Test
    fun givenInvalidSpecialValueWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x43.toByte()))
        }
    }

    @Test
    fun givenUnsupportedDecimalEncodingWhenParseThenShouldThrowException() {
        // 0x03 would be decimal encoding (not supported in this implementation)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x03.toByte()))
        }
    }

    @Test
    fun givenUnsupportedFirstOctetFormatWhenParseThenShouldThrowException() {
        // 0x30 is not a valid first octet format for REAL
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(byteArrayOf(0x30.toByte()))
        }
    }

    @Test
    fun givenPositiveInfinityWhenConvertToBytesThenShouldReturnCorrectBytes() {
        assertContentEquals(byteArrayOf(0x40.toByte()), parser.valueToBytes(Double.POSITIVE_INFINITY))
    }

    @Test
    fun givenNegativeInfinityWhenConvertToBytesThenShouldReturnCorrectBytes() {
        assertContentEquals(byteArrayOf(0x41.toByte()), parser.valueToBytes(Double.NEGATIVE_INFINITY))
    }

    @Test
    fun givenNanWhenConvertToBytesThenShouldReturnCorrectBytes() {
        assertContentEquals(byteArrayOf(0x42.toByte()), parser.valueToBytes(Double.NaN))
    }

    @Test
    fun givenZeroWhenConvertToBytesThenShouldReturnEmptyBytes() {
        // Per ASN.1 X.690: Zero is represented by empty content octets
        assertContentEquals(ByteArray(0), parser.valueToBytes(0.0))
    }

    @Test
    fun givenZeroValueWhenRoundTripThenShouldPreserveValue() {
        // Test zero round-trip: 0.0 -> empty bytes -> 0.0
        val originalValue = 0.0
        val bytes = parser.valueToBytes(originalValue)
        val parsedValue = parser.bytesToValue(bytes)
        assertEquals(originalValue, parsedValue)
    }

    @Test
    fun givenPositiveValueWhenConvertToBytesThenShouldReturnCorrectBinaryEncoding() {
        val bytes = parser.valueToBytes(123456.0)
        assertEquals(0x80.toByte(), bytes[0]) // ASN.1: binary, positive, base 2
        val value = parser.bytesToValue(bytes)
        assertEquals(123456.0, value, 0.001)
    }

    @Test
    fun givenNegativeValueWhenConvertToBytesThenShouldReturnCorrectBinaryEncoding() {
        val bytes = parser.valueToBytes(-123456.0)
        assertEquals(0xC0.toByte(), bytes[0]) // ASN.1: binary, negative, base 2
        val value = parser.bytesToValue(bytes)
        assertEquals(-123456.0, value, 0.001)
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnCorrectString() {
        assertEquals("123.456", parser.valueToString(123.456))
        assertEquals("Infinity", parser.valueToString(Double.POSITIVE_INFINITY))
        assertEquals("-Infinity", parser.valueToString(Double.NEGATIVE_INFINITY))
        assertEquals("NaN", parser.valueToString(Double.NaN))
    }
}
