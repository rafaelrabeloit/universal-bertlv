plugins {
    alias(libs.plugins.kotlin.multiplatform)
}

kotlin {
    jvm {
        withJava()
    }

    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":bertlv-emv"))
            }
        }

        commonTest {
            dependencies {
                implementation(libs.kotlin.test)
            }
        }
    }
}

// Configure the default jvmJar to be a fat JAR
tasks.named<Jar>("jvmJar") {
    manifest {
        attributes["Main-Class"] = "MainKt"
    }
    from(
        configurations.getByName("jvmRuntimeClasspath").map {
            if (it.isDirectory) it else zipTree(it)
        },
    )
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}
