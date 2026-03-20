package io.github.rafaelrabeloit.bertlv.universal.value

import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class GeneralizedTimeValueParserTest {
    private val parser = GeneralizedTimeValueParser()

    @Test
    fun givenValidGeneralizedTimeBytesWhenParseThenShouldReturnCorrectInstant() {
        val bytes = "20230630235959Z".encodeToByteArray()
        val expected = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenValidGeneralizedTimeBytesWithTimezoneOffsetWhenParseThenShouldReturnCorrectInstant() {
        // ASN.1 GeneralizedTime allows timezone offsets in general BER/DER
        // (though RFC 5280 requires Z format for certificates)
        val bytes = "20230630235959+0100".encodeToByteArray()
        val expected = Instant.parse("2023-06-30T22:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenValidGeneralizedTimeBytesWithFractionalSecondsWhenParseThenShouldReturnCorrectInstant() {
        // ASN.1 GeneralizedTime supports fractional seconds in general BER/DER
        // (but RFC 5280 forbids fractional seconds in X.509 certificates)
        val bytes = "20230630235959.123Z".encodeToByteArray()
        val expected = Instant.parse("2023-06-30T23:59:59.123Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenEmptyBytesWhenParseThenShouldThrowException() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
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
    fun givenInvalidDateBytesWhenParseThenShouldThrowException() {
        val bytes = "20230232235959Z".encodeToByteArray()
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun givenValidInstantWhenConvertToBytesThenShouldReturnCorrectBytes() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("20230630235959Z".encodeToByteArray(), bytes)
    }

    @Test
    fun givenInstantWithFractionalSecondsWhenConvertToBytesThenShouldReturnCorrectBytes() {
        // ASN.1 GeneralizedTime supports fractional seconds in general BER/DER
        val instant = Instant.parse("2023-06-30T23:59:59.123Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("20230630235959.123Z".encodeToByteArray(), bytes)
    }

    @Test
    fun givenValueWhenConvertToStringThenShouldReturnIsoFormat() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals("2023-06-30T23:59:59Z", parser.valueToString(instant))
    }

    @Test
    fun givenRfc5280CompliantTimeWhenParseThenShouldBeValid() {
        // RFC 5280 format: YYYYMMDDHHMMSSZ (mandatory seconds, Z timezone, no fractional seconds)
        val bytes = "20501231235959Z".encodeToByteArray()
        val expected = Instant.parse("2050-12-31T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun givenYear2050BoundaryWhenConvertToBytesThenShouldUseGeneralizedtimeFormat() {
        // ASN.1/RFC 5280: Years 2050+ must use GeneralizedTime (4-digit year)
        val instant = Instant.parse("2050-01-01T00:00:00Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("20500101000000Z".encodeToByteArray(), bytes)
    }

    @Test
    fun givenFourDigitYearWhenParseThenShouldHandleYearsBeyondUtctimeRange() {
        // GeneralizedTime supports 4-digit years vs UTCTime's 2-digit limitation
        val bytes = "30230630235959Z".encodeToByteArray()
        val expected = Instant.parse("3023-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }
}
