# Configure Autonomics for ServiceNow CMDB

## Introduction

{% include from="E05-01_0012-SNOW-CMDB.md" element-id="E05-01_0012-SNOW-CMDB_snippet" /%}


## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The ServiceNow CMDB Integration workspace](#SNOWCMDBWorkspace).

* [Creating a ServiceNow CMDB integration](#CreateSNOWCMDB).

* [Creating an Autonomics CI template](#CreateCITemplate).

## The ServiceNow CMDB Integration workspace {% #SNOWCMDBWorkspace %}

Click the **+ New Integration button** to display the Select External System panel on the right side of the workspace.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="800"}

*The Integrations Workspace with Select External System Panel*

Click the **ServiceNow CMDB Integration button** in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a ServiceNow CMDB integration.

![E05-01_0031-SNOW-CMDB-Integration.png](E05-01_0031-SNOW-CMDB-Integration.png){width="600"}

*ServiceNow CMDB Integration Panel with New Integration Form*

As you edit this integration form, you'll see additional options display. For example, once you connect to the ServiceNow API, you can map ServiceNow CIs to Autonomics CIs.

![E05-01_0031-SNOW-CMDB-EditPanel.png](E05-01_0031-SNOW-CMDB-EditPanel.png){width="600"}

*ServiceNow CMDB Integration Panel with Edit Form*

*ServiceNow CMDB Integration Panel Settings*

| Setting                                                                                                      | Default                     | Description                                                                                                                                                          |
|--------------------------------------------------------------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                             |                             | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| External System                                                                                              | ServiceNow CMDB Integration | Shows the type of integration in the list.                                                                                                                           |
| Status                                                                                                       | Disabled                    | Click to enable or disable this integration.                                                                                                                         |
|ServiceNow CMDB Integration Configuration |||
| API URL                                                                                                      |                             | Enter the API instance URL.  By default, use the ServiceNow Table API to pull ServiceNow details.                                                                    |
| Execution group                                                                                              |                             | Enter the execution group details.                                                                                                                                   |
| API Credentials                                                                                              |                             | Click to integrate with ServiceNow Incident. Type your ServiceNow URL username and password. By default, use the ServiceNow Table API to pull ServiceNow details.    |
| API Version                                                                                                  |                             | Select the type of API version from the dropdown list.                                                                                                               |
| Automatic Sync                                                                                               | Disabled                    | Select the radio button for the type of automatic synchronization.                                                                                                   |
| Query                                                                                                        |                             | Type a ServiceNow Query to pull specific CIs. If empty, all CIs will be pulled.                                                                                      |
| Delete CI on Integration Deletion                                                                            |                             | Toggle whether to delete CIs when deleting this integration. No is the default.                                                                                      |
| Mapping between ServiceNow CI types and AIOps CI types  |||
| Select CI Types Dropdown      |                             | Click to select SNOW CI types. Once selected, click the Test button to test the connection.                                                                          |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                             | Closes the Properties panel and returns your focus to the canvas. Clicking the Delete icon, clears the field.                                                        |


## Create a ServiceNow CMDB Integration {% #CreateSNOWCMDB %}

To create a ServiceNow CMDB integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **ServiceNow CMDB Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel. To begin, copy paste the ServiceNow API URL in the **API URL field**. By default, you should use the ServiceNow Table API. Then click the **API Credentials button** and type your username and password for the API. If it's useful to use a query to filter CIs, type the query in the **Query field**.

4. Once you have a working connection between Autonomics and the ServiceNow CMDB, use the **Select CI Types Here dropdown** list to select ServiceNow CIs. Then map each ServiceNow CI to an Autonomics Scope, Template, and field names. For example, the IP address field name in the Autonomics Template.

   Click the **Test button** periodically to test your connection between the ServiceNow CMDB and the Autonomics CMDB.

5. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0031-SNOW-CMDB-EditPanel.png](E05-01_0031-SNOW-CMDB-EditPanel.png){width="600"}

*ServiceNow CMDB Integration Panel with Edit Form*


## Create an Autonomics CI Template {% #CreateCITemplate %}

ServiceNow lets you refine a provided CMDB data model for configuration items. Autonomics lets you create your own configuration properties, using templates. This makes it possible to map ServiceNow CI fields to Autonomics CI fields. If you need to create a CI template, here's how to do it in Autonomics.

>Refer to the [CIs Walkthrough topic](E04-01_0006-CMDB-CIs-Walkthrough.md) for more details about creating and managing configuration items.

{% include from="E04-01_0006-CIs-CreateTemplate.md" element-id="E04-01_0006-CIs-CreateTemplate_snippet" /%}



## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}