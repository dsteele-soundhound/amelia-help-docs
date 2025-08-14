

# Configure Autonomics for Office 365

## Introduction

{% include from="E05-01_0012-Office365.md" element-id="E05-01_0012-Office365_snippet" /%}

Office 365 is a subscription-based suite of productivity applications and services. Combining Autonomics and Office aids diagnosis and resolution of issues. And an automatic synchronization feature minimizes manual interventions. This updates Autonomics continuously with the latest information.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating an Office 365 integration](#Create).

* [The Office 365 integration workspace](#Workspace).

##Create an Office 365 Integration {% #Create %}

To create an Office 365 integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Office 365** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Office 365 Integration Workspace {% #Workspace %}

Click the Office 365 button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure an Office 365 integration.

![E05-01_0019-Office365-Top](E05-01_0019-Office365-Top.png){width="600"}

*The Office 365 Basic Section*

*Office 365 Basic Section Elements*

|                                                    Element                                                    |    Default    |                                                                             Description                                                                              |
|---------------------------------------------------------------------------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |               | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| External System                                                                                               | Generative AI | Shows the type of integration in the list.                                                                                                                           |
| Status                                                                                                        | Disabled      | Enable or disable this integration.                                                                                                                                  |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |               | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                    |

The Office 365 configuration panel has configuration settings organized into sections. Click the links below to display each section with its options.
<chapter title="Connectivity Section" collapsible="true" level="5">

![E05-01_0019-Office365-Connect](E05-01_0019-Office365-Connect.png){width="600"}
*Figure 3. Office 365 Connectivity Section*

|       Element        | Default |                                                                                         Description                                                                                          |
|----------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OAuth Tenant ID      |         | Enter the authentication tenant ID. A unique identifier that represents the a specific organization's instance of Azure AD.                                                                  |
| OAuth Client ID      |         | Enter the authentication client ID. A unique identifier is used by the authorization server to identify the application.                                                                     |
| OAuth Client Secret  |         | A secure key used by the application to authenticate itself to the authorization server changes to credentials stored in Locksmith might take up to 5 minutes to reflect in the integration. |
| OAuth Grant Type     |         | Specifies the type of grant that is used to obtain an access token.                                                                                                                          |
| OAuth Email          |         | The email address that allows to obtain an access token.                                                                                                                                     |
| OAuth Email Password |         | The password that allows to obtain an access token changes to credentials stored in Locksmith might take up to 5 minutes to reflect in the integration.                                      |
| Execution group      |         | Enter the execution group details.                                                                                                                                                           |
</chapter>

<chapter title="Trigger Email When Section" collapsible="true" level="5">

![E05-01_0019-Office365-Trigger](E05-01_0019-Office365-Trigger.png){width="600"}

*The Office 365 Trigger When Section*

*Office 365 Trigger When Section Elements*

|        Element         | Default |                    Description                     |
|------------------------|---------|----------------------------------------------------|
| New task created       | Yes     | Whether to send email when new task created.       |
| Comment added          | Yes     | Whether to send email when new comment posted.     |
| Task status updated    | No      | Whether to send email when task status updated.    |
| Task field updated     | No      | Whether to send email when task field updated.     |
| Task is resolved       | Yes     | Whether to send email when task is resolved.       |
| Workflow field updated | No      | Whether to send email when workflow field updated. |

</chapter>

<chapter title="Incoming Email Section" collapsible="true" level="5">

![E05-01_0019-Office365-Incoming](E05-01_0019-Office365-Incoming.png){width="600"}

*The Office 365 Incoming Email Section*

*Office 365 Incoming Email Section Elements*

|         Element         | Default  |                           Description                            |
|-------------------------|----------|------------------------------------------------------------------|
| Mail Folder ID          | Inbox    | Select folder ID from which unread incoming mails can be pulled. |
| Email Task Type Mapping | Incident | Mapping between the task type and incoming email addresses.      |
| + Add                   |          | Click to add a mapping of Task Type and Email Address.           |

</chapter>

<chapter title="Filter Incoming Email Section" collapsible="true" level="5">

![E05-01_0019-Office365-Incoming-Filter](E05-01_0019-Office365-Incoming-Filter.png){width="600"}

*The Office 365 Filter Incoming Email Section*

*Office 365 Filter Incoming Email Section Elements*

|               Element                | Default  |                                                   Description                                                    |
|--------------------------------------|----------|------------------------------------------------------------------------------------------------------------------|
| Max Attachment Size (bytes)          | 36700160 | Maximum file size allowed per attachment in bytes.                                                               |
| Email Addresses Not to be Included   |          | List of email addresses to drop when processing incoming emails.                                                 |
| Email Subject Includes               |          | List of patterns to match against the subject of incoming emails. Emails with matching subjects will be dropped. |
| Accepted Domains                     |          | List of domains that are allowed for the incoming emails.                                                        |
| Ignore Meeting Invites and Responses | No       | Whether to drop incoming emails with 'Content-Type: text/calendar' header.                                       |

</chapter>

<chapter title="Drop Incoming Email with Header Section" collapsible="true" level="5">

![E05-01_0019-Office365-Incoming-Drop](E05-01_0019-Office365-Incoming-Drop.png){width="600"}

*The Office 365 Drop Incoming Email with Header Section*

*Office 365 Drop Incoming Email with Header Section Elements*

|            Element            | Default |                                  Description                                  |
|-------------------------------|---------|-------------------------------------------------------------------------------|
| Auto-submitted auto-generated | No      | Whether to drop incoming emails with 'Auto-Submitted: auto-generated' header. |
| Auto-submitted auto-replied   | No      | Whether to drop incoming emails with 'Auto-Submitted: auto-replied' header.   |
| Precedence auto-reply         | No      | Whether to drop incoming emails with 'Precedence: auto-reply' header.         |
| Precedence bulk               | No      | Whether to drop incoming emails with 'Precedence: bulk' header.               |
| X-Auto-Response Suppress All  | No      | Whether to drop incoming emails with 'X-Auto-Response-Suppress: All' header.  |

</chapter>

<chapter title="Outgoing Email Section" collapsible="true" level="5">

![E05-01_0019-Office365-Outgoing](E05-01_0019-Office365-Outgoing.png){width="600"}

*The Office 365 Outgoing Email Settings Section*

*Office 365 Outgoing Email Settings Section Elements*

|        Element         | Default |                            Description                            |
|------------------------|---------|-------------------------------------------------------------------|
| Enable Outgoing Emails | Yes     | Whether to send outgoing emails.                                  |
| Send attachments       | Yes     | Whether to send attachments in the outgoing emails.               |
| From Templates         |         | Velocity template to render from email address in outgoing email. |
| Task Update Template   |         | Velocity template for task update outgoing email body.            |

</chapter>

<chapter title="Filter Outgoing Mail Section" collapsible="true" level="5">

![E05-01_0019-Office365-Outgoing-Filter](E05-01_0019-Office365-Outgoing-Filter.png){width="600"}

*Office 365 Filter Outgoing Mail Section*

| Element | Default |                  Description                  |
|---------|---------|-----------------------------------------------|
| + Add   |         | Click to add an email address filter mapping. |

</chapter>

<chapter title="Send Outgoing Mail For Section" collapsible="true" level="5">

![E05-01_0019-Office365-Outgoing-Send](E05-01_0019-Office365-Outgoing-Send.png){width="600"}

*The Office 365 Send Outgoing Mail For Section*

*Office 365 Send Outgoing Mail For Section Elements*

|            Element             | Default |                                   Description                                    |
|--------------------------------|---------|----------------------------------------------------------------------------------|
| User who updates the task      | Yes     | Whether to send an outgoing email to the user who updates a task.                |
| Assignment of the task         | Yes     | Whether to send an outgoing email when a task is assigned.                       |
| CI actions on the task         | Yes     | Whether to send an outgoing email when a configuration item (CI) acts on a task. |
| Task updates by incoming email | Yes     | Whether to send an outgoing email when an incoming email updates a task.         |

</chapter>

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}