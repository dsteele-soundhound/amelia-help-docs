# Gateway Integrations Introduction

## Introduction

The Gateway Integrations workspace connects Amelia to third-party chat software. Amelia can converse through Microsoft Teams, Salesforce, ServiceNow, Alexa, and 28 other tools. These tools can tap into Amelia's interactive cognitive powers to perform tasks. For example, people can reset passwords or buy insurance. Businesses can leverage their existing software to access and interact with Amelia.

Amelia can connect to both chat only tools and agent escalation tools. There's also a gateway to configure connections to Amelia Voice.

Teams, Twilio, and WhatsApp gateways can push notifications and conversations to end users. The Agent Recommendations Framework (ARF) also can generate and transmit agent response recommendations. The framework makes it easy to integrate Amelia's recommendations into external agent platforms.

The Global Gateway Service user group permissions allows you to configure gateways. Amelia's gateway interfaces use easy to understand web pages to configure settings. Each gateway requires configuring the third-party tool and an Amelia gateway interface.

## What You'll Learn

In this topic you'll learn about:

* [Assigning permissions for Gateway Integrations](#Permis)
* [Working with Amelia's Gateway Integrations interfaces](#Inter)
* [Accessing Gateway Integrations](#Accessi)

## Assigning Gateway Integrations Permissions {% #Permis %}

There is no default user role to configure gateways. However, there is a Global Gateway Service user group. This group uses authorities from the Agent and End User roles. The user group has authorities to observe, pickup, start, steal, and transfer conversations. The user group gives Amelia gateways the ability to manage conversations.

The Amelia installation process creates a Gateway Service user (gatewayservice@amelia.com). This user is a member of the Global Gateway Service user group. The user and user group are visible on Amelia instances, if you have authorities to view users and groups. There is no need to create individual user accounts for the user group. As a result, there is no need to modify the Global Gateway Service user group.

## Working with AmeliaGateway Integrations Interfaces {% #Inter %}

All gateways require configuration of the third-party tool and then Amelia gateway interfaces. In addition, some gateways can send proactive notifications or push conversations. And a few escalation gateways use a special framework to integrate Amelia recommendations.

### Amelia User Interfaces

Configuring a third-party tool like Microsoft Teams to work with Amelia is the first step. Once completed, configuring an Amelia gateway is straightforward. In the Gateway Integrations workspace, there are two or three tabs to configure:

* The **Basic tab** configures the application name, ID, and other basic data.

* The **Configuration tab** configures timeouts, timeout messages, and other process-related settings.

* The **Additional Properties** tab configures less used settings like agent transfer and OAuth.

> **Note:** Amelia settings includes any settings unique to each third-party tool. Actual settings will depend on the gateway.

### API, Proactive Notifications, and Push Conversation

Amelia gateways also can use API calls to send proactive notifications and push conversations. Currently, Microsoft Teams, Twilio, and WhatsApp can use these features.

### Amelia Recommendation Framework (ARF)

Genesys PureCloud and Salesforce Escalation gateways use the Agent Recommendations Framework (ARF). The framework adds the ability to generate and transmit agent recommendations dynamically. Integrating Amelia's recommendations into agent platforms is easy.

## Accessing Gateway Integrations {% #Accessi %}

{% include from="B03-06_0101-GatewayIntegrationAccess.md" element-id="B03-06_0101-GatewayIntegrationAccess_snippet" /%}

To learn more about these elements and their features, see the [Gateway Integrations Management](B03-06_0105-Gateway-Integrations-Management.md) topic.


## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}