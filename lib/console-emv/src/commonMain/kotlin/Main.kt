import io.github.rafaelrabeloit.bertlv.TLV
import io.github.rafaelrabeloit.bertlv.universal.ASNOneSpecification
import io.github.rafaelrabeloit.emv.EmvSpecification

/**
 * Converts a hex string to a ByteArray.
 * @param hexString The hex string to convert (e.g., "95050400000000")
 * @return ByteArray representation of the hex string
 */
fun String.hexToByteArray(): ByteArray {
    require(length % 2 == 0) { "Hex string must have even length" }
    require(all { it.isDigit() || it.uppercaseChar() in 'A'..'F' }) {
        "Hex string must contain only valid hex characters (0-9, A-F)"
    }

    return chunked(2)
        .map { it.toInt(16).toByte() }
        .toByteArray()
}

/**
 * Main function that processes command line arguments and parses TLV data.
 */
fun main(args: Array<String>) {
    if (args.isEmpty()) {
        printUsage()
        return
    }

    when (args[0].lowercase()) {
        "tlv" -> {
            if (args.size < 2) {
                println("Error: Missing hex string argument")
                printUsage()
                return
            }

            val hexString = args[1]

            try {
                // Convert hex string to byte array
                val bytes = hexString.hexToByteArray()

                // Parse TLV using both ASN.1 and EMV specifications
                val tlv = TLV.fromTlvBuffer(bytes, listOf(ASNOneSpecification, EmvSpecification))

                // Extract and print components
                printTlvComponents(tlv)
            } catch (e: Exception) {
                println("Error parsing TLV data: ${e.message}")
                e.printStackTrace()
            }
        }
        else -> {
            println("Error: Unknown command '${args[0]}'")
            printUsage()
        }
    }
}

/**
 * Prints the TLV components using the explain method for detailed analysis.
 */
private fun printTlvComponents(tlv: TLV<*>) {
    // Print detailed explanation using the explain method
    println(tlv.explain().toString())
}

/**
 * Prints usage information.
 */
private fun printUsage() {
    println("Usage: console-emv <command> <arguments>")
    println()
    println("Commands:")
    println("  tlv <hex_string>    Parse TLV data from hex string")
    println()
    println("Examples:")
    println("  console-emv tlv 95050400000000")
    println("  console-emv tlv 5A08123456789012345F")
}
