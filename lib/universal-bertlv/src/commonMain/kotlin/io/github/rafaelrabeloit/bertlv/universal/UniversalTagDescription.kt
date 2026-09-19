package io.github.rafaelrabeloit.bertlv.universal

import io.github.rafaelrabeloit.bertlv.components.TLVTag.Construction

// Rec. ITU-T X.680, clause 8, table 1 @ http://itu.int/ITU-T/X.680
enum class UniversalTagDescription(
    val type: Int,
    val info: String,
    val description: String,
    val construction: Construction,
) {
    EOC(
        type = 0,
        info = "End of Content",
        description = "Marks the end of content in a constructed type",
        construction = Construction.PRIMITIVE,
    ),
    BOOLEAN(
        type = 1,
        info = "Boolean",
        description = "Boolean value (true/false)",
        construction = Construction.PRIMITIVE,
    ),
    INTEGER(
        type = 2,
        info = "Integer",
        description = "Signed integer value",
        construction = Construction.PRIMITIVE,
    ),
    BIT_STRING(
        type = 3,
        info = "Bit String",
        description = "String of bits",
        construction = Construction.BOTH,
    ),
    OCTET_STRING(
        type = 4,
        info = "Octet String",
        description = "String of octets (bytes)",
        construction = Construction.BOTH,
    ),
    NULL(
        type = 5,
        info = "Null",
        description = "Null value",
        construction = Construction.PRIMITIVE,
    ),
    OBJECT_IDENTIFIER(
        type = 6,
        info = "Object Identifier",
        description = "Unique identifier for an object",
        construction = Construction.PRIMITIVE,
    ),
    OBJECT_DESCRIPTOR(
        type = 7,
        info = "Object Descriptor",
        description = "Human-readable description of an object",
        construction = Construction.BOTH,
    ),
    EXTERNAL(
        type = 8,
        info = "External",
        description = "External type definition",
        construction = Construction.CONSTRUCTED,
    ),
    REAL(
        type = 9,
        info = "Real",
        description = "Real number value",
        construction = Construction.PRIMITIVE,
    ),
    ENUMERATED(
        type = 10,
        info = "Enumerated",
        description = "Enumerated value from a set",
        construction = Construction.PRIMITIVE,
    ),
    EMBEDDED_PDV(
        type = 11,
        info = "Embedded PDV",
        description = "Embedded Presentation Data Value",
        construction = Construction.CONSTRUCTED,
    ),
    UTF8_STRING(
        type = 12,
        info = "UTF8 String",
        description = "UTF-8 encoded character string",
        construction = Construction.BOTH,
    ),
    RELATIVE_OID(
        type = 13,
        info = "Relative OID",
        description = "Relative object identifier",
        construction = Construction.PRIMITIVE,
    ),
    TIME(
        type = 14,
        info = "Time",
        description = "Time value",
        construction = Construction.PRIMITIVE,
    ),
    DATE_O(
        type = 15,
        info = "Date O",
        description = "Date value in O format",
        construction = Construction.PRIMITIVE,
    ),
    SEQUENCE(
        type = 16,
        info = "Sequence",
        description = "Ordered collection of elements",
        construction = Construction.CONSTRUCTED,
    ),
    SET(
        type = 17,
        info = "Set",
        description = "Unordered collection of elements",
        construction = Construction.CONSTRUCTED,
    ),
    NUMERIC_STRING(
        type = 18,
        info = "Numeric String",
        description = "String of numeric characters",
        construction = Construction.BOTH,
    ),
    PRINTABLE_STRING(
        type = 19,
        info = "Printable String",
        description = "String of printable characters",
        construction = Construction.BOTH,
    ),
    T61_STRING(
        type = 20,
        info = "T61 String",
        description = "T.61 (Teletex) character string",
        construction = Construction.BOTH,
    ),
    VIDEOTEX_STRING(
        type = 21,
        info = "Videotex String",
        description = "Videotex character string",
        construction = Construction.BOTH,
    ),
    IA5_STRING(
        type = 22,
        info = "IA5 String",
        description = "International Alphabet 5 (ASCII) string",
        construction = Construction.BOTH,
    ),
    UTC_TIME(
        type = 23,
        info = "UTC Time",
        description = "Coordinated Universal Time",
        construction = Construction.BOTH,
    ),
    GENERALIZED_TIME(
        type = 24,
        info = "Generalized Time",
        description = "Generalized time format",
        construction = Construction.BOTH,
    ),
    GRAPHIC_STRING(
        type = 25,
        info = "Graphic String",
        description = "String of graphic characters",
        construction = Construction.BOTH,
    ),
    VISIBLE_STRING(
        type = 26,
        info = "Visible String",
        description = "String of visible characters",
        construction = Construction.BOTH,
    ),
    GENERAL_STRING(
        type = 27,
        info = "General String",
        description = "General character string",
        construction = Construction.BOTH,
    ),
    UNIVERSAL_STRING(
        type = 28,
        info = "Universal String",
        description = "Universal character string (UCS-4)",
        construction = Construction.BOTH,
    ),
    CHARACTER_STRING(
        type = 29,
        info = "Character String",
        description = "Character string with specified character set",
        construction = Construction.BOTH,
    ),
    BMP_STRING(
        type = 30,
        info = "BMP String",
        description = "Basic Multilingual Plane string (UCS-2)",
        construction = Construction.BOTH,
    ),
    DATE(
        type = 31,
        info = "Date",
        description = "Calendar date",
        construction = Construction.PRIMITIVE,
    ),
    TIME_OF_DAY(
        type = 32,
        info = "Time of Day",
        description = "Time of day",
        construction = Construction.PRIMITIVE,
    ),
    DATE_TIME(
        type = 33,
        info = "Date Time",
        description = "Date and time",
        construction = Construction.PRIMITIVE,
    ),
    DURATION(
        type = 34,
        info = "Duration",
        description = "Time duration",
        construction = Construction.PRIMITIVE,
    ),
    ;

    companion object {
        fun findByType(type: Int): UniversalTagDescription? {
            return entries.find { it.type == type }
        }
    }
}
