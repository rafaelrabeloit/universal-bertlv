import Flutter
import UIKit

/// Minimal plugin registration — no method channels needed.
/// Dart accesses the Kotlin/Native library directly via dart:ffi.
public class BertlvEmvPlugin: NSObject, FlutterPlugin {
  public static func register(with registrar: FlutterPluginRegistrar) {
    // No-op: dart:ffi loads symbols from the statically linked native library.
  }
}
