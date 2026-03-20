import 'bertlv_emv_platform.dart';
import 'models.dart';

/// Main API for parsing and explaining EMV BER-TLV data.
///
/// Delegates to the platform-specific implementation registered via
/// [BertlvEmvPlatform.instance].
///
/// ## Usage
/// ```dart
/// final emv = BertlvEmv();
/// final results = emv.parseTlvList('9F2608C2C12B098F3B29DA');
/// print(results.first.tagName); // "Application Cryptogram"
/// ```
class BertlvEmv {
  BertlvEmv();

  BertlvEmvPlatform get _platform => BertlvEmvPlatform.instance;

  /// Get the native library version.
  String get version => _platform.version;

  /// Parse a hex TLV string into a list of [TlvResult].
  ///
  /// Throws [FormatException] if the hex string is invalid.
  List<TlvResult> parseTlvList(String hex) => _platform.parseTlvList(hex);

  /// Parse a single TLV element from hex string.
  TlvResult parseTlv(String hex) => _platform.parseTlv(hex);

  /// Explain a specific tag's value.
  ///
  /// Returns null if no explainer exists for this tag.
  Map<String, dynamic>? explainTag(String tagHex, String valueHex) =>
      _platform.explainTag(tagHex, valueHex);
}
