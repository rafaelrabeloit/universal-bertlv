package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Transaction Status Information explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 2-byte TSI tag (EMV Tag 9B).
 *
 * @see io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueHandler
 * @see io.github.rafaelrabeloit.emv.EmvTagDescription.TRANSACTION_STATUS_INFORMATION
 */
@Suppress("MagicNumber")
object TransactionStatusInformation : ValueExplainer<ByteArray> {

    private val schema = bitfield("Transaction Status Information", bytes = 2) {
        byte(1, "Byte 1") {
            bit(0, "Offline Data Authentication Performed - Offline data authentication was performed")
            bit(1, "Offline Data Authentication Failed - Offline data authentication failed")
            bit(2, "SDA Performed - Static Data Authentication was performed")
            bit(3, "DDA Performed - Dynamic Data Authentication was performed")
            bit(4, "CDA Performed - Combined DDA/AC was performed")
            bit(5, "Cardholder Verification Performed - Cardholder verification was performed")
            bit(6, "Cardholder Verification Failed - Cardholder verification failed")
            bit(7, "Cardholder Verification Not Performed - Cardholder verification was not performed")
        }
        byte(2, "Byte 2") {
            bit(0, "Issuer Authentication Performed - Issuer authentication was performed")
            bit(1, "Issuer Authentication Failed - Issuer authentication failed")
            bit(2, "Issuer Authentication Not Performed - Issuer authentication was not performed")
            rfu(3..7)
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
