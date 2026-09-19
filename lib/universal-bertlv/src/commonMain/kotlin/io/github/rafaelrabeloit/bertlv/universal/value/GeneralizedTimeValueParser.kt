package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.minus
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime

/**
 * Parser for ASN.1 GeneralizedTime type (Universal tag 24) as defined in ITU-T X.690.
 *
 * The ASN.1 GeneralizedTime type represents date and time values using a more flexible
 * format than UTCTime, supporting four-digit years and fractional seconds.
 *
 * **Encoding Format (BER/DER):**
 * - Universal tag: 24 (0x18)
 * - Always uses primitive encoding
 * - Content is encoded as VisibleString characters representing time
 * - Format: YYYYMMDDHHMMSS[.fff]Z or YYYYMMDDHHMMSS[.fff]±HHMM
 *
 * **Standard Format Requirements:**
 * - YYYY: 4-digit year (1000-9999, supporting dates beyond 2049)
 * - MM: 2-digit month (01-12)
 * - DD: 2-digit day (01-31)
 * - HH: 2-digit hour (00-23)
 * - MM: 2-digit minute (00-59)
 * - SS: 2-digit second (00-59)
 * - .fff: Optional fractional seconds (up to 3 digits)
 * - Z: UTC timezone indicator (Zulu time)
 * - ±HHMM: Optional timezone offset from UTC
 *
 * **RFC 5280 Certificate Profile Requirements:**
 * - Times MUST be expressed in Greenwich Mean Time (Zulu) with 'Z' suffix
 * - MUST include seconds (format: YYYYMMDDHHMMSSZ)
 * - MUST NOT include fractional seconds in X.509 certificates
 * - Used for certificate validity dates from year 2050 onwards
 *
 * **Format Examples:**
 * - Certificate time: "20501231235959Z" (Dec 31, 2050 23:59:59 UTC)
 * - General BER time: "20230415143022.500Z" (with fractional seconds)
 * - Timezone offset: "20230415143022+0530" (5.5 hours ahead of UTC)
 *
 * **Standards Compliance:**
 * - ITU-T X.690: ASN.1 encoding rules (BER, DER, CER)
 * - RFC 5280: Internet X.509 Public Key Infrastructure Certificate profile
 * - ISO 8601: International date and time representation standard (referenced)
 *
 * **Note:** This implementation focuses on the RFC 5280 profile for certificate use.
 * Full BER/DER GeneralizedTime with all optional features may require extensions.
 */
class GeneralizedTimeValueParser : TLVValue.ValueParser<Instant> {
    companion object {
        // Format positions
        const val YEAR_START = 0
        const val YEAR_END = 4
        const val MONTH_START = 4
        const val MONTH_END = 6
        const val DAY_START = 6
        const val DAY_END = 8
        const val HOUR_START = 8
        const val HOUR_END = 10
        const val MINUTE_START = 10
        const val MINUTE_END = 12
        const val SECOND_START = 12
        const val SECOND_END = 14
        const val FRACTION_START = 15

        // Format lengths
        const val MIN_FORMAT_LENGTH = 15
        const val FRACTION_DIGITS = 3

        // Time conversion
        const val SECONDS_PER_HOUR = 3600
        const val SECONDS_PER_MINUTE = 60
        const val MILLISECONDS_PER_SECOND = 1000
        const val NANOSECONDS_PER_MILLISECOND = 1_000_000

        // Format characters
        const val FRACTION_SEPARATOR = '.'
        const val UTC_TIMEZONE = 'Z'
        const val POSITIVE_OFFSET = '+'
        const val NEGATIVE_OFFSET = '-'

        // Timezone offset positions
        const val TIMEZONE_HOUR_START = 1
        const val TIMEZONE_HOUR_END = 3
        const val TIMEZONE_MINUTE_START = 3
        const val TIMEZONE_MINUTE_END = 5
    }

    override fun bytesToValue(bytes: ByteArray): Instant {
        require(bytes.isNotEmpty()) { "GeneralizedTime value cannot be empty" }
        val str = bytes.decodeToString()
        require(str.length >= MIN_FORMAT_LENGTH) { "GeneralizedTime must be at least $MIN_FORMAT_LENGTH characters" }
        require(
            str.all {
                it.isDigit() || it == FRACTION_SEPARATOR || it == POSITIVE_OFFSET ||
                    it == NEGATIVE_OFFSET || it == UTC_TIMEZONE
            },
        ) { "Invalid GeneralizedTime format" }

        // Parse date/time part
        val year = str.substring(YEAR_START, YEAR_END).toInt()
        val month = str.substring(MONTH_START, MONTH_END).toInt()
        val day = str.substring(DAY_START, DAY_END).toInt()
        val hour = str.substring(HOUR_START, HOUR_END).toInt()
        val minute = str.substring(MINUTE_START, MINUTE_END).toInt()
        val second = str.substring(SECOND_START, SECOND_END).toInt()
        var fraction = 0
        var offsetSeconds = 0
        var endIndex = SECOND_END
        if (str.length > SECOND_END && str[SECOND_END] == FRACTION_SEPARATOR) {
            // Fractional seconds
            val fracEnd = str.indexOfAny(
                charArrayOf(UTC_TIMEZONE, POSITIVE_OFFSET, NEGATIVE_OFFSET),
                FRACTION_START,
            ).let {
                if (it == -1) str.length else it
            }
            val fracStr = str.substring(FRACTION_START, fracEnd)
            // Only up to milliseconds
            fraction = ("0." + fracStr).toDouble().times(MILLISECONDS_PER_SECOND).toInt()
            endIndex = fracEnd
        } else {
            endIndex = SECOND_END
        }
        // Timezone
        if (str.endsWith(UTC_TIMEZONE.toString())) {
            // UTC
        } else if (
            str.contains(POSITIVE_OFFSET.toString(), ignoreCase = false) ||
            str.contains(NEGATIVE_OFFSET.toString(), ignoreCase = false)
        ) {
            val signIdx = str.indexOfAny(charArrayOf(POSITIVE_OFFSET, NEGATIVE_OFFSET), endIndex)
            if (signIdx != -1) {
                val sign = if (str[signIdx] == POSITIVE_OFFSET) 1 else -1
                val hours = str.substring(signIdx + TIMEZONE_HOUR_START, signIdx + TIMEZONE_HOUR_END).toInt()
                val minutes = str.substring(signIdx + TIMEZONE_MINUTE_START, signIdx + TIMEZONE_MINUTE_END).toInt()
                offsetSeconds = sign * (hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE)
            }
        }
        val local = LocalDateTime(year, month, day, hour, minute, second, fraction * NANOSECONDS_PER_MILLISECOND)
        val instant = local.toInstant(TimeZone.UTC)
        // Adjust for offset: the time is local, so subtract the offset to get UTC
        return instant.minus(offsetSeconds, DateTimeUnit.SECOND)
    }

    override fun valueToBytes(value: Instant): ByteArray {
        val localDateTime = value.toLocalDateTime(TimeZone.UTC)
        val str = buildString {
            append(localDateTime.year.toString().padStart(YEAR_END - YEAR_START, '0'))
            append(localDateTime.monthNumber.toString().padStart(MONTH_END - MONTH_START, '0'))
            append(localDateTime.dayOfMonth.toString().padStart(DAY_END - DAY_START, '0'))
            append(localDateTime.hour.toString().padStart(HOUR_END - HOUR_START, '0'))
            append(localDateTime.minute.toString().padStart(MINUTE_END - MINUTE_START, '0'))
            append(localDateTime.second.toString().padStart(SECOND_END - SECOND_START, '0'))
            if (localDateTime.nanosecond > 0) {
                append(FRACTION_SEPARATOR)
                append(
                    (localDateTime.nanosecond / NANOSECONDS_PER_MILLISECOND).toString().padStart(FRACTION_DIGITS, '0'),
                )
            }
            append(UTC_TIMEZONE)
        }
        return str.encodeToByteArray()
    }

    override fun valueToString(value: Instant): String = value.toString()
}
