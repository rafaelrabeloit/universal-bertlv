package io.github.rafaelrabeloit.bertlv.universal.value

import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class UTCTimeValueParserTest {
    private val parser = UTCTimeValueParser()

    @Test
    fun `Given valid UTC time bytes When parse Then should return correct instant`() {
        val bytes = "230630235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given valid UTC time with 2-digit year in 1900s When parse Then should return correct instant`() {
        val bytes = "990630235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("1999-06-30T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given valid UTC time with timezone offset When parse Then should return correct instant`() {
        // Note: RFC 5280 requires Z format for certificates, but BER/DER allows timezone offsets
        val bytes = "230630235959+0200".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2023-06-30T21:59:59Z") // 23:59:59+02:00 = 21:59:59Z
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given empty bytes When parse Then should throw exception`() {
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(ByteArray(0))
        }
    }

    @Test
    fun `Given too short bytes When parse Then should throw exception`() {
        val bytes = "2306302359".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
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
    fun `Given invalid month When parse Then should throw exception`() {
        val bytes = "231330235959Z".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid instant When convert to bytes Then should return correct bytes`() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("230630235959Z".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given instant with nanoseconds When convert to bytes Then should truncate to seconds`() {
        val instant = Instant.parse("2023-06-30T23:59:59.123456789Z")
        val bytes = parser.valueToBytes(instant)
        assertContentEquals("230630235959Z".toByteArray(Charsets.US_ASCII), bytes)
    }

    @Test
    fun `Given value When convert to string Then should return ISO format`() {
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        assertEquals("2023-06-30T23:59:59Z", parser.valueToString(instant))
    }

    @Test
    fun `Given UTC time without seconds When parse Then should throw exception`() {
        // Per RFC 5280: seconds MUST be included in UTCTime
        val bytes = "2306302359Z".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given UTC time without Z or timezone When parse Then should throw exception`() {
        // Must end with Z or timezone offset per ASN.1 specification
        val bytes = "230630235959".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given year 49 When parse Then should interpret as 2049`() {
        // Per ASN.1: 00-49 maps to 2000-2049
        val bytes = "491231235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2049-12-31T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given year 50 When parse Then should interpret as 1950`() {
        // Per ASN.1: 50-99 maps to 1950-1999
        val bytes = "500101000000Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("1950-01-01T00:00:00Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given year 99 When parse Then should interpret as 1999`() {
        // Per ASN.1: 50-99 maps to 1950-1999
        val bytes = "991231235959Z".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("1999-12-31T23:59:59Z")
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given invalid timezone offset format When parse Then should throw exception`() {
        // Timezone offset must be ±HHMM format
        val bytes = "230630235959+02".toByteArray(Charsets.US_ASCII)
        assertFailsWith<IllegalArgumentException> {
            parser.bytesToValue(bytes)
        }
    }

    @Test
    fun `Given valid negative timezone offset When parse Then should return correct instant`() {
        val bytes = "230630235959-0530".toByteArray(Charsets.US_ASCII)
        val expected = Instant.parse("2023-07-01T05:29:59Z") // 23:59:59-05:30 = 05:29:59Z next day
        assertEquals(expected, parser.bytesToValue(bytes))
    }

    @Test
    fun `Given RFC 5280 compliant format When encode Then should always use Z format`() {
        // Per RFC 5280: certificates MUST use Z format and include seconds
        val instant = Instant.parse("2023-06-30T23:59:59Z")
        val bytes = parser.valueToBytes(instant)
        val result = String(bytes, Charsets.US_ASCII)

        // Should be YYMMDDHHMMSSZ format (13 characters)
        assertEquals(13, result.length)
        assert(result.endsWith("Z")) { "Result should end with Z, but got: $result" }
        assertEquals("230630235959Z", result)
    }
}
