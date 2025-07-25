# B03-07_0302-Entity-Types-NonNormalized

{is-library="true"}

<snippet id="B03-07_0302-Entity-Types-NonNormalized_snippet">



* Custom Datum entities: These use a mix of regular expressions, tabular data, lookup tables, and grammars to identify then normalize the entity.

* Text entities: These aren't normalized. They require training with an entity tagger for identification and extraction.

* Spanless entities: These have a fixed number of possible values. These values are predicted from the user utterance. They're not extracted like a phone number or name. For example, mapping utterance value single for a single hotel room. Or double for a hotel room for two people or more.



</snippet>