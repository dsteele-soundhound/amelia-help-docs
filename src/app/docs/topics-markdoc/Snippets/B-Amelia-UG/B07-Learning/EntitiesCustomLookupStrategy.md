# EntitiesCustomLookupStrategy

{is-library="true"}

<snippet id="EntitiesCustomLookupStrategy_snippet">



Click to select the lookup strategy to apply to match entries in a given table to spans of text in the user utterance.

* Exact Match: Lookup table entry matches utterance exactly.

* Regex Matcher: Match is based on regular expressions in the lookup table.

* Approximate Matcher: For tabular data only, use Levenshtein distance approximate matching.

* Ambiguous Prefix Approximate Matcher: When ambiguity is allowed for this entity, multiple entities are extracted from the same text span to support disambiguation. This approach disambiguates between approximate matches in the gazeteer.

* Ambiguous Prefix Exact Matcher: When ambiguity is allowed for this entity, multiple entities are extracted from the same text span to support disambiguation. This approach would disambiguate only between exact matches in the gazeteer.



</snippet>