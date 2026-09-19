package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith

class ServiceCodeTest {

    class Digit1InterchangeTests {
        @Test
        fun givenServiceCode101WhenExplainingThenDigit1IsInternationalInterchangeOk() {
            val result = ServiceCode.explain("0101", "\n").toString()
            assertContains(result, "International interchange OK")
        }

        @Test
        fun givenServiceCode201WhenExplainingThenDigit1IsUseIcWhereFeasible() {
            val result = ServiceCode.explain("0201", "\n").toString()
            assertContains(result, "use IC (chip) where feasible")
        }

        @Test
        fun givenServiceCode501WhenExplainingThenDigit1IsNationalInterchangeOnly() {
            val result = ServiceCode.explain("0501", "\n").toString()
            assertContains(result, "National interchange only")
        }

        @Test
        fun givenServiceCode901WhenExplainingThenDigit1IsTest() {
            val result = ServiceCode.explain("0901", "\n").toString()
            assertContains(result, "Digit 1 (Interchange): Test")
        }
    }

    class Digit2AuthorizationTests {
        @Test
        fun givenServiceCode100WhenExplainingThenDigit2IsNormal() {
            val result = ServiceCode.explain("0100", "\n").toString()
            assertContains(result, "Digit 2 (Authorization): Normal")
        }

        @Test
        fun givenServiceCode120WhenExplainingThenDigit2IsContactIssuerViaOnline() {
            val result = ServiceCode.explain("0120", "\n").toString()
            assertContains(result, "Contact issuer via online means")
        }
    }

    class Digit3ServicesTests {
        @Test
        fun givenServiceCode110WhenExplainingThenDigit3IsNoRestrictionsPinRequired() {
            val result = ServiceCode.explain("0110", "\n").toString()
            assertContains(result, "No restrictions, PIN required")
        }

        @Test
        fun givenServiceCode111WhenExplainingThenDigit3IsNoRestrictions() {
            val result = ServiceCode.explain("0111", "\n").toString()
            assertContains(result, "Digit 3 (Services/PIN): No restrictions")
        }

        @Test
        fun givenServiceCode112WhenExplainingThenDigit3IsGoodsAndServicesOnly() {
            val result = ServiceCode.explain("0112", "\n").toString()
            assertContains(result, "Goods and services only (no cash)")
        }

        @Test
        fun givenServiceCode113WhenExplainingThenDigit3IsAtmOnly() {
            val result = ServiceCode.explain("0113", "\n").toString()
            assertContains(result, "ATM only, PIN required")
        }
    }

    class ThreeDigitInput {
        @Test
        fun given3DigitServiceCodeWhenExplainingThenParsesCorrectly() {
            val result = ServiceCode.explain("201", "\n").toString()
            assertContains(result, "International interchange")
            assertContains(result, "Normal")
            assertContains(result, "No restrictions")
        }
    }

    class FullServiceCodeTests {
        @Test
        fun givenTypicalChipCardCode201WhenExplainingThenReturnsAllThreeDigits() {
            val result = ServiceCode.explain("0201", "\n").toString()
            assertContains(result, "Digit 1 (Interchange):")
            assertContains(result, "Digit 2 (Authorization):")
            assertContains(result, "Digit 3 (Services/PIN):")
        }
    }

    class InvalidInput {
        @Test
        fun givenEmptyStringWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                ServiceCode.explain("", "\n")
            }
        }

        @Test
        fun givenStringShorterThan3WhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                ServiceCode.explain("01", "\n")
            }
        }

        @Test
        fun givenStringLongerThan4WhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                ServiceCode.explain("00201", "\n")
            }
        }
    }
}
