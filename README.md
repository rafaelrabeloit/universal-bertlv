<!-- Badges -->
[![CI](https://img.shields.io/github/actions/workflow/status/rafaelrabeloit/universal-bertlv/ci.yml?branch=main&label=CI)](https://github.com/rafaelrabeloit/universal-bertlv/actions)
[![pub.dev](https://img.shields.io/pub/v/universal_bertlv?label=pub.dev)](https://pub.dev/packages/universal_bertlv)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.rafaelrabeloit/universal-bertlv?label=Maven%20Central)](https://central.sonatype.com/artifact/io.github.rafaelrabeloit/universal-bertlv)
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
│  │ universal_bertlv  │  │  Platform packages   │  │
│  │ (interface) │  │  _web  │  _mobile    │  │
│  └─────────────┘  └──────────────────────┘  │
├─────────────────────────────────────────────┤
│        lib/ — Kotlin Multiplatform          │
│           universal-bertlv (core)                 │
│      JS • JVM • Android • iOS (Native)     │
└─────────────────────────────────────────────┘
```

| Layer | Path | Role |
|-------|------|------|
| **Core** | `lib/universal-bertlv` | KMP library — parser, tag registry, value explainers |
| **Plugin interface** | `plugin/universal_bertlv` | Platform-agnostic Dart API (federated plugin) |
| **Web impl** | `plugin/universal_bertlv_web` | `dart:js_interop` bridge to KMP JS output |
| **Mobile impl** | `plugin/universal_bertlv_mobile` | `dart:ffi` bridge to Kotlin/Native |

## Installation

### Flutter (tagged Git source)

The Flutter packages are not yet published to pub.dev. Consume a tagged source
release and declare the app-facing package plus the required platform package:

```yaml
dependencies:
  universal_bertlv:
    git:
      url: https://github.com/rafaelrabeloit/universal-bertlv.git
      ref: v0.0.10
      path: plugin/universal_bertlv
  universal_bertlv_web:
    git:
      url: https://github.com/rafaelrabeloit/universal-bertlv.git
      ref: v0.0.10
      path: plugin/universal_bertlv_web
```

For Android/iOS, replace `universal_bertlv_web` with `universal_bertlv_mobile`.

### Kotlin / JVM (Maven Central)

```kotlin
// build.gradle.kts
implementation("io.github.rafaelrabeloit:universal-bertlv:0.0.10")
```

GitHub Packages is also available for snapshot builds — see `lib/universal-bertlv/build.gradle.kts`.

## Usage

### Dart / Flutter

```dart
import 'package:universal_bertlv/universal_bertlv.dart';

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
