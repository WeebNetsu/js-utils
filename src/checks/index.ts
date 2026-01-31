import { digitRegex, emailRegex } from '../regex';

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
        digitRegex.test(String(value).replace(/\s/g, '')) &&
        String(value).replace(/\s/g, '').split('.').length <= 2
    );
};

/**
 * Checks if an email is valid
 *
 * @param email a string that will be or is user's email used for login
 * @returns true if the email is valid
 */
export const isValidEmail = (email?: string) => {
    if (!email) return false;
    if (checkStrEmpty(email)) return false;

    // just in case
    if (email.split('@').length !== 2) return false;

    return emailRegex.test(email);
};

/**
 * @deprecated use `isNonEmptyStr` and `isNonEmptyArrStr` instead
 *
 * Checks if string is empty, if it is, returns true. It will also check if passed
 * in value is of type "string".
 *
 * @param str String to check, or array of string (check multiple strings)
 *
 * @returns true if string is empty
 */
export const checkStrEmpty = (str: string | (string | undefined)[] | undefined | any): boolean => {
    // if undefined
    if (!str) return true;

    if (typeof str === 'object') {
        // if array is empty
        if (str.length < 1) {
            return true;
        }

        for (let index = 0; index < str.length; index++) {
            const selectedStr = str[index];

            // if undefined
            if (!selectedStr) return true;
            // make sure it's a string
            if (typeof selectedStr !== 'string') return true;

            // check if empty
            if (selectedStr.trim().length < 1) {
                return true;
            }
        }

        return false;
    }

    if (typeof str !== 'string') return true;

    return str.trim().length < 1;
};

/**
 * Checks if string is not empty, if it has at least 1 NON SPACE character, returns true. It will also check if passed
 * in value is of type "string".
 *
 * @param str String to check
 *
 * @returns true if string is not empty
 */
export const isNonEmptyStr = (str: unknown): str is string => typeof str === 'string' && str.trim().length > 0;

/**
 * Checks if all strings in an array is not empty. It will also check if passed
 * in value is of type "string[]".
 *
 * @param strArr Array of strings to check
 *
 * @returns true if all strings in the array is not empty
 */
export const isNonEmptyArrStr = (strArr: unknown): strArr is string[] => {
    if (!Array.isArray(strArr)) return false;

    if (strArr.length < 1) return false;

    return strArr.every((str) => isNonEmptyStr(str));
};

/**
 * Checks if the value provided can be found inside the provided enum
 *
 * @param value Value to check if it exists in enum
 * @param T Enum
 * @returns true if value is part of the provided enum
 */
export const isOfEnum = <T extends { [key: string]: unknown }>(value: unknown, T: T): value is T[keyof typeof T] => {
    return Object.values(T).includes(value);
};
