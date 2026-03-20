package io.github.rafaelrabeloit.bertlv.universal.value

import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class GeneralizedTimeValueParserTest {
    private val parser = GeneralizedTimeValueParser()

    @Test
    fun `Given valid generalized time bytes When parse Then should return correct instant`() {
        val bytes = "20230630235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given valid generalized time bytes with timezone offset When parse Then should return correct instant`() {
        // ASN.1 GeneralizedTime allows timezone offsets in general BER/DER
        // (though RFC 5280 requires Z format for certificates)
        val bytes = "20230630235959+0100".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2023-06-30T22:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given valid generalized time bytes with fractional seconds When parse Then should return correct instant`() {
        // ASN.1 GeneralizedTime supports fractional seconds in general BER/DER
        // (but RFC 5280 forbids fractional seconds in X.509 certificates)
        val bytes = "20230630235959.123Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2023-06-30T23:59:59.123Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun `Given invalid format bytes When parse Then should throw exception`() {
        val bytes = "invalid".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given invalid date bytes When parse Then should throw exception`() {
        val bytes = "20230232235959Z".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid instant When convert to bytes Then should return correct bytes`() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("20230630235959Z".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given instant with fractional seconds When convert to bytes Then should return correct bytes`() {
        // ASN.1 GeneralizedTime supports fractional seconds in general BER/DER
        val instant = Instant.parse("2023-06-30T23:59:59.123Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("20230630235959.123Z".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given value When convert to string Then should return ISO format`() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals("2023-06-30T23:59:59Z", parser.valueToString(instant))
    }

    @Test
    fun `Given RFC 5280 compliant time When parse Then should be valid`() {
        // RFC 5280 format: YYYYMMDDHHMMSSZ (mandatory seconds, Z timezone, no fractional seconds)
        val bytes = "20501231235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2050-12-31T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given year 2050 boundary When convert to bytes Then should use GeneralizedTime format`() {
        // ASN.1/RFC 5280: Years 2050+ must use GeneralizedTime (4-digit year)
        val instant = Instant.parse("2050-01-01T00:00:00Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("20500101000000Z".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given four digit year When parse Then should handle years beyond UTCTime range`() {
        // GeneralizedTime supports 4-digit years vs UTCTime's 2-digit limitation
        val bytes = "30230630235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("3023-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }
}
