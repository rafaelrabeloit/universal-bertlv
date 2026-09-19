import 'package:plugin_platform_interface/plugin_platform_interface.dart';

import 'models.dart';

/// The interface that platform-specific implementations must implement.
///
/// Platform implementations should extend this class rather than implement it,
/// as new methods may be added in the future.
abstract class BertlvEmvPlatform extends PlatformInterface {
  BertlvEmvPlatform() : super(token: _token);

  static final Object _token = Object();

  static BertlvEmvPlatform? _instance;

  /// The current platform-specific implementation.
  ///
  /// Set by platform packages during registration (e.g.,
  /// [BertlvEmvMobile] or [BertlvEmvWeb]).
  static BertlvEmvPlatform get instance {
    if (_instance == null) {
      throw StateError(
        'BertlvEmvPlatform has not been initialized. '
        'Ensure a platform implementation is registered.',
      );
    }
    return _instance!;
  }

  /// Set the platform-specific implementation.
  static set instance(BertlvEmvPlatform instance) {
    PlatformInterface.verify(instance, _token);
    _instance = instance;
  }

  /// Get the native library version.
  String get version;

  /// Parse a hex TLV string into a list of [TlvResult].
  ///
  /// Throws [FormatException] if the hex string is invalid.
  List<TlvResult> parseTlvList(String hex);

  /// Parse a single TLV element from hex string.
  TlvResult parseTlv(String hex) {
    final results = parseTlvList(hex);
    if (results.isEmpty) {
      throw FormatException('No TLV found in: $hex');
    }
    return results.first;
  }

  /// Explain a specific tag's value.
  ///
  /// Returns null if no explainer exists for this tag.
  Map<String, dynamic>? explainTag(String tagHex, String valueHex);
}
