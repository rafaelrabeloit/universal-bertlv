package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.CountryCode

/**
 * ValueExplainer for Terminal Country Code tag.
 * This tag is a 2-byte field indicating the country of the terminal.
 */
object TerminalCountryCode : CountryCode(
    EmvTagDescription.TERMINAL_COUNTRY_CODE,
)
