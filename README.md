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
  bertlv_emv: ^0.0.1
```

The correct platform package (`bertlv_emv_web` or `bertlv_emv_mobile`) is selected automatically.

### Kotlin / JVM (Maven)

```kotlin
// settings.gradle.kts — add the repository
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

// build.gradle.kts
implementation("io.github.rafaelrabeloit:bertlv-emv:0.1.0")
```

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

```kotlin
import io.github.rafaelrabeloit.bertlv.BerTlvParser

val tlv = BerTlvParser.parse("6F1A840E315041592E5359532E4444463031A5088801025F2D02656E")
tlv.forEach { println("${it.tag.hex}: ${it.tag.name} = ${it.hexValue}") }
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
