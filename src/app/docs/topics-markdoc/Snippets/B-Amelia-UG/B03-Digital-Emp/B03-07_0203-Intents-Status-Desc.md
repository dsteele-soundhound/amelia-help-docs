# B03-07_0203-Intents-Status-Desc

{is-library="true"}

<snippet id="B03-07_0203-Intents-Status-Desc_snippet">



Defines whether the intent is active or inactive.

* Active: Intent is active. Triggering this intent happens under several possible conditions. If it's the top-scoring intent. If it passes all intent matching thresholds. If the intent links to a process or an FAQ answer. Or if the user is in a place in the conversation flow that allows intent switching.

* Inactive: Intent is inactive. Triggering is not possible. If the intent is the top-scoring intent, Amelia will bypass all intent matching. Instead, Amelia responds according to the next matching subsystem responder.



</snippet>