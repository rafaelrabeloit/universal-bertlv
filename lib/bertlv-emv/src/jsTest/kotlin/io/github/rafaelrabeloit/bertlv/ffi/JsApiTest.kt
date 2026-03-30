package io.github.rafaelrabeloit.bertlv.ffi

import kotlin.test.Test
import kotlin.test.assertTrue

class JsApiTest {

    @Test
    fun constructedTlvIncludesChildrenInJson() {
        // Tag 6F (FCI Template) is a constructed tag containing:
        //   Tag 84 (DF Name): 07 bytes "1PAY.SYS.DDF01" (truncated to 7 for brevity)
        //   Tag A5 (FCI Proprietary Template) is constructed, containing:
        //     Tag 88 (SFI): 01 byte
        // Full hex: 6F 0C 84 07 315041592E5359 A5 03 88 01 01
        // But let's use a simpler well-known example:
        // 6F 07 84 02 AABB A5 01 CC
        // - 6F len=07 (constructed)
        //   - 84 len=02 value=AABB (primitive)
        //   - A5 len=01 value=CC (constructed, but with raw value since CC isn't valid TLV)

        // Use a minimal constructed TLV: E1 05 9F01 02 AABB
        // Actually let's use the simplest case: a constructed tag with one primitive child
        // Tag 70 (EMV Proprietary Template, constructed): 70 04 9F27 01 80
        val hex = "70049f270180"
        val json = emvParseTlv(hex)

        // The outer tag 70 should be constructed and have children
        assertTrue(json.contains("\"isConstructed\":true"), "Should mark 70 as constructed")
        assertTrue(json.contains("\"children\":["), "Should include children array")
        // The child tag 9F27 should appear inside children
        assertTrue(json.contains("\"tag\":\"9f27\""), "Should contain child tag 9F27")
    }

    @Test
    fun primitiveTlvDoesNotIncludeChildren() {
        // Tag 9F27 (Cryptogram Type) is primitive: 9F27 01 80
        val hex = "9f270180"
        val json = emvParseTlv(hex)

        assertTrue(json.contains("\"isConstructed\":false"), "Should mark 9F27 as primitive")
        assertTrue(!json.contains("\"children\""), "Primitive TLV should not have children field")
    }
}
