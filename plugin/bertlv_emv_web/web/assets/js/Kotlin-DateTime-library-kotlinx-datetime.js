(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var protoOf = kotlin_kotlin.$_$.e2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.t1;
  var Long = kotlin_kotlin.$_$.h3;
  var toString = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var toLong = kotlin_kotlin.$_$.g2;
  var initMetadataForClass = kotlin_kotlin.$_$.s1;
  var VOID = kotlin_kotlin.$_$.b;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.h;
  var numberToLong = kotlin_kotlin.$_$.c2;
  var numberToInt = kotlin_kotlin.$_$.b2;
  var THROW_CCE = kotlin_kotlin.$_$.i3;
  var Comparable = kotlin_kotlin.$_$.e3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var objectCreate = kotlin_kotlin.$_$.d2;
  var lazy = kotlin_kotlin.$_$.l3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(DateTimeUnit, 'DateTimeUnit');
  initMetadataForClass(TimeBased, 'TimeBased', VOID, DateTimeUnit);
  initMetadataForClass(DateBased, 'DateBased', VOID, DateTimeUnit);
  initMetadataForClass(DayBased, 'DayBased', VOID, DateBased);
  initMetadataForClass(MonthBased, 'MonthBased', VOID, DateBased);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DivRemResult, 'DivRemResult');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(TimeZone, 'TimeZone');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(UtcOffset, 'UtcOffset');
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function TimeBased(nanoseconds) {
    DateTimeUnit.call(this);
    this.b9_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b9_1.a1(new Long(0, 0)) > 0)) {
      // Inline function 'kotlinx.datetime.TimeBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.b9_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.b9_1.g2(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.c9_1 = 'HOUR';
      this.d9_1 = this.b9_1.f2(new Long(817405952, 838));
    } else {
      if (this.b9_1.g2(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.c9_1 = 'MINUTE';
        this.d9_1 = this.b9_1.f2(new Long(-129542144, 13));
      } else {
        // Inline function 'kotlin.Long.rem' call
        var this_0 = this.b9_1;
        var other = 1000000000;
        if (this_0.g2(toLong(other)).equals(new Long(0, 0))) {
          this.c9_1 = 'SECOND';
          var tmp = this;
          // Inline function 'kotlin.Long.div' call
          var this_1 = this.b9_1;
          var other_0 = 1000000000;
          tmp.d9_1 = this_1.f2(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.b9_1.g2(toLong(1000000)).equals(new Long(0, 0))) {
            this.c9_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.d9_1 = this.b9_1.f2(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.b9_1.g2(toLong(1000)).equals(new Long(0, 0))) {
              this.c9_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.d9_1 = this.b9_1.f2(toLong(1000));
            } else {
              this.c9_1 = 'NANOSECOND';
              this.d9_1 = this.b9_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).e9 = function (scalar) {
    return new TimeBased(safeMultiply(this.b9_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.b9_1.equals(other.b9_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.b9_1.z() ^ this.b9_1.k2(32).z();
  };
  protoOf(TimeBased).toString = function () {
    return this.f9(this.d9_1, this.c9_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.h9_1 = days;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.h9_1 > 0)) {
      // Inline function 'kotlinx.datetime.DayBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.h9_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).e9 = function (scalar) {
    return new DayBased(safeMultiply_0(this.h9_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.h9_1 === other.h9_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.h9_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.h9_1 % 7 | 0) === 0 ? this.g9(this.h9_1 / 7 | 0, 'WEEK') : this.g9(this.h9_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.i9_1 = months;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i9_1 > 0)) {
      // Inline function 'kotlinx.datetime.MonthBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.i9_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).e9 = function (scalar) {
    return new MonthBased(safeMultiply_0(this.i9_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.i9_1 === other.i9_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.i9_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.i9_1 % 1200 | 0) === 0 ? this.g9(this.i9_1 / 1200 | 0, 'CENTURY') : (this.i9_1 % 12 | 0) === 0 ? this.g9(this.i9_1 / 12 | 0, 'YEAR') : (this.i9_1 % 3 | 0) === 0 ? this.g9(this.i9_1 / 3 | 0, 'QUARTER') : this.g9(this.i9_1, 'MONTH');
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.j9_1 = new TimeBased(new Long(1, 0));
    this.k9_1 = this.j9_1.e9(1000);
    this.l9_1 = this.k9_1.e9(1000);
    this.m9_1 = this.l9_1.e9(1000);
    this.n9_1 = this.m9_1.e9(60);
    this.o9_1 = this.n9_1.e9(60);
    this.p9_1 = new DayBased(1);
    this.q9_1 = this.p9_1.e9(7);
    this.r9_1 = new MonthBased(1);
    this.s9_1 = this.r9_1.e9(3);
    this.t9_1 = this.r9_1.e9(12);
    this.u9_1 = this.t9_1.e9(100);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DateTimeUnit() {
    Companion_getInstance_3();
  }
  protoOf(DateTimeUnit).g9 = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).f9 = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function minus(_this__u8e3s4, value, unit) {
    return minus_0(_this__u8e3s4, toLong(value), unit);
  }
  function minus_0(_this__u8e3s4, value, unit) {
    var tmp;
    if (!value.equals(new Long(0, -2147483648))) {
      tmp = plus_0(_this__u8e3s4, value.h2(), unit);
    } else {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = value.c2(toLong(1));
      tmp = plus(plus_0(_this__u8e3s4, tmp$ret$0.h2(), unit), 1, unit);
    }
    return tmp;
  }
  function plus(_this__u8e3s4, value, unit) {
    return plus_0(_this__u8e3s4, toLong(value), unit);
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  var POWERS_OF_TEN;
  function DivRemResult(q, r) {
    this.v9_1 = q;
    this.w9_1 = r;
  }
  protoOf(DivRemResult).x9 = function () {
    return this.v9_1;
  };
  protoOf(DivRemResult).y9 = function () {
    return this.w9_1;
  };
  function multiplyAndDivide(a, b, c) {
    _init_properties_math_kt__tgcmt4();
    if (a.equals(new Long(0, 0)) || b.equals(new Long(0, 0)))
      return new DivRemResult(new Long(0, 0), new Long(0, 0));
    var ab = safeMultiplyOrZero(a, b);
    if (!ab.equals(new Long(0, 0)))
      return new DivRemResult(ab.f2(c), ab.g2(c));
    if (b.equals(c))
      return new DivRemResult(a, new Long(0, 0));
    if (a.equals(c))
      return new DivRemResult(b, new Long(0, 0));
    var ae = a.a1(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    var be = b.a1(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    // Inline function 'kotlinx.datetime.internal.low' call
    var al = a.m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var ah = a.k2(32).m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var bl = b.m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var bh = b.k2(32).m2(new Long(-1, 0));
    var w = ae.e2(bh).c2(ah.e2(be));
    var x = ae.e2(bl).c2(ah.e2(bh)).c2(al.e2(be));
    var y1 = ah.e2(bl);
    var y2 = al.e2(bh);
    var z = al.e2(bl);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r4 = z.m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp = y1.m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$6 = y2.m2(new Long(-1, 0));
    var tmp_0 = tmp.c2(tmp$ret$6);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$7 = z.k2(32).m2(new Long(-1, 0));
    var r3c = tmp_0.c2(tmp$ret$7);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r3 = r3c.m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp_1 = r3c.k2(32).m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$10 = x.m2(new Long(-1, 0));
    var tmp_2 = tmp_1.c2(tmp$ret$10);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$11 = y1.k2(32).m2(new Long(-1, 0));
    var tmp_3 = tmp_2.c2(tmp$ret$11);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$12 = y2.k2(32).m2(new Long(-1, 0));
    var r2c = tmp_3.c2(tmp$ret$12);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r2 = r2c.m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp_4 = r2c.k2(32).m2(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$15 = x.k2(32).m2(new Long(-1, 0));
    var tmp_5 = tmp_4.c2(tmp$ret$15);
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$16 = w.m2(new Long(-1, 0));
    var r1 = tmp_5.c2(tmp$ret$16);
    var abl = r3.j2(32).n2(r4);
    var abh = r1.j2(32).n2(r2);
    var tmp_6;
    // Inline function 'kotlinx.datetime.internal.indexBit' call
    if (abh.k2(63).m2(new Long(1, 0)).equals(new Long(1, 0))) {
      tmp_6 = -1;
    } else {
      tmp_6 = 1;
    }
    var sign = tmp_6;
    if (sign === -1) {
      // Inline function 'kotlin.Long.plus' call
      abl = abl.i2().c2(toLong(1));
      abh = abh.i2();
      if (abl.equals(new Long(0, 0))) {
        // Inline function 'kotlin.Long.plus' call
        abh = abh.c2(toLong(1));
      }
    }
    var q = new Long(0, 0);
    var r = new Long(0, 0);
    var inductionVariable = 127;
    if (0 <= inductionVariable)
      do {
        var bitNo = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_7;
        if (bitNo < 64) {
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          tmp_7 = abl.k2(bitNo).m2(new Long(1, 0));
        } else {
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          var value = abh;
          var bit = bitNo - 64 | 0;
          tmp_7 = value.k2(bit).m2(new Long(1, 0));
        }
        var nextBit = tmp_7;
        r = r.j2(1).n2(nextBit);
        if (r.a1(c) >= 0 || r.a1(new Long(0, 0)) < 0) {
          r = r.d2(c);
          if (bitNo < 63)
            q = q.n2((new Long(1, 0)).j2(bitNo));
          else
            throw ArithmeticException_init_$Create$('The result of a multiplication followed by division overflows a long');
        }
      }
       while (0 <= inductionVariable);
    return new DivRemResult(numberToLong(sign).e2(q), numberToLong(sign).e2(r));
  }
  function safeMultiplyOrZero(a, b) {
    _init_properties_math_kt__tgcmt4();
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        return new Long(0, 0);
      }
      return a.h2();
    } else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.e2(b);
    if (!total.f2(b).equals(a)) {
      return new Long(0, 0);
    }
    return total;
  }
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).p2(), 999999999);
    tmp.z9_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).p2(), 0);
    tmp_0.aa_1 = new Instant_0(tmp$ret$3);
    this.ba_1 = new Instant_0(Instant.MIN);
    this.ca_1 = new Instant_0(Instant.MAX);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Instant_0(value) {
    Companion_getInstance_4();
    this.da_1 = value;
  }
  protoOf(Instant_0).ea = function (seconds, nanos) {
    var newSeconds = this.da_1.epochSecond() + seconds;
    var newNanos = this.da_1.nano() + nanos;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Instant.plusFix.<anonymous>' call
    return Instant.ofEpochSecond(newSeconds, numberToInt(newNanos));
  };
  protoOf(Instant_0).fa = function (other) {
    return this.da_1.compareTo(other.da_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.fa(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.da_1 === other.da_1 || this.da_1.equals(other.da_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.da_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.da_1.toString();
  };
  function plus_0(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>' call
      var name_for_destructuring_parameter_0_fjsvno = multiplyAndDivide(value, unit.b9_1, new Long(1000000000, 0));
      var d = name_for_destructuring_parameter_0_fjsvno.x9();
      var r = name_for_destructuring_parameter_0_fjsvno.y9();
      tmp = new Instant_0(_this__u8e3s4.ea(d.p2(), r.z()));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e)) {
          throw e;
        }
        tmp_0 = value.a1(new Long(0, 0)) > 0 ? Companion_getInstance_4().ca_1 : Companion_getInstance_4().ba_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDateTime.<init>.<anonymous>' call
      tmp = LocalDateTime.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDateTime_0.call($this, tmp);
    return $this;
  }
  function LocalDateTime_init_$Create$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.ga_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.ha_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_5();
    this.ia_1 = value;
  }
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.ia_1 === other.ia_1 || this.ia_1.equals(other.ia_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.ia_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.ia_1.toString();
  };
  protoOf(LocalDateTime_0).ja = function (other) {
    return this.ia_1.compareTo(other.ia_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.ja(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.ka_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_6();
    this.la_1 = zoneId;
  }
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.la_1 === other.la_1 || this.la_1.equals(other.la_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.la_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.la_1.toString();
  };
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var p0 = _this__u8e3s4.ia_1.atZone(timeZone.la_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.ma_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.oa_1 = offset;
  }
  var isoFormat$delegate;
  var isoBasicFormat$delegate;
  var fourDigitsFormat$delegate;
  function Companion_8() {
    Companion_instance_8 = this;
    this.pa_1 = new UtcOffset(ZoneOffset.UTC);
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_8();
    this.ma_1 = zoneOffset;
  }
  protoOf(UtcOffset).hashCode = function () {
    return this.ma_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.ma_1 === other.ma_1 || this.ma_1.equals(other.ma_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.ma_1.toString();
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      var tmp_0;
      if (!(hours == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_1 = ZoneOffset;
        var tmp_2 = minutes == null ? 0 : minutes;
        var tmp$ret$1 = tmp_1.ofHoursMinutesSeconds(hours, tmp_2, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$1);
      } else if (!(minutes == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_3 = ZoneOffset;
        var tmp_4 = minutes / 60 | 0;
        var tmp_5 = minutes % 60 | 0;
        var tmp$ret$3 = tmp_3.ofHoursMinutesSeconds(tmp_4, tmp_5, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$3);
      } else {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_6 = ZoneOffset;
        var tmp$ret$5 = tmp_6.ofTotalSeconds(seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$5);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_8;
        if (isJodaDateTimeException(e)) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function isoFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffsetId().toFormatter(ResolverStyle.STRICT);
  }
  function isoBasicFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHmmss', 'Z').toFormatter(ResolverStyle.STRICT);
  }
  function fourDigitsFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHMM', '+0000').toFormatter(ResolverStyle.STRICT);
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      isoFormat$delegate = lazy(isoFormat$delegate$lambda);
      isoBasicFormat$delegate = lazy(isoBasicFormat$delegate$lambda);
      fourDigitsFormat$delegate = lazy(fourDigitsFormat$delegate$lambda);
    }
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.h2();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.e2(b);
    if (!total.f2(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeMultiply_0(a, b) {
    // Inline function 'kotlin.Long.times' call
    var result = toLong(a).e2(toLong(b));
    if (result.a1(new Long(2147483647, 0)) > 0 || result.a1(new Long(-2147483648, -1)) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.z();
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_7 = new Companion_7();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalDateTime_init_$Create$;
  _.$_$.b = Companion_getInstance_3;
  _.$_$.c = Companion_getInstance_6;
  _.$_$.d = Instant_0;
  _.$_$.e = UtcOffset_0;
  _.$_$.f = asTimeZone;
  _.$_$.g = minus;
  _.$_$.h = toInstant;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
