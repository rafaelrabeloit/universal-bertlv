package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Test suite for Transaction Type explanation functionality.
 * Tests cover all transaction type values according to EMV specifications.
 */
class TransactionTypeTest {

    /**
     * Tests for basic transaction types
     */
    class BasicTransactionTypesTests {
        @Test
        fun givenTransactionType0x00WhenExplainingThenReturnsPurchase() {
            val meaning = TransactionType.explain("00", "\n").toString()
            assertEquals("Purchase", meaning)
        }

        @Test
        fun givenTransactionType0x01WhenExplainingThenReturnsCashAdvance() {
            val meaning = TransactionType.explain("01", "\n").toString()
            assertEquals("Cash Advance", meaning)
        }

        @Test
        fun givenTransactionType0x02WhenExplainingThenReturnsCashBack() {
            val meaning = TransactionType.explain("02", "\n").toString()
            assertEquals("Cash Back", meaning)
        }

        @Test
        fun givenTransactionType0x03WhenExplainingThenReturnsRefund() {
            val meaning = TransactionType.explain("03", "\n").toString()
            assertEquals("Refund", meaning)
        }

        @Test
        fun givenTransactionType0x04WhenExplainingThenReturnsDeposit() {
            val meaning = TransactionType.explain("04", "\n").toString()
            assertEquals("Deposit", meaning)
        }

        @Test
        fun givenTransactionType0x05WhenExplainingThenReturnsPayment() {
            val meaning = TransactionType.explain("05", "\n").toString()
            assertEquals("Payment", meaning)
        }

        @Test
        fun givenTransactionType0x06WhenExplainingThenReturnsBalanceInquiry() {
            val meaning = TransactionType.explain("06", "\n").toString()
            assertEquals("Balance Inquiry", meaning)
        }

        @Test
        fun givenTransactionType0x07WhenExplainingThenReturnsAccountTransfer() {
            val meaning = TransactionType.explain("07", "\n").toString()
            assertEquals("Account Transfer", meaning)
        }
    }

    /**
     * Tests for combined transaction types
     */
    class CombinedTransactionTypesTests {
        @Test
        fun givenTransactionType0x08WhenExplainingThenReturnsPaymentWithCashBack() {
            val meaning = TransactionType.explain("08", "\n").toString()
            assertEquals("Payment with Cash Back", meaning)
        }

        @Test
        fun givenTransactionType0x09WhenExplainingThenReturnsCashDeposit() {
            val meaning = TransactionType.explain("09", "\n").toString()
            assertEquals("Cash Deposit", meaning)
        }

        @Test
        fun givenTransactionType0x0aWhenExplainingThenReturnsAdministrative() {
            val meaning = TransactionType.explain("0A", "\n").toString()
            assertEquals("Administrative", meaning)
        }

        @Test
        fun givenTransactionType0x0bWhenExplainingThenReturnsPurchaseWithCashBack() {
            val meaning = TransactionType.explain("0B", "\n").toString()
            assertEquals("Purchase with Cash Back", meaning)
        }

        @Test
        fun givenTransactionType0x0cWhenExplainingThenReturnsPurchaseWithCashAdvance() {
            val meaning = TransactionType.explain("0C", "\n").toString()
            assertEquals("Purchase with Cash Advance", meaning)
        }

        @Test
        fun givenTransactionType0x0dWhenExplainingThenReturnsPurchaseWithCashBackAndCashAdvance() {
            val meaning = TransactionType.explain("0D", "\n").toString()
            assertEquals("Purchase with Cash Back and Cash Advance", meaning)
        }

        @Test
        fun givenTransactionType0x0eWhenExplainingThenReturnsPurchaseWithCashBackAndRefund() {
            val meaning = TransactionType.explain("0E", "\n").toString()
            assertEquals("Purchase with Cash Back and Refund", meaning)
        }

        @Test
        fun givenTransactionType0x0fWhenExplainingThenReturnsPurchaseWithCashAdvanceAndRefund() {
            val meaning = TransactionType.explain("0F", "\n").toString()
            assertEquals("Purchase with Cash Advance and Refund", meaning)
        }

        @Test
        fun givenTransactionType0x10WhenExplainingThenReturnsPurchaseWithCashBackCashAdvanceAndRefund() {
            val meaning = TransactionType.explain("10", "\n").toString()
            assertEquals("Purchase with Cash Back, Cash Advance and Refund", meaning)
        }
    }

    /**
     * Tests for reserved and future use values
     */
    class ReservedValuesTests {
        @Test
        fun givenTransactionType0x1fWhenExplainingThenReturnsReservedForFutureUse() {
            val meaning = TransactionType.explain("1F", "\n").toString()
            assertEquals("Reserved for Future Use", meaning)
        }

        @Test
        fun givenTransactionType0xffWhenExplainingThenReturnsReservedForFutureUse() {
            val meaning = TransactionType.explain("FF", "\n").toString()
            assertEquals("Reserved for Future Use", meaning)
        }
    }

    /**
     * Tests for invalid input
     */
    class InvalidInputTests {
        @Test
        fun givenEmptyStringWhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                TransactionType.explain("", "\n").toString()
            }
        }

        @Test
        fun givenStringWithLengthGreaterThan2WhenExplainingThenThrowsException() {
            assertFailsWith<IllegalArgumentException> {
                TransactionType.explain("0001", "\n").toString()
            }
        }
    }
}
