@JS()
library emv_js;

import 'dart:js_interop';

/// JS interop bindings for the EMV Tools Kotlin/JS module.
///
/// These correspond to the @JsExport functions in JsApi.kt:
/// - emvParseTlv(hex)
/// - emvExplainTag(tagHex, valueHex)
/// - emvVersion()

@JS('io.github.rafaelrabeloit.bertlv.ffi')
external JSObject get _emvModule;

@JS('io.github.rafaelrabeloit.bertlv.ffi.emvParseTlv')
external String _emvParseTlv(String hex);

@JS('io.github.rafaelrabeloit.bertlv.ffi.emvExplainTag')
external String _emvExplainTag(String tagHex, String valueHex);

@JS('io.github.rafaelrabeloit.bertlv.ffi.emvVersion')
external String _emvVersion();

/// Wrapper class for the EMV JS functions to provide better error handling.
class EmvJsInterop {
  /// Parse TLV hex string and return JSON result.
  static String parseTlv(String hex) {
    try {
      return _emvParseTlv(hex);
    } catch (e) {
      return '{"error":"JS interop error: $e"}';
    }
  }

  /// Explain a tag and return JSON result.
  static String explainTag(String tagHex, String valueHex) {
    try {
      return _emvExplainTag(tagHex, valueHex);
    } catch (e) {
      return '{"error":"JS interop error: $e"}';
    }
  }

  /// Get the version string.
  static String version() {
    try {
      return _emvVersion();
    } catch (e) {
      return 'error';
    }
  }
}