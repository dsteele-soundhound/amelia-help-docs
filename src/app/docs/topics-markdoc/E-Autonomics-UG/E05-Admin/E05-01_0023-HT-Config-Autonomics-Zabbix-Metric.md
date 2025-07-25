

# Configure Autonomics for Zabbix Metric Integration

## Introduction

{% include from="E05-01_0023-ZabbixMetrics.md" element-id="E05-01_0023-ZabbixMetrics_snippet" /%}

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Zabbix Metric integration](#Create).

* [The Zabbix Metric integration workspace](#The).

##Create a Zabbix Metric Integration {% #Create %}

To create a Zabbix Metric Integration integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Zabbix Metric Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Zabbix Metric Integration Workspace {% #The %}

Click the Zabbix Metric Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Zabbix Metric integration.

![E05-01_0023-Zabbix-Metric](E05-01_0023-Zabbix-Metric.png){width="600"}

*The Zabbix Metric Integration Settings*

*Zabbix Metric Integration Settings*

|                                                    Setting                                                    |          Default          |                                                                                                        Description                                                                                                         |
|---------------------------------------------------------------------------------------------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                           | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                       |
| External System                                                                                               | Zabbix Metric Integration | Shows the type of integration in the list.                                                                                                                                                                                 |
| Status                                                                                                        | Disabled                  | Enable or disable this integration.                                                                                                                                                                                        |
| **Zabbix Metric Integration Configuration**                                                                                                                                                                                                                                                                                                                          |||
| API Key                                                                                                       |                           | Click to choose the Zabbix API key stored in Locksmith. The key ensures secure integration between your system and an LLM provider. Autonomics synchronizes changes across the system within 5 minutes.                         |
| API URL                                                                                                       |                           | Enter the API URL to use to connect with Zabbix.                                                                                                                                                                           |
| Execution Group                                                                                               |                           | Enter the name of the execution group that will use this integration.                                                                                                                                                      |
| Client Code Tag                                                                                               | clientCode                | Enter the tag name whose value refers to client code. This is required for global Zabbix integrations.                                                                                                                     |
| Public URL                                                                                                    |                           | Enter the public Zabbix instance URL.                                                                                                                                                                                      |
| Tag Filter                                                                                                    |                           | Click the +Add Filter button to display one entry to map Name and Value. Enter any filters to match metrics to tags. Matching is case sensitive. This field can be empty if all metrics should be handled.                 |
| Host Filter                                                                                                   |                           | Click the +Add Filter button to display a host entry field. Enter any filters to match host names. Host filter must match either host. Matching is case sensitive. The field can be empty if all metric should be handled. |
| Initial Load Interval                                                                                         | 0 hrs 0 min 0 sec         | Enter the initial load interval when using this integration.                                                                                                                                                               |
| Load Interval                                                                                                 | 0 hrs 0 min 0 sec         | Enter a load interval value after loading when using this integration.                                                                                                                                                     |
| Monitored Hosts Only                                                                                          | No                        | Enable or disable using only monitored hosts for metrics.                                                                                                                                                                  |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                           | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                                                                          |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}