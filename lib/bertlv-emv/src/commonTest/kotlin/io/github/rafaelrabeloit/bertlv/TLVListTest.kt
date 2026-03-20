package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.universal.UniversalTagDescription
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class TLVListTest {

    @Test
    fun `Given a valid tlv list When parse Then should correctly parse multiple primitive tlvs`() {
        val tlvList = byteArrayOf(
            // First TLV
            0x95.toByte(), // Tag: Context-specific, Primitive
            0x02.toByte(), // Length: 2 bytes
            0x01.toByte(), // Value bytes
            0x02.toByte(),
            // Second TLV
            0x96.toByte(), // Tag: Context-specific, Primitive
            0x03.toByte(), // Length: 3 bytes
            0x03.toByte(), // Value bytes
            0x04.toByte(),
            0x05.toByte(),
        )

        val parsedList = TLVList.fromTlvListBuffer(tlvList)

        assertEquals(2, parsedList.tlvs.size)

        // Verify first TLV
        val firstTlv = parsedList.tlvs[0]
        assertContentEquals(byteArrayOf(0x95.toByte()), firstTlv.tlvTag.bytes)
        assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, firstTlv.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, firstTlv.tlvTag.construction)
        assertEquals(0x95, firstTlv.tag)
        assertEquals(0x15, firstTlv.tlvTag.type)
        assertEquals(2, firstTlv.length)
        assertContentEquals(
            byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
            ),
            firstTlv.value as ByteArray,
        )

        // Verify second TLV
        val secondTlv = parsedList.tlvs[1]
        assertContentEquals(byteArrayOf(0x96.toByte()), secondTlv.tlvTag.bytes)
        assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, secondTlv.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, secondTlv.tlvTag.construction)
        assertEquals(0x96, secondTlv.tag)
        assertEquals(0x16, secondTlv.tlvTag.type)
        assertEquals(3, secondTlv.length)
        assertContentEquals(
            byteArrayOf(
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            ),
            secondTlv.value as ByteArray,
        )
    }

    @Test
    fun `Given a valid tlv list When parse Then should correctly parse mixed tlvs`() {
        val tlvList = byteArrayOf(
            // First TLV (Primitive)
            0x04.toByte(), // Tag: Universal, Primitive, OCTET_STRING
            0x02.toByte(), // Length: 2 bytes
            0x01.toByte(), // Value bytes
            0x02.toByte(),
            // Second TLV (Constructed)
            0x30.toByte(), // Tag: Universal, Constructed, SEQUENCE
            0x07.toByte(), // Length: 7 bytes
            // Nested TLV 1
            0x04.toByte(), // Tag: Universal, Primitive, OCTET_STRING
            0x02.toByte(), // Length: 2 bytes
            0x03.toByte(), // Value bytes
            0x04.toByte(),
            // Nested TLV 2
            0x04.toByte(), // Tag: Universal, Primitive, OCTET_STRING
            0x01.toByte(), // Length: 1 byte
            0x05.toByte(), // Value byte
        )

        val parsedList = TLVList.fromTlvListBuffer(tlvList)

        assertEquals(2, parsedList.tlvs.size)

        // Verify first TLV
        val firstTlv = parsedList.tlvs[0]
        assertContentEquals(byteArrayOf(0x04.toByte()), firstTlv.tlvTag.bytes)
        assertEquals(TLVTag.Classification.UNIVERSAL, firstTlv.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, firstTlv.tlvTag.construction)
        assertEquals(0x04, firstTlv.tag)
        assertEquals(UniversalTagDescription.OCTET_STRING.type, firstTlv.tlvTag.type)
        assertEquals(2, firstTlv.length)
        assertContentEquals(
            byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
            ),
            firstTlv.value as ByteArray,
        )

        // Verify second TLV (Constructed)
        val secondTlv = parsedList.tlvs[1]
        assertContentEquals(byteArrayOf(0x30.toByte()), secondTlv.tlvTag.bytes)
        assertEquals(TLVTag.Classification.UNIVERSAL, secondTlv.tlvTag.classification)
        assertEquals(TLVTag.Construction.CONSTRUCTED, secondTlv.tlvTag.construction)
        assertEquals(0x30, secondTlv.tag)
        assertEquals(UniversalTagDescription.SEQUENCE.type, secondTlv.tlvTag.type)
        assertEquals(7, secondTlv.length)

        // Verify nested TLVs in the constructed value
        val nestedTlvs = secondTlv.value as TLVList
        assertEquals(2, nestedTlvs.tlvs.size)

        // Verify first nested TLV
        val firstNestedTlv = nestedTlvs.tlvs[0]
        assertEquals(0x04, firstNestedTlv.tag)
        assertEquals(2, firstNestedTlv.length)
        assertContentEquals(
            byteArrayOf(
                0x03.toByte(),
                0x04.toByte(),
            ),
            firstNestedTlv.value as ByteArray,
        )

        // Verify second nested TLV
        val secondNestedTlv = nestedTlvs.tlvs[1]
        assertEquals(0x04, secondNestedTlv.tag)
        assertEquals(1, secondNestedTlv.length)
        assertContentEquals(
            byteArrayOf(0x05.toByte()),
            secondNestedTlv.value as ByteArray,
        )
    }

    @Test
    fun `Given a list of tlvs When create Then should correctly create tlv list`() {
        // Create first TLV
        val firstTag = TLVTag.fromTag(0x95)
        val firstValue = TLVValue.fromBinaryValue(byteArrayOf(0x01.toByte(), 0x02.toByte()))
        val firstTlv = TLV.fromBinaryComponents(firstTag, firstValue)

        // Create second TLV
        val secondTag = TLVTag.fromTag(0x96)
        val secondValue = TLVValue.fromBinaryValue(byteArrayOf(0x03.toByte(), 0x04.toByte(), 0x05.toByte()))
        val secondTlv = TLV.fromBinaryComponents(secondTag, secondValue)

        val tlvList = TLVList.fromTlvs(listOf(firstTlv, secondTlv))

        assertEquals(2, tlvList.tlvs.size)

        // Verify first TLV
        val parsedFirstTlv = tlvList.tlvs[0]
        assertContentEquals(firstTlv.bytes, parsedFirstTlv.bytes)
        assertContentEquals(firstTlv.tlvTag.bytes, parsedFirstTlv.tlvTag.bytes)
        assertContentEquals(
            firstTlv.value,
            parsedFirstTlv.value as ByteArray,
        )

        // Verify second TLV
        val parsedSecondTlv = tlvList.tlvs[1]
        assertContentEquals(secondTlv.bytes, parsedSecondTlv.bytes)
        assertContentEquals(secondTlv.tlvTag.bytes, parsedSecondTlv.tlvTag.bytes)
        assertContentEquals(
            secondTlv.value,
            parsedSecondTlv.value as ByteArray,
        )
    }

    @Test
    fun `Given an empty list of tlvs When create Then should correctly create empty tlv list`() {
        val tlvList = TLVList.fromTlvs(emptyList())

        assertEquals(0, tlvList.tlvs.size)
        assertEquals(0, tlvList.bytes.size)
    }
}
