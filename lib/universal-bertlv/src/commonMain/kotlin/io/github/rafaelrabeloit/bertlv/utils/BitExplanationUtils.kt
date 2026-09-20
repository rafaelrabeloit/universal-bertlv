package io.github.rafaelrabeloit.bertlv.utils

fun createBitMatrixHeader(): String =
    """
    | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
    ===================================================
    """.trimIndent()

fun StringBuilder.appendBitMatrix(header: String = "", lineSeparator: String) {
    if (header.isNotEmpty()) {
        append(header)
        append(lineSeparator)
    }
    append(createBitMatrixHeader())
    append(lineSeparator)
}

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
