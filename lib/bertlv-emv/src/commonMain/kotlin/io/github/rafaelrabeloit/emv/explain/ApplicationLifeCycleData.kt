package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Application Life Cycle Data explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 1-byte Application Life Cycle Data tag (EMV Tag 9F0A).
 *
 * @see io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueHandler
 * @see io.github.rafaelrabeloit.emv.EmvTagDescription.APPLICATION_LIFE_CYCLE_DATA
 */
@Suppress("MagicNumber")
object ApplicationLifeCycleData : ValueExplainer<ByteArray> {

    private val schema = bitfield("Application Life Cycle Data", bytes = 1) {
        byte(1, "Byte 1") {
            bit(0, "Application Not Yet Active - Application is not yet active")
            bit(1, "Application Active - Application is active")
            bit(2, "Application Suspended - Application is suspended")
            bit(3, "Application Terminated - Application is terminated")
            rfu(4..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
