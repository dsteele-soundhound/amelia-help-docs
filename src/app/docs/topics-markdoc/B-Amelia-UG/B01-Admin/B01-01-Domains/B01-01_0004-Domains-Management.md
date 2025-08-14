

# Domains Management

## Introduction

To use the Domains workspace, you must understand its features and where to find them. Domains organize users, groups, roles, escalation teams, and other systems. The global domain should be the parent to one or more child domains. This allows future changes without affecting the global domain settings. See our [Domains Introduction](B01-01_0002-Domains-Intro.md) topic for details.

## Accessing the Domains Workspace

{% include from="B01-01_0002-DomainsAccess.md" element-id="B01-01_0002-DomainsAccess_snippet" /%}

![B01-00_0002-Admin-Domains](B01-00_0002-Admin-Domains.png){width="900" style="block"}

*The Domains Left-Edge Button and Panel*

## What You'll Learn

In this topic you'll learn how to:

* Use the Domains workspace.

* Add a Domain.

* Search for a Domain.

* Edit a Domain.

## Use the Domains Workspace

The Domains workspace includes tools to create and manage web actions.

### The Domains Panel

This panel appears between the left edge navigation links and the Digital Employees Home workspace. The panel displays a list of domains.

To toggle open the Domains panel, click the Administration link at the top left. Then click the Domains button that appears on the left edge. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Domains panel.

![B01-01_0004-Domains-Panel](B01-01_0004-Domains-Panel.png){width="400" style="block"}

*The Domains Panel*

*Domains Panel Elements*

| Element  |        Description         |
|----------|----------------------------|
| +Add New | Click to add a new domain. |


### The Domains Workspace {id="the-b01-admin-domains-feature-workspace_1"}

The Domains workspace has these elements:

* A top panel with buttons to save the domain configuration.

* A workspace to define the domain.

#### The Top Panel

The top panel includes buttons to perform basic actions.

*Domains Top Panel Elements*

| Element |                         Description                          |
|---------|--------------------------------------------------------------|
| Save    | Click to save a new certificate or changes to a certificate. |


#### The Domains Workspace

Click these links to learn about the settings in each of these tabs.

<chapter title="Basic Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Basic](B01-01_0004-Domains-Basic.png){width="900" style="block"}

*The Domains Workspace Basic Tab*

*Domains Workspace Basic Tab Settings*

|         Setting          |                                                                                                                                                                                                Description                                                                                                                                                                                                |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                     | Type a unique name for the domain.                                                                                                                                                                                                                                                                                                                                                                        |
| Code                     | Type a code name for the domain. Do not use spaces.                                                                                                                                                                                                                                                                                                                                                       |
| Parent Domain            | If appropriate, select the parent domain.                                                                                                                                                                                                                                                                                                                                                                 |
| Template                 | Used for creating domains with a content pack. Once a domain is saved the first time, this option is not visible.                                                                                                                                                                                                                                                                                         |
| Authentication Policy    | Select an authentication policy.                                                                                                                                                                                                                                                                                                                                                                          |
| Language Pack            | Select the appropriate language pack to use for the domain.                                                                                                                                                                                                                                                                                                                                               |
| Timezone                 | Select the time zone to use for the domain.                                                                                                                                                                                                                                                                                                                                                               |
| Enable Domain            | Select whether the domain is enabled and active. Default is No.                                                                                                                                                                                                                                                                                                                                           |
| Hide Domain              | Select whether the domain is visible only to users with global access permissions. Default is No. Selecting this setting hides the domain name on any domain selection screen for users without global access permissions. However, conversations are allowed if the Allow Conversations setting is selected and the domain is directly called with a URL query string or custom user interface settings. |
| Is Builder Domain?       | Select whether the domain is available to the Digital Employees builder.                                                                                                                                                                                                                                                                                                               |
| Allow Conversations      | Select whether to allow conversations for this domain.                                                                                                                                                                                                                                                                                                                                                    |
| Allow "Run the Workflow" | Select whether to allow Digital Employees builder flows in this domain to use a Run the Workflow block. The Run the Workflow block allows subprocesses to be called within a flow.                                                                                                                                                                                                     |


</chapter>

<chapter title="Configuration Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Config](B01-01_0004-Domains-Config.png){width="900" style="block"}

*The Domains Workspace Configuration Tab*

*Domains Workspace Configuration Tab Settings*

| Setting                                    | Description                                                                                                                                                                                                                                                    |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Configure                                  |                                                                                                                                                                                                                                                                |
| Amelia User                                | To use a name other than Amelia in chat interfaces, select a user account. To change the Amelia name, first create a user account and configure it with a different name. Then select the new user account with this setting.                                  |
| Orchestrator User                          | Type the user account name to display. Then select the account to use with Orchestrator.                                                                                                                                          |
| Default Escalation Queue                   | Select a default escalation queue. Escalation queues are set in the Administration workspace. A default escalation queue must be selected for escalations to work.                                                                       |
| Integration API Key                        | If appropriate, type the Integration API key to use with this domain.                                                                                                                                                               |
| AI Ops Client Code                         | If appropriate, type the AI Ops client code to use with this domain.                                                                                                                                                                                           |
| Orchestrator Config                        | If appropriate, select the Orchestrator configuration.                                                                                                                                                                            |
| 1RPA Instance                              | If appropriate, select the 1RPA instance to use with this domain.                                                                                                                                                                                              |
| Digital Worker Instance                    | If appropriate, se;ect tje Digital Worker instance to use with this domain.                                                                                                                                                                                    |
| Virtual Hosts                              | If appropriate, select one or more virtual hosts to use with this domain.                                                                                                                                                                                      |
| Domain Switching                           |                                                                                                                                                                                                                                                                |
| Switch Domain During Conversation          | Select whether to allow Amelia to switch into this domain based upon an active conversation context.                                                                                                                                                           |
| Switch Out from Domain During Conversation | Select whether to allow Amelia to switch out of this domain based upon an active conversation context.                                                                                                                                                         |
| NPS Collection                             |                                                                                                                                                                                                                                                                |
| Allow Amelia to Collect Feedback from User | Select whether to enable the collection of data needed to calculate a Net Promoter Score (NPS). NPS measures user satisfaction. If enabled, Amelia will display thumbs up and thumbs down icons for user input in the core user interfaces, not the custom UI. |
| Anonymous Access                           |                                                                                                                                                                                                                                                                |
| Allow Access                               | Select whether to allow anonymous user access to interact with  Amelia.                                                                                                                                                                                         |
| Allow View                                 | Select whether to allow whether to allow anonymous user access to view conversations. Or require use authentication first.                                                                                                                                     |
| Avatar                                     |                                                                                                                                                                                                                                                                |
| Type                                       | Select the type of Amelia avatar to use for this domain.                                                                                                                                                                                                       |
| Avatar                                     | For the avatar type, select the default avatar to use with this domain.                                                                                                                                                                                        |
| Header Background                          | Either click the Upload File button to upload a background for the chat header background. Or click the X on a selected header to remove the current header. Then click the Upload File button that appears.                                                   |


</chapter>

<chapter title="Subsystem Responders Tab" collapsible="true" level="5">

![B01-01_0004-Domains-SubResp](B01-01_0004-Domains-SubResp.png){width="900" style="block"}

*The Domains Workspace Subsystem Responders Tab*

*Domains Workspace Subsystem Responders Tab Settings*

|                             Setting                              |                                                                                              Description                                                                                               |
|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select a Responder to Add                                        | Click to select a subsystem responder. Or click then type the first few characters of a responder name. Click the Save button to move the selected responder from the Added list to the Existing list. |
| Browse                                                           | Click to display a popup with a list of all subsystem responders. Then select one or more responders. Click the Add button in the popup.                                                               |
| Search                                                           | Type the first few characters of a responder name to filter the list of responders.                                                                                                                    |
| ![Delete-Btn-DEB](Delete-Btn-DEB.png){width="25" style="inline"} | In the list of subsystem responders, click the Delete button to remove a responder from the list. Deleted responders move to the Deleted tab. Click the Save button to confirm deletion.               |


</chapter>

<chapter title="Translations Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Translation](B01-01_0004-Domains-Translation.png){width="900" style="block"}

*The Domains Workspace Translation Tab*

*Domains Workspace Translation Tab Settings*

| Setting                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Translation to/from User               | Select whether to enable users to choose a language to use for their conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Enable Translation to/from Agent              | Select whether to enable agents to choose a language to use for their conversations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Translation Provider Priority                 | When using multiple language sources, define the priority order by using a comma-delimited list of short names. Default is google,azure,sdl.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Translation Languages                         | Select a list of languages to use for translation. This limits the risk of other languages being used. If the language detection system detects something other than these languages, a conversation in an excluded language will not be used. The conversation will stay in English and auto-translate will not be used.                                                                                                                                                                                                                                      |
| Force Specific Language                       | Select whether to force a specific language to be used for conversations in this domain. When selected, a dropdown list of available languages will appear. Using the language parameter in a conversation URL will override this setting.                                                                                                                                                                                                                                                                                                                     |
| Maintain Detected Language                    | Select whether to set the first language based on what Amelia detects in a conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Custom Google Settings                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Use Custom Google Account Settings            | Click to activate custom settings instead of the default Google Account settings. When activated, additional settings appear. * Service Account Credentials: The JSON from Google that identifies a valid service account. * Google Project ID: The Google-supplied project ID. * Google Translation Location: The Google-supplied location for glossaries. * Google Glossary Bucket Name: The name of the bucket that contains the glossary to use. * Google Translation Timeout (seconds): The maximum duration of a single translation request, in seconds. |
| Custom Azure Settings                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Use Custom Azure Account Settings             | Click to activate custom settings instead of the default Azure Account settings. When activated, additional settings appear. * Azure API Key: The Azure-supplied API key to use for translations. * Azure URL Endpoint: The Azure endpoint URL to use. * Azure Translation Location: The Azure location to use.                                                                                                                                                                                                                                                |
| Language Detection Filters                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Words to be Ignored During Language Detection | A word, term, or phrase can cause confusion about which language to use for translations. This is a known issue at times with third-party translation providers. If this happens, you can add the terms and phrases here to use as filters. Amelia will ignore them when translating a conversation. You also can use regular expressions as filters. To add a word, term, or phrase as a filter, type the information and then press the Enter key. A button with the data will appear below this field. To delete a filter, click the X next to the filter.  |


</chapter>

<chapter title="Voice Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Voice](B01-01_0004-Domains-Voice.png){width="900" style="block"}

*The Domains Workspace Voice Tab*

*Domains Workspace Voice Tab Settings*

| Setting                      | Description                                                                                       |
|------------------------------|---------------------------------------------------------------------------------------------------|
| Amelia Voice Service RPC URL | Type the URL for the Voice RPC service (Remote Procedure Call). |
| Amelia Voice RPC API Key     | Type the API key to use with the Voice RPC service.             |
| Amelia Voice WebRTC URL      | Type the URL for the Voice WebRTC service.                      |
| Agent Outbound Calling       |                                                                                                   |
| Voice Agent User             | Type the agent name to use for the voice service.                                                 |
| Voice End User               | Type the end user name to use for the voice service.                                              |
| Local Call Number            | Type the dialplan name set up in the Freeswitch configuration.                                    |
| Local Call Extension         | Type the call extension, if used.                                                                 |
| Agent Extension              | Type the agent extension, if used.                                                                |
| Outbound SIP Endpoint        | Same as the voice.agent_outbound_regex from the Agent Transfer configuration.                     |
| Outbound SIP Profile         |                                                                                                   |


</chapter>

<chapter title="Conversations Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Conv](B01-01_0004-Domains-Conv.png){width="900" style="block"}

*The Domains Workspace Conversations Tab*

*Domains Workspace Conversations Tab Settings*

| Setting                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Greeting                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Greeting Intent              | Select an intent to associate with the greeting process.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Greeting Process             | Select from active Digital Employees builder flows to use for the greeting process.                                                                                                                                                                                                                                                                                                                                                                                                     |
| Pre-Escalation               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Pre-Escalation Process       | Select from active Digital Employees builder flows to run prior to an escalation.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Run on Transfer?             | Select whether to run a pre-escalation process when a conversation is transferred to another domain.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Pre-Close                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Pre-Close Survey Process     | Select from active Digital Employees builder flows to use as a survey before a conversation is closed. Surveys must be simple. They must be appropriate for NPS (Net Promoter Score) and customer satisfaction rating purposes. For example, a process migh display 5 stars and ask the user to indicate their satisfaction level with the conversation. The Pre-Close Digital Employees builder flow must include a Close Conversation task at the end of the flow. |
| Pre-Close Process            | Select from active Digital Employees builder flows to run prior to closing a conversation.                                                                                                                                                                                                                                                                                                                                                                                              |
| On FAQ Response              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Call Intent                  | Select an intent to associate with an FAQ response.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Response Dispatcher          | Select which service to use to dispatch an FAQ response. Options are target an active process or use the FAQ Responder.                                                                                                                                                                                                                                                                                                                                                                                    |
| New Conversation User Create |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Group                        | Select a group to assign new conversations for this domain.                                                                                                                                                                                                                                                                                                                                                                                                                                                |


</chapter>

<chapter title="LLM Tab" collapsible="true" level="5">

![B01-01_0004-Domains-LLM](B01-01_0004-Domains-LLM.png){width="900" style="block"}

*The Domains Workspace LLM Tab*

*Domains Workspace LLM Tab Settings*

| Setting        | Description                                                                                                                                                                         |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Embeddings     |                                                                                                                                                                                     |
| Contact Center | Click to reset all Contact Center LLM embeddings. Clicking the Reset button will delete all embeddings and mark the sources as invalid. Embeddings will be reindexed automatically. |
| Amelia Answers | Click to reset all Amelia Answers LLM embeddings. Clicking the Reset button will delete all embeddings and mark the sources as invalid. Manual reindexing will be required.         |
[

</chapter>

<chapter title="Transcripts Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Transcripts](B01-01_0004-Domains-Transcripts.png){width="900" style="block"}

*The Domains Workspace Transcripts Tab*

*Domains Workspace Transcripts Tab Settings*

|                                     Setting                                      |                                                                                            Description                                                                                             |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Anonymize User                                                                   | Select whether to anonymize user first name, last name, and email address information in transcripts. Actual user information is replaced with Firstname, Lastname, and em@il.anon in transcripts. |
| Auto-Cleanup Days Retained                                                       | Select how often to remove old transcripts. 60 days is the default.                                                                                                                                |
| Cleanup Now                                                                      | Click to display a popup that lets you clean up old transcripts immediately.                                                                                                                       |
| +Add                                                                             | Click to display a pair of Match and Replace fields in the list area below.                                                                                                                        |
| Match                                                                            | Type a phrase to match in a conversation transcript.                                                                                                                                               |
| Replace                                                                          | Type a phrase to replace a matched phrase in a conversation transcript.                                                                                                                            |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"} | Click the Delete button to delete a pair of Match and Replace fields.                                                                                                                              |


</chapter>

<chapter title="Control Masks Tab" collapsible="true" level="5">

![B01-01_0004-Domains-ContMasks](B01-01_0004-Domains-ContMasks.png){width="900" style="block"}

*The Domains Workspace Content Masks Tab*

*Domains Workspace Content Masks Tab Settings*

|                                     Setting                                      |                                 Description                                 |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| +Add                                                                             | Click to display a pair of Match and Replace fields in the list area below. |
| Match                                                                            | Type a phrase to match in incoming conversations.                           |
| Replace                                                                          | Type a phrase to replace a matched phrase in incoming conversations.        |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"} | Click the Delete button to delete a pair of Match and Replace fields.       |


</chapter>

<chapter title="Bean Mappings Tab" collapsible="true" level="5">

![B01-01_0004-Domains-BeansMap](B01-01_0004-Domains-BeansMap.png){width="900" style="block"}

*The Domains Workspace Bean Mappings Tab*

*Domains Workspace Bean Mapping Tab Settings*

|                                     Setting                                      |                                 Description                                 |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| +Add                                                                             | Click to display a pair of Match and Replace fields in the list area below. |
| Match                                                                            | Type a phrase to match in a Spring bean.                                    |
| Replace                                                                          | Type a phrase to replace a matched phrase in a Spring bean.                 |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"} | Click the Delete button to delete a pair of Match and Replace fields.       |


</chapter>

<chapter title="Advanced Tab" collapsible="true" level="5">

![B01-01_0004-Domains-Advanced](B01-01_0004-Domains-Advanced.png){width="900" style="block"}

*The Domains Workspace Advanced Tab*

*Domains Workspace Advanced Tab Settings*

|                                          Setting                                           |                                                        Description                                                        |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Select Your Item                                                                           | Click to select an advanced setting to configure. Or click then type the first few characters of a setting.               |
| Browse                                                                                     | Click to display a popup with all possible settings. Then select one or more settings. Click the Add button in the popup. |
| Search                                                                                     | Type the first few characters of a setting name to filter the list of advanced settings.                                  |
| ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} | Click to x button to the right of a setting to delete it.                                                                 |


</chapter>


## Add a Domain

To add a domain:

1. Open the Domains panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Domains** button on the left edge.

2. In the Themes panel, click the **+Add New** button that displays at the top of this panel. A new Domains tab workspace will display.

3. Customize the Domains tab workspace to create the domain.

4. Click the **Save button** to save the domain.


## Search for a Domain

To search for a domain listed in the Domains panel:

1. Open the Domains panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Domains** button on the left edge.

2. In the Domains panel, click the Search Here field at the top of the panel. Type a partial or complete phrase. Search results appear dynamically in the panel.

## Edit a Domain

To edit a domain:

1. Open the Domains panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Domains** button on the left edge.

2. In the Domains panel, find then click a domain name in the list. Its Domains tab workspace will display.

3. Customize the Domains tab workspace to edit the domain.

4. Click the **Save button** to save the domain.


## More Resources

For more information, see:

* [Domains Introduction](B01-01_0002-Domains-Intro.md).