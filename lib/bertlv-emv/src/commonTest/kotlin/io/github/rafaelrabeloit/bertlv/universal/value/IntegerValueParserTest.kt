package io.github.rafaelrabeloit.bertlv.universal.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class IntegerValueParserTest {

    class ParsingTests {
        val parser = IntegerValueParser()

        @Test
        fun `Given single byte When parse Then should return correct integer`() {
            val bytes = byteArrayOf(0x7F.toByte())
            assertEquals(127, parser.bytesToValue(bytes))
        }

        @Test
        fun `Given multiple bytes When parse Then should return correct integer`() {
            val bytes = byteArrayOf(0x00.toByte(), 0xFF.toByte(), 0xFF.toByte())
            assertEquals(65535, parser.bytesToValue(bytes))
        }

        @Test
        fun `Given negative bytes When parse Then should return correct integer`() {
            val bytes = byteArrayOf(0xFF.toByte())
            assertEquals(-1, parser.bytesToValue(bytes))
        }

        @Test
        fun `Given maximum positive integer When parse Then should return correct value`() {
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
        fun `Given minimum negative integer When parse Then should return correct value`() {
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
        fun `Given invalid leading zeros When parse Then should throw exception`() {
            // Per ASN.1 minimal encoding: bits of first octet and bit 8 of second SHALL NOT all be zero
            val bytes = byteArrayOf(0x00.toByte(), 0x00.toByte(), 0x7F.toByte())
            assertFailsWith<IllegalArgumentException> {
                parser.bytesToValue(bytes)
            }
        }

        @Test
        fun `Given invalid leading 0xFF bytes When parse Then should throw exception`() {
            // Per ASN.1 minimal encoding: bits of first octet and bit 8 of second SHALL NOT all be ones
            val bytes = byteArrayOf(0xFF.toByte(), 0xFF.toByte(), 0x80.toByte())
            assertFailsWith<IllegalArgumentException> {
                parser.bytesToValue(bytes)
            }
        }

        @Test
        fun `Given empty bytes When parse Then should throw exception`() {
            assertFailsWith<IllegalArgumentException> {
                parser.bytesToValue(ByteArray(0))
            }
        }
    }

    class SerializationTests {
        val parser = IntegerValueParser()

        @Test
        fun `Given zero When convert to bytes Then should return single zero byte`() {
            val bytes = parser.valueToBytes(0)
            assertContentEquals(byteArrayOf(0x00.toByte()), bytes)
        }

        @Test
        fun `Given positive integer When convert to bytes Then should return correct bytes`() {
            val bytes = parser.valueToBytes(65535)
            assertContentEquals(byteArrayOf(0x00.toByte(), 0xFF.toByte(), 0xFF.toByte()), bytes)
        }

        @Test
        fun `Given negative integer When convert to bytes Then should return correct bytes`() {
            val bytes = parser.valueToBytes(-1)
            assertContentEquals(byteArrayOf(0xFF.toByte()), bytes)
        }

        @Test
        fun `Given maximum positive integer When convert to bytes Then should return correct bytes`() {
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
        fun `Given minimum negative integer When convert to bytes Then should return correct bytes`() {
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
        fun `Given 128 When convert to bytes Then should include leading zero`() {
            // 128 = 0x80, but this would set sign bit, so must be encoded as 0x00 0x80
            val bytes = parser.valueToBytes(128)
            assertContentEquals(byteArrayOf(0x00.toByte(), 0x80.toByte()), bytes)
        }

        @Test
        fun `Given 256 When convert to bytes Then should include leading zero`() {
            // 256 = 0x0100, sign bit is clear so this is the minimal encoding
            val bytes = parser.valueToBytes(256)
            assertContentEquals(byteArrayOf(0x01.toByte(), 0x00.toByte()), bytes)
        }

        @Test
        fun `Given -129 When convert to bytes Then should return correct minimal encoding`() {
            // -129 requires two bytes: 0xFF 0x7F (minimal encoding)
            val bytes = parser.valueToBytes(-129)
            assertContentEquals(byteArrayOf(0xFF.toByte(), 0x7F.toByte()), bytes)
        }
    }

    class StringConversionTests {
        val parser = IntegerValueParser()

        @Test
        fun `Given value When convert to string Then should return correct string`() {
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
        fun `Given positive values When round trip Then should preserve value`() {
            val testValues = listOf(0L, 1L, 127L, 128L, 255L, 256L, 32767L, 32768L, 65535L, 65536L)
            for (value in testValues) {
                val bytes = parser.valueToBytes(value)
                val parsed = parser.bytesToValue(bytes)
                assertEquals(value, parsed, "Round trip failed for value $value")
            }
        }

        @Test
        fun `Given negative values When round trip Then should preserve value`() {
            val testValues = listOf(-1L, -127L, -128L, -129L, -255L, -256L, -32767L, -32768L, -65535L)
            for (value in testValues) {
                val bytes = parser.valueToBytes(value)
                val parsed = parser.bytesToValue(bytes)
                assertEquals(value, parsed, "Round trip failed for value $value")
            }
        }
    }
}
