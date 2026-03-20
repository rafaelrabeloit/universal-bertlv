package io.github.rafaelrabeloit.bertlv.universal

import io.github.rafaelrabeloit.bertlv.Specification
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.universal.value.BooleanValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.GeneralizedTimeValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.IA5StringValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.IntegerValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.NullValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.NumericStringValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.ObjectIdentifierValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.OctetStringValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.PrintableStringValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.RealValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.UTCTimeValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.UTF8StringValueParser
import io.github.rafaelrabeloit.bertlv.universal.value.VisibleStringValueParser
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ASNOneSpecificationTest {

    @Test
    fun tagexistsReturnsFalseForNonUniversalTags() {
        // Test different tag classifications
        assertFalse(ASNOneSpecification.tagExists(TLVTag.fromTag(0x9F01))) // Application tag
        assertFalse(ASNOneSpecification.tagExists(TLVTag.fromTag(0xBF01))) // Context-specific tag
        assertFalse(ASNOneSpecification.tagExists(TLVTag.fromTag(0xDF01))) // Private tag
    }

    @Test
    fun tagexistsReturnsTrueForKnownUniversalTags() {
        // Test a few representative universal tags
        assertTrue(ASNOneSpecification.tagExists(TLVTag.fromTag(0x01))) // Boolean
        assertTrue(ASNOneSpecification.tagExists(TLVTag.fromTag(0x02))) // Integer
        assertTrue(ASNOneSpecification.tagExists(TLVTag.fromTag(0x04))) // Octet String
    }

    @Test
    fun tagexistsReturnsFalseForUnknownUniversalTags() {
        // Test universal tags that don't exist in UniversalTagDescription
        assertFalse(ASNOneSpecification.tagExists(TLVTag.fromTag(0x3F35))) // Non-existent universal tag
    }

    @Test
    fun contextfortagThrowsTagnotexistexceptionForNonUniversalTags() {
        assertFailsWith<Specification.TagNotExistException> {
            ASNOneSpecification.contextForTag(TLVTag.fromTag(0x9F01)) // Application tag
        }
    }

    @Test
    fun contextfortagReturnsCorrectContextForKnownUniversalTags() {
        val booleanContext = ASNOneSpecification.contextForTag(TLVTag.fromTag(0x01))
        assertEquals("Boolean", booleanContext.info)
        assertTrue(booleanContext.description.isNotEmpty())

        val integerContext = ASNOneSpecification.contextForTag(TLVTag.fromTag(0x02))
        assertEquals("Integer", integerContext.info)
        assertTrue(integerContext.description.isNotEmpty())
    }

    @Test
    fun contextfortagThrowsTagnotexistexceptionForUnknownUniversalTags() {
        assertFailsWith<Specification.TagNotExistException> {
            ASNOneSpecification.contextForTag(TLVTag.fromTag(0x3F35)) // Non-existent universal tag
        }
    }

    @Test
    fun handlerofvalueThrowsTagnotexistexceptionForNonUniversalTags() {
        assertFailsWith<Specification.TagNotExistException> {
            ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x9F01)) // Application tag
        }
    }

    @Test
    fun handlerofvalueReturnsCorrectParserForAllUniversalTagTypes() {
        // Boolean
        val booleanHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x01))
        assertTrue(booleanHandler.parser is BooleanValueParser)

        // Integer
        val integerHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x02))
        assertTrue(integerHandler.parser is IntegerValueParser)

        // Octet String
        val octetStringHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x04))
        assertTrue(octetStringHandler.parser is OctetStringValueParser)

        // Null
        val nullHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x05))
        assertTrue(nullHandler.parser is NullValueParser)

        // Object Identifier
        val oidHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x06))
        assertTrue(oidHandler.parser is ObjectIdentifierValueParser)

        // Real
        val realHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x09))
        assertTrue(realHandler.parser is RealValueParser)

        // UTF8 String
        val utf8Handler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x0C))
        assertTrue(utf8Handler.parser is UTF8StringValueParser)

        // Numeric String
        val numericHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x12))
        assertTrue(numericHandler.parser is NumericStringValueParser)

        // Printable String
        val printableHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x13))
        assertTrue(printableHandler.parser is PrintableStringValueParser)

        // IA5 String
        val ia5Handler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x16))
        assertTrue(ia5Handler.parser is IA5StringValueParser)

        // UTC Time
        val utcTimeHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x17))
        assertTrue(utcTimeHandler.parser is UTCTimeValueParser)

        // Generalized Time
        val generalizedTimeHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x18))
        assertTrue(generalizedTimeHandler.parser is GeneralizedTimeValueParser)

        // Visible String
        val visibleStringHandler = ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x1A))
        assertTrue(visibleStringHandler.parser is VisibleStringValueParser)
    }

    @Test
    fun handlerofvalueThrowsTagnotexistexceptionForUnknownUniversalTags() {
        assertFailsWith<Specification.TagNotExistException> {
            ASNOneSpecification.handlerOfValue(TLVTag.fromTag(0x3F35)) // Non-existent universal tag
        }
    }
}
