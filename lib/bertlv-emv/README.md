# BERTLV-EMV

A Kotlin Multiplatform library for parsing and handling EMV (Europay, Mastercard, and Visa) BERTLV (Basic Encoding Rules Tag-Length-Value) data structures. This library provides a robust implementation for working with TLV data commonly found in payment card applications and EMV transactions.

## Features

- **TLV Parsing**: Parse individual TLV structures from byte arrays
- **TLV List Parsing**: Parse multiple TLV structures from a single byte array
- **EMV Tag Support**: Built-in support for EMV-specific tags with proper descriptions and validation
- **Multiplatform**: Works on JVM and iOS platforms
- **Type Safety**: Strongly typed API with proper value handling
- **Flexible Specifications**: Support for custom tag specifications beyond EMV

## Project Structure

The project follows a Kotlin Multiplatform structure:

```
src/
├── commonMain/kotlin/io/github/rafaelrabeloit/
│   ├── bertlv/                    # Core TLV functionality
│   │   ├── TLV.kt                 # Main TLV class
│   │   ├── TLVList.kt             # TLV list handling
│   │   ├── Specification.kt       # Tag specification interface
│   │   ├── components/            # TLV components (Tag, Length, Value)
│   │   ├── universal/             # ASN.1 universal tag support
│   │   └── utils/                 # Utility classes
│   └── emv/                       # EMV-specific functionality
│       ├── EmvTagDescription.kt   # EMV tag definitions
│       ├── Format.kt              # EMV data formats
│       └── Source.kt              # EMV data sources
└── commonTest/                    # Shared tests
```

## Usage

### Basic TLV Parsing

Parse a single TLV structure from a byte array:

```kotlin
import io.github.rafaelrabeloit.bertlv.TLV

// Parse a simple TLV: Tag=0x95, Length=2, Value=[0x01, 0x02]
val tlvBytes = byteArrayOf(
    0x95.toByte(), // Tag
    0x02.toByte(), // Length
    0x01.toByte(), // Value byte 1
    0x02.toByte()  // Value byte 2
)

val tlv = TLV.fromBinaryTlvBuffer(tlvBytes)

println("Tag: 0x${tlv.tag.toString(16).uppercase()}")
println("Length: ${tlv.length}")
println("Value: ${(tlv.value as ByteArray).joinToString { "0x${it.toString(16).uppercase()}" }}")
```

### TLV List Parsing

Parse multiple TLV structures from a single byte array:

```kotlin
import io.github.rafaelrabeloit.bertlv.TLVList

// Parse multiple TLVs in sequence
val tlvListBytes = byteArrayOf(
    // First TLV: Tag=0x95, Length=2, Value=[0x01, 0x02]
    0x95.toByte(), 0x02.toByte(), 0x01.toByte(), 0x02.toByte(),
    // Second TLV: Tag=0x96, Length=3, Value=[0x03, 0x04, 0x05]
    0x96.toByte(), 0x03.toByte(), 0x03.toByte(), 0x04.toByte(), 0x05.toByte()
)

val tlvList = TLVList.fromTlvListBuffer(tlvListBytes)

println("Found ${tlvList.tlvs.size} TLV structures:")
tlvList.tlvs.forEachIndexed { index, tlv ->
    println("TLV $index: Tag=0x${tlv.tag.toString(16).uppercase()}, Length=${tlv.length}")
}
```

### Creating TLV Structures

Create TLV structures programmatically:

```kotlin
import io.github.rafaelrabeloit.bertlv.TLV

// Create a TLV from tag and value
val tag = 0x9F02 // EMV Amount, Authorised
val value = byteArrayOf(0x00, 0x00, 0x00, 0x01, 0x00, 0x00) // $10.00

val tlv = TLV.fromTagAndBinaryValue(tag, value)
println("Created TLV with ${tlv.bytes.size} total bytes")
```

### EMV-Specific Usage

The library includes comprehensive EMV tag definitions:

```kotlin
import io.github.rafaelrabeloit.emv.EmvTagDescription

// Access EMV tag information
val panTag = EmvTagDescription.PAN
println("Tag: 0x${panTag.tag.toString(16).uppercase()}")
println("Name: ${panTag.tagName}")
println("Description: ${panTag.description}")
println("Length Range: ${panTag.lengthRange}")
println("Format: ${panTag.format}")
```

## Development

### Building the Project

The project uses Gradle with Kotlin DSL for build configuration:

```bash
# Build all targets
./gradlew build

# Build specific target
./gradlew jvmJar
```

### Running Tests

To run the tests:

```bash
# Run JVM tests
./gradlew cleanJvmTest jvmTest

# Generate HTML coverage report
./gradlew koverHtmlReport
```

The coverage report will be available at `build/reports/kover/html/index.html`.

### Code Quality Checks

To check code style and quality:

```bash
# Check code style
./gradlew ktlintCheck

# Run static code analysis
./gradlew detekt --info
```

### Auto-formatting

To automatically format your code:

```bash
./gradlew ktlintFormat
```

## Dependencies

The project uses the following main dependencies:
- **Kotlin Multiplatform**: Core multiplatform support
- **[BitField Parser](https://github.com/rafaelrabeloit/bitfield-parser)**: Declarative DSL for defining and parsing bitfield schemas, used by all bitfield-based ValueExplainers (`BitFieldExplainer` adapter)
- **Kotlinx DateTime**: Date and time handling
- **Kotlin Test**: Testing framework
- **Kover**: Code coverage reporting
- **Detekt**: Static code analysis
- **Ktlint**: Code style checking

## Platform Support

The library supports:
- **JVM**: Full support for JVM-based applications
- **iOS**: Native iOS support (arm64, x64, and simulator)

## License

[Add license information here] 