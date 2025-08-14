# B03-07_0203-Intents-Context-Switch-Desc

{is-library="true"}

<snippet id="B03-07_0203-Intents-Context-Switch-Desc_snippet">



When the user triggers an intent, they enter into an intent context. This setting defines how Amelia should handle that context if it's not completed.

* Suspended: When context switching out of this intent, the intent context becomes suspended. It pauses at the exact user location in the conversation flow. Amelia resumes the intent only once the other context completes. Once Amelia returns to this intent, the conversation resumes. Amelia then repeats the last thing said before the context switch took place.

* Complete: When context switching out of the intent, the intent becomes completed (closed). Amelia won't return the user back to resume the intent once the other context is complete.



</snippet>