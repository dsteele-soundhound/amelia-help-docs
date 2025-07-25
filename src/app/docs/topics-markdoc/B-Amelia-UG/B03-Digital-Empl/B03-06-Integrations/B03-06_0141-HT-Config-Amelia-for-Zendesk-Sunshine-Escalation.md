# How-to: Configure Amelia for Zendesk Sunshine Escalation Gateway

## Introduction

The Zendesk Sunshine Escalation gateway lets Amelia converse with their Sunshine Escalation service. Zendesk Sunshine is a CRM (Customer Relationship Management) platform built on AWS (Amazon Web Services). It features an open and flexible architecture for customization. As a CRM, Zendesk Sunshine provides a unified view of customer interactions. It also includes analytics and reporting features.

First, set up an account with the Zendesk Sunshine service. You'll configure their service and then configure the Amelia Zendesk Sunshine Escalation gateway. This lets you use Amelia's cognitive power. And includes the ability to interact with third-party resources.

## What You'll Learn

In this topic you'll learn about:

* [Configuration requirements for the Amelia gateway](#Requirem).

* [How Zendesk and the Amelia gateway interact](#How).

* [Configuring a Zendesk app](#Create).

* [Configuring a Switchboard integration](#Create2).

* [Creating the Conversations API key](#Create3).

* [Getting the Switchboard ID](#Get).

* [Getting the Agent Workspace ID fields](#Get2).

* [Deleting Conversations API key (optional)](#Delete).

* [Creating a conversation integration](#Create4).

* [Creating a Zendesk Ticket events webhook](#Create5).

* [Creating a Zendesk Ticket events trigger](#Create6).

* [Creating a Zendesk API token (optional)](#Create7).

* [Zendesk Escalation gateway features](#Zendesk).

* [Adding and configuring the Amelia gateway](#Configur).

##Requirements {% #Requirem %}

To configure the Amelia Zendesk Escalation gateway, you'll need the following details:

* App ID to identify your Zendesk account.

* Conversations API Key.

* Conversations Key ID to identify the users of the API.

* Conversations Secret key used as the authentication password.

* Agent Workspace Switchboard integration ID.

* Agent Workspace integration ID.

* Conversations Webhook endpoint URL.

* Sunshine Webhook ID.

* Sunshine Webhook Shared Secret.

* Sunshine App ID.

* Sunshine Key ID.

* Sunshine Secret key.

* Tickets Webhook API Key.

* Zendesk API Token to close conversation (optional).

* Authentication Method and related settings.

* The Messaging Endpoint for Amelia's gateway service.

##How Zendesk and Amelia Gateway Interact {% #How %}

The gateway lets a person use Amelia to talk to an agent who uses the Zendesk Agent Workspace.

* Users first escalate a conversation with Amelia.

* The gateway then uses the Sunshine Conversations API to create a new conversation.

* Next the API passes control to the Zendesk Agent Workspace. When this happens a ticket gets created in Zendesk and an agent picks up the conversation in Zendesk.

* A Zendesk ticket events webhook notifies Amelia that an agent picked up the conversation. The end user and the agent establish a bidirectional communication.

Zendesk relies on the Sunshine Conversations API. However, Zendesk and Sunshine are two distinct components. Some gateway integration elements require Amelia to use Zendesk APIs and webhooks. When a user closes a conversation, Amelia uses the Zendesk ticket API to update the conversation status. Sunshine does not permit closing a default conversation.

Sunshine relies on the idea of one conversation across every channel. Sunshine calls this the default conversation. From the Zendesk perspective, however, it makes sense to have one ticket per issue. The Amelia gateway uses the Zendesk APIs to work around any Sunshine limitations.

When Amelia passes control to Sunshine, Zendesk creates a new ticket and a new user. You can use the user metadata to match and merge tickets created by Amelia passing control. The process to match and merge is out of scope for this documentation. It will depend on how you use Zendesk and any related systems.

These URLs describe and discuss these issues:

&lt;https://support.zendesk.com/hc/en-us/community/posts/6452230615706-Messaging-create-a-new-separate-tickets-for-each-different-issues-reported-in-a-messaging-conversation&gt;

&lt;https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/&gt;

##Pre-Configuration {% #Pre-Conf %}

All configuration tasks require the logged in user to have administrative privileges in Zendesk, unless noted otherwise.

To use the Amelia Zendesk Escalation gateway, you will need to use two webhook URLs. One webhook is for conversation messages with the Zendesk Sunshine service. The other webhook manages ticket events sent to and from the Zendesk ticket API.

The Sunshine conversation webhook URL is:

https://hostname/Amelia/gateway/service/zendesksunshineescalation/sunshine/messages

The Zendesk ticket events webhook is:

https://hostname/Amelia/gateway/service/zendesksunshineescalation/tickets/messages

For both webhooks, **hostname** is the host name used for the Amelia instance. Each webhook also needs a Webhook Secret key. And each key needs to be configured with the Amelia gateway service.

###Create a Zendesk app {% #Create %}

To integrate Zendesk Sunshine Escalation with Amelia, first create a Zendesk application. Their documentation describes the process:

&lt;https://docs.smooch.io/guide/intro-to-account-provisioning/#introduction-to-apps&gt;

&lt;https://docs.smooch.io/guide/creating-and-managing-apps/&gt;

As you create a Zendesk app, save the **App ID** and **Secret** in a safe place. Use these values for the Username / Key and Password / Secret fields in the Amelia gateway. Unless you're using a proxy with a different authentication method and credentials.

###Create a Switchboard integration {% #Create2 %}

The next step is to create an Agent Workspace switchboard integration. The Amelia gateway will need the Agent Workspace Switchboard Integration ID and Agent Workspace Integration ID values. This requires making calls directly to the Sunshine API.

You can refer to the Sunshine postman collection:

&lt;https://docs.smooch.io/guide/postman-collection/&gt;

You also can use curl commands for configuration, as shown below.

###Create the Conversations API Key {% #Create3 %}

Calling the Sunshine API requires using a Conversations API Key. If you do not have one:

1. In the Zendesk application, navigate to the **Administration** section.

2. Then click the**Conversations API** link under the **Apps and Integrations** heading. Both are located on the left side navigation menu.

3. From the Conversations API page that displays, click the Copy buttons for the **App ID**, **Key ID**, and **Secret Key** settings. Then paste these values in a safe place.

You'll need these three values to configure the Amelia gateway. The Key ID and Secret Key also are used as the username and password for Conversations API calls.

###Get the Switchboard ID {% #Get %}

The API call to list switchboards is:

&lt;https://docs.smooch.io/rest/#operation/listSwitchboards&gt;

Next, use a curl command to retrieve the Switchboard ID. The **appId** value is the **App ID** you saved from creating a Conversations API key above.
```
curl --location 'https://api.smooch.io/v2/apps/{appId}/switchboards' --header 'Authorization: Basic ***'
```

This command will return a response similar to this sample response:
```
{ "switchboards": [ { "id": "*************************", &lt;----- this is the switchboard ID "enabled": true, "defaultSwitchboardIntegrationId": "************************" } ] }
```

Use the Switchboard id value to retrieve the Agent Workspace configuration values.

###Get the Agent Workspace ID Fields {% #Get2 %}

The API call to list switchboards is:

&lt;https://docs.smooch.io/rest/#operation/listSwitchboardIntegrations&gt;

Next, use a curl command to retrieve the Switchboard ID. The **appId** value is the **App ID** you saved from creating a Conversations API key above. The **switchboardId** value is the **id** value returned from the curl command above that retrieved the Switchboard ID.
```
curl --location 'https://api.smooch.io/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations' --header 'Authorization: Basic ***'
```

This command will return a response similar to this sample response:
```
{ "switchboardIntegrations": [ { "id": "************************", &lt;---------- this is the Agent Workspace Switchboard Integration ID "name": "zd-agentWorkspace", "integrationId": "************************", &lt;--- this is the Agent Workspace Integration ID "integrationType": "zd:agentWorkspace", "deliverStandbyEvents": false, "nextSwitchboardIntegrationId": "************************" }, { "id": "************************", "name": "zd-answerBot", "integrationId": "************************", "integrationType": "zd:answerBot", "deliverStandbyEvents": false, "nextSwitchboardIntegrationId": "************************" } ] }
```

The response payload should have a name parameter equal to **zd-agentWorkspace**. Copy then paste in a safe place the **id** and **integrationID** values from the payload response.

###Delete Conversations API Key (optional) {% #Delete %}

If you created a new Conversations API key, you might not need to use it for future Sunshine API calls. In that case, you may want to delete the Conversations API key at this point.

###Create a Conversation Integration {% #Create4 %}

The next step is to create a conversation integration. This also uses the Zendesk administration pages and the Apps and Integration features.

1. In the Zendesk application, navigate to the **Administration** section.

2. Then click the**Conversations Integrations** link under the **Apps and Integrations** heading. Both are located on the left side navigation menu.

3. From the Conversations Integrations page that displays, create a new conversation integration.

* Type a name for the **Name** field.

* Copy paste the Sunshine webhook in the **Webhook Endpoint URL** field:

  https://hostname/Amelia/gateway/service/zendesksunshineescalation/sunshine/messages

  where **hostname** is the host name used for the Amelia instance.

<!-- -->

* For the **Webhook Body Data** checkboxes, select **Include Full User** and **Include Full source** options.

* In the **Webhook Subscriptions** section, click to check the **Conversation Message** option. This tells Sunshine to send a webhook event to the Amelia gateway webhook URL endpoint. This will happen when a conversation message triggers the webhook. The webhook will send the message to a Zendesk ticket created with the Sunshine app.

Saving this conversation integration should display a page with the integration **Webhook ID** and **Shared Secret** fields. Click the Copy buttons to save then paste these values in a safe place.

Once the Webhook ID and Shared Secret values are copied, then click the **Next** button below these fields. This displays the App ID page with two tabs at the top, Details and API Keys.

1. Click the **Details** tab. Copy then paste in a safe place the **App ID** value at the top of this tab panel. You'll need this value to configure the Amelia Zendesk Sunshine Escalation gateway.

2. Click the **API Key** tab and create an API key. Copy then paste in a safe place the **Key ID** and **Secret Key** values.

   In the Amelia gateway, the Key ID value is the API Key ID setting. And the Secret Key value is the API Secret Key setting.

Save the new conversation integration.

###Create a Zendesk Ticket Events Webhook {% #Create5 %}

The next step is to create a webhook for Zendesk ticket events. This also uses the Zendesk administration pages and the Apps and Integration features.

1. In the Zendesk application, navigate to the **Administration** section.

2. Then click the**Webhooks** link under the **Apps and Integrations** heading. Both are located on the left side navigation menu.

3. From the Webhooks page that displays, create a new ticket events webhook.

* For the **Select a way to connect** step, click the Trigger or Automation option. Then click the Next button.

* For the **Add Details** step, type a unique webhook name in the Name field. Copy and paste the tickets webhook URL endpoint in the Endpoint URL field:

  https://hostname/Amelia/gateway/service/zendesksunshineescalation/tickets/messages

  where **hostname** is the host name used for the Amelia instance.
* For the **Connect webhook** step, click the **API Key** radio button in the Authentication section. Type **TicketsWebhookApiKey** in the **Header Name** field. For the **Value** field, type a value to use as an authentication secret. Copy then paste in a safe place this value.

  In the Amelia gateway, the **Value** is the Tickets Webhook API Key setting.

Save the new ticket events webhook.

###Create a Zendesk Ticket Events Trigger {% #Create6 %}

The next step is to create a webhook for Zendesk ticket events. This also uses the Zendesk administration pages. However, creating a trigger uses the Objects and Rules and Triggers features.

1. In the Zendesk application, navigate to the **Administration** section.

2. Then click the**Triggers** link under the **Objects and Rules** heading. The Triggers link is part of the Business Rules section. Both links are located on the left side navigation menu.

3. From the Triggers page that displays, create a new trigger for ticket events.

* Type a unique name for the **Trigger Name** field.

* Type a short useful description in the **Description** field.

* Click the **Category** drop down list and select **Notifications**.

* In the **Meet ANY of the following conditions** section, click the **Add Condition** button to create two conditions:

  **Ticket > Ticket Status** and **Changed**

  **Ticket > Assignee** and **Changed**.

The last step is to configure actions that occur if global conditions are satisfied.

In the **Actions** section of the Triggers page, click the **Add Action** button. Then click the drop down lists to select **Notify by > Active webhook** and **Zendesk Ticket Events**. For the **Endpoint** value, use the Amelia gateway tickets webhook endpoint:

https://hostname/Amelia/gateway/service/zendesksunshineescalation/tickets/messages

where **hostname** is the host name used for the Amelia instance.

In the **JSON Body** field, type or copy and paste this payload:
```
{ "userExternalId" : "{{ticket.requester.external_id}}", "ticketId": "{{ticket.id}}", "ticketStatus": "{{ticket.status}}", "agentEmail": "{{ticket.assignee.email}}", "agentFirstName": "{{ticket.assignee.first_name}}", "agentLastName": "{{ticket.assignee.last_name}}", "agentName" : "{{ticket.assignee.name}}", "assignedGroup": "{{ticket.group.name}}" }
```

The last step is to click the **Create** button at the bottom of the Triggers page.

###Create a Zendesk API Token (optional) {% #Create7 %}

The Amelia Zendesk Escalation gateway includes a setting, Mark Zendesk Ticket Solved. This setting lets Amelia mark a Zendesk ticket as Solved for a Zendesk user. If you use this setting, you will need to create a Zendesk API token.

You also will need a Zendesk user account. The user account should have at least Agent privileges in Zendesk.

To create an API key, temporarily grant the Zendesk user admin privileges. This is due to limitations in the Zendesk interfaces. However, to create the API key, it is not a good idea to use an existing user account with admin privileges.

The next step is to create the API key. This also uses the Zendesk administration pages and the Apps and Integration features.

1. Log into Zendesk with the user account.

2. In the Zendesk application, navigate to the **Administration** section.

3. Then click the**Zendesk API** link under the **Apps and Integrations** heading. The Zendesk API link is part of the APIs section. Both are located on the left side navigation menu.

4. From the Zendesk API page that displays, add an API token. In the Create a New Token panel, type a value in the API Token field. If useful, also type an API Token Description.

   Copy and then paste in a safe place the API Token value. In the Amelia gateway, the **API Token** value is the Zendesk API Token setting.

Save the new API token.

Once the API token is created, revoke the admin privileges for the Zendesk user account. These privileges are no longer needed to connect to the Amelia gateway.

##Zendesk Sunshine Escalation Gateway Features {% #Zendesk %}

Once you connect to the Amelia Zendesk Escalation gateway, some features are available.

### Attachments

Attachments work bidirectionally. Whether added by a user in Amelia or in Zendesk, they appear in the Zendesk ticket.

### User Metadata

User metadata is available to the gateway with Builder Escalate block variables and BPN Escalate tasks. These variables are:

* zendeskuser_firstName

* zendeskuser_lastName

* zendeskuser_email

* zendeskuser_locale

* zendeskuser_avatarUrl

These variables can populate the profile section of the Zendesk Create User API call at this URL:

&lt;https://docs.smooch.io/rest/#operation/createUser&gt;

Refer to the Builder [Escalate block](B03-04_0127-Escalation-Block.md) topic for details. The BPN Escalate task works in a similar way as Builder flows.

### Conversation Metadata

In addition to user metadata variables, you also can use conversation metadata variables. Use the **zendeskticket_** prefix to populate conversation information.

These variables can populate the metadata section of the Create Conversation API call and Pass Control API call.

&lt;https://docs.smooch.io/rest/#operation/createConversation&gt;

&lt;https://docs.smooch.io/rest/#operation/passControl&gt;

Data to the right of the zendeskticket_ prefix are attribute names. For example, the variable zendeskticket_priority has an attribute name **priority**.

Conversation metadata has a specific schema to use the zendeskticket_prefix:
```
dataCapture.systemField.&lt;name_of_system_field&gt; : "value" dataCapture.ticketField.&lt;custom_ticket_field_id&gt;: "value"
```

This URL provides more details:

&lt;https://docs.smooch.io/guide/switchboard/&gt;

As of May 2024, these Zendesk system ticket fields are available as attribute names:

* priority

* organization_id

* group_id

* assignee_id

* tags

* brand_id

* requester.name

To send tags, for example, the Builder flow would use a Script block to set a variable:
```
execution.setVariable("zendeskticket_dataCapture.systemField.tags","gift_cards,order_status,exchanges");
```

In this example, the tags are gift_cards, order_status, and exchanges. They would appear in the Tags part of a Zendesk ticket.

### Use a Zendesk Assignee Group as Agent

You can have a Zendesk group assigned as an agent to handle conversations. Enable the **Allow a Zendesk support group to act as an agent** setting in the Amelia gateway. It's located on the Additional Properties tab.

This setting determines whether an assignee group in Zendesk can act as an agent. When Amelia escalates a conversation, it expects an agent to pick up the conversation. However, clients may choose to assign tickets to support groups not individual agents. This setting determines whether a group can pick up or an agent. If a group, Amelia considers the support group's name as the agent name and displays that to the end user. By default, this is disabled.

##Configure Amelia {% #Configur %}

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

### Add a Zendesk Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click **Integrations**. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the **Gateway Integrations** panel, click **+ Add New**.

4. From the **Conversation Gateways** group, click **Zendesk Sunshine Escalation**.

#### Configure the Basic Tab

Open the following drop down to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your **Zendesk Sunshine Escalation** account. Except for the Tickets Webhook API Key, the settings on this tab related to the Sunshine Conversations API configuration.

![B03-06_0141-Zendesk-Escalation-Basic](B03-06_0141-Zendesk-Escalation-Basic.png){width="900"}

*The Basic Tab*

*Basic Tab Elements*

| Element                                    | Default               | Description                                                                                                                                                                                     |
|--------------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                       |                       | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                      |
| Domain                                     |                       | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                  |
| Gateway Service                            |                       | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                |
| Deploy                                     | No                    | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                  |
| Configuration Locale                       |                       | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                      |
| **Configuration**                          |                       |                                                                                                                                                                                                 |
| API Base URL                               | https://api.smooch.io | The base URL of the Zendesk Sunshine instance.                                                                                                                                                  |
| App ID                                     |                       | Type the Zendesk Sunshine Application ID from the bot configuration page in the Azure portal.                                                                                                   |
| Webhook ID                                 |                       | The webhook ID for the Conversation Integration.                                                                                                                                                |
| Webhook Secret                             |                       | Type the webhook secret used to connect to the Conversation Integration service.                                                                                                                |
| API Key ID                                 |                       | The Key ID of the API key for the Conversation Integration                                                                                                                                      |
| API Secret Key                             |                       | The Secret key of the API key for the Conversation Integration.                                                                                                                                 |
| Agent Workspace Switchboard Integration ID |                       | The ID of the Switchboard Integration for Agent Workspace. This is the **id** value returned in a payload from a GET request to the Zendesk Switchboard Integration URL.                        |
| Agent Workspace Integration ID             |                       | The integration ID of the Switchboard Integration for Agent Workspace. This is the **integrationId** value returned in a payload from a GET request to the Zendesk Switchboard Integration URL. |
| Amelia Display Name                        |                       | The display name for Amelia as seen on the Zendesk Ticket.                                                                                                                                      |
| Amelia User Display Name                   |                       | If the default Amelia name is not used, type the name for Amelia to be displayed to users.                                                          |
| Amelia Avatar URL                          |                       | If the default Amelia avatar is not used, type the URL for the avatar used for Amelia.                                                                                    |
| Tickets Webhook API Key                    |                       | The API key for the Tickets Webhook.                                                                                                                                                            |

</chapter>

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0141-Zendesk-Escalation-Config](B03-06_0141-Zendesk-Escalation-Config.png){width="900"}

*The Configuration Tab*

*Configuration Tab Elements*

|                                   Element                                   |          Default          |                                                   Description                                                    |
|-----------------------------------------------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------|
| Channel                                                                     | zendesksunshineescalation | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                 |
| Availability Refresh Seconds                                                | 900                       | {% include from="B03-06_GateCom-AvailRefresh.md" element-id="B03-06_GateCom-AvailRefresh_snippet" /%}       |
| Escalation Queue                                                            |                           | {% include from="B03-06_GateCom-EscalationQ.md" element-id="B03-06_GateCom-EscalationQ_snippet" /%}         |
| Agents per Node                                                             | 3                         | {% include from="B03-06_GateCom-AgentsPerNode.md" element-id="B03-06_GateCom-AgentsPerNode_snippet" /%} .   |
| Support Present Content                                                     | Yes                       | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}   |
| Customized Agent Info                                                       | No                        | {% include from="B03-06_GateCom-CustAgentInfo.md" element-id="B03-06_GateCom-CustAgentInfo_snippet" /%}     |
| Transfer Conversation Back to Amelia when the Agent Closes the Conversation | No                        | {% include from="B03-06_GateCom-TransAgentClose.md" element-id="B03-06_GateCom-TransAgentClose_snippet" /%} |
</chapter>


#### Configure the Additional PropertiesTab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional Properties tab elements.

<chapter title="The Additional Properties Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0141-Zendesk-Escalation-AddtlProps](B03-06_0141-Zendesk-Escalation-AddtlProps.png){width="900"}

*The Additional Tab*

*Additional Tab Elements*

| Element                                                                 | Default                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Initial Message Prefix                                                  | New escalation for            | The prefix for the initial ticket message sent by Amelia to Zendesk. When Amelia escalates a conversation into Zendesk, an initial message is required in order to create a Zendesk ticket. If the escalation is for a user named John Doe then with the default prefix of "New escalation for" the initial ticket message as seen in Zendesk is "New escalation for John Doe".                                                                                                                                                                  |
| Message to send to Zendesk when conversation is closed in Amelia        | Conversation closed in Amelia | An optional message to send from Amelia to Zendesk when the conversation is closed in Amelia.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Allow a Zendesk support group to act as an agent                        | No                            | Determines whether an assignee group in Zendesk can act as an agent from Amelia's perspective. When Amelia escalates a conversation, it expects an agent to pick up the conversation. However, clients may choose to assign tickets to support groups rather than individual agents. This setting determines whether this type of assignment should be considered an agent pickup from Amelia's perspective. If so, Amelia considers the support group's name as the agent name and displays that to the end user. By default, this is disabled. |
| Mark Zendesk ticket Solved when the conversation is closed in Amelia    | No                            | Determines whether Amelia should mark the Zendesk ticket solved when the Amelia conversation is closed. Disabled by default. If this is enabled, then the Zendesk Base URL, Zendesk API User Email, and Zendesk API Token settings are required.                                                                                                                                                                                                                                                                                                 |
| Zendesk Base URL                                                        |                               | Appears only if the Mark Zendesk ticket Solved setting is set to Yes. The base URL of the Zendesk instance                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Zendesk API User Email                                                  |                               | Appears only if the Mark Zendesk ticket Solved setting is set to Yes. The email of the tickets API user.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Zendesk API Token                                                       |                               | Appears only if the Mark Zendesk ticket Solved setting is set to Yes. The API token for the tickets API user.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **API Retry**                                                           |                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Max Attempts (setting to 1 will disable retry attempts)                 | 4                             | {% include from="B03-06_GateCom-API-Retry.md" element-id="B03-06_GateCom-API-Retry_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Back Off Initial Delay Milliseconds                                     | 250                           | {% include from="B03-06_GateCom-API-BackOff-InitDelay.md" element-id="B03-06_GateCom-API-BackOff-InitDelay_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Back Off Multiplier (value of 2 yields 100% increase per backoff event) | 2                             | {% include from="B03-06_GateCom-API-BackOff-Multi.md" element-id="B03-06_GateCom-API-BackOff-Multi_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                             |
</chapter>

## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}

