package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Form Factor Indicator explanation (EMV Tag 9F6E).
 *
 * 4-byte bitfield indicating the form factor of the consumer payment device
 * and the type of contactless interface over which the transaction was conducted.
 * Uses bitfield-parser DSL via [BitFieldExplainer] adapter.
 */
@Suppress("MagicNumber")
object FormFactor : ValueExplainer<ByteArray> {

    private val schema = bitfield("Form Factor Indicator", bytes = 4) {
        byte(1, "Byte 1 - Consumer Payment Device Form Factor") {
            enum(0..3, "Consumer Payment Device Form Factor") {
                value(0b0000, "Not Specified")
                value(0b0001, "Standard Card")
                value(0b0010, "Mini-Card")
                value(0b0011, "Non-Card Form Factor")
                value(0b0100, "Consumer Mobile Phone")
                value(0b0101, "Wristband")
            }
            rfu(4..7)
        }
        byte(2, "Byte 2 - Consumer Payment Device Features") {
            bit(0, "Passcode Capable - Passcode capable")
            bit(1, "Signature Panel - Has signature panel")
            bit(2, "Hologram - Has hologram")
            bit(3, "CVV2 - CVV2 present")
            bit(4, "Two-Way Messaging - Supports two-way messaging")
            bit(5, "Cloud-Based Payment - Cloud-based payment credentials")
            rfu(6..7)
        }
        byte(3, "Byte 3 - Contactless Transaction Technology") {
            enum(0..3, "Contactless Interface Type") {
                value(0b0000, "Not Specified")
                value(0b0001, "Type A")
                value(0b0010, "Type B")
                value(0b0011, "Type B (MSD)")
                value(0b0100, "Type A and B")
            }
            rfu(4..7)
        }
        byte(4, "Byte 4 - Payment Transaction Technology") {
            bit(0, "Contact - Contact transaction capability")
            bit(1, "Contactless EMV - Contactless EMV mode supported")
            bit(2, "Contactless MSD - Contactless MSD mode supported")
            rfu(3..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
