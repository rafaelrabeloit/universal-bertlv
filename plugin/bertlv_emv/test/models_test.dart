import 'package:flutter_test/flutter_test.dart';
import 'package:bertlv_emv/bertlv_emv.dart';

void main() {
  group('TlvResult.fromJson', () {
    test('parses minimal TLV with required fields', () {
      final json = {
        'tag': '9F26',
        'length': 8,
        'value': 'C2C12B098F3B29DA',
      };

      final result = TlvResult.fromJson(json);

      expect(result.tagHex, '9F26');
      expect(result.length, 8);
      expect(result.valueHex, 'C2C12B098F3B29DA');
      expect(result.tagName, isNull);
      expect(result.description, isNull);
      expect(result.isConstructed, false);
      expect(result.children, isNull);
      expect(result.explanation, isNull);
    });

    test('parses TLV with all optional fields', () {
      final json = {
        'tag': '9F27',
        'tagName': 'Cryptogram Information Data',
        'description': 'Indicates the type of cryptogram',
        'length': 1,
        'value': '80',
        'isConstructed': false,
        'explanation': 'ARQC (Authorisation Request Cryptogram)',
      };

      final result = TlvResult.fromJson(json);

      expect(result.tagHex, '9F27');
      expect(result.tagName, 'Cryptogram Information Data');
      expect(result.description, 'Indicates the type of cryptogram');
      expect(result.length, 1);
      expect(result.valueHex, '80');
      expect(result.isConstructed, false);
      expect(result.explanation,
          'ARQC (Authorisation Request Cryptogram)');
    });

    test('parses multi-line bitfield explanation', () {
      final json = {
        'tag': '82',
        'tagName': 'Application Interchange Profile',
        'length': 2,
        'value': '1C00',
        'explanation':
            'Byte 1\n  Bit 8: 0\n  Bit 7: 0\n  Bit 6: 0\nByte 2',
      };

      final result = TlvResult.fromJson(json);

      expect(result.explanation, contains('Byte 1'));
      expect(result.explanation, contains('Bit 8: 0'));
    });

    test('treats empty explanation string as null', () {
      final json = {
        'tag': '5A',
        'length': 8,
        'value': '4761340000000019',
        'explanation': '',
      };

      final result = TlvResult.fromJson(json);

      expect(result.explanation, isNull);
    });

    test('parses constructed tag with children', () {
      final json = {
        'tag': '70',
        'tagName': 'EMV Proprietary Template',
        'length': 5,
        'value': '9F270180',
        'isConstructed': true,
        'children': [
          {
            'tag': '9F27',
            'tagName': 'Cryptogram Information Data',
            'length': 1,
            'value': '80',
            'explanation': 'ARQC',
          },
        ],
      };

      final result = TlvResult.fromJson(json);

      expect(result.isConstructed, true);
      expect(result.children, isNotNull);
      expect(result.children!.length, 1);
      expect(result.children!.first.tagHex, '9F27');
      expect(result.children!.first.explanation, 'ARQC');
    });

    test('handles nested constructed tags', () {
      final json = {
        'tag': '6F',
        'length': 10,
        'value': '',
        'isConstructed': true,
        'children': [
          {
            'tag': '70',
            'length': 5,
            'value': '',
            'isConstructed': true,
            'children': [
              {
                'tag': '9F27',
                'length': 1,
                'value': '80',
              },
            ],
          },
        ],
      };

      final result = TlvResult.fromJson(json);

      expect(result.children!.first.children!.first.tagHex, '9F27');
    });

    test('toString returns readable format', () {
      final result = TlvResult(
        tagHex: '9F26',
        tagName: 'Application Cryptogram',
        length: 8,
        valueHex: 'C2C12B098F3B29DA',
      );

      expect(result.toString(), contains('9F26'));
      expect(result.toString(), contains('Application Cryptogram'));
    });

    test('isConstructed defaults to false when missing', () {
      final json = {
        'tag': '5A',
        'length': 8,
        'value': '4761340000000019',
      };

      final result = TlvResult.fromJson(json);

      expect(result.isConstructed, false);
    });
  });
}
