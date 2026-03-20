#import <Foundation/NSArray.h>
#import <Foundation/NSDictionary.h>
#import <Foundation/NSError.h>
#import <Foundation/NSObject.h>
#import <Foundation/NSSet.h>
#import <Foundation/NSString.h>
#import <Foundation/NSValue.h>

@class SharedKitKotlinByteArray, SharedKitTLVList, SharedKitTLVTagContext, SharedKitTLVTag, SharedKitTLVValueValueHandler<V>, SharedKitKotlinThrowable, SharedKitKotlinArray<T>, SharedKitKotlinException, SharedKitExplanation, SharedKitTLVCompanion, SharedKitTLVLength, SharedKitTLVValue<V>, SharedKitTLV<V>, SharedKitTLVListCompanion, SharedKitTLVConstants, SharedKitTLVLengthCompanion, SharedKitTLVLengthForm, SharedKitKotlinEnumCompanion, SharedKitKotlinEnum<E>, SharedKitTLVTagCompanion, SharedKitTLVTagClassification, SharedKitTLVTagConstruction, SharedKitTLVTagForm, SharedKitTLVValueCompanion, SharedKitASNOneSpecification, SharedKitUniversalTagDescriptionCompanion, SharedKitUniversalTagDescription, SharedKitGeneralizedTimeValueParserCompanion, SharedKitKotlinx_datetimeInstant, SharedKitIA5StringValueParserCompanion, SharedKitIntegerValueParserCompanion, SharedKitKotlinUnit, SharedKitObjectIdentifierValueParserCompanion, SharedKitRealValueParserCompanion, SharedKitUTCTimeValueParserCompanion, SharedKitBitfield_parserBitFieldSchema, SharedKitExplainConstants, SharedKitExplainElement, SharedKitLine, SharedKitLineSeparator, SharedKitTab, SharedKitTabGroup, SharedKitTableCompanion, SharedKitTableRow, SharedKitTable, SharedKitEmvSpecification, SharedKitEmvTagDescriptionCompanion, SharedKitEmvTagDescription, SharedKitFormat, SharedKitKotlinIntRange, SharedKitSource, SharedKitAdditionalTerminalCapabilities, SharedKitCurrencyCodeCompanion, SharedKitCurrencyCode, SharedKitApplicationCurrencyCode, SharedKitApplicationInterchangeProfile, SharedKitApplicationLifeCycleData, SharedKitApplicationPriorityIndicator, SharedKitApplicationReferenceCurrency, SharedKitApplicationUsageControl, SharedKitAuthorisationResponseCode, SharedKitCVMResults, SharedKitCardTransactionQualifiers, SharedKitCryptogramInformationData, SharedKitCvmList, SharedKitFormFactor, SharedKitActionCodeCompanion, SharedKitActionCode, SharedKitIssuerActionCodeDefault, SharedKitIssuerActionCodeDenial, SharedKitIssuerActionCodeOnline, SharedKitIssuerApplicationData, SharedKitCountryCodeCompanion, SharedKitCountryCode, SharedKitIssuerCountryCode, SharedKitIssuerCountryCodeAlpha2, SharedKitIssuerCountryCodeAlpha3, SharedKitLanguagePreference, SharedKitMerchantCategoryCode, SharedKitPosEntryMode, SharedKitServiceCode, SharedKitTVR, SharedKitTerminalCapabilities, SharedKitTerminalCountryCode, SharedKitTerminalTransactionQualifiers, SharedKitTerminalType, SharedKitTransactionCurrencyCode, SharedKitTransactionReferenceCurrencyCode, SharedKitTransactionStatusInformation, SharedKitTransactionType, SharedKitNumericNumberValueParserCompanion, SharedKitNumericValueParserCompanion, SharedKitCountryCodeDescriptionCompanion, SharedKitCountryCodeDescription, SharedKitCurrencyCodeDescriptionCompanion, SharedKitCurrencyCodeDescription, SharedKitLanguageCodeDescriptionCompanion, SharedKitLanguageCodeDescription, SharedKitMerchantCategoryCodeDescriptionCompanion, SharedKitMerchantCategoryCodeDescription, SharedKitKotlinByteIterator, SharedKitKotlinStringBuilder, SharedKitKotlinCharArray, SharedKitKotlinx_datetimeInstantCompanion, SharedKitBitfield_parserByteSchema, SharedKitBitfield_parserParseResult, SharedKitKotlinIntProgressionCompanion, SharedKitKotlinIntIterator, SharedKitKotlinIntProgression, SharedKitKotlinIntRangeCompanion, SharedKitKotlinCharIterator, SharedKitBitfield_parserFieldDefinition, SharedKitBitfield_parserParsedEntry, SharedKitKotlinx_serialization_coreSerializersModule, SharedKitKotlinx_serialization_coreSerialKind, SharedKitKotlinNothing;

@protocol SharedKitTLVValueValueParser, SharedKitSpecification, SharedKitBuffered, SharedKitExplainable, SharedKitKotlinComparable, SharedKitTLVValueValueExplainer, SharedKitKotlinIterator, SharedKitKotlinIterable, SharedKitKotlinCharSequence, SharedKitKotlinAppendable, SharedKitKotlinClosedRange, SharedKitKotlinOpenEndRange, SharedKitKotlinx_datetimeDateTimeFormat, SharedKitKotlinx_serialization_coreKSerializer, SharedKitKotlinx_serialization_coreEncoder, SharedKitKotlinx_serialization_coreSerialDescriptor, SharedKitKotlinx_serialization_coreSerializationStrategy, SharedKitKotlinx_serialization_coreDecoder, SharedKitKotlinx_serialization_coreDeserializationStrategy, SharedKitKotlinx_serialization_coreCompositeEncoder, SharedKitKotlinAnnotation, SharedKitKotlinx_serialization_coreCompositeDecoder, SharedKitKotlinx_serialization_coreSerializersModuleCollector, SharedKitKotlinKClass, SharedKitKotlinKDeclarationContainer, SharedKitKotlinKAnnotatedElement, SharedKitKotlinKClassifier;

NS_ASSUME_NONNULL_BEGIN
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunknown-warning-option"
#pragma clang diagnostic ignored "-Wincompatible-property-type"
#pragma clang diagnostic ignored "-Wnullability"

#pragma push_macro("_Nullable_result")
#if !__has_feature(nullability_nullable_result)
#undef _Nullable_result
#define _Nullable_result _Nullable
#endif

__attribute__((swift_name("KotlinBase")))
@interface SharedKitBase : NSObject
- (instancetype)init __attribute__((unavailable));
+ (instancetype)new __attribute__((unavailable));
+ (void)initialize __attribute__((objc_requires_super));
@end

@interface SharedKitBase (SharedKitBaseCopying) <NSCopying>
@end

__attribute__((swift_name("KotlinMutableSet")))
@interface SharedKitMutableSet<ObjectType> : NSMutableSet<ObjectType>
@end

__attribute__((swift_name("KotlinMutableDictionary")))
@interface SharedKitMutableDictionary<KeyType, ObjectType> : NSMutableDictionary<KeyType, ObjectType>
@end

@interface NSError (NSErrorSharedKitKotlinException)
@property (readonly) id _Nullable kotlinException;
@end

__attribute__((swift_name("KotlinNumber")))
@interface SharedKitNumber : NSNumber
- (instancetype)initWithChar:(char)value __attribute__((unavailable));
- (instancetype)initWithUnsignedChar:(unsigned char)value __attribute__((unavailable));
- (instancetype)initWithShort:(short)value __attribute__((unavailable));
- (instancetype)initWithUnsignedShort:(unsigned short)value __attribute__((unavailable));
- (instancetype)initWithInt:(int)value __attribute__((unavailable));
- (instancetype)initWithUnsignedInt:(unsigned int)value __attribute__((unavailable));
- (instancetype)initWithLong:(long)value __attribute__((unavailable));
- (instancetype)initWithUnsignedLong:(unsigned long)value __attribute__((unavailable));
- (instancetype)initWithLongLong:(long long)value __attribute__((unavailable));
- (instancetype)initWithUnsignedLongLong:(unsigned long long)value __attribute__((unavailable));
- (instancetype)initWithFloat:(float)value __attribute__((unavailable));
- (instancetype)initWithDouble:(double)value __attribute__((unavailable));
- (instancetype)initWithBool:(BOOL)value __attribute__((unavailable));
- (instancetype)initWithInteger:(NSInteger)value __attribute__((unavailable));
- (instancetype)initWithUnsignedInteger:(NSUInteger)value __attribute__((unavailable));
+ (instancetype)numberWithChar:(char)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedChar:(unsigned char)value __attribute__((unavailable));
+ (instancetype)numberWithShort:(short)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedShort:(unsigned short)value __attribute__((unavailable));
+ (instancetype)numberWithInt:(int)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedInt:(unsigned int)value __attribute__((unavailable));
+ (instancetype)numberWithLong:(long)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedLong:(unsigned long)value __attribute__((unavailable));
+ (instancetype)numberWithLongLong:(long long)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedLongLong:(unsigned long long)value __attribute__((unavailable));
+ (instancetype)numberWithFloat:(float)value __attribute__((unavailable));
+ (instancetype)numberWithDouble:(double)value __attribute__((unavailable));
+ (instancetype)numberWithBool:(BOOL)value __attribute__((unavailable));
+ (instancetype)numberWithInteger:(NSInteger)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedInteger:(NSUInteger)value __attribute__((unavailable));
@end

__attribute__((swift_name("KotlinByte")))
@interface SharedKitByte : SharedKitNumber
- (instancetype)initWithChar:(char)value;
+ (instancetype)numberWithChar:(char)value;
@end

__attribute__((swift_name("KotlinUByte")))
@interface SharedKitUByte : SharedKitNumber
- (instancetype)initWithUnsignedChar:(unsigned char)value;
+ (instancetype)numberWithUnsignedChar:(unsigned char)value;
@end

__attribute__((swift_name("KotlinShort")))
@interface SharedKitShort : SharedKitNumber
- (instancetype)initWithShort:(short)value;
+ (instancetype)numberWithShort:(short)value;
@end

__attribute__((swift_name("KotlinUShort")))
@interface SharedKitUShort : SharedKitNumber
- (instancetype)initWithUnsignedShort:(unsigned short)value;
+ (instancetype)numberWithUnsignedShort:(unsigned short)value;
@end

__attribute__((swift_name("KotlinInt")))
@interface SharedKitInt : SharedKitNumber
- (instancetype)initWithInt:(int)value;
+ (instancetype)numberWithInt:(int)value;
@end

__attribute__((swift_name("KotlinUInt")))
@interface SharedKitUInt : SharedKitNumber
- (instancetype)initWithUnsignedInt:(unsigned int)value;
+ (instancetype)numberWithUnsignedInt:(unsigned int)value;
@end

__attribute__((swift_name("KotlinLong")))
@interface SharedKitLong : SharedKitNumber
- (instancetype)initWithLongLong:(long long)value;
+ (instancetype)numberWithLongLong:(long long)value;
@end

__attribute__((swift_name("KotlinULong")))
@interface SharedKitULong : SharedKitNumber
- (instancetype)initWithUnsignedLongLong:(unsigned long long)value;
+ (instancetype)numberWithUnsignedLongLong:(unsigned long long)value;
@end

__attribute__((swift_name("KotlinFloat")))
@interface SharedKitFloat : SharedKitNumber
- (instancetype)initWithFloat:(float)value;
+ (instancetype)numberWithFloat:(float)value;
@end

__attribute__((swift_name("KotlinDouble")))
@interface SharedKitDouble : SharedKitNumber
- (instancetype)initWithDouble:(double)value;
+ (instancetype)numberWithDouble:(double)value;
@end

__attribute__((swift_name("KotlinBoolean")))
@interface SharedKitBoolean : SharedKitNumber
- (instancetype)initWithBool:(BOOL)value;
+ (instancetype)numberWithBool:(BOOL)value;
@end

__attribute__((swift_name("TLVValueValueParser")))
@protocol SharedKitTLVValueValueParser
@required
- (id _Nullable)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(id _Nullable)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(id _Nullable)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ConstructedValueParser")))
@interface SharedKitConstructedValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)initWithSpecifications:(NSArray<id<SharedKitSpecification>> *)specifications __attribute__((swift_name("init(specifications:)"))) __attribute__((objc_designated_initializer));
- (SharedKitTLVList *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitTLVList *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitTLVList *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((swift_name("Specification")))
@protocol SharedKitSpecification
@required
- (SharedKitTLVTagContext *)contextForTagTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("contextForTag(tlvTag:)")));
- (SharedKitTLVValueValueHandler<id> *)handlerOfValueTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("handlerOfValue(tlvTag:)")));
- (BOOL)tagExistsTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("tagExists(tlvTag:)")));
@end

__attribute__((swift_name("KotlinThrowable")))
@interface SharedKitKotlinThrowable : SharedKitBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (instancetype)initWithMessage:(NSString * _Nullable)message __attribute__((swift_name("init(message:)"))) __attribute__((objc_designated_initializer));
- (instancetype)initWithCause:(SharedKitKotlinThrowable * _Nullable)cause __attribute__((swift_name("init(cause:)"))) __attribute__((objc_designated_initializer));
- (instancetype)initWithMessage:(NSString * _Nullable)message cause:(SharedKitKotlinThrowable * _Nullable)cause __attribute__((swift_name("init(message:cause:)"))) __attribute__((objc_designated_initializer));

/**
 * @note annotations
 *   kotlin.experimental.ExperimentalNativeApi
*/
- (SharedKitKotlinArray<NSString *> *)getStackTrace __attribute__((swift_name("getStackTrace()")));
- (void)printStackTrace __attribute__((swift_name("printStackTrace()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) SharedKitKotlinThrowable * _Nullable cause __attribute__((swift_name("cause")));
@property (readonly) NSString * _Nullable message __attribute__((swift_name("message")));
- (NSError *)asError __attribute__((swift_name("asError()")));
@end

__attribute__((swift_name("KotlinException")))
@interface SharedKitKotlinException : SharedKitKotlinThrowable
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (instancetype)initWithMessage:(NSString * _Nullable)message __attribute__((swift_name("init(message:)"))) __attribute__((objc_designated_initializer));
- (instancetype)initWithCause:(SharedKitKotlinThrowable * _Nullable)cause __attribute__((swift_name("init(cause:)"))) __attribute__((objc_designated_initializer));
- (instancetype)initWithMessage:(NSString * _Nullable)message cause:(SharedKitKotlinThrowable * _Nullable)cause __attribute__((swift_name("init(message:cause:)"))) __attribute__((objc_designated_initializer));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SpecificationTagNotExistException")))
@interface SharedKitSpecificationTagNotExistException : SharedKitKotlinException
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (instancetype)initWithMessage:(NSString * _Nullable)message __attribute__((swift_name("init(message:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
- (instancetype)initWithCause:(SharedKitKotlinThrowable * _Nullable)cause __attribute__((swift_name("init(cause:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
- (instancetype)initWithMessage:(NSString * _Nullable)message cause:(SharedKitKotlinThrowable * _Nullable)cause __attribute__((swift_name("init(message:cause:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@end

__attribute__((swift_name("Buffered")))
@protocol SharedKitBuffered
@required
@property (readonly) SharedKitKotlinByteArray *bytes __attribute__((swift_name("bytes")));
@property (readonly) int32_t size __attribute__((swift_name("size")));
@end

__attribute__((swift_name("Explainable")))
@protocol SharedKitExplainable
@required
- (SharedKitExplanation *)explainLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLV")))
@interface SharedKitTLV<V> : SharedKitBase <SharedKitBuffered, SharedKitExplainable>
@property (class, readonly, getter=companion) SharedKitTLVCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(lineSeparator:)")));
@property (readonly) SharedKitKotlinByteArray *bytes __attribute__((swift_name("bytes")));
@property (readonly) int32_t length __attribute__((swift_name("length")));
@property (readonly) int32_t tag __attribute__((swift_name("tag")));
@property (readonly) SharedKitTLVLength *tlvLength __attribute__((swift_name("tlvLength")));
@property (readonly) SharedKitTLVTag *tlvTag __attribute__((swift_name("tlvTag")));
@property (readonly) SharedKitTLVValue<V> *tlvValue __attribute__((swift_name("tlvValue")));
@property (readonly) V _Nullable value __attribute__((swift_name("value")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVCompanion")))
@interface SharedKitTLVCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTLVCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitTLV<SharedKitKotlinByteArray *> *)fromBinaryComponentsTag:(SharedKitTLVTag *)tag value:(SharedKitTLVValue<SharedKitKotlinByteArray *> *)value __attribute__((swift_name("fromBinaryComponents(tag:value:)")));
- (SharedKitTLV<SharedKitKotlinByteArray *> *)fromBinaryTlvBufferBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("fromBinaryTlvBuffer(bytes:)")));
- (SharedKitTLV<id> *)fromComponentsTag:(SharedKitTLVTag *)tag value:(SharedKitTLVValue<id> *)value __attribute__((swift_name("fromComponents(tag:value:)")));
- (SharedKitTLV<SharedKitKotlinByteArray *> *)fromTagAndBinaryValueTag:(int32_t)tag value:(SharedKitKotlinByteArray *)value __attribute__((swift_name("fromTagAndBinaryValue(tag:value:)")));
- (SharedKitTLV<id> *)fromTagAndValueTag:(int32_t)tag value:(id _Nullable)value handler:(SharedKitTLVValueValueHandler<id> *)handler __attribute__((swift_name("fromTagAndValue(tag:value:handler:)")));
- (SharedKitTLV<id> *)fromTlvBufferBytes:(SharedKitKotlinByteArray *)bytes handler:(SharedKitTLVValueValueHandler<id> *)handler __attribute__((swift_name("fromTlvBuffer(bytes:handler:)")));
- (SharedKitTLV<id> *)fromTlvBufferBytes:(SharedKitKotlinByteArray *)bytes specifications:(NSArray<id<SharedKitSpecification>> *)specifications __attribute__((swift_name("fromTlvBuffer(bytes:specifications:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVList")))
@interface SharedKitTLVList : SharedKitBase <SharedKitBuffered>
@property (class, readonly, getter=companion) SharedKitTLVListCompanion *companion __attribute__((swift_name("companion")));
@property (readonly) SharedKitKotlinByteArray *bytes __attribute__((swift_name("bytes")));
@property (readonly) NSArray<SharedKitTLV<id> *> *tlvs __attribute__((swift_name("tlvs")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVList.Companion")))
@interface SharedKitTLVListCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTLVListCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitTLVList *)fromTlvListBufferBytes:(SharedKitKotlinByteArray *)bytes specifications:(NSArray<id<SharedKitSpecification>> *)specifications __attribute__((swift_name("fromTlvListBuffer(bytes:specifications:)")));
- (SharedKitTLVList *)fromTlvsTlvs:(NSArray<SharedKitTLV<id> *> *)tlvs __attribute__((swift_name("fromTlvs(tlvs:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVConstants")))
@interface SharedKitTLVConstants : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)tLVConstants __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTLVConstants *shared __attribute__((swift_name("shared")));
@property (readonly) int32_t CLASS_BITS_LENGTH __attribute__((swift_name("CLASS_BITS_LENGTH")));
@property (readonly) int32_t CLASS_BITS_POSITION __attribute__((swift_name("CLASS_BITS_POSITION")));
@property (readonly) int32_t CONSTRUCTION_BIT_LENGTH __attribute__((swift_name("CONSTRUCTION_BIT_LENGTH")));
@property (readonly) int32_t CONSTRUCTION_BIT_POSITION __attribute__((swift_name("CONSTRUCTION_BIT_POSITION")));
@property (readonly) int32_t LENGTH_LONG_MASK __attribute__((swift_name("LENGTH_LONG_MASK")));
@property (readonly) int32_t LENGTH_SHORT_MASK __attribute__((swift_name("LENGTH_SHORT_MASK")));
@property (readonly) int32_t MAX_SHORT_LENGTH __attribute__((swift_name("MAX_SHORT_LENGTH")));
@property (readonly) int32_t MULTI_BYTE_TYPE_BITS_LENGTH __attribute__((swift_name("MULTI_BYTE_TYPE_BITS_LENGTH")));
@property (readonly) int32_t MULTI_BYTE_TYPE_BITS_POSITION __attribute__((swift_name("MULTI_BYTE_TYPE_BITS_POSITION")));
@property (readonly) int32_t TAG_CONTINUATION_MASK __attribute__((swift_name("TAG_CONTINUATION_MASK")));
@property (readonly) int32_t TAG_MASK __attribute__((swift_name("TAG_MASK")));
@property (readonly) int32_t TYPE_BITS_LENGTH __attribute__((swift_name("TYPE_BITS_LENGTH")));
@property (readonly) int32_t TYPE_BITS_POSITION __attribute__((swift_name("TYPE_BITS_POSITION")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVLength")))
@interface SharedKitTLVLength : SharedKitBase <SharedKitBuffered, SharedKitExplainable>
@property (class, readonly, getter=companion) SharedKitTLVLengthCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(lineSeparator:)")));
@property (readonly) SharedKitKotlinByteArray *bytes __attribute__((swift_name("bytes")));
@property (readonly) SharedKitTLVLengthForm *form __attribute__((swift_name("form")));
@property (readonly) int32_t length __attribute__((swift_name("length")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVLength.Companion")))
@interface SharedKitTLVLengthCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTLVLengthCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitTLVLength *)fromLengthLength:(int32_t)length __attribute__((swift_name("fromLength(length:)")));
- (SharedKitTLVLength *)fromTlvBufferBytes:(SharedKitKotlinByteArray *)bytes tag:(SharedKitTLVTag *)tag __attribute__((swift_name("fromTlvBuffer(bytes:tag:)")));
@end

__attribute__((swift_name("KotlinComparable")))
@protocol SharedKitKotlinComparable
@required
- (int32_t)compareToOther:(id _Nullable)other __attribute__((swift_name("compareTo(other:)")));
@end

__attribute__((swift_name("KotlinEnum")))
@interface SharedKitKotlinEnum<E> : SharedKitBase <SharedKitKotlinComparable>
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer));
@property (class, readonly, getter=companion) SharedKitKotlinEnumCompanion *companion __attribute__((swift_name("companion")));
- (int32_t)compareToOther:(E)other __attribute__((swift_name("compareTo(other:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) NSString *name __attribute__((swift_name("name")));
@property (readonly) int32_t ordinal __attribute__((swift_name("ordinal")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVLength.Form")))
@interface SharedKitTLVLengthForm : SharedKitKotlinEnum<SharedKitTLVLengthForm *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SharedKitTLVLengthForm *short_ __attribute__((swift_name("short_")));
@property (class, readonly) SharedKitTLVLengthForm *long_ __attribute__((swift_name("long_")));
+ (SharedKitKotlinArray<SharedKitTLVLengthForm *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitTLVLengthForm *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) NSString *info __attribute__((swift_name("info")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVTag")))
@interface SharedKitTLVTag : SharedKitBase <SharedKitBuffered, SharedKitExplainable>
@property (class, readonly, getter=companion) SharedKitTLVTagCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(lineSeparator:)")));
@property (readonly) SharedKitKotlinByteArray *bytes __attribute__((swift_name("bytes")));
@property (readonly) SharedKitTLVTagClassification *classification __attribute__((swift_name("classification")));
@property (readonly) SharedKitTLVTagConstruction *construction __attribute__((swift_name("construction")));
@property (readonly) SharedKitTLVTagContext *(^contextualize)(SharedKitTLVTag *) __attribute__((swift_name("contextualize")));
@property (readonly) SharedKitTLVTagForm *form __attribute__((swift_name("form")));
@property (readonly) int32_t tag __attribute__((swift_name("tag")));
@property (readonly) int32_t type __attribute__((swift_name("type")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVTag.Classification")))
@interface SharedKitTLVTagClassification : SharedKitKotlinEnum<SharedKitTLVTagClassification *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SharedKitTLVTagClassification *universal __attribute__((swift_name("universal")));
@property (class, readonly) SharedKitTLVTagClassification *application __attribute__((swift_name("application")));
@property (class, readonly) SharedKitTLVTagClassification *contextSpecific __attribute__((swift_name("contextSpecific")));
@property (class, readonly) SharedKitTLVTagClassification *private_ __attribute__((swift_name("private_")));
+ (SharedKitKotlinArray<SharedKitTLVTagClassification *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitTLVTagClassification *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) NSString *info __attribute__((swift_name("info")));
@property (readonly) int32_t value __attribute__((swift_name("value")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVTag.Companion")))
@interface SharedKitTLVTagCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTLVTagCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitTLVTag *)fromTagTag:(int32_t)tag contextualize:(SharedKitTLVTagContext *(^)(SharedKitTLVTag *))contextualize __attribute__((swift_name("fromTag(tag:contextualize:)")));
- (SharedKitTLVTag *)fromTlvBufferBytes:(SharedKitKotlinByteArray *)bytes contextualize:(SharedKitTLVTagContext *(^)(SharedKitTLVTag *))contextualize __attribute__((swift_name("fromTlvBuffer(bytes:contextualize:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVTag.Construction")))
@interface SharedKitTLVTagConstruction : SharedKitKotlinEnum<SharedKitTLVTagConstruction *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SharedKitTLVTagConstruction *both __attribute__((swift_name("both")));
@property (class, readonly) SharedKitTLVTagConstruction *primitive __attribute__((swift_name("primitive")));
@property (class, readonly) SharedKitTLVTagConstruction *constructed __attribute__((swift_name("constructed")));
+ (SharedKitKotlinArray<SharedKitTLVTagConstruction *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitTLVTagConstruction *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) NSString *info __attribute__((swift_name("info")));
@property (readonly) int32_t value __attribute__((swift_name("value")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVTag.Context")))
@interface SharedKitTLVTagContext : SharedKitBase
- (instancetype)initWithInfo:(NSString * _Nullable)info description:(NSString *)description __attribute__((swift_name("init(info:description:)"))) __attribute__((objc_designated_initializer));
- (SharedKitTLVTagContext *)doCopyInfo:(NSString * _Nullable)info description:(NSString *)description __attribute__((swift_name("doCopy(info:description:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) NSString * _Nullable info __attribute__((swift_name("info")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVTag.Form")))
@interface SharedKitTLVTagForm : SharedKitKotlinEnum<SharedKitTLVTagForm *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SharedKitTLVTagForm *short_ __attribute__((swift_name("short_")));
@property (class, readonly) SharedKitTLVTagForm *long_ __attribute__((swift_name("long_")));
+ (SharedKitKotlinArray<SharedKitTLVTagForm *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitTLVTagForm *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) NSString *info __attribute__((swift_name("info")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVValue")))
@interface SharedKitTLVValue<V> : SharedKitBase <SharedKitBuffered, SharedKitExplainable>
@property (class, readonly, getter=companion) SharedKitTLVValueCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(lineSeparator:)")));
@property (readonly) SharedKitKotlinByteArray *bytes __attribute__((swift_name("bytes")));
@property (readonly) V _Nullable value __attribute__((swift_name("value")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVValueCompanion")))
@interface SharedKitTLVValueCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTLVValueCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitTLVValue<SharedKitKotlinByteArray *> *)fromBinaryTlvBufferBytes:(SharedKitKotlinByteArray *)bytes tag:(SharedKitTLVTag *)tag length:(SharedKitTLVLength *)length __attribute__((swift_name("fromBinaryTlvBuffer(bytes:tag:length:)")));
- (SharedKitTLVValue<SharedKitKotlinByteArray *> *)fromBinaryValueValue:(SharedKitKotlinByteArray *)value __attribute__((swift_name("fromBinaryValue(value:)")));
- (SharedKitTLVValue<id> *)fromTlvBufferBytes:(SharedKitKotlinByteArray *)bytes tag:(SharedKitTLVTag *)tag length:(SharedKitTLVLength *)length handler:(SharedKitTLVValueValueHandler<id> *)handler __attribute__((swift_name("fromTlvBuffer(bytes:tag:length:handler:)")));
- (SharedKitTLVValue<id> *)fromValueValue:(id _Nullable)value handler:(SharedKitTLVValueValueHandler<id> *)handler __attribute__((swift_name("fromValue(value:handler:)")));
@end

__attribute__((swift_name("TLVValueValueExplainer")))
@protocol SharedKitTLVValueValueExplainer
@required
- (SharedKitExplanation *)explainValue:(id _Nullable)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TLVValueValueHandler")))
@interface SharedKitTLVValueValueHandler<V> : SharedKitBase
- (instancetype)initWithParser:(id<SharedKitTLVValueValueParser>)parser explainer:(id<SharedKitTLVValueValueExplainer> _Nullable)explainer __attribute__((swift_name("init(parser:explainer:)"))) __attribute__((objc_designated_initializer));
- (SharedKitTLVValueValueHandler<V> *)doCopyParser:(id<SharedKitTLVValueValueParser>)parser explainer:(id<SharedKitTLVValueValueExplainer> _Nullable)explainer __attribute__((swift_name("doCopy(parser:explainer:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) id<SharedKitTLVValueValueExplainer> _Nullable explainer __attribute__((swift_name("explainer")));
@property (readonly) id<SharedKitTLVValueValueParser> parser __attribute__((swift_name("parser")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ASNOneSpecification")))
@interface SharedKitASNOneSpecification : SharedKitBase <SharedKitSpecification>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)aSNOneSpecification __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitASNOneSpecification *shared __attribute__((swift_name("shared")));
- (SharedKitTLVTagContext *)contextForTagTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("contextForTag(tlvTag:)")));
- (SharedKitTLVValueValueHandler<id> *)handlerOfValueTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("handlerOfValue(tlvTag:)")));
- (BOOL)tagExistsTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("tagExists(tlvTag:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("UniversalTagDescription")))
@interface SharedKitUniversalTagDescription : SharedKitKotlinEnum<SharedKitUniversalTagDescription *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly, getter=companion) SharedKitUniversalTagDescriptionCompanion *companion __attribute__((swift_name("companion")));
@property (class, readonly) SharedKitUniversalTagDescription *eoc __attribute__((swift_name("eoc")));
@property (class, readonly) SharedKitUniversalTagDescription *boolean __attribute__((swift_name("boolean")));
@property (class, readonly) SharedKitUniversalTagDescription *integer __attribute__((swift_name("integer")));
@property (class, readonly) SharedKitUniversalTagDescription *bitString __attribute__((swift_name("bitString")));
@property (class, readonly) SharedKitUniversalTagDescription *octetString __attribute__((swift_name("octetString")));
@property (class, readonly) SharedKitUniversalTagDescription *null __attribute__((swift_name("null")));
@property (class, readonly) SharedKitUniversalTagDescription *objectIdentifier __attribute__((swift_name("objectIdentifier")));
@property (class, readonly) SharedKitUniversalTagDescription *objectDescriptor __attribute__((swift_name("objectDescriptor")));
@property (class, readonly) SharedKitUniversalTagDescription *external __attribute__((swift_name("external")));
@property (class, readonly) SharedKitUniversalTagDescription *real __attribute__((swift_name("real")));
@property (class, readonly) SharedKitUniversalTagDescription *enumerated __attribute__((swift_name("enumerated")));
@property (class, readonly) SharedKitUniversalTagDescription *embeddedPdv __attribute__((swift_name("embeddedPdv")));
@property (class, readonly) SharedKitUniversalTagDescription *utf8String __attribute__((swift_name("utf8String")));
@property (class, readonly) SharedKitUniversalTagDescription *relativeOid __attribute__((swift_name("relativeOid")));
@property (class, readonly) SharedKitUniversalTagDescription *time __attribute__((swift_name("time")));
@property (class, readonly) SharedKitUniversalTagDescription *dateO __attribute__((swift_name("dateO")));
@property (class, readonly) SharedKitUniversalTagDescription *sequence __attribute__((swift_name("sequence")));
@property (class, readonly) SharedKitUniversalTagDescription *set __attribute__((swift_name("set")));
@property (class, readonly) SharedKitUniversalTagDescription *numericString __attribute__((swift_name("numericString")));
@property (class, readonly) SharedKitUniversalTagDescription *printableString __attribute__((swift_name("printableString")));
@property (class, readonly) SharedKitUniversalTagDescription *t61String __attribute__((swift_name("t61String")));
@property (class, readonly) SharedKitUniversalTagDescription *videotexString __attribute__((swift_name("videotexString")));
@property (class, readonly) SharedKitUniversalTagDescription *ia5String __attribute__((swift_name("ia5String")));
@property (class, readonly) SharedKitUniversalTagDescription *utcTime __attribute__((swift_name("utcTime")));
@property (class, readonly) SharedKitUniversalTagDescription *generalizedTime __attribute__((swift_name("generalizedTime")));
@property (class, readonly) SharedKitUniversalTagDescription *graphicString __attribute__((swift_name("graphicString")));
@property (class, readonly) SharedKitUniversalTagDescription *visibleString __attribute__((swift_name("visibleString")));
@property (class, readonly) SharedKitUniversalTagDescription *generalString __attribute__((swift_name("generalString")));
@property (class, readonly) SharedKitUniversalTagDescription *universalString __attribute__((swift_name("universalString")));
@property (class, readonly) SharedKitUniversalTagDescription *characterString __attribute__((swift_name("characterString")));
@property (class, readonly) SharedKitUniversalTagDescription *bmpString __attribute__((swift_name("bmpString")));
@property (class, readonly) SharedKitUniversalTagDescription *date __attribute__((swift_name("date")));
@property (class, readonly) SharedKitUniversalTagDescription *timeOfDay __attribute__((swift_name("timeOfDay")));
@property (class, readonly) SharedKitUniversalTagDescription *dateTime __attribute__((swift_name("dateTime")));
@property (class, readonly) SharedKitUniversalTagDescription *duration __attribute__((swift_name("duration")));
+ (SharedKitKotlinArray<SharedKitUniversalTagDescription *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitUniversalTagDescription *> *entries __attribute__((swift_name("entries")));
@property (readonly) SharedKitTLVTagConstruction *construction __attribute__((swift_name("construction")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) NSString *info __attribute__((swift_name("info")));
@property (readonly) int32_t type __attribute__((swift_name("type")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("UniversalTagDescription.Companion")))
@interface SharedKitUniversalTagDescriptionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitUniversalTagDescriptionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitUniversalTagDescription * _Nullable)findByTypeType:(int32_t)type __attribute__((swift_name("findByType(type:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("BooleanValueParser")))
@interface SharedKitBooleanValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (SharedKitBoolean *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitBoolean *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitBoolean *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("GeneralizedTimeValueParser")))
@interface SharedKitGeneralizedTimeValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitGeneralizedTimeValueParserCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitKotlinx_datetimeInstant *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitKotlinx_datetimeInstant *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitKotlinx_datetimeInstant *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("GeneralizedTimeValueParser.Companion")))
@interface SharedKitGeneralizedTimeValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitGeneralizedTimeValueParserCompanion *shared __attribute__((swift_name("shared")));
@property (readonly) int32_t DAY_END __attribute__((swift_name("DAY_END")));
@property (readonly) int32_t DAY_START __attribute__((swift_name("DAY_START")));
@property (readonly) int32_t FRACTION_DIGITS __attribute__((swift_name("FRACTION_DIGITS")));
@property (readonly) unichar FRACTION_SEPARATOR __attribute__((swift_name("FRACTION_SEPARATOR")));
@property (readonly) int32_t FRACTION_START __attribute__((swift_name("FRACTION_START")));
@property (readonly) int32_t HOUR_END __attribute__((swift_name("HOUR_END")));
@property (readonly) int32_t HOUR_START __attribute__((swift_name("HOUR_START")));
@property (readonly) int32_t MILLISECONDS_PER_SECOND __attribute__((swift_name("MILLISECONDS_PER_SECOND")));
@property (readonly) int32_t MINUTE_END __attribute__((swift_name("MINUTE_END")));
@property (readonly) int32_t MINUTE_START __attribute__((swift_name("MINUTE_START")));
@property (readonly) int32_t MIN_FORMAT_LENGTH __attribute__((swift_name("MIN_FORMAT_LENGTH")));
@property (readonly) int32_t MONTH_END __attribute__((swift_name("MONTH_END")));
@property (readonly) int32_t MONTH_START __attribute__((swift_name("MONTH_START")));
@property (readonly) int32_t NANOSECONDS_PER_MILLISECOND __attribute__((swift_name("NANOSECONDS_PER_MILLISECOND")));
@property (readonly) unichar NEGATIVE_OFFSET __attribute__((swift_name("NEGATIVE_OFFSET")));
@property (readonly) unichar POSITIVE_OFFSET __attribute__((swift_name("POSITIVE_OFFSET")));
@property (readonly) int32_t SECONDS_PER_HOUR __attribute__((swift_name("SECONDS_PER_HOUR")));
@property (readonly) int32_t SECONDS_PER_MINUTE __attribute__((swift_name("SECONDS_PER_MINUTE")));
@property (readonly) int32_t SECOND_END __attribute__((swift_name("SECOND_END")));
@property (readonly) int32_t SECOND_START __attribute__((swift_name("SECOND_START")));
@property (readonly) int32_t TIMEZONE_HOUR_END __attribute__((swift_name("TIMEZONE_HOUR_END")));
@property (readonly) int32_t TIMEZONE_HOUR_START __attribute__((swift_name("TIMEZONE_HOUR_START")));
@property (readonly) int32_t TIMEZONE_MINUTE_END __attribute__((swift_name("TIMEZONE_MINUTE_END")));
@property (readonly) int32_t TIMEZONE_MINUTE_START __attribute__((swift_name("TIMEZONE_MINUTE_START")));
@property (readonly) unichar UTC_TIMEZONE __attribute__((swift_name("UTC_TIMEZONE")));
@property (readonly) int32_t YEAR_END __attribute__((swift_name("YEAR_END")));
@property (readonly) int32_t YEAR_START __attribute__((swift_name("YEAR_START")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IA5StringValueParser")))
@interface SharedKitIA5StringValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitIA5StringValueParserCompanion *companion __attribute__((swift_name("companion")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IA5StringValueParser.Companion")))
@interface SharedKitIA5StringValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIA5StringValueParserCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IntegerValueParser")))
@interface SharedKitIntegerValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitIntegerValueParserCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitLong *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitLong *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitLong *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IntegerValueParser.Companion")))
@interface SharedKitIntegerValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIntegerValueParserCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("NullValueParser")))
@interface SharedKitNullValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (SharedKitKotlinUnit *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitKotlinUnit *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitKotlinUnit *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("NumericStringValueParser")))
@interface SharedKitNumericStringValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ObjectIdentifierValueParser")))
@interface SharedKitObjectIdentifierValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitObjectIdentifierValueParserCompanion *companion __attribute__((swift_name("companion")));
- (NSArray<SharedKitInt *> *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSArray<SharedKitInt *> *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSArray<SharedKitInt *> *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ObjectIdentifierValueParser.Companion")))
@interface SharedKitObjectIdentifierValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitObjectIdentifierValueParserCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("OctetStringValueParser")))
@interface SharedKitOctetStringValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (SharedKitKotlinByteArray *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitKotlinByteArray *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitKotlinByteArray *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PrintableStringValueParser")))
@interface SharedKitPrintableStringValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("RealValueParser")))
@interface SharedKitRealValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitRealValueParserCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitDouble *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitDouble *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitDouble *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("RealValueParser.Companion")))
@interface SharedKitRealValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitRealValueParserCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("UTCTimeValueParser")))
@interface SharedKitUTCTimeValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitUTCTimeValueParserCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitKotlinx_datetimeInstant *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitKotlinx_datetimeInstant *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitKotlinx_datetimeInstant *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("UTCTimeValueParser.Companion")))
@interface SharedKitUTCTimeValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitUTCTimeValueParserCompanion *shared __attribute__((swift_name("shared")));
@property (readonly) int32_t DAY_END __attribute__((swift_name("DAY_END")));
@property (readonly) int32_t DAY_START __attribute__((swift_name("DAY_START")));
@property (readonly) int32_t HOUR_END __attribute__((swift_name("HOUR_END")));
@property (readonly) int32_t HOUR_START __attribute__((swift_name("HOUR_START")));
@property (readonly) int32_t MAX_DAY __attribute__((swift_name("MAX_DAY")));
@property (readonly) int32_t MAX_HOUR __attribute__((swift_name("MAX_HOUR")));
@property (readonly) int32_t MAX_MINUTE __attribute__((swift_name("MAX_MINUTE")));
@property (readonly) int32_t MAX_MONTH __attribute__((swift_name("MAX_MONTH")));
@property (readonly) int32_t MAX_SECOND __attribute__((swift_name("MAX_SECOND")));
@property (readonly) int32_t MINUTE_END __attribute__((swift_name("MINUTE_END")));
@property (readonly) int32_t MINUTE_START __attribute__((swift_name("MINUTE_START")));
@property (readonly) int32_t MIN_DAY __attribute__((swift_name("MIN_DAY")));
@property (readonly) int32_t MIN_HOUR __attribute__((swift_name("MIN_HOUR")));
@property (readonly) int32_t MIN_MINUTE __attribute__((swift_name("MIN_MINUTE")));
@property (readonly) int32_t MIN_MONTH __attribute__((swift_name("MIN_MONTH")));
@property (readonly) int32_t MIN_SECOND __attribute__((swift_name("MIN_SECOND")));
@property (readonly) int32_t MONTH_END __attribute__((swift_name("MONTH_END")));
@property (readonly) int32_t MONTH_START __attribute__((swift_name("MONTH_START")));
@property (readonly) unichar NEGATIVE_OFFSET __attribute__((swift_name("NEGATIVE_OFFSET")));
@property (readonly) int32_t OFFSET_FORMAT_LENGTH __attribute__((swift_name("OFFSET_FORMAT_LENGTH")));
@property (readonly) unichar POSITIVE_OFFSET __attribute__((swift_name("POSITIVE_OFFSET")));
@property (readonly) int32_t SECONDS_PER_HOUR __attribute__((swift_name("SECONDS_PER_HOUR")));
@property (readonly) int32_t SECONDS_PER_MINUTE __attribute__((swift_name("SECONDS_PER_MINUTE")));
@property (readonly) int32_t SECOND_END __attribute__((swift_name("SECOND_END")));
@property (readonly) int32_t SECOND_START __attribute__((swift_name("SECOND_START")));
@property (readonly) int32_t TIMEZONE_HOUR_END __attribute__((swift_name("TIMEZONE_HOUR_END")));
@property (readonly) int32_t TIMEZONE_HOUR_START __attribute__((swift_name("TIMEZONE_HOUR_START")));
@property (readonly) int32_t TIMEZONE_MINUTE_END __attribute__((swift_name("TIMEZONE_MINUTE_END")));
@property (readonly) int32_t TIMEZONE_MINUTE_START __attribute__((swift_name("TIMEZONE_MINUTE_START")));
@property (readonly) int32_t TIMEZONE_OFFSET_LENGTH __attribute__((swift_name("TIMEZONE_OFFSET_LENGTH")));
@property (readonly) int32_t TIMEZONE_SIGN_POSITION __attribute__((swift_name("TIMEZONE_SIGN_POSITION")));
@property (readonly) int32_t TIMEZONE_START __attribute__((swift_name("TIMEZONE_START")));
@property (readonly) int32_t UTC_FORMAT_LENGTH __attribute__((swift_name("UTC_FORMAT_LENGTH")));
@property (readonly) unichar UTC_TIMEZONE __attribute__((swift_name("UTC_TIMEZONE")));
@property (readonly) int32_t YEAR_CENTURY_1900 __attribute__((swift_name("YEAR_CENTURY_1900")));
@property (readonly) int32_t YEAR_CENTURY_2000 __attribute__((swift_name("YEAR_CENTURY_2000")));
@property (readonly) int32_t YEAR_CENTURY_THRESHOLD __attribute__((swift_name("YEAR_CENTURY_THRESHOLD")));
@property (readonly) int32_t YEAR_END __attribute__((swift_name("YEAR_END")));
@property (readonly) int32_t YEAR_MODULO __attribute__((swift_name("YEAR_MODULO")));
@property (readonly) int32_t YEAR_START __attribute__((swift_name("YEAR_START")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("UTF8StringValueParser")))
@interface SharedKitUTF8StringValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("VisibleStringValueParser")))
@interface SharedKitVisibleStringValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("BitFieldExplainer")))
@interface SharedKitBitFieldExplainer : SharedKitBase <SharedKitTLVValueValueExplainer>
- (instancetype)initWithSchema:(SharedKitBitfield_parserBitFieldSchema *)schema __attribute__((swift_name("init(schema:)"))) __attribute__((objc_designated_initializer));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ExplainConstants")))
@interface SharedKitExplainConstants : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)explainConstants __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitExplainConstants *shared __attribute__((swift_name("shared")));
@property (readonly) NSString *RFU __attribute__((swift_name("RFU")));
@end

__attribute__((swift_name("ExplainElement")))
@interface SharedKitExplainElement : SharedKitBase
- (NSString *)description __attribute__((swift_name("description()")));
- (NSString *)toStringLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("toString(lineSeparator:)")));
@end

__attribute__((swift_name("KotlinIterable")))
@protocol SharedKitKotlinIterable
@required
- (id<SharedKitKotlinIterator>)iterator __attribute__((swift_name("iterator()")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Explanation")))
@interface SharedKitExplanation : SharedKitBase <SharedKitKotlinIterable>
- (instancetype)initWithLineSeparator:(NSString *)lineSeparator elements:(NSArray<SharedKitExplainElement *> *)elements __attribute__((swift_name("init(lineSeparator:elements:)"))) __attribute__((objc_designated_initializer));
- (void)addElement:(SharedKitExplainElement *)element __attribute__((swift_name("add(element:)")));
- (id<SharedKitKotlinIterator>)iterator __attribute__((swift_name("iterator()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) NSString *lineSeparator __attribute__((swift_name("lineSeparator")));
@property (readonly) int32_t size __attribute__((swift_name("size")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Line")))
@interface SharedKitLine : SharedKitExplainElement
- (instancetype)initWithText:(NSString *)text __attribute__((swift_name("init(text:)"))) __attribute__((objc_designated_initializer));
- (SharedKitLine *)doCopyText:(NSString *)text __attribute__((swift_name("doCopy(text:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)toStringLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("toString(lineSeparator:)")));
@property (readonly) NSString *text __attribute__((swift_name("text")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("LineSeparator")))
@interface SharedKitLineSeparator : SharedKitExplainElement
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)lineSeparator __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitLineSeparator *shared __attribute__((swift_name("shared")));
- (NSString *)toStringLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("toString(lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Tab")))
@interface SharedKitTab : SharedKitExplainElement
- (instancetype)initWithTitle:(NSString *)title content:(SharedKitExplainElement *)content __attribute__((swift_name("init(title:content:)"))) __attribute__((objc_designated_initializer));
- (SharedKitTab *)doCopyTitle:(NSString *)title content:(SharedKitExplainElement *)content __attribute__((swift_name("doCopy(title:content:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)toStringLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("toString(lineSeparator:)")));
@property (readonly) SharedKitExplainElement *content __attribute__((swift_name("content")));
@property (readonly) NSString *title __attribute__((swift_name("title")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TabGroup")))
@interface SharedKitTabGroup : SharedKitExplainElement
- (instancetype)initWithTabs:(NSArray<SharedKitTab *> *)tabs __attribute__((swift_name("init(tabs:)"))) __attribute__((objc_designated_initializer));
- (SharedKitTabGroup *)doCopyTabs:(NSArray<SharedKitTab *> *)tabs __attribute__((swift_name("doCopy(tabs:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)toStringLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("toString(lineSeparator:)")));
@property (readonly) NSArray<SharedKitTab *> *tabs __attribute__((swift_name("tabs")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Table")))
@interface SharedKitTable : SharedKitExplainElement <SharedKitKotlinIterable>
- (instancetype)initWithRows:(int32_t)rows columns:(int32_t)columns __attribute__((swift_name("init(rows:columns:)"))) __attribute__((objc_designated_initializer));
@property (class, readonly, getter=companion) SharedKitTableCompanion *companion __attribute__((swift_name("companion")));
- (NSString *)getRow:(int32_t)row column:(int32_t)column __attribute__((swift_name("get(row:column:)")));
- (id<SharedKitKotlinIterator>)iterator __attribute__((swift_name("iterator()")));
- (void)setRow:(int32_t)row column:(int32_t)column value:(NSString *)value __attribute__((swift_name("set(row:column:value:)")));
- (void)setBitHeaders __attribute__((swift_name("setBitHeaders()")));
- (void)setBitRowRowIndex:(int32_t)rowIndex bits:(NSArray<NSString *> *)bits start:(int32_t)start end:(int32_t)end meaning:(NSString *)meaning __attribute__((swift_name("setBitRow(rowIndex:bits:start:end:meaning:)")));
- (NSString *)toStringLineSeparator:(NSString *)lineSeparator __attribute__((swift_name("toString(lineSeparator:)")));
@property (readonly) int32_t columns __attribute__((swift_name("columns")));
@property (readonly) SharedKitTableRow *header __attribute__((swift_name("header")));
@property (readonly) int32_t rows __attribute__((swift_name("rows")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Table.Companion")))
@interface SharedKitTableCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTableCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitTable *)createBitTableRows:(int32_t)rows __attribute__((swift_name("createBitTable(rows:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Table.Row")))
@interface SharedKitTableRow : SharedKitBase
- (instancetype)initWithCells:(NSMutableArray<NSString *> *)cells __attribute__((swift_name("init(cells:)"))) __attribute__((objc_designated_initializer));
- (SharedKitTableRow *)doCopyCells:(NSMutableArray<NSString *> *)cells __attribute__((swift_name("doCopy(cells:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) NSMutableArray<NSString *> *cells __attribute__((swift_name("cells")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmvSpecification")))
@interface SharedKitEmvSpecification : SharedKitBase <SharedKitSpecification>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)emvSpecification __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitEmvSpecification *shared __attribute__((swift_name("shared")));
- (SharedKitTLVTagContext *)contextForTagTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("contextForTag(tlvTag:)")));
- (SharedKitTLVValueValueHandler<id> *)handlerOfValueTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("handlerOfValue(tlvTag:)")));
- (BOOL)tagExistsTlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("tagExists(tlvTag:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmvTagDescription")))
@interface SharedKitEmvTagDescription : SharedKitKotlinEnum<SharedKitEmvTagDescription *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly, getter=companion) SharedKitEmvTagDescriptionCompanion *companion __attribute__((swift_name("companion")));
@property (class, readonly) SharedKitEmvTagDescription *applicationIdentifier __attribute__((swift_name("applicationIdentifier")));
@property (class, readonly) SharedKitEmvTagDescription *applicationLabel __attribute__((swift_name("applicationLabel")));
@property (class, readonly) SharedKitEmvTagDescription *applicationPreferredName __attribute__((swift_name("applicationPreferredName")));
@property (class, readonly) SharedKitEmvTagDescription *applicationPriorityIndicator __attribute__((swift_name("applicationPriorityIndicator")));
@property (class, readonly) SharedKitEmvTagDescription *pan __attribute__((swift_name("pan")));
@property (class, readonly) SharedKitEmvTagDescription *panSequenceNumber __attribute__((swift_name("panSequenceNumber")));
@property (class, readonly) SharedKitEmvTagDescription *cardExpiryDate __attribute__((swift_name("cardExpiryDate")));
@property (class, readonly) SharedKitEmvTagDescription *cardholderName __attribute__((swift_name("cardholderName")));
@property (class, readonly) SharedKitEmvTagDescription *amountAuthorised __attribute__((swift_name("amountAuthorised")));
@property (class, readonly) SharedKitEmvTagDescription *amountOther __attribute__((swift_name("amountOther")));
@property (class, readonly) SharedKitEmvTagDescription *terminalCountryCode __attribute__((swift_name("terminalCountryCode")));
@property (class, readonly) SharedKitEmvTagDescription *transactionCurrencyCode __attribute__((swift_name("transactionCurrencyCode")));
@property (class, readonly) SharedKitEmvTagDescription *transactionDate __attribute__((swift_name("transactionDate")));
@property (class, readonly) SharedKitEmvTagDescription *transactionType __attribute__((swift_name("transactionType")));
@property (class, readonly) SharedKitEmvTagDescription *transactionReferenceCurrencyCode __attribute__((swift_name("transactionReferenceCurrencyCode")));
@property (class, readonly) SharedKitEmvTagDescription *applicationCryptogram __attribute__((swift_name("applicationCryptogram")));
@property (class, readonly) SharedKitEmvTagDescription *cvmList __attribute__((swift_name("cvmList")));
@property (class, readonly) SharedKitEmvTagDescription *cryptogramInformationData __attribute__((swift_name("cryptogramInformationData")));
@property (class, readonly) SharedKitEmvTagDescription *issuerApplicationData __attribute__((swift_name("issuerApplicationData")));
@property (class, readonly) SharedKitEmvTagDescription *terminalVerificationResults __attribute__((swift_name("terminalVerificationResults")));
@property (class, readonly) SharedKitEmvTagDescription *cardholderVerificationMethodResults __attribute__((swift_name("cardholderVerificationMethodResults")));
@property (class, readonly) SharedKitEmvTagDescription *terminalType __attribute__((swift_name("terminalType")));
@property (class, readonly) SharedKitEmvTagDescription *formFactor __attribute__((swift_name("formFactor")));
@property (class, readonly) SharedKitEmvTagDescription *terminalCapabilities __attribute__((swift_name("terminalCapabilities")));
@property (class, readonly) SharedKitEmvTagDescription *additionalTerminalCapabilities __attribute__((swift_name("additionalTerminalCapabilities")));
@property (class, readonly) SharedKitEmvTagDescription *applicationInterchangeProfile __attribute__((swift_name("applicationInterchangeProfile")));
@property (class, readonly) SharedKitEmvTagDescription *transactionStatusInformation __attribute__((swift_name("transactionStatusInformation")));
@property (class, readonly) SharedKitEmvTagDescription *cardTransactionQualifiers __attribute__((swift_name("cardTransactionQualifiers")));
@property (class, readonly) SharedKitEmvTagDescription *applicationFileLocator __attribute__((swift_name("applicationFileLocator")));
@property (class, readonly) SharedKitEmvTagDescription *processingOptionsDataObjectList __attribute__((swift_name("processingOptionsDataObjectList")));
@property (class, readonly) SharedKitEmvTagDescription *applicationTransactionCounter __attribute__((swift_name("applicationTransactionCounter")));
@property (class, readonly) SharedKitEmvTagDescription *applicationTemplate __attribute__((swift_name("applicationTemplate")));
@property (class, readonly) SharedKitEmvTagDescription *applicationUsageControl __attribute__((swift_name("applicationUsageControl")));
@property (class, readonly) SharedKitEmvTagDescription *applicationVersionNumber __attribute__((swift_name("applicationVersionNumber")));
@property (class, readonly) SharedKitEmvTagDescription *applicationEffectiveDate __attribute__((swift_name("applicationEffectiveDate")));
@property (class, readonly) SharedKitEmvTagDescription *applicationDiscretionaryData __attribute__((swift_name("applicationDiscretionaryData")));
@property (class, readonly) SharedKitEmvTagDescription *applicationLifeCycleData __attribute__((swift_name("applicationLifeCycleData")));
@property (class, readonly) SharedKitEmvTagDescription *applicationCurrencyCode __attribute__((swift_name("applicationCurrencyCode")));
@property (class, readonly) SharedKitEmvTagDescription *applicationCurrencyExponent __attribute__((swift_name("applicationCurrencyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *applicationReferenceCurrency __attribute__((swift_name("applicationReferenceCurrency")));
@property (class, readonly) SharedKitEmvTagDescription *applicationReferenceCurrencyExponent __attribute__((swift_name("applicationReferenceCurrencyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *applicationPreferredNameExtended __attribute__((swift_name("applicationPreferredNameExtended")));
@property (class, readonly) SharedKitEmvTagDescription *lowerConsecutiveOfflineLimit __attribute__((swift_name("lowerConsecutiveOfflineLimit")));
@property (class, readonly) SharedKitEmvTagDescription *languagePreference __attribute__((swift_name("languagePreference")));
@property (class, readonly) SharedKitEmvTagDescription *track2EquivalentData __attribute__((swift_name("track2EquivalentData")));
@property (class, readonly) SharedKitEmvTagDescription *track1DiscretionaryData __attribute__((swift_name("track1DiscretionaryData")));
@property (class, readonly) SharedKitEmvTagDescription *track2DiscretionaryData __attribute__((swift_name("track2DiscretionaryData")));
@property (class, readonly) SharedKitEmvTagDescription *track1Data __attribute__((swift_name("track1Data")));
@property (class, readonly) SharedKitEmvTagDescription *track3Data __attribute__((swift_name("track3Data")));
@property (class, readonly) SharedKitEmvTagDescription *cardholderNameExtended __attribute__((swift_name("cardholderNameExtended")));
@property (class, readonly) SharedKitEmvTagDescription *amountReferenceCurrency __attribute__((swift_name("amountReferenceCurrency")));
@property (class, readonly) SharedKitEmvTagDescription *transactionCurrencyExponent __attribute__((swift_name("transactionCurrencyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *transactionTime __attribute__((swift_name("transactionTime")));
@property (class, readonly) SharedKitEmvTagDescription *transactionCategoryCode __attribute__((swift_name("transactionCategoryCode")));
@property (class, readonly) SharedKitEmvTagDescription *merchantNameAndLocation __attribute__((swift_name("merchantNameAndLocation")));
@property (class, readonly) SharedKitEmvTagDescription *unpredictableNumber __attribute__((swift_name("unpredictableNumber")));
@property (class, readonly) SharedKitEmvTagDescription *issuerAuthenticationData __attribute__((swift_name("issuerAuthenticationData")));
@property (class, readonly) SharedKitEmvTagDescription *signedDynamicApplicationData __attribute__((swift_name("signedDynamicApplicationData")));
@property (class, readonly) SharedKitEmvTagDescription *iccDynamicNumber __attribute__((swift_name("iccDynamicNumber")));
@property (class, readonly) SharedKitEmvTagDescription *terminalIdentification __attribute__((swift_name("terminalIdentification")));
@property (class, readonly) SharedKitEmvTagDescription *terminalSerialNumber __attribute__((swift_name("terminalSerialNumber")));
@property (class, readonly) SharedKitEmvTagDescription *terminalTransactionQualifiers __attribute__((swift_name("terminalTransactionQualifiers")));
@property (class, readonly) SharedKitEmvTagDescription *merchantCategoryCode __attribute__((swift_name("merchantCategoryCode")));
@property (class, readonly) SharedKitEmvTagDescription *merchantCity __attribute__((swift_name("merchantCity")));
@property (class, readonly) SharedKitEmvTagDescription *merchantPostalCode __attribute__((swift_name("merchantPostalCode")));
@property (class, readonly) SharedKitEmvTagDescription *merchantIdentifier __attribute__((swift_name("merchantIdentifier")));
@property (class, readonly) SharedKitEmvTagDescription *issuerCountryCode __attribute__((swift_name("issuerCountryCode")));
@property (class, readonly) SharedKitEmvTagDescription *issuerCountryCodeAlpha2 __attribute__((swift_name("issuerCountryCodeAlpha2")));
@property (class, readonly) SharedKitEmvTagDescription *issuerCountryCodeAlpha3 __attribute__((swift_name("issuerCountryCodeAlpha3")));
@property (class, readonly) SharedKitEmvTagDescription *issuerActionCodeDenial __attribute__((swift_name("issuerActionCodeDenial")));
@property (class, readonly) SharedKitEmvTagDescription *issuerActionCodeOnline __attribute__((swift_name("issuerActionCodeOnline")));
@property (class, readonly) SharedKitEmvTagDescription *issuerActionCodeDefault __attribute__((swift_name("issuerActionCodeDefault")));
@property (class, readonly) SharedKitEmvTagDescription *issuerScriptTemplate __attribute__((swift_name("issuerScriptTemplate")));
@property (class, readonly) SharedKitEmvTagDescription *issuerScriptResults __attribute__((swift_name("issuerScriptResults")));
@property (class, readonly) SharedKitEmvTagDescription *responseMessageTemplateFormat1 __attribute__((swift_name("responseMessageTemplateFormat1")));
@property (class, readonly) SharedKitEmvTagDescription *responseMessageTemplateFormat2 __attribute__((swift_name("responseMessageTemplateFormat2")));
@property (class, readonly) SharedKitEmvTagDescription *fciIssuerDiscretionaryData __attribute__((swift_name("fciIssuerDiscretionaryData")));
@property (class, readonly) SharedKitEmvTagDescription *issuerIdentificationNumber __attribute__((swift_name("issuerIdentificationNumber")));
@property (class, readonly) SharedKitEmvTagDescription *serviceCode __attribute__((swift_name("serviceCode")));
@property (class, readonly) SharedKitEmvTagDescription *issuerUrl __attribute__((swift_name("issuerUrl")));
@property (class, readonly) SharedKitEmvTagDescription *internationalBankAccountNumber __attribute__((swift_name("internationalBankAccountNumber")));
@property (class, readonly) SharedKitEmvTagDescription *bankIdentifierCode __attribute__((swift_name("bankIdentifierCode")));
@property (class, readonly) SharedKitEmvTagDescription *fciTemplate __attribute__((swift_name("fciTemplate")));
@property (class, readonly) SharedKitEmvTagDescription *emvProprietaryTemplate __attribute__((swift_name("emvProprietaryTemplate")));
@property (class, readonly) SharedKitEmvTagDescription *issuerScriptTemplate1 __attribute__((swift_name("issuerScriptTemplate1")));
@property (class, readonly) SharedKitEmvTagDescription *directoryDiscretionaryTemplate __attribute__((swift_name("directoryDiscretionaryTemplate")));
@property (class, readonly) SharedKitEmvTagDescription *amountAuthorisedBinary __attribute__((swift_name("amountAuthorisedBinary")));
@property (class, readonly) SharedKitEmvTagDescription *commandTemplate __attribute__((swift_name("commandTemplate")));
@property (class, readonly) SharedKitEmvTagDescription *dedicatedFileName __attribute__((swift_name("dedicatedFileName")));
@property (class, readonly) SharedKitEmvTagDescription *issuerScriptCommand __attribute__((swift_name("issuerScriptCommand")));
@property (class, readonly) SharedKitEmvTagDescription *shortFileIdentifier __attribute__((swift_name("shortFileIdentifier")));
@property (class, readonly) SharedKitEmvTagDescription *authorisationCode __attribute__((swift_name("authorisationCode")));
@property (class, readonly) SharedKitEmvTagDescription *authorisationResponseCode __attribute__((swift_name("authorisationResponseCode")));
@property (class, readonly) SharedKitEmvTagDescription *cdol1 __attribute__((swift_name("cdol1")));
@property (class, readonly) SharedKitEmvTagDescription *cdol2 __attribute__((swift_name("cdol2")));
@property (class, readonly) SharedKitEmvTagDescription *caPublicKeyIndexIcc __attribute__((swift_name("caPublicKeyIndexIcc")));
@property (class, readonly) SharedKitEmvTagDescription *issuerPublicKeyCertificate __attribute__((swift_name("issuerPublicKeyCertificate")));
@property (class, readonly) SharedKitEmvTagDescription *issuerPublicKeyRemainder __attribute__((swift_name("issuerPublicKeyRemainder")));
@property (class, readonly) SharedKitEmvTagDescription *signedStaticApplicationData __attribute__((swift_name("signedStaticApplicationData")));
@property (class, readonly) SharedKitEmvTagDescription *tdol __attribute__((swift_name("tdol")));
@property (class, readonly) SharedKitEmvTagDescription *tcHashValue __attribute__((swift_name("tcHashValue")));
@property (class, readonly) SharedKitEmvTagDescription *transactionPinData __attribute__((swift_name("transactionPinData")));
@property (class, readonly) SharedKitEmvTagDescription *ddfName __attribute__((swift_name("ddfName")));
@property (class, readonly) SharedKitEmvTagDescription *acquirerIdentifier __attribute__((swift_name("acquirerIdentifier")));
@property (class, readonly) SharedKitEmvTagDescription *amountOtherBinary __attribute__((swift_name("amountOtherBinary")));
@property (class, readonly) SharedKitEmvTagDescription *aidTerminal __attribute__((swift_name("aidTerminal")));
@property (class, readonly) SharedKitEmvTagDescription *applicationVersionNumberTerminal __attribute__((swift_name("applicationVersionNumberTerminal")));
@property (class, readonly) SharedKitEmvTagDescription *issuerCodeTableIndex __attribute__((swift_name("issuerCodeTableIndex")));
@property (class, readonly) SharedKitEmvTagDescription *pinTryCounter __attribute__((swift_name("pinTryCounter")));
@property (class, readonly) SharedKitEmvTagDescription *issuerScriptIdentifier __attribute__((swift_name("issuerScriptIdentifier")));
@property (class, readonly) SharedKitEmvTagDescription *terminalFloorLimit __attribute__((swift_name("terminalFloorLimit")));
@property (class, readonly) SharedKitEmvTagDescription *terminalRiskManagementData __attribute__((swift_name("terminalRiskManagementData")));
@property (class, readonly) SharedKitEmvTagDescription *caPublicKeyIndexTerminal __attribute__((swift_name("caPublicKeyIndexTerminal")));
@property (class, readonly) SharedKitEmvTagDescription *upperConsecutiveOfflineLimit __attribute__((swift_name("upperConsecutiveOfflineLimit")));
@property (class, readonly) SharedKitEmvTagDescription *iccPinEnciphermentPublicKeyCertificate __attribute__((swift_name("iccPinEnciphermentPublicKeyCertificate")));
@property (class, readonly) SharedKitEmvTagDescription *iccPinEnciphermentPublicKeyExponent __attribute__((swift_name("iccPinEnciphermentPublicKeyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *iccPinEnciphermentPublicKeyRemainder __attribute__((swift_name("iccPinEnciphermentPublicKeyRemainder")));
@property (class, readonly) SharedKitEmvTagDescription *issuerPublicKeyExponent __attribute__((swift_name("issuerPublicKeyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *posEntryMode __attribute__((swift_name("posEntryMode")));
@property (class, readonly) SharedKitEmvTagDescription *transactionReferenceCurrencyExponent __attribute__((swift_name("transactionReferenceCurrencyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *transactionSequenceCounter __attribute__((swift_name("transactionSequenceCounter")));
@property (class, readonly) SharedKitEmvTagDescription *dataAuthenticationCode __attribute__((swift_name("dataAuthenticationCode")));
@property (class, readonly) SharedKitEmvTagDescription *iccPublicKeyCertificate __attribute__((swift_name("iccPublicKeyCertificate")));
@property (class, readonly) SharedKitEmvTagDescription *iccPublicKeyExponent __attribute__((swift_name("iccPublicKeyExponent")));
@property (class, readonly) SharedKitEmvTagDescription *iccPublicKeyRemainder __attribute__((swift_name("iccPublicKeyRemainder")));
@property (class, readonly) SharedKitEmvTagDescription *ddol __attribute__((swift_name("ddol")));
@property (class, readonly) SharedKitEmvTagDescription *staticDataAuthenticationTagList __attribute__((swift_name("staticDataAuthenticationTagList")));
@property (class, readonly) SharedKitEmvTagDescription *logEntry __attribute__((swift_name("logEntry")));
@property (class, readonly) SharedKitEmvTagDescription *fciProprietaryTemplate __attribute__((swift_name("fciProprietaryTemplate")));
+ (SharedKitKotlinArray<SharedKitEmvTagDescription *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitEmvTagDescription *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) SharedKitFormat *format __attribute__((swift_name("format")));
@property (readonly) SharedKitKotlinIntRange * _Nullable lengthRange __attribute__((swift_name("lengthRange")));
@property (readonly) SharedKitSource *source __attribute__((swift_name("source")));
@property (readonly) int32_t tag __attribute__((swift_name("tag")));
@property (readonly) NSString *tagName __attribute__((swift_name("tagName")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmvTagDescription.Companion")))
@interface SharedKitEmvTagDescriptionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitEmvTagDescriptionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitEmvTagDescription * _Nullable)findByTagTag:(int32_t)tag __attribute__((swift_name("findByTag(tag:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Format")))
@interface SharedKitFormat : SharedKitKotlinEnum<SharedKitFormat *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SharedKitFormat *numeric __attribute__((swift_name("numeric")));
@property (class, readonly) SharedKitFormat *numericNumber __attribute__((swift_name("numericNumber")));
@property (class, readonly) SharedKitFormat *alphanumeric __attribute__((swift_name("alphanumeric")));
@property (class, readonly) SharedKitFormat *alphanumericSpecial __attribute__((swift_name("alphanumericSpecial")));
@property (class, readonly) SharedKitFormat *binary __attribute__((swift_name("binary")));
+ (SharedKitKotlinArray<SharedKitFormat *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitFormat *> *entries __attribute__((swift_name("entries")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Source")))
@interface SharedKitSource : SharedKitKotlinEnum<SharedKitSource *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SharedKitSource *terminal __attribute__((swift_name("terminal")));
@property (class, readonly) SharedKitSource *icc __attribute__((swift_name("icc")));
@property (class, readonly) SharedKitSource *issuer __attribute__((swift_name("issuer")));
+ (SharedKitKotlinArray<SharedKitSource *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitSource *> *entries __attribute__((swift_name("entries")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AdditionalTerminalCapabilities")))
@interface SharedKitAdditionalTerminalCapabilities : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)additionalTerminalCapabilities __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitAdditionalTerminalCapabilities *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((swift_name("CurrencyCode")))
@interface SharedKitCurrencyCode : SharedKitBase <SharedKitTLVValueValueExplainer>
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer));
@property (class, readonly, getter=companion) SharedKitCurrencyCodeCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainValue:(SharedKitLong *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ApplicationCurrencyCode")))
@interface SharedKitApplicationCurrencyCode : SharedKitCurrencyCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)applicationCurrencyCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitApplicationCurrencyCode *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ApplicationInterchangeProfile")))
@interface SharedKitApplicationInterchangeProfile : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)applicationInterchangeProfile __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitApplicationInterchangeProfile *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ApplicationLifeCycleData")))
@interface SharedKitApplicationLifeCycleData : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)applicationLifeCycleData __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitApplicationLifeCycleData *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ApplicationPriorityIndicator")))
@interface SharedKitApplicationPriorityIndicator : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)applicationPriorityIndicator __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitApplicationPriorityIndicator *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ApplicationReferenceCurrency")))
@interface SharedKitApplicationReferenceCurrency : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)applicationReferenceCurrency __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitApplicationReferenceCurrency *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ApplicationUsageControl")))
@interface SharedKitApplicationUsageControl : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)applicationUsageControl __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitApplicationUsageControl *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AuthorisationResponseCode")))
@interface SharedKitAuthorisationResponseCode : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)authorisationResponseCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitAuthorisationResponseCode *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
- (NSString *)parseValue:(NSString *)value __attribute__((swift_name("parse(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CVMResults")))
@interface SharedKitCVMResults : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)cVMResults __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCVMResults *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CardTransactionQualifiers")))
@interface SharedKitCardTransactionQualifiers : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)cardTransactionQualifiers __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCardTransactionQualifiers *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CryptogramInformationData")))
@interface SharedKitCryptogramInformationData : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)cryptogramInformationData __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCryptogramInformationData *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CvmList")))
@interface SharedKitCvmList : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)cvmList __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCvmList *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("FormFactor")))
@interface SharedKitFormFactor : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)formFactor __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitFormFactor *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((swift_name("ActionCode")))
@interface SharedKitActionCode : SharedKitBase <SharedKitTLVValueValueExplainer>
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer));
@property (class, readonly, getter=companion) SharedKitActionCodeCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerActionCodeDefault")))
@interface SharedKitIssuerActionCodeDefault : SharedKitActionCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)issuerActionCodeDefault __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerActionCodeDefault *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerActionCodeDenial")))
@interface SharedKitIssuerActionCodeDenial : SharedKitActionCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)issuerActionCodeDenial __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerActionCodeDenial *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerActionCodeOnline")))
@interface SharedKitIssuerActionCodeOnline : SharedKitActionCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)issuerActionCodeOnline __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerActionCodeOnline *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerApplicationData")))
@interface SharedKitIssuerApplicationData : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)issuerApplicationData __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerApplicationData *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((swift_name("CountryCode")))
@interface SharedKitCountryCode : SharedKitBase <SharedKitTLVValueValueExplainer>
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer));
@property (class, readonly, getter=companion) SharedKitCountryCodeCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitExplanation *)explainValue:(SharedKitLong *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerCountryCode")))
@interface SharedKitIssuerCountryCode : SharedKitCountryCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)issuerCountryCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerCountryCode *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerCountryCodeAlpha2")))
@interface SharedKitIssuerCountryCodeAlpha2 : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)issuerCountryCodeAlpha2 __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerCountryCodeAlpha2 *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("IssuerCountryCodeAlpha3")))
@interface SharedKitIssuerCountryCodeAlpha3 : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)issuerCountryCodeAlpha3 __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitIssuerCountryCodeAlpha3 *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("LanguagePreference")))
@interface SharedKitLanguagePreference : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)languagePreference __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitLanguagePreference *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MerchantCategoryCode")))
@interface SharedKitMerchantCategoryCode : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)merchantCategoryCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitMerchantCategoryCode *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitLong *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PosEntryMode")))
@interface SharedKitPosEntryMode : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)posEntryMode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitPosEntryMode *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
- (NSString *)parseValue:(NSString *)value __attribute__((swift_name("parse(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ServiceCode")))
@interface SharedKitServiceCode : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)serviceCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitServiceCode *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
- (NSString *)parseDigit1Digit:(unichar)digit __attribute__((swift_name("parseDigit1(digit:)")));
- (NSString *)parseDigit2Digit:(unichar)digit __attribute__((swift_name("parseDigit2(digit:)")));
- (NSString *)parseDigit3Digit:(unichar)digit __attribute__((swift_name("parseDigit3(digit:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TVR")))
@interface SharedKitTVR : SharedKitActionCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)tVR __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTVR *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TerminalCapabilities")))
@interface SharedKitTerminalCapabilities : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)terminalCapabilities __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTerminalCapabilities *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TerminalCountryCode")))
@interface SharedKitTerminalCountryCode : SharedKitCountryCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)terminalCountryCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTerminalCountryCode *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TerminalTransactionQualifiers")))
@interface SharedKitTerminalTransactionQualifiers : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)terminalTransactionQualifiers __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTerminalTransactionQualifiers *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TerminalType")))
@interface SharedKitTerminalType : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)terminalType __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTerminalType *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TransactionCurrencyCode")))
@interface SharedKitTransactionCurrencyCode : SharedKitCurrencyCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)transactionCurrencyCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTransactionCurrencyCode *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TransactionReferenceCurrencyCode")))
@interface SharedKitTransactionReferenceCurrencyCode : SharedKitCurrencyCode
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithTagDescription:(SharedKitEmvTagDescription *)tagDescription __attribute__((swift_name("init(tagDescription:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
+ (instancetype)transactionReferenceCurrencyCode __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTransactionReferenceCurrencyCode *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TransactionStatusInformation")))
@interface SharedKitTransactionStatusInformation : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)transactionStatusInformation __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTransactionStatusInformation *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(SharedKitKotlinByteArray *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("TransactionType")))
@interface SharedKitTransactionType : SharedKitBase <SharedKitTLVValueValueExplainer>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)transactionType __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitTransactionType *shared __attribute__((swift_name("shared")));
- (SharedKitExplanation *)explainValue:(NSString *)value lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("explain(value:lineSeparator:)")));
- (NSString *)parseValue:(NSString *)value __attribute__((swift_name("parse(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ActionCode.Companion")))
@interface SharedKitActionCodeCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitActionCodeCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CountryCode.Companion")))
@interface SharedKitCountryCodeCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCountryCodeCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CurrencyCode.Companion")))
@interface SharedKitCurrencyCodeCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCurrencyCodeCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AlphanumericSpecialValueParser")))
@interface SharedKitAlphanumericSpecialValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AlphanumericValueParser")))
@interface SharedKitAlphanumericValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("BinaryValueParser")))
@interface SharedKitBinaryValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (SharedKitKotlinByteArray *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitKotlinByteArray *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitKotlinByteArray *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("NumericNumberValueParser")))
@interface SharedKitNumericNumberValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitNumericNumberValueParserCompanion *companion __attribute__((swift_name("companion")));
- (SharedKitLong *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(SharedKitLong *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(SharedKitLong *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("NumericNumberValueParser.Companion")))
@interface SharedKitNumericNumberValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitNumericNumberValueParserCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("NumericValueParser")))
@interface SharedKitNumericValueParser : SharedKitBase <SharedKitTLVValueValueParser>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (class, readonly, getter=companion) SharedKitNumericValueParserCompanion *companion __attribute__((swift_name("companion")));
- (NSString *)bytesToValueBytes:(SharedKitKotlinByteArray *)bytes __attribute__((swift_name("bytesToValue(bytes:)")));
- (SharedKitKotlinByteArray *)valueToBytesValue:(NSString *)value __attribute__((swift_name("valueToBytes(value:)")));
- (NSString *)valueToStringValue:(NSString *)value __attribute__((swift_name("valueToString(value:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("NumericValueParser.Companion")))
@interface SharedKitNumericValueParserCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitNumericValueParserCompanion *shared __attribute__((swift_name("shared")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CountryCodeDescription")))
@interface SharedKitCountryCodeDescription : SharedKitKotlinEnum<SharedKitCountryCodeDescription *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly, getter=companion) SharedKitCountryCodeDescriptionCompanion *companion __attribute__((swift_name("companion")));
@property (class, readonly) SharedKitCountryCodeDescription *ax __attribute__((swift_name("ax")));
@property (class, readonly) SharedKitCountryCodeDescription *af __attribute__((swift_name("af")));
@property (class, readonly) SharedKitCountryCodeDescription *al __attribute__((swift_name("al")));
@property (class, readonly) SharedKitCountryCodeDescription *dz __attribute__((swift_name("dz")));
@property (class, readonly) SharedKitCountryCodeDescription *as __attribute__((swift_name("as")));
@property (class, readonly) SharedKitCountryCodeDescription *ad __attribute__((swift_name("ad")));
@property (class, readonly) SharedKitCountryCodeDescription *ao __attribute__((swift_name("ao")));
@property (class, readonly) SharedKitCountryCodeDescription *ai __attribute__((swift_name("ai")));
@property (class, readonly) SharedKitCountryCodeDescription *aq __attribute__((swift_name("aq")));
@property (class, readonly) SharedKitCountryCodeDescription *ag __attribute__((swift_name("ag")));
@property (class, readonly) SharedKitCountryCodeDescription *ar __attribute__((swift_name("ar")));
@property (class, readonly) SharedKitCountryCodeDescription *am __attribute__((swift_name("am")));
@property (class, readonly) SharedKitCountryCodeDescription *aw __attribute__((swift_name("aw")));
@property (class, readonly) SharedKitCountryCodeDescription *au __attribute__((swift_name("au")));
@property (class, readonly) SharedKitCountryCodeDescription *at __attribute__((swift_name("at")));
@property (class, readonly) SharedKitCountryCodeDescription *az __attribute__((swift_name("az")));
@property (class, readonly) SharedKitCountryCodeDescription *bs __attribute__((swift_name("bs")));
@property (class, readonly) SharedKitCountryCodeDescription *bh __attribute__((swift_name("bh")));
@property (class, readonly) SharedKitCountryCodeDescription *bd __attribute__((swift_name("bd")));
@property (class, readonly) SharedKitCountryCodeDescription *bb __attribute__((swift_name("bb")));
@property (class, readonly) SharedKitCountryCodeDescription *by __attribute__((swift_name("by")));
@property (class, readonly) SharedKitCountryCodeDescription *be __attribute__((swift_name("be")));
@property (class, readonly) SharedKitCountryCodeDescription *bz __attribute__((swift_name("bz")));
@property (class, readonly) SharedKitCountryCodeDescription *bj __attribute__((swift_name("bj")));
@property (class, readonly) SharedKitCountryCodeDescription *bm __attribute__((swift_name("bm")));
@property (class, readonly) SharedKitCountryCodeDescription *bt __attribute__((swift_name("bt")));
@property (class, readonly) SharedKitCountryCodeDescription *bo __attribute__((swift_name("bo")));
@property (class, readonly) SharedKitCountryCodeDescription *ba __attribute__((swift_name("ba")));
@property (class, readonly) SharedKitCountryCodeDescription *bw __attribute__((swift_name("bw")));
@property (class, readonly) SharedKitCountryCodeDescription *bv __attribute__((swift_name("bv")));
@property (class, readonly) SharedKitCountryCodeDescription *br __attribute__((swift_name("br")));
@property (class, readonly) SharedKitCountryCodeDescription *io __attribute__((swift_name("io")));
@property (class, readonly) SharedKitCountryCodeDescription *bn __attribute__((swift_name("bn")));
@property (class, readonly) SharedKitCountryCodeDescription *bg __attribute__((swift_name("bg")));
@property (class, readonly) SharedKitCountryCodeDescription *bf __attribute__((swift_name("bf")));
@property (class, readonly) SharedKitCountryCodeDescription *bi __attribute__((swift_name("bi")));
@property (class, readonly) SharedKitCountryCodeDescription *kh __attribute__((swift_name("kh")));
@property (class, readonly) SharedKitCountryCodeDescription *cm __attribute__((swift_name("cm")));
@property (class, readonly) SharedKitCountryCodeDescription *ca __attribute__((swift_name("ca")));
@property (class, readonly) SharedKitCountryCodeDescription *cv __attribute__((swift_name("cv")));
@property (class, readonly) SharedKitCountryCodeDescription *ky __attribute__((swift_name("ky")));
@property (class, readonly) SharedKitCountryCodeDescription *cf __attribute__((swift_name("cf")));
@property (class, readonly) SharedKitCountryCodeDescription *td __attribute__((swift_name("td")));
@property (class, readonly) SharedKitCountryCodeDescription *cl __attribute__((swift_name("cl")));
@property (class, readonly) SharedKitCountryCodeDescription *cn __attribute__((swift_name("cn")));
@property (class, readonly) SharedKitCountryCodeDescription *cx __attribute__((swift_name("cx")));
@property (class, readonly) SharedKitCountryCodeDescription *cc __attribute__((swift_name("cc")));
@property (class, readonly) SharedKitCountryCodeDescription *co __attribute__((swift_name("co")));
@property (class, readonly) SharedKitCountryCodeDescription *km __attribute__((swift_name("km")));
@property (class, readonly) SharedKitCountryCodeDescription *ck __attribute__((swift_name("ck")));
@property (class, readonly) SharedKitCountryCodeDescription *cr __attribute__((swift_name("cr")));
@property (class, readonly) SharedKitCountryCodeDescription *ci __attribute__((swift_name("ci")));
@property (class, readonly) SharedKitCountryCodeDescription *cu __attribute__((swift_name("cu")));
@property (class, readonly) SharedKitCountryCodeDescription *cy __attribute__((swift_name("cy")));
@property (class, readonly) SharedKitCountryCodeDescription *cz __attribute__((swift_name("cz")));
@property (class, readonly) SharedKitCountryCodeDescription *dk __attribute__((swift_name("dk")));
@property (class, readonly) SharedKitCountryCodeDescription *dj __attribute__((swift_name("dj")));
@property (class, readonly) SharedKitCountryCodeDescription *dm __attribute__((swift_name("dm")));
@property (class, readonly) SharedKitCountryCodeDescription *do_ __attribute__((swift_name("do_")));
@property (class, readonly) SharedKitCountryCodeDescription *ec __attribute__((swift_name("ec")));
@property (class, readonly) SharedKitCountryCodeDescription *eg __attribute__((swift_name("eg")));
@property (class, readonly) SharedKitCountryCodeDescription *sv __attribute__((swift_name("sv")));
@property (class, readonly) SharedKitCountryCodeDescription *gq __attribute__((swift_name("gq")));
@property (class, readonly) SharedKitCountryCodeDescription *er __attribute__((swift_name("er")));
@property (class, readonly) SharedKitCountryCodeDescription *ee __attribute__((swift_name("ee")));
@property (class, readonly) SharedKitCountryCodeDescription *et __attribute__((swift_name("et")));
@property (class, readonly) SharedKitCountryCodeDescription *fk __attribute__((swift_name("fk")));
@property (class, readonly) SharedKitCountryCodeDescription *fo __attribute__((swift_name("fo")));
@property (class, readonly) SharedKitCountryCodeDescription *fj __attribute__((swift_name("fj")));
@property (class, readonly) SharedKitCountryCodeDescription *fi __attribute__((swift_name("fi")));
@property (class, readonly) SharedKitCountryCodeDescription *fr __attribute__((swift_name("fr")));
@property (class, readonly) SharedKitCountryCodeDescription *gf __attribute__((swift_name("gf")));
@property (class, readonly) SharedKitCountryCodeDescription *pf __attribute__((swift_name("pf")));
@property (class, readonly) SharedKitCountryCodeDescription *tf __attribute__((swift_name("tf")));
@property (class, readonly) SharedKitCountryCodeDescription *ga __attribute__((swift_name("ga")));
@property (class, readonly) SharedKitCountryCodeDescription *gm __attribute__((swift_name("gm")));
@property (class, readonly) SharedKitCountryCodeDescription *ge __attribute__((swift_name("ge")));
@property (class, readonly) SharedKitCountryCodeDescription *de __attribute__((swift_name("de")));
@property (class, readonly) SharedKitCountryCodeDescription *gh __attribute__((swift_name("gh")));
@property (class, readonly) SharedKitCountryCodeDescription *gi __attribute__((swift_name("gi")));
@property (class, readonly) SharedKitCountryCodeDescription *gr __attribute__((swift_name("gr")));
@property (class, readonly) SharedKitCountryCodeDescription *gl __attribute__((swift_name("gl")));
@property (class, readonly) SharedKitCountryCodeDescription *gd __attribute__((swift_name("gd")));
@property (class, readonly) SharedKitCountryCodeDescription *gp __attribute__((swift_name("gp")));
@property (class, readonly) SharedKitCountryCodeDescription *gu __attribute__((swift_name("gu")));
@property (class, readonly) SharedKitCountryCodeDescription *gt __attribute__((swift_name("gt")));
@property (class, readonly) SharedKitCountryCodeDescription *gn __attribute__((swift_name("gn")));
@property (class, readonly) SharedKitCountryCodeDescription *gw __attribute__((swift_name("gw")));
@property (class, readonly) SharedKitCountryCodeDescription *gy __attribute__((swift_name("gy")));
@property (class, readonly) SharedKitCountryCodeDescription *ht __attribute__((swift_name("ht")));
@property (class, readonly) SharedKitCountryCodeDescription *hm __attribute__((swift_name("hm")));
@property (class, readonly) SharedKitCountryCodeDescription *hn __attribute__((swift_name("hn")));
@property (class, readonly) SharedKitCountryCodeDescription *hk __attribute__((swift_name("hk")));
@property (class, readonly) SharedKitCountryCodeDescription *hu __attribute__((swift_name("hu")));
@property (class, readonly) SharedKitCountryCodeDescription *is __attribute__((swift_name("is")));
@property (class, readonly) SharedKitCountryCodeDescription *in __attribute__((swift_name("in")));
@property (class, readonly) SharedKitCountryCodeDescription *id __attribute__((swift_name("id")));
@property (class, readonly) SharedKitCountryCodeDescription *ir __attribute__((swift_name("ir")));
@property (class, readonly) SharedKitCountryCodeDescription *iq __attribute__((swift_name("iq")));
@property (class, readonly) SharedKitCountryCodeDescription *ie __attribute__((swift_name("ie")));
@property (class, readonly) SharedKitCountryCodeDescription *it __attribute__((swift_name("it")));
@property (class, readonly) SharedKitCountryCodeDescription *jm __attribute__((swift_name("jm")));
@property (class, readonly) SharedKitCountryCodeDescription *jp __attribute__((swift_name("jp")));
@property (class, readonly) SharedKitCountryCodeDescription *jo __attribute__((swift_name("jo")));
@property (class, readonly) SharedKitCountryCodeDescription *kz __attribute__((swift_name("kz")));
@property (class, readonly) SharedKitCountryCodeDescription *ke __attribute__((swift_name("ke")));
@property (class, readonly) SharedKitCountryCodeDescription *ki __attribute__((swift_name("ki")));
@property (class, readonly) SharedKitCountryCodeDescription *kp __attribute__((swift_name("kp")));
@property (class, readonly) SharedKitCountryCodeDescription *kr __attribute__((swift_name("kr")));
@property (class, readonly) SharedKitCountryCodeDescription *kw __attribute__((swift_name("kw")));
@property (class, readonly) SharedKitCountryCodeDescription *kg __attribute__((swift_name("kg")));
@property (class, readonly) SharedKitCountryCodeDescription *la __attribute__((swift_name("la")));
@property (class, readonly) SharedKitCountryCodeDescription *lv __attribute__((swift_name("lv")));
@property (class, readonly) SharedKitCountryCodeDescription *lb __attribute__((swift_name("lb")));
@property (class, readonly) SharedKitCountryCodeDescription *ls __attribute__((swift_name("ls")));
@property (class, readonly) SharedKitCountryCodeDescription *lr __attribute__((swift_name("lr")));
@property (class, readonly) SharedKitCountryCodeDescription *ly __attribute__((swift_name("ly")));
@property (class, readonly) SharedKitCountryCodeDescription *li __attribute__((swift_name("li")));
@property (class, readonly) SharedKitCountryCodeDescription *lt __attribute__((swift_name("lt")));
@property (class, readonly) SharedKitCountryCodeDescription *lu __attribute__((swift_name("lu")));
@property (class, readonly) SharedKitCountryCodeDescription *mo __attribute__((swift_name("mo")));
@property (class, readonly) SharedKitCountryCodeDescription *mk __attribute__((swift_name("mk")));
@property (class, readonly) SharedKitCountryCodeDescription *mg __attribute__((swift_name("mg")));
@property (class, readonly) SharedKitCountryCodeDescription *mw __attribute__((swift_name("mw")));
@property (class, readonly) SharedKitCountryCodeDescription *my __attribute__((swift_name("my")));
@property (class, readonly) SharedKitCountryCodeDescription *mv __attribute__((swift_name("mv")));
@property (class, readonly) SharedKitCountryCodeDescription *ml __attribute__((swift_name("ml")));
@property (class, readonly) SharedKitCountryCodeDescription *mt __attribute__((swift_name("mt")));
@property (class, readonly) SharedKitCountryCodeDescription *mh __attribute__((swift_name("mh")));
@property (class, readonly) SharedKitCountryCodeDescription *mq __attribute__((swift_name("mq")));
@property (class, readonly) SharedKitCountryCodeDescription *mr __attribute__((swift_name("mr")));
@property (class, readonly) SharedKitCountryCodeDescription *mu __attribute__((swift_name("mu")));
@property (class, readonly) SharedKitCountryCodeDescription *yt __attribute__((swift_name("yt")));
@property (class, readonly) SharedKitCountryCodeDescription *mx __attribute__((swift_name("mx")));
@property (class, readonly) SharedKitCountryCodeDescription *fm __attribute__((swift_name("fm")));
@property (class, readonly) SharedKitCountryCodeDescription *md __attribute__((swift_name("md")));
@property (class, readonly) SharedKitCountryCodeDescription *mc __attribute__((swift_name("mc")));
@property (class, readonly) SharedKitCountryCodeDescription *mn __attribute__((swift_name("mn")));
@property (class, readonly) SharedKitCountryCodeDescription *ms __attribute__((swift_name("ms")));
@property (class, readonly) SharedKitCountryCodeDescription *ma __attribute__((swift_name("ma")));
@property (class, readonly) SharedKitCountryCodeDescription *mz __attribute__((swift_name("mz")));
@property (class, readonly) SharedKitCountryCodeDescription *mm __attribute__((swift_name("mm")));
@property (class, readonly) SharedKitCountryCodeDescription *na __attribute__((swift_name("na")));
@property (class, readonly) SharedKitCountryCodeDescription *nr __attribute__((swift_name("nr")));
@property (class, readonly) SharedKitCountryCodeDescription *np __attribute__((swift_name("np")));
@property (class, readonly) SharedKitCountryCodeDescription *nl __attribute__((swift_name("nl")));
@property (class, readonly) SharedKitCountryCodeDescription *an __attribute__((swift_name("an")));
@property (class, readonly) SharedKitCountryCodeDescription *nc __attribute__((swift_name("nc")));
@property (class, readonly) SharedKitCountryCodeDescription *nz __attribute__((swift_name("nz")));
@property (class, readonly) SharedKitCountryCodeDescription *ni __attribute__((swift_name("ni")));
@property (class, readonly) SharedKitCountryCodeDescription *ne __attribute__((swift_name("ne")));
@property (class, readonly) SharedKitCountryCodeDescription *ng __attribute__((swift_name("ng")));
@property (class, readonly) SharedKitCountryCodeDescription *nu __attribute__((swift_name("nu")));
@property (class, readonly) SharedKitCountryCodeDescription *nf __attribute__((swift_name("nf")));
@property (class, readonly) SharedKitCountryCodeDescription *mp __attribute__((swift_name("mp")));
@property (class, readonly) SharedKitCountryCodeDescription *no __attribute__((swift_name("no")));
@property (class, readonly) SharedKitCountryCodeDescription *om __attribute__((swift_name("om")));
@property (class, readonly) SharedKitCountryCodeDescription *pk __attribute__((swift_name("pk")));
@property (class, readonly) SharedKitCountryCodeDescription *pw __attribute__((swift_name("pw")));
@property (class, readonly) SharedKitCountryCodeDescription *pa __attribute__((swift_name("pa")));
@property (class, readonly) SharedKitCountryCodeDescription *pg __attribute__((swift_name("pg")));
@property (class, readonly) SharedKitCountryCodeDescription *py __attribute__((swift_name("py")));
@property (class, readonly) SharedKitCountryCodeDescription *pe __attribute__((swift_name("pe")));
@property (class, readonly) SharedKitCountryCodeDescription *ph __attribute__((swift_name("ph")));
@property (class, readonly) SharedKitCountryCodeDescription *pn __attribute__((swift_name("pn")));
@property (class, readonly) SharedKitCountryCodeDescription *pl __attribute__((swift_name("pl")));
@property (class, readonly) SharedKitCountryCodeDescription *pt __attribute__((swift_name("pt")));
@property (class, readonly) SharedKitCountryCodeDescription *pr __attribute__((swift_name("pr")));
@property (class, readonly) SharedKitCountryCodeDescription *qa __attribute__((swift_name("qa")));
@property (class, readonly) SharedKitCountryCodeDescription *re __attribute__((swift_name("re")));
@property (class, readonly) SharedKitCountryCodeDescription *ro __attribute__((swift_name("ro")));
@property (class, readonly) SharedKitCountryCodeDescription *ru __attribute__((swift_name("ru")));
@property (class, readonly) SharedKitCountryCodeDescription *rw __attribute__((swift_name("rw")));
@property (class, readonly) SharedKitCountryCodeDescription *sh __attribute__((swift_name("sh")));
@property (class, readonly) SharedKitCountryCodeDescription *kn __attribute__((swift_name("kn")));
@property (class, readonly) SharedKitCountryCodeDescription *lc __attribute__((swift_name("lc")));
@property (class, readonly) SharedKitCountryCodeDescription *pm __attribute__((swift_name("pm")));
@property (class, readonly) SharedKitCountryCodeDescription *vc __attribute__((swift_name("vc")));
@property (class, readonly) SharedKitCountryCodeDescription *ws __attribute__((swift_name("ws")));
@property (class, readonly) SharedKitCountryCodeDescription *sm __attribute__((swift_name("sm")));
@property (class, readonly) SharedKitCountryCodeDescription *st __attribute__((swift_name("st")));
@property (class, readonly) SharedKitCountryCodeDescription *sa __attribute__((swift_name("sa")));
@property (class, readonly) SharedKitCountryCodeDescription *sn __attribute__((swift_name("sn")));
@property (class, readonly) SharedKitCountryCodeDescription *cs __attribute__((swift_name("cs")));
@property (class, readonly) SharedKitCountryCodeDescription *sc __attribute__((swift_name("sc")));
@property (class, readonly) SharedKitCountryCodeDescription *sl __attribute__((swift_name("sl")));
@property (class, readonly) SharedKitCountryCodeDescription *sg __attribute__((swift_name("sg")));
@property (class, readonly) SharedKitCountryCodeDescription *sk __attribute__((swift_name("sk")));
@property (class, readonly) SharedKitCountryCodeDescription *si __attribute__((swift_name("si")));
@property (class, readonly) SharedKitCountryCodeDescription *sb __attribute__((swift_name("sb")));
@property (class, readonly) SharedKitCountryCodeDescription *so __attribute__((swift_name("so")));
@property (class, readonly) SharedKitCountryCodeDescription *za __attribute__((swift_name("za")));
@property (class, readonly) SharedKitCountryCodeDescription *gs __attribute__((swift_name("gs")));
@property (class, readonly) SharedKitCountryCodeDescription *es __attribute__((swift_name("es")));
@property (class, readonly) SharedKitCountryCodeDescription *lk __attribute__((swift_name("lk")));
@property (class, readonly) SharedKitCountryCodeDescription *sd __attribute__((swift_name("sd")));
@property (class, readonly) SharedKitCountryCodeDescription *sr __attribute__((swift_name("sr")));
@property (class, readonly) SharedKitCountryCodeDescription *sj __attribute__((swift_name("sj")));
@property (class, readonly) SharedKitCountryCodeDescription *sz __attribute__((swift_name("sz")));
@property (class, readonly) SharedKitCountryCodeDescription *se __attribute__((swift_name("se")));
@property (class, readonly) SharedKitCountryCodeDescription *ch __attribute__((swift_name("ch")));
@property (class, readonly) SharedKitCountryCodeDescription *sy __attribute__((swift_name("sy")));
@property (class, readonly) SharedKitCountryCodeDescription *tw __attribute__((swift_name("tw")));
@property (class, readonly) SharedKitCountryCodeDescription *tj __attribute__((swift_name("tj")));
@property (class, readonly) SharedKitCountryCodeDescription *tz __attribute__((swift_name("tz")));
@property (class, readonly) SharedKitCountryCodeDescription *th __attribute__((swift_name("th")));
@property (class, readonly) SharedKitCountryCodeDescription *tl __attribute__((swift_name("tl")));
@property (class, readonly) SharedKitCountryCodeDescription *tg __attribute__((swift_name("tg")));
@property (class, readonly) SharedKitCountryCodeDescription *tk __attribute__((swift_name("tk")));
@property (class, readonly) SharedKitCountryCodeDescription *to __attribute__((swift_name("to")));
@property (class, readonly) SharedKitCountryCodeDescription *tt __attribute__((swift_name("tt")));
@property (class, readonly) SharedKitCountryCodeDescription *tn __attribute__((swift_name("tn")));
@property (class, readonly) SharedKitCountryCodeDescription *tr __attribute__((swift_name("tr")));
@property (class, readonly) SharedKitCountryCodeDescription *tm __attribute__((swift_name("tm")));
@property (class, readonly) SharedKitCountryCodeDescription *tc __attribute__((swift_name("tc")));
@property (class, readonly) SharedKitCountryCodeDescription *tv __attribute__((swift_name("tv")));
@property (class, readonly) SharedKitCountryCodeDescription *ua __attribute__((swift_name("ua")));
@property (class, readonly) SharedKitCountryCodeDescription *ae __attribute__((swift_name("ae")));
@property (class, readonly) SharedKitCountryCodeDescription *gb __attribute__((swift_name("gb")));
@property (class, readonly) SharedKitCountryCodeDescription *us __attribute__((swift_name("us")));
@property (class, readonly) SharedKitCountryCodeDescription *um __attribute__((swift_name("um")));
@property (class, readonly) SharedKitCountryCodeDescription *uy __attribute__((swift_name("uy")));
@property (class, readonly) SharedKitCountryCodeDescription *uz __attribute__((swift_name("uz")));
@property (class, readonly) SharedKitCountryCodeDescription *vu __attribute__((swift_name("vu")));
@property (class, readonly) SharedKitCountryCodeDescription *va __attribute__((swift_name("va")));
@property (class, readonly) SharedKitCountryCodeDescription *ve __attribute__((swift_name("ve")));
@property (class, readonly) SharedKitCountryCodeDescription *vn __attribute__((swift_name("vn")));
@property (class, readonly) SharedKitCountryCodeDescription *vg __attribute__((swift_name("vg")));
@property (class, readonly) SharedKitCountryCodeDescription *vi __attribute__((swift_name("vi")));
@property (class, readonly) SharedKitCountryCodeDescription *wf __attribute__((swift_name("wf")));
@property (class, readonly) SharedKitCountryCodeDescription *eh __attribute__((swift_name("eh")));
@property (class, readonly) SharedKitCountryCodeDescription *ye __attribute__((swift_name("ye")));
@property (class, readonly) SharedKitCountryCodeDescription *zm __attribute__((swift_name("zm")));
@property (class, readonly) SharedKitCountryCodeDescription *zw __attribute__((swift_name("zw")));
+ (SharedKitKotlinArray<SharedKitCountryCodeDescription *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitCountryCodeDescription *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *alpha2Code __attribute__((swift_name("alpha2Code")));
@property (readonly) NSString *alpha3Code __attribute__((swift_name("alpha3Code")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@property (readonly) int32_t numericCode __attribute__((swift_name("numericCode")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CountryCodeDescription.Companion")))
@interface SharedKitCountryCodeDescriptionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCountryCodeDescriptionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitCountryCodeDescription * _Nullable)fromAlpha2CodeCode:(NSString *)code __attribute__((swift_name("fromAlpha2Code(code:)")));
- (SharedKitCountryCodeDescription * _Nullable)fromAlpha3CodeCode:(NSString *)code __attribute__((swift_name("fromAlpha3Code(code:)")));
- (SharedKitCountryCodeDescription * _Nullable)fromNumericCodeCode:(int32_t)code __attribute__((swift_name("fromNumericCode(code:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CurrencyCodeDescription")))
@interface SharedKitCurrencyCodeDescription : SharedKitKotlinEnum<SharedKitCurrencyCodeDescription *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly, getter=companion) SharedKitCurrencyCodeDescriptionCompanion *companion __attribute__((swift_name("companion")));
@property (class, readonly) SharedKitCurrencyCodeDescription *aed __attribute__((swift_name("aed")));
@property (class, readonly) SharedKitCurrencyCodeDescription *afn __attribute__((swift_name("afn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *all __attribute__((swift_name("all")));
@property (class, readonly) SharedKitCurrencyCodeDescription *amd __attribute__((swift_name("amd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ang __attribute__((swift_name("ang")));
@property (class, readonly) SharedKitCurrencyCodeDescription *aoa __attribute__((swift_name("aoa")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ars __attribute__((swift_name("ars")));
@property (class, readonly) SharedKitCurrencyCodeDescription *aud __attribute__((swift_name("aud")));
@property (class, readonly) SharedKitCurrencyCodeDescription *awg __attribute__((swift_name("awg")));
@property (class, readonly) SharedKitCurrencyCodeDescription *azn __attribute__((swift_name("azn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bam __attribute__((swift_name("bam")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bbd __attribute__((swift_name("bbd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bdt __attribute__((swift_name("bdt")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bgn __attribute__((swift_name("bgn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bhd __attribute__((swift_name("bhd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bif __attribute__((swift_name("bif")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bmd __attribute__((swift_name("bmd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bnd __attribute__((swift_name("bnd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bob __attribute__((swift_name("bob")));
@property (class, readonly) SharedKitCurrencyCodeDescription *brl __attribute__((swift_name("brl")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bsd __attribute__((swift_name("bsd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *btn __attribute__((swift_name("btn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bwp __attribute__((swift_name("bwp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *byn __attribute__((swift_name("byn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *bzd __attribute__((swift_name("bzd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cad __attribute__((swift_name("cad")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cdf __attribute__((swift_name("cdf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *chf __attribute__((swift_name("chf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *clp __attribute__((swift_name("clp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cny __attribute__((swift_name("cny")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cop __attribute__((swift_name("cop")));
@property (class, readonly) SharedKitCurrencyCodeDescription *crc __attribute__((swift_name("crc")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cuc __attribute__((swift_name("cuc")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cup __attribute__((swift_name("cup")));
@property (class, readonly) SharedKitCurrencyCodeDescription *cve __attribute__((swift_name("cve")));
@property (class, readonly) SharedKitCurrencyCodeDescription *czk __attribute__((swift_name("czk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *djf __attribute__((swift_name("djf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *dkk __attribute__((swift_name("dkk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *dop __attribute__((swift_name("dop")));
@property (class, readonly) SharedKitCurrencyCodeDescription *dzd __attribute__((swift_name("dzd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *egp __attribute__((swift_name("egp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ern __attribute__((swift_name("ern")));
@property (class, readonly) SharedKitCurrencyCodeDescription *etb __attribute__((swift_name("etb")));
@property (class, readonly) SharedKitCurrencyCodeDescription *eur __attribute__((swift_name("eur")));
@property (class, readonly) SharedKitCurrencyCodeDescription *fjd __attribute__((swift_name("fjd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *fkp __attribute__((swift_name("fkp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gbp __attribute__((swift_name("gbp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gel __attribute__((swift_name("gel")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ghs __attribute__((swift_name("ghs")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gip __attribute__((swift_name("gip")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gmd __attribute__((swift_name("gmd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gnf __attribute__((swift_name("gnf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gtq __attribute__((swift_name("gtq")));
@property (class, readonly) SharedKitCurrencyCodeDescription *gyd __attribute__((swift_name("gyd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *hkd __attribute__((swift_name("hkd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *hnl __attribute__((swift_name("hnl")));
@property (class, readonly) SharedKitCurrencyCodeDescription *hrk __attribute__((swift_name("hrk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *htg __attribute__((swift_name("htg")));
@property (class, readonly) SharedKitCurrencyCodeDescription *huf __attribute__((swift_name("huf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *idr __attribute__((swift_name("idr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ils __attribute__((swift_name("ils")));
@property (class, readonly) SharedKitCurrencyCodeDescription *inr __attribute__((swift_name("inr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *iqd __attribute__((swift_name("iqd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *irr __attribute__((swift_name("irr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *isk __attribute__((swift_name("isk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *jmd __attribute__((swift_name("jmd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *jod __attribute__((swift_name("jod")));
@property (class, readonly) SharedKitCurrencyCodeDescription *jpy __attribute__((swift_name("jpy")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kes __attribute__((swift_name("kes")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kgs __attribute__((swift_name("kgs")));
@property (class, readonly) SharedKitCurrencyCodeDescription *khr __attribute__((swift_name("khr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kmf __attribute__((swift_name("kmf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kpw __attribute__((swift_name("kpw")));
@property (class, readonly) SharedKitCurrencyCodeDescription *krw __attribute__((swift_name("krw")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kwd __attribute__((swift_name("kwd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kyd __attribute__((swift_name("kyd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *kzt __attribute__((swift_name("kzt")));
@property (class, readonly) SharedKitCurrencyCodeDescription *lak __attribute__((swift_name("lak")));
@property (class, readonly) SharedKitCurrencyCodeDescription *lbp __attribute__((swift_name("lbp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *lkr __attribute__((swift_name("lkr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *lrd __attribute__((swift_name("lrd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *lsl __attribute__((swift_name("lsl")));
@property (class, readonly) SharedKitCurrencyCodeDescription *lyd __attribute__((swift_name("lyd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mad __attribute__((swift_name("mad")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mdl __attribute__((swift_name("mdl")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mga __attribute__((swift_name("mga")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mkd __attribute__((swift_name("mkd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mmk __attribute__((swift_name("mmk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mnt __attribute__((swift_name("mnt")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mop __attribute__((swift_name("mop")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mro __attribute__((swift_name("mro")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mur __attribute__((swift_name("mur")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mvr __attribute__((swift_name("mvr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mwk __attribute__((swift_name("mwk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mxn __attribute__((swift_name("mxn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *myr __attribute__((swift_name("myr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *mzn __attribute__((swift_name("mzn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *nad __attribute__((swift_name("nad")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ngn __attribute__((swift_name("ngn")));
@property (class, readonly) SharedKitCurrencyCodeDescription *nio __attribute__((swift_name("nio")));
@property (class, readonly) SharedKitCurrencyCodeDescription *nok __attribute__((swift_name("nok")));
@property (class, readonly) SharedKitCurrencyCodeDescription *npr __attribute__((swift_name("npr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *nzd __attribute__((swift_name("nzd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *omr __attribute__((swift_name("omr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *pab __attribute__((swift_name("pab")));
@property (class, readonly) SharedKitCurrencyCodeDescription *pen __attribute__((swift_name("pen")));
@property (class, readonly) SharedKitCurrencyCodeDescription *pgk __attribute__((swift_name("pgk")));
@property (class, readonly) SharedKitCurrencyCodeDescription *php __attribute__((swift_name("php")));
@property (class, readonly) SharedKitCurrencyCodeDescription *pkr __attribute__((swift_name("pkr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *pln __attribute__((swift_name("pln")));
@property (class, readonly) SharedKitCurrencyCodeDescription *pyg __attribute__((swift_name("pyg")));
@property (class, readonly) SharedKitCurrencyCodeDescription *qar __attribute__((swift_name("qar")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ron __attribute__((swift_name("ron")));
@property (class, readonly) SharedKitCurrencyCodeDescription *rsd __attribute__((swift_name("rsd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *rub __attribute__((swift_name("rub")));
@property (class, readonly) SharedKitCurrencyCodeDescription *rwf __attribute__((swift_name("rwf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sar __attribute__((swift_name("sar")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sbd __attribute__((swift_name("sbd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *scr __attribute__((swift_name("scr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sdg __attribute__((swift_name("sdg")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sek __attribute__((swift_name("sek")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sgd __attribute__((swift_name("sgd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *shp __attribute__((swift_name("shp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sll __attribute__((swift_name("sll")));
@property (class, readonly) SharedKitCurrencyCodeDescription *sos __attribute__((swift_name("sos")));
@property (class, readonly) SharedKitCurrencyCodeDescription *srd __attribute__((swift_name("srd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ssp __attribute__((swift_name("ssp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *std __attribute__((swift_name("std")));
@property (class, readonly) SharedKitCurrencyCodeDescription *svc __attribute__((swift_name("svc")));
@property (class, readonly) SharedKitCurrencyCodeDescription *syp __attribute__((swift_name("syp")));
@property (class, readonly) SharedKitCurrencyCodeDescription *szl __attribute__((swift_name("szl")));
@property (class, readonly) SharedKitCurrencyCodeDescription *thb __attribute__((swift_name("thb")));
@property (class, readonly) SharedKitCurrencyCodeDescription *tjs __attribute__((swift_name("tjs")));
@property (class, readonly) SharedKitCurrencyCodeDescription *tmt __attribute__((swift_name("tmt")));
@property (class, readonly) SharedKitCurrencyCodeDescription *tnd __attribute__((swift_name("tnd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *top __attribute__((swift_name("top")));
@property (class, readonly) SharedKitCurrencyCodeDescription *try_ __attribute__((swift_name("try_")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ttd __attribute__((swift_name("ttd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *twd __attribute__((swift_name("twd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *tzs __attribute__((swift_name("tzs")));
@property (class, readonly) SharedKitCurrencyCodeDescription *uah __attribute__((swift_name("uah")));
@property (class, readonly) SharedKitCurrencyCodeDescription *ugx __attribute__((swift_name("ugx")));
@property (class, readonly) SharedKitCurrencyCodeDescription *usd __attribute__((swift_name("usd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *uyu __attribute__((swift_name("uyu")));
@property (class, readonly) SharedKitCurrencyCodeDescription *uzs __attribute__((swift_name("uzs")));
@property (class, readonly) SharedKitCurrencyCodeDescription *vef __attribute__((swift_name("vef")));
@property (class, readonly) SharedKitCurrencyCodeDescription *vnd __attribute__((swift_name("vnd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *vuv __attribute__((swift_name("vuv")));
@property (class, readonly) SharedKitCurrencyCodeDescription *wst __attribute__((swift_name("wst")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xaf __attribute__((swift_name("xaf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xag __attribute__((swift_name("xag")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xau __attribute__((swift_name("xau")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xba __attribute__((swift_name("xba")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xbb __attribute__((swift_name("xbb")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xbc __attribute__((swift_name("xbc")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xbd __attribute__((swift_name("xbd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xcd __attribute__((swift_name("xcd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xdr __attribute__((swift_name("xdr")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xof __attribute__((swift_name("xof")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xpd __attribute__((swift_name("xpd")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xpf __attribute__((swift_name("xpf")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xpt __attribute__((swift_name("xpt")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xsu __attribute__((swift_name("xsu")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xts __attribute__((swift_name("xts")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xua __attribute__((swift_name("xua")));
@property (class, readonly) SharedKitCurrencyCodeDescription *xxx __attribute__((swift_name("xxx")));
@property (class, readonly) SharedKitCurrencyCodeDescription *yer __attribute__((swift_name("yer")));
@property (class, readonly) SharedKitCurrencyCodeDescription *zar __attribute__((swift_name("zar")));
@property (class, readonly) SharedKitCurrencyCodeDescription *zmw __attribute__((swift_name("zmw")));
@property (class, readonly) SharedKitCurrencyCodeDescription *zwl __attribute__((swift_name("zwl")));
+ (SharedKitKotlinArray<SharedKitCurrencyCodeDescription *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitCurrencyCodeDescription *> *entries __attribute__((swift_name("entries")));
@property (readonly) int32_t code __attribute__((swift_name("code")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CurrencyCodeDescription.Companion")))
@interface SharedKitCurrencyCodeDescriptionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitCurrencyCodeDescriptionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitCurrencyCodeDescription * _Nullable)fromCodeCode:(int32_t)code __attribute__((swift_name("fromCode(code:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("LanguageCodeDescription")))
@interface SharedKitLanguageCodeDescription : SharedKitKotlinEnum<SharedKitLanguageCodeDescription *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly, getter=companion) SharedKitLanguageCodeDescriptionCompanion *companion __attribute__((swift_name("companion")));
@property (class, readonly) SharedKitLanguageCodeDescription *aar __attribute__((swift_name("aar")));
@property (class, readonly) SharedKitLanguageCodeDescription *abk __attribute__((swift_name("abk")));
@property (class, readonly) SharedKitLanguageCodeDescription *afr __attribute__((swift_name("afr")));
@property (class, readonly) SharedKitLanguageCodeDescription *aka __attribute__((swift_name("aka")));
@property (class, readonly) SharedKitLanguageCodeDescription *amh __attribute__((swift_name("amh")));
@property (class, readonly) SharedKitLanguageCodeDescription *ara __attribute__((swift_name("ara")));
@property (class, readonly) SharedKitLanguageCodeDescription *arg __attribute__((swift_name("arg")));
@property (class, readonly) SharedKitLanguageCodeDescription *asm_ __attribute__((swift_name("asm_")));
@property (class, readonly) SharedKitLanguageCodeDescription *ava __attribute__((swift_name("ava")));
@property (class, readonly) SharedKitLanguageCodeDescription *ave __attribute__((swift_name("ave")));
@property (class, readonly) SharedKitLanguageCodeDescription *aym __attribute__((swift_name("aym")));
@property (class, readonly) SharedKitLanguageCodeDescription *aze __attribute__((swift_name("aze")));
@property (class, readonly) SharedKitLanguageCodeDescription *bak __attribute__((swift_name("bak")));
@property (class, readonly) SharedKitLanguageCodeDescription *bam __attribute__((swift_name("bam")));
@property (class, readonly) SharedKitLanguageCodeDescription *bel __attribute__((swift_name("bel")));
@property (class, readonly) SharedKitLanguageCodeDescription *ben __attribute__((swift_name("ben")));
@property (class, readonly) SharedKitLanguageCodeDescription *bis __attribute__((swift_name("bis")));
@property (class, readonly) SharedKitLanguageCodeDescription *bod __attribute__((swift_name("bod")));
@property (class, readonly) SharedKitLanguageCodeDescription *bos __attribute__((swift_name("bos")));
@property (class, readonly) SharedKitLanguageCodeDescription *bre __attribute__((swift_name("bre")));
@property (class, readonly) SharedKitLanguageCodeDescription *bul __attribute__((swift_name("bul")));
@property (class, readonly) SharedKitLanguageCodeDescription *cat __attribute__((swift_name("cat")));
@property (class, readonly) SharedKitLanguageCodeDescription *ces __attribute__((swift_name("ces")));
@property (class, readonly) SharedKitLanguageCodeDescription *cha __attribute__((swift_name("cha")));
@property (class, readonly) SharedKitLanguageCodeDescription *che __attribute__((swift_name("che")));
@property (class, readonly) SharedKitLanguageCodeDescription *chu __attribute__((swift_name("chu")));
@property (class, readonly) SharedKitLanguageCodeDescription *chv __attribute__((swift_name("chv")));
@property (class, readonly) SharedKitLanguageCodeDescription *cor __attribute__((swift_name("cor")));
@property (class, readonly) SharedKitLanguageCodeDescription *cos __attribute__((swift_name("cos")));
@property (class, readonly) SharedKitLanguageCodeDescription *cre __attribute__((swift_name("cre")));
@property (class, readonly) SharedKitLanguageCodeDescription *cym __attribute__((swift_name("cym")));
@property (class, readonly) SharedKitLanguageCodeDescription *dan __attribute__((swift_name("dan")));
@property (class, readonly) SharedKitLanguageCodeDescription *deu __attribute__((swift_name("deu")));
@property (class, readonly) SharedKitLanguageCodeDescription *div __attribute__((swift_name("div")));
@property (class, readonly) SharedKitLanguageCodeDescription *dzo __attribute__((swift_name("dzo")));
@property (class, readonly) SharedKitLanguageCodeDescription *ell __attribute__((swift_name("ell")));
@property (class, readonly) SharedKitLanguageCodeDescription *eng __attribute__((swift_name("eng")));
@property (class, readonly) SharedKitLanguageCodeDescription *epo __attribute__((swift_name("epo")));
@property (class, readonly) SharedKitLanguageCodeDescription *est __attribute__((swift_name("est")));
@property (class, readonly) SharedKitLanguageCodeDescription *eus __attribute__((swift_name("eus")));
@property (class, readonly) SharedKitLanguageCodeDescription *ewe __attribute__((swift_name("ewe")));
@property (class, readonly) SharedKitLanguageCodeDescription *fao __attribute__((swift_name("fao")));
@property (class, readonly) SharedKitLanguageCodeDescription *fas __attribute__((swift_name("fas")));
@property (class, readonly) SharedKitLanguageCodeDescription *fij __attribute__((swift_name("fij")));
@property (class, readonly) SharedKitLanguageCodeDescription *fin __attribute__((swift_name("fin")));
@property (class, readonly) SharedKitLanguageCodeDescription *fra __attribute__((swift_name("fra")));
@property (class, readonly) SharedKitLanguageCodeDescription *fry __attribute__((swift_name("fry")));
@property (class, readonly) SharedKitLanguageCodeDescription *ful __attribute__((swift_name("ful")));
@property (class, readonly) SharedKitLanguageCodeDescription *gla __attribute__((swift_name("gla")));
@property (class, readonly) SharedKitLanguageCodeDescription *gle __attribute__((swift_name("gle")));
@property (class, readonly) SharedKitLanguageCodeDescription *glg __attribute__((swift_name("glg")));
@property (class, readonly) SharedKitLanguageCodeDescription *glv __attribute__((swift_name("glv")));
@property (class, readonly) SharedKitLanguageCodeDescription *grn __attribute__((swift_name("grn")));
@property (class, readonly) SharedKitLanguageCodeDescription *guj __attribute__((swift_name("guj")));
@property (class, readonly) SharedKitLanguageCodeDescription *hat __attribute__((swift_name("hat")));
@property (class, readonly) SharedKitLanguageCodeDescription *hau __attribute__((swift_name("hau")));
@property (class, readonly) SharedKitLanguageCodeDescription *hbs __attribute__((swift_name("hbs")));
@property (class, readonly) SharedKitLanguageCodeDescription *heb __attribute__((swift_name("heb")));
@property (class, readonly) SharedKitLanguageCodeDescription *her __attribute__((swift_name("her")));
@property (class, readonly) SharedKitLanguageCodeDescription *hin __attribute__((swift_name("hin")));
@property (class, readonly) SharedKitLanguageCodeDescription *hmo __attribute__((swift_name("hmo")));
@property (class, readonly) SharedKitLanguageCodeDescription *hrv __attribute__((swift_name("hrv")));
@property (class, readonly) SharedKitLanguageCodeDescription *hun __attribute__((swift_name("hun")));
@property (class, readonly) SharedKitLanguageCodeDescription *hye __attribute__((swift_name("hye")));
@property (class, readonly) SharedKitLanguageCodeDescription *ibo __attribute__((swift_name("ibo")));
@property (class, readonly) SharedKitLanguageCodeDescription *ido __attribute__((swift_name("ido")));
@property (class, readonly) SharedKitLanguageCodeDescription *iii __attribute__((swift_name("iii")));
@property (class, readonly) SharedKitLanguageCodeDescription *iku __attribute__((swift_name("iku")));
@property (class, readonly) SharedKitLanguageCodeDescription *ile __attribute__((swift_name("ile")));
@property (class, readonly) SharedKitLanguageCodeDescription *ina __attribute__((swift_name("ina")));
@property (class, readonly) SharedKitLanguageCodeDescription *ind __attribute__((swift_name("ind")));
@property (class, readonly) SharedKitLanguageCodeDescription *ipk __attribute__((swift_name("ipk")));
@property (class, readonly) SharedKitLanguageCodeDescription *isl __attribute__((swift_name("isl")));
@property (class, readonly) SharedKitLanguageCodeDescription *ita __attribute__((swift_name("ita")));
@property (class, readonly) SharedKitLanguageCodeDescription *jav __attribute__((swift_name("jav")));
@property (class, readonly) SharedKitLanguageCodeDescription *jpn __attribute__((swift_name("jpn")));
@property (class, readonly) SharedKitLanguageCodeDescription *kal __attribute__((swift_name("kal")));
@property (class, readonly) SharedKitLanguageCodeDescription *kan __attribute__((swift_name("kan")));
@property (class, readonly) SharedKitLanguageCodeDescription *kas __attribute__((swift_name("kas")));
@property (class, readonly) SharedKitLanguageCodeDescription *kat __attribute__((swift_name("kat")));
@property (class, readonly) SharedKitLanguageCodeDescription *kau __attribute__((swift_name("kau")));
@property (class, readonly) SharedKitLanguageCodeDescription *kaz __attribute__((swift_name("kaz")));
@property (class, readonly) SharedKitLanguageCodeDescription *khm __attribute__((swift_name("khm")));
@property (class, readonly) SharedKitLanguageCodeDescription *kik __attribute__((swift_name("kik")));
@property (class, readonly) SharedKitLanguageCodeDescription *kin __attribute__((swift_name("kin")));
@property (class, readonly) SharedKitLanguageCodeDescription *kir __attribute__((swift_name("kir")));
@property (class, readonly) SharedKitLanguageCodeDescription *kom __attribute__((swift_name("kom")));
@property (class, readonly) SharedKitLanguageCodeDescription *kon __attribute__((swift_name("kon")));
@property (class, readonly) SharedKitLanguageCodeDescription *kor __attribute__((swift_name("kor")));
@property (class, readonly) SharedKitLanguageCodeDescription *kua __attribute__((swift_name("kua")));
@property (class, readonly) SharedKitLanguageCodeDescription *kur __attribute__((swift_name("kur")));
@property (class, readonly) SharedKitLanguageCodeDescription *lao __attribute__((swift_name("lao")));
@property (class, readonly) SharedKitLanguageCodeDescription *lat __attribute__((swift_name("lat")));
@property (class, readonly) SharedKitLanguageCodeDescription *lav __attribute__((swift_name("lav")));
@property (class, readonly) SharedKitLanguageCodeDescription *lim __attribute__((swift_name("lim")));
@property (class, readonly) SharedKitLanguageCodeDescription *lin __attribute__((swift_name("lin")));
@property (class, readonly) SharedKitLanguageCodeDescription *lit __attribute__((swift_name("lit")));
@property (class, readonly) SharedKitLanguageCodeDescription *ltz __attribute__((swift_name("ltz")));
@property (class, readonly) SharedKitLanguageCodeDescription *lub __attribute__((swift_name("lub")));
@property (class, readonly) SharedKitLanguageCodeDescription *lug __attribute__((swift_name("lug")));
@property (class, readonly) SharedKitLanguageCodeDescription *mah __attribute__((swift_name("mah")));
@property (class, readonly) SharedKitLanguageCodeDescription *mal __attribute__((swift_name("mal")));
@property (class, readonly) SharedKitLanguageCodeDescription *mar __attribute__((swift_name("mar")));
@property (class, readonly) SharedKitLanguageCodeDescription *mkd __attribute__((swift_name("mkd")));
@property (class, readonly) SharedKitLanguageCodeDescription *mlg __attribute__((swift_name("mlg")));
@property (class, readonly) SharedKitLanguageCodeDescription *mlt __attribute__((swift_name("mlt")));
@property (class, readonly) SharedKitLanguageCodeDescription *mon __attribute__((swift_name("mon")));
@property (class, readonly) SharedKitLanguageCodeDescription *mri __attribute__((swift_name("mri")));
@property (class, readonly) SharedKitLanguageCodeDescription *msa __attribute__((swift_name("msa")));
@property (class, readonly) SharedKitLanguageCodeDescription *mya __attribute__((swift_name("mya")));
@property (class, readonly) SharedKitLanguageCodeDescription *nau __attribute__((swift_name("nau")));
@property (class, readonly) SharedKitLanguageCodeDescription *nav __attribute__((swift_name("nav")));
@property (class, readonly) SharedKitLanguageCodeDescription *nbl __attribute__((swift_name("nbl")));
@property (class, readonly) SharedKitLanguageCodeDescription *nde __attribute__((swift_name("nde")));
@property (class, readonly) SharedKitLanguageCodeDescription *ndo __attribute__((swift_name("ndo")));
@property (class, readonly) SharedKitLanguageCodeDescription *nep __attribute__((swift_name("nep")));
@property (class, readonly) SharedKitLanguageCodeDescription *nld __attribute__((swift_name("nld")));
@property (class, readonly) SharedKitLanguageCodeDescription *nno __attribute__((swift_name("nno")));
@property (class, readonly) SharedKitLanguageCodeDescription *nob __attribute__((swift_name("nob")));
@property (class, readonly) SharedKitLanguageCodeDescription *nor __attribute__((swift_name("nor")));
@property (class, readonly) SharedKitLanguageCodeDescription *nya __attribute__((swift_name("nya")));
@property (class, readonly) SharedKitLanguageCodeDescription *oci __attribute__((swift_name("oci")));
@property (class, readonly) SharedKitLanguageCodeDescription *oji __attribute__((swift_name("oji")));
@property (class, readonly) SharedKitLanguageCodeDescription *ori __attribute__((swift_name("ori")));
@property (class, readonly) SharedKitLanguageCodeDescription *orm __attribute__((swift_name("orm")));
@property (class, readonly) SharedKitLanguageCodeDescription *oss __attribute__((swift_name("oss")));
@property (class, readonly) SharedKitLanguageCodeDescription *pan __attribute__((swift_name("pan")));
@property (class, readonly) SharedKitLanguageCodeDescription *pli __attribute__((swift_name("pli")));
@property (class, readonly) SharedKitLanguageCodeDescription *pol __attribute__((swift_name("pol")));
@property (class, readonly) SharedKitLanguageCodeDescription *por __attribute__((swift_name("por")));
@property (class, readonly) SharedKitLanguageCodeDescription *pus __attribute__((swift_name("pus")));
@property (class, readonly) SharedKitLanguageCodeDescription *que __attribute__((swift_name("que")));
@property (class, readonly) SharedKitLanguageCodeDescription *roh __attribute__((swift_name("roh")));
@property (class, readonly) SharedKitLanguageCodeDescription *ron __attribute__((swift_name("ron")));
@property (class, readonly) SharedKitLanguageCodeDescription *run __attribute__((swift_name("run")));
@property (class, readonly) SharedKitLanguageCodeDescription *rus __attribute__((swift_name("rus")));
@property (class, readonly) SharedKitLanguageCodeDescription *sag __attribute__((swift_name("sag")));
@property (class, readonly) SharedKitLanguageCodeDescription *san __attribute__((swift_name("san")));
@property (class, readonly) SharedKitLanguageCodeDescription *sin __attribute__((swift_name("sin")));
@property (class, readonly) SharedKitLanguageCodeDescription *slk __attribute__((swift_name("slk")));
@property (class, readonly) SharedKitLanguageCodeDescription *slv __attribute__((swift_name("slv")));
@property (class, readonly) SharedKitLanguageCodeDescription *sme __attribute__((swift_name("sme")));
@property (class, readonly) SharedKitLanguageCodeDescription *smo __attribute__((swift_name("smo")));
@property (class, readonly) SharedKitLanguageCodeDescription *sna __attribute__((swift_name("sna")));
@property (class, readonly) SharedKitLanguageCodeDescription *snd __attribute__((swift_name("snd")));
@property (class, readonly) SharedKitLanguageCodeDescription *som __attribute__((swift_name("som")));
@property (class, readonly) SharedKitLanguageCodeDescription *sot __attribute__((swift_name("sot")));
@property (class, readonly) SharedKitLanguageCodeDescription *spa __attribute__((swift_name("spa")));
@property (class, readonly) SharedKitLanguageCodeDescription *sqi __attribute__((swift_name("sqi")));
@property (class, readonly) SharedKitLanguageCodeDescription *srd __attribute__((swift_name("srd")));
@property (class, readonly) SharedKitLanguageCodeDescription *srp __attribute__((swift_name("srp")));
@property (class, readonly) SharedKitLanguageCodeDescription *ssw __attribute__((swift_name("ssw")));
@property (class, readonly) SharedKitLanguageCodeDescription *sun __attribute__((swift_name("sun")));
@property (class, readonly) SharedKitLanguageCodeDescription *swa __attribute__((swift_name("swa")));
@property (class, readonly) SharedKitLanguageCodeDescription *swe __attribute__((swift_name("swe")));
@property (class, readonly) SharedKitLanguageCodeDescription *tah __attribute__((swift_name("tah")));
@property (class, readonly) SharedKitLanguageCodeDescription *tam __attribute__((swift_name("tam")));
@property (class, readonly) SharedKitLanguageCodeDescription *tat __attribute__((swift_name("tat")));
@property (class, readonly) SharedKitLanguageCodeDescription *tel __attribute__((swift_name("tel")));
@property (class, readonly) SharedKitLanguageCodeDescription *tgk __attribute__((swift_name("tgk")));
@property (class, readonly) SharedKitLanguageCodeDescription *tgl __attribute__((swift_name("tgl")));
@property (class, readonly) SharedKitLanguageCodeDescription *tha __attribute__((swift_name("tha")));
@property (class, readonly) SharedKitLanguageCodeDescription *tir __attribute__((swift_name("tir")));
@property (class, readonly) SharedKitLanguageCodeDescription *ton __attribute__((swift_name("ton")));
@property (class, readonly) SharedKitLanguageCodeDescription *tsn __attribute__((swift_name("tsn")));
@property (class, readonly) SharedKitLanguageCodeDescription *tso __attribute__((swift_name("tso")));
@property (class, readonly) SharedKitLanguageCodeDescription *tuk __attribute__((swift_name("tuk")));
@property (class, readonly) SharedKitLanguageCodeDescription *tur __attribute__((swift_name("tur")));
@property (class, readonly) SharedKitLanguageCodeDescription *twi __attribute__((swift_name("twi")));
@property (class, readonly) SharedKitLanguageCodeDescription *uig __attribute__((swift_name("uig")));
@property (class, readonly) SharedKitLanguageCodeDescription *ukr __attribute__((swift_name("ukr")));
@property (class, readonly) SharedKitLanguageCodeDescription *urd __attribute__((swift_name("urd")));
@property (class, readonly) SharedKitLanguageCodeDescription *uzb __attribute__((swift_name("uzb")));
@property (class, readonly) SharedKitLanguageCodeDescription *ven __attribute__((swift_name("ven")));
@property (class, readonly) SharedKitLanguageCodeDescription *vie __attribute__((swift_name("vie")));
@property (class, readonly) SharedKitLanguageCodeDescription *vol __attribute__((swift_name("vol")));
@property (class, readonly) SharedKitLanguageCodeDescription *wln __attribute__((swift_name("wln")));
@property (class, readonly) SharedKitLanguageCodeDescription *wol __attribute__((swift_name("wol")));
@property (class, readonly) SharedKitLanguageCodeDescription *xho __attribute__((swift_name("xho")));
@property (class, readonly) SharedKitLanguageCodeDescription *yid __attribute__((swift_name("yid")));
@property (class, readonly) SharedKitLanguageCodeDescription *yor __attribute__((swift_name("yor")));
@property (class, readonly) SharedKitLanguageCodeDescription *zha __attribute__((swift_name("zha")));
@property (class, readonly) SharedKitLanguageCodeDescription *zho __attribute__((swift_name("zho")));
@property (class, readonly) SharedKitLanguageCodeDescription *zul __attribute__((swift_name("zul")));
+ (SharedKitKotlinArray<SharedKitLanguageCodeDescription *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitLanguageCodeDescription *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *code __attribute__((swift_name("code")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("LanguageCodeDescription.Companion")))
@interface SharedKitLanguageCodeDescriptionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitLanguageCodeDescriptionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitLanguageCodeDescription * _Nullable)fromCodeCode:(NSString *)code __attribute__((swift_name("fromCode(code:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MerchantCategoryCodeDescription")))
@interface SharedKitMerchantCategoryCodeDescription : SharedKitKotlinEnum<SharedKitMerchantCategoryCodeDescription *>
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly, getter=companion) SharedKitMerchantCategoryCodeDescriptionCompanion *companion __attribute__((swift_name("companion")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc0742 __attribute__((swift_name("mcc0742")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc0743 __attribute__((swift_name("mcc0743")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc0744 __attribute__((swift_name("mcc0744")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc0763 __attribute__((swift_name("mcc0763")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc0780 __attribute__((swift_name("mcc0780")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1520 __attribute__((swift_name("mcc1520")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1711 __attribute__((swift_name("mcc1711")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1731 __attribute__((swift_name("mcc1731")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1740 __attribute__((swift_name("mcc1740")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1750 __attribute__((swift_name("mcc1750")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1761 __attribute__((swift_name("mcc1761")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1771 __attribute__((swift_name("mcc1771")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc1799 __attribute__((swift_name("mcc1799")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc2741 __attribute__((swift_name("mcc2741")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc2791 __attribute__((swift_name("mcc2791")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc2842 __attribute__((swift_name("mcc2842")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4011 __attribute__((swift_name("mcc4011")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4111 __attribute__((swift_name("mcc4111")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4112 __attribute__((swift_name("mcc4112")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4119 __attribute__((swift_name("mcc4119")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4121 __attribute__((swift_name("mcc4121")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4131 __attribute__((swift_name("mcc4131")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4214 __attribute__((swift_name("mcc4214")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4215 __attribute__((swift_name("mcc4215")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4225 __attribute__((swift_name("mcc4225")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4411 __attribute__((swift_name("mcc4411")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4457 __attribute__((swift_name("mcc4457")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4468 __attribute__((swift_name("mcc4468")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4511 __attribute__((swift_name("mcc4511")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4582 __attribute__((swift_name("mcc4582")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4722 __attribute__((swift_name("mcc4722")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4784 __attribute__((swift_name("mcc4784")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4789 __attribute__((swift_name("mcc4789")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4812 __attribute__((swift_name("mcc4812")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4814 __attribute__((swift_name("mcc4814")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4815 __attribute__((swift_name("mcc4815")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4816 __attribute__((swift_name("mcc4816")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4821 __attribute__((swift_name("mcc4821")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4829 __attribute__((swift_name("mcc4829")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4899 __attribute__((swift_name("mcc4899")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc4900 __attribute__((swift_name("mcc4900")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5013 __attribute__((swift_name("mcc5013")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5021 __attribute__((swift_name("mcc5021")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5039 __attribute__((swift_name("mcc5039")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5044 __attribute__((swift_name("mcc5044")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5045 __attribute__((swift_name("mcc5045")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5046 __attribute__((swift_name("mcc5046")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5047 __attribute__((swift_name("mcc5047")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5051 __attribute__((swift_name("mcc5051")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5065 __attribute__((swift_name("mcc5065")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5072 __attribute__((swift_name("mcc5072")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5074 __attribute__((swift_name("mcc5074")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5085 __attribute__((swift_name("mcc5085")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5094 __attribute__((swift_name("mcc5094")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5099 __attribute__((swift_name("mcc5099")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5111 __attribute__((swift_name("mcc5111")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5122 __attribute__((swift_name("mcc5122")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5131 __attribute__((swift_name("mcc5131")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5137 __attribute__((swift_name("mcc5137")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5139 __attribute__((swift_name("mcc5139")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5169 __attribute__((swift_name("mcc5169")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5172 __attribute__((swift_name("mcc5172")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5192 __attribute__((swift_name("mcc5192")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5193 __attribute__((swift_name("mcc5193")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5198 __attribute__((swift_name("mcc5198")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5199 __attribute__((swift_name("mcc5199")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5200 __attribute__((swift_name("mcc5200")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5211 __attribute__((swift_name("mcc5211")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5231 __attribute__((swift_name("mcc5231")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5251 __attribute__((swift_name("mcc5251")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5261 __attribute__((swift_name("mcc5261")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5271 __attribute__((swift_name("mcc5271")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5300 __attribute__((swift_name("mcc5300")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5309 __attribute__((swift_name("mcc5309")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5310 __attribute__((swift_name("mcc5310")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5311 __attribute__((swift_name("mcc5311")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5331 __attribute__((swift_name("mcc5331")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5399 __attribute__((swift_name("mcc5399")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5411 __attribute__((swift_name("mcc5411")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5422 __attribute__((swift_name("mcc5422")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5441 __attribute__((swift_name("mcc5441")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5451 __attribute__((swift_name("mcc5451")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5462 __attribute__((swift_name("mcc5462")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5499 __attribute__((swift_name("mcc5499")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5511 __attribute__((swift_name("mcc5511")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5521 __attribute__((swift_name("mcc5521")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5531 __attribute__((swift_name("mcc5531")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5532 __attribute__((swift_name("mcc5532")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5533 __attribute__((swift_name("mcc5533")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5541 __attribute__((swift_name("mcc5541")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5542 __attribute__((swift_name("mcc5542")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5551 __attribute__((swift_name("mcc5551")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5561 __attribute__((swift_name("mcc5561")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5571 __attribute__((swift_name("mcc5571")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5592 __attribute__((swift_name("mcc5592")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5598 __attribute__((swift_name("mcc5598")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5599 __attribute__((swift_name("mcc5599")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5611 __attribute__((swift_name("mcc5611")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5621 __attribute__((swift_name("mcc5621")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5631 __attribute__((swift_name("mcc5631")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5641 __attribute__((swift_name("mcc5641")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5651 __attribute__((swift_name("mcc5651")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5655 __attribute__((swift_name("mcc5655")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5661 __attribute__((swift_name("mcc5661")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5681 __attribute__((swift_name("mcc5681")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5691 __attribute__((swift_name("mcc5691")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5697 __attribute__((swift_name("mcc5697")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5698 __attribute__((swift_name("mcc5698")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5699 __attribute__((swift_name("mcc5699")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5712 __attribute__((swift_name("mcc5712")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5713 __attribute__((swift_name("mcc5713")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5714 __attribute__((swift_name("mcc5714")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5715 __attribute__((swift_name("mcc5715")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5718 __attribute__((swift_name("mcc5718")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5719 __attribute__((swift_name("mcc5719")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5722 __attribute__((swift_name("mcc5722")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5732 __attribute__((swift_name("mcc5732")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5733 __attribute__((swift_name("mcc5733")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5734 __attribute__((swift_name("mcc5734")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5735 __attribute__((swift_name("mcc5735")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5811 __attribute__((swift_name("mcc5811")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5812 __attribute__((swift_name("mcc5812")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5813 __attribute__((swift_name("mcc5813")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5814 __attribute__((swift_name("mcc5814")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5815 __attribute__((swift_name("mcc5815")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5816 __attribute__((swift_name("mcc5816")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5817 __attribute__((swift_name("mcc5817")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5818 __attribute__((swift_name("mcc5818")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5912 __attribute__((swift_name("mcc5912")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5921 __attribute__((swift_name("mcc5921")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5931 __attribute__((swift_name("mcc5931")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5932 __attribute__((swift_name("mcc5932")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5933 __attribute__((swift_name("mcc5933")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5935 __attribute__((swift_name("mcc5935")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5937 __attribute__((swift_name("mcc5937")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5940 __attribute__((swift_name("mcc5940")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5941 __attribute__((swift_name("mcc5941")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5942 __attribute__((swift_name("mcc5942")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5943 __attribute__((swift_name("mcc5943")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5944 __attribute__((swift_name("mcc5944")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5945 __attribute__((swift_name("mcc5945")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5946 __attribute__((swift_name("mcc5946")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5947 __attribute__((swift_name("mcc5947")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5948 __attribute__((swift_name("mcc5948")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5949 __attribute__((swift_name("mcc5949")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5950 __attribute__((swift_name("mcc5950")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5960 __attribute__((swift_name("mcc5960")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5962 __attribute__((swift_name("mcc5962")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5963 __attribute__((swift_name("mcc5963")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5964 __attribute__((swift_name("mcc5964")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5965 __attribute__((swift_name("mcc5965")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5966 __attribute__((swift_name("mcc5966")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5967 __attribute__((swift_name("mcc5967")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5968 __attribute__((swift_name("mcc5968")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5969 __attribute__((swift_name("mcc5969")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5970 __attribute__((swift_name("mcc5970")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5971 __attribute__((swift_name("mcc5971")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5972 __attribute__((swift_name("mcc5972")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5973 __attribute__((swift_name("mcc5973")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5975 __attribute__((swift_name("mcc5975")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5976 __attribute__((swift_name("mcc5976")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5977 __attribute__((swift_name("mcc5977")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5978 __attribute__((swift_name("mcc5978")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5983 __attribute__((swift_name("mcc5983")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5992 __attribute__((swift_name("mcc5992")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5993 __attribute__((swift_name("mcc5993")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5994 __attribute__((swift_name("mcc5994")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5995 __attribute__((swift_name("mcc5995")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5996 __attribute__((swift_name("mcc5996")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5997 __attribute__((swift_name("mcc5997")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5998 __attribute__((swift_name("mcc5998")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc5999 __attribute__((swift_name("mcc5999")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc6010 __attribute__((swift_name("mcc6010")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc6011 __attribute__((swift_name("mcc6011")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc6012 __attribute__((swift_name("mcc6012")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc6051 __attribute__((swift_name("mcc6051")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc6211 __attribute__((swift_name("mcc6211")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc6300 __attribute__((swift_name("mcc6300")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7011 __attribute__((swift_name("mcc7011")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7012 __attribute__((swift_name("mcc7012")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7032 __attribute__((swift_name("mcc7032")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7033 __attribute__((swift_name("mcc7033")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7210 __attribute__((swift_name("mcc7210")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7211 __attribute__((swift_name("mcc7211")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7216 __attribute__((swift_name("mcc7216")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7217 __attribute__((swift_name("mcc7217")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7221 __attribute__((swift_name("mcc7221")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7230 __attribute__((swift_name("mcc7230")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7251 __attribute__((swift_name("mcc7251")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7261 __attribute__((swift_name("mcc7261")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7273 __attribute__((swift_name("mcc7273")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7276 __attribute__((swift_name("mcc7276")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7277 __attribute__((swift_name("mcc7277")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7278 __attribute__((swift_name("mcc7278")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7296 __attribute__((swift_name("mcc7296")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7297 __attribute__((swift_name("mcc7297")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7298 __attribute__((swift_name("mcc7298")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7299 __attribute__((swift_name("mcc7299")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7311 __attribute__((swift_name("mcc7311")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7321 __attribute__((swift_name("mcc7321")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7322 __attribute__((swift_name("mcc7322")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7333 __attribute__((swift_name("mcc7333")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7338 __attribute__((swift_name("mcc7338")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7339 __attribute__((swift_name("mcc7339")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7342 __attribute__((swift_name("mcc7342")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7349 __attribute__((swift_name("mcc7349")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7361 __attribute__((swift_name("mcc7361")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7372 __attribute__((swift_name("mcc7372")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7375 __attribute__((swift_name("mcc7375")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7379 __attribute__((swift_name("mcc7379")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7392 __attribute__((swift_name("mcc7392")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7393 __attribute__((swift_name("mcc7393")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7394 __attribute__((swift_name("mcc7394")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7395 __attribute__((swift_name("mcc7395")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7399 __attribute__((swift_name("mcc7399")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7512 __attribute__((swift_name("mcc7512")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7513 __attribute__((swift_name("mcc7513")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7519 __attribute__((swift_name("mcc7519")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7523 __attribute__((swift_name("mcc7523")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7531 __attribute__((swift_name("mcc7531")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7534 __attribute__((swift_name("mcc7534")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7535 __attribute__((swift_name("mcc7535")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7538 __attribute__((swift_name("mcc7538")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7542 __attribute__((swift_name("mcc7542")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7549 __attribute__((swift_name("mcc7549")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7622 __attribute__((swift_name("mcc7622")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7623 __attribute__((swift_name("mcc7623")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7629 __attribute__((swift_name("mcc7629")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7631 __attribute__((swift_name("mcc7631")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7641 __attribute__((swift_name("mcc7641")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7692 __attribute__((swift_name("mcc7692")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7699 __attribute__((swift_name("mcc7699")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7800 __attribute__((swift_name("mcc7800")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7801 __attribute__((swift_name("mcc7801")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7802 __attribute__((swift_name("mcc7802")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7829 __attribute__((swift_name("mcc7829")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7832 __attribute__((swift_name("mcc7832")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7841 __attribute__((swift_name("mcc7841")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7911 __attribute__((swift_name("mcc7911")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7922 __attribute__((swift_name("mcc7922")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7929 __attribute__((swift_name("mcc7929")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7932 __attribute__((swift_name("mcc7932")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7933 __attribute__((swift_name("mcc7933")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7941 __attribute__((swift_name("mcc7941")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7991 __attribute__((swift_name("mcc7991")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7992 __attribute__((swift_name("mcc7992")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7993 __attribute__((swift_name("mcc7993")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7994 __attribute__((swift_name("mcc7994")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7995 __attribute__((swift_name("mcc7995")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7996 __attribute__((swift_name("mcc7996")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7997 __attribute__((swift_name("mcc7997")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7998 __attribute__((swift_name("mcc7998")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc7999 __attribute__((swift_name("mcc7999")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8011 __attribute__((swift_name("mcc8011")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8021 __attribute__((swift_name("mcc8021")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8031 __attribute__((swift_name("mcc8031")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8041 __attribute__((swift_name("mcc8041")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8042 __attribute__((swift_name("mcc8042")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8043 __attribute__((swift_name("mcc8043")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8049 __attribute__((swift_name("mcc8049")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8050 __attribute__((swift_name("mcc8050")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8062 __attribute__((swift_name("mcc8062")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8071 __attribute__((swift_name("mcc8071")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8099 __attribute__((swift_name("mcc8099")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8111 __attribute__((swift_name("mcc8111")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8211 __attribute__((swift_name("mcc8211")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8220 __attribute__((swift_name("mcc8220")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8241 __attribute__((swift_name("mcc8241")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8244 __attribute__((swift_name("mcc8244")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8249 __attribute__((swift_name("mcc8249")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8299 __attribute__((swift_name("mcc8299")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8351 __attribute__((swift_name("mcc8351")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8398 __attribute__((swift_name("mcc8398")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8641 __attribute__((swift_name("mcc8641")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8651 __attribute__((swift_name("mcc8651")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8661 __attribute__((swift_name("mcc8661")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8675 __attribute__((swift_name("mcc8675")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8699 __attribute__((swift_name("mcc8699")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8734 __attribute__((swift_name("mcc8734")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8911 __attribute__((swift_name("mcc8911")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8931 __attribute__((swift_name("mcc8931")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc8999 __attribute__((swift_name("mcc8999")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc9211 __attribute__((swift_name("mcc9211")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc9222 __attribute__((swift_name("mcc9222")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc9223 __attribute__((swift_name("mcc9223")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc9311 __attribute__((swift_name("mcc9311")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc9399 __attribute__((swift_name("mcc9399")));
@property (class, readonly) SharedKitMerchantCategoryCodeDescription *mcc9402 __attribute__((swift_name("mcc9402")));
+ (SharedKitKotlinArray<SharedKitMerchantCategoryCodeDescription *> *)values __attribute__((swift_name("values()")));
@property (class, readonly) NSArray<SharedKitMerchantCategoryCodeDescription *> *entries __attribute__((swift_name("entries")));
@property (readonly) NSString *category __attribute__((swift_name("category")));
@property (readonly) int32_t code __attribute__((swift_name("code")));
@property (readonly) NSString *description_ __attribute__((swift_name("description_")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MerchantCategoryCodeDescription.Companion")))
@interface SharedKitMerchantCategoryCodeDescriptionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitMerchantCategoryCodeDescriptionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitMerchantCategoryCodeDescription * _Nullable)fromCodeCode:(int32_t)code __attribute__((swift_name("fromCode(code:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinByteArray")))
@interface SharedKitKotlinByteArray : SharedKitBase
+ (instancetype)arrayWithSize:(int32_t)size __attribute__((swift_name("init(size:)")));
+ (instancetype)arrayWithSize:(int32_t)size init:(SharedKitByte *(^)(SharedKitInt *))init __attribute__((swift_name("init(size:init:)")));
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (int8_t)getIndex:(int32_t)index __attribute__((swift_name("get(index:)")));
- (SharedKitKotlinByteIterator *)iterator __attribute__((swift_name("iterator()")));
- (void)setIndex:(int32_t)index value:(int8_t)value __attribute__((swift_name("set(index:value:)")));
@property (readonly) int32_t size __attribute__((swift_name("size")));
@end

@interface SharedKitKotlinByteArray (Extensions)
- (NSString *)toHexString __attribute__((swift_name("toHexString()")));
- (int32_t)toIntBigEndian:(BOOL)bigEndian __attribute__((swift_name("toInt(bigEndian:)")));
@end

__attribute__((swift_name("KotlinCharSequence")))
@protocol SharedKitKotlinCharSequence
@required
- (unichar)getIndex:(int32_t)index __attribute__((swift_name("get(index:)")));
- (id)subSequenceStartIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("subSequence(startIndex:endIndex:)")));
@property (readonly) int32_t length __attribute__((swift_name("length")));
@end

__attribute__((swift_name("KotlinAppendable")))
@protocol SharedKitKotlinAppendable
@required
- (id<SharedKitKotlinAppendable>)appendValue:(unichar)value __attribute__((swift_name("append(value:)")));
- (id<SharedKitKotlinAppendable>)appendValue_:(id _Nullable)value __attribute__((swift_name("append(value_:)")));
- (id<SharedKitKotlinAppendable>)appendValue:(id _Nullable)value startIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("append(value:startIndex:endIndex:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinStringBuilder")))
@interface SharedKitKotlinStringBuilder : SharedKitBase <SharedKitKotlinCharSequence, SharedKitKotlinAppendable>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (instancetype)initWithContent:(id)content __attribute__((swift_name("init(content:)"))) __attribute__((objc_designated_initializer));
- (instancetype)initWithCapacity:(int32_t)capacity __attribute__((swift_name("init(capacity:)"))) __attribute__((objc_designated_initializer));
- (instancetype)initWithContent_:(NSString *)content __attribute__((swift_name("init(content_:)"))) __attribute__((objc_designated_initializer));
- (SharedKitKotlinStringBuilder *)appendValue__:(id _Nullable)value __attribute__((swift_name("append(value__:)")));
- (SharedKitKotlinStringBuilder *)appendValue___:(BOOL)value __attribute__((swift_name("append(value___:)")));
- (SharedKitKotlinStringBuilder *)appendValue____:(int8_t)value __attribute__((swift_name("append(value____:)")));
- (SharedKitKotlinStringBuilder *)appendValue:(unichar)value __attribute__((swift_name("append(value:)")));
- (SharedKitKotlinStringBuilder *)appendValue_____:(SharedKitKotlinCharArray *)value __attribute__((swift_name("append(value_____:)")));
- (SharedKitKotlinStringBuilder *)appendValue_:(id _Nullable)value __attribute__((swift_name("append(value_:)")));
- (SharedKitKotlinStringBuilder *)appendValue______:(double)value __attribute__((swift_name("append(value______:)")));
- (SharedKitKotlinStringBuilder *)appendValue_______:(float)value __attribute__((swift_name("append(value_______:)")));
- (SharedKitKotlinStringBuilder *)appendValue________:(int32_t)value __attribute__((swift_name("append(value________:)")));
- (SharedKitKotlinStringBuilder *)appendValue_________:(int64_t)value __attribute__((swift_name("append(value_________:)")));
- (SharedKitKotlinStringBuilder *)appendValue__________:(int16_t)value __attribute__((swift_name("append(value__________:)")));
- (SharedKitKotlinStringBuilder *)appendValue___________:(NSString * _Nullable)value __attribute__((swift_name("append(value___________:)")));
- (SharedKitKotlinStringBuilder *)appendValue:(id _Nullable)value startIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("append(value:startIndex:endIndex:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)appendRangeValue:(SharedKitKotlinCharArray *)value startIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("appendRange(value:startIndex:endIndex:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)appendRangeValue:(id)value startIndex:(int32_t)startIndex endIndex_:(int32_t)endIndex __attribute__((swift_name("appendRange(value:startIndex:endIndex_:)")));
- (int32_t)capacity __attribute__((swift_name("capacity()")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)deleteAtIndex:(int32_t)index __attribute__((swift_name("deleteAt(index:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)deleteRangeStartIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("deleteRange(startIndex:endIndex:)")));
- (void)ensureCapacityMinimumCapacity:(int32_t)minimumCapacity __attribute__((swift_name("ensureCapacity(minimumCapacity:)")));
- (unichar)getIndex:(int32_t)index __attribute__((swift_name("get(index:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (int32_t)indexOfString:(NSString *)string __attribute__((swift_name("indexOf(string:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (int32_t)indexOfString:(NSString *)string startIndex:(int32_t)startIndex __attribute__((swift_name("indexOf(string:startIndex:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value:(id _Nullable)value __attribute__((swift_name("insert(index:value:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value_:(BOOL)value __attribute__((swift_name("insert(index:value_:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value__:(int8_t)value __attribute__((swift_name("insert(index:value__:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value___:(unichar)value __attribute__((swift_name("insert(index:value___:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value____:(SharedKitKotlinCharArray *)value __attribute__((swift_name("insert(index:value____:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value_____:(id _Nullable)value __attribute__((swift_name("insert(index:value_____:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value______:(double)value __attribute__((swift_name("insert(index:value______:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value_______:(float)value __attribute__((swift_name("insert(index:value_______:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value________:(int32_t)value __attribute__((swift_name("insert(index:value________:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value_________:(int64_t)value __attribute__((swift_name("insert(index:value_________:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value__________:(int16_t)value __attribute__((swift_name("insert(index:value__________:)")));
- (SharedKitKotlinStringBuilder *)insertIndex:(int32_t)index value___________:(NSString * _Nullable)value __attribute__((swift_name("insert(index:value___________:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)insertRangeIndex:(int32_t)index value:(SharedKitKotlinCharArray *)value startIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("insertRange(index:value:startIndex:endIndex:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)insertRangeIndex:(int32_t)index value:(id)value startIndex:(int32_t)startIndex endIndex_:(int32_t)endIndex __attribute__((swift_name("insertRange(index:value:startIndex:endIndex_:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (int32_t)lastIndexOfString:(NSString *)string __attribute__((swift_name("lastIndexOf(string:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (int32_t)lastIndexOfString:(NSString *)string startIndex:(int32_t)startIndex __attribute__((swift_name("lastIndexOf(string:startIndex:)")));
- (SharedKitKotlinStringBuilder *)reverse __attribute__((swift_name("reverse()")));
- (void)setIndex:(int32_t)index value:(unichar)value __attribute__((swift_name("set(index:value:)")));
- (void)setLengthNewLength:(int32_t)newLength __attribute__((swift_name("setLength(newLength:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (SharedKitKotlinStringBuilder *)setRangeStartIndex:(int32_t)startIndex endIndex:(int32_t)endIndex value:(NSString *)value __attribute__((swift_name("setRange(startIndex:endIndex:value:)")));
- (id)subSequenceStartIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("subSequence(startIndex:endIndex:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (NSString *)substringStartIndex:(int32_t)startIndex __attribute__((swift_name("substring(startIndex:)")));
- (NSString *)substringStartIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("substring(startIndex:endIndex:)")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.4")
*/
- (void)toCharArrayDestination:(SharedKitKotlinCharArray *)destination destinationOffset:(int32_t)destinationOffset startIndex:(int32_t)startIndex endIndex:(int32_t)endIndex __attribute__((swift_name("toCharArray(destination:destinationOffset:startIndex:endIndex:)")));
- (NSString *)description __attribute__((swift_name("description()")));
- (void)trimToSize __attribute__((swift_name("trimToSize()")));
@property (readonly) int32_t length __attribute__((swift_name("length")));
@end

@interface SharedKitKotlinStringBuilder (Extensions)
- (void)appendBitExplanationBits:(NSArray<NSString *> *)bits start:(int32_t)start end:(int32_t)end meaning:(NSString *)meaning lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("appendBitExplanation(bits:start:end:meaning:lineSeparator:)")));
- (void)appendBitMatrixHeader:(NSString *)header lineSeparator:(NSString *)lineSeparator __attribute__((swift_name("appendBitMatrix(header:lineSeparator:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("BytesExtKt")))
@interface SharedKitBytesExtKt : SharedKitBase
+ (int32_t)bits:(int8_t)receiver position:(int32_t)position length:(int32_t)length __attribute__((swift_name("bits(_:position:length:)")));
+ (NSString *)createBitMatrixHeader __attribute__((swift_name("createBitMatrixHeader()")));
+ (BOOL)matches:(int8_t)receiver mask:(int32_t)mask __attribute__((swift_name("matches(_:mask:)")));
+ (NSString *)toBitPattern:(NSArray<NSString *> *)receiver start:(int32_t)start end:(int32_t)end __attribute__((swift_name("toBitPattern(_:start:end:)")));
+ (NSArray<NSString *> *)toBitStrings:(int8_t)receiver __attribute__((swift_name("toBitStrings(_:)")));
+ (SharedKitKotlinByteArray *)toByteArray:(int32_t)receiver __attribute__((swift_name("toByteArray(_:)")));
@property (class, readonly) int32_t ALL_BITS_SET __attribute__((swift_name("ALL_BITS_SET")));
@property (class, readonly) int32_t BITS_IN_BYTE __attribute__((swift_name("BITS_IN_BYTE")));
@property (class, readonly) int32_t BYTE_MASK __attribute__((swift_name("BYTE_MASK")));
@property (class, readonly) int32_t HEX_CHAR_IN_BYTE __attribute__((swift_name("HEX_CHAR_IN_BYTE")));
@property (class, readonly) int32_t HEX_RADIX __attribute__((swift_name("HEX_RADIX")));
@property (class, readonly) int32_t MAX_BYTE_VALUE __attribute__((swift_name("MAX_BYTE_VALUE")));
@property (class, readonly) int32_t MAX_INT_BYTES __attribute__((swift_name("MAX_INT_BYTES")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CApiKt")))
@interface SharedKitCApiKt : SharedKitBase
+ (void *)emvExplainTagTagHex:(void *)tagHex valueHex:(void *)valueHex __attribute__((swift_name("emvExplainTag(tagHex:valueHex:)")));
+ (void)emvFreePtr:(void * _Nullable)ptr __attribute__((swift_name("emvFree(ptr:)")));
+ (void *)emvParseTlvHex:(void *)hex __attribute__((swift_name("emvParseTlv(hex:)")));
+ (void *)emvVersion __attribute__((swift_name("emvVersion()")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ExplanationKt")))
@interface SharedKitExplanationKt : SharedKitBase
+ (NSArray<NSString *> *)createBitRowBits:(NSArray<NSString *> *)bits start:(int32_t)start end:(int32_t)end meaning:(NSString *)meaning __attribute__((swift_name("createBitRow(bits:start:end:meaning:)")));
@property (class, readonly) NSArray<NSString *> *BIT_HEADER_CELLS __attribute__((swift_name("BIT_HEADER_CELLS")));
@property (class, readonly) NSString *EMPTY_CELL __attribute__((swift_name("EMPTY_CELL")));
@property (class, readonly) NSString *MEANING_CELL_PREFIX __attribute__((swift_name("MEANING_CELL_PREFIX")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SpecificationKt")))
@interface SharedKitSpecificationKt : SharedKitBase
+ (SharedKitTLVTagContext *)contextualize:(NSArray<id<SharedKitSpecification>> *)receiver tlvTag:(SharedKitTLVTag *)tlvTag __attribute__((swift_name("contextualize(_:tlvTag:)")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinArray")))
@interface SharedKitKotlinArray<T> : SharedKitBase
+ (instancetype)arrayWithSize:(int32_t)size init:(T _Nullable (^)(SharedKitInt *))init __attribute__((swift_name("init(size:init:)")));
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (T _Nullable)getIndex:(int32_t)index __attribute__((swift_name("get(index:)")));
- (id<SharedKitKotlinIterator>)iterator __attribute__((swift_name("iterator()")));
- (void)setIndex:(int32_t)index value:(T _Nullable)value __attribute__((swift_name("set(index:value:)")));
@property (readonly) int32_t size __attribute__((swift_name("size")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinEnumCompanion")))
@interface SharedKitKotlinEnumCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitKotlinEnumCompanion *shared __attribute__((swift_name("shared")));
@end


/**
 * @note annotations
 *   kotlinx.serialization.Serializable(with=NormalClass(value=kotlinx/datetime/serializers/InstantIso8601Serializer))
*/
__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Kotlinx_datetimeInstant")))
@interface SharedKitKotlinx_datetimeInstant : SharedKitBase <SharedKitKotlinComparable>
@property (class, readonly, getter=companion) SharedKitKotlinx_datetimeInstantCompanion *companion __attribute__((swift_name("companion")));
- (int32_t)compareToOther:(SharedKitKotlinx_datetimeInstant *)other __attribute__((swift_name("compareTo(other:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (SharedKitKotlinx_datetimeInstant *)minusDuration:(int64_t)duration __attribute__((swift_name("minus(duration:)")));
- (int64_t)minusOther:(SharedKitKotlinx_datetimeInstant *)other __attribute__((swift_name("minus(other:)")));
- (SharedKitKotlinx_datetimeInstant *)plusDuration:(int64_t)duration __attribute__((swift_name("plus(duration:)")));
- (int64_t)toEpochMilliseconds __attribute__((swift_name("toEpochMilliseconds()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) int64_t epochSeconds __attribute__((swift_name("epochSeconds")));
@property (readonly) int32_t nanosecondsOfSecond __attribute__((swift_name("nanosecondsOfSecond")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinUnit")))
@interface SharedKitKotlinUnit : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)unit __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitKotlinUnit *shared __attribute__((swift_name("shared")));
- (NSString *)description __attribute__((swift_name("description()")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Bitfield_parserBitFieldSchema")))
@interface SharedKitBitfield_parserBitFieldSchema : SharedKitBase
- (instancetype)initWithName:(NSString *)name expectedBytes:(int32_t)expectedBytes bytes:(NSArray<SharedKitBitfield_parserByteSchema *> *)bytes __attribute__((swift_name("init(name:expectedBytes:bytes:)"))) __attribute__((objc_designated_initializer));
- (SharedKitBitfield_parserParseResult *)parseData:(SharedKitKotlinByteArray *)data __attribute__((swift_name("parse(data:)")));
@property (readonly) NSArray<SharedKitBitfield_parserByteSchema *> *bytes __attribute__((swift_name("bytes")));
@property (readonly) int32_t expectedBytes __attribute__((swift_name("expectedBytes")));
@property (readonly) NSString *name __attribute__((swift_name("name")));
@end

__attribute__((swift_name("KotlinIterator")))
@protocol SharedKitKotlinIterator
@required
- (BOOL)hasNext __attribute__((swift_name("hasNext()")));
- (id _Nullable)next __attribute__((swift_name("next()")));
@end

__attribute__((swift_name("KotlinIntProgression")))
@interface SharedKitKotlinIntProgression : SharedKitBase <SharedKitKotlinIterable>
@property (class, readonly, getter=companion) SharedKitKotlinIntProgressionCompanion *companion __attribute__((swift_name("companion")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (BOOL)isEmpty __attribute__((swift_name("isEmpty()")));
- (SharedKitKotlinIntIterator *)iterator __attribute__((swift_name("iterator()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) int32_t first __attribute__((swift_name("first")));
@property (readonly) int32_t last __attribute__((swift_name("last")));
@property (readonly) int32_t step __attribute__((swift_name("step")));
@end

__attribute__((swift_name("KotlinClosedRange")))
@protocol SharedKitKotlinClosedRange
@required
- (BOOL)containsValue:(id)value __attribute__((swift_name("contains(value:)")));
- (BOOL)isEmpty __attribute__((swift_name("isEmpty()")));
@property (readonly) id endInclusive __attribute__((swift_name("endInclusive")));
@property (readonly) id start __attribute__((swift_name("start")));
@end


/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.9")
*/
__attribute__((swift_name("KotlinOpenEndRange")))
@protocol SharedKitKotlinOpenEndRange
@required
- (BOOL)containsValue_:(id)value __attribute__((swift_name("contains(value_:)")));
- (BOOL)isEmpty __attribute__((swift_name("isEmpty()")));
@property (readonly) id endExclusive __attribute__((swift_name("endExclusive")));
@property (readonly) id start __attribute__((swift_name("start")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinIntRange")))
@interface SharedKitKotlinIntRange : SharedKitKotlinIntProgression <SharedKitKotlinClosedRange, SharedKitKotlinOpenEndRange>
- (instancetype)initWithStart:(int32_t)start endInclusive:(int32_t)endInclusive __attribute__((swift_name("init(start:endInclusive:)"))) __attribute__((objc_designated_initializer));
@property (class, readonly, getter=companion) SharedKitKotlinIntRangeCompanion *companion __attribute__((swift_name("companion")));
- (BOOL)containsValue:(SharedKitInt *)value __attribute__((swift_name("contains(value:)")));
- (BOOL)containsValue_:(SharedKitInt *)value __attribute__((swift_name("contains(value_:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (BOOL)isEmpty __attribute__((swift_name("isEmpty()")));
- (NSString *)description __attribute__((swift_name("description()")));

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.9")
*/
@property (readonly) SharedKitInt *endExclusive __attribute__((swift_name("endExclusive"))) __attribute__((deprecated("Can throw an exception when it's impossible to represent the value with Int type, for example, when the range includes MAX_VALUE. It's recommended to use 'endInclusive' property that doesn't throw.")));
@property (readonly) SharedKitInt *endInclusive __attribute__((swift_name("endInclusive")));
@property (readonly) SharedKitInt *start __attribute__((swift_name("start")));
@end

__attribute__((swift_name("KotlinByteIterator")))
@interface SharedKitKotlinByteIterator : SharedKitBase <SharedKitKotlinIterator>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (SharedKitByte *)next __attribute__((swift_name("next()")));
- (int8_t)nextByte __attribute__((swift_name("nextByte()")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinCharArray")))
@interface SharedKitKotlinCharArray : SharedKitBase
+ (instancetype)arrayWithSize:(int32_t)size __attribute__((swift_name("init(size:)")));
+ (instancetype)arrayWithSize:(int32_t)size init:(id (^)(SharedKitInt *))init __attribute__((swift_name("init(size:init:)")));
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (unichar)getIndex:(int32_t)index __attribute__((swift_name("get(index:)")));
- (SharedKitKotlinCharIterator *)iterator __attribute__((swift_name("iterator()")));
- (void)setIndex:(int32_t)index value:(unichar)value __attribute__((swift_name("set(index:value:)")));
@property (readonly) int32_t size __attribute__((swift_name("size")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Kotlinx_datetimeInstant.Companion")))
@interface SharedKitKotlinx_datetimeInstantCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitKotlinx_datetimeInstantCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitKotlinx_datetimeInstant *)fromEpochMillisecondsEpochMilliseconds:(int64_t)epochMilliseconds __attribute__((swift_name("fromEpochMilliseconds(epochMilliseconds:)")));
- (SharedKitKotlinx_datetimeInstant *)fromEpochSecondsEpochSeconds:(int64_t)epochSeconds nanosecondAdjustment:(int32_t)nanosecondAdjustment __attribute__((swift_name("fromEpochSeconds(epochSeconds:nanosecondAdjustment:)")));
- (SharedKitKotlinx_datetimeInstant *)fromEpochSecondsEpochSeconds:(int64_t)epochSeconds nanosecondAdjustment_:(int64_t)nanosecondAdjustment __attribute__((swift_name("fromEpochSeconds(epochSeconds:nanosecondAdjustment_:)")));
- (SharedKitKotlinx_datetimeInstant *)now __attribute__((swift_name("now()"))) __attribute__((unavailable("Use Clock.System.now() instead")));
- (SharedKitKotlinx_datetimeInstant *)parseInput:(id)input format:(id<SharedKitKotlinx_datetimeDateTimeFormat>)format __attribute__((swift_name("parse(input:format:)")));
- (id<SharedKitKotlinx_serialization_coreKSerializer>)serializer __attribute__((swift_name("serializer()")));
@property (readonly) SharedKitKotlinx_datetimeInstant *DISTANT_FUTURE __attribute__((swift_name("DISTANT_FUTURE")));
@property (readonly) SharedKitKotlinx_datetimeInstant *DISTANT_PAST __attribute__((swift_name("DISTANT_PAST")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Bitfield_parserByteSchema")))
@interface SharedKitBitfield_parserByteSchema : SharedKitBase
- (instancetype)initWithIndex:(int32_t)index label:(NSString *)label fields:(NSArray<SharedKitBitfield_parserFieldDefinition *> *)fields __attribute__((swift_name("init(index:label:fields:)"))) __attribute__((objc_designated_initializer));
@property (readonly) NSArray<SharedKitBitfield_parserFieldDefinition *> *fields __attribute__((swift_name("fields")));
@property (readonly) int32_t index __attribute__((swift_name("index")));
@property (readonly) NSString *label __attribute__((swift_name("label")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Bitfield_parserParseResult")))
@interface SharedKitBitfield_parserParseResult : SharedKitBase
- (instancetype)initWithSchema:(SharedKitBitfield_parserBitFieldSchema *)schema rawBytes:(SharedKitKotlinByteArray *)rawBytes entries:(NSArray<SharedKitBitfield_parserParsedEntry *> *)entries __attribute__((swift_name("init(schema:rawBytes:entries:)"))) __attribute__((objc_designated_initializer));
- (SharedKitBitfield_parserParsedEntry *)entryForByteIndex:(int32_t)byteIndex field:(SharedKitBitfield_parserFieldDefinition *)field __attribute__((swift_name("entryFor(byteIndex:field:)")));
@property (readonly) NSArray<SharedKitBitfield_parserParsedEntry *> *entries __attribute__((swift_name("entries")));
@property (readonly) SharedKitKotlinByteArray *rawBytes __attribute__((swift_name("rawBytes")));
@property (readonly) SharedKitBitfield_parserBitFieldSchema *schema __attribute__((swift_name("schema")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinIntProgression.Companion")))
@interface SharedKitKotlinIntProgressionCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitKotlinIntProgressionCompanion *shared __attribute__((swift_name("shared")));
- (SharedKitKotlinIntProgression *)fromClosedRangeRangeStart:(int32_t)rangeStart rangeEnd:(int32_t)rangeEnd step:(int32_t)step __attribute__((swift_name("fromClosedRange(rangeStart:rangeEnd:step:)")));
@end

__attribute__((swift_name("KotlinIntIterator")))
@interface SharedKitKotlinIntIterator : SharedKitBase <SharedKitKotlinIterator>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (SharedKitInt *)next __attribute__((swift_name("next()")));
- (int32_t)nextInt __attribute__((swift_name("nextInt()")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinIntRange.Companion")))
@interface SharedKitKotlinIntRangeCompanion : SharedKitBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
@property (class, readonly, getter=shared) SharedKitKotlinIntRangeCompanion *shared __attribute__((swift_name("shared")));
@property (readonly) SharedKitKotlinIntRange *EMPTY __attribute__((swift_name("EMPTY")));
@end

__attribute__((swift_name("KotlinCharIterator")))
@interface SharedKitKotlinCharIterator : SharedKitBase <SharedKitKotlinIterator>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (id)next __attribute__((swift_name("next()")));
- (unichar)nextChar __attribute__((swift_name("nextChar()")));
@end

__attribute__((swift_name("Kotlinx_datetimeDateTimeFormat")))
@protocol SharedKitKotlinx_datetimeDateTimeFormat
@required
- (NSString *)formatValue:(id _Nullable)value __attribute__((swift_name("format(value:)")));
- (id<SharedKitKotlinAppendable>)formatToAppendable:(id<SharedKitKotlinAppendable>)appendable value:(id _Nullable)value __attribute__((swift_name("formatTo(appendable:value:)")));
- (id _Nullable)parseInput:(id)input __attribute__((swift_name("parse(input:)")));
- (id _Nullable)parseOrNullInput:(id)input __attribute__((swift_name("parseOrNull(input:)")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreSerializationStrategy")))
@protocol SharedKitKotlinx_serialization_coreSerializationStrategy
@required
- (void)serializeEncoder:(id<SharedKitKotlinx_serialization_coreEncoder>)encoder value:(id _Nullable)value __attribute__((swift_name("serialize(encoder:value:)")));
@property (readonly) id<SharedKitKotlinx_serialization_coreSerialDescriptor> descriptor __attribute__((swift_name("descriptor")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreDeserializationStrategy")))
@protocol SharedKitKotlinx_serialization_coreDeserializationStrategy
@required
- (id _Nullable)deserializeDecoder:(id<SharedKitKotlinx_serialization_coreDecoder>)decoder __attribute__((swift_name("deserialize(decoder:)")));
@property (readonly) id<SharedKitKotlinx_serialization_coreSerialDescriptor> descriptor __attribute__((swift_name("descriptor")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreKSerializer")))
@protocol SharedKitKotlinx_serialization_coreKSerializer <SharedKitKotlinx_serialization_coreSerializationStrategy, SharedKitKotlinx_serialization_coreDeserializationStrategy>
@required
@end

__attribute__((swift_name("Bitfield_parserFieldDefinition")))
@interface SharedKitBitfield_parserFieldDefinition : SharedKitBase
@property (readonly) SharedKitKotlinIntRange *bits __attribute__((swift_name("bits")));
@property (readonly) int32_t endBit __attribute__((swift_name("endBit")));
@property (readonly) NSString *name __attribute__((swift_name("name")));
@property (readonly) int32_t startBit __attribute__((swift_name("startBit")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Bitfield_parserParsedEntry")))
@interface SharedKitBitfield_parserParsedEntry : SharedKitBase
- (instancetype)initWithByteIndex:(int32_t)byteIndex field:(SharedKitBitfield_parserFieldDefinition *)field rawBits:(int32_t)rawBits resolvedLabel:(NSString *)resolvedLabel __attribute__((swift_name("init(byteIndex:field:rawBits:resolvedLabel:)"))) __attribute__((objc_designated_initializer));
@property (readonly) int32_t byteIndex __attribute__((swift_name("byteIndex")));
@property (readonly) SharedKitBitfield_parserFieldDefinition *field __attribute__((swift_name("field")));
@property (readonly) int32_t rawBits __attribute__((swift_name("rawBits")));
@property (readonly) NSString *resolvedLabel __attribute__((swift_name("resolvedLabel")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreEncoder")))
@protocol SharedKitKotlinx_serialization_coreEncoder
@required
- (id<SharedKitKotlinx_serialization_coreCompositeEncoder>)beginCollectionDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor collectionSize:(int32_t)collectionSize __attribute__((swift_name("beginCollection(descriptor:collectionSize:)")));
- (id<SharedKitKotlinx_serialization_coreCompositeEncoder>)beginStructureDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("beginStructure(descriptor:)")));
- (void)encodeBooleanValue:(BOOL)value __attribute__((swift_name("encodeBoolean(value:)")));
- (void)encodeByteValue:(int8_t)value __attribute__((swift_name("encodeByte(value:)")));
- (void)encodeCharValue:(unichar)value __attribute__((swift_name("encodeChar(value:)")));
- (void)encodeDoubleValue:(double)value __attribute__((swift_name("encodeDouble(value:)")));
- (void)encodeEnumEnumDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)enumDescriptor index:(int32_t)index __attribute__((swift_name("encodeEnum(enumDescriptor:index:)")));
- (void)encodeFloatValue:(float)value __attribute__((swift_name("encodeFloat(value:)")));
- (id<SharedKitKotlinx_serialization_coreEncoder>)encodeInlineDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("encodeInline(descriptor:)")));
- (void)encodeIntValue:(int32_t)value __attribute__((swift_name("encodeInt(value:)")));
- (void)encodeLongValue:(int64_t)value __attribute__((swift_name("encodeLong(value:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (void)encodeNotNullMark __attribute__((swift_name("encodeNotNullMark()")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (void)encodeNull __attribute__((swift_name("encodeNull()")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (void)encodeNullableSerializableValueSerializer:(id<SharedKitKotlinx_serialization_coreSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeNullableSerializableValue(serializer:value:)")));
- (void)encodeSerializableValueSerializer:(id<SharedKitKotlinx_serialization_coreSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeSerializableValue(serializer:value:)")));
- (void)encodeShortValue:(int16_t)value __attribute__((swift_name("encodeShort(value:)")));
- (void)encodeStringValue:(NSString *)value __attribute__((swift_name("encodeString(value:)")));
@property (readonly) SharedKitKotlinx_serialization_coreSerializersModule *serializersModule __attribute__((swift_name("serializersModule")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreSerialDescriptor")))
@protocol SharedKitKotlinx_serialization_coreSerialDescriptor
@required

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (NSArray<id<SharedKitKotlinAnnotation>> *)getElementAnnotationsIndex:(int32_t)index __attribute__((swift_name("getElementAnnotations(index:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (id<SharedKitKotlinx_serialization_coreSerialDescriptor>)getElementDescriptorIndex:(int32_t)index __attribute__((swift_name("getElementDescriptor(index:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (int32_t)getElementIndexName:(NSString *)name __attribute__((swift_name("getElementIndex(name:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (NSString *)getElementNameIndex:(int32_t)index __attribute__((swift_name("getElementName(index:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (BOOL)isElementOptionalIndex:(int32_t)index __attribute__((swift_name("isElementOptional(index:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
@property (readonly) NSArray<id<SharedKitKotlinAnnotation>> *annotations __attribute__((swift_name("annotations")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
@property (readonly) int32_t elementsCount __attribute__((swift_name("elementsCount")));
@property (readonly) BOOL isInline __attribute__((swift_name("isInline")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
@property (readonly) BOOL isNullable __attribute__((swift_name("isNullable")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
@property (readonly) SharedKitKotlinx_serialization_coreSerialKind *kind __attribute__((swift_name("kind")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
@property (readonly) NSString *serialName __attribute__((swift_name("serialName")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreDecoder")))
@protocol SharedKitKotlinx_serialization_coreDecoder
@required
- (id<SharedKitKotlinx_serialization_coreCompositeDecoder>)beginStructureDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("beginStructure(descriptor:)")));
- (BOOL)decodeBoolean __attribute__((swift_name("decodeBoolean()")));
- (int8_t)decodeByte __attribute__((swift_name("decodeByte()")));
- (unichar)decodeChar __attribute__((swift_name("decodeChar()")));
- (double)decodeDouble __attribute__((swift_name("decodeDouble()")));
- (int32_t)decodeEnumEnumDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)enumDescriptor __attribute__((swift_name("decodeEnum(enumDescriptor:)")));
- (float)decodeFloat __attribute__((swift_name("decodeFloat()")));
- (id<SharedKitKotlinx_serialization_coreDecoder>)decodeInlineDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("decodeInline(descriptor:)")));
- (int32_t)decodeInt __attribute__((swift_name("decodeInt()")));
- (int64_t)decodeLong __attribute__((swift_name("decodeLong()")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (BOOL)decodeNotNullMark __attribute__((swift_name("decodeNotNullMark()")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (SharedKitKotlinNothing * _Nullable)decodeNull __attribute__((swift_name("decodeNull()")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (id _Nullable)decodeNullableSerializableValueDeserializer:(id<SharedKitKotlinx_serialization_coreDeserializationStrategy>)deserializer __attribute__((swift_name("decodeNullableSerializableValue(deserializer:)")));
- (id _Nullable)decodeSerializableValueDeserializer:(id<SharedKitKotlinx_serialization_coreDeserializationStrategy>)deserializer __attribute__((swift_name("decodeSerializableValue(deserializer:)")));
- (int16_t)decodeShort __attribute__((swift_name("decodeShort()")));
- (NSString *)decodeString __attribute__((swift_name("decodeString()")));
@property (readonly) SharedKitKotlinx_serialization_coreSerializersModule *serializersModule __attribute__((swift_name("serializersModule")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreCompositeEncoder")))
@protocol SharedKitKotlinx_serialization_coreCompositeEncoder
@required
- (void)encodeBooleanElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(BOOL)value __attribute__((swift_name("encodeBooleanElement(descriptor:index:value:)")));
- (void)encodeByteElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(int8_t)value __attribute__((swift_name("encodeByteElement(descriptor:index:value:)")));
- (void)encodeCharElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(unichar)value __attribute__((swift_name("encodeCharElement(descriptor:index:value:)")));
- (void)encodeDoubleElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(double)value __attribute__((swift_name("encodeDoubleElement(descriptor:index:value:)")));
- (void)encodeFloatElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(float)value __attribute__((swift_name("encodeFloatElement(descriptor:index:value:)")));
- (id<SharedKitKotlinx_serialization_coreEncoder>)encodeInlineElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("encodeInlineElement(descriptor:index:)")));
- (void)encodeIntElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(int32_t)value __attribute__((swift_name("encodeIntElement(descriptor:index:value:)")));
- (void)encodeLongElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(int64_t)value __attribute__((swift_name("encodeLongElement(descriptor:index:value:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (void)encodeNullableSerializableElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index serializer:(id<SharedKitKotlinx_serialization_coreSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeNullableSerializableElement(descriptor:index:serializer:value:)")));
- (void)encodeSerializableElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index serializer:(id<SharedKitKotlinx_serialization_coreSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeSerializableElement(descriptor:index:serializer:value:)")));
- (void)encodeShortElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(int16_t)value __attribute__((swift_name("encodeShortElement(descriptor:index:value:)")));
- (void)encodeStringElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index value:(NSString *)value __attribute__((swift_name("encodeStringElement(descriptor:index:value:)")));
- (void)endStructureDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("endStructure(descriptor:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (BOOL)shouldEncodeElementDefaultDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("shouldEncodeElementDefault(descriptor:index:)")));
@property (readonly) SharedKitKotlinx_serialization_coreSerializersModule *serializersModule __attribute__((swift_name("serializersModule")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreSerializersModule")))
@interface SharedKitKotlinx_serialization_coreSerializersModule : SharedKitBase

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (void)dumpToCollector:(id<SharedKitKotlinx_serialization_coreSerializersModuleCollector>)collector __attribute__((swift_name("dumpTo(collector:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (id<SharedKitKotlinx_serialization_coreKSerializer> _Nullable)getContextualKClass:(id<SharedKitKotlinKClass>)kClass typeArgumentsSerializers:(NSArray<id<SharedKitKotlinx_serialization_coreKSerializer>> *)typeArgumentsSerializers __attribute__((swift_name("getContextual(kClass:typeArgumentsSerializers:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (id<SharedKitKotlinx_serialization_coreSerializationStrategy> _Nullable)getPolymorphicBaseClass:(id<SharedKitKotlinKClass>)baseClass value:(id)value __attribute__((swift_name("getPolymorphic(baseClass:value:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (id<SharedKitKotlinx_serialization_coreDeserializationStrategy> _Nullable)getPolymorphicBaseClass:(id<SharedKitKotlinKClass>)baseClass serializedClassName:(NSString * _Nullable)serializedClassName __attribute__((swift_name("getPolymorphic(baseClass:serializedClassName:)")));
@end

__attribute__((swift_name("KotlinAnnotation")))
@protocol SharedKitKotlinAnnotation
@required
@end


/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
__attribute__((swift_name("Kotlinx_serialization_coreSerialKind")))
@interface SharedKitKotlinx_serialization_coreSerialKind : SharedKitBase
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@end

__attribute__((swift_name("Kotlinx_serialization_coreCompositeDecoder")))
@protocol SharedKitKotlinx_serialization_coreCompositeDecoder
@required
- (BOOL)decodeBooleanElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeBooleanElement(descriptor:index:)")));
- (int8_t)decodeByteElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeByteElement(descriptor:index:)")));
- (unichar)decodeCharElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeCharElement(descriptor:index:)")));
- (int32_t)decodeCollectionSizeDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("decodeCollectionSize(descriptor:)")));
- (double)decodeDoubleElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeDoubleElement(descriptor:index:)")));
- (int32_t)decodeElementIndexDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("decodeElementIndex(descriptor:)")));
- (float)decodeFloatElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeFloatElement(descriptor:index:)")));
- (id<SharedKitKotlinx_serialization_coreDecoder>)decodeInlineElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeInlineElement(descriptor:index:)")));
- (int32_t)decodeIntElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeIntElement(descriptor:index:)")));
- (int64_t)decodeLongElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeLongElement(descriptor:index:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (id _Nullable)decodeNullableSerializableElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index deserializer:(id<SharedKitKotlinx_serialization_coreDeserializationStrategy>)deserializer previousValue:(id _Nullable)previousValue __attribute__((swift_name("decodeNullableSerializableElement(descriptor:index:deserializer:previousValue:)")));

/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
- (BOOL)decodeSequentially __attribute__((swift_name("decodeSequentially()")));
- (id _Nullable)decodeSerializableElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index deserializer:(id<SharedKitKotlinx_serialization_coreDeserializationStrategy>)deserializer previousValue:(id _Nullable)previousValue __attribute__((swift_name("decodeSerializableElement(descriptor:index:deserializer:previousValue:)")));
- (int16_t)decodeShortElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeShortElement(descriptor:index:)")));
- (NSString *)decodeStringElementDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeStringElement(descriptor:index:)")));
- (void)endStructureDescriptor:(id<SharedKitKotlinx_serialization_coreSerialDescriptor>)descriptor __attribute__((swift_name("endStructure(descriptor:)")));
@property (readonly) SharedKitKotlinx_serialization_coreSerializersModule *serializersModule __attribute__((swift_name("serializersModule")));
@end

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinNothing")))
@interface SharedKitKotlinNothing : SharedKitBase
@end


/**
 * @note annotations
 *   kotlinx.serialization.ExperimentalSerializationApi
*/
__attribute__((swift_name("Kotlinx_serialization_coreSerializersModuleCollector")))
@protocol SharedKitKotlinx_serialization_coreSerializersModuleCollector
@required
- (void)contextualKClass:(id<SharedKitKotlinKClass>)kClass provider:(id<SharedKitKotlinx_serialization_coreKSerializer> (^)(NSArray<id<SharedKitKotlinx_serialization_coreKSerializer>> *))provider __attribute__((swift_name("contextual(kClass:provider:)")));
- (void)contextualKClass:(id<SharedKitKotlinKClass>)kClass serializer:(id<SharedKitKotlinx_serialization_coreKSerializer>)serializer __attribute__((swift_name("contextual(kClass:serializer:)")));
- (void)polymorphicBaseClass:(id<SharedKitKotlinKClass>)baseClass actualClass:(id<SharedKitKotlinKClass>)actualClass actualSerializer:(id<SharedKitKotlinx_serialization_coreKSerializer>)actualSerializer __attribute__((swift_name("polymorphic(baseClass:actualClass:actualSerializer:)")));
- (void)polymorphicDefaultBaseClass:(id<SharedKitKotlinKClass>)baseClass defaultDeserializerProvider:(id<SharedKitKotlinx_serialization_coreDeserializationStrategy> _Nullable (^)(NSString * _Nullable))defaultDeserializerProvider __attribute__((swift_name("polymorphicDefault(baseClass:defaultDeserializerProvider:)"))) __attribute__((deprecated("Deprecated in favor of function with more precise name: polymorphicDefaultDeserializer")));
- (void)polymorphicDefaultDeserializerBaseClass:(id<SharedKitKotlinKClass>)baseClass defaultDeserializerProvider:(id<SharedKitKotlinx_serialization_coreDeserializationStrategy> _Nullable (^)(NSString * _Nullable))defaultDeserializerProvider __attribute__((swift_name("polymorphicDefaultDeserializer(baseClass:defaultDeserializerProvider:)")));
- (void)polymorphicDefaultSerializerBaseClass:(id<SharedKitKotlinKClass>)baseClass defaultSerializerProvider:(id<SharedKitKotlinx_serialization_coreSerializationStrategy> _Nullable (^)(id))defaultSerializerProvider __attribute__((swift_name("polymorphicDefaultSerializer(baseClass:defaultSerializerProvider:)")));
@end

__attribute__((swift_name("KotlinKDeclarationContainer")))
@protocol SharedKitKotlinKDeclarationContainer
@required
@end

__attribute__((swift_name("KotlinKAnnotatedElement")))
@protocol SharedKitKotlinKAnnotatedElement
@required
@end


/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.1")
*/
__attribute__((swift_name("KotlinKClassifier")))
@protocol SharedKitKotlinKClassifier
@required
@end

__attribute__((swift_name("KotlinKClass")))
@protocol SharedKitKotlinKClass <SharedKitKotlinKDeclarationContainer, SharedKitKotlinKAnnotatedElement, SharedKitKotlinKClassifier>
@required

/**
 * @note annotations
 *   kotlin.SinceKotlin(version="1.1")
*/
- (BOOL)isInstanceValue:(id _Nullable)value __attribute__((swift_name("isInstance(value:)")));
@property (readonly) NSString * _Nullable qualifiedName __attribute__((swift_name("qualifiedName")));
@property (readonly) NSString * _Nullable simpleName __attribute__((swift_name("simpleName")));
@end

#pragma pop_macro("_Nullable_result")
#pragma clang diagnostic pop
NS_ASSUME_NONNULL_END
