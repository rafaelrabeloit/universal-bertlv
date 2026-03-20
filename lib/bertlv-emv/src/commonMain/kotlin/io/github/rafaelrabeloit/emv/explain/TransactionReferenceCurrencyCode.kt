package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.CurrencyCode

/**
 * ValueExplainer for Transaction Reference Currency Code tag.
 * This tag is a 2-byte field indicating the reference currency of the transaction.
 */
object TransactionReferenceCurrencyCode : CurrencyCode(
    EmvTagDescription.TRANSACTION_REFERENCE_CURRENCY_CODE,
)
