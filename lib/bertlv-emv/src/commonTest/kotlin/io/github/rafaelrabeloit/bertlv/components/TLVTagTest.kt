package io.github.rafaelrabeloit.bertlv.components

import io.github.rafaelrabeloit.bertlv.contextualize
import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import io.github.rafaelrabeloit.bertlv.universal.UniversalTagDescription
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class TLVTagTest {

    class TagParseTests {
        @Test
        fun givenAValidTlvWhenParseATagThenShouldCorrectlyParse1ByteTag() {
            val oneByteTagTlv = byteArrayOf(
                0x95.toByte(),
                0x05.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(oneByteTagTlv)

            assertContentEquals(
                byteArrayOf(
                    0x95.toByte(),
                ),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(0x15, tag.type)
            assertEquals(0x95, tag.tag)
        }

        @Test
        fun givenAValidTlvWhenParseATagThenShouldCorrectlyParse2ByteTag() {
            val twoBytesTagTlv = byteArrayOf(
                0x9F.toByte(),
                0x02.toByte(),
                0x06.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(twoBytesTagTlv)

            assertContentEquals(
                byteArrayOf(
                    0x9F.toByte(),
                    0x02.toByte(),
                ),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(0x02, tag.type)
            assertEquals(0x9F02, tag.tag)
        }

        @Test
        fun givenAValidTlvWhenParseATagThenShouldCorrectlyParse3ByteTag() {
            val threeBytesTagTlv = byteArrayOf(
                0xDF.toByte(),
                0x81.toByte(),
                0x15.toByte(),
                0x06.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(threeBytesTagTlv)

            assertContentEquals(
                byteArrayOf(
                    0xDF.toByte(),
                    0x81.toByte(),
                    0x15.toByte(),
                ),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.PRIVATE, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(0x95, tag.type)
            assertEquals(0xDF8115, tag.tag)
        }

        @Test
        fun givenAUniversalTagWhenParseATagThenShouldCorrectlyIdentifyType() {
            val universalTagTlv = byteArrayOf(
                0x04.toByte(),
                0x05.toByte(),
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(universalTagTlv)

            assertContentEquals(
                byteArrayOf(
                    0x04.toByte(),
                ),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.UNIVERSAL, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(UniversalTagDescription.OCTET_STRING.type, tag.type)
            assertEquals(0x04, tag.tag)
        }

        @Test
        fun givenAUniversalConstructedTagWhenParseATagThenShouldCorrectlyIdentifyType() {
            val universalConstructedTagTlv = byteArrayOf(
                0x30.toByte(),
                0x05.toByte(),
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(universalConstructedTagTlv)

            assertContentEquals(
                byteArrayOf(
                    0x30.toByte(),
                ),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.UNIVERSAL, tag.classification)
            assertEquals(TLVTag.Construction.CONSTRUCTED, tag.construction)
            assertEquals(UniversalTagDescription.SEQUENCE.type, tag.type)
            assertEquals(0x30, tag.tag)
        }
    }

    class TagCreateTests {
        @Test
        fun givenAnIntegerTagWhenCreateATagThenShouldCorrectlyCreate1ByteTag() {
            val tag = TLVTag.fromTag(0x95)

            assertContentEquals(
                byteArrayOf(0x95.toByte()),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(0x15, tag.type)
            assertEquals(0x95, tag.tag)
        }

        @Test
        fun givenAnIntegerTagWhenCreateATagThenShouldCorrectlyCreate2ByteTag() {
            val tag = TLVTag.fromTag(0x9F02)

            assertContentEquals(
                byteArrayOf(0x9F.toByte(), 0x02.toByte()),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.CONTEXT_SPECIFIC, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(0x02, tag.type)
            assertEquals(0x9F02, tag.tag)
        }

        @Test
        fun givenAnIntegerTagWhenCreateATagThenShouldCorrectlyCreate3ByteTag() {
            val tag = TLVTag.fromTag(0xDF8115)

            assertContentEquals(
                byteArrayOf(0xDF.toByte(), 0x81.toByte(), 0x15.toByte()),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.PRIVATE, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(0x095, tag.type)
            assertEquals(0xDF8115, tag.tag)
        }

        @Test
        fun givenAnIntegerUniversalTagWhenCreateATagThenShouldCorrectlyIdentifyType() {
            val tag = TLVTag.fromTag(0x04)

            assertContentEquals(
                byteArrayOf(0x04.toByte()),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.UNIVERSAL, tag.classification)
            assertEquals(TLVTag.Construction.PRIMITIVE, tag.construction)
            assertEquals(UniversalTagDescription.OCTET_STRING.type, tag.type)
            assertEquals(0x04, tag.tag)
        }

        @Test
        fun givenAnIntegerUniversalConstructedTagWhenCreateATagThenShouldCorrectlyIdentifyType() {
            val tag = TLVTag.fromTag(0x30)

            assertContentEquals(
                byteArrayOf(0x30.toByte()),
                tag.bytes,
            )
            assertEquals(TLVTag.Classification.UNIVERSAL, tag.classification)
            assertEquals(TLVTag.Construction.CONSTRUCTED, tag.construction)
            assertEquals(UniversalTagDescription.SEQUENCE.type, tag.type)
            assertEquals(0x30, tag.tag)
        }
    }

    class TagExplainTests {
        @Test
        fun givenASingleByteTagWhenExplainThenShouldShowCorrectBitPattern() {
            val tag = TLVTag.fromTag(0x95)
            val result = tag.explain("\n").toString()

            assertEquals(
                """
                95
                Number: 21
                Unknown tag

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 1  | 0  | -  | -  | -  | -  | -  | -  |   ${TLVTag.Classification.CONTEXT_SPECIFIC.run { "$info - $description" }}
                | -  | -  | 0  | -  | -  | -  | -  | -  |   ${TLVTag.Construction.PRIMITIVE.run { "$info - $description" }}
                | -  | -  | -  | 1  | 0  | 1  | 0  | 1  |   ${TLVTag.Form.SHORT.run { "$info - $description" }}

                """.trimIndent(),
                result,
            )
        }

        @Test
        fun givenATwoByteTagWhenExplainThenShouldShowCorrectBitPatterns() {
            val tag = TLVTag.fromTag(0x9F02)
            val result = tag.explain("\n").toString()

            assertEquals(
                """
                9f02
                Number: 2
                Unknown tag

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 1  | 0  | -  | -  | -  | -  | -  | -  |   ${TLVTag.Classification.CONTEXT_SPECIFIC.run { "$info - $description" }}
                | -  | -  | 0  | -  | -  | -  | -  | -  |   ${TLVTag.Construction.PRIMITIVE.run { "$info - $description" }}
                | -  | -  | -  | 1  | 1  | 1  | 1  | 1  |   ${TLVTag.Form.LONG.run { "$info - $description" }}

                Byte 2
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 0  | -  | -  | -  | -  | -  | -  | -  |   LAST_BYTE
                | -  | 0  | 0  | 0  | 0  | 0  | 1  | 0  |   Type

                """.trimIndent(),
                result,
            )
        }

        @Test
        fun givenAUniversalTagWhenExplainThenShouldShowCorrectBitPattern() {
            val tag = TLVTag.fromTag(0x04, listOf(ASNOneSpecification)::contextualize)
            val result = tag.explain("\n").toString()

            assertEquals(
                """
                04
                Number: 4
                ${UniversalTagDescription.OCTET_STRING.info}
                ${UniversalTagDescription.OCTET_STRING.description}

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 0  | 0  | -  | -  | -  | -  | -  | -  |   ${TLVTag.Classification.UNIVERSAL.run { "$info - $description" }}
                | -  | -  | 0  | -  | -  | -  | -  | -  |   ${TLVTag.Construction.PRIMITIVE.run { "$info - $description" }}
                | -  | -  | -  | 0  | 0  | 1  | 0  | 0  |   ${TLVTag.Form.SHORT.run { "$info - $description" }}

                """.trimIndent(),
                result,
            )
        }

        @Test
        fun givenAUniversalConstructedTagWhenExplainThenShouldShowCorrectBitPattern() {
            val tag = TLVTag.fromTag(0x30, listOf(ASNOneSpecification)::contextualize)
            val result = tag.explain("\n").toString()

            assertEquals(
                """
                30
                Number: 16
                ${UniversalTagDescription.SEQUENCE.info}
                ${UniversalTagDescription.SEQUENCE.description}

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 0  | 0  | -  | -  | -  | -  | -  | -  |   ${TLVTag.Classification.UNIVERSAL.run { "$info - $description" }}
                | -  | -  | 1  | -  | -  | -  | -  | -  |   ${TLVTag.Construction.CONSTRUCTED.run { "$info - $description" }}
                | -  | -  | -  | 1  | 0  | 0  | 0  | 0  |   ${TLVTag.Form.SHORT.run { "$info - $description" }}

                """.trimIndent(),
                result,
            )
        }
    }
}
