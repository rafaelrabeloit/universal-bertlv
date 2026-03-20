/// Web implementation of the bertlv_emv plugin using dart:js_interop.
///
/// This package provides the same API surface as the mobile plugin but uses
/// JavaScript interop to call the Kotlin/JS module compiled from the same
/// commonMain source code.
library bertlv_emv_web;

import 'src/bertlv_emv_web_impl.dart';

export 'src/bertlv_emv_web_impl.dart' show BertlvEmvWebImpl;

/// Convenience alias used by Flutter's plugin registration.
typedef BertlvEmvWeb = BertlvEmvWebImpl;
