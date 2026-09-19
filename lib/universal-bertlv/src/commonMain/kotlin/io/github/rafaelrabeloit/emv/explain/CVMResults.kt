package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Cardholder Verification Method (CVM) Results explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 3-byte CVM Results tag (EMV Tag 9F34).
 *
 * Byte 1: CVM Performed (method code from CVM List)
 * Byte 2: CVM Condition Code
 * Byte 3: CVM Result
 */
@Suppress("MagicNumber")
object CVMResults : ValueExplainer<ByteArray> {

    private val schema = bitfield("CVM Results", bytes = 3) {
        byte(1, "Byte 1 - CVM Performed") {
            rfu(0..0)
            bit(1, "Apply Succeeding CV Rule") {
                set("Apply succeeding CV Rule if this CVM is unsuccessful")
                unset("Fail cardholder verification if this CVM is unsuccessful")
            }
            enum(2..7, "CVM Type") {
                value(0b000000, "Fail CVM processing")
                value(0b000001, "Plaintext PIN verification performed by ICC")
                value(0b000010, "Enciphered PIN verified online")
                value(0b000011, "Plaintext PIN verification performed by ICC and signature (paper)")
                value(0b000100, "Enciphered PIN verification performed by ICC")
                value(0b000101, "Enciphered PIN verification performed by ICC and signature (paper)")
                value(0b011110, "Signature (paper)")
                value(0b011111, "No CVM required")
            }
        }
        byte(2, "Byte 2 - CVM Condition") {
            enum(0..7, "Condition Code") {
                value(0x00, "Always")
                value(0x01, "If unattended cash")
                value(0x02, "If not unattended cash and not manual cash and not purchase with cashback")
                value(0x03, "If terminal supports the CVM")
                value(0x04, "If manual cash")
                value(0x05, "If purchase with cashback")
                value(0x06, "If transaction is in the application currency and is under X value")
                value(0x07, "If transaction is in the application currency and is over X value")
                value(0x08, "If transaction is in the application currency and is under Y value")
                value(0x09, "If transaction is in the application currency and is over Y value")
            }
        }
        byte(3, "Byte 3 - CVM Result") {
            enum(0..7, "Result") {
                value(0x00, "Unknown")
                value(0x01, "Failed")
                value(0x02, "Successful")
            }
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
