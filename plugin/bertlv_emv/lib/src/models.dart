/// Dart model classes for TLV parsing results.
///
/// These are pure Dart classes that mirror the JSON output from the
/// native/JS API, providing a clean Dart API.

/// Represents a parsed TLV (Tag-Length-Value) element.
///
/// Created by [BertlvEmv.parseTlv] or [BertlvEmv.parseTlvList].
///
/// Example:
/// ```dart
/// final emv = BertlvEmv();
/// final result = emv.parseTlv('9F270180');
/// print(result.tagName);    // "Cryptogram Information Data"
/// print(result.explanation); // "ARQC (Authorisation Request Cryptogram)"
/// ```
class TlvResult {
  /// The tag as a hex string (e.g., "9F26").
  final String tagHex;

  /// Human-readable tag name (e.g., "Application Cryptogram").
  final String? tagName;

  /// Tag description from the EMV specification.
  final String? description;

  /// Length of the value in bytes.
  final int length;

  /// Raw value as hex string.
  final String valueHex;

  /// Whether this is a constructed (container) tag.
  final bool isConstructed;

  /// Nested TLV elements if this is a constructed tag.
  final List<TlvResult>? children;

  /// Human-readable explanation of the value, if an explainer exists.
  ///
  /// For bitfield tags (e.g., TVR, AIP), this contains a multi-line
  /// formatted string with byte/bit breakdowns.
  /// For lookup tags (e.g., Transaction Type), this is a single-line
  /// description.
  /// Returns null or empty string if no explainer is registered.
  final String? explanation;

  const TlvResult({
    required this.tagHex,
    this.tagName,
    this.description,
    required this.length,
    required this.valueHex,
    this.isConstructed = false,
    this.children,
    this.explanation,
  });

  /// Creates a [TlvResult] from the JSON map returned by the C-API.
  factory TlvResult.fromJson(Map<String, dynamic> json) {
    final explanationRaw = json['explanation'] as String?;
    return TlvResult(
      tagHex: json['tag'] as String,
      tagName: json['tagName'] as String?,
      description: json['description'] as String?,
      length: json['length'] as int,
      valueHex: json['value'] as String,
      isConstructed: json['isConstructed'] as bool? ?? false,
      children: json['children'] != null
          ? (json['children'] as List)
              .map((e) => TlvResult.fromJson(e as Map<String, dynamic>))
              .toList()
          : null,
      explanation: (explanationRaw != null && explanationRaw.isNotEmpty)
          ? explanationRaw
          : null,
    );
  }

  @override
  String toString() =>
      'TlvResult(tag=$tagHex, name=$tagName, length=$length, value=$valueHex)';
}
