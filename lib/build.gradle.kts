// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.multiplatform) apply false
    alias(libs.plugins.android.kotlin.multiplatform.library) apply false
    id("org.jetbrains.kotlinx.kover") version "0.7.6" apply false
    id("io.gitlab.arturbosch.detekt") version "1.23.5" apply false
    id("org.jlleitschuh.gradle.ktlint") version "12.1.0" apply false
}

// Configure detekt for all projects
allprojects {
    group = "io.github.rafaelrabeloit.${rootProject.name}"

    apply(plugin = "io.gitlab.arturbosch.detekt")
    apply(plugin = "org.jlleitschuh.gradle.ktlint")
}
