# B03-06_GateCom-ConfigLocale

{is-library="true"}

<snippet id="B03-06_GateCom-ConfigLocale_snippet">



Locale of all canned messages in this configuration. Before sending canned messages to the user, the gateway translates them into the language of the conversation.

Amelia uses predefined messages, also known as canned messages, for sending error/event messages during the conversation.When a chat conversation comes to a close, Amelia can send a "Chat Closed Message" to the user. You can customize this message on the Properties tab of the configuration. By default, the message reads, "This conversation has been closed.". The locale of this message is English (United States).

If the conversation locale changes, the gateway translates the "Chat Closed Message" into the new locale before sending it to the user. The gateway does the same for all canned messages in the configuration.


</snippet>