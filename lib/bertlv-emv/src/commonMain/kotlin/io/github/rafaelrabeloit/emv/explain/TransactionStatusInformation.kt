package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Transaction Status Information explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 2-byte TSI tag (EMV Tag 9B).
 *
 * @see io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueHandler
 * @see io.github.rafaelrabeloit.emv.EmvTagDescription.TRANSACTION_STATUS_INFORMATION
 */
@Suppress("MagicNumber")
object TransactionStatusInformation : ValueExplainer<ByteArray> {

    private val schema = bitfield("Transaction Status Information", bytes = 2) {
        byte(1, "Byte 1") {
            bit(0, "Offline Data Authentication Was Performed")
            bit(1, "Cardholder Verification Was Performed")
            bit(2, "Card Risk Management Was Performed")
            bit(3, "Issuer Authentication Was Performed")
            bit(4, "Terminal Risk Management Was Performed")
            bit(5, "Script Processing Was Performed")
            rfu(6..7)
        }
        byte(2, "Byte 2") {
            rfu(0..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
