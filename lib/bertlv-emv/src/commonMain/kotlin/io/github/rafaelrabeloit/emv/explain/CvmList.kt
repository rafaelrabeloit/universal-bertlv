package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator

/**
 * Cardholder Verification Method (CVM) List explanation.
 *
 * The CVM List (Tag 8E) is a variable-length structure:
 * - Bytes 1-4: Amount X (binary, threshold for conditions)
 * - Bytes 5-8: Amount Y (binary, secondary threshold)
 * - Remaining bytes: CVM Rules (2 bytes each)
 *
 * Each CVM Rule consists of:
 * - Byte 1: CVM Code
 *   - Bit 8 (MSB): Apply succeeding CV Rule if unsuccessful
 *   - Bit 7: RFU
 *   - Bits 6-1: CVM type code
 * - Byte 2: CVM Condition Code
 */
@Suppress("MagicNumber")
object CvmList : ValueExplainer<ByteArray> {

    private const val HEADER_SIZE = 8
    private const val RULE_SIZE = 2
    private const val APPLY_NEXT_MASK = 0x40

    override fun explain(
        value: ByteArray,
        lineSeparator: String,
    ): Explanation {
        require(value.size >= HEADER_SIZE) {
            "CVM List must be at least $HEADER_SIZE bytes long"
        }
        require((value.size - HEADER_SIZE) % RULE_SIZE == 0) {
            "CVM List rules must be in pairs of 2 bytes"
        }

        val explanation = Explanation(lineSeparator)

        val amountX = extractAmount(value, 0)
        val amountY = extractAmount(value, 4)
        explanation.add(Line("Amount X: $amountX"))
        explanation.add(Line("Amount Y: $amountY"))

        val ruleCount = (value.size - HEADER_SIZE) / RULE_SIZE
        if (ruleCount == 0) {
            explanation.add(LineSeparator)
            explanation.add(Line("No CVM rules defined"))
            return explanation
        }

        for (i in 0 until ruleCount) {
            explanation.add(LineSeparator)
            val offset = HEADER_SIZE + i * RULE_SIZE
            val cvmByte = value[offset].toInt() and 0xFF
            val conditionByte = value[offset + 1].toInt() and 0xFF

            val ruleNumber = i + 1
            explanation.add(Line("Rule $ruleNumber:"))

            val applyNext = (cvmByte and APPLY_NEXT_MASK) != 0
            val cvmCode = cvmByte and 0x3F

            explanation.add(
                Line(
                    "  CVM: ${describeCvmCode(cvmCode)}",
                ),
            )
            if (applyNext) {
                explanation.add(
                    Line(
                        "  Apply succeeding CV Rule" +
                            " if this CVM is unsuccessful",
                    ),
                )
            } else {
                explanation.add(
                    Line(
                        "  Fail cardholder verification" +
                            " if this CVM is unsuccessful",
                    ),
                )
            }
            explanation.add(
                Line(
                    "  Condition: " +
                        describeCvmCondition(conditionByte),
                ),
            )
        }

        return explanation
    }

    private fun extractAmount(
        data: ByteArray,
        offset: Int,
    ): Long {
        var amount = 0L
        for (i in 0 until 4) {
            amount = (amount shl 8) or
                (data[offset + i].toInt() and 0xFF).toLong()
        }
        return amount
    }

    internal fun describeCvmCode(code: Int): String =
        when (code) {
            0x00 -> "Fail CVM processing"
            0x01 -> "Plaintext PIN verification performed by ICC"
            0x02 -> "Enciphered PIN verified online"
            0x03 ->
                "Plaintext PIN verification performed by ICC" +
                    " and signature (paper)"
            0x04 ->
                "Enciphered PIN verification performed by ICC"
            0x05 ->
                "Enciphered PIN verification performed by ICC" +
                    " and signature (paper)"
            0x1E -> "Signature (paper)"
            0x1F -> "No CVM required"
            0x20 -> "No CVM required (amount below threshold)"
            in 0x06..0x1D ->
                "Reserved for future use by this specification"
            in 0x21..0x3E ->
                "Reserved for use by individual" +
                    " payment systems"
            0x3F -> "Not available for use"
            else ->
                "Unknown CVM code (0x${
                    code.toString(16)
                        .padStart(2, '0').uppercase()
                })"
        }

    internal fun describeCvmCondition(condition: Int): String =
        when (condition) {
            0x00 -> "Always"
            0x01 ->
                "If unattended cash"
            0x02 ->
                "If not unattended cash" +
                    " and not manual cash" +
                    " and not purchase with cashback"
            0x03 ->
                "If terminal supports the CVM"
            0x04 ->
                "If manual cash"
            0x05 ->
                "If purchase with cashback"
            0x06 ->
                "If transaction is in the application" +
                    " currency and is under X value"
            0x07 ->
                "If transaction is in the application" +
                    " currency and is over X value"
            0x08 ->
                "If transaction is in the application" +
                    " currency and is under Y value"
            0x09 ->
                "If transaction is in the application" +
                    " currency and is over Y value"
            in 0x0A..0x7F ->
                "Reserved for use by this specification"
            in 0x80..0xFF ->
                "Reserved for use by individual" +
                    " payment systems"
            else ->
                "Unknown condition (0x${
                    condition.toString(16)
                        .padStart(2, '0').uppercase()
                })"
        }
}
