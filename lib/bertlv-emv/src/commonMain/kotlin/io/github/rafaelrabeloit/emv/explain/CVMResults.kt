package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Cardholder Verification Method (CVM) Results explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 1-byte CVM Results tag (EMV Tag 9F34).
 */
@Suppress("MagicNumber")
object CVMResults : ValueExplainer<ByteArray> {

    private val schema = bitfield("CVM Results", bytes = 1) {
        byte(1, "CVM Results") {
            bit(0, "CVM Performed - Cardholder verification was performed")
            bit(1, "CVM Failed - Cardholder verification failed")
            bit(2, "CVM Not Performed - Cardholder verification was not performed")
            bit(3, "CVM Not Supported - Cardholder verification is not supported")
            bit(4, "CVM Not Required - Cardholder verification is not required")
            bit(5, "CVM Not Available - Cardholder verification is not available")
            bit(6, "CVM Not Applicable - Cardholder verification is not applicable")
            rfu(7..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
