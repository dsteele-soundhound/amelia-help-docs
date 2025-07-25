# How-to: Configure Amelia for Genesys PureEngage

## Introduction

Genesys PureEngage is a contact center platform. It allows businesses to engage with customers across multiple channels. It is delivered on premise or through a cloud. Genesys support manages configuration.

Amelia interacts with Genesys PureEngage using the Genesys Mobile Engagement Chat API. All messages are sent to and from this API. Amelia polls the API based on a configuration value that you set.

## What You'll Learn

In this topic you'll learn how to:

* [How Genesys PureEngage works with the Amelia gateway service](#Pre-Conf).

* [Add and configure the Genesys PureEngage gateway in Amelia](#Configur).

## Requirements

For this gateway configuration, you'll need the following:

* The Service URL for the Genesys PureEngage gateway.

* The Service Name for the Genesys PureEngage gateway.

##Pre-Configuration {% #Pre-Conf %}

The Amelia Genesys PureEngage Gateway uses the Genesys Mobile Engagement Chat API for all of its communication with Genesys PureEngage. The API is described here in their documentation:

&lt;https://docs.genesys.com/Documentation/GMS/8.5.2/API/ChatAPIv2&gt;

The following sections will guide you as you complete these steps.

### Starting a Chat

Upon escalation, the gateway requests a new chat with PureEngage using the Request Chat API call where {serviceName} is the base URL of the Genesys PureEngage instance:

/genesys/2/chat/{serviceName}

The firstName, lastName, and nickname fields of this API call correspond to the end user's firstName, lastName and name fields as received from Amelia.

In addition, any escalation attributes populated by a Digital Employees builder flow or BPNs are sent over in the optional userData section of the Genesys API call.

On a successful call, a new chat is created in PureEngage. A chatId and other fields are returned which the gateway uses for future calls related to the same chat.

### Maintaining State in a Chat

The gateway now waits for an agent to join the chat. The gateway receives information about the latest state of a chat by polling PureEngage periodically. The Genesys Mobile Engagement Chat API call used for polling is the Refresh Chat call:

/genesys/2/chat/{serviceName}/{chatId}/refresh

The polling interval is configured in the Additional tab of the Admin interface in the Amelia gateway service..

The gateway keeps track of the last received transcriptPosition, so that it only polls for the latest updates.

### Handling Agent Interactions

If an agent joins the chat, the gateway knows about it through the polling mechanism and an end to end chat is established between the user and the agent. If no agent joins or if any API call fails during this process, then the above procedure is retriggered by the escalation mechanism in Amelia until the agent joins or until the escalation times out.

After an agent joins, control is returned to Amelia and normal communication resumes between the end user and the agent. During this conversation phase, the gateway sends the user's updates to the agent using the Send Message API call:

/genesys/2/chat/{serviceName}/{chatId}/send

Any updates made by the agent are received through the polling mechanism.

If an agent closes the chat in PureEngage, then the gateway closes the conversation in  Amelia. If a user closes a conversation in Amelia, then the gateway closes the PureEngage chat using the Disconnect API call:

/genesys/2/chat/{serviceName}/{chatId}/disconnect

##Configure Amelia {% #Configur %}

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

### Add a Genesys PureEngage Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click **Integrations**. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the **Gateway Integrations** panel, click **+ Add New**.

4. From the **Conversation Gateways** group, click **Genesys PureEngage**.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.

<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your Genesys PureEngage account.

![B03-06_0116-GenPureEngage-Basic](B03-06_0116-GenPureEngage-Basic.png){width="600"}

*The Basic Tab*

*The Basic Tab Elements*


| Element                                   | Default          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                      |                  | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Domain                                    |                  | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Gateway Service                           |                  | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Deploy                                    | No               | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Configuration Locale                      |                  | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Configuration**                         |                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Service URL                               |                  | The base URL of the Genesys PureEngage instance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Context Path                              | /genesys/2/chat/ |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Service Name                              |                  | The service name configured on the PureEngage side.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| API Endpoint Overrides                    |                  | Active only if the Microsoft Client Credentials Auth Enabled setting is set to Yes. This setting allows the Genesys API endpoints to be overridden with customer counterparts. This is typically the last segment of the full API endpoint, the startTyping or stopTyping values. As of this writing, only startTyping and stopTyping are different than those in the Genesys API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Basic Auth Enabled                        | No               | A flag that indicates whether basic auth is enabled on the PureEngage side for calling the PureEngage Chat API. If Yes is selected, provide the username and password used for the Genesys Mobile Engagement Chat API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Microsoft Client Credentials Auth Enabled | No               | Used only for Microsoft MSAL proxy access to the Amelia gateway service. If Yes is selected, provide these additional settings: * **Authority**: Type the context path to the service. Overrides the Context Path setting. * **Client ID**: Type the Client ID of the application registered in Microsoft Entra ID (Azure AD). * **Scope**: Type the custom scope defined for the application in Microsoft Entra ID.. * **Certificate Chain and Private Key (PEM Format)**: The PEM format of the private key and certificate chain created for the integration. This certificate and private key is created by Amelia staff. The public key is given to customers for them to upload/attach to the application defined in Entra ID. The private key and certificate chain is uploaded here, in PEM format. * **Encrypted Private Key Password (if key is encrypted)**: Type the password if the private key is encrypted. * **Obtain Access Token Timeout (seconds)**: The timeout value used when attempting to obtain an access token. If the token is not obtained within this interval an exception is thrown. The gateway will continually try to obtain an access token for the API. Default is 15 seconds. |
</chapter>

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0116-GenPureEngage-Config](B03-06_0116-GenPureEngage-Config.png){width="600"}

*The Configuration Tab*

*The Configuration Tab Elements*


|                                   Element                                   |      Default      |                                                   Description                                                    |
|-----------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------|
| Channel                                                                     | genesyspureengage | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                 |
| Availability Refresh Seconds                                                | 900               | {% include from="B03-06_GateCom-AvailRefresh.md" element-id="B03-06_GateCom-AvailRefresh_snippet" /%}       |
| Escalation Queue                                                            |                   | {% include from="B03-06_GateCom-EscalationQ.md" element-id="B03-06_GateCom-EscalationQ_snippet" /%}         |
| Agents per Node                                                             | 3                 | {% include from="B03-06_GateCom-AgentsPerNode.md" element-id="B03-06_GateCom-AgentsPerNode_snippet" /%}     |
| Support Present Content                                                     | Yes               | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}   |
| Customer Agent Info                                                         | No                | {% include from="B03-06_GateCom-CustAgentInfo.md" element-id="B03-06_GateCom-CustAgentInfo_snippet" /%}     |
| Transfer Conversation Back to Amelia When the Agent Closes the Conversation | No                | {% include from="B03-06_GateCom-TransAgentClose.md" element-id="B03-06_GateCom-TransAgentClose_snippet" /%} |


</chapter>

#### Configure the Additional Tab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional tab elements.
<chapter title="The Additional Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0116-GenPureEngage-Addtl](B03-06_0116-GenPureEngage-Addtl.png){width="600"}

*The Additional Tab*

*The Additional Tab Elements*


|                                 Element                                 |     Default     |                                                                                                                                                                    Description                                                                                                                                                                    |
|-------------------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client Polling Interval (in Seconds)                                    | 1               | The interval at which the Gateway polls PureEngage for new messages for a chat                                                                                                                                                                                                                                                                    |
| Agent Override                                                          | Agent Name Only | Select the agent name Amelia uses to display the agent name within a conversation. Options are None, Agent Name Only, and Lookup Agent by Email. The Lookup Agent by Email option requires that the Genesys agent have a corresponding user account in Amelia with the correct email and permissions. |
| **API Retry**                                                                                                                                                                                                                                                                                                                                                                                                                               |||
| Max Attempts (setting to 1 will disable retry attempts)                 | 5               | {% include from="B03-06_GateCom-API-Retry.md" element-id="B03-06_GateCom-API-Retry_snippet" /%}                                                                                                                                                                                                                                              |
| Back Off Initial Delay Milliseconds                                     | 4200            | {% include from="B03-06_GateCom-API-BackOff-InitDelay.md" element-id="B03-06_GateCom-API-BackOff-InitDelay_snippet" /%}                                                                                                                                                                                                                      |
| Back Off Multiplier (value of 2 yields 100% increase per backoff event) | 2               | {% include from="B03-06_GateCom-API-BackOff-Multi.md" element-id="B03-06_GateCom-API-BackOff-Multi_snippet" /%}                                                                                                                                                                                                                              |

</chapter>

## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}
