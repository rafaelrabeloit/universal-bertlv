package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.ActionCode

/**
 * ValueExplainer for Issuer Action Code - Denial tag.
 * This tag is a 5-byte field indicating the conditions that cause the transaction to be denied.
 */
object IssuerActionCodeDenial : ActionCode(
    EmvTagDescription.ISSUER_ACTION_CODE_DENIAL,
)
