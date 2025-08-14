# EntitiesCustomAdvancedPreprocess

{is-library="true"}

<snippet id="EntitiesCustomAdvancedPreprocess_snippet">



For non-grammar sources, click to select one or more preprocessors to apply both to the user utterance and table entries prior to matching.

When using Regex Matcher, only the user utterance is pre-processed, specifically is lowercased.

* Ignore Digits: Replace numbers with a single character.

* Lowercase: Lowercase all words.

* Normalize Digits: Replace each number with a character.

* Normalize Unicode: Replace Unicode with corresponding ASCII characters.

* Normalize Words: Extract only the shape of words, based on the use of capitalization and digits.

* Extract Prefix: Extract the first two characters of a word.

* Extract Suffix: Extract the last three characters of a word.

* Remove Hyphens: Remove any hyphens from words in the input. For example, treat "Noord-Holland" the same as "Noord Holland." To match hyphenated words without spaces, ensure that your entries contain hyphens, for example, "Noord-Holland."



</snippet>