package io.github.rafaelrabeloit.emv.explain.templates

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.iso.CountryCodeDescription

/**
 * Base class for EMV country code value explainers.
 * This class provides a common implementation for explaining country codes.
 */
abstract class CountryCode(
    private val tagDescription: EmvTagDescription,
) : TLVValue.ValueExplainer<Long> {

    companion object {
        private const val MIN_COUNTRY_CODE = 0
        private const val MAX_COUNTRY_CODE = 999
    }

    override fun explain(value: Long, lineSeparator: String): Explanation {
        require(value in MIN_COUNTRY_CODE..MAX_COUNTRY_CODE) {
            "${tagDescription.tagName} must be a valid country code between $MIN_COUNTRY_CODE and $MAX_COUNTRY_CODE"
        }

        val description = CountryCodeDescription.fromNumericCode(value.toInt())?.description
            ?: "Unknown Country Code"

        val explanation = Explanation(lineSeparator)
        explanation.add(Line(description))
        return explanation
    }
}
