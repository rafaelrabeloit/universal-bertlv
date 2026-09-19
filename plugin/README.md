# Universal BERTLV — Flutter Plugin

A Flutter federated plugin for integrating the **Universal BERTLV** parser into Flutter apps.

Part of the [Universal BERTLV](../README.md) project — a cross-platform BER-TLV/TLV parser for EMV payment systems.

## Packages

| Package | Description |
|---------|-------------|
| [`bertlv_emv`](bertlv_emv/) | App-facing API (platform interface) |
| [`bertlv_emv_web`](bertlv_emv_web/) | Web implementation (`dart:js_interop`) |
| [`bertlv_emv_mobile`](bertlv_emv_mobile/) | Android & iOS implementation (`dart:ffi` + Kotlin/Native) |

## Distribution

The Flutter packages are currently distributed from tagged Git source, not
pub.dev. See the root README for verified dependency declarations. A future
pub.dev release must publish the app-facing package and both platform packages
from the same version tag.
