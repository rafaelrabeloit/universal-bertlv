/// Mobile (Android + iOS) implementation of the bertlv_emv plugin.
///
/// Uses dart:ffi to call the Kotlin/Native shared library directly,
/// bypassing Flutter method channels for synchronous, zero-overhead calls.
library bertlv_emv_mobile;

export 'src/bertlv_emv_mobile.dart';
