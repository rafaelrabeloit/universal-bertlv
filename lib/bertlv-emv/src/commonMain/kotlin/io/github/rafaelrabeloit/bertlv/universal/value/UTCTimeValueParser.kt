package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.UtcOffset
import kotlinx.datetime.asTimeZone
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime

/**
 * Parser for ASN.1 UTCTime type (Universal tag 23) as defined in ITU-T X.690.
 *
 * The ASN.1 UTCTime type represents date and time values using a restricted character string format.
 *
 * **Encoding Format (BER/DER):**
 * - Universal tag: 23 (0x17)
 * - Always uses primitive encoding
 * - Content is encoded as VisibleString characters representing time
 * - Format: YYMMDDHHMMSSZ or YYMMDDHHMMSS±HHMM
 *
 * **Standard Format Requirements:**
 * - YY: 2-digit year (00-49 = 2000-2049, 50-99 = 1950-1999)
 * - MM: 2-digit month (01-12)
 * - DD: 2-digit day (01-31)
 * - HH: 2-digit hour (00-23)
 * - MM: 2-digit minute (00-59)
 * - SS: 2-digit seconds (00-59) - **REQUIRED per RFC 5280**
 *
 * **Timezone Indicators:**
 * - 'Z': UTC/GMT time (Zulu time) - **REQUIRED per RFC 5280**
 * - '+HHMM' or '-HHMM': Local time with UTC offset (deprecated in certificates)
 *
 * **RFC 5280 Certificate Requirements:**
 * UTCTime values in X.509 certificates MUST:
 * - Be expressed in Greenwich Mean Time (Zulu) using 'Z' suffix
 * - Include seconds (YYMMDDHHMMSSZ format)
 * - Use UTCTime for dates 1950-2049, GeneralizedTime for dates ≥2050
 *
 * **Limitations:**
 * - No fractional seconds (use GeneralizedTime for sub-second precision)
 * - Two-digit year creates century ambiguity
 * - Maximum representable date: December 31, 2049
 *
 * **Standards Compliance:**
 * - ITU-T X.680 (ASN.1 notation)
 * - ITU-T X.690 (BER/CER/DER encoding rules)
 * - RFC 5280 (Internet X.509 Public Key Infrastructure Certificate)
 */
class UTCTimeValueParser : TLVValue.ValueParser<Instant> {
    companion object {
        // Format positions
        const val YEAR_START = 0
        const val YEAR_END = 2
        const val MONTH_START = 2
        const val MONTH_END = 4
        const val DAY_START = 4
        const val DAY_END = 6
        const val HOUR_START = 6
        const val HOUR_END = 8
        const val MINUTE_START = 8
        const val MINUTE_END = 10
        const val SECOND_START = 10
        const val SECOND_END = 12
        const val TIMEZONE_START = 12

        // Format lengths
        const val UTC_FORMAT_LENGTH = 13 // YYMMDDHHMMSSZ
        const val OFFSET_FORMAT_LENGTH = 17 // YYMMDDHHMMSS±HHMM
        const val TIMEZONE_OFFSET_LENGTH = 4 // HHMM

        // Timezone offset positions
        const val TIMEZONE_SIGN_POSITION = 0
        const val TIMEZONE_HOUR_START = 1
        const val TIMEZONE_HOUR_END = 3
        const val TIMEZONE_MINUTE_START = 3
        const val TIMEZONE_MINUTE_END = 5

        // Time ranges
        const val MIN_MONTH = 1
        const val MAX_MONTH = 12
        const val MIN_DAY = 1
        const val MAX_DAY = 31
        const val MIN_HOUR = 0
        const val MAX_HOUR = 23
        const val MIN_MINUTE = 0
        const val MAX_MINUTE = 59
        const val MIN_SECOND = 0
        const val MAX_SECOND = 59

        // Year handling
        const val YEAR_CENTURY_THRESHOLD = 50
        const val YEAR_CENTURY_2000 = 2000
        const val YEAR_CENTURY_1900 = 1900
        const val YEAR_MODULO = 100 // Used to convert full year to two-digit year

        // Time conversion
        const val SECONDS_PER_HOUR = 3600
        const val SECONDS_PER_MINUTE = 60

        // Format characters
        const val UTC_TIMEZONE = 'Z'
        const val POSITIVE_OFFSET = '+'
        const val NEGATIVE_OFFSET = '-'
    }

    override fun bytesToValue(bytes: ByteArray): Instant {
        val str = bytes.decodeToString()
        validateFormat(str)
        val dateTime = parseDateTime(str)
        validateRanges(dateTime)
        val fullYear = handleTwoDigitYear(dateTime.year)
        val localDateTime = LocalDateTime(
            fullYear,
            dateTime.month,
            dateTime.day,
            dateTime.hour,
            dateTime.minute,
            dateTime.second,
        )
        return handleTimezone(str, localDateTime)
    }

    private fun validateFormat(str: String) {
        when {
            str.endsWith(UTC_TIMEZONE.toString()) -> validateUtcFormat(str)
            else -> validateOffsetFormat(str)
        }
    }

    private fun validateUtcFormat(str: String) {
        require(str.length == UTC_FORMAT_LENGTH) {
            "UTCTime with Z must be exactly $UTC_FORMAT_LENGTH characters (YYMMDDHHMMSSZ), " +
                "got ${str.length}"
        }
        require(str.substring(YEAR_START, SECOND_END).all { it.isDigit() }) {
            "UTCTime date/time part must contain only digits"
        }
    }

    private fun validateOffsetFormat(str: String) {
        val tzIndex = str.indexOfAny(charArrayOf(POSITIVE_OFFSET, NEGATIVE_OFFSET), TIMEZONE_START)
        require(tzIndex == TIMEZONE_START) {
            "UTCTime timezone offset must start at position $TIMEZONE_START " +
                "(after YYMMDDHHMMSS)"
        }
        require(str.length == OFFSET_FORMAT_LENGTH) {
            "UTCTime with timezone offset must be exactly " +
                "$OFFSET_FORMAT_LENGTH characters (YYMMDDHHMMSS±HHMM), " +
                "got ${str.length}"
        }
        require(str.substring(YEAR_START, SECOND_END).all { it.isDigit() }) {
            "UTCTime date/time part must contain only digits"
        }
        require(
            str.substring(
                TIMEZONE_START + 1,
                TIMEZONE_START + 1 + TIMEZONE_OFFSET_LENGTH,
            ).all { it.isDigit() },
        ) {
            "UTCTime timezone offset (HHMM) must contain only digits"
        }
    }

    private fun parseDateTime(str: String): DateTimeComponents {
        val year = str.substring(YEAR_START, YEAR_END).toInt()
        val month = str.substring(MONTH_START, MONTH_END).toInt()
        val day = str.substring(DAY_START, DAY_END).toInt()
        val hour = str.substring(HOUR_START, HOUR_END).toInt()
        val minute = str.substring(MINUTE_START, MINUTE_END).toInt()
        val second = str.substring(SECOND_START, SECOND_END).toInt()
        return DateTimeComponents(year, month, day, hour, minute, second)
    }

    private fun validateRanges(dateTime: DateTimeComponents) {
        require(dateTime.month in MIN_MONTH..MAX_MONTH) { "Invalid month: ${dateTime.month}" }
        require(dateTime.day in MIN_DAY..MAX_DAY) { "Invalid day: ${dateTime.day}" }
        require(dateTime.hour in MIN_HOUR..MAX_HOUR) { "Invalid hour: ${dateTime.hour}" }
        require(dateTime.minute in MIN_MINUTE..MAX_MINUTE) { "Invalid minute: ${dateTime.minute}" }
        require(dateTime.second in MIN_SECOND..MAX_SECOND) { "Invalid second: ${dateTime.second}" }
    }

    private fun handleTwoDigitYear(year: Int): Int =
        if (year < YEAR_CENTURY_THRESHOLD) YEAR_CENTURY_2000 + year else YEAR_CENTURY_1900 + year

    private fun handleTimezone(str: String, localDateTime: LocalDateTime): Instant {
        return if (str.endsWith(UTC_TIMEZONE.toString())) {
            localDateTime.toInstant(TimeZone.UTC)
        } else {
            val timezone = parseTimezone(str)
            validateTimezoneRanges(timezone.hours, timezone.minutes)
            val offsetSeconds = timezone.sign * (
                timezone.hours * SECONDS_PER_HOUR +
                    timezone.minutes * SECONDS_PER_MINUTE
                )
            val utcOffset = UtcOffset(seconds = offsetSeconds)
            localDateTime.toInstant(utcOffset.asTimeZone())
        }
    }

    private fun parseTimezone(str: String): TimezoneComponents {
        val tzSign = if (str[TIMEZONE_START + TIMEZONE_SIGN_POSITION] == POSITIVE_OFFSET) 1 else -1
        val tzHours = str.substring(
            TIMEZONE_START + TIMEZONE_HOUR_START,
            TIMEZONE_START + TIMEZONE_HOUR_END,
        ).toInt()
        val tzMinutes = str.substring(
            TIMEZONE_START + TIMEZONE_MINUTE_START,
            TIMEZONE_START + TIMEZONE_MINUTE_END,
        ).toInt()
        return TimezoneComponents(tzSign, tzHours, tzMinutes)
    }

    private fun validateTimezoneRanges(hours: Int, minutes: Int) {
        require(hours in MIN_HOUR..MAX_HOUR) { "Invalid timezone hours: $hours" }
        require(minutes in MIN_MINUTE..MAX_MINUTE) { "Invalid timezone minutes: $minutes" }
    }

    override fun valueToBytes(value: Instant): ByteArray {
        val localDateTime = value.toLocalDateTime(TimeZone.UTC)
        val str = buildString {
            append((localDateTime.year % YEAR_MODULO).toString().padStart(YEAR_END - YEAR_START, '0'))
            append(localDateTime.monthNumber.toString().padStart(MONTH_END - MONTH_START, '0'))
            append(localDateTime.dayOfMonth.toString().padStart(DAY_END - DAY_START, '0'))
            append(localDateTime.hour.toString().padStart(HOUR_END - HOUR_START, '0'))
            append(localDateTime.minute.toString().padStart(MINUTE_END - MINUTE_START, '0'))
            append(localDateTime.second.toString().padStart(SECOND_END - SECOND_START, '0'))
            append(UTC_TIMEZONE) // Always use UTC
        }
        return str.encodeToByteArray()
    }

    override fun valueToString(value: Instant): String = value.toString()

    private data class DateTimeComponents(
        val year: Int,
        val month: Int,
        val day: Int,
        val hour: Int,
        val minute: Int,
        val second: Int,
    )

    private data class TimezoneComponents(
        val sign: Int,
        val hours: Int,
        val minutes: Int,
    )
}
