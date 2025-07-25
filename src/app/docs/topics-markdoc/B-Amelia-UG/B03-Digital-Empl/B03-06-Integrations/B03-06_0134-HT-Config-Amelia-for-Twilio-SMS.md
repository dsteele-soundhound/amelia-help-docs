

# How-to: Configure Amelia for Twilio SMS

## Introduction

Using the Twilio gateway, Amelia can converse using Twilio SMS texts and WhatsApp conversations. SMS stands for Short Message Service, also known as text messaging. SMS is widely used for personal and business communications. For example, you might text directions to meet a friend for lunch. Or receive a text with a restaurant discount offer.

With the Twilio gateway, conversations are a series of texts sent between Amelia and an individual. This uses Amelia's cognitive power, along with the ability to interact with third-party resources. Any interaction done with a web chat interface is possible using SMS texts.

Once you sign up with Twilio and then create an account, you'll use the Twilio account and phone number to interact with Amelia. The Twilio account sends text messages to an Amelia URL endpoint. Once the text is processed, Amelia sends a text in response.

## What You'll Learn

In this topic you'll learn how to:

* [Sign up for Twilio and create an account](#Pre-Conf).

* [Configure Amelia's Messaging Endpoint with Twilio](#Configur2).

* [Use WhatsApp for conversations](#Use).

* [Use WhatsApp Features with Twilio](#WhatsApp).

* [Use Proactive Notifications and Push Conversations](#Proactiv).

* [Use opt-out keywords with Twilio](#Use2).

* [Test the Twilio Gateway Integration](#Test).

* [Add and configure the Twilio gateway in Amelia](#Configur).

## Requirements

For this gateway configuration, you'll need the following:

* A Twilio SMS account after you sign up with Twilio.

* Once an account is created, the Account SID, Auth Token, and Twilio Phone Number. You'll need these values to configure Amelia to interact with the Twilio account.

* For added security, an API Key and Secret can be used when interacting with Twilio. If required, these values will be needed to configure Amelia to interact with the Twilio account.

* The Messaging Endpoint for Amelia's gateway service.

##Pre-Configuration {% #Pre-Conf %}

Before you can configure Amelia to use the Twilio gateway, you'll configure a Twilio SMS account. To do this, you'll sign up and then create an account.

Subaccounts can then be created to separate business concerns and phone numbers can be activated for SMS in each subaccount. In the subaccount where a phone number has been activated, you'll save somewhere safe these account settings: the Account SID, Auth Token, and Twilio Phone Number. These settings are available on the Twilio Account Dashboard for each subaccount.

There's also an option to use WhatsApp through Twilio to interact with  Amelia. You also can set up proactive notifications and push settings.

The following sections will guide you as you complete these steps.

###Setup New Twilio Account {% #Setup %}

This creates the account that your users will use to interact with Amelia.

#### Create a Twilio Account

1. In Chrome go to [https://www.twilio.com/en-us/messaging/channels/sms/](https://www.twilio.com/en-us/messaging/channels/sms).

2. Click the Start for Free button at the top right of the web page.

3. Complete the Signup form that displays.

4. Complete the email and phone number verification pages that display.

5. Copy the Recovery Code that displays. Save it in a safe place.

6. In the demographics page that displays, first select IVR and Bots for the What do you plan to build with Twilio? question. Then select SMS or WhatsApp for the Which Twilio product are you here to use? question.

#### Create Subaccounts

If appropriate, create one or more subaccounts under the main account.

1. Click the account name at the top left of the Account Dashboard. Click the View Subaccounts link that display in a popup. On the Subaccounts page, click the Create Subaccount button at the top right. Alternately, click the Admin link at the top right, then click the Account Management link to display the Management links on the left. Click the Subaccounts link.

2. Choose a subaccount or the main account to acquire a phone number. In the Account Dashboard that displays, click the Get Phone Number button to get a Twilio Phone Number.

3. Scroll down and copy the Account SID, Auth Token, Twilio Phone Number. Save these settings in a safe place.

4. If you use API Keys and Secrets, follow the directions at this link [https://www.twilio.com/docs/iam/api-keys](https://www.twilio.com/docs/iam/api-keys) to create the key and secret for the subaccount. Save these values along with the Account SID, Auth Token and Phone Number.

###Configure Amelia's Messaging Endpoint {% #Configur2 %}

Twilio communicates with the Amelia gateway by sending messages via a dedicated webhook URL.

In the Twilio Account Dashboard, click the Develop tab and then the Manage link. Click the Active Numbers to display a list of registered phone numbers. Clicking a phone number displays a phone number configuration page. Make these changes to this page:

* Select Webhook, TwiML, Bin, Function, Studio Flow, Proxy Service from the Configure With dropdown list options.

* Select Webhook from the A Call Comes In dropdown list options.

* In the URL field, type https://hostname/Amelia/gateway/service/twilio/sms where hostname is the domain name for your Amelia instance.

* Select HTTP POST from the HTTP dropdown list options.

![B03-06_0134-Twilio-PhoneNum](B03-06_0134-Twilio-PhoneNum.png){width="900" style="block"}
*Figure 1. Twilio Phone Number Voice Configuration Page*

If WhatsApp is used, the Amelia messaging endpoint is needed when configuring the WhatsApp messaging settings. Use the same endpoint if a Message Service is configured. Please refer to Twilio's documentation for more information on configuring a Message Service and/or WhatsApp messaging.

Twilio also has other requirements for configuring each phone number for SMS. Please refer to the Twilio documentation at [https://www.twilio.com/docs/whatsapp](https://www.twilio.com/docs/whatsapp) for more information.

###Use WhatsApp for Conversations {% #Use %}

To use WhatsApp with the Amelia gateway service, refer to Twilio documentation at [https://www.twilio.com/docs/whatsapp](https://www.twilio.com/docs/whatsapp) to configure your account for WhatsApp.

You also will need the Twilio SID and Auth Token values to be set in the Amelia gateway configuration, as described below in the Basic Tab settings.

###WhatsApp Features with Twilio {% #WhatsApp %}

Using WhatsApp with the Twilio gateway provides additional messaging features unique to WhatsApp.

#### Format WhatsApp Messages with WhatsApp Formatting Symbols

WhatsApp allows text, emojis, and some formatting in messages, as described here in Twilio documentation:

[https://www.twilio.com/docs/whatsapp/message-features#formatting-in-whatsapp-messages](https://www.twilio.com/docs/whatsapp/message-features#formatting-in-whatsapp-messages)

An Amelia Digital Employees builder Script block can send these messages. The message is defined as a variable then set as a variable available for sending in a message.
```
def formattedText = "*This is bold text*. \n_This is italic text_. \nThis is ~good~ better."; execution.setVariable("formattedText", formattedText);
```

This produces a single line of text. The ~ characters mark the start and end of a strikethrough.

Amelia does not support newlines and extra spaces in texts. If these are desired use HTML formatting.

#### Format WhatsApp Messages with HTML

An Amelia Digital Employees builder Script block can send these messages. The message is defined as a variable then set as a variable available for sending in a message..
```
def formattedText = "This is WhatsApp Formatting using HTML&lt;br&gt;" + "&lt;b&gt;This is bold text.&lt;/b&gt;&lt;br&gt;" + "&lt;i&gt;This is italic text.&lt;/i&gt;&lt;br&gt;" + "This is &lt;s&gt;good&lt;/s&gt; better.&lt;br&gt;" + "Five spaces using the non-breaking space entity---&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp&lt;---&lt;br&gt;" + "This&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;is&amp;nbsp;&amp;nbsp;&amp;nbsp;another&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;line of preformatted text.&lt;br&gt;" + "Note that you still need the non-breaking space entity.&lt;/pre&gt;"; execution.setVariable("formattedText", formattedText);
```

To display extra spaces you still need to use the non-breaking space entity `&nbsp;`. This includes in the `<pre>` tag as shown above. If the non-breaking space entity is not used, Amelia will delete the extra spaces.

#### Send Media in WhatsApp Messages

Messages using WhatsApp with Twilio can include images, video, and other media. Refer to Twilio documentation here:

[https://www.twilio.com/docs/whatsapp/guidance-whatsapp-media-messages](https://www.twilio.com/docs/whatsapp/guidance-whatsapp-media-messages)

[https://www.twilio.com/docs/sms/accepted-mime-types](https://www.twilio.com/docs/sms/accepted-mime-types)

Media is included in Digital Employees builder flows using the Present block. See the [Present block documentation](B03-04_0115-Present-Block.md) for details.

#### Send Location Data in WhatsApp Messages

The WhatsApp software includes the ability for the user to send their location. Amelia can display this information in a conversation flow. Then create useful context with the location information, for example, provide directions.

Location information is included in Digital Employees builder flows using custom properties in an Amelia Asks block. In the Advanced Settings tab of an Amelia Asks block, add a Custom Property called `locationRequest` and set its value to `true`.

When the user clicks the + icon (iPhone) or paperclip icon (Android) in WhatsApp, Amelia will then return a map in the conversation flow. The map will include a pin dropped at the user location.

See the [Amelia Asks block documentation](B03-04_0114-Amelia-Asks-Block.md) for details about creating Custom Properties.

###Proactive Notifications and Push Conversations {% #Proactiv %}

The gateway includes the ability to send push notifications and conversations.

#### The Notification API

Only authenticated gateway users can send a proactive message to an end user. Their user account must have the AUTHORITY_NOTIFICATION_PUSH authority assigned to their user account

The gateway must be enabled, deployed, and configured for push notifications. Otherwise, an error message will appear.

|       Element        | Description                                                                                                                                                                                                                                                                                                                          |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint             | POST /AmeliaRest/api/v1/push/notification/`{gatewayIntegrationId}`                                                                                                                                                                                                                                                                   |
| gatewayIntegrationId | The unique ID for the gateway integration which will handle the request, for example: `f3430d11-fea8-4dcf-9eea-e4b271cd0190` This ID is in the Account SID field in the Basic tab for Amelia's gateway workspace. The Account SID is unique to the account used to interact with Amelia. |
| JSON Payload         | <code-block> { "message": "The message to send", "pushAttributes": { // endpoint specific attributes } } </code-block>                                                                                                                                                                                                               |
[REST Gateway Notification Details]

#### Push Notification Payloads and Attributes

The Amelia REST gateway push notification payload supports the Text message type.

| Payload Type |                        Description                        |
|--------------|-----------------------------------------------------------|
| Text         | This message type supports plain text, markdown, and XML. |
[REST Gateway Message Payload Types]

The REST gateway push notification payloads support one attribute. The attribute name is case sensitive.

|  Attribute  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| phoneNumber | Required. The attribute name is case sensitive. The attribute is the phone number of the end user in the following formats a phone number 222-333-4444: Twilio: `+12223334444` WhatsApp: `whatsapp:+12223334444` Twilio: <code-block> { "message": "Happy Birthday!!!", "pushAttributes": { "phoneNumber": "+12223334444" } } </code-block> WhatsApp (through Twilio): <code-block> { "message": "Happy Birthday!!!", "pushAttributes": { "phoneNumber": "whatsapp:+12223334444" } } </code-block> |
[REST Gateway Message Payload Attributes]

###Use Opt-out Keywords with Twilio {% #Use2 %}

When Twilio receives an Opt-out keyword from a user, they add the phone number to a list of blocked numbers. Twilio checks this list before sending any future outgoing messages. Any subsequent outgoing messages from an account to a user who opts out will fail with Error Code 21610 asynchronously.

Refer to the Twilio support for opt-out keywords page for details:

[https://help.twilio.com/articles/223134027-Twilio-support-for-opt-out-keywords-SMS-STOP-filtering](https://help.twilio.com/articles/223134027-Twilio-support-for-opt-out-keywords-SMS-STOP-filtering)

##Test the Twilio Gateway Integration {% #Test %}

To test the Twilio gateway integration, send a text message to the account phone number configured in Twilio. From there, the gateway and Amelia should respond to your questions in the text message. Once connectivity is confirmed, you can test the different use cases enabled for the integration.

##Configure Amelia {% #Configur %}

After configuring the Twilio account and phone number, you're ready to configure the new gateway integration to interact with Amelia.

### Add a Twilio Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click Integrations. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the Gateway Integrations panel, click + Add New.

4. From the Conversation Gateways group, click Twilio.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your Twilio account.

![B03-06_0134-Twilio-Basic](B03-06_0134-Twilio-Basic.png){width="900" style="block"}

*Figure 2. New Webex Teams Chat Integration Showing Basic Tab*

|                         Element                          |                  Default                   |                                                                                                                                                                                                                                                                                                                                                                                                                                        Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                     |                                            | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Domain                                                   |                                            | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Gateway Service                                          |                                            | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Deploy                                                   | No                                         | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Configuration Locale                                     |                                            | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Configuration                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |||
| Twilio API Base URL                                      | https://api.twilio.com/2010-04-01/Accounts | The base URL for the Twilio API. This is a system default and should not be changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Twilio API Messaging Endpoint                            | Messages.json                              | The messaging endpoint for the Twilio API. This is a system default and should not be changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Account SID                                              |                                            | Type or copy paste the Account SID for the Twilio account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Auth Token                                               |                                            | Type or copy paste the Auth Token for the Twilio account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Phone Number                                             |                                            | Type or copy paste the Phone Number for the Twilio account. Remove all parenthesis and dashes from the number. This number must be preceded with a +1. For example, if the phone number acquired is (212) 555-1212, enter +12125551212 into this field. To configure a WhatsApp phone number, precede the number with "whatsapp:+1". For example, if the WhatsApp number is (212) 555-1212, enter whatsapp:+12125551212 into this field.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Use API Key for Authentication (rather than Account SID) | No                                         | Use the Twilio API Key SID for authentication. Default is No.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| API Key SID                                              |                                            | Displays when the Use API Key for Authentication (rather than Account SID) setting is set to Yes. Type the API SID in this field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| API Key Secret                                           |                                            | Displays when the Use API Key for Authentication (rather than Account SID) setting is set to Yes. Type the API Secret in this field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Incoming Demo Phone Number                               |                                            | This field is strictly used for testing and/or demo purposes. **Do not use** it for normal Twilio integrations. When this field is populated, it will place the gateway integration into a demo mode. This must be used in conjunction with the Authenticated Users configuration setting (see below). In this demo mode, the gateway will discard the actual phone number for all incoming messages and use the value set in this field to identify the Amelia user. The Amelia user is identified through its External UID field, which is unique for each user in  Amelia. The dedicated Amelia user must have a matching External UID to be used as the demo user for this integration. This field does not have to be a phone number. It only has to match the External UID of the demo Amelia user. Anyone sending messages to this integration will be identified as the demo user. |
[New Webex Teams Chat Integration Basic Tab Elements]


</chapter>

 

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0134-Twilio-Config](B03-06_0134-Twilio-Config.png){width="900" style="block"}

*Figure 3. Configuration Tab*

|                         Element                         |                       Default                        |                                                                                                                                                                                                                                                                                                                                                                          Description                                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                                                 | twilio                                               | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Amelia Conversation Request Timeout (seconds)           | 30                                                   | {% include from="B03-06_GateCom-ConvReqTimeout.md" element-id="B03-06_GateCom-ConvReqTimeout_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Authenticated Users                                     | No                                                   | This setting determines how users will start conversations with  Amelia. Choose No to start conversations anonymously or Yes to start conversations as authorized users in  Amelia. Make sure that your domain settings match this checkbox setting. If you choose No, your domain must allow for anonymous conversations. If you select Yes, the user starting the conversation must all ready exist in  Amelia. Furthermore, the user's profile in Amelia must have their External UID set to the value of their phone number used when sending messages to  Amelia. The External UID must be in the same format as the incoming Twilio number. For example, if the user's phone number is (973) 555-7878, then their External UID must be set to +19735557878. |
| Suppress Amelia's First Utterance                       | Yes                                                  | {% include from="B03-06_GateCom-SuppressFirstUtter.md" element-id="B03-06_GateCom-SuppressFirstUtter_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Support Present Content                                 | Yes                                                  | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Chat Settings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |||
| Enable Chat Timeout                                     | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTO.md" element-id="B03-06_GateCom-EnableChatTO_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Chat Timeout Seconds                                    | 900                                                  | {% include from="B03-06_GateCom-ChatTOSeconds.md" element-id="B03-06_GateCom-ChatTOSeconds_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Enable Chat Timeout Message                             | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTOMsg.md" element-id="B03-06_GateCom-EnableChatTOMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Chat Timeout Message                                    | This conversation has been closed due to inactivity. | {% include from="B03-06_GateCom-ChatTOMsg.md" element-id="B03-06_GateCom-ChatTOMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Conversation Settings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |||
| Enable Close Conversation on User Message               | Yes                                                  | {% include from="B03-06_GateCom-EnableCloseConv.md" element-id="B03-06_GateCom-EnableCloseConv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| User Close Conversation Message                         | /close                                               | {% include from="B03-06_GateCom-UserCloseConvMsg.md" element-id="B03-06_GateCom-UserCloseConvMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Enable Conversation Restart on User Message             | Yes                                                  | {% include from="B03-06_GateCom-EnableConvRestart.md" element-id="B03-06_GateCom-EnableConvRestart_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| User Restart Conversation Message                       | /restart                                             | {% include from="B03-06_GateCom-UserRestartConvMsg.md" element-id="B03-06_GateCom-UserRestartConvMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Enable Chat Closed Message                              | Yes                                                  | {% include from="B03-06_GateCom-EnableChatClosedMsg.md" element-id="B03-06_GateCom-EnableChatClosedMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Chat Closed Message                                     | This conversation has been closed.                   | {% include from="B03-06_GateCom-ChatClosedMsg.md" element-id="B03-06_GateCom-ChatClosedMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Add User Information to Initial Conversation Attributes | No                                                   | {% include from="B03-06_GateCom-AddUserInfoAttr.md" element-id="B03-06_GateCom-AddUserInfoAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| User First Name Attribute                               | userFirstName                                        | {% include from="B03-06_GateCom-UserFNameAttr.md" element-id="B03-06_GateCom-UserFNameAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| User Last Name Attribute                                | userLastName                                         | {% include from="B03-06_GateCom-UserLNameAttr.md" element-id="B03-06_GateCom-UserLNameAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| User Email Attribute                                    | userEmail                                            | {% include from="B03-06_GateCom-UserEmailAttr.md" element-id="B03-06_GateCom-UserEmailAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| User External Uid Attribute                             | userExernalUid                                       | {% include from="B03-06_GateCom-UserIDAttr.md" element-id="B03-06_GateCom-UserIDAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Enable Push Conversations                               | No                                                   | {% include from="B03-06_GateCom-PushConv.md" element-id="B03-06_GateCom-PushConv_snippet" /%} Twilio rules require a user to send the first text. If set to Yes, the Twilio account must be configured to allow push conversations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Enable Push Notifications                               | No                                                   | {% include from="B03-06_GateCom-PushNotice.md" element-id="B03-06_GateCom-PushNotice_snippet" /%} Twilio rules require a user to send the first text. If set to Yes, the Twilio account must be configured to allow push notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
[Configuration Tab Elements]


</chapter>

 

## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}

 
