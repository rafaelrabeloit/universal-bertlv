package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.CountryCode

/**
 * ValueExplainer for Issuer Country Code tag.
 * This tag is a 2-byte field indicating the country of the issuer.
 */
object IssuerCountryCode : CountryCode(
    EmvTagDescription.ISSUER_COUNTRY_CODE,
)
