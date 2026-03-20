package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class ConstructedValueParserTest {

    companion object {
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
    }

    @Test
    fun `Given a constructed TLV value When parse Then should correctly parse nested TLVs`() {
        val bytes = APPLICATION_LABEL_TLV + PAN_TLV

        val parser = ConstructedValueParser(listOf(ASNOneSpecification))
        val result = parser.bytesToValue(bytes)

        assertEquals(2, result.tlvs.size)

        // Verify first TLV (Application Label)
        val firstTlv = result.tlvs[0]
        assertEquals(0x50, firstTlv.tag)
        assertEquals(11, firstTlv.length)
        assertContentEquals(
            byteArrayOf(
                0x56.toByte(), // "VISA CREDIT"
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
            ),
            firstTlv.value as ByteArray,
        )

        // Verify second TLV (PAN)
        val secondTlv = result.tlvs[1]
        assertEquals(0x5A, secondTlv.tag)
        assertEquals(8, secondTlv.length)
        assertContentEquals(
            byteArrayOf(
                0x12.toByte(), // "1234567890123456" in BCD
                0x34.toByte(),
                0x56.toByte(),
                0x78.toByte(),
                0x90.toByte(),
                0x12.toByte(),
                0x34.toByte(),
                0x56.toByte(),
            ),
            secondTlv.value as ByteArray,
        )
    }

    @Test
    fun `Given a constructed TLV value When convert to string Then should return hex representation`() {
        val parser = ConstructedValueParser(listOf(ASNOneSpecification))
        val result = parser.bytesToValue(APPLICATION_LABEL_TLV)

        assertEquals("500B5649534120435245444954", parser.valueToString(result))
    }

    @Test
    fun `Given a constructed TLV value When convert to bytes Then should return original bytes`() {
        val parser = ConstructedValueParser(listOf(ASNOneSpecification))
        val result = parser.bytesToValue(APPLICATION_LABEL_TLV)

        assertContentEquals(APPLICATION_LABEL_TLV, parser.valueToBytes(result))
    }
}
