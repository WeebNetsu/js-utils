import { urlSafeRegex } from "../regex";

/**
 * Convert the first letter of a piece of text to uppercase
 *
 * ie. "mike" -> "Mike"
 *
 * @param text Text to parse
 * @returns Text with first letter uppercase
 */
export const capitalizeFirstLetter = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Limits a piece of text, if the text is longer than the limit, then the
 * text will end with '...' after the limited amount of characters has been
 * reached.
 *
 * NOTE: This will trim the text of useless white space!
 *
 * @param text text to limit
 * @param limit amount of characters to allow
 * @returns Limited text with '...' if the string is too long
 */
export const limitText = (text: string, limit = 50) => {
	if (text.trim().length <= limit) return text;

	// 2 trims = 1st trim to remove white spaces, 2nd trim to remove a space
	// if the substring ends on a white space
	// ie. 'I am ' should not become 'I am ...' but instead 'I am...'
	return `${text.trim().substring(0, limit).trimEnd()}...`;
};

/**
 * Remove the spaces in a given string
 *
 * @param text string to remove spaces from
 * @returns the provided text without any spaces
 */
export const removeSpacesFromStr = (text: string) => {
	return text.replace(/\s/g, "");
};

/**
 * Remove any characters that are not digits, letters or _
 * from a string
 *
 * @param text string to remove unsafe characters from
 * @returns the provided text without any unsafe characters
 */
export const removeUnsafeCharsFromStr = (text: string) => {
	return text.replace(urlSafeRegex, "");
};
