package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.iso.LanguageCodeDescription

/**
 * Language Preference explanation.
 * Language Preference is a field that indicates the preferred languages for the application.
 * The field can contain 2, 4, 6, or 8 bytes, with each pair of bytes representing a language code.
 *
 * This is a [ValueExplainer] implementation that provides a detailed explanation of the Language Preference values.
 * It can be used with [TLVValue.ValueHandler] to provide human-readable explanations of Language Preference values.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.LANGUAGE_PREFERENCE
 */
object LanguagePreference : TLVValue.ValueExplainer<String> {
    private const val MIN_LENGTH = 2
    private const val MAX_LENGTH = 8
    private const val LANGUAGE_CODE_LENGTH = 2
    private const val LENGTH_INCREMENT = 2

    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length in MIN_LENGTH..MAX_LENGTH) {
            "Language Preference must be $MIN_LENGTH, ${MIN_LENGTH + LENGTH_INCREMENT}, " +
                "${MIN_LENGTH + 2 * LENGTH_INCREMENT}, or $MAX_LENGTH characters long"
        }
        require(value.length % LANGUAGE_CODE_LENGTH == 0) {
            "Language Preference must have an even number of characters"
        }

        val explanation = Explanation(lineSeparator)
        value.chunked(LANGUAGE_CODE_LENGTH).forEachIndexed { index, code ->
            if (index > 0) explanation.add(LineSeparator)

            val description = LanguageCodeDescription.fromCode(code)?.description
                ?: "Unknown Language Code"
            explanation.add(Line(description))
        }

        return explanation
    }
}
