package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line

/**
 * Service Code explanation.
 * Service code as defined in ISO/IEC 7813 for track 1 and track 2.
 *
 * Tag 5F30, 2 bytes (3 digits in BCD), numeric format.
 * Each digit has a specific meaning:
 * - Digit 1: Interchange rules
 * - Digit 2: Authorization processing
 * - Digit 3: Allowed services and PIN requirements
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.SERVICE_CODE
 */
object ServiceCode : ValueExplainer<String> {
    private const val MIN_LENGTH = 3
    private const val MAX_LENGTH = 4

    override fun explain(value: String, lineSeparator: String): Explanation {
        require(value.length in MIN_LENGTH..MAX_LENGTH) {
            "Service Code must be $MIN_LENGTH or $MAX_LENGTH characters long"
        }

        val digits = value.takeLast(MIN_LENGTH)
        val explanation = Explanation(lineSeparator)
        explanation.add(
            Line(
                "Digit 1 (Interchange): " +
                    parseDigit1(digits[0]),
            ),
        )
        explanation.add(
            Line(
                "Digit 2 (Authorization): " +
                    parseDigit2(digits[1]),
            ),
        )
        explanation.add(
            Line(
                "Digit 3 (Services/PIN): " +
                    parseDigit3(digits[2]),
            ),
        )
        return explanation
    }

    fun parseDigit1(digit: Char) = when (digit) {
        '1' -> "International interchange OK"
        '2' -> "International interchange, use IC (chip) where feasible"
        '5' -> "National interchange only except under bilateral agreement"
        '6' -> "National interchange only except under bilateral agreement, use IC (chip) where feasible"
        '7' -> "No interchange except under bilateral agreement (closed loop)"
        '9' -> "Test"
        else -> "Reserved ($digit)"
    }

    fun parseDigit2(digit: Char) = when (digit) {
        '0' -> "Normal"
        '2' -> "Contact issuer via online means"
        '4' -> "Contact issuer via online means except under bilateral agreement"
        else -> "Reserved ($digit)"
    }

    fun parseDigit3(digit: Char) = when (digit) {
        '0' -> "No restrictions, PIN required"
        '1' -> "No restrictions"
        '2' -> "Goods and services only (no cash)"
        '3' -> "ATM only, PIN required"
        '4' -> "Cash only"
        '5' -> "Goods and services only (no cash), PIN required"
        '6' -> "No restrictions, use PIN where feasible"
        '7' -> "Goods and services only (no cash), use PIN where feasible"
        else -> "Reserved ($digit)"
    }
}
