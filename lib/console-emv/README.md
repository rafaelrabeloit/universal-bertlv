# Console EMV

A Kotlin Multiplatform console application for parsing and explaining EMV TLV (Tag-Length-Value) data with detailed analysis.

## Building

To build the executable JAR:

```bash
./gradlew console-emv:jvmJar
```

## Usage

```bash
java -jar console-emv/build/libs/console-emv-jvm.jar tlv <hex_string>
```

### Examples

Parse and explain Terminal Verification Results (TVR):
```bash
java -jar console-emv/build/libs/console-emv-jvm.jar tlv 95050400000000
```

Output:
```
TAG:
95
Number: 21
Terminal Verification Results

        Indicates the results of the different verifications performed by the terminal
        on the card data and the cardholder
        

Byte 1
| b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
===================================================
| 1  | 0  | -  | -  | -  | -  | -  | -  |   Context-specific - Meaning of this type depends on the context (such as within a sequence, set or choice)
| -  | -  | 0  | -  | -  | -  | -  | -  |   Primitive (P) - The contents octets directly encode the value
| -  | -  | -  | 1  | 0  | 1  | 0  | 1  |   Short Form - Identifier spans just one byte


LENGTH:
05
Length: 5

Byte 1
| b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
===================================================
| 0  | -  | -  | -  | -  | -  | -  | -  |   Short Form - Length value fits in 7 bits (0-127)
| -  | 0  | 0  | 0  | 0  | 1  | 0  | 1  |   Length value


VALUE:
0400000000

Byte 1 - Offline Data Authentication
| b8 | b7 | b6 | b5 | b4 | b3 | b2 | b1 |   Meaning
===================================================
| 0  | -  | -  | -  | -  | -  | -  | -  |   SDA Failed - Static Data Authentication failed
| -  | 0  | -  | -  | -  | -  | -  | -  |   ICC Data Missing - ICC data required for offline processing is missing
| -  | -  | 0  | -  | -  | -  | -  | -  |   Card Appears on Terminal Exception File - Card is in the terminal's exception file
| -  | -  | -  | 0  | -  | -  | -  | -  |   DDA Failed - Dynamic Data Authentication failed
| -  | -  | -  | -  | 0  | -  | -  | -  |   CDA Failed - Combined DDA/AC Generation failed
| -  | -  | -  | -  | -  | 1  | -  | -  |   SDA Selected - Static Data Authentication was selected
| -  | -  | -  | -  | -  | -  | 0  | -  |   RFU - Reserved for Future Use
| -  | -  | -  | -  | -  | -  | -  | 0  |   RFU - Reserved for Future Use

[... additional bytes with detailed explanations ...]
```

Parse a PAN (Primary Account Number) TLV:
```bash
java -jar console-emv/build/libs/console-emv-jvm.jar tlv 5A08123456789012345F
```

## Output Format

The application now provides comprehensive explanations of TLV data including:

### TAG Analysis
- **Hex representation** of the tag bytes
- **Numeric tag number** and EMV tag name (when available)
- **EMV-specific descriptions** for known tags
- **Bit-by-bit breakdown** showing:
  - Class (Universal, Application, Context-specific, Private)
  - Construction (Primitive, Constructed)
  - Form (Short Form, Long Form)

### LENGTH Analysis
- **Hex representation** of the length bytes
- **Decoded length value**
- **Form analysis** (Short Form vs Long Form)
- **Bit-by-bit breakdown** of length encoding

### VALUE Analysis
- **Hex representation** of the value bytes
- **EMV-specific interpretations** for known data elements
- **Bit-by-bit explanations** for structured values like TVR, Terminal Capabilities, etc.
- **Human-readable descriptions** of what each bit represents in EMV context

## EMV Specification Support

The application uses EMV specification knowledge to provide enhanced explanations for:
- Terminal Verification Results (TVR)
- Terminal Capabilities
- Application Interchange Profile (AIP)
- Cryptogram Information Data (CID)
- Application Usage Control (AUC)
- And many other EMV data elements

## Implementation

- **Main Class**: `Main.kt` in `commonMain` source set
- **Dependencies**: Uses the `bertlv-emv` library for TLV parsing and EMV specification support
- **Platform**: Kotlin Multiplatform with JVM target for console execution
- **Build**: Configured as a fat JAR with all dependencies included
- **Explainable Architecture**: All TLV components implement `Explainable` interface for detailed analysis