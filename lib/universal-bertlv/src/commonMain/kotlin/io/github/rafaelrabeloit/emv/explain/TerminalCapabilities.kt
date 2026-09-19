package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Terminal Capabilities explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 3-byte Terminal Capabilities tag (EMV Tag 9F33).
 */
@Suppress("MagicNumber")
object TerminalCapabilities : ValueExplainer<ByteArray> {

    private val schema = bitfield("Terminal Capabilities", bytes = 3) {
        byte(1, "Byte 1 - Card Data Input Capability") {
            bit(0, "Manual Key Entry - Terminal can accept manual key entry")
            bit(1, "Magnetic Stripe - Terminal can read magnetic stripe")
            bit(2, "ICC - Terminal can read ICC")
            rfu(3..7)
        }
        byte(2, "Byte 2 - CVM Capability") {
            bit(
                0,
                "Plaintext PIN for ICC Verification - Terminal can accept plaintext PIN for ICC verification",
            )
            bit(
                1,
                "Enciphered PIN for Online Verification - Terminal can accept enciphered PIN for online verification",
            )
            bit(2, "Signature - Terminal can accept signature")
            rfu(3..7)
        }
        byte(3, "Byte 3 - Security Capability") {
            bit(0, "SDA - Terminal can perform Static Data Authentication")
            bit(1, "DDA - Terminal can perform Dynamic Data Authentication")
            bit(2, "CDA - Terminal can perform Combined DDA/AC Generation")
            rfu(3..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
