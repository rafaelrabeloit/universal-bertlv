(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './universal-bitfield.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./universal-bitfield.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'.");
    }
    if (typeof globalThis['universal-bitfield'] === 'undefined') {
      throw new Error("Error loading module 'io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'. Its dependency 'universal-bitfield' was not found. Please, check whether 'universal-bitfield' is loaded prior to 'io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'.");
    }
    globalThis['io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'] = factory(typeof globalThis['io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'] === 'undefined' ? {} : globalThis['io.github.rafaelrabeloit.universal-bertlv:bertlv-emv'], globalThis['kotlin-kotlin-stdlib'], globalThis['universal-bitfield']);
  }
}(function (_, kotlin_kotlin, kotlin_io_github_rafaelrabeloit_universal_bitfield) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.v1;
  var THROW_CCE = kotlin_kotlin.$_$.r2;
  var initMetadataForClass = kotlin_kotlin.$_$.m1;
  var Exception = kotlin_kotlin.$_$.p2;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h;
  var captureStack = kotlin_kotlin.$_$.f1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n1;
  var VOID = kotlin_kotlin.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var copyOfRange = kotlin_kotlin.$_$.p;
  var Unit_instance = kotlin_kotlin.$_$.m;
  var toByte = kotlin_kotlin.$_$.w1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.t2;
  var first = kotlin_kotlin.$_$.r;
  var Enum = kotlin_kotlin.$_$.o2;
  var enumEntries = kotlin_kotlin.$_$.d1;
  var getStringHashCode = kotlin_kotlin.$_$.k1;
  var toString = kotlin_kotlin.$_$.y1;
  var toString_0 = kotlin_kotlin.$_$.u2;
  var hashCode = kotlin_kotlin.$_$.l1;
  var equals = kotlin_kotlin.$_$.j1;
  var toHexString = kotlin_kotlin.$_$.j2;
  var isByteArray = kotlin_kotlin.$_$.q1;
  var checkIndexOverflow = kotlin_kotlin.$_$.n;
  var RfuField = kotlin_io_github_rafaelrabeloit_universal_bitfield.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var sorted = kotlin_kotlin.$_$.z;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.s2;
  var initMetadataForInterface = kotlin_kotlin.$_$.o1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f;
  var toString_1 = kotlin_kotlin.$_$.m2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i;
  var until = kotlin_kotlin.$_$.b2;
  var reversed = kotlin_kotlin.$_$.w;
  var emptyList = kotlin_kotlin.$_$.q;
  var toMutableList = kotlin_kotlin.$_$.c1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.p1;
  var joinToString = kotlin_kotlin.$_$.t;
  var repeat = kotlin_kotlin.$_$.g2;
  var listOf = kotlin_kotlin.$_$.v;
  var numberRangeToNumber = kotlin_kotlin.$_$.t1;
  var bitfield = kotlin_io_github_rafaelrabeloit_universal_bitfield.$_$.a;
  var chunked = kotlin_kotlin.$_$.c2;
  var toInt = kotlin_kotlin.$_$.k2;
  var Long = kotlin_kotlin.$_$.q2;
  var toLong = kotlin_kotlin.$_$.x1;
  var padStart = kotlin_kotlin.$_$.f2;
  var sliceArray = kotlin_kotlin.$_$.y;
  var joinToString_0 = kotlin_kotlin.$_$.s;
  var takeLast = kotlin_kotlin.$_$.i2;
  var charSequenceGet = kotlin_kotlin.$_$.g1;
  var toString_2 = kotlin_kotlin.$_$.l;
  var listOf_0 = kotlin_kotlin.$_$.u;
  var compareTo = kotlin_kotlin.$_$.i1;
  var ClosedRange = kotlin_kotlin.$_$.z1;
  var isInterface = kotlin_kotlin.$_$.s1;
  var contains = kotlin_kotlin.$_$.a2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k;
  var setOf = kotlin_kotlin.$_$.x;
  var numberToChar = kotlin_kotlin.$_$.u1;
  var toLong_0 = kotlin_kotlin.$_$.l2;
  var equals_0 = kotlin_kotlin.$_$.d2;
  var hexToByteArray = kotlin_kotlin.$_$.e2;
  var replace = kotlin_kotlin.$_$.h2;
  var isCharSequence = kotlin_kotlin.$_$.r1;
  var trim = kotlin_kotlin.$_$.n2;
  var primitiveArrayConcat = kotlin_kotlin.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.h1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConstructedValueParser, 'ConstructedValueParser');
  initMetadataForClass(TagNotExistException, 'TagNotExistException', TagNotExistException, Exception);
  initMetadataForCompanion(Companion);
  function get_size() {
    return this.vc().length;
  }
  initMetadataForInterface(Buffered, 'Buffered');
  initMetadataForClass(TLV, 'TLV', VOID, VOID, [Buffered]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(TLVList, 'TLVList', VOID, VOID, [Buffered]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Form, 'Form', VOID, Enum);
  initMetadataForClass(TLVLength, 'TLVLength', VOID, VOID, [Buffered]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Classification, 'Classification', VOID, Enum);
  initMetadataForClass(Construction, 'Construction', VOID, Enum);
  initMetadataForClass(Form_0, 'Form', VOID, Enum);
  initMetadataForClass(Context, 'Context', Context);
  initMetadataForClass(TLVTag, 'TLVTag', VOID, VOID, [Buffered]);
  initMetadataForClass(ValueHandler, 'ValueHandler');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(TLVValue, 'TLVValue', VOID, VOID, [Buffered]);
  initMetadataForClass(OctetStringValueParser, 'OctetStringValueParser', OctetStringValueParser);
  initMetadataForClass(BitFieldExplainer, 'BitFieldExplainer');
  initMetadataForClass(Explanation, 'Explanation', Explanation);
  initMetadataForClass(ExplainElement, 'ExplainElement');
  initMetadataForClass(Line, 'Line', VOID, ExplainElement);
  initMetadataForObject(LineSeparator, 'LineSeparator', VOID, ExplainElement);
  initMetadataForClass(TabGroup, 'TabGroup', VOID, ExplainElement);
  initMetadataForClass(Tab, 'Tab', VOID, ExplainElement);
  initMetadataForClass(Row, 'Row');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Table, 'Table', VOID, ExplainElement);
  initMetadataForObject(EmvSpecification, 'EmvSpecification');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(EmvTagDescription, 'EmvTagDescription', VOID, Enum);
  initMetadataForClass(Format, 'Format', VOID, Enum);
  initMetadataForClass(Source, 'Source', VOID, Enum);
  initMetadataForObject(AdditionalTerminalCapabilities, 'AdditionalTerminalCapabilities');
  initMetadataForClass(CurrencyCode, 'CurrencyCode');
  initMetadataForObject(ApplicationCurrencyCode, 'ApplicationCurrencyCode', VOID, CurrencyCode);
  initMetadataForObject(ApplicationInterchangeProfile, 'ApplicationInterchangeProfile');
  initMetadataForObject(ApplicationLifeCycleData, 'ApplicationLifeCycleData');
  initMetadataForObject(ApplicationPriorityIndicator, 'ApplicationPriorityIndicator');
  initMetadataForObject(ApplicationReferenceCurrency, 'ApplicationReferenceCurrency');
  initMetadataForObject(ApplicationUsageControl, 'ApplicationUsageControl');
  initMetadataForObject(AuthorisationResponseCode, 'AuthorisationResponseCode');
  initMetadataForObject(CVMResults, 'CVMResults');
  initMetadataForObject(CardTransactionQualifiers, 'CardTransactionQualifiers');
  initMetadataForObject(CryptogramInformationData, 'CryptogramInformationData');
  initMetadataForObject(CvmList, 'CvmList');
  initMetadataForObject(FormFactor, 'FormFactor');
  initMetadataForClass(ActionCode, 'ActionCode');
  initMetadataForObject(IssuerActionCodeDefault, 'IssuerActionCodeDefault', VOID, ActionCode);
  initMetadataForObject(IssuerActionCodeDenial, 'IssuerActionCodeDenial', VOID, ActionCode);
  initMetadataForObject(IssuerActionCodeOnline, 'IssuerActionCodeOnline', VOID, ActionCode);
  initMetadataForObject(IssuerApplicationData, 'IssuerApplicationData');
  initMetadataForClass(CountryCode, 'CountryCode');
  initMetadataForObject(IssuerCountryCode, 'IssuerCountryCode', VOID, CountryCode);
  initMetadataForObject(IssuerCountryCodeAlpha2, 'IssuerCountryCodeAlpha2');
  initMetadataForObject(IssuerCountryCodeAlpha3, 'IssuerCountryCodeAlpha3');
  initMetadataForObject(LanguagePreference, 'LanguagePreference');
  initMetadataForObject(MerchantCategoryCode, 'MerchantCategoryCode');
  initMetadataForObject(PosEntryMode, 'PosEntryMode');
  initMetadataForObject(ServiceCode, 'ServiceCode');
  initMetadataForObject(TVR, 'TVR', VOID, ActionCode);
  initMetadataForObject(TerminalCapabilities, 'TerminalCapabilities');
  initMetadataForObject(TerminalCountryCode, 'TerminalCountryCode', VOID, CountryCode);
  initMetadataForObject(TerminalTransactionQualifiers, 'TerminalTransactionQualifiers');
  initMetadataForObject(TerminalType, 'TerminalType');
  initMetadataForObject(TransactionCurrencyCode, 'TransactionCurrencyCode', VOID, CurrencyCode);
  initMetadataForObject(TransactionReferenceCurrencyCode, 'TransactionReferenceCurrencyCode', VOID, CurrencyCode);
  initMetadataForObject(TransactionStatusInformation, 'TransactionStatusInformation');
  initMetadataForObject(TransactionType, 'TransactionType');
  initMetadataForCompanion(Companion_6);
  initMetadataForCompanion(Companion_7);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(AlphanumericSpecialValueParser, 'AlphanumericSpecialValueParser', AlphanumericSpecialValueParser);
  initMetadataForClass(AlphanumericValueParser, 'AlphanumericValueParser', AlphanumericValueParser);
  initMetadataForClass(BinaryValueParser, 'BinaryValueParser', BinaryValueParser);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(NumericNumberValueParser, 'NumericNumberValueParser', NumericNumberValueParser);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(NumericValueParser, 'NumericValueParser', NumericValueParser);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(CountryCodeDescription, 'CountryCodeDescription', VOID, Enum);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(CurrencyCodeDescription, 'CurrencyCodeDescription', VOID, Enum);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(LanguageCodeDescription, 'LanguageCodeDescription', VOID, Enum);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(MerchantCategoryCodeDescription, 'MerchantCategoryCodeDescription', VOID, Enum);
  //endregion
  function ConstructedValueParser(specifications) {
    this.na_1 = specifications;
  }
  protoOf(ConstructedValueParser).oa = function (bytes) {
    return Companion_instance_0.pa(bytes, this.na_1);
  };
  protoOf(ConstructedValueParser).qa = function (value) {
    return toHexString_0(value.ra_1);
  };
  protoOf(ConstructedValueParser).ta = function (value) {
    return this.qa(value instanceof TLVList ? value : THROW_CCE());
  };
  function TagNotExistException() {
    Exception_init_$Init$(this);
    captureStack(this, TagNotExistException);
  }
  function contextualize(_this__u8e3s4, tlvTag) {
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.bertlv.contextualize.<anonymous>' call
        if (element.ua(tlvTag)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.va(tlvTag);
    return tmp1_elvis_lhs == null ? new Context() : tmp1_elvis_lhs;
  }
  function contextualize$ref($boundThis) {
    var l = function (p0) {
      return contextualize($boundThis, p0);
    };
    l.callableName = 'contextualize';
    return l;
  }
  function Companion() {
  }
  protoOf(Companion).wa = function (bytes, specifications) {
    var tmp = Companion_instance_2;
    var tag = tmp.sb(bytes, contextualize$ref(specifications));
    var length = Companion_instance_1.hc(bytes, tag);
    var tmp_0;
    if (tag.nc_1.equals(Construction_CONSTRUCTED_getInstance())) {
      tmp_0 = Companion_instance_3.jc(bytes, tag, length, new ValueHandler(new ConstructedValueParser(specifications)));
    } else {
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator = specifications.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'io.github.rafaelrabeloit.bertlv.Companion.fromTlvBuffer.<anonymous>' call
          if (element.ua(tag)) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var specification = tmp$ret$1;
      var tmp_1;
      if (specification == null) {
        tmp_1 = Companion_instance_3.jc(bytes, tag, length, new ValueHandler(new OctetStringValueParser()));
      } else {
        var handler = specification.ic(tag);
        tmp_1 = Companion_instance_3.jc(bytes, tag, length, handler);
      }
      tmp_0 = tmp_1;
    }
    var value = tmp_0;
    return new TLV(bytes, tag, length, value);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function TLV(bytes, tlvTag, tlvLength, tlvValue) {
    this.rc_1 = bytes;
    this.sc_1 = tlvTag;
    this.tc_1 = tlvLength;
    this.uc_1 = tlvValue;
  }
  protoOf(TLV).vc = function () {
    return this.rc_1;
  };
  protoOf(TLV).a = function () {
    return this.tc_1.yc_1;
  };
  protoOf(TLV).d1 = function () {
    return this.uc_1.d1();
  };
  function Companion_0() {
  }
  protoOf(Companion_0).pa = function (bytes, specifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var offset = 0;
    while (offset < bytes.length) {
      var tlv = Companion_instance.wa(copyOfRange(bytes, offset, bytes.length), specifications);
      result.k(tlv);
      offset = offset + ((tlv.sc_1.p() + tlv.tc_1.p() | 0) + tlv.uc_1.p() | 0) | 0;
    }
    return new TLVList(bytes, result);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function TLVList(bytes, tlvs) {
    this.ra_1 = bytes;
    this.sa_1 = tlvs;
  }
  protoOf(TLVList).vc = function () {
    return this.ra_1;
  };
  function createLengthBytes($this, length, form) {
    var tmp;
    switch (form.j1_1) {
      case 0:
        // Inline function 'kotlin.byteArrayOf' call

        tmp = new Int8Array([toByte(length)]);
        break;
      case 1:
        var byteCount = calculateByteCount($this, length);
        var result = new Int8Array(byteCount + 1 | 0);
        result[0] = toByte(128 | byteCount);
        var remaining = length;
        var inductionVariable = byteCount;
        if (1 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            result[i] = toByte(remaining & 255);
            remaining = remaining >> 8;
          }
           while (1 <= inductionVariable);
        tmp = result;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function determineFormFromLength($this, length) {
    return length <= 127 ? Form_SHORT_getInstance() : Form_LONG_getInstance();
  }
  function calculateByteCount($this, length) {
    var count = 0;
    var value = length;
    while (value > 0) {
      count = count + 1 | 0;
      value = value >> 8;
    }
    return count;
  }
  function extractNoTagBytes($this, bytes, tag) {
    return copyOfRange(bytes, tag.p(), bytes.length);
  }
  function determineForm($this, noTagBytes) {
    return matches(first(noTagBytes), 128) ? Form_LONG_getInstance() : Form_SHORT_getInstance();
  }
  function calculateLengthSize($this, form, noTagBytes) {
    var tmp;
    switch (form.j1_1) {
      case 0:
        tmp = 1;
        break;
      case 1:
        var subsequentBytes = first(noTagBytes) & 127;
        tmp = subsequentBytes + 1 | 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function extractLengthBytes($this, noTagBytes, lengthSize) {
    return copyOfRange(noTagBytes, 0, lengthSize);
  }
  function calculateLength($this, bytes, tag, form, lengthSize) {
    var tmp;
    switch (form.j1_1) {
      case 0:
        tmp = bytes[tag.p()] & 127;
        break;
      case 1:
        var result = 0;
        var inductionVariable = tag.p() + 1 | 0;
        var last = tag.p() + lengthSize | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            result = result << 8 | bytes[i] & 255;
          }
           while (inductionVariable < last);
        tmp = result;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var Form_SHORT_instance;
  var Form_LONG_instance;
  var Form_entriesInitialized;
  function Form_initEntries() {
    if (Form_entriesInitialized)
      return Unit_instance;
    Form_entriesInitialized = true;
    Form_SHORT_instance = new Form('SHORT', 0, 'Short Form', 'Length value fits in 7 bits (0-127)');
    Form_LONG_instance = new Form('LONG', 1, 'Long Form', 'Length value requires multiple bytes to represent');
  }
  function Companion_1() {
    this.tb_1 = 0;
    this.ub_1 = 0;
    this.vb_1 = 1;
    this.wb_1 = 1;
    this.xb_1 = 8;
    this.yb_1 = 0;
    this.zb_1 = 8;
    this.ac_1 = 0;
    this.bc_1 = 1;
    this.cc_1 = 3;
    this.dc_1 = 2;
    this.ec_1 = 1;
    this.fc_1 = 2;
    this.gc_1 = 1;
  }
  protoOf(Companion_1).hc = function (bytes, tag) {
    var noTagBytes = extractNoTagBytes(this, bytes, tag);
    var form = determineForm(this, noTagBytes);
    var lengthSize = calculateLengthSize(this, form, noTagBytes);
    var lengthBytes = extractLengthBytes(this, noTagBytes, lengthSize);
    var length = calculateLength(this, bytes, tag, form, lengthSize);
    return new TLVLength(lengthBytes, form, length);
  };
  protoOf(Companion_1).bd = function (length) {
    var form = determineFormFromLength(this, length);
    var bytes = createLengthBytes(this, length, form);
    return new TLVLength(bytes, form, length);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function Form(name, ordinal, info, description) {
    Enum.call(this, name, ordinal);
    this.ed_1 = info;
    this.fd_1 = description;
  }
  function Form_SHORT_getInstance() {
    Form_initEntries();
    return Form_SHORT_instance;
  }
  function Form_LONG_getInstance() {
    Form_initEntries();
    return Form_LONG_instance;
  }
  function TLVLength(bytes, form, length) {
    this.wc_1 = bytes;
    this.xc_1 = form;
    this.yc_1 = length;
  }
  protoOf(TLVLength).vc = function () {
    return this.wc_1;
  };
  function calculateTagLength($this, bytes, form) {
    var tagLength = 1;
    if (form.equals(Form_LONG_getInstance_0())) {
      tagLength = tagLength + 1 | 0;
      var inductionVariable = 1;
      var last = bytes.length;
      if (inductionVariable < last)
        $l$loop: do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var byte = bytes[n];
          if (matches(byte, 128)) {
            tagLength = tagLength + 1 | 0;
          } else {
            break $l$loop;
          }
        }
         while (inductionVariable < last);
    }
    return tagLength;
  }
  function determineClassification($this, tagHeader) {
    var classBits = bits(tagHeader, 7, 2);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = get_entries().m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.bertlv.components.Companion.determineClassification.<anonymous>' call
        if (classBits === element.id_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? Classification_PRIVATE_getInstance() : tmp0_elvis_lhs;
  }
  function determineConstruction($this, tagHeader) {
    var constructionBit = bits(tagHeader, 6, 1);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = get_entries_0().m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.bertlv.components.Companion.determineConstruction.<anonymous>' call
        if (constructionBit === element.nd_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? Construction_BOTH_getInstance() : tmp0_elvis_lhs;
  }
  function determineForm_0($this, tagHeader) {
    var tmp;
    if (matches(tagHeader, 31)) {
      tmp = Form_LONG_getInstance_0();
    } else {
      tmp = Form_SHORT_getInstance_0();
    }
    return tmp;
  }
  function determineType($this, bytes, tagHeader, tagLength) {
    var tmp;
    if (tagLength === 1) {
      tmp = bits(tagHeader, 1, 5);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = 0;
      var indexedObject = copyOfRange(bytes, 1, tagLength);
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.github.rafaelrabeloit.bertlv.components.Companion.determineType.<anonymous>' call
        accumulator = accumulator << 7 | bits(element, 1, 7);
      }
      tmp = accumulator;
    }
    return tmp;
  }
  function TLVTag$Companion$fromTlvBuffer$lambda(it) {
    return new Context();
  }
  var Classification_UNIVERSAL_instance;
  var Classification_APPLICATION_instance;
  var Classification_CONTEXT_SPECIFIC_instance;
  var Classification_PRIVATE_instance;
  function values() {
    return [Classification_UNIVERSAL_getInstance(), Classification_APPLICATION_getInstance(), Classification_CONTEXT_SPECIFIC_getInstance(), Classification_PRIVATE_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Classification_entriesInitialized;
  function Classification_initEntries() {
    if (Classification_entriesInitialized)
      return Unit_instance;
    Classification_entriesInitialized = true;
    Classification_UNIVERSAL_instance = new Classification('UNIVERSAL', 0, 0, 'Universal', 'The type is native to ASN.1');
    Classification_APPLICATION_instance = new Classification('APPLICATION', 1, 1, 'Application', 'The type is only valid for one specific application');
    Classification_CONTEXT_SPECIFIC_instance = new Classification('CONTEXT_SPECIFIC', 2, 2, 'Context-specific', 'Meaning of this type depends on the context (such as within a sequence, set or choice)');
    Classification_PRIVATE_instance = new Classification('PRIVATE', 3, 3, 'Private', 'Defined in private specifications');
  }
  var $ENTRIES;
  var Construction_BOTH_instance;
  var Construction_PRIMITIVE_instance;
  var Construction_CONSTRUCTED_instance;
  function values_0() {
    return [Construction_BOTH_getInstance(), Construction_PRIMITIVE_getInstance(), Construction_CONSTRUCTED_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Construction_entriesInitialized;
  function Construction_initEntries() {
    if (Construction_entriesInitialized)
      return Unit_instance;
    Construction_entriesInitialized = true;
    Construction_BOTH_instance = new Construction('BOTH', 0, -1, 'Both', 'The contents octets may be constructed or primitive');
    Construction_PRIMITIVE_instance = new Construction('PRIMITIVE', 1, 0, 'Primitive (P)', 'The contents octets directly encode the value');
    Construction_CONSTRUCTED_instance = new Construction('CONSTRUCTED', 2, 1, 'Constructed (C)', 'The contents octets contain 0, 1, or more encodings');
  }
  var $ENTRIES_0;
  var Form_SHORT_instance_0;
  var Form_LONG_instance_0;
  var Form_entriesInitialized_0;
  function Form_initEntries_0() {
    if (Form_entriesInitialized_0)
      return Unit_instance;
    Form_entriesInitialized_0 = true;
    Form_SHORT_instance_0 = new Form_0('SHORT', 0, 'Short Form', 'Identifier spans just one byte');
    Form_LONG_instance_0 = new Form_0('LONG', 1, 'Long Form', "Tag's 'type' is too large for the 5-bit tag field, it has to be encoded in further octets");
  }
  function Companion_2() {
    this.xa_1 = 0;
    this.ya_1 = 0;
    this.za_1 = 2;
    this.ab_1 = 2;
    this.bb_1 = 3;
    this.cb_1 = 3;
    this.db_1 = 8;
    this.eb_1 = 0;
    this.fb_1 = 1;
    this.gb_1 = 7;
    this.hb_1 = 1;
    this.ib_1 = 1;
    this.jb_1 = 8;
    this.kb_1 = 4;
    this.lb_1 = 3;
    this.mb_1 = 1;
    this.nb_1 = 1;
    this.ob_1 = 2;
    this.pb_1 = 3;
    this.qb_1 = 1;
    this.rb_1 = 2;
  }
  protoOf(Companion_2).sb = function (bytes, contextualize) {
    var tagHeader = first(bytes);
    var form = determineForm_0(this, tagHeader);
    var tagLength = calculateTagLength(this, bytes, form);
    var tagBytes = copyOfRange(bytes, 0, tagLength);
    var tag = toInt_0(tagBytes);
    var classification = determineClassification(this, tagHeader);
    var construction = determineConstruction(this, tagHeader);
    var type = determineType(this, bytes, tagHeader, tagLength);
    return new TLVTag(tagBytes, tag, classification, construction, form, type, contextualize);
  };
  protoOf(Companion_2).qd = function (bytes, contextualize, $super) {
    var tmp;
    if (contextualize === VOID) {
      tmp = TLVTag$Companion$fromTlvBuffer$lambda;
    } else {
      tmp = contextualize;
    }
    contextualize = tmp;
    return $super === VOID ? this.sb(bytes, contextualize) : $super.sb.call(this, bytes, contextualize);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function Classification(name, ordinal, value, info, description) {
    Enum.call(this, name, ordinal);
    this.id_1 = value;
    this.jd_1 = info;
    this.kd_1 = description;
  }
  function Construction(name, ordinal, value, info, description) {
    Enum.call(this, name, ordinal);
    this.nd_1 = value;
    this.od_1 = info;
    this.pd_1 = description;
  }
  function Form_0(name, ordinal, info, description) {
    Enum.call(this, name, ordinal);
    this.td_1 = info;
    this.ud_1 = description;
  }
  function Context(info, description) {
    info = info === VOID ? null : info;
    description = description === VOID ? 'Unknown tag' : description;
    this.vd_1 = info;
    this.wd_1 = description;
  }
  protoOf(Context).toString = function () {
    return 'Context(info=' + this.vd_1 + ', description=' + this.wd_1 + ')';
  };
  protoOf(Context).hashCode = function () {
    var result = this.vd_1 == null ? 0 : getStringHashCode(this.vd_1);
    result = imul(result, 31) + getStringHashCode(this.wd_1) | 0;
    return result;
  };
  protoOf(Context).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Context))
      return false;
    var tmp0_other_with_cast = other instanceof Context ? other : THROW_CCE();
    if (!(this.vd_1 == tmp0_other_with_cast.vd_1))
      return false;
    if (!(this.wd_1 === tmp0_other_with_cast.wd_1))
      return false;
    return true;
  };
  function TLVTag$_init_$lambda_l4a9hr(it) {
    return new Context();
  }
  function Classification_UNIVERSAL_getInstance() {
    Classification_initEntries();
    return Classification_UNIVERSAL_instance;
  }
  function Classification_APPLICATION_getInstance() {
    Classification_initEntries();
    return Classification_APPLICATION_instance;
  }
  function Classification_CONTEXT_SPECIFIC_getInstance() {
    Classification_initEntries();
    return Classification_CONTEXT_SPECIFIC_instance;
  }
  function Classification_PRIVATE_getInstance() {
    Classification_initEntries();
    return Classification_PRIVATE_instance;
  }
  function Construction_BOTH_getInstance() {
    Construction_initEntries();
    return Construction_BOTH_instance;
  }
  function Construction_PRIMITIVE_getInstance() {
    Construction_initEntries();
    return Construction_PRIMITIVE_instance;
  }
  function Construction_CONSTRUCTED_getInstance() {
    Construction_initEntries();
    return Construction_CONSTRUCTED_instance;
  }
  function Form_SHORT_getInstance_0() {
    Form_initEntries_0();
    return Form_SHORT_instance_0;
  }
  function Form_LONG_getInstance_0() {
    Form_initEntries_0();
    return Form_LONG_instance_0;
  }
  function TLVTag(bytes, tag, classification, construction, form, type, contextualize) {
    var tmp;
    if (contextualize === VOID) {
      tmp = TLVTag$_init_$lambda_l4a9hr;
    } else {
      tmp = contextualize;
    }
    contextualize = tmp;
    this.kc_1 = bytes;
    this.lc_1 = tag;
    this.mc_1 = classification;
    this.nc_1 = construction;
    this.oc_1 = form;
    this.pc_1 = type;
    this.qc_1 = contextualize;
  }
  protoOf(TLVTag).vc = function () {
    return this.kc_1;
  };
  function ValueHandler(parser, explainer) {
    explainer = explainer === VOID ? null : explainer;
    this.xd_1 = parser;
    this.yd_1 = explainer;
  }
  protoOf(ValueHandler).toString = function () {
    return 'ValueHandler(parser=' + toString(this.xd_1) + ', explainer=' + toString_0(this.yd_1) + ')';
  };
  protoOf(ValueHandler).hashCode = function () {
    var result = hashCode(this.xd_1);
    result = imul(result, 31) + (this.yd_1 == null ? 0 : hashCode(this.yd_1)) | 0;
    return result;
  };
  protoOf(ValueHandler).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ValueHandler))
      return false;
    var tmp0_other_with_cast = other instanceof ValueHandler ? other : THROW_CCE();
    if (!equals(this.xd_1, tmp0_other_with_cast.xd_1))
      return false;
    if (!equals(this.yd_1, tmp0_other_with_cast.yd_1))
      return false;
    return true;
  };
  function Companion_3() {
  }
  protoOf(Companion_3).jc = function (bytes, tag, length, handler) {
    var valueStart = tag.p() + length.p() | 0;
    var valueBytes = copyOfRange(bytes, valueStart, valueStart + length.yc_1 | 0);
    return new TLVValue(valueBytes, handler);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function TLVValue(bytes, handler) {
    this.zc_1 = bytes;
    this.ad_1 = handler;
  }
  protoOf(TLVValue).vc = function () {
    return this.zc_1;
  };
  protoOf(TLVValue).d1 = function () {
    return this.ad_1.xd_1.oa(this.zc_1);
  };
  protoOf(TLVValue).zd = function (lineSeparator) {
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(this.ad_1.xd_1.ta(this.d1())));
    var tmp0_safe_receiver = this.ad_1.yd_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.de(this.d1(), lineSeparator);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      explanation.ce(LineSeparator_getInstance());
      explanation.ce(LineSeparator_getInstance());
      var _iterator__ex2g4s = tmp1_safe_receiver.m();
      while (_iterator__ex2g4s.n()) {
        var element = _iterator__ex2g4s.o();
        explanation.ce(element);
      }
    }
    return explanation;
  };
  function OctetStringValueParser() {
  }
  protoOf(OctetStringValueParser).oa = function (bytes) {
    return bytes;
  };
  protoOf(OctetStringValueParser).ee = function (value) {
    return toHexString(value);
  };
  protoOf(OctetStringValueParser).ta = function (value) {
    return this.ee((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
  };
  function createTab($this, byteIndex, entries, byte) {
    var bits = toBitStrings(byte);
    var table = Companion_instance_4.fe(entries.p() + 1 | 0);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = entries.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer.createTab.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var def = item.l9_1;
      var tmp = index_0 + 1 | 0;
      var tmp_0 = def.f9();
      var tmp_1 = def.g9() + 1 | 0;
      var tmp_2;
      var tmp_3 = item.l9_1;
      if (tmp_3 instanceof RfuField) {
        tmp_2 = 'RFU - Reserved for Future Use';
      } else {
        tmp_2 = item.n9_1;
      }
      table.je(tmp, bits, tmp_0, tmp_1, tmp_2);
    }
    // Inline function 'kotlin.collections.find' call
    var this_0 = $this.ke_1.y8_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = this_0.m();
      while (tmp0_iterator_0.n()) {
        var element = tmp0_iterator_0.o();
        // Inline function 'io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer.createTab.<anonymous>' call
        if (element.z8_1 === byteIndex) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a9_1;
    var byteLabel = tmp1_elvis_lhs == null ? 'Byte ' + byteIndex : tmp1_elvis_lhs;
    return new Tab(byteLabel, table);
  }
  function BitFieldExplainer(schema) {
    this.ke_1 = schema;
  }
  protoOf(BitFieldExplainer).le = function (value, lineSeparator) {
    var result = this.ke_1.c9(value);
    var explanation = new Explanation(lineSeparator);
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = result.j9_1;
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer.explain.<anonymous>' call
      var key = element.k9_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value_0 = destination.f1(key);
      var tmp;
      if (value_0 == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.y2(key, answer);
        tmp = answer;
      } else {
        tmp = value_0;
      }
      var list = tmp;
      list.k(element);
    }
    var grouped = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = sorted(grouped.g1());
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.m();
    while (tmp0_iterator_0.n()) {
      var item = tmp0_iterator_0.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.BitFieldExplainer.explain.<anonymous>' call
      var tmp$ret$5 = createTab(this, item, ensureNotNull(grouped.f1(item)), value[item - 1 | 0]);
      destination_0.k(tmp$ret$5);
    }
    var tabs = destination_0;
    explanation.ce(new TabGroup(tabs));
    return explanation;
  };
  protoOf(BitFieldExplainer).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  function Buffered() {
  }
  function matches(_this__u8e3s4, mask) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.github.rafaelrabeloit.bertlv.utils.matches.<anonymous>' call
    var it = toByte(mask);
    // Inline function 'kotlin.experimental.and' call
    return toByte(_this__u8e3s4 & it) === it;
  }
  function bits(_this__u8e3s4, position, length) {
    return toByte(_this__u8e3s4 >> (position - 1 | 0) & ~(255 << length));
  }
  function toHexString_0(_this__u8e3s4) {
    var builder = StringBuilder_init_$Create$(imul(_this__u8e3s4.length, 2));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var byte = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var hex = byte & 255;
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var hexString = toString_1(hex, 16).toUpperCase();
      if (hexString.length === 1) {
        builder.m5(_Char___init__impl__6a9atx(48));
      }
      builder.l5(hexString);
    }
    return builder.toString();
  }
  function toInt_0(_this__u8e3s4, bigEndian) {
    bigEndian = bigEndian === VOID ? true : bigEndian;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4.length <= 4)) {
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.toInt.<anonymous>' call
      var message = 'ByteArray length must not exceed 4 bytes';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var result = 0;
    if (bigEndian) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          result = result << 8 | _this__u8e3s4[i] & 255;
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = _this__u8e3s4.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          result = result << 8 | _this__u8e3s4[i_0] & 255;
        }
         while (0 <= inductionVariable_0);
    }
    return result;
  }
  function toBitStrings(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.github.rafaelrabeloit.bertlv.utils.toBitStrings.<anonymous>' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, 8);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.w6_1;
    var last = this_0.x6_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.github.rafaelrabeloit.bertlv.utils.toBitStrings.<anonymous>.<anonymous>' call
        var tmp$ret$0 = (_this__u8e3s4 >> item & 1).toString();
        destination.k(tmp$ret$0);
      }
       while (!(item === last));
    return reversed(destination);
  }
  function get_BIT_HEADER_CELLS() {
    _init_properties_Explanation_kt__cua9yf();
    return BIT_HEADER_CELLS;
  }
  var BIT_HEADER_CELLS;
  function createBitRow(bits, start, end, meaning) {
    _init_properties_Explanation_kt__cua9yf();
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$_0(8);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'io.github.rafaelrabeloit.bertlv.utils.createBitRow.<anonymous>' call
        list.k('- ');
      }
       while (inductionVariable < 8);
    var cells = list;
    var inductionVariable_0 = start;
    if (inductionVariable_0 < end)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        cells.f2(i, bits.q(i) + ' ');
      }
       while (inductionVariable_0 < end);
    // Inline function 'kotlin.collections.plusAssign' call
    var element = '  ' + meaning;
    cells.k(element);
    return cells;
  }
  function Explanation(lineSeparator, elements) {
    lineSeparator = lineSeparator === VOID ? '\n' : lineSeparator;
    elements = elements === VOID ? emptyList() : elements;
    this.ae_1 = lineSeparator;
    this.be_1 = toMutableList(elements);
  }
  protoOf(Explanation).ce = function (element) {
    this.be_1.k(element);
  };
  protoOf(Explanation).m = function () {
    return this.be_1.m();
  };
  protoOf(Explanation).toString = function () {
    var builder = StringBuilder_init_$Create$_0();
    var _iterator__ex2g4s = this.be_1.m();
    while (_iterator__ex2g4s.n()) {
      var element = _iterator__ex2g4s.o();
      builder.l5(element.me(this.ae_1));
    }
    return builder.toString();
  };
  function ExplainElement() {
  }
  protoOf(ExplainElement).toString = function () {
    return this.me('\n');
  };
  function Line(text) {
    ExplainElement.call(this);
    this.ne_1 = text;
  }
  protoOf(Line).me = function (lineSeparator) {
    return this.ne_1;
  };
  protoOf(Line).hashCode = function () {
    return getStringHashCode(this.ne_1);
  };
  protoOf(Line).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Line))
      return false;
    var tmp0_other_with_cast = other instanceof Line ? other : THROW_CCE();
    if (!(this.ne_1 === tmp0_other_with_cast.ne_1))
      return false;
    return true;
  };
  function LineSeparator() {
    LineSeparator_instance = this;
    ExplainElement.call(this);
  }
  protoOf(LineSeparator).me = function (lineSeparator) {
    return lineSeparator;
  };
  var LineSeparator_instance;
  function LineSeparator_getInstance() {
    if (LineSeparator_instance == null)
      new LineSeparator();
    return LineSeparator_instance;
  }
  function TabGroup(tabs) {
    ExplainElement.call(this);
    this.oe_1 = tabs;
  }
  protoOf(TabGroup).me = function (lineSeparator) {
    var builder = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.oe_1.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.TabGroup.toString.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (checkIndexOverflow(tmp1) > 0) {
        builder.l5(lineSeparator);
      }
      builder.l5(item.me(lineSeparator));
    }
    return builder.toString();
  };
  protoOf(TabGroup).hashCode = function () {
    return hashCode(this.oe_1);
  };
  protoOf(TabGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TabGroup))
      return false;
    var tmp0_other_with_cast = other instanceof TabGroup ? other : THROW_CCE();
    if (!equals(this.oe_1, tmp0_other_with_cast.oe_1))
      return false;
    return true;
  };
  function Tab(title, content) {
    ExplainElement.call(this);
    this.pe_1 = title;
    this.qe_1 = content;
  }
  protoOf(Tab).me = function (lineSeparator) {
    var builder = StringBuilder_init_$Create$_0();
    builder.l5(this.pe_1);
    builder.l5(lineSeparator);
    builder.l5(this.qe_1.me(lineSeparator));
    return builder.toString();
  };
  protoOf(Tab).hashCode = function () {
    var result = getStringHashCode(this.pe_1);
    result = imul(result, 31) + hashCode(this.qe_1) | 0;
    return result;
  };
  protoOf(Tab).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Tab))
      return false;
    var tmp0_other_with_cast = other instanceof Tab ? other : THROW_CCE();
    if (!(this.pe_1 === tmp0_other_with_cast.pe_1))
      return false;
    if (!equals(this.qe_1, tmp0_other_with_cast.qe_1))
      return false;
    return true;
  };
  function Row(cells) {
    this.re_1 = cells;
  }
  protoOf(Row).toString = function () {
    return 'Row(cells=' + toString(this.re_1) + ')';
  };
  protoOf(Row).hashCode = function () {
    return hashCode(this.re_1);
  };
  protoOf(Row).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Row))
      return false;
    var tmp0_other_with_cast = other instanceof Row ? other : THROW_CCE();
    if (!equals(this.re_1, tmp0_other_with_cast.re_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).fe = function (rows) {
    var table = new Table(rows, 9);
    table.se();
    return table;
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Table(rows, columns) {
    ExplainElement.call(this);
    this.ge_1 = rows;
    this.he_1 = columns;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.ge_1 >= 2)) {
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.Table.<anonymous>' call
      var message = 'Table must have at least 2 rows';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.he_1 > 0)) {
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.Table.<anonymous>' call
      var message_0 = 'Table must have at least one column';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.MutableList' call
    var size = this.ge_1;
    var list = ArrayList_init_$Create$_0(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'io.github.rafaelrabeloit.bertlv.utils.Table.data.<anonymous>' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_0 = this.he_1;
        var list_0 = ArrayList_init_$Create$_0(size_0);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'io.github.rafaelrabeloit.bertlv.utils.Table.data.<anonymous>.<anonymous>' call
            list_0.k('');
          }
           while (inductionVariable_0 < size_0);
        var tmp$ret$4 = new Row(list_0);
        list.k(tmp$ret$4);
      }
       while (inductionVariable < size);
    tmp.ie_1 = list;
  }
  protoOf(Table).te = function () {
    return this.ie_1.q(0);
  };
  protoOf(Table).ue = function (row, column, value) {
    this.ie_1.q(row).re_1.f2(column, value);
  };
  protoOf(Table).se = function () {
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = get_BIT_HEADER_CELLS().m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.Table.setBitHeaders.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      this.te().re_1.f2(i, item);
    }
  };
  protoOf(Table).je = function (rowIndex, bits, start, end, meaning) {
    var rowData = createBitRow(bits, start, end, meaning);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = rowData.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.utils.Table.setBitRow.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      this.ue(rowIndex, index_0, item);
    }
  };
  protoOf(Table).m = function () {
    return this.ie_1.m();
  };
  protoOf(Table).me = function (lineSeparator) {
    var builder = StringBuilder_init_$Create$_0();
    var headerString = joinToString(this.te().re_1, ' | ');
    builder.l5('| ').l5(headerString).l5(lineSeparator);
    var headerLength = 2 + headerString.length | 0;
    builder.l5(repeat('=', headerLength)).l5(lineSeparator);
    var inductionVariable = 1;
    var last = this.ie_1.p();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var row = this.ie_1.q(i);
        var rowString = joinToString(row.re_1, ' | ');
        builder.l5('| ').l5(rowString).l5(lineSeparator);
      }
       while (inductionVariable < last);
    return builder.toString();
  };
  var properties_initialized_Explanation_kt_y3wdl;
  function _init_properties_Explanation_kt__cua9yf() {
    if (!properties_initialized_Explanation_kt_y3wdl) {
      properties_initialized_Explanation_kt_y3wdl = true;
      BIT_HEADER_CELLS = listOf(['b8', 'b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1', '  Meaning']);
    }
  }
  function getTagDescription($this, tlvTag) {
    return Companion_instance_5.ve(tlvTag.lc_1);
  }
  function createParserForFormat($this, format) {
    var tmp;
    switch (format.j1_1) {
      case 0:
        tmp = new NumericValueParser();
        break;
      case 1:
        tmp = new NumericNumberValueParser();
        break;
      case 4:
        tmp = new BinaryValueParser();
        break;
      case 2:
        tmp = new AlphanumericValueParser();
        break;
      case 3:
        tmp = new AlphanumericSpecialValueParser();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function createValueHandler($this, tagDescription, defaultParser) {
    switch (tagDescription.j1_1) {
      case 19:
        return new ValueHandler(new BinaryValueParser(), TVR_getInstance());
      case 23:
        return new ValueHandler(new BinaryValueParser(), TerminalCapabilities_getInstance());
      case 21:
        return new ValueHandler(new BinaryValueParser(), TerminalType_instance);
      case 13:
        return new ValueHandler(new NumericValueParser(), TransactionType_instance);
      case 20:
        return new ValueHandler(new BinaryValueParser(), CVMResults_getInstance());
      case 61:
        return new ValueHandler(new BinaryValueParser(), TerminalTransactionQualifiers_getInstance());
      case 69:
        return new ValueHandler(new BinaryValueParser(), IssuerActionCodeDenial_getInstance());
      case 71:
        return new ValueHandler(new BinaryValueParser(), IssuerActionCodeDefault_getInstance());
      case 70:
        return new ValueHandler(new BinaryValueParser(), IssuerActionCodeOnline_getInstance());
      case 32:
        return new ValueHandler(new BinaryValueParser(), ApplicationUsageControl_getInstance());
      case 17:
        return new ValueHandler(new BinaryValueParser(), CryptogramInformationData_getInstance());
      case 36:
        return new ValueHandler(new BinaryValueParser(), ApplicationLifeCycleData_getInstance());
      case 3:
        return new ValueHandler(new BinaryValueParser(), ApplicationPriorityIndicator_getInstance());
      case 25:
        return new ValueHandler(new BinaryValueParser(), ApplicationInterchangeProfile_getInstance());
      case 43:
        return new ValueHandler(new AlphanumericValueParser(), LanguagePreference_instance);
      case 62:
        return new ValueHandler(new NumericNumberValueParser(), MerchantCategoryCode_instance);
      case 66:
        return new ValueHandler(new NumericNumberValueParser(), IssuerCountryCode_getInstance());
      case 67:
        return new ValueHandler(new AlphanumericValueParser(), IssuerCountryCodeAlpha2_instance);
      case 68:
        return new ValueHandler(new AlphanumericValueParser(), IssuerCountryCodeAlpha3_instance);
      case 10:
        return new ValueHandler(new NumericNumberValueParser(), TerminalCountryCode_getInstance());
      case 39:
        return new ValueHandler(new NumericValueParser(), ApplicationReferenceCurrency_instance);
      case 37:
        return new ValueHandler(new NumericNumberValueParser(), ApplicationCurrencyCode_getInstance());
      case 11:
        return new ValueHandler(new NumericNumberValueParser(), TransactionCurrencyCode_getInstance());
      case 14:
        return new ValueHandler(new NumericNumberValueParser(), TransactionReferenceCurrencyCode_getInstance());
      case 26:
        return new ValueHandler(new BinaryValueParser(), TransactionStatusInformation_getInstance());
      case 24:
        return new ValueHandler(new BinaryValueParser(), AdditionalTerminalCapabilities_getInstance());
      case 27:
        return new ValueHandler(new BinaryValueParser(), CardTransactionQualifiers_getInstance());
      case 22:
        return new ValueHandler(new BinaryValueParser(), FormFactor_getInstance());
      case 16:
        return new ValueHandler(new BinaryValueParser(), CvmList_instance);
      case 18:
        return new ValueHandler(new BinaryValueParser(), IssuerApplicationData_instance);
      case 118:
        return new ValueHandler(new NumericValueParser(), PosEntryMode_instance);
      case 92:
        return new ValueHandler(new AlphanumericValueParser(), AuthorisationResponseCode_instance);
      case 78:
        return new ValueHandler(new NumericValueParser(), ServiceCode_instance);
      default:
        return new ValueHandler(defaultParser, null);
    }
  }
  function EmvSpecification() {
  }
  protoOf(EmvSpecification).ua = function (tlvTag) {
    return !(getTagDescription(this, tlvTag) == null);
  };
  protoOf(EmvSpecification).va = function (tlvTag) {
    var tmp0_elvis_lhs = getTagDescription(this, tlvTag);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new TagNotExistException();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tagDescription = tmp;
    return new Context(tagDescription.ze_1, tagDescription.af_1);
  };
  protoOf(EmvSpecification).ic = function (tlvTag) {
    var tmp0_elvis_lhs = getTagDescription(this, tlvTag);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new TagNotExistException();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tagDescription = tmp;
    var parser = createParserForFormat(this, tagDescription.df_1);
    return createValueHandler(this, tagDescription, parser);
  };
  var EmvSpecification_instance;
  function EmvSpecification_getInstance() {
    return EmvSpecification_instance;
  }
  var EmvTagDescription_APPLICATION_IDENTIFIER_instance;
  var EmvTagDescription_APPLICATION_LABEL_instance;
  var EmvTagDescription_APPLICATION_PREFERRED_NAME_instance;
  var EmvTagDescription_APPLICATION_PRIORITY_INDICATOR_instance;
  var EmvTagDescription_PAN_instance;
  var EmvTagDescription_PAN_SEQUENCE_NUMBER_instance;
  var EmvTagDescription_CARD_EXPIRY_DATE_instance;
  var EmvTagDescription_CARDHOLDER_NAME_instance;
  var EmvTagDescription_AMOUNT_AUTHORISED_instance;
  var EmvTagDescription_AMOUNT_OTHER_instance;
  var EmvTagDescription_TERMINAL_COUNTRY_CODE_instance;
  var EmvTagDescription_TRANSACTION_CURRENCY_CODE_instance;
  var EmvTagDescription_TRANSACTION_DATE_instance;
  var EmvTagDescription_TRANSACTION_TYPE_instance;
  var EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_CODE_instance;
  var EmvTagDescription_APPLICATION_CRYPTOGRAM_instance;
  var EmvTagDescription_CVM_LIST_instance;
  var EmvTagDescription_CRYPTOGRAM_INFORMATION_DATA_instance;
  var EmvTagDescription_ISSUER_APPLICATION_DATA_instance;
  var EmvTagDescription_TERMINAL_VERIFICATION_RESULTS_instance;
  var EmvTagDescription_CARDHOLDER_VERIFICATION_METHOD_RESULTS_instance;
  var EmvTagDescription_TERMINAL_TYPE_instance;
  var EmvTagDescription_FORM_FACTOR_instance;
  var EmvTagDescription_TERMINAL_CAPABILITIES_instance;
  var EmvTagDescription_ADDITIONAL_TERMINAL_CAPABILITIES_instance;
  var EmvTagDescription_APPLICATION_INTERCHANGE_PROFILE_instance;
  var EmvTagDescription_TRANSACTION_STATUS_INFORMATION_instance;
  var EmvTagDescription_CARD_TRANSACTION_QUALIFIERS_instance;
  var EmvTagDescription_APPLICATION_FILE_LOCATOR_instance;
  var EmvTagDescription_PROCESSING_OPTIONS_DATA_OBJECT_LIST_instance;
  var EmvTagDescription_APPLICATION_TRANSACTION_COUNTER_instance;
  var EmvTagDescription_APPLICATION_TEMPLATE_instance;
  var EmvTagDescription_APPLICATION_USAGE_CONTROL_instance;
  var EmvTagDescription_APPLICATION_VERSION_NUMBER_instance;
  var EmvTagDescription_APPLICATION_EFFECTIVE_DATE_instance;
  var EmvTagDescription_APPLICATION_DISCRETIONARY_DATA_instance;
  var EmvTagDescription_APPLICATION_LIFE_CYCLE_DATA_instance;
  var EmvTagDescription_APPLICATION_CURRENCY_CODE_instance;
  var EmvTagDescription_APPLICATION_CURRENCY_EXPONENT_instance;
  var EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_instance;
  var EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_EXPONENT_instance;
  var EmvTagDescription_APPLICATION_PREFERRED_NAME_EXTENDED_instance;
  var EmvTagDescription_LOWER_CONSECUTIVE_OFFLINE_LIMIT_instance;
  var EmvTagDescription_LANGUAGE_PREFERENCE_instance;
  var EmvTagDescription_TRACK_2_EQUIVALENT_DATA_instance;
  var EmvTagDescription_TRACK_1_DISCRETIONARY_DATA_instance;
  var EmvTagDescription_TRACK_2_DISCRETIONARY_DATA_instance;
  var EmvTagDescription_TRACK_1_DATA_instance;
  var EmvTagDescription_TRACK_3_DATA_instance;
  var EmvTagDescription_CARDHOLDER_NAME_EXTENDED_instance;
  var EmvTagDescription_AMOUNT_REFERENCE_CURRENCY_instance;
  var EmvTagDescription_TRANSACTION_CURRENCY_EXPONENT_instance;
  var EmvTagDescription_TRANSACTION_TIME_instance;
  var EmvTagDescription_TRANSACTION_CATEGORY_CODE_instance;
  var EmvTagDescription_MERCHANT_NAME_AND_LOCATION_instance;
  var EmvTagDescription_UNPREDICTABLE_NUMBER_instance;
  var EmvTagDescription_ISSUER_AUTHENTICATION_DATA_instance;
  var EmvTagDescription_SIGNED_DYNAMIC_APPLICATION_DATA_instance;
  var EmvTagDescription_ICC_DYNAMIC_NUMBER_instance;
  var EmvTagDescription_TERMINAL_IDENTIFICATION_instance;
  var EmvTagDescription_TERMINAL_SERIAL_NUMBER_instance;
  var EmvTagDescription_TERMINAL_TRANSACTION_QUALIFIERS_instance;
  var EmvTagDescription_MERCHANT_CATEGORY_CODE_instance;
  var EmvTagDescription_MERCHANT_CITY_instance;
  var EmvTagDescription_MERCHANT_POSTAL_CODE_instance;
  var EmvTagDescription_MERCHANT_IDENTIFIER_instance;
  var EmvTagDescription_ISSUER_COUNTRY_CODE_instance;
  var EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA2_instance;
  var EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA3_instance;
  var EmvTagDescription_ISSUER_ACTION_CODE_DENIAL_instance;
  var EmvTagDescription_ISSUER_ACTION_CODE_ONLINE_instance;
  var EmvTagDescription_ISSUER_ACTION_CODE_DEFAULT_instance;
  var EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_instance;
  var EmvTagDescription_ISSUER_SCRIPT_RESULTS_instance;
  var EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_1_instance;
  var EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_2_instance;
  var EmvTagDescription_FCI_ISSUER_DISCRETIONARY_DATA_instance;
  var EmvTagDescription_ISSUER_IDENTIFICATION_NUMBER_instance;
  var EmvTagDescription_SERVICE_CODE_instance;
  var EmvTagDescription_ISSUER_URL_instance;
  var EmvTagDescription_INTERNATIONAL_BANK_ACCOUNT_NUMBER_instance;
  var EmvTagDescription_BANK_IDENTIFIER_CODE_instance;
  var EmvTagDescription_FCI_TEMPLATE_instance;
  var EmvTagDescription_EMV_PROPRIETARY_TEMPLATE_instance;
  var EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_1_instance;
  var EmvTagDescription_DIRECTORY_DISCRETIONARY_TEMPLATE_instance;
  var EmvTagDescription_AMOUNT_AUTHORISED_BINARY_instance;
  var EmvTagDescription_COMMAND_TEMPLATE_instance;
  var EmvTagDescription_DEDICATED_FILE_NAME_instance;
  var EmvTagDescription_ISSUER_SCRIPT_COMMAND_instance;
  var EmvTagDescription_SHORT_FILE_IDENTIFIER_instance;
  var EmvTagDescription_AUTHORISATION_CODE_instance;
  var EmvTagDescription_AUTHORISATION_RESPONSE_CODE_instance;
  var EmvTagDescription_CDOL1_instance;
  var EmvTagDescription_CDOL2_instance;
  var EmvTagDescription_CA_PUBLIC_KEY_INDEX_ICC_instance;
  var EmvTagDescription_ISSUER_PUBLIC_KEY_CERTIFICATE_instance;
  var EmvTagDescription_ISSUER_PUBLIC_KEY_REMAINDER_instance;
  var EmvTagDescription_SIGNED_STATIC_APPLICATION_DATA_instance;
  var EmvTagDescription_TDOL_instance;
  var EmvTagDescription_TC_HASH_VALUE_instance;
  var EmvTagDescription_TRANSACTION_PIN_DATA_instance;
  var EmvTagDescription_DDF_NAME_instance;
  var EmvTagDescription_ACQUIRER_IDENTIFIER_instance;
  var EmvTagDescription_AMOUNT_OTHER_BINARY_instance;
  var EmvTagDescription_AID_TERMINAL_instance;
  var EmvTagDescription_APPLICATION_VERSION_NUMBER_TERMINAL_instance;
  var EmvTagDescription_ISSUER_CODE_TABLE_INDEX_instance;
  var EmvTagDescription_PIN_TRY_COUNTER_instance;
  var EmvTagDescription_ISSUER_SCRIPT_IDENTIFIER_instance;
  var EmvTagDescription_TERMINAL_FLOOR_LIMIT_instance;
  var EmvTagDescription_TERMINAL_RISK_MANAGEMENT_DATA_instance;
  var EmvTagDescription_CA_PUBLIC_KEY_INDEX_TERMINAL_instance;
  var EmvTagDescription_UPPER_CONSECUTIVE_OFFLINE_LIMIT_instance;
  var EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_CERTIFICATE_instance;
  var EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_EXPONENT_instance;
  var EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_REMAINDER_instance;
  var EmvTagDescription_ISSUER_PUBLIC_KEY_EXPONENT_instance;
  var EmvTagDescription_POS_ENTRY_MODE_instance;
  var EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_EXPONENT_instance;
  var EmvTagDescription_TRANSACTION_SEQUENCE_COUNTER_instance;
  var EmvTagDescription_DATA_AUTHENTICATION_CODE_instance;
  var EmvTagDescription_ICC_PUBLIC_KEY_CERTIFICATE_instance;
  var EmvTagDescription_ICC_PUBLIC_KEY_EXPONENT_instance;
  var EmvTagDescription_ICC_PUBLIC_KEY_REMAINDER_instance;
  var EmvTagDescription_DDOL_instance;
  var EmvTagDescription_STATIC_DATA_AUTHENTICATION_TAG_LIST_instance;
  var EmvTagDescription_LOG_ENTRY_instance;
  var EmvTagDescription_FCI_PROPRIETARY_TEMPLATE_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).ve = function (tag) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = values_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.github.rafaelrabeloit.emv.Companion.findByTag.<anonymous>' call
        if (element.ye_1 === tag) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function values_1() {
    return [EmvTagDescription_APPLICATION_IDENTIFIER_getInstance(), EmvTagDescription_APPLICATION_LABEL_getInstance(), EmvTagDescription_APPLICATION_PREFERRED_NAME_getInstance(), EmvTagDescription_APPLICATION_PRIORITY_INDICATOR_getInstance(), EmvTagDescription_PAN_getInstance(), EmvTagDescription_PAN_SEQUENCE_NUMBER_getInstance(), EmvTagDescription_CARD_EXPIRY_DATE_getInstance(), EmvTagDescription_CARDHOLDER_NAME_getInstance(), EmvTagDescription_AMOUNT_AUTHORISED_getInstance(), EmvTagDescription_AMOUNT_OTHER_getInstance(), EmvTagDescription_TERMINAL_COUNTRY_CODE_getInstance(), EmvTagDescription_TRANSACTION_CURRENCY_CODE_getInstance(), EmvTagDescription_TRANSACTION_DATE_getInstance(), EmvTagDescription_TRANSACTION_TYPE_getInstance(), EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_CODE_getInstance(), EmvTagDescription_APPLICATION_CRYPTOGRAM_getInstance(), EmvTagDescription_CVM_LIST_getInstance(), EmvTagDescription_CRYPTOGRAM_INFORMATION_DATA_getInstance(), EmvTagDescription_ISSUER_APPLICATION_DATA_getInstance(), EmvTagDescription_TERMINAL_VERIFICATION_RESULTS_getInstance(), EmvTagDescription_CARDHOLDER_VERIFICATION_METHOD_RESULTS_getInstance(), EmvTagDescription_TERMINAL_TYPE_getInstance(), EmvTagDescription_FORM_FACTOR_getInstance(), EmvTagDescription_TERMINAL_CAPABILITIES_getInstance(), EmvTagDescription_ADDITIONAL_TERMINAL_CAPABILITIES_getInstance(), EmvTagDescription_APPLICATION_INTERCHANGE_PROFILE_getInstance(), EmvTagDescription_TRANSACTION_STATUS_INFORMATION_getInstance(), EmvTagDescription_CARD_TRANSACTION_QUALIFIERS_getInstance(), EmvTagDescription_APPLICATION_FILE_LOCATOR_getInstance(), EmvTagDescription_PROCESSING_OPTIONS_DATA_OBJECT_LIST_getInstance(), EmvTagDescription_APPLICATION_TRANSACTION_COUNTER_getInstance(), EmvTagDescription_APPLICATION_TEMPLATE_getInstance(), EmvTagDescription_APPLICATION_USAGE_CONTROL_getInstance(), EmvTagDescription_APPLICATION_VERSION_NUMBER_getInstance(), EmvTagDescription_APPLICATION_EFFECTIVE_DATE_getInstance(), EmvTagDescription_APPLICATION_DISCRETIONARY_DATA_getInstance(), EmvTagDescription_APPLICATION_LIFE_CYCLE_DATA_getInstance(), EmvTagDescription_APPLICATION_CURRENCY_CODE_getInstance(), EmvTagDescription_APPLICATION_CURRENCY_EXPONENT_getInstance(), EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_getInstance(), EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_EXPONENT_getInstance(), EmvTagDescription_APPLICATION_PREFERRED_NAME_EXTENDED_getInstance(), EmvTagDescription_LOWER_CONSECUTIVE_OFFLINE_LIMIT_getInstance(), EmvTagDescription_LANGUAGE_PREFERENCE_getInstance(), EmvTagDescription_TRACK_2_EQUIVALENT_DATA_getInstance(), EmvTagDescription_TRACK_1_DISCRETIONARY_DATA_getInstance(), EmvTagDescription_TRACK_2_DISCRETIONARY_DATA_getInstance(), EmvTagDescription_TRACK_1_DATA_getInstance(), EmvTagDescription_TRACK_3_DATA_getInstance(), EmvTagDescription_CARDHOLDER_NAME_EXTENDED_getInstance(), EmvTagDescription_AMOUNT_REFERENCE_CURRENCY_getInstance(), EmvTagDescription_TRANSACTION_CURRENCY_EXPONENT_getInstance(), EmvTagDescription_TRANSACTION_TIME_getInstance(), EmvTagDescription_TRANSACTION_CATEGORY_CODE_getInstance(), EmvTagDescription_MERCHANT_NAME_AND_LOCATION_getInstance(), EmvTagDescription_UNPREDICTABLE_NUMBER_getInstance(), EmvTagDescription_ISSUER_AUTHENTICATION_DATA_getInstance(), EmvTagDescription_SIGNED_DYNAMIC_APPLICATION_DATA_getInstance(), EmvTagDescription_ICC_DYNAMIC_NUMBER_getInstance(), EmvTagDescription_TERMINAL_IDENTIFICATION_getInstance(), EmvTagDescription_TERMINAL_SERIAL_NUMBER_getInstance(), EmvTagDescription_TERMINAL_TRANSACTION_QUALIFIERS_getInstance(), EmvTagDescription_MERCHANT_CATEGORY_CODE_getInstance(), EmvTagDescription_MERCHANT_CITY_getInstance(), EmvTagDescription_MERCHANT_POSTAL_CODE_getInstance(), EmvTagDescription_MERCHANT_IDENTIFIER_getInstance(), EmvTagDescription_ISSUER_COUNTRY_CODE_getInstance(), EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA2_getInstance(), EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA3_getInstance(), EmvTagDescription_ISSUER_ACTION_CODE_DENIAL_getInstance(), EmvTagDescription_ISSUER_ACTION_CODE_ONLINE_getInstance(), EmvTagDescription_ISSUER_ACTION_CODE_DEFAULT_getInstance(), EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_getInstance(), EmvTagDescription_ISSUER_SCRIPT_RESULTS_getInstance(), EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_1_getInstance(), EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_2_getInstance(), EmvTagDescription_FCI_ISSUER_DISCRETIONARY_DATA_getInstance(), EmvTagDescription_ISSUER_IDENTIFICATION_NUMBER_getInstance(), EmvTagDescription_SERVICE_CODE_getInstance(), EmvTagDescription_ISSUER_URL_getInstance(), EmvTagDescription_INTERNATIONAL_BANK_ACCOUNT_NUMBER_getInstance(), EmvTagDescription_BANK_IDENTIFIER_CODE_getInstance(), EmvTagDescription_FCI_TEMPLATE_getInstance(), EmvTagDescription_EMV_PROPRIETARY_TEMPLATE_getInstance(), EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_1_getInstance(), EmvTagDescription_DIRECTORY_DISCRETIONARY_TEMPLATE_getInstance(), EmvTagDescription_AMOUNT_AUTHORISED_BINARY_getInstance(), EmvTagDescription_COMMAND_TEMPLATE_getInstance(), EmvTagDescription_DEDICATED_FILE_NAME_getInstance(), EmvTagDescription_ISSUER_SCRIPT_COMMAND_getInstance(), EmvTagDescription_SHORT_FILE_IDENTIFIER_getInstance(), EmvTagDescription_AUTHORISATION_CODE_getInstance(), EmvTagDescription_AUTHORISATION_RESPONSE_CODE_getInstance(), EmvTagDescription_CDOL1_getInstance(), EmvTagDescription_CDOL2_getInstance(), EmvTagDescription_CA_PUBLIC_KEY_INDEX_ICC_getInstance(), EmvTagDescription_ISSUER_PUBLIC_KEY_CERTIFICATE_getInstance(), EmvTagDescription_ISSUER_PUBLIC_KEY_REMAINDER_getInstance(), EmvTagDescription_SIGNED_STATIC_APPLICATION_DATA_getInstance(), EmvTagDescription_TDOL_getInstance(), EmvTagDescription_TC_HASH_VALUE_getInstance(), EmvTagDescription_TRANSACTION_PIN_DATA_getInstance(), EmvTagDescription_DDF_NAME_getInstance(), EmvTagDescription_ACQUIRER_IDENTIFIER_getInstance(), EmvTagDescription_AMOUNT_OTHER_BINARY_getInstance(), EmvTagDescription_AID_TERMINAL_getInstance(), EmvTagDescription_APPLICATION_VERSION_NUMBER_TERMINAL_getInstance(), EmvTagDescription_ISSUER_CODE_TABLE_INDEX_getInstance(), EmvTagDescription_PIN_TRY_COUNTER_getInstance(), EmvTagDescription_ISSUER_SCRIPT_IDENTIFIER_getInstance(), EmvTagDescription_TERMINAL_FLOOR_LIMIT_getInstance(), EmvTagDescription_TERMINAL_RISK_MANAGEMENT_DATA_getInstance(), EmvTagDescription_CA_PUBLIC_KEY_INDEX_TERMINAL_getInstance(), EmvTagDescription_UPPER_CONSECUTIVE_OFFLINE_LIMIT_getInstance(), EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_CERTIFICATE_getInstance(), EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_EXPONENT_getInstance(), EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_REMAINDER_getInstance(), EmvTagDescription_ISSUER_PUBLIC_KEY_EXPONENT_getInstance(), EmvTagDescription_POS_ENTRY_MODE_getInstance(), EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_EXPONENT_getInstance(), EmvTagDescription_TRANSACTION_SEQUENCE_COUNTER_getInstance(), EmvTagDescription_DATA_AUTHENTICATION_CODE_getInstance(), EmvTagDescription_ICC_PUBLIC_KEY_CERTIFICATE_getInstance(), EmvTagDescription_ICC_PUBLIC_KEY_EXPONENT_getInstance(), EmvTagDescription_ICC_PUBLIC_KEY_REMAINDER_getInstance(), EmvTagDescription_DDOL_getInstance(), EmvTagDescription_STATIC_DATA_AUTHENTICATION_TAG_LIST_getInstance(), EmvTagDescription_LOG_ENTRY_getInstance(), EmvTagDescription_FCI_PROPRIETARY_TEMPLATE_getInstance()];
  }
  var EmvTagDescription_entriesInitialized;
  function EmvTagDescription_initEntries() {
    if (EmvTagDescription_entriesInitialized)
      return Unit_instance;
    EmvTagDescription_entriesInitialized = true;
    EmvTagDescription_APPLICATION_IDENTIFIER_instance = new EmvTagDescription('APPLICATION_IDENTIFIER', 0, 79, 'Application Identifier (AID)', 'Identifies the application as described in ISO/IEC 7816-5', Source_ICC_getInstance(), numberRangeToNumber(5, 16), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_LABEL_instance = new EmvTagDescription('APPLICATION_LABEL', 1, 80, 'Application Label', 'Mnemonic associated with the AID according to ISO/IEC 7816-5', Source_ICC_getInstance(), numberRangeToNumber(1, 16), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_APPLICATION_PREFERRED_NAME_instance = new EmvTagDescription('APPLICATION_PREFERRED_NAME', 2, 40722, 'Application Preferred Name', 'Preferred mnemonic associated with the AID', Source_ICC_getInstance(), numberRangeToNumber(1, 16), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_APPLICATION_PRIORITY_INDICATOR_instance = new EmvTagDescription('APPLICATION_PRIORITY_INDICATOR', 3, 135, 'Application Priority Indicator', 'Indicates the priority of a given application or group of applications in a directory', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_PAN_instance = new EmvTagDescription('PAN', 4, 90, 'Primary Account Number (PAN)', 'Number identifying the cardholder and the card issuer', Source_ICC_getInstance(), numberRangeToNumber(1, 19), Format_NUMERIC_getInstance());
    EmvTagDescription_PAN_SEQUENCE_NUMBER_instance = new EmvTagDescription('PAN_SEQUENCE_NUMBER', 5, 24372, 'PAN Sequence Number', 'Identifies and differentiates cards with the same PAN', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_CARD_EXPIRY_DATE_instance = new EmvTagDescription('CARD_EXPIRY_DATE', 6, 24356, 'Application Expiration Date', 'Date after which the application expires', Source_ICC_getInstance(), numberRangeToNumber(3, 3), Format_NUMERIC_getInstance());
    EmvTagDescription_CARDHOLDER_NAME_instance = new EmvTagDescription('CARDHOLDER_NAME', 7, 24352, 'Cardholder Name', 'Name of the cardholder as embossed on the card', Source_ICC_getInstance(), numberRangeToNumber(2, 26), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_AMOUNT_AUTHORISED_instance = new EmvTagDescription('AMOUNT_AUTHORISED', 8, 40706, 'Amount, Authorised', 'Authorised amount of the transaction', Source_TERMINAL_getInstance(), numberRangeToNumber(6, 6), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_AMOUNT_OTHER_instance = new EmvTagDescription('AMOUNT_OTHER', 9, 40707, 'Amount, Other', 'Secondary amount associated with the transaction', Source_TERMINAL_getInstance(), numberRangeToNumber(6, 6), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_TERMINAL_COUNTRY_CODE_instance = new EmvTagDescription('TERMINAL_COUNTRY_CODE', 10, 40730, 'Terminal Country Code', 'Indicates the country of the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_CURRENCY_CODE_instance = new EmvTagDescription('TRANSACTION_CURRENCY_CODE', 11, 24362, 'Transaction Currency Code', 'Indicates the currency code of the transaction', Source_TERMINAL_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_TRANSACTION_DATE_instance = new EmvTagDescription('TRANSACTION_DATE', 12, 154, 'Transaction Date', 'Local date that the transaction was authorised', Source_TERMINAL_getInstance(), numberRangeToNumber(3, 3), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_TYPE_instance = new EmvTagDescription('TRANSACTION_TYPE', 13, 156, 'Transaction Type', 'Indicates the type of financial transaction', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_CODE_instance = new EmvTagDescription('TRANSACTION_REFERENCE_CURRENCY_CODE', 14, 40764, 'Transaction Reference Currency Code', 'Indicates the reference currency code of the transaction', Source_TERMINAL_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_APPLICATION_CRYPTOGRAM_instance = new EmvTagDescription('APPLICATION_CRYPTOGRAM', 15, 40742, 'Application Cryptogram', 'Cryptogram generated by the card for transaction authentication', Source_ICC_getInstance(), numberRangeToNumber(8, 8), Format_BINARY_getInstance());
    EmvTagDescription_CVM_LIST_instance = new EmvTagDescription('CVM_LIST', 16, 142, 'CVM List', 'List of cardholder verification methods supported by the application', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_CRYPTOGRAM_INFORMATION_DATA_instance = new EmvTagDescription('CRYPTOGRAM_INFORMATION_DATA', 17, 40743, 'Cryptogram Information Data', 'Indicates the type of cryptogram and the conditions under which it was generated', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_APPLICATION_DATA_instance = new EmvTagDescription('ISSUER_APPLICATION_DATA', 18, 40720, 'Issuer Application Data', 'Contains proprietary application data for transmission to the issuer', Source_ICC_getInstance(), numberRangeToNumber(1, 32), Format_BINARY_getInstance());
    EmvTagDescription_TERMINAL_VERIFICATION_RESULTS_instance = new EmvTagDescription('TERMINAL_VERIFICATION_RESULTS', 19, 149, 'Terminal Verification Results', '\n        Indicates the results of the different verifications performed by the terminal\n        on the card data and the cardholder\n        ', Source_TERMINAL_getInstance(), numberRangeToNumber(5, 5), Format_BINARY_getInstance());
    EmvTagDescription_CARDHOLDER_VERIFICATION_METHOD_RESULTS_instance = new EmvTagDescription('CARDHOLDER_VERIFICATION_METHOD_RESULTS', 20, 40756, 'Cardholder Verification Method Results', 'Indicates the results of the last cardholder verification', Source_ICC_getInstance(), numberRangeToNumber(3, 3), Format_BINARY_getInstance());
    EmvTagDescription_TERMINAL_TYPE_instance = new EmvTagDescription('TERMINAL_TYPE', 21, 40757, 'Terminal Type', 'Indicates the environment of the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_FORM_FACTOR_instance = new EmvTagDescription('FORM_FACTOR', 22, 40814, 'Form Factor Indicator', 'Indicates the form factor of the consumer payment device and the type of contactless interface', Source_ICC_getInstance(), numberRangeToNumber(4, 4), Format_BINARY_getInstance());
    EmvTagDescription_TERMINAL_CAPABILITIES_instance = new EmvTagDescription('TERMINAL_CAPABILITIES', 23, 40755, 'Terminal Capabilities', 'Indicates the card data input, CVM, and security capabilities of the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(3, 3), Format_BINARY_getInstance());
    EmvTagDescription_ADDITIONAL_TERMINAL_CAPABILITIES_instance = new EmvTagDescription('ADDITIONAL_TERMINAL_CAPABILITIES', 24, 40768, 'Additional Terminal Capabilities', 'Indicates the data input and output capabilities of the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(5, 5), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_INTERCHANGE_PROFILE_instance = new EmvTagDescription('APPLICATION_INTERCHANGE_PROFILE', 25, 130, 'Application Interchange Profile', 'Indicates the capabilities of the card to support specific functions', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_TRANSACTION_STATUS_INFORMATION_instance = new EmvTagDescription('TRANSACTION_STATUS_INFORMATION', 26, 155, 'Transaction Status Information', 'Indicates the status of the transaction', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_CARD_TRANSACTION_QUALIFIERS_instance = new EmvTagDescription('CARD_TRANSACTION_QUALIFIERS', 27, 40812, 'Card Transaction Qualifiers', 'Indicates the capabilities of the card for the transaction', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_FILE_LOCATOR_instance = new EmvTagDescription('APPLICATION_FILE_LOCATOR', 28, 148, 'Application File Locator', 'Indicates the location of the application elementary files', Source_ICC_getInstance(), numberRangeToNumber(1, 32), Format_BINARY_getInstance());
    EmvTagDescription_PROCESSING_OPTIONS_DATA_OBJECT_LIST_instance = new EmvTagDescription('PROCESSING_OPTIONS_DATA_OBJECT_LIST', 29, 40760, 'Processing Options Data Object List', 'Indicates the data objects that the terminal requests from the card', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 252), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_TRANSACTION_COUNTER_instance = new EmvTagDescription('APPLICATION_TRANSACTION_COUNTER', 30, 40758, 'Application Transaction Counter', 'Counter maintained by the application in the ICC', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_TEMPLATE_instance = new EmvTagDescription('APPLICATION_TEMPLATE', 31, 97, 'Application Template', 'Contains the FCI template', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_USAGE_CONTROL_instance = new EmvTagDescription('APPLICATION_USAGE_CONTROL', 32, 40711, 'Application Usage Control', "\n        Indicates the issuer's specified restrictions on the geographic usage\n        and services allowed for the application.\n        ", Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_VERSION_NUMBER_instance = new EmvTagDescription('APPLICATION_VERSION_NUMBER', 33, 40712, 'Application Version Number', 'Version number assigned by the payment system for the application', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_getInstance());
    EmvTagDescription_APPLICATION_EFFECTIVE_DATE_instance = new EmvTagDescription('APPLICATION_EFFECTIVE_DATE', 34, 24357, 'Application Effective Date', 'Date from which the application may be used', Source_ICC_getInstance(), numberRangeToNumber(3, 3), Format_NUMERIC_getInstance());
    EmvTagDescription_APPLICATION_DISCRETIONARY_DATA_instance = new EmvTagDescription('APPLICATION_DISCRETIONARY_DATA', 35, 40709, 'Application Discretionary Data', 'Contains proprietary application data for transmission to the issuer', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_LIFE_CYCLE_DATA_instance = new EmvTagDescription('APPLICATION_LIFE_CYCLE_DATA', 36, 40714, 'Application Life Cycle Data', 'Indicates the current state of the application', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_CURRENCY_CODE_instance = new EmvTagDescription('APPLICATION_CURRENCY_CODE', 37, 40770, 'Application Currency Code', 'Indicates the currency code of the application', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_APPLICATION_CURRENCY_EXPONENT_instance = new EmvTagDescription('APPLICATION_CURRENCY_EXPONENT', 38, 40772, 'Application Currency Exponent', 'Indicates the exponent of the application currency', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_instance = new EmvTagDescription('APPLICATION_REFERENCE_CURRENCY', 39, 40763, 'Application Reference Currency', 'Indicates the reference currencies codes of the application', Source_ICC_getInstance(), numberRangeToNumber(2, 8), Format_NUMERIC_getInstance());
    EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_EXPONENT_instance = new EmvTagDescription('APPLICATION_REFERENCE_CURRENCY_EXPONENT', 40, 40771, 'Application Reference Currency Exponent', 'Indicates the exponent of the reference currency', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_APPLICATION_PREFERRED_NAME_EXTENDED_instance = new EmvTagDescription('APPLICATION_PREFERRED_NAME_EXTENDED', 41, 40723, 'Application Preferred Name Extended', 'Extended preferred mnemonic associated with the AID', Source_ICC_getInstance(), numberRangeToNumber(1, 16), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_LOWER_CONSECUTIVE_OFFLINE_LIMIT_instance = new EmvTagDescription('LOWER_CONSECUTIVE_OFFLINE_LIMIT', 42, 40724, 'Lower Consecutive Offline Limit', 'Maximum number of consecutive offline transactions allowed', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_LANGUAGE_PREFERENCE_instance = new EmvTagDescription('LANGUAGE_PREFERENCE', 43, 24365, 'Language Preference', 'Indicates the preferred languages for the application', Source_ICC_getInstance(), numberRangeToNumber(2, 8), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_TRACK_2_EQUIVALENT_DATA_instance = new EmvTagDescription('TRACK_2_EQUIVALENT_DATA', 44, 87, 'Track 2 Equivalent Data', 'Contains the data elements of track 2 according to ISO/IEC 7813', Source_ICC_getInstance(), numberRangeToNumber(1, 19), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_TRACK_1_DISCRETIONARY_DATA_instance = new EmvTagDescription('TRACK_1_DISCRETIONARY_DATA', 45, 40735, 'Track 1 Discretionary Data', 'Contains the discretionary data field of track 1 according to ISO/IEC 7813', Source_ICC_getInstance(), numberRangeToNumber(1, 76), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_TRACK_2_DISCRETIONARY_DATA_instance = new EmvTagDescription('TRACK_2_DISCRETIONARY_DATA', 46, 40736, 'Track 2 Discretionary Data', 'Contains the discretionary data field of track 2 according to ISO/IEC 7813', Source_ICC_getInstance(), numberRangeToNumber(1, 19), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_TRACK_1_DATA_instance = new EmvTagDescription('TRACK_1_DATA', 47, 86, 'Track 1 Data', 'Contains the data elements of track 1 according to ISO/IEC 7813', Source_ICC_getInstance(), numberRangeToNumber(1, 76), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_TRACK_3_DATA_instance = new EmvTagDescription('TRACK_3_DATA', 48, 88, 'Track 3 Data', 'Contains the data elements of track 3 according to ISO/IEC 7813', Source_ICC_getInstance(), numberRangeToNumber(1, 104), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_CARDHOLDER_NAME_EXTENDED_instance = new EmvTagDescription('CARDHOLDER_NAME_EXTENDED', 49, 40715, 'Cardholder Name Extended', 'Extended cardholder name', Source_ICC_getInstance(), numberRangeToNumber(1, 26), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_AMOUNT_REFERENCE_CURRENCY_instance = new EmvTagDescription('AMOUNT_REFERENCE_CURRENCY', 50, 40762, 'Amount, Reference Currency', 'Amount in the reference currency', Source_TERMINAL_getInstance(), numberRangeToNumber(6, 6), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_TRANSACTION_CURRENCY_EXPONENT_instance = new EmvTagDescription('TRANSACTION_CURRENCY_EXPONENT', 51, 24374, 'Transaction Currency Exponent', 'Indicates the exponent of the transaction currency', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_TIME_instance = new EmvTagDescription('TRANSACTION_TIME', 52, 40737, 'Transaction Time', 'Local time that the transaction was authorised', Source_TERMINAL_getInstance(), numberRangeToNumber(3, 3), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_CATEGORY_CODE_instance = new EmvTagDescription('TRANSACTION_CATEGORY_CODE', 53, 40787, 'Transaction Category Code', 'Indicates the type of transaction being performed', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_MERCHANT_NAME_AND_LOCATION_instance = new EmvTagDescription('MERCHANT_NAME_AND_LOCATION', 54, 40782, 'Merchant Name and Location', 'Contains the merchant name and location', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 99), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_UNPREDICTABLE_NUMBER_instance = new EmvTagDescription('UNPREDICTABLE_NUMBER', 55, 40759, 'Unpredictable Number', 'Value to provide variability and uniqueness to the generation of a cryptogram', Source_TERMINAL_getInstance(), numberRangeToNumber(4, 4), Format_NUMERIC_getInstance());
    EmvTagDescription_ISSUER_AUTHENTICATION_DATA_instance = new EmvTagDescription('ISSUER_AUTHENTICATION_DATA', 56, 145, 'Issuer Authentication Data', 'Data sent by the issuer in an online authorisation response message', Source_ISSUER_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_SIGNED_DYNAMIC_APPLICATION_DATA_instance = new EmvTagDescription('SIGNED_DYNAMIC_APPLICATION_DATA', 57, 40779, 'Signed Dynamic Application Data', 'Contains the ICC dynamic data that is signed by the issuer', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ICC_DYNAMIC_NUMBER_instance = new EmvTagDescription('ICC_DYNAMIC_NUMBER', 58, 40780, 'ICC Dynamic Number', 'Dynamic number generated by the ICC for each transaction', Source_ICC_getInstance(), numberRangeToNumber(1, 8), Format_NUMERIC_getInstance());
    EmvTagDescription_TERMINAL_IDENTIFICATION_instance = new EmvTagDescription('TERMINAL_IDENTIFICATION', 59, 40732, 'Terminal Identification', 'Uniquely identifies the terminal at a merchant location', Source_TERMINAL_getInstance(), numberRangeToNumber(8, 8), Format_BINARY_getInstance());
    EmvTagDescription_TERMINAL_SERIAL_NUMBER_instance = new EmvTagDescription('TERMINAL_SERIAL_NUMBER', 60, 40734, 'Terminal Serial Number', 'Uniquely identifies the terminal at a merchant location', Source_TERMINAL_getInstance(), numberRangeToNumber(8, 8), Format_NUMERIC_getInstance());
    EmvTagDescription_TERMINAL_TRANSACTION_QUALIFIERS_instance = new EmvTagDescription('TERMINAL_TRANSACTION_QUALIFIERS', 61, 40806, 'Terminal Transaction Qualifiers', 'Indicates the capabilities of the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(4, 4), Format_BINARY_getInstance());
    EmvTagDescription_MERCHANT_CATEGORY_CODE_instance = new EmvTagDescription('MERCHANT_CATEGORY_CODE', 62, 40725, 'Merchant Category Code', 'Indicates the type of merchant', Source_TERMINAL_getInstance(), numberRangeToNumber(4, 4), Format_NUMERIC_NUMBER_getInstance());
    EmvTagDescription_MERCHANT_CITY_instance = new EmvTagDescription('MERCHANT_CITY', 63, 40783, 'Merchant City', 'City where the merchant is located', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 99), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_MERCHANT_POSTAL_CODE_instance = new EmvTagDescription('MERCHANT_POSTAL_CODE', 64, 40784, 'Merchant Postal Code', 'Postal code of the merchant location', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 99), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_MERCHANT_IDENTIFIER_instance = new EmvTagDescription('MERCHANT_IDENTIFIER', 65, 40726, 'Merchant Identifier', 'Uniquely identifies the merchant', Source_TERMINAL_getInstance(), numberRangeToNumber(15, 15), Format_NUMERIC_getInstance());
    EmvTagDescription_ISSUER_COUNTRY_CODE_instance = new EmvTagDescription('ISSUER_COUNTRY_CODE', 66, 24360, 'Issuer Country Code', 'Indicates the country of the issuer', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_getInstance());
    EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA2_instance = new EmvTagDescription('ISSUER_COUNTRY_CODE_ALPHA2', 67, 24405, 'Issuer Country Code (alpha2 format)', 'Indicates the country of the issuer in ISO 3166-1 alpha-2 format', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA3_instance = new EmvTagDescription('ISSUER_COUNTRY_CODE_ALPHA3', 68, 24406, 'Issuer Country Code (alpha3 format)', 'Indicates the country of the issuer in ISO 3166-1 alpha-3 format', Source_ICC_getInstance(), numberRangeToNumber(3, 3), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_ISSUER_ACTION_CODE_DENIAL_instance = new EmvTagDescription('ISSUER_ACTION_CODE_DENIAL', 69, 40718, 'Issuer Action Code - Denial', 'Indicates the conditions that cause the transaction to be denied', Source_ICC_getInstance(), numberRangeToNumber(5, 5), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_ACTION_CODE_ONLINE_instance = new EmvTagDescription('ISSUER_ACTION_CODE_ONLINE', 70, 40719, 'Issuer Action Code - Online', 'Indicates the conditions that cause the transaction to be sent online', Source_ICC_getInstance(), numberRangeToNumber(5, 5), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_ACTION_CODE_DEFAULT_instance = new EmvTagDescription('ISSUER_ACTION_CODE_DEFAULT', 71, 40717, 'Issuer Action Code - Default', 'Indicates the conditions that cause the issuer to be contacted', Source_ICC_getInstance(), numberRangeToNumber(5, 5), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_instance = new EmvTagDescription('ISSUER_SCRIPT_TEMPLATE', 72, 114, 'Issuer Script Template', 'Contains the issuer script to be processed by the ICC', Source_ISSUER_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_SCRIPT_RESULTS_instance = new EmvTagDescription('ISSUER_SCRIPT_RESULTS', 73, 57137, 'Issuer Script Results', 'Contains the results of the last issuer script processing', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_1_instance = new EmvTagDescription('RESPONSE_MESSAGE_TEMPLATE_FORMAT_1', 74, 128, 'Response Message Template Format 1', '\n        Contains the data objects (primitive and/or constructed) returned by the ICC\n        in response to a command.\n        ', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_2_instance = new EmvTagDescription('RESPONSE_MESSAGE_TEMPLATE_FORMAT_2', 75, 119, 'Response Message Template Format 2', '\n        Contains the data objects (primitive and/or constructed) returned by the ICC\n        in response to a command.\n        ', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_FCI_ISSUER_DISCRETIONARY_DATA_instance = new EmvTagDescription('FCI_ISSUER_DISCRETIONARY_DATA', 76, 48908, 'FCI Issuer Discretionary Data', 'Contains proprietary application data for transmission to the issuer', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_IDENTIFICATION_NUMBER_instance = new EmvTagDescription('ISSUER_IDENTIFICATION_NUMBER', 77, 66, 'Issuer Identification Number (IIN)', 'The number that identifies the major industry and the card issuer', Source_ICC_getInstance(), numberRangeToNumber(3, 3), Format_NUMERIC_getInstance());
    EmvTagDescription_SERVICE_CODE_instance = new EmvTagDescription('SERVICE_CODE', 78, 24368, 'Service Code', 'Service code as defined in ISO/IEC 7813 for track 1 and track 2', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_NUMERIC_getInstance());
    EmvTagDescription_ISSUER_URL_instance = new EmvTagDescription('ISSUER_URL', 79, 24400, 'Issuer URL', "The URL provides the location of the issuer's Library Server on the Internet", Source_ICC_getInstance(), null, Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_INTERNATIONAL_BANK_ACCOUNT_NUMBER_instance = new EmvTagDescription('INTERNATIONAL_BANK_ACCOUNT_NUMBER', 80, 24403, 'International Bank Account Number (IBAN)', 'Uniquely identifies the account of a customer at a financial institution', Source_ICC_getInstance(), null, Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_BANK_IDENTIFIER_CODE_instance = new EmvTagDescription('BANK_IDENTIFIER_CODE', 81, 24404, 'Bank Identifier Code (BIC)', 'Uniquely identifies a bank as defined in ISO 9362', Source_ICC_getInstance(), null, Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_FCI_TEMPLATE_instance = new EmvTagDescription('FCI_TEMPLATE', 82, 111, 'FCI Template', 'Identifies the FCI template according to ISO/IEC 7816-4', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_EMV_PROPRIETARY_TEMPLATE_instance = new EmvTagDescription('EMV_PROPRIETARY_TEMPLATE', 83, 112, 'EMV Proprietary Template', 'Contains data objects proprietary to the payment system', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_1_instance = new EmvTagDescription('ISSUER_SCRIPT_TEMPLATE_1', 84, 113, 'Issuer Script Template 1', 'Contains proprietary issuer data for script processing before final GENERATE AC', Source_ISSUER_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_DIRECTORY_DISCRETIONARY_TEMPLATE_instance = new EmvTagDescription('DIRECTORY_DISCRETIONARY_TEMPLATE', 85, 115, 'Directory Discretionary Template', 'Issuer discretionary part of the directory according to ISO/IEC 7816-5', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_AMOUNT_AUTHORISED_BINARY_instance = new EmvTagDescription('AMOUNT_AUTHORISED_BINARY', 86, 129, 'Amount, Authorised (Binary)', 'Authorised amount of the transaction (excluding adjustments) in binary format', Source_TERMINAL_getInstance(), numberRangeToNumber(4, 4), Format_BINARY_getInstance());
    EmvTagDescription_COMMAND_TEMPLATE_instance = new EmvTagDescription('COMMAND_TEMPLATE', 87, 131, 'Command Template', 'Identifies the data field of a command message', Source_TERMINAL_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_DEDICATED_FILE_NAME_instance = new EmvTagDescription('DEDICATED_FILE_NAME', 88, 132, 'Dedicated File (DF) Name', 'Identifies the name of the DF as described in ISO/IEC 7816-4', Source_ICC_getInstance(), numberRangeToNumber(5, 16), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_SCRIPT_COMMAND_instance = new EmvTagDescription('ISSUER_SCRIPT_COMMAND', 89, 134, 'Issuer Script Command', 'Contains a command for transmission to the ICC', Source_ISSUER_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_SHORT_FILE_IDENTIFIER_instance = new EmvTagDescription('SHORT_FILE_IDENTIFIER', 90, 136, 'Short File Identifier (SFI)', 'Identifies the AEF referenced in commands related to a given ADF or DDF', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_AUTHORISATION_CODE_instance = new EmvTagDescription('AUTHORISATION_CODE', 91, 137, 'Authorisation Code', 'Value generated by the authorisation authority for an approved transaction', Source_ISSUER_getInstance(), numberRangeToNumber(6, 6), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_AUTHORISATION_RESPONSE_CODE_instance = new EmvTagDescription('AUTHORISATION_RESPONSE_CODE', 92, 138, 'Authorisation Response Code', 'Code that defines the disposition of a message', Source_ISSUER_getInstance(), numberRangeToNumber(2, 2), Format_ALPHANUMERIC_getInstance());
    EmvTagDescription_CDOL1_instance = new EmvTagDescription('CDOL1', 93, 140, 'Card Risk Management Data Object List 1 (CDOL1)', 'List of data objects (tag and length) to be passed to the ICC in the first GENERATE AC command', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_CDOL2_instance = new EmvTagDescription('CDOL2', 94, 141, 'Card Risk Management Data Object List 2 (CDOL2)', 'List of data objects (tag and length) to be passed to the ICC in the second GENERATE AC command', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_CA_PUBLIC_KEY_INDEX_ICC_instance = new EmvTagDescription('CA_PUBLIC_KEY_INDEX_ICC', 95, 143, 'Certification Authority Public Key Index', "Identifies the certification authority's public key in conjunction with the RID", Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_PUBLIC_KEY_CERTIFICATE_instance = new EmvTagDescription('ISSUER_PUBLIC_KEY_CERTIFICATE', 96, 144, 'Issuer Public Key Certificate', 'Issuer public key certified by a certification authority', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_PUBLIC_KEY_REMAINDER_instance = new EmvTagDescription('ISSUER_PUBLIC_KEY_REMAINDER', 97, 146, 'Issuer Public Key Remainder', 'Remaining digits of the issuer public key modulus', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_SIGNED_STATIC_APPLICATION_DATA_instance = new EmvTagDescription('SIGNED_STATIC_APPLICATION_DATA', 98, 147, 'Signed Static Application Data', 'Digital signature on critical application parameters for SDA', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_TDOL_instance = new EmvTagDescription('TDOL', 99, 151, 'Transaction Certificate Data Object List (TDOL)', 'List of data objects to be used by the terminal in computing the TC Hash Value', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_TC_HASH_VALUE_instance = new EmvTagDescription('TC_HASH_VALUE', 100, 152, 'TC Hash Value', 'Result of a hash function specified in Book 2, Annex B3.1', Source_TERMINAL_getInstance(), numberRangeToNumber(20, 20), Format_BINARY_getInstance());
    EmvTagDescription_TRANSACTION_PIN_DATA_instance = new EmvTagDescription('TRANSACTION_PIN_DATA', 101, 153, 'Transaction Personal Identification Number (PIN) Data', 'Data entered by the cardholder for the purpose of cardholder verification', Source_TERMINAL_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_DDF_NAME_instance = new EmvTagDescription('DDF_NAME', 102, 157, 'Directory Definition File (DDF) Name', 'Identifies the name of a DF associated with a directory', Source_ICC_getInstance(), numberRangeToNumber(5, 16), Format_BINARY_getInstance());
    EmvTagDescription_ACQUIRER_IDENTIFIER_instance = new EmvTagDescription('ACQUIRER_IDENTIFIER', 103, 40705, 'Acquirer Identifier', 'Uniquely identifies the acquirer within each payment system', Source_TERMINAL_getInstance(), numberRangeToNumber(6, 6), Format_NUMERIC_getInstance());
    EmvTagDescription_AMOUNT_OTHER_BINARY_instance = new EmvTagDescription('AMOUNT_OTHER_BINARY', 104, 40708, 'Amount, Other (Binary)', 'Secondary amount associated with the transaction represented in binary format', Source_TERMINAL_getInstance(), numberRangeToNumber(4, 4), Format_BINARY_getInstance());
    EmvTagDescription_AID_TERMINAL_instance = new EmvTagDescription('AID_TERMINAL', 105, 40710, 'Application Identifier (AID) - Terminal', 'Identifies the application as described in ISO/IEC 7816-5 as held by the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(5, 16), Format_BINARY_getInstance());
    EmvTagDescription_APPLICATION_VERSION_NUMBER_TERMINAL_instance = new EmvTagDescription('APPLICATION_VERSION_NUMBER_TERMINAL', 106, 40713, 'Application Version Number (Terminal)', 'Version number assigned by the payment system for the application in the terminal', Source_TERMINAL_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_CODE_TABLE_INDEX_instance = new EmvTagDescription('ISSUER_CODE_TABLE_INDEX', 107, 40721, 'Issuer Code Table Index', 'Indicates the code table according to ISO/IEC 8859 for displaying the Application Preferred Name', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_PIN_TRY_COUNTER_instance = new EmvTagDescription('PIN_TRY_COUNTER', 108, 40727, 'Personal Identification Number (PIN) Try Counter', 'Number of PIN tries remaining', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_SCRIPT_IDENTIFIER_instance = new EmvTagDescription('ISSUER_SCRIPT_IDENTIFIER', 109, 40728, 'Issuer Script Identifier', 'Identification of the issuer script', Source_ISSUER_getInstance(), numberRangeToNumber(4, 4), Format_BINARY_getInstance());
    EmvTagDescription_TERMINAL_FLOOR_LIMIT_instance = new EmvTagDescription('TERMINAL_FLOOR_LIMIT', 110, 40731, 'Terminal Floor Limit', 'Indicates the floor limit in the terminal in conjunction with the AID', Source_TERMINAL_getInstance(), numberRangeToNumber(4, 4), Format_BINARY_getInstance());
    EmvTagDescription_TERMINAL_RISK_MANAGEMENT_DATA_instance = new EmvTagDescription('TERMINAL_RISK_MANAGEMENT_DATA', 111, 40733, 'Terminal Risk Management Data', 'Application-specific value used by the card for risk management purposes', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 8), Format_BINARY_getInstance());
    EmvTagDescription_CA_PUBLIC_KEY_INDEX_TERMINAL_instance = new EmvTagDescription('CA_PUBLIC_KEY_INDEX_TERMINAL', 112, 40738, 'Certification Authority Public Key Index (Terminal)', "Identifies the certification authority's public key stored in the terminal", Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_UPPER_CONSECUTIVE_OFFLINE_LIMIT_instance = new EmvTagDescription('UPPER_CONSECUTIVE_OFFLINE_LIMIT', 113, 40739, 'Upper Consecutive Offline Limit', 'Issuer-specified preference for the maximum number of consecutive offline transactions', Source_ICC_getInstance(), numberRangeToNumber(1, 1), Format_BINARY_getInstance());
    EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_CERTIFICATE_instance = new EmvTagDescription('ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_CERTIFICATE', 114, 40749, 'ICC PIN Encipherment Public Key Certificate', 'ICC PIN encipherment public key certified by the issuer', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_EXPONENT_instance = new EmvTagDescription('ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_EXPONENT', 115, 40750, 'ICC PIN Encipherment Public Key Exponent', 'ICC PIN encipherment public key exponent used for PIN encipherment', Source_ICC_getInstance(), numberRangeToNumber(1, 3), Format_BINARY_getInstance());
    EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_REMAINDER_instance = new EmvTagDescription('ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_REMAINDER', 116, 40751, 'ICC PIN Encipherment Public Key Remainder', 'Remaining digits of the ICC PIN encipherment public key modulus', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ISSUER_PUBLIC_KEY_EXPONENT_instance = new EmvTagDescription('ISSUER_PUBLIC_KEY_EXPONENT', 117, 40754, 'Issuer Public Key Exponent', 'Issuer public key exponent used for the verification of the Signed Static Application Data', Source_ICC_getInstance(), numberRangeToNumber(1, 3), Format_BINARY_getInstance());
    EmvTagDescription_POS_ENTRY_MODE_instance = new EmvTagDescription('POS_ENTRY_MODE', 118, 40761, 'Point-of-Service (POS) Entry Mode', 'Indicates the method by which the PAN was entered, according to the first two digits of the ISO 8583:1987 POS Entry Mode', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_EXPONENT_instance = new EmvTagDescription('TRANSACTION_REFERENCE_CURRENCY_EXPONENT', 119, 40765, 'Transaction Reference Currency Exponent', 'Indicates the implied position of the decimal point from the right of the transaction amount', Source_TERMINAL_getInstance(), numberRangeToNumber(1, 1), Format_NUMERIC_getInstance());
    EmvTagDescription_TRANSACTION_SEQUENCE_COUNTER_instance = new EmvTagDescription('TRANSACTION_SEQUENCE_COUNTER', 120, 40769, 'Transaction Sequence Counter', 'Counter maintained by the terminal that is incremented by one for each transaction', Source_TERMINAL_getInstance(), numberRangeToNumber(2, 4), Format_NUMERIC_getInstance());
    EmvTagDescription_DATA_AUTHENTICATION_CODE_instance = new EmvTagDescription('DATA_AUTHENTICATION_CODE', 121, 40773, 'Data Authentication Code', 'An issuer assigned value that is retained by the terminal during the verification process of the Signed Static Application Data', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_ICC_PUBLIC_KEY_CERTIFICATE_instance = new EmvTagDescription('ICC_PUBLIC_KEY_CERTIFICATE', 122, 40774, 'ICC Public Key Certificate', 'ICC public key certified by the issuer', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_ICC_PUBLIC_KEY_EXPONENT_instance = new EmvTagDescription('ICC_PUBLIC_KEY_EXPONENT', 123, 40775, 'ICC Public Key Exponent', 'ICC public key exponent used for the verification of the Signed Dynamic Application Data', Source_ICC_getInstance(), numberRangeToNumber(1, 3), Format_BINARY_getInstance());
    EmvTagDescription_ICC_PUBLIC_KEY_REMAINDER_instance = new EmvTagDescription('ICC_PUBLIC_KEY_REMAINDER', 124, 40776, 'ICC Public Key Remainder', 'Remaining digits of the ICC public key modulus', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_DDOL_instance = new EmvTagDescription('DDOL', 125, 40777, 'Dynamic Data Authentication Data Object List (DDOL)', 'List of data objects to be passed to the ICC in the INTERNAL AUTHENTICATE command', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_STATIC_DATA_AUTHENTICATION_TAG_LIST_instance = new EmvTagDescription('STATIC_DATA_AUTHENTICATION_TAG_LIST', 126, 40778, 'Static Data Authentication Tag List', 'List of tags of primitive data objects defined in this specification whose value fields are to be included in the Signed Static or Dynamic Application Data', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
    EmvTagDescription_LOG_ENTRY_instance = new EmvTagDescription('LOG_ENTRY', 127, 40781, 'Log Entry', 'Provides the SFI of the Transaction Log file and its number of records', Source_ICC_getInstance(), numberRangeToNumber(2, 2), Format_BINARY_getInstance());
    EmvTagDescription_FCI_PROPRIETARY_TEMPLATE_instance = new EmvTagDescription('FCI_PROPRIETARY_TEMPLATE', 128, 165, 'FCI Proprietary Template', 'Identifies the data object proprietary to this specification in the FCI template according to ISO/IEC 7816-4', Source_ICC_getInstance(), null, Format_BINARY_getInstance());
  }
  function EmvTagDescription(name, ordinal, tag, tagName, description, source, lengthRange, format) {
    Enum.call(this, name, ordinal);
    this.ye_1 = tag;
    this.ze_1 = tagName;
    this.af_1 = description;
    this.bf_1 = source;
    this.cf_1 = lengthRange;
    this.df_1 = format;
  }
  function EmvTagDescription_APPLICATION_IDENTIFIER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_IDENTIFIER_instance;
  }
  function EmvTagDescription_APPLICATION_LABEL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_LABEL_instance;
  }
  function EmvTagDescription_APPLICATION_PREFERRED_NAME_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_PREFERRED_NAME_instance;
  }
  function EmvTagDescription_APPLICATION_PRIORITY_INDICATOR_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_PRIORITY_INDICATOR_instance;
  }
  function EmvTagDescription_PAN_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_PAN_instance;
  }
  function EmvTagDescription_PAN_SEQUENCE_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_PAN_SEQUENCE_NUMBER_instance;
  }
  function EmvTagDescription_CARD_EXPIRY_DATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CARD_EXPIRY_DATE_instance;
  }
  function EmvTagDescription_CARDHOLDER_NAME_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CARDHOLDER_NAME_instance;
  }
  function EmvTagDescription_AMOUNT_AUTHORISED_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AMOUNT_AUTHORISED_instance;
  }
  function EmvTagDescription_AMOUNT_OTHER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AMOUNT_OTHER_instance;
  }
  function EmvTagDescription_TERMINAL_COUNTRY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_COUNTRY_CODE_instance;
  }
  function EmvTagDescription_TRANSACTION_CURRENCY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_CURRENCY_CODE_instance;
  }
  function EmvTagDescription_TRANSACTION_DATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_DATE_instance;
  }
  function EmvTagDescription_TRANSACTION_TYPE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_TYPE_instance;
  }
  function EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_CODE_instance;
  }
  function EmvTagDescription_APPLICATION_CRYPTOGRAM_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_CRYPTOGRAM_instance;
  }
  function EmvTagDescription_CVM_LIST_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CVM_LIST_instance;
  }
  function EmvTagDescription_CRYPTOGRAM_INFORMATION_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CRYPTOGRAM_INFORMATION_DATA_instance;
  }
  function EmvTagDescription_ISSUER_APPLICATION_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_APPLICATION_DATA_instance;
  }
  function EmvTagDescription_TERMINAL_VERIFICATION_RESULTS_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_VERIFICATION_RESULTS_instance;
  }
  function EmvTagDescription_CARDHOLDER_VERIFICATION_METHOD_RESULTS_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CARDHOLDER_VERIFICATION_METHOD_RESULTS_instance;
  }
  function EmvTagDescription_TERMINAL_TYPE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_TYPE_instance;
  }
  function EmvTagDescription_FORM_FACTOR_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_FORM_FACTOR_instance;
  }
  function EmvTagDescription_TERMINAL_CAPABILITIES_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_CAPABILITIES_instance;
  }
  function EmvTagDescription_ADDITIONAL_TERMINAL_CAPABILITIES_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ADDITIONAL_TERMINAL_CAPABILITIES_instance;
  }
  function EmvTagDescription_APPLICATION_INTERCHANGE_PROFILE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_INTERCHANGE_PROFILE_instance;
  }
  function EmvTagDescription_TRANSACTION_STATUS_INFORMATION_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_STATUS_INFORMATION_instance;
  }
  function EmvTagDescription_CARD_TRANSACTION_QUALIFIERS_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CARD_TRANSACTION_QUALIFIERS_instance;
  }
  function EmvTagDescription_APPLICATION_FILE_LOCATOR_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_FILE_LOCATOR_instance;
  }
  function EmvTagDescription_PROCESSING_OPTIONS_DATA_OBJECT_LIST_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_PROCESSING_OPTIONS_DATA_OBJECT_LIST_instance;
  }
  function EmvTagDescription_APPLICATION_TRANSACTION_COUNTER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_TRANSACTION_COUNTER_instance;
  }
  function EmvTagDescription_APPLICATION_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_TEMPLATE_instance;
  }
  function EmvTagDescription_APPLICATION_USAGE_CONTROL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_USAGE_CONTROL_instance;
  }
  function EmvTagDescription_APPLICATION_VERSION_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_VERSION_NUMBER_instance;
  }
  function EmvTagDescription_APPLICATION_EFFECTIVE_DATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_EFFECTIVE_DATE_instance;
  }
  function EmvTagDescription_APPLICATION_DISCRETIONARY_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_DISCRETIONARY_DATA_instance;
  }
  function EmvTagDescription_APPLICATION_LIFE_CYCLE_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_LIFE_CYCLE_DATA_instance;
  }
  function EmvTagDescription_APPLICATION_CURRENCY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_CURRENCY_CODE_instance;
  }
  function EmvTagDescription_APPLICATION_CURRENCY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_CURRENCY_EXPONENT_instance;
  }
  function EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_instance;
  }
  function EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_REFERENCE_CURRENCY_EXPONENT_instance;
  }
  function EmvTagDescription_APPLICATION_PREFERRED_NAME_EXTENDED_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_PREFERRED_NAME_EXTENDED_instance;
  }
  function EmvTagDescription_LOWER_CONSECUTIVE_OFFLINE_LIMIT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_LOWER_CONSECUTIVE_OFFLINE_LIMIT_instance;
  }
  function EmvTagDescription_LANGUAGE_PREFERENCE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_LANGUAGE_PREFERENCE_instance;
  }
  function EmvTagDescription_TRACK_2_EQUIVALENT_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRACK_2_EQUIVALENT_DATA_instance;
  }
  function EmvTagDescription_TRACK_1_DISCRETIONARY_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRACK_1_DISCRETIONARY_DATA_instance;
  }
  function EmvTagDescription_TRACK_2_DISCRETIONARY_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRACK_2_DISCRETIONARY_DATA_instance;
  }
  function EmvTagDescription_TRACK_1_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRACK_1_DATA_instance;
  }
  function EmvTagDescription_TRACK_3_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRACK_3_DATA_instance;
  }
  function EmvTagDescription_CARDHOLDER_NAME_EXTENDED_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CARDHOLDER_NAME_EXTENDED_instance;
  }
  function EmvTagDescription_AMOUNT_REFERENCE_CURRENCY_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AMOUNT_REFERENCE_CURRENCY_instance;
  }
  function EmvTagDescription_TRANSACTION_CURRENCY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_CURRENCY_EXPONENT_instance;
  }
  function EmvTagDescription_TRANSACTION_TIME_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_TIME_instance;
  }
  function EmvTagDescription_TRANSACTION_CATEGORY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_CATEGORY_CODE_instance;
  }
  function EmvTagDescription_MERCHANT_NAME_AND_LOCATION_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_MERCHANT_NAME_AND_LOCATION_instance;
  }
  function EmvTagDescription_UNPREDICTABLE_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_UNPREDICTABLE_NUMBER_instance;
  }
  function EmvTagDescription_ISSUER_AUTHENTICATION_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_AUTHENTICATION_DATA_instance;
  }
  function EmvTagDescription_SIGNED_DYNAMIC_APPLICATION_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_SIGNED_DYNAMIC_APPLICATION_DATA_instance;
  }
  function EmvTagDescription_ICC_DYNAMIC_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_DYNAMIC_NUMBER_instance;
  }
  function EmvTagDescription_TERMINAL_IDENTIFICATION_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_IDENTIFICATION_instance;
  }
  function EmvTagDescription_TERMINAL_SERIAL_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_SERIAL_NUMBER_instance;
  }
  function EmvTagDescription_TERMINAL_TRANSACTION_QUALIFIERS_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_TRANSACTION_QUALIFIERS_instance;
  }
  function EmvTagDescription_MERCHANT_CATEGORY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_MERCHANT_CATEGORY_CODE_instance;
  }
  function EmvTagDescription_MERCHANT_CITY_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_MERCHANT_CITY_instance;
  }
  function EmvTagDescription_MERCHANT_POSTAL_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_MERCHANT_POSTAL_CODE_instance;
  }
  function EmvTagDescription_MERCHANT_IDENTIFIER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_MERCHANT_IDENTIFIER_instance;
  }
  function EmvTagDescription_ISSUER_COUNTRY_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_COUNTRY_CODE_instance;
  }
  function EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA2_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA2_instance;
  }
  function EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA3_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA3_instance;
  }
  function EmvTagDescription_ISSUER_ACTION_CODE_DENIAL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_ACTION_CODE_DENIAL_instance;
  }
  function EmvTagDescription_ISSUER_ACTION_CODE_ONLINE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_ACTION_CODE_ONLINE_instance;
  }
  function EmvTagDescription_ISSUER_ACTION_CODE_DEFAULT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_ACTION_CODE_DEFAULT_instance;
  }
  function EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_instance;
  }
  function EmvTagDescription_ISSUER_SCRIPT_RESULTS_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_SCRIPT_RESULTS_instance;
  }
  function EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_1_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_1_instance;
  }
  function EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_2_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_RESPONSE_MESSAGE_TEMPLATE_FORMAT_2_instance;
  }
  function EmvTagDescription_FCI_ISSUER_DISCRETIONARY_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_FCI_ISSUER_DISCRETIONARY_DATA_instance;
  }
  function EmvTagDescription_ISSUER_IDENTIFICATION_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_IDENTIFICATION_NUMBER_instance;
  }
  function EmvTagDescription_SERVICE_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_SERVICE_CODE_instance;
  }
  function EmvTagDescription_ISSUER_URL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_URL_instance;
  }
  function EmvTagDescription_INTERNATIONAL_BANK_ACCOUNT_NUMBER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_INTERNATIONAL_BANK_ACCOUNT_NUMBER_instance;
  }
  function EmvTagDescription_BANK_IDENTIFIER_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_BANK_IDENTIFIER_CODE_instance;
  }
  function EmvTagDescription_FCI_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_FCI_TEMPLATE_instance;
  }
  function EmvTagDescription_EMV_PROPRIETARY_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_EMV_PROPRIETARY_TEMPLATE_instance;
  }
  function EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_1_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_SCRIPT_TEMPLATE_1_instance;
  }
  function EmvTagDescription_DIRECTORY_DISCRETIONARY_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_DIRECTORY_DISCRETIONARY_TEMPLATE_instance;
  }
  function EmvTagDescription_AMOUNT_AUTHORISED_BINARY_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AMOUNT_AUTHORISED_BINARY_instance;
  }
  function EmvTagDescription_COMMAND_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_COMMAND_TEMPLATE_instance;
  }
  function EmvTagDescription_DEDICATED_FILE_NAME_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_DEDICATED_FILE_NAME_instance;
  }
  function EmvTagDescription_ISSUER_SCRIPT_COMMAND_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_SCRIPT_COMMAND_instance;
  }
  function EmvTagDescription_SHORT_FILE_IDENTIFIER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_SHORT_FILE_IDENTIFIER_instance;
  }
  function EmvTagDescription_AUTHORISATION_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AUTHORISATION_CODE_instance;
  }
  function EmvTagDescription_AUTHORISATION_RESPONSE_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AUTHORISATION_RESPONSE_CODE_instance;
  }
  function EmvTagDescription_CDOL1_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CDOL1_instance;
  }
  function EmvTagDescription_CDOL2_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CDOL2_instance;
  }
  function EmvTagDescription_CA_PUBLIC_KEY_INDEX_ICC_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CA_PUBLIC_KEY_INDEX_ICC_instance;
  }
  function EmvTagDescription_ISSUER_PUBLIC_KEY_CERTIFICATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_PUBLIC_KEY_CERTIFICATE_instance;
  }
  function EmvTagDescription_ISSUER_PUBLIC_KEY_REMAINDER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_PUBLIC_KEY_REMAINDER_instance;
  }
  function EmvTagDescription_SIGNED_STATIC_APPLICATION_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_SIGNED_STATIC_APPLICATION_DATA_instance;
  }
  function EmvTagDescription_TDOL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TDOL_instance;
  }
  function EmvTagDescription_TC_HASH_VALUE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TC_HASH_VALUE_instance;
  }
  function EmvTagDescription_TRANSACTION_PIN_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_PIN_DATA_instance;
  }
  function EmvTagDescription_DDF_NAME_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_DDF_NAME_instance;
  }
  function EmvTagDescription_ACQUIRER_IDENTIFIER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ACQUIRER_IDENTIFIER_instance;
  }
  function EmvTagDescription_AMOUNT_OTHER_BINARY_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AMOUNT_OTHER_BINARY_instance;
  }
  function EmvTagDescription_AID_TERMINAL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_AID_TERMINAL_instance;
  }
  function EmvTagDescription_APPLICATION_VERSION_NUMBER_TERMINAL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_APPLICATION_VERSION_NUMBER_TERMINAL_instance;
  }
  function EmvTagDescription_ISSUER_CODE_TABLE_INDEX_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_CODE_TABLE_INDEX_instance;
  }
  function EmvTagDescription_PIN_TRY_COUNTER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_PIN_TRY_COUNTER_instance;
  }
  function EmvTagDescription_ISSUER_SCRIPT_IDENTIFIER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_SCRIPT_IDENTIFIER_instance;
  }
  function EmvTagDescription_TERMINAL_FLOOR_LIMIT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_FLOOR_LIMIT_instance;
  }
  function EmvTagDescription_TERMINAL_RISK_MANAGEMENT_DATA_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TERMINAL_RISK_MANAGEMENT_DATA_instance;
  }
  function EmvTagDescription_CA_PUBLIC_KEY_INDEX_TERMINAL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_CA_PUBLIC_KEY_INDEX_TERMINAL_instance;
  }
  function EmvTagDescription_UPPER_CONSECUTIVE_OFFLINE_LIMIT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_UPPER_CONSECUTIVE_OFFLINE_LIMIT_instance;
  }
  function EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_CERTIFICATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_CERTIFICATE_instance;
  }
  function EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_EXPONENT_instance;
  }
  function EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_REMAINDER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_PIN_ENCIPHERMENT_PUBLIC_KEY_REMAINDER_instance;
  }
  function EmvTagDescription_ISSUER_PUBLIC_KEY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ISSUER_PUBLIC_KEY_EXPONENT_instance;
  }
  function EmvTagDescription_POS_ENTRY_MODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_POS_ENTRY_MODE_instance;
  }
  function EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_EXPONENT_instance;
  }
  function EmvTagDescription_TRANSACTION_SEQUENCE_COUNTER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_TRANSACTION_SEQUENCE_COUNTER_instance;
  }
  function EmvTagDescription_DATA_AUTHENTICATION_CODE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_DATA_AUTHENTICATION_CODE_instance;
  }
  function EmvTagDescription_ICC_PUBLIC_KEY_CERTIFICATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_PUBLIC_KEY_CERTIFICATE_instance;
  }
  function EmvTagDescription_ICC_PUBLIC_KEY_EXPONENT_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_PUBLIC_KEY_EXPONENT_instance;
  }
  function EmvTagDescription_ICC_PUBLIC_KEY_REMAINDER_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_ICC_PUBLIC_KEY_REMAINDER_instance;
  }
  function EmvTagDescription_DDOL_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_DDOL_instance;
  }
  function EmvTagDescription_STATIC_DATA_AUTHENTICATION_TAG_LIST_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_STATIC_DATA_AUTHENTICATION_TAG_LIST_instance;
  }
  function EmvTagDescription_LOG_ENTRY_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_LOG_ENTRY_instance;
  }
  function EmvTagDescription_FCI_PROPRIETARY_TEMPLATE_getInstance() {
    EmvTagDescription_initEntries();
    return EmvTagDescription_FCI_PROPRIETARY_TEMPLATE_instance;
  }
  var Format_NUMERIC_instance;
  var Format_NUMERIC_NUMBER_instance;
  var Format_ALPHANUMERIC_instance;
  var Format_ALPHANUMERIC_SPECIAL_instance;
  var Format_BINARY_instance;
  var Format_entriesInitialized;
  function Format_initEntries() {
    if (Format_entriesInitialized)
      return Unit_instance;
    Format_entriesInitialized = true;
    Format_NUMERIC_instance = new Format('NUMERIC', 0);
    Format_NUMERIC_NUMBER_instance = new Format('NUMERIC_NUMBER', 1);
    Format_ALPHANUMERIC_instance = new Format('ALPHANUMERIC', 2);
    Format_ALPHANUMERIC_SPECIAL_instance = new Format('ALPHANUMERIC_SPECIAL', 3);
    Format_BINARY_instance = new Format('BINARY', 4);
  }
  function Format(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Format_NUMERIC_getInstance() {
    Format_initEntries();
    return Format_NUMERIC_instance;
  }
  function Format_NUMERIC_NUMBER_getInstance() {
    Format_initEntries();
    return Format_NUMERIC_NUMBER_instance;
  }
  function Format_ALPHANUMERIC_getInstance() {
    Format_initEntries();
    return Format_ALPHANUMERIC_instance;
  }
  function Format_BINARY_getInstance() {
    Format_initEntries();
    return Format_BINARY_instance;
  }
  var Source_TERMINAL_instance;
  var Source_ICC_instance;
  var Source_ISSUER_instance;
  var Source_entriesInitialized;
  function Source_initEntries() {
    if (Source_entriesInitialized)
      return Unit_instance;
    Source_entriesInitialized = true;
    Source_TERMINAL_instance = new Source('TERMINAL', 0);
    Source_ICC_instance = new Source('ICC', 1);
    Source_ISSUER_instance = new Source('ISSUER', 2);
  }
  function Source(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Source_TERMINAL_getInstance() {
    Source_initEntries();
    return Source_TERMINAL_instance;
  }
  function Source_ICC_getInstance() {
    Source_initEntries();
    return Source_ICC_instance;
  }
  function Source_ISSUER_getInstance() {
    Source_initEntries();
    return Source_ISSUER_instance;
  }
  function AdditionalTerminalCapabilities$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Transaction Type Capability', AdditionalTerminalCapabilities$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - Transaction Type Capability (continued)', AdditionalTerminalCapabilities$schema$lambda$lambda_0);
    $this$bitfield.s9(3, 'Byte 3 - Terminal Data Input Capability', AdditionalTerminalCapabilities$schema$lambda$lambda_1);
    $this$bitfield.s9(4, 'Byte 4 - Terminal Data Output Capability', AdditionalTerminalCapabilities$schema$lambda$lambda_2);
    $this$bitfield.s9(5, 'Byte 5 - Terminal Data Output Capability (continued)', AdditionalTerminalCapabilities$schema$lambda$lambda_3);
    return Unit_instance;
  }
  function AdditionalTerminalCapabilities$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Cash - Cash transactions supported');
    $this$byte.w9(1, 'Goods - Goods transactions supported');
    $this$byte.w9(2, 'Services - Services transactions supported');
    $this$byte.w9(3, 'Cashback - Cashback transactions supported');
    $this$byte.w9(4, 'Inquiry - Inquiry supported');
    $this$byte.w9(5, 'Transfer - Transfer supported');
    $this$byte.w9(6, 'Payment - Payment supported');
    $this$byte.w9(7, 'Administrative - Administrative transactions supported');
    return Unit_instance;
  }
  function AdditionalTerminalCapabilities$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Cash Deposit - Cash deposit supported');
    $this$byte.ja(numberRangeToNumber(1, 7));
    return Unit_instance;
  }
  function AdditionalTerminalCapabilities$schema$lambda$lambda_1($this$byte) {
    $this$byte.w9(0, 'Numeric Keys - Numeric keys supported');
    $this$byte.w9(1, 'Alphabetic and Special Characters Keys - Alphabetic and special characters keys supported');
    $this$byte.w9(2, 'Command Keys - Command keys supported');
    $this$byte.w9(3, 'Function Keys - Function keys supported');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function AdditionalTerminalCapabilities$schema$lambda$lambda_2($this$byte) {
    $this$byte.w9(0, 'Print, Attendant - Print capability, attendant');
    $this$byte.w9(1, 'Print, Cardholder - Print capability, cardholder');
    $this$byte.w9(2, 'Display, Attendant - Display capability, attendant');
    $this$byte.w9(3, 'Display, Cardholder - Display capability, cardholder');
    $this$byte.ja(numberRangeToNumber(4, 5));
    $this$byte.w9(6, 'Code Table 10 - Code table 10 supported');
    $this$byte.w9(7, 'Code Table 9 - Code table 9 supported');
    return Unit_instance;
  }
  function AdditionalTerminalCapabilities$schema$lambda$lambda_3($this$byte) {
    $this$byte.w9(0, 'Code Table 8 - Code table 8 supported');
    $this$byte.w9(1, 'Code Table 7 - Code table 7 supported');
    $this$byte.w9(2, 'Code Table 6 - Code table 6 supported');
    $this$byte.w9(3, 'Code Table 5 - Code table 5 supported');
    $this$byte.w9(4, 'Code Table 4 - Code table 4 supported');
    $this$byte.w9(5, 'Code Table 3 - Code table 3 supported');
    $this$byte.w9(6, 'Code Table 2 - Code table 2 supported');
    $this$byte.w9(7, 'Code Table 1 - Code table 1 supported');
    return Unit_instance;
  }
  function AdditionalTerminalCapabilities() {
    AdditionalTerminalCapabilities_instance = this;
    var tmp = this;
    tmp.ef_1 = bitfield('Additional Terminal Capabilities', 5, AdditionalTerminalCapabilities$schema$lambda);
    this.ff_1 = new BitFieldExplainer(this.ef_1);
  }
  protoOf(AdditionalTerminalCapabilities).le = function (value, lineSeparator) {
    return this.ff_1.le(value, lineSeparator);
  };
  protoOf(AdditionalTerminalCapabilities).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var AdditionalTerminalCapabilities_instance;
  function AdditionalTerminalCapabilities_getInstance() {
    if (AdditionalTerminalCapabilities_instance == null)
      new AdditionalTerminalCapabilities();
    return AdditionalTerminalCapabilities_instance;
  }
  function ApplicationCurrencyCode() {
    ApplicationCurrencyCode_instance = this;
    CurrencyCode.call(this, EmvTagDescription_APPLICATION_CURRENCY_CODE_getInstance());
  }
  var ApplicationCurrencyCode_instance;
  function ApplicationCurrencyCode_getInstance() {
    if (ApplicationCurrencyCode_instance == null)
      new ApplicationCurrencyCode();
    return ApplicationCurrencyCode_instance;
  }
  function ApplicationInterchangeProfile$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1', ApplicationInterchangeProfile$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2', ApplicationInterchangeProfile$schema$lambda$lambda_0);
    return Unit_instance;
  }
  function ApplicationInterchangeProfile$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'CDA Supported - Card supports Combined Dynamic Data Authentication and Application Cryptogram Generation');
    $this$byte.w9(1, 'DDA Supported - Card supports Dynamic Data Authentication');
    $this$byte.w9(2, 'SDA Supported - Card supports Static Data Authentication');
    $this$byte.w9(3, 'Cardholder Verification is supported');
    $this$byte.w9(4, 'Terminal Risk Management is to be performed');
    $this$byte.w9(5, 'Issuer Authentication is supported');
    $this$byte.w9(6, 'On-device Cardholder Verification is supported');
    $this$byte.ia(7);
    return Unit_instance;
  }
  function ApplicationInterchangeProfile$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'EMV Mode supported');
    $this$byte.w9(1, 'Contactless EMV Mode supported');
    $this$byte.ja(numberRangeToNumber(2, 7));
    return Unit_instance;
  }
  function ApplicationInterchangeProfile() {
    ApplicationInterchangeProfile_instance = this;
    var tmp = this;
    tmp.if_1 = bitfield('Application Interchange Profile', 2, ApplicationInterchangeProfile$schema$lambda);
    this.jf_1 = new BitFieldExplainer(this.if_1);
  }
  protoOf(ApplicationInterchangeProfile).le = function (value, lineSeparator) {
    return this.jf_1.le(value, lineSeparator);
  };
  protoOf(ApplicationInterchangeProfile).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var ApplicationInterchangeProfile_instance;
  function ApplicationInterchangeProfile_getInstance() {
    if (ApplicationInterchangeProfile_instance == null)
      new ApplicationInterchangeProfile();
    return ApplicationInterchangeProfile_instance;
  }
  function ApplicationLifeCycleData$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1', ApplicationLifeCycleData$schema$lambda$lambda);
    return Unit_instance;
  }
  function ApplicationLifeCycleData$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Application Not Yet Active - Application is not yet active');
    $this$byte.w9(1, 'Application Active - Application is active');
    $this$byte.w9(2, 'Application Suspended - Application is suspended');
    $this$byte.w9(3, 'Application Terminated - Application is terminated');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function ApplicationLifeCycleData() {
    ApplicationLifeCycleData_instance = this;
    var tmp = this;
    tmp.kf_1 = bitfield('Application Life Cycle Data', 1, ApplicationLifeCycleData$schema$lambda);
    this.lf_1 = new BitFieldExplainer(this.kf_1);
  }
  protoOf(ApplicationLifeCycleData).le = function (value, lineSeparator) {
    return this.lf_1.le(value, lineSeparator);
  };
  protoOf(ApplicationLifeCycleData).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var ApplicationLifeCycleData_instance;
  function ApplicationLifeCycleData_getInstance() {
    if (ApplicationLifeCycleData_instance == null)
      new ApplicationLifeCycleData();
    return ApplicationLifeCycleData_instance;
  }
  function ApplicationPriorityIndicator$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1', ApplicationPriorityIndicator$schema$lambda$lambda);
    return Unit_instance;
  }
  function ApplicationPriorityIndicator$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Priority - Application has priority');
    $this$byte.ja(numberRangeToNumber(1, 7));
    return Unit_instance;
  }
  function ApplicationPriorityIndicator() {
    ApplicationPriorityIndicator_instance = this;
    var tmp = this;
    tmp.mf_1 = bitfield('Application Priority Indicator', 1, ApplicationPriorityIndicator$schema$lambda);
    this.nf_1 = new BitFieldExplainer(this.mf_1);
  }
  protoOf(ApplicationPriorityIndicator).le = function (value, lineSeparator) {
    return this.nf_1.le(value, lineSeparator);
  };
  protoOf(ApplicationPriorityIndicator).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var ApplicationPriorityIndicator_instance;
  function ApplicationPriorityIndicator_getInstance() {
    if (ApplicationPriorityIndicator_instance == null)
      new ApplicationPriorityIndicator();
    return ApplicationPriorityIndicator_instance;
  }
  function ApplicationReferenceCurrency() {
    this.of_1 = 3;
    this.pf_1 = 12;
    this.qf_1 = 3;
  }
  protoOf(ApplicationReferenceCurrency).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var containsArg = value.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!(3 <= containsArg ? containsArg <= 12 : false)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.ApplicationReferenceCurrency.explain.<anonymous>' call
      var message = 'Application Reference Currency must be between 3 and 12 characters long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((value.length % 3 | 0) === 0)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.ApplicationReferenceCurrency.explain.<anonymous>' call
      var message_0 = 'Application Reference Currency must have a length that is a multiple of 3';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var explanation = new Explanation(lineSeparator);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = chunked(value, 3).m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.emv.explain.ApplicationReferenceCurrency.explain.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (checkIndexOverflow(tmp1) > 0) {
        explanation.ce(LineSeparator_getInstance());
      }
      var tmp0_safe_receiver = Companion_instance_12.sf(toInt(item));
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wf_1;
      var description = tmp1_elvis_lhs == null ? 'Unknown Currency Code' : tmp1_elvis_lhs;
      explanation.ce(new Line(description));
    }
    return explanation;
  };
  protoOf(ApplicationReferenceCurrency).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  var ApplicationReferenceCurrency_instance;
  function ApplicationReferenceCurrency_getInstance() {
    return ApplicationReferenceCurrency_instance;
  }
  function ApplicationUsageControl$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Transaction Types', ApplicationUsageControl$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - Additional Transaction Types', ApplicationUsageControl$schema$lambda$lambda_0);
    return Unit_instance;
  }
  function ApplicationUsageControl$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Domestic Cash Transactions - Domestic cash transactions are allowed');
    $this$byte.w9(1, 'International Cash Transactions - International cash transactions are allowed');
    $this$byte.w9(2, 'Domestic Goods - Domestic goods purchases are allowed');
    $this$byte.w9(3, 'International Goods - International goods purchases are allowed');
    $this$byte.w9(4, 'Domestic Services - Domestic services purchases are allowed');
    $this$byte.w9(5, 'International Services - International services purchases are allowed');
    $this$byte.w9(6, 'Domestic ATM - Domestic ATM transactions are allowed');
    $this$byte.w9(7, 'International ATM - International ATM transactions are allowed');
    return Unit_instance;
  }
  function ApplicationUsageControl$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Domestic Cashback - Domestic cashback transactions are allowed');
    $this$byte.w9(1, 'International Cashback - International cashback transactions are allowed');
    $this$byte.ja(numberRangeToNumber(2, 7));
    return Unit_instance;
  }
  function ApplicationUsageControl() {
    ApplicationUsageControl_instance = this;
    var tmp = this;
    tmp.xf_1 = bitfield('Application Usage Control', 2, ApplicationUsageControl$schema$lambda);
    this.yf_1 = new BitFieldExplainer(this.xf_1);
  }
  protoOf(ApplicationUsageControl).le = function (value, lineSeparator) {
    return this.yf_1.le(value, lineSeparator);
  };
  protoOf(ApplicationUsageControl).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var ApplicationUsageControl_instance;
  function ApplicationUsageControl_getInstance() {
    if (ApplicationUsageControl_instance == null)
      new ApplicationUsageControl();
    return ApplicationUsageControl_instance;
  }
  function AuthorisationResponseCode() {
  }
  protoOf(AuthorisationResponseCode).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value.length === 2)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.AuthorisationResponseCode.explain.<anonymous>' call
      var message = 'Authorisation Response Code must be exactly 2 characters long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(this.zf(value)));
    return explanation;
  };
  protoOf(AuthorisationResponseCode).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  protoOf(AuthorisationResponseCode).zf = function (value) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    switch (value.toUpperCase()) {
      case '00':
        return 'Approved';
      case '01':
        return 'Refer to card issuer';
      case '02':
        return 'Refer to card issuer, special condition';
      case '03':
        return 'Invalid merchant';
      case '04':
        return 'Pick up card';
      case '05':
        return 'Do not honour';
      case '06':
        return 'Error';
      case '07':
        return 'Pick up card, special condition';
      case '08':
        return 'Honour with identification';
      case '10':
        return 'Partial approval';
      case '11':
        return 'Approved (VIP)';
      case '12':
        return 'Invalid transaction';
      case '13':
        return 'Invalid amount';
      case '14':
        return 'Invalid card number';
      case '15':
        return 'No such issuer';
      case '19':
        return 'Re-enter transaction';
      case '21':
        return 'No action taken';
      case '25':
        return 'Unable to locate record on file';
      case '30':
        return 'Format error';
      case '41':
        return 'Lost card, pick up';
      case '43':
        return 'Stolen card, pick up';
      case '51':
        return 'Insufficient funds';
      case '52':
        return 'No checking account';
      case '53':
        return 'No savings account';
      case '54':
        return 'Expired card';
      case '55':
        return 'Incorrect PIN';
      case '57':
        return 'Transaction not permitted to cardholder';
      case '58':
        return 'Transaction not permitted to terminal';
      case '59':
        return 'Suspected fraud';
      case '61':
        return 'Exceeds withdrawal amount limit';
      case '62':
        return 'Restricted card';
      case '63':
        return 'Security violation';
      case '65':
        return 'Exceeds withdrawal frequency limit';
      case '68':
        return 'Response received too late';
      case '75':
        return 'Allowable number of PIN tries exceeded';
      case '76':
        return 'Unable to locate previous message';
      case '77':
        return 'Repeat or reversal data inconsistent';
      case '78':
        return 'Blocked, first used';
      case '80':
        return 'Visa transactions: credit issuer unavailable';
      case '81':
        return 'PIN cryptographic error found';
      case '82':
        return 'Negative CAM, dCVV, iCVV, or CVV results';
      case '83':
        return 'Unable to verify PIN';
      case '85':
        return 'No reason to decline';
      case '86':
        return 'Cannot verify PIN';
      case '91':
        return 'Issuer or switch inoperative';
      case '92':
        return 'Financial institution or intermediate network unknown';
      case '93':
        return 'Transaction cannot be completed';
      case '94':
        return 'Duplicate transmission';
      case '96':
        return 'System malfunction';
      case 'Y1':
        return 'Offline approved';
      case 'Y3':
        return 'Offline approved';
      case 'Z1':
        return 'Offline declined';
      case 'Z3':
        return 'Offline declined';
      default:
        return 'Unknown (' + value + ')';
    }
  };
  var AuthorisationResponseCode_instance;
  function AuthorisationResponseCode_getInstance() {
    return AuthorisationResponseCode_instance;
  }
  function CVMResults$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - CVM Performed', CVMResults$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - CVM Condition', CVMResults$schema$lambda$lambda_0);
    $this$bitfield.s9(3, 'Byte 3 - CVM Result', CVMResults$schema$lambda$lambda_1);
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda($this$byte) {
    $this$byte.ja(numberRangeToNumber(0, 0));
    $this$byte.da(1, 'Apply Succeeding CV Rule', CVMResults$schema$lambda$lambda$lambda);
    var tmp = numberRangeToNumber(2, 7);
    $this$byte.ea(tmp, 'CVM Type', CVMResults$schema$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda$lambda($this$bit) {
    $this$bit.la('Apply succeeding CV Rule if this CVM is unsuccessful');
    $this$bit.ma('Fail cardholder verification if this CVM is unsuccessful');
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda$lambda_0($this$enum) {
    $this$enum.ka(0, 'Fail CVM processing');
    $this$enum.ka(1, 'Plaintext PIN verification performed by ICC');
    $this$enum.ka(2, 'Enciphered PIN verified online');
    $this$enum.ka(3, 'Plaintext PIN verification performed by ICC and signature (paper)');
    $this$enum.ka(4, 'Enciphered PIN verification performed by ICC');
    $this$enum.ka(5, 'Enciphered PIN verification performed by ICC and signature (paper)');
    $this$enum.ka(30, 'Signature (paper)');
    $this$enum.ka(31, 'No CVM required');
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda_0($this$byte) {
    var tmp = numberRangeToNumber(0, 7);
    $this$byte.ea(tmp, 'Condition Code', CVMResults$schema$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda$lambda_1($this$enum) {
    $this$enum.ka(0, 'Always');
    $this$enum.ka(1, 'If unattended cash');
    $this$enum.ka(2, 'If not unattended cash and not manual cash and not purchase with cashback');
    $this$enum.ka(3, 'If terminal supports the CVM');
    $this$enum.ka(4, 'If manual cash');
    $this$enum.ka(5, 'If purchase with cashback');
    $this$enum.ka(6, 'If transaction is in the application currency and is under X value');
    $this$enum.ka(7, 'If transaction is in the application currency and is over X value');
    $this$enum.ka(8, 'If transaction is in the application currency and is under Y value');
    $this$enum.ka(9, 'If transaction is in the application currency and is over Y value');
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda_1($this$byte) {
    var tmp = numberRangeToNumber(0, 7);
    $this$byte.ea(tmp, 'Result', CVMResults$schema$lambda$lambda$lambda_2);
    return Unit_instance;
  }
  function CVMResults$schema$lambda$lambda$lambda_2($this$enum) {
    $this$enum.ka(0, 'Unknown');
    $this$enum.ka(1, 'Failed');
    $this$enum.ka(2, 'Successful');
    return Unit_instance;
  }
  function CVMResults() {
    CVMResults_instance = this;
    var tmp = this;
    tmp.ag_1 = bitfield('CVM Results', 3, CVMResults$schema$lambda);
    this.bg_1 = new BitFieldExplainer(this.ag_1);
  }
  protoOf(CVMResults).le = function (value, lineSeparator) {
    return this.bg_1.le(value, lineSeparator);
  };
  protoOf(CVMResults).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var CVMResults_instance;
  function CVMResults_getInstance() {
    if (CVMResults_instance == null)
      new CVMResults();
    return CVMResults_instance;
  }
  function CardTransactionQualifiers$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Contactless Support', CardTransactionQualifiers$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - Additional Qualifiers', CardTransactionQualifiers$schema$lambda$lambda_0);
    return Unit_instance;
  }
  function CardTransactionQualifiers$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Online Cryptogram Required - Online cryptogram required');
    $this$byte.w9(1, 'CVM Required - CVM required');
    $this$byte.w9(2, 'Contact Chip - (Contact Chip) Offline PIN Required');
    $this$byte.ja(numberRangeToNumber(3, 6));
    $this$byte.w9(7, 'Go Online If Offline Data Authentication Fails And Reader Is Online Capable');
    return Unit_instance;
  }
  function CardTransactionQualifiers$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Online PIN Required - Online PIN required');
    $this$byte.w9(1, 'Signature Required - Signature required');
    $this$byte.w9(2, 'Issuer Update Processing Supported - Issuer update processing supported');
    $this$byte.w9(3, 'Consumer Device CVM Performed - Consumer device CVM performed');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function CardTransactionQualifiers() {
    CardTransactionQualifiers_instance = this;
    var tmp = this;
    tmp.cg_1 = bitfield('Card Transaction Qualifiers', 2, CardTransactionQualifiers$schema$lambda);
    this.dg_1 = new BitFieldExplainer(this.cg_1);
  }
  protoOf(CardTransactionQualifiers).le = function (value, lineSeparator) {
    return this.dg_1.le(value, lineSeparator);
  };
  protoOf(CardTransactionQualifiers).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var CardTransactionQualifiers_instance;
  function CardTransactionQualifiers_getInstance() {
    if (CardTransactionQualifiers_instance == null)
      new CardTransactionQualifiers();
    return CardTransactionQualifiers_instance;
  }
  function CryptogramInformationData$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1', CryptogramInformationData$schema$lambda$lambda);
    return Unit_instance;
  }
  function CryptogramInformationData$schema$lambda$lambda($this$byte) {
    var tmp = numberRangeToNumber(0, 1);
    $this$byte.ea(tmp, 'Cryptogram Type', CryptogramInformationData$schema$lambda$lambda$lambda);
    $this$byte.ja(numberRangeToNumber(2, 3));
    $this$byte.da(4, 'Issuer Application Data (IAD)', CryptogramInformationData$schema$lambda$lambda$lambda_0);
    $this$byte.da(5, 'Application Transaction Counter (ATC)', CryptogramInformationData$schema$lambda$lambda$lambda_1);
    var tmp_0 = numberRangeToNumber(6, 7);
    $this$byte.ea(tmp_0, 'Cryptogram Type', CryptogramInformationData$schema$lambda$lambda$lambda_2);
    return Unit_instance;
  }
  function CryptogramInformationData$schema$lambda$lambda$lambda($this$enum) {
    $this$enum.ka(0, 'Application Authentication Cryptogram (AAC)');
    $this$enum.ka(1, 'Authorization Request Cryptogram (ARQC)');
    $this$enum.ka(2, 'Transaction Certificate (TC)');
    $this$enum.ka(3, 'Reserved for Future Use');
    return Unit_instance;
  }
  function CryptogramInformationData$schema$lambda$lambda$lambda_0($this$bit) {
    $this$bit.la('Issuer Application Data (IAD) - IAD provided');
    $this$bit.ma('Issuer Application Data (IAD) - IAD not provided');
    return Unit_instance;
  }
  function CryptogramInformationData$schema$lambda$lambda$lambda_1($this$bit) {
    $this$bit.la('Application Transaction Counter (ATC) - ATC provided');
    $this$bit.ma('Application Transaction Counter (ATC) - ATC not provided');
    return Unit_instance;
  }
  function CryptogramInformationData$schema$lambda$lambda$lambda_2($this$enum) {
    $this$enum.ka(0, 'Application Authentication Cryptogram (AAC)');
    $this$enum.ka(1, 'Authorization Request Cryptogram (ARQC)');
    $this$enum.ka(2, 'Transaction Certificate (TC)');
    $this$enum.ka(3, 'Reserved for Future Use');
    return Unit_instance;
  }
  function CryptogramInformationData() {
    CryptogramInformationData_instance = this;
    var tmp = this;
    tmp.eg_1 = bitfield('Cryptogram Information Data', 1, CryptogramInformationData$schema$lambda);
    this.fg_1 = new BitFieldExplainer(this.eg_1);
  }
  protoOf(CryptogramInformationData).le = function (value, lineSeparator) {
    return this.fg_1.le(value, lineSeparator);
  };
  protoOf(CryptogramInformationData).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var CryptogramInformationData_instance;
  function CryptogramInformationData_getInstance() {
    if (CryptogramInformationData_instance == null)
      new CryptogramInformationData();
    return CryptogramInformationData_instance;
  }
  function extractAmount($this, data, offset) {
    var amount = new Long(0, 0);
    var inductionVariable = 0;
    if (inductionVariable < 4)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        amount = amount.v1(8).x1(toLong(data[offset + i | 0] & 255));
      }
       while (inductionVariable < 4);
    return amount;
  }
  function CvmList() {
    this.gg_1 = 8;
    this.hg_1 = 2;
    this.ig_1 = 64;
  }
  protoOf(CvmList).le = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value.length >= 8)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.CvmList.explain.<anonymous>' call
      var message = 'CVM List must be at least 8 bytes long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((value.length - 8 | 0) % 2 | 0) === 0)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.CvmList.explain.<anonymous>' call
      var message_0 = 'CVM List rules must be in pairs of 2 bytes';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var explanation = new Explanation(lineSeparator);
    var amountX = extractAmount(this, value, 0);
    var amountY = extractAmount(this, value, 4);
    explanation.ce(new Line('Amount X: ' + amountX.toString()));
    explanation.ce(new Line('Amount Y: ' + amountY.toString()));
    var ruleCount = (value.length - 8 | 0) / 2 | 0;
    if (ruleCount === 0) {
      explanation.ce(LineSeparator_getInstance());
      explanation.ce(new Line('No CVM rules defined'));
      return explanation;
    }
    var inductionVariable = 0;
    if (inductionVariable < ruleCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        explanation.ce(LineSeparator_getInstance());
        var offset = 8 + imul(i, 2) | 0;
        var cvmByte = value[offset] & 255;
        var conditionByte = value[offset + 1 | 0] & 255;
        var ruleNumber = i + 1 | 0;
        explanation.ce(new Line('Rule ' + ruleNumber + ':'));
        var applyNext = !((cvmByte & 64) === 0);
        var cvmCode = cvmByte & 63;
        explanation.ce(new Line('  CVM: ' + this.jg(cvmCode)));
        if (applyNext) {
          explanation.ce(new Line('  Apply succeeding CV Rule if this CVM is unsuccessful'));
        } else {
          explanation.ce(new Line('  Fail cardholder verification if this CVM is unsuccessful'));
        }
        explanation.ce(new Line('  Condition: ' + this.kg(conditionByte)));
      }
       while (inductionVariable < ruleCount);
    return explanation;
  };
  protoOf(CvmList).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  protoOf(CvmList).jg = function (code) {
    var tmp;
    if (code === 0) {
      tmp = 'Fail CVM processing';
    } else if (code === 1) {
      tmp = 'Plaintext PIN verification performed by ICC';
    } else if (code === 2) {
      tmp = 'Enciphered PIN verified online';
    } else if (code === 3) {
      tmp = 'Plaintext PIN verification performed by ICC and signature (paper)';
    } else if (code === 4) {
      tmp = 'Enciphered PIN verification performed by ICC';
    } else if (code === 5) {
      tmp = 'Enciphered PIN verification performed by ICC and signature (paper)';
    } else if (code === 30) {
      tmp = 'Signature (paper)';
    } else if (code === 31) {
      tmp = 'No CVM required';
    } else if (code === 32) {
      tmp = 'No CVM required (amount below threshold)';
    } else if (6 <= code ? code <= 29 : false) {
      tmp = 'Reserved for future use by this specification';
    } else if (33 <= code ? code <= 62 : false) {
      tmp = 'Reserved for use by individual payment systems';
    } else if (code === 63) {
      tmp = 'Not available for use';
    } else {
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'Unknown CVM code (0x' + padStart(toString_1(code, 16), 2, _Char___init__impl__6a9atx(48)).toUpperCase() + ')';
    }
    return tmp;
  };
  protoOf(CvmList).kg = function (condition) {
    var tmp;
    if (condition === 0) {
      tmp = 'Always';
    } else if (condition === 1) {
      tmp = 'If unattended cash';
    } else if (condition === 2) {
      tmp = 'If not unattended cash and not manual cash and not purchase with cashback';
    } else if (condition === 3) {
      tmp = 'If terminal supports the CVM';
    } else if (condition === 4) {
      tmp = 'If manual cash';
    } else if (condition === 5) {
      tmp = 'If purchase with cashback';
    } else if (condition === 6) {
      tmp = 'If transaction is in the application currency and is under X value';
    } else if (condition === 7) {
      tmp = 'If transaction is in the application currency and is over X value';
    } else if (condition === 8) {
      tmp = 'If transaction is in the application currency and is under Y value';
    } else if (condition === 9) {
      tmp = 'If transaction is in the application currency and is over Y value';
    } else if (10 <= condition ? condition <= 127 : false) {
      tmp = 'Reserved for use by this specification';
    } else if (128 <= condition ? condition <= 255 : false) {
      tmp = 'Reserved for use by individual payment systems';
    } else {
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'Unknown condition (0x' + padStart(toString_1(condition, 16), 2, _Char___init__impl__6a9atx(48)).toUpperCase() + ')';
    }
    return tmp;
  };
  var CvmList_instance;
  function CvmList_getInstance() {
    return CvmList_instance;
  }
  function FormFactor$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Consumer Payment Device Form Factor', FormFactor$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - Consumer Payment Device Features', FormFactor$schema$lambda$lambda_0);
    $this$bitfield.s9(3, 'Byte 3 - Contactless Transaction Technology', FormFactor$schema$lambda$lambda_1);
    $this$bitfield.s9(4, 'Byte 4 - Payment Transaction Technology', FormFactor$schema$lambda$lambda_2);
    return Unit_instance;
  }
  function FormFactor$schema$lambda$lambda($this$byte) {
    var tmp = numberRangeToNumber(0, 3);
    $this$byte.ea(tmp, 'Consumer Payment Device Form Factor', FormFactor$schema$lambda$lambda$lambda);
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function FormFactor$schema$lambda$lambda$lambda($this$enum) {
    $this$enum.ka(0, 'Not Specified');
    $this$enum.ka(1, 'Standard Card');
    $this$enum.ka(2, 'Mini-Card');
    $this$enum.ka(3, 'Non-Card Form Factor');
    $this$enum.ka(4, 'Consumer Mobile Phone');
    $this$enum.ka(5, 'Wristband');
    return Unit_instance;
  }
  function FormFactor$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Passcode Capable - Passcode capable');
    $this$byte.w9(1, 'Signature Panel - Has signature panel');
    $this$byte.w9(2, 'Hologram - Has hologram');
    $this$byte.w9(3, 'CVV2 - CVV2 present');
    $this$byte.w9(4, 'Two-Way Messaging - Supports two-way messaging');
    $this$byte.w9(5, 'Cloud-Based Payment - Cloud-based payment credentials');
    $this$byte.ja(numberRangeToNumber(6, 7));
    return Unit_instance;
  }
  function FormFactor$schema$lambda$lambda_1($this$byte) {
    var tmp = numberRangeToNumber(0, 3);
    $this$byte.ea(tmp, 'Contactless Interface Type', FormFactor$schema$lambda$lambda$lambda_0);
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function FormFactor$schema$lambda$lambda$lambda_0($this$enum) {
    $this$enum.ka(0, 'Not Specified');
    $this$enum.ka(1, 'Type A');
    $this$enum.ka(2, 'Type B');
    $this$enum.ka(3, 'Type B (MSD)');
    $this$enum.ka(4, 'Type A and B');
    return Unit_instance;
  }
  function FormFactor$schema$lambda$lambda_2($this$byte) {
    $this$byte.w9(0, 'Contact - Contact transaction capability');
    $this$byte.w9(1, 'Contactless EMV - Contactless EMV mode supported');
    $this$byte.w9(2, 'Contactless MSD - Contactless MSD mode supported');
    $this$byte.ja(numberRangeToNumber(3, 7));
    return Unit_instance;
  }
  function FormFactor() {
    FormFactor_instance = this;
    var tmp = this;
    tmp.lg_1 = bitfield('Form Factor Indicator', 4, FormFactor$schema$lambda);
    this.mg_1 = new BitFieldExplainer(this.lg_1);
  }
  protoOf(FormFactor).le = function (value, lineSeparator) {
    return this.mg_1.le(value, lineSeparator);
  };
  protoOf(FormFactor).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var FormFactor_instance;
  function FormFactor_getInstance() {
    if (FormFactor_instance == null)
      new FormFactor();
    return FormFactor_instance;
  }
  function IssuerActionCodeDefault() {
    IssuerActionCodeDefault_instance = this;
    ActionCode.call(this, EmvTagDescription_ISSUER_ACTION_CODE_DEFAULT_getInstance());
  }
  var IssuerActionCodeDefault_instance;
  function IssuerActionCodeDefault_getInstance() {
    if (IssuerActionCodeDefault_instance == null)
      new IssuerActionCodeDefault();
    return IssuerActionCodeDefault_instance;
  }
  function IssuerActionCodeDenial() {
    IssuerActionCodeDenial_instance = this;
    ActionCode.call(this, EmvTagDescription_ISSUER_ACTION_CODE_DENIAL_getInstance());
  }
  var IssuerActionCodeDenial_instance;
  function IssuerActionCodeDenial_getInstance() {
    if (IssuerActionCodeDenial_instance == null)
      new IssuerActionCodeDenial();
    return IssuerActionCodeDenial_instance;
  }
  function IssuerActionCodeOnline() {
    IssuerActionCodeOnline_instance = this;
    ActionCode.call(this, EmvTagDescription_ISSUER_ACTION_CODE_ONLINE_getInstance());
  }
  var IssuerActionCodeOnline_instance;
  function IssuerActionCodeOnline_getInstance() {
    if (IssuerActionCodeOnline_instance == null)
      new IssuerActionCodeOnline();
    return IssuerActionCodeOnline_instance;
  }
  function isVisaIad($this, value) {
    var cvn = value[1] & 255;
    switch (cvn) {
      case 10:
        return value.length >= 6;
      case 17:
      case 18:
        return value.length >= 8;
      default:
        return false;
    }
  }
  function explainVisaIad($this, value, explanation) {
    var dki = value[0] & 255;
    var cvn = value[1] & 255;
    explanation.ce(new Line('Format: Visa IAD'));
    explanation.ce(new Line('Derivation Key Index (DKI): ' + ('0x' + toHexByte(dki, $this))));
    explanation.ce(new Line('Cryptogram Version Number (CVN): ' + $this.rg(cvn)));
    explanation.ce(LineSeparator_getInstance());
    explanation.ce(new Line('Card Verification Results (CVR):'));
    switch (cvn) {
      case 10:
        explainCvn10Cvr($this, value, explanation);
        break;
      case 17:
      case 18:
        explainCvn17Cvr($this, value, explanation);
        break;
    }
    var cvrSize = cvn === 10 ? 4 : 6;
    var iddOffset = 2 + cvrSize | 0;
    if (iddOffset < value.length) {
      explanation.ce(LineSeparator_getInstance());
      var idd = sliceArray(value, until(iddOffset, value.length));
      explanation.ce(new Line('Issuer Discretionary Data: ' + toHexString_1(idd, $this)));
    }
  }
  function explainCvn10Cvr($this, value, explanation) {
    var b1 = value[2] & 255;
    var b2 = value[3] & 255;
    explainCvrByte1($this, b1, explanation);
    explainCvrByte2($this, b2, explanation);
    explainCvn10Byte3($this, value[4] & 255, explanation);
    var b4 = value[5] & 255;
    explanation.ce(new Line('  CVR Byte 4: 0x' + toHexByte(b4, $this)));
  }
  function explainCvn17Cvr($this, value, explanation) {
    var b1 = value[2] & 255;
    var b2 = value[3] & 255;
    explainCvrByte1($this, b1, explanation);
    explainCvrByte2($this, b2, explanation);
    explainCvn17Byte3($this, value[4] & 255, explanation);
    var inductionVariable = 4;
    if (inductionVariable <= 6)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = value[i + 1 | 0] & 255;
        explanation.ce(new Line('  CVR Byte ' + i + ': 0x' + toHexByte(b, $this)));
      }
       while (inductionVariable <= 6);
  }
  function explainCvrByte1($this, b1, explanation) {
    var acType2nd = b1 >> 6 & 3;
    explanation.ce(new Line('  AC Returned in 2nd Generate AC: ' + $this.sg(acType2nd)));
    var acType1st = b1 >> 4 & 3;
    explanation.ce(new Line('  AC Returned in 1st Generate AC: ' + $this.sg(acType1st)));
    addFlag($this, explanation, b1, 8, 'Offline PIN Verification Performed');
    addFlag($this, explanation, b1, 4, 'Offline PIN Verification Not Performed');
    addFlag($this, explanation, b1, 2, 'Unable to Go Online');
    addFlag($this, explanation, b1, 1, 'Last Online Transaction Not Completed');
  }
  function explainCvrByte2($this, b2, explanation) {
    var pinTryCounter = b2 >> 4 & 15;
    explanation.ce(new Line('  PIN Try Counter: ' + pinTryCounter));
    addFlag($this, explanation, b2, 8, 'Offline PIN Verification Successful');
    addFlag($this, explanation, b2, 4, 'Last Online ATC Register Mismatch');
    addFlag($this, explanation, b2, 2, 'Lower Consecutive Offline Limit Exceeded');
    addFlag($this, explanation, b2, 1, 'Upper Consecutive Offline Limit Exceeded');
  }
  function explainCvn10Byte3($this, b3, explanation) {
    addFlag($this, explanation, b3, 128, 'Issuer Authentication Failed');
    addFlag($this, explanation, b3, 64, 'Script Received');
    addFlag($this, explanation, b3, 32, 'Script Failed');
  }
  function explainCvn17Byte3($this, b3, explanation) {
    addFlag($this, explanation, b3, 128, 'Issuer Authentication Failed');
    addFlag($this, explanation, b3, 64, 'CIAC-Default Skipped on CAT3');
    addFlag($this, explanation, b3, 32, 'Script Received');
    addFlag($this, explanation, b3, 16, 'Script Failed');
    addFlag($this, explanation, b3, 8, 'Match Found in Additional Check Table');
    addFlag($this, explanation, b3, 4, 'No Match Found in Additional Check Table');
  }
  function addFlag($this, explanation, byte, mask, label) {
    var value = !((byte & mask) === 0) ? 'Yes' : 'No';
    explanation.ce(new Line('  ' + label + ': ' + value));
  }
  function toHexByte(_this__u8e3s4, $this) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return padStart(toString_1(_this__u8e3s4, 16), 2, _Char___init__impl__6a9atx(48)).toUpperCase();
  }
  function toHexString_1(_this__u8e3s4, $this) {
    return joinToString_0(_this__u8e3s4, '', VOID, VOID, VOID, VOID, IssuerApplicationData$toHexString$lambda);
  }
  function IssuerApplicationData$toHexString$lambda(it) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return padStart(toString_1(it & 255, 16), 2, _Char___init__impl__6a9atx(48)).toUpperCase();
  }
  function IssuerApplicationData() {
    this.og_1 = 6;
    this.pg_1 = 4;
    this.qg_1 = 6;
  }
  protoOf(IssuerApplicationData).le = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(value.length === 0)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.IssuerApplicationData.explain.<anonymous>' call
      var message = 'Issuer Application Data must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var explanation = new Explanation(lineSeparator);
    if (value.length >= 6 && isVisaIad(this, value)) {
      explainVisaIad(this, value, explanation);
    } else {
      explanation.ce(new Line('Raw Data: ' + toHexString_1(value, this)));
    }
    return explanation;
  };
  protoOf(IssuerApplicationData).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  protoOf(IssuerApplicationData).sg = function (acType) {
    switch (acType) {
      case 0:
        return 'AAC (Transaction Declined)';
      case 1:
        return 'TC (Transaction Approved)';
      case 2:
        return 'ARQC (Online Authorisation Requested)';
      case 3:
        return 'RFU';
      default:
        return 'Unknown';
    }
  };
  protoOf(IssuerApplicationData).rg = function (cvn) {
    switch (cvn) {
      case 10:
        return 'CVN 10 (0x0A)';
      case 17:
        return 'CVN 17 (0x11)';
      case 18:
        return 'CVN 18 (0x12)';
      default:
        return 'Unknown (0x' + toHexByte(cvn, this) + ')';
    }
  };
  var IssuerApplicationData_instance;
  function IssuerApplicationData_getInstance() {
    return IssuerApplicationData_instance;
  }
  function IssuerCountryCode() {
    IssuerCountryCode_instance = this;
    CountryCode.call(this, EmvTagDescription_ISSUER_COUNTRY_CODE_getInstance());
  }
  var IssuerCountryCode_instance;
  function IssuerCountryCode_getInstance() {
    if (IssuerCountryCode_instance == null)
      new IssuerCountryCode();
    return IssuerCountryCode_instance;
  }
  function IssuerCountryCodeAlpha2() {
  }
  protoOf(IssuerCountryCodeAlpha2).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var tmp = value.length;
    var tmp0_safe_receiver = EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA2_getInstance().cf_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w6_1))) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.IssuerCountryCodeAlpha2.explain.<anonymous>' call
      var message = 'Must be a valid country code in alpha2';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1_safe_receiver = Companion_instance_11.ug(value);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yg_1;
    var description = tmp2_elvis_lhs == null ? 'Unknown Country Code' : tmp2_elvis_lhs;
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(description));
    return explanation;
  };
  protoOf(IssuerCountryCodeAlpha2).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  var IssuerCountryCodeAlpha2_instance;
  function IssuerCountryCodeAlpha2_getInstance() {
    return IssuerCountryCodeAlpha2_instance;
  }
  function IssuerCountryCodeAlpha3() {
  }
  protoOf(IssuerCountryCodeAlpha3).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var tmp = value.length;
    var tmp0_safe_receiver = EmvTagDescription_ISSUER_COUNTRY_CODE_ALPHA3_getInstance().cf_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w6_1))) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.IssuerCountryCodeAlpha3.explain.<anonymous>' call
      var message = 'Must be a valid country code in alpha3';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1_safe_receiver = Companion_instance_11.bh(value);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yg_1;
    var description = tmp2_elvis_lhs == null ? 'Unknown Country Code' : tmp2_elvis_lhs;
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(description));
    return explanation;
  };
  protoOf(IssuerCountryCodeAlpha3).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  var IssuerCountryCodeAlpha3_instance;
  function IssuerCountryCodeAlpha3_getInstance() {
    return IssuerCountryCodeAlpha3_instance;
  }
  function LanguagePreference() {
    this.ch_1 = 2;
    this.dh_1 = 8;
    this.eh_1 = 2;
    this.fh_1 = 2;
  }
  protoOf(LanguagePreference).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var containsArg = value.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!(2 <= containsArg ? containsArg <= 8 : false)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.LanguagePreference.explain.<anonymous>' call
      var message = 'Language Preference must be 2, 4, 6, or 8 characters long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((value.length % 2 | 0) === 0)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.LanguagePreference.explain.<anonymous>' call
      var message_0 = 'Language Preference must have an even number of characters';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var explanation = new Explanation(lineSeparator);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = chunked(value, 2).m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.emv.explain.LanguagePreference.explain.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (checkIndexOverflow(tmp1) > 0) {
        explanation.ce(LineSeparator_getInstance());
      }
      var tmp0_safe_receiver = Companion_instance_13.gh(item);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kh_1;
      var description = tmp1_elvis_lhs == null ? 'Unknown Language Code' : tmp1_elvis_lhs;
      explanation.ce(new Line(description));
    }
    return explanation;
  };
  protoOf(LanguagePreference).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  var LanguagePreference_instance;
  function LanguagePreference_getInstance() {
    return LanguagePreference_instance;
  }
  function MerchantCategoryCode() {
  }
  protoOf(MerchantCategoryCode).hf = function (value, lineSeparator) {
    var tmp0_elvis_lhs = Companion_instance_14.sf(value.v());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new Explanation(lineSeparator);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.github.rafaelrabeloit.emv.explain.MerchantCategoryCode.explain.<anonymous>' call
      this_0.ce(new Line('Unknown Merchant Category Code'));
      return this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mccDescription = tmp;
    var explanation = new Explanation(lineSeparator);
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.github.rafaelrabeloit.emv.explain.MerchantCategoryCode.explain.<anonymous>' call
    explanation.ce(new Line('Description: ' + mccDescription.oh_1));
    explanation.ce(LineSeparator_getInstance());
    explanation.ce(new Line('Category: ' + mccDescription.ph_1));
    return explanation;
  };
  protoOf(MerchantCategoryCode).de = function (value, lineSeparator) {
    return this.hf(value instanceof Long ? value : THROW_CCE(), lineSeparator);
  };
  var MerchantCategoryCode_instance;
  function MerchantCategoryCode_getInstance() {
    return MerchantCategoryCode_instance;
  }
  function PosEntryMode() {
  }
  protoOf(PosEntryMode).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value.length === 2)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.PosEntryMode.explain.<anonymous>' call
      var message = 'POS Entry Mode must be exactly 2 characters long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(this.zf(value)));
    return explanation;
  };
  protoOf(PosEntryMode).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  protoOf(PosEntryMode).zf = function (value) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    switch (value.toUpperCase()) {
      case '00':
        return 'Unspecified';
      case '01':
        return 'Manual key entry';
      case '02':
        return 'Magnetic stripe';
      case '03':
        return 'Barcode';
      case '04':
        return 'Optical Character Recognition (OCR)';
      case '05':
        return 'Integrated circuit card (ICC). CVV can be checked.';
      case '07':
        return 'Contactless EMV/chip (proximity chip)';
      case '08':
        return 'Credential on file';
      case '09':
        return 'E-commerce';
      case '10':
        return 'Credentials on file';
      case '79':
        return 'Fallback from integrated circuit card (ICC) to magnetic stripe';
      case '80':
        return 'Fallback from contactless interface to magnetic stripe';
      case '81':
        return 'E-commerce with optional identity verification';
      case '82':
        return 'Auto-entry via server (issuer, acquirer, or third party)';
      case '85':
        return 'Integrated circuit card (ICC). CVV may not be checked.';
      case '90':
        return 'Magnetic stripe as read from track 2';
      case '91':
        return 'Contactless magnetic stripe (MSD proximity)';
      case '95':
        return 'Integrated circuit card (ICC). CVV not reliable.';
      default:
        return 'Unknown (' + value + ')';
    }
  };
  var PosEntryMode_instance;
  function PosEntryMode_getInstance() {
    return PosEntryMode_instance;
  }
  function ServiceCode() {
    this.qh_1 = 3;
    this.rh_1 = 4;
  }
  protoOf(ServiceCode).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var containsArg = value.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!(3 <= containsArg ? containsArg <= 4 : false)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.ServiceCode.explain.<anonymous>' call
      var message = 'Service Code must be 3 or 4 characters long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var digits = takeLast(value, 3);
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line('Digit 1 (Interchange): ' + this.sh(charSequenceGet(digits, 0))));
    explanation.ce(new Line('Digit 2 (Authorization): ' + this.th(charSequenceGet(digits, 1))));
    explanation.ce(new Line('Digit 3 (Services/PIN): ' + this.uh(charSequenceGet(digits, 2))));
    return explanation;
  };
  protoOf(ServiceCode).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  protoOf(ServiceCode).sh = function (digit) {
    return digit === _Char___init__impl__6a9atx(49) ? 'International interchange OK' : digit === _Char___init__impl__6a9atx(50) ? 'International interchange, use IC (chip) where feasible' : digit === _Char___init__impl__6a9atx(53) ? 'National interchange only except under bilateral agreement' : digit === _Char___init__impl__6a9atx(54) ? 'National interchange only except under bilateral agreement, use IC (chip) where feasible' : digit === _Char___init__impl__6a9atx(55) ? 'No interchange except under bilateral agreement (closed loop)' : digit === _Char___init__impl__6a9atx(57) ? 'Test' : 'Reserved (' + toString_2(digit) + ')';
  };
  protoOf(ServiceCode).th = function (digit) {
    return digit === _Char___init__impl__6a9atx(48) ? 'Normal' : digit === _Char___init__impl__6a9atx(50) ? 'Contact issuer via online means' : digit === _Char___init__impl__6a9atx(52) ? 'Contact issuer via online means except under bilateral agreement' : 'Reserved (' + toString_2(digit) + ')';
  };
  protoOf(ServiceCode).uh = function (digit) {
    return digit === _Char___init__impl__6a9atx(48) ? 'No restrictions, PIN required' : digit === _Char___init__impl__6a9atx(49) ? 'No restrictions' : digit === _Char___init__impl__6a9atx(50) ? 'Goods and services only (no cash)' : digit === _Char___init__impl__6a9atx(51) ? 'ATM only, PIN required' : digit === _Char___init__impl__6a9atx(52) ? 'Cash only' : digit === _Char___init__impl__6a9atx(53) ? 'Goods and services only (no cash), PIN required' : digit === _Char___init__impl__6a9atx(54) ? 'No restrictions, use PIN where feasible' : digit === _Char___init__impl__6a9atx(55) ? 'Goods and services only (no cash), use PIN where feasible' : 'Reserved (' + toString_2(digit) + ')';
  };
  var ServiceCode_instance;
  function ServiceCode_getInstance() {
    return ServiceCode_instance;
  }
  function TVR() {
    TVR_instance = this;
    ActionCode.call(this, EmvTagDescription_TERMINAL_VERIFICATION_RESULTS_getInstance());
  }
  var TVR_instance;
  function TVR_getInstance() {
    if (TVR_instance == null)
      new TVR();
    return TVR_instance;
  }
  function TerminalCapabilities$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Card Data Input Capability', TerminalCapabilities$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - CVM Capability', TerminalCapabilities$schema$lambda$lambda_0);
    $this$bitfield.s9(3, 'Byte 3 - Security Capability', TerminalCapabilities$schema$lambda$lambda_1);
    return Unit_instance;
  }
  function TerminalCapabilities$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Manual Key Entry - Terminal can accept manual key entry');
    $this$byte.w9(1, 'Magnetic Stripe - Terminal can read magnetic stripe');
    $this$byte.w9(2, 'ICC - Terminal can read ICC');
    $this$byte.ja(numberRangeToNumber(3, 7));
    return Unit_instance;
  }
  function TerminalCapabilities$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Plaintext PIN for ICC Verification - Terminal can accept plaintext PIN for ICC verification');
    $this$byte.w9(1, 'Enciphered PIN for Online Verification - Terminal can accept enciphered PIN for online verification');
    $this$byte.w9(2, 'Signature - Terminal can accept signature');
    $this$byte.ja(numberRangeToNumber(3, 7));
    return Unit_instance;
  }
  function TerminalCapabilities$schema$lambda$lambda_1($this$byte) {
    $this$byte.w9(0, 'SDA - Terminal can perform Static Data Authentication');
    $this$byte.w9(1, 'DDA - Terminal can perform Dynamic Data Authentication');
    $this$byte.w9(2, 'CDA - Terminal can perform Combined DDA/AC Generation');
    $this$byte.ja(numberRangeToNumber(3, 7));
    return Unit_instance;
  }
  function TerminalCapabilities() {
    TerminalCapabilities_instance = this;
    var tmp = this;
    tmp.vh_1 = bitfield('Terminal Capabilities', 3, TerminalCapabilities$schema$lambda);
    this.wh_1 = new BitFieldExplainer(this.vh_1);
  }
  protoOf(TerminalCapabilities).le = function (value, lineSeparator) {
    return this.wh_1.le(value, lineSeparator);
  };
  protoOf(TerminalCapabilities).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var TerminalCapabilities_instance;
  function TerminalCapabilities_getInstance() {
    if (TerminalCapabilities_instance == null)
      new TerminalCapabilities();
    return TerminalCapabilities_instance;
  }
  function TerminalCountryCode() {
    TerminalCountryCode_instance = this;
    CountryCode.call(this, EmvTagDescription_TERMINAL_COUNTRY_CODE_getInstance());
  }
  var TerminalCountryCode_instance;
  function TerminalCountryCode_getInstance() {
    if (TerminalCountryCode_instance == null)
      new TerminalCountryCode();
    return TerminalCountryCode_instance;
  }
  function TerminalTransactionQualifiers$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Contactless EMV Mode Support', TerminalTransactionQualifiers$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - Cardholder Verification and Online Capabilities', TerminalTransactionQualifiers$schema$lambda$lambda_0);
    $this$bitfield.s9(3, 'Byte 3 - Transaction Qualifiers', TerminalTransactionQualifiers$schema$lambda$lambda_1);
    $this$bitfield.s9(4, 'Byte 4 - Contactless Transaction Limitations', TerminalTransactionQualifiers$schema$lambda$lambda_2);
    return Unit_instance;
  }
  function TerminalTransactionQualifiers$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'EMV Mode Supported');
    $this$byte.w9(1, 'Magstripe Mode Supported');
    $this$byte.w9(2, 'ODA for EMV Mode Supported');
    $this$byte.w9(3, 'CDA Supported');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function TerminalTransactionQualifiers$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Reader Supports Online PIN');
    $this$byte.w9(1, 'Reader Supports Signature');
    $this$byte.w9(2, 'Reader Supports Consumer Device CVM');
    $this$byte.w9(3, 'Reader Supports Contact Chip');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function TerminalTransactionQualifiers$schema$lambda$lambda_1($this$byte) {
    $this$byte.w9(0, 'Reader is Offline Only');
    $this$byte.w9(1, 'Online Cryptogram Required');
    $this$byte.w9(2, 'Receipt Required');
    $this$byte.w9(3, 'CVM Required');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function TerminalTransactionQualifiers$schema$lambda$lambda_2($this$byte) {
    $this$byte.w9(0, 'No Contactless EMV Transaction Supported');
    $this$byte.w9(1, 'No Contactless Magstripe Transaction Supported');
    $this$byte.ja(numberRangeToNumber(2, 7));
    return Unit_instance;
  }
  function TerminalTransactionQualifiers() {
    TerminalTransactionQualifiers_instance = this;
    var tmp = this;
    tmp.xh_1 = bitfield('Terminal Transaction Qualifiers', 4, TerminalTransactionQualifiers$schema$lambda);
    this.yh_1 = new BitFieldExplainer(this.xh_1);
  }
  protoOf(TerminalTransactionQualifiers).le = function (value, lineSeparator) {
    return this.yh_1.le(value, lineSeparator);
  };
  protoOf(TerminalTransactionQualifiers).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var TerminalTransactionQualifiers_instance;
  function TerminalTransactionQualifiers_getInstance() {
    if (TerminalTransactionQualifiers_instance == null)
      new TerminalTransactionQualifiers();
    return TerminalTransactionQualifiers_instance;
  }
  function createByteTab($this, byte) {
    var bits = toBitStrings(byte);
    var mainTable = Companion_instance_4.fe(9);
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.github.rafaelrabeloit.emv.explain.TerminalType.createByteTab.<anonymous>' call
    mainTable.je(1, bits, 0, 1, 'Attended - Terminal is attended by a merchant');
    mainTable.je(2, bits, 1, 2, 'Unattended - Terminal is unattended');
    mainTable.je(3, bits, 2, 3, 'Electronic Cash Register - Terminal is an electronic cash register');
    mainTable.je(4, bits, 3, 4, 'POS Terminal - Terminal is a point of sale terminal');
    mainTable.je(5, bits, 4, 5, 'Mobile - Terminal is mobile');
    mainTable.je(6, bits, 5, 6, 'Internet - Terminal is internet-based');
    mainTable.je(7, bits, 6, 7, 'RFU - Reserved for Future Use');
    mainTable.je(8, bits, 7, 8, 'RFU - Reserved for Future Use');
    return new Tab('Byte 1 - Terminal Environment', mainTable);
  }
  function TerminalType() {
    this.zh_1 = 0;
    this.ai_1 = 0;
    this.bi_1 = 1;
    this.ci_1 = 2;
    this.di_1 = 3;
    this.ei_1 = 4;
    this.fi_1 = 5;
    this.gi_1 = 6;
    this.hi_1 = 7;
    this.ii_1 = 7;
    this.ji_1 = 8;
    this.ki_1 = 9;
    this.li_1 = 1;
    this.mi_1 = 2;
    this.ni_1 = 3;
    this.oi_1 = 4;
    this.pi_1 = 5;
    this.qi_1 = 6;
    this.ri_1 = 7;
    this.si_1 = 8;
  }
  protoOf(TerminalType).le = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var tmp = value.length;
    var tmp0_safe_receiver = EmvTagDescription_TERMINAL_TYPE_getInstance().cf_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w6_1))) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.TerminalType.explain.<anonymous>' call
      var tmp0_safe_receiver_0 = EmvTagDescription_TERMINAL_TYPE_getInstance().cf_1;
      var message = 'Terminal Type must be exactly ' + (tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.w6_1) + ' bytes long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var explanation = new Explanation(lineSeparator);
    var tab = createByteTab(this, value[0]);
    explanation.ce(new TabGroup(listOf_0(tab)));
    return explanation;
  };
  protoOf(TerminalType).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var TerminalType_instance;
  function TerminalType_getInstance() {
    return TerminalType_instance;
  }
  function TransactionCurrencyCode() {
    TransactionCurrencyCode_instance = this;
    CurrencyCode.call(this, EmvTagDescription_TRANSACTION_CURRENCY_CODE_getInstance());
  }
  var TransactionCurrencyCode_instance;
  function TransactionCurrencyCode_getInstance() {
    if (TransactionCurrencyCode_instance == null)
      new TransactionCurrencyCode();
    return TransactionCurrencyCode_instance;
  }
  function TransactionReferenceCurrencyCode() {
    TransactionReferenceCurrencyCode_instance = this;
    CurrencyCode.call(this, EmvTagDescription_TRANSACTION_REFERENCE_CURRENCY_CODE_getInstance());
  }
  var TransactionReferenceCurrencyCode_instance;
  function TransactionReferenceCurrencyCode_getInstance() {
    if (TransactionReferenceCurrencyCode_instance == null)
      new TransactionReferenceCurrencyCode();
    return TransactionReferenceCurrencyCode_instance;
  }
  function TransactionStatusInformation$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1', TransactionStatusInformation$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2', TransactionStatusInformation$schema$lambda$lambda_0);
    return Unit_instance;
  }
  function TransactionStatusInformation$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'Offline Data Authentication Performed - Offline data authentication was performed');
    $this$byte.w9(1, 'Offline Data Authentication Failed - Offline data authentication failed');
    $this$byte.w9(2, 'SDA Performed - Static Data Authentication was performed');
    $this$byte.w9(3, 'DDA Performed - Dynamic Data Authentication was performed');
    $this$byte.w9(4, 'CDA Performed - Combined DDA/AC was performed');
    $this$byte.w9(5, 'Cardholder Verification Performed - Cardholder verification was performed');
    $this$byte.w9(6, 'Cardholder Verification Failed - Cardholder verification failed');
    $this$byte.w9(7, 'Cardholder Verification Not Performed - Cardholder verification was not performed');
    return Unit_instance;
  }
  function TransactionStatusInformation$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'Issuer Authentication Performed - Issuer authentication was performed');
    $this$byte.w9(1, 'Issuer Authentication Failed - Issuer authentication failed');
    $this$byte.w9(2, 'Issuer Authentication Not Performed - Issuer authentication was not performed');
    $this$byte.ja(numberRangeToNumber(3, 7));
    return Unit_instance;
  }
  function TransactionStatusInformation() {
    TransactionStatusInformation_instance = this;
    var tmp = this;
    tmp.ti_1 = bitfield('Transaction Status Information', 2, TransactionStatusInformation$schema$lambda);
    this.ui_1 = new BitFieldExplainer(this.ti_1);
  }
  protoOf(TransactionStatusInformation).le = function (value, lineSeparator) {
    return this.ui_1.le(value, lineSeparator);
  };
  protoOf(TransactionStatusInformation).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  var TransactionStatusInformation_instance;
  function TransactionStatusInformation_getInstance() {
    if (TransactionStatusInformation_instance == null)
      new TransactionStatusInformation();
    return TransactionStatusInformation_instance;
  }
  function TransactionType() {
    this.vi_1 = '00';
    this.wi_1 = '01';
    this.xi_1 = '02';
    this.yi_1 = '03';
    this.zi_1 = '04';
    this.aj_1 = '05';
    this.bj_1 = '06';
    this.cj_1 = '07';
    this.dj_1 = '08';
    this.ej_1 = '09';
    this.fj_1 = '0A';
    this.gj_1 = '0B';
    this.hj_1 = '0C';
    this.ij_1 = '0D';
    this.jj_1 = '0E';
    this.kj_1 = '0F';
    this.lj_1 = '10';
    this.mj_1 = '11';
    this.nj_1 = '1F';
  }
  protoOf(TransactionType).rf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value.length === 2)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.TransactionType.explain.<anonymous>' call
      var message = 'Transaction Type must be exactly 2 characters long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(this.zf(value)));
    return explanation;
  };
  protoOf(TransactionType).de = function (value, lineSeparator) {
    return this.rf((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), lineSeparator);
  };
  protoOf(TransactionType).zf = function (value) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_subject = value.toUpperCase();
    return tmp0_subject === '00' ? 'Purchase' : tmp0_subject === '01' ? 'Cash Advance' : tmp0_subject === '02' ? 'Cash Back' : tmp0_subject === '03' ? 'Refund' : tmp0_subject === '04' ? 'Deposit' : tmp0_subject === '05' ? 'Payment' : tmp0_subject === '06' ? 'Balance Inquiry' : tmp0_subject === '07' ? 'Account Transfer' : tmp0_subject === '08' ? 'Payment with Cash Back' : tmp0_subject === '09' ? 'Cash Deposit' : tmp0_subject === '0A' ? 'Administrative' : tmp0_subject === '0B' ? 'Purchase with Cash Back' : tmp0_subject === '0C' ? 'Purchase with Cash Advance' : tmp0_subject === '0D' ? 'Purchase with Cash Back and Cash Advance' : tmp0_subject === '0E' ? 'Purchase with Cash Back and Refund' : tmp0_subject === '0F' ? 'Purchase with Cash Advance and Refund' : tmp0_subject === '10' ? 'Purchase with Cash Back, Cash Advance and Refund' : (0 <= compareTo(tmp0_subject, '11') ? compareTo(tmp0_subject, '1F') <= 0 : false) ? 'Reserved for Future Use' : 'Reserved for Future Use';
  };
  var TransactionType_instance;
  function TransactionType_getInstance() {
    return TransactionType_instance;
  }
  function ActionCode$Companion$schema$lambda($this$bitfield) {
    $this$bitfield.s9(1, 'Byte 1 - Offline Data Authentication', ActionCode$Companion$schema$lambda$lambda);
    $this$bitfield.s9(2, 'Byte 2 - Cardholder Verification', ActionCode$Companion$schema$lambda$lambda_0);
    $this$bitfield.s9(3, 'Byte 3 - Transaction Results', ActionCode$Companion$schema$lambda$lambda_1);
    $this$bitfield.s9(4, 'Byte 4 - Terminal Risk Management', ActionCode$Companion$schema$lambda$lambda_2);
    $this$bitfield.s9(5, 'Byte 5 - Issuer Discretionary', ActionCode$Companion$schema$lambda$lambda_3);
    return Unit_instance;
  }
  function ActionCode$Companion$schema$lambda$lambda($this$byte) {
    $this$byte.w9(0, 'SDA Failed - Static Data Authentication failed');
    $this$byte.w9(1, 'ICC Data Missing - ICC data required for offline processing is missing');
    $this$byte.w9(2, "Card Appears on Terminal Exception File - Card is in the terminal's exception file");
    $this$byte.w9(3, 'DDA Failed - Dynamic Data Authentication failed');
    $this$byte.w9(4, 'CDA Failed - Combined DDA/AC Generation failed');
    $this$byte.w9(5, 'SDA Selected - Static Data Authentication was selected');
    $this$byte.ja(numberRangeToNumber(6, 7));
    return Unit_instance;
  }
  function ActionCode$Companion$schema$lambda$lambda_0($this$byte) {
    $this$byte.w9(0, 'ICC and Terminal Have Different Application Versions');
    $this$byte.w9(1, 'Expired Application - Application has expired');
    $this$byte.w9(2, 'Application Not Yet Effective - Application is not yet effective');
    $this$byte.w9(3, 'Requested Service Not Allowed for Card Product');
    $this$byte.w9(4, 'New Card - Card is new');
    $this$byte.w9(5, 'CVM Not Successful - Cardholder Verification Method was not successful');
    $this$byte.w9(6, 'Unrecognized CVM - Cardholder Verification Method is not recognized');
    $this$byte.w9(7, 'PIN Entry Required and PIN Pad Not Present or Not Working');
    return Unit_instance;
  }
  function ActionCode$Companion$schema$lambda$lambda_1($this$byte) {
    $this$byte.w9(0, 'Transaction Exceeds Floor Limit');
    $this$byte.w9(1, 'Lower Consecutive Offline Limit Exceeded');
    $this$byte.w9(2, 'Upper Consecutive Offline Limit Exceeded');
    $this$byte.w9(3, 'Transaction Selected Randomly for Online Processing');
    $this$byte.w9(4, 'Merchant Forced Transaction Online');
    $this$byte.ja(numberRangeToNumber(5, 7));
    return Unit_instance;
  }
  function ActionCode$Companion$schema$lambda$lambda_2($this$byte) {
    $this$byte.w9(0, 'Default TDOL Used - Default Transaction Certificate Data Object List was used');
    $this$byte.w9(1, 'Issuer Authentication Failed');
    $this$byte.w9(2, 'Script Processing Failed Before Final GENERATE AC');
    $this$byte.w9(3, 'Script Processing Failed After Final GENERATE AC');
    $this$byte.ja(numberRangeToNumber(4, 7));
    return Unit_instance;
  }
  function ActionCode$Companion$schema$lambda$lambda_3($this$byte) {
    $this$byte.w9(0, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(1, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(2, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(3, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(4, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(5, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(6, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    $this$byte.w9(7, 'Issuer Discretionary - All bits in this byte are reserved for issuer use');
    return Unit_instance;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    tmp.oj_1 = bitfield('Action Code', 5, ActionCode$Companion$schema$lambda);
    this.pj_1 = new BitFieldExplainer(this.oj_1);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ActionCode(tagDescription) {
    Companion_getInstance_6();
    this.ng_1 = tagDescription;
  }
  protoOf(ActionCode).le = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    var tmp = value.length;
    var tmp0_safe_receiver = this.ng_1.cf_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w6_1))) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.templates.ActionCode.explain.<anonymous>' call
      var tmp0_safe_receiver_0 = this.ng_1.cf_1;
      var message = this.ng_1.ze_1 + ' must be exactly ' + (tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.w6_1) + ' bytes long';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Companion_getInstance_6().pj_1.le(value, lineSeparator);
  };
  protoOf(ActionCode).de = function (value, lineSeparator) {
    return this.le((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE(), lineSeparator);
  };
  function Companion_7() {
    this.qj_1 = 0;
    this.rj_1 = 999;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function CountryCode(tagDescription) {
    this.tg_1 = tagDescription;
  }
  protoOf(CountryCode).hf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(0, 999);
    // Inline function 'kotlin.contracts.contract' call
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), value)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.templates.CountryCode.explain.<anonymous>' call
      var message = this.tg_1.ze_1 + ' must be a valid country code between 0 and 999';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_safe_receiver = Companion_instance_11.sj(value.v());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yg_1;
    var description = tmp1_elvis_lhs == null ? 'Unknown Country Code' : tmp1_elvis_lhs;
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(description));
    return explanation;
  };
  protoOf(CountryCode).de = function (value, lineSeparator) {
    return this.hf(value instanceof Long ? value : THROW_CCE(), lineSeparator);
  };
  function Companion_8() {
    this.tj_1 = 0;
    this.uj_1 = 999;
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function CurrencyCode(tagDescription) {
    this.gf_1 = tagDescription;
  }
  protoOf(CurrencyCode).hf = function (value, lineSeparator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(0, 999);
    // Inline function 'kotlin.contracts.contract' call
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), value)) {
      // Inline function 'io.github.rafaelrabeloit.emv.explain.templates.CurrencyCode.explain.<anonymous>' call
      var message = this.gf_1.ze_1 + ' must be a valid currency code between 0 and 999';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_safe_receiver = Companion_instance_12.sf(value.v());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wf_1;
    var description = tmp1_elvis_lhs == null ? 'Unknown Currency Code' : tmp1_elvis_lhs;
    var explanation = new Explanation(lineSeparator);
    explanation.ce(new Line(description));
    return explanation;
  };
  protoOf(CurrencyCode).de = function (value, lineSeparator) {
    return this.hf(value instanceof Long ? value : THROW_CCE(), lineSeparator);
  };
  function isValidAlphanumericSpecial($this, char) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var containsLower = Char__toInt_impl_vasixd(this_0);
    var tmp_2;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(57);
    if (char <= Char__toInt_impl_vasixd(this_1)) {
      tmp_2 = containsLower <= char;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      var containsLower_0 = Char__toInt_impl_vasixd(this_2);
      var tmp_3;
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(90);
      if (char <= Char__toInt_impl_vasixd(this_3)) {
        tmp_3 = containsLower_0 <= char;
      } else {
        tmp_3 = false;
      }
      tmp_1 = tmp_3;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(97);
      var containsLower_1 = Char__toInt_impl_vasixd(this_4);
      var tmp_4;
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(122);
      if (char <= Char__toInt_impl_vasixd(this_5)) {
        tmp_4 = containsLower_1 <= char;
      } else {
        tmp_4 = false;
      }
      tmp_0 = tmp_4;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(32);
      var tmp_5 = Char__toInt_impl_vasixd(this_6);
      // Inline function 'kotlin.code' call
      var this_7 = _Char___init__impl__6a9atx(39);
      var tmp_6 = Char__toInt_impl_vasixd(this_7);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(40);
      var tmp_7 = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(41);
      var tmp_8 = Char__toInt_impl_vasixd(this_9);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(43);
      var tmp_9 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(44);
      var tmp_10 = Char__toInt_impl_vasixd(this_11);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(45);
      var tmp_11 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(46);
      var tmp_12 = Char__toInt_impl_vasixd(this_13);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(47);
      var tmp_13 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(58);
      var tmp_14 = Char__toInt_impl_vasixd(this_15);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(61);
      var tmp_15 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(63);
      var tmp$ret$17 = Char__toInt_impl_vasixd(this_17);
      tmp = setOf([tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp$ret$17]).a1(char);
    }
    return tmp;
  }
  function AlphanumericSpecialValueParser$bytesToValue$lambda(this$0) {
    return function (byte) {
      var char = byte & 255;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!isValidAlphanumericSpecial(this$0, char)) {
        // Inline function 'io.github.rafaelrabeloit.emv.value.AlphanumericSpecialValueParser.bytesToValue.<anonymous>.<anonymous>' call
        var message = 'Invalid alphanumeric special value: ' + char;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      return toString_2(numberToChar(char));
    };
  }
  function AlphanumericSpecialValueParser() {
  }
  protoOf(AlphanumericSpecialValueParser).oa = function (bytes) {
    return joinToString_0(bytes, '', VOID, VOID, VOID, VOID, AlphanumericSpecialValueParser$bytesToValue$lambda(this));
  };
  protoOf(AlphanumericSpecialValueParser).vj = function (value) {
    return value;
  };
  protoOf(AlphanumericSpecialValueParser).ta = function (value) {
    return this.vj((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  function isValidAlphanumeric($this, char) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var containsLower = Char__toInt_impl_vasixd(this_0);
    var tmp_2;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(57);
    if (char <= Char__toInt_impl_vasixd(this_1)) {
      tmp_2 = containsLower <= char;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      var containsLower_0 = Char__toInt_impl_vasixd(this_2);
      var tmp_3;
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(90);
      if (char <= Char__toInt_impl_vasixd(this_3)) {
        tmp_3 = containsLower_0 <= char;
      } else {
        tmp_3 = false;
      }
      tmp_1 = tmp_3;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(97);
      var containsLower_1 = Char__toInt_impl_vasixd(this_4);
      var tmp_4;
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(122);
      if (char <= Char__toInt_impl_vasixd(this_5)) {
        tmp_4 = containsLower_1 <= char;
      } else {
        tmp_4 = false;
      }
      tmp_0 = tmp_4;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(32);
      tmp = char === Char__toInt_impl_vasixd(this_6);
    }
    return tmp;
  }
  function AlphanumericValueParser$bytesToValue$lambda(this$0) {
    return function (byte) {
      var char = byte & 255;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!isValidAlphanumeric(this$0, char)) {
        // Inline function 'io.github.rafaelrabeloit.emv.value.AlphanumericValueParser.bytesToValue.<anonymous>.<anonymous>' call
        var message = 'Invalid alphanumeric value: ' + char;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      return toString_2(numberToChar(char));
    };
  }
  function AlphanumericValueParser() {
  }
  protoOf(AlphanumericValueParser).oa = function (bytes) {
    return joinToString_0(bytes, '', VOID, VOID, VOID, VOID, AlphanumericValueParser$bytesToValue$lambda(this));
  };
  protoOf(AlphanumericValueParser).vj = function (value) {
    return value;
  };
  protoOf(AlphanumericValueParser).ta = function (value) {
    return this.vj((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  function BinaryValueParser() {
  }
  protoOf(BinaryValueParser).oa = function (bytes) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return bytes.slice();
  };
  protoOf(BinaryValueParser).ee = function (value) {
    return toHexString_0(value);
  };
  protoOf(BinaryValueParser).ta = function (value) {
    return this.ee((!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
  };
  function Companion_9() {
    this.wj_1 = 240;
    this.xj_1 = 15;
    this.yj_1 = 4;
    this.zj_1 = 9;
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function NumericNumberValueParser$bytesToValue$lambda(byte) {
    var highNibble = (byte & 240) >> 4;
    var lowNibble = byte & 15;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= highNibble ? highNibble <= 9 : false) && (0 <= lowNibble ? lowNibble <= 9 : false))) {
      // Inline function 'io.github.rafaelrabeloit.emv.value.NumericNumberValueParser.bytesToValue.<anonymous>.<anonymous>' call
      var message = 'Invalid BCD value: ' + byte;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return '' + highNibble + lowNibble;
  }
  function NumericNumberValueParser() {
  }
  protoOf(NumericNumberValueParser).oa = function (bytes) {
    return toLong_0(joinToString_0(bytes, '', VOID, VOID, VOID, VOID, NumericNumberValueParser$bytesToValue$lambda));
  };
  protoOf(NumericNumberValueParser).ak = function (value) {
    return value.toString();
  };
  protoOf(NumericNumberValueParser).ta = function (value) {
    return this.ak(value instanceof Long ? value : THROW_CCE());
  };
  function Companion_10() {
    this.bk_1 = 240;
    this.ck_1 = 15;
    this.dk_1 = 4;
    this.ek_1 = 9;
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function NumericValueParser$bytesToValue$lambda(byte) {
    var highNibble = (byte & 240) >> 4;
    var lowNibble = byte & 15;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= highNibble ? highNibble <= 9 : false) && (0 <= lowNibble ? lowNibble <= 9 : false))) {
      // Inline function 'io.github.rafaelrabeloit.emv.value.NumericValueParser.bytesToValue.<anonymous>.<anonymous>' call
      var message = 'Invalid BCD value: ' + byte;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return '' + highNibble + lowNibble;
  }
  function NumericValueParser() {
  }
  protoOf(NumericValueParser).oa = function (bytes) {
    return joinToString_0(bytes, '', VOID, VOID, VOID, VOID, NumericValueParser$bytesToValue$lambda);
  };
  protoOf(NumericValueParser).vj = function (value) {
    return value;
  };
  protoOf(NumericValueParser).ta = function (value) {
    return this.vj((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  var CountryCodeDescription_AX_instance;
  var CountryCodeDescription_AF_instance;
  var CountryCodeDescription_AL_instance;
  var CountryCodeDescription_DZ_instance;
  var CountryCodeDescription_AS_instance;
  var CountryCodeDescription_AD_instance;
  var CountryCodeDescription_AO_instance;
  var CountryCodeDescription_AI_instance;
  var CountryCodeDescription_AQ_instance;
  var CountryCodeDescription_AG_instance;
  var CountryCodeDescription_AR_instance;
  var CountryCodeDescription_AM_instance;
  var CountryCodeDescription_AW_instance;
  var CountryCodeDescription_AU_instance;
  var CountryCodeDescription_AT_instance;
  var CountryCodeDescription_AZ_instance;
  var CountryCodeDescription_BS_instance;
  var CountryCodeDescription_BH_instance;
  var CountryCodeDescription_BD_instance;
  var CountryCodeDescription_BB_instance;
  var CountryCodeDescription_BY_instance;
  var CountryCodeDescription_BE_instance;
  var CountryCodeDescription_BZ_instance;
  var CountryCodeDescription_BJ_instance;
  var CountryCodeDescription_BM_instance;
  var CountryCodeDescription_BT_instance;
  var CountryCodeDescription_BO_instance;
  var CountryCodeDescription_BA_instance;
  var CountryCodeDescription_BW_instance;
  var CountryCodeDescription_BV_instance;
  var CountryCodeDescription_BR_instance;
  var CountryCodeDescription_IO_instance;
  var CountryCodeDescription_BN_instance;
  var CountryCodeDescription_BG_instance;
  var CountryCodeDescription_BF_instance;
  var CountryCodeDescription_BI_instance;
  var CountryCodeDescription_KH_instance;
  var CountryCodeDescription_CM_instance;
  var CountryCodeDescription_CA_instance;
  var CountryCodeDescription_CV_instance;
  var CountryCodeDescription_KY_instance;
  var CountryCodeDescription_CF_instance;
  var CountryCodeDescription_TD_instance;
  var CountryCodeDescription_CL_instance;
  var CountryCodeDescription_CN_instance;
  var CountryCodeDescription_CX_instance;
  var CountryCodeDescription_CC_instance;
  var CountryCodeDescription_CO_instance;
  var CountryCodeDescription_KM_instance;
  var CountryCodeDescription_CK_instance;
  var CountryCodeDescription_CR_instance;
  var CountryCodeDescription_CI_instance;
  var CountryCodeDescription_CU_instance;
  var CountryCodeDescription_CY_instance;
  var CountryCodeDescription_CZ_instance;
  var CountryCodeDescription_DK_instance;
  var CountryCodeDescription_DJ_instance;
  var CountryCodeDescription_DM_instance;
  var CountryCodeDescription_DO_instance;
  var CountryCodeDescription_EC_instance;
  var CountryCodeDescription_EG_instance;
  var CountryCodeDescription_SV_instance;
  var CountryCodeDescription_GQ_instance;
  var CountryCodeDescription_ER_instance;
  var CountryCodeDescription_EE_instance;
  var CountryCodeDescription_ET_instance;
  var CountryCodeDescription_FK_instance;
  var CountryCodeDescription_FO_instance;
  var CountryCodeDescription_FJ_instance;
  var CountryCodeDescription_FI_instance;
  var CountryCodeDescription_FR_instance;
  var CountryCodeDescription_GF_instance;
  var CountryCodeDescription_PF_instance;
  var CountryCodeDescription_TF_instance;
  var CountryCodeDescription_GA_instance;
  var CountryCodeDescription_GM_instance;
  var CountryCodeDescription_GE_instance;
  var CountryCodeDescription_DE_instance;
  var CountryCodeDescription_GH_instance;
  var CountryCodeDescription_GI_instance;
  var CountryCodeDescription_GR_instance;
  var CountryCodeDescription_GL_instance;
  var CountryCodeDescription_GD_instance;
  var CountryCodeDescription_GP_instance;
  var CountryCodeDescription_GU_instance;
  var CountryCodeDescription_GT_instance;
  var CountryCodeDescription_GN_instance;
  var CountryCodeDescription_GW_instance;
  var CountryCodeDescription_GY_instance;
  var CountryCodeDescription_HT_instance;
  var CountryCodeDescription_HM_instance;
  var CountryCodeDescription_HN_instance;
  var CountryCodeDescription_HK_instance;
  var CountryCodeDescription_HU_instance;
  var CountryCodeDescription_IS_instance;
  var CountryCodeDescription_IN_instance;
  var CountryCodeDescription_ID_instance;
  var CountryCodeDescription_IR_instance;
  var CountryCodeDescription_IQ_instance;
  var CountryCodeDescription_IE_instance;
  var CountryCodeDescription_IT_instance;
  var CountryCodeDescription_JM_instance;
  var CountryCodeDescription_JP_instance;
  var CountryCodeDescription_JO_instance;
  var CountryCodeDescription_KZ_instance;
  var CountryCodeDescription_KE_instance;
  var CountryCodeDescription_KI_instance;
  var CountryCodeDescription_KP_instance;
  var CountryCodeDescription_KR_instance;
  var CountryCodeDescription_KW_instance;
  var CountryCodeDescription_KG_instance;
  var CountryCodeDescription_LA_instance;
  var CountryCodeDescription_LV_instance;
  var CountryCodeDescription_LB_instance;
  var CountryCodeDescription_LS_instance;
  var CountryCodeDescription_LR_instance;
  var CountryCodeDescription_LY_instance;
  var CountryCodeDescription_LI_instance;
  var CountryCodeDescription_LT_instance;
  var CountryCodeDescription_LU_instance;
  var CountryCodeDescription_MO_instance;
  var CountryCodeDescription_MK_instance;
  var CountryCodeDescription_MG_instance;
  var CountryCodeDescription_MW_instance;
  var CountryCodeDescription_MY_instance;
  var CountryCodeDescription_MV_instance;
  var CountryCodeDescription_ML_instance;
  var CountryCodeDescription_MT_instance;
  var CountryCodeDescription_MH_instance;
  var CountryCodeDescription_MQ_instance;
  var CountryCodeDescription_MR_instance;
  var CountryCodeDescription_MU_instance;
  var CountryCodeDescription_YT_instance;
  var CountryCodeDescription_MX_instance;
  var CountryCodeDescription_FM_instance;
  var CountryCodeDescription_MD_instance;
  var CountryCodeDescription_MC_instance;
  var CountryCodeDescription_MN_instance;
  var CountryCodeDescription_MS_instance;
  var CountryCodeDescription_MA_instance;
  var CountryCodeDescription_MZ_instance;
  var CountryCodeDescription_MM_instance;
  var CountryCodeDescription_NA_instance;
  var CountryCodeDescription_NR_instance;
  var CountryCodeDescription_NP_instance;
  var CountryCodeDescription_NL_instance;
  var CountryCodeDescription_AN_instance;
  var CountryCodeDescription_NC_instance;
  var CountryCodeDescription_NZ_instance;
  var CountryCodeDescription_NI_instance;
  var CountryCodeDescription_NE_instance;
  var CountryCodeDescription_NG_instance;
  var CountryCodeDescription_NU_instance;
  var CountryCodeDescription_NF_instance;
  var CountryCodeDescription_MP_instance;
  var CountryCodeDescription_NO_instance;
  var CountryCodeDescription_OM_instance;
  var CountryCodeDescription_PK_instance;
  var CountryCodeDescription_PW_instance;
  var CountryCodeDescription_PA_instance;
  var CountryCodeDescription_PG_instance;
  var CountryCodeDescription_PY_instance;
  var CountryCodeDescription_PE_instance;
  var CountryCodeDescription_PH_instance;
  var CountryCodeDescription_PN_instance;
  var CountryCodeDescription_PL_instance;
  var CountryCodeDescription_PT_instance;
  var CountryCodeDescription_PR_instance;
  var CountryCodeDescription_QA_instance;
  var CountryCodeDescription_RE_instance;
  var CountryCodeDescription_RO_instance;
  var CountryCodeDescription_RU_instance;
  var CountryCodeDescription_RW_instance;
  var CountryCodeDescription_SH_instance;
  var CountryCodeDescription_KN_instance;
  var CountryCodeDescription_LC_instance;
  var CountryCodeDescription_PM_instance;
  var CountryCodeDescription_VC_instance;
  var CountryCodeDescription_WS_instance;
  var CountryCodeDescription_SM_instance;
  var CountryCodeDescription_ST_instance;
  var CountryCodeDescription_SA_instance;
  var CountryCodeDescription_SN_instance;
  var CountryCodeDescription_CS_instance;
  var CountryCodeDescription_SC_instance;
  var CountryCodeDescription_SL_instance;
  var CountryCodeDescription_SG_instance;
  var CountryCodeDescription_SK_instance;
  var CountryCodeDescription_SI_instance;
  var CountryCodeDescription_SB_instance;
  var CountryCodeDescription_SO_instance;
  var CountryCodeDescription_ZA_instance;
  var CountryCodeDescription_GS_instance;
  var CountryCodeDescription_ES_instance;
  var CountryCodeDescription_LK_instance;
  var CountryCodeDescription_SD_instance;
  var CountryCodeDescription_SR_instance;
  var CountryCodeDescription_SJ_instance;
  var CountryCodeDescription_SZ_instance;
  var CountryCodeDescription_SE_instance;
  var CountryCodeDescription_CH_instance;
  var CountryCodeDescription_SY_instance;
  var CountryCodeDescription_TW_instance;
  var CountryCodeDescription_TJ_instance;
  var CountryCodeDescription_TZ_instance;
  var CountryCodeDescription_TH_instance;
  var CountryCodeDescription_TL_instance;
  var CountryCodeDescription_TG_instance;
  var CountryCodeDescription_TK_instance;
  var CountryCodeDescription_TO_instance;
  var CountryCodeDescription_TT_instance;
  var CountryCodeDescription_TN_instance;
  var CountryCodeDescription_TR_instance;
  var CountryCodeDescription_TM_instance;
  var CountryCodeDescription_TC_instance;
  var CountryCodeDescription_TV_instance;
  var CountryCodeDescription_UA_instance;
  var CountryCodeDescription_AE_instance;
  var CountryCodeDescription_GB_instance;
  var CountryCodeDescription_US_instance;
  var CountryCodeDescription_UM_instance;
  var CountryCodeDescription_UY_instance;
  var CountryCodeDescription_UZ_instance;
  var CountryCodeDescription_VU_instance;
  var CountryCodeDescription_VA_instance;
  var CountryCodeDescription_VE_instance;
  var CountryCodeDescription_VN_instance;
  var CountryCodeDescription_VG_instance;
  var CountryCodeDescription_VI_instance;
  var CountryCodeDescription_WF_instance;
  var CountryCodeDescription_EH_instance;
  var CountryCodeDescription_YE_instance;
  var CountryCodeDescription_ZM_instance;
  var CountryCodeDescription_ZW_instance;
  function Companion_11() {
  }
  protoOf(Companion_11).sj = function (code) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.iso.Companion.fromNumericCode.<anonymous>' call
        if (element.xg_1 === code) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Companion_11).ug = function (code) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.iso.Companion.fromAlpha2Code.<anonymous>' call
        if (equals_0(element.zg_1, code, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Companion_11).bh = function (code) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.iso.Companion.fromAlpha3Code.<anonymous>' call
        if (equals_0(element.ah_1, code, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function values_2() {
    return [CountryCodeDescription_AX_getInstance(), CountryCodeDescription_AF_getInstance(), CountryCodeDescription_AL_getInstance(), CountryCodeDescription_DZ_getInstance(), CountryCodeDescription_AS_getInstance(), CountryCodeDescription_AD_getInstance(), CountryCodeDescription_AO_getInstance(), CountryCodeDescription_AI_getInstance(), CountryCodeDescription_AQ_getInstance(), CountryCodeDescription_AG_getInstance(), CountryCodeDescription_AR_getInstance(), CountryCodeDescription_AM_getInstance(), CountryCodeDescription_AW_getInstance(), CountryCodeDescription_AU_getInstance(), CountryCodeDescription_AT_getInstance(), CountryCodeDescription_AZ_getInstance(), CountryCodeDescription_BS_getInstance(), CountryCodeDescription_BH_getInstance(), CountryCodeDescription_BD_getInstance(), CountryCodeDescription_BB_getInstance(), CountryCodeDescription_BY_getInstance(), CountryCodeDescription_BE_getInstance(), CountryCodeDescription_BZ_getInstance(), CountryCodeDescription_BJ_getInstance(), CountryCodeDescription_BM_getInstance(), CountryCodeDescription_BT_getInstance(), CountryCodeDescription_BO_getInstance(), CountryCodeDescription_BA_getInstance(), CountryCodeDescription_BW_getInstance(), CountryCodeDescription_BV_getInstance(), CountryCodeDescription_BR_getInstance(), CountryCodeDescription_IO_getInstance(), CountryCodeDescription_BN_getInstance(), CountryCodeDescription_BG_getInstance(), CountryCodeDescription_BF_getInstance(), CountryCodeDescription_BI_getInstance(), CountryCodeDescription_KH_getInstance(), CountryCodeDescription_CM_getInstance(), CountryCodeDescription_CA_getInstance(), CountryCodeDescription_CV_getInstance(), CountryCodeDescription_KY_getInstance(), CountryCodeDescription_CF_getInstance(), CountryCodeDescription_TD_getInstance(), CountryCodeDescription_CL_getInstance(), CountryCodeDescription_CN_getInstance(), CountryCodeDescription_CX_getInstance(), CountryCodeDescription_CC_getInstance(), CountryCodeDescription_CO_getInstance(), CountryCodeDescription_KM_getInstance(), CountryCodeDescription_CK_getInstance(), CountryCodeDescription_CR_getInstance(), CountryCodeDescription_CI_getInstance(), CountryCodeDescription_CU_getInstance(), CountryCodeDescription_CY_getInstance(), CountryCodeDescription_CZ_getInstance(), CountryCodeDescription_DK_getInstance(), CountryCodeDescription_DJ_getInstance(), CountryCodeDescription_DM_getInstance(), CountryCodeDescription_DO_getInstance(), CountryCodeDescription_EC_getInstance(), CountryCodeDescription_EG_getInstance(), CountryCodeDescription_SV_getInstance(), CountryCodeDescription_GQ_getInstance(), CountryCodeDescription_ER_getInstance(), CountryCodeDescription_EE_getInstance(), CountryCodeDescription_ET_getInstance(), CountryCodeDescription_FK_getInstance(), CountryCodeDescription_FO_getInstance(), CountryCodeDescription_FJ_getInstance(), CountryCodeDescription_FI_getInstance(), CountryCodeDescription_FR_getInstance(), CountryCodeDescription_GF_getInstance(), CountryCodeDescription_PF_getInstance(), CountryCodeDescription_TF_getInstance(), CountryCodeDescription_GA_getInstance(), CountryCodeDescription_GM_getInstance(), CountryCodeDescription_GE_getInstance(), CountryCodeDescription_DE_getInstance(), CountryCodeDescription_GH_getInstance(), CountryCodeDescription_GI_getInstance(), CountryCodeDescription_GR_getInstance(), CountryCodeDescription_GL_getInstance(), CountryCodeDescription_GD_getInstance(), CountryCodeDescription_GP_getInstance(), CountryCodeDescription_GU_getInstance(), CountryCodeDescription_GT_getInstance(), CountryCodeDescription_GN_getInstance(), CountryCodeDescription_GW_getInstance(), CountryCodeDescription_GY_getInstance(), CountryCodeDescription_HT_getInstance(), CountryCodeDescription_HM_getInstance(), CountryCodeDescription_HN_getInstance(), CountryCodeDescription_HK_getInstance(), CountryCodeDescription_HU_getInstance(), CountryCodeDescription_IS_getInstance(), CountryCodeDescription_IN_getInstance(), CountryCodeDescription_ID_getInstance(), CountryCodeDescription_IR_getInstance(), CountryCodeDescription_IQ_getInstance(), CountryCodeDescription_IE_getInstance(), CountryCodeDescription_IT_getInstance(), CountryCodeDescription_JM_getInstance(), CountryCodeDescription_JP_getInstance(), CountryCodeDescription_JO_getInstance(), CountryCodeDescription_KZ_getInstance(), CountryCodeDescription_KE_getInstance(), CountryCodeDescription_KI_getInstance(), CountryCodeDescription_KP_getInstance(), CountryCodeDescription_KR_getInstance(), CountryCodeDescription_KW_getInstance(), CountryCodeDescription_KG_getInstance(), CountryCodeDescription_LA_getInstance(), CountryCodeDescription_LV_getInstance(), CountryCodeDescription_LB_getInstance(), CountryCodeDescription_LS_getInstance(), CountryCodeDescription_LR_getInstance(), CountryCodeDescription_LY_getInstance(), CountryCodeDescription_LI_getInstance(), CountryCodeDescription_LT_getInstance(), CountryCodeDescription_LU_getInstance(), CountryCodeDescription_MO_getInstance(), CountryCodeDescription_MK_getInstance(), CountryCodeDescription_MG_getInstance(), CountryCodeDescription_MW_getInstance(), CountryCodeDescription_MY_getInstance(), CountryCodeDescription_MV_getInstance(), CountryCodeDescription_ML_getInstance(), CountryCodeDescription_MT_getInstance(), CountryCodeDescription_MH_getInstance(), CountryCodeDescription_MQ_getInstance(), CountryCodeDescription_MR_getInstance(), CountryCodeDescription_MU_getInstance(), CountryCodeDescription_YT_getInstance(), CountryCodeDescription_MX_getInstance(), CountryCodeDescription_FM_getInstance(), CountryCodeDescription_MD_getInstance(), CountryCodeDescription_MC_getInstance(), CountryCodeDescription_MN_getInstance(), CountryCodeDescription_MS_getInstance(), CountryCodeDescription_MA_getInstance(), CountryCodeDescription_MZ_getInstance(), CountryCodeDescription_MM_getInstance(), CountryCodeDescription_NA_getInstance(), CountryCodeDescription_NR_getInstance(), CountryCodeDescription_NP_getInstance(), CountryCodeDescription_NL_getInstance(), CountryCodeDescription_AN_getInstance(), CountryCodeDescription_NC_getInstance(), CountryCodeDescription_NZ_getInstance(), CountryCodeDescription_NI_getInstance(), CountryCodeDescription_NE_getInstance(), CountryCodeDescription_NG_getInstance(), CountryCodeDescription_NU_getInstance(), CountryCodeDescription_NF_getInstance(), CountryCodeDescription_MP_getInstance(), CountryCodeDescription_NO_getInstance(), CountryCodeDescription_OM_getInstance(), CountryCodeDescription_PK_getInstance(), CountryCodeDescription_PW_getInstance(), CountryCodeDescription_PA_getInstance(), CountryCodeDescription_PG_getInstance(), CountryCodeDescription_PY_getInstance(), CountryCodeDescription_PE_getInstance(), CountryCodeDescription_PH_getInstance(), CountryCodeDescription_PN_getInstance(), CountryCodeDescription_PL_getInstance(), CountryCodeDescription_PT_getInstance(), CountryCodeDescription_PR_getInstance(), CountryCodeDescription_QA_getInstance(), CountryCodeDescription_RE_getInstance(), CountryCodeDescription_RO_getInstance(), CountryCodeDescription_RU_getInstance(), CountryCodeDescription_RW_getInstance(), CountryCodeDescription_SH_getInstance(), CountryCodeDescription_KN_getInstance(), CountryCodeDescription_LC_getInstance(), CountryCodeDescription_PM_getInstance(), CountryCodeDescription_VC_getInstance(), CountryCodeDescription_WS_getInstance(), CountryCodeDescription_SM_getInstance(), CountryCodeDescription_ST_getInstance(), CountryCodeDescription_SA_getInstance(), CountryCodeDescription_SN_getInstance(), CountryCodeDescription_CS_getInstance(), CountryCodeDescription_SC_getInstance(), CountryCodeDescription_SL_getInstance(), CountryCodeDescription_SG_getInstance(), CountryCodeDescription_SK_getInstance(), CountryCodeDescription_SI_getInstance(), CountryCodeDescription_SB_getInstance(), CountryCodeDescription_SO_getInstance(), CountryCodeDescription_ZA_getInstance(), CountryCodeDescription_GS_getInstance(), CountryCodeDescription_ES_getInstance(), CountryCodeDescription_LK_getInstance(), CountryCodeDescription_SD_getInstance(), CountryCodeDescription_SR_getInstance(), CountryCodeDescription_SJ_getInstance(), CountryCodeDescription_SZ_getInstance(), CountryCodeDescription_SE_getInstance(), CountryCodeDescription_CH_getInstance(), CountryCodeDescription_SY_getInstance(), CountryCodeDescription_TW_getInstance(), CountryCodeDescription_TJ_getInstance(), CountryCodeDescription_TZ_getInstance(), CountryCodeDescription_TH_getInstance(), CountryCodeDescription_TL_getInstance(), CountryCodeDescription_TG_getInstance(), CountryCodeDescription_TK_getInstance(), CountryCodeDescription_TO_getInstance(), CountryCodeDescription_TT_getInstance(), CountryCodeDescription_TN_getInstance(), CountryCodeDescription_TR_getInstance(), CountryCodeDescription_TM_getInstance(), CountryCodeDescription_TC_getInstance(), CountryCodeDescription_TV_getInstance(), CountryCodeDescription_UA_getInstance(), CountryCodeDescription_AE_getInstance(), CountryCodeDescription_GB_getInstance(), CountryCodeDescription_US_getInstance(), CountryCodeDescription_UM_getInstance(), CountryCodeDescription_UY_getInstance(), CountryCodeDescription_UZ_getInstance(), CountryCodeDescription_VU_getInstance(), CountryCodeDescription_VA_getInstance(), CountryCodeDescription_VE_getInstance(), CountryCodeDescription_VN_getInstance(), CountryCodeDescription_VG_getInstance(), CountryCodeDescription_VI_getInstance(), CountryCodeDescription_WF_getInstance(), CountryCodeDescription_EH_getInstance(), CountryCodeDescription_YE_getInstance(), CountryCodeDescription_ZM_getInstance(), CountryCodeDescription_ZW_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_2());
    return $ENTRIES_1;
  }
  var CountryCodeDescription_entriesInitialized;
  function CountryCodeDescription_initEntries() {
    if (CountryCodeDescription_entriesInitialized)
      return Unit_instance;
    CountryCodeDescription_entriesInitialized = true;
    CountryCodeDescription_AX_instance = new CountryCodeDescription('AX', 0, 248, 'Aaland Islands', 'AX', 'ALA');
    CountryCodeDescription_AF_instance = new CountryCodeDescription('AF', 1, 4, 'Afghanistan', 'AF', 'AFG');
    CountryCodeDescription_AL_instance = new CountryCodeDescription('AL', 2, 8, 'Albania', 'AL', 'ALB');
    CountryCodeDescription_DZ_instance = new CountryCodeDescription('DZ', 3, 12, 'Algeria', 'DZ', 'DZA');
    CountryCodeDescription_AS_instance = new CountryCodeDescription('AS', 4, 16, 'American Samoa', 'AS', 'ASM');
    CountryCodeDescription_AD_instance = new CountryCodeDescription('AD', 5, 20, 'Andorra', 'AD', 'AND');
    CountryCodeDescription_AO_instance = new CountryCodeDescription('AO', 6, 24, 'Angola', 'AO', 'AGO');
    CountryCodeDescription_AI_instance = new CountryCodeDescription('AI', 7, 660, 'Anguilla', 'AI', 'AIA');
    CountryCodeDescription_AQ_instance = new CountryCodeDescription('AQ', 8, 10, 'Antarctica', 'AQ', 'ATA');
    CountryCodeDescription_AG_instance = new CountryCodeDescription('AG', 9, 28, 'Antigua And Barbuda', 'AG', 'ATG');
    CountryCodeDescription_AR_instance = new CountryCodeDescription('AR', 10, 32, 'Argentina', 'AR', 'ARG');
    CountryCodeDescription_AM_instance = new CountryCodeDescription('AM', 11, 51, 'Armenia', 'AM', 'ARM');
    CountryCodeDescription_AW_instance = new CountryCodeDescription('AW', 12, 533, 'Aruba', 'AW', 'ABW');
    CountryCodeDescription_AU_instance = new CountryCodeDescription('AU', 13, 36, 'Australia', 'AU', 'AUS');
    CountryCodeDescription_AT_instance = new CountryCodeDescription('AT', 14, 40, 'Austria', 'AT', 'AUT');
    CountryCodeDescription_AZ_instance = new CountryCodeDescription('AZ', 15, 31, 'Azerbaijan', 'AZ', 'AZE');
    CountryCodeDescription_BS_instance = new CountryCodeDescription('BS', 16, 44, 'Bahamas', 'BS', 'BHS');
    CountryCodeDescription_BH_instance = new CountryCodeDescription('BH', 17, 48, 'Bahrain', 'BH', 'BHR');
    CountryCodeDescription_BD_instance = new CountryCodeDescription('BD', 18, 50, 'Bangladesh', 'BD', 'BGD');
    CountryCodeDescription_BB_instance = new CountryCodeDescription('BB', 19, 52, 'Barbados', 'BB', 'BRB');
    CountryCodeDescription_BY_instance = new CountryCodeDescription('BY', 20, 112, 'Belarus', 'BY', 'BLR');
    CountryCodeDescription_BE_instance = new CountryCodeDescription('BE', 21, 56, 'Belgium', 'BE', 'BEL');
    CountryCodeDescription_BZ_instance = new CountryCodeDescription('BZ', 22, 84, 'Belize', 'BZ', 'BLZ');
    CountryCodeDescription_BJ_instance = new CountryCodeDescription('BJ', 23, 204, 'Benin', 'BJ', 'BEN');
    CountryCodeDescription_BM_instance = new CountryCodeDescription('BM', 24, 60, 'Bermuda', 'BM', 'BMU');
    CountryCodeDescription_BT_instance = new CountryCodeDescription('BT', 25, 64, 'Bhutan', 'BT', 'BTN');
    CountryCodeDescription_BO_instance = new CountryCodeDescription('BO', 26, 68, 'Bolivia', 'BO', 'BOL');
    CountryCodeDescription_BA_instance = new CountryCodeDescription('BA', 27, 70, 'Bosnia And Herzegowina', 'BA', 'BIH');
    CountryCodeDescription_BW_instance = new CountryCodeDescription('BW', 28, 72, 'Botswana', 'BW', 'BWA');
    CountryCodeDescription_BV_instance = new CountryCodeDescription('BV', 29, 74, 'Bouvet Island', 'BV', 'BVT');
    CountryCodeDescription_BR_instance = new CountryCodeDescription('BR', 30, 76, 'Brazil', 'BR', 'BRA');
    CountryCodeDescription_IO_instance = new CountryCodeDescription('IO', 31, 86, 'British Indian Ocean Territory', 'IO', 'IOT');
    CountryCodeDescription_BN_instance = new CountryCodeDescription('BN', 32, 96, 'Brunei Darussalam', 'BN', 'BRN');
    CountryCodeDescription_BG_instance = new CountryCodeDescription('BG', 33, 100, 'Bulgaria', 'BG', 'BGR');
    CountryCodeDescription_BF_instance = new CountryCodeDescription('BF', 34, 854, 'Burkina Faso', 'BF', 'BFA');
    CountryCodeDescription_BI_instance = new CountryCodeDescription('BI', 35, 108, 'Burundi', 'BI', 'BDI');
    CountryCodeDescription_KH_instance = new CountryCodeDescription('KH', 36, 116, 'Cambodia', 'KH', 'KHM');
    CountryCodeDescription_CM_instance = new CountryCodeDescription('CM', 37, 120, 'Cameroon', 'CM', 'CMR');
    CountryCodeDescription_CA_instance = new CountryCodeDescription('CA', 38, 124, 'Canada', 'CA', 'CAN');
    CountryCodeDescription_CV_instance = new CountryCodeDescription('CV', 39, 132, 'Cape Verde', 'CV', 'CPV');
    CountryCodeDescription_KY_instance = new CountryCodeDescription('KY', 40, 136, 'Cayman Islands', 'KY', 'CYM');
    CountryCodeDescription_CF_instance = new CountryCodeDescription('CF', 41, 140, 'Central African Republic', 'CF', 'CAF');
    CountryCodeDescription_TD_instance = new CountryCodeDescription('TD', 42, 148, 'Chad', 'TD', 'TCD');
    CountryCodeDescription_CL_instance = new CountryCodeDescription('CL', 43, 152, 'Chile', 'CL', 'CHL');
    CountryCodeDescription_CN_instance = new CountryCodeDescription('CN', 44, 156, 'China', 'CN', 'CHN');
    CountryCodeDescription_CX_instance = new CountryCodeDescription('CX', 45, 162, 'Christmas Island', 'CX', 'CXR');
    CountryCodeDescription_CC_instance = new CountryCodeDescription('CC', 46, 166, 'Cocos (Keeling) Islands', 'CC', 'CCK');
    CountryCodeDescription_CO_instance = new CountryCodeDescription('CO', 47, 170, 'Colombia', 'CO', 'COL');
    CountryCodeDescription_KM_instance = new CountryCodeDescription('KM', 48, 174, 'Comoros', 'KM', 'COM');
    CountryCodeDescription_CK_instance = new CountryCodeDescription('CK', 49, 184, 'Cook Islands', 'CK', 'COK');
    CountryCodeDescription_CR_instance = new CountryCodeDescription('CR', 50, 188, 'Costa Rica', 'CR', 'CRI');
    CountryCodeDescription_CI_instance = new CountryCodeDescription('CI', 51, 384, "Cote D'Ivoire", 'CI', 'CIV');
    CountryCodeDescription_CU_instance = new CountryCodeDescription('CU', 52, 192, 'Cuba', 'CU', 'CUB');
    CountryCodeDescription_CY_instance = new CountryCodeDescription('CY', 53, 196, 'Cyprus', 'CY', 'CYP');
    CountryCodeDescription_CZ_instance = new CountryCodeDescription('CZ', 54, 203, 'Czech Republic', 'CZ', 'CZE');
    CountryCodeDescription_DK_instance = new CountryCodeDescription('DK', 55, 208, 'Denmark', 'DK', 'DNK');
    CountryCodeDescription_DJ_instance = new CountryCodeDescription('DJ', 56, 262, 'Djibouti', 'DJ', 'DJI');
    CountryCodeDescription_DM_instance = new CountryCodeDescription('DM', 57, 212, 'Dominica', 'DM', 'DMA');
    CountryCodeDescription_DO_instance = new CountryCodeDescription('DO', 58, 214, 'Dominican Republic', 'DO', 'DOM');
    CountryCodeDescription_EC_instance = new CountryCodeDescription('EC', 59, 218, 'Ecuador', 'EC', 'ECU');
    CountryCodeDescription_EG_instance = new CountryCodeDescription('EG', 60, 818, 'Egypt', 'EG', 'EGY');
    CountryCodeDescription_SV_instance = new CountryCodeDescription('SV', 61, 222, 'El Salvador', 'SV', 'SLV');
    CountryCodeDescription_GQ_instance = new CountryCodeDescription('GQ', 62, 226, 'Equatorial Guinea', 'GQ', 'GNQ');
    CountryCodeDescription_ER_instance = new CountryCodeDescription('ER', 63, 232, 'Eritrea', 'ER', 'ERI');
    CountryCodeDescription_EE_instance = new CountryCodeDescription('EE', 64, 233, 'Estonia', 'EE', 'EST');
    CountryCodeDescription_ET_instance = new CountryCodeDescription('ET', 65, 231, 'Ethiopia', 'ET', 'ETH');
    CountryCodeDescription_FK_instance = new CountryCodeDescription('FK', 66, 238, 'Falkland Islands (Malvinas)', 'FK', 'FLK');
    CountryCodeDescription_FO_instance = new CountryCodeDescription('FO', 67, 234, 'Faroe Islands', 'FO', 'FRO');
    CountryCodeDescription_FJ_instance = new CountryCodeDescription('FJ', 68, 242, 'Fiji', 'FJ', 'FJI');
    CountryCodeDescription_FI_instance = new CountryCodeDescription('FI', 69, 246, 'Finland', 'FI', 'FIN');
    CountryCodeDescription_FR_instance = new CountryCodeDescription('FR', 70, 250, 'France', 'FR', 'FRA');
    CountryCodeDescription_GF_instance = new CountryCodeDescription('GF', 71, 254, 'French Guiana', 'GF', 'GUF');
    CountryCodeDescription_PF_instance = new CountryCodeDescription('PF', 72, 258, 'French Polynesia', 'PF', 'PYF');
    CountryCodeDescription_TF_instance = new CountryCodeDescription('TF', 73, 260, 'French Southern Territories', 'TF', 'ATF');
    CountryCodeDescription_GA_instance = new CountryCodeDescription('GA', 74, 266, 'Gabon', 'GA', 'GAB');
    CountryCodeDescription_GM_instance = new CountryCodeDescription('GM', 75, 270, 'Gambia', 'GM', 'GMB');
    CountryCodeDescription_GE_instance = new CountryCodeDescription('GE', 76, 268, 'Georgia', 'GE', 'GEO');
    CountryCodeDescription_DE_instance = new CountryCodeDescription('DE', 77, 276, 'Germany', 'DE', 'DEU');
    CountryCodeDescription_GH_instance = new CountryCodeDescription('GH', 78, 288, 'Ghana', 'GH', 'GHA');
    CountryCodeDescription_GI_instance = new CountryCodeDescription('GI', 79, 292, 'Gibraltar', 'GI', 'GIB');
    CountryCodeDescription_GR_instance = new CountryCodeDescription('GR', 80, 300, 'Greece', 'GR', 'GRC');
    CountryCodeDescription_GL_instance = new CountryCodeDescription('GL', 81, 304, 'Greenland', 'GL', 'GRL');
    CountryCodeDescription_GD_instance = new CountryCodeDescription('GD', 82, 308, 'Grenada', 'GD', 'GRD');
    CountryCodeDescription_GP_instance = new CountryCodeDescription('GP', 83, 312, 'Guadeloupe', 'GP', 'GLP');
    CountryCodeDescription_GU_instance = new CountryCodeDescription('GU', 84, 316, 'Guam', 'GU', 'GUM');
    CountryCodeDescription_GT_instance = new CountryCodeDescription('GT', 85, 320, 'Guatemala', 'GT', 'GTM');
    CountryCodeDescription_GN_instance = new CountryCodeDescription('GN', 86, 324, 'Guinea', 'GN', 'GIN');
    CountryCodeDescription_GW_instance = new CountryCodeDescription('GW', 87, 624, 'Guinea-Bissau', 'GW', 'GNB');
    CountryCodeDescription_GY_instance = new CountryCodeDescription('GY', 88, 328, 'Guyana', 'GY', 'GUY');
    CountryCodeDescription_HT_instance = new CountryCodeDescription('HT', 89, 332, 'Haiti', 'HT', 'HTI');
    CountryCodeDescription_HM_instance = new CountryCodeDescription('HM', 90, 334, 'Heard And Mc Donald Islands', 'HM', 'HMD');
    CountryCodeDescription_HN_instance = new CountryCodeDescription('HN', 91, 340, 'Honduras', 'HN', 'HND');
    CountryCodeDescription_HK_instance = new CountryCodeDescription('HK', 92, 344, 'Hong Kong', 'HK', 'HKG');
    CountryCodeDescription_HU_instance = new CountryCodeDescription('HU', 93, 348, 'Hungary', 'HU', 'HUN');
    CountryCodeDescription_IS_instance = new CountryCodeDescription('IS', 94, 352, 'Iceland', 'IS', 'ISL');
    CountryCodeDescription_IN_instance = new CountryCodeDescription('IN', 95, 356, 'India', 'IN', 'IND');
    CountryCodeDescription_ID_instance = new CountryCodeDescription('ID', 96, 360, 'Indonesia', 'ID', 'IDN');
    CountryCodeDescription_IR_instance = new CountryCodeDescription('IR', 97, 364, 'Iran (Islamic Republic Of)', 'IR', 'IRN');
    CountryCodeDescription_IQ_instance = new CountryCodeDescription('IQ', 98, 368, 'Iraq', 'IQ', 'IRQ');
    CountryCodeDescription_IE_instance = new CountryCodeDescription('IE', 99, 372, 'Ireland', 'IE', 'IRL');
    CountryCodeDescription_IT_instance = new CountryCodeDescription('IT', 100, 380, 'Italy', 'IT', 'ITA');
    CountryCodeDescription_JM_instance = new CountryCodeDescription('JM', 101, 388, 'Jamaica', 'JM', 'JAM');
    CountryCodeDescription_JP_instance = new CountryCodeDescription('JP', 102, 392, 'Japan', 'JP', 'JPN');
    CountryCodeDescription_JO_instance = new CountryCodeDescription('JO', 103, 400, 'Jordan', 'JO', 'JOR');
    CountryCodeDescription_KZ_instance = new CountryCodeDescription('KZ', 104, 398, 'Kazakhstan', 'KZ', 'KAZ');
    CountryCodeDescription_KE_instance = new CountryCodeDescription('KE', 105, 404, 'Kenya', 'KE', 'KEN');
    CountryCodeDescription_KI_instance = new CountryCodeDescription('KI', 106, 296, 'Kiribati', 'KI', 'KIR');
    CountryCodeDescription_KP_instance = new CountryCodeDescription('KP', 107, 408, "Korea, Democratic People'S Republic Of", 'KP', 'PRK');
    CountryCodeDescription_KR_instance = new CountryCodeDescription('KR', 108, 410, 'Korea, Republic Of', 'KR', 'KOR');
    CountryCodeDescription_KW_instance = new CountryCodeDescription('KW', 109, 414, 'Kuwait', 'KW', 'KWT');
    CountryCodeDescription_KG_instance = new CountryCodeDescription('KG', 110, 417, 'Kyrgyzstan', 'KG', 'KGZ');
    CountryCodeDescription_LA_instance = new CountryCodeDescription('LA', 111, 418, "Lao People'S Democratic Republic", 'LA', 'LAO');
    CountryCodeDescription_LV_instance = new CountryCodeDescription('LV', 112, 428, 'Latvia', 'LV', 'LVA');
    CountryCodeDescription_LB_instance = new CountryCodeDescription('LB', 113, 422, 'Lebanon', 'LB', 'LBN');
    CountryCodeDescription_LS_instance = new CountryCodeDescription('LS', 114, 426, 'Lesotho', 'LS', 'LSO');
    CountryCodeDescription_LR_instance = new CountryCodeDescription('LR', 115, 430, 'Liberia', 'LR', 'LBR');
    CountryCodeDescription_LY_instance = new CountryCodeDescription('LY', 116, 434, 'Libyan Arab Jamahiriya', 'LY', 'LBY');
    CountryCodeDescription_LI_instance = new CountryCodeDescription('LI', 117, 438, 'Liechtenstein', 'LI', 'LIE');
    CountryCodeDescription_LT_instance = new CountryCodeDescription('LT', 118, 440, 'Lithuania', 'LT', 'LTU');
    CountryCodeDescription_LU_instance = new CountryCodeDescription('LU', 119, 442, 'Luxembourg', 'LU', 'LUX');
    CountryCodeDescription_MO_instance = new CountryCodeDescription('MO', 120, 446, 'Macau', 'MO', 'MAC');
    CountryCodeDescription_MK_instance = new CountryCodeDescription('MK', 121, 807, 'Macedonia, The Former Yugoslav Republic Of', 'MK', 'MKD');
    CountryCodeDescription_MG_instance = new CountryCodeDescription('MG', 122, 450, 'Madagascar', 'MG', 'MDG');
    CountryCodeDescription_MW_instance = new CountryCodeDescription('MW', 123, 454, 'Malawi', 'MW', 'MWI');
    CountryCodeDescription_MY_instance = new CountryCodeDescription('MY', 124, 458, 'Malaysia', 'MY', 'MYS');
    CountryCodeDescription_MV_instance = new CountryCodeDescription('MV', 125, 462, 'Maldives', 'MV', 'MDV');
    CountryCodeDescription_ML_instance = new CountryCodeDescription('ML', 126, 466, 'Mali', 'ML', 'MLI');
    CountryCodeDescription_MT_instance = new CountryCodeDescription('MT', 127, 470, 'Malta', 'MT', 'MLT');
    CountryCodeDescription_MH_instance = new CountryCodeDescription('MH', 128, 584, 'Marshall Islands', 'MH', 'MHL');
    CountryCodeDescription_MQ_instance = new CountryCodeDescription('MQ', 129, 474, 'Martinique', 'MQ', 'MTQ');
    CountryCodeDescription_MR_instance = new CountryCodeDescription('MR', 130, 478, 'Mauritania', 'MR', 'MRT');
    CountryCodeDescription_MU_instance = new CountryCodeDescription('MU', 131, 480, 'Mauritius', 'MU', 'MUS');
    CountryCodeDescription_YT_instance = new CountryCodeDescription('YT', 132, 175, 'Mayotte', 'YT', 'MYT');
    CountryCodeDescription_MX_instance = new CountryCodeDescription('MX', 133, 484, 'Mexico', 'MX', 'MEX');
    CountryCodeDescription_FM_instance = new CountryCodeDescription('FM', 134, 583, 'Micronesia, Federated States Of', 'FM', 'FSM');
    CountryCodeDescription_MD_instance = new CountryCodeDescription('MD', 135, 498, 'Moldova, Republic Of', 'MD', 'MDA');
    CountryCodeDescription_MC_instance = new CountryCodeDescription('MC', 136, 492, 'Monaco', 'MC', 'MCO');
    CountryCodeDescription_MN_instance = new CountryCodeDescription('MN', 137, 496, 'Mongolia', 'MN', 'MNG');
    CountryCodeDescription_MS_instance = new CountryCodeDescription('MS', 138, 500, 'Montserrat', 'MS', 'MSR');
    CountryCodeDescription_MA_instance = new CountryCodeDescription('MA', 139, 504, 'Morocco', 'MA', 'MAR');
    CountryCodeDescription_MZ_instance = new CountryCodeDescription('MZ', 140, 508, 'Mozambique', 'MZ', 'MOZ');
    CountryCodeDescription_MM_instance = new CountryCodeDescription('MM', 141, 104, 'Myanmar', 'MM', 'MMR');
    CountryCodeDescription_NA_instance = new CountryCodeDescription('NA', 142, 516, 'Namibia', 'NA', 'NAM');
    CountryCodeDescription_NR_instance = new CountryCodeDescription('NR', 143, 520, 'Nauru', 'NR', 'NRU');
    CountryCodeDescription_NP_instance = new CountryCodeDescription('NP', 144, 524, 'Nepal', 'NP', 'NPL');
    CountryCodeDescription_NL_instance = new CountryCodeDescription('NL', 145, 528, 'Netherlands', 'NL', 'NLD');
    CountryCodeDescription_AN_instance = new CountryCodeDescription('AN', 146, 530, 'Netherlands Antilles', 'AN', 'ANT');
    CountryCodeDescription_NC_instance = new CountryCodeDescription('NC', 147, 540, 'New Caledonia', 'NC', 'NCL');
    CountryCodeDescription_NZ_instance = new CountryCodeDescription('NZ', 148, 554, 'New Zealand', 'NZ', 'NZL');
    CountryCodeDescription_NI_instance = new CountryCodeDescription('NI', 149, 558, 'Nicaragua', 'NI', 'NIC');
    CountryCodeDescription_NE_instance = new CountryCodeDescription('NE', 150, 562, 'Niger', 'NE', 'NER');
    CountryCodeDescription_NG_instance = new CountryCodeDescription('NG', 151, 566, 'Nigeria', 'NG', 'NGA');
    CountryCodeDescription_NU_instance = new CountryCodeDescription('NU', 152, 570, 'Niue', 'NU', 'NIU');
    CountryCodeDescription_NF_instance = new CountryCodeDescription('NF', 153, 574, 'Norfolk Island', 'NF', 'NFK');
    CountryCodeDescription_MP_instance = new CountryCodeDescription('MP', 154, 580, 'Northern Mariana Islands', 'MP', 'MNP');
    CountryCodeDescription_NO_instance = new CountryCodeDescription('NO', 155, 578, 'Norway', 'NO', 'NOR');
    CountryCodeDescription_OM_instance = new CountryCodeDescription('OM', 156, 512, 'Oman', 'OM', 'OMN');
    CountryCodeDescription_PK_instance = new CountryCodeDescription('PK', 157, 586, 'Pakistan', 'PK', 'PAK');
    CountryCodeDescription_PW_instance = new CountryCodeDescription('PW', 158, 585, 'Palau', 'PW', 'PLW');
    CountryCodeDescription_PA_instance = new CountryCodeDescription('PA', 159, 591, 'Panama', 'PA', 'PAN');
    CountryCodeDescription_PG_instance = new CountryCodeDescription('PG', 160, 598, 'Papua New Guinea', 'PG', 'PNG');
    CountryCodeDescription_PY_instance = new CountryCodeDescription('PY', 161, 600, 'Paraguay', 'PY', 'PRY');
    CountryCodeDescription_PE_instance = new CountryCodeDescription('PE', 162, 604, 'Peru', 'PE', 'PER');
    CountryCodeDescription_PH_instance = new CountryCodeDescription('PH', 163, 608, 'Philippines', 'PH', 'PHL');
    CountryCodeDescription_PN_instance = new CountryCodeDescription('PN', 164, 612, 'Pitcairn', 'PN', 'PCN');
    CountryCodeDescription_PL_instance = new CountryCodeDescription('PL', 165, 616, 'Poland', 'PL', 'POL');
    CountryCodeDescription_PT_instance = new CountryCodeDescription('PT', 166, 620, 'Portugal', 'PT', 'PRT');
    CountryCodeDescription_PR_instance = new CountryCodeDescription('PR', 167, 630, 'Puerto Rico', 'PR', 'PRI');
    CountryCodeDescription_QA_instance = new CountryCodeDescription('QA', 168, 634, 'Qatar', 'QA', 'QAT');
    CountryCodeDescription_RE_instance = new CountryCodeDescription('RE', 169, 638, 'Reunion', 'RE', 'REU');
    CountryCodeDescription_RO_instance = new CountryCodeDescription('RO', 170, 642, 'Romania', 'RO', 'ROU');
    CountryCodeDescription_RU_instance = new CountryCodeDescription('RU', 171, 643, 'Russian Federation', 'RU', 'RUS');
    CountryCodeDescription_RW_instance = new CountryCodeDescription('RW', 172, 646, 'Rwanda', 'RW', 'RWA');
    CountryCodeDescription_SH_instance = new CountryCodeDescription('SH', 173, 654, 'Saint Helena', 'SH', 'SHN');
    CountryCodeDescription_KN_instance = new CountryCodeDescription('KN', 174, 659, 'Saint Kitts And Nevis', 'KN', 'KNA');
    CountryCodeDescription_LC_instance = new CountryCodeDescription('LC', 175, 662, 'Saint Lucia', 'LC', 'LCA');
    CountryCodeDescription_PM_instance = new CountryCodeDescription('PM', 176, 666, 'Saint Pierre And Miquelon', 'PM', 'SPM');
    CountryCodeDescription_VC_instance = new CountryCodeDescription('VC', 177, 670, 'Saint Vincent And The Grenadines', 'VC', 'VCT');
    CountryCodeDescription_WS_instance = new CountryCodeDescription('WS', 178, 882, 'Samoa', 'WS', 'WSM');
    CountryCodeDescription_SM_instance = new CountryCodeDescription('SM', 179, 674, 'San Marino', 'SM', 'SMR');
    CountryCodeDescription_ST_instance = new CountryCodeDescription('ST', 180, 678, 'Sao Tome And Principe', 'ST', 'STP');
    CountryCodeDescription_SA_instance = new CountryCodeDescription('SA', 181, 682, 'Saudi Arabia', 'SA', 'SAU');
    CountryCodeDescription_SN_instance = new CountryCodeDescription('SN', 182, 686, 'Senegal', 'SN', 'SEN');
    CountryCodeDescription_CS_instance = new CountryCodeDescription('CS', 183, 891, 'Serbia And Montenegro', 'CS', 'SCG');
    CountryCodeDescription_SC_instance = new CountryCodeDescription('SC', 184, 690, 'Seychelles', 'SC', 'SYC');
    CountryCodeDescription_SL_instance = new CountryCodeDescription('SL', 185, 694, 'Sierra Leone', 'SL', 'SLE');
    CountryCodeDescription_SG_instance = new CountryCodeDescription('SG', 186, 702, 'Singapore', 'SG', 'SGP');
    CountryCodeDescription_SK_instance = new CountryCodeDescription('SK', 187, 703, 'Slovakia', 'SK', 'SVK');
    CountryCodeDescription_SI_instance = new CountryCodeDescription('SI', 188, 705, 'Slovenia', 'SI', 'SVN');
    CountryCodeDescription_SB_instance = new CountryCodeDescription('SB', 189, 90, 'Solomon Islands', 'SB', 'SLB');
    CountryCodeDescription_SO_instance = new CountryCodeDescription('SO', 190, 706, 'Somalia', 'SO', 'SOM');
    CountryCodeDescription_ZA_instance = new CountryCodeDescription('ZA', 191, 710, 'South Africa', 'ZA', 'ZAF');
    CountryCodeDescription_GS_instance = new CountryCodeDescription('GS', 192, 239, 'South Georgia And The South Sandwich Islands', 'GS', 'SGS');
    CountryCodeDescription_ES_instance = new CountryCodeDescription('ES', 193, 724, 'Spain', 'ES', 'ESP');
    CountryCodeDescription_LK_instance = new CountryCodeDescription('LK', 194, 144, 'Sri Lanka', 'LK', 'LKA');
    CountryCodeDescription_SD_instance = new CountryCodeDescription('SD', 195, 736, 'Sudan', 'SD', 'SDN');
    CountryCodeDescription_SR_instance = new CountryCodeDescription('SR', 196, 740, 'Suriname', 'SR', 'SUR');
    CountryCodeDescription_SJ_instance = new CountryCodeDescription('SJ', 197, 744, 'Svalbard And Jan Mayen Islands', 'SJ', 'SJM');
    CountryCodeDescription_SZ_instance = new CountryCodeDescription('SZ', 198, 748, 'Swaziland', 'SZ', 'SWZ');
    CountryCodeDescription_SE_instance = new CountryCodeDescription('SE', 199, 752, 'Sweden', 'SE', 'SWE');
    CountryCodeDescription_CH_instance = new CountryCodeDescription('CH', 200, 756, 'Switzerland', 'CH', 'CHE');
    CountryCodeDescription_SY_instance = new CountryCodeDescription('SY', 201, 760, 'Syrian Arab Republic', 'SY', 'SYR');
    CountryCodeDescription_TW_instance = new CountryCodeDescription('TW', 202, 158, 'Taiwan', 'TW', 'TWN');
    CountryCodeDescription_TJ_instance = new CountryCodeDescription('TJ', 203, 762, 'Tajikistan', 'TJ', 'TJK');
    CountryCodeDescription_TZ_instance = new CountryCodeDescription('TZ', 204, 834, 'Tanzania, United Republic Of', 'TZ', 'TZA');
    CountryCodeDescription_TH_instance = new CountryCodeDescription('TH', 205, 764, 'Thailand', 'TH', 'THA');
    CountryCodeDescription_TL_instance = new CountryCodeDescription('TL', 206, 626, 'Timor-Leste', 'TL', 'TLS');
    CountryCodeDescription_TG_instance = new CountryCodeDescription('TG', 207, 768, 'Togo', 'TG', 'TGO');
    CountryCodeDescription_TK_instance = new CountryCodeDescription('TK', 208, 772, 'Tokelau', 'TK', 'TKL');
    CountryCodeDescription_TO_instance = new CountryCodeDescription('TO', 209, 776, 'Tonga', 'TO', 'TON');
    CountryCodeDescription_TT_instance = new CountryCodeDescription('TT', 210, 780, 'Trinidad And Tobago', 'TT', 'TTO');
    CountryCodeDescription_TN_instance = new CountryCodeDescription('TN', 211, 788, 'Tunisia', 'TN', 'TUN');
    CountryCodeDescription_TR_instance = new CountryCodeDescription('TR', 212, 792, 'Turkey', 'TR', 'TUR');
    CountryCodeDescription_TM_instance = new CountryCodeDescription('TM', 213, 795, 'Turkmenistan', 'TM', 'TKM');
    CountryCodeDescription_TC_instance = new CountryCodeDescription('TC', 214, 796, 'Turks And Caicos Islands', 'TC', 'TCA');
    CountryCodeDescription_TV_instance = new CountryCodeDescription('TV', 215, 798, 'Tuvalu', 'TV', 'TUV');
    CountryCodeDescription_UA_instance = new CountryCodeDescription('UA', 216, 804, 'Ukraine', 'UA', 'UKR');
    CountryCodeDescription_AE_instance = new CountryCodeDescription('AE', 217, 784, 'United Arab Emirates', 'AE', 'ARE');
    CountryCodeDescription_GB_instance = new CountryCodeDescription('GB', 218, 826, 'United Kingdom', 'GB', 'GBR');
    CountryCodeDescription_US_instance = new CountryCodeDescription('US', 219, 840, 'United States', 'US', 'USA');
    CountryCodeDescription_UM_instance = new CountryCodeDescription('UM', 220, 581, 'United States Minor Outlying Islands', 'UM', 'UMI');
    CountryCodeDescription_UY_instance = new CountryCodeDescription('UY', 221, 858, 'Uruguay', 'UY', 'URY');
    CountryCodeDescription_UZ_instance = new CountryCodeDescription('UZ', 222, 860, 'Uzbekistan', 'UZ', 'UZB');
    CountryCodeDescription_VU_instance = new CountryCodeDescription('VU', 223, 548, 'Vanuatu', 'VU', 'VUT');
    CountryCodeDescription_VA_instance = new CountryCodeDescription('VA', 224, 336, 'Vatican City State (Holy See)', 'VA', 'VAT');
    CountryCodeDescription_VE_instance = new CountryCodeDescription('VE', 225, 862, 'Venezuela', 'VE', 'VEN');
    CountryCodeDescription_VN_instance = new CountryCodeDescription('VN', 226, 704, 'Viet Nam', 'VN', 'VNM');
    CountryCodeDescription_VG_instance = new CountryCodeDescription('VG', 227, 92, 'Virgin Islands (British)', 'VG', 'VGB');
    CountryCodeDescription_VI_instance = new CountryCodeDescription('VI', 228, 850, 'Virgin Islands (U.S.)', 'VI', 'VIR');
    CountryCodeDescription_WF_instance = new CountryCodeDescription('WF', 229, 876, 'Wallis And Futuna Islands', 'WF', 'WLF');
    CountryCodeDescription_EH_instance = new CountryCodeDescription('EH', 230, 732, 'Western Sahara', 'EH', 'ESH');
    CountryCodeDescription_YE_instance = new CountryCodeDescription('YE', 231, 887, 'Yemen', 'YE', 'YEM');
    CountryCodeDescription_ZM_instance = new CountryCodeDescription('ZM', 232, 894, 'Zambia', 'ZM', 'ZMB');
    CountryCodeDescription_ZW_instance = new CountryCodeDescription('ZW', 233, 716, 'Zimbabwe', 'ZW', 'ZWE');
  }
  var $ENTRIES_1;
  function CountryCodeDescription(name, ordinal, numericCode, description, alpha2Code, alpha3Code) {
    Enum.call(this, name, ordinal);
    this.xg_1 = numericCode;
    this.yg_1 = description;
    this.zg_1 = alpha2Code;
    this.ah_1 = alpha3Code;
  }
  function CountryCodeDescription_AX_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AX_instance;
  }
  function CountryCodeDescription_AF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AF_instance;
  }
  function CountryCodeDescription_AL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AL_instance;
  }
  function CountryCodeDescription_DZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_DZ_instance;
  }
  function CountryCodeDescription_AS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AS_instance;
  }
  function CountryCodeDescription_AD_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AD_instance;
  }
  function CountryCodeDescription_AO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AO_instance;
  }
  function CountryCodeDescription_AI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AI_instance;
  }
  function CountryCodeDescription_AQ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AQ_instance;
  }
  function CountryCodeDescription_AG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AG_instance;
  }
  function CountryCodeDescription_AR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AR_instance;
  }
  function CountryCodeDescription_AM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AM_instance;
  }
  function CountryCodeDescription_AW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AW_instance;
  }
  function CountryCodeDescription_AU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AU_instance;
  }
  function CountryCodeDescription_AT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AT_instance;
  }
  function CountryCodeDescription_AZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AZ_instance;
  }
  function CountryCodeDescription_BS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BS_instance;
  }
  function CountryCodeDescription_BH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BH_instance;
  }
  function CountryCodeDescription_BD_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BD_instance;
  }
  function CountryCodeDescription_BB_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BB_instance;
  }
  function CountryCodeDescription_BY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BY_instance;
  }
  function CountryCodeDescription_BE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BE_instance;
  }
  function CountryCodeDescription_BZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BZ_instance;
  }
  function CountryCodeDescription_BJ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BJ_instance;
  }
  function CountryCodeDescription_BM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BM_instance;
  }
  function CountryCodeDescription_BT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BT_instance;
  }
  function CountryCodeDescription_BO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BO_instance;
  }
  function CountryCodeDescription_BA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BA_instance;
  }
  function CountryCodeDescription_BW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BW_instance;
  }
  function CountryCodeDescription_BV_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BV_instance;
  }
  function CountryCodeDescription_BR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BR_instance;
  }
  function CountryCodeDescription_IO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IO_instance;
  }
  function CountryCodeDescription_BN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BN_instance;
  }
  function CountryCodeDescription_BG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BG_instance;
  }
  function CountryCodeDescription_BF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BF_instance;
  }
  function CountryCodeDescription_BI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_BI_instance;
  }
  function CountryCodeDescription_KH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KH_instance;
  }
  function CountryCodeDescription_CM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CM_instance;
  }
  function CountryCodeDescription_CA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CA_instance;
  }
  function CountryCodeDescription_CV_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CV_instance;
  }
  function CountryCodeDescription_KY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KY_instance;
  }
  function CountryCodeDescription_CF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CF_instance;
  }
  function CountryCodeDescription_TD_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TD_instance;
  }
  function CountryCodeDescription_CL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CL_instance;
  }
  function CountryCodeDescription_CN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CN_instance;
  }
  function CountryCodeDescription_CX_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CX_instance;
  }
  function CountryCodeDescription_CC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CC_instance;
  }
  function CountryCodeDescription_CO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CO_instance;
  }
  function CountryCodeDescription_KM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KM_instance;
  }
  function CountryCodeDescription_CK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CK_instance;
  }
  function CountryCodeDescription_CR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CR_instance;
  }
  function CountryCodeDescription_CI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CI_instance;
  }
  function CountryCodeDescription_CU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CU_instance;
  }
  function CountryCodeDescription_CY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CY_instance;
  }
  function CountryCodeDescription_CZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CZ_instance;
  }
  function CountryCodeDescription_DK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_DK_instance;
  }
  function CountryCodeDescription_DJ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_DJ_instance;
  }
  function CountryCodeDescription_DM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_DM_instance;
  }
  function CountryCodeDescription_DO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_DO_instance;
  }
  function CountryCodeDescription_EC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_EC_instance;
  }
  function CountryCodeDescription_EG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_EG_instance;
  }
  function CountryCodeDescription_SV_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SV_instance;
  }
  function CountryCodeDescription_GQ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GQ_instance;
  }
  function CountryCodeDescription_ER_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ER_instance;
  }
  function CountryCodeDescription_EE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_EE_instance;
  }
  function CountryCodeDescription_ET_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ET_instance;
  }
  function CountryCodeDescription_FK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_FK_instance;
  }
  function CountryCodeDescription_FO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_FO_instance;
  }
  function CountryCodeDescription_FJ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_FJ_instance;
  }
  function CountryCodeDescription_FI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_FI_instance;
  }
  function CountryCodeDescription_FR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_FR_instance;
  }
  function CountryCodeDescription_GF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GF_instance;
  }
  function CountryCodeDescription_PF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PF_instance;
  }
  function CountryCodeDescription_TF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TF_instance;
  }
  function CountryCodeDescription_GA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GA_instance;
  }
  function CountryCodeDescription_GM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GM_instance;
  }
  function CountryCodeDescription_GE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GE_instance;
  }
  function CountryCodeDescription_DE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_DE_instance;
  }
  function CountryCodeDescription_GH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GH_instance;
  }
  function CountryCodeDescription_GI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GI_instance;
  }
  function CountryCodeDescription_GR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GR_instance;
  }
  function CountryCodeDescription_GL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GL_instance;
  }
  function CountryCodeDescription_GD_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GD_instance;
  }
  function CountryCodeDescription_GP_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GP_instance;
  }
  function CountryCodeDescription_GU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GU_instance;
  }
  function CountryCodeDescription_GT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GT_instance;
  }
  function CountryCodeDescription_GN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GN_instance;
  }
  function CountryCodeDescription_GW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GW_instance;
  }
  function CountryCodeDescription_GY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GY_instance;
  }
  function CountryCodeDescription_HT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_HT_instance;
  }
  function CountryCodeDescription_HM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_HM_instance;
  }
  function CountryCodeDescription_HN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_HN_instance;
  }
  function CountryCodeDescription_HK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_HK_instance;
  }
  function CountryCodeDescription_HU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_HU_instance;
  }
  function CountryCodeDescription_IS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IS_instance;
  }
  function CountryCodeDescription_IN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IN_instance;
  }
  function CountryCodeDescription_ID_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ID_instance;
  }
  function CountryCodeDescription_IR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IR_instance;
  }
  function CountryCodeDescription_IQ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IQ_instance;
  }
  function CountryCodeDescription_IE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IE_instance;
  }
  function CountryCodeDescription_IT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_IT_instance;
  }
  function CountryCodeDescription_JM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_JM_instance;
  }
  function CountryCodeDescription_JP_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_JP_instance;
  }
  function CountryCodeDescription_JO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_JO_instance;
  }
  function CountryCodeDescription_KZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KZ_instance;
  }
  function CountryCodeDescription_KE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KE_instance;
  }
  function CountryCodeDescription_KI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KI_instance;
  }
  function CountryCodeDescription_KP_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KP_instance;
  }
  function CountryCodeDescription_KR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KR_instance;
  }
  function CountryCodeDescription_KW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KW_instance;
  }
  function CountryCodeDescription_KG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KG_instance;
  }
  function CountryCodeDescription_LA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LA_instance;
  }
  function CountryCodeDescription_LV_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LV_instance;
  }
  function CountryCodeDescription_LB_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LB_instance;
  }
  function CountryCodeDescription_LS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LS_instance;
  }
  function CountryCodeDescription_LR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LR_instance;
  }
  function CountryCodeDescription_LY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LY_instance;
  }
  function CountryCodeDescription_LI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LI_instance;
  }
  function CountryCodeDescription_LT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LT_instance;
  }
  function CountryCodeDescription_LU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LU_instance;
  }
  function CountryCodeDescription_MO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MO_instance;
  }
  function CountryCodeDescription_MK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MK_instance;
  }
  function CountryCodeDescription_MG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MG_instance;
  }
  function CountryCodeDescription_MW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MW_instance;
  }
  function CountryCodeDescription_MY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MY_instance;
  }
  function CountryCodeDescription_MV_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MV_instance;
  }
  function CountryCodeDescription_ML_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ML_instance;
  }
  function CountryCodeDescription_MT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MT_instance;
  }
  function CountryCodeDescription_MH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MH_instance;
  }
  function CountryCodeDescription_MQ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MQ_instance;
  }
  function CountryCodeDescription_MR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MR_instance;
  }
  function CountryCodeDescription_MU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MU_instance;
  }
  function CountryCodeDescription_YT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_YT_instance;
  }
  function CountryCodeDescription_MX_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MX_instance;
  }
  function CountryCodeDescription_FM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_FM_instance;
  }
  function CountryCodeDescription_MD_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MD_instance;
  }
  function CountryCodeDescription_MC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MC_instance;
  }
  function CountryCodeDescription_MN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MN_instance;
  }
  function CountryCodeDescription_MS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MS_instance;
  }
  function CountryCodeDescription_MA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MA_instance;
  }
  function CountryCodeDescription_MZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MZ_instance;
  }
  function CountryCodeDescription_MM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MM_instance;
  }
  function CountryCodeDescription_NA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NA_instance;
  }
  function CountryCodeDescription_NR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NR_instance;
  }
  function CountryCodeDescription_NP_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NP_instance;
  }
  function CountryCodeDescription_NL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NL_instance;
  }
  function CountryCodeDescription_AN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AN_instance;
  }
  function CountryCodeDescription_NC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NC_instance;
  }
  function CountryCodeDescription_NZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NZ_instance;
  }
  function CountryCodeDescription_NI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NI_instance;
  }
  function CountryCodeDescription_NE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NE_instance;
  }
  function CountryCodeDescription_NG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NG_instance;
  }
  function CountryCodeDescription_NU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NU_instance;
  }
  function CountryCodeDescription_NF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NF_instance;
  }
  function CountryCodeDescription_MP_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_MP_instance;
  }
  function CountryCodeDescription_NO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_NO_instance;
  }
  function CountryCodeDescription_OM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_OM_instance;
  }
  function CountryCodeDescription_PK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PK_instance;
  }
  function CountryCodeDescription_PW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PW_instance;
  }
  function CountryCodeDescription_PA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PA_instance;
  }
  function CountryCodeDescription_PG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PG_instance;
  }
  function CountryCodeDescription_PY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PY_instance;
  }
  function CountryCodeDescription_PE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PE_instance;
  }
  function CountryCodeDescription_PH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PH_instance;
  }
  function CountryCodeDescription_PN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PN_instance;
  }
  function CountryCodeDescription_PL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PL_instance;
  }
  function CountryCodeDescription_PT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PT_instance;
  }
  function CountryCodeDescription_PR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PR_instance;
  }
  function CountryCodeDescription_QA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_QA_instance;
  }
  function CountryCodeDescription_RE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_RE_instance;
  }
  function CountryCodeDescription_RO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_RO_instance;
  }
  function CountryCodeDescription_RU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_RU_instance;
  }
  function CountryCodeDescription_RW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_RW_instance;
  }
  function CountryCodeDescription_SH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SH_instance;
  }
  function CountryCodeDescription_KN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_KN_instance;
  }
  function CountryCodeDescription_LC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LC_instance;
  }
  function CountryCodeDescription_PM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_PM_instance;
  }
  function CountryCodeDescription_VC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VC_instance;
  }
  function CountryCodeDescription_WS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_WS_instance;
  }
  function CountryCodeDescription_SM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SM_instance;
  }
  function CountryCodeDescription_ST_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ST_instance;
  }
  function CountryCodeDescription_SA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SA_instance;
  }
  function CountryCodeDescription_SN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SN_instance;
  }
  function CountryCodeDescription_CS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CS_instance;
  }
  function CountryCodeDescription_SC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SC_instance;
  }
  function CountryCodeDescription_SL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SL_instance;
  }
  function CountryCodeDescription_SG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SG_instance;
  }
  function CountryCodeDescription_SK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SK_instance;
  }
  function CountryCodeDescription_SI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SI_instance;
  }
  function CountryCodeDescription_SB_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SB_instance;
  }
  function CountryCodeDescription_SO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SO_instance;
  }
  function CountryCodeDescription_ZA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ZA_instance;
  }
  function CountryCodeDescription_GS_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GS_instance;
  }
  function CountryCodeDescription_ES_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ES_instance;
  }
  function CountryCodeDescription_LK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_LK_instance;
  }
  function CountryCodeDescription_SD_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SD_instance;
  }
  function CountryCodeDescription_SR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SR_instance;
  }
  function CountryCodeDescription_SJ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SJ_instance;
  }
  function CountryCodeDescription_SZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SZ_instance;
  }
  function CountryCodeDescription_SE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SE_instance;
  }
  function CountryCodeDescription_CH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_CH_instance;
  }
  function CountryCodeDescription_SY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_SY_instance;
  }
  function CountryCodeDescription_TW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TW_instance;
  }
  function CountryCodeDescription_TJ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TJ_instance;
  }
  function CountryCodeDescription_TZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TZ_instance;
  }
  function CountryCodeDescription_TH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TH_instance;
  }
  function CountryCodeDescription_TL_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TL_instance;
  }
  function CountryCodeDescription_TG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TG_instance;
  }
  function CountryCodeDescription_TK_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TK_instance;
  }
  function CountryCodeDescription_TO_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TO_instance;
  }
  function CountryCodeDescription_TT_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TT_instance;
  }
  function CountryCodeDescription_TN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TN_instance;
  }
  function CountryCodeDescription_TR_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TR_instance;
  }
  function CountryCodeDescription_TM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TM_instance;
  }
  function CountryCodeDescription_TC_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TC_instance;
  }
  function CountryCodeDescription_TV_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_TV_instance;
  }
  function CountryCodeDescription_UA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_UA_instance;
  }
  function CountryCodeDescription_AE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_AE_instance;
  }
  function CountryCodeDescription_GB_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_GB_instance;
  }
  function CountryCodeDescription_US_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_US_instance;
  }
  function CountryCodeDescription_UM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_UM_instance;
  }
  function CountryCodeDescription_UY_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_UY_instance;
  }
  function CountryCodeDescription_UZ_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_UZ_instance;
  }
  function CountryCodeDescription_VU_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VU_instance;
  }
  function CountryCodeDescription_VA_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VA_instance;
  }
  function CountryCodeDescription_VE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VE_instance;
  }
  function CountryCodeDescription_VN_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VN_instance;
  }
  function CountryCodeDescription_VG_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VG_instance;
  }
  function CountryCodeDescription_VI_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_VI_instance;
  }
  function CountryCodeDescription_WF_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_WF_instance;
  }
  function CountryCodeDescription_EH_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_EH_instance;
  }
  function CountryCodeDescription_YE_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_YE_instance;
  }
  function CountryCodeDescription_ZM_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ZM_instance;
  }
  function CountryCodeDescription_ZW_getInstance() {
    CountryCodeDescription_initEntries();
    return CountryCodeDescription_ZW_instance;
  }
  var CurrencyCodeDescription_AED_instance;
  var CurrencyCodeDescription_AFN_instance;
  var CurrencyCodeDescription_ALL_instance;
  var CurrencyCodeDescription_AMD_instance;
  var CurrencyCodeDescription_ANG_instance;
  var CurrencyCodeDescription_AOA_instance;
  var CurrencyCodeDescription_ARS_instance;
  var CurrencyCodeDescription_AUD_instance;
  var CurrencyCodeDescription_AWG_instance;
  var CurrencyCodeDescription_AZN_instance;
  var CurrencyCodeDescription_BAM_instance;
  var CurrencyCodeDescription_BBD_instance;
  var CurrencyCodeDescription_BDT_instance;
  var CurrencyCodeDescription_BGN_instance;
  var CurrencyCodeDescription_BHD_instance;
  var CurrencyCodeDescription_BIF_instance;
  var CurrencyCodeDescription_BMD_instance;
  var CurrencyCodeDescription_BND_instance;
  var CurrencyCodeDescription_BOB_instance;
  var CurrencyCodeDescription_BRL_instance;
  var CurrencyCodeDescription_BSD_instance;
  var CurrencyCodeDescription_BTN_instance;
  var CurrencyCodeDescription_BWP_instance;
  var CurrencyCodeDescription_BYN_instance;
  var CurrencyCodeDescription_BZD_instance;
  var CurrencyCodeDescription_CAD_instance;
  var CurrencyCodeDescription_CDF_instance;
  var CurrencyCodeDescription_CHF_instance;
  var CurrencyCodeDescription_CLP_instance;
  var CurrencyCodeDescription_CNY_instance;
  var CurrencyCodeDescription_COP_instance;
  var CurrencyCodeDescription_CRC_instance;
  var CurrencyCodeDescription_CUC_instance;
  var CurrencyCodeDescription_CUP_instance;
  var CurrencyCodeDescription_CVE_instance;
  var CurrencyCodeDescription_CZK_instance;
  var CurrencyCodeDescription_DJF_instance;
  var CurrencyCodeDescription_DKK_instance;
  var CurrencyCodeDescription_DOP_instance;
  var CurrencyCodeDescription_DZD_instance;
  var CurrencyCodeDescription_EGP_instance;
  var CurrencyCodeDescription_ERN_instance;
  var CurrencyCodeDescription_ETB_instance;
  var CurrencyCodeDescription_EUR_instance;
  var CurrencyCodeDescription_FJD_instance;
  var CurrencyCodeDescription_FKP_instance;
  var CurrencyCodeDescription_GBP_instance;
  var CurrencyCodeDescription_GEL_instance;
  var CurrencyCodeDescription_GHS_instance;
  var CurrencyCodeDescription_GIP_instance;
  var CurrencyCodeDescription_GMD_instance;
  var CurrencyCodeDescription_GNF_instance;
  var CurrencyCodeDescription_GTQ_instance;
  var CurrencyCodeDescription_GYD_instance;
  var CurrencyCodeDescription_HKD_instance;
  var CurrencyCodeDescription_HNL_instance;
  var CurrencyCodeDescription_HRK_instance;
  var CurrencyCodeDescription_HTG_instance;
  var CurrencyCodeDescription_HUF_instance;
  var CurrencyCodeDescription_IDR_instance;
  var CurrencyCodeDescription_ILS_instance;
  var CurrencyCodeDescription_INR_instance;
  var CurrencyCodeDescription_IQD_instance;
  var CurrencyCodeDescription_IRR_instance;
  var CurrencyCodeDescription_ISK_instance;
  var CurrencyCodeDescription_JMD_instance;
  var CurrencyCodeDescription_JOD_instance;
  var CurrencyCodeDescription_JPY_instance;
  var CurrencyCodeDescription_KES_instance;
  var CurrencyCodeDescription_KGS_instance;
  var CurrencyCodeDescription_KHR_instance;
  var CurrencyCodeDescription_KMF_instance;
  var CurrencyCodeDescription_KPW_instance;
  var CurrencyCodeDescription_KRW_instance;
  var CurrencyCodeDescription_KWD_instance;
  var CurrencyCodeDescription_KYD_instance;
  var CurrencyCodeDescription_KZT_instance;
  var CurrencyCodeDescription_LAK_instance;
  var CurrencyCodeDescription_LBP_instance;
  var CurrencyCodeDescription_LKR_instance;
  var CurrencyCodeDescription_LRD_instance;
  var CurrencyCodeDescription_LSL_instance;
  var CurrencyCodeDescription_LYD_instance;
  var CurrencyCodeDescription_MAD_instance;
  var CurrencyCodeDescription_MDL_instance;
  var CurrencyCodeDescription_MGA_instance;
  var CurrencyCodeDescription_MKD_instance;
  var CurrencyCodeDescription_MMK_instance;
  var CurrencyCodeDescription_MNT_instance;
  var CurrencyCodeDescription_MOP_instance;
  var CurrencyCodeDescription_MRO_instance;
  var CurrencyCodeDescription_MUR_instance;
  var CurrencyCodeDescription_MVR_instance;
  var CurrencyCodeDescription_MWK_instance;
  var CurrencyCodeDescription_MXN_instance;
  var CurrencyCodeDescription_MYR_instance;
  var CurrencyCodeDescription_MZN_instance;
  var CurrencyCodeDescription_NAD_instance;
  var CurrencyCodeDescription_NGN_instance;
  var CurrencyCodeDescription_NIO_instance;
  var CurrencyCodeDescription_NOK_instance;
  var CurrencyCodeDescription_NPR_instance;
  var CurrencyCodeDescription_NZD_instance;
  var CurrencyCodeDescription_OMR_instance;
  var CurrencyCodeDescription_PAB_instance;
  var CurrencyCodeDescription_PEN_instance;
  var CurrencyCodeDescription_PGK_instance;
  var CurrencyCodeDescription_PHP_instance;
  var CurrencyCodeDescription_PKR_instance;
  var CurrencyCodeDescription_PLN_instance;
  var CurrencyCodeDescription_PYG_instance;
  var CurrencyCodeDescription_QAR_instance;
  var CurrencyCodeDescription_RON_instance;
  var CurrencyCodeDescription_RSD_instance;
  var CurrencyCodeDescription_RUB_instance;
  var CurrencyCodeDescription_RWF_instance;
  var CurrencyCodeDescription_SAR_instance;
  var CurrencyCodeDescription_SBD_instance;
  var CurrencyCodeDescription_SCR_instance;
  var CurrencyCodeDescription_SDG_instance;
  var CurrencyCodeDescription_SEK_instance;
  var CurrencyCodeDescription_SGD_instance;
  var CurrencyCodeDescription_SHP_instance;
  var CurrencyCodeDescription_SLL_instance;
  var CurrencyCodeDescription_SOS_instance;
  var CurrencyCodeDescription_SRD_instance;
  var CurrencyCodeDescription_SSP_instance;
  var CurrencyCodeDescription_STD_instance;
  var CurrencyCodeDescription_SVC_instance;
  var CurrencyCodeDescription_SYP_instance;
  var CurrencyCodeDescription_SZL_instance;
  var CurrencyCodeDescription_THB_instance;
  var CurrencyCodeDescription_TJS_instance;
  var CurrencyCodeDescription_TMT_instance;
  var CurrencyCodeDescription_TND_instance;
  var CurrencyCodeDescription_TOP_instance;
  var CurrencyCodeDescription_TRY_instance;
  var CurrencyCodeDescription_TTD_instance;
  var CurrencyCodeDescription_TWD_instance;
  var CurrencyCodeDescription_TZS_instance;
  var CurrencyCodeDescription_UAH_instance;
  var CurrencyCodeDescription_UGX_instance;
  var CurrencyCodeDescription_USD_instance;
  var CurrencyCodeDescription_UYU_instance;
  var CurrencyCodeDescription_UZS_instance;
  var CurrencyCodeDescription_VEF_instance;
  var CurrencyCodeDescription_VND_instance;
  var CurrencyCodeDescription_VUV_instance;
  var CurrencyCodeDescription_WST_instance;
  var CurrencyCodeDescription_XAF_instance;
  var CurrencyCodeDescription_XAG_instance;
  var CurrencyCodeDescription_XAU_instance;
  var CurrencyCodeDescription_XBA_instance;
  var CurrencyCodeDescription_XBB_instance;
  var CurrencyCodeDescription_XBC_instance;
  var CurrencyCodeDescription_XBD_instance;
  var CurrencyCodeDescription_XCD_instance;
  var CurrencyCodeDescription_XDR_instance;
  var CurrencyCodeDescription_XOF_instance;
  var CurrencyCodeDescription_XPD_instance;
  var CurrencyCodeDescription_XPF_instance;
  var CurrencyCodeDescription_XPT_instance;
  var CurrencyCodeDescription_XSU_instance;
  var CurrencyCodeDescription_XTS_instance;
  var CurrencyCodeDescription_XUA_instance;
  var CurrencyCodeDescription_XXX_instance;
  var CurrencyCodeDescription_YER_instance;
  var CurrencyCodeDescription_ZAR_instance;
  var CurrencyCodeDescription_ZMW_instance;
  var CurrencyCodeDescription_ZWL_instance;
  function Companion_12() {
  }
  protoOf(Companion_12).sf = function (code) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.iso.Companion.fromCode.<anonymous>' call
        if (element.vf_1 === code) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function values_3() {
    return [CurrencyCodeDescription_AED_getInstance(), CurrencyCodeDescription_AFN_getInstance(), CurrencyCodeDescription_ALL_getInstance(), CurrencyCodeDescription_AMD_getInstance(), CurrencyCodeDescription_ANG_getInstance(), CurrencyCodeDescription_AOA_getInstance(), CurrencyCodeDescription_ARS_getInstance(), CurrencyCodeDescription_AUD_getInstance(), CurrencyCodeDescription_AWG_getInstance(), CurrencyCodeDescription_AZN_getInstance(), CurrencyCodeDescription_BAM_getInstance(), CurrencyCodeDescription_BBD_getInstance(), CurrencyCodeDescription_BDT_getInstance(), CurrencyCodeDescription_BGN_getInstance(), CurrencyCodeDescription_BHD_getInstance(), CurrencyCodeDescription_BIF_getInstance(), CurrencyCodeDescription_BMD_getInstance(), CurrencyCodeDescription_BND_getInstance(), CurrencyCodeDescription_BOB_getInstance(), CurrencyCodeDescription_BRL_getInstance(), CurrencyCodeDescription_BSD_getInstance(), CurrencyCodeDescription_BTN_getInstance(), CurrencyCodeDescription_BWP_getInstance(), CurrencyCodeDescription_BYN_getInstance(), CurrencyCodeDescription_BZD_getInstance(), CurrencyCodeDescription_CAD_getInstance(), CurrencyCodeDescription_CDF_getInstance(), CurrencyCodeDescription_CHF_getInstance(), CurrencyCodeDescription_CLP_getInstance(), CurrencyCodeDescription_CNY_getInstance(), CurrencyCodeDescription_COP_getInstance(), CurrencyCodeDescription_CRC_getInstance(), CurrencyCodeDescription_CUC_getInstance(), CurrencyCodeDescription_CUP_getInstance(), CurrencyCodeDescription_CVE_getInstance(), CurrencyCodeDescription_CZK_getInstance(), CurrencyCodeDescription_DJF_getInstance(), CurrencyCodeDescription_DKK_getInstance(), CurrencyCodeDescription_DOP_getInstance(), CurrencyCodeDescription_DZD_getInstance(), CurrencyCodeDescription_EGP_getInstance(), CurrencyCodeDescription_ERN_getInstance(), CurrencyCodeDescription_ETB_getInstance(), CurrencyCodeDescription_EUR_getInstance(), CurrencyCodeDescription_FJD_getInstance(), CurrencyCodeDescription_FKP_getInstance(), CurrencyCodeDescription_GBP_getInstance(), CurrencyCodeDescription_GEL_getInstance(), CurrencyCodeDescription_GHS_getInstance(), CurrencyCodeDescription_GIP_getInstance(), CurrencyCodeDescription_GMD_getInstance(), CurrencyCodeDescription_GNF_getInstance(), CurrencyCodeDescription_GTQ_getInstance(), CurrencyCodeDescription_GYD_getInstance(), CurrencyCodeDescription_HKD_getInstance(), CurrencyCodeDescription_HNL_getInstance(), CurrencyCodeDescription_HRK_getInstance(), CurrencyCodeDescription_HTG_getInstance(), CurrencyCodeDescription_HUF_getInstance(), CurrencyCodeDescription_IDR_getInstance(), CurrencyCodeDescription_ILS_getInstance(), CurrencyCodeDescription_INR_getInstance(), CurrencyCodeDescription_IQD_getInstance(), CurrencyCodeDescription_IRR_getInstance(), CurrencyCodeDescription_ISK_getInstance(), CurrencyCodeDescription_JMD_getInstance(), CurrencyCodeDescription_JOD_getInstance(), CurrencyCodeDescription_JPY_getInstance(), CurrencyCodeDescription_KES_getInstance(), CurrencyCodeDescription_KGS_getInstance(), CurrencyCodeDescription_KHR_getInstance(), CurrencyCodeDescription_KMF_getInstance(), CurrencyCodeDescription_KPW_getInstance(), CurrencyCodeDescription_KRW_getInstance(), CurrencyCodeDescription_KWD_getInstance(), CurrencyCodeDescription_KYD_getInstance(), CurrencyCodeDescription_KZT_getInstance(), CurrencyCodeDescription_LAK_getInstance(), CurrencyCodeDescription_LBP_getInstance(), CurrencyCodeDescription_LKR_getInstance(), CurrencyCodeDescription_LRD_getInstance(), CurrencyCodeDescription_LSL_getInstance(), CurrencyCodeDescription_LYD_getInstance(), CurrencyCodeDescription_MAD_getInstance(), CurrencyCodeDescription_MDL_getInstance(), CurrencyCodeDescription_MGA_getInstance(), CurrencyCodeDescription_MKD_getInstance(), CurrencyCodeDescription_MMK_getInstance(), CurrencyCodeDescription_MNT_getInstance(), CurrencyCodeDescription_MOP_getInstance(), CurrencyCodeDescription_MRO_getInstance(), CurrencyCodeDescription_MUR_getInstance(), CurrencyCodeDescription_MVR_getInstance(), CurrencyCodeDescription_MWK_getInstance(), CurrencyCodeDescription_MXN_getInstance(), CurrencyCodeDescription_MYR_getInstance(), CurrencyCodeDescription_MZN_getInstance(), CurrencyCodeDescription_NAD_getInstance(), CurrencyCodeDescription_NGN_getInstance(), CurrencyCodeDescription_NIO_getInstance(), CurrencyCodeDescription_NOK_getInstance(), CurrencyCodeDescription_NPR_getInstance(), CurrencyCodeDescription_NZD_getInstance(), CurrencyCodeDescription_OMR_getInstance(), CurrencyCodeDescription_PAB_getInstance(), CurrencyCodeDescription_PEN_getInstance(), CurrencyCodeDescription_PGK_getInstance(), CurrencyCodeDescription_PHP_getInstance(), CurrencyCodeDescription_PKR_getInstance(), CurrencyCodeDescription_PLN_getInstance(), CurrencyCodeDescription_PYG_getInstance(), CurrencyCodeDescription_QAR_getInstance(), CurrencyCodeDescription_RON_getInstance(), CurrencyCodeDescription_RSD_getInstance(), CurrencyCodeDescription_RUB_getInstance(), CurrencyCodeDescription_RWF_getInstance(), CurrencyCodeDescription_SAR_getInstance(), CurrencyCodeDescription_SBD_getInstance(), CurrencyCodeDescription_SCR_getInstance(), CurrencyCodeDescription_SDG_getInstance(), CurrencyCodeDescription_SEK_getInstance(), CurrencyCodeDescription_SGD_getInstance(), CurrencyCodeDescription_SHP_getInstance(), CurrencyCodeDescription_SLL_getInstance(), CurrencyCodeDescription_SOS_getInstance(), CurrencyCodeDescription_SRD_getInstance(), CurrencyCodeDescription_SSP_getInstance(), CurrencyCodeDescription_STD_getInstance(), CurrencyCodeDescription_SVC_getInstance(), CurrencyCodeDescription_SYP_getInstance(), CurrencyCodeDescription_SZL_getInstance(), CurrencyCodeDescription_THB_getInstance(), CurrencyCodeDescription_TJS_getInstance(), CurrencyCodeDescription_TMT_getInstance(), CurrencyCodeDescription_TND_getInstance(), CurrencyCodeDescription_TOP_getInstance(), CurrencyCodeDescription_TRY_getInstance(), CurrencyCodeDescription_TTD_getInstance(), CurrencyCodeDescription_TWD_getInstance(), CurrencyCodeDescription_TZS_getInstance(), CurrencyCodeDescription_UAH_getInstance(), CurrencyCodeDescription_UGX_getInstance(), CurrencyCodeDescription_USD_getInstance(), CurrencyCodeDescription_UYU_getInstance(), CurrencyCodeDescription_UZS_getInstance(), CurrencyCodeDescription_VEF_getInstance(), CurrencyCodeDescription_VND_getInstance(), CurrencyCodeDescription_VUV_getInstance(), CurrencyCodeDescription_WST_getInstance(), CurrencyCodeDescription_XAF_getInstance(), CurrencyCodeDescription_XAG_getInstance(), CurrencyCodeDescription_XAU_getInstance(), CurrencyCodeDescription_XBA_getInstance(), CurrencyCodeDescription_XBB_getInstance(), CurrencyCodeDescription_XBC_getInstance(), CurrencyCodeDescription_XBD_getInstance(), CurrencyCodeDescription_XCD_getInstance(), CurrencyCodeDescription_XDR_getInstance(), CurrencyCodeDescription_XOF_getInstance(), CurrencyCodeDescription_XPD_getInstance(), CurrencyCodeDescription_XPF_getInstance(), CurrencyCodeDescription_XPT_getInstance(), CurrencyCodeDescription_XSU_getInstance(), CurrencyCodeDescription_XTS_getInstance(), CurrencyCodeDescription_XUA_getInstance(), CurrencyCodeDescription_XXX_getInstance(), CurrencyCodeDescription_YER_getInstance(), CurrencyCodeDescription_ZAR_getInstance(), CurrencyCodeDescription_ZMW_getInstance(), CurrencyCodeDescription_ZWL_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_3());
    return $ENTRIES_2;
  }
  var CurrencyCodeDescription_entriesInitialized;
  function CurrencyCodeDescription_initEntries() {
    if (CurrencyCodeDescription_entriesInitialized)
      return Unit_instance;
    CurrencyCodeDescription_entriesInitialized = true;
    CurrencyCodeDescription_AED_instance = new CurrencyCodeDescription('AED', 0, 784, 'UAE Dirham');
    CurrencyCodeDescription_AFN_instance = new CurrencyCodeDescription('AFN', 1, 971, 'Afghani');
    CurrencyCodeDescription_ALL_instance = new CurrencyCodeDescription('ALL', 2, 8, 'Lek');
    CurrencyCodeDescription_AMD_instance = new CurrencyCodeDescription('AMD', 3, 51, 'Armenian Dram');
    CurrencyCodeDescription_ANG_instance = new CurrencyCodeDescription('ANG', 4, 532, 'Netherlands Antillean Guilder');
    CurrencyCodeDescription_AOA_instance = new CurrencyCodeDescription('AOA', 5, 973, 'Kwanza');
    CurrencyCodeDescription_ARS_instance = new CurrencyCodeDescription('ARS', 6, 32, 'Argentine Peso');
    CurrencyCodeDescription_AUD_instance = new CurrencyCodeDescription('AUD', 7, 36, 'Australian Dollar');
    CurrencyCodeDescription_AWG_instance = new CurrencyCodeDescription('AWG', 8, 533, 'Aruban Florin');
    CurrencyCodeDescription_AZN_instance = new CurrencyCodeDescription('AZN', 9, 944, 'Azerbaijanian Manat');
    CurrencyCodeDescription_BAM_instance = new CurrencyCodeDescription('BAM', 10, 977, 'Convertible Mark');
    CurrencyCodeDescription_BBD_instance = new CurrencyCodeDescription('BBD', 11, 52, 'Barbados Dollar');
    CurrencyCodeDescription_BDT_instance = new CurrencyCodeDescription('BDT', 12, 50, 'Taka');
    CurrencyCodeDescription_BGN_instance = new CurrencyCodeDescription('BGN', 13, 975, 'Bulgarian Lev');
    CurrencyCodeDescription_BHD_instance = new CurrencyCodeDescription('BHD', 14, 48, 'Bahraini Dinar');
    CurrencyCodeDescription_BIF_instance = new CurrencyCodeDescription('BIF', 15, 108, 'Burundi Franc');
    CurrencyCodeDescription_BMD_instance = new CurrencyCodeDescription('BMD', 16, 60, 'Bermudian Dollar');
    CurrencyCodeDescription_BND_instance = new CurrencyCodeDescription('BND', 17, 96, 'Brunei Dollar');
    CurrencyCodeDescription_BOB_instance = new CurrencyCodeDescription('BOB', 18, 68, 'Boliviano');
    CurrencyCodeDescription_BRL_instance = new CurrencyCodeDescription('BRL', 19, 986, 'Brazilian Real');
    CurrencyCodeDescription_BSD_instance = new CurrencyCodeDescription('BSD', 20, 44, 'Bahamian Dollar');
    CurrencyCodeDescription_BTN_instance = new CurrencyCodeDescription('BTN', 21, 64, 'Ngultrum');
    CurrencyCodeDescription_BWP_instance = new CurrencyCodeDescription('BWP', 22, 72, 'Pula');
    CurrencyCodeDescription_BYN_instance = new CurrencyCodeDescription('BYN', 23, 933, 'Belarusian Ruble');
    CurrencyCodeDescription_BZD_instance = new CurrencyCodeDescription('BZD', 24, 84, 'Belize Dollar');
    CurrencyCodeDescription_CAD_instance = new CurrencyCodeDescription('CAD', 25, 124, 'Canadian Dollar');
    CurrencyCodeDescription_CDF_instance = new CurrencyCodeDescription('CDF', 26, 976, 'Congolese Franc');
    CurrencyCodeDescription_CHF_instance = new CurrencyCodeDescription('CHF', 27, 756, 'Swiss Franc');
    CurrencyCodeDescription_CLP_instance = new CurrencyCodeDescription('CLP', 28, 152, 'Chilean Peso');
    CurrencyCodeDescription_CNY_instance = new CurrencyCodeDescription('CNY', 29, 156, 'Yuan Renminbi');
    CurrencyCodeDescription_COP_instance = new CurrencyCodeDescription('COP', 30, 170, 'Colombian Peso');
    CurrencyCodeDescription_CRC_instance = new CurrencyCodeDescription('CRC', 31, 188, 'Costa Rican Colon');
    CurrencyCodeDescription_CUC_instance = new CurrencyCodeDescription('CUC', 32, 931, 'Peso Convertible');
    CurrencyCodeDescription_CUP_instance = new CurrencyCodeDescription('CUP', 33, 192, 'Cuban Peso');
    CurrencyCodeDescription_CVE_instance = new CurrencyCodeDescription('CVE', 34, 132, 'Cabo Verde Escudo');
    CurrencyCodeDescription_CZK_instance = new CurrencyCodeDescription('CZK', 35, 203, 'Czech Koruna');
    CurrencyCodeDescription_DJF_instance = new CurrencyCodeDescription('DJF', 36, 262, 'Djibouti Franc');
    CurrencyCodeDescription_DKK_instance = new CurrencyCodeDescription('DKK', 37, 208, 'Danish Krone');
    CurrencyCodeDescription_DOP_instance = new CurrencyCodeDescription('DOP', 38, 214, 'Dominican Peso');
    CurrencyCodeDescription_DZD_instance = new CurrencyCodeDescription('DZD', 39, 12, 'Algerian Dinar');
    CurrencyCodeDescription_EGP_instance = new CurrencyCodeDescription('EGP', 40, 818, 'Egyptian Pound');
    CurrencyCodeDescription_ERN_instance = new CurrencyCodeDescription('ERN', 41, 232, 'Nakfa');
    CurrencyCodeDescription_ETB_instance = new CurrencyCodeDescription('ETB', 42, 230, 'Ethiopian Birr');
    CurrencyCodeDescription_EUR_instance = new CurrencyCodeDescription('EUR', 43, 978, 'Euro');
    CurrencyCodeDescription_FJD_instance = new CurrencyCodeDescription('FJD', 44, 242, 'Fiji Dollar');
    CurrencyCodeDescription_FKP_instance = new CurrencyCodeDescription('FKP', 45, 238, 'Falkland Islands Pound');
    CurrencyCodeDescription_GBP_instance = new CurrencyCodeDescription('GBP', 46, 826, 'Pound Sterling');
    CurrencyCodeDescription_GEL_instance = new CurrencyCodeDescription('GEL', 47, 981, 'Lari');
    CurrencyCodeDescription_GHS_instance = new CurrencyCodeDescription('GHS', 48, 936, 'Ghana Cedi');
    CurrencyCodeDescription_GIP_instance = new CurrencyCodeDescription('GIP', 49, 292, 'Gibraltar Pound');
    CurrencyCodeDescription_GMD_instance = new CurrencyCodeDescription('GMD', 50, 270, 'Dalasi');
    CurrencyCodeDescription_GNF_instance = new CurrencyCodeDescription('GNF', 51, 324, 'Guinea Franc');
    CurrencyCodeDescription_GTQ_instance = new CurrencyCodeDescription('GTQ', 52, 320, 'Quetzal');
    CurrencyCodeDescription_GYD_instance = new CurrencyCodeDescription('GYD', 53, 328, 'Guyana Dollar');
    CurrencyCodeDescription_HKD_instance = new CurrencyCodeDescription('HKD', 54, 344, 'Hong Kong Dollar');
    CurrencyCodeDescription_HNL_instance = new CurrencyCodeDescription('HNL', 55, 340, 'Lempira');
    CurrencyCodeDescription_HRK_instance = new CurrencyCodeDescription('HRK', 56, 191, 'Kuna');
    CurrencyCodeDescription_HTG_instance = new CurrencyCodeDescription('HTG', 57, 332, 'Gourde');
    CurrencyCodeDescription_HUF_instance = new CurrencyCodeDescription('HUF', 58, 348, 'Forint');
    CurrencyCodeDescription_IDR_instance = new CurrencyCodeDescription('IDR', 59, 360, 'Rupiah');
    CurrencyCodeDescription_ILS_instance = new CurrencyCodeDescription('ILS', 60, 376, 'New Israeli Sheqel');
    CurrencyCodeDescription_INR_instance = new CurrencyCodeDescription('INR', 61, 356, 'Indian Rupee');
    CurrencyCodeDescription_IQD_instance = new CurrencyCodeDescription('IQD', 62, 368, 'Iraqi Dinar');
    CurrencyCodeDescription_IRR_instance = new CurrencyCodeDescription('IRR', 63, 364, 'Iranian Rial');
    CurrencyCodeDescription_ISK_instance = new CurrencyCodeDescription('ISK', 64, 352, 'Iceland Krona');
    CurrencyCodeDescription_JMD_instance = new CurrencyCodeDescription('JMD', 65, 388, 'Jamaican Dollar');
    CurrencyCodeDescription_JOD_instance = new CurrencyCodeDescription('JOD', 66, 400, 'Jordanian Dinar');
    CurrencyCodeDescription_JPY_instance = new CurrencyCodeDescription('JPY', 67, 392, 'Yen');
    CurrencyCodeDescription_KES_instance = new CurrencyCodeDescription('KES', 68, 404, 'Kenyan Shilling');
    CurrencyCodeDescription_KGS_instance = new CurrencyCodeDescription('KGS', 69, 417, 'Som');
    CurrencyCodeDescription_KHR_instance = new CurrencyCodeDescription('KHR', 70, 116, 'Riel');
    CurrencyCodeDescription_KMF_instance = new CurrencyCodeDescription('KMF', 71, 174, 'Comoro Franc');
    CurrencyCodeDescription_KPW_instance = new CurrencyCodeDescription('KPW', 72, 408, 'North Korean Won');
    CurrencyCodeDescription_KRW_instance = new CurrencyCodeDescription('KRW', 73, 410, 'Won');
    CurrencyCodeDescription_KWD_instance = new CurrencyCodeDescription('KWD', 74, 414, 'Kuwaiti Dinar');
    CurrencyCodeDescription_KYD_instance = new CurrencyCodeDescription('KYD', 75, 136, 'Cayman Islands Dollar');
    CurrencyCodeDescription_KZT_instance = new CurrencyCodeDescription('KZT', 76, 398, 'Tenge');
    CurrencyCodeDescription_LAK_instance = new CurrencyCodeDescription('LAK', 77, 418, 'Kip');
    CurrencyCodeDescription_LBP_instance = new CurrencyCodeDescription('LBP', 78, 422, 'Lebanese Pound');
    CurrencyCodeDescription_LKR_instance = new CurrencyCodeDescription('LKR', 79, 144, 'Sri Lanka Rupee');
    CurrencyCodeDescription_LRD_instance = new CurrencyCodeDescription('LRD', 80, 430, 'Liberian Dollar');
    CurrencyCodeDescription_LSL_instance = new CurrencyCodeDescription('LSL', 81, 426, 'Loti');
    CurrencyCodeDescription_LYD_instance = new CurrencyCodeDescription('LYD', 82, 434, 'Libyan Dinar');
    CurrencyCodeDescription_MAD_instance = new CurrencyCodeDescription('MAD', 83, 504, 'Moroccan Dirham');
    CurrencyCodeDescription_MDL_instance = new CurrencyCodeDescription('MDL', 84, 498, 'Moldovan Leu');
    CurrencyCodeDescription_MGA_instance = new CurrencyCodeDescription('MGA', 85, 969, 'Malagasy Ariary');
    CurrencyCodeDescription_MKD_instance = new CurrencyCodeDescription('MKD', 86, 807, 'Denar');
    CurrencyCodeDescription_MMK_instance = new CurrencyCodeDescription('MMK', 87, 104, 'Kyat');
    CurrencyCodeDescription_MNT_instance = new CurrencyCodeDescription('MNT', 88, 496, 'Tugrik');
    CurrencyCodeDescription_MOP_instance = new CurrencyCodeDescription('MOP', 89, 446, 'Pataca');
    CurrencyCodeDescription_MRO_instance = new CurrencyCodeDescription('MRO', 90, 478, 'Ouguiya');
    CurrencyCodeDescription_MUR_instance = new CurrencyCodeDescription('MUR', 91, 480, 'Mauritius Rupee');
    CurrencyCodeDescription_MVR_instance = new CurrencyCodeDescription('MVR', 92, 462, 'Rufiyaa');
    CurrencyCodeDescription_MWK_instance = new CurrencyCodeDescription('MWK', 93, 454, 'Malawi Kwacha');
    CurrencyCodeDescription_MXN_instance = new CurrencyCodeDescription('MXN', 94, 484, 'Mexican Peso');
    CurrencyCodeDescription_MYR_instance = new CurrencyCodeDescription('MYR', 95, 458, 'Malaysian Ringgit');
    CurrencyCodeDescription_MZN_instance = new CurrencyCodeDescription('MZN', 96, 943, 'Mozambique Metical');
    CurrencyCodeDescription_NAD_instance = new CurrencyCodeDescription('NAD', 97, 516, 'Namibia Dollar');
    CurrencyCodeDescription_NGN_instance = new CurrencyCodeDescription('NGN', 98, 566, 'Naira');
    CurrencyCodeDescription_NIO_instance = new CurrencyCodeDescription('NIO', 99, 558, 'Cordoba Oro');
    CurrencyCodeDescription_NOK_instance = new CurrencyCodeDescription('NOK', 100, 578, 'Norwegian Krone');
    CurrencyCodeDescription_NPR_instance = new CurrencyCodeDescription('NPR', 101, 524, 'Nepalese Rupee');
    CurrencyCodeDescription_NZD_instance = new CurrencyCodeDescription('NZD', 102, 554, 'New Zealand Dollar');
    CurrencyCodeDescription_OMR_instance = new CurrencyCodeDescription('OMR', 103, 512, 'Rial Omani');
    CurrencyCodeDescription_PAB_instance = new CurrencyCodeDescription('PAB', 104, 590, 'Balboa');
    CurrencyCodeDescription_PEN_instance = new CurrencyCodeDescription('PEN', 105, 604, 'Sol');
    CurrencyCodeDescription_PGK_instance = new CurrencyCodeDescription('PGK', 106, 598, 'Kina');
    CurrencyCodeDescription_PHP_instance = new CurrencyCodeDescription('PHP', 107, 608, 'Philippine Peso');
    CurrencyCodeDescription_PKR_instance = new CurrencyCodeDescription('PKR', 108, 586, 'Pakistan Rupee');
    CurrencyCodeDescription_PLN_instance = new CurrencyCodeDescription('PLN', 109, 985, 'Zloty');
    CurrencyCodeDescription_PYG_instance = new CurrencyCodeDescription('PYG', 110, 600, 'Guarani');
    CurrencyCodeDescription_QAR_instance = new CurrencyCodeDescription('QAR', 111, 634, 'Qatari Rial');
    CurrencyCodeDescription_RON_instance = new CurrencyCodeDescription('RON', 112, 946, 'Romanian Leu');
    CurrencyCodeDescription_RSD_instance = new CurrencyCodeDescription('RSD', 113, 941, 'Serbian Dinar');
    CurrencyCodeDescription_RUB_instance = new CurrencyCodeDescription('RUB', 114, 643, 'Russian Ruble');
    CurrencyCodeDescription_RWF_instance = new CurrencyCodeDescription('RWF', 115, 646, 'Rwanda Franc');
    CurrencyCodeDescription_SAR_instance = new CurrencyCodeDescription('SAR', 116, 682, 'Saudi Riyal');
    CurrencyCodeDescription_SBD_instance = new CurrencyCodeDescription('SBD', 117, 90, 'Solomon Islands Dollar');
    CurrencyCodeDescription_SCR_instance = new CurrencyCodeDescription('SCR', 118, 690, 'Seychelles Rupee');
    CurrencyCodeDescription_SDG_instance = new CurrencyCodeDescription('SDG', 119, 938, 'Sudanese Pound');
    CurrencyCodeDescription_SEK_instance = new CurrencyCodeDescription('SEK', 120, 752, 'Swedish Krona');
    CurrencyCodeDescription_SGD_instance = new CurrencyCodeDescription('SGD', 121, 702, 'Singapore Dollar');
    CurrencyCodeDescription_SHP_instance = new CurrencyCodeDescription('SHP', 122, 654, 'Saint Helena Pound');
    CurrencyCodeDescription_SLL_instance = new CurrencyCodeDescription('SLL', 123, 694, 'Leone');
    CurrencyCodeDescription_SOS_instance = new CurrencyCodeDescription('SOS', 124, 706, 'Somali Shilling');
    CurrencyCodeDescription_SRD_instance = new CurrencyCodeDescription('SRD', 125, 968, 'Surinam Dollar');
    CurrencyCodeDescription_SSP_instance = new CurrencyCodeDescription('SSP', 126, 728, 'South Sudanese Pound');
    CurrencyCodeDescription_STD_instance = new CurrencyCodeDescription('STD', 127, 678, 'Dobra');
    CurrencyCodeDescription_SVC_instance = new CurrencyCodeDescription('SVC', 128, 222, 'El Salvador Colon');
    CurrencyCodeDescription_SYP_instance = new CurrencyCodeDescription('SYP', 129, 760, 'Syrian Pound');
    CurrencyCodeDescription_SZL_instance = new CurrencyCodeDescription('SZL', 130, 748, 'Lilangeni');
    CurrencyCodeDescription_THB_instance = new CurrencyCodeDescription('THB', 131, 764, 'Baht');
    CurrencyCodeDescription_TJS_instance = new CurrencyCodeDescription('TJS', 132, 972, 'Somoni');
    CurrencyCodeDescription_TMT_instance = new CurrencyCodeDescription('TMT', 133, 934, 'Turkmenistan New Manat');
    CurrencyCodeDescription_TND_instance = new CurrencyCodeDescription('TND', 134, 788, 'Tunisian Dinar');
    CurrencyCodeDescription_TOP_instance = new CurrencyCodeDescription('TOP', 135, 776, 'Pa\u2019anga');
    CurrencyCodeDescription_TRY_instance = new CurrencyCodeDescription('TRY', 136, 949, 'Turkish Lira');
    CurrencyCodeDescription_TTD_instance = new CurrencyCodeDescription('TTD', 137, 780, 'Trinidad and Tobago Dollar');
    CurrencyCodeDescription_TWD_instance = new CurrencyCodeDescription('TWD', 138, 901, 'New Taiwan Dollar');
    CurrencyCodeDescription_TZS_instance = new CurrencyCodeDescription('TZS', 139, 834, 'Tanzanian Shilling');
    CurrencyCodeDescription_UAH_instance = new CurrencyCodeDescription('UAH', 140, 980, 'Hryvnia');
    CurrencyCodeDescription_UGX_instance = new CurrencyCodeDescription('UGX', 141, 800, 'Uganda Shilling');
    CurrencyCodeDescription_USD_instance = new CurrencyCodeDescription('USD', 142, 840, 'US Dollar');
    CurrencyCodeDescription_UYU_instance = new CurrencyCodeDescription('UYU', 143, 858, 'Peso Uruguayo');
    CurrencyCodeDescription_UZS_instance = new CurrencyCodeDescription('UZS', 144, 860, 'Uzbekistan Sum');
    CurrencyCodeDescription_VEF_instance = new CurrencyCodeDescription('VEF', 145, 937, 'Bol\xEDvar');
    CurrencyCodeDescription_VND_instance = new CurrencyCodeDescription('VND', 146, 704, 'Dong');
    CurrencyCodeDescription_VUV_instance = new CurrencyCodeDescription('VUV', 147, 548, 'Vatu');
    CurrencyCodeDescription_WST_instance = new CurrencyCodeDescription('WST', 148, 882, 'Tala');
    CurrencyCodeDescription_XAF_instance = new CurrencyCodeDescription('XAF', 149, 950, 'CFA Franc BEAC');
    CurrencyCodeDescription_XAG_instance = new CurrencyCodeDescription('XAG', 150, 961, 'Silver');
    CurrencyCodeDescription_XAU_instance = new CurrencyCodeDescription('XAU', 151, 959, 'Gold');
    CurrencyCodeDescription_XBA_instance = new CurrencyCodeDescription('XBA', 152, 955, 'Bond Markets Unit European Composite Unit (EURCO)');
    CurrencyCodeDescription_XBB_instance = new CurrencyCodeDescription('XBB', 153, 956, 'Bond Markets Unit European Monetary Unit (E.M.U.-6)');
    CurrencyCodeDescription_XBC_instance = new CurrencyCodeDescription('XBC', 154, 957, 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)');
    CurrencyCodeDescription_XBD_instance = new CurrencyCodeDescription('XBD', 155, 958, 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)');
    CurrencyCodeDescription_XCD_instance = new CurrencyCodeDescription('XCD', 156, 951, 'East Caribbean Dollar');
    CurrencyCodeDescription_XDR_instance = new CurrencyCodeDescription('XDR', 157, 960, 'SDR (Special Drawing Right)');
    CurrencyCodeDescription_XOF_instance = new CurrencyCodeDescription('XOF', 158, 952, 'CFA Franc BCEAO');
    CurrencyCodeDescription_XPD_instance = new CurrencyCodeDescription('XPD', 159, 964, 'Palladium');
    CurrencyCodeDescription_XPF_instance = new CurrencyCodeDescription('XPF', 160, 953, 'CFP Franc');
    CurrencyCodeDescription_XPT_instance = new CurrencyCodeDescription('XPT', 161, 962, 'Platinum');
    CurrencyCodeDescription_XSU_instance = new CurrencyCodeDescription('XSU', 162, 994, 'Sucre');
    CurrencyCodeDescription_XTS_instance = new CurrencyCodeDescription('XTS', 163, 963, 'Codes specifically reserved for testing purposes');
    CurrencyCodeDescription_XUA_instance = new CurrencyCodeDescription('XUA', 164, 965, 'ADB Unit of Account');
    CurrencyCodeDescription_XXX_instance = new CurrencyCodeDescription('XXX', 165, 999, 'The codes assigned for transactions where no currency is involved');
    CurrencyCodeDescription_YER_instance = new CurrencyCodeDescription('YER', 166, 886, 'Yemeni Rial');
    CurrencyCodeDescription_ZAR_instance = new CurrencyCodeDescription('ZAR', 167, 710, 'Rand');
    CurrencyCodeDescription_ZMW_instance = new CurrencyCodeDescription('ZMW', 168, 967, 'Zambian Kwacha');
    CurrencyCodeDescription_ZWL_instance = new CurrencyCodeDescription('ZWL', 169, 932, 'Zimbabwe Dollar');
  }
  var $ENTRIES_2;
  function CurrencyCodeDescription(name, ordinal, code, description) {
    Enum.call(this, name, ordinal);
    this.vf_1 = code;
    this.wf_1 = description;
  }
  function CurrencyCodeDescription_AED_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AED_instance;
  }
  function CurrencyCodeDescription_AFN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AFN_instance;
  }
  function CurrencyCodeDescription_ALL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ALL_instance;
  }
  function CurrencyCodeDescription_AMD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AMD_instance;
  }
  function CurrencyCodeDescription_ANG_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ANG_instance;
  }
  function CurrencyCodeDescription_AOA_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AOA_instance;
  }
  function CurrencyCodeDescription_ARS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ARS_instance;
  }
  function CurrencyCodeDescription_AUD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AUD_instance;
  }
  function CurrencyCodeDescription_AWG_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AWG_instance;
  }
  function CurrencyCodeDescription_AZN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_AZN_instance;
  }
  function CurrencyCodeDescription_BAM_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BAM_instance;
  }
  function CurrencyCodeDescription_BBD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BBD_instance;
  }
  function CurrencyCodeDescription_BDT_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BDT_instance;
  }
  function CurrencyCodeDescription_BGN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BGN_instance;
  }
  function CurrencyCodeDescription_BHD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BHD_instance;
  }
  function CurrencyCodeDescription_BIF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BIF_instance;
  }
  function CurrencyCodeDescription_BMD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BMD_instance;
  }
  function CurrencyCodeDescription_BND_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BND_instance;
  }
  function CurrencyCodeDescription_BOB_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BOB_instance;
  }
  function CurrencyCodeDescription_BRL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BRL_instance;
  }
  function CurrencyCodeDescription_BSD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BSD_instance;
  }
  function CurrencyCodeDescription_BTN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BTN_instance;
  }
  function CurrencyCodeDescription_BWP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BWP_instance;
  }
  function CurrencyCodeDescription_BYN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BYN_instance;
  }
  function CurrencyCodeDescription_BZD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_BZD_instance;
  }
  function CurrencyCodeDescription_CAD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CAD_instance;
  }
  function CurrencyCodeDescription_CDF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CDF_instance;
  }
  function CurrencyCodeDescription_CHF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CHF_instance;
  }
  function CurrencyCodeDescription_CLP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CLP_instance;
  }
  function CurrencyCodeDescription_CNY_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CNY_instance;
  }
  function CurrencyCodeDescription_COP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_COP_instance;
  }
  function CurrencyCodeDescription_CRC_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CRC_instance;
  }
  function CurrencyCodeDescription_CUC_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CUC_instance;
  }
  function CurrencyCodeDescription_CUP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CUP_instance;
  }
  function CurrencyCodeDescription_CVE_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CVE_instance;
  }
  function CurrencyCodeDescription_CZK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_CZK_instance;
  }
  function CurrencyCodeDescription_DJF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_DJF_instance;
  }
  function CurrencyCodeDescription_DKK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_DKK_instance;
  }
  function CurrencyCodeDescription_DOP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_DOP_instance;
  }
  function CurrencyCodeDescription_DZD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_DZD_instance;
  }
  function CurrencyCodeDescription_EGP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_EGP_instance;
  }
  function CurrencyCodeDescription_ERN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ERN_instance;
  }
  function CurrencyCodeDescription_ETB_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ETB_instance;
  }
  function CurrencyCodeDescription_EUR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_EUR_instance;
  }
  function CurrencyCodeDescription_FJD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_FJD_instance;
  }
  function CurrencyCodeDescription_FKP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_FKP_instance;
  }
  function CurrencyCodeDescription_GBP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GBP_instance;
  }
  function CurrencyCodeDescription_GEL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GEL_instance;
  }
  function CurrencyCodeDescription_GHS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GHS_instance;
  }
  function CurrencyCodeDescription_GIP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GIP_instance;
  }
  function CurrencyCodeDescription_GMD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GMD_instance;
  }
  function CurrencyCodeDescription_GNF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GNF_instance;
  }
  function CurrencyCodeDescription_GTQ_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GTQ_instance;
  }
  function CurrencyCodeDescription_GYD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_GYD_instance;
  }
  function CurrencyCodeDescription_HKD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_HKD_instance;
  }
  function CurrencyCodeDescription_HNL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_HNL_instance;
  }
  function CurrencyCodeDescription_HRK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_HRK_instance;
  }
  function CurrencyCodeDescription_HTG_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_HTG_instance;
  }
  function CurrencyCodeDescription_HUF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_HUF_instance;
  }
  function CurrencyCodeDescription_IDR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_IDR_instance;
  }
  function CurrencyCodeDescription_ILS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ILS_instance;
  }
  function CurrencyCodeDescription_INR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_INR_instance;
  }
  function CurrencyCodeDescription_IQD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_IQD_instance;
  }
  function CurrencyCodeDescription_IRR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_IRR_instance;
  }
  function CurrencyCodeDescription_ISK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ISK_instance;
  }
  function CurrencyCodeDescription_JMD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_JMD_instance;
  }
  function CurrencyCodeDescription_JOD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_JOD_instance;
  }
  function CurrencyCodeDescription_JPY_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_JPY_instance;
  }
  function CurrencyCodeDescription_KES_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KES_instance;
  }
  function CurrencyCodeDescription_KGS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KGS_instance;
  }
  function CurrencyCodeDescription_KHR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KHR_instance;
  }
  function CurrencyCodeDescription_KMF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KMF_instance;
  }
  function CurrencyCodeDescription_KPW_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KPW_instance;
  }
  function CurrencyCodeDescription_KRW_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KRW_instance;
  }
  function CurrencyCodeDescription_KWD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KWD_instance;
  }
  function CurrencyCodeDescription_KYD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KYD_instance;
  }
  function CurrencyCodeDescription_KZT_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_KZT_instance;
  }
  function CurrencyCodeDescription_LAK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_LAK_instance;
  }
  function CurrencyCodeDescription_LBP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_LBP_instance;
  }
  function CurrencyCodeDescription_LKR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_LKR_instance;
  }
  function CurrencyCodeDescription_LRD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_LRD_instance;
  }
  function CurrencyCodeDescription_LSL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_LSL_instance;
  }
  function CurrencyCodeDescription_LYD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_LYD_instance;
  }
  function CurrencyCodeDescription_MAD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MAD_instance;
  }
  function CurrencyCodeDescription_MDL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MDL_instance;
  }
  function CurrencyCodeDescription_MGA_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MGA_instance;
  }
  function CurrencyCodeDescription_MKD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MKD_instance;
  }
  function CurrencyCodeDescription_MMK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MMK_instance;
  }
  function CurrencyCodeDescription_MNT_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MNT_instance;
  }
  function CurrencyCodeDescription_MOP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MOP_instance;
  }
  function CurrencyCodeDescription_MRO_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MRO_instance;
  }
  function CurrencyCodeDescription_MUR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MUR_instance;
  }
  function CurrencyCodeDescription_MVR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MVR_instance;
  }
  function CurrencyCodeDescription_MWK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MWK_instance;
  }
  function CurrencyCodeDescription_MXN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MXN_instance;
  }
  function CurrencyCodeDescription_MYR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MYR_instance;
  }
  function CurrencyCodeDescription_MZN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_MZN_instance;
  }
  function CurrencyCodeDescription_NAD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_NAD_instance;
  }
  function CurrencyCodeDescription_NGN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_NGN_instance;
  }
  function CurrencyCodeDescription_NIO_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_NIO_instance;
  }
  function CurrencyCodeDescription_NOK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_NOK_instance;
  }
  function CurrencyCodeDescription_NPR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_NPR_instance;
  }
  function CurrencyCodeDescription_NZD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_NZD_instance;
  }
  function CurrencyCodeDescription_OMR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_OMR_instance;
  }
  function CurrencyCodeDescription_PAB_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PAB_instance;
  }
  function CurrencyCodeDescription_PEN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PEN_instance;
  }
  function CurrencyCodeDescription_PGK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PGK_instance;
  }
  function CurrencyCodeDescription_PHP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PHP_instance;
  }
  function CurrencyCodeDescription_PKR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PKR_instance;
  }
  function CurrencyCodeDescription_PLN_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PLN_instance;
  }
  function CurrencyCodeDescription_PYG_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_PYG_instance;
  }
  function CurrencyCodeDescription_QAR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_QAR_instance;
  }
  function CurrencyCodeDescription_RON_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_RON_instance;
  }
  function CurrencyCodeDescription_RSD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_RSD_instance;
  }
  function CurrencyCodeDescription_RUB_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_RUB_instance;
  }
  function CurrencyCodeDescription_RWF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_RWF_instance;
  }
  function CurrencyCodeDescription_SAR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SAR_instance;
  }
  function CurrencyCodeDescription_SBD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SBD_instance;
  }
  function CurrencyCodeDescription_SCR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SCR_instance;
  }
  function CurrencyCodeDescription_SDG_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SDG_instance;
  }
  function CurrencyCodeDescription_SEK_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SEK_instance;
  }
  function CurrencyCodeDescription_SGD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SGD_instance;
  }
  function CurrencyCodeDescription_SHP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SHP_instance;
  }
  function CurrencyCodeDescription_SLL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SLL_instance;
  }
  function CurrencyCodeDescription_SOS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SOS_instance;
  }
  function CurrencyCodeDescription_SRD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SRD_instance;
  }
  function CurrencyCodeDescription_SSP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SSP_instance;
  }
  function CurrencyCodeDescription_STD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_STD_instance;
  }
  function CurrencyCodeDescription_SVC_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SVC_instance;
  }
  function CurrencyCodeDescription_SYP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SYP_instance;
  }
  function CurrencyCodeDescription_SZL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_SZL_instance;
  }
  function CurrencyCodeDescription_THB_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_THB_instance;
  }
  function CurrencyCodeDescription_TJS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TJS_instance;
  }
  function CurrencyCodeDescription_TMT_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TMT_instance;
  }
  function CurrencyCodeDescription_TND_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TND_instance;
  }
  function CurrencyCodeDescription_TOP_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TOP_instance;
  }
  function CurrencyCodeDescription_TRY_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TRY_instance;
  }
  function CurrencyCodeDescription_TTD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TTD_instance;
  }
  function CurrencyCodeDescription_TWD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TWD_instance;
  }
  function CurrencyCodeDescription_TZS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_TZS_instance;
  }
  function CurrencyCodeDescription_UAH_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_UAH_instance;
  }
  function CurrencyCodeDescription_UGX_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_UGX_instance;
  }
  function CurrencyCodeDescription_USD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_USD_instance;
  }
  function CurrencyCodeDescription_UYU_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_UYU_instance;
  }
  function CurrencyCodeDescription_UZS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_UZS_instance;
  }
  function CurrencyCodeDescription_VEF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_VEF_instance;
  }
  function CurrencyCodeDescription_VND_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_VND_instance;
  }
  function CurrencyCodeDescription_VUV_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_VUV_instance;
  }
  function CurrencyCodeDescription_WST_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_WST_instance;
  }
  function CurrencyCodeDescription_XAF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XAF_instance;
  }
  function CurrencyCodeDescription_XAG_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XAG_instance;
  }
  function CurrencyCodeDescription_XAU_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XAU_instance;
  }
  function CurrencyCodeDescription_XBA_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XBA_instance;
  }
  function CurrencyCodeDescription_XBB_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XBB_instance;
  }
  function CurrencyCodeDescription_XBC_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XBC_instance;
  }
  function CurrencyCodeDescription_XBD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XBD_instance;
  }
  function CurrencyCodeDescription_XCD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XCD_instance;
  }
  function CurrencyCodeDescription_XDR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XDR_instance;
  }
  function CurrencyCodeDescription_XOF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XOF_instance;
  }
  function CurrencyCodeDescription_XPD_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XPD_instance;
  }
  function CurrencyCodeDescription_XPF_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XPF_instance;
  }
  function CurrencyCodeDescription_XPT_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XPT_instance;
  }
  function CurrencyCodeDescription_XSU_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XSU_instance;
  }
  function CurrencyCodeDescription_XTS_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XTS_instance;
  }
  function CurrencyCodeDescription_XUA_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XUA_instance;
  }
  function CurrencyCodeDescription_XXX_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_XXX_instance;
  }
  function CurrencyCodeDescription_YER_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_YER_instance;
  }
  function CurrencyCodeDescription_ZAR_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ZAR_instance;
  }
  function CurrencyCodeDescription_ZMW_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ZMW_instance;
  }
  function CurrencyCodeDescription_ZWL_getInstance() {
    CurrencyCodeDescription_initEntries();
    return CurrencyCodeDescription_ZWL_instance;
  }
  var LanguageCodeDescription_AAR_instance;
  var LanguageCodeDescription_ABK_instance;
  var LanguageCodeDescription_AFR_instance;
  var LanguageCodeDescription_AKA_instance;
  var LanguageCodeDescription_AMH_instance;
  var LanguageCodeDescription_ARA_instance;
  var LanguageCodeDescription_ARG_instance;
  var LanguageCodeDescription_ASM_instance;
  var LanguageCodeDescription_AVA_instance;
  var LanguageCodeDescription_AVE_instance;
  var LanguageCodeDescription_AYM_instance;
  var LanguageCodeDescription_AZE_instance;
  var LanguageCodeDescription_BAK_instance;
  var LanguageCodeDescription_BAM_instance;
  var LanguageCodeDescription_BEL_instance;
  var LanguageCodeDescription_BEN_instance;
  var LanguageCodeDescription_BIS_instance;
  var LanguageCodeDescription_BOD_instance;
  var LanguageCodeDescription_BOS_instance;
  var LanguageCodeDescription_BRE_instance;
  var LanguageCodeDescription_BUL_instance;
  var LanguageCodeDescription_CAT_instance;
  var LanguageCodeDescription_CES_instance;
  var LanguageCodeDescription_CHA_instance;
  var LanguageCodeDescription_CHE_instance;
  var LanguageCodeDescription_CHU_instance;
  var LanguageCodeDescription_CHV_instance;
  var LanguageCodeDescription_COR_instance;
  var LanguageCodeDescription_COS_instance;
  var LanguageCodeDescription_CRE_instance;
  var LanguageCodeDescription_CYM_instance;
  var LanguageCodeDescription_DAN_instance;
  var LanguageCodeDescription_DEU_instance;
  var LanguageCodeDescription_DIV_instance;
  var LanguageCodeDescription_DZO_instance;
  var LanguageCodeDescription_ELL_instance;
  var LanguageCodeDescription_ENG_instance;
  var LanguageCodeDescription_EPO_instance;
  var LanguageCodeDescription_EST_instance;
  var LanguageCodeDescription_EUS_instance;
  var LanguageCodeDescription_EWE_instance;
  var LanguageCodeDescription_FAO_instance;
  var LanguageCodeDescription_FAS_instance;
  var LanguageCodeDescription_FIJ_instance;
  var LanguageCodeDescription_FIN_instance;
  var LanguageCodeDescription_FRA_instance;
  var LanguageCodeDescription_FRY_instance;
  var LanguageCodeDescription_FUL_instance;
  var LanguageCodeDescription_GLA_instance;
  var LanguageCodeDescription_GLE_instance;
  var LanguageCodeDescription_GLG_instance;
  var LanguageCodeDescription_GLV_instance;
  var LanguageCodeDescription_GRN_instance;
  var LanguageCodeDescription_GUJ_instance;
  var LanguageCodeDescription_HAT_instance;
  var LanguageCodeDescription_HAU_instance;
  var LanguageCodeDescription_HBS_instance;
  var LanguageCodeDescription_HEB_instance;
  var LanguageCodeDescription_HER_instance;
  var LanguageCodeDescription_HIN_instance;
  var LanguageCodeDescription_HMO_instance;
  var LanguageCodeDescription_HRV_instance;
  var LanguageCodeDescription_HUN_instance;
  var LanguageCodeDescription_HYE_instance;
  var LanguageCodeDescription_IBO_instance;
  var LanguageCodeDescription_IDO_instance;
  var LanguageCodeDescription_III_instance;
  var LanguageCodeDescription_IKU_instance;
  var LanguageCodeDescription_ILE_instance;
  var LanguageCodeDescription_INA_instance;
  var LanguageCodeDescription_IND_instance;
  var LanguageCodeDescription_IPK_instance;
  var LanguageCodeDescription_ISL_instance;
  var LanguageCodeDescription_ITA_instance;
  var LanguageCodeDescription_JAV_instance;
  var LanguageCodeDescription_JPN_instance;
  var LanguageCodeDescription_KAL_instance;
  var LanguageCodeDescription_KAN_instance;
  var LanguageCodeDescription_KAS_instance;
  var LanguageCodeDescription_KAT_instance;
  var LanguageCodeDescription_KAU_instance;
  var LanguageCodeDescription_KAZ_instance;
  var LanguageCodeDescription_KHM_instance;
  var LanguageCodeDescription_KIK_instance;
  var LanguageCodeDescription_KIN_instance;
  var LanguageCodeDescription_KIR_instance;
  var LanguageCodeDescription_KOM_instance;
  var LanguageCodeDescription_KON_instance;
  var LanguageCodeDescription_KOR_instance;
  var LanguageCodeDescription_KUA_instance;
  var LanguageCodeDescription_KUR_instance;
  var LanguageCodeDescription_LAO_instance;
  var LanguageCodeDescription_LAT_instance;
  var LanguageCodeDescription_LAV_instance;
  var LanguageCodeDescription_LIM_instance;
  var LanguageCodeDescription_LIN_instance;
  var LanguageCodeDescription_LIT_instance;
  var LanguageCodeDescription_LTZ_instance;
  var LanguageCodeDescription_LUB_instance;
  var LanguageCodeDescription_LUG_instance;
  var LanguageCodeDescription_MAH_instance;
  var LanguageCodeDescription_MAL_instance;
  var LanguageCodeDescription_MAR_instance;
  var LanguageCodeDescription_MKD_instance;
  var LanguageCodeDescription_MLG_instance;
  var LanguageCodeDescription_MLT_instance;
  var LanguageCodeDescription_MON_instance;
  var LanguageCodeDescription_MRI_instance;
  var LanguageCodeDescription_MSA_instance;
  var LanguageCodeDescription_MYA_instance;
  var LanguageCodeDescription_NAU_instance;
  var LanguageCodeDescription_NAV_instance;
  var LanguageCodeDescription_NBL_instance;
  var LanguageCodeDescription_NDE_instance;
  var LanguageCodeDescription_NDO_instance;
  var LanguageCodeDescription_NEP_instance;
  var LanguageCodeDescription_NLD_instance;
  var LanguageCodeDescription_NNO_instance;
  var LanguageCodeDescription_NOB_instance;
  var LanguageCodeDescription_NOR_instance;
  var LanguageCodeDescription_NYA_instance;
  var LanguageCodeDescription_OCI_instance;
  var LanguageCodeDescription_OJI_instance;
  var LanguageCodeDescription_ORI_instance;
  var LanguageCodeDescription_ORM_instance;
  var LanguageCodeDescription_OSS_instance;
  var LanguageCodeDescription_PAN_instance;
  var LanguageCodeDescription_PLI_instance;
  var LanguageCodeDescription_POL_instance;
  var LanguageCodeDescription_POR_instance;
  var LanguageCodeDescription_PUS_instance;
  var LanguageCodeDescription_QUE_instance;
  var LanguageCodeDescription_ROH_instance;
  var LanguageCodeDescription_RON_instance;
  var LanguageCodeDescription_RUN_instance;
  var LanguageCodeDescription_RUS_instance;
  var LanguageCodeDescription_SAG_instance;
  var LanguageCodeDescription_SAN_instance;
  var LanguageCodeDescription_SIN_instance;
  var LanguageCodeDescription_SLK_instance;
  var LanguageCodeDescription_SLV_instance;
  var LanguageCodeDescription_SME_instance;
  var LanguageCodeDescription_SMO_instance;
  var LanguageCodeDescription_SNA_instance;
  var LanguageCodeDescription_SND_instance;
  var LanguageCodeDescription_SOM_instance;
  var LanguageCodeDescription_SOT_instance;
  var LanguageCodeDescription_SPA_instance;
  var LanguageCodeDescription_SQI_instance;
  var LanguageCodeDescription_SRD_instance;
  var LanguageCodeDescription_SRP_instance;
  var LanguageCodeDescription_SSW_instance;
  var LanguageCodeDescription_SUN_instance;
  var LanguageCodeDescription_SWA_instance;
  var LanguageCodeDescription_SWE_instance;
  var LanguageCodeDescription_TAH_instance;
  var LanguageCodeDescription_TAM_instance;
  var LanguageCodeDescription_TAT_instance;
  var LanguageCodeDescription_TEL_instance;
  var LanguageCodeDescription_TGK_instance;
  var LanguageCodeDescription_TGL_instance;
  var LanguageCodeDescription_THA_instance;
  var LanguageCodeDescription_TIR_instance;
  var LanguageCodeDescription_TON_instance;
  var LanguageCodeDescription_TSN_instance;
  var LanguageCodeDescription_TSO_instance;
  var LanguageCodeDescription_TUK_instance;
  var LanguageCodeDescription_TUR_instance;
  var LanguageCodeDescription_TWI_instance;
  var LanguageCodeDescription_UIG_instance;
  var LanguageCodeDescription_UKR_instance;
  var LanguageCodeDescription_URD_instance;
  var LanguageCodeDescription_UZB_instance;
  var LanguageCodeDescription_VEN_instance;
  var LanguageCodeDescription_VIE_instance;
  var LanguageCodeDescription_VOL_instance;
  var LanguageCodeDescription_WLN_instance;
  var LanguageCodeDescription_WOL_instance;
  var LanguageCodeDescription_XHO_instance;
  var LanguageCodeDescription_YID_instance;
  var LanguageCodeDescription_YOR_instance;
  var LanguageCodeDescription_ZHA_instance;
  var LanguageCodeDescription_ZHO_instance;
  var LanguageCodeDescription_ZUL_instance;
  function Companion_13() {
  }
  protoOf(Companion_13).gh = function (code) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_3();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.iso.Companion.fromCode.<anonymous>' call
        if (equals_0(element.jh_1, code, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function values_4() {
    return [LanguageCodeDescription_AAR_getInstance(), LanguageCodeDescription_ABK_getInstance(), LanguageCodeDescription_AFR_getInstance(), LanguageCodeDescription_AKA_getInstance(), LanguageCodeDescription_AMH_getInstance(), LanguageCodeDescription_ARA_getInstance(), LanguageCodeDescription_ARG_getInstance(), LanguageCodeDescription_ASM_getInstance(), LanguageCodeDescription_AVA_getInstance(), LanguageCodeDescription_AVE_getInstance(), LanguageCodeDescription_AYM_getInstance(), LanguageCodeDescription_AZE_getInstance(), LanguageCodeDescription_BAK_getInstance(), LanguageCodeDescription_BAM_getInstance(), LanguageCodeDescription_BEL_getInstance(), LanguageCodeDescription_BEN_getInstance(), LanguageCodeDescription_BIS_getInstance(), LanguageCodeDescription_BOD_getInstance(), LanguageCodeDescription_BOS_getInstance(), LanguageCodeDescription_BRE_getInstance(), LanguageCodeDescription_BUL_getInstance(), LanguageCodeDescription_CAT_getInstance(), LanguageCodeDescription_CES_getInstance(), LanguageCodeDescription_CHA_getInstance(), LanguageCodeDescription_CHE_getInstance(), LanguageCodeDescription_CHU_getInstance(), LanguageCodeDescription_CHV_getInstance(), LanguageCodeDescription_COR_getInstance(), LanguageCodeDescription_COS_getInstance(), LanguageCodeDescription_CRE_getInstance(), LanguageCodeDescription_CYM_getInstance(), LanguageCodeDescription_DAN_getInstance(), LanguageCodeDescription_DEU_getInstance(), LanguageCodeDescription_DIV_getInstance(), LanguageCodeDescription_DZO_getInstance(), LanguageCodeDescription_ELL_getInstance(), LanguageCodeDescription_ENG_getInstance(), LanguageCodeDescription_EPO_getInstance(), LanguageCodeDescription_EST_getInstance(), LanguageCodeDescription_EUS_getInstance(), LanguageCodeDescription_EWE_getInstance(), LanguageCodeDescription_FAO_getInstance(), LanguageCodeDescription_FAS_getInstance(), LanguageCodeDescription_FIJ_getInstance(), LanguageCodeDescription_FIN_getInstance(), LanguageCodeDescription_FRA_getInstance(), LanguageCodeDescription_FRY_getInstance(), LanguageCodeDescription_FUL_getInstance(), LanguageCodeDescription_GLA_getInstance(), LanguageCodeDescription_GLE_getInstance(), LanguageCodeDescription_GLG_getInstance(), LanguageCodeDescription_GLV_getInstance(), LanguageCodeDescription_GRN_getInstance(), LanguageCodeDescription_GUJ_getInstance(), LanguageCodeDescription_HAT_getInstance(), LanguageCodeDescription_HAU_getInstance(), LanguageCodeDescription_HBS_getInstance(), LanguageCodeDescription_HEB_getInstance(), LanguageCodeDescription_HER_getInstance(), LanguageCodeDescription_HIN_getInstance(), LanguageCodeDescription_HMO_getInstance(), LanguageCodeDescription_HRV_getInstance(), LanguageCodeDescription_HUN_getInstance(), LanguageCodeDescription_HYE_getInstance(), LanguageCodeDescription_IBO_getInstance(), LanguageCodeDescription_IDO_getInstance(), LanguageCodeDescription_III_getInstance(), LanguageCodeDescription_IKU_getInstance(), LanguageCodeDescription_ILE_getInstance(), LanguageCodeDescription_INA_getInstance(), LanguageCodeDescription_IND_getInstance(), LanguageCodeDescription_IPK_getInstance(), LanguageCodeDescription_ISL_getInstance(), LanguageCodeDescription_ITA_getInstance(), LanguageCodeDescription_JAV_getInstance(), LanguageCodeDescription_JPN_getInstance(), LanguageCodeDescription_KAL_getInstance(), LanguageCodeDescription_KAN_getInstance(), LanguageCodeDescription_KAS_getInstance(), LanguageCodeDescription_KAT_getInstance(), LanguageCodeDescription_KAU_getInstance(), LanguageCodeDescription_KAZ_getInstance(), LanguageCodeDescription_KHM_getInstance(), LanguageCodeDescription_KIK_getInstance(), LanguageCodeDescription_KIN_getInstance(), LanguageCodeDescription_KIR_getInstance(), LanguageCodeDescription_KOM_getInstance(), LanguageCodeDescription_KON_getInstance(), LanguageCodeDescription_KOR_getInstance(), LanguageCodeDescription_KUA_getInstance(), LanguageCodeDescription_KUR_getInstance(), LanguageCodeDescription_LAO_getInstance(), LanguageCodeDescription_LAT_getInstance(), LanguageCodeDescription_LAV_getInstance(), LanguageCodeDescription_LIM_getInstance(), LanguageCodeDescription_LIN_getInstance(), LanguageCodeDescription_LIT_getInstance(), LanguageCodeDescription_LTZ_getInstance(), LanguageCodeDescription_LUB_getInstance(), LanguageCodeDescription_LUG_getInstance(), LanguageCodeDescription_MAH_getInstance(), LanguageCodeDescription_MAL_getInstance(), LanguageCodeDescription_MAR_getInstance(), LanguageCodeDescription_MKD_getInstance(), LanguageCodeDescription_MLG_getInstance(), LanguageCodeDescription_MLT_getInstance(), LanguageCodeDescription_MON_getInstance(), LanguageCodeDescription_MRI_getInstance(), LanguageCodeDescription_MSA_getInstance(), LanguageCodeDescription_MYA_getInstance(), LanguageCodeDescription_NAU_getInstance(), LanguageCodeDescription_NAV_getInstance(), LanguageCodeDescription_NBL_getInstance(), LanguageCodeDescription_NDE_getInstance(), LanguageCodeDescription_NDO_getInstance(), LanguageCodeDescription_NEP_getInstance(), LanguageCodeDescription_NLD_getInstance(), LanguageCodeDescription_NNO_getInstance(), LanguageCodeDescription_NOB_getInstance(), LanguageCodeDescription_NOR_getInstance(), LanguageCodeDescription_NYA_getInstance(), LanguageCodeDescription_OCI_getInstance(), LanguageCodeDescription_OJI_getInstance(), LanguageCodeDescription_ORI_getInstance(), LanguageCodeDescription_ORM_getInstance(), LanguageCodeDescription_OSS_getInstance(), LanguageCodeDescription_PAN_getInstance(), LanguageCodeDescription_PLI_getInstance(), LanguageCodeDescription_POL_getInstance(), LanguageCodeDescription_POR_getInstance(), LanguageCodeDescription_PUS_getInstance(), LanguageCodeDescription_QUE_getInstance(), LanguageCodeDescription_ROH_getInstance(), LanguageCodeDescription_RON_getInstance(), LanguageCodeDescription_RUN_getInstance(), LanguageCodeDescription_RUS_getInstance(), LanguageCodeDescription_SAG_getInstance(), LanguageCodeDescription_SAN_getInstance(), LanguageCodeDescription_SIN_getInstance(), LanguageCodeDescription_SLK_getInstance(), LanguageCodeDescription_SLV_getInstance(), LanguageCodeDescription_SME_getInstance(), LanguageCodeDescription_SMO_getInstance(), LanguageCodeDescription_SNA_getInstance(), LanguageCodeDescription_SND_getInstance(), LanguageCodeDescription_SOM_getInstance(), LanguageCodeDescription_SOT_getInstance(), LanguageCodeDescription_SPA_getInstance(), LanguageCodeDescription_SQI_getInstance(), LanguageCodeDescription_SRD_getInstance(), LanguageCodeDescription_SRP_getInstance(), LanguageCodeDescription_SSW_getInstance(), LanguageCodeDescription_SUN_getInstance(), LanguageCodeDescription_SWA_getInstance(), LanguageCodeDescription_SWE_getInstance(), LanguageCodeDescription_TAH_getInstance(), LanguageCodeDescription_TAM_getInstance(), LanguageCodeDescription_TAT_getInstance(), LanguageCodeDescription_TEL_getInstance(), LanguageCodeDescription_TGK_getInstance(), LanguageCodeDescription_TGL_getInstance(), LanguageCodeDescription_THA_getInstance(), LanguageCodeDescription_TIR_getInstance(), LanguageCodeDescription_TON_getInstance(), LanguageCodeDescription_TSN_getInstance(), LanguageCodeDescription_TSO_getInstance(), LanguageCodeDescription_TUK_getInstance(), LanguageCodeDescription_TUR_getInstance(), LanguageCodeDescription_TWI_getInstance(), LanguageCodeDescription_UIG_getInstance(), LanguageCodeDescription_UKR_getInstance(), LanguageCodeDescription_URD_getInstance(), LanguageCodeDescription_UZB_getInstance(), LanguageCodeDescription_VEN_getInstance(), LanguageCodeDescription_VIE_getInstance(), LanguageCodeDescription_VOL_getInstance(), LanguageCodeDescription_WLN_getInstance(), LanguageCodeDescription_WOL_getInstance(), LanguageCodeDescription_XHO_getInstance(), LanguageCodeDescription_YID_getInstance(), LanguageCodeDescription_YOR_getInstance(), LanguageCodeDescription_ZHA_getInstance(), LanguageCodeDescription_ZHO_getInstance(), LanguageCodeDescription_ZUL_getInstance()];
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_4());
    return $ENTRIES_3;
  }
  var LanguageCodeDescription_entriesInitialized;
  function LanguageCodeDescription_initEntries() {
    if (LanguageCodeDescription_entriesInitialized)
      return Unit_instance;
    LanguageCodeDescription_entriesInitialized = true;
    LanguageCodeDescription_AAR_instance = new LanguageCodeDescription('AAR', 0, 'aa', 'Afar');
    LanguageCodeDescription_ABK_instance = new LanguageCodeDescription('ABK', 1, 'ab', 'Abkhazian');
    LanguageCodeDescription_AFR_instance = new LanguageCodeDescription('AFR', 2, 'af', 'Afrikaans');
    LanguageCodeDescription_AKA_instance = new LanguageCodeDescription('AKA', 3, 'ak', 'Akan');
    LanguageCodeDescription_AMH_instance = new LanguageCodeDescription('AMH', 4, 'am', 'Amharic');
    LanguageCodeDescription_ARA_instance = new LanguageCodeDescription('ARA', 5, 'ar', 'Arabic');
    LanguageCodeDescription_ARG_instance = new LanguageCodeDescription('ARG', 6, 'an', 'Aragonese');
    LanguageCodeDescription_ASM_instance = new LanguageCodeDescription('ASM', 7, 'as', 'Assamese');
    LanguageCodeDescription_AVA_instance = new LanguageCodeDescription('AVA', 8, 'av', 'Avaric');
    LanguageCodeDescription_AVE_instance = new LanguageCodeDescription('AVE', 9, 'ae', 'Avestan');
    LanguageCodeDescription_AYM_instance = new LanguageCodeDescription('AYM', 10, 'ay', 'Aymara');
    LanguageCodeDescription_AZE_instance = new LanguageCodeDescription('AZE', 11, 'az', 'Azerbaijani');
    LanguageCodeDescription_BAK_instance = new LanguageCodeDescription('BAK', 12, 'ba', 'Bashkir');
    LanguageCodeDescription_BAM_instance = new LanguageCodeDescription('BAM', 13, 'bm', 'Bambara');
    LanguageCodeDescription_BEL_instance = new LanguageCodeDescription('BEL', 14, 'be', 'Belarusian');
    LanguageCodeDescription_BEN_instance = new LanguageCodeDescription('BEN', 15, 'bn', 'Bengali');
    LanguageCodeDescription_BIS_instance = new LanguageCodeDescription('BIS', 16, 'bi', 'Bislama');
    LanguageCodeDescription_BOD_instance = new LanguageCodeDescription('BOD', 17, 'bo', 'Tibetan');
    LanguageCodeDescription_BOS_instance = new LanguageCodeDescription('BOS', 18, 'bs', 'Bosnian');
    LanguageCodeDescription_BRE_instance = new LanguageCodeDescription('BRE', 19, 'br', 'Breton');
    LanguageCodeDescription_BUL_instance = new LanguageCodeDescription('BUL', 20, 'bg', 'Bulgarian');
    LanguageCodeDescription_CAT_instance = new LanguageCodeDescription('CAT', 21, 'ca', 'Catalan');
    LanguageCodeDescription_CES_instance = new LanguageCodeDescription('CES', 22, 'cs', 'Czech');
    LanguageCodeDescription_CHA_instance = new LanguageCodeDescription('CHA', 23, 'ch', 'Chamorro');
    LanguageCodeDescription_CHE_instance = new LanguageCodeDescription('CHE', 24, 'ce', 'Chechen');
    LanguageCodeDescription_CHU_instance = new LanguageCodeDescription('CHU', 25, 'cu', 'Church Slavic');
    LanguageCodeDescription_CHV_instance = new LanguageCodeDescription('CHV', 26, 'cv', 'Chuvash');
    LanguageCodeDescription_COR_instance = new LanguageCodeDescription('COR', 27, 'kw', 'Cornish');
    LanguageCodeDescription_COS_instance = new LanguageCodeDescription('COS', 28, 'co', 'Corsican');
    LanguageCodeDescription_CRE_instance = new LanguageCodeDescription('CRE', 29, 'cr', 'Cree');
    LanguageCodeDescription_CYM_instance = new LanguageCodeDescription('CYM', 30, 'cy', 'Welsh');
    LanguageCodeDescription_DAN_instance = new LanguageCodeDescription('DAN', 31, 'da', 'Danish');
    LanguageCodeDescription_DEU_instance = new LanguageCodeDescription('DEU', 32, 'de', 'German');
    LanguageCodeDescription_DIV_instance = new LanguageCodeDescription('DIV', 33, 'dv', 'Dhivehi');
    LanguageCodeDescription_DZO_instance = new LanguageCodeDescription('DZO', 34, 'dz', 'Dzongkha');
    LanguageCodeDescription_ELL_instance = new LanguageCodeDescription('ELL', 35, 'el', 'Modern Greek (1453-)');
    LanguageCodeDescription_ENG_instance = new LanguageCodeDescription('ENG', 36, 'en', 'English');
    LanguageCodeDescription_EPO_instance = new LanguageCodeDescription('EPO', 37, 'eo', 'Esperanto');
    LanguageCodeDescription_EST_instance = new LanguageCodeDescription('EST', 38, 'et', 'Estonian');
    LanguageCodeDescription_EUS_instance = new LanguageCodeDescription('EUS', 39, 'eu', 'Basque');
    LanguageCodeDescription_EWE_instance = new LanguageCodeDescription('EWE', 40, 'ee', 'Ewe');
    LanguageCodeDescription_FAO_instance = new LanguageCodeDescription('FAO', 41, 'fo', 'Faroese');
    LanguageCodeDescription_FAS_instance = new LanguageCodeDescription('FAS', 42, 'fa', 'Persian');
    LanguageCodeDescription_FIJ_instance = new LanguageCodeDescription('FIJ', 43, 'fj', 'Fijian');
    LanguageCodeDescription_FIN_instance = new LanguageCodeDescription('FIN', 44, 'fi', 'Finnish');
    LanguageCodeDescription_FRA_instance = new LanguageCodeDescription('FRA', 45, 'fr', 'French');
    LanguageCodeDescription_FRY_instance = new LanguageCodeDescription('FRY', 46, 'fy', 'Western Frisian');
    LanguageCodeDescription_FUL_instance = new LanguageCodeDescription('FUL', 47, 'ff', 'Fulah');
    LanguageCodeDescription_GLA_instance = new LanguageCodeDescription('GLA', 48, 'gd', 'Scottish Gaelic');
    LanguageCodeDescription_GLE_instance = new LanguageCodeDescription('GLE', 49, 'ga', 'Irish');
    LanguageCodeDescription_GLG_instance = new LanguageCodeDescription('GLG', 50, 'gl', 'Galician');
    LanguageCodeDescription_GLV_instance = new LanguageCodeDescription('GLV', 51, 'gv', 'Manx');
    LanguageCodeDescription_GRN_instance = new LanguageCodeDescription('GRN', 52, 'gn', 'Guarani');
    LanguageCodeDescription_GUJ_instance = new LanguageCodeDescription('GUJ', 53, 'gu', 'Gujarati');
    LanguageCodeDescription_HAT_instance = new LanguageCodeDescription('HAT', 54, 'ht', 'Haitian');
    LanguageCodeDescription_HAU_instance = new LanguageCodeDescription('HAU', 55, 'ha', 'Hausa');
    LanguageCodeDescription_HBS_instance = new LanguageCodeDescription('HBS', 56, 'sh', 'Serbo-Croatian');
    LanguageCodeDescription_HEB_instance = new LanguageCodeDescription('HEB', 57, 'he', 'Hebrew');
    LanguageCodeDescription_HER_instance = new LanguageCodeDescription('HER', 58, 'hz', 'Herero');
    LanguageCodeDescription_HIN_instance = new LanguageCodeDescription('HIN', 59, 'hi', 'Hindi');
    LanguageCodeDescription_HMO_instance = new LanguageCodeDescription('HMO', 60, 'ho', 'Hiri Motu');
    LanguageCodeDescription_HRV_instance = new LanguageCodeDescription('HRV', 61, 'hr', 'Croatian');
    LanguageCodeDescription_HUN_instance = new LanguageCodeDescription('HUN', 62, 'hu', 'Hungarian');
    LanguageCodeDescription_HYE_instance = new LanguageCodeDescription('HYE', 63, 'hy', 'Armenian');
    LanguageCodeDescription_IBO_instance = new LanguageCodeDescription('IBO', 64, 'ig', 'Igbo');
    LanguageCodeDescription_IDO_instance = new LanguageCodeDescription('IDO', 65, 'io', 'Ido');
    LanguageCodeDescription_III_instance = new LanguageCodeDescription('III', 66, 'ii', 'Sichuan Yi');
    LanguageCodeDescription_IKU_instance = new LanguageCodeDescription('IKU', 67, 'iu', 'Inuktitut');
    LanguageCodeDescription_ILE_instance = new LanguageCodeDescription('ILE', 68, 'ie', 'Interlingue');
    LanguageCodeDescription_INA_instance = new LanguageCodeDescription('INA', 69, 'ia', 'Interlingua (International Auxiliary Language Association)');
    LanguageCodeDescription_IND_instance = new LanguageCodeDescription('IND', 70, 'id', 'Indonesian');
    LanguageCodeDescription_IPK_instance = new LanguageCodeDescription('IPK', 71, 'ik', 'Inupiaq');
    LanguageCodeDescription_ISL_instance = new LanguageCodeDescription('ISL', 72, 'is', 'Icelandic');
    LanguageCodeDescription_ITA_instance = new LanguageCodeDescription('ITA', 73, 'it', 'Italian');
    LanguageCodeDescription_JAV_instance = new LanguageCodeDescription('JAV', 74, 'jv', 'Javanese');
    LanguageCodeDescription_JPN_instance = new LanguageCodeDescription('JPN', 75, 'ja', 'Japanese');
    LanguageCodeDescription_KAL_instance = new LanguageCodeDescription('KAL', 76, 'kl', 'Kalaallisut');
    LanguageCodeDescription_KAN_instance = new LanguageCodeDescription('KAN', 77, 'kn', 'Kannada');
    LanguageCodeDescription_KAS_instance = new LanguageCodeDescription('KAS', 78, 'ks', 'Kashmiri');
    LanguageCodeDescription_KAT_instance = new LanguageCodeDescription('KAT', 79, 'ka', 'Georgian');
    LanguageCodeDescription_KAU_instance = new LanguageCodeDescription('KAU', 80, 'kr', 'Kanuri');
    LanguageCodeDescription_KAZ_instance = new LanguageCodeDescription('KAZ', 81, 'kk', 'Kazakh');
    LanguageCodeDescription_KHM_instance = new LanguageCodeDescription('KHM', 82, 'km', 'Central Khmer');
    LanguageCodeDescription_KIK_instance = new LanguageCodeDescription('KIK', 83, 'ki', 'Kikuyu');
    LanguageCodeDescription_KIN_instance = new LanguageCodeDescription('KIN', 84, 'rw', 'Kinyarwanda');
    LanguageCodeDescription_KIR_instance = new LanguageCodeDescription('KIR', 85, 'ky', 'Kirghiz');
    LanguageCodeDescription_KOM_instance = new LanguageCodeDescription('KOM', 86, 'kv', 'Komi');
    LanguageCodeDescription_KON_instance = new LanguageCodeDescription('KON', 87, 'kg', 'Kongo');
    LanguageCodeDescription_KOR_instance = new LanguageCodeDescription('KOR', 88, 'ko', 'Korean');
    LanguageCodeDescription_KUA_instance = new LanguageCodeDescription('KUA', 89, 'kj', 'Kuanyama');
    LanguageCodeDescription_KUR_instance = new LanguageCodeDescription('KUR', 90, 'ku', 'Kurdish');
    LanguageCodeDescription_LAO_instance = new LanguageCodeDescription('LAO', 91, 'lo', 'Lao');
    LanguageCodeDescription_LAT_instance = new LanguageCodeDescription('LAT', 92, 'la', 'Latin');
    LanguageCodeDescription_LAV_instance = new LanguageCodeDescription('LAV', 93, 'lv', 'Latvian');
    LanguageCodeDescription_LIM_instance = new LanguageCodeDescription('LIM', 94, 'li', 'Limburgan');
    LanguageCodeDescription_LIN_instance = new LanguageCodeDescription('LIN', 95, 'ln', 'Lingala');
    LanguageCodeDescription_LIT_instance = new LanguageCodeDescription('LIT', 96, 'lt', 'Lithuanian');
    LanguageCodeDescription_LTZ_instance = new LanguageCodeDescription('LTZ', 97, 'lb', 'Luxembourgish');
    LanguageCodeDescription_LUB_instance = new LanguageCodeDescription('LUB', 98, 'lu', 'Luba-Katanga');
    LanguageCodeDescription_LUG_instance = new LanguageCodeDescription('LUG', 99, 'lg', 'Ganda');
    LanguageCodeDescription_MAH_instance = new LanguageCodeDescription('MAH', 100, 'mh', 'Marshallese');
    LanguageCodeDescription_MAL_instance = new LanguageCodeDescription('MAL', 101, 'ml', 'Malayalam');
    LanguageCodeDescription_MAR_instance = new LanguageCodeDescription('MAR', 102, 'mr', 'Marathi');
    LanguageCodeDescription_MKD_instance = new LanguageCodeDescription('MKD', 103, 'mk', 'Macedonian');
    LanguageCodeDescription_MLG_instance = new LanguageCodeDescription('MLG', 104, 'mg', 'Malagasy');
    LanguageCodeDescription_MLT_instance = new LanguageCodeDescription('MLT', 105, 'mt', 'Maltese');
    LanguageCodeDescription_MON_instance = new LanguageCodeDescription('MON', 106, 'mn', 'Mongolian');
    LanguageCodeDescription_MRI_instance = new LanguageCodeDescription('MRI', 107, 'mi', 'Maori');
    LanguageCodeDescription_MSA_instance = new LanguageCodeDescription('MSA', 108, 'ms', 'Malay (macrolanguage)');
    LanguageCodeDescription_MYA_instance = new LanguageCodeDescription('MYA', 109, 'my', 'Burmese');
    LanguageCodeDescription_NAU_instance = new LanguageCodeDescription('NAU', 110, 'na', 'Nauru');
    LanguageCodeDescription_NAV_instance = new LanguageCodeDescription('NAV', 111, 'nv', 'Navajo');
    LanguageCodeDescription_NBL_instance = new LanguageCodeDescription('NBL', 112, 'nr', 'South Ndebele');
    LanguageCodeDescription_NDE_instance = new LanguageCodeDescription('NDE', 113, 'nd', 'North Ndebele');
    LanguageCodeDescription_NDO_instance = new LanguageCodeDescription('NDO', 114, 'ng', 'Ndonga');
    LanguageCodeDescription_NEP_instance = new LanguageCodeDescription('NEP', 115, 'ne', 'Nepali (macrolanguage)');
    LanguageCodeDescription_NLD_instance = new LanguageCodeDescription('NLD', 116, 'nl', 'Dutch');
    LanguageCodeDescription_NNO_instance = new LanguageCodeDescription('NNO', 117, 'nn', 'Norwegian Nynorsk');
    LanguageCodeDescription_NOB_instance = new LanguageCodeDescription('NOB', 118, 'nb', 'Norwegian Bokm\xE5l');
    LanguageCodeDescription_NOR_instance = new LanguageCodeDescription('NOR', 119, 'no', 'Norwegian');
    LanguageCodeDescription_NYA_instance = new LanguageCodeDescription('NYA', 120, 'ny', 'Nyanja');
    LanguageCodeDescription_OCI_instance = new LanguageCodeDescription('OCI', 121, 'oc', 'Occitan (post 1500)');
    LanguageCodeDescription_OJI_instance = new LanguageCodeDescription('OJI', 122, 'oj', 'Ojibwa');
    LanguageCodeDescription_ORI_instance = new LanguageCodeDescription('ORI', 123, 'or', 'Oriya (macrolanguage)');
    LanguageCodeDescription_ORM_instance = new LanguageCodeDescription('ORM', 124, 'om', 'Oromo');
    LanguageCodeDescription_OSS_instance = new LanguageCodeDescription('OSS', 125, 'os', 'Ossetian');
    LanguageCodeDescription_PAN_instance = new LanguageCodeDescription('PAN', 126, 'pa', 'Panjabi');
    LanguageCodeDescription_PLI_instance = new LanguageCodeDescription('PLI', 127, 'pi', 'Pali');
    LanguageCodeDescription_POL_instance = new LanguageCodeDescription('POL', 128, 'pl', 'Polish');
    LanguageCodeDescription_POR_instance = new LanguageCodeDescription('POR', 129, 'pt', 'Portuguese');
    LanguageCodeDescription_PUS_instance = new LanguageCodeDescription('PUS', 130, 'ps', 'Pushto');
    LanguageCodeDescription_QUE_instance = new LanguageCodeDescription('QUE', 131, 'qu', 'Quechua');
    LanguageCodeDescription_ROH_instance = new LanguageCodeDescription('ROH', 132, 'rm', 'Romansh');
    LanguageCodeDescription_RON_instance = new LanguageCodeDescription('RON', 133, 'ro', 'Romanian');
    LanguageCodeDescription_RUN_instance = new LanguageCodeDescription('RUN', 134, 'rn', 'Rundi');
    LanguageCodeDescription_RUS_instance = new LanguageCodeDescription('RUS', 135, 'ru', 'Russian');
    LanguageCodeDescription_SAG_instance = new LanguageCodeDescription('SAG', 136, 'sg', 'Sango');
    LanguageCodeDescription_SAN_instance = new LanguageCodeDescription('SAN', 137, 'sa', 'Sanskrit');
    LanguageCodeDescription_SIN_instance = new LanguageCodeDescription('SIN', 138, 'si', 'Sinhala');
    LanguageCodeDescription_SLK_instance = new LanguageCodeDescription('SLK', 139, 'sk', 'Slovak');
    LanguageCodeDescription_SLV_instance = new LanguageCodeDescription('SLV', 140, 'sl', 'Slovenian');
    LanguageCodeDescription_SME_instance = new LanguageCodeDescription('SME', 141, 'se', 'Northern Sami');
    LanguageCodeDescription_SMO_instance = new LanguageCodeDescription('SMO', 142, 'sm', 'Samoan');
    LanguageCodeDescription_SNA_instance = new LanguageCodeDescription('SNA', 143, 'sn', 'Shona');
    LanguageCodeDescription_SND_instance = new LanguageCodeDescription('SND', 144, 'sd', 'Sindhi');
    LanguageCodeDescription_SOM_instance = new LanguageCodeDescription('SOM', 145, 'so', 'Somali');
    LanguageCodeDescription_SOT_instance = new LanguageCodeDescription('SOT', 146, 'st', 'Southern Sotho');
    LanguageCodeDescription_SPA_instance = new LanguageCodeDescription('SPA', 147, 'es', 'Spanish');
    LanguageCodeDescription_SQI_instance = new LanguageCodeDescription('SQI', 148, 'sq', 'Albanian');
    LanguageCodeDescription_SRD_instance = new LanguageCodeDescription('SRD', 149, 'sc', 'Sardinian');
    LanguageCodeDescription_SRP_instance = new LanguageCodeDescription('SRP', 150, 'sr', 'Serbian');
    LanguageCodeDescription_SSW_instance = new LanguageCodeDescription('SSW', 151, 'ss', 'Swati');
    LanguageCodeDescription_SUN_instance = new LanguageCodeDescription('SUN', 152, 'su', 'Sundanese');
    LanguageCodeDescription_SWA_instance = new LanguageCodeDescription('SWA', 153, 'sw', 'Swahili (macrolanguage)');
    LanguageCodeDescription_SWE_instance = new LanguageCodeDescription('SWE', 154, 'sv', 'Swedish');
    LanguageCodeDescription_TAH_instance = new LanguageCodeDescription('TAH', 155, 'ty', 'Tahitian');
    LanguageCodeDescription_TAM_instance = new LanguageCodeDescription('TAM', 156, 'ta', 'Tamil');
    LanguageCodeDescription_TAT_instance = new LanguageCodeDescription('TAT', 157, 'tt', 'Tatar');
    LanguageCodeDescription_TEL_instance = new LanguageCodeDescription('TEL', 158, 'te', 'Telugu');
    LanguageCodeDescription_TGK_instance = new LanguageCodeDescription('TGK', 159, 'tg', 'Tajik');
    LanguageCodeDescription_TGL_instance = new LanguageCodeDescription('TGL', 160, 'tl', 'Tagalog');
    LanguageCodeDescription_THA_instance = new LanguageCodeDescription('THA', 161, 'th', 'Thai');
    LanguageCodeDescription_TIR_instance = new LanguageCodeDescription('TIR', 162, 'ti', 'Tigrinya');
    LanguageCodeDescription_TON_instance = new LanguageCodeDescription('TON', 163, 'to', 'Tonga (Tonga Islands)');
    LanguageCodeDescription_TSN_instance = new LanguageCodeDescription('TSN', 164, 'tn', 'Tswana');
    LanguageCodeDescription_TSO_instance = new LanguageCodeDescription('TSO', 165, 'ts', 'Tsonga');
    LanguageCodeDescription_TUK_instance = new LanguageCodeDescription('TUK', 166, 'tk', 'Turkmen');
    LanguageCodeDescription_TUR_instance = new LanguageCodeDescription('TUR', 167, 'tr', 'Turkish');
    LanguageCodeDescription_TWI_instance = new LanguageCodeDescription('TWI', 168, 'tw', 'Twi');
    LanguageCodeDescription_UIG_instance = new LanguageCodeDescription('UIG', 169, 'ug', 'Uighur');
    LanguageCodeDescription_UKR_instance = new LanguageCodeDescription('UKR', 170, 'uk', 'Ukrainian');
    LanguageCodeDescription_URD_instance = new LanguageCodeDescription('URD', 171, 'ur', 'Urdu');
    LanguageCodeDescription_UZB_instance = new LanguageCodeDescription('UZB', 172, 'uz', 'Uzbek');
    LanguageCodeDescription_VEN_instance = new LanguageCodeDescription('VEN', 173, 've', 'Venda');
    LanguageCodeDescription_VIE_instance = new LanguageCodeDescription('VIE', 174, 'vi', 'Vietnamese');
    LanguageCodeDescription_VOL_instance = new LanguageCodeDescription('VOL', 175, 'vo', 'Volap\xFCk');
    LanguageCodeDescription_WLN_instance = new LanguageCodeDescription('WLN', 176, 'wa', 'Walloon');
    LanguageCodeDescription_WOL_instance = new LanguageCodeDescription('WOL', 177, 'wo', 'Wolof');
    LanguageCodeDescription_XHO_instance = new LanguageCodeDescription('XHO', 178, 'xh', 'Xhosa');
    LanguageCodeDescription_YID_instance = new LanguageCodeDescription('YID', 179, 'yi', 'Yiddish');
    LanguageCodeDescription_YOR_instance = new LanguageCodeDescription('YOR', 180, 'yo', 'Yoruba');
    LanguageCodeDescription_ZHA_instance = new LanguageCodeDescription('ZHA', 181, 'za', 'Zhuang');
    LanguageCodeDescription_ZHO_instance = new LanguageCodeDescription('ZHO', 182, 'zh', 'Chinese');
    LanguageCodeDescription_ZUL_instance = new LanguageCodeDescription('ZUL', 183, 'zu', 'Zulu');
  }
  var $ENTRIES_3;
  function LanguageCodeDescription(name, ordinal, code, description) {
    Enum.call(this, name, ordinal);
    this.jh_1 = code;
    this.kh_1 = description;
  }
  function LanguageCodeDescription_AAR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AAR_instance;
  }
  function LanguageCodeDescription_ABK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ABK_instance;
  }
  function LanguageCodeDescription_AFR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AFR_instance;
  }
  function LanguageCodeDescription_AKA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AKA_instance;
  }
  function LanguageCodeDescription_AMH_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AMH_instance;
  }
  function LanguageCodeDescription_ARA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ARA_instance;
  }
  function LanguageCodeDescription_ARG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ARG_instance;
  }
  function LanguageCodeDescription_ASM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ASM_instance;
  }
  function LanguageCodeDescription_AVA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AVA_instance;
  }
  function LanguageCodeDescription_AVE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AVE_instance;
  }
  function LanguageCodeDescription_AYM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AYM_instance;
  }
  function LanguageCodeDescription_AZE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_AZE_instance;
  }
  function LanguageCodeDescription_BAK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BAK_instance;
  }
  function LanguageCodeDescription_BAM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BAM_instance;
  }
  function LanguageCodeDescription_BEL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BEL_instance;
  }
  function LanguageCodeDescription_BEN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BEN_instance;
  }
  function LanguageCodeDescription_BIS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BIS_instance;
  }
  function LanguageCodeDescription_BOD_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BOD_instance;
  }
  function LanguageCodeDescription_BOS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BOS_instance;
  }
  function LanguageCodeDescription_BRE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BRE_instance;
  }
  function LanguageCodeDescription_BUL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_BUL_instance;
  }
  function LanguageCodeDescription_CAT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CAT_instance;
  }
  function LanguageCodeDescription_CES_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CES_instance;
  }
  function LanguageCodeDescription_CHA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CHA_instance;
  }
  function LanguageCodeDescription_CHE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CHE_instance;
  }
  function LanguageCodeDescription_CHU_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CHU_instance;
  }
  function LanguageCodeDescription_CHV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CHV_instance;
  }
  function LanguageCodeDescription_COR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_COR_instance;
  }
  function LanguageCodeDescription_COS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_COS_instance;
  }
  function LanguageCodeDescription_CRE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CRE_instance;
  }
  function LanguageCodeDescription_CYM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_CYM_instance;
  }
  function LanguageCodeDescription_DAN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_DAN_instance;
  }
  function LanguageCodeDescription_DEU_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_DEU_instance;
  }
  function LanguageCodeDescription_DIV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_DIV_instance;
  }
  function LanguageCodeDescription_DZO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_DZO_instance;
  }
  function LanguageCodeDescription_ELL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ELL_instance;
  }
  function LanguageCodeDescription_ENG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ENG_instance;
  }
  function LanguageCodeDescription_EPO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_EPO_instance;
  }
  function LanguageCodeDescription_EST_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_EST_instance;
  }
  function LanguageCodeDescription_EUS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_EUS_instance;
  }
  function LanguageCodeDescription_EWE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_EWE_instance;
  }
  function LanguageCodeDescription_FAO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FAO_instance;
  }
  function LanguageCodeDescription_FAS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FAS_instance;
  }
  function LanguageCodeDescription_FIJ_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FIJ_instance;
  }
  function LanguageCodeDescription_FIN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FIN_instance;
  }
  function LanguageCodeDescription_FRA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FRA_instance;
  }
  function LanguageCodeDescription_FRY_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FRY_instance;
  }
  function LanguageCodeDescription_FUL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_FUL_instance;
  }
  function LanguageCodeDescription_GLA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_GLA_instance;
  }
  function LanguageCodeDescription_GLE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_GLE_instance;
  }
  function LanguageCodeDescription_GLG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_GLG_instance;
  }
  function LanguageCodeDescription_GLV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_GLV_instance;
  }
  function LanguageCodeDescription_GRN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_GRN_instance;
  }
  function LanguageCodeDescription_GUJ_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_GUJ_instance;
  }
  function LanguageCodeDescription_HAT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HAT_instance;
  }
  function LanguageCodeDescription_HAU_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HAU_instance;
  }
  function LanguageCodeDescription_HBS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HBS_instance;
  }
  function LanguageCodeDescription_HEB_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HEB_instance;
  }
  function LanguageCodeDescription_HER_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HER_instance;
  }
  function LanguageCodeDescription_HIN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HIN_instance;
  }
  function LanguageCodeDescription_HMO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HMO_instance;
  }
  function LanguageCodeDescription_HRV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HRV_instance;
  }
  function LanguageCodeDescription_HUN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HUN_instance;
  }
  function LanguageCodeDescription_HYE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_HYE_instance;
  }
  function LanguageCodeDescription_IBO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_IBO_instance;
  }
  function LanguageCodeDescription_IDO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_IDO_instance;
  }
  function LanguageCodeDescription_III_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_III_instance;
  }
  function LanguageCodeDescription_IKU_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_IKU_instance;
  }
  function LanguageCodeDescription_ILE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ILE_instance;
  }
  function LanguageCodeDescription_INA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_INA_instance;
  }
  function LanguageCodeDescription_IND_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_IND_instance;
  }
  function LanguageCodeDescription_IPK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_IPK_instance;
  }
  function LanguageCodeDescription_ISL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ISL_instance;
  }
  function LanguageCodeDescription_ITA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ITA_instance;
  }
  function LanguageCodeDescription_JAV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_JAV_instance;
  }
  function LanguageCodeDescription_JPN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_JPN_instance;
  }
  function LanguageCodeDescription_KAL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KAL_instance;
  }
  function LanguageCodeDescription_KAN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KAN_instance;
  }
  function LanguageCodeDescription_KAS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KAS_instance;
  }
  function LanguageCodeDescription_KAT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KAT_instance;
  }
  function LanguageCodeDescription_KAU_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KAU_instance;
  }
  function LanguageCodeDescription_KAZ_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KAZ_instance;
  }
  function LanguageCodeDescription_KHM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KHM_instance;
  }
  function LanguageCodeDescription_KIK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KIK_instance;
  }
  function LanguageCodeDescription_KIN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KIN_instance;
  }
  function LanguageCodeDescription_KIR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KIR_instance;
  }
  function LanguageCodeDescription_KOM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KOM_instance;
  }
  function LanguageCodeDescription_KON_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KON_instance;
  }
  function LanguageCodeDescription_KOR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KOR_instance;
  }
  function LanguageCodeDescription_KUA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KUA_instance;
  }
  function LanguageCodeDescription_KUR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_KUR_instance;
  }
  function LanguageCodeDescription_LAO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LAO_instance;
  }
  function LanguageCodeDescription_LAT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LAT_instance;
  }
  function LanguageCodeDescription_LAV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LAV_instance;
  }
  function LanguageCodeDescription_LIM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LIM_instance;
  }
  function LanguageCodeDescription_LIN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LIN_instance;
  }
  function LanguageCodeDescription_LIT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LIT_instance;
  }
  function LanguageCodeDescription_LTZ_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LTZ_instance;
  }
  function LanguageCodeDescription_LUB_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LUB_instance;
  }
  function LanguageCodeDescription_LUG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_LUG_instance;
  }
  function LanguageCodeDescription_MAH_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MAH_instance;
  }
  function LanguageCodeDescription_MAL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MAL_instance;
  }
  function LanguageCodeDescription_MAR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MAR_instance;
  }
  function LanguageCodeDescription_MKD_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MKD_instance;
  }
  function LanguageCodeDescription_MLG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MLG_instance;
  }
  function LanguageCodeDescription_MLT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MLT_instance;
  }
  function LanguageCodeDescription_MON_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MON_instance;
  }
  function LanguageCodeDescription_MRI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MRI_instance;
  }
  function LanguageCodeDescription_MSA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MSA_instance;
  }
  function LanguageCodeDescription_MYA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_MYA_instance;
  }
  function LanguageCodeDescription_NAU_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NAU_instance;
  }
  function LanguageCodeDescription_NAV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NAV_instance;
  }
  function LanguageCodeDescription_NBL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NBL_instance;
  }
  function LanguageCodeDescription_NDE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NDE_instance;
  }
  function LanguageCodeDescription_NDO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NDO_instance;
  }
  function LanguageCodeDescription_NEP_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NEP_instance;
  }
  function LanguageCodeDescription_NLD_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NLD_instance;
  }
  function LanguageCodeDescription_NNO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NNO_instance;
  }
  function LanguageCodeDescription_NOB_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NOB_instance;
  }
  function LanguageCodeDescription_NOR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NOR_instance;
  }
  function LanguageCodeDescription_NYA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_NYA_instance;
  }
  function LanguageCodeDescription_OCI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_OCI_instance;
  }
  function LanguageCodeDescription_OJI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_OJI_instance;
  }
  function LanguageCodeDescription_ORI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ORI_instance;
  }
  function LanguageCodeDescription_ORM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ORM_instance;
  }
  function LanguageCodeDescription_OSS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_OSS_instance;
  }
  function LanguageCodeDescription_PAN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_PAN_instance;
  }
  function LanguageCodeDescription_PLI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_PLI_instance;
  }
  function LanguageCodeDescription_POL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_POL_instance;
  }
  function LanguageCodeDescription_POR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_POR_instance;
  }
  function LanguageCodeDescription_PUS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_PUS_instance;
  }
  function LanguageCodeDescription_QUE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_QUE_instance;
  }
  function LanguageCodeDescription_ROH_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ROH_instance;
  }
  function LanguageCodeDescription_RON_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_RON_instance;
  }
  function LanguageCodeDescription_RUN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_RUN_instance;
  }
  function LanguageCodeDescription_RUS_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_RUS_instance;
  }
  function LanguageCodeDescription_SAG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SAG_instance;
  }
  function LanguageCodeDescription_SAN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SAN_instance;
  }
  function LanguageCodeDescription_SIN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SIN_instance;
  }
  function LanguageCodeDescription_SLK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SLK_instance;
  }
  function LanguageCodeDescription_SLV_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SLV_instance;
  }
  function LanguageCodeDescription_SME_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SME_instance;
  }
  function LanguageCodeDescription_SMO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SMO_instance;
  }
  function LanguageCodeDescription_SNA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SNA_instance;
  }
  function LanguageCodeDescription_SND_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SND_instance;
  }
  function LanguageCodeDescription_SOM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SOM_instance;
  }
  function LanguageCodeDescription_SOT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SOT_instance;
  }
  function LanguageCodeDescription_SPA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SPA_instance;
  }
  function LanguageCodeDescription_SQI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SQI_instance;
  }
  function LanguageCodeDescription_SRD_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SRD_instance;
  }
  function LanguageCodeDescription_SRP_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SRP_instance;
  }
  function LanguageCodeDescription_SSW_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SSW_instance;
  }
  function LanguageCodeDescription_SUN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SUN_instance;
  }
  function LanguageCodeDescription_SWA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SWA_instance;
  }
  function LanguageCodeDescription_SWE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_SWE_instance;
  }
  function LanguageCodeDescription_TAH_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TAH_instance;
  }
  function LanguageCodeDescription_TAM_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TAM_instance;
  }
  function LanguageCodeDescription_TAT_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TAT_instance;
  }
  function LanguageCodeDescription_TEL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TEL_instance;
  }
  function LanguageCodeDescription_TGK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TGK_instance;
  }
  function LanguageCodeDescription_TGL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TGL_instance;
  }
  function LanguageCodeDescription_THA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_THA_instance;
  }
  function LanguageCodeDescription_TIR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TIR_instance;
  }
  function LanguageCodeDescription_TON_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TON_instance;
  }
  function LanguageCodeDescription_TSN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TSN_instance;
  }
  function LanguageCodeDescription_TSO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TSO_instance;
  }
  function LanguageCodeDescription_TUK_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TUK_instance;
  }
  function LanguageCodeDescription_TUR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TUR_instance;
  }
  function LanguageCodeDescription_TWI_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_TWI_instance;
  }
  function LanguageCodeDescription_UIG_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_UIG_instance;
  }
  function LanguageCodeDescription_UKR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_UKR_instance;
  }
  function LanguageCodeDescription_URD_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_URD_instance;
  }
  function LanguageCodeDescription_UZB_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_UZB_instance;
  }
  function LanguageCodeDescription_VEN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_VEN_instance;
  }
  function LanguageCodeDescription_VIE_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_VIE_instance;
  }
  function LanguageCodeDescription_VOL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_VOL_instance;
  }
  function LanguageCodeDescription_WLN_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_WLN_instance;
  }
  function LanguageCodeDescription_WOL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_WOL_instance;
  }
  function LanguageCodeDescription_XHO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_XHO_instance;
  }
  function LanguageCodeDescription_YID_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_YID_instance;
  }
  function LanguageCodeDescription_YOR_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_YOR_instance;
  }
  function LanguageCodeDescription_ZHA_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ZHA_instance;
  }
  function LanguageCodeDescription_ZHO_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ZHO_instance;
  }
  function LanguageCodeDescription_ZUL_getInstance() {
    LanguageCodeDescription_initEntries();
    return LanguageCodeDescription_ZUL_instance;
  }
  var MerchantCategoryCodeDescription_MCC0742_instance;
  var MerchantCategoryCodeDescription_MCC0743_instance;
  var MerchantCategoryCodeDescription_MCC0744_instance;
  var MerchantCategoryCodeDescription_MCC0763_instance;
  var MerchantCategoryCodeDescription_MCC0780_instance;
  var MerchantCategoryCodeDescription_MCC1520_instance;
  var MerchantCategoryCodeDescription_MCC1711_instance;
  var MerchantCategoryCodeDescription_MCC1731_instance;
  var MerchantCategoryCodeDescription_MCC1740_instance;
  var MerchantCategoryCodeDescription_MCC1750_instance;
  var MerchantCategoryCodeDescription_MCC1761_instance;
  var MerchantCategoryCodeDescription_MCC1771_instance;
  var MerchantCategoryCodeDescription_MCC1799_instance;
  var MerchantCategoryCodeDescription_MCC2741_instance;
  var MerchantCategoryCodeDescription_MCC2791_instance;
  var MerchantCategoryCodeDescription_MCC2842_instance;
  var MerchantCategoryCodeDescription_MCC4011_instance;
  var MerchantCategoryCodeDescription_MCC4111_instance;
  var MerchantCategoryCodeDescription_MCC4112_instance;
  var MerchantCategoryCodeDescription_MCC4119_instance;
  var MerchantCategoryCodeDescription_MCC4121_instance;
  var MerchantCategoryCodeDescription_MCC4131_instance;
  var MerchantCategoryCodeDescription_MCC4214_instance;
  var MerchantCategoryCodeDescription_MCC4215_instance;
  var MerchantCategoryCodeDescription_MCC4225_instance;
  var MerchantCategoryCodeDescription_MCC4411_instance;
  var MerchantCategoryCodeDescription_MCC4457_instance;
  var MerchantCategoryCodeDescription_MCC4468_instance;
  var MerchantCategoryCodeDescription_MCC4511_instance;
  var MerchantCategoryCodeDescription_MCC4582_instance;
  var MerchantCategoryCodeDescription_MCC4722_instance;
  var MerchantCategoryCodeDescription_MCC4784_instance;
  var MerchantCategoryCodeDescription_MCC4789_instance;
  var MerchantCategoryCodeDescription_MCC4812_instance;
  var MerchantCategoryCodeDescription_MCC4814_instance;
  var MerchantCategoryCodeDescription_MCC4815_instance;
  var MerchantCategoryCodeDescription_MCC4816_instance;
  var MerchantCategoryCodeDescription_MCC4821_instance;
  var MerchantCategoryCodeDescription_MCC4829_instance;
  var MerchantCategoryCodeDescription_MCC4899_instance;
  var MerchantCategoryCodeDescription_MCC4900_instance;
  var MerchantCategoryCodeDescription_MCC5013_instance;
  var MerchantCategoryCodeDescription_MCC5021_instance;
  var MerchantCategoryCodeDescription_MCC5039_instance;
  var MerchantCategoryCodeDescription_MCC5044_instance;
  var MerchantCategoryCodeDescription_MCC5045_instance;
  var MerchantCategoryCodeDescription_MCC5046_instance;
  var MerchantCategoryCodeDescription_MCC5047_instance;
  var MerchantCategoryCodeDescription_MCC5051_instance;
  var MerchantCategoryCodeDescription_MCC5065_instance;
  var MerchantCategoryCodeDescription_MCC5072_instance;
  var MerchantCategoryCodeDescription_MCC5074_instance;
  var MerchantCategoryCodeDescription_MCC5085_instance;
  var MerchantCategoryCodeDescription_MCC5094_instance;
  var MerchantCategoryCodeDescription_MCC5099_instance;
  var MerchantCategoryCodeDescription_MCC5111_instance;
  var MerchantCategoryCodeDescription_MCC5122_instance;
  var MerchantCategoryCodeDescription_MCC5131_instance;
  var MerchantCategoryCodeDescription_MCC5137_instance;
  var MerchantCategoryCodeDescription_MCC5139_instance;
  var MerchantCategoryCodeDescription_MCC5169_instance;
  var MerchantCategoryCodeDescription_MCC5172_instance;
  var MerchantCategoryCodeDescription_MCC5192_instance;
  var MerchantCategoryCodeDescription_MCC5193_instance;
  var MerchantCategoryCodeDescription_MCC5198_instance;
  var MerchantCategoryCodeDescription_MCC5199_instance;
  var MerchantCategoryCodeDescription_MCC5200_instance;
  var MerchantCategoryCodeDescription_MCC5211_instance;
  var MerchantCategoryCodeDescription_MCC5231_instance;
  var MerchantCategoryCodeDescription_MCC5251_instance;
  var MerchantCategoryCodeDescription_MCC5261_instance;
  var MerchantCategoryCodeDescription_MCC5271_instance;
  var MerchantCategoryCodeDescription_MCC5300_instance;
  var MerchantCategoryCodeDescription_MCC5309_instance;
  var MerchantCategoryCodeDescription_MCC5310_instance;
  var MerchantCategoryCodeDescription_MCC5311_instance;
  var MerchantCategoryCodeDescription_MCC5331_instance;
  var MerchantCategoryCodeDescription_MCC5399_instance;
  var MerchantCategoryCodeDescription_MCC5411_instance;
  var MerchantCategoryCodeDescription_MCC5422_instance;
  var MerchantCategoryCodeDescription_MCC5441_instance;
  var MerchantCategoryCodeDescription_MCC5451_instance;
  var MerchantCategoryCodeDescription_MCC5462_instance;
  var MerchantCategoryCodeDescription_MCC5499_instance;
  var MerchantCategoryCodeDescription_MCC5511_instance;
  var MerchantCategoryCodeDescription_MCC5521_instance;
  var MerchantCategoryCodeDescription_MCC5531_instance;
  var MerchantCategoryCodeDescription_MCC5532_instance;
  var MerchantCategoryCodeDescription_MCC5533_instance;
  var MerchantCategoryCodeDescription_MCC5541_instance;
  var MerchantCategoryCodeDescription_MCC5542_instance;
  var MerchantCategoryCodeDescription_MCC5551_instance;
  var MerchantCategoryCodeDescription_MCC5561_instance;
  var MerchantCategoryCodeDescription_MCC5571_instance;
  var MerchantCategoryCodeDescription_MCC5592_instance;
  var MerchantCategoryCodeDescription_MCC5598_instance;
  var MerchantCategoryCodeDescription_MCC5599_instance;
  var MerchantCategoryCodeDescription_MCC5611_instance;
  var MerchantCategoryCodeDescription_MCC5621_instance;
  var MerchantCategoryCodeDescription_MCC5631_instance;
  var MerchantCategoryCodeDescription_MCC5641_instance;
  var MerchantCategoryCodeDescription_MCC5651_instance;
  var MerchantCategoryCodeDescription_MCC5655_instance;
  var MerchantCategoryCodeDescription_MCC5661_instance;
  var MerchantCategoryCodeDescription_MCC5681_instance;
  var MerchantCategoryCodeDescription_MCC5691_instance;
  var MerchantCategoryCodeDescription_MCC5697_instance;
  var MerchantCategoryCodeDescription_MCC5698_instance;
  var MerchantCategoryCodeDescription_MCC5699_instance;
  var MerchantCategoryCodeDescription_MCC5712_instance;
  var MerchantCategoryCodeDescription_MCC5713_instance;
  var MerchantCategoryCodeDescription_MCC5714_instance;
  var MerchantCategoryCodeDescription_MCC5715_instance;
  var MerchantCategoryCodeDescription_MCC5718_instance;
  var MerchantCategoryCodeDescription_MCC5719_instance;
  var MerchantCategoryCodeDescription_MCC5722_instance;
  var MerchantCategoryCodeDescription_MCC5732_instance;
  var MerchantCategoryCodeDescription_MCC5733_instance;
  var MerchantCategoryCodeDescription_MCC5734_instance;
  var MerchantCategoryCodeDescription_MCC5735_instance;
  var MerchantCategoryCodeDescription_MCC5811_instance;
  var MerchantCategoryCodeDescription_MCC5812_instance;
  var MerchantCategoryCodeDescription_MCC5813_instance;
  var MerchantCategoryCodeDescription_MCC5814_instance;
  var MerchantCategoryCodeDescription_MCC5815_instance;
  var MerchantCategoryCodeDescription_MCC5816_instance;
  var MerchantCategoryCodeDescription_MCC5817_instance;
  var MerchantCategoryCodeDescription_MCC5818_instance;
  var MerchantCategoryCodeDescription_MCC5912_instance;
  var MerchantCategoryCodeDescription_MCC5921_instance;
  var MerchantCategoryCodeDescription_MCC5931_instance;
  var MerchantCategoryCodeDescription_MCC5932_instance;
  var MerchantCategoryCodeDescription_MCC5933_instance;
  var MerchantCategoryCodeDescription_MCC5935_instance;
  var MerchantCategoryCodeDescription_MCC5937_instance;
  var MerchantCategoryCodeDescription_MCC5940_instance;
  var MerchantCategoryCodeDescription_MCC5941_instance;
  var MerchantCategoryCodeDescription_MCC5942_instance;
  var MerchantCategoryCodeDescription_MCC5943_instance;
  var MerchantCategoryCodeDescription_MCC5944_instance;
  var MerchantCategoryCodeDescription_MCC5945_instance;
  var MerchantCategoryCodeDescription_MCC5946_instance;
  var MerchantCategoryCodeDescription_MCC5947_instance;
  var MerchantCategoryCodeDescription_MCC5948_instance;
  var MerchantCategoryCodeDescription_MCC5949_instance;
  var MerchantCategoryCodeDescription_MCC5950_instance;
  var MerchantCategoryCodeDescription_MCC5960_instance;
  var MerchantCategoryCodeDescription_MCC5962_instance;
  var MerchantCategoryCodeDescription_MCC5963_instance;
  var MerchantCategoryCodeDescription_MCC5964_instance;
  var MerchantCategoryCodeDescription_MCC5965_instance;
  var MerchantCategoryCodeDescription_MCC5966_instance;
  var MerchantCategoryCodeDescription_MCC5967_instance;
  var MerchantCategoryCodeDescription_MCC5968_instance;
  var MerchantCategoryCodeDescription_MCC5969_instance;
  var MerchantCategoryCodeDescription_MCC5970_instance;
  var MerchantCategoryCodeDescription_MCC5971_instance;
  var MerchantCategoryCodeDescription_MCC5972_instance;
  var MerchantCategoryCodeDescription_MCC5973_instance;
  var MerchantCategoryCodeDescription_MCC5975_instance;
  var MerchantCategoryCodeDescription_MCC5976_instance;
  var MerchantCategoryCodeDescription_MCC5977_instance;
  var MerchantCategoryCodeDescription_MCC5978_instance;
  var MerchantCategoryCodeDescription_MCC5983_instance;
  var MerchantCategoryCodeDescription_MCC5992_instance;
  var MerchantCategoryCodeDescription_MCC5993_instance;
  var MerchantCategoryCodeDescription_MCC5994_instance;
  var MerchantCategoryCodeDescription_MCC5995_instance;
  var MerchantCategoryCodeDescription_MCC5996_instance;
  var MerchantCategoryCodeDescription_MCC5997_instance;
  var MerchantCategoryCodeDescription_MCC5998_instance;
  var MerchantCategoryCodeDescription_MCC5999_instance;
  var MerchantCategoryCodeDescription_MCC6010_instance;
  var MerchantCategoryCodeDescription_MCC6011_instance;
  var MerchantCategoryCodeDescription_MCC6012_instance;
  var MerchantCategoryCodeDescription_MCC6051_instance;
  var MerchantCategoryCodeDescription_MCC6211_instance;
  var MerchantCategoryCodeDescription_MCC6300_instance;
  var MerchantCategoryCodeDescription_MCC7011_instance;
  var MerchantCategoryCodeDescription_MCC7012_instance;
  var MerchantCategoryCodeDescription_MCC7032_instance;
  var MerchantCategoryCodeDescription_MCC7033_instance;
  var MerchantCategoryCodeDescription_MCC7210_instance;
  var MerchantCategoryCodeDescription_MCC7211_instance;
  var MerchantCategoryCodeDescription_MCC7216_instance;
  var MerchantCategoryCodeDescription_MCC7217_instance;
  var MerchantCategoryCodeDescription_MCC7221_instance;
  var MerchantCategoryCodeDescription_MCC7230_instance;
  var MerchantCategoryCodeDescription_MCC7251_instance;
  var MerchantCategoryCodeDescription_MCC7261_instance;
  var MerchantCategoryCodeDescription_MCC7273_instance;
  var MerchantCategoryCodeDescription_MCC7276_instance;
  var MerchantCategoryCodeDescription_MCC7277_instance;
  var MerchantCategoryCodeDescription_MCC7278_instance;
  var MerchantCategoryCodeDescription_MCC7296_instance;
  var MerchantCategoryCodeDescription_MCC7297_instance;
  var MerchantCategoryCodeDescription_MCC7298_instance;
  var MerchantCategoryCodeDescription_MCC7299_instance;
  var MerchantCategoryCodeDescription_MCC7311_instance;
  var MerchantCategoryCodeDescription_MCC7321_instance;
  var MerchantCategoryCodeDescription_MCC7322_instance;
  var MerchantCategoryCodeDescription_MCC7333_instance;
  var MerchantCategoryCodeDescription_MCC7338_instance;
  var MerchantCategoryCodeDescription_MCC7339_instance;
  var MerchantCategoryCodeDescription_MCC7342_instance;
  var MerchantCategoryCodeDescription_MCC7349_instance;
  var MerchantCategoryCodeDescription_MCC7361_instance;
  var MerchantCategoryCodeDescription_MCC7372_instance;
  var MerchantCategoryCodeDescription_MCC7375_instance;
  var MerchantCategoryCodeDescription_MCC7379_instance;
  var MerchantCategoryCodeDescription_MCC7392_instance;
  var MerchantCategoryCodeDescription_MCC7393_instance;
  var MerchantCategoryCodeDescription_MCC7394_instance;
  var MerchantCategoryCodeDescription_MCC7395_instance;
  var MerchantCategoryCodeDescription_MCC7399_instance;
  var MerchantCategoryCodeDescription_MCC7512_instance;
  var MerchantCategoryCodeDescription_MCC7513_instance;
  var MerchantCategoryCodeDescription_MCC7519_instance;
  var MerchantCategoryCodeDescription_MCC7523_instance;
  var MerchantCategoryCodeDescription_MCC7531_instance;
  var MerchantCategoryCodeDescription_MCC7534_instance;
  var MerchantCategoryCodeDescription_MCC7535_instance;
  var MerchantCategoryCodeDescription_MCC7538_instance;
  var MerchantCategoryCodeDescription_MCC7542_instance;
  var MerchantCategoryCodeDescription_MCC7549_instance;
  var MerchantCategoryCodeDescription_MCC7622_instance;
  var MerchantCategoryCodeDescription_MCC7623_instance;
  var MerchantCategoryCodeDescription_MCC7629_instance;
  var MerchantCategoryCodeDescription_MCC7631_instance;
  var MerchantCategoryCodeDescription_MCC7641_instance;
  var MerchantCategoryCodeDescription_MCC7692_instance;
  var MerchantCategoryCodeDescription_MCC7699_instance;
  var MerchantCategoryCodeDescription_MCC7800_instance;
  var MerchantCategoryCodeDescription_MCC7801_instance;
  var MerchantCategoryCodeDescription_MCC7802_instance;
  var MerchantCategoryCodeDescription_MCC7829_instance;
  var MerchantCategoryCodeDescription_MCC7832_instance;
  var MerchantCategoryCodeDescription_MCC7841_instance;
  var MerchantCategoryCodeDescription_MCC7911_instance;
  var MerchantCategoryCodeDescription_MCC7922_instance;
  var MerchantCategoryCodeDescription_MCC7929_instance;
  var MerchantCategoryCodeDescription_MCC7932_instance;
  var MerchantCategoryCodeDescription_MCC7933_instance;
  var MerchantCategoryCodeDescription_MCC7941_instance;
  var MerchantCategoryCodeDescription_MCC7991_instance;
  var MerchantCategoryCodeDescription_MCC7992_instance;
  var MerchantCategoryCodeDescription_MCC7993_instance;
  var MerchantCategoryCodeDescription_MCC7994_instance;
  var MerchantCategoryCodeDescription_MCC7995_instance;
  var MerchantCategoryCodeDescription_MCC7996_instance;
  var MerchantCategoryCodeDescription_MCC7997_instance;
  var MerchantCategoryCodeDescription_MCC7998_instance;
  var MerchantCategoryCodeDescription_MCC7999_instance;
  var MerchantCategoryCodeDescription_MCC8011_instance;
  var MerchantCategoryCodeDescription_MCC8021_instance;
  var MerchantCategoryCodeDescription_MCC8031_instance;
  var MerchantCategoryCodeDescription_MCC8041_instance;
  var MerchantCategoryCodeDescription_MCC8042_instance;
  var MerchantCategoryCodeDescription_MCC8043_instance;
  var MerchantCategoryCodeDescription_MCC8049_instance;
  var MerchantCategoryCodeDescription_MCC8050_instance;
  var MerchantCategoryCodeDescription_MCC8062_instance;
  var MerchantCategoryCodeDescription_MCC8071_instance;
  var MerchantCategoryCodeDescription_MCC8099_instance;
  var MerchantCategoryCodeDescription_MCC8111_instance;
  var MerchantCategoryCodeDescription_MCC8211_instance;
  var MerchantCategoryCodeDescription_MCC8220_instance;
  var MerchantCategoryCodeDescription_MCC8241_instance;
  var MerchantCategoryCodeDescription_MCC8244_instance;
  var MerchantCategoryCodeDescription_MCC8249_instance;
  var MerchantCategoryCodeDescription_MCC8299_instance;
  var MerchantCategoryCodeDescription_MCC8351_instance;
  var MerchantCategoryCodeDescription_MCC8398_instance;
  var MerchantCategoryCodeDescription_MCC8641_instance;
  var MerchantCategoryCodeDescription_MCC8651_instance;
  var MerchantCategoryCodeDescription_MCC8661_instance;
  var MerchantCategoryCodeDescription_MCC8675_instance;
  var MerchantCategoryCodeDescription_MCC8699_instance;
  var MerchantCategoryCodeDescription_MCC8734_instance;
  var MerchantCategoryCodeDescription_MCC8911_instance;
  var MerchantCategoryCodeDescription_MCC8931_instance;
  var MerchantCategoryCodeDescription_MCC8999_instance;
  var MerchantCategoryCodeDescription_MCC9211_instance;
  var MerchantCategoryCodeDescription_MCC9222_instance;
  var MerchantCategoryCodeDescription_MCC9223_instance;
  var MerchantCategoryCodeDescription_MCC9311_instance;
  var MerchantCategoryCodeDescription_MCC9399_instance;
  var MerchantCategoryCodeDescription_MCC9402_instance;
  function Companion_14() {
  }
  protoOf(Companion_14).sf = function (code) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_4();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.github.rafaelrabeloit.iso.Companion.fromCode.<anonymous>' call
        if (element.nh_1 === code) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function values_5() {
    return [MerchantCategoryCodeDescription_MCC0742_getInstance(), MerchantCategoryCodeDescription_MCC0743_getInstance(), MerchantCategoryCodeDescription_MCC0744_getInstance(), MerchantCategoryCodeDescription_MCC0763_getInstance(), MerchantCategoryCodeDescription_MCC0780_getInstance(), MerchantCategoryCodeDescription_MCC1520_getInstance(), MerchantCategoryCodeDescription_MCC1711_getInstance(), MerchantCategoryCodeDescription_MCC1731_getInstance(), MerchantCategoryCodeDescription_MCC1740_getInstance(), MerchantCategoryCodeDescription_MCC1750_getInstance(), MerchantCategoryCodeDescription_MCC1761_getInstance(), MerchantCategoryCodeDescription_MCC1771_getInstance(), MerchantCategoryCodeDescription_MCC1799_getInstance(), MerchantCategoryCodeDescription_MCC2741_getInstance(), MerchantCategoryCodeDescription_MCC2791_getInstance(), MerchantCategoryCodeDescription_MCC2842_getInstance(), MerchantCategoryCodeDescription_MCC4011_getInstance(), MerchantCategoryCodeDescription_MCC4111_getInstance(), MerchantCategoryCodeDescription_MCC4112_getInstance(), MerchantCategoryCodeDescription_MCC4119_getInstance(), MerchantCategoryCodeDescription_MCC4121_getInstance(), MerchantCategoryCodeDescription_MCC4131_getInstance(), MerchantCategoryCodeDescription_MCC4214_getInstance(), MerchantCategoryCodeDescription_MCC4215_getInstance(), MerchantCategoryCodeDescription_MCC4225_getInstance(), MerchantCategoryCodeDescription_MCC4411_getInstance(), MerchantCategoryCodeDescription_MCC4457_getInstance(), MerchantCategoryCodeDescription_MCC4468_getInstance(), MerchantCategoryCodeDescription_MCC4511_getInstance(), MerchantCategoryCodeDescription_MCC4582_getInstance(), MerchantCategoryCodeDescription_MCC4722_getInstance(), MerchantCategoryCodeDescription_MCC4784_getInstance(), MerchantCategoryCodeDescription_MCC4789_getInstance(), MerchantCategoryCodeDescription_MCC4812_getInstance(), MerchantCategoryCodeDescription_MCC4814_getInstance(), MerchantCategoryCodeDescription_MCC4815_getInstance(), MerchantCategoryCodeDescription_MCC4816_getInstance(), MerchantCategoryCodeDescription_MCC4821_getInstance(), MerchantCategoryCodeDescription_MCC4829_getInstance(), MerchantCategoryCodeDescription_MCC4899_getInstance(), MerchantCategoryCodeDescription_MCC4900_getInstance(), MerchantCategoryCodeDescription_MCC5013_getInstance(), MerchantCategoryCodeDescription_MCC5021_getInstance(), MerchantCategoryCodeDescription_MCC5039_getInstance(), MerchantCategoryCodeDescription_MCC5044_getInstance(), MerchantCategoryCodeDescription_MCC5045_getInstance(), MerchantCategoryCodeDescription_MCC5046_getInstance(), MerchantCategoryCodeDescription_MCC5047_getInstance(), MerchantCategoryCodeDescription_MCC5051_getInstance(), MerchantCategoryCodeDescription_MCC5065_getInstance(), MerchantCategoryCodeDescription_MCC5072_getInstance(), MerchantCategoryCodeDescription_MCC5074_getInstance(), MerchantCategoryCodeDescription_MCC5085_getInstance(), MerchantCategoryCodeDescription_MCC5094_getInstance(), MerchantCategoryCodeDescription_MCC5099_getInstance(), MerchantCategoryCodeDescription_MCC5111_getInstance(), MerchantCategoryCodeDescription_MCC5122_getInstance(), MerchantCategoryCodeDescription_MCC5131_getInstance(), MerchantCategoryCodeDescription_MCC5137_getInstance(), MerchantCategoryCodeDescription_MCC5139_getInstance(), MerchantCategoryCodeDescription_MCC5169_getInstance(), MerchantCategoryCodeDescription_MCC5172_getInstance(), MerchantCategoryCodeDescription_MCC5192_getInstance(), MerchantCategoryCodeDescription_MCC5193_getInstance(), MerchantCategoryCodeDescription_MCC5198_getInstance(), MerchantCategoryCodeDescription_MCC5199_getInstance(), MerchantCategoryCodeDescription_MCC5200_getInstance(), MerchantCategoryCodeDescription_MCC5211_getInstance(), MerchantCategoryCodeDescription_MCC5231_getInstance(), MerchantCategoryCodeDescription_MCC5251_getInstance(), MerchantCategoryCodeDescription_MCC5261_getInstance(), MerchantCategoryCodeDescription_MCC5271_getInstance(), MerchantCategoryCodeDescription_MCC5300_getInstance(), MerchantCategoryCodeDescription_MCC5309_getInstance(), MerchantCategoryCodeDescription_MCC5310_getInstance(), MerchantCategoryCodeDescription_MCC5311_getInstance(), MerchantCategoryCodeDescription_MCC5331_getInstance(), MerchantCategoryCodeDescription_MCC5399_getInstance(), MerchantCategoryCodeDescription_MCC5411_getInstance(), MerchantCategoryCodeDescription_MCC5422_getInstance(), MerchantCategoryCodeDescription_MCC5441_getInstance(), MerchantCategoryCodeDescription_MCC5451_getInstance(), MerchantCategoryCodeDescription_MCC5462_getInstance(), MerchantCategoryCodeDescription_MCC5499_getInstance(), MerchantCategoryCodeDescription_MCC5511_getInstance(), MerchantCategoryCodeDescription_MCC5521_getInstance(), MerchantCategoryCodeDescription_MCC5531_getInstance(), MerchantCategoryCodeDescription_MCC5532_getInstance(), MerchantCategoryCodeDescription_MCC5533_getInstance(), MerchantCategoryCodeDescription_MCC5541_getInstance(), MerchantCategoryCodeDescription_MCC5542_getInstance(), MerchantCategoryCodeDescription_MCC5551_getInstance(), MerchantCategoryCodeDescription_MCC5561_getInstance(), MerchantCategoryCodeDescription_MCC5571_getInstance(), MerchantCategoryCodeDescription_MCC5592_getInstance(), MerchantCategoryCodeDescription_MCC5598_getInstance(), MerchantCategoryCodeDescription_MCC5599_getInstance(), MerchantCategoryCodeDescription_MCC5611_getInstance(), MerchantCategoryCodeDescription_MCC5621_getInstance(), MerchantCategoryCodeDescription_MCC5631_getInstance(), MerchantCategoryCodeDescription_MCC5641_getInstance(), MerchantCategoryCodeDescription_MCC5651_getInstance(), MerchantCategoryCodeDescription_MCC5655_getInstance(), MerchantCategoryCodeDescription_MCC5661_getInstance(), MerchantCategoryCodeDescription_MCC5681_getInstance(), MerchantCategoryCodeDescription_MCC5691_getInstance(), MerchantCategoryCodeDescription_MCC5697_getInstance(), MerchantCategoryCodeDescription_MCC5698_getInstance(), MerchantCategoryCodeDescription_MCC5699_getInstance(), MerchantCategoryCodeDescription_MCC5712_getInstance(), MerchantCategoryCodeDescription_MCC5713_getInstance(), MerchantCategoryCodeDescription_MCC5714_getInstance(), MerchantCategoryCodeDescription_MCC5715_getInstance(), MerchantCategoryCodeDescription_MCC5718_getInstance(), MerchantCategoryCodeDescription_MCC5719_getInstance(), MerchantCategoryCodeDescription_MCC5722_getInstance(), MerchantCategoryCodeDescription_MCC5732_getInstance(), MerchantCategoryCodeDescription_MCC5733_getInstance(), MerchantCategoryCodeDescription_MCC5734_getInstance(), MerchantCategoryCodeDescription_MCC5735_getInstance(), MerchantCategoryCodeDescription_MCC5811_getInstance(), MerchantCategoryCodeDescription_MCC5812_getInstance(), MerchantCategoryCodeDescription_MCC5813_getInstance(), MerchantCategoryCodeDescription_MCC5814_getInstance(), MerchantCategoryCodeDescription_MCC5815_getInstance(), MerchantCategoryCodeDescription_MCC5816_getInstance(), MerchantCategoryCodeDescription_MCC5817_getInstance(), MerchantCategoryCodeDescription_MCC5818_getInstance(), MerchantCategoryCodeDescription_MCC5912_getInstance(), MerchantCategoryCodeDescription_MCC5921_getInstance(), MerchantCategoryCodeDescription_MCC5931_getInstance(), MerchantCategoryCodeDescription_MCC5932_getInstance(), MerchantCategoryCodeDescription_MCC5933_getInstance(), MerchantCategoryCodeDescription_MCC5935_getInstance(), MerchantCategoryCodeDescription_MCC5937_getInstance(), MerchantCategoryCodeDescription_MCC5940_getInstance(), MerchantCategoryCodeDescription_MCC5941_getInstance(), MerchantCategoryCodeDescription_MCC5942_getInstance(), MerchantCategoryCodeDescription_MCC5943_getInstance(), MerchantCategoryCodeDescription_MCC5944_getInstance(), MerchantCategoryCodeDescription_MCC5945_getInstance(), MerchantCategoryCodeDescription_MCC5946_getInstance(), MerchantCategoryCodeDescription_MCC5947_getInstance(), MerchantCategoryCodeDescription_MCC5948_getInstance(), MerchantCategoryCodeDescription_MCC5949_getInstance(), MerchantCategoryCodeDescription_MCC5950_getInstance(), MerchantCategoryCodeDescription_MCC5960_getInstance(), MerchantCategoryCodeDescription_MCC5962_getInstance(), MerchantCategoryCodeDescription_MCC5963_getInstance(), MerchantCategoryCodeDescription_MCC5964_getInstance(), MerchantCategoryCodeDescription_MCC5965_getInstance(), MerchantCategoryCodeDescription_MCC5966_getInstance(), MerchantCategoryCodeDescription_MCC5967_getInstance(), MerchantCategoryCodeDescription_MCC5968_getInstance(), MerchantCategoryCodeDescription_MCC5969_getInstance(), MerchantCategoryCodeDescription_MCC5970_getInstance(), MerchantCategoryCodeDescription_MCC5971_getInstance(), MerchantCategoryCodeDescription_MCC5972_getInstance(), MerchantCategoryCodeDescription_MCC5973_getInstance(), MerchantCategoryCodeDescription_MCC5975_getInstance(), MerchantCategoryCodeDescription_MCC5976_getInstance(), MerchantCategoryCodeDescription_MCC5977_getInstance(), MerchantCategoryCodeDescription_MCC5978_getInstance(), MerchantCategoryCodeDescription_MCC5983_getInstance(), MerchantCategoryCodeDescription_MCC5992_getInstance(), MerchantCategoryCodeDescription_MCC5993_getInstance(), MerchantCategoryCodeDescription_MCC5994_getInstance(), MerchantCategoryCodeDescription_MCC5995_getInstance(), MerchantCategoryCodeDescription_MCC5996_getInstance(), MerchantCategoryCodeDescription_MCC5997_getInstance(), MerchantCategoryCodeDescription_MCC5998_getInstance(), MerchantCategoryCodeDescription_MCC5999_getInstance(), MerchantCategoryCodeDescription_MCC6010_getInstance(), MerchantCategoryCodeDescription_MCC6011_getInstance(), MerchantCategoryCodeDescription_MCC6012_getInstance(), MerchantCategoryCodeDescription_MCC6051_getInstance(), MerchantCategoryCodeDescription_MCC6211_getInstance(), MerchantCategoryCodeDescription_MCC6300_getInstance(), MerchantCategoryCodeDescription_MCC7011_getInstance(), MerchantCategoryCodeDescription_MCC7012_getInstance(), MerchantCategoryCodeDescription_MCC7032_getInstance(), MerchantCategoryCodeDescription_MCC7033_getInstance(), MerchantCategoryCodeDescription_MCC7210_getInstance(), MerchantCategoryCodeDescription_MCC7211_getInstance(), MerchantCategoryCodeDescription_MCC7216_getInstance(), MerchantCategoryCodeDescription_MCC7217_getInstance(), MerchantCategoryCodeDescription_MCC7221_getInstance(), MerchantCategoryCodeDescription_MCC7230_getInstance(), MerchantCategoryCodeDescription_MCC7251_getInstance(), MerchantCategoryCodeDescription_MCC7261_getInstance(), MerchantCategoryCodeDescription_MCC7273_getInstance(), MerchantCategoryCodeDescription_MCC7276_getInstance(), MerchantCategoryCodeDescription_MCC7277_getInstance(), MerchantCategoryCodeDescription_MCC7278_getInstance(), MerchantCategoryCodeDescription_MCC7296_getInstance(), MerchantCategoryCodeDescription_MCC7297_getInstance(), MerchantCategoryCodeDescription_MCC7298_getInstance(), MerchantCategoryCodeDescription_MCC7299_getInstance(), MerchantCategoryCodeDescription_MCC7311_getInstance(), MerchantCategoryCodeDescription_MCC7321_getInstance(), MerchantCategoryCodeDescription_MCC7322_getInstance(), MerchantCategoryCodeDescription_MCC7333_getInstance(), MerchantCategoryCodeDescription_MCC7338_getInstance(), MerchantCategoryCodeDescription_MCC7339_getInstance(), MerchantCategoryCodeDescription_MCC7342_getInstance(), MerchantCategoryCodeDescription_MCC7349_getInstance(), MerchantCategoryCodeDescription_MCC7361_getInstance(), MerchantCategoryCodeDescription_MCC7372_getInstance(), MerchantCategoryCodeDescription_MCC7375_getInstance(), MerchantCategoryCodeDescription_MCC7379_getInstance(), MerchantCategoryCodeDescription_MCC7392_getInstance(), MerchantCategoryCodeDescription_MCC7393_getInstance(), MerchantCategoryCodeDescription_MCC7394_getInstance(), MerchantCategoryCodeDescription_MCC7395_getInstance(), MerchantCategoryCodeDescription_MCC7399_getInstance(), MerchantCategoryCodeDescription_MCC7512_getInstance(), MerchantCategoryCodeDescription_MCC7513_getInstance(), MerchantCategoryCodeDescription_MCC7519_getInstance(), MerchantCategoryCodeDescription_MCC7523_getInstance(), MerchantCategoryCodeDescription_MCC7531_getInstance(), MerchantCategoryCodeDescription_MCC7534_getInstance(), MerchantCategoryCodeDescription_MCC7535_getInstance(), MerchantCategoryCodeDescription_MCC7538_getInstance(), MerchantCategoryCodeDescription_MCC7542_getInstance(), MerchantCategoryCodeDescription_MCC7549_getInstance(), MerchantCategoryCodeDescription_MCC7622_getInstance(), MerchantCategoryCodeDescription_MCC7623_getInstance(), MerchantCategoryCodeDescription_MCC7629_getInstance(), MerchantCategoryCodeDescription_MCC7631_getInstance(), MerchantCategoryCodeDescription_MCC7641_getInstance(), MerchantCategoryCodeDescription_MCC7692_getInstance(), MerchantCategoryCodeDescription_MCC7699_getInstance(), MerchantCategoryCodeDescription_MCC7800_getInstance(), MerchantCategoryCodeDescription_MCC7801_getInstance(), MerchantCategoryCodeDescription_MCC7802_getInstance(), MerchantCategoryCodeDescription_MCC7829_getInstance(), MerchantCategoryCodeDescription_MCC7832_getInstance(), MerchantCategoryCodeDescription_MCC7841_getInstance(), MerchantCategoryCodeDescription_MCC7911_getInstance(), MerchantCategoryCodeDescription_MCC7922_getInstance(), MerchantCategoryCodeDescription_MCC7929_getInstance(), MerchantCategoryCodeDescription_MCC7932_getInstance(), MerchantCategoryCodeDescription_MCC7933_getInstance(), MerchantCategoryCodeDescription_MCC7941_getInstance(), MerchantCategoryCodeDescription_MCC7991_getInstance(), MerchantCategoryCodeDescription_MCC7992_getInstance(), MerchantCategoryCodeDescription_MCC7993_getInstance(), MerchantCategoryCodeDescription_MCC7994_getInstance(), MerchantCategoryCodeDescription_MCC7995_getInstance(), MerchantCategoryCodeDescription_MCC7996_getInstance(), MerchantCategoryCodeDescription_MCC7997_getInstance(), MerchantCategoryCodeDescription_MCC7998_getInstance(), MerchantCategoryCodeDescription_MCC7999_getInstance(), MerchantCategoryCodeDescription_MCC8011_getInstance(), MerchantCategoryCodeDescription_MCC8021_getInstance(), MerchantCategoryCodeDescription_MCC8031_getInstance(), MerchantCategoryCodeDescription_MCC8041_getInstance(), MerchantCategoryCodeDescription_MCC8042_getInstance(), MerchantCategoryCodeDescription_MCC8043_getInstance(), MerchantCategoryCodeDescription_MCC8049_getInstance(), MerchantCategoryCodeDescription_MCC8050_getInstance(), MerchantCategoryCodeDescription_MCC8062_getInstance(), MerchantCategoryCodeDescription_MCC8071_getInstance(), MerchantCategoryCodeDescription_MCC8099_getInstance(), MerchantCategoryCodeDescription_MCC8111_getInstance(), MerchantCategoryCodeDescription_MCC8211_getInstance(), MerchantCategoryCodeDescription_MCC8220_getInstance(), MerchantCategoryCodeDescription_MCC8241_getInstance(), MerchantCategoryCodeDescription_MCC8244_getInstance(), MerchantCategoryCodeDescription_MCC8249_getInstance(), MerchantCategoryCodeDescription_MCC8299_getInstance(), MerchantCategoryCodeDescription_MCC8351_getInstance(), MerchantCategoryCodeDescription_MCC8398_getInstance(), MerchantCategoryCodeDescription_MCC8641_getInstance(), MerchantCategoryCodeDescription_MCC8651_getInstance(), MerchantCategoryCodeDescription_MCC8661_getInstance(), MerchantCategoryCodeDescription_MCC8675_getInstance(), MerchantCategoryCodeDescription_MCC8699_getInstance(), MerchantCategoryCodeDescription_MCC8734_getInstance(), MerchantCategoryCodeDescription_MCC8911_getInstance(), MerchantCategoryCodeDescription_MCC8931_getInstance(), MerchantCategoryCodeDescription_MCC8999_getInstance(), MerchantCategoryCodeDescription_MCC9211_getInstance(), MerchantCategoryCodeDescription_MCC9222_getInstance(), MerchantCategoryCodeDescription_MCC9223_getInstance(), MerchantCategoryCodeDescription_MCC9311_getInstance(), MerchantCategoryCodeDescription_MCC9399_getInstance(), MerchantCategoryCodeDescription_MCC9402_getInstance()];
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_5());
    return $ENTRIES_4;
  }
  var MerchantCategoryCodeDescription_entriesInitialized;
  function MerchantCategoryCodeDescription_initEntries() {
    if (MerchantCategoryCodeDescription_entriesInitialized)
      return Unit_instance;
    MerchantCategoryCodeDescription_entriesInitialized = true;
    MerchantCategoryCodeDescription_MCC0742_instance = new MerchantCategoryCodeDescription('MCC0742', 0, 742, 'Veterinary services', 'Agricultural services');
    MerchantCategoryCodeDescription_MCC0743_instance = new MerchantCategoryCodeDescription('MCC0743', 1, 743, 'Wine producers', 'Agricultural services');
    MerchantCategoryCodeDescription_MCC0744_instance = new MerchantCategoryCodeDescription('MCC0744', 2, 744, 'Champagne producers', 'Agricultural services');
    MerchantCategoryCodeDescription_MCC0763_instance = new MerchantCategoryCodeDescription('MCC0763', 3, 763, 'Agricultural co-operatives', 'Agricultural services');
    MerchantCategoryCodeDescription_MCC0780_instance = new MerchantCategoryCodeDescription('MCC0780', 4, 780, 'Landscaping and horticultural services', 'Agricultural services');
    MerchantCategoryCodeDescription_MCC1520_instance = new MerchantCategoryCodeDescription('MCC1520', 5, 1520, 'General contractors \u2014 residential and commercial', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1711_instance = new MerchantCategoryCodeDescription('MCC1711', 6, 1711, 'Heating, plumbing and air-conditioning contractors', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1731_instance = new MerchantCategoryCodeDescription('MCC1731', 7, 1731, 'Electrical contractors', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1740_instance = new MerchantCategoryCodeDescription('MCC1740', 8, 1740, 'Masonry, stonework, tile setting, plastering and insulation contractors', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1750_instance = new MerchantCategoryCodeDescription('MCC1750', 9, 1750, 'Carpentry contractors', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1761_instance = new MerchantCategoryCodeDescription('MCC1761', 10, 1761, 'Roofing, siding and sheet metal work contractors', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1771_instance = new MerchantCategoryCodeDescription('MCC1771', 11, 1771, 'Concrete work contractors', 'Contracted services');
    MerchantCategoryCodeDescription_MCC1799_instance = new MerchantCategoryCodeDescription('MCC1799', 12, 1799, 'Special trade contractors \u2014 not elsewhere classified', 'Contracted services');
    MerchantCategoryCodeDescription_MCC2741_instance = new MerchantCategoryCodeDescription('MCC2741', 13, 2741, 'Miscellaneous publishing and printing services', 'Contracted services');
    MerchantCategoryCodeDescription_MCC2791_instance = new MerchantCategoryCodeDescription('MCC2791', 14, 2791, 'Typesetting, platemaking and related services', 'Contracted services');
    MerchantCategoryCodeDescription_MCC2842_instance = new MerchantCategoryCodeDescription('MCC2842', 15, 2842, 'Speciality cleaning, polishing and sanitation preparations', 'Contracted services');
    MerchantCategoryCodeDescription_MCC4011_instance = new MerchantCategoryCodeDescription('MCC4011', 16, 4011, 'Railroads', 'Transportation');
    MerchantCategoryCodeDescription_MCC4111_instance = new MerchantCategoryCodeDescription('MCC4111', 17, 4111, 'Local and suburban commuter passenger transportation, including ferries', 'Transportation');
    MerchantCategoryCodeDescription_MCC4112_instance = new MerchantCategoryCodeDescription('MCC4112', 18, 4112, 'Passenger railways', 'Transportation');
    MerchantCategoryCodeDescription_MCC4119_instance = new MerchantCategoryCodeDescription('MCC4119', 19, 4119, 'Ambulance services', 'Transportation');
    MerchantCategoryCodeDescription_MCC4121_instance = new MerchantCategoryCodeDescription('MCC4121', 20, 4121, 'Taxi-cabs and limousines', 'Transportation');
    MerchantCategoryCodeDescription_MCC4131_instance = new MerchantCategoryCodeDescription('MCC4131', 21, 4131, 'Bus lines', 'Transportation');
    MerchantCategoryCodeDescription_MCC4214_instance = new MerchantCategoryCodeDescription('MCC4214', 22, 4214, 'Motor freight carriers and trucking \u2014 local and long distance, moving and storage companies and local delivery', 'Transportation');
    MerchantCategoryCodeDescription_MCC4215_instance = new MerchantCategoryCodeDescription('MCC4215', 23, 4215, 'Courier services \u2014 air and ground and freight forwarders', 'Transportation');
    MerchantCategoryCodeDescription_MCC4225_instance = new MerchantCategoryCodeDescription('MCC4225', 24, 4225, 'Public warehousing and storage \u2014 farm products, refrigerated goods and household goods', 'Transportation');
    MerchantCategoryCodeDescription_MCC4411_instance = new MerchantCategoryCodeDescription('MCC4411', 25, 4411, 'Steamships and cruise lines', 'Transportation');
    MerchantCategoryCodeDescription_MCC4457_instance = new MerchantCategoryCodeDescription('MCC4457', 26, 4457, 'Boat rentals and leasing', 'Transportation');
    MerchantCategoryCodeDescription_MCC4468_instance = new MerchantCategoryCodeDescription('MCC4468', 27, 4468, 'Marinas, marine service and supplies', 'Transportation');
    MerchantCategoryCodeDescription_MCC4511_instance = new MerchantCategoryCodeDescription('MCC4511', 28, 4511, 'Airlines and air carriers', 'Transportation');
    MerchantCategoryCodeDescription_MCC4582_instance = new MerchantCategoryCodeDescription('MCC4582', 29, 4582, 'Airports, flying fields and airport terminals', 'Transportation');
    MerchantCategoryCodeDescription_MCC4722_instance = new MerchantCategoryCodeDescription('MCC4722', 30, 4722, 'Travel agencies and tour operators', 'Transportation');
    MerchantCategoryCodeDescription_MCC4784_instance = new MerchantCategoryCodeDescription('MCC4784', 31, 4784, 'Tolls and bridge fees', 'Transportation');
    MerchantCategoryCodeDescription_MCC4789_instance = new MerchantCategoryCodeDescription('MCC4789', 32, 4789, 'Transportation services \u2014 not elsewhere classified', 'Transportation');
    MerchantCategoryCodeDescription_MCC4812_instance = new MerchantCategoryCodeDescription('MCC4812', 33, 4812, 'Telecommunication equipment and telephone sales', 'Utilities');
    MerchantCategoryCodeDescription_MCC4814_instance = new MerchantCategoryCodeDescription('MCC4814', 34, 4814, 'Telecommunication services, including local and long distance calls, credit card calls, calls through use of magnetic stripe reading telephones and faxes', 'Utilities');
    MerchantCategoryCodeDescription_MCC4815_instance = new MerchantCategoryCodeDescription('MCC4815', 35, 4815, 'Monthly summary telephone charges', 'Utilities');
    MerchantCategoryCodeDescription_MCC4816_instance = new MerchantCategoryCodeDescription('MCC4816', 36, 4816, 'Computer network/information services', 'Utilities');
    MerchantCategoryCodeDescription_MCC4821_instance = new MerchantCategoryCodeDescription('MCC4821', 37, 4821, 'Telegraph services', 'Utilities');
    MerchantCategoryCodeDescription_MCC4829_instance = new MerchantCategoryCodeDescription('MCC4829', 38, 4829, 'Wire transfers and money orders', 'Utilities');
    MerchantCategoryCodeDescription_MCC4899_instance = new MerchantCategoryCodeDescription('MCC4899', 39, 4899, 'Cable and other pay television services', 'Utilities');
    MerchantCategoryCodeDescription_MCC4900_instance = new MerchantCategoryCodeDescription('MCC4900', 40, 4900, 'Utilities \u2014 electric, gas, water and sanitary', 'Utilities');
    MerchantCategoryCodeDescription_MCC5013_instance = new MerchantCategoryCodeDescription('MCC5013', 41, 5013, 'Motor vehicle supplies and new parts', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5021_instance = new MerchantCategoryCodeDescription('MCC5021', 42, 5021, 'Office and commercial furniture', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5039_instance = new MerchantCategoryCodeDescription('MCC5039', 43, 5039, 'Construction materials \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5044_instance = new MerchantCategoryCodeDescription('MCC5044', 44, 5044, 'Office, photographic, photocopy and microfilm equipment', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5045_instance = new MerchantCategoryCodeDescription('MCC5045', 45, 5045, 'Computers, computer peripheral equipment \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5046_instance = new MerchantCategoryCodeDescription('MCC5046', 46, 5046, 'Commercial equipment \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5047_instance = new MerchantCategoryCodeDescription('MCC5047', 47, 5047, 'Dental/laboratory/medical/ophthalmic hospital equipment and supplies', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5051_instance = new MerchantCategoryCodeDescription('MCC5051', 48, 5051, 'Metal service centres and offices', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5065_instance = new MerchantCategoryCodeDescription('MCC5065', 49, 5065, 'Electrical parts and equipment', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5072_instance = new MerchantCategoryCodeDescription('MCC5072', 50, 5072, 'Hardware equipment and supplies', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5074_instance = new MerchantCategoryCodeDescription('MCC5074', 51, 5074, 'Plumbing and heating equipment and supplies', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5085_instance = new MerchantCategoryCodeDescription('MCC5085', 52, 5085, 'Industrial supplies \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5094_instance = new MerchantCategoryCodeDescription('MCC5094', 53, 5094, 'Precious stones and metals, watches and jewellery', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5099_instance = new MerchantCategoryCodeDescription('MCC5099', 54, 5099, 'Durable goods \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5111_instance = new MerchantCategoryCodeDescription('MCC5111', 55, 5111, 'Stationery, office supplies and printing and writing paper', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5122_instance = new MerchantCategoryCodeDescription('MCC5122', 56, 5122, 'Drugs, drug proprietors', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5131_instance = new MerchantCategoryCodeDescription('MCC5131', 57, 5131, 'Piece goods, notions and other dry goods', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5137_instance = new MerchantCategoryCodeDescription('MCC5137', 58, 5137, 'Men\u2019s, women\u2019s and children\u2019s uniforms and commercial clothing', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5139_instance = new MerchantCategoryCodeDescription('MCC5139', 59, 5139, 'Commercial footwear', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5169_instance = new MerchantCategoryCodeDescription('MCC5169', 60, 5169, 'Chemicals and allied products \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5172_instance = new MerchantCategoryCodeDescription('MCC5172', 61, 5172, 'Petroleum and petroleum products', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5192_instance = new MerchantCategoryCodeDescription('MCC5192', 62, 5192, 'Books, periodicals and newspapers', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5193_instance = new MerchantCategoryCodeDescription('MCC5193', 63, 5193, 'Florists\u2019 supplies, nursery stock and flowers', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5198_instance = new MerchantCategoryCodeDescription('MCC5198', 64, 5198, 'Paints, varnishes and supplies', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5199_instance = new MerchantCategoryCodeDescription('MCC5199', 65, 5199, 'Non-durable goods \u2014 not elsewhere classified', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5200_instance = new MerchantCategoryCodeDescription('MCC5200', 66, 5200, 'Home supply warehouse outlets', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5211_instance = new MerchantCategoryCodeDescription('MCC5211', 67, 5211, 'Lumber and building materials outlets', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5231_instance = new MerchantCategoryCodeDescription('MCC5231', 68, 5231, 'Glass, paint and wallpaper shops', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5251_instance = new MerchantCategoryCodeDescription('MCC5251', 69, 5251, 'Hardware shops', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5261_instance = new MerchantCategoryCodeDescription('MCC5261', 70, 5261, 'Lawn and garden supplies outlets, including nurseries', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5271_instance = new MerchantCategoryCodeDescription('MCC5271', 71, 5271, 'Mobile home dealers', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5300_instance = new MerchantCategoryCodeDescription('MCC5300', 72, 5300, 'Wholesale clubs', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5309_instance = new MerchantCategoryCodeDescription('MCC5309', 73, 5309, 'Duty-free shops', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5310_instance = new MerchantCategoryCodeDescription('MCC5310', 74, 5310, 'Discount shops', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5311_instance = new MerchantCategoryCodeDescription('MCC5311', 75, 5311, 'Department stores', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5331_instance = new MerchantCategoryCodeDescription('MCC5331', 76, 5331, 'Variety stores', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5399_instance = new MerchantCategoryCodeDescription('MCC5399', 77, 5399, 'Miscellaneous general merchandise', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5411_instance = new MerchantCategoryCodeDescription('MCC5411', 78, 5411, 'Groceries and supermarkets', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5422_instance = new MerchantCategoryCodeDescription('MCC5422', 79, 5422, 'Freezer and locker meat provisioners', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5441_instance = new MerchantCategoryCodeDescription('MCC5441', 80, 5441, 'Candy, nut and confectionery shops', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5451_instance = new MerchantCategoryCodeDescription('MCC5451', 81, 5451, 'Dairies', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5462_instance = new MerchantCategoryCodeDescription('MCC5462', 82, 5462, 'Bakeries', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5499_instance = new MerchantCategoryCodeDescription('MCC5499', 83, 5499, 'Miscellaneous food shops \u2014 convenience and speciality retail outlets', 'Retail outlets');
    MerchantCategoryCodeDescription_MCC5511_instance = new MerchantCategoryCodeDescription('MCC5511', 84, 5511, 'Car and truck dealers (new and used) sales, services, repairs, parts and leasing', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5521_instance = new MerchantCategoryCodeDescription('MCC5521', 85, 5521, 'Car and truck dealers (used only) sales, service, repairs, parts and leasing', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5531_instance = new MerchantCategoryCodeDescription('MCC5531', 86, 5531, 'Auto and home supply outlets', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5532_instance = new MerchantCategoryCodeDescription('MCC5532', 87, 5532, 'Automotive tyre outlets', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5533_instance = new MerchantCategoryCodeDescription('MCC5533', 88, 5533, 'Automotive parts and accessories outlets', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5541_instance = new MerchantCategoryCodeDescription('MCC5541', 89, 5541, 'Service stations (with or without ancillary services)', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5542_instance = new MerchantCategoryCodeDescription('MCC5542', 90, 5542, 'Automated fuel dispensers', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5551_instance = new MerchantCategoryCodeDescription('MCC5551', 91, 5551, 'Boat dealers', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5561_instance = new MerchantCategoryCodeDescription('MCC5561', 92, 5561, 'Camper, recreational and utility trailer dealers', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5571_instance = new MerchantCategoryCodeDescription('MCC5571', 93, 5571, 'Motorcycle shops and dealers', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5592_instance = new MerchantCategoryCodeDescription('MCC5592', 94, 5592, 'Motor home dealers', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5598_instance = new MerchantCategoryCodeDescription('MCC5598', 95, 5598, 'Snowmobile dealers', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5599_instance = new MerchantCategoryCodeDescription('MCC5599', 96, 5599, 'Miscellaneous automotive, aircraft and farm equipment dealers \u2014 not elsewhere classified', 'Automobiles and vehicles');
    MerchantCategoryCodeDescription_MCC5611_instance = new MerchantCategoryCodeDescription('MCC5611', 97, 5611, 'Men\u2019s and boys\u2019 clothing and accessory shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5621_instance = new MerchantCategoryCodeDescription('MCC5621', 98, 5621, 'Women\u2019s ready-to-wear shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5631_instance = new MerchantCategoryCodeDescription('MCC5631', 99, 5631, 'Women\u2019s accessory and speciality shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5641_instance = new MerchantCategoryCodeDescription('MCC5641', 100, 5641, 'Children\u2019s and infants\u2019 wear shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5651_instance = new MerchantCategoryCodeDescription('MCC5651', 101, 5651, 'Family clothing shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5655_instance = new MerchantCategoryCodeDescription('MCC5655', 102, 5655, 'Sports and riding apparel shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5661_instance = new MerchantCategoryCodeDescription('MCC5661', 103, 5661, 'Shoe shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5681_instance = new MerchantCategoryCodeDescription('MCC5681', 104, 5681, 'Furriers and fur shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5691_instance = new MerchantCategoryCodeDescription('MCC5691', 105, 5691, 'Men\u2019s and women\u2019s clothing shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5697_instance = new MerchantCategoryCodeDescription('MCC5697', 106, 5697, 'Tailors, seamstresses, mending and alterations', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5698_instance = new MerchantCategoryCodeDescription('MCC5698', 107, 5698, 'Wig and toupee shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5699_instance = new MerchantCategoryCodeDescription('MCC5699', 108, 5699, 'Miscellaneous apparel and accessory shops', 'Clothing outlets');
    MerchantCategoryCodeDescription_MCC5712_instance = new MerchantCategoryCodeDescription('MCC5712', 109, 5712, 'Furniture, home furnishings and equipment shops and manufacturers, except appliances', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5713_instance = new MerchantCategoryCodeDescription('MCC5713', 110, 5713, 'Floor covering services', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5714_instance = new MerchantCategoryCodeDescription('MCC5714', 111, 5714, 'Drapery, window covering and upholstery shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5715_instance = new MerchantCategoryCodeDescription('MCC5715', 112, 5715, 'Alcoholic beverage wholesalers', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5718_instance = new MerchantCategoryCodeDescription('MCC5718', 113, 5718, 'Fireplaces, fireplace screens and accessories shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5719_instance = new MerchantCategoryCodeDescription('MCC5719', 114, 5719, 'Miscellaneous home furnishing speciality shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5722_instance = new MerchantCategoryCodeDescription('MCC5722', 115, 5722, 'Household appliance shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5732_instance = new MerchantCategoryCodeDescription('MCC5732', 116, 5732, 'Electronics shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5733_instance = new MerchantCategoryCodeDescription('MCC5733', 117, 5733, 'Music shops \u2014 musical instruments, pianos and sheet music', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5734_instance = new MerchantCategoryCodeDescription('MCC5734', 118, 5734, 'Computer software outlets', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5735_instance = new MerchantCategoryCodeDescription('MCC5735', 119, 5735, 'Record shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5811_instance = new MerchantCategoryCodeDescription('MCC5811', 120, 5811, 'Caterers', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5812_instance = new MerchantCategoryCodeDescription('MCC5812', 121, 5812, 'Eating places and restaurants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5813_instance = new MerchantCategoryCodeDescription('MCC5813', 122, 5813, 'Drinking places (alcoholic beverages) \u2014 bars, taverns, night-clubs, cocktail lounges and discoth\xE8ques', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5814_instance = new MerchantCategoryCodeDescription('MCC5814', 123, 5814, 'Fast food restaurants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5815_instance = new MerchantCategoryCodeDescription('MCC5815', 124, 5815, 'Digital Goods-Media: Books, Movies, Music', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5816_instance = new MerchantCategoryCodeDescription('MCC5816', 125, 5816, 'Digital Goods: Games', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5817_instance = new MerchantCategoryCodeDescription('MCC5817', 126, 5817, 'Digital Goods: Application (Excludes Games)', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5818_instance = new MerchantCategoryCodeDescription('MCC5818', 127, 5818, 'Large Digital Goods Merchant', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5912_instance = new MerchantCategoryCodeDescription('MCC5912', 128, 5912, 'Drug stores and pharmacies', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5921_instance = new MerchantCategoryCodeDescription('MCC5921', 129, 5921, 'Package shops \u2014 beer, wine and liquor', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5931_instance = new MerchantCategoryCodeDescription('MCC5931', 130, 5931, 'Used merchandise and second-hand shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5932_instance = new MerchantCategoryCodeDescription('MCC5932', 131, 5932, 'Antique shops \u2014 sales, repairs and restoration services', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5933_instance = new MerchantCategoryCodeDescription('MCC5933', 132, 5933, 'Pawn shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5935_instance = new MerchantCategoryCodeDescription('MCC5935', 133, 5935, 'Wrecking and salvage yards', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5937_instance = new MerchantCategoryCodeDescription('MCC5937', 134, 5937, 'Antique reproduction shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5940_instance = new MerchantCategoryCodeDescription('MCC5940', 135, 5940, 'Bicycle shops \u2014 sales and service', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5941_instance = new MerchantCategoryCodeDescription('MCC5941', 136, 5941, 'Sporting goods shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5942_instance = new MerchantCategoryCodeDescription('MCC5942', 137, 5942, 'Bookshops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5943_instance = new MerchantCategoryCodeDescription('MCC5943', 138, 5943, 'Stationery, office and school supply shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5944_instance = new MerchantCategoryCodeDescription('MCC5944', 139, 5944, 'Jewellery, watch, clock and silverware shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5945_instance = new MerchantCategoryCodeDescription('MCC5945', 140, 5945, 'Hobby, toy and game shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5946_instance = new MerchantCategoryCodeDescription('MCC5946', 141, 5946, 'Camera and photographic supply shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5947_instance = new MerchantCategoryCodeDescription('MCC5947', 142, 5947, 'Gift, card, novelty and souvenir shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5948_instance = new MerchantCategoryCodeDescription('MCC5948', 143, 5948, 'Luggage and leather goods shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5949_instance = new MerchantCategoryCodeDescription('MCC5949', 144, 5949, 'Sewing, needlework, fabric and piece goods shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5950_instance = new MerchantCategoryCodeDescription('MCC5950', 145, 5950, 'Glassware and crystal shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5960_instance = new MerchantCategoryCodeDescription('MCC5960', 146, 5960, 'Direct marketing \u2014 insurance services', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5962_instance = new MerchantCategoryCodeDescription('MCC5962', 147, 5962, 'Telemarketing \u2014 travel-related arrangement services', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5963_instance = new MerchantCategoryCodeDescription('MCC5963', 148, 5963, 'Door-to-door sales', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5964_instance = new MerchantCategoryCodeDescription('MCC5964', 149, 5964, 'Direct marketing \u2014 catalogue merchants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5965_instance = new MerchantCategoryCodeDescription('MCC5965', 150, 5965, 'Direct marketing \u2014 combination catalogue and retail merchants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5966_instance = new MerchantCategoryCodeDescription('MCC5966', 151, 5966, 'Direct marketing \u2014 outbound telemarketing merchants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5967_instance = new MerchantCategoryCodeDescription('MCC5967', 152, 5967, 'Direct marketing \u2014 inbound telemarketing merchants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5968_instance = new MerchantCategoryCodeDescription('MCC5968', 153, 5968, 'Direct marketing \u2014 continuity/subscription merchants', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5969_instance = new MerchantCategoryCodeDescription('MCC5969', 154, 5969, 'Direct marketing/direct marketers \u2014 not elsewhere classified', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5970_instance = new MerchantCategoryCodeDescription('MCC5970', 155, 5970, 'Artist supply and craft shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5971_instance = new MerchantCategoryCodeDescription('MCC5971', 156, 5971, 'Art dealers and galleries', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5972_instance = new MerchantCategoryCodeDescription('MCC5972', 157, 5972, 'Stamp and coin shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5973_instance = new MerchantCategoryCodeDescription('MCC5973', 158, 5973, 'Religious goods and shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5975_instance = new MerchantCategoryCodeDescription('MCC5975', 159, 5975, 'Hearing aids \u2014 sales, service and supplies', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5976_instance = new MerchantCategoryCodeDescription('MCC5976', 160, 5976, 'Orthopaedic goods and prosthetic devices', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5977_instance = new MerchantCategoryCodeDescription('MCC5977', 161, 5977, 'Cosmetic shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5978_instance = new MerchantCategoryCodeDescription('MCC5978', 162, 5978, 'Typewriter outlets \u2014 sales, service and rentals', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5983_instance = new MerchantCategoryCodeDescription('MCC5983', 163, 5983, 'Fuel dealers \u2014 fuel oil, wood, coal and liquefied petroleum', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5992_instance = new MerchantCategoryCodeDescription('MCC5992', 164, 5992, 'Florists', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5993_instance = new MerchantCategoryCodeDescription('MCC5993', 165, 5993, 'Cigar shops and stands', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5994_instance = new MerchantCategoryCodeDescription('MCC5994', 166, 5994, 'Newsagents and news-stands', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5995_instance = new MerchantCategoryCodeDescription('MCC5995', 167, 5995, 'Pet shops, pet food and supplies', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5996_instance = new MerchantCategoryCodeDescription('MCC5996', 168, 5996, 'Swimming pools \u2014 sales, supplies and services', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5997_instance = new MerchantCategoryCodeDescription('MCC5997', 169, 5997, 'Electric razor shops \u2014 sales and service', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5998_instance = new MerchantCategoryCodeDescription('MCC5998', 170, 5998, 'Tent and awning shops', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC5999_instance = new MerchantCategoryCodeDescription('MCC5999', 171, 5999, 'Miscellaneous and speciality retail outlets', 'Miscellaneous outlets');
    MerchantCategoryCodeDescription_MCC6010_instance = new MerchantCategoryCodeDescription('MCC6010', 172, 6010, 'Financial institutions \u2014 manual cash disbursements', 'Service providers');
    MerchantCategoryCodeDescription_MCC6011_instance = new MerchantCategoryCodeDescription('MCC6011', 173, 6011, 'Financial institutions \u2014 automated cash disbursements', 'Service providers');
    MerchantCategoryCodeDescription_MCC6012_instance = new MerchantCategoryCodeDescription('MCC6012', 174, 6012, 'Financial institutions \u2014 merchandise and services', 'Service providers');
    MerchantCategoryCodeDescription_MCC6051_instance = new MerchantCategoryCodeDescription('MCC6051', 175, 6051, 'Non-financial institutions \u2014 foreign currency, money orders (not wire transfer), scrip and travellers\u2019 checks', 'Service providers');
    MerchantCategoryCodeDescription_MCC6211_instance = new MerchantCategoryCodeDescription('MCC6211', 176, 6211, 'Securities \u2014 brokers and dealers', 'Service providers');
    MerchantCategoryCodeDescription_MCC6300_instance = new MerchantCategoryCodeDescription('MCC6300', 177, 6300, 'Insurance sales, underwriting and premiums', 'Service providers');
    MerchantCategoryCodeDescription_MCC7011_instance = new MerchantCategoryCodeDescription('MCC7011', 178, 7011, 'Lodging \u2014 hotels, motels and resorts', 'Service providers');
    MerchantCategoryCodeDescription_MCC7012_instance = new MerchantCategoryCodeDescription('MCC7012', 179, 7012, 'Timeshares', 'Service providers');
    MerchantCategoryCodeDescription_MCC7032_instance = new MerchantCategoryCodeDescription('MCC7032', 180, 7032, 'Sporting and recreational camps', 'Service providers');
    MerchantCategoryCodeDescription_MCC7033_instance = new MerchantCategoryCodeDescription('MCC7033', 181, 7033, 'Trailer parks and camp-sites', 'Service providers');
    MerchantCategoryCodeDescription_MCC7210_instance = new MerchantCategoryCodeDescription('MCC7210', 182, 7210, 'Laundry, cleaning and garment services', 'Service providers');
    MerchantCategoryCodeDescription_MCC7211_instance = new MerchantCategoryCodeDescription('MCC7211', 183, 7211, 'Laundry services \u2014 family and commercial', 'Service providers');
    MerchantCategoryCodeDescription_MCC7216_instance = new MerchantCategoryCodeDescription('MCC7216', 184, 7216, 'Dry cleaners', 'Service providers');
    MerchantCategoryCodeDescription_MCC7217_instance = new MerchantCategoryCodeDescription('MCC7217', 185, 7217, 'Carpet and upholstery cleaning', 'Service providers');
    MerchantCategoryCodeDescription_MCC7221_instance = new MerchantCategoryCodeDescription('MCC7221', 186, 7221, 'Photographic studios', 'Service providers');
    MerchantCategoryCodeDescription_MCC7230_instance = new MerchantCategoryCodeDescription('MCC7230', 187, 7230, 'Beauty and barber shops', 'Service providers');
    MerchantCategoryCodeDescription_MCC7251_instance = new MerchantCategoryCodeDescription('MCC7251', 188, 7251, 'Shoe repair shops, shoe shine parlours and hat cleaning shops', 'Service providers');
    MerchantCategoryCodeDescription_MCC7261_instance = new MerchantCategoryCodeDescription('MCC7261', 189, 7261, 'Funeral services and crematoriums', 'Service providers');
    MerchantCategoryCodeDescription_MCC7273_instance = new MerchantCategoryCodeDescription('MCC7273', 190, 7273, 'Dating and escort services', 'Service providers');
    MerchantCategoryCodeDescription_MCC7276_instance = new MerchantCategoryCodeDescription('MCC7276', 191, 7276, 'Tax preparation services', 'Service providers');
    MerchantCategoryCodeDescription_MCC7277_instance = new MerchantCategoryCodeDescription('MCC7277', 192, 7277, 'Counselling services \u2014 debt, marriage and personal', 'Service providers');
    MerchantCategoryCodeDescription_MCC7278_instance = new MerchantCategoryCodeDescription('MCC7278', 193, 7278, 'Buying and shopping services and clubs', 'Service providers');
    MerchantCategoryCodeDescription_MCC7296_instance = new MerchantCategoryCodeDescription('MCC7296', 194, 7296, 'Clothing rentals \u2014 costumes, uniforms and formal wear', 'Service providers');
    MerchantCategoryCodeDescription_MCC7297_instance = new MerchantCategoryCodeDescription('MCC7297', 195, 7297, 'Massage parlours', 'Service providers');
    MerchantCategoryCodeDescription_MCC7298_instance = new MerchantCategoryCodeDescription('MCC7298', 196, 7298, 'Health and beauty spas', 'Service providers');
    MerchantCategoryCodeDescription_MCC7299_instance = new MerchantCategoryCodeDescription('MCC7299', 197, 7299, 'Miscellaneous personal services \u2014 not elsewhere classified', 'Service providers');
    MerchantCategoryCodeDescription_MCC7311_instance = new MerchantCategoryCodeDescription('MCC7311', 198, 7311, 'Advertising services', 'Business services');
    MerchantCategoryCodeDescription_MCC7321_instance = new MerchantCategoryCodeDescription('MCC7321', 199, 7321, 'Consumer credit reporting agencies', 'Business services');
    MerchantCategoryCodeDescription_MCC7322_instance = new MerchantCategoryCodeDescription('MCC7322', 200, 7322, 'Debt collection agencies', 'Business services');
    MerchantCategoryCodeDescription_MCC7333_instance = new MerchantCategoryCodeDescription('MCC7333', 201, 7333, 'Commercial photography, art and graphics', 'Business services');
    MerchantCategoryCodeDescription_MCC7338_instance = new MerchantCategoryCodeDescription('MCC7338', 202, 7338, 'Quick copy, reproduction and blueprinting services', 'Business services');
    MerchantCategoryCodeDescription_MCC7339_instance = new MerchantCategoryCodeDescription('MCC7339', 203, 7339, 'Stenographic and secretarial support services', 'Business services');
    MerchantCategoryCodeDescription_MCC7342_instance = new MerchantCategoryCodeDescription('MCC7342', 204, 7342, 'Exterminating and disinfecting services', 'Business services');
    MerchantCategoryCodeDescription_MCC7349_instance = new MerchantCategoryCodeDescription('MCC7349', 205, 7349, 'Cleaning, maintenance and janitorial services', 'Business services');
    MerchantCategoryCodeDescription_MCC7361_instance = new MerchantCategoryCodeDescription('MCC7361', 206, 7361, 'Employment agencies and temporary help services', 'Business services');
    MerchantCategoryCodeDescription_MCC7372_instance = new MerchantCategoryCodeDescription('MCC7372', 207, 7372, 'Computer programming, data processing and integrated systems design services', 'Business services');
    MerchantCategoryCodeDescription_MCC7375_instance = new MerchantCategoryCodeDescription('MCC7375', 208, 7375, 'Information retrieval services', 'Business services');
    MerchantCategoryCodeDescription_MCC7379_instance = new MerchantCategoryCodeDescription('MCC7379', 209, 7379, 'Computer maintenance and repair services \u2014 not elsewhere classified', 'Business services');
    MerchantCategoryCodeDescription_MCC7392_instance = new MerchantCategoryCodeDescription('MCC7392', 210, 7392, 'Management, consulting and public relations services', 'Business services');
    MerchantCategoryCodeDescription_MCC7393_instance = new MerchantCategoryCodeDescription('MCC7393', 211, 7393, 'Detective agencies, protective agencies and security services, including armoured cars and guard dogs', 'Business services');
    MerchantCategoryCodeDescription_MCC7394_instance = new MerchantCategoryCodeDescription('MCC7394', 212, 7394, 'Equipment, tool, furniture and appliance rentals and leasing', 'Business services');
    MerchantCategoryCodeDescription_MCC7395_instance = new MerchantCategoryCodeDescription('MCC7395', 213, 7395, 'Photofinishing laboratories and photo developing', 'Business services');
    MerchantCategoryCodeDescription_MCC7399_instance = new MerchantCategoryCodeDescription('MCC7399', 214, 7399, 'Business services \u2014 not elsewhere classified', 'Business services');
    MerchantCategoryCodeDescription_MCC7512_instance = new MerchantCategoryCodeDescription('MCC7512', 215, 7512, 'Automobile rentals', 'Business services');
    MerchantCategoryCodeDescription_MCC7513_instance = new MerchantCategoryCodeDescription('MCC7513', 216, 7513, 'Truck and utility trailer rentals', 'Business services');
    MerchantCategoryCodeDescription_MCC7519_instance = new MerchantCategoryCodeDescription('MCC7519', 217, 7519, 'Motor home and recreational vehicle rentals', 'Business services');
    MerchantCategoryCodeDescription_MCC7523_instance = new MerchantCategoryCodeDescription('MCC7523', 218, 7523, 'Parking lots and garages', 'Business services');
    MerchantCategoryCodeDescription_MCC7531_instance = new MerchantCategoryCodeDescription('MCC7531', 219, 7531, 'Automotive body repair shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7534_instance = new MerchantCategoryCodeDescription('MCC7534', 220, 7534, 'Tyre retreading and repair shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7535_instance = new MerchantCategoryCodeDescription('MCC7535', 221, 7535, 'Automotive paint shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7538_instance = new MerchantCategoryCodeDescription('MCC7538', 222, 7538, 'Automotive service shops (non-dealer)', 'Repair services');
    MerchantCategoryCodeDescription_MCC7542_instance = new MerchantCategoryCodeDescription('MCC7542', 223, 7542, 'Car washes', 'Repair services');
    MerchantCategoryCodeDescription_MCC7549_instance = new MerchantCategoryCodeDescription('MCC7549', 224, 7549, 'Towing services', 'Repair services');
    MerchantCategoryCodeDescription_MCC7622_instance = new MerchantCategoryCodeDescription('MCC7622', 225, 7622, 'Electronics repair shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7623_instance = new MerchantCategoryCodeDescription('MCC7623', 226, 7623, 'Air conditioning and refrigeration repair shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7629_instance = new MerchantCategoryCodeDescription('MCC7629', 227, 7629, 'Electrical and small appliance repair shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7631_instance = new MerchantCategoryCodeDescription('MCC7631', 228, 7631, 'Watch, clock and jewellery repair shops', 'Repair services');
    MerchantCategoryCodeDescription_MCC7641_instance = new MerchantCategoryCodeDescription('MCC7641', 229, 7641, 'Furniture reupholstery, repair and refinishing', 'Repair services');
    MerchantCategoryCodeDescription_MCC7692_instance = new MerchantCategoryCodeDescription('MCC7692', 230, 7692, 'Welding services', 'Repair services');
    MerchantCategoryCodeDescription_MCC7699_instance = new MerchantCategoryCodeDescription('MCC7699', 231, 7699, 'Miscellaneous repair shops and related services', 'Repair services');
    MerchantCategoryCodeDescription_MCC7800_instance = new MerchantCategoryCodeDescription('MCC7800', 232, 7800, 'Government Owned Lotteries', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7801_instance = new MerchantCategoryCodeDescription('MCC7801', 233, 7801, 'Government Licensed Online Casinos (On-Line Gambling)', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7802_instance = new MerchantCategoryCodeDescription('MCC7802', 234, 7802, 'Government-licensed Horse/Dog Racing', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7829_instance = new MerchantCategoryCodeDescription('MCC7829', 235, 7829, 'Motion picture and video tape production and distribution', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7832_instance = new MerchantCategoryCodeDescription('MCC7832', 236, 7832, 'Motion picture theatres', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7841_instance = new MerchantCategoryCodeDescription('MCC7841', 237, 7841, 'Video tape rentals', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7911_instance = new MerchantCategoryCodeDescription('MCC7911', 238, 7911, 'Dance halls, studios and schools', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7922_instance = new MerchantCategoryCodeDescription('MCC7922', 239, 7922, 'Theatrical producers (except motion pictures) and ticket agencies', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7929_instance = new MerchantCategoryCodeDescription('MCC7929', 240, 7929, 'Bands, orchestras and miscellaneous entertainers \u2014 not elsewhere classified', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7932_instance = new MerchantCategoryCodeDescription('MCC7932', 241, 7932, 'Billiard and pool establishments', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7933_instance = new MerchantCategoryCodeDescription('MCC7933', 242, 7933, 'Bowling alleys', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7941_instance = new MerchantCategoryCodeDescription('MCC7941', 243, 7941, 'Commercial sports, professional sports clubs, athletic fields and sports promoters', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7991_instance = new MerchantCategoryCodeDescription('MCC7991', 244, 7991, 'Tourist attractions and exhibits', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7992_instance = new MerchantCategoryCodeDescription('MCC7992', 245, 7992, 'Public golf courses', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7993_instance = new MerchantCategoryCodeDescription('MCC7993', 246, 7993, 'Video amusement game supplies', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7994_instance = new MerchantCategoryCodeDescription('MCC7994', 247, 7994, 'Video game arcades and establishments', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7995_instance = new MerchantCategoryCodeDescription('MCC7995', 248, 7995, 'Betting, including lottery tickets, casino gaming chips, off-track betting and wagers at race tracks.', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7996_instance = new MerchantCategoryCodeDescription('MCC7996', 249, 7996, 'Amusement parks, circuses, carnivals and fortune tellers', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7997_instance = new MerchantCategoryCodeDescription('MCC7997', 250, 7997, 'Membership clubs (sports, recreation, athletic), country clubs and private golf courses', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7998_instance = new MerchantCategoryCodeDescription('MCC7998', 251, 7998, 'Aquariums, seaquariums and dolphinariums', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC7999_instance = new MerchantCategoryCodeDescription('MCC7999', 252, 7999, 'Recreation services \u2014 not elsewhere classified', 'Amusement and entertainment');
    MerchantCategoryCodeDescription_MCC8011_instance = new MerchantCategoryCodeDescription('MCC8011', 253, 8011, 'Doctors and physicians \u2014 not elsewhere classified', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8021_instance = new MerchantCategoryCodeDescription('MCC8021', 254, 8021, 'Dentists and orthodontists', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8031_instance = new MerchantCategoryCodeDescription('MCC8031', 255, 8031, 'Osteopaths', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8041_instance = new MerchantCategoryCodeDescription('MCC8041', 256, 8041, 'Chiropractors', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8042_instance = new MerchantCategoryCodeDescription('MCC8042', 257, 8042, 'Optometrists and ophthalmologists', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8043_instance = new MerchantCategoryCodeDescription('MCC8043', 258, 8043, 'Opticians, optical goods and eyeglasses', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8049_instance = new MerchantCategoryCodeDescription('MCC8049', 259, 8049, 'Podiatrists and chiropodists', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8050_instance = new MerchantCategoryCodeDescription('MCC8050', 260, 8050, 'Nursing and personal care facilities', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8062_instance = new MerchantCategoryCodeDescription('MCC8062', 261, 8062, 'Hospitals', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8071_instance = new MerchantCategoryCodeDescription('MCC8071', 262, 8071, 'Medical and dental laboratories', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8099_instance = new MerchantCategoryCodeDescription('MCC8099', 263, 8099, 'Medical services and health practitioners \u2014 not elsewhere classified', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8111_instance = new MerchantCategoryCodeDescription('MCC8111', 264, 8111, 'Legal services and attorneys', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8211_instance = new MerchantCategoryCodeDescription('MCC8211', 265, 8211, 'Elementary and secondary schools', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8220_instance = new MerchantCategoryCodeDescription('MCC8220', 266, 8220, 'Colleges, universities, professional schools and junior colleges', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8241_instance = new MerchantCategoryCodeDescription('MCC8241', 267, 8241, 'Correspondence schools', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8244_instance = new MerchantCategoryCodeDescription('MCC8244', 268, 8244, 'Business and secretarial schools', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8249_instance = new MerchantCategoryCodeDescription('MCC8249', 269, 8249, 'Trade and vocational schools', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8299_instance = new MerchantCategoryCodeDescription('MCC8299', 270, 8299, 'Schools and educational services \u2014 not elsewhere classified', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8351_instance = new MerchantCategoryCodeDescription('MCC8351', 271, 8351, 'Child care services', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8398_instance = new MerchantCategoryCodeDescription('MCC8398', 272, 8398, 'Charitable and social service organizations', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8641_instance = new MerchantCategoryCodeDescription('MCC8641', 273, 8641, 'Civic, social and fraternal associations', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8651_instance = new MerchantCategoryCodeDescription('MCC8651', 274, 8651, 'Political organizations', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8661_instance = new MerchantCategoryCodeDescription('MCC8661', 275, 8661, 'Religious organizations', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8675_instance = new MerchantCategoryCodeDescription('MCC8675', 276, 8675, 'Automobile associations', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8699_instance = new MerchantCategoryCodeDescription('MCC8699', 277, 8699, 'Membership organizations \u2014 not elsewhere classified', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8734_instance = new MerchantCategoryCodeDescription('MCC8734', 278, 8734, 'Testing laboratories (non-medical)', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8911_instance = new MerchantCategoryCodeDescription('MCC8911', 279, 8911, 'Architectural, engineering and surveying services', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8931_instance = new MerchantCategoryCodeDescription('MCC8931', 280, 8931, 'Accounting, auditing and bookkeeping services', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC8999_instance = new MerchantCategoryCodeDescription('MCC8999', 281, 8999, 'Professional services \u2014 not elsewhere classified', 'Professional services and membership organizations');
    MerchantCategoryCodeDescription_MCC9211_instance = new MerchantCategoryCodeDescription('MCC9211', 282, 9211, 'Court costs, including alimony and child support', 'Government services');
    MerchantCategoryCodeDescription_MCC9222_instance = new MerchantCategoryCodeDescription('MCC9222', 283, 9222, 'Fines', 'Government services');
    MerchantCategoryCodeDescription_MCC9223_instance = new MerchantCategoryCodeDescription('MCC9223', 284, 9223, 'Bail and bond payments', 'Government services');
    MerchantCategoryCodeDescription_MCC9311_instance = new MerchantCategoryCodeDescription('MCC9311', 285, 9311, 'Tax payments', 'Government services');
    MerchantCategoryCodeDescription_MCC9399_instance = new MerchantCategoryCodeDescription('MCC9399', 286, 9399, 'Government services \u2014 not elsewhere classified', 'Government services');
    MerchantCategoryCodeDescription_MCC9402_instance = new MerchantCategoryCodeDescription('MCC9402', 287, 9402, 'Postal services \u2014 government only', 'Government services');
  }
  var $ENTRIES_4;
  function MerchantCategoryCodeDescription(name, ordinal, code, description, category) {
    Enum.call(this, name, ordinal);
    this.nh_1 = code;
    this.oh_1 = description;
    this.ph_1 = category;
  }
  function MerchantCategoryCodeDescription_MCC0742_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC0742_instance;
  }
  function MerchantCategoryCodeDescription_MCC0743_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC0743_instance;
  }
  function MerchantCategoryCodeDescription_MCC0744_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC0744_instance;
  }
  function MerchantCategoryCodeDescription_MCC0763_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC0763_instance;
  }
  function MerchantCategoryCodeDescription_MCC0780_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC0780_instance;
  }
  function MerchantCategoryCodeDescription_MCC1520_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1520_instance;
  }
  function MerchantCategoryCodeDescription_MCC1711_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1711_instance;
  }
  function MerchantCategoryCodeDescription_MCC1731_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1731_instance;
  }
  function MerchantCategoryCodeDescription_MCC1740_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1740_instance;
  }
  function MerchantCategoryCodeDescription_MCC1750_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1750_instance;
  }
  function MerchantCategoryCodeDescription_MCC1761_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1761_instance;
  }
  function MerchantCategoryCodeDescription_MCC1771_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1771_instance;
  }
  function MerchantCategoryCodeDescription_MCC1799_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC1799_instance;
  }
  function MerchantCategoryCodeDescription_MCC2741_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC2741_instance;
  }
  function MerchantCategoryCodeDescription_MCC2791_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC2791_instance;
  }
  function MerchantCategoryCodeDescription_MCC2842_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC2842_instance;
  }
  function MerchantCategoryCodeDescription_MCC4011_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4011_instance;
  }
  function MerchantCategoryCodeDescription_MCC4111_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4111_instance;
  }
  function MerchantCategoryCodeDescription_MCC4112_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4112_instance;
  }
  function MerchantCategoryCodeDescription_MCC4119_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4119_instance;
  }
  function MerchantCategoryCodeDescription_MCC4121_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4121_instance;
  }
  function MerchantCategoryCodeDescription_MCC4131_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4131_instance;
  }
  function MerchantCategoryCodeDescription_MCC4214_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4214_instance;
  }
  function MerchantCategoryCodeDescription_MCC4215_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4215_instance;
  }
  function MerchantCategoryCodeDescription_MCC4225_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4225_instance;
  }
  function MerchantCategoryCodeDescription_MCC4411_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4411_instance;
  }
  function MerchantCategoryCodeDescription_MCC4457_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4457_instance;
  }
  function MerchantCategoryCodeDescription_MCC4468_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4468_instance;
  }
  function MerchantCategoryCodeDescription_MCC4511_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4511_instance;
  }
  function MerchantCategoryCodeDescription_MCC4582_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4582_instance;
  }
  function MerchantCategoryCodeDescription_MCC4722_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4722_instance;
  }
  function MerchantCategoryCodeDescription_MCC4784_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4784_instance;
  }
  function MerchantCategoryCodeDescription_MCC4789_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4789_instance;
  }
  function MerchantCategoryCodeDescription_MCC4812_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4812_instance;
  }
  function MerchantCategoryCodeDescription_MCC4814_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4814_instance;
  }
  function MerchantCategoryCodeDescription_MCC4815_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4815_instance;
  }
  function MerchantCategoryCodeDescription_MCC4816_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4816_instance;
  }
  function MerchantCategoryCodeDescription_MCC4821_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4821_instance;
  }
  function MerchantCategoryCodeDescription_MCC4829_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4829_instance;
  }
  function MerchantCategoryCodeDescription_MCC4899_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4899_instance;
  }
  function MerchantCategoryCodeDescription_MCC4900_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC4900_instance;
  }
  function MerchantCategoryCodeDescription_MCC5013_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5013_instance;
  }
  function MerchantCategoryCodeDescription_MCC5021_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5021_instance;
  }
  function MerchantCategoryCodeDescription_MCC5039_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5039_instance;
  }
  function MerchantCategoryCodeDescription_MCC5044_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5044_instance;
  }
  function MerchantCategoryCodeDescription_MCC5045_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5045_instance;
  }
  function MerchantCategoryCodeDescription_MCC5046_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5046_instance;
  }
  function MerchantCategoryCodeDescription_MCC5047_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5047_instance;
  }
  function MerchantCategoryCodeDescription_MCC5051_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5051_instance;
  }
  function MerchantCategoryCodeDescription_MCC5065_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5065_instance;
  }
  function MerchantCategoryCodeDescription_MCC5072_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5072_instance;
  }
  function MerchantCategoryCodeDescription_MCC5074_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5074_instance;
  }
  function MerchantCategoryCodeDescription_MCC5085_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5085_instance;
  }
  function MerchantCategoryCodeDescription_MCC5094_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5094_instance;
  }
  function MerchantCategoryCodeDescription_MCC5099_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5099_instance;
  }
  function MerchantCategoryCodeDescription_MCC5111_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5111_instance;
  }
  function MerchantCategoryCodeDescription_MCC5122_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5122_instance;
  }
  function MerchantCategoryCodeDescription_MCC5131_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5131_instance;
  }
  function MerchantCategoryCodeDescription_MCC5137_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5137_instance;
  }
  function MerchantCategoryCodeDescription_MCC5139_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5139_instance;
  }
  function MerchantCategoryCodeDescription_MCC5169_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5169_instance;
  }
  function MerchantCategoryCodeDescription_MCC5172_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5172_instance;
  }
  function MerchantCategoryCodeDescription_MCC5192_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5192_instance;
  }
  function MerchantCategoryCodeDescription_MCC5193_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5193_instance;
  }
  function MerchantCategoryCodeDescription_MCC5198_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5198_instance;
  }
  function MerchantCategoryCodeDescription_MCC5199_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5199_instance;
  }
  function MerchantCategoryCodeDescription_MCC5200_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5200_instance;
  }
  function MerchantCategoryCodeDescription_MCC5211_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5211_instance;
  }
  function MerchantCategoryCodeDescription_MCC5231_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5231_instance;
  }
  function MerchantCategoryCodeDescription_MCC5251_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5251_instance;
  }
  function MerchantCategoryCodeDescription_MCC5261_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5261_instance;
  }
  function MerchantCategoryCodeDescription_MCC5271_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5271_instance;
  }
  function MerchantCategoryCodeDescription_MCC5300_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5300_instance;
  }
  function MerchantCategoryCodeDescription_MCC5309_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5309_instance;
  }
  function MerchantCategoryCodeDescription_MCC5310_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5310_instance;
  }
  function MerchantCategoryCodeDescription_MCC5311_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5311_instance;
  }
  function MerchantCategoryCodeDescription_MCC5331_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5331_instance;
  }
  function MerchantCategoryCodeDescription_MCC5399_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5399_instance;
  }
  function MerchantCategoryCodeDescription_MCC5411_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5411_instance;
  }
  function MerchantCategoryCodeDescription_MCC5422_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5422_instance;
  }
  function MerchantCategoryCodeDescription_MCC5441_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5441_instance;
  }
  function MerchantCategoryCodeDescription_MCC5451_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5451_instance;
  }
  function MerchantCategoryCodeDescription_MCC5462_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5462_instance;
  }
  function MerchantCategoryCodeDescription_MCC5499_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5499_instance;
  }
  function MerchantCategoryCodeDescription_MCC5511_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5511_instance;
  }
  function MerchantCategoryCodeDescription_MCC5521_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5521_instance;
  }
  function MerchantCategoryCodeDescription_MCC5531_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5531_instance;
  }
  function MerchantCategoryCodeDescription_MCC5532_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5532_instance;
  }
  function MerchantCategoryCodeDescription_MCC5533_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5533_instance;
  }
  function MerchantCategoryCodeDescription_MCC5541_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5541_instance;
  }
  function MerchantCategoryCodeDescription_MCC5542_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5542_instance;
  }
  function MerchantCategoryCodeDescription_MCC5551_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5551_instance;
  }
  function MerchantCategoryCodeDescription_MCC5561_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5561_instance;
  }
  function MerchantCategoryCodeDescription_MCC5571_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5571_instance;
  }
  function MerchantCategoryCodeDescription_MCC5592_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5592_instance;
  }
  function MerchantCategoryCodeDescription_MCC5598_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5598_instance;
  }
  function MerchantCategoryCodeDescription_MCC5599_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5599_instance;
  }
  function MerchantCategoryCodeDescription_MCC5611_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5611_instance;
  }
  function MerchantCategoryCodeDescription_MCC5621_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5621_instance;
  }
  function MerchantCategoryCodeDescription_MCC5631_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5631_instance;
  }
  function MerchantCategoryCodeDescription_MCC5641_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5641_instance;
  }
  function MerchantCategoryCodeDescription_MCC5651_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5651_instance;
  }
  function MerchantCategoryCodeDescription_MCC5655_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5655_instance;
  }
  function MerchantCategoryCodeDescription_MCC5661_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5661_instance;
  }
  function MerchantCategoryCodeDescription_MCC5681_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5681_instance;
  }
  function MerchantCategoryCodeDescription_MCC5691_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5691_instance;
  }
  function MerchantCategoryCodeDescription_MCC5697_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5697_instance;
  }
  function MerchantCategoryCodeDescription_MCC5698_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5698_instance;
  }
  function MerchantCategoryCodeDescription_MCC5699_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5699_instance;
  }
  function MerchantCategoryCodeDescription_MCC5712_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5712_instance;
  }
  function MerchantCategoryCodeDescription_MCC5713_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5713_instance;
  }
  function MerchantCategoryCodeDescription_MCC5714_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5714_instance;
  }
  function MerchantCategoryCodeDescription_MCC5715_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5715_instance;
  }
  function MerchantCategoryCodeDescription_MCC5718_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5718_instance;
  }
  function MerchantCategoryCodeDescription_MCC5719_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5719_instance;
  }
  function MerchantCategoryCodeDescription_MCC5722_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5722_instance;
  }
  function MerchantCategoryCodeDescription_MCC5732_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5732_instance;
  }
  function MerchantCategoryCodeDescription_MCC5733_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5733_instance;
  }
  function MerchantCategoryCodeDescription_MCC5734_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5734_instance;
  }
  function MerchantCategoryCodeDescription_MCC5735_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5735_instance;
  }
  function MerchantCategoryCodeDescription_MCC5811_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5811_instance;
  }
  function MerchantCategoryCodeDescription_MCC5812_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5812_instance;
  }
  function MerchantCategoryCodeDescription_MCC5813_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5813_instance;
  }
  function MerchantCategoryCodeDescription_MCC5814_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5814_instance;
  }
  function MerchantCategoryCodeDescription_MCC5815_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5815_instance;
  }
  function MerchantCategoryCodeDescription_MCC5816_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5816_instance;
  }
  function MerchantCategoryCodeDescription_MCC5817_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5817_instance;
  }
  function MerchantCategoryCodeDescription_MCC5818_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5818_instance;
  }
  function MerchantCategoryCodeDescription_MCC5912_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5912_instance;
  }
  function MerchantCategoryCodeDescription_MCC5921_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5921_instance;
  }
  function MerchantCategoryCodeDescription_MCC5931_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5931_instance;
  }
  function MerchantCategoryCodeDescription_MCC5932_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5932_instance;
  }
  function MerchantCategoryCodeDescription_MCC5933_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5933_instance;
  }
  function MerchantCategoryCodeDescription_MCC5935_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5935_instance;
  }
  function MerchantCategoryCodeDescription_MCC5937_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5937_instance;
  }
  function MerchantCategoryCodeDescription_MCC5940_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5940_instance;
  }
  function MerchantCategoryCodeDescription_MCC5941_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5941_instance;
  }
  function MerchantCategoryCodeDescription_MCC5942_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5942_instance;
  }
  function MerchantCategoryCodeDescription_MCC5943_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5943_instance;
  }
  function MerchantCategoryCodeDescription_MCC5944_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5944_instance;
  }
  function MerchantCategoryCodeDescription_MCC5945_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5945_instance;
  }
  function MerchantCategoryCodeDescription_MCC5946_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5946_instance;
  }
  function MerchantCategoryCodeDescription_MCC5947_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5947_instance;
  }
  function MerchantCategoryCodeDescription_MCC5948_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5948_instance;
  }
  function MerchantCategoryCodeDescription_MCC5949_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5949_instance;
  }
  function MerchantCategoryCodeDescription_MCC5950_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5950_instance;
  }
  function MerchantCategoryCodeDescription_MCC5960_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5960_instance;
  }
  function MerchantCategoryCodeDescription_MCC5962_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5962_instance;
  }
  function MerchantCategoryCodeDescription_MCC5963_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5963_instance;
  }
  function MerchantCategoryCodeDescription_MCC5964_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5964_instance;
  }
  function MerchantCategoryCodeDescription_MCC5965_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5965_instance;
  }
  function MerchantCategoryCodeDescription_MCC5966_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5966_instance;
  }
  function MerchantCategoryCodeDescription_MCC5967_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5967_instance;
  }
  function MerchantCategoryCodeDescription_MCC5968_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5968_instance;
  }
  function MerchantCategoryCodeDescription_MCC5969_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5969_instance;
  }
  function MerchantCategoryCodeDescription_MCC5970_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5970_instance;
  }
  function MerchantCategoryCodeDescription_MCC5971_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5971_instance;
  }
  function MerchantCategoryCodeDescription_MCC5972_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5972_instance;
  }
  function MerchantCategoryCodeDescription_MCC5973_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5973_instance;
  }
  function MerchantCategoryCodeDescription_MCC5975_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5975_instance;
  }
  function MerchantCategoryCodeDescription_MCC5976_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5976_instance;
  }
  function MerchantCategoryCodeDescription_MCC5977_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5977_instance;
  }
  function MerchantCategoryCodeDescription_MCC5978_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5978_instance;
  }
  function MerchantCategoryCodeDescription_MCC5983_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5983_instance;
  }
  function MerchantCategoryCodeDescription_MCC5992_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5992_instance;
  }
  function MerchantCategoryCodeDescription_MCC5993_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5993_instance;
  }
  function MerchantCategoryCodeDescription_MCC5994_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5994_instance;
  }
  function MerchantCategoryCodeDescription_MCC5995_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5995_instance;
  }
  function MerchantCategoryCodeDescription_MCC5996_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5996_instance;
  }
  function MerchantCategoryCodeDescription_MCC5997_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5997_instance;
  }
  function MerchantCategoryCodeDescription_MCC5998_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5998_instance;
  }
  function MerchantCategoryCodeDescription_MCC5999_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC5999_instance;
  }
  function MerchantCategoryCodeDescription_MCC6010_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC6010_instance;
  }
  function MerchantCategoryCodeDescription_MCC6011_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC6011_instance;
  }
  function MerchantCategoryCodeDescription_MCC6012_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC6012_instance;
  }
  function MerchantCategoryCodeDescription_MCC6051_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC6051_instance;
  }
  function MerchantCategoryCodeDescription_MCC6211_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC6211_instance;
  }
  function MerchantCategoryCodeDescription_MCC6300_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC6300_instance;
  }
  function MerchantCategoryCodeDescription_MCC7011_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7011_instance;
  }
  function MerchantCategoryCodeDescription_MCC7012_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7012_instance;
  }
  function MerchantCategoryCodeDescription_MCC7032_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7032_instance;
  }
  function MerchantCategoryCodeDescription_MCC7033_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7033_instance;
  }
  function MerchantCategoryCodeDescription_MCC7210_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7210_instance;
  }
  function MerchantCategoryCodeDescription_MCC7211_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7211_instance;
  }
  function MerchantCategoryCodeDescription_MCC7216_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7216_instance;
  }
  function MerchantCategoryCodeDescription_MCC7217_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7217_instance;
  }
  function MerchantCategoryCodeDescription_MCC7221_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7221_instance;
  }
  function MerchantCategoryCodeDescription_MCC7230_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7230_instance;
  }
  function MerchantCategoryCodeDescription_MCC7251_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7251_instance;
  }
  function MerchantCategoryCodeDescription_MCC7261_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7261_instance;
  }
  function MerchantCategoryCodeDescription_MCC7273_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7273_instance;
  }
  function MerchantCategoryCodeDescription_MCC7276_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7276_instance;
  }
  function MerchantCategoryCodeDescription_MCC7277_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7277_instance;
  }
  function MerchantCategoryCodeDescription_MCC7278_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7278_instance;
  }
  function MerchantCategoryCodeDescription_MCC7296_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7296_instance;
  }
  function MerchantCategoryCodeDescription_MCC7297_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7297_instance;
  }
  function MerchantCategoryCodeDescription_MCC7298_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7298_instance;
  }
  function MerchantCategoryCodeDescription_MCC7299_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7299_instance;
  }
  function MerchantCategoryCodeDescription_MCC7311_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7311_instance;
  }
  function MerchantCategoryCodeDescription_MCC7321_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7321_instance;
  }
  function MerchantCategoryCodeDescription_MCC7322_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7322_instance;
  }
  function MerchantCategoryCodeDescription_MCC7333_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7333_instance;
  }
  function MerchantCategoryCodeDescription_MCC7338_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7338_instance;
  }
  function MerchantCategoryCodeDescription_MCC7339_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7339_instance;
  }
  function MerchantCategoryCodeDescription_MCC7342_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7342_instance;
  }
  function MerchantCategoryCodeDescription_MCC7349_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7349_instance;
  }
  function MerchantCategoryCodeDescription_MCC7361_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7361_instance;
  }
  function MerchantCategoryCodeDescription_MCC7372_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7372_instance;
  }
  function MerchantCategoryCodeDescription_MCC7375_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7375_instance;
  }
  function MerchantCategoryCodeDescription_MCC7379_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7379_instance;
  }
  function MerchantCategoryCodeDescription_MCC7392_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7392_instance;
  }
  function MerchantCategoryCodeDescription_MCC7393_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7393_instance;
  }
  function MerchantCategoryCodeDescription_MCC7394_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7394_instance;
  }
  function MerchantCategoryCodeDescription_MCC7395_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7395_instance;
  }
  function MerchantCategoryCodeDescription_MCC7399_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7399_instance;
  }
  function MerchantCategoryCodeDescription_MCC7512_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7512_instance;
  }
  function MerchantCategoryCodeDescription_MCC7513_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7513_instance;
  }
  function MerchantCategoryCodeDescription_MCC7519_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7519_instance;
  }
  function MerchantCategoryCodeDescription_MCC7523_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7523_instance;
  }
  function MerchantCategoryCodeDescription_MCC7531_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7531_instance;
  }
  function MerchantCategoryCodeDescription_MCC7534_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7534_instance;
  }
  function MerchantCategoryCodeDescription_MCC7535_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7535_instance;
  }
  function MerchantCategoryCodeDescription_MCC7538_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7538_instance;
  }
  function MerchantCategoryCodeDescription_MCC7542_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7542_instance;
  }
  function MerchantCategoryCodeDescription_MCC7549_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7549_instance;
  }
  function MerchantCategoryCodeDescription_MCC7622_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7622_instance;
  }
  function MerchantCategoryCodeDescription_MCC7623_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7623_instance;
  }
  function MerchantCategoryCodeDescription_MCC7629_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7629_instance;
  }
  function MerchantCategoryCodeDescription_MCC7631_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7631_instance;
  }
  function MerchantCategoryCodeDescription_MCC7641_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7641_instance;
  }
  function MerchantCategoryCodeDescription_MCC7692_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7692_instance;
  }
  function MerchantCategoryCodeDescription_MCC7699_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7699_instance;
  }
  function MerchantCategoryCodeDescription_MCC7800_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7800_instance;
  }
  function MerchantCategoryCodeDescription_MCC7801_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7801_instance;
  }
  function MerchantCategoryCodeDescription_MCC7802_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7802_instance;
  }
  function MerchantCategoryCodeDescription_MCC7829_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7829_instance;
  }
  function MerchantCategoryCodeDescription_MCC7832_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7832_instance;
  }
  function MerchantCategoryCodeDescription_MCC7841_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7841_instance;
  }
  function MerchantCategoryCodeDescription_MCC7911_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7911_instance;
  }
  function MerchantCategoryCodeDescription_MCC7922_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7922_instance;
  }
  function MerchantCategoryCodeDescription_MCC7929_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7929_instance;
  }
  function MerchantCategoryCodeDescription_MCC7932_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7932_instance;
  }
  function MerchantCategoryCodeDescription_MCC7933_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7933_instance;
  }
  function MerchantCategoryCodeDescription_MCC7941_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7941_instance;
  }
  function MerchantCategoryCodeDescription_MCC7991_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7991_instance;
  }
  function MerchantCategoryCodeDescription_MCC7992_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7992_instance;
  }
  function MerchantCategoryCodeDescription_MCC7993_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7993_instance;
  }
  function MerchantCategoryCodeDescription_MCC7994_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7994_instance;
  }
  function MerchantCategoryCodeDescription_MCC7995_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7995_instance;
  }
  function MerchantCategoryCodeDescription_MCC7996_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7996_instance;
  }
  function MerchantCategoryCodeDescription_MCC7997_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7997_instance;
  }
  function MerchantCategoryCodeDescription_MCC7998_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7998_instance;
  }
  function MerchantCategoryCodeDescription_MCC7999_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC7999_instance;
  }
  function MerchantCategoryCodeDescription_MCC8011_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8011_instance;
  }
  function MerchantCategoryCodeDescription_MCC8021_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8021_instance;
  }
  function MerchantCategoryCodeDescription_MCC8031_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8031_instance;
  }
  function MerchantCategoryCodeDescription_MCC8041_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8041_instance;
  }
  function MerchantCategoryCodeDescription_MCC8042_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8042_instance;
  }
  function MerchantCategoryCodeDescription_MCC8043_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8043_instance;
  }
  function MerchantCategoryCodeDescription_MCC8049_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8049_instance;
  }
  function MerchantCategoryCodeDescription_MCC8050_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8050_instance;
  }
  function MerchantCategoryCodeDescription_MCC8062_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8062_instance;
  }
  function MerchantCategoryCodeDescription_MCC8071_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8071_instance;
  }
  function MerchantCategoryCodeDescription_MCC8099_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8099_instance;
  }
  function MerchantCategoryCodeDescription_MCC8111_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8111_instance;
  }
  function MerchantCategoryCodeDescription_MCC8211_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8211_instance;
  }
  function MerchantCategoryCodeDescription_MCC8220_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8220_instance;
  }
  function MerchantCategoryCodeDescription_MCC8241_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8241_instance;
  }
  function MerchantCategoryCodeDescription_MCC8244_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8244_instance;
  }
  function MerchantCategoryCodeDescription_MCC8249_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8249_instance;
  }
  function MerchantCategoryCodeDescription_MCC8299_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8299_instance;
  }
  function MerchantCategoryCodeDescription_MCC8351_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8351_instance;
  }
  function MerchantCategoryCodeDescription_MCC8398_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8398_instance;
  }
  function MerchantCategoryCodeDescription_MCC8641_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8641_instance;
  }
  function MerchantCategoryCodeDescription_MCC8651_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8651_instance;
  }
  function MerchantCategoryCodeDescription_MCC8661_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8661_instance;
  }
  function MerchantCategoryCodeDescription_MCC8675_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8675_instance;
  }
  function MerchantCategoryCodeDescription_MCC8699_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8699_instance;
  }
  function MerchantCategoryCodeDescription_MCC8734_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8734_instance;
  }
  function MerchantCategoryCodeDescription_MCC8911_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8911_instance;
  }
  function MerchantCategoryCodeDescription_MCC8931_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8931_instance;
  }
  function MerchantCategoryCodeDescription_MCC8999_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC8999_instance;
  }
  function MerchantCategoryCodeDescription_MCC9211_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC9211_instance;
  }
  function MerchantCategoryCodeDescription_MCC9222_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC9222_instance;
  }
  function MerchantCategoryCodeDescription_MCC9223_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC9223_instance;
  }
  function MerchantCategoryCodeDescription_MCC9311_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC9311_instance;
  }
  function MerchantCategoryCodeDescription_MCC9399_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC9399_instance;
  }
  function MerchantCategoryCodeDescription_MCC9402_getInstance() {
    MerchantCategoryCodeDescription_initEntries();
    return MerchantCategoryCodeDescription_MCC9402_instance;
  }
  function emvParseTlv(hex) {
    var tmp;
    try {
      var bytes = hexToByteArray(hex);
      var tlvList = Companion_instance_0.pa(bytes, listOf_0(EmvSpecification_instance));
      tmp = tlvListToJson(tlvList);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e.message;
        tmp_0 = '{"error":"' + escapeJson(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + '"}';
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function emvExplainTag(tagHex, valueHex) {
    var tmp;
    try {
      var tagBytes = hexToByteArray(tagHex);
      var tlvTag = Companion_instance_2.qd(tagBytes);
      var tmp_0;
      if (!EmvSpecification_instance.ua(tlvTag)) {
        tmp_0 = '{"error":"Unknown tag: ' + tagHex + '"}';
      } else {
        var context = EmvSpecification_instance.va(tlvTag);
        var tmp0_elvis_lhs = context.vd_1;
        var name = escapeJson(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var desc = escapeJson(context.wd_1);
        var explanation = buildExplanation(tlvTag, hexToByteArray(valueHex));
        var sb = StringBuilder_init_$Create$_0();
        sb.l5('{');
        sb.l5('"tag":"' + tagHex + '",');
        sb.l5('"name":"' + name + '",');
        sb.l5('"description":"' + desc + '"');
        if (!(explanation == null)) {
          sb.l5(',"explanation":');
          sb.l5('"' + escapeJson(explanation) + '"');
        }
        sb.l5('}');
        tmp_0 = sb.toString();
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        var tmp1_elvis_lhs = e.message;
        tmp_1 = '{"error":"' + escapeJson(tmp1_elvis_lhs == null ? 'unknown' : tmp1_elvis_lhs) + '"}';
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function emvVersion() {
    return '0.0.3';
  }
  function escapeJson(s) {
    return replace(replace(replace(replace(replace(s, '\\', '\\\\'), '"', '\\"'), '\n', '\\n'), '\r', '\\r'), '\t', '\\t');
  }
  function tlvListToJson(tlvList) {
    var sb = StringBuilder_init_$Create$_0();
    sb.l5('[');
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = tlvList.sa_1.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.github.rafaelrabeloit.bertlv.ffi.tlvListToJson.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (checkIndexOverflow(tmp1) > 0) {
        sb.l5(',');
      }
      sb.l5(tlvToJson(item));
    }
    sb.l5(']');
    return sb.toString();
  }
  function tlvToJson(tlv) {
    var sb = StringBuilder_init_$Create$_0();
    var tagHex = toHexString(tlv.sc_1.kc_1);
    var valueHex = toHexString(tlv.uc_1.zc_1);
    var context = tlv.sc_1.qc_1(tlv.sc_1);
    var isConstructed = tlv.sc_1.nc_1.equals(Construction_CONSTRUCTED_getInstance());
    // Inline function 'kotlin.text.trim' call
    var this_0 = tlv.uc_1.zd('\n').toString();
    var explanation = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    sb.l5('{');
    sb.l5('"tag":"' + tagHex + '",');
    var tmp0_elvis_lhs = context.vd_1;
    sb.l5('"tagName":"' + escapeJson(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + '",');
    sb.l5('"description":"' + escapeJson(context.wd_1) + '",');
    sb.l5('"length":' + tlv.a() + ',');
    sb.l5('"value":"' + valueHex + '",');
    sb.l5('"isConstructed":' + isConstructed + ',');
    sb.l5('"explanation":"' + escapeJson(explanation) + '"');
    if (isConstructed) {
      var childList = tlv.d1();
      if (childList instanceof TLVList) {
        sb.l5(',"children":');
        sb.l5(tlvListToJson(childList));
      }
    }
    sb.l5('}');
    return sb.toString();
  }
  function buildExplanation(tag, valueBytes) {
    var tmp;
    try {
      var length = Companion_instance_1.bd(valueBytes.length);
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = tag.kc_1;
      var elements = length.wc_1;
      var this_1 = primitiveArrayConcat([this_0, elements]);
      var tlvBytes = primitiveArrayConcat([this_1, valueBytes]);
      var tlv = Companion_instance.wa(tlvBytes, listOf_0(EmvSpecification_instance));
      // Inline function 'kotlin.text.trim' call
      var this_2 = tlv.uc_1.zd('\n').toString();
      var explanation = toString(trim(isCharSequence(this_2) ? this_2 : THROW_CCE()));
      // Inline function 'kotlin.text.ifEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(explanation) === 0) {
        // Inline function 'io.github.rafaelrabeloit.bertlv.ffi.buildExplanation.<anonymous>' call
        tmp_0 = null;
      } else {
        tmp_0 = explanation;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(TLVLength).p = get_size;
  protoOf(TLVTag).p = get_size;
  protoOf(TLVValue).p = get_size;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  EmvSpecification_instance = new EmvSpecification();
  Companion_instance_5 = new Companion_5();
  ApplicationReferenceCurrency_instance = new ApplicationReferenceCurrency();
  AuthorisationResponseCode_instance = new AuthorisationResponseCode();
  CvmList_instance = new CvmList();
  IssuerApplicationData_instance = new IssuerApplicationData();
  IssuerCountryCodeAlpha2_instance = new IssuerCountryCodeAlpha2();
  IssuerCountryCodeAlpha3_instance = new IssuerCountryCodeAlpha3();
  LanguagePreference_instance = new LanguagePreference();
  MerchantCategoryCode_instance = new MerchantCategoryCode();
  PosEntryMode_instance = new PosEntryMode();
  ServiceCode_instance = new ServiceCode();
  TerminalType_instance = new TerminalType();
  TransactionType_instance = new TransactionType();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  Companion_instance_10 = new Companion_10();
  Companion_instance_11 = new Companion_11();
  Companion_instance_12 = new Companion_12();
  Companion_instance_13 = new Companion_13();
  Companion_instance_14 = new Companion_14();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$github = $io.github || ($io.github = {});
    var $io$github$rafaelrabeloit = $io$github.rafaelrabeloit || ($io$github.rafaelrabeloit = {});
    var $io$github$rafaelrabeloit$bertlv = $io$github$rafaelrabeloit.bertlv || ($io$github$rafaelrabeloit.bertlv = {});
    var $io$github$rafaelrabeloit$bertlv$ffi = $io$github$rafaelrabeloit$bertlv.ffi || ($io$github$rafaelrabeloit$bertlv.ffi = {});
    $io$github$rafaelrabeloit$bertlv$ffi.emvParseTlv = emvParseTlv;
    $io$github$rafaelrabeloit$bertlv$ffi.emvExplainTag = emvExplainTag;
    $io$github$rafaelrabeloit$bertlv$ffi.emvVersion = emvVersion;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=universal-bertlv-bertlv-emv.js.map
