package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.components.TLVLength
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import io.github.rafaelrabeloit.bertlv.universal.UniversalTagDescription
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class TLVTest {

    @Test
    fun givenAValidTlvWhenParseThenShouldCorrectlyParsePrimitiveTagWithSmallLength() {
        val tlv = byteArrayOf(
            0x95.toByte(), // Tag: Context-specific, Primitive
            0x05.toByte(), // Length: 5 bytes
            0x01.toByte(), // Value bytes
            0x02.toByte(),
            0x03.toByte(),
            0x04.toByte(),
            0x05.toByte(),
        )

        val parsedTLV = TLV.fromBinaryTlvBuffer(tlv)

        // Verify tag
        assertContentEquals(byteArrayOf(0x95.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x95, parsedTLV.tag)
        assertEquals(0x15, parsedTLV.tlvTag.type)

        // Verify length
        assertContentEquals(byteArrayOf(0x05.toByte()), parsedTLV.tlvLength.bytes)
        assertEquals(TLVLength.Form.SHORT, parsedTLV.tlvLength.form)
        assertEquals(5, parsedTLV.length)

        // Verify value
        assertContentEquals(
            byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            ),
            parsedTLV.value,
        )
    }

    @Test
    fun givenAValidTlvWhenParseThenShouldCorrectlyParseUniversalTagWithSmallLength() {
        val tlv = byteArrayOf(
            0x04.toByte(), // Tag: Universal, Primitive, OCTET_STRING
            0x03.toByte(), // Length: 3 bytes
            0x01.toByte(), // Value bytes
            0x02.toByte(),
            0x03.toByte(),
        )

        val parsedTLV = TLV.fromBinaryTlvBuffer(tlv)

        // Verify tag
        assertContentEquals(byteArrayOf(0x04.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.UNIVERSAL, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.PRIMITIVE, parsedTLV.tlvTag.construction)
        assertEquals(0x04, parsedTLV.tag)
        assertEquals(UniversalTagDescription.OCTET_STRING.type, parsedTLV.tlvTag.type)

        // Verify length
        assertContentEquals(byteArrayOf(0x03.toByte()), parsedTLV.tlvLength.bytes)
        assertEquals(TLVLength.Form.SHORT, parsedTLV.tlvLength.form)
        assertEquals(3, parsedTLV.length)

        // Verify value
        assertContentEquals(
            byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
            ),
            parsedTLV.value,
        )
    }

    @Test
    fun givenAValidTlvWhenParseThenShouldCorrectlyParseConstructedTagWithSmallLength() {
        val tlv = byteArrayOf(
            0x30.toByte(), // Tag: Universal, Constructed, SEQUENCE
            0x04.toByte(), // Length: 4 bytes
            0x01.toByte(), // Value bytes
            0x02.toByte(),
            0x03.toByte(),
            0x04.toByte(),
        )

        val parsedTLV = TLV.fromBinaryTlvBuffer(tlv)

        // Verify tag
        assertContentEquals(byteArrayOf(0x30.toByte()), parsedTLV.tlvTag.bytes)
        assertEquals(TLVTag.Classification.UNIVERSAL, parsedTLV.tlvTag.classification)
        assertEquals(TLVTag.Construction.CONSTRUCTED, parsedTLV.tlvTag.construction)
        assertEquals(0x30, parsedTLV.tag)
        assertEquals(UniversalTagDescription.SEQUENCE.type, parsedTLV.tlvTag.type)

        // Verify length
        assertContentEquals(byteArrayOf(0x04.toByte()), parsedTLV.tlvLength.bytes)
        assertEquals(TLVLength.Form.SHORT, parsedTLV.tlvLength.form)
        assertEquals(4, parsedTLV.length)

        // Verify value
        assertContentEquals(
            byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
            ),
            parsedTLV.value,
        )
    }

    class TLVCreateTagAndValueTests {
        @Test
        fun givenTagAndValueWhenCreateThenShouldCorrectlyCreatePrimitiveTagWithSmallLength() {
            val tag = 0x95 // Context-specific, Primitive
            val value = byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val tlv = TLV.fromTagAndBinaryValue(tag, value)

            // Verify tag
            assertContentEquals(byteArrayOf(0x95.toByte()), tlv.tlvTag.bytes)
            assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, tlv.tlvTag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tlv.tlvTag.construction)
            assertEquals(0x95, tlv.tag)
            assertEquals(0x15, tlv.tlvTag.type)

            // Verify length
            assertContentEquals(byteArrayOf(0x05.toByte()), tlv.tlvLength.bytes)
            assertEquals(TLVLength.Form.SHORT, tlv.tlvLength.form)
            assertEquals(5, tlv.length)

            // Verify value
            assertContentEquals(value, tlv.value)
        }

        @Test
        fun givenTagAndValueWhenCreateThenShouldCorrectlyCreateUniversalTagWithSmallLength() {
            val tag = 0x04 // Universal, Primitive, OCTET_STRING
            val value = byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
            )

            val tlv = TLV.fromTagAndBinaryValue(tag, value)

            // Verify tag
            assertContentEquals(byteArrayOf(0x04.toByte()), tlv.tlvTag.bytes)
            assertEquals(TLVTag.Classification.UNIVERSAL, tlv.tlvTag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tlv.tlvTag.construction)
            assertEquals(0x04, tlv.tag)
            assertEquals(UniversalTagDescription.OCTET_STRING.type, tlv.tlvTag.type)

            // Verify length
            assertContentEquals(byteArrayOf(0x03.toByte()), tlv.tlvLength.bytes)
            assertEquals(TLVLength.Form.SHORT, tlv.tlvLength.form)
            assertEquals(3, tlv.length)

            // Verify value
            assertContentEquals(value, tlv.value)
        }

        @Test
        fun givenTagAndValueWhenCreateThenShouldCorrectlyCreateConstructedTagWithSmallLength() {
            val tag = 0x30 // Universal, Constructed, SEQUENCE
            val value = byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
            )

            val tlv = TLV.fromTagAndBinaryValue(tag, value)

            // Verify tag
            assertContentEquals(byteArrayOf(0x30.toByte()), tlv.tlvTag.bytes)
            assertEquals(TLVTag.Classification.UNIVERSAL, tlv.tlvTag.classification)
            assertEquals(TLVTag.Construction.CONSTRUCTED, tlv.tlvTag.construction)
            assertEquals(0x30, tlv.tag)
            assertEquals(UniversalTagDescription.SEQUENCE.type, tlv.tlvTag.type)

            // Verify length
            assertContentEquals(byteArrayOf(0x04.toByte()), tlv.tlvLength.bytes)
            assertEquals(TLVLength.Form.SHORT, tlv.tlvLength.form)
            assertEquals(4, tlv.length)

            // Verify value
            assertContentEquals(value, tlv.value)
        }
    }

    class TLVExplainTests {
        @Test
        fun givenATlvWhenExplainThenShouldReturnExplanationWithAllComponents() {
            val tlv = byteArrayOf(
                0x95.toByte(), // Tag: Context-specific, Primitive
                0x05.toByte(), // Length: 5 bytes
                0x04.toByte(), // Value bytes
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
            )

            val parsedTLV = TLV.fromBinaryTlvBuffer(tlv)
            val explanation = parsedTLV.explain().toString()

            // Should contain TAG, LENGTH, and VALUE sections
            assertContains(explanation, "TAG:")
            assertContains(explanation, "LENGTH:")
            assertContains(explanation, "VALUE:")

            // Should contain tag hex representation
            assertContains(explanation, "95")

            // Should contain length hex representation
            assertContains(explanation, "05")

            // Should contain classification information
            assertContains(explanation, "Context-specific")
            assertContains(explanation, "Primitive")
        }

        @Test
        fun givenATlvWithCustomLineSeparatorWhenExplainThenShouldUseTheCustomSeparator() {
            val tlv = byteArrayOf(
                0x04.toByte(), // Tag: Universal, Primitive, OCTET_STRING
                0x03.toByte(), // Length: 3 bytes
                0x01.toByte(), // Value bytes
                0x02.toByte(),
                0x03.toByte(),
            )

            val parsedTLV = TLV.fromBinaryTlvBuffer(tlv)
            val customSeparator = " | "
            val explanation = parsedTLV.explain(customSeparator).toString()

            // Should use custom separator
            assertContains(explanation, customSeparator)

            // Should still contain the main sections
            assertContains(explanation, "TAG:")
            assertContains(explanation, "LENGTH:")
            assertContains(explanation, "VALUE:")
        }

        @Test
        fun givenATlvWithSpecificationsWhenExplainThenShouldIncludeSpecificationContext() {
            val tlv = byteArrayOf(
                0x04.toByte(), // Tag: Universal, Primitive, OCTET_STRING
                0x03.toByte(), // Length: 3 bytes
                0x01.toByte(), // Value bytes
                0x02.toByte(),
                0x03.toByte(),
            )

            val parsedTLV = TLV.fromTlvBuffer(tlv, listOf(ASNOneSpecification))
            val explanation = parsedTLV.explain().toString()

            // Should contain specification-provided context
            assertContains(explanation, "Octet String")
            assertContains(explanation, "Universal")
        }
    }
}
