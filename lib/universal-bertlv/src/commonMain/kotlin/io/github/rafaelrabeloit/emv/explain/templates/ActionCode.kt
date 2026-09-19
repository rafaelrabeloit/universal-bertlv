package io.github.rafaelrabeloit.emv.explain.templates

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bitfield.dsl.bitfield
import io.github.rafaelrabeloit.emv.EmvTagDescription

/**
 * Base class for EMV action codes that use bit-based fields.
 *
 * Migrated to bitfield-parser DSL. The schema defines the meaning of each bit
 * in the 5-byte action code / TVR structure (EMV Tags 95, 9F0D, 9F0E, 9F0F).
 */
@Suppress("MagicNumber") // Bit positions are inherent to the bitfield DSL
abstract class ActionCode(
    private val tagDescription: EmvTagDescription,
) : TLVValue.ValueExplainer<ByteArray> {

    companion object {
        private val schema = bitfield("Action Code", bytes = 5) {
            byte(1, "Byte 1 - Offline Data Authentication") {
                bit(0, "SDA Failed - Static Data Authentication failed")
                bit(
                    1,
                    "ICC Data Missing - ICC data required for offline processing is missing",
                )
                bit(
                    2,
                    "Card Appears on Terminal Exception File - Card is in the terminal's exception file",
                )
                bit(3, "DDA Failed - Dynamic Data Authentication failed")
                bit(4, "CDA Failed - Combined DDA/AC Generation failed")
                bit(5, "SDA Selected - Static Data Authentication was selected")
                rfu(6..7)
            }
            byte(2, "Byte 2 - Cardholder Verification") {
                bit(0, "ICC and Terminal Have Different Application Versions")
                bit(1, "Expired Application - Application has expired")
                bit(
                    2,
                    "Application Not Yet Effective - Application is not yet effective",
                )
                bit(3, "Requested Service Not Allowed for Card Product")
                bit(4, "New Card - Card is new")
                bit(
                    5,
                    "CVM Not Successful - Cardholder Verification Method was not successful",
                )
                bit(
                    6,
                    "Unrecognized CVM - Cardholder Verification Method is not recognized",
                )
                bit(7, "PIN Entry Required and PIN Pad Not Present or Not Working")
            }
            byte(3, "Byte 3 - Transaction Results") {
                bit(0, "Transaction Exceeds Floor Limit")
                bit(1, "Lower Consecutive Offline Limit Exceeded")
                bit(2, "Upper Consecutive Offline Limit Exceeded")
                bit(3, "Transaction Selected Randomly for Online Processing")
                bit(4, "Merchant Forced Transaction Online")
                rfu(5..7)
            }
            byte(4, "Byte 4 - Terminal Risk Management") {
                bit(
                    0,
                    "Default TDOL Used - Default Transaction Certificate Data Object List was used",
                )
                bit(1, "Issuer Authentication Failed")
                bit(2, "Script Processing Failed Before Final GENERATE AC")
                bit(3, "Script Processing Failed After Final GENERATE AC")
                rfu(4..7)
            }
            byte(5, "Byte 5 - Issuer Discretionary") {
                bit(
                    0,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    1,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    2,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    3,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    4,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    5,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    6,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
                bit(
                    7,
                    "Issuer Discretionary - All bits in this byte are reserved for issuer use",
                )
            }
        }

        private val explainer = BitFieldExplainer(schema)
    }

    override fun explain(value: ByteArray, lineSeparator: String): Explanation {
        require(value.size == tagDescription.lengthRange?.first) {
            "${tagDescription.tagName} must be exactly ${tagDescription.lengthRange?.first} bytes long"
        }

        return explainer.explain(value, lineSeparator)
    }
}
