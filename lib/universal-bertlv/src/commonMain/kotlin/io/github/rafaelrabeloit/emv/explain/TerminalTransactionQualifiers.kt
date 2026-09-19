package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Terminal Transaction Qualifiers explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 4-byte Terminal Transaction Qualifiers tag (EMV Tag 9F66).
 */
@Suppress("MagicNumber")
object TerminalTransactionQualifiers : ValueExplainer<ByteArray> {

    private val schema = bitfield("Terminal Transaction Qualifiers", bytes = 4) {
        byte(1, "Byte 1 - Contactless EMV Mode Support") {
            bit(0, "EMV Mode Supported")
            bit(1, "Magstripe Mode Supported")
            bit(2, "ODA for EMV Mode Supported")
            bit(3, "CDA Supported")
            rfu(4..7)
        }
        byte(2, "Byte 2 - Cardholder Verification and Online Capabilities") {
            bit(0, "Reader Supports Online PIN")
            bit(1, "Reader Supports Signature")
            bit(2, "Reader Supports Consumer Device CVM")
            bit(3, "Reader Supports Contact Chip")
            rfu(4..7)
        }
        byte(3, "Byte 3 - Transaction Qualifiers") {
            bit(0, "Reader is Offline Only")
            bit(1, "Online Cryptogram Required")
            bit(2, "Receipt Required")
            bit(3, "CVM Required")
            rfu(4..7)
        }
        byte(4, "Byte 4 - Contactless Transaction Limitations") {
            bit(0, "No Contactless EMV Transaction Supported")
            bit(1, "No Contactless Magstripe Transaction Supported")
            rfu(2..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
