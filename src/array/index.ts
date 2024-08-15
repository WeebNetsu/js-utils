/**
 * Removes all 'undefined' from an array
 *
 * @param arr Array to modify
 * @returns array without any undefined values
 */
export const removeUndefinedFromArray = <T>(arr: (T | undefined)[]): T[] => {
	// thank you https://stackoverflow.com/a/56991681/15586166
	return arr.filter((a) => typeof a !== "undefined") as T[];
};

/**
 * Removes all 'null' from an array
 *
 * @param arr Array to modify
 * @returns array without any null values
 */
export const removeNullFromArray = <T>(arr: (T | null)[]): T[] => {
	return arr.filter((a) => a !== null) as T[];
};

/**
 * @deprecated use removeVoidValuesFromArray instead
 *
 * Removes all 'undefined' and 'null' values from an array
 *
 * @param arr Array to modify
 * @returns array without any void values
 */
export const removeEmptyValuesFromArray = <T>(
	arr: (T | undefined | null)[]
): T[] => {
	return arr.filter((a) => typeof a !== "undefined" && a !== null) as T[];
};

/**
 * Removes all 'undefined' and 'null' values from an array
 *
 * @param arr Array to modify
 * @returns array without any void values
 */
export const removeVoidValuesFromArray = <T>(
	arr: (T | undefined | null)[]
): T[] => {
	return arr.filter((a) => typeof a !== "undefined" && a !== null) as T[];
};

/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param superset
 * @param subset
 *
 * @returns true if the first array contains all elements of second array
 */
export const arrayContainsArray = <T>(superset: T[], subset: T[]) => {
	return subset.every((value) => superset.indexOf(value) >= 0);
};

/**
 * Check if an array has duplicate values
 *
 * _Note: This function is case sensitive, "Hello" !== "hello"_
 *
 * @param array Array to check for duplicates
 * @returns true if array has duplicate values
 */
export const arrayHasDuplicates = (array: any[]) => {
	return new Set(array).size !== array.length;
};

/**
 * Removes duplicate values from array
 *
 * @param arr array to remove duplicates from
 * @returns array without any duplicate values
 */
export const removeDuplicatesFromArray = <
	T extends string | number | boolean | undefined
>(
	arr: T[]
): T[] => {
	return [...new Set(arr)];
};
