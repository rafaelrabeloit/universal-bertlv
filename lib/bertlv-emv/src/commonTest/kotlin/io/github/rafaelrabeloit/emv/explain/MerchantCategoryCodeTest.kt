package io.github.rafaelrabeloit.emv.explain

import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * Test suite for Merchant Category Code (MCC) explanation functionality.
 * Tests cover the explanation of MCC values according to ISO 18245:2003 specifications.
 */
class MerchantCategoryCodeTest {

    @Test
    fun givenValidMccWhenExplainingThenShowsCorrectDescriptionAndCategory() {
        val mcc = 5411L // Groceries and supermarkets
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals(
            "Description: Groceries and supermarkets\n" +
                "Category: Retail outlets",
            meaning,
        )
    }

    @Test
    fun givenValidMccForTransportationWhenExplainingThenShowsCorrectDescriptionAndCategory() {
        val mcc = 4111L // Local and suburban commuter passenger transportation
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals(
            "Description: Local and suburban commuter passenger transportation, including ferries\n" +
                "Category: Transportation",
            meaning,
        )
    }

    @Test
    fun givenValidMccForProfessionalServicesWhenExplainingThenShowsCorrectDescriptionAndCategory() {
        val mcc = 8011L // Doctors and physicians
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals(
            "Description: Doctors and physicians — not elsewhere classified\n" +
                "Category: Professional services and membership organizations",
            meaning,
        )
    }

    @Test
    fun givenInvalidMccWhenExplainingThenShowsUnknownMessage() {
        val mcc = 9999L // Invalid MCC
        val meaning = MerchantCategoryCode.explain(mcc, "\n").toString()
        assertEquals("Unknown Merchant Category Code", meaning)
    }

    @Test
    fun givenValidMccWithCustomLineSeparatorWhenExplainingThenUsesCorrectSeparator() {
        val mcc = 5411L // Groceries and supermarkets
        val meaning = MerchantCategoryCode.explain(mcc, "|").toString()
        assertEquals(
            "Description: Groceries and supermarkets|" +
                "Category: Retail outlets",
            meaning,
        )
    }
}
