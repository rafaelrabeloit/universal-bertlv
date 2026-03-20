package io.github.rafaelrabeloit.bertlv.utils

interface Buffered {
    val bytes: ByteArray

    val size: Int
        get() = bytes.size
}
