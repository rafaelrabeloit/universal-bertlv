package io.github.rafaelrabeloit.bertlv.utils

interface Explainable {
    fun explain(lineSeparator: String = "\n"): Explanation
}
