# Universal BERTLV — Flutter Plugin

A Flutter federated plugin for integrating the **Universal BERTLV** parser into Flutter apps.

Part of the [Universal BERTLV](../README.md) project — a cross-platform BER-TLV/TLV parser for EMV payment systems.

## Packages

| Package | Description |
|---------|-------------|
| [`universal_bertlv`](universal_bertlv/) | App-facing API (platform interface) |
| [`universal_bertlv_web`](universal_bertlv_web/) | Web implementation (`dart:js_interop`) |
| [`universal_bertlv_mobile`](universal_bertlv_mobile/) | Android & iOS implementation (`dart:ffi` + Kotlin/Native) |

## Distribution

The Flutter packages are currently distributed from tagged Git source, not
pub.dev. See the root README for verified dependency declarations. A future
pub.dev release must publish the app-facing package and both platform packages
from the same version tag.
