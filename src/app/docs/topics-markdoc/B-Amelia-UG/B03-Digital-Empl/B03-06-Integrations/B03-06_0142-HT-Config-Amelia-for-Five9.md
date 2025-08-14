# How-to: Configure Amelia for Five9

## Introduction

The Five9 escalation gateway uses Amelia and Five9 for people to talk with an agent. In addition to a gateway webhook, Amelia helps agents to resolve conversations.

## What You'll Learn

In this topic you'll learn about:

* [How Five9 works with the Amelia gateway service](#How).

* [The Five9 escalation gateway features](#Five9).

* [Add and configure the Five9 gateway in Amelia](#Configur).

## Requirements

For this gateway configuration, you'll need the following information:

* The API Base URL.

* The App Context Path.

* The Tenant Name.

* The Campaign Name.

* The Amelia gateway instance URL.

##How Five9 Works with the Amelia Gateway {% #How %}

Escalated conversations use the Five9 Messaging REST API to create a new conversation. Agents pick up the conversation with Five9. The Five9 software then uses a webhook to notify the Amelia gateway about the agent joining. This creates bi-directional communication between the user and the agent. The gateway uses the REST API to send user messages. And Five9 uses the gateway webhook to send Five9 events to the gateway.

The Five9 Messaging REST API is described here online:

&lt;https://webapps.five9.com/assets/files/for_customers/documentation/apis/messaging-rest-api-reference-guide.pdf&gt;

As of June 14, 2024, the API call to create an anonymous session with Five9 does not need authentication. Clients using the Five9 gateway should understand the associated risks. Using IP addresses and ACL restrictions can mitigate any risks. You could allow only the gateway IP address to start anonymous sessions.

##Five9 Escalation Gateway Features {% #Five9 %}

Amelia gives you features to help resolve escalated conversations.

### Provide Contact Attributes

You can send escalation variables from an Amelia Builder flow or BPN process. For example, use conversation data to provide contact information for the end user.

In this example, firstName and lastName are set to John and Doe, respectively. Variables use the five9contact_ prefix.
```JavaScript
execution.setVariable("five9contact_firstName", "John"); execution.setVariable("five9contact_lastName", "Doe"); 
```

The Five9 Messaging REST API includes additional attributes. Refer to their API reference guide, linked above. These examples are all strings.

*Five9 Messaging REST API Attributes*

| Attribute |                   Description                    |
|-----------|--------------------------------------------------|
| city      | Contact's city.                                  |
| company   | Contact's company.                               |
| email     | Contact's email address.                         |
| firstName | Contact's first name.                            |
| gender    | Contact's gender.                                |
| lastName  | Contact's last name.                             |
| number1   | Contact's primary phone number in E164 format.   |
| number2   | Contact's secondary phone number in E164 format. |
| number3   | Contact's tertiary phone number in E164 format.  |
| state     | Contact's residential state.                     |
| street    | Contact's residential street name.               |
| zip       | Contact's residential zip code.                  |

### Conversation Attributes

Amelia Builder flows and BPN processes also can send conversation attributes. As with contact data variables, use the five9chat_ prefix. In this example, send attribute1 and attribute2 as value1 and value2..
```JavaScript
execution.setVariable("five9chat_attribute1", "value1"); execution.setVariable("five9chat_attribute2", "value2"); 
```

### Override Gateway Configuration Fields

You also can send conversation attributes to override Amelia gateway configuration fields. As with contact data variables, use the five9chat prefix. In this example, you can override the Tenant Name and Campaign Name. As with contact data variables, use the five9chat_ prefix.
```JavaScript
execution.setVariable("five9chat_tenantName", "Tenant Name"); execution.setVariable("five9chat_campaignName", "Campaign Name"); 
```

### Include Attachments

The Amelia gateway sends a temporary link to attachments added from the gateway. As of June 2024, Five9 cannot send attachments to the Amelia gateway webhook. Five9 agents may need to provide a download link to send attachments.

Attachments added from the Amelia gateway send a temporary download link:

https://{ameliaHost}/Amelia/gateway/service/local/five9escalation/resource/LicenseApplication-pdf-12408860305472118654.pdf

In this example:

* {ameliaHost] is the host name for the Amelia instance.

* LicenseApplication is the original file name.

* -12408860305472118654 is a unique dynamically generated ID appended to the file name.

The link is sent as a text message to Five9. In Five9 it appears as a link.

### Use Five9 Groups as Agents

The Amelia gateway includes a setting, Allow a Five9 Group to act as an Agent. This allows agents assigned to a single Five9 group to act as one agent.

##Configure Amelia {% #Configur %}

Once you have the Requirements collected, you're ready to set the new gateway integration to interact with Amelia.


### Add a Five9 Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click **Integrations**. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the **Gateway Integrations** panel, click **+ Add New**.

4. From the **Conversation Gateways** group, click **Five9**.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your **Five9** account.

![B03-06_0142-Basic](B03-06_0142-Basic.png){width="600"}

*The New Five9 Integration Showing Basic Tab*

*The Basic Tab Elements*

|       Element        |        Default        |                                                Description                                                 |
|----------------------|-----------------------|------------------------------------------------------------------------------------------------------------|
| Name                 |                       | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                 |
| Domain               |                       | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}             |
| Gateway Service      |                       | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}           |
| Deploy               | No                    | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}             |
| Configuration Locale |                       | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%} |
| **Configuration**                                                                                                                                       |||
| API Base URL         | https://app.five9.com | The base URL for the Five9 Messaging REST API.                                                             |
| App Context Path     | /appsvcs/rs/svc       | The context path for the Five9 Messaging REST API.                                                         |
| Tenant Name          |                       | The tenant name used in Five9.                                                                             |
| Campaign Name        |                       | The campaign name used in Five9.                                                                           |

</chapter>

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0142-Configure](B03-06_0142-Configure.png){width="600"}

*The Configuration Tab*

*The Configuration Tab Elements*

|                                   Element                                   |     Default     |                                                   Description                                                    |
|-----------------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|
| Channel                                                                     | five9escalation | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                 |
| Availability Refresh Seconds                                                | 900             | {% include from="B03-06_GateCom-AvailRefresh.md" element-id="B03-06_GateCom-AvailRefresh_snippet" /%}       |
| Escalation Queue                                                            |                 | {% include from="B03-06_GateCom-EscalationQ.md" element-id="B03-06_GateCom-EscalationQ_snippet" /%}         |
| Agents per Node                                                             | 3               | {% include from="B03-06_GateCom-AgentsPerNode.md" element-id="B03-06_GateCom-AgentsPerNode_snippet" /%}     |
| Support Present Content                                                     | Yes             | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}   |
| Customer Agent Info                                                         | No              | {% include from="B03-06_GateCom-CustAgentInfo.md" element-id="B03-06_GateCom-CustAgentInfo_snippet" /%}     |
| Transfer Conversation Back to Amelia When the Agent Closes the Conversation | No              | {% include from="B03-06_GateCom-TransAgentClose.md" element-id="B03-06_GateCom-TransAgentClose_snippet" /%} |

</chapter>

#### Configure the Additional Tab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional tab elements.

<chapter title="The Additional Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0142-Additional](B03-06_0142-Additional.png){width="600"}

*The Additional Tab*

*The Additional Tab Elements*

| Element                                                                 | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Allow a Five9 support group to act as an agent                          | No      | Determines whether a group in Five9 can act as an agent from Amelia's perspective. When Amelia escalates a conversation, it expects an agent to pick up the conversation. However, clients may choose to assign tickets to groups rather than individual agents. Enable this setting to have Amelia consider the group as a single agent. If enabled, Amelia considers the group's name as the agent name and displays that to the end user. |
| Disable the Auto Close feature in Five9                                 | No      | The Five9 message window closes when the end user does not respond in a pre-defined time. This auto close feature is set in the Text Channels Administrator Console. Use this setting to disable this auto close behavior.                                                                                                                                                                                                                                                               |
| Disable the Comfort Message feature in Five9                            | Yes     | In Five9, when agents fail to respond in a pre-defined period, a message is sent to the user. The time period is set by administrators in the agent profile. Use this setting to disable this comfort message behavior.                                                                                                                                                                                                                                                                  |
| **API Retry**                                                           |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Max Attempts (setting to 1 will disable retry attempts)                 | 4       | {% include from="B03-06_GateCom-API-Retry.md" element-id="B03-06_GateCom-API-Retry_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                     |
| Back Off Initial Delay Milliseconds                                     | 250     | {% include from="B03-06_GateCom-API-BackOff-InitDelay.md" element-id="B03-06_GateCom-API-BackOff-InitDelay_snippet" /%}                                                                                                                                                                                                                                                                                                                                                             |
| Back Off Multiplier (value of 2 yields 100% increase per backoff event) | 2       | {% include from="B03-06_GateCom-API-BackOff-Multi.md" element-id="B03-06_GateCom-API-BackOff-Multi_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                     |

</chapter>



## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}

