package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Additional Terminal Capabilities explanation (EMV Tag 9F40).
 *
 * 5-byte bitfield indicating data input and output capabilities of the terminal.
 * Uses bitfield-parser DSL via [BitFieldExplainer] adapter.
 */
@Suppress("MagicNumber")
object AdditionalTerminalCapabilities : ValueExplainer<ByteArray> {

    private val schema = bitfield("Additional Terminal Capabilities", bytes = 5) {
        byte(1, "Byte 1 - Transaction Type Capability") {
            bit(0, "Cash - Cash transactions supported")
            bit(1, "Goods - Goods transactions supported")
            bit(2, "Services - Services transactions supported")
            bit(3, "Cashback - Cashback transactions supported")
            bit(4, "Inquiry - Inquiry supported")
            bit(5, "Transfer - Transfer supported")
            bit(6, "Payment - Payment supported")
            bit(7, "Administrative - Administrative transactions supported")
        }
        byte(2, "Byte 2 - Transaction Type Capability (continued)") {
            bit(0, "Cash Deposit - Cash deposit supported")
            rfu(1..7)
        }
        byte(3, "Byte 3 - Terminal Data Input Capability") {
            bit(0, "Numeric Keys - Numeric keys supported")
            bit(1, "Alphabetic and Special Characters Keys - Alphabetic and special characters keys supported")
            bit(2, "Command Keys - Command keys supported")
            bit(3, "Function Keys - Function keys supported")
            rfu(4..7)
        }
        byte(4, "Byte 4 - Terminal Data Output Capability") {
            bit(0, "Print, Attendant - Print capability, attendant")
            bit(1, "Print, Cardholder - Print capability, cardholder")
            bit(2, "Display, Attendant - Display capability, attendant")
            bit(3, "Display, Cardholder - Display capability, cardholder")
            rfu(4..5)
            bit(6, "Code Table 10 - Code table 10 supported")
            bit(7, "Code Table 9 - Code table 9 supported")
        }
        byte(5, "Byte 5 - Terminal Data Output Capability (continued)") {
            bit(0, "Code Table 8 - Code table 8 supported")
            bit(1, "Code Table 7 - Code table 7 supported")
            bit(2, "Code Table 6 - Code table 6 supported")
            bit(3, "Code Table 5 - Code table 5 supported")
            bit(4, "Code Table 4 - Code table 4 supported")
            bit(5, "Code Table 3 - Code table 3 supported")
            bit(6, "Code Table 2 - Code table 2 supported")
            bit(7, "Code Table 1 - Code table 1 supported")
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
