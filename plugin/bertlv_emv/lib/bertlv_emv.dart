/// Flutter plugin for bertlv-emv — EMV BER-TLV parser and explainer.
///
/// This is the app-facing package. It exposes [BertlvEmv] which
/// delegates to platform-specific implementations:
/// - Android/iOS: bertlv_emv_mobile (dart:ffi → Kotlin/Native)
/// - Web: bertlv_emv_web (dart:js_interop → Kotlin/JS)
library bertlv_emv;

export 'src/bertlv_emv_platform.dart';
export 'src/bertlv_emv.dart';
export 'src/models.dart';
