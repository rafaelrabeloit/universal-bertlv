plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.maven.publish)
    id("org.jetbrains.kotlinx.kover")
    id("io.gitlab.arturbosch.detekt")
    id("org.jlleitschuh.gradle.ktlint")
}

version = "0.0.9"

kotlin {
    val xcfName = "sharedKit"

    jvm { }

    // Android Native targets — produce .so for dart:ffi
    androidNativeArm64 {
        binaries.sharedLib {
            baseName = "bertlv_emv"
        }
    }
    androidNativeX64 {
        binaries.sharedLib {
            baseName = "bertlv_emv"
        }
    }
    androidNativeArm32 {
        binaries.sharedLib {
            baseName = "bertlv_emv"
        }
    }

    // iOS targets — produce .framework for dart:ffi
    iosX64 {
        binaries {
            staticLib {
                baseName = "bertlv_emv"
            }
        }
    }

    iosArm64 {
        binaries {
            staticLib {
                baseName = "bertlv_emv"
            }
        }
    }

    iosSimulatorArm64 {
        binaries {
            staticLib {
                baseName = "bertlv_emv"
            }
        }
    }

    // JS target — for Flutter web via dart:js_interop
    js(IR) {
        browser()
        binaries.library()
    }

    sourceSets {
        commonMain {
            dependencies {
                implementation(libs.kotlinx.datetime)
                implementation("io.github.rafaelrabeloit:universal-bitfield:0.2.0")
            }
        }

        commonTest {
            dependencies {
                implementation(libs.kotlin.stdlib)
                implementation(libs.kotlin.test)
            }
        }
    }
}

koverReport {
    defaults {
        html {
            setReportDir(layout.buildDirectory.dir("reports/kover/html"))
        }
        xml {
            setReportFile(layout.buildDirectory.file("reports/kover/report.xml"))
        }
    }
}

detekt {
    buildUponDefaultConfig = true
    config.setFrom(files("${rootProject.projectDir}/detekt.yml"))
    baseline = file("${project.projectDir}/detekt-baseline.xml")

    source.setFrom(
        files(
            "src/commonMain/kotlin",
            "src/commonTest/kotlin",
            "src/jvmMain/kotlin",
            "src/jvmTest/kotlin",
            "src/iosX64Main/kotlin",
            "src/iosX64Test/kotlin",
            "src/iosArm64Main/kotlin",
            "src/iosArm64Test/kotlin",
            "src/iosSimulatorArm64Main/kotlin",
            "src/iosSimulatorArm64Test/kotlin",
        ),
    )
}

tasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {
    jvmTarget = "1.8"
    reports {
        html.required.set(true)
        xml.required.set(true)
        txt.required.set(false)
        sarif.required.set(true)
    }
}

ktlint {
    version.set("0.50.0")
    android.set(false)
    verbose.set(true)
    outputToConsole.set(true)
    ignoreFailures.set(false)
    enableExperimentalRules.set(true)
    filter {
        exclude("**/generated/**")
        include("**/kotlin/**")
    }
}

dependencies {
    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.23.5")
}

// Copy native .so files to Flutter plugin jniLibs
tasks.register<Copy>("copyAndroidNativeLibs") {
    description = "Copy Android native .so files to Flutter plugin jniLibs"
    group = "distribution"

    val pluginJniLibs = rootProject.projectDir.resolve(
        "../plugin/bertlv-emv/android/src/main/jniLibs",
    )
    val buildBin = layout.buildDirectory.dir("bin").get().asFile

    from("$buildBin/androidNativeArm64/releaseShared/libbertlv_emv.so") {
        into("arm64-v8a")
    }
    from("$buildBin/androidNativeX64/releaseShared/libbertlv_emv.so") {
        into("x86_64")
    }
    from("$buildBin/androidNativeArm32/releaseShared/libbertlv_emv.so") {
        into("armeabi-v7a")
    }

    into(pluginJniLibs)

    dependsOn(
        "linkReleaseSharedAndroidNativeArm64",
        "linkReleaseSharedAndroidNativeX64",
        "linkReleaseSharedAndroidNativeArm32",
    )
}

// Generate Version.kt so emvVersion() stays in sync with Gradle version
val generateVersionFile = tasks.register("generateVersionFile") {
    val outputDir = layout.buildDirectory.dir("generated/version/kotlin")
    val ver = version.toString()
    outputs.dir(outputDir)
    inputs.property("version", ver)
    doLast {
        val dir = outputDir.get().asFile.resolve(
            "io/github/rafaelrabeloit/bertlv/ffi",
        )
        dir.mkdirs()
        dir.resolve("Version.kt").writeText(
            """
            package io.github.rafaelrabeloit.bertlv.ffi

            internal const val LIB_VERSION = "$ver"
            """.trimIndent() + "\n",
        )
    }
}

kotlin.sourceSets.named("jsMain") {
    kotlin.srcDir(generateVersionFile.map { it.outputs.files.singleFile })
}

// Copy JS production distribution to Flutter web plugin
tasks.register<Copy>("copyJsToWebPlugin") {
    description = "Copy JS production distribution to Flutter bertlv_emv_web plugin"
    group = "distribution"

    val jsDistDir = layout.buildDirectory.dir(
        "dist/js/productionLibrary",
    )
    val webAssetsDir = rootProject.projectDir.resolve(
        "../plugin/bertlv_emv_web/web/assets/js",
    )

    from(jsDistDir) {
        include("*.js")
    }
    into(webAssetsDir)

    // Remove stale JS files before copying fresh ones
    doFirst {
        webAssetsDir.listFiles()?.filter { it.extension == "js" }?.forEach { it.delete() }
    }

    dependsOn("jsBrowserProductionLibraryDistribution")
}

private fun Project.signingConfigured(): Boolean =
    listOf("signingInMemoryKey", "signing.keyId", "signing.secretKeyRingFile")
        .any { (findProperty(it) as? String)?.isNotBlank() == true }

mavenPublishing {
    publishToMavenCentral(automaticRelease = true)
    if (signingConfigured()) {
        signAllPublications()
    }

    coordinates("io.github.rafaelrabeloit", "bertlv-emv", version.toString())

    pom {
        name.set("Universal BERTLV EMV")
        description.set("Kotlin Multiplatform BER-TLV parser and EMV tag explainers")
        url.set("https://github.com/rafaelrabeloit/universal-bertlv")
        licenses {
            license {
                name.set("MIT License")
                url.set("https://opensource.org/licenses/MIT")
            }
        }
        developers {
            developer {
                id.set("rafaelrabeloit")
                name.set("Rafael")
            }
        }
        scm {
            url.set("https://github.com/rafaelrabeloit/universal-bertlv")
            connection.set("scm:git:git://github.com/rafaelrabeloit/universal-bertlv.git")
            developerConnection.set("scm:git:ssh://github.com/rafaelrabeloit/universal-bertlv.git")
        }
    }
}

publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/rafaelrabeloit/universal-bertlv")
            credentials {
                username = project.findProperty("gpr.user") as String? ?: System.getenv("GITHUB_ACTOR")
                password = project.findProperty("gpr.key") as String? ?: System.getenv("GITHUB_TOKEN")
            }
        }
    }
}
