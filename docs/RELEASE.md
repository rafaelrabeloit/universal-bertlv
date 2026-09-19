# Flutter Release Contract

Universal BERTLV has four release surfaces: the KMP core, the `bertlv_emv`
Flutter API, and its `bertlv_emv_web` and `bertlv_emv_mobile` implementations.
They share one version and must be released from the same tag.

## Current distribution

The KMP core is published to Maven Central and GitHub Packages. The Flutter
packages are consumed from tagged Git source. They are not published to pub.dev.

## Generated web assets

The web implementation needs the Kotlin/JS distribution at runtime. Generated
assets must be present in every distributed Flutter package, but source control
is not the only valid place to keep them.

Until package publishing is enabled, Git consumers require those assets in the
tag they resolve. Do not remove tracked assets before consumers move to a
package artifact that contains them.

The preferred end state is:

1. Release CI generates JS and native artifacts from a clean checkout.
2. CI validates the Flutter web, Android, and iOS examples against those
   artifacts.
3. CI packages and publishes the three Dart packages from the same tag.
4. Generated JS and native binaries are included in the published package
   tarballs, not committed back to the source branch.

This requires a configured pub.dev publisher and release credential. Until that
external setup exists, retain the generated assets required by tagged Git
consumers.

## Required release gates

- Kotlin JVM and JS tests pass.
- Web assets are generated from a clean checkout and the loader finds exports.
- Android and iOS native artifacts are regenerated and match the active mobile
  package paths.
- Flutter package tests pass.
- EMV Tools passes its consumer compatibility smoke test against the candidate
  tag.
