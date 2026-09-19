package io.github.rafaelrabeloit.bertlv.utils

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class BytesExtTest {

    @Test
    fun givenHexStringWhenConvertToByteArrayThenShouldIgnoreWhitespace() {
        val bytes = "9F06 07 A0000000031010".hexToByteArray()

        assertContentEquals(
            byteArrayOf(
                0x9F.toByte(),
                0x06.toByte(),
                0x07.toByte(),
                0xA0.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x00.toByte(),
                0x03.toByte(),
                0x10.toByte(),
                0x10.toByte(),
            ),
            bytes,
        )
    }

    @Test
    fun givenOddLengthHexStringWhenConvertToByteArrayThenShouldFail() {
        assertFailsWith<IllegalArgumentException> {
            "ABC".hexToByteArray()
        }
    }

    @Test
    fun givenByteArrayWhenConvertToHexStringThenShouldReturnUppercaseHex() {
        val hex = byteArrayOf(0xA0.toByte(), 0x00.toByte(), 0x01.toByte()).toHexString()

        assertEquals("A00001", hex)
    }
}
