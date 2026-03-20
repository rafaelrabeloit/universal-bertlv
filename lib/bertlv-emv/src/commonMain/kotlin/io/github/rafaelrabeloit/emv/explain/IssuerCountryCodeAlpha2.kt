package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.iso.CountryCodeDescription

/**
 * Base class for EMV country code value explainers.
 * This class provides a common implementation for explaining country codes.
 */
object IssuerCountryCodeAlpha2 : TLVValue.ValueExplainer<String> {

    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length == EmvTagDescription.ISSUER_COUNTRY_CODE_ALPHA2.lengthRange?.first) {
            "Must be a valid country code in alpha2"
        }

        val description = CountryCodeDescription.fromAlpha2Code(value)?.description
            ?: "Unknown Country Code"

        val explanation = Explanation(lineSeparator)
        explanation.add(Line(description))
        return explanation
    }
}
