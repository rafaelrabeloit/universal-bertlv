import 'dart:convert';
import 'dart:ffi';
import 'dart:io';

import 'package:ffi/ffi.dart';

import 'package:bertlv_emv/bertlv_emv.dart';

/// Loads the native bertlv_emv shared library.
DynamicLibrary _loadLibrary() {
  if (Platform.isAndroid) {
    return DynamicLibrary.open('libbertlv_emv.so');
  } else if (Platform.isIOS) {
    return DynamicLibrary.process();
  } else {
    throw UnsupportedError(
      'Platform ${Platform.operatingSystem} is not supported. '
      'Use bertlv_emv_web for web targets.',
    );
  }
}

// Native function typedefs
typedef _EmvParseTlvC = Pointer<Utf8> Function(Pointer<Utf8>);
typedef _EmvParseTlvDart = Pointer<Utf8> Function(Pointer<Utf8>);

typedef _EmvExplainTagC = Pointer<Utf8> Function(
  Pointer<Utf8>,
  Pointer<Utf8>,
);
typedef _EmvExplainTagDart = Pointer<Utf8> Function(
  Pointer<Utf8>,
  Pointer<Utf8>,
);

typedef _EmvVersionC = Pointer<Utf8> Function();
typedef _EmvVersionDart = Pointer<Utf8> Function();

typedef _EmvFreeC = Void Function(Pointer<Utf8>);
typedef _EmvFreeDart = void Function(Pointer<Utf8>);

/// Mobile (Android + iOS) implementation of [BertlvEmvPlatform].
///
/// Uses dart:ffi to call the Kotlin/Native bertlv-emv library directly.
/// All calls are **synchronous** — no async overhead, no method channels.
class BertlvEmvMobile extends BertlvEmvPlatform {
  late final DynamicLibrary _lib;
  late final _EmvParseTlvDart _parseTlv;
  late final _EmvExplainTagDart _explainTag;
  late final _EmvVersionDart _version;
  late final _EmvFreeDart _free;

  BertlvEmvMobile() {
    _lib = _loadLibrary();
    _parseTlv = _lib.lookupFunction<_EmvParseTlvC, _EmvParseTlvDart>(
      'emv_parse_tlv',
    );
    _explainTag =
        _lib.lookupFunction<_EmvExplainTagC, _EmvExplainTagDart>(
      'emv_explain_tag',
    );
    _version = _lib.lookupFunction<_EmvVersionC, _EmvVersionDart>(
      'emv_version',
    );
    _free = _lib.lookupFunction<_EmvFreeC, _EmvFreeDart>('emv_free');
  }

  /// Registers this class as the platform implementation.
  static void registerWith() {
    BertlvEmvPlatform.instance = BertlvEmvMobile();
  }

  @override
  String get version {
    final ptr = _version();
    final result = ptr.toDartString();
    _free(ptr);
    return result;
  }

  @override
  List<TlvResult> parseTlvList(String hex) {
    final hexPtr = hex.toNativeUtf8();
    try {
      final resultPtr = _parseTlv(hexPtr);
      final json = resultPtr.toDartString();
      _free(resultPtr);

      final decoded = jsonDecode(json);
      if (decoded is Map && decoded.containsKey('error')) {
        throw FormatException(decoded['error'] as String);
      }

      return (decoded as List)
          .map((e) => TlvResult.fromJson(e as Map<String, dynamic>))
          .toList();
    } finally {
      calloc.free(hexPtr);
    }
  }

  @override
  Map<String, dynamic>? explainTag(String tagHex, String valueHex) {
    final tagPtr = tagHex.toNativeUtf8();
    final valuePtr = valueHex.toNativeUtf8();
    try {
      final resultPtr = _explainTag(tagPtr, valuePtr);
      final json = resultPtr.toDartString();
      _free(resultPtr);

      final decoded = jsonDecode(json) as Map<String, dynamic>;
      if (decoded.containsKey('error')) {
        return null;
      }
      return decoded;
    } finally {
      calloc.free(tagPtr);
      calloc.free(valuePtr);
    }
  }
}
