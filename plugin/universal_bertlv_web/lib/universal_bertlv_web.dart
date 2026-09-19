/// Web implementation of the universal_bertlv plugin using dart:js_interop.
///
/// This package provides the same API surface as the mobile plugin but uses
/// JavaScript interop to call the Kotlin/JS module compiled from the same
/// commonMain source code.
library universal_bertlv_web;

import 'src/universal_bertlv_web_impl.dart';

export 'src/universal_bertlv_web_impl.dart' show BertlvEmvWebImpl;

/// Convenience alias used by Flutter's plugin registration.
typedef BertlvEmvWeb = BertlvEmvWebImpl;
