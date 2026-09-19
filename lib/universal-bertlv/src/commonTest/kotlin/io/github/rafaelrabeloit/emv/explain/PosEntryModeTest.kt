package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class PosEntryModeTest {

    class CommonEntryModes {
        @Test
        fun givenPosEntryMode00WhenExplainingThenReturnsUnspecified() {
            val result = PosEntryMode.explain("00", "\n").toString()
            assertEquals("Unspecified", result)
        }

        @Test
        fun givenPosEntryMode01WhenExplainingThenReturnsManualKeyEntry() {
            val result = PosEntryMode.explain("01", "\n").toString()
            assertEquals("Manual key entry", result)
        }

        @Test
        fun givenPosEntryMode02WhenExplainingThenReturnsMagneticStripe() {
            val result = PosEntryMode.explain("02", "\n").toString()
            assertEquals("Magnetic stripe", result)
        }

        @Test
        fun givenPosEntryMode05WhenExplainingThenReturnsIcc() {
            val result = PosEntryMode.explain("05", "\n").toString()
            assertEquals(
                "Integrated circuit card (ICC). CVV can be checked.",
                result,
            )
        }

        @Test
        fun givenPosEntryMode07WhenExplainingThenReturnsContactlessEmv() {
            val result = PosEntryMode.explain("07", "\n").toString()
            assertEquals(
                "Contactless EMV/chip (proximity chip)",
                result,
            )
        }

        @Test
        fun givenPosEntryMode09WhenExplainingThenReturnsECommerce() {
            val result = PosEntryMode.explain("09", "\n").toString()
            assertEquals("E-commerce", result)
        }

        @Test
        fun givenPosEntryMode90WhenExplainingThenReturnsMagStripeTrack2() {
            val result = PosEntryMode.explain("90", "\n").toString()
            assertEquals("Magnetic stripe as read from track 2", result)
        }

        @Test
        fun givenPosEntryMode91WhenExplainingThenReturnsContactlessMsd() {
            val result = PosEntryMode.explain("91", "\n").toString()
            assertEquals(
                "Contactless magnetic stripe (MSD proximity)",
                result,
            )
        }
    }

    class FallbackModes {
        @Test
        fun givenPosEntryMode79WhenExplainingThenReturnsIccFallback() {
            val result = PosEntryMode.explain("79", "\n").toString()
            assertEquals(
                "Fallback from integrated circuit card (ICC) to magnetic stripe",
                result,
            )
        }

        @Test
        fun givenPosEntryMode80WhenExplainingThenReturnsContactlessFallback() {
            val result = PosEntryMode.explain("80", "\n").toString()
            assertEquals(
                "Fallback from contactless interface to magnetic stripe",
                result,
            )
        }
    }

    class UnknownValues {
        @Test
        fun givenUnknownPosEntryModeWhenExplainingThenReturnsUnknown() {
            val result = PosEntryMode.explain("99", "\n").toString()
            assertEquals("Unknown (99)", result)
        }
    }

    class InvalidInput {
        @Test
        fun givenEmptyStringWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                PosEntryMode.explain("", "\n")
            }
        }

        @Test
        fun givenStringLongerThan2WhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                PosEntryMode.explain("0001", "\n")
            }
        }
    }
}
