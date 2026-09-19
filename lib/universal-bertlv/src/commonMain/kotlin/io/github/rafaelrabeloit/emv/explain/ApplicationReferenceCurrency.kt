package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import io.github.rafaelrabeloit.iso.CurrencyCodeDescription

/**
 * Application Reference Currency explanation.
 * This field contains one or more ISO 4217 currency codes that are used as reference currencies.
 * Each currency code is 3 digits long, and the field can contain 1 to 4 currency codes.
 *
 * This is a [ValueExplainer] implementation that provides a detailed explanation of the currency codes.
 * It can be used with [TLVValue.ValueHandler] to provide human-readable explanations of currency codes.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.APPLICATION_REFERENCE_CURRENCY
 */
object ApplicationReferenceCurrency : TLVValue.ValueExplainer<String> {
    private const val MIN_LENGTH = 3
    private const val MAX_LENGTH = 12
    private const val CURRENCY_CODE_LENGTH = 3

    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length in MIN_LENGTH..MAX_LENGTH) {
            "Application Reference Currency must be between $MIN_LENGTH and $MAX_LENGTH characters long"
        }
        require(value.length % CURRENCY_CODE_LENGTH == 0) {
            "Application Reference Currency must have a length that is a multiple of $CURRENCY_CODE_LENGTH"
        }

        val explanation = Explanation(lineSeparator)

        value.chunked(CURRENCY_CODE_LENGTH).forEachIndexed { index, code ->
            if (index > 0) explanation.add(LineSeparator)

            val description = CurrencyCodeDescription.fromCode(code.toInt())?.description
                ?: "Unknown Currency Code"
            explanation.add(Line(description))
        }

        return explanation
    }
}
