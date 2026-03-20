package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Application Interchange Profile (AIP) explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 2-byte AIP tag (EMV Tag 82).
 */
@Suppress("MagicNumber") // Bit positions are inherent to the bitfield DSL
object ApplicationInterchangeProfile : ValueExplainer<ByteArray> {

    private val schema = bitfield("Application Interchange Profile", bytes = 2) {
        byte(1, "Byte 1") {
            bit(
                0,
                "CDA Supported - Card supports Combined Dynamic Data " +
                    "Authentication and Application Cryptogram Generation",
            )
            bit(
                1,
                "DDA Supported - Card supports Dynamic Data Authentication",
            )
            bit(
                2,
                "SDA Supported - Card supports Static Data Authentication",
            )
            bit(3, "Cardholder Verification is supported")
            bit(4, "Terminal Risk Management is to be performed")
            bit(5, "Issuer Authentication is supported")
            bit(6, "On-device Cardholder Verification is supported")
            rfu(7)
        }
        byte(2, "Byte 2") {
            bit(0, "EMV Mode supported")
            bit(1, "Contactless EMV Mode supported")
            rfu(2..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
