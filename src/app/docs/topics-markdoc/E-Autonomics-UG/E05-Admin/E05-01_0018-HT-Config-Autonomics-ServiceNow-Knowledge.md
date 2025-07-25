# Configure Autonomics for ServiceNow Knowledge

## Introduction

{% include from="E05-01_0012-SNOW-Knowledge.md" element-id="E05-01_0012-SNOW-Knowledge_snippet" /%}

The ServiceNow Knowledge Management Service Portal includes knowledge bases. You can manage these repositories in a single portal platform. For example, article view pages provide detailed articles with integrated feedback options. This enhances content quality and relevance. The portal also includes the ability to search articles to filter information.

The **Integrations** workspaces let you configure Autonomics to work with ServiceNow documents.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a ServiceNow Knowledge integration](#Create).

* [The ServiceNow Knowledge Integration workspace](#The).

* [Configuring Your ServiceNow Application](#ConfigSNOW).

##The ServiceNow Knowledge Integration workspace {% #The %}

Click the ServiceNow Knowledge Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a ServiceNow Knowledge integration.

![E05-01_0018-Integrations-SNOW-KB](E05-01_0018-SNOW-KB-Integration.png){width="600"}

*The ServiceNow Knowledge Integration Panel Settings*

*ServiceNow Knowledge Integration Panel Settings*

|                                                    Setting                                                    |             Default              |                                                                             Description                                                                              |
|---------------------------------------------------------------------------------------------------------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                                  | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| External System                                                                                               | ServiceNow Knowledge Integration | Shows the type of integration in the list.                                                                                                                           |
| Status                                                                                                        | Disabled                         | Enable or disable this integration.                                                                                                                                  |
| API URL                                                                                                       |                                  | Enter the API instance URL.                                                                                                                                          |
| Execution group                                                                                               |                                  | Enter the execution group details.                                                                                                                                   |
| API Credentials                                                                                               |                                  | To integrate with ServiceNow Incident type your ServiceNow URL username and password By default, use the Table API to pull ServiceNow details.                       |
| API Version                                                                                                   |                                  | Select the type of API version from the dropdown list.                                                                                                               |
| Automatic Sync                                                                                                | Disabled                         | Select the radio button for the type of automatic synchronization.                                                                                                   |
| Categories                                                                                                    |                                  | Enter type of categories that you want to access.                                                                                                                    |
| Knowledge Bases                                                                                               |                                  | Enter type of knowledge bases that you want to access. Clicking the Delete icon, clears the field.                                                                   |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                                  | Closes the Properties panel and returns your focus to the canvas. Clicking the Delete icon, clears the field.                                                        |

##Create a ServiceNow Knowledge Integration {% #Create %}

To create a ServiceNow Knowledge integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **ServiceNow Knowledge Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##Configure Your ServiceNow Application {% #ConfigSNOW %}

Once your Autonomics ServiceNow Knowledge integration is added, the next step is to configure your ServiceNow application.

### Download Update Set XML Files

1. In the Integrations default workspace that lists all available integrations, click your ServiceNow Knowledge integration. The property panel displays on the right half of the workspace.
2. In the Properties tab, click either the **Update Set.xml** link or the **Download button** to the right of the link. The XML file will download to your computer.

   > The **generateWithAI.xml** file will create a new button in your ServiceNow interface that triggers the Generate with AI function.

### Configure ServiceNow

With the Update Set XML file on your computer, the next steps are to configure your ServiceNow application.

1. In ServiceNow, navigate to **System Update Sets** > **Retrieved Update Sets**. Upload then import the XML file.
2. Click the **Preview Update Set button** to check for potential conflicts, missing dependencies, or other issues. The system will higlight any errors or collisions to be addressed. Fix anything that needs to be resolved.
3. Click the **Commit Update Set button** to apply the changes. ServiceNow will execute the changes. It also will log the updates.

### Rollback the Update Set

If you need to rollback the Autonomics Update Set XML files:

1. In ServiceNow, navigate to **Committed Update Sets**.
2. Click the **Back Out button**. This reverts the applied changes. However, some changes like deleted records may not be fully restored.

### Remove an Update Set

If you no longer need an imported Update Set, there are two options.

* If you have not commited the set, delete the files from the **Retrieved Update Sets** workspace.

* If you have committed an Update Set, manually revert the changes or restore a backup.


## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}