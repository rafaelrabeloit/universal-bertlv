package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.CurrencyCode

/**
 * ValueExplainer for Transaction Currency Code tag.
 * This tag is a 2-byte field indicating the currency of the transaction.
 */
object TransactionCurrencyCode : CurrencyCode(
    EmvTagDescription.TRANSACTION_CURRENCY_CODE,
)
