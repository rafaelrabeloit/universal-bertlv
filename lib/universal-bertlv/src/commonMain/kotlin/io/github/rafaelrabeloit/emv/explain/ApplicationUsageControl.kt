package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Application Usage Control explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 2-byte Application Usage Control tag (EMV Tag 9F07).
 */
@Suppress("MagicNumber")
object ApplicationUsageControl : ValueExplainer<ByteArray> {

    private val schema = bitfield("Application Usage Control", bytes = 2) {
        byte(1, "Byte 1 - Transaction Types") {
            bit(0, "Domestic Cash Transactions - Domestic cash transactions are allowed")
            bit(1, "International Cash Transactions - International cash transactions are allowed")
            bit(2, "Domestic Goods - Domestic goods purchases are allowed")
            bit(3, "International Goods - International goods purchases are allowed")
            bit(4, "Domestic Services - Domestic services purchases are allowed")
            bit(5, "International Services - International services purchases are allowed")
            bit(6, "Domestic ATM - Domestic ATM transactions are allowed")
            bit(7, "International ATM - International ATM transactions are allowed")
        }
        byte(2, "Byte 2 - Additional Transaction Types") {
            bit(0, "Domestic Cashback - Domestic cashback transactions are allowed")
            bit(1, "International Cashback - International cashback transactions are allowed")
            rfu(2..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
