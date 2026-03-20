package io.github.rafaelrabeloit.bertlv.universal.value

import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.bertlv.utils.BYTE_MASK

/**
 * Parser for ASN.1 OBJECT IDENTIFIER type.
 * According to ASN.1 encoding rules:
 * - First byte encodes first two components: (first * 40) + second
 * - Subsequent components are encoded in base 128 with continuation bits
 * - Each component uses the high bit (0x80) to indicate more bytes follow
 * - The first component must be 0, 1, or 2
 * - If first component is 0 or 1, second component must be < 40
 */
class ObjectIdentifierValueParser : TLVValue.ValueParser<List<Int>> {
    companion object {
        private const val MAX_FIRST_COMPONENT = 3
        private const val MAX_SECOND_COMPONENT = 40
        private const val CONTINUATION_BIT_MASK = 0x80
        private const val COMPONENT_VALUE_MASK = 0x7F
        private const val BITS_PER_COMPONENT = 7
    }

    override fun bytesToValue(bytes: ByteArray): List<Int> {
        require(bytes.isNotEmpty()) { "ObjectIdentifier value cannot be empty" }

        val result = mutableListOf<Int>()
        var currentValue = 0
        var firstByte = true

        for (byte in bytes) {
            val b = byte.toInt() and BYTE_MASK
            if (firstByte) {
                // First byte encodes first two components
                result.add(b / MAX_SECOND_COMPONENT)
                result.add(b % MAX_SECOND_COMPONENT)
                firstByte = false
            } else {
                if (b and CONTINUATION_BIT_MASK == 0) {
                    // Last byte of current component
                    currentValue = (currentValue shl BITS_PER_COMPONENT) or b
                    result.add(currentValue)
                    currentValue = 0
                } else {
                    // More bytes to come for current component
                    currentValue = (currentValue shl BITS_PER_COMPONENT) or (b and COMPONENT_VALUE_MASK)
                }
            }
        }

        return result
    }

    override fun valueToBytes(value: List<Int>): ByteArray {
        require(value.size >= 2) { "ObjectIdentifier must have at least two components" }
        require(value[0] < MAX_FIRST_COMPONENT) { "First component must be less than 3" }
        require(value[1] < MAX_SECOND_COMPONENT) { "Second component must be less than 40" }

        val bytes = mutableListOf<Byte>()

        // First byte combines first two components
        bytes.add(((value[0] * MAX_SECOND_COMPONENT) + value[1]).toByte())

        // Encode remaining components
        for (i in 2 until value.size) {
            var v = value[i]
            val temp = mutableListOf<Byte>()

            // Encode in base 128
            do {
                temp.add(0, (v and COMPONENT_VALUE_MASK or CONTINUATION_BIT_MASK).toByte())
                v = v ushr BITS_PER_COMPONENT
            } while (v > 0)

            // Clear high bit of last byte
            temp[temp.lastIndex] = (temp.last().toInt() and COMPONENT_VALUE_MASK).toByte()
            bytes.addAll(temp)
        }

        return bytes.toByteArray()
    }

    override fun valueToString(value: List<Int>): String = value.joinToString(".")
}
