# How-to: Configure Amelia for Microsoft Teams

## Introduction

The Microsoft Teams gateway lets Amelia interact with Teams and the Azure Bot framework. You create a Teams app and configure it to send and receive messages with Amelia.

## What You'll Learn

In this topic you'll learn how to:

* [Sign up for a Microsoft Teams developer account](#Sign).
* [Create a Microsoft Teams Azure bot](#Create).
* [Create a Microsoft Teams app for the bot](#Create2).
* [Add cards and other features to messages](#Microsof).
* [Configure proactive notifications and push conversations](#Proactiv).
* [Add and configure the Microsoft Teams gateway in Amelia](#Configur).

## Requirements

For this gateway configuration, you'll need the following:

* An App ID from creating the Azure bot.
* An App Password, also called a Client Secret in the Azure portal.
* The Messaging Endpoint for Amelia's gateway service.

## Pre-Configuration

Amelia's Microsoft Teams gateway uses Microsoft's Azure Bot Framework REST API to integrate with Microsoft Teams. Your first step is to create and register an MS Teams Azure bot. That's done in a client Azure account. Then Microsoft Teams is added as a channel for the new Azure bot service. The bot then sends and receives conversation data through Amelia's REST API endpoint.

Once an Azure bot is created and configured, a Microsoft Teams app needs to be created. Microsoft's [MS Teams documentation](https://docs.microsoft.com/en-us/microsoftteams/upload-custom-apps) describes how to create, publish, and control access rights to their custom apps.

Apps for MS Teams are created using Microsoft Teams [Developer Portal](https://dev.teams.microsoft.com/home). Any user with access to Developer Portal can create an app for  Amelia. However, only users with admin rights can publish the app and make it available to others in the organization, as explained in their documentation.

Messages using the Teams gateway and Azure bot can display buttons, multi-line input forms, images, video, Adaptive Cards, and other features.

The following sections will guide you as you complete these steps.

###Sign Up at the Azure Portal {% #Sign %}

The first step is to create an account, or log in to an account, at the Azure Portal. The portal includes a marketplace and other features. It allows you to create and manage Azure services.

To create an Azure Portal account or to log in:

1. Go to [https://portal.azure.com/#home](https://portal.azure.com/#home).
2. Type your email address in the log in box that appears. Press the Enter key.
3. Type your password in the log in box that appears. Press the Enter key.
4. If needed, use the Microsoft Authenticator app to confirm access.

###Create an Azure Bot {% #Create %}

Once you have logged into the Azure Portal, the home page will display. Follow these steps to create your Azure bot.

![B03-06_0121-MSTeams-Azure-Portal](B03-06_0121-MSTeams-Azure-Portal.png){width="800" style="block"}

*The Azure Portal Home*

From the Azure Portal Home page, click these headings to learn how to create an Azure bot.

<chapter title="Create a Resource" collapsible="true" level="5">

To create an Azure bot, first create a resource:

1. Click the **+ Create a Resource** link at the center left of the Azure Portal home. The Marketplace will display.
2. Type the search term **Azure bot** in the search box near the top of the Marketplace page. Press the Enter key. The search results displays rows of blocks.
3. Click the Azure Bot block in the search results page.

![B03-06_0121-MSTeams-Mktplace-AzureBot](B03-06_0121-MSTeams-Mktplace-AzureBot.png){width="800" style="block"}

*The Marketplace Search Results with Azure Bot Block*

</chapter>

<chapter title="Configure the Azure Bot" collapsible="true" level="5">

When the Azure Bot page displays, configure the new bot. This includes bot name, subscription, pricing on a Basics tab. Then configuring the tenant type and app ID creation type.

To configure the Basics tab:

1. Type a distinct name for the **Bot Handle** field. The name can be overridden in the Teams App for users. However, this Bot Handle value will always refer to the bot in the Azure portal.
2. Fill in the **Subscription** field.
3. Choose or create a **Resource Group** for the new bot.
4. Do NOT click the **Manually Create App ID** link. Let the App ID be created automatically.
5. Click the **Review + Create** button to save the Basics settings. A new panel displays with Type of App and Creation Type settings.

To configure Type of App and Creation Type settings:
1. Select **Single Tenant** from the Type of App dropdown list.
   > As of July 31, 2025, Microsoft no longer supports creating new Mult Tenant apps. {style="note"}
2. Select the **Create new Microsoft App ID radio button** for the Creation Type setting.
3. Click the **Review + Create** button to save these two settings. Your bot details will be validated. A message will display in the  Review + Create tab panel of the Create an Azure Bot screen.
4. Click the **Create** button. The bot Deployment page displays.

![B03-06_0121-MSTeams-BotDeploy](B03-06_0121-MSTeams-BotDeploy.png){width="800" style="block"}

*The Azure Bot Deployment Page*

</chapter>

<chapter title="Connect the Azure Bot to a Channel" collapsible="true" level="5">

Once an Azure bot is created, the next step is to assign the bot to a channel.

1. From the bot Deployment page, in Step 6 above, click the **Go to Resource** button. The bot detail page displays.
2. Click the **Channels** link on the left of the bot detail page.
3. Click the **Teams icon** as the featured channel to add. Once the Teams channel is added, it is safe to delete the default Web Chat channel because it's never used.
4. In the Channels page that displays, click the **Save** button.
5. 
</chapter>

<chapter title="Finish Configuration of the Azure Bot" collapsible="true" level="5">
With the channel assigned to your Azure bot, finish configuration of the Azure bot.

1. Click the **Configuration** link on the left side of the Configuration page.
2. Add the **Messaging Endpoint** for the Amelia instance. In the example below, your.amelia.instance should be the publicly accessible host name for the Amelia instance. Enter the rest of the URL as shown below.
3. Highlight the **Microsoft App ID** value then copy and paste the ID in a safe place. It's used to configure Amelia.

   ![B03-06_0121-MSTeams-BotChannels](B03-06_0121-MSTeams-BotChannels.png){width="800" style="block"}

   *The Azure Bot Channels Page*

   ![B03-06_0121-MSTeams-BotConfig](B03-06_0121-MSTeams-BotConfig.png){width="800" style="block"}

   *The Azure Bot Configuration Page*

</chapter>

<chapter title="Create a New Client Secret" collapsible="true" level="5">

The Client Secret is the next configuration step. The secret is a string used to prove the bot identity when requesting tokens. It also is referred to as an application password.

This is the only opportunity to copy the secret, immediately after it is created. Returning to this page for the secret will require creating a new secret and then updating Amelia with the new secret.

1. From the bot Configuration page, in steps 2 and 3 above, click the **Manage** link to the right of the **Microsoft App ID** label. The Certificates & Secrets page displays.
2. Click the **New Client Secret** link located in the Client Secrets section of the Certificates and Secrets page. An Add a Client Secret pop up appears.
3. Type a **Description** and select when the secret **Expires** in the pop up. Make the Expires date far into the future if the secret needs to change periodically. Or make the Expires date never expire.
   Changing the secret at some future date will require updating the Amelia configuration with the new secret and redeploying.
4. Click the **Add button** in the Add a Client Secret pop up. The Certificates & Secrets page will display.
5. Click the Copy ( ![Copy-Btn-DEB_Toolbar](Copy-Btn-DEB_Toolbar.png){width="25" style="inline"}) icon to the right of the **Value** entry in the Client Secrets section of the page. Paste this value in a safe place along with the Microsoft App Id. You'll use the secret and App Id to configure Amelia.
   
   ![B03-06_0121-MSTeams-BotSecrets](B03-06_0121-MSTeams-BotSecrets.png){width="800" style="block"}

   *The Azure Bot Certificates and Secrets Page*
</chapter>

<chapter title="Assign API Permissions" collapsible="true" level="5">
Your Azure bot needs API permissions to work with the Amelia gateway. Additional optional permissions can be added for push notifications, as described in the next section. Go to the **Azure Active Directory** and then select **App Registrations** for your newly created Teams app. Select the **API Permissions** link on the left. In the App Permissions page, choose the bot from the list. Then open the Manage sub-menu in the left hand menu.

1. Click the **API Permissions** link on the left side menu options.. The API Permissions page displays.
2. Click the **+ Add a Permission** link in the Configured Permissions panel on the API Permissions page.
3. Select **Microsoft Graph** as the API.
4. Click the **Application Permissions** option.
   Do NOT click the Delegated Permissions button. Permissions must be Application Permissions.
5. Type **User.Read.All** in the Select Permissions search box that displays below the Application Permissions option.
6. Click the check box to the left of the User.Read.All permission that displays below the search box.
7. Click the **Add Permissions** button to save these API settings.

   ![B03-06_0121-MSTeams-BotReqAPIPerm](B03-06_0121-MSTeams-BotReqAPIPerm.png){width="800" style="block"}

   *The Azure Bot Request API Permissions Page*

</chapter>

#### Optional Bot Push Notification Permissions

These permissions are only required if you intend to use the Push Notifications functionality when configuring the Amelia gateway, as described below in the Configure Amelia section. The Configure Amelia link also should at the top right corner of this page, in the navigation links.

If enabling Push Notification support, the permissions to assign depends on how you assign the external ID of the associated Teams App. The external app ID is assigned dynamically or manually. Assigning the external app ID dynamically when creating the app is recommended. Manually updating the app manifest.json file to match the external app ID with the Azure Bot ID is not recommended.

Push notification permissions are added with the Request API Permissions page, as described in the first two steps in the section immediately above.

> In the Configured Permissions workspace, the Admin Consent Required column must be set to Yes for all permissions. {style="note"}

![B03-06_0121-MSTeams-BotPushNotifPerm](B03-06_0121-MSTeams-BotPushNotifPerm.png){width="800" style="block"}

*The Azure Bot Push Notification Permissions*

These are the two methods to assign AppID for push notifications:

<chapter title="External App ID Assigned Dynamically (Recommended)" collapsible="true" level="5">
If the app's external id was generated in the Azure Dev Portal when creating the app, then the API permission settings should use the pattern `TeamsAppInstallation.ReadWriteFor{Recipient}.All` where `{Recipient}` is either User, Team, or Chat depending on who will receive notifications.

*Permission Settings*

|              Permission Setting               |                                                          Description                                                           |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| AppCatalog.Read.All                           | {% include from="B03-06_0121-MSTeams-Gateway-PushNotif.md" element-id="B03-06_0121-MSTeams-Gateway-PushNotif_snippet" /%} |
| TeamsAppInstallation.ReadWrite**For**User.All | Required only when enabling push notifications to individual users.                                                            |
| TeamsAppInstallation.ReadWrite**For**Team.All | Required only when enabling push notifications to teams.                                                                       |
| TeamsAppInstallation.ReadWrite**For**Chat.All | Required only when enabling push notifications to group chats.                                                                 |
[Optional Dynamically Assigned Push Notification Permissions]
</chapter>

<chapter title="External App ID Assigned Manually (Not Recommended)" collapsible="true" level="5">
If the app's external id was assigned the same id as the Azure Bot (by manually updating the app manifest.json file), then the API permissions should use the pattern `TeamsAppInstallation.ReadWriteSelfFor{Recipient}.All` where `{Recipient}` is either User, Team, or Chat depending on who will receive notifications.

|                Permission Setting                 |                                                          Description                                                           |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| AppCatalog.Read.All                               | {% include from="B03-06_0121-MSTeams-Gateway-PushNotif.md" element-id="B03-06_0121-MSTeams-Gateway-PushNotif_snippet" /%} |
| TeamsAppInstallation.ReadWrite**SelfFor**User.All | Required only when enabling push notifications to individual users.                                                            |
| TeamsAppInstallation.ReadWrite**SelfFor**Team.All | Required only when enabling push notifications to teams.                                                                       |
| TeamsAppInstallation.ReadWrite**SelfFor**Chat.All | Required only when enabling push notifications to group chats.                                                                 |
[Optional Manually Assigned Push Notification Permissions]
</chapter>


#### Test the Connection to Amelia

Once the bot is created and the Amelia gateway configured, you can test its connection to Amelia. Find the bot using the bot App ID. Then in the bot type any question for Amelia to answer.

#### Release and Deploy the Teams Bot

Until your Teams application for your bot is created and deployed, the bot App ID is the only way to find it. These Microsoft links describe how to release and deploy your bot as a new app in Teams.

> Administrator privileges in Teams are required to deploy apps for an organization. {style="note"}

* [https://docs.microsoft.com/en-us/MicrosoftTeams/manage-apps](https://docs.microsoft.com/en-us/MicrosoftTeams/manage-apps)
* [https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/app-studio-overview](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/app-studio-overview)
* [https://docs.microsoft.com/en-us/microsoftteams/enable-features-office-365](https://docs.microsoft.com/en-us/microsoftteams/enable-features-office-365)

#### Configure OAuth Connections (Optional)

Amelia uses OAuth connections to get user tokens for delegated permissions. This allows API calls on behalf of a Teams user. You configure OAuth connections in Azure. Then attach them to the Azure bot connecting to the Amelia gateway. You will need a separate OAuth connection for each external system that needs a user token for API calls.

When Amelia requests an OAuth token, the user must fill in a login prompt. Their login details authenticate them. A successful login grants permission for Amelia to make API calls on behalf of their logged in account.

Once logged in, Amelia does not request another login when making token requests. The login prompt will display in these situations:

* Logging out will trigger a new login request. Passing the Logout Command OAuth property tells Amelia to cancel the connection.
* Revoking permissions through Azure or Teams also triggers a new login request.
* The OAuth connection includes new permissions for the user to grant.

You can add Azure OAuth connections to your bot. Go to Settings and then use the Configuration workspace.

You can find Microsoft documentation about Azure authentication here: [https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-authentication-basics?view=azure-bot-service-4.0](https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-authentication-basics?view=azure-bot-service-4.0)

Microsoft Azure documentation about OAuth connections is here: [https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-concept-authentication?view=azure-bot-service-4.0](https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-concept-authentication?view=azure-bot-service-4.0)

Here's more information about Amelia, MS Teams, and OAuth configuration.

<chapter title="Request an OAuth User Token from a Builder Flow" collapsible="true" level="5">

BPN processes and Builder flows send integration messages to request user tokens. If the user grants a token, Amelia sets the token as a conversation attribute. Any task or block in a conversation flow can request a token. For example, a greeting block might use a token to identify the user. Or a Script block needing to make an API call may request a user token. If the token is not available as a conversation attribute, Amelia sends an OAuth request.

Gateway responses to token requests are asynchronous. The conversation flow must wait for the delivery of a token. The flow first checks for a conversation attribute with a user token. If a token attribute exists, the flow should delete it before requesting a token. Response times for token requests depend largely on prompting users to log in. If a user has already granted access, Azure returns the token without prompting the user.

Response time for user log ins depends on user actions. For example, a user may never log in with no token delivered to  Amelia. And if a token request generates an error, the gateway won't respond. A BPN process or Builder flow must account for these use cases in their conversation flows.
</chapter>

<chapter title="Integration Messages" collapsible="true" level="5">
OAuth-related integration messages use one or more fields in messages sent to and from Azure.

*OAuth Integration Message Fields*

|           Field            |                                                                                                                                        Description                                                                                                                                         |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| action                     | Required. Specifies a token request. Must be set to TokenRequest which is case insensitive.                                                                                                                                                                                                |
| payload                    | Required. Message payload.                                                                                                                                                                                                                                                                 |
| payload.src                | Required. Token request details.                                                                                                                                                                                                                                                           |
| payload.src.connectionName | Required. The name of the OAuth connection used to obtain the user's token. Must match the connection name OR the alias name for the OAuth connection to use from the configuration. These are set in the Basic tab of the Amelia Microsoft Teams gateway workspace. |
| payload.src.loginText      | Required. Text used to prompt the user to login and grant permissions to Amelia. User will not be prompted if they have already given permission for this connection.                                                                                                |
| payload.src.buttonText     | Required. Title of the button in the log in prompt. User will not be prompted if they have already given permission for this connection.                                                                                                                                                   |
| payload.src.returnAttibute | Optional. The name of the conversation attribute that will be set when the token is delivered to  Amelia. If this field is not present in the src object, the returnAttribute and the resulting conversation attribute will be set to the value of the connectionName field.                |


**Basic Integration Format**

This script shows an integration message format. A BPN Script task or Builder Script block will use this message format to request a specific user token.

The Amelia gateway sets attributes after Azure processes this message with permission granted. The conversation attribute is set to the **returnAttribute** field value. In this example, **graphApiToken** is the returnAttribute field.

```JavaScript

import groovy.json.JsonOutput def jsonString = '''{ "action": "TokenRequest", "payload": { "src": { "connectionName": "OAuthConnection1", "loginText": "Please click the button below to allow me to access your user information in Azure AD.", "buttonText": "Grant Access", "returnAttribute": "graphApiToken" } } }'''; jsonString = JsonOutput.toJson(jsonString); execution.setVariable("tokenRequest", jsonString);

```



**Alternate Message Format: Use an Alias**

When configuring the Amelia gateway, you can set the **connectionName** field to the actual connection name or the alias. Using the alias might make the BPN Script task Builder Script block code more intuitive to read.
```JavaScript

import groovy.json.JsonOutput def jsonString = '''{ "action": "TokenRequest", "payload": { "src": { "connectionName": "graphApiToken", "loginText": "Please click the button below to allow me to access your user information in Azure AD.", "buttonText": "Grant Access", "returnAttribute": "graphApiToken" } } }'''; jsonString = JsonOutput.toJson(jsonString); execution.setVariable("tokenRequest", jsonString);

```



**Alternate Message Format: Use Alias as Return Attribute and Conversation Attribute Name**

When configuring the Amelia gateway, the returnAttribute field is optional. If empty, the returnAttribute and conversation attribute equal the connectionName value.

Use an alias for connectionName and drop the returnAttribute line from the message. The conversation attribute name becomes the connection alias name.

This code is the most concise version of a TokenRequest message.

The Amelia gateway sets attributes after Azure processes this message with permission granted. The conversation attribute is set to the connectionName field value. In this example, graphApiToken is the connectionName field.
```JavaScript

import groovy.json.JsonOutput def jsonString = '''{ "action": "TokenRequest", "payload": { "src": { "connectionName": "graphApiToken", "loginText": "Please click the button below to allow me to access your user information in Azure AD.", "buttonText": "Grant Access" } } }'''; jsonString = JsonOutput.toJson(jsonString); execution.setVariable("tokenRequest", jsonString);

```

</chapter>

###Create a Microsoft Teams App {% #Create2 %}

You can create a Microsoft Teams app once an Azure bot is created. Write down the bot App ID before you create the Teams app.

1. Go to the Teams Developer Portal: [https://dev.teams.microsoft.com/home](https://dev.teams.microsoft.com/home).

2. Click the **Apps** link on the left side of the portal to display the Apps page.

3. Click the **+ New App** button at the top of the page. Or click the Create your first app button in the middle of the page.

4. Type a unique name for the app in the Add App pop up that displays. Click the Add button to create the app.

5. Complete the Basic Information form to configure the Teams app.

   * If you use push notifications, the Teams **App ID** is the **Teams App External ID** setting used when configuring the Amelia gateway.

   * The **Application (client) ID** is the Azure bot Application Id.

6. Click the Branding link on the left. Add an icon and configure color as appropriate.

7. Click the App Features link on the left. Click the Bot feature to add the bot. Then click the **Enter a bot ID** setting and add the Azure bot ID to the app. Specify the actions and scope for the bot:

   * The **Support audio calls** and **Support video calls** settings are not supported.

   * The **Only send notifications (one-way conversations)** setting would only allow Push Notifications to be sent from Amelia, but, it would not allow users to have a conversation with Amelia.

8. Click the Single Sign-On link on the left. Whether or not SSO is used, type this in the Application ID URI field: `api://{application-id}` where `{application-id}` is the Azure bot Application ID.

9. Click the Publish to Org link on the left. Then click the Publish your app button in the center of the page.

   Your app will be submitted for publishing to your organization app catalog. A Teams admin user must then approve and publish the app through the Microsft Teams admin center (out of scope for this documentation).

###Microsoft Teams Features {% #Microsof %}

Messages using the Teams gateway and Azure bot can display buttons, multi-line input forms, images, video, Adaptive Cards, and other features. The Microsoft documentation shows how to use these features.

You can use Builder Script blocks or BPN Script tasks to define the feature. Then display the feature as part of a conversation with Amelia. See the [Script Block topic](B03-04_0120-Script-Block.md) for details about using these blocks.

<chapter title="Single Select Buttons" collapsible="true" level="5">
You can create a single select button or Quick Reply button. Create a BPN Script task or Builder Script block using FormInputData.

Clicking the button returns the button value, not the button name.

Microsoft Teams limits the number of buttons in a single message to six (6).  MS Teams discards any buttons after six as shown in the example above. Use the Single Select Dropdown box to send a message with more than six options.
```JavaScript

def formInputData = formInputDataBuilder.create() .name("carSelectionForm") .formType("form_only") .instructions("What is your favorite car?") .staticSelectionUtterance("") .allowedUserInputs("form_only") .addField() .name("carSelectionField") .fieldType("singleSelection") .postfixedSelectionUtterance("I select the vehicle", "I select the vehicles") .addOption() .name("Ford Escape") .value("fordesc2010") .selected(false) .backToField() .addOption() .name("Lincoln MKX") .value("lincoln") .selected(false) .backToField() .addOption() .name("VW Beetle 1971") .value("vb1971") .selected(false) .backToField() .addOption() .name("VW Brasilia 1977") .value("vr1977") .selected(false) .backToField() .addOption() .name("Volvo") .value("volvo") .selected(false) .backToField() .addOption() .name("BMW") .value("bmw") .selected(false) .backToField() .addOption() .name("Honda Accord") .value("hondaaccord") .selected(false) .backToField() .addOption() .name("Chrysler") .value("chrysler") .selected(false) .backToField() .addOption() .name("Toyota") .value("toyota") .selected(false) .backToField() .addOption() .name("JEEP") .value("jeep") .selected(false) .backToField() .backToForm() .build(); execution.setVariable('formInputData', formInputData.toString())
```
</chapter>

<chapter title="Button Templates" collapsible="true" level="5">
Use a button template to send a mix of button types in a single message to MS Teams.

There are two types of buttons supported in a button template:

* Single select or PostBack buttons return a value to Amelia when clicked.

* URL Buttons open the link in a new browser page when clicked.

To create a button template, use FormInputData.  Set the formType to button_template. Then create multiple fields with multiple options.
```JavaScript
def formInputData = formInputDataBuilder.create() .name("ButtonTemplateExample") .formType("button_template") .instructions("") .staticSelectionUtterance("") .addField() .name("selectionField") .fieldType("singleSelection") .postfixedSelectionUtterance("I want to", "I want to") .addOption() .name("Enroll Now") .value("enroll now") .selected(false) .backToField() .addOption() .name("Save For Later") .value("save for later") .selected(false) .backToField() .backToForm() .addField() .name("linkField") .fieldType("url") .addOption() .name("Visit Amelia.com") .value("https://amelia.com/") .selected(false) .backToField() .addOption() .name("Request a Demo") .value("https://amelia.com/amelia/") .selected(false) .backToField() .backToForm() .build(); execution.setVariable('formInputData', formInputData.toString())
```

</chapter>

<chapter title="URL Buttons" collapsible="true" level="5">
Use a button template to send an array of buttons containing only links to external URLs.

```JavaScript
def formInputData = formInputDataBuilder.create() .name("urlButtonExample") .formType("button_template") .instructions("") .addField() .name("links") .fieldType("url") .addOption() .name("Visit Amelia.com") .value("https://amelia.com/") .backToField() .addOption() .name("Request a Demo") .value("https://amelia.com/amelia/") .backToField() .addOption() .name("Golf Channel") .value("https://www.golfchannel.com/") .backToField() .addOption() .name("View Video") .value("https://videolinks.com/pub/media/videolinks/video/dji.osmo.action.mp4") .backToField() .backToForm() .build(); execution.setVariable('formInputData', formInputData.toString())
```

</chapter>

<chapter title="Single Select Dropdown Box" collapsible="true" level="5">
The autoComplete .fieldType value matches what the user types. Option values display in a dropdown list based upon user input.

```JavaScript
def formInputData = formInputDataBuilder.create() .name("carSelectionForm") .formType("form_only") .instructions("") .staticSelectionUtterance("") .allowedUserInputs("form_only") .addField() .name("carSelectionField") .fieldType("autocomplete") .postfixedSelectionUtterance("I select the vehicle", "I select the vehicles") .addOption() .name("Ford Escape") .value("fordesc2010") .selected(false) .backToField() .addOption() .name("Lincoln MKX") .value("lincoln") .selected(false) .backToField() .addOption() .name("VW Beetle 1971") .value("vb1971") .selected(false) .backToField() .addOption() .name("VW Brasilia 1977") .value("vr1977") .selected(false) .backToField() .addOption() .name("Volvo") .value("volvo") .selected(false) .backToField() .addOption() .name("BMW") .value("bmw") .selected(false) .backToField() .addOption() .name("Honda Accord") .value("hondaaccord") .selected(false) .backToField() .addOption() .name("Chrysler") .value("chrysler") .selected(false) .backToField() .addOption() .name("Toyota") .value("toyota") .selected(false) .backToField() .addOption() .name("JEEP") .value("jeep") .selected(false) .backToField() .backToForm() .build(); execution.setVariable('formInputData', formInputData.toString())
```

</chapter>


<chapter title="Multi Select Dropdown Box" collapsible="true" level="5">
The multipleSelection .fieldType value matches what the user types. The user can select one or more options. Option values display in a dropdown list based upon user input. Value(s) returned is/are a comma-delimited string of user selections.

```JavaScript
def formInputData = formInputDataBuilder.create() .name("carSelectionForm") .formType("form_only") .instructions("") .staticSelectionUtterance("") .allowedUserInputs("form_only") .addField() .name("carSelectionField") .fieldType("multipleSelection") .postfixedSelectionUtterance("I select the vehicle", "I select the vehicles") .addOption() .name("Ford Escape") .value("fordesc2010") .selected(false) .backToField() .addOption() .name("Lincoln MKX") .value("lincoln") .selected(false) .backToField() .addOption() .name("VW Beetle 1971") .value("vb1971") .selected(false) .backToField() .addOption() .name("VW Brasilia 1977") .value("vr1977") .selected(false) .backToField() .addOption() .name("Volvo") .value("volvo") .selected(false) .backToField() .addOption() .name("BMW") .value("bmw") .selected(false) .backToField() .addOption() .name("Honda Accord") .value("hondaaccord") .selected(false) .backToField() .addOption() .name("Chrysler") .value("chrysler") .selected(false) .backToField() .addOption() .name("Toyota") .value("toyota") .selected(false) .backToField() .addOption() .name("JEEP") .value("jeep") .selected(false) .backToField() .backToForm() .build(); execution.setVariable('formInputData', formInputData.toString())
```

</chapter>

<chapter title="Multi-Line Input Forms" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "name": "Multi Line Input Form", "formType": "form_only", "instructions": "Please choose one of the following", "fields": [ { "name": "multiLineInput", "fieldType": "multiLineInput", "data": { "fields": [ { "type": "text", "name": "Text", "value": "", "regex": "", "errorMessage": "Invalid first name", "required": true }, { "type": "date", "name": "Date", "value": "", "regex": "", "dateFormat": "YYYY-MM-DD", "errorMessage": "Invalid birthday", "required": false }, { "type": "number", "name": "Number", "value": "", "regex": "", "errorMessage": "Invalid age", "required": false } ] }, "options": [], "selectionUtteranceMetadata": { "prefixSingle": "I select the field", "prefixMultiple": "I select the fields", "conjunction": "and" } }, { "fieldType": "cancelButton" } ], "selectionUtteranceMetadata": { "staticUtterance": "", "conjunction": "and" }, "allowedUserInputs": "FORM_ONLY" }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("formInputData", jsonString)
```

</chapter>

<chapter title="Present Images" collapsible="true" level="5">
You can use the BPN Present task and Builder Present block to present images to users. See the [Present Block](B03-04_0115-Present-Block.md) topic for details about supported image formats.
</chapter>

<chapter title="External Images" collapsible="true" level="5">
You also can send images hosted on an external media server using an integration message. The media server must be publicly accessible on the internet. In a BPN process or Builder flow, a Script task or block creates the message payload. Then another task or block sends the message to the user interface.

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "Image", "src": "https://www.golfchannel.com/sites/default/files/styles/lede/public/2020/06/12/muirfield_village_1920_14th_hole.jpg" } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Video and Documents by External Links" collapsible="true" level="5">
To display videos, PDFs, and other document types, put them on an accessible internet site. Then send MS Teams a link that points users there. You can send links with a button message (see above) or integration message.

The Video and Document payloads below are special instances of the link subComponent. They're included to be consistent with the custom UI to help promote reusability of BPN code.

**Send Video Link to MS Teams**

The Video subComponent has two parameters, src and title.
```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "Video", "src": "https://videolinks.com/pub/media/videolinks/video/dji.osmo.action.mp4", "title": "View Video" } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```


**Send Document Link to MS Teams**

The Document subComponent has two parameters, href and title.
```JavaScript
import groovy.json.JsonOutput import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "Document", "href": "http://www.pdf995.com/samples/pdf.pdf", "title": "Open PDF Document" } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```


**Send Audio Link to MS Teams**

You can use this code to send an audio link or to send any URL link to MS Teams.  The Link subComponent contains two parameters, linkUrl and title. These create a button in Teams to open any publicly accessible URL.
```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "Link", "linkUrl": "https://am.com/blob-gim/1383627599211/83456/mnm35e.mp3", "title": "Click to Play the Podcast" } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Markdown Text Support" collapsible="true" level="5">
MS Teams supports a limited number of Markdown tags, as shown on [their website](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cdesktop%2Cconnector-html). In a BPN process or Builder flow, use a Script task or Script block to create a Markdown message. Then use a Say task or block to have Amelia speak the text.
```JavaScript
def mkdn = 'Request a _demo_ of the latest **Amelia** release [at this site](https://amelia.com/)' execution.setVariable("markdown", mkdn);
```


Line feeds and bullet points cannot be rendered in a message. Use an integration message then send the message in a conversation flow.
```JavaScript
import groovy.json.JsonOutput // markdown text with line feeds and bullet points must be sent as an integration message // line feeds must be escaped, i.e., \\n and not just \n def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Message", "subComponent": "Markdown", "src": "Here are the _values_ I have **collected** so far: \\n\\n- Address\\n- 123 Main Street\\n- Suite 505\\n- Door number 2\\n- Test Town, NJ 12345" } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="XML/HTML Text Support" collapsible="true" level="5">
You can format messages using a limited number of formatting options. Create the message with a Script block or task. Then use a Say block or task to have Amelia say the message.

**Create XML Message**
```JavaScript
def xml = '<root>Here are the <i>values</i> I have <b>collected</b> so far: <br /><br /><p><ul><li>Address</li><li>123 Main Street</li><li>Suite 505</li><li>Door number 2</li><li>Test Town, NJ 12345</li></ul></p></root>'; execution.setVariable("xml", xml);
```


**HTML Tags in Messages**

MS Teams will accept many HTML tags embedded in a regular text message. Not all HTML tags work, however. It's best to test different tags until the format is acceptable.
```JavaScript
def xml = 'Would you <i>like to see</i> related <strong>Time Off</strong> questions?'; execution.setVariable("xml", xml);
```


**Force Teams to Process Message as XML**

If using a Say task does not produce the correct results, you can force MS Teams to read the message as XML. This may or may not produce the desired results. To force Teams to process the message as XML, send an integration message as shown below.
```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Message", "subComponent": "xml", "src": "<root>Here are the <i>values</i> I have <b>collected</b> so far: <br /><br /><p><ul><li>Address</li><li>123 Main Street</li><li>Suite 505</li><li>Door number 2</li><li>Test Town, NJ 12345</li></ul></p></root>" } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Introduction to Adaptive Cards, Hero Cards, List Cards, Other Cards" collapsible="true" level="5">
MS Teams supports various card structures that can display a variety of information.  See Microsoft's [Cards Reference page](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference) for more information on the types of cards supported by MS Teams.

The MS Teams gateway supports these cards by accepting a JSON payload message. An integration message holds the payload and relays it Teams.  JSON structures vary based on the type of card, as shown below. Your BPN process or Builder flow uses a Script task or block to set up the JSON payload. Then uses a Say task or integration message to deliver the data.

Card forms and buttons return the value of the buttons and forms. Test the return values to ensure you get the values needed for your BPN process or Builder flow.

With the release of Amelia 5.6.27, Adaptive Cards also can be created within the Digital Employees builder tool. See the [Card Block](B03-04_0123-Card-Block.md) topic for details.

The card JSON code must match the examples below. The **subComponent** parameter must be set to **json** (case insensitive). And the **src** parameter must contain the **contentType** and **content** properties.

Although not required, you might minify or compact the JSON content. This reduces possible errors if you copy paste the code into a Script task or block. It removes extra line feed characters, tabs, and spaces, as shown in these examples below.

For these card examples below, also refer to the Microsoft [Cards Reference](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference) and [Adaptive Card Schema](https://adaptivecards.io/explorer/AdaptiveCard.html) pages.

</chapter>

<chapter title="Send an Adaptive Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.card.adaptive","content":{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.0","body":[{"type":"Container","items":[{"type":"TextBlock","text":"Publish Adaptive Card schema","weight":"bolder","size":"medium"},{"type":"ColumnSet","columns":[{"type":"Column","width":"auto","items":[{"type":"Image","url":"https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg","size":"small","style":"person"}]},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"Matt Hidinger","weight":"bolder","wrap":true},{"type":"TextBlock","spacing":"none","text":"Created {{DATE(2017-02-14T06:08:39Z, SHORT)}}","isSubtle":true,"wrap":true}]}]}]},{"type":"Container","items":[{"type":"TextBlock","text":"Now that we have defined the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.","wrap":true},{"type":"FactSet","facts":[{"title":"Board:","value":"Adaptive Card"},{"title":"List:","value":"Backlog"},{"title":"Assigned to:","value":"Matt Hidinger"},{"title":"Due date:","value":"Not set"}]}]}],"actions":[{"type":"Action.ShowCard","title":"Set due date","card":{"type":"AdaptiveCard","body":[{"type":"Input.Date","id":"dueDate"}],"actions":[{"type":"Action.Submit","title":"OK"}]}},{"type":"Action.ShowCard","title":"Comment","card":{"type":"AdaptiveCard","body":[{"type":"Input.Text","id":"comment","isMultiline":true,"placeholder":"Enter your comment"}],"actions":[{"type":"Action.Submit","title":"OK"}]}}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Send a Hero Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.card.hero","content":{"title":"Seattle Center Monorail","subtitle":"Seattle Center Monorail","text":"The Seattle Center Monorail is an elevated train line between Seattle Center (near the Space Needle) and downtown Seattle. It was built for the 1962 Worlds Fair. Its original two trains completed in 1961 are still in service.","images":[{"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg"}],"buttons":[{"type":"openUrl","title":"Official website","value":"https://www.seattlemonorail.com"},{"type":"openUrl","title":"Wikipeda page","value":"https://en.wikipedia.org/wiki/Seattle_Center_Monorail"}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>


<chapter title="Send a List Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.teams.card.list","content":{"title":"Card title","items":[{"type":"file","id":"https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xlsx","title":"Report","subtitle":"teams > new > design","tap":{"type":"imBack","value":"editOnline https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xlsx"}},{"type":"resultItem","icon":"https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-128.png","title":"Trello title","subtitle":"A Trello subtitle","tap":{"type":"openUrl","value":"http://trello.com"}},{"type":"section","title":"Manager"},{"type":"person","id":"JohnDoe@contoso.com","title":"John Doe","subtitle":"Manager","tap":{"type":"imBack","value":"whois JohnDoe@contoso.com"}}],"buttons":[{"type":"imBack","title":"Select","value":"whois"}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Send an Office 365 Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.teams.card.o365connector","content":{"@type":"MessageCard","@context":"http://schema.org/extensions","summary":"John Doe commented on Trello","title":"Project Tango","sections":[{"activityTitle":"John Doe commented","activitySubtitle":"On Project Tango","activityText":"Here are the designs","activityImage":"http://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg"},{"title":"Details","facts":[{"name":"Labels","value":"Designs, redlines"},{"name":"Due date","value":"Dec 7, 2016"},{"name":"Attachments","value":"[final.jpg](http://connectorsdemo.azurewebsites.net/images/WIN14_Jan_04.jpg)"}]},{"title":"Images","images":[{"image":"http://connectorsdemo.azurewebsites.net/images/MicrosoftSurface_024_Cafe_OH-06315_VS_R1c.jpg"},{"image":"http://connectorsdemo.azurewebsites.net/images/WIN12_Scene_01.jpg"},{"image":"http://connectorsdemo.azurewebsites.net/images/WIN12_Anthony_02.jpg"}]}],"potentialAction":[{"@context":"http://schema.org","@type":"ViewAction","name":"View in Trello","target":["https://trello.com/c/1101/"]}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Send a Thumbnail Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.card.thumbnail","content":{"title":"Bender","subtitle":"tale of a robot who dared to love","text":"Bender Bending Rodríguez is a main character in the animated television series Futurama. He was created by series creators Matt Groening and David X. Cohen, and is voiced by John DiMaggio","images":[{"url":"https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png","alt":"Bender Rodríguez"}],"buttons":[{"type":"imBack","title":"Thumbs Up","image":"http://moopz.com/assets_c/2012/06/emoji-thumbs-up-150-thumb-autox125-140616.jpg","value":"I like it"},{"type":"imBack","title":"Thumbs Down","image":"http://yourfaceisstupid.com/wp-content/uploads/2014/08/thumbs-down.png","value":"I don't like it"},{"type":"openUrl","title":"I feel lucky","image":"http://thumb9.shutterstock.com/photos/thumb_large/683806/148441982.jpg","value":"https://www.bing.com/images/search?q=bender&qpvt=bender&qpvt=bender&qpvt=bender&FORM=IGRE"}],"tap":{"type":"imBack","value":"Tapped it!"}}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Send a Rich Text Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.card.adaptive","content":{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.2","body":[{"type":"RichTextBlock","inlines":["This is the first inline. ",{"type":"TextRun","text":"We support colors,","color":"good"},{"type":"TextRun","text":" both regular and subtle. ","isSubtle":true},{"type":"TextRun","text":"Text ","size":"small"},{"type":"TextRun","text":"of ","size":"medium"},{"type":"TextRun","text":"all ","size":"large"},{"type":"TextRun","text":"sizes! ","size":"extraLarge"},{"type":"TextRun","text":"Light weight text. ","weight":"lighter"},{"type":"TextRun","text":"Bold weight text. ","weight":"bolder"},{"type":"TextRun","text":"Highlights. ","highlight":true},{"type":"TextRun","text":"Italics. ","italic":true},{"type":"TextRun","text":"Strikethrough. ","strikethrough":true},{"type":"TextRun","text":"Monospace too!","fontType":"monospace"}]},{"type":"RichTextBlock","inlines":[{"type":"TextRun","text":"Date-Time parsing: {{DATE(2017-02-14T06:08:39Z,LONG)}} {{TIME(2017-02-14T06:08:39Z)}}"}]},{"type":"RichTextBlock","horizontalAlignment":"center","inlines":[{"type":"TextRun","text":"Rich text blocks also support center alignment. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor "}]},{"type":"RichTextBlock","horizontalAlignment":"right","inlines":[{"type":"TextRun","text":"Rich text blocks also support right alignment. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor "}]},{"type":"RichTextBlock","inlines":[]}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Send an Action Set Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.card.adaptive","content":{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.0","body":[{"type":"TextBlock","wrap":true,"text":"Cards can have action sets in the middle of their body."},{"type":"ActionSet","actions":[{"type":"Action.ShowCard","title":"ShowCard","card":{"type":"AdaptiveCard","body":[{"type":"TextBlock","text":"This is a show card"}]}},{"type":"Action.OpenUrl","title":"OpenUrl","url":"https://adaptivecards.io"}]},{"type":"TextBlock","wrap":true,"text":"There are also still actions at the bottom of the card"}],"actions":[{"type":"Action.ShowCard","title":"ShowCard","card":{"type":"AdaptiveCard","body":[{"type":"TextBlock","text":"This is a show card"}]}},{"type":"Action.OpenUrl","title":"OpenUrl","url":"https://adaptivecards.io"}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Send a Clickable Image Card" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": {"contentType":"application/vnd.microsoft.card.adaptive","content":{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.0","body":[{"type":"TextBlock","text":"Click the cat!","weight":"bolder"},{"type":"Image","url":"https://adaptivecards.io/content/cats/1.png","selectAction":{"type":"Action.OpenUrl","title":"cool link","url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}]}} } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

<chapter title="Date Picker" collapsible="true" level="5">

```JavaScript
import groovy.json.JsonOutput def jsonString = '''{ "action": "addChatMessage", "payload": { "componentType": "MessageIntegration", "subComponentType": "Media", "subComponent": "json", "src": { "contentType": "application/vnd.microsoft.card.adaptive", "content": { "$schema": "http://adaptivecards.io/schemas/adaptive-card.json", "type": "AdaptiveCard", "version": "1.0", "body": [ { "type": "TextBlock", "text": "Date Input" }, { "type": "Input.Date", "id": "date", "placeholder": "Enter a date", "value": "2018-09-09" } ], "actions": [ { "type": "Action.Submit", "title": "OK" } ] } } } }''' jsonString = JsonOutput.toJson(jsonString) execution.setVariable("payload", jsonString)
```

</chapter>

###Proactive Notifications and Push Conversations {% #Proactiv %}

The gateway and Amelia include the ability to send push notifications and conversations to users in MS Teams.

#### The Notification API

Only authenticated users in Amelia can send a proactive message to an end user in Teams. The authenticated user's account must have the AUTHORITY_NOTIFICATION_PUSH authority assigned to their Amelia user account

The intended MS Teams gateway must be enabled, deployed, and configured for push notifications. Otherwise, an error message will occur when using the Notification API. Amelia's REST gateway exposes the Notification API to (authenticated) end users wishing to send push notifications and/or conversations to users in Teams.

*Notification API Elements*

|       Element        | Description                                                                                                                                                                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint             | POST /AmeliaRest/api/v1/push/notification/`{gatewayIntegrationId}`                                                                                                                                                                           |
| gatewayIntegrationId | The unique ID for the MS Teams gateway integration which will handle the request, for example: `f3430d11-fea8-4dcf-9eea-e4b271cd0190` This ID is the integration ID displayed on the gateway integration workspace in Amelia's admin UI..    |
| JSON Payload         | JSON payload which includes the message to the recipient along with required attributes necessary to send the message.<code-block> { "message": "The message to send", "pushAttributes": { // endpoint specific attributes } } </code-block> |


#### Push Notification Payloads and Attributes

The Amelia REST gateway push notification payload supports two message types.

*REST Gateway Message Payload Types*

| Payload Type |                                                Description                                                |
|--------------|-----------------------------------------------------------------------------------------------------------|
| Text         | This message type supports plain text, markdown, and XML.                                                 |
| JSON         | This message type supports Adaptive Cards, Hero Cards, and other card types supported by Microsoft Teams. |


The REST gateway push notification payloads support multiple attributes. Attributes are case sensitive.

*REST Gateway Message Payload Attributes*

| Attribute                                              | Description                                                                                                                                                                                                                                                                                                 |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recipient Attributes for Users, Teams, and Group Chats ||
| format                                                 | Specify the message format. Options are text and json. Text is default.                                                                                                                                                                                                                                     |
| textFormat                                             | Specify the format used for text messages. Options are plain, markdown, and xml. Default is plain.                                                                                                                                                                                                          |
| notification                                           | Specify whether notification is true or false. True will generate an alert in the user's Activity feed.                                                                                                                                                                                                     |
| Recipient Attributes for Users                         ||
| uid or upn or email                                    | Identify the user. Options are the user's object ID (uid) in Azure AD, the User Principal Name (upn) in Azure AD, or email address. The email address is deprecated. The uid supersedes all other attributes. It can be used to indicate the user's AAD object ID, the user profile name, or email address. |
| Recipient Attributes for Teams                         ||
| groupId                                                | Required. Specify the group ID identifying the Team. It can be found in the Team link.                                                                                                                                                                                                                      |
| teamId                                                 | Required. Specify the ID of the Team Channel. It can be found in the Team Link or the General Channel link for the Team.                                                                                                                                                                                    |
| channel                                                | Optional. Specify the ID of the channel in the Team. It can be found in the Channel link. If this attribute is not included in the attributes, the General channel for the Team will be used.                                                                                                               |
| Recipient Attributes for Group Chats                   ||
| groupChatId                                            | Required. Specify the chat id of the group conversation. It can be found in the address bar when selecting a group chat from a browser session. It cannot be found with a desktop client.                                                                                                                   |


 

##Configure Amelia {% #Configur %}

After pre-configuration, you're ready to set the new gateway integration to interact with Amelia.

### Add a Microsoft TeamsGateway

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click Integrations. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the Gateway Integrations panel, click + Add New.

4. From the Conversation Gateways group, click Microsoft Teams.

Once the MS Teams gateway workspace appears, configure the Basic, Configuration, and Additional Properties tabs.

#### Configure the Basic Tab

Open the following dropdown to learn about Basic tab elements.

<chapter title="Basic Tab Elements" collapsible="true" level="5">
Use this section to connect Amelia and your Microsoft Teams account.

![B03-06_0121-MSTeams-Basic](B03-06_0121-MSTeams-Basic.png){width="600" style="block"}

*The Basic Tab*

*Basic Tab Elements*


| Element                     | Default                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                        |                                                                   | {% include from="B03-06_GateCom-Name.md" element-id="B03-06_GateCom-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Domain                      |                                                                   | {% include from="B03-06_GateCom-Domain.md" element-id="B03-06_GateCom-Domain_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Gateway Service             |                                                                   | {% include from="B03-06_GateCom-GateSrv.md" element-id="B03-06_GateCom-GateSrv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Deploy                      | No                                                                | {% include from="B03-06_GateCom-Deploy.md" element-id="B03-06_GateCom-Deploy_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Configuration Locale        |                                                                   | {% include from="B03-06_GateCom-ConfigLocale.md" element-id="B03-06_GateCom-ConfigLocale_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Configuration**           |||
| Application ID              |                                                                   | Type the Microsoft Teams Application ID from the bot configuration page in the Azure portal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Application Password        |                                                                   | Type the Microsoft Teams Password, called the Client Secret in the Azure portal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Authentication Base URL     | https://login.microsoftonline.com                                 | Pre-populated. Base URL for Microsoft Teams authentication.**Do not change these values unless directed to do so.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Authentication Service Path | /botframework.com/oauth2/v2.0/token                               | Pre-populated. Authenticated Service URL Path. Do not change these values unless directed to do so. Service path to authenticate the gateway with Azure Bot Services. Default:`/botframework.com/oauth2/v2.0/token` Single Tenant:`/{tenantId}/oauth2/v2.0/token`<br><br> If you created a Multi Tenant Azure Bot, leave the default value. If you created a Single Tenant Azure Bot, replace the path segment, botframework.com, with the tenant id from Azure. Example: `/06c0502c-4f01-11ed-bdc3-0242ac120002/oauth2/v2.0/token`.<br><br> **Please note that after July 31, 2025, Microsoft no longer allows creation of multi tenant bots.** |
| OAuth Scope                 | https://api.botframework.com/.default                             | Pre-populated. OAuth Scope URL.**Do not change these values unless directed to do so.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| API Grant Type              | client_credentials                                                | Pre-Populated. API Grant Type for authentication.**Do not change these values unless directed to do so.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Open ID Metadata URL        | https://login.botframework.com/v1/.well-known/openidconfiguration | Pre-Populated. Open ID Metadata URL.**Do not change these values unless directed to do so.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| OAuth URL                   | https://api.botframework.com                                      | Pre-Populated. OAuth URL.**Do not change these values unless directed to do so.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Token Issue URL             | https://api.botframework.com                                      | Pre-Populated. Token Issuer URL. **Do not change these values unless directed to do so.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Tenant ID                   |                                                                   | Type the tenant ID of the Azure tenant. The Tenant ID can be found in the Azure portal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
[Basic Tab Elements]


</chapter>

#### Configure the Configuration Tab

The Configuration tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Configuration tab elements.

<chapter title="Configuration Tab Elements" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0121-MSTeams-Config](B03-06_0121-MSTeams-Config.png){width="600" style="block"}

*The Configuration Tab*

*Configuration Tab Elements*


| Element                                                                    | Default                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|----------------------------------------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                                                                    | msteams                                              | {% include from="B03-06_GateCom-Channel.md" element-id="B03-06_GateCom-Channel_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Amelia Conversation Request Timeout (seconds)                              | 30                                                   | {% include from="B03-06_GateCom-ConvReqTimeout.md" element-id="B03-06_GateCom-ConvReqTimeout_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Authenticated Users                                                        | No                                                   | {% include from="B03-06_GateCom-AuthUsers.md" element-id="B03-06_GateCom-AuthUsers_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Suppress Amelia's First Utterance                                          | Yes                                                  | {% include from="B03-06_GateCom-SuppressFirstUtter.md" element-id="B03-06_GateCom-SuppressFirstUtter_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Support Present Content                                                    | Yes                                                  | {% include from="B03-06_GateCom-SupportPresent.md" element-id="B03-06_GateCom-SupportPresent_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Chat Settings**                                                          |||
| Enable Chat Timeout                                                        | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTO.md" element-id="B03-06_GateCom-EnableChatTO_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Chat Timeout Seconds                                                       | 900                                                  | {% include from="B03-06_GateCom-ChatTOSeconds.md" element-id="B03-06_GateCom-ChatTOSeconds_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Enable Chat Timeout Message                                                | Yes                                                  | {% include from="B03-06_GateCom-EnableChatTOMsg.md" element-id="B03-06_GateCom-EnableChatTOMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Chat Timeout Message                                                       | This conversation has been closed due to inactivity. | {% include from="B03-06_GateCom-ChatTOMsg.md" element-id="B03-06_GateCom-ChatTOMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Conversation Settings**                                                  |||
| Enable Close Conversation on User Message                                  | Yes                                                  | {% include from="B03-06_GateCom-EnableCloseConv.md" element-id="B03-06_GateCom-EnableCloseConv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| User Close Conversation Message                                            | /close                                               | {% include from="B03-06_GateCom-UserCloseConvMsg.md" element-id="B03-06_GateCom-UserCloseConvMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Enable Conversation Restart on User Message                                | Yes                                                  | {% include from="B03-06_GateCom-EnableConvRestart.md" element-id="B03-06_GateCom-EnableConvRestart_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| User Restart Conversation Message                                          | /restart                                             | {% include from="B03-06_GateCom-UserRestartConvMsg.md" element-id="B03-06_GateCom-UserRestartConvMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Enable Chat Closed Message                                                 | Yes                                                  | {% include from="B03-06_GateCom-EnableChatClosedMsg.md" element-id="B03-06_GateCom-EnableChatClosedMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Chat Closed Message                                                        | This conversation has been closed.                   | {% include from="B03-06_GateCom-ChatClosedMsg.md" element-id="B03-06_GateCom-ChatClosedMsg_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Add User Information to Initial Conversation Attributes                    | No                                                   | {% include from="B03-06_GateCom-AddUserInfoAttr.md" element-id="B03-06_GateCom-AddUserInfoAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| User First Name Attribute                                                  | userFirstName                                        | {% include from="B03-06_GateCom-UserFNameAttr.md" element-id="B03-06_GateCom-UserFNameAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User Last Name Attribute                                                   | userLastName                                         | {% include from="B03-06_GateCom-UserLNameAttr.md" element-id="B03-06_GateCom-UserLNameAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User Email Attribute                                                       | userEmail                                            | {% include from="B03-06_GateCom-UserEmailAttr.md" element-id="B03-06_GateCom-UserEmailAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User External Uid Attribute                                                | userExernalUid                                       | {% include from="B03-06_GateCom-UserIDAttr.md" element-id="B03-06_GateCom-UserIDAttr_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Enable Push Conversations                                                  | No                                                   | {% include from="B03-06_GateCom-PushConv.md" element-id="B03-06_GateCom-PushConv_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Enable Push Notifications                                                  | No                                                   | {% include from="B03-06_GateCom-PushNotice.md" element-id="B03-06_GateCom-PushNotice_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Tenant ID                                                                  |                                                      | If either Enable Push Conversations or Enable Push Notifications is/are toggled on, type the tenant ID of the Azure tenant. The Tenant ID can be found in the Azure portal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Teams App External ID                                                      |                                                      | External ID of the associated Teams app published for the integration. If either Push Conversation or Push Notifications are enabled, the Teams app External ID is required. The External Id can be found in the Microsoft Teams Admin Center.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Push Token Time to Live (days)                                             | 30                                                   | The number of days that tokens obtained from Teams for push notifications will be cached by Amelia, after which the tokens are discarded. Default is 30 days. Minimum setting is 1. If either Push Conversations or Push Notifications are enabled, the gateway will cache the necessary tokens needed to send push notifications to users in Teams. These tokens will be cached for the number of days specified with this property. Once a token is removed, a new token will be obtained on the next push notification attempt or through the user's normal interaction with Amelia through the gateway.                                                                                                                                                                                                                                                                                                                                                         |
| Download Team Members When Adding Amelia Teams App to a Team or Group Chat | Yes                                                  | Enables/Disables the feature that will download and cache user tokens from a team or group chat. These tokens can then be used for subsequent push notifications to these users. This feature allows user tokens to be cached without requiring the users to have a previous conversation with Amelia (having a conversation also caches the user's tokens). Default is Yes. Only enabled for selection if one or both of the Push options are enabled. If enabled, user tokens will be downloaded from Azure when the Amelia MS Teams App associated with the integration is first installed into the team or group chat. Profile information downloaded is limited to the user's name, email address and channel ids necessary to send push notifications. Caching a team roster can be time consuming if the number of users on the team or group is very large. Care should be taken when using this property with very large teams (several hundred+ members). |
[Configuration Tab Elements]

</chapter>

#### Configure the Additional Properties Tab

The Additional Properties tab settings define how the gateway will behave, for example, in a conversation restart. Open the following dropdown to learn about Additional Properties tab elements.

<chapter title="The Additional Properties Tab" collapsible="true" level="5">
The table that follows shows each element, it's defaults and a short description of the setting's behavior. This information will help you further customize your Amelia gateway instance.

![B03-06_0121-MSTeams-Addtl](B03-06_0121-MSTeams-Addtl.png){width="600" style="block"}

*The Additional Properties Tab*

*Additional Properties Tab Elements*

| Element                                                                   | Default                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use Teams Locale Setting for New Conversations                            | Enabled                                         | Toggle to enable or disable this feature. Default is Enabled. If enabled, the gateway will start conversations with Amelia using the user's language setting from the Microsoft Teams client. If translation is enabled in Amelia, Amelia will respond in this language set by this locale. If disabled, no locale information is sent to Amelia when starting conversations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Group and Team Chat                                                       | Enabled                                         | Toggle to enable or disable group and team chats. An MS Teams app can be added to teams and/or group chats. Once added to a team or group chat, a user in the chat could ask Amelia a question by @mentioning the app by name. Once the app is created and installed into the app directory for the organization, it can be added for personal use, groups, or teams chats. For personal one-to-one conversations there is no need to @mention the app; start a conversation by typing in the chat window. For groups and teams, @mention the app by name in order to have Amelia respond. In a group or team chat, the first person in the group or team that @mentions Amelia will be identified as the user that starts the conversation. The transcript will only show the first person to @mention  Amelia. Other mentions will be noted in the transcript as the first person, not other members of the group or team. The transcript will not indicate multiple people were in the conversation. If the Enable Close Conversation on User Message setting is toggled on in the configuration of Amelia Teams gateway, in the Properties tab, anyone in a group or team can close a conversation with the /close command, or what is configured in the User Close Conversation Message setting in the Properties tab. An initial conversation attribute isGroupChat is passed to Amelia when starting the conversation to indicate whether or not the conversation is with a group, team, or an individual. BPNs can use this attribute when responding to the group or individual user. |
| Swap First and Last Name on User Creation                                 | No                                              | If enabled, the user's first and last name will be swapped in Amelia when requesting a conversation. If user auto-creation in Amelia is enabled as well, the user's first and last name will be swapped in their created profile. This feature would be useful if, for example, the user's first and last name in Azure AD in Teams were reversed for some reason.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Escalation Started Message                                                | Enabled                                         | Toggle to enable or disable Amelia sending a message when a conversation is escalated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Agent Transfer Message                                                    | Enabled                                         | Toggle to enable or disable Amelia sending a message when Amelia transfers a conversation or an agent handling an escalation transfers the escalation to another agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Enable Routing Error Message                                              | Yes                                             | Toggle to enable or disable Amelia sending a message back when routing a user message generates an error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Routing Error Message                                                     | There was an error routing your message         | If Enable Routing Error Message is toggled on, type the message to send when routing a user message generates an error. The default message is, "There was an error routing your message."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Enable Present Error Message                                              | Yes                                             | Toggle to enable or disable Amelia sending a message when content to be presented cannot be displayed in a conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Present Error Message                                                     | There was an error presenting the file          | If Enable Present Error Message is toggled on, type the error message for Amelia to send. The default is, "There was an error presenting the file."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Enable Form Echo                                                          | Yes                                             | Toggle to enable or disable Amelia displaying submitted form values in a conversation. This setting is useful for troubleshooting purposes and should be disabled in a production environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Form Echo Message                                                         | The following value(s) have been selected:      | If Enable Form Echo is toggled on, type the message to display above the echoed form values. The default message is, "The following value(s) have been selected:"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Delete Form on Submit                                                     | Yes                                             | Toggle to enable or disable the deletion of a chat window form in a conversation when the form is submitted by the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Default File Upload Description                                           | File from Amelia                                | Type a description to include with the file upload from Amelia to MS Teams. Used only if the metadata for the file sent from Amelia does not contain a description. Default description is, "File from Amelia".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| File Upload Declined Message                                              | File upload declined                            | Used as the message sent back to the user if they decline a file upload from  Amelia. Default is, "File upload declined".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Conversation Start Error Message                                          | An error has occurred starting the conversation | Used as the message Amelia sends to the user if an error occurs at the start of a conversation. Default is, "An error has occurred starting the conversation."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **OAuth Connections**                                                     |||
| Enforce User Login (requires OAuth Connection configured in Azure)        | No                                              | Toggle on or off the ability to enforce user login to speak with  Amelia. If toggled on, OAuth connection settings must be configured. If enabled, the gateway will request the user token for the OAuth connection specified by the OAuth Connection Name before starting a conversation with  Amelia. If the user is authenticated and grants permission, the user's token will be created as an initial conversation attribute in Amelia when the conversation starts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| OAUTH Connection Name (must match name configured in Azure)               |                                                 | The name of the OAuth connection to request the user's token. This MUST match the OAuth Connection Name as specified in Azure. **The name is case sensitive.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| User token Attribute (initial conversation attribute to save user token   | userToken                                       | The conversation variable to hold the unique user token. userToken is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Login Button Title                                                        | Sign in                                         | Define the label for the login button. "Sign In" is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| OAuth Card Text                                                           | Please sign in                                  | Define the text to prompt the user to login. "Please sign in" is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Login Timeout in seconds (OAuth card is removed from Teams after timeout) | 60                                              | Specifies how many seconds the login prompt should be displayed in Teams to allow the user to login. After the timeout period, the prompt is removed (at which point the user will have to type another message to Amelia to be prompted again). Default: 60 seconds Minimum allowed: 30 seconds Maximum allowed: 300 seconds (5 minutes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Logout Command (sent by the user to logout of ALL OAuth connections)      | /logout                                         | The command to use to log out of the session. /logout is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Logged Out Message (sent to the user after a successful logout)           | You have been logged out                        | The message Amelia sends upon logout. "You have been logged out" is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **OAuth Connections**                                                     |||
| + Add OAuth Connection button                                             |                                                 | Click to add additional OAuth Connections to Request User Tokens from Builder flows and BPN processes. Amelia can use these tokens to call external APIs on-behalf-of the user in MS Teams.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Connection Name                                                           |                                                 | The name of the OAuth connection to request the user's token. This MUST match the OAuth Connection Name as specified in Azure (this is case sensitive). ALL connection names MUST be unique from ALL other connection names AND aliases. This includes the OAuth Connection Name specified for conversation start, if enabled. Amelia can request the user's token associated with this OAuth connection by sending an integration message to the gateway as described on the Create a Microsoft Teams Azure Bot page. The login card text, button title and returned attribute name are specified in the integration message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Connection Alias                                                          |                                                 | An alias name in Amelia for the OAuth connection name. This value can be used by a BPN to request the token rather than the connection name. ALL aliases MUST be unique from ALL other connection names AND aliases. This includes the OAuth Connection Name specified for conversation start, if enabled. The OAuth Connection Name MUST match (case sensitive) the configured connection name in Azure. This name is typically set by an Azure admin and may not be as descriptive as a BPN designer would like. Thus, this descriptive alias can be used by the BPNs rather than the connection name. Examples: CONNECTION NAME ALIAS OAuthConnection1 graphApiToken OAuthConnection2 snowflakeApiToken OAuthConnection3 workdayApiToken The Create a Microsoft Teams Azure Bot page describes how to request the user token from a BPN process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
[Additional Properties Tab Elements]

</chapter>

## More Resources

To read about other gateways that you can use with Amelia, see:

* [Gateway Integrations Introduction](B03-06_0101-Gateway-Integrations-Intro.md).

* [Gateway Integrations Management](B03-06_0105-Gateway-Integrations-Management.md).

