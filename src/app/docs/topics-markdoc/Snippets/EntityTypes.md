# EntityTypes

{is-library="true"}

<snippet id="EntityTypes_snippet">



* Built-in entities are used for dates, currency, and other common structured data.

* Custom Datum entities are extracted and normalized with a mix of regular expressions, tabular data, and grammars.

* Composite entities combine two or more entities, for example, to capture a date value that includes an integer and a month name. A user utterance might contain multiple integers. The utterance, "Reserve a table 26 March for 4 people at 6 pm," uses an integer for 26 March with two additional integers used for 4 people at 6 pm on that date.

* Role entities have a parent entity to allow the parent and role entities to collect related information, for example, a parent entity called dessert with role entities called cookies, cake, and ice cream.

* Spanless entities have a fixed number of possible values predicted from the user utterance as a whole instead of being extracted like a phone number or name. For example, mapping utterances to the values single for a single hotel room and double for a hotel room for two people or more.



</snippet>