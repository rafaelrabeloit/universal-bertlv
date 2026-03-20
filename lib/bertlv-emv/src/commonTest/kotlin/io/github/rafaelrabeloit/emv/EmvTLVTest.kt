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
}
