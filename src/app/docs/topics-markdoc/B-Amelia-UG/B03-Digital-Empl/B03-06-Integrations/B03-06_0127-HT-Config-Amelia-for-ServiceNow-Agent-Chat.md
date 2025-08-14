# How-to: Configure Amelia for ServiceNow Agent Chat

## Introduction

The ServiceNow Agent Chat gateway uses the Virtual Agent functionality in ServiceNow. Amelia's ServiceNow Agent Chat gateway includes the ability to escalate conversations.

Upon escalation, Amelia's ServiceNow Agent Chat gateway initiates a chat with a configured ServiceNow Virtual Agent topic. The chat is initiated using the `/api/sn_va_as_service/bot/integration` bot integration API call. The text of the initial chat must be unique and is specified with the Chat Initiation Message field in Amelia's ServiceNow Agent Chat gateway properties, on the Basic tab.

When the initial unique text is sent to a ServiceNow Virtual Agent, the text identifies the topic to invoke in ServiceNow. For this reason, the Chat Initiation Message must be unique to avoid ambiguity for ServiceNow Virtual Agent to identify the correct topic. Once the correct topic is identified, that topic then connects the chat with a Live Agent in ServiceNow.

Since the Gateway talks to ServiceNow using the ServiceNow Virtual Agent API, ServiceNow sends asynchronous messages to Amelia's ServiceNow Agent Chat gateway on the configured endpoint:

https://&lt;ameliaHost&gt;/Amelia/gateway/service/snowagentchat/virtualagent/api/message

where &lt;ameliaHost&gt; is the URL for the Amelia instance.

Unless an agent joins the chat, Amelia's gateway ignores any messages sent by ServiceNow. Once an agent joins the chat, the end user in Amelia is able to chat with the agent and normal bidirectional communication starts.

In Amelia 4.3.17+, an additional setting and flag Agent Chat Only, found in the Additional Tab of Amelia's ServiceNow Virtual Agent gateway, determines whether or not a ServiceNow Virtual Agent topic acts as an agent. If enabled, Amelia's ServiceNow Virtual Agent gateway handles live agent messages and ignores non-agent messages from ServiceNow. The setting is disabled by default.

Once the conversation is over, either side can close the conversation. If the end user closes the conversation, the gateway indicates the conversation is closed by sending the `END_CONVERSATION` action.

## What You'll Learn

In this topic you'll learn about:

* [Requirements needed for the ServiceNow Agent Chat gateway](#Requirem).
* [Pre-configuration steps for the ServiceNow Agent Chat gateway](#Pre-Conf).
* [Adding ServiceNow plugins and roles](#Add).
* [Configuring requests from Amelia to ServiceNow](#Configur2).
* [Setting up ServiceNow endpoint authentication](#Set).
* [Setting up an escalation topic in ServiceNow](#Set2).
* [Configuring requests from ServiceNow to Amelia](#Configur3).
* [Configuring the ServiceNow agent name](#Configur4).
* [Configuring the ServiceNow agent chat attributes](#Configur5).
* [Linking ServiceNow user accounts](#Link).
* [Supporting applications with multiple bots](#Support).
* [Configuring the ServiceNow Agent Chat gateway in Amelia](#Configur).

##Requirements {% #Requirem %}

For this gateway configuration, you'll need the following details:

* ServiceNow Endpoint Username
* ServiceNow Endpoint Password
* Gateway Endpoint Username
* Gateway Endpoint Password
* VA (Virtual Agent) Bot ID
* Chat Initiation Message
* Service URL to connect Amelia to ServiceNow
* The Messaging Endpoint for Amelia's gateway service.

##Pre-Configuration {% #Pre-Conf %}

There's a number of steps you'll need to follow to configure ServiceNow Agent Chat to work with Amelia.

###Add Plugins and Roles {% #Add %}

Before configuring a ServiceNow agent chat, confirm these ServiceNow plugins are installed:

* Glide Virtual Agent - Id: com.glide.cs.chatbot
* Agent Chat - Id: com.glide.interaction.awa
* Virtual Agent API - Id: sn_va_as_service

These roles also need to be added to the agent chat:

* Admin
* Virtual_agent_admin
* NLU_admin

###Configure Requests from Amelia to ServiceNow {% #Configur2 %}

To configure requests from Amelia to ServiceNow:

1. Using the ServiceNow Navigation filter, go to Scripted Web Services and then Scripted REST APIs.
2. Locate the VA Bot Integration record and open it.
3. In the VA Bot Integration record, confirm the Resource Path is /api/sn_va_as_service/bot/integration.
4. Scroll down the VA Bot Integration record to confirm the Requires Authentication checkbox is selected in the Security tab.
   You also may want to check Requires ACL authorization. This can be done by a ServiceNow administrator and is beyond the scope of this document.

###Set up ServiceNow Endpoint Authentication {% #Set %}

The next step is to create a new dedicated user account to use with the Amelia gateway. Then configure authentication to use with the user account.

#### Create a User Account

To set up a new endpoint authentication in ServiceNow:

1. Using the ServiceNow Navigation filter, go to System Security, then Users and Groups, and then Users.

2. Click a new user to used for the Amelia gateway integration.

   Write down the username and password in a safe location. You'll need them when you configure the Amelia gateway.

#### Configure Authentication

With the user account created, the next step is to configure the authentication process to use with the Amelia gateway.

<chapter title="Basic Authentication" collapsible="true" level="5">

For basic authentication, the new user account username and password will be used to configure the Amelia gateway.

In the Amelia gateway configuration workspace, in the Basic tab, you'll select **BASIC** as the authentication method. The username will be the **Gateway Endpoint Username** setting. The password for the new user account will be the **Gateway Endpoint Password** setting.
</chapter>

<chapter title="OAuth Authentication" collapsible="true" level="5">

If you need OAuth Token authentication for the ServiceNow Endpoint authentication, then please follow the steps in the official ServiceNow documentation.

[https://docs.servicenow.com/bundle/quebec-application-development/page/integrate/inbound-rest/task/t_EnableOAuthWithREST.html](https://docs.servicenow.com/bundle/quebec-application-development/page/integrate/inbound-rest/task/t_EnableOAuthWithREST.html)

[https://docs.servicenow.com/bundle/quebec-platform-administration/page/administer/security/reference/r_OAuthAPIRequestParameters.html](https://docs.servicenow.com/bundle/quebec-platform-administration/page/administer/security/reference/r_OAuthAPIRequestParameters.html)

The OAuth token authentication process follows these steps:

1. Make an entry in the **Application Registries** screen. Copy the **client_id** and **secret** values for these steps below. They're used to generate a new access token.
2. Generate a new access token with a command line tool. The token is used in the Amelia gateway workspace. First, you'll select the **OAUTH_TOKEN** as the authentication method in the workspace. The token will be the **ServiceNow Endpoint Access** setting.
3. Use a command line tool to reset the lifespan of an access token.
4. If the refresh toke expires, repeat the second step above.

These steps are currently valid. Please refer to the ServiceNow OAuth documentation for the latest steps needed.

</chapter>

###Set up an Escalation Topic in ServiceNow {% #Set2 %}

The initial message sent by the Amelia gateway identifies a ServiceNow topic. You can call this topic the Escalation Topic.

To create an escalation topic, using the ServiceNow Navigation filter, go to Collaboration, then Virtual Agent, and then Designer.

<chapter title="Create a Basic Flow for Agent Chat" collapsible="true" level="5">

The basic job of an escalation topic is to connect the chat to a ServiceNow agent. In its simplest form, an escalation topic looks like this:

![B03-06_0127-SNOW-AgentChat-BasicFlow](B03-06_0127-SNOW-AgentChat-BasicFlow.png){width="200" style="block"}

*The Basic Agent Chat Flow*

The Connect To Agent step uses this script:
```JavaScript
(function execute() { vaSystem.connectToAgent(); })()
```
</chapter>

<chapter title="Set Escalation Topic Properties" collapsible="true" level="5">

The Amelia **Chat Initiation Message** gateway setting should match the topic **Name** and **Keywords**. This helps Amelia and ServiceNow match the escalation topic to the gateway. Set Name and Keywords in the **Topic Properties** panel.

For ServiceNow Quebec versions and higher, use intents for topic matching. Create an NLU Model with **NLU Workbench** then **Models**. Then create an intent for the model. Use an intent name that matches the Amelia **Chat Initiation Message** setting. Then configure the Virtual Agent Topic **NLU Model** and **Associated Intent** settings. Set **Keywords** to the name of the associated intent.
</chapter>

<chapter title="Customize with Amelia Builder Flow Variables" collapsible="true" level="5">

A ServiceNow topic may have client-specific logic besides connecting to an agent.Variables passed with Script blocks in Amelia Builder flows can manage this logic. A pre-escalation Script block can set escalation variables. These variables are sent to the topic as context variables. See this ServiceNow document for details about handling variables:

[https://docs.servicenow.com/bundle/xanadu-order-management/page/product/tmt-order-mgt/task/som-create-context-variable.html](https://docs.servicenow.com/bundle/xanadu-order-management/page/product/tmt-order-mgt/task/som-create-context-variable.html)

Because ServiceNow documentation changes with each major release, search for the phrase "define context variables" if the URL above doesn't display content about context variables.

**Context Variable Example**

A Builder Script block might define a variable integrationMessage and populate it:
```JavaScriptexecution.setVariable("integrationMessage", "a test message. This can be anything."); ```

The ServiceNow topic can read this variable in a script:
```JavaScriptvaContext.integrationMessage ```

The Amelia gateway uses the **contextVariables** section of the bot integration API to send variables. See the ServiceNow documentation here for details:

[https://developer.servicenow.com/dev.do#!/reference/api/xanadu/rest/bot-api](https://developer.servicenow.com/dev.do#!/reference/api/xanadu/rest/bot-api)

All escalation variables sent by a Script block are sent to the topic as context variables.

**Overriding the Chat Initiation Message**

Amelia Builder flows can override the chat initiation message. Set the override message with the **chatInitiationMessage** variable. This will replace the **Chat Initiation Message** setting for the Amelia gateway.
```JavaScript
execution.setVariable("chatInitiationMessage", "Custom chat initiation message here"); 
```

Overriding the chat initiation message provides flexibility. For example, to invoke a different escalation topic or a specific chat or domain. It does not interfere with setting up escalation topic properties.
</chapter>

<chapter title="Configure ServiceNow as Secondary Bot to Amelia" collapsible="true" level="5">

In some cases, ServiceNow may act as a secondary bot to  Amelia. Amelia talks to the user as the primary bot. Then escalates a conversation to ServiceNow as a secondary bot if needed.

Picker and TopicPickerControl are the only DefaultPicker messages translated into text format before sending to end users.

There are two ways to configure ServiceNow as a secondary bot.



**Method 1: Allow ServiceNow Virtual Agent to automatically join as an agent**

Set the Chat Initiation Message to 'Hi' or any other phrase. The phrase must match the Pre-built 'Hi' contextual action for Virtual Agent. See this page for details:

[https://docs.servicenow.com/bundle/rome-now-intelligence/page/administer/virtual-agent/reference/contextual-actions.html](https://docs.servicenow.com/bundle/rome-now-intelligence/page/administer/virtual-agent/reference/contextual-actions.html)

Configure the admin UI to allow ServiceNow Virtual Agent to join as an agent. See the Additional properties section of the ServiceNow documentation.

Available since version 5.6.20.

Because ServiceNow documentation changes with each major release, search for the phrase "virtual agent contextual action" if the URL above doesn't display content about contextual actions for virtual agents.



**Method 2 : Invoke an escalation topic**

The gateway escalates the conversation to the escalation topic. However, the topic can now pose as an agent instead of a human agent using Agent Workspace. Then send responses back to Amelia as agent responses.

To invoke an escalation topic:

1. Disable the **Agent Chat Only** flag setting in the Amelia gateway configuration workspace.

2. Create a topic with this flow. The topic should emulate an agent accept action before sending any messages.

   ![B03-06_0127-SNOW-AgentChat-SecondaryBotFlow](B03-06_0127-SNOW-AgentChat-SecondaryBotFlow.png){width="200" style="block"}

   *The Flow for ServiceNow as Secondary Bot*

   The flow includes this script for the **Emulate Agent Accept** step.
   ```JavaScript
   (function execute() { try { var obj = {}; obj.clientSessionId = vaContext.clientSessionId; obj.agentName = 'ServiceNow Bot'; // the name of the 'agent'. // add optional conversation attributes if needed /* var conversationAttributes = {}; conversationAttributes.attributeX = "valueOfAttributeX"; conversationAttributes.attributeY = "valueOfAttributeY"; obj.conversationAttributes = conversationAttributes; */ var requestBody = new global.JSON().encode(obj); //JSON formatted string var secretKey = "secretHere"; // the secret is hardcoded in this example, but it could be obtained through a more secure means. var signatureAlgorithm; // pick one from the various algorithms listed below. signatureAlgorithm = "HmacSHA256"; // signatureAlgorithm = "HmacSHA384"; // signatureAlgorithm = "HmacSHA512/224"; // signatureAlgorithm = "HmacSHA512/256"; var signature = SncAuthentication.encode(requestBody, secretKey, signatureAlgorithm); // prepare post request var baseUrl = "https://3aef8409a9d6.ngrok.io"; // this is the Amelia host var url = baseUrl + "/Amelia/gateway/service/snowagentchat/custom/api/message"; var vaBotId = "12345"; var post = new sn_ws.RESTMessageV2(); post.setRequestBody(requestBody); post.setEndpoint(url); post.setHttpMethod('POST'); post.setRequestHeader("Content-Type", "application/json"); post.setRequestHeader("VaBotId", vaBotId); post.setRequestHeader("X-Hub-Signature", signature); var response = post.execute(); var responseBody = response.haveError() ? response.getErrorMessage() : response.getBody(); var statusCode = response.getStatusCode(); gs.info("response = " + responseBody); gs.info("status code = " + statusCode); } catch (ex) { gs.info("Exception sending agent info. Exception = " + JSON.stringify(ex)); } })() 
   ```
3. In the Amelia gateway configuration workspace, set the **Virtual Agent Chat Close Message** setting equal to the response sent by the virtual agent on conversation close. Including part of the close response works. However, the Amelia gateway must be able to uniquely identify the conversation closing.

It is possible for a topic to escalate a conversation to a live agent, if needed. However, Amelia does not support changing the agent name. The agent name for the conversation will remain unchanged.
</chapter>

###Configure Requests from ServiceNow to Amelia {% #Configur3 %}

To configure sending requests from ServiceNow to the Amelia gateway:

1. Using the ServiceNow Navigation filter, go to the System Web Services then Outbound and then REST Message page.

2. Locate the Va Bot to Bot record and open it.
3. Configure the Endpoint setting to
   https://&lt;ameliaHost&gt;/Amelia/gateway/service/snowagentchat/virtualagent/api/message
   Where &lt;ameliaHost&gt; is the hostname for the Amelia instance.
4. In the Authentication tab section of the Va Bot to Bot record, select Basic as the Authentication Type setting.
   Then click the Search icon to the right of the Basic Auth Profile setting. Click the New button that appears. Type a Name, Username, and Password.
   Save the Username and Password values. They will be used in the Amelia gateway configuration workspace, the Gateway Endpoint Username and the Gateway Endpoint Password settings.
5. Navigate to the ServiceNow HTTP Methods page. You should see a postMessage record. Open it.
6. Configure the postMessage Endpoint setting to:
   https://&lt;ameliaHost&gt;/Amelia/gateway/service/snowagentchat/virtualagent/api/message
   Where &lt;ameliaHost&gt; is the hostname for the Amelia instance.
7. In the Authentication tab section of the postMessage record, select Inherit from Parent option for the Authentication Type setting.
8. In the HTTP Request tab section of the postMessage record, create a new HTTPHeader called VaBotId. Its value must match the Va Bot Id setting in the Amelia gateway configuration workspace.
   If you do not see an option to 'Insert a new row...' it is likely because your current Application isn't set to Virtual Agent API. For Developer instances change this by going to the Settings icon on the top right. Then navigate to Developer and then Application.


###Configure the ServiceNow Agent Name {% #Configur4 %}

Enable the Agent Names and Avatars setting in ServiceNow. This lets the Amelia gateway receive the agent name in incoming ServiceNow payloads.

<chapter title="Configure the Agent Names and Avatars setting" collapsible="true" level="5">

To enable sending agent name to the Amelia gateway:

1. Using the ServiceNow Navigation filter, go to **All** then **Conversational Interfaces** then **Settings**.
2. Select the **Agent Chat** on the left side navigation in the Chat Settings page.
3. Toggle on the **Agent Names and Avatars** setting.
</chapter>

<chapter title="Send agent names to the Amelia custom endpoint" collapsible="true" level="5">
Early versions of the ServiceNow Virtual Agent API did not include agent names. The Amelia gateway includes a custom endpoint to capture agent names. You can write a ServiceNow script to send agent data to the custom endpoint.

**Custom Endpoint**

The custom endpoint is:

https://&lt;ameliaHost&gt;/Amelia/gateway/service/snowagentchat/custom/api/message

where &lt;ameliaHost&gt; is the hostname of the Amelia instance.


**Message Payload and Fields**

Messages sent to this endpoint must be in JSON format with these fields:

* **clientSessionID**: A context variable used as a unique identifier for the current Amelia conversation. It's sent by the Amelia gateway to the Virtual topic. This field is required.

* **agentName**: The name of an agent. This field is optional if the message payload only has conversation attributes.

* **conversationAttributes**: Conversation attributes in key:value pairs for the current conversation identified by clientSessionId. This field is optional if the message payload is used only to pass the agent name.

This is an example payload:
```JavaScript
{"agentName":"Test Agent","clientSessionId":"f1bae2e5-d871-4396-9156-82f164fd990c","conversationAttributes":{"attributeX":"valueOfAttributeX","attributeY":"valueOfAttributeY"}} 
```

**Request Headers**

The endpoint expects the following in the header for the request:

* **VaBotId**: The value of the VaBotId. It is set in the Configure Sending Messages from ServiceNow to Amelia section above. Its value must match the **Va Bot Id** setting in the Amelia gateway configuration workspace.

* **X-Hub-Signature**: The signature of the request payload. It's calculated using the app secret and signature algorithm. You specify this value in the admin UI configuration.

Here is one typical way to calculate the X-Hub-Signature value:
```
JavaScriptvar signature = SncAuthentication.encode(requestBody, appSecret, signatureAlgorithm);
```

**Obtain the clientSessionId**

The clientSessionId is a ServiceNow context variable. Within a Virtual Agent topic script, you can extract this variable with this code:
```JavaScript
vaContext.clientSessionId 
```

Outside of a ServiceNow Virtual Agent topic script, you will need a reference to an **interaction record**. This record identifies the current conversation in ServiceNow. With that reference, the clientSessionId can be extracted with this code:
```JavaScript
var interaction = ... // get the interaction record var contextTable = interaction.getValue('context_table'); var interactionBlobRecord = new GlideRecord(contextTable); interactionBlobRecord.addQuery('sys_id', interaction.getValue('context_document')); interactionBlobRecord.query(); if (interactionBlobRecord.next()) { var jsonBlob = JSON.parse(interactionBlobRecord.getValue('value')); var clientSessionId = jsonBlob.clientsessionid; // clientSessionId is lowercase in the JSON blob! 
```



**Sample Script to Send Agent Name to Amelia Gateway**

This sample ServiceNow script uses the interaction record to send an agent name to the Amelia gateway.

This script shows an archived agent name setting along with custom attributes. The archived setting should be ignored.
```JavaScript
(function execute(inputs, outputs) { var interaction = inputs.interaction; var assignedTo = interaction.getValue('assigned_to'); var interactionRecordId = interaction.getValue('number'); if (assignedTo != null) { var userGR = new GlideRecord('sys_user'); userGR.addQuery('sys_id', assignedTo); userGR.query(); if (userGR.next()) { var agentName = userGR.getValue('name'); var contextTable = interaction.getValue('context_table'); var interactionBlobRecord = new GlideRecord(contextTable); interactionBlobRecord.addQuery('sys_id', interaction.getValue('context_document')); interactionBlobRecord.query(); if (interactionBlobRecord.next()) { var jsonBlob = JSON.parse(interactionBlobRecord.getValue('value')); var clientSessionId = jsonBlob.clientsessionid; // clientSessionId is lowercase in the JSON blob! if (clientSessionId != null) { try { var obj = {}; obj.clientSessionId = clientSessionId; obj.agentName = agentName; // add optional conversation attributes if needed /* var conversationAttributes = {}; conversationAttributes.attributeX = "valueOfAttributeX"; conversationAttributes.attributeY = "valueOfAttributeY"; obj.conversationAttributes = conversationAttributes; */ var requestBody = new global.JSON().encode(obj); //JSON formatted string var secretKey = "secretHere"; // the secret is hardcoded in this example, but it could be obtained through a more secure means. var signatureAlgorithm; // pick one from the various algorithms listed below. signatureAlgorithm = "HmacSHA256"; // signatureAlgorithm = "HmacSHA384"; // signatureAlgorithm = "HmacSHA512/224"; // signatureAlgorithm = "HmacSHA512/256"; var signature = SncAuthentication.encode(requestBody, secretKey, signatureAlgorithm); // prepare post request var baseUrl = "https://531afe03b2ce.ngrok.io"; // this is the Amelia host var url = baseUrl + "/Amelia/gateway/service/snowagentchat/custom/api/message"; var vaBotId = "12345"; var post = new sn_ws.RESTMessageV2(); post.setRequestBody(requestBody); post.setEndpoint(url); post.setHttpMethod('POST'); post.setRequestHeader("Content-Type", "application/json"); post.setRequestHeader("VaBotId", vaBotId); post.setRequestHeader("X-Hub-Signature", signature); var response = post.execute(); var responseBody = response.haveError() ? response.getErrorMessage() : response.getBody(); var statusCode = response.getStatusCode(); gs.info("response = " + responseBody); gs.info("status code = " + statusCode); } catch (ex) { gs.info("Exception sending agent info for " + interactionRecordId + " Exception = " + JSON.stringify(ex)); } } } } } })(inputs, outputs); 
```



**Setting up the Agent Name Flow and Action**

The first step is to create a new action:

1. In ServiceNow, type **Flow Designer** in the Navigation filter. This displays the Flow Designer page.
2. In the Flow Designer, create a new action called AmeliaAgentNameAction. Click the Submit button. A detail page for the AmeliaAgentNameAction action displays.
3. Click the **Create Input** button and then create an input called **Interaction**. Select **Reference.interaction** for the Type. Save the new action.

With the action saved, the next steps create and configure a script for the new action:

1. Click the + (Plus) button in the Action Outline menu, between the Inputs and Outputs links. This adds a new step.
2. Choose the Script step. This displays a Scripting page.
3. Click the **Create Variable** link in the Input Variables panel. Create a variable with the name **interaction**. For the Value field, click the button to the right of the field. Use it to find and select the interaction record. Save the script.
4. Add code to the Script panel. For example, use as a reference the sample code in the section immediately above this section.
5. Save the script. Then click the Publish button to publish the new script and action.

The final steps return you to the Flow Designer to create a new flow. First you'll create a trigger for the new flow and then add an action.

1. In ServiceNow, type **Flow Designer** in the Navigation filter. This displays the Flow Designer page.

2. In the Flow Designer, create a new action called **AmeliaAgentNameFlow**. Select **System User** for the Run As setting. Click the Submit button. A detail page for the AmeliaAgentNameFlow flow displays.

   To add a trigger:
3. On the AmeliaAgentNameFlow page, click the Add a Trigger link. Select the **Created or Updated** option for the **Trigger** setting. A Trigger page displays.

4. On the AmeliaAgentNameFlow Trigger page, click **Interaction** for the **Table** setting.

5. On the AmeliaAgentNameFlow Trigger page, for the **Condition** setting, click the **New Criteria** button twice to create two conditions.

   For the first condition, select **Assigned To** and then **Changes**. For the second condition, select **Assigned To** and **Is Not** and then type **Virtual Agent** as the Is Not value.

   This example uses only the above two conditions. Production environments may choose to have more restrictive conditions. For example, having the trigger run for only specific assignment groups.
6. On the AmeliaAgentNameFlow Trigger page, select **For each unique change** for the **Run Trigger** setting.

7. Click the **Done** button on the Trigger page. Click the Save button to save the new flow. This returns you to the AmeliaAgentNameFlow page.

   To add an action:
8. On the AmeliaAgentNameFlow page, click the **Add an Action, Flow Logic, or Subflow** link. An Actions page displays.

9. On the Actions page, select the**AmeliaAgentNameAction** for the **Action** setting.

10. On the right side of the Actions page, in the Data block, click **Trigger** to display the Interaction Record option. Drag the **Interaction Record** option to the **Interaction** field under the Action setting.

11. Click the Done button to close the Action page. Click the Save button to save the flow.

12. Click the Activate button to activate the flow.

</chapter>


###Configure ServiceNow Agent Chat Attributes {% #Configur5 %}

The Amelia gateway supports a custom endpoint to send conversation attributes. You can send attributes as part of an Agent Name flow. Or at any point in the interactions between Amelia and ServiceNow. It is up to the implementation team to decide.

This is the relevant section of the sample payload shown in the Send agent names to the Amelia custom endpoint topic immediately above:
```JavaScript
var obj = {}; obj.clientSessionId = clientSessionId; // add optional conversation attributes if needed var conversationAttributes = {}; conversationAttributes.attributeX = "valueOfAttributeX"; conversationAttributes.attributeY = "valueOfAttributeY"; obj.conversationAttributes = conversationAttributes; 
```

###Link ServiceNow User Accounts {% #Link %}

Conversations escalated from Amelia to ServiceNow use guest in the agent's chat window. Not an identified ServiceNow user with relevant roles to handle escalations. The Amelia gateway can set the user profile to an existing ServiceNow user. This process also invokes the escalation topic as that ServiceNow user.

The Amelia gateway links ServiceNow user information based on a community thread found here:

[https://www.servicenow.com/community/virtual-agent-nlu-articles/getting-started-with-the-virtual-agent-api/ta-p/2310213](https://www.servicenow.com/community/virtual-agent-nlu-articles/getting-started-with-the-virtual-agent-api/ta-p/2310213)

Setting up user account linking requires these steps:

1. The ServiceNow user needs permissions to invoke the escalation topic.

2. The gateway needs to send a Message Auth verification token.

3. The gateway needs to send the ServiceNow user email when escalating.

<chapter title="Set User Permissions to invoke an escalation topic" collapsible="true" level="5">
Linked ServiceNow user account must have permissions to invoke an escalation topic. The simplest solution is to create a role with access to invoke the escalation topic. Then assign the role to all relevant ServiceNow user accounts. How to grant permissions is beyond the scope of this documentation.
</chapter>
<chapter title="Send Message Auth verification token" collapsible="true" level="5">
Once user permissions are assigned to invoke an escalation topic, the next step is to configure verification tokens. You'll use the ServiceNow Navigation filter to display then configure these tokens.

1. In ServiceNow, type token_verification.list in the Navigation filter. This displays the Token Verifications page.

2. Create a new token for the gateway. Configure the Name as VA Token Verification. Configure the Token to the Message Auth Verification Token setting in the Amelia gateway configuration workspace.

3. In ServiceNow, type message_auth.list in the Navigation filter. This displays the Message Auths page.

4. Create a new token for the gateway. Configure the Name as VA Message Auth. Configure the Provider as VA API. Set the Inbound Message Verification and Outbound Message Verification to the Token setting in Step 2 above.

5. In ServiceNow, type sys_cs_provider.list in the Navigation filter. This displays the Connections page that includes the VA Bot to Bot Provider entry. Click the VA Bot to Bot Provider entry to open it.

6. In the Provider Channel Identity section, click the VA Bot to Bot Provider Application entry. In the Message Auth field, type the name of the Message Auth created in Step 4 above. Select the Message Auth name.

7. Save this configuration.
</chapter>
<chapter title="Send ServiceNow user email when escalating" collapsible="true" level="5">
The final step to link ServiceNow user accounts to an escalation is to create an Amelia Builder flow. The flow includes an Escalation block with a variable to pass to ServiceNow. The variable name must be emailOfUserInServiceNow. See the [Escalation block](B03-04_0127-Escalation-Block.md) topic for details about setting escalation variables.

Here is an example of how to define this variable in an Escalation block.
<code-block lang="JavaScript">
execution.setVariable("emailOfUserInServiceNow", "abel.tuter@example.com");
</code-block>
</chapter>

###Support Applications with Multiple Bots {% #Support %}

The ServiceNow Virtual Agent gateway works with applications that have one bot. However, you can configure the gateway to work with multiple provider applications. This supports multiple primary bots using the Virtual Agent API. It helps you to distinguish between primary bots.

Refer to the ServiceNow documentation here: [https://docs.servicenow.com/bundle/washingtondc-servicenow-platform/page/administer/virtual-agent/concept/configure-multiple-provider-applications.html](https://docs.servicenow.com/bundle/washingtondc-servicenow-platform/page/administer/virtual-agent/concept/configure-multiple-provider-applications.html).

This sample Virtual Agent API request uses the newly created provider application. Pass the Inbound Id in the `appInboundId` parameter of the Virtual Agent API request. Do this for every Virtual Agent API request.
```JavaScript
{ "userId": "adminuser1", "emailId": "admin@example.com", "action": "START_CONVERSATION", "message": { "text": "", "typed": true }, "appInboundId": "custom_1", "contextVariables": { "app_name": "test" } } 
```

Test the configuration by viewing the outbound HTTP logs. Verify that the application called your correct response endpoint.

##Configure Amelia {% #Configur %}

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

### Add a Genesys PureEngage Gateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click Integrations. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the Gateway Integrations panel, click + Add New.

4. From the Conversation Gateways group, click ServiceNow Agent Chat.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.
<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your ServiceNow Agent Chat account.

![B03-06_0127-SNowAgtChat-Basic](B03-06_0127-SNowAgtChat-Basic.png){width="900" style="block"}

*The Basic Tab*

*Basic Tab Elements*

| Element                           | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                              |         | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                     |
| Domain                            |         | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                 |
| Gateway Service                   |         | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                               |
| Deploy                            | No      | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                 |
| Configuration Locale              |         | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                     |
| Configuration                     |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Service URL                       |         | Type the ServiceNow URL Amelia will use to connect with the ServiceNow gateway                                                                                                                                                                                                                                                                                                                                                                                                 |
| Va Bot ID                         |         | Type the bot ID for the ServiceNow Virtual Agent (VA). The ID must match the ID configured in the ServiceNow outbound REST message header.                                                                                                                                                                                                                                                                                                                                     |
| Gateway Endpoint Username         |         | Type the endpoint username for Amelia to use with the ServiceNow Virtual Agent gateway. The username is only for authentication purposes and represents a logical user, not a real user configured with  Amelia.                                                                                                                                                                                                                                                                |
| Gateway Endpoint Password         |         | Type the endpoint password for Amelia to use with the ServiceNow Virtual Agent gateway. The password is only for authentication purposes and represents a logical user, not a real user configured with  Amelia.                                                                                                                                                                                                                                                                |
| App Secret                        |         | A shared secret between the Gateway configuration and the ServiceNow Agent Name flow. If the Agent Name Flow is not used, this can be set to any random value.                                                                                                                                                                                                                                                                                                                 |
| Signature Algorithm               |         | The signature algorithm used to calculate the payload signature in the topic script. Supported algorithms are HmacSHA256, HmacSHA384, HmacSHA512/224, and HmacSHA512/256. This value must match any ServiceNow topic flow script that defines the algorithm to use.                                                                                                                                                                                                            |
| ServiceNow Authentication Method  | BASIC   | Options are Basic, OAuth_Token, and OAuth_Resource_Owner_Password_Credentials.                                                                                                                                                                                                                                                                                                                                                                                                 |
| ServiceNowEndpoint Username       |         | Displays if Basic or OAuth_Resource_Owner_Password_Credentials ServiceNow Authentication Method is selected. Type the ServiceNow endpoint username. The username for Amelia to use with the ServiceNow Virtual Agent gateway connected with the ServiceNow Virtual Agent API. The username belongs to a real ServiceNow user. For domain separated instances in ServiceNow, refer to configuration details in the ServiceNow Agent Chat and Domain Separation note.            |
| ServiceNow Endpoint Password      |         | Displays if Basic or OAuth_Resource_Owner_Password_Credentials ServiceNow ServiceNow Authentication Method is selected. Type the ServiceNow endpoint password. The password for Amelia to use with the ServiceNow Virtual Agent gateway connected with the ServiceNow Virtual Agent API. The password belongs to a real ServiceNow user. For domain separated instances in ServiceNow, refer to configuration details in the ServiceNow Agent Chat and Domain Separation note. |
| ServiceNow Endpoint Access Token  |         | Displays if OAuth_Token ServiceNow Authentication Method is selected.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Client ID                         |         | Displays if OAuth_Resource_Owner_Password_Credentials ServiceNow ServiceNow Authentication Method is selected. The client ID of the OAuth Client configured in ServiceNow.                                                                                                                                                                                                                                                                                                     |
| Client Secret                     |         | Displays if OAuth_Resource_Owner_Password_Credentials ServiceNow ServiceNow Authentication Method is selected. The client secret of the OAuth Client configured in ServiceNow.                                                                                                                                                                                                                                                                                                 |
| Refresh Token Lifespan in Seconds | 0       | Displays if OAuth_Resource_Owner_Password_Credentials ServiceNow ServiceNow Authentication Method is selected. The refresh token lifespan (in seconds) of the OAuth Client configured in ServiceNow.                                                                                                                                                                                                                                                                           |
| Chat Initiation Method            |         | Type the chat initiation message. This message must be unique and unambiguous so that Virtual Agent can uniquely identify the topic used to initiate the chat.                                                                                                                                                                                                                                                                                                                 |



</chapter>


#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.
<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0127-SNowAgtChat-Config](B03-06_0127-SNowAgtChat-Config.png){width="900" style="block"}

*The Configuration Tab*

*Configuration Tab Elements*

| Element                                                                     | Default       | Description                                                                                                      |
|-----------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------|
| Channel                                                                     | snowagentchat | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                 |
| Availability Refresh Seconds                                                | 900           | {% include from="B03-06_GateCom-AvailRefresh.md" element-id="B03-06_GateCom-AvailRefresh_snippet" /%}       |
| Escalation Queue                                                            |               | {% include from="B03-06_GateCom-EscalationQ.md" element-id="B03-06_GateCom-EscalationQ_snippet" /%}         |
| Agents per Node                                                             | 3             | {% include from="B03-06_GateCom-AgentsPerNode.md" element-id="B03-06_GateCom-AgentsPerNode_snippet" /%}     |
| Support Present Content                                                     | Yes           | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}   |
| Customer Agent Info                                                         | No            | {% include from="B03-06_GateCom-CustAgentInfo.md" element-id="B03-06_GateCom-CustAgentInfo_snippet" /%}     |
| Transfer Conversation Back to Amelia When the Agent Closes the Conversation | No            | {% include from="B03-06_GateCom-TransAgentClose.md" element-id="B03-06_GateCom-TransAgentClose_snippet" /%} |


</chapter>

#### Configure the Additional Tab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional Properties tab elements.
<chapter title="The Additional Properties Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0129-SNowVirtAgt-AddtlProps](B03-06_0129-SNowVirtAgt-AddtlProps.png){width="900" style="block"}

*The The Additional Properties Tab*

*Additional Properties Tab Elements*

| Element                                                                           | Default                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------------------------------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Agent Chat Only                                                                   | No                         | If enabled, this gateway integration is used only for chatting with a human agent. Non-agent messages from ServiceNow will be ignored. If disabled, the Virtual Agent Topic itself can pose as an agent. See second bot configuration above.                                                                                                                                                                                                                                                                                                                                  |
| Virtual Agent Chat Close Message                                                  | The conversation has ended | Used when you disable the Agent Chat Only setting. This field helps the gateway identify conversations closed from the ServiceNow side. Typically, Virtual Agent sends a common conversation close message for all closed conversations. That message, or a unique substring of it, should be set to this property. For example, if ServiceNow sends "The conversation has ended. If you need help again, type hi." on a closed conversation, then it may suffice to set this field to "The conversation has ended".                                                          |
| Message Auth Verification Token for VA Bot to Bot Provider Application (optional) |                            | An optional verification token that needs to be supplied if ServiceNow user account linking is desired. Available in Amelia 5.2.11, 5.6.6, and above.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Allow ServiceNow Virtual Agent to join as an Agent                                | No                         | If enabled, ServiceNow Virtual Agent will automatically join as an agent for the escalated conversation. The end user will then be able to converse with ServiceNow Virtual Agent.                                                                                                                                                                                                                                                                                                                                                                                            |
| Display Name for ServiceNow Virtual Agent                                         | ServiceNow Virtual Agent   | Displays if Allow ServiceNow Virtual Agent to join as an Agent setting is set to Yes. The display name for ServiceNow Virtual Agent, as seen by the end user in  Amelia.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Send Conversation History to ServiceNow Virtual Agent                             | No                         | Displays if Allow ServiceNow Virtual Agent to join as an Agent setting is set to Yes. When you configure the ServiceNow Virtual Agent to join as an agent using the relevant flag above, this setting determines if the gateway service should immediately send it the conversation history. By default, it is disabled, so that virtual agent does not get confused by a large blob of the history text. This can potentially cause the virtual agent to trigger undesired intents. The history is sent only when virtual agent transfers the conversation to a human agent. |
| App Inbound ID                                                                    |                            | Multiple primary bots can use the Virtual Agent API to connect with the Amelia gateway. ServiceNow requires each API request to specify a unique`appInboundId` field. Configure a separate provider in ServiceNow, then use this field to set a unique app Inbound ID value.                                                                                                                                                                                                                                                                                                  |
[Additional PropertiesTab Elements]


</chapter>


## More Resources

To read about other gateways that you can use with Amelia, see:

* [Gateway Integrations Introduction](B03-06_0101-Gateway-Integrations-Intro.md).
* [Gateway Integrations Management](B03-06_0105-Gateway-Integrations-Management.md).

