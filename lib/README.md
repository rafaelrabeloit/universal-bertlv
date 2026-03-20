# Universal BERTLV — KMP Library

Kotlin Multiplatform library for parsing, explaining, and visualizing EMV BER-TLV data.

Part of the [Universal BERTLV](../README.md) project — a cross-platform BER-TLV/TLV parser for EMV payment systems.

## Published

Published on GitHub Packages:

```
io.github.rafaelrabeloit:bertlv-emv:0.1.0
```

Add the GitHub Packages Maven repository to your `settings.gradle.kts`:

```kotlin
maven {
    name = "GitHubPackages"
    url = uri("https://maven.pkg.github.com/rafaelrabeloit/universal-bertlv")
    credentials {
        username = providers.gradleProperty("gpr.user").orNull
            ?: System.getenv("GITHUB_ACTOR") ?: ""
        password = providers.gradleProperty("gpr.key").orNull
            ?: System.getenv("GITHUB_TOKEN") ?: ""
    }
}
```

Then add the dependency:

```kotlin
implementation("io.github.rafaelrabeloit:bertlv-emv:0.1.0")
```

## Dependencies

- [BitField Parser](https://github.com/rafaelrabeloit/bitfield-parser) — declarative DSL for defining and parsing bitfield schemas, used by all bitfield-based ValueExplainers.

## Explicitly Handled EMV Tags

All EMV 4.1 tags are defined. The following tags have specialized ValueExplainers that provide detailed interpretation of their binary values:

### Bitfield Explainers (BitField Parser DSL)

| Tag (Hex) | Enum Name | ValueExplainer |
|-----------|-----------|----------------|
| 0x82 | APPLICATION_INTERCHANGE_PROFILE | ApplicationInterchangeProfile |
| 0x87 | APPLICATION_PRIORITY_INDICATOR | ApplicationPriorityIndicator |
| 0x95 | TERMINAL_VERIFICATION_RESULTS | TVR |
| 0x9B | TRANSACTION_STATUS_INFORMATION | TransactionStatusInformation |
| 0x9F07 | APPLICATION_USAGE_CONTROL | ApplicationUsageControl |
| 0x9F0A | APPLICATION_LIFE_CYCLE_DATA | ApplicationLifeCycleData |
| 0x9F0D | ISSUER_ACTION_CODE_DEFAULT | IssuerActionCodeDefault |
| 0x9F0E | ISSUER_ACTION_CODE_DENIAL | IssuerActionCodeDenial |
| 0x9F0F | ISSUER_ACTION_CODE_ONLINE | IssuerActionCodeOnline |
| 0x9F27 | CRYPTOGRAM_INFORMATION_DATA | CryptogramInformationData |
| 0x9F33 | TERMINAL_CAPABILITIES | TerminalCapabilities |
| 0x9F34 | CARDHOLDER_VERIFICATION_METHOD_RESULTS | CVMResults |
| 0x9F40 | ADDITIONAL_TERMINAL_CAPABILITIES | AdditionalTerminalCapabilities |
| 0x9F66 | TERMINAL_TRANSACTION_QUALIFIERS | TerminalTransactionQualifiers |
| 0x9F6C | CARD_TRANSACTION_QUALIFIERS | CardTransactionQualifiers |
| 0x9F6E | FORM_FACTOR | FormFactor |

### Lookup/Enum Explainers

| Tag (Hex) | Enum Name | ValueExplainer |
|-----------|-----------|----------------|
| 0x5F28 | ISSUER_COUNTRY_CODE | IssuerCountryCode |
| 0x5F2A | TRANSACTION_CURRENCY_CODE | TransactionCurrencyCode |
| 0x5F2D | LANGUAGE_PREFERENCE | LanguagePreference |
| 0x5F30 | SERVICE_CODE | ServiceCode |
| 0x5F55 | ISSUER_COUNTRY_CODE_ALPHA2 | IssuerCountryCodeAlpha2 |
| 0x5F56 | ISSUER_COUNTRY_CODE_ALPHA3 | IssuerCountryCodeAlpha3 |
| 0x8A | AUTHORISATION_RESPONSE_CODE | AuthorisationResponseCode |
| 0x9C | TRANSACTION_TYPE | TransactionType |
| 0x9F15 | MERCHANT_CATEGORY_CODE | MerchantCategoryCode |
| 0x9F1A | TERMINAL_COUNTRY_CODE | TerminalCountryCode |
| 0x9F35 | TERMINAL_TYPE | TerminalType |
| 0x9F39 | POS_ENTRY_MODE | PosEntryMode |
| 0x9F3B | APPLICATION_REFERENCE_CURRENCY | ApplicationReferenceCurrency |
| 0x9F3C | TRANSACTION_REFERENCE_CURRENCY_CODE | TransactionReferenceCurrencyCode |
| 0x9F42 | APPLICATION_CURRENCY_CODE | ApplicationCurrencyCode |

### Complex Explainers

| Tag (Hex) | Enum Name | ValueExplainer |
|-----------|-----------|----------------|
| 0x8E | CVM_LIST | CvmList |
| 0x9F10 | ISSUER_APP_DATA | IssuerApplicationData |
