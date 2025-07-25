# Configure Autonomics for Prometheus Integration

## Introduction

{% include from="E05-01_0029-Prometheus.md" element-id="E05-01_0029-Prometheus_snippet" /%}

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Prometheus integration](#Create).

* [The Prometheus Integration workspace](#The).

##Create a Prometheus Integration {% #Create %}

To create a Prometheus integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Prometheus Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Prometheus Integration Workspace {% #The %}

Click the Prometheus Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Prometheus integration.

![E05-01_0029-Prometheus](E05-01_0029-Prometheus.png){width="600"}

*The Prometheus Integration Basic Section*

*Prometheus Integration Basic Section Elements*

|                                                                                     Element                                                                                     |      Default      |                                                                              Description                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                                                                                                |                   | Enter the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears this field. |
| External System                                                                                                                                                                 | Generative AI     | Shows the type of integration in the list.                                                                                                                             |
| Status                                                                                                                                                                          | Disabled          | Enable or disable this integration.                                                                                                                                    |
| **Prometheus Integration Configuration**                                                                                                                                                                                                                                                                                                                                   |||
| Load Interval                                                                                                                                                                   | 0 hrs 0 min 0 sec | Enter the load interval value(s).                                                                                                                                      |
| API URL                                                                                                                                                                         |                   | Enter the API URL to use for this integration.                                                                                                                         |
| Credentials                                                                                                                                                                     |                   | Click the Choose button to select the Locksmith credentials to use with this integration.                                                                              |
| **New Query**                                                                                                                                                                                                                                                                                                                                                              |||
| + Add Query                                                                                                                                                                     |                   | Click to display a New Query form.                                                                                                                                     |
| ![Btn-Prometheus-Open-Query](Btn-Prometheus-Open-Query.png){width="25" style="inline"} ![Btn-Prometheus-Close-Query](Btn-Prometheus-Close-Query.png){width="25" style="inline"} |                   | Located at the top right of the query form, click to open or close a Query form.                                                                                       |
| Name                                                                                                                                                                            |                   | Enter a name for the query.                                                                                                                                            |
| Description                                                                                                                                                                     |                   | Enter a description for the query.                                                                                                                                     |
| Host                                                                                                                                                                            |                   | Enter the host name to use.                                                                                                                                            |
| Service                                                                                                                                                                         |                   | Enter the service name to use.                                                                                                                                         |
| Metric                                                                                                                                                                          |                   | Enter the metric name to use with this integration.                                                                                                                    |
| Step Width (sec)                                                                                                                                                                |                   | Enter the step width in seconds to use for time series.                                                                                                                |
| Enabled                                                                                                                                                                         | Yes               | Enable or disable this query.                                                                                                                                          |
| Query                                                                                                                                                                           |                   | Enter the query in the editor.                                                                                                                                         |
| ![Delete3-Btn-Automation-Studio-Prop-Panel](Delete3-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}                                                            |                   | Located the top right of the query form, click to delete the query.                                                                                                    |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button                                                                   |                   | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                      |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}
