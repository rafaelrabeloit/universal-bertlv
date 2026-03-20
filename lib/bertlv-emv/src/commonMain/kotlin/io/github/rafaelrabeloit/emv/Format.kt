package io.github.rafaelrabeloit.emv

/**
 * Represents the format of EMV data fields.
 * Each format corresponds to a specific data type and encoding scheme.
 */
enum class Format {
    /**
     * Numeric format - represents decimal digits only.
     * Example: n6 represents a six-digit number.
     */
    NUMERIC,

    /**
     * Numeric Number format - represents actual numeric values (like amounts and limits).
     * Example: nn8 represents a number up to 8 digits.
     */
    NUMERIC_NUMBER,

    /**
     * Alphanumeric format - represents letters and digits.
     * Example: an12 represents a 12-character string.
     */
    ALPHANUMERIC,

    /**
     * Alphanumeric with special characters format.
     * Example: ans20 represents up to 20 characters including special characters.
     */
    ALPHANUMERIC_SPECIAL,

    /**
     * Binary format - represents fixed-length binary data.
     * Example: b represents fixed-length binary (e.g., 2 bytes).
     */
    BINARY,
}
