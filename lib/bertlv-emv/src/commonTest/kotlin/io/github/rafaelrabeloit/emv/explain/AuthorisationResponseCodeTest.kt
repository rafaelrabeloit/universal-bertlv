package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AuthorisationResponseCodeTest {

    class ApprovedCodes {
        @Test
        fun `Given code 00 When explaining Then returns Approved`() {
            val result = AuthorisationResponseCode.explain("00", "\n").toString()
            assertEquals("Approved", result)
        }

        @Test
        fun `Given code 10 When explaining Then returns Partial approval`() {
            val result = AuthorisationResponseCode.explain("10", "\n").toString()
            assertEquals("Partial approval", result)
        }

        @Test
        fun `Given code 11 When explaining Then returns Approved VIP`() {
            val result = AuthorisationResponseCode.explain("11", "\n").toString()
            assertEquals("Approved (VIP)", result)
        }

        @Test
        fun `Given code 85 When explaining Then returns No reason to decline`() {
            val result = AuthorisationResponseCode.explain("85", "\n").toString()
            assertEquals("No reason to decline", result)
        }
    }

    class DeclinedCodes {
        @Test
        fun `Given code 05 When explaining Then returns Do not honour`() {
            val result = AuthorisationResponseCode.explain("05", "\n").toString()
            assertEquals("Do not honour", result)
        }

        @Test
        fun `Given code 14 When explaining Then returns Invalid card number`() {
            val result = AuthorisationResponseCode.explain("14", "\n").toString()
            assertEquals("Invalid card number", result)
        }

        @Test
        fun `Given code 51 When explaining Then returns Insufficient funds`() {
            val result = AuthorisationResponseCode.explain("51", "\n").toString()
            assertEquals("Insufficient funds", result)
        }

        @Test
        fun `Given code 54 When explaining Then returns Expired card`() {
            val result = AuthorisationResponseCode.explain("54", "\n").toString()
            assertEquals("Expired card", result)
        }

        @Test
        fun `Given code 55 When explaining Then returns Incorrect PIN`() {
            val result = AuthorisationResponseCode.explain("55", "\n").toString()
            assertEquals("Incorrect PIN", result)
        }
    }

    class ReferralCodes {
        @Test
        fun `Given code 01 When explaining Then returns Refer to card issuer`() {
            val result = AuthorisationResponseCode.explain("01", "\n").toString()
            assertEquals("Refer to card issuer", result)
        }

        @Test
        fun `Given code 04 When explaining Then returns Pick up card`() {
            val result = AuthorisationResponseCode.explain("04", "\n").toString()
            assertEquals("Pick up card", result)
        }
    }

    class OfflineCodes {
        @Test
        fun `Given code Y1 When explaining Then returns Offline approved`() {
            val result = AuthorisationResponseCode.explain("Y1", "\n").toString()
            assertEquals("Offline approved", result)
        }

        @Test
        fun `Given code Z1 When explaining Then returns Offline declined`() {
            val result = AuthorisationResponseCode.explain("Z1", "\n").toString()
            assertEquals("Offline declined", result)
        }

        @Test
        fun `Given code Y3 When explaining Then returns Offline approved`() {
            val result = AuthorisationResponseCode.explain("Y3", "\n").toString()
            assertEquals("Offline approved", result)
        }

        @Test
        fun `Given code Z3 When explaining Then returns Offline declined`() {
            val result = AuthorisationResponseCode.explain("Z3", "\n").toString()
            assertEquals("Offline declined", result)
        }
    }

    class SystemCodes {
        @Test
        fun `Given code 91 When explaining Then returns Issuer inoperative`() {
            val result = AuthorisationResponseCode.explain("91", "\n").toString()
            assertEquals("Issuer or switch inoperative", result)
        }

        @Test
        fun `Given code 96 When explaining Then returns System malfunction`() {
            val result = AuthorisationResponseCode.explain("96", "\n").toString()
            assertEquals("System malfunction", result)
        }
    }

    class UnknownCodes {
        @Test
        fun `Given unknown code When explaining Then returns Unknown`() {
            val result = AuthorisationResponseCode.explain("XX", "\n").toString()
            assertEquals("Unknown (XX)", result)
        }
    }

    class InvalidInput {
        @Test
        fun `Given empty string When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                AuthorisationResponseCode.explain("", "\n")
            }
        }

        @Test
        fun `Given string longer than 2 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                AuthorisationResponseCode.explain("000", "\n")
            }
        }
    }
}
