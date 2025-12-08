# Build from Source

Build vesctl from source code:

```bash
# Clone the repository
git clone https://github.com/robinmordasiewicz/vesctl.git
cd vesctl

# Build the binary
go build -o vesctl .

# Install (optional)
sudo mv vesctl /usr/local/bin/
```

## Verify Installation

After installation, verify vesctl is working:

```bash
vesctl version
```

Expected output:

```text
vesctl version 0.1.0
  commit: abc1234
  built:  2024-01-01T00:00:00Z
```
