# How-to: Configure Amelia for Genesys Web Messaging Gateway

## Introduction

The Genesys Web Messaging gateway lets Amelia converse with their Web Message service. The service can leverage customer data to create a personalized experience for users. It also allows for automated messaging. And it includes the ability to embed a messaging interface in customer websites.

First, set up an account with Gensys for their Web Message service. You'll configure their service and then the Amelia Genesys Web Messaging gateway. This lets you use Amelia's cognitive power. And includes the ability to interact with third-party resources.

## What You'll Learn

In this topic you'll learn how to:

* [Configure Genesys Messenger](#Configur).
* [Create an Inbound Message Flow with Genesys Architect](#Create).
* [Create a Messenger Deployment for Messenger and Message Flow](#Create2).
* [Configure Messenger Features](#Configur2).
* [Add and configure the Genesys Web Messaging gateway in Amelia](#Add).

## Requirements

For this gateway configuration, you'll need the following:

* The WebSocket Address for the Genesys Web Messaging Escalation gateway.
* The Deployment ID or Key for the Genesys Web Messaging Escalation gateway.
* The Messaging Endpoint for Amelia's gateway service (optional).

## Pre-Configuration

The process to create and deploy a Genesys Web Messenger is described here in their documentation:

[https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi](https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi)

This page, in particular, provides the Websocket Address to use when configuring Amelia's gateway service.

The following sections will guide you as you complete these steps.

###Configure Genesys Messenger {% #Configur %}

The first step is to create then configure a Genesys Messenger. The process is described here in the Genesys documentation: [https://help.mypurecloud.com/articles/configure-messenger/](https://help.mypurecloud.com/articles/configure-messenger/).

In addition, there are several settings to configure the messenger to work with the Amelia gateway.

* Conversation Disconnect: Configure the Conversation Disconnect setting. Select the Display conversation status and disconnect session.
* Humanize Your Conversation: Configure the Humanize your Conversation setting. Select the On setting to show the name and avatar of your support team to end-users.
* Clear Conversation: Configure the Clear Conversation setting. Select the On setting to allow end-users to clear their messaging conversation.

And don't forget to save your messenger with these settings.

###Create an Inbound Message Flow with Genesys Architect {% #Create %}

Once a Genesys Messenger is created and configured, use the Genesys Architect feature to create an inbound message flow. The process is described here in the Genesys documentation: [https://help.mypurecloud.com/articles/add-inbound-message-flow/](https://help.mypurecloud.com/articles/add-inbound-message-flow/).

In the example flow below:

* Amelia sends a conversation attribute called `participant.name` which contains the name of the end user. This attribute name could be anything but we chose `participant.name` since it is a well known Genesys interaction attribute.
* The attribute is then set on the `name` field of the Participant. This ensures the name of the end user is visible to the agent when the conversation is sent to the queue.
* The conversation is then transferred to the `TestEscalation` queue.

At this point, any agent that is eligible for interactions for that queue should see an incoming interaction for pickup.

And don't forget to save your inbound message flow.

![B03-06_0140-GenWebMsg-ArchitectFlow](B03-06_0140-GenWebMsg-ArchitectFlow.png){width="400" style="block"}

*An Example Genesys Inbound Messenger Flow*

###Create a Messenger Deployment for Messenger and Message Flow {% #Create2 %}

With a Genesys Messenger created and an inbound message flow defined with the Architect feature, deploy your messenger. The process is described here in the Genesys documentation: [https://help.mypurecloud.com/articles/deploy-messenger/](https://help.mypurecloud.com/articles/deploy-messenger/).

To configure Amelia's gateway service, you will need to copy and save the Deployment Key from this process.

###Configure Messenger Features {% #Configur2 %}

There are several possible features that can be used with the Genesys Web Messenger Escalation gateway:

* Attachments: An attachment added by an end user to or from Amelia gets added to the Genesys conversation and vice versa.
* Conversation Attributes: In Builder Script blocks and BPN Script tasks, you can pass conversation attributes to Genesys. Use the Genesys_ prefix. For example, `Genesys_userFullname` or `Genesys_userEmail`. Use the Genesys Architect feature to send then manage these attribute variables.
* Override Initial Message to Genesys: In the Amelia Genesys Web Messaging gateway, if the Pickup When System Connects option is No, then the value for the "Initial message to start conversation in Genesys" field can be overridden. Supply an escalation variable with the name `Genesys_InitialMessage`.

## Configure Amelia

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

###Add a Genesys Web Messaging Escalation Gateway {% #Add %}

To do this:

1. From the **top left main** menu, click Digital Employees.
2. On the **left-side** menu, click Integrations. The Gateway Integrations panel opens between the left-side menu and the Home page.
3. In the Gateway Integrations panel, click + Add New.
4. From the Conversation Gateways group, click Genesys Web Messaging Escalation.

#### Configure the Basic Tab

<chapter title="Basic Tab Elements" collapsible="true" level="5">

Use this section to connect Amelia and your **Genesys Web Messaging Escalation** account.

![B03-06_0140-GenWebMsg-Basic](B03-06_0140-GenWebMsg-Basic.png){width="900" style="block"}

*The Basic Tab*

*The Basic Tab Elements*


| Element              | Default | Description                                                                                                                                                                                                                                                                                                                                                        |
|----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                 |        | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                                                                                                                         |
| Domain               |        | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                                                                                                                     |
| Gateway Service      |        | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                                                                                                                   |
| Deploy               | No      | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                                                                                                                     |
| Configuration Locale |        | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                                                                                                                         |
| **Configuration**    |         |                                                                                                                                                                                                                                                                                                                                                                    |
| Websocket Address    |        | The WebSocket Address for the Genesys Web messaging Guest API, corresponding to the region for the Genesys Cloud instance. See [https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#connecting](https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#connecting) for a list of Regions and WebSocket Addresses. |
| Deployment ID        |        | The deployment key for the Messenger Deployment relevant to this integration                                                                                                                                                                                                                                                                                       |
[New Genesys Web Messaging Escalation Basic Tab Elements]
</chapter>

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. 

<chapter title="Configuration Tab Elements" collapsible="true" level="5">

The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0140-GenWebMsg-Config](B03-06_0140-GenWebMsg-Config.png){width="900" style="block"}

*The Configuration Tab*

*The Configuration Tab Elements*


| Element                                                                     | Default                       | Description                                                                                                      |
|-----------------------------------------------------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------|
| Channel                                                                     | genesyswebmessagingescalation | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                 |
| Availability Refresh Seconds                                                | 900                           | {% include from="B03-06_GateCom-AvailRefresh.md" element-id="B03-06_GateCom-AvailRefresh_snippet" /%}       |
| Escalation Queue                                                            |                               | {% include from="B03-06_GateCom-EscalationQ.md" element-id="B03-06_GateCom-EscalationQ_snippet" /%}         |
| Agents per Node                                                             | 3                             | {% include from="B03-06_GateCom-AgentsPerNode.md" element-id="B03-06_GateCom-AgentsPerNode_snippet" /%}     |
| Support Present Content                                                     | Yes                           | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}   |
| Customer Agent Info                                                         | No                            | {% include from="B03-06_GateCom-CustAgentInfo.md" element-id="B03-06_GateCom-CustAgentInfo_snippet" /%}     |
| Transfer Conversation Back to Amelia When the Agent Closes the Conversation | No                            | {% include from="B03-06_GateCom-TransAgentClose.md" element-id="B03-06_GateCom-TransAgentClose_snippet" /%} |
[Configuration Tab Elements]

</chapter>

#### Configure the Additional Properties Tab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. 

<chapter title="The Additional Properties Tab" collapsible="true" level="5">

The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0140-GenWebMsg-AddProps](B03-06_0140-GenWebMsg-AddProps.png){width="900" style="block"}

*The Additional Properties Tab*

*The Additional Properties Tab Elements*


| Element                                                                                | Default  | Description                                                                                                                                                                                                                                                                                                                                                                              |
|----------------------------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maximum time in seconds to wait for an acknowledgement message from Genesys            | 30       | Genesys acknowledges every message sent by the Gateway with an acknowledgment message back to the Gateway. This acknowledgment message is the only way for the Gateway to know that the message reached successfully. The Gateway can retry if there is no acknowledgment or if there is an error in the acknowledgment message that suggests the Gateway can try resending the message. |
| Maximum time in seconds to wait for an attachment acknowledgement message from Genesys | 60       |                                                                                                                                                                                                                                                                                                                                                                                          |
| Pickup When System Connects                                                            | Yes      | Whether the Gateway should consider the conversation as accepted immediately after escalating it to Genesys or should wait for an agent to either send a message back or start typing a message to consider it accepted by the agent.                                                                                                                                                    |
| Initial message to start conversation in Genesys                                       | Inactive | If the Pickup When System Connects setting is No, Genesys needs an initial text message for a conversation in order for an agent to pickup.                                                                                                                                                                                                                                              |
| **API Retry**                                                                          |          |                                                                                                                                                                                                                                                                                                                                                                                          |
| Max Attempts (setting to 1 will disable retry attempts)                                | 5        | {% include from="B03-06_GateCom-API-Retry.md" element-id="B03-06_GateCom-API-Retry_snippet" /%}                                                                                                                                                                                                                                                                                     |
| Back Off Initial Delay Milliseconds                                                    | 4200     | {% include from="B03-06_GateCom-API-BackOff-InitDelay.md" element-id="B03-06_GateCom-API-BackOff-InitDelay_snippet" /%}                                                                                                                                                                                                                                                             |
| Back Off Multiplier (value of 2 yields 100% increase per backoff event)                | 2        | {% include from="B03-06_GateCom-API-BackOff-Multi.md" element-id="B03-06_GateCom-API-BackOff-Multi_snippet" /%}                                                                                                                                                                                                                                                                     |
[Additional Properties Tab Elements]
</chapter>

## More Resources

To read about other gateways that you can use with %General.Amelia.application%, see:
{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}
