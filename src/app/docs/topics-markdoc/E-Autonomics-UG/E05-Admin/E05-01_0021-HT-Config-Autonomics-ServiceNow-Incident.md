# Configure Autonomics for ServiceNow Incident

## Introduction

{% include from="E05-01_0012-SNOW-Incident.md" element-id="E05-01_0012-SNOW-Incident_snippet" /%}

There are options to download either ServiceNow Business Rules or Integration Hub configurations. Import these configurations into Autonomics to automatically push incidents to Autonomics.

The Integration Hub requires a paid ServiceNow account to push incidents to Autonomics. You can, however, use Business Rules with any ServiceNow version. This gives you flexible integration options regardless of your ServiceNow subscription level.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The ServiceNow Incident integration workspace](#The).

* [Creating a ServiceNow Incident integration](#Create).

* [Configuring Your ServiceNow Application](#ConfigSNOW).

##The ServiceNow Incident Integration Workspace {% #The %}

Click the ServiceNow Knowledge Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a ServiceNow Knowledge integration.

![E05-01_0021-Integrations-SNOW-Incident](E05-01_0021-Integrations-SNOW-Incident.png){width="600"}

*The ServiceNow Incident Integration Settings*

*ServiceNow Incident Integration Settings Elements*

|                                                    Setting                                                    |             Default             |                                                                                                                                                                                                                                      Description                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                                 | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                                                                                                                                                                                                                                                                                   |
| External System                                                                                               | ServiceNow Incident Integration | Shows the type of integration in the list.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Status                                                                                                        | Disabled                        | Enable or disable this integration.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| API URL                                                                                                       |                                 | Enter the API instance URL.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Execution group                                                                                               |                                 | Enter the execution group details.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| API Credentials                                                                                               |                                 | To integrate with ServiceNow Incident type your ServiceNow URL username and password By default, use the Table API to pull ServiceNow details.                                                                                                                                                                                                                                                                                                                                         |
| API Version                                                                                                   |                                 | Select the type of API version from the dropdown list.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Status Mapping                                                                                                |                                 | Click the **+ Add** button to map a ServiceNow state and Autonomics task status.                                                                                                                                                                                                                                                                                                                                                                                      |
| Assignment Groups                                                                                             |                                 | Click to add a ServiceNow assignment group to pull tickets. If ServiceNow does not agree to push the information to Autonomics using Business Rules or the Integration Hub, use a periodic pull interval. This method regularly pulls tickets from ServiceNow. To avoid pulling all tickets indiscriminately, specify an assignment group. This ensures only relevant tickets are retrieved from ServiceNow. Also configure the Periodic Pull Interval setting below. |
| Integration Task Type(s)                                                                                      |                                 | Select one or both of the integration types from the drop-down list. * **Incident**: Only incidents created in Autonomics are created in ServiceNow. * **Event**: Only events created in Autonomics are created in ServiceNow.                                                                                                                                                                                                                       |
| Periodic Pull Interval                                                                                        |                                 | Type an hour, minute, and seconds time definition in these fields. The periodic pull interval regularly retrieves tickets from ServiceNow. Use this setting if ServiceNow does not push information to Autonomics via Business Rules or the Integration Hub. Also configure one or more assignment groups with the Assignment Groups setting above. Specifying an assignment group ensures only relevant tickets are pulled.                                          |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                                 | Closes the Properties panel and returns your focus to the canvas. Clicking the Delete icon, clears the field.                                                                                                                                                                                                                                                                                                                                                                          |

##Create a ServiceNow Incident Integration {% #Create %}

To create a ServiceNow Incident integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **ServiceNow Incident Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##Configure Your ServiceNow Application {% #ConfigSNOW %}

Once your Autonomics ServiceNow Incident integration is added, the next step is to configure your ServiceNow application.

### Download Update Set XML Files

1. In the Integrations default workspace that lists all available integrations, click your ServiceNow Incident integration. The property panel displays on the right half of the workspace.
2. In the Properties tab, click either the **Update Set.xml** links or the **Download buttons** to the right of each link. The XML files will download to your computer.

    > Three XML files need to be downloaded. The **resolveWithAI.xml** file will create a new button in your ServiceNow interface that triggers the Resolve with AI function. The **updateSetWithBusinessRules.xml** and **updateSetWithIntegrationHub.xml** files give you two integration options. You can integrate with business rules or an integration hub.

### Configure ServiceNow

With the three Update Set XML files on your computer, the next steps are to configure your ServiceNow application.

1. In ServiceNow, navigate to **System Update Sets** > **Retrieved Update Sets**. Upload then import the XML files.
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