<!-- Badges -->
[![CI](https://img.shields.io/github/actions/workflow/status/rafaelrabeloit/universal-bertlv/ci.yml?branch=main&label=CI)](https://github.com/rafaelrabeloit/universal-bertlv/actions)
[![pub.dev](https://img.shields.io/pub/v/bertlv_emv?label=pub.dev)](https://pub.dev/packages/bertlv_emv)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.rafaelrabeloit/bertlv-emv?label=Maven%20Central)](https://central.sonatype.com/artifact/io.github.rafaelrabeloit/bertlv-emv)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

# Universal BERTLV

A cross-platform **BER-TLV / TLV parser** for **EMV payment systems**.

Parse, explain, and visualize EMV BER-TLV data on any platform — Web, Android, iOS, and JVM — from a single Kotlin Multiplatform core.

## Overview

Universal BERTLV provides:

- **Full BER-TLV parsing** — recursive decode of constructed and primitive tags
- **Hex string input** — parse or build TLVs directly from hex strings (whitespace is ignored)
- **EMV tag dictionary** — all EMV 4.1 tags with human-readable names
- **Value explainers** — bitfield, lookup, and complex explainers for 30+ EMV tags (TVR, AIP, CVM List, IACs, country/currency codes, and more)
- **Cross-platform** — one Kotlin Multiplatform library powers every target

## Architecture

```
┌─────────────────────────────────────────────┐
│                  Your App                   │
│            (Flutter / Kotlin)               │
├─────────────────────────────────────────────┤
│          plugin/ — Flutter Plugin           │
│  ┌─────────────┐  ┌──────────────────────┐  │
│  │ bertlv_emv  │  │  Platform packages   │  │
│  │ (interface) │  │  _web  │  _mobile    │  │
│  └─────────────┘  └──────────────────────┘  │
├─────────────────────────────────────────────┤
│        lib/ — Kotlin Multiplatform          │
│           bertlv-emv (core)                 │
│      JS • JVM • Android • iOS (Native)     │
└─────────────────────────────────────────────┘
```

| Layer | Path | Role |
|-------|------|------|
| **Core** | `lib/bertlv-emv` | KMP library — parser, tag registry, value explainers |
| **Plugin interface** | `plugin/bertlv_emv` | Platform-agnostic Dart API (federated plugin) |
| **Web impl** | `plugin/bertlv_emv_web` | `dart:js_interop` bridge to KMP JS output |
| **Mobile impl** | `plugin/bertlv_emv_mobile` | `dart:ffi` bridge to Kotlin/Native |

## Installation

### Flutter (pub.dev)

Add the app-facing package to your `pubspec.yaml`:

```yaml
dependencies:
  bertlv_emv: ^0.0.9
```

The correct platform package (`bertlv_emv_web` or `bertlv_emv_mobile`) is selected automatically.

### Kotlin / JVM (Maven Central)

```kotlin
// build.gradle.kts
implementation("io.github.rafaelrabeloit:bertlv-emv:0.0.9")
```

GitHub Packages is also available for snapshot builds — see `lib/bertlv-emv/build.gradle.kts`.

## Usage

### Dart / Flutter

```dart
import 'package:bertlv_emv/bertlv_emv.dart';

final parser = BertlvEmv();
final result = await parser.parse('6F1A840E315041592E5359532E4444463031A5088801025F2D02656E');

for (final tag in result.tags) {
  print('${tag.hexTag}: ${tag.name} = ${tag.hexValue}');
}
```

### Kotlin

Parse a TLV list from hex:

```kotlin
import io.github.rafaelrabeloit.bertlv.TLV
import io.github.rafaelrabeloit.bertlv.TLVList
import io.github.rafaelrabeloit.bertlv.TlvFindMode
import io.github.rafaelrabeloit.emv.EmvSpecification

val tlvList = TLVList.fromTlvListBuffer(
    "6F1A840E315041592E5359532E4444463031A5088801025F2D02656E",
    listOf(EmvSpecification),
)

tlvList.tlvs.forEach { println("${it.tag.toString(16).uppercase()}: ${it.hexValue}") }
```

Parse or build a single TLV:

```kotlin
// Parse complete TLV from hex (spaces allowed)
val aid = TLV.fromBinaryTlvBuffer("9F06 07 A0000000031010")
println(aid.hexValue) // A0000000031010

// Build from tag + value hex
val built = TLV.fromTagAndBinaryValue(0x9F06, "A0000000031010")

// Find a tag inside a TLV list
val tvr = tlvList.find(0x95, TlvFindMode.FIRST)
val duplicateSensitive = tlvList.find(0x95, TlvFindMode.STRICT) // throws if duplicated
```

## Supported Platforms

| Platform | Mechanism |
|----------|-----------|
| **Web** | Kotlin/JS → `dart:js_interop` |
| **Android** | Kotlin/Native → `dart:ffi` |
| **iOS** | Kotlin/Native → `dart:ffi` |
| **JVM** | Direct Kotlin dependency |

## License

[MIT](LICENSE) — see [LICENSE](LICENSE) for details.
