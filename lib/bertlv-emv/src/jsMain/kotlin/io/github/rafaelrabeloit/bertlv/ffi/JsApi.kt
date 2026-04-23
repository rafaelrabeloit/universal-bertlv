@file:OptIn(kotlin.ExperimentalStdlibApi::class, kotlin.js.ExperimentalJsExport::class)

package io.github.rafaelrabeloit.bertlv.ffi

import io.github.rafaelrabeloit.bertlv.TLV
import io.github.rafaelrabeloit.bertlv.TLVList
import io.github.rafaelrabeloit.bertlv.components.TLVLength
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.emv.EmvSpecification
import kotlin.js.JsExport

/**
 * JavaScript API for the bertlv-emv library.
 *
 * All functions return JSON strings — the JS consumer is responsible for parsing.
 * This mirrors the C-API surface (parse, explain, version).
 */
@JsExport
fun emvParseTlv(hex: String): String {
    return try {
        val bytes = hex.hexToByteArray()
        val tlvList = TLVList.fromTlvListBuffer(bytes, listOf(EmvSpecification))
        tlvListToJson(tlvList)
    } catch (e: Exception) {
        """{"error":"${escapeJson(e.message ?: "unknown")}"}"""
    }
}

@JsExport
fun emvExplainTag(tagHex: String, valueHex: String): String {
    return try {
        val tagBytes = tagHex.hexToByteArray()
        val tlvTag = TLVTag.fromTlvBuffer(tagBytes)

        if (!EmvSpecification.tagExists(tlvTag)) {
            """{"error":"Unknown tag: $tagHex"}"""
        } else {
            val context = EmvSpecification.contextForTag(tlvTag)
            val name = escapeJson(context.info ?: "")
            val desc = escapeJson(context.description)
            val explanation = buildExplanation(tlvTag, valueHex.hexToByteArray())
            val sb = StringBuilder()
            sb.append("{")
            sb.append("\"tag\":\"$tagHex\",")
            sb.append("\"name\":\"$name\",")
            sb.append("\"description\":\"$desc\"")
            if (explanation != null) {
                sb.append(",\"explanation\":")
                sb.append("\"${escapeJson(explanation)}\"")
            }
            sb.append("}")
            sb.toString()
        }
    } catch (e: Exception) {
        """{"error":"${escapeJson(e.message ?: "unknown")}"}"""
    }
}

@JsExport
fun emvVersion(): String {
    return LIB_VERSION
}

// --- Internal helpers ---

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
    sb.append("\"description\":\"${escapeJson(context.description)}\",")
    sb.append("\"length\":${tlv.length},")
    sb.append("\"value\":\"$valueHex\",")
    sb.append("\"isConstructed\":$isConstructed,")
    sb.append("\"explanation\":\"${escapeJson(explanation)}\"")
    if (isConstructed) {
        val childList = tlv.value
        if (childList is TLVList) {
            sb.append(",\"children\":")
            sb.append(tlvListToJson(childList))
        }
    }
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
        val tlv = TLV.fromTlvBuffer(tlvBytes, listOf(EmvSpecification))
        val explanation = tlv.tlvValue.explain("\n").toString().trim()
        explanation.ifEmpty { null }
    } catch (_: Exception) {
        null
    }
}
