import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:bertlv_emv/bertlv_emv.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  late BertlvEmv emv;

  setUp(() {
    emv = BertlvEmv();
  });

  group('emv_version', () {
    testWidgets('returns a non-empty version string', (tester) async {
      final version = emv.version;

      expect(version, isNotEmpty);
    });
  });

  group('parseTlv — single TLV', () {
    testWidgets('parses TVR tag 95', (tester) async {
      final result = emv.parseTlv('95050400000000');

      expect(result.tagHex.toLowerCase(), '95');
      expect(result.tagName, isNotNull);
      expect(result.length, 5);
      expect(result.valueHex.toLowerCase(), '0400000000');
      expect(result.explanation, isNotNull);
      // C-API returns bitfield detail directly, check for content
      expect(result.explanation, contains('Byte'));
    });

    testWidgets('parses PAN tag 5A', (tester) async {
      // PAN: 4761340000000019 (8 bytes, no padding)
      final result = emv.parseTlv('5A084761340000000019');

      expect(result.tagHex.toLowerCase(), '5a');
      expect(result.length, 8);
      expect(result.valueHex, isNotEmpty);
    });

    testWidgets('parses CID tag 9F27', (tester) async {
      final result = emv.parseTlv('9F270180');

      expect(result.tagHex.toLowerCase(), '9f27');
      expect(result.tagName, isNotNull);
      expect(result.length, 1);
      expect(result.valueHex.toLowerCase(), '80');
      expect(result.explanation, isNotNull);
    });
  });

  group('parseTlvList — multiple TLVs', () {
    testWidgets('parses multiple tags', (tester) async {
      // TVR + AIP (concatenated, no spaces)
      final results = emv.parseTlvList(
        '9505000000000082021C00',
      );

      expect(results.length, 2);
      expect(results[0].tagHex.toLowerCase(), '95');
      expect(results[1].tagHex.toLowerCase(), '82');
    });

    testWidgets('parses three tags', (tester) async {
      // TVR + CID + AIP
      final results = emv.parseTlvList(
        '95050400000000' '9F270180' '82021C00',
      );

      expect(results.length, 3);
      expect(results[0].tagHex.toLowerCase(), '95');
      expect(results[1].tagHex.toLowerCase(), '9f27');
      expect(results[2].tagHex.toLowerCase(), '82');
    });
  });

  group('explainTag', () {
    testWidgets('explains a known tag value', (tester) async {
      final result = emv.explainTag('9F27', '80');

      expect(result, isNotNull);
      expect(result, isA<Map<String, dynamic>>());
    });

    testWidgets('returns null for unknown tag', (tester) async {
      final result = emv.explainTag('FFFF', '00');

      expect(result, isNull);
    });
  });

  group('error handling', () {
    testWidgets('throws FormatException for invalid hex', (tester) async {
      expect(
        () => emv.parseTlv('ZZZZ'),
        throwsA(isA<FormatException>()),
      );
    });

    testWidgets('throws FormatException for empty input', (tester) async {
      expect(
        () => emv.parseTlv(''),
        throwsA(isA<FormatException>()),
      );
    });
  });

  group('bitfield explanations', () {
    testWidgets('TVR explanation includes byte-level detail', (tester) async {
      final result = emv.parseTlv('95050400000000');

      expect(result.explanation, isNotNull);
      // TVR byte 1, bit 3 (value 04 = 0000 0100) sets "SDA Selected"
      expect(result.explanation, contains('SDA'));
    });

    testWidgets('AIP explanation includes bit details', (tester) async {
      final result = emv.parseTlv('82021C00');

      expect(result.explanation, isNotNull);
      expect(result.tagHex.toLowerCase(), '82');
    });
  });

  group('performance', () {
    testWidgets('100 sequential parse calls complete', (tester) async {
      final stopwatch = Stopwatch()..start();

      for (var i = 0; i < 100; i++) {
        emv.parseTlvList('9505040000000082021C00');
      }

      stopwatch.stop();

      debugPrint(
        'Performance: 100 sequential parseTlvList calls in '
        '${stopwatch.elapsedMilliseconds}ms',
      );

      // Sanity check: should complete in under 10 seconds
      expect(stopwatch.elapsedMilliseconds, lessThan(10000));
    });
  });
}
