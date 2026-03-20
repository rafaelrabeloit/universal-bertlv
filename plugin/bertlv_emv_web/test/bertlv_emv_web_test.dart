import 'package:flutter_test/flutter_test.dart';
import 'package:bertlv_emv/bertlv_emv.dart';

void main() {
  group('BertlvEmvWeb Models', () {
    // Note: JS interop tests require web platform, so we only test models here

    test('TlvResult.fromJson should parse valid JSON', () {
      final json = {
        'tag': '9F26',
        'tagName': 'Application Cryptogram',
        'description': 'Cryptogram returned by the ICC',
        'length': 8,
        'value': 'C2C12B098F3B29DA',
        'isConstructed': false,
        'explanation': 'Transaction approved'
      };

      final result = TlvResult.fromJson(json);

      expect(result.tagHex, equals('9F26'));
      expect(result.tagName, equals('Application Cryptogram'));
      expect(result.description, equals('Cryptogram returned by the ICC'));
      expect(result.length, equals(8));
      expect(result.valueHex, equals('C2C12B098F3B29DA'));
      expect(result.isConstructed, isFalse);
      expect(result.explanation, equals('Transaction approved'));
    });

    test('TlvResult.fromJson should handle null explanation', () {
      final json = {
        'tag': '9F27',
        'tagName': 'Cryptogram Information Data',
        'description': 'Indicates the type of cryptogram',
        'length': 1,
        'value': '80',
        'isConstructed': false,
        'explanation': '',
      };

      final result = TlvResult.fromJson(json);
      expect(result.explanation, isNull);
    });

    test('TlvResult.fromJson should handle missing optional fields', () {
      final json = {
        'tag': '9F35',
        'length': 1,
        'value': '22',
      };

      final result = TlvResult.fromJson(json);
      expect(result.tagHex, equals('9F35'));
      expect(result.tagName, isNull);
      expect(result.description, isNull);
      expect(result.length, equals(1));
      expect(result.valueHex, equals('22'));
      expect(result.isConstructed, isFalse);
      expect(result.explanation, isNull);
    });
  });
}