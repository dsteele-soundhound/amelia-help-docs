# Clients Walkthrough

## Introduction

### Client Settings Overview

The Client module enables Administrators to create, update, and manage clients. This provides a structured way to organize and separate IT workloads. This feature lets you logically separate IT environments in a single platform. For example, different clients can support different business units. Or lines of business (LOBs), geographies, and Managed Service Provider (MSP) customers.

### Understanding Clients in the Platform

A Client represents an independent automation space within the platform, designed to:

* Segment IT workloads across different LOBs or business units within an organization.

* Ensure logical separation of workflows and automations for MSPs managing many customers.

* Enhance governance and operational control. You can define distinct Client environments with tailored workflow and automation policies.

Each Client operates as an isolated logical entity. This lets you leverage the platform's shared automation fabric. Administrators can define workflows, execution policies, and automation scope per Client.

Through the Client Settings view, administrators can:

* Create new Clients and configure their automation scope.

* Modify existing Clients to align with evolving operational needs.

* Delete Clients when they are no longer required.

Leveraging Client settings lets you orchestrate and automate IT workloads. While also maintaining clear separation between business functions or customer environments.

To use the Clients module, you must understand its features and where to find them. You can find the module in the Administration workspaces.

##Access the Clients Module {% #AccessClients %}

{% include from="E05-01_0005-AccessClients.md" element-id="E05-01_0005-AccessClients_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The Clients module workspace](#ClientsWorkspace).
* [Adding a Clients](#AddClients).
* [Downloading an API Key](#APIKey).
* [Searching for a Clients](#SearchClients).
* [Editing a Clients](#EditClients).
* [Deleting a Clients](#DeleteClients).
* [Cloning a Clients](#CloneClient).

##The Clients Module Workspace {% #ClientsWorkspace %}

### Top Panel Buttons

| Button  | Description                                                                                                                                                                                                                                                                                                                                                             |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edit    | Click to edit the Configuration tab settings. To edit the other tabs, click a tab and then click an entry listed in the tab.                                                                                                                                                                                                                                            |
| Delete  | Click to delete the client configuration.                                                                                                                                                                                                                                                                                                                               |
| API Key | Click to display a popup with the API Key used to interact with the client. Click the Copy (![Copy-Btn-AIOps.png](Copy-Btn-AIOps.png){width="20" style="inline"}) icon in the popup to copy the key to your computer clipboard. To display the key value, click the Show/Hide (![Show-Hide-Btn.png](Show-Hide-Btn.png){width="20" style="inline"}) button in the popup. |


### Configuration Tab

<chapter title="Basic Section" collapsible="true" level="5">

| Setting        | Description                                                                                                                                                                          |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID             | Auto-generated when a client is created. Click the Copy (![Copy-Btn-AIOps.png](Copy-Btn-AIOps.png){width="20" style="inline"}) icon to copy the ID value to your computer clipboard. |
| Name           | Type a unique name for the client.                                                                                                                                                   |
| Code           | Type a unique code for the client. Values are lower spaced. Spaces are not allowed.                                                                                                  |
| External ID    | Copy paste an external ID if the client is used by another system.                                                                                                                   |
| Active         | Displays Yes or No based on whether the client is active in Autonomics.                                                                                                                   |
| Timezone       | Select a timezone to use for the client.                                                                                                                                             |
| Locale         | Select the language locale to use for the client.                                                                                                                                    |
| Start/End Date | If appropriate, select start and end dates for the client to be active and available in Autonomics.                                                                                       |
| Live Date      | If appropriate, select the date for the client to be active and available in Autonomics.                                                                                                  |

</chapter>

<chapter title="Preferences Section" collapsible="true" level="5">

| Setting            | Description                                             |
|--------------------|---------------------------------------------------------|
| Domain             | Select an Autonomics domain where the client will be active. |
| Password Policy    | Select a password policy.                               |

</chapter>

<chapter title="Settings Section" collapsible="true" level="5">

The Settings panel includes a number of settings to configure Configuration Items (CIs), tasks, events, and other Autonomics features.

| Setting                                                       | Description                                                                                                                                                                         |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auto abort executions for resolved tasks                      | If enabled, any running executions will be auto aborted for a resolved ticket. No automation will be executed on a resolved ticket. Default is No.                                  |
| Amelia Dispatch Domain                                        | If appropriate, type the Amelia domain name used to work with this client in Autonomics.                                                                                                 |
| Number of events to load with task                            | Default is 9                                                                                                                                                                        |
| Knowledge Engine search threshold                             | Minimum neural search similarity score (semantic relevance) of the documents. Shown under Knowledge tab on a Radar task.                                                            |
| Learning submit for approval                                  | If set to Default, values from instance-level config of Automations Service are used. Options are Default, Yes, No.                                                                 |
| Learning show generated automations                           | If set to Default, values from instance-level config of Automations Service are used. Options are Default, Yes, No.                                                                 |
| Learning task types                                           | If set to Default, values from instance-level config of Automations Service are used. Options are EVENT, INCIDENT, SERVICE_REQUEST, PROBLEM, CHANGE, LOOKUP.                        |
| Rate limit / minute                                           | If there are more requests in last 60 seconds than configured rate limit, and current user doesn't have Ignore Rate Limit authority, a request will be rejected with HTTP code 429. |
| Client host                                                   | The virtual hostname of the client.                                                                                                                                                 |
| Tags                                                          | If appropriate, type one or more tags to use with this client. Tags are used to connect CIs, tasks, and other elements to a client.                                                 |
| Number of days to auto delete attachments after task resolved | Number of days to keep attachments after a Radar task is resolved.                                                                                                                  |

The next settings mostly affect Configuration Items (CIs). They contain information about IT resources monitored with Autonomics. Scopes organize CIs into useful groups.

| Setting                                   | Description                                                                                                                                                                       |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auto create CI, search by client          | Create CIs automatically and searchable by client name.                                                                                                                           |
| CI Attach Option                          | Attach option for Ci from incoming events. Options are Default Scope, LOOKUP_EXISTING, AUTO_CREATE                                                                                |
| Auto create CI Default Scope Name         | Type a name for the default CI scope.                                                                                                                                             |
| CI Properties in Reporting Task           | CI properties to be included in a reporting task.                                                                                                                                 |
| Queryable Workflow Fields                 | Workflow fields that are queryable as CSV.                                                                                                                                        |
| AO Close Task Choices                     | Workflow choices to use for Close AO Task call. Options are Resolve, Resolved, Close, Closed.                                                                                     |
| AO Pending Task Choices                   | Workflow choices to use for Pending AO Task call. Default option is Pending.                                                                                                      |
| Force close AO Task                       | Options are Yes, No. Yes is the default.                                                                                                                                          |
| Force pending AO Task                     | Options are Yes, No. Yes is the default.                                                                                                                                          |
| Log System User Sessions                  | If this is selected, system user sessions in clients are logged. Options are Yes, No. Yes is the default.                                                                         |
| Ignore updates from duplicate events      | Options are Yes, No. Yes is the default.                                                                                                                                          |
| Priority attribute in event               | Name of the default priority for events. TASK_PRIORITY is the default.                                                                                                            |
| Priority Mapping                          | Comma separated Priority Mapping of priority name and numeric priority. Default is TASK_PRIORITY_1=P1,TASK_PRIORITY_2=P2,TASK_PRIORITY_3=P3,TASK_PRIORITY_4=P4.                   |
| Amelia Correlation Message Limit          | Maximum number of event correlation messages to be displayed in Amelia conversations. Default is 5.                                                                               |
| TaskPerNotification Attribute Names       | Comma separated event attribute names to indicate TaskPerNotification. Default is task_per_notification.                                                                          |
| TaskPerNotification Attribute Values      | Comma separated attribute values for TaskPerNotification Attribute Name. Default is true,yes.                                                                                     |
| Workflow History Retention (days)         | The number of days to retain workflow history. Default is 90 days.                                                                                                                |
| Workflow Hidden Variable Retention (days) | How long to keep hidden variables after a task is resolved. Default is 7 days.                                                                                                    |
| Active Workflow for Resolved Tasks (days) | The number of days workflow can be active for resolved task. Default is 30 days.                                                                                                  |
| Max Activities per Workflow Process       | The maximum number of activities per workflow process instance. Default is 50.                                                                                                    |
| Task Attributes Whitelist                 | Comma separated attribute names if you want to use them in aggregations in search engine queries.                                                                                 |
| Secure Variable Export Type               | How to export secure variables. Options are PLAIN_TEXT, MASKED, ENCRYPTED. Default is ENCRYPTED.                                                                                  |
| Secure Variable Export Key                | Type a key to use to encrypt/decrypt exported Automations secure variables.                                                                                                       |
| Execution abort after inactivity (sec)    | Initiate execution abort if an execution failed to start within a given number of seconds. Can be overridden on Automation level (see Timeout property). Default is 3600 seconds. |

The final group of settings affect tasks and events.

| Setting                                                | Description                                                                                                                                  |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Mark task as reopened if moved from status             | Mark task as reopened if moved from this status. Default is PENDING_CLOSE.                                                                   |
| JavaScript Engine                                      | JavaScript Engine to evaluate scripts. Options are GRAAL, NASHORN. Default is GRAAL.                                                         |
| Eventflow Routing Key Attribute Name                   | The attribute name for the Eventflow Routing Key.                                                                                            |
| Eventflow Routing Key Type                             | The attribute type for the Eventflow Routing Key. Options are SCOPE_ID_CLIENT, CLIENT, HOSTNAME, ATTRIBUTE. Default is SCOPE_ID_CLIENT.      |
| Move task from pending to active on new critical alert | If this is selected, task status is changed to Active from Pending on new CRITICAL alert. Options are Yes, No. Default is No.                |
| Reverse group hierarchy in Tasks/Workflows             | If this is selected, assignment and approver group hierarchy will be reversed in Tasks/Workflows. Options are Yes, No. Default is No.        |
| Add client sessions to Reporting                   | If selected, enable storing client session in OpenSearch. Options are Yes, No. Default is No.                                            |
| Enable NPS Survey                                      | If selected, enables NPS survey. For this to work, survey with comment should be configured in workflow. Options are Yes, No. Default is No. |
| Validate cascade values                                | If selected, enables cascade values validation in workflows. Options are Yes, No. Default is No.                                                                                 |

</chapter>

### Users Tab

The Users tab displays a list of users assigned to a client. To edit a user, click the name of the user listed in this tab. A user detail panel displays on the right half of the workspace.

To save any changes to the user configuration, click the Update button in the top panel.

*Top Panel Buttons for Users*

| Button          | Description                                                                         |
|-----------------|-------------------------------------------------------------------------------------|
| Edit            | Click to edit the Configuration tab details.                                        |
| Delete          | Click to delete the user from the client configuration.                             |
| Change Password | Click to change the password for the user account.                                  |
| Unlock Account  | When enabled, click to unlock the user account.                                     |
| Update          | Appears after the Edit button is selected. Click this button to save any changes.   |
| Cancel          | Appears after the Edit button is selected. Click this button to cancel any changes. |


*Configuration Tab Settings for Users*

You can edit these settings by clicking the Edit button at the top of the workspace.

| Setting         | Description                                                                                                                                                                                                                                                                                 |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ID | Assigned automatically to the user. Click the Copy (![Copy-Btn-AIOps.png](Copy-Btn-AIOps.png){width="20" style="inline"}) icon to copy the ID to your computer clipboard. Copying a user ID might help troubleshooting when searching log files with a user ID.                             |
| First Name      | The user's first name.                                                                                                                                                                                                                                                                      |
| Last Name       | The user's last name.                                                                                                                                                                                                                                                                       |
| E-mail          | The user's email address. |
| Password policy | The password policy to use for user login. A password policy defines a set of rules that passwords must comply with. For example, the minimum and maximum length of a password.                                                                                                             |
| Client          | The name of the client. You cannot edit this setting.                                                                                                                                                                                                                                       |
| Tags            | Tags assigned to the client using the client edit panel.                                                                                                                                                                                                                                    |
| Allow login     | Select whether or not to allow the user to login. Options are Yes, No. Default is No.                                                                                                                                                                                                       |
| External ID     | If appropriate, type an external ID to use with this user.                                                                                                                                                                                                                                  |
| About           | If appropriate, type any notes about this user, their role(s), and any other details.                                                                                                                                                                                                       |

*Permissions Tab for Users*

This tab displays the Login Groups and Effective Authorities assigned to the user. Click the **+Add button** to display a list of login groups in a right side panel. Click the **+ button** to the right of each login group name to assign them to the user.

The Effective Authorities display once you assign login groups to a user.

### Login Groups Tab

This tab displays the login groups assigned to the client.  To edit a login group, click the name of the login group listed in this tab. A user detail panel displays on the right half of the workspace.

To save any changes to the login group configuration, click the Update button in the top panel.

*Top Panel Buttons for Login Groups*

| Button          | Description                                                                                                                                                                                    |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edit            | Click to edit the Configuration tab details.                                                                                                                                                   |
| Delete          | Click to delete the user from the client configuration.                                                                                                                                        |
| Update          | Appears after the Edit button is selected. Click this button to save any changes.                                                                                                              |
| Cancel          | Appears after the Edit button is selected. Click this button to cancel any changes.                                                                                                            |
| Contacts | Click this link to display the Contacts Page. Each contact belongs to a client. Contact represents a person, either internal Autonomics user or an external person that doesn't have Autonomics account. |

*Configuration Tab for Login Groups*

| Setting          | Description                                                                                                                                                                                                                                                         |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID               | Assigned automatically to the login group. Click the Copy (![Copy-Btn-AIOps.png](Copy-Btn-AIOps.png){width="20" style="inline"}) icon to copy the ID to your computer clipboard.                                                                                    |
| Name             | The user's first name.                                                                                                                                                                                                                                              |
| Code             | The user's last name.                                                                                                                                                                                                                                               |
| E-mail           | When an event or notification triggers, information is sent to this email address. If an email address is specified, individual members in a Login Group are discarded. If an email address is not specified, an email is sent to each member within a Login Group. |
| Login Group Type | The type of login group. Client is the assigned type.                                                                                                                                                                                                               |
| Client           | The name of the client. You cannot edit this setting.                                                                                                                                                                                                               |
| Global           | Select whether or not to allow the login group operate globally. Options are Yes, No. Default is No.                                                                                                                                                                |
| Amelia Group     | Select whether or not the login group matches a login group in an Amelia instance. Options are Yes, No. Default is No.                                                                                                                                              |
| Assignment Group | Options are Yes, No. Default is No.                                                                                                                                                                                                                                 |
*Authorities Tab for Login Groups*

This tab displays the Authorities assigned to the login group. To add authorities, click the Edit button in the top panel. Then click the **+Add button** to display a list of login groups in a right side panel. Click the **+ button** to the right of each login group name to assign them to the user.

The Authorities display once you add one or more authorities to a login group.

### Free Switch Tab

This tab configures the use of Free Switch for voice integrations. The tab defines settings for outgoing calls when automations call users. Click the **+ Add New button** to display the Free Switch Configuration popup.

![E02-01_0020-Automation-Props-FreeSwitch-Popup.png](E02-01_0020-Automation-Props-FreeSwitch-Popup.png){width="600" style="inline"}

*Free Switch Configuration Popup*

*Free Switch Configuration Popup Settings*

| Setting | Description                                                                                                              |
|---------|--------------------------------------------------------------------------------------------------------------------------|
| Locale  | Select the language locale to use with Free Switch for Text to Speech (TTS).                                             |
| Engine  | Type the engine name to use for Text to Speech. The value should be retrieved from a specific Free Switch configuration. |
| Voice   | Type the voice name to use for Text to Speech. The value should be retrieved from a specific Free Switch configuration.                                                                          |
| Add     | Click the Add button to save your settings.                                                                              |

### Reporting Retention Tab

The Reporting tab defines retention, measured in days, for reporting data in Open Search indexes. A -1 setting indicates the retention period is indefinite.

##Add a Client {% #AddClients %}

1. At the top right of the Clients list workspace, click the **+ New client** button or the **+ button**. A New Clients panel opens on the right side of the screen.
2. Fill out the form to configure a client.
3. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="20" style="inline"}) icon to save the new client.

##Download an API Key {% #APIKey %}

To download a client API Key:

1. Click the client name in the Clients list workspace. The client detail panel will appear on the right side.
2. Click the API Key button at the top of the client detail panel. The API Key popup will appear.
3. Click the Copy (![Copy-Btn-AIOps.png](Copy-Btn-AIOps.png){width="20" style="inline"}) icon in the popup to copy the key to your computer clipboard. To display the key value, click the Show/Hide (![Show-Hide-Btn.png](Show-Hide-Btn.png){width="20" style="inline"}) button in the popup.

##Search for a Client {% #SearchClients %}

To search for Clients:

1. At the top right of the Clients list workspace, click the **Search** field.
2. Type a partial or complete client name in the search field.
3. From the search results list, click a client to display it in the right side panel.

##Edit a Client {% #EditClients %}

To edit Clients:

1. In the Clients list workspace, scroll down the list of clients or use the search field.
2. Once you find the client to edit, click the client name. The right side panel displays.
3. Click the Edit button in the bottom left of the right side panel. The Edit client tab workspace displays.
4. In the Edit client workspace, update the form to configure a client.
5. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="20" style="inline"}) icon to save the client.


##Delete a Client {% #DeleteClients %}

To delete Clients:

1. In the Clients list workspace, scroll down the list of clients or use the search field.
2. Once you find the client to edit, click the client name. The right side panel displays.
3. Click the Delete button at the top of the right side panel.

##Clone Clients {% #CloneClient %}

To clone Clients:

1. In the Clients list workspace, scroll down the list of clients or use the search field to find a client.
2. Once you find the client to export, hover over the gear (![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) icon to display a small menu. Click the Clone link. The Clone popup displays.
3. Type a new unique name in the Clone popup. Then click the Clone button. The cloned client displays in the right panel.
4. Click the Edit button at the bottom left of the right panel. Make changes if and as needed.
5. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="20" style="inline"}) icon to save the client.


## More Resources

{% include from="E05-01_0001-Admin-SettingsMoreInfo.md" element-id="E05-01_0001-Admin-SettingsMoreInfo_snippet" /%}

