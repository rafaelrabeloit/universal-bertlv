package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.ActionCode

/**
 * ValueExplainer for Issuer Action Code - Online tag.
 * This tag is a 5-byte field indicating the conditions that cause the transaction to be sent online.
 */
object IssuerActionCodeOnline : ActionCode(
    EmvTagDescription.ISSUER_ACTION_CODE_ONLINE,
)
