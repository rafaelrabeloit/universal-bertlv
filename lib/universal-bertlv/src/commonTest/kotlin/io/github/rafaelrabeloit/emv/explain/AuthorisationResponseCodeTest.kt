package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AuthorisationResponseCodeTest {

    class ApprovedCodes {
        @Test
        fun givenCode00WhenExplainingThenReturnsApproved() {
            val result = AuthorisationResponseCode.explain("00", "\n").toString()
            assertEquals("Approved", result)
        }

        @Test
        fun givenCode10WhenExplainingThenReturnsPartialApproval() {
            val result = AuthorisationResponseCode.explain("10", "\n").toString()
            assertEquals("Partial approval", result)
        }

        @Test
        fun givenCode11WhenExplainingThenReturnsApprovedVip() {
            val result = AuthorisationResponseCode.explain("11", "\n").toString()
            assertEquals("Approved (VIP)", result)
        }

        @Test
        fun givenCode85WhenExplainingThenReturnsNoReasonToDecline() {
            val result = AuthorisationResponseCode.explain("85", "\n").toString()
            assertEquals("No reason to decline", result)
        }
    }

    class DeclinedCodes {
        @Test
        fun givenCode05WhenExplainingThenReturnsDoNotHonour() {
            val result = AuthorisationResponseCode.explain("05", "\n").toString()
            assertEquals("Do not honour", result)
        }

        @Test
        fun givenCode14WhenExplainingThenReturnsInvalidCardNumber() {
            val result = AuthorisationResponseCode.explain("14", "\n").toString()
            assertEquals("Invalid card number", result)
        }

        @Test
        fun givenCode51WhenExplainingThenReturnsInsufficientFunds() {
            val result = AuthorisationResponseCode.explain("51", "\n").toString()
            assertEquals("Insufficient funds", result)
        }

        @Test
        fun givenCode54WhenExplainingThenReturnsExpiredCard() {
            val result = AuthorisationResponseCode.explain("54", "\n").toString()
            assertEquals("Expired card", result)
        }

        @Test
        fun givenCode55WhenExplainingThenReturnsIncorrectPin() {
            val result = AuthorisationResponseCode.explain("55", "\n").toString()
            assertEquals("Incorrect PIN", result)
        }
    }

    class ReferralCodes {
        @Test
        fun givenCode01WhenExplainingThenReturnsReferToCardIssuer() {
            val result = AuthorisationResponseCode.explain("01", "\n").toString()
            assertEquals("Refer to card issuer", result)
        }

        @Test
        fun givenCode04WhenExplainingThenReturnsPickUpCard() {
            val result = AuthorisationResponseCode.explain("04", "\n").toString()
            assertEquals("Pick up card", result)
        }
    }

    class OfflineCodes {
        @Test
        fun givenCodeY1WhenExplainingThenReturnsOfflineApproved() {
            val result = AuthorisationResponseCode.explain("Y1", "\n").toString()
            assertEquals("Offline approved", result)
        }

        @Test
        fun givenCodeZ1WhenExplainingThenReturnsOfflineDeclined() {
            val result = AuthorisationResponseCode.explain("Z1", "\n").toString()
            assertEquals("Offline declined", result)
        }

        @Test
        fun givenCodeY3WhenExplainingThenReturnsOfflineApproved() {
            val result = AuthorisationResponseCode.explain("Y3", "\n").toString()
            assertEquals("Offline approved", result)
        }

        @Test
        fun givenCodeZ3WhenExplainingThenReturnsOfflineDeclined() {
            val result = AuthorisationResponseCode.explain("Z3", "\n").toString()
            assertEquals("Offline declined", result)
        }
    }

    class SystemCodes {
        @Test
        fun givenCode91WhenExplainingThenReturnsIssuerInoperative() {
            val result = AuthorisationResponseCode.explain("91", "\n").toString()
            assertEquals("Issuer or switch inoperative", result)
        }

        @Test
        fun givenCode96WhenExplainingThenReturnsSystemMalfunction() {
            val result = AuthorisationResponseCode.explain("96", "\n").toString()
            assertEquals("System malfunction", result)
        }
    }

    class UnknownCodes {
        @Test
        fun givenUnknownCodeWhenExplainingThenReturnsUnknown() {
            val result = AuthorisationResponseCode.explain("XX", "\n").toString()
            assertEquals("Unknown (XX)", result)
        }
    }

    class InvalidInput {
        @Test
        fun givenEmptyStringWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                AuthorisationResponseCode.explain("", "\n")
            }
        }

        @Test
        fun givenStringLongerThan2WhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                AuthorisationResponseCode.explain("000", "\n")
            }
        }
    }
}
