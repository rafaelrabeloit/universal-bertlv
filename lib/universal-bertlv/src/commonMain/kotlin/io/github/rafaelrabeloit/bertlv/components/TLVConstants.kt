package io.github.rafaelrabeloit.bertlv.components

/**
 * TLV-specific constants
 */
object TLVConstants {
    // Tag constants
    const val TAG_MASK = 0b00011111
    const val TAG_CONTINUATION_MASK = 0b10000000

    // Length constants
    const val LENGTH_SHORT_MASK = 0x7F
    const val LENGTH_LONG_MASK = 0x80
    const val MAX_SHORT_LENGTH = 0x7F

    // Bit positions and lengths
    const val CLASS_BITS_POSITION = 7
    const val CLASS_BITS_LENGTH = 2
    const val CONSTRUCTION_BIT_POSITION = 6
    const val CONSTRUCTION_BIT_LENGTH = 1
    const val TYPE_BITS_POSITION = 1
    const val TYPE_BITS_LENGTH = 5
    const val MULTI_BYTE_TYPE_BITS_POSITION = 1
    const val MULTI_BYTE_TYPE_BITS_LENGTH = 7
}
