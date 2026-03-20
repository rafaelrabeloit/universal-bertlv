package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Application Priority Indicator explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 1-byte Application Priority Indicator tag (EMV Tag 87).
 *
 * @see io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueHandler
 * @see io.github.rafaelrabeloit.emv.EmvTagDescription.APPLICATION_PRIORITY_INDICATOR
 */
@Suppress("MagicNumber")
object ApplicationPriorityIndicator : ValueExplainer<ByteArray> {

    private val schema = bitfield("Application Priority Indicator", bytes = 1) {
        byte(1, "Byte 1") {
            bit(0, "Priority - Application has priority")
            rfu(1..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
