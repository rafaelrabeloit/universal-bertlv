package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Card Transaction Qualifiers explanation (EMV Tag 9F6C).
 *
 * 2-byte bitfield indicating the capabilities of the card for the transaction.
 * Uses bitfield-parser DSL via [BitFieldExplainer] adapter.
 */
@Suppress("MagicNumber")
object CardTransactionQualifiers : ValueExplainer<ByteArray> {

    private val schema = bitfield("Card Transaction Qualifiers", bytes = 2) {
        byte(1, "Byte 1 - Contactless Support") {
            bit(0, "Online Cryptogram Required - Online cryptogram required")
            bit(1, "CVM Required - CVM required")
            bit(2, "Contact Chip - (Contact Chip) Offline PIN Required")
            rfu(3..6)
            bit(7, "Go Online If Offline Data Authentication Fails And Reader Is Online Capable")
        }
        byte(2, "Byte 2 - Additional Qualifiers") {
            bit(0, "Online PIN Required - Online PIN required")
            bit(1, "Signature Required - Signature required")
            bit(2, "Issuer Update Processing Supported - Issuer update processing supported")
            bit(3, "Consumer Device CVM Performed - Consumer device CVM performed")
            rfu(4..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
