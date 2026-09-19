package io.github.rafaelrabeloit.emv

import io.github.rafaelrabeloit.bertlv.Specification
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.components.TLVValue
import io.github.rafaelrabeloit.emv.explain.AdditionalTerminalCapabilities
import io.github.rafaelrabeloit.emv.explain.ApplicationCurrencyCode
import io.github.rafaelrabeloit.emv.explain.ApplicationInterchangeProfile
import io.github.rafaelrabeloit.emv.explain.ApplicationLifeCycleData
import io.github.rafaelrabeloit.emv.explain.ApplicationPriorityIndicator
import io.github.rafaelrabeloit.emv.explain.ApplicationReferenceCurrency
import io.github.rafaelrabeloit.emv.explain.ApplicationUsageControl
import io.github.rafaelrabeloit.emv.explain.AuthorisationResponseCode
import io.github.rafaelrabeloit.emv.explain.CVMResults
import io.github.rafaelrabeloit.emv.explain.CardTransactionQualifiers
import io.github.rafaelrabeloit.emv.explain.CryptogramInformationData
import io.github.rafaelrabeloit.emv.explain.CvmList
import io.github.rafaelrabeloit.emv.explain.FormFactor
import io.github.rafaelrabeloit.emv.explain.IssuerActionCodeDefault
import io.github.rafaelrabeloit.emv.explain.IssuerActionCodeDenial
import io.github.rafaelrabeloit.emv.explain.IssuerActionCodeOnline
import io.github.rafaelrabeloit.emv.explain.IssuerApplicationData
import io.github.rafaelrabeloit.emv.explain.IssuerCountryCode
import io.github.rafaelrabeloit.emv.explain.IssuerCountryCodeAlpha2
import io.github.rafaelrabeloit.emv.explain.IssuerCountryCodeAlpha3
import io.github.rafaelrabeloit.emv.explain.LanguagePreference
import io.github.rafaelrabeloit.emv.explain.MerchantCategoryCode
import io.github.rafaelrabeloit.emv.explain.PosEntryMode
import io.github.rafaelrabeloit.emv.explain.ServiceCode
import io.github.rafaelrabeloit.emv.explain.TVR
import io.github.rafaelrabeloit.emv.explain.TerminalCapabilities
import io.github.rafaelrabeloit.emv.explain.TerminalCountryCode
import io.github.rafaelrabeloit.emv.explain.TerminalTransactionQualifiers
import io.github.rafaelrabeloit.emv.explain.TerminalType
import io.github.rafaelrabeloit.emv.explain.TransactionCurrencyCode
import io.github.rafaelrabeloit.emv.explain.TransactionReferenceCurrencyCode
import io.github.rafaelrabeloit.emv.explain.TransactionStatusInformation
import io.github.rafaelrabeloit.emv.explain.TransactionType
import io.github.rafaelrabeloit.emv.value.AlphanumericSpecialValueParser
import io.github.rafaelrabeloit.emv.value.AlphanumericValueParser
import io.github.rafaelrabeloit.emv.value.BinaryValueParser
import io.github.rafaelrabeloit.emv.value.NumericNumberValueParser
import io.github.rafaelrabeloit.emv.value.NumericValueParser

/**
 * Specification for EMV tags and values.
 * Provides context and value parsing for EMV data elements.
 */
object EmvSpecification : Specification {
    override fun tagExists(tlvTag: TLVTag): Boolean {
        return getTagDescription(tlvTag) != null
    }

    override fun contextForTag(tlvTag: TLVTag): TLVTag.Context {
        val tagDescription = getTagDescription(tlvTag)
            ?: throw Specification.TagNotExistException()

        return TLVTag.Context(
            info = tagDescription.tagName,
            description = tagDescription.description,
        )
    }

    override fun handlerOfValue(tlvTag: TLVTag): TLVValue.ValueHandler<*> {
        val tagDescription = getTagDescription(tlvTag)
            ?: throw Specification.TagNotExistException()

        val parser = createParserForFormat(tagDescription.format)
        return createValueHandler(tagDescription, parser)
    }

    private fun getTagDescription(tlvTag: TLVTag): EmvTagDescription? {
        return EmvTagDescription.findByTag(tlvTag.tag)
    }

    private fun createParserForFormat(format: Format): TLVValue.ValueParser<*> {
        return when (format) {
            Format.NUMERIC -> NumericValueParser()
            Format.NUMERIC_NUMBER -> NumericNumberValueParser()
            Format.BINARY -> BinaryValueParser()
            Format.ALPHANUMERIC -> AlphanumericValueParser()
            Format.ALPHANUMERIC_SPECIAL -> AlphanumericSpecialValueParser()
        }
    }

    @Suppress("LongMethod")
    private fun createValueHandler(
        tagDescription: EmvTagDescription,
        defaultParser: TLVValue.ValueParser<*>,
    ): TLVValue.ValueHandler<*> {
        return when (tagDescription) {
            EmvTagDescription.TERMINAL_VERIFICATION_RESULTS ->
                TLVValue.ValueHandler(BinaryValueParser(), TVR)
            EmvTagDescription.TERMINAL_CAPABILITIES ->
                TLVValue.ValueHandler(BinaryValueParser(), TerminalCapabilities)
            EmvTagDescription.TERMINAL_TYPE ->
                TLVValue.ValueHandler(BinaryValueParser(), TerminalType)
            EmvTagDescription.TRANSACTION_TYPE ->
                TLVValue.ValueHandler(NumericValueParser(), TransactionType)
            EmvTagDescription.CARDHOLDER_VERIFICATION_METHOD_RESULTS ->
                TLVValue.ValueHandler(BinaryValueParser(), CVMResults)
            EmvTagDescription.TERMINAL_TRANSACTION_QUALIFIERS ->
                TLVValue.ValueHandler(BinaryValueParser(), TerminalTransactionQualifiers)
            EmvTagDescription.ISSUER_ACTION_CODE_DENIAL ->
                TLVValue.ValueHandler(BinaryValueParser(), IssuerActionCodeDenial)
            EmvTagDescription.ISSUER_ACTION_CODE_DEFAULT ->
                TLVValue.ValueHandler(BinaryValueParser(), IssuerActionCodeDefault)
            EmvTagDescription.ISSUER_ACTION_CODE_ONLINE ->
                TLVValue.ValueHandler(BinaryValueParser(), IssuerActionCodeOnline)
            EmvTagDescription.APPLICATION_USAGE_CONTROL ->
                TLVValue.ValueHandler(BinaryValueParser(), ApplicationUsageControl)
            EmvTagDescription.CRYPTOGRAM_INFORMATION_DATA ->
                TLVValue.ValueHandler(BinaryValueParser(), CryptogramInformationData)
            EmvTagDescription.APPLICATION_LIFE_CYCLE_DATA ->
                TLVValue.ValueHandler(BinaryValueParser(), ApplicationLifeCycleData)
            EmvTagDescription.APPLICATION_PRIORITY_INDICATOR ->
                TLVValue.ValueHandler(BinaryValueParser(), ApplicationPriorityIndicator)
            EmvTagDescription.APPLICATION_INTERCHANGE_PROFILE ->
                TLVValue.ValueHandler(BinaryValueParser(), ApplicationInterchangeProfile)
            EmvTagDescription.LANGUAGE_PREFERENCE ->
                TLVValue.ValueHandler(AlphanumericValueParser(), LanguagePreference)
            EmvTagDescription.MERCHANT_CATEGORY_CODE ->
                TLVValue.ValueHandler(NumericNumberValueParser(), MerchantCategoryCode)
            EmvTagDescription.ISSUER_COUNTRY_CODE ->
                TLVValue.ValueHandler(NumericNumberValueParser(), IssuerCountryCode)
            EmvTagDescription.ISSUER_COUNTRY_CODE_ALPHA2 ->
                TLVValue.ValueHandler(AlphanumericValueParser(), IssuerCountryCodeAlpha2)
            EmvTagDescription.ISSUER_COUNTRY_CODE_ALPHA3 ->
                TLVValue.ValueHandler(AlphanumericValueParser(), IssuerCountryCodeAlpha3)
            EmvTagDescription.TERMINAL_COUNTRY_CODE ->
                TLVValue.ValueHandler(NumericNumberValueParser(), TerminalCountryCode)
            EmvTagDescription.APPLICATION_REFERENCE_CURRENCY ->
                TLVValue.ValueHandler(NumericValueParser(), ApplicationReferenceCurrency)
            EmvTagDescription.APPLICATION_CURRENCY_CODE ->
                TLVValue.ValueHandler(NumericNumberValueParser(), ApplicationCurrencyCode)
            EmvTagDescription.TRANSACTION_CURRENCY_CODE ->
                TLVValue.ValueHandler(NumericNumberValueParser(), TransactionCurrencyCode)
            EmvTagDescription.TRANSACTION_REFERENCE_CURRENCY_CODE ->
                TLVValue.ValueHandler(NumericNumberValueParser(), TransactionReferenceCurrencyCode)
            EmvTagDescription.TRANSACTION_STATUS_INFORMATION ->
                TLVValue.ValueHandler(BinaryValueParser(), TransactionStatusInformation)
            EmvTagDescription.ADDITIONAL_TERMINAL_CAPABILITIES ->
                TLVValue.ValueHandler(BinaryValueParser(), AdditionalTerminalCapabilities)
            EmvTagDescription.CARD_TRANSACTION_QUALIFIERS ->
                TLVValue.ValueHandler(BinaryValueParser(), CardTransactionQualifiers)
            EmvTagDescription.FORM_FACTOR ->
                TLVValue.ValueHandler(BinaryValueParser(), FormFactor)
            EmvTagDescription.CVM_LIST ->
                TLVValue.ValueHandler(BinaryValueParser(), CvmList)
            EmvTagDescription.ISSUER_APPLICATION_DATA ->
                TLVValue.ValueHandler(BinaryValueParser(), IssuerApplicationData)
            EmvTagDescription.POS_ENTRY_MODE ->
                TLVValue.ValueHandler(NumericValueParser(), PosEntryMode)
            EmvTagDescription.AUTHORISATION_RESPONSE_CODE ->
                TLVValue.ValueHandler(AlphanumericValueParser(), AuthorisationResponseCode)
            EmvTagDescription.SERVICE_CODE ->
                TLVValue.ValueHandler(NumericValueParser(), ServiceCode)
            else -> TLVValue.ValueHandler(defaultParser, null)
        }
    }
}
