package com.example.bertlv_emv

import io.flutter.embedding.engine.plugins.FlutterPlugin

/// Minimal plugin registration for FFI-based access.
///
/// This plugin only registers itself so the Android runtime loads
/// the Kotlin/Native .so library. Dart code accesses the library
/// directly via dart:ffi, bypassing MethodChannels entirely.
class BertlvEmvPlugin : FlutterPlugin {
    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        // No method channel needed — Dart calls native code directly via FFI
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        // Nothing to clean up
    }
}
