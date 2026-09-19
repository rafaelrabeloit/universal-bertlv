package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line

/**
 * Transaction Type explanation.
 * Transaction Type is a single byte numeric field that indicates the type of financial transaction.
 *
 * This is a [ValueExplainer] implementation that provides a detailed explanation of the Transaction Type value.
 * It can be used with [TLVValue.ValueHandler] to provide human-readable explanations of Transaction Type values.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.TRANSACTION_TYPE
 */
object TransactionType : ValueExplainer<String> {
    private const val PURCHASE = "00"
    private const val CASH_ADVANCE = "01"
    private const val CASH_BACK = "02"
    private const val REFUND = "03"
    private const val DEPOSIT = "04"
    private const val PAYMENT = "05"
    private const val BALANCE_INQUIRY = "06"
    private const val ACCOUNT_TRANSFER = "07"
    private const val PAYMENT_WITH_CASH_BACK = "08"
    private const val CASH_DEPOSIT = "09"
    private const val ADMINISTRATIVE = "0A"
    private const val PURCHASE_WITH_CASH_BACK = "0B"
    private const val PURCHASE_WITH_CASH_ADVANCE = "0C"
    private const val PURCHASE_WITH_CASH_BACK_AND_CASH_ADVANCE = "0D"
    private const val PURCHASE_WITH_CASH_BACK_AND_REFUND = "0E"
    private const val PURCHASE_WITH_CASH_ADVANCE_AND_REFUND = "0F"
    private const val PURCHASE_WITH_CASH_BACK_CASH_ADVANCE_AND_REFUND = "10"
    private const val RESERVED_START = "11"
    private const val RESERVED_END = "1F"

    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length == 2) {
            "Transaction Type must be exactly 2 characters long"
        }

        val explanation = Explanation(lineSeparator)
        explanation.add(Line(parse(value)))
        return explanation
    }

    fun parse(value: String) = when (value.uppercase()) {
        PURCHASE -> "Purchase"
        CASH_ADVANCE -> "Cash Advance"
        CASH_BACK -> "Cash Back"
        REFUND -> "Refund"
        DEPOSIT -> "Deposit"
        PAYMENT -> "Payment"
        BALANCE_INQUIRY -> "Balance Inquiry"
        ACCOUNT_TRANSFER -> "Account Transfer"
        PAYMENT_WITH_CASH_BACK -> "Payment with Cash Back"
        CASH_DEPOSIT -> "Cash Deposit"
        ADMINISTRATIVE -> "Administrative"
        PURCHASE_WITH_CASH_BACK -> "Purchase with Cash Back"
        PURCHASE_WITH_CASH_ADVANCE -> "Purchase with Cash Advance"
        PURCHASE_WITH_CASH_BACK_AND_CASH_ADVANCE -> "Purchase with Cash Back and Cash Advance"
        PURCHASE_WITH_CASH_BACK_AND_REFUND -> "Purchase with Cash Back and Refund"
        PURCHASE_WITH_CASH_ADVANCE_AND_REFUND -> "Purchase with Cash Advance and Refund"
        PURCHASE_WITH_CASH_BACK_CASH_ADVANCE_AND_REFUND -> "Purchase with Cash Back, Cash Advance and Refund"
        in RESERVED_START..RESERVED_END -> "Reserved for Future Use"
        else -> "Reserved for Future Use"
    }
}
