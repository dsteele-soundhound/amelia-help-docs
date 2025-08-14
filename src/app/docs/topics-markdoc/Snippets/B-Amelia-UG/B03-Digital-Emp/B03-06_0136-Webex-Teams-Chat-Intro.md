# B03-06_0136-Webex-Teams-Chat-Intro

{is-library="true"}

<snippet id="B03-06_0136-Webex-Teams-Chat-Intro_snippet">



Amelia now integrates with Webex, accepting chats just like it does with Teams and Slack. This lets you create automations and flows that live where they're needed most. It also lets your users interact with Amelia without the need to switch contexts.

Besides plain text messages, you can also include adaptive cards. These cards let you add interactivity to your chat messages. Your users can engage with your app in new and exciting ways without having to leave the Webex client. Adaptive cards can either be interactive and prompt an action, or they can be informational and display data like weather conditions.

Using the Webex Teams Chat gateway, you'll set up a bot to interact with Amelia. Once set up, your user can interact with Amelia by sending direct messages to the bot. The bot then relays these messages to Amelia via a webhook. The Amelia Gateway Service receives the webhook event, parses it to extract your user's message, and sends it to Amelia. Finally, the Gateway uses the Webex Messaging API to send Amelia's response. This response goes back to your end user via a direct message.


</snippet>