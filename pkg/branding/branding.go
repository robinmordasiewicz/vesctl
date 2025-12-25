// Package branding provides centralized branding information for the CLI.
// This is the single source of truth for CLI names, descriptions, and branding.
// Update this file to rebrand the entire application.
package branding

const (
	// CLIName is the current name of the CLI tool
	CLIName = "xcsh"

	// F5LogoCircle contains the red circle background (use ColorRed)
	// F5LogoText contains the white F5 text overlay (use ColorBoldWhite)
	// These are designed to be printed on separate passes or combined
	F5LogoCircle = `          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓           ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓           ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓           ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓                     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓           ▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓           ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓           ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`

	// F5Logo is a detailed logo with shading where F5 appears as negative space
	// - ▓, ▒, ░ characters represent the red circle (with gradient shading)
	// - Spaces create the F5 text effect (terminal background shows through)
	// - █ characters are white accent/highlight elements
	F5Logo = `                           █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
                      █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
                   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░      ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
         ▓▓▓▓▓▓▓▓▓▓▓▓▒░░                 ░▓▓▓▓▓▓▓░░░░░▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓
        ▓▓▓▓▓▓▓▓▓▓▒░      ░▓▓▓▓▓▓▒░░       ░▓▓▓▓░                 ░░░▒░
      ▓▓▓▓▓▓▓▓▓▒░        ░▓▓▓▓▓▓▓▓▓▓▓▓▒░ ░▓▓▓▓▓▓                        ░▓
     ▓▓▓▓▓▓▓▓▒░          ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░                        ▒▓▓
    ▓▓▓▓▓▓▓▓░            ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░                         ▓▓▓▓
   ▓▓▓▓▓▓▓▓░             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░░▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░   ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 █▓▓▓▓▓▓▓▓▒              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
 ▓▓▓▓▓▓▓▓▓░              ▒▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓    ░░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓░░░                              ░▓▓▓▓░                ░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▒                             ░░▒▓▓▓▓▓░                       ░▒▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                           ░▒▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓              ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░                             ░▒▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓              ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░                                ░▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓              ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                  ░▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓              ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░                               ░▓▓▓▓
▓▓▓▓▓▓▓▓▓▓              ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░                      ▓▓▓▓
▓▓▓▓▓▓▓▓▓▓               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░                 ▒▓▓▓
▓▓▓▓▓▓▓▓▓▓               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░              ▒▓▓▓
 ▓▓▓▓▓▓▓▓▓░              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░            ▒▓▓
 █▓▓▓▓▓▓▓▓░              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒           ▓▓█
  ▓▓▓▓▓▓▓▓▒              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░         ▒▓▓
   ▓▓▓▓▓▓▓▒              ▓▓▓▓▓▓▓▓▓▓▓▓▓░   ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓        ░▓▓
    ▓▓▓▓▓▓▓              ▓▓▓▓▓▓▓▓▓▓▓▒       ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒       ▒▓▓
     ▓▓▓▓▓▓              ▓▓▓▓▓▓▓▓▓▓▓▓░       ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░     ░▓▓▓
      ▓▓▓▓▒              ▒▓▓▓▓▓▓▓▓▓▓▓▓░       ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒     ░▓▓▓▓
                         ░▒▓▓▓▓▓▓▓▓▓▓▓▓         ░▒▓▓▓▓▓▓▓▓▓▓▒░    ░▒▓▓▓▓
          ░▒▒▒▒░░░░░           ░░░▓▓▓▓▓▓░░           ░░░░░   ░░▒▓▓▓▓▓▓▓
           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓
             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ▓▓▓▓▓▓▓
                   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ▓▓▓█▓▓▓
                      █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█              ▓▓▓
                           █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█`

	// ANSI color codes for terminal output
	ColorRed       = "\033[91m"   // Bright red
	ColorBoldWhite = "\033[1;97m" // Bold bright white
	ColorReset     = "\033[0m"    // Reset to default

	// CLIFullName is the full descriptive name
	CLIFullName = "F5 Distributed Cloud Shell"

	// CLIDescription is the full description used in documentation
	CLIDescription = "Command-line interface for F5 Distributed Cloud services."

	// CLIShortDescription is a brief description
	CLIShortDescription = "F5 Distributed Cloud Shell"

	// ConfigFileName is the name of the configuration file (without path)
	ConfigFileName = ".xcshconfig"

	// EnvPrefix is the prefix for environment variables
	EnvPrefix = "F5XC"
)

// RepoOwner returns the GitHub repository owner
func RepoOwner() string {
	return "robinmordasiewicz"
}

// RepoName returns the GitHub repository name
func RepoName() string {
	return CLIName
}

// RepoURL returns the full GitHub repository URL
func RepoURL() string {
	return "https://github.com/" + RepoOwner() + "/" + RepoName()
}

// DocsURL returns the documentation site URL
func DocsURL() string {
	return "https://" + RepoOwner() + ".github.io/" + RepoName() + "/"
}

// ModulePath returns the Go module path
func ModulePath() string {
	return "github.com/" + RepoOwner() + "/" + RepoName()
}
