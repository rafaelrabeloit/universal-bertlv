# Kotlin/Native + dart:ffi — Sharing KMP Business Logic with Flutter

> **A novel approach to Flutter plugin architecture using Kotlin Multiplatform's native compilation to bypass method channels entirely.**

## The Problem

Flutter plugins traditionally use **platform channels** (MethodChannel) to communicate between Dart and native code. This works, but has significant drawbacks:

- **Async overhead** — Every call crosses an async barrier, even for synchronous operations
- **Serialization cost** — `StandardMessageCodec` serializes/deserializes every argument and return value
- **Platform-specific bridges** — You write the bridge twice: Kotlin for Android, Swift for iOS
- **No code sharing** — The native implementation is duplicated per platform

For a library like **bertlv-emv** (EMV TLV parsing + bitfield explanation), where all operations are **synchronous data transformations** with no platform API dependencies, method channels are pure overhead.

## The Solution: Kotlin/Native → .so → dart:ffi

**Kotlin Multiplatform** (KMP) can compile the same `commonMain` Kotlin code to:
- **JVM bytecode** — for Android (traditional), backend, CLI
- **Native binaries** — for iOS, Android NDK, Linux, macOS, Windows
- **JavaScript** — for web browsers and Node.js

By using Kotlin/Native's **shared library** output with **C-compatible headers**, we can call Kotlin code directly from Dart via `dart:ffi` — bypassing method channels entirely.

### Architecture

```
┌──────────────────────────────────────────────────┐
│              commonMain (Kotlin)                  │
│     TLV Parser • EMV Tags • Bitfield Explainers  │
│          Zero platform dependencies               │
└─────────┬──────────┬──────────┬──────────────────┘
          │          │          │
     ┌────▼───┐ ┌───▼────┐ ┌──▼───┐
     │  JVM   │ │ Native │ │  JS  │
     │        │ │        │ │      │
     │console │ │ .so    │ │ .js  │
     │  -emv  │ │ .dylib │ │module│
     └────────┘ │ .framework│      │
                └───┬────┘ └──┬───┘
                    │         │
              ┌─────▼─────┐ ┌▼──────────┐
              │  dart:ffi  │ │dart:js_   │
              │  (mobile)  │ │interop    │
              │            │ │(web)      │
              │synchronous!│ │           │
              └─────┬──────┘ └─────┬─────┘
                    │              │
              ┌─────▼──────────────▼─────┐
              │     Flutter App          │
              │  Android • iOS • Web     │
              └──────────────────────────┘
```

### The C-API Layer

Kotlin/Native can export functions with C-compatible calling conventions using `@CName`:

```kotlin
// src/nativeMain/kotlin/.../ffi/CApi.kt
@OptIn(ExperimentalForeignApi::class, ExperimentalNativeApi::class)
@CName("emv_parse_tlv")
fun emvParseTlv(hex: CPointer<ByteVar>): CPointer<ByteVar> {
    val input = hex.toKString()
    val bytes = input.hexToByteArray()
    val tlvList = TLVList.fromTlvListBuffer(bytes, listOf(EmvSpecification))
    return tlvListToJson(tlvList).allocCString()
}

@CName("emv_free")
fun emvFree(ptr: CPointer<ByteVar>?) {
    ptr?.let { nativeHeap.free(it) }
}
```

When Kotlin/Native builds the shared library, it:
1. Compiles `commonMain` + `nativeMain` to native machine code
2. Generates a `.so` (Android) / `.dylib` (macOS) / `.framework` (iOS)
3. **Auto-generates a C header** (`libbertlv_emv_api.h`) with all `@CName` exports

### Dart FFI Integration

The Dart side uses `dart:ffi` to load the shared library and call functions directly:

```dart
class BertlvEmv {
  late final DynamicLibrary _lib;
  late final Pointer<Utf8> Function(Pointer<Utf8>) _parseTlv;
  late final void Function(Pointer<Utf8>) _free;

  BertlvEmv() {
    _lib = Platform.isAndroid
        ? DynamicLibrary.open('libbertlv_emv.so')
        : DynamicLibrary.process(); // iOS: statically linked

    _parseTlv = _lib.lookupFunction<
        Pointer<Utf8> Function(Pointer<Utf8>),  // C signature
        Pointer<Utf8> Function(Pointer<Utf8>)   // Dart signature
    >('emv_parse_tlv');

    _free = _lib.lookupFunction<
        Void Function(Pointer<Utf8>),
        void Function(Pointer<Utf8>)
    >('emv_free');
  }

  List<TlvResult> parseTlvList(String hex) {
    final hexPtr = hex.toNativeUtf8();
    try {
      final resultPtr = _parseTlv(hexPtr);
      final json = resultPtr.toDartString();
      _free(resultPtr);  // Kotlin allocated, we must free
      return (jsonDecode(json) as List)
          .map((e) => TlvResult.fromJson(e))
          .toList();
    } finally {
      calloc.free(hexPtr);
    }
  }
}
```

**Key properties:**
- **Synchronous** — No async, no futures, no method channels
- **Zero serialization overhead** — Just pointer passing + UTF-8 string conversion
- **Memory-safe** — Clear ownership: Kotlin allocates → Dart frees via `emv_free()`
- **Cross-platform** — Same Dart code works on Android and iOS

### Automated Binding Generation with ffigen

Instead of writing Dart FFI bindings manually, `package:ffigen` reads the Kotlin/Native-generated C header and produces type-safe Dart bindings automatically:

```yaml
# ffigen.yaml
name: BertlvEmvBindings
output: lib/src/ffi_bindings.g.dart
headers:
  entry-points:
    - '../../lib/bertlv-emv/build/bin/androidNativeArm64/releaseShared/libbertlv_emv_api.h'
functions:
  include:
    - 'emv_.*'
```

### Build Pipeline

```bash
# 1. Build Kotlin/Native shared library
cd lib && ./gradlew linkReleaseSharedAndroidNativeArm64

# 2. Copy .so to Flutter plugin
cp build/bin/androidNativeArm64/releaseShared/libbertlv_emv.so \
   ../plugin/bertlv-emv/android/src/main/jniLibs/arm64-v8a/

# 3. Generate Dart FFI bindings from C header
cd ../plugin/bertlv-emv && dart run ffigen --config ffigen.yaml

# 4. Build Flutter app
flutter build apk
```

### Web Target: Kotlin/JS + dart:js_interop

For Flutter web, the same `commonMain` code compiles to JavaScript:

```kotlin
// src/jsMain/kotlin/.../ffi/JsApi.kt
@JsExport
fun emvParseTlv(hex: String): String {
    val bytes = hex.hexToByteArray()
    val tlvList = TLVList.fromTlvListBuffer(bytes, listOf(EmvSpecification))
    return tlvListToJson(tlvList)
}
```

Dart web plugin uses `dart:js_interop`:
```dart
@JS()
external String emvParseTlv(String hex);
```

This creates a **federated plugin** pattern:
- `bertlv_emv_android` → `dart:ffi` → Kotlin/Native `.so`
- `bertlv_emv_ios` → `dart:ffi` → Kotlin/Native `.framework`
- `bertlv_emv_web` → `dart:js_interop` → Kotlin/JS module

## Comparison with Traditional Approaches

| Aspect | Method Channels | dart:ffi + Kotlin/Native |
|--------|----------------|--------------------------|
| **Call overhead** | Async + serialize/deserialize | Pointer pass, near-zero |
| **Synchronous calls** | ❌ Always async | ✅ Fully synchronous |
| **Code duplication** | Kotlin + Swift bridges | One `commonMain` |
| **Web support** | ❌ Not applicable | ✅ Via Kotlin/JS |
| **Android NDK** | Not needed | Used for compilation |
| **Binary size** | JVM JAR on classpath | ~6MB Kotlin/Native runtime |
| **Build complexity** | Standard Gradle | Multi-target KMP + ffigen |
| **Maturity** | Stable, well-documented | Emerging, fewer examples |

## When to Use This Approach

✅ **Good fit when:**
- Business logic is in `commonMain` (no platform API dependencies)
- Operations are synchronous data transformations
- You want code sharing across Android, iOS, AND web
- Performance of method channels is a concern
- You're already using Kotlin Multiplatform

❌ **Not ideal when:**
- You need Android SDK APIs (camera, sensors, etc.)
- Logic is trivially simple (method channel overhead doesn't matter)
- You don't have a KMP codebase to share
- Build chain complexity is a dealbreaker

## Dependencies Gotcha

When adding Kotlin/Native targets, **all `commonMain` dependencies must publish native variants** for those targets. This tripped us up:

- `kotlinx-datetime:0.5.0` → lacked `androidNativeArm64` → bumped to `0.6.2` ✅
- `bitfield-parser:0.1.0` → published JVM+iOS only → added Android Native targets and republished ✅

Always check that your KMP dependencies support the native targets you need.

## Status

- [x] Kotlin/Native builds for `androidNativeArm64` (verified: 5.9MB `.so` + 436KB C header)
- [x] C-API layer with `@CName` exports (parse, explain, version, free)
- [x] Dart FFI API skeleton with synchronous calls
- [x] ffigen configuration ready
- [x] Kotlin/JS target added to KMP build (`js(IR)`)
- [ ] Copy `.so` to plugin jniLibs + generate Dart bindings
- [ ] Build all Android architectures (arm64, x64, arm32)
- [ ] iOS `.framework` + `dart:ffi` integration
- [ ] Kotlin/JS module + `dart:js_interop` integration
- [ ] Performance benchmarks vs method channels

---

*This approach was developed for [EMV Tools](https://github.com/rafaelrabeloit/emv-tools) as a proof-of-concept for sharing KMP business logic with Flutter via native interop. As of February 2026, this appears to be a novel approach — we haven't found prior art combining Kotlin/Native `@CName` exports with `dart:ffi` for Flutter plugins.*
