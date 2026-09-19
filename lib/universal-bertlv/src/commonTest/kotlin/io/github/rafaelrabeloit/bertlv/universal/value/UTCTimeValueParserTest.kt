package io.github.rafaelrabeloit.bertlv.universal.value

import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class UTCTimeValueParserTest {
    private val parser = UTCTimeValueParser()

    @Test
    fun givenValidUtcTimeBytesWhenParseThenShouldReturnCorrectInstant() {
        val bytes = "230630235959Z".encodeToByteArray()
        val expected = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenValidUtcTimeWith2DigitYearIn1900sWhenParseThenShouldReturnCorrectInstant() {
        val bytes = "990630235959Z".encodeToByteArray()
        val expected = Instant.parse("1999-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenValidUtcTimeWithTimezoneOffsetWhenParseThenShouldReturnCorrectInstant() {
        // Note: RFC 5280 requires Z format for certificates, but BER/DER allows timezone offsets
        val bytes = "230630235959+0200".encodeToByteArray()
        val expected = Instant.parse("2023-06-30T21:59:59Z") // 23:59:59+02:00 = 21:59:59Z
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun givenTooShortBytesWhenParseThenShouldThrowException() {
        val bytes = "2306302359".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenInvalidFormatBytesWhenParseThenShouldThrowException() {
        val bytes = "invalid".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenInvalidMonthWhenParseThenShouldThrowException() {
        val bytes = "231330235959Z".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidInstantWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("230630235959Z".encodeToByteArray(), bytes)
    }

    @Test
    fun givenInstantWithNanosecondsWhenConvertToBytesThenShouldTruncateToSeconds() {
        val instant = Instant.parse("2023-06-30T23:59:59.123456789Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("230630235959Z".encodeToByteArray(), bytes)
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnIsoFormat() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals("2023-06-30T23:59:59Z", parser.valueToString(instant))
    }

    @Test
    fun givenUtcTimeWithoutSecondsWhenParseThenShouldThrowException() {
        // Per RFC 5280: seconds MUST be included in UTCTime
        val bytes = "2306302359Z".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenUtcTimeWithoutZOrTimezoneWhenParseThenShouldThrowException() {
        // Must end with Z or timezone offset per ASN.1 specification
        val bytes = "230630235959".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenYear49WhenParseThenShouldInterpretAs2049() {
        // Per ASN.1: 00-49 maps to 2000-2049
        val bytes = "491231235959Z".encodeToByteArray()
        val expected = Instant.parse("2049-12-31T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenYear50WhenParseThenShouldInterpretAs1950() {
        // Per ASN.1: 50-99 maps to 1950-1999
        val bytes = "500101000000Z".encodeToByteArray()
        val expected = Instant.parse("1950-01-01T00:00:00Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenYear99WhenParseThenShouldInterpretAs1999() {
        // Per ASN.1: 50-99 maps to 1950-1999
        val bytes = "991231235959Z".encodeToByteArray()
        val expected = Instant.parse("1999-12-31T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenInvalidTimezoneOffsetFormatWhenParseThenShouldThrowException() {
        // Timezone offset must be ±HHMM format
        val bytes = "230630235959+02".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidNegativeTimezoneOffsetWhenParseThenShouldReturnCorrectInstant() {
        val bytes = "230630235959-0530".encodeToByteArray()
        val expected = Instant.parse("2023-07-01T05:29:59Z") // 23:59:59-05:30 = 05:29:59Z next day
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenRfc5280CompliantFormatWhenEncodeThenShouldAlwaysUseZFormat() {
        // Per RFC 5280: certificates MUST use Z format and include seconds
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        val bytes = parser.valueToBytes(instant)
        val result = bytes.decodeToString()

        // Should be YYMMDDHHMMSSZ format (13 characters)
        assertEquals(13, result.length)
        assertTrue(result.endsWith("Z"), "Result should end with Z, but got: $result")
        assertEquals("230630235959Z", result)
    }
}
