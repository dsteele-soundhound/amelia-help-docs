# B03-07_0302-Entities-Basic-Cust-Lookup-Strat

{is-library="true"}

<snippet id="B03-07_0302-Entities-Basic-Cust-Lookup-Strat_snippet">



Click to select the look-up strategy to apply to match entries in a given table to spans of text in the user utterance.

* Exact Match: Look-up table entry matches utterance exactly.

* Regex Matcher: Match is based on regular expressions in the look-up table.

* Approximate Matcher: For tabular data only, use Levenshtein distance approximate matching.

* Ambiguous Prefix Approximate Matcher: When ambiguity is allowed for this entity, Amelia extracts multiple entities from the same text span to support disambiguation. This approach disambiguates between approximate matches in the gazeteer.

* Ambiguous Prefix Exact Matcher: When ambiguity is allowed for this entity, Amelia extracts multiple entities from the same text span to support disambiguation. This approach would disambiguate only between exact matches in the gazeteer.



</snippet>