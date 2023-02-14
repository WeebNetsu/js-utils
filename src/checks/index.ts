import { digitRegex } from "../regex";

/**
 * This will check if the value passed in is a valid number, mainly useful on strings.
 * Note: Infinity and -Infinity will be marked as NOT valid numbers
 *
 * @param value value to check
 * @returns true if value is a valid number
 */
export const isValidNumber = (value: string | number) => {
	return (
		!Number.isNaN(Number(value)) &&
		Number(value) !== Infinity &&
		Number(value) !== -Infinity &&
		digitRegex.test(String(value).replace(/\s/g, "")) &&
		String(value).replace(/\s/g, "").split(".").length <= 2
	);
};
/**
 * Checks if string is empty, if it is, returns true. It will also check if passed
 * in value is of type "string".
 *
 * @param str String to check, or array of string (check multiple strings)
 *
 * @returns true if string is empty
 */
export const checkStrEmpty = (
	str: string | (string | undefined)[] | undefined | any
): boolean => {
	// if undefined
	if (!str) return true;

	if (typeof str === "object") {
		// if array is empty
		if (str.length < 1) {
			return true;
		}

		for (let index = 0; index < str.length; index++) {
			const selectedStr = str[index];

			// if undefined
			if (!selectedStr) return true;
			// make sure it's a string
			if (typeof selectedStr !== "string") return true;

			// check if empty
			if (selectedStr.trim().length < 1) {
				return true;
			}
		}

		return false;
	}

	if (typeof str !== "string") return true;

	return str.trim().length < 1;
};
