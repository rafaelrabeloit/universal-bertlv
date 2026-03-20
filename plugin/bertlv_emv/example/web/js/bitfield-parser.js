(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'bitfield-parser'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'bitfield-parser'.");
    }
    globalThis['bitfield-parser'] = factory(typeof globalThis['bitfield-parser'] === 'undefined' ? {} : globalThis['bitfield-parser'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.t2;
  var Unit_instance = kotlin_kotlin.$_$.m;
  var toString = kotlin_kotlin.$_$.y1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var protoOf = kotlin_kotlin.$_$.v1;
  var initMetadataForObject = kotlin_kotlin.$_$.p1;
  var initMetadataForClass = kotlin_kotlin.$_$.m1;
  var VOID = kotlin_kotlin.$_$.b;
  var numberRangeToNumber = kotlin_kotlin.$_$.t1;
  var checkIndexOverflow = kotlin_kotlin.$_$.n;
  var toList = kotlin_kotlin.$_$.a1;
  var booleanArray = kotlin_kotlin.$_$.e1;
  var joinToString = kotlin_kotlin.$_$.t;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var toMap = kotlin_kotlin.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(BitFieldParser, 'BitFieldParser');
  initMetadataForClass(BitFieldSchema, 'BitFieldSchema');
  initMetadataForClass(ByteSchema, 'ByteSchema');
  initMetadataForClass(FieldDefinition, 'FieldDefinition');
  initMetadataForClass(RfuField, 'RfuField', VOID, FieldDefinition);
  initMetadataForClass(SingleBitFlag, 'SingleBitFlag', VOID, FieldDefinition);
  initMetadataForClass(MultiBitEnum, 'MultiBitEnum', VOID, FieldDefinition);
  initMetadataForClass(EnumValue, 'EnumValue');
  initMetadataForClass(ParseResult, 'ParseResult');
  initMetadataForClass(ParsedEntry, 'ParsedEntry');
  initMetadataForClass(BitFieldSchemaBuilder, 'BitFieldSchemaBuilder');
  initMetadataForClass(ByteSchemaBuilder, 'ByteSchemaBuilder');
  initMetadataForClass(MultiBitEnumBuilder, 'MultiBitEnumBuilder');
  initMetadataForClass(SingleBitBuilder, 'SingleBitBuilder');
  //endregion
  function parseField($this, byteIndex, byteValue, field) {
    var tmp;
    if (field instanceof SingleBitFlag) {
      tmp = parseSingleBit($this, byteIndex, byteValue, field);
    } else {
      if (field instanceof MultiBitEnum) {
        tmp = parseMultiBitEnum($this, byteIndex, byteValue, field);
      } else {
        if (field instanceof RfuField) {
          tmp = parseRfu($this, byteIndex, byteValue, field);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function parseSingleBit($this, byteIndex, byteValue, field) {
    var bitValue = extractBit($this, byteValue, field.j8_1);
    var isSet = bitValue === 1;
    if (isSet) {
      var tmp0_safe_receiver = field.n8_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
    } else {
      var tmp1_safe_receiver = field.o8_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver();
    }
    var tmp;
    if (isSet) {
      tmp = field.l8_1;
    } else {
      var tmp2_elvis_lhs = field.m8_1;
      tmp = tmp2_elvis_lhs == null ? field.l8_1 : tmp2_elvis_lhs;
    }
    var label = tmp;
    return new ParsedEntry(byteIndex, field, bitValue, label);
  }
  function parseMultiBitEnum($this, byteIndex, byteValue, field) {
    var rawBits = extractBits($this, byteValue, field.p8_1);
    var enumValue = field.r8_1.f1(rawBits);
    var tmp1_safe_receiver = enumValue == null ? null : enumValue.t8_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver();
    var tmp3_elvis_lhs = enumValue == null ? null : enumValue.s8_1;
    var label = tmp3_elvis_lhs == null ? 'Unknown (' + rawBits + ')' : tmp3_elvis_lhs;
    return new ParsedEntry(byteIndex, field, rawBits, label);
  }
  function parseRfu($this, byteIndex, byteValue, field) {
    var rawBits = extractBits($this, byteValue, field.u8_1);
    return new ParsedEntry(byteIndex, field, rawBits, 'RFU');
  }
  function extractBit($this, byteValue, bit) {
    var shift = 7 - bit | 0;
    return byteValue >> shift & 1;
  }
  function extractBits($this, byteValue, bits) {
    var width = (bits.x6_1 - bits.w6_1 | 0) + 1 | 0;
    var shift = 7 - bits.x6_1 | 0;
    var mask = (1 << width) - 1 | 0;
    return byteValue >> shift & mask;
  }
  function BitFieldParser() {
  }
  protoOf(BitFieldParser).v8 = function (schema, data) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(data.length === schema.x8_1)) {
      // Inline function 'io.github.rafaelrabeloit.bitfield.BitFieldParser.parse.<anonymous>' call
      var message = 'Expected ' + schema.x8_1 + ' bytes but got ' + data.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    var _iterator__ex2g4s = schema.y8_1.m();
    while (_iterator__ex2g4s.n()) {
      var byteDef = _iterator__ex2g4s.o();
      var byteValue = data[byteDef.z8_1 - 1 | 0] & 255;
      var _iterator__ex2g4s_0 = byteDef.b9_1.m();
      while (_iterator__ex2g4s_0.n()) {
        var field = _iterator__ex2g4s_0.o();
        var entry = parseField(this, byteDef.z8_1, byteValue, field);
        entries.k(entry);
      }
    }
    return new ParseResult(schema, data, entries);
  };
  var BitFieldParser_instance;
  function BitFieldParser_getInstance() {
    return BitFieldParser_instance;
  }
  function BitFieldSchema(name, expectedBytes, bytes) {
    this.w8_1 = name;
    this.x8_1 = expectedBytes;
    this.y8_1 = bytes;
  }
  protoOf(BitFieldSchema).c9 = function (data) {
    return BitFieldParser_instance.v8(this, data);
  };
  function ByteSchema(index, label, fields) {
    this.z8_1 = index;
    this.a9_1 = label;
    this.b9_1 = fields;
  }
  function FieldDefinition() {
  }
  protoOf(FieldDefinition).f9 = function () {
    return this.e9().w6_1;
  };
  protoOf(FieldDefinition).g9 = function () {
    return this.e9().x6_1;
  };
  function RfuField(bits) {
    FieldDefinition.call(this);
    this.u8_1 = bits;
  }
  protoOf(RfuField).e9 = function () {
    return this.u8_1;
  };
  protoOf(RfuField).d9 = function () {
    return 'RFU';
  };
  function SingleBitFlag(bit, name, setMeaning, unsetMeaning, onSet, onUnset) {
    onSet = onSet === VOID ? null : onSet;
    onUnset = onUnset === VOID ? null : onUnset;
    FieldDefinition.call(this);
    this.j8_1 = bit;
    this.k8_1 = name;
    this.l8_1 = setMeaning;
    this.m8_1 = unsetMeaning;
    this.n8_1 = onSet;
    this.o8_1 = onUnset;
  }
  protoOf(SingleBitFlag).d9 = function () {
    return this.k8_1;
  };
  protoOf(SingleBitFlag).e9 = function () {
    return numberRangeToNumber(this.j8_1, this.j8_1);
  };
  function MultiBitEnum(bits, name, values) {
    FieldDefinition.call(this);
    this.p8_1 = bits;
    this.q8_1 = name;
    this.r8_1 = values;
  }
  protoOf(MultiBitEnum).e9 = function () {
    return this.p8_1;
  };
  protoOf(MultiBitEnum).d9 = function () {
    return this.q8_1;
  };
  function EnumValue(label, onMatch) {
    onMatch = onMatch === VOID ? null : onMatch;
    this.s8_1 = label;
    this.t8_1 = onMatch;
  }
  function ParseResult(schema, rawBytes, entries) {
    this.h9_1 = schema;
    this.i9_1 = rawBytes;
    this.j9_1 = entries;
  }
  function ParsedEntry(byteIndex, field, rawBits, resolvedLabel) {
    this.k9_1 = byteIndex;
    this.l9_1 = field;
    this.m9_1 = rawBits;
    this.n9_1 = resolvedLabel;
  }
  function bitfield(name, bytes, block) {
    var builder = new BitFieldSchemaBuilder(name, bytes);
    block(builder);
    return builder.r9();
  }
  function BitFieldSchemaBuilder(name, expectedBytes) {
    this.o9_1 = name;
    this.p9_1 = expectedBytes;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q9_1 = ArrayList_init_$Create$();
  }
  protoOf(BitFieldSchemaBuilder).s9 = function (index, label, block) {
    var builder = new ByteSchemaBuilder(index, label);
    block(builder);
    this.q9_1.k(builder.r9());
  };
  protoOf(BitFieldSchemaBuilder).r9 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.q9_1.p() === this.p9_1)) {
      // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.BitFieldSchemaBuilder.build.<anonymous>' call
      var message = "Schema '" + this.o9_1 + "' declares " + this.p9_1 + ' byte(s) but ' + this.q9_1.p() + ' byte definition(s) were provided';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.q9_1.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.BitFieldSchemaBuilder.build.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(item.z8_1 === (i + 1 | 0))) {
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.BitFieldSchemaBuilder.build.<anonymous>.<anonymous>' call
        var message_0 = "Schema '" + this.o9_1 + "': byte at position " + (i + 1 | 0) + ' has index ' + item.z8_1 + ', expected ' + (i + 1 | 0);
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    return new BitFieldSchema(this.o9_1, this.p9_1, toList(this.q9_1));
  };
  function ByteSchemaBuilder(index, label) {
    this.t9_1 = index;
    this.u9_1 = label;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v9_1 = ArrayList_init_$Create$();
  }
  protoOf(ByteSchemaBuilder).w9 = function (bit, name) {
    var builder = new SingleBitBuilder(bit, name);
    this.v9_1.k(builder.r9());
  };
  protoOf(ByteSchemaBuilder).da = function (bit, name, block) {
    var builder = new SingleBitBuilder(bit, name);
    block(builder);
    this.v9_1.k(builder.r9());
  };
  protoOf(ByteSchemaBuilder).ea = function (bits, name, block) {
    var builder = new MultiBitEnumBuilder(bits, name);
    block(builder);
    this.v9_1.k(builder.r9());
  };
  protoOf(ByteSchemaBuilder).ia = function (bit) {
    this.v9_1.k(new RfuField(numberRangeToNumber(bit, bit)));
  };
  protoOf(ByteSchemaBuilder).ja = function (bits) {
    this.v9_1.k(new RfuField(bits));
  };
  protoOf(ByteSchemaBuilder).r9 = function () {
    var _iterator__ex2g4s = this.v9_1.m();
    while (_iterator__ex2g4s.n()) {
      var field = _iterator__ex2g4s.o();
      // Inline function 'kotlin.require' call
      var tmp;
      var containsArg = field.f9();
      if (0 <= containsArg ? containsArg <= 7 : false) {
        var containsArg_0 = field.g9();
        tmp = 0 <= containsArg_0 ? containsArg_0 <= 7 : false;
      } else {
        tmp = false;
      }
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp) {
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.ByteSchemaBuilder.build.<anonymous>' call
        var message = 'Byte ' + this.t9_1 + " ('" + this.u9_1 + "'): field '" + field.d9() + "' has bits " + field.e9().toString() + ' outside valid range 0..7';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var coveredBits = booleanArray(8);
    var _iterator__ex2g4s_0 = this.v9_1.m();
    while (_iterator__ex2g4s_0.n()) {
      var field_0 = _iterator__ex2g4s_0.o();
      var progression = field_0.e9();
      var inductionVariable = progression.w6_1;
      var last = progression.x6_1;
      if (inductionVariable <= last)
        do {
          var bit = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!coveredBits[bit]) {
            // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.ByteSchemaBuilder.build.<anonymous>' call
            var message_0 = 'Byte ' + this.t9_1 + " ('" + this.u9_1 + "'): bit " + bit + " is covered by multiple fields (conflict with '" + field_0.d9() + "')";
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          coveredBits[bit] = true;
        }
         while (!(bit === last));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = numberRangeToNumber(0, 7);
    var destination = ArrayList_init_$Create$();
    var inductionVariable_0 = this_0.w6_1;
    var last_0 = this_0.x6_1;
    if (inductionVariable_0 <= last_0)
      do {
        var element = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.ByteSchemaBuilder.build.<anonymous>' call
        if (!coveredBits[element]) {
          destination.k(element);
        }
      }
       while (!(element === last_0));
    var uncovered = destination;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!uncovered.h()) {
      // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.ByteSchemaBuilder.build.<anonymous>' call
      var message_1 = 'Byte ' + this.t9_1 + " ('" + this.u9_1 + "'): bits " + joinToString(uncovered, ', ') + ' are not covered by any field';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return new ByteSchema(this.t9_1, this.u9_1, toList(this.v9_1));
  };
  function MultiBitEnumBuilder(bits, name) {
    this.fa_1 = bits;
    this.ga_1 = name;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ha_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MultiBitEnumBuilder).ka = function (pattern, label) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.ha_1;
    var value = new EnumValue(label);
    this_0.y2(pattern, value);
  };
  protoOf(MultiBitEnumBuilder).r9 = function () {
    var bitCount = (this.fa_1.x6_1 - this.fa_1.w6_1 | 0) + 1 | 0;
    var maxValue = (1 << bitCount) - 1 | 0;
    var _iterator__ex2g4s = this.ha_1.g1().m();
    while (_iterator__ex2g4s.n()) {
      var pattern = _iterator__ex2g4s.o();
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(0 <= pattern ? pattern <= maxValue : false)) {
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.MultiBitEnumBuilder.build.<anonymous>' call
        var message = "Enum '" + this.ga_1 + "': value " + pattern + ' is out of range for ' + bitCount + '-bit field (valid: 0..' + maxValue + ')';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return new MultiBitEnum(this.fa_1, this.ga_1, toMap(this.ha_1));
  };
  function SingleBitBuilder(bit, name) {
    this.x9_1 = bit;
    this.y9_1 = name;
    this.z9_1 = this.y9_1;
    this.aa_1 = null;
    this.ba_1 = null;
    this.ca_1 = null;
  }
  protoOf(SingleBitBuilder).la = function (meaning) {
    this.z9_1 = meaning;
  };
  protoOf(SingleBitBuilder).ma = function (meaning) {
    this.aa_1 = meaning;
  };
  protoOf(SingleBitBuilder).r9 = function () {
    return new SingleBitFlag(this.x9_1, this.y9_1, this.z9_1, this.aa_1, this.ba_1, this.ca_1);
  };
  //region block: init
  BitFieldParser_instance = new BitFieldParser();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = bitfield;
  _.$_$.b = RfuField;
  //endregion
  return _;
}));

//# sourceMappingURL=bitfield-parser.js.map
