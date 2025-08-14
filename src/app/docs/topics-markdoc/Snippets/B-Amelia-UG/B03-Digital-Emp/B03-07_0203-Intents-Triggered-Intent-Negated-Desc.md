# B03-07_0203-Intents-Triggered-Intent-Negated-Desc

{is-library="true"}

<snippet id="B03-07_0203-Intents-Triggered-Intent-Negated-Desc_snippet">



Defines Amelia's behavior if an utterance that triggers an intent has negation.

* Execute Intent Directly: Disregard the negation and trigger the intent anyway.

* Ignore Intent: Do not trigger the intent. Amelia will ignore the top-scoring intent and bypass intent matching. Amelia instead will use the next matching subsystem responder.

* Execute Alternative Intent: Trigger an alternative intent instead, defined in the Alternative Intent setting.



</snippet>