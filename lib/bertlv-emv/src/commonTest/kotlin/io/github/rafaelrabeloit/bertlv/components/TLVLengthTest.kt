package io.github.rafaelrabeloit.bertlv.components

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class TLVLengthTest {

    class LengthParseTests {
        @Test
        fun `Given a valid tlv When parse length Then should correctly parse short form 1 byte length`() {
            val shortFormLengthTlv = byteArrayOf(
                0x04.toByte(),
                0x05.toByte(),
                0x01.toByte(),
                0x02.toByte(),
                0x03.toByte(),
                0x04.toByte(),
                0x05.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(shortFormLengthTlv)
            val length = TLVLength.fromTlvBuffer(shortFormLengthTlv, tag)

            assertContentEquals(
                byteArrayOf(0x05.toByte()),
                length.bytes,
            )
            assertEquals(TLVLength.Form.SHORT, length.form)
            assertEquals(5, length.length)
        }

        @Test
        fun `Given a valid tlv When parse length Then should correctly parse long form 2 bytes length`() {
            val longForm2BytesLengthTlv = byteArrayOf(
                0x03.toByte(),
                0x81.toByte(),
                0x82.toByte(),
                0x00.toByte(),
                0x01.toByte(),
                0x02.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(longForm2BytesLengthTlv)
            val length = TLVLength.fromTlvBuffer(longForm2BytesLengthTlv, tag)

            assertContentEquals(
                byteArrayOf(
                    0x81.toByte(),
                    0x82.toByte(),
                ),
                length.bytes,
            )
            assertEquals(TLVLength.Form.LONG, length.form)
            assertEquals(130, length.length)
        }

        @Test
        fun `Given a valid tlv When parse length Then should correctly parse long form 3 bytes length`() {
            val longForm3BytesLengthTlv = byteArrayOf(
                0x30.toByte(),
                0x82.toByte(),
                0x04.toByte(),
                0x00.toByte(),
                0x30.toByte(),
                0x81.toByte(),
                0x80.toByte(),
            )

            val tag = TLVTag.fromTlvBuffer(longForm3BytesLengthTlv)
            val length = TLVLength.fromTlvBuffer(longForm3BytesLengthTlv, tag)

            assertContentEquals(
                byteArrayOf(
                    0x82.toByte(),
                    0x04.toByte(),
                    0x00.toByte(),
                ),
                length.bytes,
            )
            assertEquals(TLVLength.Form.LONG, length.form)
            assertEquals(1024, length.length)
        }
    }

    class LengthCreateTests {
        @Test
        fun `Given a length value When create from length Then should correctly create short form length`() {
            val length = TLVLength.fromLength(5)

            assertContentEquals(
                byteArrayOf(0x05.toByte()),
                length.bytes,
            )
            assertEquals(TLVLength.Form.SHORT, length.form)
            assertEquals(5, length.length)
        }

        @Test
        fun `Given a length value When create from length Then should correctly create long form 2 bytes length`() {
            val length = TLVLength.fromLength(130)

            assertContentEquals(
                byteArrayOf(
                    0x81.toByte(),
                    0x82.toByte(),
                ),
                length.bytes,
            )
            assertEquals(TLVLength.Form.LONG, length.form)
            assertEquals(130, length.length)
        }

        @Test
        fun `Given a length value When create from length Then should correctly create long form 3 bytes length`() {
            val length = TLVLength.fromLength(1024)

            assertContentEquals(
                byteArrayOf(
                    0x82.toByte(),
                    0x04.toByte(),
                    0x00.toByte(),
                ),
                length.bytes,
            )
            assertEquals(TLVLength.Form.LONG, length.form)
            assertEquals(1024, length.length)
        }
    }

    class LengthExplainTests {
        @Test
        fun `Given a short form length When explain Then should show correct bit pattern`() {
            val length = TLVLength.fromLength(5)
            val result = length.explain("\n").toString()

            assertEquals(
                """
                05
                Length: 5

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 0  | -  | -  | -  | -  | -  | -  | -  |   ${TLVLength.Form.SHORT.run { "$info - $description" }}
                | -  | 0  | 0  | 0  | 0  | 1  | 0  | 1  |   Length value

                """.trimIndent(),
                result,
            )
        }

        @Test
        fun `Given a long form 2 bytes length When explain Then should show correct bit patterns`() {
            val length = TLVLength.fromLength(130)
            val result = length.explain("\n").toString()

            assertEquals(
                """
                8182
                Length: 130

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 1  | -  | -  | -  | -  | -  | -  | -  |   ${TLVLength.Form.LONG.run { "$info - $description" }}
                | -  | 0  | 0  | 0  | 0  | 0  | 0  | 1  |   Number of subsequent bytes

                Byte 2
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 1  | 0  | 0  | 0  | 0  | 0  | 1  | 0  |   Length value

                """.trimIndent(),
                result,
            )
        }

        @Test
        fun `Given a long form 3 bytes length When explain Then should show correct bit patterns`() {
            val length = TLVLength.fromLength(1024)
            val result = length.explain("\n").toString()

            assertEquals(
                """
                820400
                Length: 1024

                Byte 1
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 1  | -  | -  | -  | -  | -  | -  | -  |   ${TLVLength.Form.LONG.run { "$info - $description" }}
                | -  | 0  | 0  | 0  | 0  | 0  | 1  | 0  |   Number of subsequent bytes

                Byte 2
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 0  | 0  | 0  | 0  | 0  | 1  | 0  | 0  |   Length value

                Byte 3
                | b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
                ===================================================
                | 0  | 0  | 0  | 0  | 0  | 0  | 0  | 0  |   Length value

                """.trimIndent(),
                result,
            )
        }
    }
}
