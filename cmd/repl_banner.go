package cmd

import (
	"fmt"
	"strings"
	"unicode/utf8"

	"github.com/robinmordasiewicz/xcsh/pkg/branding"
	"github.com/robinmordasiewicz/xcsh/pkg/client"
)

// logoDisplayWidth is the visual width of the F5 logo in terminal columns
// The circular logo is 21 characters wide
const logoDisplayWidth = 21

// renderWelcomeBanner creates the modern CLI welcome banner with F5 logo
func renderWelcomeBanner() string {
	var sb strings.Builder

	// Add leading newline for visual separation
	sb.WriteString("\n")

	// Get logo lines
	logoLines := strings.Split(branding.F5Logo, "\n")

	// Build info lines to display next to logo
	infoLines := []string{
		fmt.Sprintf("%s v%s", branding.CLIFullName, Version),
		buildConnectionInfo(),
		"",
		"Type 'help' for commands, 'exit' or Ctrl+D to quit.",
		"Tab completion available.",
		"",
		"",
	}

	// Combine logo and info side by side with colors
	for i := 0; i < maxInt(len(logoLines), len(infoLines)); i++ {
		logoLine := ""
		if i < len(logoLines) {
			logoLine = logoLines[i]
		}

		infoLine := ""
		if i < len(infoLines) {
			infoLine = infoLines[i]
		}

		// Pad logo line to consistent visual width
		// Use rune count for proper Unicode handling
		runeCount := utf8.RuneCountInString(logoLine)
		padding := logoDisplayWidth - runeCount
		if padding < 0 {
			padding = 0
		}
		paddedLogo := logoLine + strings.Repeat(" ", padding)

		// Apply colors: red for logo, bold white for info
		coloredLogo := branding.ColorRed + paddedLogo + branding.ColorReset
		coloredInfo := branding.ColorBoldWhite + infoLine + branding.ColorReset

		sb.WriteString(fmt.Sprintf("%s   %s\n", coloredLogo, coloredInfo))
	}

	// Add separator line in red
	sb.WriteString(branding.ColorRed + strings.Repeat("─", 80) + branding.ColorReset + "\n")

	return sb.String()
}

// buildConnectionInfo returns tenant and API info string
func buildConnectionInfo() string {
	if serverURL == "" {
		return "Not connected · Set F5XC_API_URL to connect"
	}

	tenant := client.ExtractTenant(serverURL)
	// Extract domain from URL for display
	domain := extractDomain(serverURL)

	return fmt.Sprintf("Tenant: %s · API: %s", tenant, domain)
}

// extractDomain extracts the domain from a URL for compact display
func extractDomain(url string) string {
	// Remove protocol
	url = strings.TrimPrefix(url, "https://")
	url = strings.TrimPrefix(url, "http://")
	// Remove trailing slashes
	url = strings.TrimSuffix(url, "/")
	return url
}

// maxInt returns the larger of two integers
func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
