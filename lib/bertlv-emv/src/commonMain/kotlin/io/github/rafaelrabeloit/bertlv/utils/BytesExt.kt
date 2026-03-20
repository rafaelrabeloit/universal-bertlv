package io.github.rafaelrabeloit.bertlv.utils

import kotlin.experimental.and

/**
 * Byte operation constants
 */
const val ALL_BITS_SET = 0xFF
const val BYTE_MASK = 0xFF
const val MAX_BYTE_VALUE = 0xFF
const val BITS_IN_BYTE = 8
const val MAX_INT_BYTES = 4
const val HEX_RADIX = 16
const val HEX_CHAR_IN_BYTE = 2

fun Byte.matches(mask: Int) = mask.toByte().let { this.and(it) == it }

fun Byte.bits(position: Int, length: Int): Int =
    ((this.toInt() shr (position - 1)) and ((ALL_BITS_SET shl length).inv())).toByte().toInt()

fun ByteArray.toHexString(): String {
    val builder = StringBuilder(size * HEX_CHAR_IN_BYTE) // Each byte becomes 2 hex chars
    for (byte in this) {
        val hex = byte.toInt() and BYTE_MASK
        val hexString = hex.toString(HEX_RADIX).uppercase()
        if (hexString.length == 1) {
            builder.append('0')
        }
        builder.append(hexString)
    }
    return builder.toString()
}

/**
 * Converts a ByteArray to an Int value.
 * @param bigEndian If true, interprets the bytes in big-endian order (most significant byte first).
 *                 If false, interprets them in little-endian order (least significant byte first).
 * @return The Int value represented by the bytes.
 * @throws IllegalArgumentException if the ByteArray length is greater than 4 bytes.
 */
fun ByteArray.toInt(bigEndian: Boolean = true): Int {
    require(size <= MAX_INT_BYTES) { "ByteArray length must not exceed $MAX_INT_BYTES bytes" }

    var result = 0
    if (bigEndian) {
        for (i in indices) {
            result = (result shl BITS_IN_BYTE) or (this[i].toInt() and BYTE_MASK)
        }
    } else {
        for (i in indices.reversed()) {
            result = (result shl BITS_IN_BYTE) or (this[i].toInt() and BYTE_MASK)
        }
    }
    return result
}

/**
 * Converts an Int value to a ByteArray.
 * @return The ByteArray representation of the Int value.
 */
fun Int.toByteArray(): ByteArray {
    if (this <= MAX_BYTE_VALUE) {
        return byteArrayOf(this.toByte())
    }

    val bytes = mutableListOf<Byte>()
    var value = this

    // Handle multi-byte tags
    while (value > 0) {
        bytes.add(0, (value and BYTE_MASK).toByte())
        value = value shr BITS_IN_BYTE
    }

    return bytes.toByteArray()
}

/**
 * Converts a byte to a list of bit strings (0 or 1)
 * @return List of 8 strings representing the bits, with most significant bit first
 */
fun Byte.toBitStrings(): List<String> = this.toInt().let { value ->
    (0..<BITS_IN_BYTE).map { position ->
        ((value shr position) and 0b00000001).toString()
    }.reversed()
}

/**
 * Creates a bit pattern string with dashes for non-relevant bits
 * @param start Start index of relevant bits (inclusive)
 * @param end End index of relevant bits (exclusive)
 * @return Formatted bit pattern string
 */
fun List<String>.toBitPattern(start: Int, end: Int): String = buildString {
    repeat(start) { append("| -  ") }
    append("| ")
    append(subList(start, end).joinToString("  | "))
    repeat(BITS_IN_BYTE - end) { append("  | -") }
    append("  |")
    append("   ")
}

/**
 * Creates a bit matrix header
 */
fun createBitMatrixHeader(): String =
    """
    | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
    ===================================================
    """.trimIndent()

/**
 * Appends a bit matrix header to the StringBuilder
 * @param header Optional header text to be displayed before the matrix
 */
fun StringBuilder.appendBitMatrix(header: String = "", lineSeparator: String) {
    if (header.isNotEmpty()) {
        append(header)
        append(lineSeparator)
    }
    append(createBitMatrixHeader())
    append(lineSeparator)
}

/**
 * Appends a bit explanation line to the StringBuilder
 * @param bits List of bit strings
 * @param start Start index of relevant bits (inclusive)
 * @param end End index of relevant bits (exclusive)
 * @param meaning The meaning of the bits
 */
fun StringBuilder.appendBitExplanation(
    bits: List<String>,
    start: Int,
    end: Int,
    meaning: String,
    lineSeparator: String,
) {
    append(bits.toBitPattern(start, end))
    append(meaning)
    append(lineSeparator)
}
