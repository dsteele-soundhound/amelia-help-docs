# B03-07_0302-Entity-Types-Normalized

{is-library="true"}

<snippet id="B03-07_0302-Entity-Types-Normalized_snippet">



* Built-in entities: These are for dates, currency, and other common structured data.

* Composite Datum entities: These combine two or more entities. For example, to capture a date value that includes an integer and a month name. A user utterance might contain several integers. The utterance, "Reserve a table 26 March for 4 people at 6 pm," uses three integers. One integer for 26 March with two more integers used for 4 people at 6 pm on that date.

* Role entities: These have a parent entity. This lets the parent and role entities collect related information. For example, a parent entity called Hotel Reservation with role entities called StartDate and EndDate.



</snippet>