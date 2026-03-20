package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.ActionCode

/**
 * ValueExplainer for Issuer Action Code - Default tag.
 * This tag is a 5-byte field indicating the conditions that cause the issuer to be contacted.
 */
object IssuerActionCodeDefault : ActionCode(
    EmvTagDescription.ISSUER_ACTION_CODE_DEFAULT,
)
