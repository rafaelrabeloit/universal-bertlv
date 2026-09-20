# Flutter Release Contract

Universal BERTLV has four release surfaces: the KMP core, the `universal_bertlv`
Flutter API, and its `universal_bertlv_web` and `universal_bertlv_mobile` implementations.
They share one version and must be released from the same tag.

## Current distribution

The KMP core is published to Maven Central and GitHub Packages. The Flutter
packages are published to pub.dev through trusted publishing on the GitHub
Release event.

## Release authorization

The manual `Release` workflow creates the release with the `RELEASE_TOKEN`
secret rather than `GITHUB_TOKEN`. GitHub intentionally suppresses downstream
workflow events created with `GITHUB_TOKEN`; using it here would leave the
pub.dev release workflow untriggered. `RELEASE_TOKEN` must be a fine-grained
personal access token authorized for this repository with **Contents: write**.
It is only used to create the GitHub Release; pub.dev authentication remains
OIDC in `publish-pubdev.yml`.

## Generated web assets

The web implementation needs the Kotlin/JS distribution at runtime. Generated
assets must be present in every distributed Flutter package, but source control
is not the only valid place to keep them.

The release workflow generates these assets immediately before package
publication. They remain ignored by Git and are included in the pub.dev web
package tarball.

The release contract is:

1. Release CI generates JS and native artifacts from a clean checkout.
2. CI validates the Flutter web, Android, and iOS examples against those
   artifacts.
3. CI packages and publishes the three Dart packages from the same tag.
4. Generated JS and native binaries are included in the published package
   tarballs, not committed back to the source branch.

This requires configured pub.dev trusted publishers and `RELEASE_TOKEN`.

## Required release gates

- Kotlin JVM and JS tests pass.
- Web assets are generated from a clean checkout and the loader finds exports.
- Android and iOS native artifacts are regenerated and match the active mobile
  package paths.
- Kotlin/Native `emvVersion()` and the iOS podspec report the Gradle release
  version.
- Flutter package tests pass.
- EMV Tools passes its consumer compatibility smoke test against the candidate
  tag.
