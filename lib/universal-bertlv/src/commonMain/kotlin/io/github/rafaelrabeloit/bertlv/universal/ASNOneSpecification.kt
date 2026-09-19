package io.github.rafaelrabeloit.bertlv.universal

import io.github.rafaelrabeloit.bertlv.Specification
import io.github.rafaelrabeloit.bertlv.components.TLVTag
import io.github.rafaelrabeloit.bertlv.components.TLVValue
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

object ASNOneSpecification : Specification {
    override fun tagExists(tlvTag: TLVTag): Boolean {
        if (tlvTag.classification != TLVTag.Classification.UNIVERSAL) {
            return false
        }
        return UniversalTagDescription.findByType(tlvTag.type) != null
    }

    override fun contextForTag(tlvTag: TLVTag): TLVTag.Context {
        if (tlvTag.classification != TLVTag.Classification.UNIVERSAL) {
            throw Specification.TagNotExistException()
        }

        val tagDescription = UniversalTagDescription.findByType(tlvTag.type)

        return tagDescription?.let {
            TLVTag.Context(
                info = it.info,
                description = it.description,
            )
        } ?: throw Specification.TagNotExistException()
    }

    override fun handlerOfValue(tlvTag: TLVTag): TLVValue.ValueHandler<*> {
        if (tlvTag.classification != TLVTag.Classification.UNIVERSAL) {
            throw Specification.TagNotExistException()
        }

        val tagDescription = UniversalTagDescription.findByType(tlvTag.type)
            ?: throw Specification.TagNotExistException()

        val parser = createParserForTag(tagDescription)
        return TLVValue.ValueHandler(parser)
    }

    private fun createParserForTag(tagDescription: UniversalTagDescription): TLVValue.ValueParser<*> {
        return when (tagDescription) {
            UniversalTagDescription.BOOLEAN -> BooleanValueParser()
            UniversalTagDescription.INTEGER -> IntegerValueParser()
            UniversalTagDescription.NULL -> NullValueParser()
            UniversalTagDescription.OBJECT_IDENTIFIER -> ObjectIdentifierValueParser()
            UniversalTagDescription.REAL -> RealValueParser()
            UniversalTagDescription.UTF8_STRING -> UTF8StringValueParser()
            UniversalTagDescription.NUMERIC_STRING -> NumericStringValueParser()
            UniversalTagDescription.PRINTABLE_STRING -> PrintableStringValueParser()
            UniversalTagDescription.IA5_STRING -> IA5StringValueParser()
            UniversalTagDescription.UTC_TIME -> UTCTimeValueParser()
            UniversalTagDescription.GENERALIZED_TIME -> GeneralizedTimeValueParser()
            UniversalTagDescription.VISIBLE_STRING -> VisibleStringValueParser()
            UniversalTagDescription.OCTET_STRING -> OctetStringValueParser()
            else -> OctetStringValueParser() // Default to OctetString for unknown types
        }
    }
}
