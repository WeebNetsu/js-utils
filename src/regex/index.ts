/**
 * Check if value is a digit
 */
export const digitRegex = /^-?[\d.]+(?:e-?\d+)?$/;

/**
 * Check if email is valid
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @deprecated Checks may not be accurate
 *
 * Checks for any characters that are not URL safe, only
 * letters, digits and _ is allowed
 */
export const urlSafeRegex = /[^a-zA-Z0-9-_]/g;

/**
 * Regex that can find links in a string
 */
export const linkRegex = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/g;
