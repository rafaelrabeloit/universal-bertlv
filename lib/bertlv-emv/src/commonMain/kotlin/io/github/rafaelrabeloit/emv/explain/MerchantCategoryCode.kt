package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.iso.MerchantCategoryCodeDescription

/**
 * Merchant Category Code (MCC) explanation.
 * MCC is a 4-digit numeric field that identifies the type of business or service provided by the merchant.
 *
 * This is a [ValueExplainer] implementation that provides a detailed explanation of the MCC value.
 * It can be used with [TLVValue.ValueHandler] to provide human-readable explanations of MCC values.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.MERCHANT_CATEGORY_CODE
 */
object MerchantCategoryCode : ValueExplainer<Long> {
    override fun explain(value: Long, lineSeparator: String): Explanation {
        val mccDescription = MerchantCategoryCodeDescription.fromCode(value.toInt())
            ?: return Explanation(lineSeparator).apply {
                add(Line("Unknown Merchant Category Code"))
            }

        val explanation = Explanation(lineSeparator)
        explanation.apply {
            add(Line("Description: ${mccDescription.description}"))
            add(LineSeparator)
            add(Line("Category: ${mccDescription.category}"))
        }

        return explanation
    }
}
