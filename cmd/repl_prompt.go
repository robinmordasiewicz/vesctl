package cmd

import (
	"strings"
)

// buildPlainPrompt constructs the prompt string
// Format: tenant:domain/action@namespace>
func buildPlainPrompt(session *REPLSession) string {
	var parts []string

	tenant := session.GetTenant()
	if tenant != "" && tenant != "unknown" && tenant != "local" {
		parts = append(parts, tenant)
	}

	ctx := session.GetContextPath()
	if ctx.Domain != "" {
		contextStr := ctx.Domain
		if ctx.Action != "" {
			contextStr += "/" + ctx.Action
		}
		parts = append(parts, contextStr)
	}

	ns := session.GetNamespace()
	if ns != "" {
		parts = append(parts, "@"+ns)
	}

	if len(parts) == 0 {
		return "xcsh> "
	}

	// Join parts with colons, but namespace uses @ prefix
	prompt := ""
	for i, part := range parts {
		if i == 0 {
			prompt = part
		} else if strings.HasPrefix(part, "@") {
			prompt += part
		} else {
			prompt += ":" + part
		}
	}

	return prompt + "> "
}
