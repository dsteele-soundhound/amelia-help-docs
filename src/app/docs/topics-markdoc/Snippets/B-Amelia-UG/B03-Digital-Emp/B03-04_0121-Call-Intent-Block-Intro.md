# B03-04_0121-Call-Intent-Block-Intro

{is-library="true"}

<snippet id="B03-04_0121-Call-Intent-Block-Intro_snippet">



The Call Intent block triggers a specific intent in a conversation flow based on a user utterance or action. It eliminates the need for Amelia to discern user intent through the use of utterances.

This block comes in handy when you're integrating a conversational flow from one domain into another. Suppose you start a conversation with a user to place an order for supplies using an intent block. During the process, you want to authenticate the user's password. The user forgets their password. You redirect the conversation to a Call Intent block and initiate the reset password intent.

Even though you could use a Subflow block to achieve this, Subflows have a limitation. You can only use Subflows in the domain that you're currently in or any of its parent domains. This doesn't apply to Call Intent blocks. With a Call Intent, it's possible to access an intent from any domain. Because of this, the user can complete the password reset flow and then return to their original flow.


</snippet>