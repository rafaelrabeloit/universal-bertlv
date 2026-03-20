package io.github.rafaelrabeloit.emv.explain

import io.github.rafaelrabeloit.emv.EmvTagDescription
import io.github.rafaelrabeloit.emv.explain.templates.ActionCode

/**
 * Terminal Verification Results (TVR) explanation.
 * TVR is a 5-byte binary field where each bit has a specific meaning according to the EMV specification.
 *
 * This is a [ValueExplainer] implementation that provides a detailed explanation of the TVR bits.
 * It can be used with [TLVValue.ValueHandler] to provide human-readable explanations of TVR values.
 *
 * @see TLVValue.ValueHandler
 * @see EmvTagDescription.TERMINAL_VERIFICATION_RESULTS
 */
object TVR : ActionCode(EmvTagDescription.TERMINAL_VERIFICATION_RESULTS)
