(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'universal-bitfield'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'universal-bitfield'.");
    }
    globalThis['universal-bitfield'] = factory(typeof globalThis['universal-bitfield'] === 'undefined' ? {} : globalThis['universal-bitfield'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.m3;
  var Unit_instance = kotlin_kotlin.$_$.o;
  var toString = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var protoOf = kotlin_kotlin.$_$.e2;
  var initMetadataForObject = kotlin_kotlin.$_$.v1;
  var initMetadataForClass = kotlin_kotlin.$_$.s1;
  var VOID = kotlin_kotlin.$_$.b;
  var numberRangeToNumber = kotlin_kotlin.$_$.z1;
  var checkIndexOverflow = kotlin_kotlin.$_$.s;
  var toList = kotlin_kotlin.$_$.f1;
  var booleanArray = kotlin_kotlin.$_$.j1;
  var joinToString = kotlin_kotlin.$_$.y;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var toMap = kotlin_kotlin.$_$.g1;
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
    var bitValue = extractBit($this, byteValue, field.qa_1);
    var isSet = bitValue === 1;
    if (isSet) {
      var tmp0_safe_receiver = field.ua_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
    } else {
      var tmp1_safe_receiver = field.va_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver();
    }
    var tmp;
    if (isSet) {
      tmp = field.sa_1;
    } else {
      var tmp2_elvis_lhs = field.ta_1;
      tmp = tmp2_elvis_lhs == null ? field.sa_1 : tmp2_elvis_lhs;
    }
    var label = tmp;
    return new ParsedEntry(byteIndex, field, bitValue, label);
  }
  function parseMultiBitEnum($this, byteIndex, byteValue, field) {
    var rawBits = extractBits($this, byteValue, field.wa_1);
    var enumValue = field.ya_1.s1(rawBits);
    var tmp1_safe_receiver = enumValue == null ? null : enumValue.ab_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver();
    var tmp3_elvis_lhs = enumValue == null ? null : enumValue.za_1;
    var label = tmp3_elvis_lhs == null ? 'Unknown (' + rawBits + ')' : tmp3_elvis_lhs;
    return new ParsedEntry(byteIndex, field, rawBits, label);
  }
  function parseRfu($this, byteIndex, byteValue, field) {
    var rawBits = extractBits($this, byteValue, field.bb_1);
    return new ParsedEntry(byteIndex, field, rawBits, 'RFU');
  }
  function extractBit($this, byteValue, bit) {
    var shift = 7 - bit | 0;
    return byteValue >> shift & 1;
  }
  function extractBits($this, byteValue, bits) {
    var width = (bits.n7_1 - bits.m7_1 | 0) + 1 | 0;
    var shift = 7 - bits.n7_1 | 0;
    var mask = (1 << width) - 1 | 0;
    return byteValue >> shift & mask;
  }
  function BitFieldParser() {
  }
  protoOf(BitFieldParser).cb = function (schema, data) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(data.length === schema.eb_1)) {
      // Inline function 'io.github.rafaelrabeloit.bitfield.BitFieldParser.parse.<anonymous>' call
      var message = 'Expected ' + schema.eb_1 + ' bytes but got ' + data.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    var _iterator__ex2g4s = schema.fb_1.p();
    while (_iterator__ex2g4s.q()) {
      var byteDef = _iterator__ex2g4s.r();
      var byteValue = data[byteDef.gb_1 - 1 | 0] & 255;
      var _iterator__ex2g4s_0 = byteDef.ib_1.p();
      while (_iterator__ex2g4s_0.q()) {
        var field = _iterator__ex2g4s_0.r();
        var entry = parseField(this, byteDef.gb_1, byteValue, field);
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
    this.db_1 = name;
    this.eb_1 = expectedBytes;
    this.fb_1 = bytes;
  }
  protoOf(BitFieldSchema).jb = function (data) {
    return BitFieldParser_instance.cb(this, data);
  };
  function ByteSchema(index, label, fields) {
    this.gb_1 = index;
    this.hb_1 = label;
    this.ib_1 = fields;
  }
  function FieldDefinition() {
  }
  protoOf(FieldDefinition).mb = function () {
    return this.lb().m7_1;
  };
  protoOf(FieldDefinition).nb = function () {
    return this.lb().n7_1;
  };
  function RfuField(bits) {
    FieldDefinition.call(this);
    this.bb_1 = bits;
  }
  protoOf(RfuField).lb = function () {
    return this.bb_1;
  };
  protoOf(RfuField).kb = function () {
    return 'RFU';
  };
  function SingleBitFlag(bit, name, setMeaning, unsetMeaning, onSet, onUnset) {
    onSet = onSet === VOID ? null : onSet;
    onUnset = onUnset === VOID ? null : onUnset;
    FieldDefinition.call(this);
    this.qa_1 = bit;
    this.ra_1 = name;
    this.sa_1 = setMeaning;
    this.ta_1 = unsetMeaning;
    this.ua_1 = onSet;
    this.va_1 = onUnset;
  }
  protoOf(SingleBitFlag).kb = function () {
    return this.ra_1;
  };
  protoOf(SingleBitFlag).lb = function () {
    return numberRangeToNumber(this.qa_1, this.qa_1);
  };
  function MultiBitEnum(bits, name, values) {
    FieldDefinition.call(this);
    this.wa_1 = bits;
    this.xa_1 = name;
    this.ya_1 = values;
  }
  protoOf(MultiBitEnum).lb = function () {
    return this.wa_1;
  };
  protoOf(MultiBitEnum).kb = function () {
    return this.xa_1;
  };
  function EnumValue(label, onMatch) {
    onMatch = onMatch === VOID ? null : onMatch;
    this.za_1 = label;
    this.ab_1 = onMatch;
  }
  function ParseResult(schema, rawBytes, entries) {
    this.ob_1 = schema;
    this.pb_1 = rawBytes;
    this.qb_1 = entries;
  }
  function ParsedEntry(byteIndex, field, rawBits, resolvedLabel) {
    this.rb_1 = byteIndex;
    this.sb_1 = field;
    this.tb_1 = rawBits;
    this.ub_1 = resolvedLabel;
  }
  function bitfield(name, bytes, block) {
    var builder = new BitFieldSchemaBuilder(name, bytes);
    block(builder);
    return builder.yb();
  }
  function BitFieldSchemaBuilder(name, expectedBytes) {
    this.vb_1 = name;
    this.wb_1 = expectedBytes;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.xb_1 = ArrayList_init_$Create$();
  }
  protoOf(BitFieldSchemaBuilder).zb = function (index, label, block) {
    var builder = new ByteSchemaBuilder(index, label);
    block(builder);
    this.xb_1.k(builder.yb());
  };
  protoOf(BitFieldSchemaBuilder).yb = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.xb_1.s() === this.wb_1)) {
      // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.BitFieldSchemaBuilder.build.<anonymous>' call
      var message = "Schema '" + this.vb_1 + "' declares " + this.wb_1 + ' byte(s) but ' + this.xb_1.s() + ' byte definition(s) were provided';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.xb_1.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.BitFieldSchemaBuilder.build.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(item.gb_1 === (i + 1 | 0))) {
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.BitFieldSchemaBuilder.build.<anonymous>.<anonymous>' call
        var message_0 = "Schema '" + this.vb_1 + "': byte at position " + (i + 1 | 0) + ' has index ' + item.gb_1 + ', expected ' + (i + 1 | 0);
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    return new BitFieldSchema(this.vb_1, this.wb_1, toList(this.xb_1));
  };
  function ByteSchemaBuilder(index, label) {
    this.ac_1 = index;
    this.bc_1 = label;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.cc_1 = ArrayList_init_$Create$();
  }
  protoOf(ByteSchemaBuilder).dc = function (bit, name) {
    var builder = new SingleBitBuilder(bit, name);
    this.cc_1.k(builder.yb());
  };
  protoOf(ByteSchemaBuilder).kc = function (bit, name, block) {
    var builder = new SingleBitBuilder(bit, name);
    block(builder);
    this.cc_1.k(builder.yb());
  };
  protoOf(ByteSchemaBuilder).lc = function (bits, name, block) {
    var builder = new MultiBitEnumBuilder(bits, name);
    block(builder);
    this.cc_1.k(builder.yb());
  };
  protoOf(ByteSchemaBuilder).pc = function (bit) {
    this.cc_1.k(new RfuField(numberRangeToNumber(bit, bit)));
  };
  protoOf(ByteSchemaBuilder).qc = function (bits) {
    this.cc_1.k(new RfuField(bits));
  };
  protoOf(ByteSchemaBuilder).yb = function () {
    var _iterator__ex2g4s = this.cc_1.p();
    while (_iterator__ex2g4s.q()) {
      var field = _iterator__ex2g4s.r();
      // Inline function 'kotlin.require' call
      var tmp;
      var containsArg = field.mb();
      if (0 <= containsArg ? containsArg <= 7 : false) {
        var containsArg_0 = field.nb();
        tmp = 0 <= containsArg_0 ? containsArg_0 <= 7 : false;
      } else {
        tmp = false;
      }
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp) {
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.ByteSchemaBuilder.build.<anonymous>' call
        var message = 'Byte ' + this.ac_1 + " ('" + this.bc_1 + "'): field '" + field.kb() + "' has bits " + field.lb().toString() + ' outside valid range 0..7';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var coveredBits = booleanArray(8);
    var _iterator__ex2g4s_0 = this.cc_1.p();
    while (_iterator__ex2g4s_0.q()) {
      var field_0 = _iterator__ex2g4s_0.r();
      var progression = field_0.lb();
      var inductionVariable = progression.m7_1;
      var last = progression.n7_1;
      if (inductionVariable <= last)
        do {
          var bit = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!coveredBits[bit]) {
            // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.ByteSchemaBuilder.build.<anonymous>' call
            var message_0 = 'Byte ' + this.ac_1 + " ('" + this.bc_1 + "'): bit " + bit + " is covered by multiple fields (conflict with '" + field_0.kb() + "')";
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
    var inductionVariable_0 = this_0.m7_1;
    var last_0 = this_0.n7_1;
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
      var message_1 = 'Byte ' + this.ac_1 + " ('" + this.bc_1 + "'): bits " + joinToString(uncovered, ', ') + ' are not covered by any field';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return new ByteSchema(this.ac_1, this.bc_1, toList(this.cc_1));
  };
  function MultiBitEnumBuilder(bits, name) {
    this.mc_1 = bits;
    this.nc_1 = name;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.oc_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MultiBitEnumBuilder).rc = function (pattern, label) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.oc_1;
    var value = new EnumValue(label);
    this_0.o3(pattern, value);
  };
  protoOf(MultiBitEnumBuilder).yb = function () {
    var bitCount = (this.mc_1.n7_1 - this.mc_1.m7_1 | 0) + 1 | 0;
    var maxValue = (1 << bitCount) - 1 | 0;
    var _iterator__ex2g4s = this.oc_1.t1().p();
    while (_iterator__ex2g4s.q()) {
      var pattern = _iterator__ex2g4s.r();
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(0 <= pattern ? pattern <= maxValue : false)) {
        // Inline function 'io.github.rafaelrabeloit.bitfield.dsl.MultiBitEnumBuilder.build.<anonymous>' call
        var message = "Enum '" + this.nc_1 + "': value " + pattern + ' is out of range for ' + bitCount + '-bit field (valid: 0..' + maxValue + ')';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return new MultiBitEnum(this.mc_1, this.nc_1, toMap(this.oc_1));
  };
  function SingleBitBuilder(bit, name) {
    this.ec_1 = bit;
    this.fc_1 = name;
    this.gc_1 = this.fc_1;
    this.hc_1 = null;
    this.ic_1 = null;
    this.jc_1 = null;
  }
  protoOf(SingleBitBuilder).sc = function (meaning) {
    this.gc_1 = meaning;
  };
  protoOf(SingleBitBuilder).tc = function (meaning) {
    this.hc_1 = meaning;
  };
  protoOf(SingleBitBuilder).yb = function () {
    return new SingleBitFlag(this.ec_1, this.fc_1, this.gc_1, this.hc_1, this.ic_1, this.jc_1);
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

//# sourceMappingURL=universal-bitfield.js.map
