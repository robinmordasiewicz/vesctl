# Build from Source

Build f5xcctl directly from source code.

## Prerequisites

Building from source requires:

| Requirement | Version | Check Command |
|-------------|---------|---------------|
| Go | go1.25.5 | `go version` |
| Git | any | `git --version` |

## Clone Repository

```bash
git clone https://github.com/robinmordasiewicz/f5xcctl.git
cd f5xcctl
```

## Build

```bash
go build -o f5xcctl .
```

## Verify Build

```bash
./f5xcctl version
```

Expected output shows version, commit hash, build timestamp, Go version, and platform.

## Install (Optional)

Move the binary to your PATH:

=== "User Install"

    ```bash
    mkdir -p ~/.local/bin
    mv f5xcctl ~/.local/bin/
    ```

=== "System Install"

    ```bash
    sudo mv f5xcctl /usr/local/bin/
    ```

## Build with Version Info

For release-quality builds with embedded version information:

```bash
go build -ldflags="-X github.com/robinmordasiewicz/f5xcctl/cmd.Version=dev \
  -X github.com/robinmordasiewicz/f5xcctl/cmd.GitCommit=$(git rev-parse --short HEAD) \
  -X github.com/robinmordasiewicz/f5xcctl/cmd.BuildDate=$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  -o f5xcctl .
```
