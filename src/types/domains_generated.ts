/**
 * AUTO-GENERATED FILE - DO NOT EDIT
 * Generated from .specs/index.json v1.0.84
 * Run: npx tsx scripts/generate-domains.ts
 */

import type {
	DomainInfo,
	ResourceMetadata,
	SubscriptionTier,
} from "./domains.js";

// Re-export types for consumers
export type { ResourceMetadata, SubscriptionTier };

/**
 * Spec version used for generation
 */
export const SPEC_VERSION = "1.0.84";

/**
 * Generated domain data from upstream API specifications
 */
export const generatedDomains: Map<string, DomainInfo> = new Map([
	[
		"admin_console_and_ui",
		{
			name: "admin_console_and_ui",
			displayName: "Admin Console And Ui",
			description:
				"Create administrative dashboard building blocks with tailored setup data and view bindings. Organize presentational materials by namespace and fetch them by name or list all available items. Define display parameters, track system object relationships, and maintain consistent portal appearance through centralized resource management workflows.",
			descriptionShort: "Manage static UI components for admin console.",
			descriptionMedium:
				"Deploy and retrieve graphical elements within namespaces. Configure custom startup parameters and view references for display composition.",
			aliases: ["console-ui", "ui-assets", "static-components"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Platform",
			useCases: [
				"Manage static UI components for admin console",
				"Deploy and retrieve UI assets within namespaces",
				"Configure console interface elements",
				"Manage custom UI component metadata",
			],
			relatedDomains: ["admin", "system"],
			icon: "🖥️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238B5CF6'%3E%3Cpath d='M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'/%3E%3C/svg%3E",
			uiCategory: "Configuration",
			primaryResources: [
				{
					name: "ui_component",
					description: "UI component for console customization",
					descriptionShort: "UI component",
					tier: "Standard" as const,
					icon: "🎨",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "static_asset",
					description: "Static asset for UI resources",
					descriptionShort: "Static asset",
					tier: "Standard" as const,
					icon: "📁",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"api",
		{
			name: "api",
			displayName: "Api",
			description:
				"Catalog services automatically to maintain an inventory of operations and their characteristics. Organize related resources by function or ownership through logical groupings. Establish verification procedures that confirm authentication requirements and expected response structures. Link definitions with load balancers for traffic routing decisions. Flag non-standard paths for exclusion from automated scanning. Monitor resource status and metadata throughout deployment zones.",
			descriptionShort: "Discover, catalog, and test service interfaces.",
			descriptionMedium:
				"Define interface groups and discovery policies. Set up verification rules to check security posture and expected patterns across environments.",
			aliases: ["apisec", "api-discovery"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Discover and catalog APIs",
				"Test API security and behavior",
				"Manage API credentials",
				"Define API groups and testing policies",
			],
			relatedDomains: ["waf", "network_security"],
			cliMetadata: {
				quick_start: {
					command:
						"curl $F5XC_API_URL/api/config/namespaces/default/api_catalogs -H 'Authorization: APIToken $F5XC_API_TOKEN'",
					description: "List all API catalogs in default namespace",
					expected_output: "JSON array of API catalog objects",
				},
				common_workflows: [
					{
						name: "Protect API with Security Policy",
						description:
							"Discover and protect APIs with WAF security policies",
						steps: [
							{
								step: 1,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/api_catalogs -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...catalog_config...}'",
								description:
									"Create API catalog for API discovery and documentation",
							},
							{
								step: 2,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/api_definitions -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...api_config...}'",
								description:
									"Create API definition with security enforcement",
							},
						],
						prerequisites: [
							"API endpoints documented",
							"Security policies defined",
							"WAF rules configured",
						],
						expected_outcome:
							"APIs protected, violations logged and blocked",
					},
				],
				troubleshooting: [
					{
						problem: "API traffic blocked by security policy",
						symptoms: [
							"HTTP 403 Forbidden",
							"Requests rejected at edge",
						],
						diagnosis_commands: [
							"curl $F5XC_API_URL/api/config/namespaces/default/api_definitions/{api} -H 'Authorization: APIToken $F5XC_API_TOKEN'",
							"Check security policy enforcement rules",
						],
						solutions: [
							"Review API definition and security policy rules",
							"Adjust rule sensitivity to reduce false positives",
							"Add exception rules for legitimate traffic patterns",
						],
					},
				],
				icon: "🔐",
			},
			icon: "🔐",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EF4444'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E",
			uiCategory: "API Protection",
			primaryResources: [
				{
					name: "api_definition",
					description:
						"API schema definition for discovery and protection",
					descriptionShort: "API definition",
					tier: "Advanced" as const,
					icon: "📄",
					category: "API Management",
					supportsLogs: false,
					supportsMetrics: false,
					dependencies: { optional: ["api_endpoint"] },
					relationshipHints: [
						"api_endpoint: Endpoints defined by this API",
					],
				},
				{
					name: "api_endpoint",
					description:
						"Individual API endpoint configuration and protection",
					descriptionShort: "API endpoint",
					tier: "Advanced" as const,
					icon: "🔌",
					category: "API Management",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["api_rate_limit"] },
					relationshipHints: [
						"api_rate_limit: Rate limiting for this endpoint",
					],
				},
				{
					name: "api_rate_limit",
					description:
						"API rate limiting configuration for traffic control",
					descriptionShort: "API rate limit",
					tier: "Advanced" as const,
					icon: "⏱️",
					category: "API Management",
					supportsLogs: true,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"authentication",
		{
			name: "authentication",
			displayName: "Authentication",
			description:
				"F5 Distributed Cloud Authentication API specifications",
			descriptionShort: "Authentication API",
			descriptionMedium:
				"F5 Distributed Cloud Authentication API specifications",
			aliases: ["authn", "oidc", "sso"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Platform",
			useCases: [
				"Configure authentication mechanisms",
				"Manage OIDC and OAuth providers",
				"Configure SCIM user provisioning",
				"Manage API credentials and access",
				"Configure account signup policies",
			],
			relatedDomains: ["system", "users"],
			icon: "🔑",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FBBF24'%3E%3Cpath d='M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E",
			uiCategory: "Identity & Access",
			primaryResources: [
				{
					name: "authentication_policy",
					description:
						"Authentication policy for user and API access",
					descriptionShort: "Auth policy",
					tier: "Standard" as const,
					icon: "🔐",
					category: "Identity",
					supportsLogs: true,
					supportsMetrics: false,
				},
				{
					name: "token",
					description: "API token for programmatic access",
					descriptionShort: "Token",
					tier: "Standard" as const,
					icon: "🎫",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "api_credential",
					description: "API credential for service authentication",
					descriptionShort: "API credential",
					tier: "Standard" as const,
					icon: "🔑",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"bigip",
		{
			name: "bigip",
			displayName: "Bigip",
			description:
				"Define custom rule-based policies governing routing decisions and request handling. Build organized collections for network ranges, string patterns, and key-value entries. Map cloud services to physical appliances through connector setups. Link identity workflows using access modules. Track performance metrics and coordinate synchronization between components.",
			descriptionShort:
				"Manage iRules, data groups, and virtual servers.",
			descriptionMedium:
				"Configure traffic logic scripts and structured list entries. Establish appliance bindings and access module integrations.",
			aliases: ["f5-bigip", "irule", "ltm"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Platform",
			useCases: [
				"Manage BigIP F5 appliances",
				"Configure iRule scripts",
				"Manage data groups",
				"Integrate BigIP CNE",
			],
			relatedDomains: ["marketplace"],
			icon: "🏢",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EF4444'%3E%3Cpath d='M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'/%3E%3C/svg%3E",
			uiCategory: "BIG-IP Connector",
			primaryResources: [
				{
					name: "bigip_pool",
					description: "BIG-IP pool for load balancing integration",
					descriptionShort: "BIG-IP pool",
					tier: "Advanced" as const,
					icon: "🎯",
					category: "Load Balancing",
					supportsLogs: false,
					supportsMetrics: true,
				},
				{
					name: "bigip_device",
					description: "BIG-IP device registration and management",
					descriptionShort: "BIG-IP device",
					tier: "Advanced" as const,
					icon: "🖥️",
					category: "Infrastructure",
					supportsLogs: true,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"billing_and_usage",
		{
			name: "billing_and_usage",
			displayName: "Billing And Usage",
			description:
				"Set up payment methods with primary and secondary designations for redundancy. Initiate plan transitions between subscription tiers with state tracking. Download invoice PDFs and query custom invoice lists by date range or status. Define quota limits per namespace and monitor current usage against allocated capacity. Swap payment method roles without service interruption.",
			descriptionShort: "Manage subscription plans and payment methods.",
			descriptionMedium:
				"Configure billing transitions and payment processing. Track invoices and monitor resource quota consumption across namespaces.",
			aliases: ["billing-usage", "quotas", "usage-tracking"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Platform",
			useCases: [
				"Manage subscription plans and billing transitions",
				"Configure payment methods and invoices",
				"Track resource quota usage across namespaces",
				"Monitor usage limits and capacity",
			],
			relatedDomains: ["system", "users"],
			icon: "💳",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E",
			uiCategory: "Configuration",
			primaryResources: [
				{
					name: "subscription",
					description: "Subscription for service entitlements",
					descriptionShort: "Subscription",
					tier: "Standard" as const,
					icon: "💳",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "quota",
					description: "Resource quota for usage limits",
					descriptionShort: "Quota",
					tier: "Standard" as const,
					icon: "📊",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "usage_report",
					description: "Usage report for consumption tracking",
					descriptionShort: "Usage report",
					tier: "Standard" as const,
					icon: "📈",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"blindfold",
		{
			name: "blindfold",
			displayName: "Blindfold",
			description:
				"Define policy rules with label matching and combining algorithms. Set up transformers and matchers to control data safeguarding. Track access patterns through timestamped records with scroll queries and date groupings. Retrieve public keys for cryptographic operations and process policy information for decryption workflows.",
			descriptionShort: "Manage secret encryption and policy rules.",
			descriptionMedium:
				"Configure protection policies and access controls for sensitive data. Monitor usage through detailed logs and date-based rollups.",
			aliases: ["bf", "encrypt", "secrets"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure secret policies for encryption",
				"Manage sensitive data encryption",
				"Enforce data protection policies",
			],
			relatedDomains: ["client_side_defense", "certificates"],
			icon: "🔏",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366F1'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'/%3E%3C/svg%3E",
			uiCategory: "Security",
			primaryResources: [
				{
					name: "blindfold_secret",
					description: "Encrypted secret using Blindfold encryption",
					descriptionShort: "Blindfold secret",
					tier: "Standard" as const,
					icon: "🔐",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "secret_policy",
					description: "Secret management policy configuration",
					descriptionShort: "Secret policy",
					tier: "Standard" as const,
					icon: "📋",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "policy_document",
					description:
						"Policy document for access control definitions",
					descriptionShort: "Policy document",
					tier: "Standard" as const,
					icon: "📄",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"bot_and_threat_defense",
		{
			name: "bot_and_threat_defense",
			displayName: "Bot And Threat Defense",
			description:
				"Deploy namespace-scoped protection using behavioral analysis and machine learning. Provision dedicated keys for system automation and real-time intelligence feeds. Coordinate detection across protected applications through centralized managers. Configure pre-authentication checks to identify suspicious patterns before they reach backends. Enable adaptive blocking decisions based on risk scoring and historical activity profiles.",
			descriptionShort: "Detect and block automated attacks.",
			descriptionMedium:
				"Create bot defense instances with Shape integration. Set up traffic classification rules and automated response policies for malicious actors.",
			aliases: ["threat-defense", "tpm", "shape-bot"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure bot defense instances per namespace",
				"Manage TPM threat categories for classification",
				"Provision API keys for automated defense systems",
				"Integrate threat intelligence services",
			],
			relatedDomains: ["bot_defense", "shape", "waf"],
			icon: "🦠",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EF4444'%3E%3Cpath d='M19.5 5.5 18 4l-1.5 1.5L18 7l1.5-1.5zM12 2v3m0 14v3m10-10h-3M5 12H2m15.5 6.5L18 20l1.5-1.5L18 17l-1.5 1.5zm-11 0L6 20l-1.5-1.5L6 17l-1.5 1.5zm0-11L6 4l-1.5 1.5L6 7 4.5 5.5zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E",
			uiCategory: "Bot Defense",
			primaryResources: [
				{
					name: "bot_defense_instance",
					description: "Bot defense instance for deployment",
					descriptionShort: "Bot defense instance",
					tier: "Advanced" as const,
					icon: "🤖",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
				{
					name: "threat_category",
					description: "Threat category for classification",
					descriptionShort: "Threat category",
					tier: "Advanced" as const,
					icon: "🎯",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"cdn",
		{
			name: "cdn",
			displayName: "Cdn",
			description:
				"Set up cache eligibility based on headers, cookies, and query parameters. Create expression-based rules with custom TTL settings and path matchers. Deploy load balancers that handle content distribution across origin pools. Monitor access logs and metrics, aggregate performance data, and execute cache purge operations when content updates require immediate invalidation.",
			descriptionShort: "Configure caching rules and load balancing.",
			descriptionMedium:
				"Define cache rules, TTLs, and path matching. Manage load balancers with origin pools and purge operations.",
			aliases: ["cache", "content"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Networking",
			useCases: [
				"Configure CDN load balancing",
				"Manage content delivery network services",
				"Configure caching policies",
				"Manage data delivery and distribution",
			],
			relatedDomains: ["virtual"],
			icon: "🚀",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F97316'%3E%3Cpath d='M12 2.5s4.5 2.04 4.5 10c0 3.22-1.67 5.6-3.25 7.08L12 22l-1.25-2.42C9.17 18.1 7.5 15.72 7.5 12.5c0-7.96 4.5-10 4.5-10zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 14.5c0 1.22.57 2.36 1.44 3.22l1.76-1.76c-.43-.43-.7-1.01-.7-1.66 0-.25.04-.49.1-.72L5.21 12.1c-.13.77-.21 1.58-.21 2.4zm14 0c0-.82-.08-1.63-.21-2.4l-2.39 1.48c.06.23.1.47.1.72 0 .65-.27 1.23-.7 1.66l1.76 1.76c.87-.86 1.44-2 1.44-3.22z'/%3E%3C/svg%3E",
			uiCategory: "Load Balancing",
			primaryResources: [
				{
					name: "cdn_loadbalancer",
					description:
						"Content delivery network load balancer for edge caching",
					descriptionShort: "CDN load balancer",
					tier: "Standard" as const,
					icon: "🌍",
					category: "Load Balancing",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["cdn_origin_pool"] },
					relationshipHints: [
						"cdn_origin_pool: Origin servers for CDN content",
					],
				},
				{
					name: "cdn_origin_pool",
					description: "Origin server pool for CDN content sourcing",
					descriptionShort: "CDN origin pool",
					tier: "Standard" as const,
					icon: "🎯",
					category: "Load Balancing",
					supportsLogs: false,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"ce_management",
		{
			name: "ce_management",
			displayName: "Ce Management",
			description:
				"Define network connectivity parameters including address allocation ranges, dual-stack protocol support, and isolated administrative ports for out-of-band access. Group physical locations under common policy templates for streamlined oversight. Onboard new deployments through secure credential workflows with expiration policies. Execute controlled software transitions featuring pre-flight validation, rollback capabilities, and progress tracking to maintain service continuity.",
			descriptionShort:
				"Manage Customer Edge sites and network interfaces.",
			descriptionMedium:
				"Configure DHCP pools, IPv6 addressing, and dedicated management ports. Handle site tokens with lifecycle controls and software version transitions.",
			aliases: ["ce-mgmt", "edge-management", "ce-lifecycle"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Infrastructure",
			useCases: [
				"Manage Customer Edge site lifecycle",
				"Configure network interfaces and fleet settings",
				"Handle site registration and token workflows",
				"Execute site upgrades with pre-upgrade checks",
			],
			relatedDomains: ["customer_edge", "sites"],
			icon: "🔧",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'%3E%3Cpath d='M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'/%3E%3C/svg%3E",
			uiCategory: "Sites",
			primaryResources: [
				{
					name: "site_config",
					description: "Site configuration for edge node settings",
					descriptionShort: "Site config",
					tier: "Standard" as const,
					icon: "⚙️",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "fleet_config",
					description:
						"Fleet configuration for multi-site management",
					descriptionShort: "Fleet config",
					tier: "Standard" as const,
					icon: "🚀",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "registration_token",
					description: "Registration token for site onboarding",
					descriptionShort: "Registration token",
					tier: "Standard" as const,
					icon: "🎫",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"certificates",
		{
			name: "certificates",
			displayName: "Certificates",
			description:
				"Create PKI artifacts organizing cryptographic identity materials by namespace for multi-tenant isolation. Deploy keypair bundles with issuer hierarchies for TLS termination. Establish verification anchor collections governing which external parties can authenticate. Maintain deny-lists blocking compromised identities from initiating sessions. Organize resources within independent security boundaries supporting granular access control.",
			descriptionShort:
				"Manage SSL/TLS certificate chains and trusted CAs.",
			descriptionMedium:
				"Configure certificate manifests linking keys to credential bundles. Define trust anchors for validating client authenticity during mutual TLS.",
			aliases: ["cert", "certs", "ssl", "tls"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Security",
			useCases: [
				"Manage SSL/TLS certificates",
				"Configure trusted CAs",
				"Manage certificate revocation lists (CRL)",
				"Configure certificate manifests",
			],
			relatedDomains: ["blindfold", "system"],
			icon: "📜",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2314B8A6'%3E%3Cpath d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'/%3E%3C/svg%3E",
			uiCategory: "Security",
			primaryResources: [
				{
					name: "certificate",
					description: "TLS certificate for secure HTTPS connections",
					descriptionShort: "Certificate",
					tier: "Standard" as const,
					icon: "📜",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "ca_certificate",
					description:
						"Certificate authority certificate for trust chain",
					descriptionShort: "CA certificate",
					tier: "Standard" as const,
					icon: "📜",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "certificate_chain",
					description:
						"Certificate chain for complete trust verification",
					descriptionShort: "Certificate chain",
					tier: "Standard" as const,
					icon: "🔗",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"cloud_infrastructure",
		{
			name: "cloud_infrastructure",
			displayName: "Cloud Infrastructure",
			description:
				"Establish connections to AWS, Azure, and GCP environments with secure authentication and network discovery. Define gateway links, edge site peering, and elastic provisioning workflows. Monitor segment performance and connection health across geographic regions. Create automated VPC attachment policies with intelligent path selection between customer locations and cloud workloads.",
			descriptionShort: "Connect and manage multi-cloud providers.",
			descriptionMedium:
				"Configure cloud provider credentials and VPC attachments. Manage AWS transit gateways, Azure route tables, and cross-cloud connectivity.",
			aliases: ["cloud", "infra", "provider"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Infrastructure",
			useCases: [
				"Connect to cloud providers (AWS, Azure, GCP)",
				"Manage cloud credentials and authentication",
				"Configure cloud connectivity and elastic provisioning",
				"Link and manage cloud regions",
			],
			relatedDomains: ["sites", "customer_edge"],
			icon: "☁️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2306B6D4'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/%3E%3C/svg%3E",
			uiCategory: "Cloud Connect",
			primaryResources: [
				{
					name: "aws_vpc_site",
					description:
						"AWS VPC site deployment with edge node provisioning",
					descriptionShort: "AWS VPC site",
					tier: "Standard" as const,
					icon: "☁️",
					category: "Infrastructure",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["cloud_credentials"] },
					relationshipHints: [
						"cloud_credentials: AWS authentication for deployment",
					],
				},
				{
					name: "azure_vnet_site",
					description:
						"Azure VNet site deployment with edge node provisioning",
					descriptionShort: "Azure VNet site",
					tier: "Standard" as const,
					icon: "☁️",
					category: "Infrastructure",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["cloud_credentials"] },
					relationshipHints: [
						"cloud_credentials: Azure authentication for deployment",
					],
				},
				{
					name: "gcp_vpc_site",
					description:
						"Google Cloud VPC site deployment with edge node provisioning",
					descriptionShort: "GCP VPC site",
					tier: "Standard" as const,
					icon: "☁️",
					category: "Infrastructure",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["cloud_credentials"] },
					relationshipHints: [
						"cloud_credentials: GCP authentication for deployment",
					],
				},
				{
					name: "cloud_credentials",
					description:
						"Cloud provider authentication credentials for site deployment",
					descriptionShort: "Cloud credentials",
					tier: "Standard" as const,
					icon: "🔑",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"container_services",
		{
			name: "container_services",
			displayName: "Container Services",
			description:
				"Create definitions for applications running on distributed infrastructure. Establish standardized templates controlling resource consumption and disk limits. Set up partitioned execution contexts supporting namespace separation and multi-tenant isolation. Track persistent volume claims and usage metrics. Connect with mesh networking for traffic routing.",
			descriptionShort: "Deploy containerized workloads across sites.",
			descriptionMedium:
				"Run services with simplified orchestration. Define blueprints governing processor and storage allocation.",
			aliases: ["vk8s", "containers", "workloads"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Infrastructure",
			useCases: [
				"Deploy XCCS (Container Services) namespaces for multi-tenant workloads",
				"Manage container workloads with simplified orchestration",
				"Configure distributed edge container deployments",
				"Run containerized applications without full K8s complexity",
			],
			relatedDomains: ["managed_kubernetes", "sites", "service_mesh"],
			icon: "📦",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238B5CF6'%3E%3Cpath d='M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94z'/%3E%3C/svg%3E",
			uiCategory: "Edge Stack",
			primaryResources: [
				{
					name: "virtual_k8s",
					description:
						"Virtual Kubernetes namespace for container workloads",
					descriptionShort: "Virtual K8s",
					tier: "Advanced" as const,
					icon: "☸️",
					category: "Container",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["workload"] },
					relationshipHints: [
						"workload: Container workloads in this namespace",
					],
				},
				{
					name: "workload",
					description: "Container workload deployment configuration",
					descriptionShort: "Workload",
					tier: "Advanced" as const,
					icon: "📦",
					category: "Container",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["virtual_k8s"] },
					relationshipHints: [
						"virtual_k8s: Namespace for workload deployment",
					],
				},
				{
					name: "pod_security_policy",
					description:
						"Pod security policy for container runtime constraints",
					descriptionShort: "Pod security policy",
					tier: "Advanced" as const,
					icon: "🔒",
					category: "Container",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"data_and_privacy_security",
		{
			name: "data_and_privacy_security",
			displayName: "Data And Privacy Security",
			description:
				"Set up sensitive data policies that identify and protect personally identifiable information across traffic flows. Create custom data type definitions matching organizational privacy standards and industry regulations. Configure LMA region parameters including Clickhouse, Elastic, and Kafka integrations. Deploy geo-configurations enforcing data residency rules and regional compliance mandates. Monitor detection status through condition tracking and secret management with blindfold encryption.",
			descriptionShort:
				"Configure sensitive data detection and privacy policies.",
			descriptionMedium:
				"Define custom data types for PII classification. Manage LMA regions and geo-configurations to meet regulatory compliance requirements.",
			aliases: ["data-privacy", "pii", "sensitive-data", "lma"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure sensitive data detection policies",
				"Define custom data types for PII classification",
				"Manage LMA region configurations",
				"Integrate geo-configurations for compliance",
			],
			relatedDomains: ["blindfold", "client_side_defense"],
			icon: "🔐",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EF4444'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E",
			uiCategory: "Data Protection",
			primaryResources: [
				{
					name: "sensitive_data_policy",
					description: "Sensitive data policy for PII protection",
					descriptionShort: "Sensitive data policy",
					tier: "Advanced" as const,
					icon: "🔐",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: false,
				},
				{
					name: "data_classification",
					description:
						"Data classification for content categorization",
					descriptionShort: "Data classification",
					tier: "Advanced" as const,
					icon: "🏷️",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"data_intelligence",
		{
			name: "data_intelligence",
			displayName: "Data Intelligence",
			description:
				"F5 Distributed Cloud Data Intelligence API specifications",
			descriptionShort: "Data Intelligence API",
			descriptionMedium:
				"F5 Distributed Cloud Data Intelligence API specifications",
			aliases: ["di", "intelligence", "insights"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Operations",
			useCases: [
				"Analyze security and traffic data",
				"Generate intelligent insights from logs",
				"Configure data analytics policies",
			],
			relatedDomains: ["statistics", "observability"],
			icon: "🧠",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23A855F7'%3E%3Cpath d='M15.5 14l-1.34-4H9.84L8.5 14H6.09l4.01-10h3.8l4.01 10H15.5zm-4.5-5.4h2l.9-2.35.8 2.35h1.8l-1.45 1.05.55 1.7-1.4-1.02-1.4 1.02.55-1.7L11 8.6z'/%3E%3C/svg%3E",
			uiCategory: "Discovery",
			primaryResources: [
				{
					name: "analytics_query",
					description: "Analytics query for data analysis",
					descriptionShort: "Analytics query",
					tier: "Standard" as const,
					icon: "📊",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "data_export",
					description: "Data export configuration for reporting",
					descriptionShort: "Data export",
					tier: "Standard" as const,
					icon: "📤",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"ddos",
		{
			name: "ddos",
			displayName: "Ddos",
			description:
				"Deploy definitions that block IP addresses and network segments from accessing protected resources. Organize by threat type or source classification. Manage secure channels routing suspicious packets for analysis before reaching origin servers. Update status for real-time visibility into active defenses. Add items during attacks and monitor health metrics.",
			descriptionShort:
				"Configure blocking policies and tunnel protection.",
			descriptionMedium:
				"Set up firewall configurations with deny list rules. Filter malicious traffic through inspection points.",
			aliases: ["dos", "ddos-protect"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure DDoS protection policies",
				"Monitor and analyze DDoS threats",
				"Configure infrastructure protection",
			],
			relatedDomains: ["network_security", "virtual"],
			icon: "🛑",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23DC2626'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z'/%3E%3C/svg%3E",
			uiCategory: "Infrastructure Protection",
			primaryResources: [
				{
					name: "ddos_protection",
					description:
						"DDoS protection configuration for traffic scrubbing",
					descriptionShort: "DDoS protection",
					tier: "Advanced" as const,
					icon: "🛡️",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["ddos_mitigation_rule"] },
					relationshipHints: [
						"ddos_mitigation_rule: Custom mitigation rules",
					],
				},
				{
					name: "ddos_mitigation_rule",
					description: "DDoS mitigation rule for attack response",
					descriptionShort: "DDoS mitigation rule",
					tier: "Advanced" as const,
					icon: "📋",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"dns",
		{
			name: "dns",
			displayName: "Dns",
			description:
				"Set up primary and secondary zones with support for A, AAAA, CNAME, CAA, CERT, and AFSDB record types. Define health checks to monitor target availability and enable automatic failover between record destinations. Clone existing domains, import zone configurations from external servers, or export zone files for backup. Track query metrics and request logs to analyze resolution patterns across namespaces.",
			descriptionShort: "Manage zones, records, and load balancing.",
			descriptionMedium:
				"Configure authoritative name services with record sets and health checks. Import zones from BIND files or transfer via AXFR protocol.",
			aliases: ["dns-zone", "zones"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Networking",
			useCases: [
				"Configure DNS load balancing",
				"Manage DNS zones and domains",
				"Configure DNS compliance policies",
				"Manage resource record sets (RRSets)",
			],
			relatedDomains: ["virtual", "network"],
			cliMetadata: {
				quick_start: {
					command:
						"curl $F5XC_API_URL/api/config/namespaces/default/dns_domains -H 'Authorization: APIToken $F5XC_API_TOKEN'",
					description:
						"List all DNS domains configured in default namespace",
					expected_output: "JSON array of DNS domain objects",
				},
				common_workflows: [
					{
						name: "Create DNS Domain",
						description:
							"Configure DNS domain with load balancer backend",
						steps: [
							{
								step: 1,
								command:
									"Create load balancer endpoint first (virtual domain)",
								description:
									"Ensure target load balancer exists",
							},
							{
								step: 2,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/dns_domains -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...dns_config...}'",
								description:
									"Create DNS domain pointing to load balancer",
							},
						],
						prerequisites: [
							"DNS domain registered",
							"Load balancer configured",
							"SOA and NS records prepared",
						],
						expected_outcome:
							"DNS domain in Active status, queries resolving to load balancer",
					},
				],
				troubleshooting: [
					{
						problem: "DNS queries not resolving",
						symptoms: [
							"NXDOMAIN responses",
							"Timeout on DNS queries",
						],
						diagnosis_commands: [
							"curl $F5XC_API_URL/api/config/namespaces/default/dns_domains/{domain} -H 'Authorization: APIToken $F5XC_API_TOKEN'",
							"nslookup {domain} @ns-server",
						],
						solutions: [
							"Verify domain delegation to F5 XC nameservers",
							"Check DNS domain configuration and backend load balancer status",
							"Validate zone file and record configuration",
						],
					},
				],
				icon: "🌐",
			},
			icon: "🌐",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232563EB'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E",
			uiCategory: "DNS",
			primaryResources: [
				{
					name: "dns_zone",
					description:
						"Authoritative DNS zone with record management capabilities",
					descriptionShort: "DNS zone",
					tier: "Standard" as const,
					icon: "🌐",
					category: "DNS",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["dns_load_balancer"] },
					relationshipHints: [
						"dns_load_balancer: Geographic or weighted DNS routing",
					],
				},
				{
					name: "dns_domain",
					description:
						"DNS domain delegation and configuration settings",
					descriptionShort: "DNS domain",
					tier: "Standard" as const,
					icon: "🔗",
					category: "DNS",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "dns_load_balancer",
					description:
						"DNS-based traffic distribution with geographic routing and failover",
					descriptionShort: "DNS load balancer",
					tier: "Standard" as const,
					icon: "⚖️",
					category: "DNS",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["dns_zone"] },
					relationshipHints: [
						"dns_zone: Parent zone for DNS records",
					],
				},
			],
		},
	],
	[
		"generative_ai",
		{
			name: "generative_ai",
			displayName: "Generative Ai",
			description:
				"Set up query evaluation and response handling for intelligent assistant workflows. Manage rating collection with positive and negative outcome tracking. Subscribe to data streams for traffic pattern detection and behavioral analysis. Allocate and deallocate IP resources for ML infrastructure. Control feature enablement and token management for telemetry collection paths.",
			descriptionShort: "Access AI assistant queries and feedback.",
			descriptionMedium:
				"Configure machine learning interactions and collect response ratings. Enable flow pattern monitoring through data subscription channels.",
			aliases: ["ai", "genai", "assistant"],
			complexity: "simple" as const,
			isPreview: true,
			requiresTier: "Advanced",
			category: "AI",
			useCases: [
				"Access AI-powered features",
				"Configure AI assistant policies",
				"Enable flow anomaly detection",
				"Manage AI data collection",
			],
			relatedDomains: [],
			icon: "🤖",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366F1'%3E%3Cpath d='M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z'/%3E%3C/svg%3E",
			uiCategory: "AI & Automation",
			primaryResources: [
				{
					name: "ai_policy",
					description: "AI policy for generative AI traffic control",
					descriptionShort: "AI policy",
					tier: "Advanced" as const,
					icon: "🤖",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
				{
					name: "ai_gateway",
					description: "AI gateway for LLM API management",
					descriptionShort: "AI gateway",
					tier: "Advanced" as const,
					icon: "🚀",
					category: "API Management",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["ai_policy"] },
					relationshipHints: [
						"ai_policy: Policy for AI traffic control",
					],
				},
			],
		},
	],
	[
		"managed_kubernetes",
		{
			name: "managed_kubernetes",
			displayName: "Managed Kubernetes",
			description:
				"Create granular access controls for namespace resources and non-resource URLs. Map permissions to users, groups, or service accounts through binding configurations. Deploy security admission enforcement using baseline, restricted, or privileged profiles. Register private image sources with credential management for secure pulls. Integrate with external managed solutions including EKS, AKS, and GKE infrastructure.",
			descriptionShort:
				"Configure Kubernetes RBAC and pod security policies.",
			descriptionMedium:
				"Define permission boundaries for workload access. Set up private image repositories with authentication for enterprise deployments.",
			aliases: ["mk8s", "appstack", "k8s-mgmt"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Infrastructure",
			useCases: [
				"Manage XCKS (Managed Kubernetes) cluster RBAC and security",
				"Configure pod security policies and admission controllers",
				"Manage container registries for enterprise deployments",
				"Integrate with external Kubernetes clusters (EKS, AKS, GKE)",
			],
			relatedDomains: ["container_services", "sites", "service_mesh"],
			icon: "⚙️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748B'%3E%3Cpath d='M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z'/%3E%3C/svg%3E",
			uiCategory: "Kubernetes",
			primaryResources: [
				{
					name: "mk8s_cluster",
					description: "Managed Kubernetes cluster configuration",
					descriptionShort: "MK8s cluster",
					tier: "Advanced" as const,
					icon: "☸️",
					category: "Container",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["k8s_cluster_role"] },
					relationshipHints: [
						"k8s_cluster_role: RBAC roles for cluster access",
					],
				},
				{
					name: "k8s_cluster_role",
					description: "Kubernetes cluster RBAC role configuration",
					descriptionShort: "K8s cluster role",
					tier: "Advanced" as const,
					icon: "👤",
					category: "Container",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "container_registry",
					description: "Container image registry for workload images",
					descriptionShort: "Container registry",
					tier: "Advanced" as const,
					icon: "📦",
					category: "Container",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"marketplace",
		{
			name: "marketplace",
			displayName: "Marketplace",
			description:
				"Set up secure tunnel connections using IKEv1/IKEv2 parameters, GRE encapsulation with source and destination addressing, or dedicated link types. Manage DPD keep-alive timers and tunnel termination points for reliable connectivity. Activate purchasable services with namespace-scoped status tracking. Create custom portal widgets for interface integration and configure Cloud Manager instances for Terraform and infrastructure automation workflows.",
			descriptionShort: "Manage third-party integrations and add-ons.",
			descriptionMedium:
				"Configure connector tunnels with IPSec, GRE, or direct links. Deploy purchasable services and portal customizations across namespaces.",
			aliases: ["market", "addons", "extensions"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Platform",
			useCases: [
				"Access third-party integrations and add-ons",
				"Manage marketplace extensions",
				"Configure Terraform and external integrations",
				"Manage TPM policies",
			],
			relatedDomains: ["bigip", "admin"],
			icon: "🏪",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F97316'%3E%3Cpath d='M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z'/%3E%3C/svg%3E",
			uiCategory: "Configuration",
			primaryResources: [
				{
					name: "marketplace_item",
					description: "Marketplace item for service catalog",
					descriptionShort: "Marketplace item",
					tier: "Standard" as const,
					icon: "🛒",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "subscription",
					description: "Subscription for service entitlements",
					descriptionShort: "Subscription",
					tier: "Standard" as const,
					icon: "💳",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"network",
		{
			name: "network",
			displayName: "Network",
			description:
				"Deploy secure site connectivity using IPsec tunnels with customizable IKE phase settings, encryption algorithms, and DH groups. Configure BGP routing with peer state monitoring, ASN management, and traffic policies. Set up SRv6 segments, IP prefix sets, and subnet definitions. Manage DC cluster groups for data center integration and define routes for traffic steering across distributed infrastructure.",
			descriptionShort:
				"Configure BGP routing, tunnels, and connectivity.",
			descriptionMedium:
				"Manage IPsec tunnels and IKE configurations. Define BGP peers, ASN assignments, and routing policies for site-to-site connections.",
			aliases: ["net", "routing", "bgp"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Networking",
			useCases: [
				"Configure BGP routing and ASN management",
				"Manage IPsec tunnels and IKE phases",
				"Configure network connectors and routes",
				"Manage SRv6 and subnetting",
				"Define segment connections and policies",
				"Configure IP prefix sets",
			],
			relatedDomains: ["virtual", "network_security", "dns"],
			icon: "🔌",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233B82F6'%3E%3Cpath d='M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8m0-6h-2v4h-4V3H8v4H6v6.5l3.5 3.5v5h5v-5l3.5-3.5V7h-2V3z'/%3E%3C/svg%3E",
			uiCategory: "Networking",
			primaryResources: [
				{
					name: "virtual_network",
					description:
						"Virtual network for site connectivity and segmentation",
					descriptionShort: "Virtual network",
					tier: "Standard" as const,
					icon: "🔗",
					category: "Networking",
					supportsLogs: false,
					supportsMetrics: false,
					dependencies: { optional: ["network_connector"] },
					relationshipHints: [
						"network_connector: Connect to external networks",
					],
				},
				{
					name: "network_connector",
					description:
						"Network connector for site-to-site or cloud connectivity",
					descriptionShort: "Network connector",
					tier: "Advanced" as const,
					icon: "🔌",
					category: "Networking",
					supportsLogs: false,
					supportsMetrics: true,
					dependencies: { required: ["virtual_network"] },
					relationshipHints: ["virtual_network: Network to connect"],
				},
				{
					name: "site_mesh_group",
					description:
						"Mesh connectivity configuration between multiple sites",
					descriptionShort: "Site mesh group",
					tier: "Advanced" as const,
					icon: "🕸️",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: true,
					dependencies: { required: ["site"] },
					relationshipHints: [
						"site: Sites to include in mesh connectivity",
					],
				},
			],
		},
	],
	[
		"network_security",
		{
			name: "network_security",
			displayName: "Network Security",
			description:
				"Manage firewall configurations with match criteria and action rules. Create NAT policies using dynamic pools and port configurations for address translation. Define segment connections to isolate traffic between network zones. Configure policy-based routing to direct packets based on source, destination, or protocol attributes. Set up forward proxy policies and access control lists to govern outbound connections.",
			descriptionShort: "Configure firewalls, NAT, and routing policies.",
			descriptionMedium:
				"Define network firewall rules and NAT policies. Set up policy-based routing with segment connections for traffic control.",
			aliases: ["netsec", "nfw"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure network firewall and ACL policies",
				"Manage NAT policies and port forwarding",
				"Configure policy-based routing",
				"Define network segments and policies",
				"Configure forward proxy policies",
			],
			relatedDomains: ["waf", "api", "network"],
			icon: "🔒",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z'/%3E%3C/svg%3E",
			uiCategory: "Security",
			primaryResources: [
				{
					name: "network_policy",
					description:
						"Network security policy for traffic filtering",
					descriptionShort: "Network policy",
					tier: "Standard" as const,
					icon: "🔒",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: false,
				},
				{
					name: "forward_proxy_policy",
					description:
						"Forward proxy policy for outbound traffic control",
					descriptionShort: "Forward proxy policy",
					tier: "Advanced" as const,
					icon: "➡️",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
				{
					name: "network_firewall",
					description:
						"Network firewall for layer 3/4 traffic protection",
					descriptionShort: "Network firewall",
					tier: "Standard" as const,
					icon: "🧱",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"nginx_one",
		{
			name: "nginx_one",
			displayName: "Nginx One",
			description:
				"Set up load balancing configurations with backend server definitions and routing logic. Create monitoring schedules for availability tracking across distributed nodes. Build request handling pipelines with rate controls and authentication layers. Track instance performance metrics and traffic patterns. Coordinate failover mechanisms using weighted distribution and priority-based selection.",
			descriptionShort:
				"Configure NGINX proxy instances and deployments.",
			descriptionMedium:
				"Manage upstream server pools and health monitors. Define SSL termination rules and connection parameters for gateway endpoints.",
			aliases: ["nginx", "nms", "nginx-plus"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Platform",
			useCases: [
				"Manage NGINX One platform integrations",
				"Configure NGINX Plus instances",
				"Integrate NGINX configuration management",
			],
			relatedDomains: ["marketplace"],
			icon: "🟢",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2322C55E'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E",
			uiCategory: "NGINX One",
			primaryResources: [
				{
					name: "nginx_config",
					description: "NGINX configuration for proxy settings",
					descriptionShort: "NGINX config",
					tier: "Advanced" as const,
					icon: "⚙️",
					category: "Load Balancing",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["nginx_upstream"] },
					relationshipHints: [
						"nginx_upstream: Backend server configuration",
					],
				},
				{
					name: "nginx_upstream",
					description: "NGINX upstream for backend server pools",
					descriptionShort: "NGINX upstream",
					tier: "Advanced" as const,
					icon: "🎯",
					category: "Load Balancing",
					supportsLogs: false,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"object_storage",
		{
			name: "object_storage",
			displayName: "Object Storage",
			description:
				"Deploy binary artifacts and configuration bundles with automatic version tracking and lifecycle policies. Organize content by category including protection signatures, SDK packages, and third-party connector files. Enable time-limited download links for secure distribution without credential exposure. Track revision history for audit trails and support rollback to previous artifact versions when needed.",
			descriptionShort: "Manage stored objects and bucket versioning.",
			descriptionMedium:
				"Create versioned content within tenant buckets. Generate secure access URLs for SDK distributions and application protection resources.",
			aliases: ["storage", "s3", "buckets"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Platform",
			useCases: [
				"Manage object storage services",
				"Configure stored objects and buckets",
				"Manage storage policies",
			],
			relatedDomains: ["marketplace"],
			icon: "🗄️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2378716C'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-8h4v8zm6 0h-4v-8h4v8zm6 0h-4v-8h4v8zm0-10H4V4h16v6z'/%3E%3C/svg%3E",
			uiCategory: "Configuration",
			primaryResources: [
				{
					name: "object_store",
					description: "Object store for blob storage management",
					descriptionShort: "Object store",
					tier: "Standard" as const,
					icon: "💾",
					category: "Storage",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["bucket"] },
					relationshipHints: [
						"bucket: Storage buckets in this store",
					],
				},
				{
					name: "bucket",
					description: "Storage bucket for object storage",
					descriptionShort: "Bucket",
					tier: "Standard" as const,
					icon: "📦",
					category: "Storage",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { required: ["object_store"] },
					relationshipHints: ["object_store: Parent object store"],
				},
			],
		},
	],
	[
		"observability",
		{
			name: "observability",
			displayName: "Observability",
			description:
				"Set up synthetic monitoring for DNS resolution and HTTP services across AWS regions. Generate health reports with historical trends and summary dashboards. Monitor certificate validity, track response times, and aggregate results by namespace for capacity planning.",
			descriptionShort: "Configure synthetic monitors and health checks.",
			descriptionMedium:
				"Define DNS and HTTP monitors with regional testing. Track certificate expiration and service availability across zones.",
			aliases: ["obs", "monitoring", "synth"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Operations",
			useCases: [
				"Configure synthetic monitoring",
				"Define monitoring and testing policies",
				"Manage observability dashboards",
			],
			relatedDomains: ["statistics", "support"],
			icon: "📊",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233B82F6'%3E%3Cpath d='M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z'/%3E%3C/svg%3E",
			uiCategory: "Observability",
			primaryResources: [
				{
					name: "log_receiver",
					description: "Log receiver for centralized log collection",
					descriptionShort: "Log receiver",
					tier: "Standard" as const,
					icon: "📝",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "metrics_receiver",
					description:
						"Metrics receiver for centralized metrics collection",
					descriptionShort: "Metrics receiver",
					tier: "Standard" as const,
					icon: "📊",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "alert_policy",
					description: "Alert policy for monitoring and notification",
					descriptionShort: "Alert policy",
					tier: "Standard" as const,
					icon: "🔔",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"rate_limiting",
		{
			name: "rate_limiting",
			displayName: "Rate Limiting",
			description:
				"Create rate limiter policies with configurable time periods using seconds, minutes, or hours granularity. Deploy policers and protocol policers to enforce bandwidth constraints across namespaces. Define limit values, burst allowances, and blocking behaviors when thresholds trigger. Integrate with load balancers and security policies for layered traffic management and abuse prevention.",
			descriptionShort: "Configure traffic throttling and policer rules.",
			descriptionMedium:
				"Define request limits and burst thresholds for traffic control. Set up leaky bucket algorithms and block actions for exceeded quotas.",
			aliases: ["ratelimit", "throttle", "policer"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Networking",
			useCases: [
				"Configure rate limiter policies",
				"Manage policer configurations",
				"Control traffic flow and queuing",
			],
			relatedDomains: ["virtual", "network_security"],
			icon: "⏱️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F97316'%3E%3Cpath d='M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z'/%3E%3C/svg%3E",
			uiCategory: "Networking",
			primaryResources: [
				{
					name: "rate_limiter",
					description:
						"Rate limiter for traffic throttling and protection",
					descriptionShort: "Rate limiter",
					tier: "Standard" as const,
					icon: "⏱️",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["rate_limiter_policy"] },
					relationshipHints: [
						"rate_limiter_policy: Detailed rate limiting rules",
					],
				},
				{
					name: "rate_limiter_policy",
					description:
						"Rate limiter policy with detailed throttling rules",
					descriptionShort: "Rate limiter policy",
					tier: "Standard" as const,
					icon: "📋",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
				{
					name: "rate_limit_threshold",
					description:
						"Rate limit threshold configuration for traffic control",
					descriptionShort: "Rate limit threshold",
					tier: "Standard" as const,
					icon: "📊",
					category: "Security",
					supportsLogs: false,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"secops_and_incident_response",
		{
			name: "secops_and_incident_response",
			displayName: "Secops And Incident Response",
			description:
				"Manage incident response workflows that detect and mitigate malicious users automatically. Create rules matching threat levels to actions like blocking, rate limiting, or alerting. Set up mitigation policies per namespace to isolate security responses. Define thresholds for user behavior analysis and configure graduated responses based on severity. Integrate with bot defense and WAF systems for coordinated protection across application layers.",
			descriptionShort: "Configure automated threat mitigation rules.",
			descriptionMedium:
				"Define malicious user detection policies and response actions. Apply blocking or rate limiting based on threat levels.",
			aliases: ["secops", "incident-response", "mitigation"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure automated threat mitigation policies",
				"Define rules for malicious user detection",
				"Manage incident response workflows",
				"Apply blocking or rate limiting to threats",
			],
			relatedDomains: ["bot_defense", "waf", "network_security"],
			icon: "🚨",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23DC2626'%3E%3Cpath d='M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.25 6 2.25v4.78zM11 7h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E",
			uiCategory: "Security",
			primaryResources: [
				{
					name: "mitigation_policy",
					description: "Mitigation policy for incident response",
					descriptionShort: "Mitigation policy",
					tier: "Advanced" as const,
					icon: "🛡️",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: false,
				},
				{
					name: "malicious_user_rule",
					description: "Malicious user rule for threat mitigation",
					descriptionShort: "Malicious user rule",
					tier: "Advanced" as const,
					icon: "🚨",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"service_mesh",
		{
			name: "service_mesh",
			displayName: "Service Mesh",
			description:
				"Create classifications to organize services and support automatic identification of interconnected components. Set up analysis pipelines to understand patterns and build intelligent routing rules. Define network function virtualization for regional architectures. Configure authentication settings including location, state, and type recognition.",
			descriptionShort: "Configure application types and discovery.",
			descriptionMedium:
				"Manage NFV integrations and workload categories. Enable traffic learning across distributed deployments.",
			aliases: ["mesh", "svc-mesh"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Infrastructure",
			useCases: [
				"Configure service mesh connectivity",
				"Manage endpoint discovery and routing",
				"Configure NFV services",
				"Define application settings and types",
			],
			relatedDomains: [
				"managed_kubernetes",
				"container_services",
				"virtual",
			],
			icon: "🕸️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23A855F7'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E",
			uiCategory: "Service Mesh",
			primaryResources: [
				{
					name: "endpoint",
					description: "Service mesh endpoint for traffic routing",
					descriptionShort: "Endpoint",
					tier: "Advanced" as const,
					icon: "🎯",
					category: "Networking",
					supportsLogs: true,
					supportsMetrics: true,
				},
				{
					name: "origin_pool",
					description:
						"Backend server group for load balancer traffic distribution",
					descriptionShort: "Origin pool",
					tier: "Standard" as const,
					icon: "🎯",
					category: "Load Balancing",
					supportsLogs: false,
					supportsMetrics: true,
					dependencies: { optional: ["healthcheck"] },
					relationshipHints: [
						"healthcheck: Monitor origin server health",
					],
				},
				{
					name: "service_discovery",
					description:
						"Service discovery configuration for dynamic endpoints",
					descriptionShort: "Service discovery",
					tier: "Advanced" as const,
					icon: "🔍",
					category: "Networking",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"shape",
		{
			name: "shape",
			displayName: "Shape",
			description:
				"Set up bot defense infrastructure across namespaces with deployment tracking and status monitoring. Integrate mobile SDK attributes for app shielding and device recognition. Subscribe to threat intelligence services for real-time protection updates. Define cluster states and location-based policies for distributed bot mitigation. Track deployment history and manage policy configurations through centralized infrastructure objects.",
			descriptionShort: "Configure bot defense and threat prevention.",
			descriptionMedium:
				"Deploy bot infrastructure with mobile SDK integration. Manage subscription services and policy enforcement for automated threat protection.",
			aliases: ["shape-sec", "safeap"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure Shape Security policies",
				"Manage bot and threat prevention",
				"Configure SafeAP policies",
				"Enable threat recognition",
			],
			relatedDomains: ["bot_defense", "waf"],
			icon: "🎭",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23A855F7'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E",
			uiCategory: "Client-Side Defense",
			primaryResources: [
				{
					name: "shape_app_firewall",
					description:
						"Shape application firewall for advanced protection",
					descriptionShort: "Shape WAF",
					tier: "Advanced" as const,
					icon: "🛡️",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
				{
					name: "shape_recognizer",
					description:
						"Shape recognizer for traffic pattern analysis",
					descriptionShort: "Shape recognizer",
					tier: "Advanced" as const,
					icon: "🔍",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"sites",
		{
			name: "sites",
			displayName: "Sites",
			description:
				"Deploy edge nodes across AWS, Azure, and GCP with automated provisioning. Configure VPC peering, transit gateway attachments, and VPN tunnel settings. Define virtual groupings with label selectors for policy targeting. Manage Kubernetes cluster integrations and secure mesh deployments. Monitor node health, validate configurations, and set IP prefix allocations.",
			descriptionShort: "Deploy edge nodes across cloud providers.",
			descriptionMedium:
				"Configure AWS, Azure, GCP deployments with VPC integration. Manage transit gateways and VPN tunnels.",
			aliases: ["site", "deployment"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Infrastructure",
			useCases: [
				"Deploy F5 XC across cloud providers (AWS, Azure, GCP)",
				"Manage XCKS (Managed Kubernetes) site deployments (formerly AppStack)",
				"Deploy Secure Mesh sites for networking-focused edge deployments",
				"Integrate external Kubernetes clusters as Customer Edge",
				"Configure AWS VPC, Azure VNet, and GCP VPC sites",
				"Manage virtual sites and site policies",
			],
			relatedDomains: [
				"cloud_infrastructure",
				"customer_edge",
				"managed_kubernetes",
			],
			cliMetadata: {
				quick_start: {
					command:
						"curl $F5XC_API_URL/api/config/namespaces/default/sites -H 'Authorization: APIToken $F5XC_API_TOKEN'",
					description:
						"List all configured sites in default namespace",
					expected_output:
						"JSON array of site objects with deployment status",
				},
				common_workflows: [
					{
						name: "Deploy AWS Cloud Site",
						description:
							"Deploy F5 XC in AWS for traffic management",
						steps: [
							{
								step: 1,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/cloud_credentials -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...aws_credentials...}'",
								description:
									"Create cloud credentials for AWS access",
							},
							{
								step: 2,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/sites -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...site_config...}'",
								description:
									"Create site definition for AWS deployment",
							},
						],
						prerequisites: [
							"AWS account configured",
							"Cloud credentials created",
							"VPC and security groups prepared",
						],
						expected_outcome:
							"Site deployed in AWS, nodes connected and healthy",
					},
				],
				troubleshooting: [
					{
						problem: "Site deployment fails",
						symptoms: [
							"Status: Error",
							"Nodes not coming online",
							"Connectivity issues",
						],
						diagnosis_commands: [
							"curl $F5XC_API_URL/api/config/namespaces/default/sites/{site} -H 'Authorization: APIToken $F5XC_API_TOKEN'",
							"Check site events and node status",
						],
						solutions: [
							"Verify cloud credentials have required permissions",
							"Check VPC and security group configuration",
							"Review site logs for deployment errors",
							"Ensure sufficient cloud resources available",
						],
					},
				],
				icon: "🌍",
			},
			icon: "🌍",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E",
			uiCategory: "Sites",
			primaryResources: [
				{
					name: "site",
					description:
						"Physical or cloud deployment location for edge services",
					descriptionShort: "Site",
					tier: "Standard" as const,
					icon: "🏢",
					category: "Infrastructure",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["virtual_site"] },
					relationshipHints: [
						"virtual_site: Logical grouping of physical sites",
					],
				},
				{
					name: "virtual_site",
					description:
						"Logical grouping of sites using label selectors",
					descriptionShort: "Virtual site",
					tier: "Standard" as const,
					icon: "🏷️",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "site_mesh_group",
					description:
						"Mesh connectivity configuration between multiple sites",
					descriptionShort: "Site mesh group",
					tier: "Advanced" as const,
					icon: "🕸️",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: true,
					dependencies: { required: ["site"] },
					relationshipHints: [
						"site: Sites to include in mesh connectivity",
					],
				},
			],
		},
	],
	[
		"statistics",
		{
			name: "statistics",
			displayName: "Statistics",
			description:
				"Set up alert policies with custom matchers, label filters, and group-by rules for targeted notifications. Define routing channels via email, webhook, or integration receivers with confirmation and verification workflows. Access flow analytics, historical alert data, and namespace-scoped metrics. Build capacity planning graphs and operational summaries. Observe deployment health and service discovery mapping across distributed environments.",
			descriptionShort: "Monitor alerts, logs, and flow analytics.",
			descriptionMedium:
				"Configure alerting policies and notification receivers. Track service topology, build dashboards, and view site health summaries.",
			aliases: ["stats", "metrics", "logs"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Operations",
			useCases: [
				"Access flow statistics and analytics",
				"Manage alerts and alerting policies",
				"View logs and log receivers",
				"Generate reports and graphs",
				"Track topology and service discovery",
				"Monitor status at sites",
			],
			relatedDomains: ["observability", "support"],
			icon: "📈",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z'/%3E%3C/svg%3E",
			uiCategory: "Observability",
			primaryResources: [
				{
					name: "dashboard",
					description: "Dashboard for metrics visualization",
					descriptionShort: "Dashboard",
					tier: "Standard" as const,
					icon: "📊",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
					dependencies: { optional: ["saved_query"] },
					relationshipHints: [
						"saved_query: Queries displayed on dashboard",
					],
				},
				{
					name: "saved_query",
					description: "Saved query for metrics and log analysis",
					descriptionShort: "Saved query",
					tier: "Standard" as const,
					icon: "🔍",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"support",
		{
			name: "support",
			displayName: "Support",
			description:
				"Open new cases and assign severity ratings based on business impact. Append notes throughout resolution workflows. Mark items as closed or reinstate them if symptoms recur. Execute diagnostic packet captures on deployed sites for network troubleshooting. Handle tax exemption verification through certificate submission.",
			descriptionShort: "Create and track customer tickets.",
			descriptionMedium:
				"Submit requests with file uploads and priority levels. Add comments and escalate critical incidents to engineering teams.",
			aliases: ["tickets", "help-desk"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Operations",
			useCases: [
				"Submit and manage support tickets",
				"Track customer support requests",
				"Access operational support documentation",
			],
			relatedDomains: ["statistics", "observability"],
			icon: "🎫",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2314B8A6'%3E%3Cpath d='M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54z'/%3E%3C/svg%3E",
			uiCategory: "Configuration",
			primaryResources: [
				{
					name: "support_case",
					description:
						"Support case for issue tracking and resolution",
					descriptionShort: "Support case",
					tier: "Standard" as const,
					icon: "🎫",
					category: "Other",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "alert",
					description: "System alert for operational notifications",
					descriptionShort: "Alert",
					tier: "Standard" as const,
					icon: "🔔",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "audit_log",
					description:
						"Audit log for compliance and security tracking",
					descriptionShort: "Audit log",
					tier: "Standard" as const,
					icon: "📝",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"telemetry_and_insights",
		{
			name: "telemetry_and_insights",
			displayName: "Telemetry And Insights",
			description:
				"F5 Distributed Cloud Telemetry And Insights API specifications",
			descriptionShort: "Telemetry And Insights API",
			descriptionMedium:
				"F5 Distributed Cloud Telemetry And Insights API specifications",
			aliases: ["telemetry", "ti"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Operations",
			useCases: [
				"Collect and analyze telemetry data",
				"Generate actionable insights from metrics",
				"Configure telemetry collection policies",
			],
			relatedDomains: ["observability", "statistics"],
			icon: "📉",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E",
			uiCategory: "Observability",
			primaryResources: [
				{
					name: "telemetry_receiver",
					description: "Telemetry receiver for data collection",
					descriptionShort: "Telemetry receiver",
					tier: "Standard" as const,
					icon: "📡",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "insight_query",
					description: "Insight query for analytics",
					descriptionShort: "Insight query",
					tier: "Standard" as const,
					icon: "🔍",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"tenant_and_identity",
		{
			name: "tenant_and_identity",
			displayName: "Tenant And Identity",
			description:
				"Set up granular alert routing for administrative and combined channels with personalized delivery options. Control active login sessions and enforce one-time password resets for security compliance. Define display layouts and avatar images for customized user experiences. Process onboarding access submissions and toggle account management features. Coordinate support ticket attachments and client relationship interactions across managed tenant hierarchies.",
			descriptionShort: "Manage user profiles and session controls.",
			descriptionMedium:
				"Configure OTP resets and admin alert channels. Handle view settings and profile customization for platform participants.",
			aliases: ["tenant-identity", "idm", "user-settings"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Platform",
			useCases: [
				"Manage user profiles and notification preferences",
				"Configure session controls and OTP settings",
				"Handle identity management operations",
				"Process initial user access requests",
			],
			relatedDomains: ["users", "authentication", "system"],
			icon: "🪪",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2306B6D4'%3E%3Cpath d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 3.5c1.38 0 2.5 1.12 2.5 2.5S12.38 12.5 11 12.5 8.5 11.38 8.5 10s1.12-2.5 2.5-2.5zm5 10.5H6v-1.25c0-1.66 3.33-2.5 5-2.5s5 .84 5 2.5V18zm2-4h-4v-2h4v2zm0-4h-4V8h4v2z'/%3E%3C/svg%3E",
			uiCategory: "Identity & Access",
			primaryResources: [
				{
					name: "user_profile",
					description: "User profile with personal settings",
					descriptionShort: "User profile",
					tier: "Standard" as const,
					icon: "👤",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "session",
					description: "User session for authentication state",
					descriptionShort: "Session",
					tier: "Standard" as const,
					icon: "🔑",
					category: "Identity",
					supportsLogs: true,
					supportsMetrics: false,
				},
				{
					name: "otp_policy",
					description: "OTP policy for multi-factor authentication",
					descriptionShort: "OTP policy",
					tier: "Standard" as const,
					icon: "🔐",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"threat_campaign",
		{
			name: "threat_campaign",
			displayName: "Threat Campaign",
			description:
				"F5 Distributed Cloud Threat Campaign API specifications",
			descriptionShort: "Threat Campaign API",
			descriptionMedium:
				"F5 Distributed Cloud Threat Campaign API specifications",
			aliases: ["threats", "campaigns", "threat-intel"],
			complexity: "moderate" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Security",
			useCases: [
				"Track and analyze threat campaigns",
				"Monitor active threats and attack patterns",
				"Configure threat intelligence integration",
			],
			relatedDomains: ["bot_defense", "ddos"],
			icon: "⚠️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FBBF24'%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E",
			uiCategory: "Security",
			primaryResources: [
				{
					name: "threat_campaign_policy",
					description:
						"Threat campaign detection and mitigation policy",
					descriptionShort: "Threat campaign policy",
					tier: "Advanced" as const,
					icon: "🎯",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"users",
		{
			name: "users",
			displayName: "Users",
			description:
				"Deploy namespace-scoped access credentials with lifecycle state tracking for secure machine enrollment. Build hierarchical tagging frameworks that enable systematic organization of infrastructure elements. Retrieve automated provisioning payloads for streamlined node initialization. Enable system-level automatic tagging that applies predefined metadata to newly created objects without operator action.",
			descriptionShort: "Manage account tokens and label settings.",
			descriptionMedium:
				"Configure credential issuance and cloud-init provisioning. Establish key-value taxonomies for consistent resource categorization across deployments.",
			aliases: ["user", "accounts", "iam"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Platform",
			useCases: [
				"Manage user accounts and tokens",
				"Configure user identification",
				"Manage user settings and preferences",
				"Configure implicit and known labels",
			],
			relatedDomains: ["system", "admin"],
			icon: "👥",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366F1'%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E",
			uiCategory: "Identity & Access",
			primaryResources: [
				{
					name: "user",
					description: "User account for platform access",
					descriptionShort: "User",
					tier: "Standard" as const,
					icon: "👤",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
					dependencies: { optional: ["user_role"] },
					relationshipHints: [
						"user_role: Role assignment for user permissions",
					],
				},
				{
					name: "user_role",
					description: "User role for permission management",
					descriptionShort: "User role",
					tier: "Standard" as const,
					icon: "👔",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "namespace_role",
					description:
						"Namespace-scoped role for fine-grained permissions",
					descriptionShort: "Namespace role",
					tier: "Standard" as const,
					icon: "📁",
					category: "Identity",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"virtual",
		{
			name: "virtual",
			displayName: "Virtual",
			description:
				"Deploy load balancers across protocols with origin pool management and service discovery. Set up geo-location routing to direct traffic based on client location. Define rate limiter policies to control request volume and protect services from abuse. Configure health checks for origin monitoring and automatic failover. Manage service policies for access control and traffic filtering. Enable malware protection and threat campaign blocking for security enforcement.",
			descriptionShort: "Configure load balancers and origin pools.",
			descriptionMedium:
				"Create HTTP, TCP, and UDP load balancers with origin pools. Define routing rules, health checks, and rate limiting policies.",
			aliases: ["lb", "loadbalancer", "vhost"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Networking",
			useCases: [
				"Configure HTTP/TCP/UDP load balancers",
				"Manage origin pools and services",
				"Configure virtual hosts and routing",
				"Define rate limiter and service policies",
				"Manage geo-location-based routing",
				"Configure proxy and forwarding policies",
				"Manage malware protection and threat campaigns",
				"Configure health checks and endpoint monitoring",
			],
			relatedDomains: ["dns", "service_policy", "network"],
			cliMetadata: {
				quick_start: {
					command:
						"curl $F5XC_API_URL/api/config/namespaces/default/http_loadbalancers -H 'Authorization: APIToken $F5XC_API_TOKEN'",
					description:
						"List all HTTP load balancers in default namespace",
					expected_output:
						"JSON array of load balancer objects with status",
				},
				common_workflows: [
					{
						name: "Create HTTP Load Balancer",
						description:
							"Deploy basic HTTP load balancer with origin pool backend",
						steps: [
							{
								step: 1,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/origin_pools -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...pool_config...}'",
								description:
									"Create backend origin pool with target endpoints",
							},
							{
								step: 2,
								command:
									"curl -X POST $F5XC_API_URL/api/config/namespaces/default/http_loadbalancers -H 'Authorization: APIToken $F5XC_API_TOKEN' -H 'Content-Type: application/json' -d '{...lb_config...}'",
								description:
									"Create HTTP load balancer pointing to origin pool",
							},
						],
						prerequisites: [
							"Active namespace",
							"Origin pool targets reachable",
							"DNS domain configured",
						],
						expected_outcome:
							"Load balancer in Active status, traffic routed to origins",
					},
				],
				troubleshooting: [
					{
						problem:
							"Load balancer shows Configuration Error status",
						symptoms: [
							"Status: Configuration Error",
							"No traffic routing",
							"Requests timeout",
						],
						diagnosis_commands: [
							"curl $F5XC_API_URL/api/config/namespaces/default/http_loadbalancers/{name} -H 'Authorization: APIToken $F5XC_API_TOKEN'",
							"Check origin_pool status and endpoint connectivity",
						],
						solutions: [
							"Verify origin pool targets are reachable from edge",
							"Check DNS configuration and domain propagation",
							"Validate certificate configuration if using HTTPS",
							"Review security policies not blocking traffic",
						],
					},
				],
				icon: "⚖️",
			},
			icon: "⚖️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234F46E5'%3E%3Cpath d='M12 3c-1.27 0-2.4.8-2.82 2H3v2h1.95L2 14c-.47 2 1 4 4 4s4.47-2 4-4L7.05 7H9.1c.42 1.2 1.55 2 2.9 2s2.4-.8 2.82-2h2.13L14 14c-.47 2 1 4 4 4s4.47-2 4-4l-2.95-7H21V5h-6.18c-.42-1.2-1.55-2-2.82-2zm-6 12.5c-.73 0-1.45-.3-1.97-.82L6 10l1.97 4.68c-.52.52-1.24.82-1.97.82zm12 0c-.73 0-1.45-.3-1.97-.82L18 10l1.97 4.68c-.52.52-1.24.82-1.97.82z'/%3E%3C/svg%3E",
			uiCategory: "Load Balancing",
			primaryResources: [
				{
					name: "http_loadbalancer",
					description:
						"Layer 7 HTTP/HTTPS load balancer for application traffic distribution",
					descriptionShort: "HTTP load balancer",
					tier: "Standard" as const,
					icon: "🌐",
					category: "Load Balancing",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: {
						required: ["origin_pool"],
						optional: [
							"healthcheck",
							"app_firewall",
							"certificate",
							"rate_limiter",
							"service_policy",
							"bot_defense_policy",
						],
					},
					relationshipHints: [
						"origin_pool: Backend servers for traffic distribution",
						"app_firewall: WAF protection (requires WAAP subscription)",
						"healthcheck: Monitor backend availability",
						"certificate: TLS termination for HTTPS",
						"rate_limiter: Protect against traffic spikes",
					],
				},
				{
					name: "tcp_loadbalancer",
					description:
						"Layer 4 TCP/UDP load balancer for non-HTTP protocol traffic",
					descriptionShort: "TCP load balancer",
					tier: "Standard" as const,
					icon: "🔌",
					category: "Load Balancing",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: {
						required: ["origin_pool"],
						optional: ["healthcheck"],
					},
					relationshipHints: [
						"origin_pool: Backend servers for TCP/UDP traffic",
						"healthcheck: Monitor origin server health",
					],
				},
				{
					name: "origin_pool",
					description:
						"Backend server group for load balancer traffic distribution",
					descriptionShort: "Origin pool",
					tier: "Standard" as const,
					icon: "🎯",
					category: "Load Balancing",
					supportsLogs: false,
					supportsMetrics: true,
					dependencies: { optional: ["healthcheck"] },
					relationshipHints: [
						"healthcheck: Monitor origin server health",
					],
				},
				{
					name: "healthcheck",
					description:
						"Health monitoring configuration for origin server availability",
					descriptionShort: "Health check",
					tier: "Standard" as const,
					icon: "💓",
					category: "Monitoring",
					supportsLogs: false,
					supportsMetrics: true,
				},
			],
		},
	],
	[
		"vpm_and_node_management",
		{
			name: "vpm_and_node_management",
			displayName: "Vpm And Node Management",
			description:
				"F5 Distributed Cloud Vpm And Node Management API specifications",
			descriptionShort: "Vpm And Node Management API",
			descriptionMedium:
				"F5 Distributed Cloud Vpm And Node Management API specifications",
			aliases: ["vpm", "nodes", "node-mgmt"],
			complexity: "simple" as const,
			isPreview: false,
			requiresTier: "Standard",
			category: "Platform",
			useCases: [
				"Manage Virtual Private Mesh (VPM) configuration",
				"Configure node lifecycle and management",
				"Monitor VPM and node status",
			],
			relatedDomains: ["sites", "system"],
			icon: "🖥️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748B'%3E%3Cpath d='M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E",
			uiCategory: "Configuration",
			primaryResources: [
				{
					name: "node_config",
					description: "Node configuration for edge device settings",
					descriptionShort: "Node config",
					tier: "Standard" as const,
					icon: "🖥️",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
				{
					name: "vpm_config",
					description:
						"VPM configuration for virtual platform management",
					descriptionShort: "VPM config",
					tier: "Standard" as const,
					icon: "⚙️",
					category: "Infrastructure",
					supportsLogs: false,
					supportsMetrics: false,
				},
			],
		},
	],
	[
		"waf",
		{
			name: "waf",
			displayName: "Waf",
			description:
				"Set up firewall configurations with attack type settings and violation detection. Create exclusion policies to tune false positives and customize blocking responses. Deploy staged signatures before production release and monitor rule hits through security event metrics. Integrate with virtual hosts for layered protection using AI-based risk blocking and anonymization settings for sensitive data handling.",
			descriptionShort:
				"Configure application firewall rules and bot protection.",
			descriptionMedium:
				"Define security policies for web applications. Manage attack signatures, exclusion rules, and threat detection settings.",
			aliases: ["firewall", "appfw"],
			complexity: "advanced" as const,
			isPreview: false,
			requiresTier: "Advanced",
			category: "Security",
			useCases: [
				"Configure web application firewall rules",
				"Manage application security policies",
				"Enable enhanced firewall capabilities",
				"Configure protocol inspection",
			],
			relatedDomains: ["api", "network_security", "virtual"],
			icon: "🛡️",
			logoSvg:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'/%3E%3C/svg%3E",
			uiCategory: "Security",
			primaryResources: [
				{
					name: "app_firewall",
					description:
						"Web Application Firewall policy for HTTP traffic protection",
					descriptionShort: "WAF policy",
					tier: "Advanced" as const,
					icon: "🛡️",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
					dependencies: { optional: ["service_policy"] },
					relationshipHints: [
						"service_policy: Fine-grained access control rules",
					],
				},
				{
					name: "service_policy",
					description:
						"Service-level access control and traffic management rules",
					descriptionShort: "Service policy",
					tier: "Advanced" as const,
					icon: "📋",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: false,
				},
				{
					name: "malicious_user_detection",
					description:
						"Automated detection and mitigation of malicious user behavior",
					descriptionShort: "Malicious user detection",
					tier: "Advanced" as const,
					icon: "🚨",
					category: "Security",
					supportsLogs: true,
					supportsMetrics: true,
				},
			],
		},
	],
]);

/**
 * Total domain count
 */
export const DOMAIN_COUNT = 38;
