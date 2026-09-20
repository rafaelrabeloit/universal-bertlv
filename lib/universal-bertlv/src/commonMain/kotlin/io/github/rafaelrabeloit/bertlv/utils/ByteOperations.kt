package io.github.rafaelrabeloit.bertlv.utils

import kotlin.experimental.and

fun Byte.matches(mask: Int) = mask.toByte().let { this.and(it) == it }

fun Byte.bits(position: Int, length: Int): Int =
    ((toInt() shr (position - 1)) and ((ALL_BITS_SET shl length).inv())).toByte().toInt()
