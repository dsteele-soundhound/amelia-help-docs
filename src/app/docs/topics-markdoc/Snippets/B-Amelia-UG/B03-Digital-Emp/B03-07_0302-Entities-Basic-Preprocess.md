# B03-07_0302-Entities-Basic-Preprocess

{is-library="true"}

<snippet id="B03-07_0302-Entities-Basic-Preprocess_snippet">



For non-grammar sources, click to select one or more pre-processors. The pre-processor(s) apply both to the user utterance and table entries prior to matching.

When using Regex Matcher, only the user utterance is pre-processed and is explicitly lowercased.

* Ignore Digits: Replace numbers with a single character.

* Lowercase: Use lowercase for all words.

* Normalize Digits: Replace each number with a character.

* Normalize Unicode: Replace Unicode with corresponding ASCII characters.

* Normalize Words: Extract only the shape of words, based on the use of capitalization and digits.

* Extract Prefix: Extract the first two characters of a word.

* Extract Suffix: Extract the last three characters of a word.

* Remove Hyphens: Remove any hyphens from words in the input. For example, treat "Noord-Holland" the same as "Noord Holland." To match hyphenated words without spaces, ensure that your entries contain hyphens, for example, "Noord-Holland."



</snippet>