/**
 * @deprecated
 * ## use urlQueryBuilder instead
 *
 * Will generate a url with the given parameters
 *
 * ie. /path?param1=value1&param2=value2
 *
 *  NOTE: Try to keep keys camelCase
 *
 * @param url Base URL that we want to append to
 * @param data key value pairs to append to the url
 * @returns url with appended data
 */
export const queryURLBuilder = (
	url: string,
	data: { key: string; value: string | number }[]
) => {
	let queryURL = url;
	data.forEach(({ key, value }, index) => {
		if (index === 0) {
			queryURL += `?${key}=${value}`;
		} else {
			queryURL += `&${key}=${value}`;
		}
	});
	return queryURL;
};

/**
 * Will generate a url with the given query parameters
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

		// queryURL.search("?") > -1 -> if there are already other query parameters
		queryURL += `${queryURL.search("?") > -1 ? "&" : "?"}${key}=${value}`;
	});

	return queryURL;
};

/**
 * Search for query, this will ignore casing.
 *
 * @param search Query to search for
 * @param args Values to search through
 * @returns boolean - true if query was found
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
