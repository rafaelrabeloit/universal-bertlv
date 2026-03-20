package io.github.rafaelrabeloit.bertlv.components

import io.github.rafaelrabeloit.bertlv.components.TLVValue.ValueExplainer
import io.github.rafaelrabeloit.bertlv.universal.value.OctetStringValueParser
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class TLVValueTest {

    class ValueParseTests {
        @Test
        fun givenAValidTlvWhenParseValueThenShouldCorrectlyExtractValueFrom1ByteTag() {
            val oneByteTagTlv = byteArrayOf(
                0x95.toByte(), // tag
                0x05.toByte(), // length
                0x01.toByte(), // value
                0x02.toByte(), // value
                0x03.toByte(), // value
                0x04.toByte(), // value
                0x05.toByte(), // value
            )

            val tag = TLVTag.fromTlvBuffer(oneByteTagTlv)
            val length = TLVLength.fromTlvBuffer(oneByteTagTlv, tag)
            val value = TLVValue.fromBinaryTlvBuffer(oneByteTagTlv, tag, length)

            assertContentEquals(
                byteArrayOf(
                    0x01.toByte(),
                    0x02.toByte(),
                    0x03.toByte(),
                    0x04.toByte(),
                    0x05.toByte(),
                ),
                value.bytes,
            )
        }

        @Test
        fun givenAValidTlvWhenParseValueThenShouldCorrectlyExtractValueFrom2ByteTag() {
            val twoBytesTagTlv = byteArrayOf(
                0x9F.toByte(), // tag
                0x02.toByte(), // tag continuation
                0x06.toByte(), // length
                0x01.toByte(), // value
                0x02.toByte(), // value
                0x03.toByte(), // value
                0x04.toByte(), // value
                0x05.toByte(), // value
                0x06.toByte(), // value
            )

            val tag = TLVTag.fromTlvBuffer(twoBytesTagTlv)
            val length = TLVLength.fromTlvBuffer(twoBytesTagTlv, tag)
            val value = TLVValue.fromBinaryTlvBuffer(twoBytesTagTlv, tag, length)

            assertContentEquals(
                byteArrayOf(
                    0x01.toByte(),
                    0x02.toByte(),
                    0x03.toByte(),
                    0x04.toByte(),
                    0x05.toByte(),
                    0x06.toByte(),
                ),
                value.bytes,
            )
        }

        @Test
        fun givenAValidTlvWhenParseValueThenShouldCorrectlyExtractValueFrom3ByteTag() {
            val threeBytesTagTlv = byteArrayOf(
                0xDF.toByte(), // tag
                0x81.toByte(), // tag continuation
                0x15.toByte(), // tag continuation
                0x06.toByte(), // length
                0x01.toByte(), // value
                0x02.toByte(), // value
                0x03.toByte(), // value
                0x04.toByte(), // value
                0x05.toByte(), // value
                0x06.toByte(), // value
            )

            val tag = TLVTag.fromTlvBuffer(threeBytesTagTlv)
            val length = TLVLength.fromTlvBuffer(threeBytesTagTlv, tag)
            val value = TLVValue.fromBinaryTlvBuffer(threeBytesTagTlv, tag, length)

            assertContentEquals(
                byteArrayOf(
                    0x01.toByte(),
                    0x02.toByte(),
                    0x03.toByte(),
                    0x04.toByte(),
                    0x05.toByte(),
                    0x06.toByte(),
                ),
                value.bytes,
            )
        }

        @Test
        fun givenAValidTlvWhenParseValueThenShouldCorrectlyExtractValueFromUniversalTag() {
            val universalTagTlv = byteArrayOf(
                0x04.toByte(), // OCTET STRING tag
                0x05.toByte(), // length
                0x01.toByte(), // value
                0x02.toByte(), // value
                0x03.toByte(), // value
                0x04.toByte(), // value
                0x05.toByte(), // value
            )

            val tag = TLVTag.fromTlvBuffer(universalTagTlv)
            val length = TLVLength.fromTlvBuffer(universalTagTlv, tag)
            val value = TLVValue.fromBinaryTlvBuffer(universalTagTlv, tag, length)

            assertContentEquals(
                byteArrayOf(
                    0x01.toByte(),
                    0x02.toByte(),
                    0x03.toByte(),
                    0x04.toByte(),
                    0x05.toByte(),
                ),
                value.bytes,
            )
        }

        @Test
        fun givenAValidTlvWhenParseValueThenShouldCorrectlyExtractValueFromUniversalConstructedTag() {
            val universalConstructedTagTlv = byteArrayOf(
                0x30.toByte(), // SEQUENCE tag
                0x05.toByte(), // length
                0x01.toByte(), // value
                0x02.toByte(), // value
                0x03.toByte(), // value
                0x04.toByte(), // value
                0x05.toByte(), // value
            )

            val tag = TLVTag.fromTlvBuffer(universalConstructedTagTlv)
            val length = TLVLength.fromTlvBuffer(universalConstructedTagTlv, tag)
            val value = TLVValue.fromBinaryTlvBuffer(universalConstructedTagTlv, tag, length)

            assertContentEquals(
                byteArrayOf(
                    0x01.toByte(),
                    0x02.toByte(),
                    0x03.toByte(),
                    0x04.toByte(),
                    0x05.toByte(),
                ),
                value.bytes,
            )
        }
    }

    class ValueCreateTests {
        @Test
        fun givenAByteArrayWhenCreateValueThenShouldCorrectlyCreateValue() {
            val valueBytes = byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val value = TLVValue.fromBinaryValue(valueBytes)

            assertContentEquals(valueBytes, value.bytes)
            assertContentEquals(valueBytes, value.value)
        }

        @Test
        fun givenAnEmptyByteArrayWhenCreateValueThenShouldCorrectlyCreateEmptyValue() {
            val valueBytes = ByteArray(0)

            val value = TLVValue.fromBinaryValue(valueBytes)

            assertContentEquals(valueBytes, value.bytes)
            assertContentEquals(valueBytes, value.value)
        }

        @Test
        fun givenASingleByteWhenCreateValueThenShouldCorrectlyCreateSingleByteValue() {
            val valueBytes = byteArrayOf(0xFF.toByte())

            val value = TLVValue.fromBinaryValue(valueBytes)

            assertContentEquals(valueBytes, value.bytes)
            assertContentEquals(valueBytes, value.value)
        }
    }

    class ValueExplainTests {
        @Test
        fun givenABinaryValueWhenExplainThenShouldShowHexRepresentation() {
            val valueBytes = byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val value = TLVValue.fromBinaryValue(valueBytes)
            val result = value.explain("\n").toString()

            assertEquals("0102030405", result)
        }

        @Test
        fun givenAnEmptyBinaryValueWhenExplainThenShouldShowEmptyHexRepresentation() {
            val valueBytes = ByteArray(0)

            val value = TLVValue.fromBinaryValue(valueBytes)
            val result = value.explain("\n").toString()

            assertEquals("", result)
        }

        @Test
        fun givenABinaryValueWithExplainerWhenExplainThenShouldShowHexRepresentationAndExplanation() {
            val valueBytes = byteArrayOf(
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val explainer = object : ValueExplainer<ByteArray> {
                override fun explain(value: ByteArray, lineSeparator: String): Explanation {
                    return Explanation(lineSeparator).apply {
                        add(Line("Byte 1: ${value[0]}"))
                        add(LineSeparator)
                        add(Line("Byte 2: ${value[1]}"))
                        add(LineSeparator)
                        add(Line("Byte 3: ${value[2]}"))
                        add(LineSeparator)
                        add(Line("Byte 4: ${value[3]}"))
                        add(LineSeparator)
                        add(Line("Byte 5: ${value[4]}"))
                    }
                }
            }

            val value = TLVValue.fromValue(
                value = valueBytes,
                handler = TLVValue.ValueHandler(OctetStringValueParser(), explainer),
            )
            val result = value.explain("\n").toString()

            assertEquals(
                """
                0102030405

                Byte 1: 1
                Byte 2: 2
                Byte 3: 3
                Byte 4: 4
                Byte 5: 5
                """.trimIndent(),
                result,
            )
        }
    }
}
