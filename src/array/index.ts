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
