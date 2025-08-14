# Configure Autonomics for Confluence

## Introduction

{% include from="E05-01_0012-Confluence.md" element-id="E05-01_0012-Confluence_snippet" /%}

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Confluence integration](#Create).

* [The Confluence integration workspace](#Workspace).

##Create a Confluence Integration {% #Create %}

To create a Confluence integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Confluence** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Confluence Integration Workspace {% #Workspace %}

Click the Confluence button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Confluence integration.

![E05-01_0015-Confluence-Panel](E05-01_0015-Confluence-Panel.png){width="600"}

*The Confluence Integration Settings*

*Confluence Integration Settings*

|        Setting         |   Default   |                                                                                           Description                                                                                           |
|------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name       |             | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                            |
| External System        | Confluence  | Shows the type of integration in the list.                                                                                                                                                      |
| Status                 | Disabled    | Enable or disable this integration.                                                                                                                                                             |
| **Confluence Configuration**                                                                                                                                                                                                         |||
| REST API URL           |             | Confluence REST API endpoint, for example: https://example.com/confluence/rest/api                                                                                                              |
| Execution Group        |             | Type the name of any execution group to trigger this integration.                                                                                                                               |
| Authentication Type    | Credentials | Credentials for Basic type of authentication. Either credentials or token must be provided Changes to credentials stored in Locksmith might take up to 5 minutes to reflect in the integration. |
| Credentials            |             | Click to choose either Credentials or Tokens to connect to Confluence.                                                                                                                          |
| Automatic Sync         |             | Automatically re-import Confluence documents at a specified time. If configured, enable or disable the Automatic Sync Status setting for each Confluence knowledge source.                      |
| **Knowledge Sources**                                                                                                                                                                                                                |||
| + Add Knowledge Source |             | Click to configure individual Confluence pages as knowledge sources.                                                                                                                            |
| Name                   |             | For each knowledge source, type a name for the Confluence page.                                                                                                                                 |
| Automatic Sync Status  | Disabled    | If the Automatic Sync setting is configured, select whether to enable or disable automatic re-importing this knowledge source.                                                                  |
| + Add Page             |             | Click to add the Confluence page URL to use as a knowledge source.                                                                                                                              |

## More Resources

For more information, see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}
