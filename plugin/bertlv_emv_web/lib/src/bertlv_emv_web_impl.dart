import 'dart:convert';

import 'package:bertlv_emv/bertlv_emv.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

import 'js_interop.dart';

/// Web implementation of [BertlvEmvPlatform] using dart:js_interop.
///
/// This calls the Kotlin/JS module functions via JavaScript interop,
/// providing the same API surface as the native mobile implementation.
class BertlvEmvWebImpl extends BertlvEmvPlatform {
  /// Registers this class as the web implementation of the plugin.
  static void registerWith(Registrar registrar) {
    BertlvEmvPlatform.instance = BertlvEmvWebImpl();
  }

  @override
  String get version => EmvJsInterop.version();

  @override
  List<TlvResult> parseTlvList(String hex) {
    final jsonResult = EmvJsInterop.parseTlv(hex);
    final decoded = jsonDecode(jsonResult);

    if (decoded is Map && decoded.containsKey('error')) {
      throw FormatException(decoded['error'] as String);
    }

    return (decoded as List)
        .map((e) => TlvResult.fromJson(e as Map<String, dynamic>))
        .toList();
  }

  @override
  Map<String, dynamic>? explainTag(String tagHex, String valueHex) {
    final jsonResult = EmvJsInterop.explainTag(tagHex, valueHex);
    final decoded = jsonDecode(jsonResult) as Map<String, dynamic>;

    if (decoded.containsKey('error')) {
      return null;
    }

    return decoded;
  }
}
