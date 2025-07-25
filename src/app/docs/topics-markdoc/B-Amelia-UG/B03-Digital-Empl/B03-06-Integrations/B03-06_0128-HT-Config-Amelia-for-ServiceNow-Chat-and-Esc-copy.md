

# How-to: Configure Amelia for ServiceNow Chat and Escalation

## Introduction

[Need ServiceNow Agent Chat introduction like this one for Twilio]

 

Using the Twilio gateway, Amelia can converse using Twilio SMS texts and WhatsApp conversations. SMS stands for Short Message Service, also known as text messaging. SMS is widely used for personal and business communications. For example, you might text directions to meet a friend for lunch. Or receive a text with a restaurant discount offer.

With the Twilio gateway, conversations are a series of texts sent between Amelia and an individual. This uses Amelia's cognitive power, along with the ability to interact with third-party resources. Any interaction done with a web chat interface is possible using SMS texts.

Once you sign up with Twilio and then create an account, you'll use the Twilio account and phone number to interact with Amelia. The Twilio account sends text messages to an Amelia URL endpoint. Once the text is processed, Amelia sends a text in response.

## What You'll Learn

In this topic you'll learn how to:

*  

* [Add and configure the Genesys PureEngage gateway in Amelia](#Configur).

## Requirements

For this gateway configuration, you'll need the following:

*  

* The Messaging Endpoint for Amelia's gateway service.

## Pre-Configuration

 

 

##Configure Amelia {% #Configur %}

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

### Add a Genesys PureEngage Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click Integrations. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the Gateway Integrations panel, click + Add New.

4. From the Conversation Gateways group, click ServiceNow Agent Chat and Escalation.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your ServiceNow Agent Chat and Escalation account.

 

*Figure 1. New Genesys PureEngage Integration Showing Basic Tab*

|                  Element                  |     Default      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                      |                  | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Domain                                    |                  | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Gateway Service                           |                  | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Deploy                                    | No               | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Configuration Locale                      |                  | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Configuration                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |||
| Service URL                               |                  | The base URL of the Genesys PureEngage instance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Context Path                              | /genesys/2/chat/ |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Service Name                              |                  | The service name configured on the PureEngage side.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| API Endpoint Overrides                    |                  | Active only if the Microsoft Client Credentials Auth Enabled setting is set to Yes. This setting allows the Genesys API endpoints to be overridden with customer counterparts. This is typically the last segment of the full API endpoint, the startTyping or stopTyping values. As of this writing, only startTyping and stopTyping are different than those in the Genesys API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Basic Auth Enabled                        | No               | A flag that indicates whether basic auth is enabled on the PureEngage side for calling the PureEngage Chat API. If Yes is selected, provide the username and password used for the Genesys Mobile Engagement Chat API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Microsoft Client Credentials Auth Enabled | No               | Used only for Microsoft MSAL proxy access to the Amelia gateway service. If Yes is selected, provide these additional settings: * Authority: Type the context path to the service. Overrides the Context Path setting. * Client ID: Type the Client ID of the application registered in Microsoft Entra ID (Azure AD). * Scope: Type the custom scope defined for the application in Microsoft Entra ID.. * Certificate Chain and Private Key (PEM Format): The PEM format of the private key and certificate chain created for the integration. This certificate and private key is created by Amelia staff. The public key is given to customers for them to upload/attach to the application defined in Entra ID. The private key and certificate chain is uploaded here, in PEM format. * Encrypted Private Key Password (if key is encrypted): Type the password if the private key is encrypted. * Obtain Access Token Timeout (seconds): The timeout value used when attempting to obtain an access token. If the token is not obtained within this interval an exception is thrown. The gateway will continually try to obtain an access token for the API. Default is 15 seconds. |
[New Genesys PureEngage Integration Basic Tab Elements]


</chapter>

 

#### Configure the Configuration Tab

<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

 

*Figure 2. Configuration Tab*

|                                   Element                                   |      Default      |                                                   Description                                                    |
|-----------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------|
| Channel                                                                     | genesyspureengage | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                 |
| Availability Refresh Seconds                                                | 900               | {% include from="B03-06_GateCom-AvailRefresh.md" element-id="B03-06_GateCom-AvailRefresh_snippet" /%}       |
| Escalation Queue                                                            |                   | {% include from="B03-06_GateCom-EscalationQ.md" element-id="B03-06_GateCom-EscalationQ_snippet" /%}         |
| Agents per Node                                                             | 3                 | {% include from="B03-06_GateCom-AgentsPerNode.md" element-id="B03-06_GateCom-AgentsPerNode_snippet" /%}     |
| Support Present Content                                                     | Yes               | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}   |
| Customer Agent Info                                                         | No                | {% include from="B03-06_GateCom-CustAgentInfo.md" element-id="B03-06_GateCom-CustAgentInfo_snippet" /%}     |
| Transfer Conversation Back to Amelia When the Agent Closes the Conversation | No                | {% include from="B03-06_GateCom-TransAgentClose.md" element-id="B03-06_GateCom-TransAgentClose_snippet" /%} |
[Configuration Tab Elements]


</chapter>

 

#### Configure the Additional Tab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional Properties tab elements.
<chapter title="The Additional Properties Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.
</chapter>

<chapter title="The Additional Properties Tab" collapsible="true" level="5">

| **Element**                              | **Default**      | **Description**                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Client Polling Interval (in Seconds)** | 1                | Interval in seconds for client polling.                                                                                                                                                                                                                                                                                                                          |
| **Agent Override**                       | Agent Name Only  | Select the agent name `Amelia` uses to display the agent name within a conversation. Options: None, Agent Name Only, and Lookup Agent by Email. The Lookup Agent by Email option requires that the Genesys agent has a corresponding user account in `Amelia` with the correct email and permissions.                |
| **API Retry**                            |                  |                                                                                                                                                                                                                                                                                                                                                                  |
| **Max Attempts**                         | 5                | {% include from="B03-06_GateCom-API-Retry.md" element-id="B03-06_GateCom-API-Retry_snippet" /%}                                                                                                                                                                                                                                                             |
| **Back Off Initial Delay Milliseconds**  | 4200             | {% include from="B03-06_GateCom-API-BackOff-InitDelay.md" element-id="B03-06_GateCom-API-BackOff-InitDelay_snippet" /%}                                                                                                                                                                                                                                     |
| **Back Off Multiplier**                  | 2                | {% include from="B03-06_GateCom-API-BackOff-Multi.md" element-id="B03-06_GateCom-API-BackOff-Multi_snippet" /%}                                                                                                                                                                                                                                             |


</chapter>


 

## More Resources

To read about other gateways that you can use with Amelia, see:

* Gateway Library Introduction

* Gateway Integrations Introduction

* Gateway Integrations Management

 

 

 
