package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator

/**
 * Issuer Application Data (Tag 9F10) explanation.
 *
 * Supports Visa IAD format:
 * - Byte 1: Derivation Key Index (DKI)
 * - Byte 2: Cryptogram Version Number (CVN)
 * - Bytes 3+: Card Verification Results (CVR)
 *   - CVN 10 (0x0A): 4-byte CVR
 *   - CVN 17 (0x11), CVN 18 (0x12): 6-byte CVR
 * - Remaining: Issuer Discretionary Data (IDD)
 *
 * Unknown formats are displayed as raw hex.
 */
@Suppress("MagicNumber")
object IssuerApplicationData : ValueExplainer<ByteArray> {

    private const val MIN_VISA_IAD_SIZE = 6
    private const val CVN10_CVR_SIZE = 4
    private const val CVN17_CVR_SIZE = 6

    override fun explain(
        value: ByteArray,
        lineSeparator: String,
    ): Explanation {
        require(value.isNotEmpty()) {
            "Issuer Application Data must not be empty"
        }

        val explanation = Explanation(lineSeparator)

        if (value.size >= MIN_VISA_IAD_SIZE && isVisaIad(value)) {
            explainVisaIad(value, explanation)
        } else {
            explanation.add(
                Line("Raw Data: ${value.toHexString()}"),
            )
        }

        return explanation
    }

    private fun isVisaIad(value: ByteArray): Boolean {
        val cvn = value[1].toInt() and 0xFF
        return when (cvn) {
            0x0A -> value.size >= 2 + CVN10_CVR_SIZE
            0x11, 0x12 -> value.size >= 2 + CVN17_CVR_SIZE
            else -> false
        }
    }

    private fun explainVisaIad(
        value: ByteArray,
        explanation: Explanation,
    ) {
        val dki = value[0].toInt() and 0xFF
        val cvn = value[1].toInt() and 0xFF

        explanation.add(Line("Format: Visa IAD"))
        explanation.add(
            Line(
                "Derivation Key Index (DKI): " +
                    "0x${dki.toHexByte()}",
            ),
        )
        explanation.add(
            Line(
                "Cryptogram Version Number (CVN): " +
                    describeCvn(cvn),
            ),
        )

        explanation.add(LineSeparator)
        explanation.add(Line("Card Verification Results (CVR):"))

        when (cvn) {
            0x0A -> explainCvn10Cvr(value, explanation)
            0x11, 0x12 -> explainCvn17Cvr(value, explanation)
        }

        val cvrSize = when (cvn) {
            0x0A -> CVN10_CVR_SIZE
            else -> CVN17_CVR_SIZE
        }
        val iddOffset = 2 + cvrSize
        if (iddOffset < value.size) {
            explanation.add(LineSeparator)
            val idd = value.sliceArray(iddOffset until value.size)
            explanation.add(
                Line(
                    "Issuer Discretionary Data: " +
                        idd.toHexString(),
                ),
            )
        }
    }

    private fun explainCvn10Cvr(
        value: ByteArray,
        explanation: Explanation,
    ) {
        val b1 = value[2].toInt() and 0xFF
        val b2 = value[3].toInt() and 0xFF
        explainCvrByte1(b1, explanation)
        explainCvrByte2(b2, explanation)
        explainCvn10Byte3(value[4].toInt() and 0xFF, explanation)
        val b4 = value[5].toInt() and 0xFF
        explanation.add(
            Line("  CVR Byte 4: 0x${b4.toHexByte()}"),
        )
    }

    private fun explainCvn17Cvr(
        value: ByteArray,
        explanation: Explanation,
    ) {
        val b1 = value[2].toInt() and 0xFF
        val b2 = value[3].toInt() and 0xFF
        explainCvrByte1(b1, explanation)
        explainCvrByte2(b2, explanation)
        explainCvn17Byte3(value[4].toInt() and 0xFF, explanation)
        for (i in 4..6) {
            val b = value[i + 1].toInt() and 0xFF
            explanation.add(
                Line("  CVR Byte $i: 0x${b.toHexByte()}"),
            )
        }
    }

    private fun explainCvrByte1(
        b1: Int,
        explanation: Explanation,
    ) {
        val acType2nd = (b1 shr 6) and 0x03
        explanation.add(
            Line(
                "  AC Returned in 2nd Generate AC: " +
                    describeAcType(acType2nd),
            ),
        )
        val acType1st = (b1 shr 4) and 0x03
        explanation.add(
            Line(
                "  AC Returned in 1st Generate AC: " +
                    describeAcType(acType1st),
            ),
        )
        addFlag(explanation, b1, 0x08, "Offline PIN Verification Performed")
        addFlag(explanation, b1, 0x04, "Offline PIN Verification Not Performed")
        addFlag(explanation, b1, 0x02, "Unable to Go Online")
        addFlag(explanation, b1, 0x01, "Last Online Transaction Not Completed")
    }

    private fun explainCvrByte2(
        b2: Int,
        explanation: Explanation,
    ) {
        val pinTryCounter = (b2 shr 4) and 0x0F
        explanation.add(
            Line("  PIN Try Counter: $pinTryCounter"),
        )
        addFlag(explanation, b2, 0x08, "Offline PIN Verification Successful")
        addFlag(explanation, b2, 0x04, "Last Online ATC Register Mismatch")
        addFlag(
            explanation,
            b2,
            0x02,
            "Lower Consecutive Offline Limit Exceeded",
        )
        addFlag(
            explanation,
            b2,
            0x01,
            "Upper Consecutive Offline Limit Exceeded",
        )
    }

    private fun explainCvn10Byte3(
        b3: Int,
        explanation: Explanation,
    ) {
        addFlag(explanation, b3, 0x80, "Issuer Authentication Failed")
        addFlag(explanation, b3, 0x40, "Script Received")
        addFlag(explanation, b3, 0x20, "Script Failed")
    }

    private fun explainCvn17Byte3(
        b3: Int,
        explanation: Explanation,
    ) {
        addFlag(explanation, b3, 0x80, "Issuer Authentication Failed")
        addFlag(explanation, b3, 0x40, "CIAC-Default Skipped on CAT3")
        addFlag(explanation, b3, 0x20, "Script Received")
        addFlag(explanation, b3, 0x10, "Script Failed")
        addFlag(
            explanation,
            b3,
            0x08,
            "Match Found in Additional Check Table",
        )
        addFlag(
            explanation,
            b3,
            0x04,
            "No Match Found in Additional Check Table",
        )
    }

    private fun addFlag(
        explanation: Explanation,
        byte: Int,
        mask: Int,
        label: String,
    ) {
        val value = if ((byte and mask) != 0) "Yes" else "No"
        explanation.add(Line("  $label: $value"))
    }

    internal fun describeAcType(acType: Int): String =
        when (acType) {
            0x00 -> "AAC (Transaction Declined)"
            0x01 -> "TC (Transaction Approved)"
            0x02 -> "ARQC (Online Authorisation Requested)"
            0x03 -> "RFU"
            else -> "Unknown"
        }

    internal fun describeCvn(cvn: Int): String =
        when (cvn) {
            0x0A -> "CVN 10 (0x0A)"
            0x11 -> "CVN 17 (0x11)"
            0x12 -> "CVN 18 (0x12)"
            else -> "Unknown (0x${cvn.toHexByte()})"
        }

    private fun Int.toHexByte(): String =
        this.toString(16).padStart(2, '0').uppercase()

    private fun ByteArray.toHexString(): String =
        joinToString("") {
            (it.toInt() and 0xFF).toString(16)
                .padStart(2, '0').uppercase()
        }
}
