@file:OptIn(kotlinx.cinterop.ExperimentalForeignApi::class, kotlin.ExperimentalStdlibApi::class)

package io.github.rafaelrabeloit.bertlv.ffi

import io.github.rafaelrabeloit.bertlv.TLV
import io.github.rafaelrabeloit.bertlv.TLVList
import io.github.rafaelrabeloit.bertlv.components.TLVLength
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.emv.EmvSpecification
import kotlinx.cinterop.ByteVar
import kotlinx.cinterop.CPointer
import kotlinx.cinterop.allocArray
import kotlinx.cinterop.nativeHeap
import kotlinx.cinterop.set
import kotlinx.cinterop.toKString
import kotlin.experimental.ExperimentalNativeApi
import kotlin.native.CName

/**
 * C-compatible API for the bertlv-emv library.
 *
 * Memory convention:
 * - Input strings are borrowed (caller owns them)
 * - Output strings are allocated on nativeHeap — caller must free with emv_free()
 */

@OptIn(ExperimentalNativeApi::class)
@CName("emv_parse_tlv")
fun emvParseTlv(hex: CPointer<ByteVar>): CPointer<ByteVar> {
    return try {
        val input = hex.toKString()
        val bytes = input.hexToByteArray()
        val tlvList = TLVList.fromTlvListBuffer(bytes, listOf(EmvSpecification))
        val json = tlvListToJson(tlvList)
        json.allocCString()
    } catch (e: Exception) {
        """{"error":"${escapeJson(e.message ?: "unknown")}"}""".allocCString()
    }
}

@OptIn(ExperimentalNativeApi::class)
@CName("emv_explain_tag")
fun emvExplainTag(
    tagHex: CPointer<ByteVar>,
    valueHex: CPointer<ByteVar>,
): CPointer<ByteVar> {
    return try {
        val tagStr = tagHex.toKString()
        val valueStr = valueHex.toKString()
        val tagBytes = tagStr.hexToByteArray()
        val tlvTag = TLVTag.fromTlvBuffer(tagBytes)

        if (!EmvSpecification.tagExists(tlvTag)) {
            """{"error":"Unknown tag: $tagStr"}"""
                .allocCString()
        } else {
            val context = EmvSpecification.contextForTag(tlvTag)
            val name = escapeJson(context.info ?: "")
            val desc = escapeJson(context.description)
            val explanation = buildExplanation(
                tlvTag,
                valueStr.hexToByteArray(),
            )
            val sb = StringBuilder()
            sb.append("{")
            sb.append("\"tag\":\"$tagStr\",")
            sb.append("\"name\":\"$name\",")
            sb.append("\"description\":\"$desc\"")
            if (explanation != null) {
                sb.append(",\"explanation\":")
                sb.append("\"${escapeJson(explanation)}\"")
            }
            sb.append("}")
            sb.toString().allocCString()
        }
    } catch (e: Exception) {
        """{"error":"${escapeJson(e.message ?: "unknown")}"}"""
            .allocCString()
    }
}

@OptIn(ExperimentalNativeApi::class)
@CName("emv_version")
fun emvVersion(): CPointer<ByteVar> {
    return "0.0.1".allocCString()
}

@OptIn(ExperimentalNativeApi::class)
@CName("emv_free")
fun emvFree(ptr: CPointer<ByteVar>?) {
    ptr?.let { nativeHeap.free(it.rawValue) }
}

// --- Internal helpers ---

private fun String.allocCString(): CPointer<ByteVar> {
    val bytes = this.encodeToByteArray()
    val ptr = nativeHeap.allocArray<ByteVar>(bytes.size + 1)
    bytes.forEachIndexed { i, b -> ptr[i] = b }
    ptr[bytes.size] = 0
    return ptr
}

private fun escapeJson(s: String): String =
    s.replace("\\", "\\\\")
        .replace("\"", "\\\"")
        .replace("\n", "\\n")
        .replace("\r", "\\r")
        .replace("\t", "\\t")

private fun tlvListToJson(tlvList: TLVList): String {
    val sb = StringBuilder()
    sb.append("[")
    tlvList.tlvs.forEachIndexed { index, tlv ->
        if (index > 0) sb.append(",")
        sb.append(tlvToJson(tlv))
    }
    sb.append("]")
    return sb.toString()
}

private fun tlvToJson(tlv: TLV<*>): String {
    val sb = StringBuilder()
    val tagHex = tlv.tlvTag.bytes.toHexString()
    val valueHex = tlv.tlvValue.bytes.toHexString()
    val context = tlv.tlvTag.contextualize(tlv.tlvTag)
    val isConstructed =
        tlv.tlvTag.construction == TLVTag.Construction.CONSTRUCTED
    val explanation = tlv.tlvValue.explain("\n").toString().trim()

    sb.append("{")
    sb.append("\"tag\":\"$tagHex\",")
    sb.append("\"tagName\":\"${escapeJson(context.info ?: "")}\",")
    sb.append(
        "\"description\":\"${escapeJson(context.description)}\",",
    )
    sb.append("\"length\":${tlv.length},")
    sb.append("\"value\":\"$valueHex\",")
    sb.append("\"isConstructed\":$isConstructed,")
    sb.append("\"explanation\":\"${escapeJson(explanation)}\"")
    sb.append("}")
    return sb.toString()
}

private fun buildExplanation(
    tag: TLVTag,
    valueBytes: ByteArray,
): String? {
    return try {
        val length = TLVLength.fromLength(valueBytes.size)
        val tlvBytes = tag.bytes + length.bytes + valueBytes
        val tlv = TLV.fromTlvBuffer(
            tlvBytes,
            listOf(EmvSpecification),
        )
        val explanation = tlv.tlvValue.explain("\n")
            .toString().trim()
        explanation.ifEmpty { null }
    } catch (_: Exception) {
        null
    }
}
