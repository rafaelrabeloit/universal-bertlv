package io.github.rafaelrabeloit.bertlv.utils

fun Byte.toBitStrings(): List<String> = toInt().let { value ->
    (0..<BITS_IN_BYTE).map { position -> ((value shr position) and 1).toString() }.reversed()
}

fun List<String>.toBitPattern(start: Int, end: Int): String = buildString {
    repeat(start) { append("| -  ") }
    append("| ")
    append(subList(start, end).joinToString("  | "))
    repeat(BITS_IN_BYTE - end) { append("  | -") }
    append("  |   ")
}
