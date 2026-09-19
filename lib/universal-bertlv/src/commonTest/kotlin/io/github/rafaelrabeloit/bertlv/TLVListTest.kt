package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.universal.UniversalTagDescription
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class TLVListTest {

    @Test
    fun givenAValidTlvListWhenParseThenShouldCorrectlyParseMultiplePrimitiveTlvs() {
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
    fun givenAValidTlvListWhenParseThenShouldCorrectlyParseMixedTlvs() {
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
    fun givenAListOfTlvsWhenCreateThenShouldCorrectlyCreateTlvList() {
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
    fun givenAnEmptyListOfTlvsWhenCreateThenShouldCorrectlyCreateEmptyTlvList() {
        val tlvList = TLVList.fromTlvs(emptyList())

        assertEquals(0, tlvList.tlvs.size)
        assertEquals(0, tlvList.bytes.size)
    }

    @Test
    fun givenTlvListWhenFindStrictThenShouldReturnSingleMatchOrFailOnDuplicates() {
        val first = TLV.fromTagAndBinaryValue(0x95, byteArrayOf(0x01))
        val duplicate = TLV.fromTagAndBinaryValue(0x95, byteArrayOf(0x02))
        val other = TLV.fromTagAndBinaryValue(0x96, byteArrayOf(0x03))
        val tlvList = TLVList.fromTlvs(listOf(first, duplicate, other))

        assertFailsWith<IllegalStateException> {
            tlvList.find(0x95, TlvFindMode.STRICT)
        }

        val singleMatchList = TLVList.fromTlvs(listOf(first, other))
        assertEquals(first, singleMatchList.find(0x95, TlvFindMode.STRICT))
        assertEquals(null, singleMatchList.find(0x97, TlvFindMode.STRICT))
    }

    @Test
    fun givenTlvListWhenFindFirstOrLastThenShouldReturnExpectedMatch() {
        val first = TLV.fromTagAndBinaryValue(0x95, byteArrayOf(0x01))
        val duplicate = TLV.fromTagAndBinaryValue(0x95, byteArrayOf(0x02))
        val tlvList = TLVList.fromTlvs(listOf(first, duplicate))

        assertEquals(first, tlvList.find(0x95, TlvFindMode.FIRST))
        assertEquals(duplicate, tlvList.find(0x95, TlvFindMode.LAST))
        assertEquals(null, tlvList.find(0x96, TlvFindMode.FIRST))
    }

    @Test
    fun givenHexStringWhenParseTlvListThenShouldCorrectlyParseMultipleTlvs() {
        val parsedList = TLVList.fromTlvListBuffer("9501029603040506")

        assertEquals(2, parsedList.tlvs.size)
        assertEquals(0x95, parsedList.tlvs[0].tag)
        assertEquals(0x96, parsedList.tlvs[1].tag)
    }

    @Test
    fun givenAValidTlvListWhenParseThenEachTlvBytesShouldMatchExactEncodedSize() {
        val tlvList = byteArrayOf(
            0x95.toByte(),
            0x02.toByte(),
            0x01.toByte(),
            0x02.toByte(),
            0x96.toByte(),
            0x03.toByte(),
            0x03.toByte(),
            0x04.toByte(),
            0x05.toByte(),
        )

        val parsedList = TLVList.fromTlvListBuffer(tlvList)

        for (tlv in parsedList.tlvs) {
            assertEquals(
                tlv.tlvTag.size + tlv.tlvLength.size + tlv.tlvValue.size,
                tlv.bytes.size,
            )
        }
    }
}
