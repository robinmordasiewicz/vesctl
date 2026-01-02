/**
 * Validation Module
 *
 * Provides validation utilities for CLI operations including
 * namespace scope validation and safety checks from enriched upstream specs.
 */

export {
	validateNamespaceScope,
	getNamespaceScope,
	getNamespaceScopeDescription,
	requiresSpecificNamespace,
	formatValidationError,
	type NamespaceScope,
	type NamespaceValidationResult,
} from "./namespace.js";

export {
	checkOperationSafety,
	getOperationDangerLevel,
	requiresConfirmation,
	formatSafetyWarning,
	getOperationSideEffects,
	type DangerLevel,
	type SideEffects,
	type SafetyCheckResult,
} from "./safety.js";
