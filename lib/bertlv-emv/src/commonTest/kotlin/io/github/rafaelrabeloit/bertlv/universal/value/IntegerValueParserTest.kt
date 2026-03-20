package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class IntegerValueParserTest {

    class ParsingTests {
        val parser = IntegerValueParser()

        @Test
        fun givenSingleByteWhenParseThenShouldReturnCorrectInteger() {
            val bytes = byteArrayOf(0x7F.toByte())
            assertEquals(127, parser.bytesToValue(bytes))
        }

        @Test
        fun givenMultipleBytesWhenParseThenShouldReturnCorrectInteger() {
            val bytes = byteArrayOf(0x00.toByte(), 0xFF.toByte(), 0xFF.toByte())
            assertEquals(65535, parser.bytesToValue(bytes))
        }

        @Test
        fun givenNegativeBytesWhenParseThenShouldReturnCorrectInteger() {
            val bytes = byteArrayOf(0xFF.toByte())
            assertEquals(-1, parser.bytesToValue(bytes))
        }

        @Test
        fun givenMaximumPositiveIntegerWhenParseThenShouldReturnCorrectValue() {
            val bytes =
                byteArrayOf(
                    0x7F.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                )
            assertEquals(Long.MAX_VALUE, parser.bytesToValue(bytes))
        }

        @Test
        fun givenMinimumNegativeIntegerWhenParseThenShouldReturnCorrectValue() {
            val bytes =
                byteArrayOf(
                    0x80.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                )
            assertEquals(Long.MIN_VALUE, parser.bytesToValue(bytes))
        }

        @Test
        fun givenInvalidLeadingZerosWhenParseThenShouldThrowException() {
            // Per ASN.1 minimal encoding: bits of first octet and bit 8 of second SHALL NOT all be zero
            val bytes = byteArrayOf(0x00.toByte(), 0x00.toByte(), 0x7F.toByte())
            assertFailsWith<IllegalArgumentException> {
                parser.bytesToValue(bytes)
            }
        }

        @Test
        fun givenInvalidLeading0xffBytesWhenParseThenShouldThrowException() {
            // Per ASN.1 minimal encoding: bits of first octet and bit 8 of second SHALL NOT all be ones
            val bytes = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0x80.toByte())
            assertFailsWith<IllegalArgumentException> {
                parser.bytesToValue(bytes)
            }
        }

        @Test
        fun givenEmptyBytesWhenParseThenShouldThrowException() {
            assertFailsWith<IllegalArgumentException> {
                parser.bytesToValue(ByteArray(0))
            }
        }
    }

    class SerializationTests {
        val parser = IntegerValueParser()

        @Test
        fun givenZeroWhenConvertToBytesThenShouldReturnSingleZeroByte() {
            val bytes = parser.valueToBytes(0)
            assertContentEquals(byteArrayOf(0x00.toByte()), bytes)
        }

        @Test
        fun givenPositiveIntegerWhenConvertToBytesThenShouldReturnCorrectBytes() {
            val bytes = parser.valueToBytes(65535)
            assertContentEquals(byteArrayOf(0x00.toByte(), 0xFF.toByte(), 0xFF.toByte()), bytes)
        }

        @Test
        fun givenNegativeIntegerWhenConvertToBytesThenShouldReturnCorrectBytes() {
            val bytes = parser.valueToBytes(-1)
            assertContentEquals(byteArrayOf(0xFF.toByte()), bytes)
        }

        @Test
        fun givenMaximumPositiveIntegerWhenConvertToBytesThenShouldReturnCorrectBytes() {
            val bytes = parser.valueToBytes(Long.MAX_VALUE)
            assertContentEquals(
                byteArrayOf(
                    0x7F.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                    0xFF.toByte(),
                ),
                bytes,
            )
        }

        @Test
        fun givenMinimumNegativeIntegerWhenConvertToBytesThenShouldReturnCorrectBytes() {
            val bytes = parser.valueToBytes(Long.MIN_VALUE)
            assertContentEquals(
                byteArrayOf(
                    0x80.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                    0x00.toByte(),
                ),
                bytes,
            )
        }

        @Test
        fun given128WhenConvertToBytesThenShouldIncludeLeadingZero() {
            // 128 = 0x80, but this would set sign bit, so must be encoded as 0x00 0x80
            val bytes = parser.valueToBytes(128)
            assertContentEquals(byteArrayOf(0x00.toByte(), 0x80.toByte()), bytes)
        }

        @Test
        fun given256WhenConvertToBytesThenShouldIncludeLeadingZero() {
            // 256 = 0x0100, sign bit is clear so this is the minimal encoding
            val bytes = parser.valueToBytes(256)
            assertContentEquals(byteArrayOf(0x01.toByte(), 0x00.toByte()), bytes)
        }

        @Test
        fun given129WhenConvertToBytesThenShouldReturnCorrectMinimalEncoding() {
            // -129 requires two bytes: 0xFF 0x7F (minimal encoding)
            val bytes = parser.valueToBytes(-129)
            assertContentEquals(byteArrayOf(0xFF.toByte(), 0x7F.toByte()), bytes)
        }
    }

    class StringConversionTests {
        val parser = IntegerValueParser()

        @Test
        fun givenValueWhenConvertToStringThenShouldReturnCorrectString() {
            assertEquals("0", parser.valueToString(0))
            assertEquals("65535", parser.valueToString(65535))
            assertEquals("-1", parser.valueToString(-1))
            assertEquals(Long.MAX_VALUE.toString(), parser.valueToString(Long.MAX_VALUE))
            assertEquals(Long.MIN_VALUE.toString(), parser.valueToString(Long.MIN_VALUE))
        }
    }

    class RoundTripTests {
        val parser = IntegerValueParser()

        @Test
        fun givenPositiveValuesWhenRoundTripThenShouldPreserveValue() {
            val testValues = listOf(0L, 1L, 127L, 128L, 255L, 256L, 32767L, 32768L, 65535L, 65536L)
            for (value in testValues) {
                val bytes = parser.valueToBytes(value)
                val parsed = parser.bytesToValue(bytes)
                assertEquals(value, parsed, "Round trip failed for value $value")
            }
        }

        @Test
        fun givenNegativeValuesWhenRoundTripThenShouldPreserveValue() {
            val testValues = listOf(-1L, -127L, -128L, -129L, -255L, -256L, -32767L, -32768L, -65535L)
            for (value in testValues) {
                val bytes = parser.valueToBytes(value)
                val parsed = parser.bytesToValue(bytes)
                assertEquals(value, parsed, "Round trip failed for value $value")
            }
        }
    }
}
