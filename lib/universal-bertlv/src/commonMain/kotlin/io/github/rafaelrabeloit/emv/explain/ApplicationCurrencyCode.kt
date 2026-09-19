package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.CurrencyCode

/**
 * ValueExplainer for Application Currency Code tag.
 * This tag is a 2-byte field indicating the currency of the application.
 */
object ApplicationCurrencyCode : CurrencyCode(
    EmvTagDescription.APPLICATION_CURRENCY_CODE,
)
