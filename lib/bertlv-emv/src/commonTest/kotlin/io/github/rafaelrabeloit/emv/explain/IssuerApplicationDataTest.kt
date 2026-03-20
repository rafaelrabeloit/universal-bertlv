package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for Issuer Application Data (Tag 9F10) explanation.
 * Covers Visa IAD formats (CVN 10, CVN 17, CVN 18)
 * and unknown formats.
 */
@Suppress("MagicNumber")
class IssuerApplicationDataTest {

    /**
     * Tests for CVN 10 (0x0A) Visa IAD format
     */
    class Cvn10Tests {
        @Test
        fun `Given Visa IAD with CVN 10 When explaining Then shows format and DKI`() {
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x00,
                0x00,
                0xAB.toByte(),
                0xCD.toByte(),
            )
            val result = explain(value)
            assertContains(result, "Format: Visa IAD")
            assertContains(result, "Derivation Key Index (DKI): 0x01")
            assertContains(result, "CVN 10")
        }

        @Test
        fun `Given CVN 10 with TC in Gen AC When explaining Then shows TC`() {
            // CVR byte 1: 0b01010000 = TC in 2nd, TC in 1st
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x50,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "AC Returned in 1st Generate AC: " +
                    "TC (Transaction Approved)",
            )
            assertContains(
                result,
                "AC Returned in 2nd Generate AC: " +
                    "TC (Transaction Approved)",
            )
        }

        @Test
        fun `Given CVN 10 with ARQC in Gen AC When explaining Then shows ARQC`() {
            // CVR byte 1: 0xA0 = ARQC in 2nd, ARQC in 1st
            val value = byteArrayOf(
                0x01,
                0x0A,
                0xA0.toByte(),
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "AC Returned in 1st Generate AC: " +
                    "ARQC (Online Authorisation Requested)",
            )
        }

        @Test
        fun `Given CVN 10 with AAC in Gen AC When explaining Then shows AAC`() {
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "AC Returned in 1st Generate AC: " +
                    "AAC (Transaction Declined)",
            )
        }

        @Test
        fun `Given CVN 10 with offline PIN performed When explaining Then shows Yes`() {
            // CVR byte 1: bit 3 set = 0x08
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x08,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "Offline PIN Verification Performed: Yes",
            )
        }

        @Test
        fun `Given CVN 10 with PIN try counter When explaining Then shows counter`() {
            // CVR byte 2: upper nibble = 3
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x30,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(result, "PIN Try Counter: 3")
        }

        @Test
        fun `Given CVN 10 with issuer auth failed When explaining Then shows Yes`() {
            // CVR byte 3: bit 7 (0x80)
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x80.toByte(),
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "Issuer Authentication Failed: Yes",
            )
        }

        @Test
        fun `Given CVN 10 with script received When explaining Then shows Yes`() {
            // CVR byte 3: bit 6 (0x40)
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x40,
                0x00,
            )
            val result = explain(value)
            assertContains(result, "Script Received: Yes")
        }

        @Test
        fun `Given CVN 10 with IDD When explaining Then shows IDD hex`() {
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x00,
                0x00,
                0xDE.toByte(),
                0xAD.toByte(),
                0xBE.toByte(),
                0xEF.toByte(),
            )
            val result = explain(value)
            assertContains(
                result,
                "Issuer Discretionary Data: DEADBEEF",
            )
        }

        @Test
        fun `Given CVN 10 with no IDD When explaining Then does not show IDD`() {
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertEquals(false, result.contains("Issuer Discretionary Data"))
        }

        @Test
        fun `Given CVN 10 with limit exceeded flags When explaining Then shows correctly`() {
            // CVR byte 2: 0x03 = both limits exceeded
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x03,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "Lower Consecutive Offline Limit Exceeded: Yes",
            )
            assertContains(
                result,
                "Upper Consecutive Offline Limit Exceeded: Yes",
            )
        }
    }

    /**
     * Tests for CVN 17 (0x11) Visa IAD format
     */
    class Cvn17Tests {
        @Test
        fun `Given Visa IAD with CVN 17 When explaining Then shows format`() {
            val value = byteArrayOf(
                0x02,
                0x11,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(result, "Format: Visa IAD")
            assertContains(result, "CVN 17")
        }

        @Test
        fun `Given CVN 17 with ARQC in 1st AC When explaining Then shows ARQC`() {
            // CVR byte 1: 0x20 = ARQC in 1st
            val value = byteArrayOf(
                0x01,
                0x11,
                0x20,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "AC Returned in 1st Generate AC: " +
                    "ARQC (Online Authorisation Requested)",
            )
        }

        @Test
        fun `Given CVN 17 with CIAC skipped flag When explaining Then shows Yes`() {
            // CVR byte 3: bit 6 (0x40)
            val value = byteArrayOf(
                0x01,
                0x11,
                0x00,
                0x00,
                0x40,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "CIAC-Default Skipped on CAT3: Yes",
            )
        }

        @Test
        fun `Given CVN 17 with match in check table When explaining Then shows Yes`() {
            // CVR byte 3: bit 3 (0x08)
            val value = byteArrayOf(
                0x01,
                0x11,
                0x00,
                0x00,
                0x08,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(
                result,
                "Match Found in Additional Check Table: Yes",
            )
        }

        @Test
        fun `Given CVN 17 with IDD When explaining Then shows IDD hex`() {
            val value = byteArrayOf(
                0x01,
                0x11,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0xCA.toByte(),
                0xFE.toByte(),
            )
            val result = explain(value)
            assertContains(
                result,
                "Issuer Discretionary Data: CAFE",
            )
        }
    }

    /**
     * Tests for CVN 18 (0x12) Visa IAD format
     */
    class Cvn18Tests {
        @Test
        fun `Given Visa IAD with CVN 18 When explaining Then shows format`() {
            val value = byteArrayOf(
                0x03,
                0x12,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            val result = explain(value)
            assertContains(result, "Format: Visa IAD")
            assertContains(result, "CVN 18")
        }
    }

    /**
     * Tests for unknown/raw formats
     */
    class UnknownFormatTests {
        @Test
        fun `Given non-Visa IAD When explaining Then shows raw hex`() {
            val value = byteArrayOf(
                0x01,
                0x05,
                0x03,
                0x04,
            )
            val result = explain(value)
            assertContains(result, "Raw Data: 01050304")
        }

        @Test
        fun `Given short data When explaining Then shows raw hex`() {
            val value = byteArrayOf(0x01, 0x02)
            val result = explain(value)
            assertContains(result, "Raw Data: 0102")
        }

        @Test
        fun `Given single byte When explaining Then shows raw hex`() {
            val value = byteArrayOf(0x42)
            val result = explain(value)
            assertContains(result, "Raw Data: 42")
        }
    }

    /**
     * Tests for invalid input
     */
    class InvalidInputTests {
        @Test
        fun `Given empty byte array When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                IssuerApplicationData.explain(byteArrayOf(), "\n")
            }
        }
    }

    /**
     * Tests for AC type descriptions
     */
    class AcTypeTests {
        @Test
        fun `Given AAC type When describing Then returns correct label`() {
            assertEquals(
                "AAC (Transaction Declined)",
                IssuerApplicationData.describeAcType(0),
            )
        }

        @Test
        fun `Given TC type When describing Then returns correct label`() {
            assertEquals(
                "TC (Transaction Approved)",
                IssuerApplicationData.describeAcType(1),
            )
        }

        @Test
        fun `Given ARQC type When describing Then returns correct label`() {
            assertEquals(
                "ARQC (Online Authorisation Requested)",
                IssuerApplicationData.describeAcType(2),
            )
        }

        @Test
        fun `Given RFU type When describing Then returns correct label`() {
            assertEquals(
                "RFU",
                IssuerApplicationData.describeAcType(3),
            )
        }
    }

    /**
     * Tests for CVN descriptions
     */
    class CvnDescriptionTests {
        @Test
        fun `Given CVN 10 When describing Then returns correct label`() {
            assertContains(
                IssuerApplicationData.describeCvn(0x0A),
                "CVN 10",
            )
        }

        @Test
        fun `Given CVN 17 When describing Then returns correct label`() {
            assertContains(
                IssuerApplicationData.describeCvn(0x11),
                "CVN 17",
            )
        }

        @Test
        fun `Given CVN 18 When describing Then returns correct label`() {
            assertContains(
                IssuerApplicationData.describeCvn(0x12),
                "CVN 18",
            )
        }

        @Test
        fun `Given unknown CVN When describing Then returns Unknown`() {
            assertContains(
                IssuerApplicationData.describeCvn(0xFF),
                "Unknown",
            )
        }
    }

    /**
     * Tests for custom line separator
     */
    class LineSeparatorTests {
        @Test
        fun `Given Visa IAD with custom separator When explaining Then uses separator`() {
            val value = byteArrayOf(
                0x01,
                0x0A,
                0x00,
                0x00,
                0x00,
                0x00,
            )
            val result =
                IssuerApplicationData.explain(value, "|").toString()
            assertContains(result, "|")
        }
    }

    companion object {
        private fun explain(value: ByteArray): String =
            IssuerApplicationData.explain(value, "\n").toString()
    }
}
