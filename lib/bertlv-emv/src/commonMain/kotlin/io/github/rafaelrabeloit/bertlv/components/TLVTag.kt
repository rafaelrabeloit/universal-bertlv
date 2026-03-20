@file:OptIn(ExperimentalStdlibApi::class, ExperimentalStdlibApi::class)

package io.github.rafaelrabeloit.bertlv.components

import io.github.rafaelrabeloit.bertlv.components.TLVConstants.CLASS_BITS_LENGTH
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.CLASS_BITS_POSITION
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.CONSTRUCTION_BIT_LENGTH
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.CONSTRUCTION_BIT_POSITION
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.MULTI_BYTE_TYPE_BITS_LENGTH
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.MULTI_BYTE_TYPE_BITS_POSITION
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.TAG_CONTINUATION_MASK
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.TAG_MASK
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.TYPE_BITS_LENGTH
import io.github.rafaelrabeloit.bertlv.components.TLVConstants.TYPE_BITS_POSITION
import io.github.rafaelrabeloit.bertlv.components.TLVTag.Context
import io.github.rafaelrabeloit.bertlv.utils.Buffered
import io.github.rafaelrabeloit.bertlv.utils.Explainable
import io.github.rafaelrabeloit.bertlv.utils.Explanation
import io.github.rafaelrabeloit.bertlv.utils.Line
import io.github.rafaelrabeloit.bertlv.utils.LineSeparator
import io.github.rafaelrabeloit.bertlv.utils.Tab
import io.github.rafaelrabeloit.bertlv.utils.TabGroup
import io.github.rafaelrabeloit.bertlv.utils.Table
import io.github.rafaelrabeloit.bertlv.utils.bits
import io.github.rafaelrabeloit.bertlv.utils.matches
import io.github.rafaelrabeloit.bertlv.utils.toBitStrings
import io.github.rafaelrabeloit.bertlv.utils.toByteArray
import io.github.rafaelrabeloit.bertlv.utils.toInt

typealias Contextualize = (TLVTag) -> Context

class TLVTag private constructor(
    override val bytes: ByteArray,
    val tag: Int,

    val classification: Classification,
    val construction: Construction,
    val form: Form,
    val type: Int,

    val contextualize: Contextualize = { Context() },
) : Buffered, Explainable {

    override fun explain(lineSeparator: String): Explanation {
        val context = contextualize(this)
        val explanation = Explanation(lineSeparator)

        explanation.apply {
            add(Line(bytes.toHexString()))
            add(LineSeparator)
            add(Line("Number: $type"))
            context.info?.let { info ->
                add(LineSeparator)
                add(Line(info))
            }
            add(LineSeparator)
            add(Line(context.description))
            add(LineSeparator)
            add(LineSeparator)
        }

        val tables = mutableListOf<Tab>()
        tables.add(createFirstByteTable())

        for (n in 1 until bytes.size) {
            tables.add(createSubsequentByteTable(n))
        }

        explanation.add(TabGroup(tables))
        return explanation
    }

    private fun createFirstByteTable(): Tab {
        val firstBits = bytes[FIRST_BYTE_INDEX].toBitStrings()
        val firstTable = Table.createBitTable(rows = FIRST_TABLE_ROWS)

        firstTable.apply {
            setBitRow(
                CLASSIFICATION_ROW_INDEX,
                firstBits,
                CLASS_BITS_START,
                CLASS_BITS_END,
                "${classification.info} - ${classification.description}",
            )
            setBitRow(
                CONSTRUCTION_ROW_INDEX,
                firstBits,
                CONSTRUCTION_BIT_START,
                CONSTRUCTION_BIT_END,
                "${construction.info} - ${construction.description}",
            )
            setBitRow(
                FORM_ROW_INDEX,
                firstBits,
                TYPE_BITS_START,
                TYPE_BITS_END,
                "${form.info} - ${form.description}",
            )
        }

        return Tab("Byte 1", firstTable)
    }

    private fun createSubsequentByteTable(byteIndex: Int): Tab {
        val bits = bytes[byteIndex].toBitStrings()
        val table = Table.createBitTable(rows = SUBSEQUENT_TABLE_ROWS)

        table.apply {
            val continuationMeaning = if (
                bytes[byteIndex].bits(CONTINUATION_BIT_POSITION, CONTINUATION_BIT_LENGTH) == CONTINUATION_BIT_SET
            ) {
                "CONTINUATION"
            } else {
                "LAST_BYTE"
            }
            setBitRow(
                CONTINUATION_ROW_INDEX,
                bits,
                CONTINUATION_BIT_START,
                CONTINUATION_BIT_END,
                continuationMeaning,
            )
            setBitRow(
                TYPE_ROW_INDEX,
                bits,
                REMAINING_TYPE_BITS_START,
                REMAINING_TYPE_BITS_END,
                "Type",
            )
        }

        return Tab("Byte ${byteIndex + 1}", table)
    }

    companion object {
        private const val FIRST_BYTE_INDEX = 0
        private const val CLASS_BITS_START = 0
        private const val CLASS_BITS_END = 2
        private const val CONSTRUCTION_BIT_START = 2
        private const val CONSTRUCTION_BIT_END = 3
        private const val TYPE_BITS_START = 3
        private const val TYPE_BITS_END = 8
        private const val CONTINUATION_BIT_START = 0
        private const val CONTINUATION_BIT_END = 1
        private const val CONTINUATION_BIT_POSITION = 7
        private const val CONTINUATION_BIT_LENGTH = 1
        private const val REMAINING_TYPE_BITS_START = 1
        private const val REMAINING_TYPE_BITS_END = 8
        private const val FIRST_TABLE_ROWS = 4
        private const val SUBSEQUENT_TABLE_ROWS = 3
        private const val CONTINUATION_BIT_SET = 1
        private const val CLASSIFICATION_ROW_INDEX = 1
        private const val CONSTRUCTION_ROW_INDEX = 2
        private const val FORM_ROW_INDEX = 3
        private const val CONTINUATION_ROW_INDEX = 1
        private const val TYPE_ROW_INDEX = 2

        fun fromTlvBuffer(bytes: ByteArray, contextualize: Contextualize = { Context() }): TLVTag {
            val tagHeader = bytes.first()
            val form = determineForm(tagHeader)
            val tagLength = calculateTagLength(bytes, form)
            val tagBytes = bytes.copyOfRange(0, tagLength)
            val tag = tagBytes.toInt()
            val classification = determineClassification(tagHeader)
            val construction = determineConstruction(tagHeader)
            val type = determineType(bytes, tagHeader, tagLength)
            return TLVTag(tagBytes, tag, classification, construction, form, type, contextualize)
        }

        fun fromTag(tag: Int, contextualize: Contextualize = { Context() }): TLVTag {
            val bytes = tag.toByteArray()
            val tagHeader = bytes.first()
            val classification = determineClassification(tagHeader)
            val construction = determineConstruction(tagHeader)
            val form = determineForm(tagHeader)
            val type = determineType(bytes, tagHeader, bytes.size)
            return TLVTag(bytes, tag, classification, construction, form, type, contextualize)
        }

        private fun calculateTagLength(bytes: ByteArray, form: Form): Int {
            var tagLength = 1

            if (form == Form.LONG) {
                tagLength++

                for (n in 1..<bytes.size) {
                    val byte = bytes[n]

                    if (byte.matches(TAG_CONTINUATION_MASK)) {
                        tagLength++
                    } else {
                        break
                    }
                }
            }

            return tagLength
        }

        private fun determineClassification(tagHeader: Byte): Classification {
            val classBits = tagHeader.bits(CLASS_BITS_POSITION, CLASS_BITS_LENGTH)
            return Classification.entries.firstOrNull { classBits == it.value } ?: Classification.PRIVATE
        }

        private fun determineConstruction(tagHeader: Byte): Construction {
            val constructionBit = tagHeader.bits(CONSTRUCTION_BIT_POSITION, CONSTRUCTION_BIT_LENGTH)
            return Construction.entries.firstOrNull { constructionBit == it.value } ?: Construction.BOTH
        }

        private fun determineForm(tagHeader: Byte): Form {
            return if (tagHeader.matches(TAG_MASK)) {
                Form.LONG
            } else {
                Form.SHORT
            }
        }

        private fun determineType(bytes: ByteArray, tagHeader: Byte, tagLength: Int): Int {
            return if (tagLength == 1) {
                // Single byte tag - type is in bits 1-5
                tagHeader.bits(TYPE_BITS_POSITION, TYPE_BITS_LENGTH)
            } else {
                // Multi-byte tag - extract type from subsequent bytes, ignoring continuation bits
                bytes.copyOfRange(1, tagLength)
                    .fold(0) { acc, byte ->
                        (acc shl MULTI_BYTE_TYPE_BITS_LENGTH) or
                            byte.bits(
                                MULTI_BYTE_TYPE_BITS_POSITION,
                                MULTI_BYTE_TYPE_BITS_LENGTH,
                            )
                    }
            }
        }
    }

    enum class Classification(val value: Int, val info: String, val description: String) {
        UNIVERSAL(
            value = 0,
            info = "Universal",
            description = "The type is native to ASN.1",
        ),
        APPLICATION(
            value = 1,
            info = "Application",
            description = "The type is only valid for one specific application",
        ),
        CONTEXT_SPECIFIC(
            value = 2,
            info = "Context-specific",
            description = "Meaning of this type depends on the context (such as within a sequence, set or choice)",
        ),
        PRIVATE(
            value = 3,
            info = "Private",
            description = "Defined in private specifications",
        ),
    }

    enum class Construction(val value: Int, val info: String, val description: String) {
        BOTH(
            value = -1,
            info = "Both",
            description = "The contents octets may be constructed or primitive",
        ),
        PRIMITIVE(
            value = 0,
            info = "Primitive (P)",
            description = "The contents octets directly encode the value",
        ),
        CONSTRUCTED(
            value = 1,
            info = "Constructed (C)",
            description = "The contents octets contain 0, 1, or more encodings",
        ),
    }

    enum class Form(val info: String, val description: String) {
        SHORT(
            info = "Short Form",
            description = "Identifier spans just one byte",
        ),
        LONG(
            info = "Long Form",
            description = "Tag's 'type' is too large for the 5-bit tag field, it has to be encoded in further octets",
        ),
    }

    data class Context(
        val info: String? = null,
        val description: String = "Unknown tag",
    )
}
