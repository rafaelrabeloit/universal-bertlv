package io.github.rafaelrabeloit.emv

import io.github.rafaelrabeloit.bertlv.TLV
import io.github.rafaelrabeloit.bertlv.TLVList
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class EmvTLVTest {

    companion object {
        // PAN (Primary Account Number) - Tag 0x5A
        private val PAN_TLV = byteArrayOf(
            0x5A.toByte(), // Tag: PAN
            0x08.toByte(), // Length: 8 bytes
            0x12.toByte(), // Value: "1234567890123456" in BCD
            0x34.toByte(),
            0x56.toByte(),
            0x78.toByte(),
            0x90.toByte(),
            0x12.toByte(),
            0x34.toByte(),
            0x56.toByte(),
        )

        // Application Label - Tag 0x50
        private val APPLICATION_LABEL_TLV = byteArrayOf(
            0x50.toByte(), // Tag: Application Label
            0x0B.toByte(), // Length: 11 bytes
            0x56.toByte(), // Value: "VISA CREDIT"
            0x49.toByte(),
            0x53.toByte(),
            0x41.toByte(),
            0x20.toByte(),
            0x43.toByte(),
            0x52.toByte(),
            0x45.toByte(),
            0x44.toByte(),
            0x49.toByte(),
            0x54.toByte(),
        )

        // Amount Authorized - Tag 0x9F02
        private val AMOUNT_AUTHORIZED_TLV = byteArrayOf(
            0x9F.toByte(), // Tag: Amount Authorized (first byte)
            0x02.toByte(), // Tag: Amount Authorized (second byte)
            0x06.toByte(), // Length: 6 bytes
            0x00.toByte(), // Value: "000000012345" in BCD
            0x00.toByte(),
            0x00.toByte(),
            0x01.toByte(),
            0x23.toByte(),
            0x45.toByte(),
        )

        // Application Cryptogram - Tag 0x9F26
        private val APPLICATION_CRYPTOGRAM_TLV = byteArrayOf(
            0x9F.toByte(), // Tag: Application Cryptogram (first byte)
            0x26.toByte(), // Tag: Application Cryptogram (second byte)
            0x08.toByte(), // Length: 8 bytes
            0x01.toByte(), // Value: Binary cryptogram
            0x02.toByte(),
            0x03.toByte(),
            0x04.toByte(),
            0x05.toByte(),
            0x06.toByte(),
            0x07.toByte(),
            0x08.toByte(),
        )

        // Application Template - Tag 0x61 (constructed)
        private val APPLICATION_TEMPLATE_TLV = byteArrayOf(
            0x61.toByte(), // Tag: Application Template
            0x17.toByte(), // Length: 23 bytes
        ) + APPLICATION_LABEL_TLV + PAN_TLV

        // Unpredictable Number - Tag 0x9F37 (4 bytes binary, NOT BCD)
        // Contains 0xAB and 0xEF nibbles that would fail BCD parsing
        private val UNPREDICTABLE_NUMBER_TLV = byteArrayOf(
            0x9F.toByte(), // Tag: Unpredictable Number (first byte)
            0x37.toByte(), // Tag: Unpredictable Number (second byte)
            0x04.toByte(), // Length: 4 bytes
            0xAB.toByte(), // Value: random binary data with non-BCD nibbles
            0xCD.toByte(),
            0xEF.toByte(),
            0x12.toByte(),
        )

        // ICC Dynamic Number - Tag 0x9F4C (binary, NOT BCD)
        private val ICC_DYNAMIC_NUMBER_TLV = byteArrayOf(
            0x9F.toByte(), // Tag: ICC Dynamic Number (first byte)
            0x4C.toByte(), // Tag: ICC Dynamic Number (second byte)
            0x08.toByte(), // Length: 8 bytes
            0xFA.toByte(), // Value: random binary data with non-BCD nibbles
            0xCE.toByte(),
            0xB7.toByte(),
            0x3D.toByte(),
            0x91.toByte(),
            0x0A.toByte(),
            0xFF.toByte(),
            0x48.toByte(),
        )

        // Application Version Number - Tag 0x9F08 (binary, NOT BCD)
        private val APPLICATION_VERSION_NUMBER_TLV = byteArrayOf(
            0x9F.toByte(), // Tag: Application Version Number (first byte)
            0x08.toByte(), // Tag: Application Version Number (second byte)
            0x02.toByte(), // Length: 2 bytes
            0x00.toByte(), // Value: version 0x008C (140 decimal)
            0x8C.toByte(),
        )

        // CVM Results - Tag 0x9F34 (3 bytes, from production bug report)
        private val CVM_RESULTS_TLV = byteArrayOf(
            0x9F.toByte(), // Tag: CVM Results (first byte)
            0x34.toByte(), // Tag: CVM Results (second byte)
            0x03.toByte(), // Length: 3 bytes
            0x42.toByte(), // Byte 1: Apply succeeding rule + Enciphered PIN online
            0x03.toByte(), // Byte 2: If terminal supports the CVM
            0x00.toByte(), // Byte 3: Unknown result
        )
    }

    @Test
    fun givenPanTagWhenParseThenShouldCorrectlyParseNumericValue() {
        val parsedTLV = TLV.fromTlvBuffer(PAN_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x5A.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.APPLICATION, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x5A, parsedTLV.tag)

        // Verify value
        assertEquals("1234567890123456", parsedTLV.value)
    }

    @Test
    fun givenApplicationLabelTagWhenParseThenShouldCorrectlyParseAlphanumericValue() {
        val parsedTLV = TLV.fromTlvBuffer(APPLICATION_LABEL_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x50.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.APPLICATION, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x50, parsedTLV.tag)

        // Verify value
        assertEquals("VISA CREDIT", parsedTLV.value)
    }

    @Test
    fun givenAmountAuthorizedTagWhenParseThenShouldCorrectlyParseNumericNumberValue() {
        val parsedTLV = TLV.fromTlvBuffer(AMOUNT_AUTHORIZED_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x9F.toByte(), 0x02.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x9F02, parsedTLV.tag)

        // Verify value
        assertEquals(12345L, parsedTLV.value)
    }

    @Test
    fun givenApplicationCryptogramTagWhenParseThenShouldCorrectlyParseBinaryValue() {
        val parsedTLV = TLV.fromTlvBuffer(APPLICATION_CRYPTOGRAM_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x9F.toByte(), 0x26.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x9F26, parsedTLV.tag)

        // Verify value
        assertContentEquals(
            byteArrayOf(0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08),
            parsedTLV.value as ByteArray,
        )
    }

    @Test
    fun givenConstructedTagWhenParseThenShouldCorrectlyParseNestedTlvs() {
        val parsedTLV = TLV.fromTlvBuffer(APPLICATION_TEMPLATE_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x61.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.APPLICATION, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.CONSTRUCTED, parsedTLV.tlvTag.construction)
        assertEquals(0x61, parsedTLV.tag)

        // Verify nested TLVs
        val constructedTlvList = parsedTLV.value

        assertTrue(constructedTlvList is TLVList)

        val nestedTLVs = constructedTlvList.tlvs
        assertEquals(2, nestedTLVs.size)

        // Verify first nested TLV (Application Label)
        val appLabel = nestedTLVs[0]
        assertEquals(0x50, appLabel.tag)
        assertEquals("VISA CREDIT", appLabel.value)

        // Verify second nested TLV (PAN)
        val pan = nestedTLVs[1]
        assertEquals(0x5A, pan.tag)
        assertEquals("1234567890123456", pan.value)
    }

    @Test
    fun givenUnpredictableNumberTagWhenParseThenShouldCorrectlyParseBinaryValue() {
        val parsedTLV = TLV.fromTlvBuffer(UNPREDICTABLE_NUMBER_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x9F.toByte(), 0x37.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(0x9F37, parsedTLV.tag)

        // Verify value is parsed as binary (not BCD) - bytes with A-F nibbles must not throw
        assertContentEquals(
            byteArrayOf(0xAB.toByte(), 0xCD.toByte(), 0xEF.toByte(), 0x12.toByte()),
            parsedTLV.value as ByteArray,
        )
    }

    @Test
    fun givenIccDynamicNumberTagWhenParseThenShouldCorrectlyParseBinaryValue() {
        val parsedTLV = TLV.fromTlvBuffer(ICC_DYNAMIC_NUMBER_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x9F.toByte(), 0x4C.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(0x9F4C, parsedTLV.tag)

        // Verify value is parsed as binary (not BCD)
        assertContentEquals(
            byteArrayOf(
                0xFA.toByte(), 0xCE.toByte(), 0xB7.toByte(), 0x3D.toByte(),
                0x91.toByte(), 0x0A.toByte(), 0xFF.toByte(), 0x48.toByte(),
            ),
            parsedTLV.value as ByteArray,
        )
    }

    @Test
    fun givenApplicationVersionNumberTagWhenParseThenShouldCorrectlyParseBinaryValue() {
        val parsedTLV = TLV.fromTlvBuffer(APPLICATION_VERSION_NUMBER_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x9F.toByte(), 0x08.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(0x9F08, parsedTLV.tag)

        // Verify value is parsed as binary (not BCD) - 0x8C nibble would fail BCD
        assertContentEquals(
            byteArrayOf(0x00.toByte(), 0x8C.toByte()),
            parsedTLV.value as ByteArray,
        )
    }

    @Test
    fun givenCvmResultsTagWhenParseThenShouldCorrectlyParseThreeByteValue() {
        val parsedTLV = TLV.fromTlvBuffer(CVM_RESULTS_TLV, listOf(ASNOneSpecification, EmvSpecification))

        // Verify tag
        assertContentEquals(byteArrayOf(0x9F.toByte(), 0x34.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x9F34, parsedTLV.tag)

        // Verify value is 3 bytes (regression: was crashing with "Expected 1 bytes but got 3")
        assertContentEquals(
            byteArrayOf(0x42.toByte(), 0x03, 0x00),
            parsedTLV.value as ByteArray,
        )

        // Verify explanation does not throw
        val explanation = parsedTLV.explain("\n")
        assertTrue(explanation.toString().isNotEmpty())
    }
}
