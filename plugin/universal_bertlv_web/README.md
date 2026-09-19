# Universal BERTLV — Web Plugin

Web implementation of the universal_bertlv plugin using `dart:js_interop` to call the Kotlin/JS module compiled from the same commonMain source code as the mobile plugin.

## Features

- **Same API surface** as the mobile plugin for easy migration
- **Pure Dart models** with clean JSON serialization
- **Zero external dependencies** beyond Flutter and the Kotlin/JS module
- **Synchronous API** - no async overhead, direct JS function calls
- **Full EMV specification support** - 83+ tag definitions, bitfield parsers, value explainers

## Usage

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  universal_bertlv_web:
    git:
      url: https://github.com/rafaelrabeloit/universal-bertlv.git
      ref: v0.0.10
      path: plugin/universal_bertlv_web
```

### Basic usage

```dart
import 'package:universal_bertlv_web/universal_bertlv_web.dart';

final emv = BertlvEmvWeb();

// Parse TLV data
final results = emv.parseTlvList('9F2608C2C12B098F3B29DA9F270180');
for (final result in results) {
  print('Tag: ${result.tagHex}');
  print('Name: ${result.tagName}');
  print('Value: ${result.valueHex}');
  print('Explanation: ${result.explanation}');
}

// Parse single TLV
final result = emv.parseTlv('9F270180');
print(result.tagName); // "Cryptogram Information Data"

// Explain a specific tag
final explanation = emv.explainTag('9F27', '80');
print(explanation?['explanation']); // Detailed bitfield breakdown
```

## Web Setup

The plugin requires the Kotlin/JS module to be loaded before the Flutter app starts. The plugin includes the necessary JavaScript files as assets.

### HTML Setup

Make sure your `web/index.html` loads the EMV modules before Flutter:

```html
<!-- Load Universal BERTLV JavaScript modules BEFORE Flutter -->
<script src="assets/packages/universal_bertlv_web/web/assets/js/kotlin-kotlin-stdlib.js"></script>
<script src="assets/packages/universal_bertlv_web/web/assets/js/kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js"></script>
<script src="assets/packages/universal_bertlv_web/web/assets/js/kotlinx-serialization-kotlinx-serialization-core.js"></script>
<script src="assets/packages/universal_bertlv_web/web/assets/js/Kotlin-DateTime-library-kotlinx-datetime.js"></script>
<script src="assets/packages/universal_bertlv_web/web/assets/js/universal-bitfield.js"></script>
<script src="assets/packages/universal_bertlv_web/web/assets/js/universal-bertlv-universal-bertlv.js"></script>

<!-- Then load Flutter -->
<script src="main.dart.js" type="application/javascript"></script>
```

## API Reference

### Classes

#### `BertlvEmvWeb`

Main class for parsing and explaining EMV data.

**Properties:**
- `String version` - Get the native library version

**Methods:**
- `List<TlvResult> parseTlvList(String hex)` - Parse hex string into TLV list
- `TlvResult parseTlv(String hex)` - Parse single TLV from hex string  
- `Map<String, dynamic>? explainTag(String tagHex, String valueHex)` - Explain tag value

#### `TlvResult`

Represents a parsed TLV element.

**Properties:**
- `String tagHex` - Tag as hex string (e.g., "9F26")
- `String? tagName` - Human-readable tag name
- `String? description` - Tag description from EMV spec
- `int length` - Length in bytes
- `String valueHex` - Value as hex string
- `bool isConstructed` - Whether this is a constructed tag
- `List<TlvResult>? children` - Nested TLV elements (if constructed)
- `String? explanation` - Human-readable value explanation

## Example

See the `example/` directory for a complete Flutter web app demonstrating the plugin usage.

## Development

This plugin is part of the Universal BERTLV project. The Kotlin/JS module is built from the same commonMain source as the mobile plugin, ensuring API consistency across platforms.

### Building the JS Module

```bash
cd lib
./gradlew :universal-bertlv:jsBrowserProductionLibraryDistribution
```

The generated JS files are bundled with the plugin as web assets.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
