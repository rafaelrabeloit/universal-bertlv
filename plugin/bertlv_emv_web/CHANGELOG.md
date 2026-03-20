# Changelog

## [0.0.1] - 2026-02-28

### Added
- Initial release of the bertlv_emv_web plugin
- Web implementation using dart:js_interop to call Kotlin/JS module
- Same API surface as the mobile plugin (bertlv_emv)
- Support for parsing EMV TLV data in Flutter web applications
- Bundled Kotlin/JS module with all dependencies
- Example Flutter web app demonstrating TLV parsing
- Complete test suite for model classes
- Comprehensive documentation

### Features
- `BertlvEmvWeb` class with synchronous API
- `TlvResult` model class with JSON serialization
- EMV tag parsing and explanation
- Bitfield value explainers
- Error handling for invalid hex input
- Version information access

### Technical Details
- Built on Kotlin Multiplatform commonMain source
- Uses dart:js_interop for JavaScript interoperability  
- Includes kotlin-kotlin-stdlib.js, bitfield-parser.js, and emv-tools-bertlv-emv.js
- Requires JavaScript modules to be loaded before Flutter app initialization