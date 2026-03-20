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
        fun `Given transaction type 0x00 When explaining Then returns Purchase`() {
            val meaning = TransactionType.explain("00", "\n").toString()
            assertEquals("Purchase", meaning)
        }

        @Test
        fun `Given transaction type 0x01 When explaining Then returns Cash Advance`() {
            val meaning = TransactionType.explain("01", "\n").toString()
            assertEquals("Cash Advance", meaning)
        }

        @Test
        fun `Given transaction type 0x02 When explaining Then returns Cash Back`() {
            val meaning = TransactionType.explain("02", "\n").toString()
            assertEquals("Cash Back", meaning)
        }

        @Test
        fun `Given transaction type 0x03 When explaining Then returns Refund`() {
            val meaning = TransactionType.explain("03", "\n").toString()
            assertEquals("Refund", meaning)
        }

        @Test
        fun `Given transaction type 0x04 When explaining Then returns Deposit`() {
            val meaning = TransactionType.explain("04", "\n").toString()
            assertEquals("Deposit", meaning)
        }

        @Test
        fun `Given transaction type 0x05 When explaining Then returns Payment`() {
            val meaning = TransactionType.explain("05", "\n").toString()
            assertEquals("Payment", meaning)
        }

        @Test
        fun `Given transaction type 0x06 When explaining Then returns Balance Inquiry`() {
            val meaning = TransactionType.explain("06", "\n").toString()
            assertEquals("Balance Inquiry", meaning)
        }

        @Test
        fun `Given transaction type 0x07 When explaining Then returns Account Transfer`() {
            val meaning = TransactionType.explain("07", "\n").toString()
            assertEquals("Account Transfer", meaning)
        }
    }

    /**
     * Tests for combined transaction types
     */
    class CombinedTransactionTypesTests {
        @Test
        fun `Given transaction type 0x08 When explaining Then returns Payment with Cash Back`() {
            val meaning = TransactionType.explain("08", "\n").toString()
            assertEquals("Payment with Cash Back", meaning)
        }

        @Test
        fun `Given transaction type 0x09 When explaining Then returns Cash Deposit`() {
            val meaning = TransactionType.explain("09", "\n").toString()
            assertEquals("Cash Deposit", meaning)
        }

        @Test
        fun `Given transaction type 0x0A When explaining Then returns Administrative`() {
            val meaning = TransactionType.explain("0A", "\n").toString()
            assertEquals("Administrative", meaning)
        }

        @Test
        fun `Given transaction type 0x0B When explaining Then returns Purchase with Cash Back`() {
            val meaning = TransactionType.explain("0B", "\n").toString()
            assertEquals("Purchase with Cash Back", meaning)
        }

        @Test
        fun `Given transaction type 0x0C When explaining Then returns Purchase with Cash Advance`() {
            val meaning = TransactionType.explain("0C", "\n").toString()
            assertEquals("Purchase with Cash Advance", meaning)
        }

        @Test
        fun `Given transaction type 0x0D When explaining Then returns Purchase with Cash Back and Cash Advance`() {
            val meaning = TransactionType.explain("0D", "\n").toString()
            assertEquals("Purchase with Cash Back and Cash Advance", meaning)
        }

        @Test
        fun `Given transaction type 0x0E When explaining Then returns Purchase with Cash Back and Refund`() {
            val meaning = TransactionType.explain("0E", "\n").toString()
            assertEquals("Purchase with Cash Back and Refund", meaning)
        }

        @Test
        fun `Given transaction type 0x0F When explaining Then returns Purchase with Cash Advance and Refund`() {
            val meaning = TransactionType.explain("0F", "\n").toString()
            assertEquals("Purchase with Cash Advance and Refund", meaning)
        }

        @Test
        fun `Given transaction type 0x10 When explaining Then returns Purchase with Cash Back, Cash Advance and Refund`() {
            val meaning = TransactionType.explain("10", "\n").toString()
            assertEquals("Purchase with Cash Back, Cash Advance and Refund", meaning)
        }
    }

    /**
     * Tests for reserved and future use values
     */
    class ReservedValuesTests {
        @Test
        fun `Given transaction type 0x1F When explaining Then returns Reserved for Future Use`() {
            val meaning = TransactionType.explain("1F", "\n").toString()
            assertEquals("Reserved for Future Use", meaning)
        }

        @Test
        fun `Given transaction type 0xFF When explaining Then returns Reserved for Future Use`() {
            val meaning = TransactionType.explain("FF", "\n").toString()
            assertEquals("Reserved for Future Use", meaning)
        }
    }

    /**
     * Tests for invalid input
     */
    class InvalidInputTests {
        @Test
        fun `Given empty string When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                TransactionType.explain("", "\n").toString()
            }
        }

        @Test
        fun `Given string with length greater than 2 When explaining Then throws exception`() {
            assertFailsWith<IllegalArgumentException> {
                TransactionType.explain("0001", "\n").toString()
            }
        }
    }
}
