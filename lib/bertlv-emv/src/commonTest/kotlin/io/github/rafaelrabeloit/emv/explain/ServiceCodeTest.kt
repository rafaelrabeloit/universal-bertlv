package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class ServiceCodeTest {

    class Digit1InterchangeTests {
        @Test
        fun `Given service code 101 When explaining Then digit 1 is International interchange OK`() {
            val result = ServiceCode.explain("0101", "\n").toString()
            assertContains(result, "International interchange OK")
        }

        @Test
        fun `Given service code 201 When explaining Then digit 1 is use IC where feasible`() {
            val result = ServiceCode.explain("0201", "\n").toString()
            assertContains(result, "use IC (chip) where feasible")
        }

        @Test
        fun `Given service code 501 When explaining Then digit 1 is National interchange only`() {
            val result = ServiceCode.explain("0501", "\n").toString()
            assertContains(result, "National interchange only")
        }

        @Test
        fun `Given service code 901 When explaining Then digit 1 is Test`() {
            val result = ServiceCode.explain("0901", "\n").toString()
            assertContains(result, "Digit 1 (Interchange): Test")
        }
    }

    class Digit2AuthorizationTests {
        @Test
        fun `Given service code 100 When explaining Then digit 2 is Normal`() {
            val result = ServiceCode.explain("0100", "\n").toString()
            assertContains(result, "Digit 2 (Authorization): Normal")
        }

        @Test
        fun `Given service code 120 When explaining Then digit 2 is Contact issuer via online`() {
            val result = ServiceCode.explain("0120", "\n").toString()
            assertContains(result, "Contact issuer via online means")
        }
    }

    class Digit3ServicesTests {
        @Test
        fun `Given service code 110 When explaining Then digit 3 is No restrictions PIN required`() {
            val result = ServiceCode.explain("0110", "\n").toString()
            assertContains(result, "No restrictions, PIN required")
        }

        @Test
        fun `Given service code 111 When explaining Then digit 3 is No restrictions`() {
            val result = ServiceCode.explain("0111", "\n").toString()
            assertContains(result, "Digit 3 (Services/PIN): No restrictions")
        }

        @Test
        fun `Given service code 112 When explaining Then digit 3 is Goods and services only`() {
            val result = ServiceCode.explain("0112", "\n").toString()
            assertContains(result, "Goods and services only (no cash)")
        }

        @Test
        fun `Given service code 113 When explaining Then digit 3 is ATM only`() {
            val result = ServiceCode.explain("0113", "\n").toString()
            assertContains(result, "ATM only, PIN required")
        }
    }

    class ThreeDigitInput {
        @Test
        fun `Given 3-digit service code When explaining Then parses correctly`() {
            val result = ServiceCode.explain("201", "\n").toString()
            assertContains(result, "International interchange")
            assertContains(result, "Normal")
            assertContains(result, "No restrictions")
        }
    }

    class FullServiceCodeTests {
        @Test
        fun `Given typical chip card code 201 When explaining Then returns all three digits`() {
            val result = ServiceCode.explain("0201", "\n").toString()
            assertContains(result, "Digit 1 (Interchange):")
            assertContains(result, "Digit 2 (Authorization):")
            assertContains(result, "Digit 3 (Services/PIN):")
        }
    }

    class InvalidInput {
        @Test
        fun `Given empty string When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                ServiceCode.explain("", "\n")
            }
        }

        @Test
        fun `Given string shorter than 3 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                ServiceCode.explain("01", "\n")
            }
        }

        @Test
        fun `Given string longer than 4 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                ServiceCode.explain("00201", "\n")
            }
        }
    }
}
