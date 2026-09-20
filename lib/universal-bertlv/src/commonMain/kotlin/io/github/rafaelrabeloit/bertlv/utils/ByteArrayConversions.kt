package io.github.rafaelrabeloit.bertlv.utils

/**
 * Converts a hex string to a [ByteArray].
 *
 * Whitespace and other non-hex characters are ignored.
 *
 * @throws IllegalArgumentException if the remaining hex digits do not form complete bytes
 */
fun String.hexToByteArray(): ByteArray {
    val hex = filter { it.isDigit() || it.uppercaseChar() in 'A'..'F' }
    require(hex.length % 2 == 0) { "Hex string must have an even number of hex digits" }
    return hex.chunked(HEX_CHAR_IN_BYTE).map { it.toInt(HEX_RADIX).toByte() }.toByteArray()
}

fun ByteArray.toHexString(): String {
    val builder = StringBuilder(size * HEX_CHAR_IN_BYTE)
    for (byte in this) {
        val hexString = (byte.toInt() and BYTE_MASK).toString(HEX_RADIX).uppercase()
        if (hexString.length == 1) builder.append('0')
        builder.append(hexString)
    }
    return builder.toString()
}

fun ByteArray.toInt(bigEndian: Boolean = true): Int {
    require(size <= MAX_INT_BYTES) { "ByteArray length must not exceed $MAX_INT_BYTES bytes" }

    var result = 0
    val indexes = if (bigEndian) indices else indices.reversed()
    for (index in indexes) {
        result = (result shl BITS_IN_BYTE) or (this[index].toInt() and BYTE_MASK)
    }
    return result
}

/** Converts an [Int] to its minimal big-endian [ByteArray] representation. */
fun Int.toByteArray(): ByteArray {
    if (this <= MAX_BYTE_VALUE) return byteArrayOf(toByte())

    val bytes = mutableListOf<Byte>()
    var value = this
    while (value > 0) {
        bytes.add(0, (value and BYTE_MASK).toByte())
        value = value shr BITS_IN_BYTE
    }
    return bytes.toByteArray()
}

/** Converts an [Int] to a fixed-width, big-endian [ByteArray]. */
fun Int.toByteArray(byteCount: Int): ByteArray =
    ByteArray(byteCount) { index ->
        (this shr (BITS_IN_BYTE * (byteCount - 1 - index))).toByte()
    }
