package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield

/**
 * Cryptogram Information Data (CID) explanation.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 1-byte CID tag (EMV Tag 9F27).
 */
@Suppress("MagicNumber")
object CryptogramInformationData : ValueExplainer<ByteArray> {

    private val schema = bitfield("Cryptogram Information Data", bytes = 1) {
        byte(1, "Byte 1") {
            enum(0..1, "Cryptogram Type") {
                value(0b00, "Application Authentication Cryptogram (AAC)")
                value(0b01, "Authorization Request Cryptogram (ARQC)")
                value(0b10, "Transaction Certificate (TC)")
                value(0b11, "Reserved for Future Use")
            }
            rfu(2..3)
            bit(4, "Issuer Application Data (IAD)") {
                set("Issuer Application Data (IAD) - IAD provided")
                unset("Issuer Application Data (IAD) - IAD not provided")
            }
            bit(5, "Application Transaction Counter (ATC)") {
                set("Application Transaction Counter (ATC) - ATC provided")
                unset("Application Transaction Counter (ATC) - ATC not provided")
            }
            enum(6..7, "Cryptogram Type") {
                value(0b00, "Application Authentication Cryptogram (AAC)")
                value(0b01, "Authorization Request Cryptogram (ARQC)")
                value(0b10, "Transaction Certificate (TC)")
                value(0b11, "Reserved for Future Use")
            }
        }
    }

    private val explainer = BitFieldExplainer(schema)

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        return explainer.explain(value, lineSeparator)
    }
}
