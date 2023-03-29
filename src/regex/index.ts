/**
 * Check if value is a digit
 */
export const digitRegex = /^-?[\d.]+(?:e-?\d+)?$/;

/**
 * Check if email is valid
 */
export const emailRegex =
	/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

/**
 * Checks for any characters that are not URL safe, only
 * letters, digits and _ is allowed
 */
export const urlSafeRegex = /[^a-zA-Z0-9-_]/g;
