# @netsu/js-utils

Simple utilities for your JavaScript/Typescript project!

Installation: `npm i @netsu/js-utils`

NPM: https://www.npmjs.com/package/@netsu/js-utils

## Functions List

- [Arrays](#arrays)
  - [removeUndefinedFromArray](#removeundefinedfromarray)
  - [removeNullFromArray](#removenullfromarray)
  - [removeVoidValuesFromArray](#removevoidvaluesfromarray)
  - [arrayContainsArray](#arraycontainsarray)
  - [arrayHasDuplicates](#arrayhasduplicates)
  - [removeDuplicatesFromArray](#removeduplicatesfromarray)
- [Strings](#strings)
  - [capitalizeFirstLetter](#capitalizefirstletter)
  - [limitText](#limittext)
  - [removeSpacesFromStr](#removespacesfromstr)
  - [calculateStringSimilarity](#calculatestringsimilarity)
  - [addAnchorTagsToText](#addanchortagstotext)
  - [regexStringSearch](#regexstringsearch)
  - [regexStringListSearch](#regexstringlistsearch)
- [Checks](#checks)
  - [isValidNumber](#isvalidnumber)
  - [checkStrEmpty](#checkstrempty)
- [Format](#format)
  - [formatToCalendarDate](#formattocalendardate)
  - [formatToHumanDate](#formattohumandate)
  - [formatMin](#formatmin)
  - [formatSec](#formatsec)
  - [formatTimestamp](#formattimestamp)
  - [formatMoneyStr](#formatmoneystr)
  - [currencyFormatter](#currencyformatter)
- [Regex](#regex)
  - [digitRegex](#digitregex)
  - [emailRegex](#emailregex)
  - [linkRegex](#linkregex)
- [Other](#other)
  - [urlQueryBuilder](#urlquerybuilder)
  - [includeSearch](#includesearch)

## Available Functions

### Arrays

#### removeUndefinedFromArray

Removes all 'undefined' values from an array

```ts
removeUndefinedFromArray([1, undefined, 2, undefined, 3]); // [1, 2, 3]
```

#### removeNullFromArray

Removes all 'null' from an array

```ts
removeNullFromArray([1, null, 2, null, 3]); // [1, 2, 3]
```

#### removeVoidValuesFromArray

Removes all 'undefined' and 'null' values from an array

```ts
removeVoidValuesFromArray([1, null, 2, undefined, 3]); // [1, 2, 3]
```

#### arrayContainsArray

Returns TRUE if the first specified array contains all elements from the second one. FALSE otherwise.

```ts
arrayContainsArray([1, 2, 3], [1, 2]); // true
arrayContainsArray([1, 3], [1, 2]); // false
```

#### arrayHasDuplicates

Check if an array has duplicate values.

```ts
arrayHasDuplicates(["Hello", "World", "Hello"]); // true
arrayHasDuplicates(["Hello", "World", "!"]); // false
```

#### removeDuplicatesFromArray

Removes duplicate values from array.

```ts
removeDuplicatesFromArray([1, 1, 2, 3, 4, 4]); // [1, 2, 3, 4]
removeDuplicatesFromArray(["my", "my", "you"]); // ["my", "you"]
```

### Strings

#### capitalizeFirstLetter

Convert the first letter of a piece of text to uppercase

```ts
capitalizeFirstLetter("mike is cool"); // Mike is cool
```

#### limitText

Limits a piece of text, if the text is longer than the limit, then the text will end with '...' after the limited amount of characters has been reached. Default limit is 50 characters.

_NOTE: This will trim the text of useless white space!_

```ts
// Hello world
limitText("Hello world");
// Hello...
limitText("Hello world", 5);
// Lorem ipsum dolor, sit amet consectetur adipisicin...
limitText("Lorem ipsum dolor, sit amet consectetur adipisicing elit.");
```

#### removeSpacesFromStr

Remove the spaces in a given string

```ts
removeSpacesFromStr("I am cool"); // Iamcool
```

#### calculateStringSimilarity

Calculates how similar 2 strings are to each other.

```ts
calculateStringSimilarity("mike", "mike"); // 1 (100% similar)
calculateStringSimilarity("jackie chan", "jackie chon"); // 0.9090
calculateStringSimilarity("jakeiscool", "jakecool"); // 0.8
calculateStringSimilarity("mark", "nicole"); // 0
```

#### addAnchorTagsToText

Changes all links in a text to an anchor tag.

```ts
// Cannot be manually closed. Click this: <a href="https://www.youtube.com/stevesteacher" target="_blank">https://www.youtube.com/stevesteacher</a> and <a href="https://www.youtube.com" target="_blank">https://www.youtube.com</a>
enableTextLinks(
	"Cannot be manually closed. Click this: https://www.youtube.com/stevesteacher and https://www.youtube.com"
);
```

#### regexStringSearch

Search for text in string, this will ignore casing.

```ts
regexStringSearch("cool", "I am cool"); // true
regexStringSearch("cool", "I am drool", "ig"); // true
regexStringSearch("cool", "yup"); // false
```

#### regexStringListSearch

Search for text in string, this will ignore casing. Will be true if at least one of the searches returned true.

```ts
regexStringListSearch("cool", ["I am cool"]); // true
regexStringListSearch("cool", ["I am drool", "you are cool"], "ig"); // true
regexStringListSearch("cool", ["yup", "nothing"]); // false
```

### Checks

#### isValidNumber

This will check if the value passed in is a valid number, mainly useful on strings.

_Note: Infinity and -Infinity will be marked as **NOT** valid numbers_

```ts
isValidNumber(20); // true
isValidNumber("20.3"); // true
isValidNumber("lol"); // false
```

#### checkStrEmpty

Checks if string is empty, if it is, returns true. It will also check if passed in value is of type "string".

```ts
checkStrEmpty("  "); // true
checkStrEmpty("lol"); // false
checkStrEmpty(23); // true because not a string
```

### Format

#### formatToCalendarDate

Format JS date to date value that calendar inputs can use (YYYY-MM-DD)

```ts
formatToCalendarDate(new Date()); // 2023-04-28
```

#### formatToHumanDate

Format JS date to date and time that people can easily understand (defaults to `D MMM YYYY HH:mm`)

```
formatToHumanDate(new Date()) // 28 Apr 2023 10:18
formatToHumanDate(new Date(), "D-MM-YY hh:mm") // 28-04-23 10:18
```

#### formatMin

Converts number of minutes to time format (hh:mm)

```ts
formatMin(100); // 01:40
formatMin(120); // 02:00
formatMin(9999); // 66:39
```

#### formatSec

Converts number of seconds to time format (hh:mm:ss)

```ts
formatSec(100); // 00:01:40
formatSec(600); // 00:10:00
formatSec(9999); // 02:46:39
```

#### formatTimestamp

Format timestamp (HH:MM) into minutes.

```ts
formatTimestamp("1:00"); // 60
formatTimestamp("10:52"); // 652
formatTimestamp("2:22"); // 142
```

#### formatMoneyStr

Format amount to currency format

```ts
formatMoneyStr(560); // 560.00 ZAR
formatMoneyStr(560, "USD"); // 560.00 USD
formatMoneyStr(560, "USD", false); // 560.00
```

#### currencyFormatter

This will format the amount to the currency code passed in

```ts
currencyFormatter(420.69); // R 420,69
currencyFormatter(420.69, "USD"); // US$420,69
```

### Regex

Not functions, but useful constants

#### digitRegex

Check if value is a digit

```ts
digitRegex.test("23"); // true
digitRegex.test("23.4"); // true
digitRegex.test("nope"); // false
```

#### emailRegex

Check if email is valid

```ts
emailRegex.test("mike"); // false
emailRegex.test("mike@gmail.com"); // true
emailRegex.test("mike09+cool@gmail.com"); // true
emailRegex.test("mike09+cool@gmail"); // false
emailRegex.test("mike09+cool.com"); // false
```

#### linkRegex

Regex that can find links in a string

```ts
emailRegex.test("https://www.youtube.com/stevesteacher"); // true
emailRegex.test("mike@gmail.com"); // false
```

### Other

These are functions that either does not fit in one of the specified categories, or now does, but would break programs if moved elsewhere.

#### urlQueryBuilder

Will generate a url with the given query parameters.

_Note that if the value in data is undefined or null the parameter will be ignored._

```ts
urlQueryBuilder("http://test.com/wow", {
	cool: true,
	name: "jack",
}); // http://test.com/wow?cool=true&name=jack
```

#### includeSearch

Search for text in string, this will ignore casing. Will be true if at least one of the searches returned true.

_NOTE:_ this uses .include() to search, so will only work on individual words and not text in words. Use [regexStringSearch()](#regexstringsearch) or [regexStringListSearch()](#regexstringlistsearch) instead if you want a more powerful search

```ts
includeSearch("cool", "I am cool"); // true
includeSearch("cool", "I am drool", "you are cool"); // true
includeSearch("cool", "yup", "nothing"); // false
```

---

If you want to support the work I do, please consider donating to me on one of these platforms:

[<img alt="liberapay" src="https://img.shields.io/badge/-LiberaPay-EBC018?style=flat-square&logo=liberapay&logoColor=white" />](https://liberapay.com/stevesteacher/)
[<img alt="kofi" src="https://img.shields.io/badge/-Kofi-7648BB?style=flat-square&logo=ko-fi&logoColor=white" />](https://ko-fi.com/stevesteacher)
[<img alt="patreon" src="https://img.shields.io/badge/-Patreon-F43F4B?style=flat-square&logo=patreon&logoColor=white" />](https://www.patreon.com/Stevesteacher)
[<img alt="paypal" src="https://img.shields.io/badge/-PayPal-0c1a55?style=flat-square&logo=paypal&logoColor=white" />](https://www.paypal.com/donate/?hosted_button_id=P9V2M4Q6WYHR8)
