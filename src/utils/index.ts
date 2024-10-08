/**
 * Will generate a url with the given query parameters.
 *
 * Note that if the value in data is undefined or null
 * the parameter will be ignored.
 *
 * @param url base URL that we want to append to
 * @param data key value pairs to append to the url
 * @returns url with appended data
 *
 * @example
 *  urlQueryBuilder("http://test", {
 *      cool: true,
 *      name: "jack"
 *  }) // http://test?cool=true&name=jack
 */
export const urlQueryBuilder = (
	url: string,
	data: {
		[key: string]: string | number | boolean | undefined | null;
	}
) => {
	let queryURL = url;

	Object.keys(data).map((key) => {
		const value = data[key];

		if (value !== undefined && value !== null) {
			// queryURL.search("?") > -1 -> if there are already other query parameters
			queryURL += `${
				queryURL.split("?").length > 1 ? "&" : "?"
			}${key}=${value}`;
		}
	});

	return queryURL;
};

/**
 * Search for text in string, this will ignore casing.
 * Will be true if at least one of the searches returned true.
 *
 * @note this uses .include() to search, so will only work on
 * individual words and not text in words. Use regexStringListSearch() instead
 * if you want a more powerful search
 *
 * @param search Query to search for
 * @param args Values to search through
 * @returns boolean - true if query was found
 * @example
 * includeSearch("cool", "I am cool") // true
 * includeSearch("cool", "I am drool", "you are cool") // true
 * includeSearch("cool", "yup", "nothing") // false
 */
export const includeSearch = (
	search: string,
	...args: (string | undefined)[]
): boolean => {
	const res = args.map((arg) =>
		arg?.toLowerCase().includes(search.toLowerCase())
	);

	return res.indexOf(true) !== -1;
};
