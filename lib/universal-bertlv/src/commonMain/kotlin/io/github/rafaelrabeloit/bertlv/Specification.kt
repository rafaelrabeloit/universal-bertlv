@file:OptIn(ExperimentalStdlibApi::class)

package io.github.rafaelrabeloit.bertlv

import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.components.TLVValue

interface Specification {
    fun tagExists(tlvTag: TLVTag): Boolean
    fun contextForTag(tlvTag: TLVTag): TLVTag.Context
    fun handlerOfValue(tlvTag: TLVTag): TLVValue.ValueHandler<*>

    class TagNotExistException : Exception()
}

fun List<Specification>.contextualize(tlvTag: TLVTag): TLVTag.Context =
    this.find { it.tagExists(tlvTag) }?.contextForTag(tlvTag) ?: TLVTag.Context()
