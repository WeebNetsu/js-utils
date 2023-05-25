import { linkRegex, urlSafeRegex } from "../regex";

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
 * @deprecated May not work as expected
 *
 * Remove any characters that are not digits, letters or _
 * from a string
 *
 * @param text string to remove unsafe characters from
 * @returns the provided text without any unsafe characters
 */
export const removeUnsafeCharsFromStr = (text: string) => {
	return text.replace(urlSafeRegex, "");
};

/**
 * Calculates how similar 2 strings are to each other.
 *
 * @param string1 First string to compare
 * @param string2 Second string to compare
 * @returns Number between 0 and 1 (closer to 1 = identical)
 */
export const calculateStringSimilarity = (string1: string, string2: string) => {
	// * Code generated by ChatGPT

	const length1 = string1.length;
	const length2 = string2.length;

	// Calculate the edit distance between the strings using dynamic programming
	const dp: number[][] = [];
	for (let i = 0; i <= length1; i++) {
		dp[i] = [];
		dp[i][0] = i;
	}

	for (let j = 0; j <= length2; j++) {
		dp[0][j] = j;
	}

	for (let i = 1; i <= length1; i++) {
		for (let j = 1; j <= length2; j++) {
			if (string1[i - 1] === string2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.min(
					dp[i - 1][j] + 1, // Deletion
					dp[i][j - 1] + 1, // Insertion
					dp[i - 1][j - 1] + 1 // Substitution
				);
			}
		}
	}

	// Calculate the similarity ratio
	const similarityRatio = 1 - dp[length1][length2] / Math.max(length1, length2);

	return similarityRatio;
};

/**
 * Changes all links in a text to an anchor tag.
 *
 * @param text text to check for links
 * @returns text with <a> tag covering links
 *
 * @example
 * enableTextLinks("Cannot be manually closed. Click this: https://www.youtube.com/stevesteacher and https://www.youtube.com")
 *
 * Will Return:
 * 'Cannot be manually closed. Click this: <a href="https://www.youtube.com/stevesteacher" target="_blank">https://www.youtube.com/stevesteacher</a> and <a href="https://www.youtube.com" target="_blank">https://www.youtube.com</a>'
 */
export const addAnchorTagsToText = (text: string) => {
	let newMessage = text;

	const matched = newMessage.matchAll(linkRegex);

	let value = matched.next().value;

	while (value) {
		const link = value[0];

		newMessage = newMessage.replaceAll(
			link,
			`<a href="${link}" target="_blank">${link}</a>`
		);

		value = matched.next().value;
	}

	return newMessage;
};
