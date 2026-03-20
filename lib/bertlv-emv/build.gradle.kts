plugins {
    alias(libs.plugins.kotlin.multiplatform)
    id("org.jetbrains.kotlinx.kover")
    id("io.gitlab.arturbosch.detekt")
    id("org.jlleitschuh.gradle.ktlint")
    id("maven-publish")
}

version = "0.0.1"

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

publishing {
    publications.withType<MavenPublication>().configureEach {
        if (name == "kotlinMultiplatform") {
            artifactId = project.name
        }
    }
    repositories {
        mavenLocal()
    }
}
