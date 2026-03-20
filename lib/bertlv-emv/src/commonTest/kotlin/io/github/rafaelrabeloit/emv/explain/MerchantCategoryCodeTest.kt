package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * Test suite for Merchant Category Code (MCC) explanation functionality.
 * Tests cover the explanation of MCC values according to ISO 18245:2003 specifications.
 */
class MerchantCategoryCodeTest {

    @Test
    fun `Given valid MCC When explaining Then shows correct description and category`() {
        val mcc = 5411L // Groceries and supermarkets
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals(
            "Description: Groceries and supermarkets\n" +
                "Category: Retail outlets",
            meaning,
        )
    }

    @Test
    fun `Given valid MCC for transportation When explaining Then shows correct description and category`() {
        val mcc = 4111L // Local and suburban commuter passenger transportation
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals(
            "Description: Local and suburban commuter passenger transportation, including ferries\n" +
                "Category: Transportation",
            meaning,
        )
    }

    @Test
    fun `Given valid MCC for professional services When explaining Then shows correct description and category`() {
        val mcc = 8011L // Doctors and physicians
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals(
            "Description: Doctors and physicians — not elsewhere classified\n" +
                "Category: Professional services and membership organizations",
            meaning,
        )
    }

    @Test
    fun `Given invalid MCC When explaining Then shows unknown message`() {
        val mcc = 9999L // Invalid MCC
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals("Unknown Merchant Category Code", meaning)
    }

    @Test
    fun `Given valid MCC with custom line separator When explaining Then uses correct separator`() {
        val mcc = 5411L // Groceries and supermarkets
        val meaning = MerchantCategoryCode.explain(mcc, "|").toString()
        assertEquals(
            "Description: Groceries and supermarkets|" +
                "Category: Retail outlets",
            meaning,
        )
    }
}
