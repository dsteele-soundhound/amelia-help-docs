

# How-to: Configure Amelia for Webex Teams Chat Gateway

## Introduction

{% include from="B03-06_0136-Webex-Teams-Chat-Intro.md" element-id="B03-06_0136-Webex-Teams-Chat-Intro_snippet" /%}

A sample conversation with Amelia using Webex Teams could look something like this.

![B03-06_0136-Webex-Team-Chat-AmeliaTest](B03-06_0136-Webex-Team-Chat-AmeliaTest.png){width="900" style="block"}
*Figure 1. Sample Webex Teams Chat Conversation*

In this configuration the bot uses the name "AmeliaTest." Webex adds "Bot" to the bot's icon to make it clear to your end user that they're interacting with a bot.

## What You'll Learn

In this topic you'll learn how to:

* [Create a bot using your Webex Developer Account](#Bot).

* [Create the Massaging webhook](#MessagingWebhookBody).

* [Create the Attachment Actions webhook](#AttachmentActionsWebhookBody).

* [Upgrade to a paid Webex account](#Upgrade).

* [Add and configure the Webex Teams Chat gateway in Amelia](#Add).

## Requirements

For this configuration, you'll need the following:

* A Webex Developer Account login. You can start with a free account and upgrade to a paid Webex plan later. See [https://developer.webex.com/signup](https://developer.webex.com/signup).

* Your bot username. See [enter a Bot Username below](#BotUsername).

* Your bot access token number. See [copy your Bot Access Token below.](#BotAccessToken)

* Your Messaging webhook name and secret. You'll need this to configure Amelia to interact with the Webex Teams bot. See [for the Messaging webhook body below](#MessagingWebhookBody).

## Pre-Configuration

Before you can configure Amelia to use the Webex Teams Chat gateway, you'll configure Webex Teams. To do this, you'll setup a bot, and create two webhooks. You'll create one webhook for text messages and another for attachment actions. Lastly, you'll upgrade to a paid Webex plan.

The following sections will guide you as you complete these steps.

###Bot Setup {% #Bot %}

This is the bot that your users will interact with during the chat.

1. In Chrome go to [https://developer.webex.com/](https://developer.webex.com/).

2. Login to your Webex Developer Account.

3. From the menu under your avatar, select My Webex Apps.

4. Click Create a Bot.

5. Enter a Bot Name. Using the example above, we used the name AmeliaTest.

   ![B03-06_0136-Webex-Team-Chat-Bot-Setup](B03-06_0136-Webex-Team-Chat-Bot-Setup.png){width="900" style="block"}
   *Figure 2. Webex for Developers Showing Create a Bot*
6. {id="BotUsername"}Enter a Bot Username. This username uses the form username@webex.bot, which forms the bot's email address. You'll need this email address when creating the admin UI configuration in Amelia.

   Take care when entering your bot username; you can't change this once set.
7. Pick an Icon or upload one.

   This icon represents your bot during conversation. Uploaded icons be exactly 512x512px using JPEG or PNG format.
8. Enter an App Hub Description for your bot.

   App Hub Descriptions have a 1,024 character limit.
9. Click Add Bot.

10. {id="BotAccessToken"}On the next screen, copy your Bot Access Token.

    ![B03-06_0136-Webex-Team-Chat-Token](B03-06_0136-Webex-Team-Chat-Token.png){width="900" style="block"}

    *Figure 3. Congratulations Screen Showing Bot Access Token*

    Store your Bot Access Token details in a safe place. You'll need this for the Authorization step when you create your webhooks.

### Webhook Setup

The following section shows the required parameters and the values used for creating the Messaging and the Attachment Actions webhooks.

To learn more about webhooks, see [https://developer.webex.com/docs/api/guides/webhooks](https://developer.webex.com/docs/api/guides/webhooks).

1. In Chrome go to [https://developer.webex.com/docs/api/v1/webhooks/create-a-webhook](https://developer.webex.com/docs/api/v1/webhooks/create-a-webhook).

2. In the Header area, switch the Authorization toggle to off (switch to the left).

   ![B03-06_0136-Webex-Team-Chat-Webhook1](B03-06_0136-Webex-Team-Chat-Webhook1.png){width="900" style="block"}
   *Figure 4. Create a Webhook Showing Authorization Set to Off*
3. In the Bearer field, paste your Bot Access Token number.

4. {id="MessagingWebhookBody"}For the Messaging webhook Body:

   Your bot needs webhooks to communicate with Amelia. To enable this communication path, you'll set up a Messaging webhook.
   1. Enter a Name for your webhook.

   2. In the targetUrl field enter https://{ameliaHost}/Amelia/gateway/service/webexteamschat/api/messages.

      Replace the placeholder "ameliaHost" with the hostname of your actual Amelia instance.
   3. In the resource field enter all.

   4. In the event field enter all.

   5. In the secret field enter the webhook secret. You'll need this for Amelia's UI and your new gateway configuration.

   6. Click Run.

5. {id="AttachmentActionsWebhookBody"}For the Attachment Actions webhook Body:

   The Webex Teams Chat gateway can show cards to your end user. To add your user's responses to these cards you'll create attachment actions.

   These are different from file attachments that the end user may upload in a direct message. File attachments arrive through the Messaging Webhook. The Messaging Webhook doesn't capture attachment actions and therefore a separate webhook is needed.

   See [https://developer.webex.com/docs/api/v1/attachment-actions](https://developer.webex.com/docs/api/v1/attachment-actions) for more information on attachment actions.
   1. In the name field enter the same name that you used for your Messaging Webhook.

   2. in the targetUrl field enter https://{ameliaHost}/Amelia/gateway/service/webexteamschat/api/attachmentactions.

      Replace the placeholder "ameliaHost" with the hostname of your actual Amelia instance.
   3. In the resource field enter attachmentActions.

   4. In the event field enter created.

   5. In the secret field enter the same secret that you used for the Messaging Webhook.

   6. Click Run.

### Upgrade to a Paid Plan {% #Upgrade %}

Amelia discovered during testing that sometimes webhook events from Webex may fail to reach their destination. This happens randomly, and when it occurs, the gateway doesn't receive these events. Webex has noted that this is a limitation of their free plan. Therefore, it's recommended to use an appropriate paid plan for production purposes. See [https://pricing.webex.com/](https://pricing.webex.com/) for plan pricing details.

## Configure Amelia

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

###Add a Webex Teams Chat Gateway {% #Add %}

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click Integrations. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the Gateway Integrations panel, click + Add New.

4. From the Conversation Gateways group, click Webex Teams Chat.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your Webex bot.

![B03-06_0136-Webex-Team-Chat-Basic-Tab](B03-06_0136-Webex-Team-Chat-Basic-Tab.png){width="900" style="block"}

New Webex Teams Chat Integration Showing Basic Tab

|         Element          | Default |                                                                     Description                                                                      |
|--------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                     |         | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                           |
| Domain                   |         | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                       |
| Gateway Service          |         | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                     |
| Deploy                   | No      | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                       |
| Configuration Locale     |         | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                           |
| Configuration                                                                                                                                                                           |||
| Webex Bot Webhook Name   |         | Enter the name that you used for your Messaging webhook. See the [Messaging Webhook Body](#MessagingWebhookBody) section above for more information. |
| Webex Bot Access Token   |         | The access token for your Messaging webhook. See the [Messaging Webhook Body](#MessagingWebhookBody) section above for more information.             |
| Webex Bot Email          |         | Enter the email for your Webex bot. See the [Enter a Bot Username](#BotUsername) step above for more information.                                    |
| Webex Bot Webhook Secret |         | Enter the webhook secret for your Webex bot here. See the [Messaging Webhook Body](#MessagingWebhookBody) section above for more information.        |
[New Webex Teams Chat Integration Basic Tab Elements]


</chapter>


At a minimum, complete the following steps:

1. On the Basic tab, in the Configuration section, enter the Webex Bot Webhook Name.

   Remember, for a refresher on where to find your Webex Bot Webhook Name or any of the following settings, see the [Messaging Webhook Body](#MessagingWebhookBody) section above.
2. Enter the Webex Bot Access Token.

3. Enter the Webex Bot Email.

4. Enter the Webex Bot Webhook Secret.

#### Configure the Additional Tab

Open the following dropdown to learn about Additional tab elements.
<chapter title="Additional Tab Elements" collapsible="true" level="5">
Use this section to enable retrying failed API calls made by the Gateway to the external system's API..

![B03-06_0136-Webex-Team-Chat-Add-Tab](B03-06_0136-Webex-Team-Chat-Add-Tab.png){width="900" style="block"}

New Webex Teams Chat Integration Showing Additional Tab

|        Element         | Default |                                                         Description                                                          |
|------------------------|---------|------------------------------------------------------------------------------------------------------------------------------|
| API Retry                                                                                                                                                     |||
| Max Attempts           | 4       | {% include from="B03-06_GateCom-API-Retry.md" element-id="B03-06_GateCom-API-Retry_snippet" /%}                         |
| Back Off Initial Delay | 250     | {% include from="B03-06_GateCom-API-BackOff-InitDelay.md" element-id="B03-06_GateCom-API-BackOff-InitDelay_snippet" /%} |
| Back Off Multiplier    | 2       | {% include from="B03-06_GateCom-API-BackOff-Multi.md" element-id="B03-06_GateCom-API-BackOff-Multi_snippet" /%}         |
[New Webex Teams Chat Integration Showing Additional Tab]


</chapter>

At a minimum, complete the following steps:

1. Click the Additional tab.

2. Enter a Max Attempts value.

3. Enter a Back Off Initial Delay value using milliseconds.

4. Enter a Back Off Multiplier value.

You won't need to change the Configuration tab settings for this use case. But, if you need to troubleshoot or adjust default settings, open the following dropdown to learn more.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
These images show the top and bottom half of the Configuration tab. The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia instance.

![B03-06_0136-Webex-Teams-Chat-Config-Tab1](B03-06_0136-Webex-Teams-Chat-Config-Tab1.png){width="900" style="block"}

*Figure 5. Configuration Tab Showing Top Half of Tab*

![B03-06_0136-Webex-Teams-Chat-Config-Tab2](B03-06_0136-Webex-Teams-Chat-Config-Tab2.png){width="900" style="block"}

*Figure 6. Configuration Tab Showing Bottom Half of Tab*

|                         Element                         |                       Default                        |                                                       Description                                                        |
|---------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Channel                                                 | webexteamschat                                       | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                         |
| Amelia Conversation Request Timeout (seconds)           | 30                                                   | {% include from="B03-06_GateCom-ConvReqTimeout.md" element-id="B03-06_GateCom-ConvReqTimeout_snippet" /%}           |
| Authenticated Users                                     | No                                                   | {% include from="B03-06_GateCom-AuthUsers.md" element-id="B03-06_GateCom-AuthUsers_snippet" /%}                     |
| Suppress Amelia's First Utterance                       | Yes                                                  | {% include from="B03-06_GateCom-SuppressFirstUtter.md" element-id="B03-06_GateCom-SuppressFirstUtter_snippet" /%}   |
| Support Present Content                                 | Yes                                                  | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}           |
| Chat Settings                                                                                                                                                                                                                           |||
| Enable Chat Timeout                                     | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTO.md" element-id="B03-06_GateCom-EnableChatTO_snippet" /%}               |
| Chat Timeout Seconds                                    | 900                                                  | {% include from="B03-06_GateCom-ChatTOSeconds.md" element-id="B03-06_GateCom-ChatTOSeconds_snippet" /%}             |
| Enable Chat Timeout Message                             | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTOMsg.md" element-id="B03-06_GateCom-EnableChatTOMsg_snippet" /%}         |
| Chat Timeout Message                                    | This conversation has been closed due to inactivity. | {% include from="B03-06_GateCom-ChatTOMsg.md" element-id="B03-06_GateCom-ChatTOMsg_snippet" /%}                     |
| Conversation Settings                                                                                                                                                                                                                   |||
| Enable Close Conversation on User Message               | Yes                                                  | {% include from="B03-06_GateCom-EnableCloseConv.md" element-id="B03-06_GateCom-EnableCloseConv_snippet" /%}         |
| User Close Conversation Message                         | /close                                               | {% include from="B03-06_GateCom-UserCloseConvMsg.md" element-id="B03-06_GateCom-UserCloseConvMsg_snippet" /%}       |
| Enable Conversation Restart on User Message             | Yes                                                  | {% include from="B03-06_GateCom-EnableConvRestart.md" element-id="B03-06_GateCom-EnableConvRestart_snippet" /%}     |
| User Restart Conversation Message                       | /restart                                             | {% include from="B03-06_GateCom-UserRestartConvMsg.md" element-id="B03-06_GateCom-UserRestartConvMsg_snippet" /%}   |
| Enable Chat Closed Message                              | Yes                                                  | {% include from="B03-06_GateCom-EnableChatClosedMsg.md" element-id="B03-06_GateCom-EnableChatClosedMsg_snippet" /%} |
| Chat Closed Message                                     | This conversation has been closed.                   | {% include from="B03-06_GateCom-ChatClosedMsg.md" element-id="B03-06_GateCom-ChatClosedMsg_snippet" /%}             |
| Add User Information to Initial Conversation Attributes | No                                                   | {% include from="B03-06_GateCom-AddUserInfoAttr.md" element-id="B03-06_GateCom-AddUserInfoAttr_snippet" /%}         |
| User First Name Attribute                               | userFirstName                                        | {% include from="B03-06_GateCom-UserFNameAttr.md" element-id="B03-06_GateCom-UserFNameAttr_snippet" /%}             |
| User Last Name Attribute                                | userLastName                                         | {% include from="B03-06_GateCom-UserLNameAttr.md" element-id="B03-06_GateCom-UserLNameAttr_snippet" /%}             |
| User Email Attribute                                    | userEmail                                            | {% include from="B03-06_GateCom-UserEmailAttr.md" element-id="B03-06_GateCom-UserEmailAttr_snippet" /%}             |
| User External Uid Attribute                             | userExernalUid                                       | {% include from="B03-06_GateCom-UserIDAttr.md" element-id="B03-06_GateCom-UserIDAttr_snippet" /%}                   |
[Configuration Tab Elements]


</chapter>

## More Resources

To read about other gateways that you can use with Amelia, see:

* Gateway Library Introduction

* Gateway Integrations Introduction

* Gateway Integrations Management

