package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line

/**
 * Authorisation Response Code explanation.
 * Code that defines the disposition of a message.
 *
 * Tag 8A, 2 bytes, alphanumeric format. Common codes defined by
 * EMV and ISO 8583.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.AUTHORISATION_RESPONSE_CODE
 */
object AuthorisationResponseCode : ValueExplainer<String> {
    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length == 2) {
            "Authorisation Response Code must be exactly 2 characters long"
        }

        val explanation = Explanation(lineSeparator)
        explanation.add(Line(parse(value)))
        return explanation
    }

    fun parse(value: String) = when (value.uppercase()) {
        "00" -> "Approved"
        "01" -> "Refer to card issuer"
        "02" -> "Refer to card issuer, special condition"
        "03" -> "Invalid merchant"
        "04" -> "Pick up card"
        "05" -> "Do not honour"
        "06" -> "Error"
        "07" -> "Pick up card, special condition"
        "08" -> "Honour with identification"
        "10" -> "Partial approval"
        "11" -> "Approved (VIP)"
        "12" -> "Invalid transaction"
        "13" -> "Invalid amount"
        "14" -> "Invalid card number"
        "15" -> "No such issuer"
        "19" -> "Re-enter transaction"
        "21" -> "No action taken"
        "25" -> "Unable to locate record on file"
        "30" -> "Format error"
        "41" -> "Lost card, pick up"
        "43" -> "Stolen card, pick up"
        "51" -> "Insufficient funds"
        "52" -> "No checking account"
        "53" -> "No savings account"
        "54" -> "Expired card"
        "55" -> "Incorrect PIN"
        "57" -> "Transaction not permitted to cardholder"
        "58" -> "Transaction not permitted to terminal"
        "59" -> "Suspected fraud"
        "61" -> "Exceeds withdrawal amount limit"
        "62" -> "Restricted card"
        "63" -> "Security violation"
        "65" -> "Exceeds withdrawal frequency limit"
        "68" -> "Response received too late"
        "75" -> "Allowable number of PIN tries exceeded"
        "76" -> "Unable to locate previous message"
        "77" -> "Repeat or reversal data inconsistent"
        "78" -> "Blocked, first used"
        "80" -> "Visa transactions: credit issuer unavailable"
        "81" -> "PIN cryptographic error found"
        "82" -> "Negative CAM, dCVV, iCVV, or CVV results"
        "83" -> "Unable to verify PIN"
        "85" -> "No reason to decline"
        "86" -> "Cannot verify PIN"
        "91" -> "Issuer or switch inoperative"
        "92" -> "Financial institution or intermediate network unknown"
        "93" -> "Transaction cannot be completed"
        "94" -> "Duplicate transmission"
        "96" -> "System malfunction"
        "Y1" -> "Offline approved"
        "Y3" -> "Offline approved"
        "Z1" -> "Offline declined"
        "Z3" -> "Offline declined"
        else -> "Unknown ($value)"
    }
}
