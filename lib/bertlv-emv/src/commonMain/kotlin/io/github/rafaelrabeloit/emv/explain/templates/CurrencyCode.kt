package io.github.rafaelrabeloit.emv.explain.templates

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.iso.CurrencyCodeDescription

/**
 * Base class for EMV currency code value explainers.
 * This class provides a common implementation for explaining currency codes.
 */
abstract class CurrencyCode(
    private val tagDescription: EmvTagDescription,
) : TLVValue.ValueExplainer<Long> {

    companion object {
        private const val MIN_CURRENCY_CODE = 0
        private const val MAX_CURRENCY_CODE = 999
    }

    override fun explain(value: Long, lineSeparator: String): Explanation {
        require(value in MIN_CURRENCY_CODE..MAX_CURRENCY_CODE) {
            "${tagDescription.tagName} must be a valid currency code between $MIN_CURRENCY_CODE and $MAX_CURRENCY_CODE"
        }

        val description = CurrencyCodeDescription.fromCode(value.toInt())?.description
            ?: "Unknown Currency Code"

        val explanation = Explanation(lineSeparator)
        explanation.add(Line(description))
        return explanation
    }
}
