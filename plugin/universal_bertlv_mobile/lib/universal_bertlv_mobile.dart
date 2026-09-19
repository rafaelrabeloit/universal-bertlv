/// Mobile (Android + iOS) implementation of the universal_bertlv plugin.
///
/// Uses dart:ffi to call the Kotlin/Native shared library directly,
/// bypassing Flutter method channels for synchronous, zero-overhead calls.
library universal_bertlv_mobile;

export 'src/universal_bertlv_mobile.dart';
