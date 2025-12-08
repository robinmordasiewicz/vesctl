# Shell Completion

Enable tab completion for your shell:

## Bash

```bash
# Current session
source <(vesctl completion bash)

# Permanent (Linux)
vesctl completion bash > /etc/bash_completion.d/vesctl

# Permanent (macOS with Homebrew)
vesctl completion bash > $(brew --prefix)/etc/bash_completion.d/vesctl
```

## Zsh

```bash
# Enable completion system
echo "autoload -U compinit; compinit" >> ~/.zshrc

# Install completion
vesctl completion zsh > "${fpath[1]}/_vesctl"
```

## Fish

```bash
vesctl completion fish > ~/.config/fish/completions/vesctl.fish
```

## PowerShell

```powershell
vesctl completion powershell | Out-String | Invoke-Expression
```
