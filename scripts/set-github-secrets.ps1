# Copy Maven Central + GPG secrets to a GitHub repo.
# Requires: gh auth login (or GH_TOKEN with repo admin scope)
# Pass values via env vars — do not commit secrets to this file.

param(
    [string]$Repo = "rafaelrabeloit/universal-bertlv",
    [string]$GpgKeyPath = "$env:USERPROFILE\maven-central-gpg-private-key.asc"
)

$ErrorActionPreference = "Stop"
$gh = "$env:ProgramFiles\GitHub CLI\gh.exe"

if (-not (Test-Path $gh)) {
    throw "GitHub CLI not found at $gh"
}

foreach ($name in @("MAVEN_CENTRAL_USERNAME", "MAVEN_CENTRAL_PASSWORD", "GPG_PASSPHRASE")) {
    if (-not (Get-Item "Env:$name" -ErrorAction SilentlyContinue)?.Value) {
        throw "Set env:$name before running this script."
    }
}

if (-not (Test-Path $GpgKeyPath)) {
    throw "GPG key file not found: $GpgKeyPath"
}

Get-Content -Raw $GpgKeyPath | & $gh secret set GPG_PRIVATE_KEY -R $Repo
& $gh secret set MAVEN_CENTRAL_USERNAME --body $env:MAVEN_CENTRAL_USERNAME -R $Repo
& $gh secret set MAVEN_CENTRAL_PASSWORD --body $env:MAVEN_CENTRAL_PASSWORD -R $Repo
& $gh secret set GPG_PASSPHRASE --body $env:GPG_PASSPHRASE -R $Repo

Write-Host "Secrets set on $Repo"
