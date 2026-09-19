package io.github.rafaelrabeloit.emv

/**
 * Represents the source of EMV data.
 * Indicates where the data originates from in the EMV transaction flow.
 */
enum class Source {
    /**
     * Data originating from the terminal (POS device).
     */
    TERMINAL,

    /**
     * Data originating from the Integrated Circuit Card (ICC).
     */
    ICC,

    /**
     * Data originating from the card issuer.
     */
    ISSUER,
}
