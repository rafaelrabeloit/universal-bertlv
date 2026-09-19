package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line

/**
 * POS Entry Mode explanation.
 * Indicates the method by which the PAN was entered, according to
 * the first two digits of the ISO 8583:1987 POS Entry Mode.
 *
 * Tag 9F39, 1 byte, numeric format.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.POS_ENTRY_MODE
 */
object PosEntryMode : ValueExplainer<String> {
    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length == 2) {
            "POS Entry Mode must be exactly 2 characters long"
        }

        val explanation = Explanation(lineSeparator)
        explanation.add(Line(parse(value)))
        return explanation
    }

    fun parse(value: String) = when (value.uppercase()) {
        "00" -> "Unspecified"
        "01" -> "Manual key entry"
        "02" -> "Magnetic stripe"
        "03" -> "Barcode"
        "04" -> "Optical Character Recognition (OCR)"
        "05" -> "Integrated circuit card (ICC). CVV can be checked."
        "07" ->
            "Contactless EMV/chip " +
                "(proximity chip)"
        "08" -> "Credential on file"
        "09" -> "E-commerce"
        "10" -> "Credentials on file"
        "79" ->
            "Fallback from integrated circuit card " +
                "(ICC) to magnetic stripe"
        "80" ->
            "Fallback from contactless interface " +
                "to magnetic stripe"
        "81" ->
            "E-commerce with optional " +
                "identity verification"
        "82" -> "Auto-entry via server (issuer, acquirer, or third party)"
        "85" -> "Integrated circuit card (ICC). CVV may not be checked."
        "90" -> "Magnetic stripe as read from track 2"
        "91" ->
            "Contactless magnetic stripe " +
                "(MSD proximity)"
        "95" ->
            "Integrated circuit card (ICC). " +
                "CVV not reliable."
        else -> "Unknown ($value)"
    }
}
