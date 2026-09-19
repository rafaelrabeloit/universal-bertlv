/// Flutter plugin for universal-bertlv — EMV BER-TLV parser and explainer.
///
/// This is the app-facing package. It exposes [BertlvEmv] which
/// delegates to platform-specific implementations:
/// - Android/iOS: universal_bertlv_mobile (dart:ffi → Kotlin/Native)
/// - Web: universal_bertlv_web (dart:js_interop → Kotlin/JS)
library universal_bertlv;

export 'src/universal_bertlv_platform.dart';
export 'src/universal_bertlv.dart';
export 'src/models.dart';
