# How-to: Configure Amelia for Zendesk Sunshine Chat

## Introduction

The Zendesk Sunshine Chat gateway lets Amelia converse with their Sunshine Chat service. Zendesk Sunshine is a CRM (Customer Relationship Management) platform built on AWS (Amazon Web Services). It features an open and flexible architecture for customization. As a CRM, Zendesk Sunshine provides a unified view of customer interactions. It also includes analytics and reporting features..

First, set up an account with the Zendesk Sunshine service. You'll configure their service and then the Amelia Zendesk Sunshine Chat gateway. This lets you use Amelia's cognitive power. And includes the ability to interact with third-party resources.

## What You'll Learn

In this topic you'll learn how to:

* [Configuration requirements for the Amelia gateway](#Requirem).
* [Configure a Zendesk app](#Create).
* [Configure a Switchboard integration](#Create2).
* [Access the Sunshine Conversations API](#Access).
* [Pass control to Amelia](#Passing).
* [Configure a form message](#Configur2).
* [Add and configure the Amelia gateway](#Configur).

##Requirements {% #Requirem %}

To configure the Amelia Zendesk Sunshine Chat gateway, you'll need the following details:

* .App ID.
* Webhook Secret.
* Authentication Method and related settings.
* The Unique ID of the Switchboard integration.
* The integration ID used to deliver events routed by the Switchboard integration.
* If used, the Integration ID to Pass Control to on Conversation Close.
* If used, the Integration ID to Pass Control to for External Agent Escalation.
* The Messaging Endpoint for Amelia's gateway service.

##Pre-Configuration {% #Pre-Conf %}

To use Amelia with Zendesk Sunshine, first create an application in Zendesk. Creating the app generates an App ID and Secret. If you use a proxy server, you must configure the method and credentials in Zendesk.

Once you create the app, you'll need a Switchboard integration. This includes a custom webhook that points to Amelia's gateway service. The Amelia endpoint is:

https://hostname/Amelia/gateway/service/zendesk/api/messages

where **hostname** is the host name used for the Amelia application. The webhook also needs a Webhook Secret key. And that key needs to be set up with the Amelia gateway service.

###Create a Zendesk app {% #Create %}

To integrate Zendesk Sunshine with Amelia, first create a Zendesk application. Their documentation describes the process:

<https://docs.smooch.io/guide/intro-to-account-provisioning/#introduction-to-apps>

<https://docs.smooch.io/guide/creating-and-managing-apps/>

As you create a Zendesk app, save the **App ID** and **Secret** in a safe place. Use these values for the Username / Key and Password / Secret fields in the Amelia gateway. Unless you're using a proxy with a different authentication method and credentials.

###Create a Switchboard integration {% #Create2 %}

The next step is to create a switchboard integration. Consult the Zendesk Sunshine documentation for details:

<https://docs.smooch.io/guide/switchboard/>

The integration must include a custom webhook. The webhook must point to the Amelia Gateway Service endpoint URL at:

https://hostname/Amelia/gateway/service/zendesk/api/messages

where **hostname** is the host name used for the Amelia application. Route the end user conversation to your Switchboard integration.

Also, configure the Amelia gateway service with the unique integration ID. Event messages use this ID to pass messages. The gateway will reject incoming webhook events without this unique ID. And reject messages if an integration ID doesn't match the Amelia gateway configuration.

The unique App ID should be enough to identify one App ID for one integration:

<https://docs.smooch.io/guide/intro-to-account-provisioning/#introduction-to-apps>

To use the same App ID for multiple integrations, the integration ID must be in the webhook payload. And you must configure the Amelia gateway with the integration ID.

The Amelia gateway uses the App ID and integration ID to identify integration flows. If the integration ID is absent, the gateway uses the App ID. Amelia will use the App ID to find an integration if there's no gateway configured for an integration ID. The webhook message payloads contain the App ID and integration ID.

In the webhook payload, the **id** key is the Switchboard Integration ID. The **integrationId** key is the ID of the integration that delivers Switchboard events. And the **integrationId** in the source array is the source integration ID.

Save the Switchboard integration ID, webhook, and webhook Secret in a safe place. It's necessary to configure the gateway service.

###Access the Sunshine Conversations API {% #Access %}

The Zendesk Sunshine Chat gateway uses the Sunshine Conversations API found here:

<https://docs.smooch.io/rest/>

###Passing Control to Amelia {% #Passing %}

Zendesk Sunshine can pass control of a conversation from one integration to another. Pass control is a key concept in Sunshine Switchboard. Their documentation has details:

<https://docs.smooch.io/guide/switchboard/#pass-control>

From Sunshine's perspective, the Zendesk Sunshine gateway is an integration. When control passes to the gateway, the end user can chat with Amelia.

The gateway passes control to a different Sunshine conversation in two scenarios:

* When Amelia closes the conversation.

* When Amelia escalates the conversation.

Pass control is only active if you configure the Amelia gateway with the pass control fields.

#### Sending Metadata

To pass control to another integration, create a JSON object. The object must have the **metadataForSunshinePassControl** key set. This key contains an array with values that define the purpose for passing control. For example, escalation details. You can use a Builder flow or BPN process to create and populate the JSON object. Use a Script block or task, as shown in this example.
```JavaScript
def map = execution.getCustomConversationAttributesAsMap();
def conversationId = map.get("conversationId");
def passControlMetadata = '{"metadataForSunshinePassControl": {"dataCapture.systemField.requester.name": "John Smith","dataCapture.systemField.requester.email": "John.Smith@example.com","dataCapture.ticketField.360042014871": "5f3418b7684f92000c448b6b","dataCapture.ticketField.360042027152":"' + conversationId + '","sourceIntegrationId": "615dd9f547791c00e0e8a963","dataCapture.ticketField.360042965552": "XYZ12345","dataCapture.ticketField.360048242592": "yes_craftsman_lp","dataCapture.ticketField.360048242612": "none_craftsman","dataCapture.ticketField.360044046551": "b2c_warranty_quality_","dataCapture.ticketField.360044047131": "product_defective_in_use","dataCapture.ticketField.360044046931": "product_complaint","dataCapture.ticketField.360044041852": "referred_to_licensed_partner_pd_in_use","dataCapture.systemField.tags": "LocalTesting"}}';
execution.setVariable("passControlMetadata", passControlMetadata); 
```

The gateway stores the metadata internally. Then attaches the pass control request when passing control. The request also stores the Sunshine conversation ID as **conversationId**. As shown in the example code above.

#### Overriding Integration ID

Amelia's gateway has two fields to define an integration ID to pass control:

* Integration ID to Pass Control to on Conversation Close

* Integration ID to Pass Control to for External Agent Escalation

You configure these fields on the Additional Properties tab for the gateway.

A Script block or task also can override these settings. To do this, send an integration message on conversation close or escalation.

To pass control on conversation close, send a JSON payload object. The object must have the conversationCloseIntegrationId key.
```JavaScript
// where 123456 is the desired integration ID. Send this payload as an integration message. def integrationIdMessage = '{"conversationCloseIntegrationId": "123456"}'; 
```

To pass control for escalation, send a JSON payload object. The object must have the escalationIntegrationId key.
```JavaScript
// where 123456 is the desired integration ID. Send this payload as an integration message. def integrationIdMessage = '{"escalationIntegrationId": "123456"}'; 
```

###Configure Form Messages {% #Configur2 %}

The Zendesk Sunshine Chat gateway uses the form message type to send UI elements. See their documentation for details:

<https://docs.smooch.io/rest/#operation/postMessage>

Zendesk supports single select drop-down lists and multi-line input. The Sunshine API does not support multiselect as of September 2021.

The Create a Form section of the Script block topic describes how to use formInputBuilder to send messages.

#### File Attachments

Use the Present block to include a file attachment in a message.

#### Single Select Dropdown

Send buttons and radio buttons as single select drop-down lists. Use the formInputBuilder. The Create a Form section of the [Script block](B03-04_0120-Script-Block.md) topic has details.

#### Multi-Select Dropdown

For multi-line form input, only support text and email type fields. Use the formInputBuilder. The Create a Form section of the [Script block](B03-04_0120-Script-Block.md) topic has details.

##Configure Amelia {% #Configur %}

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

### Add a Zendesk Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click **Integrations**. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the **Gateway Integrations** panel, click **+ Add New**.

4. From the **Conversation Gateways** group, click **Zendesk Sunshine**.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your **Zendesk Sunshine** account.

![B03-06_0137-Zendesk-Basic](B03-06_0137-Zendesk-Basic.png){width="900"}

*The Basic Tab*

*Basic Tab Elements*

| Element                                                              | Default                        | Description                                                                                                                                                                                                                                                          |
|----------------------------------------------------------------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                 |                                | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                           |
| Domain                                                               |                                | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                       |
| Gateway Service                                                      |                                | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                     |
| Deploy                                                               | No                             | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                       |
| Configuration Locale                                                 |                                | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                           |
| **Configuration**                                                    |                                |                                                                                                                                                                                                                                                                      |
| API Base URL                                                         | https://api.smooch.io/v2/apps/ | The base URL of the Zendesk Sunshine instance.                                                                                                                                                                                                                       |
| App ID                                                               |                                | Type the Zendesk Sunshine Application ID from the bot configuration page in the Azure portal.                                                                                                                                                                        |
| Source Integration ID                                                |                                | The integrationId field of the source of the webhook event. This is different from the other integration IDs listed below. This is used in combination with the App ID to uniquely identify a gateway integration when the App ID does not suffice for that purpose. |
| Unique ID of the Switchboard Integration                             |                                | The ID of the switchboard integration configured for the gateway, as defined.                                                                                                                                                                                        |
| ID of the integration that delivers events routed by the Switchboard |                                | This is the integrationId field in the webhook payload.                                                                                                                                                                                                              |
| Authentication Method                                                | BASIC                          | Select authentication method, BASIC or HTTP_HEADER. Default is BASIC. HTTP_HEADER is used for proxy authentication. Additional settings appear depending on which method is selected.                                                                                |
| Webhook Secret                                                       |                                | Type the webhook secret used to connect to the service.                                                                                                                                                                                                              |
| Username / Key                                                       |                                | If Authentication Method is set to BASIC, type the username or key to use for authentication,                                                                                                                                                                        |
| Password / Secret                                                    |                                | If Authentication Method is set to BASIC, type the password or secret to use for authentication                                                                                                                                                                      |
| Header Name                                                          |                                | If Authentication Method is set to HTTP_HEADER, type the header name to use for authentication.                                                                                                                                                                      |
| Header Value                                                         |                                | If Authentication Method is set to HTTP_HEADER, type the header value to use for authentication.                                                                                                                                                                     |
| Amelia User Display Name                                             |                                | If the default Amelia name is not used, type the name for Amelia to be displayed to users.                                                                                                                               |
| Amelia Avatar URL                                                    |                                | If the default Amelia avatar is not used, type the URL for the avatar used for Amelia.                                                                                                                                                         |


</chapter>

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0137-Zendesk-Config](B03-06_0137-Zendesk-Config.png){width="900"}

*The Configuration Tab*

*Configuration Tab Elements*

| Element                                                             | Default                                              | Description                                                                                                              |
|---------------------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Channel                                                             | zendesksunshinechat                                  | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                         |
| Amelia Conversation Request Timeout (seconds) |                                                      | Set the timeout, in seconds, for a request to converse with Amelia.                                |
| Authenticated Users                                                 | No                                                   | Leave unchecked for anonymous conversations. The domain must support either anonymous or authenticated users.            |
| Suppress Amelia's First Utterance                                   | Yes                                                  | {% include from="B03-06_GateCom-SuppressFirstUtter.md" element-id="B03-06_GateCom-SuppressFirstUtter_snippet" /%}   |
| Support Present Content                                             | Yes                                                  | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}           |
| **Chat Settings**                                                   |                                                      |                                                                                                                          |
| Enable Chat Timeout                                                 | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTO.md" element-id="B03-06_GateCom-EnableChatTO_snippet" /%}               |
| Chat Timeout Seconds                                                | 900                                                  | {% include from="B03-06_GateCom-ChatTOSeconds.md" element-id="B03-06_GateCom-ChatTOSeconds_snippet" /%}             |
| Enable Chat Timeout Message                                         | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTOMsg.md" element-id="B03-06_GateCom-EnableChatTOMsg_snippet" /%}         |
| Chat Timeout Message                                                | This conversation has been closed due to inactivity. | {% include from="B03-06_GateCom-ChatTOMsg.md" element-id="B03-06_GateCom-ChatTOMsg_snippet" /%}                     |
| **Conversation Settings**                                           |                                                      |                                                                                                                          |
| Enable Close Conversation on User Message                           | Yes                                                  | {% include from="B03-06_GateCom-EnableCloseConv.md" element-id="B03-06_GateCom-EnableCloseConv_snippet" /%}         |
| User Close Conversation Message                                     | /close                                               | {% include from="B03-06_GateCom-UserCloseConvMsg.md" element-id="B03-06_GateCom-UserCloseConvMsg_snippet" /%}       |
| Enable Conversation Restart on User Message                         | Yes                                                  | {% include from="B03-06_GateCom-EnableConvRestart.md" element-id="B03-06_GateCom-EnableConvRestart_snippet" /%}     |
| User Restart Conversation Message                                   | /restart                                             | {% include from="B03-06_GateCom-UserRestartConvMsg.md" element-id="B03-06_GateCom-UserRestartConvMsg_snippet" /%}   |
| Enable Chat Closed Message                                          | Yes                                                  | {% include from="B03-06_GateCom-EnableChatClosedMsg.md" element-id="B03-06_GateCom-EnableChatClosedMsg_snippet" /%} |
| Chat Closed Message                                                 | This conversation has been closed.                   | {% include from="B03-06_GateCom-ChatClosedMsg.md" element-id="B03-06_GateCom-ChatClosedMsg_snippet" /%}             |
| Add User Information to Initial Conversation Attributes             | No                                                   | {% include from="B03-06_GateCom-AddUserInfoAttr.md" element-id="B03-06_GateCom-AddUserInfoAttr_snippet" /%}         |
| User First Name Attribute                                           | userFirstName                                        | {% include from="B03-06_GateCom-UserFNameAttr.md" element-id="B03-06_GateCom-UserFNameAttr_snippet" /%}             |
| User Last Name Attribute                                            | userLastName                                         | {% include from="B03-06_GateCom-UserLNameAttr.md" element-id="B03-06_GateCom-UserLNameAttr_snippet" /%}             |
| User Email Attribute                                                | userEmail                                            | {% include from="B03-06_GateCom-UserEmailAttr.md" element-id="B03-06_GateCom-UserEmailAttr_snippet" /%}             |
| User External Uid Attribute                                         | userExternalUid                                      | {% include from="B03-06_GateCom-UserIDAttr.md" element-id="B03-06_GateCom-UserIDAttr_snippet" /%}                   |

</chapter>

#### Configure the Additional PropertiesTab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional Properties tab elements.
<chapter title="The Additional Properties Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0137-Zendesk-AddtlProps](B03-06_0137-Zendesk-AddtlProps.png){width="900"}

*The Additional Tab*

*Additional Tab Elements*

| Element                                                                                       | Default |                                                                                                                                                                    Description                                                                                                                                                                     |
|-----------------------------------------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration ID to Pass Control to on Conversation Close                                       |         | The ID of the Switchboard integration that Amelia should pass control to when closing a conversation. See [Zendesk Sunshine Pass Control](https://docs.smooch.io/guide/switchboard/#pass-control) for more information. This may be blank if no pass control is necessary.                                                                         |
| Integration ID to Pass Control to for External Agent Escalation                               |         | The ID of the Switchboard integration that Amelia should pass control to when escalating the conversation to an agent in an external system, such as Zendesk Agent Workspace. See [Zendesk Sunshine Pass Control](https://docs.smooch.io/guide/switchboard/#pass-control) for more information. This may be blank if no pass control is necessary. |
| Start new Amelia Conversation without waiting for User's First Message? | Yes     | Indicates whether the gateway should start a new Amelia conversation without waiting for the user's first message. The new conversation is started when a pass control message is received from Zendesk Sunshine. Default is Yes.                                                                                                                  |
</chapter>

## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}
