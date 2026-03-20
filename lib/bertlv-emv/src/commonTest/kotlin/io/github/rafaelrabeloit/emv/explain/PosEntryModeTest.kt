package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class PosEntryModeTest {

    class CommonEntryModes {
        @Test
        fun `Given POS entry mode 00 When explaining Then returns Unspecified`() {
            val result = PosEntryMode.explain("00", "\n").toString()
            assertEquals("Unspecified", result)
        }

        @Test
        fun `Given POS entry mode 01 When explaining Then returns Manual key entry`() {
            val result = PosEntryMode.explain("01", "\n").toString()
            assertEquals("Manual key entry", result)
        }

        @Test
        fun `Given POS entry mode 02 When explaining Then returns Magnetic stripe`() {
            val result = PosEntryMode.explain("02", "\n").toString()
            assertEquals("Magnetic stripe", result)
        }

        @Test
        fun `Given POS entry mode 05 When explaining Then returns ICC`() {
            val result = PosEntryMode.explain("05", "\n").toString()
            assertEquals(
                "Integrated circuit card (ICC). CVV can be checked.",
                result,
            )
        }

        @Test
        fun `Given POS entry mode 07 When explaining Then returns Contactless EMV`() {
            val result = PosEntryMode.explain("07", "\n").toString()
            assertEquals(
                "Contactless EMV/chip (proximity chip)",
                result,
            )
        }

        @Test
        fun `Given POS entry mode 09 When explaining Then returns E-commerce`() {
            val result = PosEntryMode.explain("09", "\n").toString()
            assertEquals("E-commerce", result)
        }

        @Test
        fun `Given POS entry mode 90 When explaining Then returns Mag stripe track 2`() {
            val result = PosEntryMode.explain("90", "\n").toString()
            assertEquals("Magnetic stripe as read from track 2", result)
        }

        @Test
        fun `Given POS entry mode 91 When explaining Then returns Contactless MSD`() {
            val result = PosEntryMode.explain("91", "\n").toString()
            assertEquals(
                "Contactless magnetic stripe (MSD proximity)",
                result,
            )
        }
    }

    class FallbackModes {
        @Test
        fun `Given POS entry mode 79 When explaining Then returns ICC fallback`() {
            val result = PosEntryMode.explain("79", "\n").toString()
            assertEquals(
                "Fallback from integrated circuit card (ICC) to magnetic stripe",
                result,
            )
        }

        @Test
        fun `Given POS entry mode 80 When explaining Then returns contactless fallback`() {
            val result = PosEntryMode.explain("80", "\n").toString()
            assertEquals(
                "Fallback from contactless interface to magnetic stripe",
                result,
            )
        }
    }

    class UnknownValues {
        @Test
        fun `Given unknown POS entry mode When explaining Then returns Unknown`() {
            val result = PosEntryMode.explain("99", "\n").toString()
            assertEquals("Unknown (99)", result)
        }
    }

    class InvalidInput {
        @Test
        fun `Given empty string When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                PosEntryMode.explain("", "\n")
            }
        }

        @Test
        fun `Given string longer than 2 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                PosEntryMode.explain("0001", "\n")
            }
        }
    }
}
