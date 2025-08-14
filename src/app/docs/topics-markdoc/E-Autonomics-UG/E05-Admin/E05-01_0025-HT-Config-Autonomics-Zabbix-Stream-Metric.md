# Configure Autonomics for Zabbix Streaming Metric Integration

## Introduction

{% include from="E05-01_0023-ZabbixStreamMetrics.md" element-id="E05-01_0023-ZabbixStreamMetrics_snippet" /%}

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Zabbix Streaming Metric integration](#Create).

* [The Zabbix Streaming Metric integration workspace](#The).


##Create a Zabbix Streaming Metric Integration {% #Create %}

To create a Zabbix Streaming Metric integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Zabbix Streaming Metric Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Zabbix Streaming Metric Integration Workspace {% #The %}

Click the Zabbix Streaming Metric Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Zabbix Streaming Metric integration.

![E05-01_0025-Zabbix-Streaming-Metrics](E05-01_0025-Zabbix-Streaming-Metrics.png){width="600"}

*The Zabbix Streaming Metric Integration Settings*

*Zabbix Streaming Metric Integration Settings*

|                                                    Setting                                                    |               Default               |                                                                                                Description                                                                                                 |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                                     | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                       |
| External System                                                                                               | Zabbix Streaming Metric Integration | Shows the type of integration in the list.                                                                                                                                                                 |
| Status                                                                                                        | Disabled                            | Enable or disable this integration.                                                                                                                                                                        |
| **Zabbix Streaming Metric Integration Configuration**                                                                                                                                                                                                                                                                                                          |||
| API Key                                                                                                       |                                     | Click to choose the Zabbix API key stored in Locksmith. The key ensures secure integration between your system and an LLM provider. Autonomics synchronizes changes across the system within 5 minutes.         |
| API URL                                                                                                       |                                     | Enter the API URL to use to connect with Zabbix.                                                                                                                                                           |
| Execution Group                                                                                               |                                     | Enter the name of the execution group that will use this integration.                                                                                                                                      |
| Client Code Tag                                                                                               | clientCode                          | Enter the tag name whose value refers to client code. This is required for global Zabbix integrations.                                                                                                     |
| Public URL                                                                                                    |                                     | Enter the public Zabbix instance URL.                                                                                                                                                                      |
| Tag Filter                                                                                                    |                                     | Click the +Add Filter button to display one entry to map Name and Value. Enter any filters to match metrics to tags. Matching is case sensitive. This field can be empty if all metrics should be handled. |
| Max Attempts                                                                                                  | 1                                   | Enter the maximum number of attempts to send an alert. The possible values range from 1-100.                                                                                                               |
| Max Records                                                                                                   | 0                                   | Enter the maximum number of events or items that can be sent within one message. Possible values range from 0 to unlimited.                                                                                |
| Max Senders                                                                                                   | 1                                   | Enter the maximum number of sender processes to run for this connector.                                                                                                                                    |
| Platform Token                                                                                                |                                     | Enter the token used to authenticate Zabbix HTTP requests to Autonomics.                                                                                                                                        |
| Timeout                                                                                                       | 60                                  | Enter the Alert script timeout. The field accepts seconds and time unit with suffix. Possible values range from 1 to 60 seconds.                                                                           |
| Initial Load Interval                                                                                         | 0 hrs 0 min 0 sec                   | Enter the initial load interval when using this integration.                                                                                                                                               |
| Monitored Hosts Only                                                                                          | No                                  | Enable or disable using only monitored hosts for metrics.                                                                                                                                                  |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                                     | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                                                          |

 

 

| Setting                                                                                                       |               Default               |                                                                                                                                                                                                     Description                                                                                                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                                     | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                                                                                                                                                                                                                |
| External System                                                                                               | Zabbix Streaming Metric Integration | Shows the type of integration in the list.                                                                                                                                                                                                                                                                                                                                                                          |
| Status                                                                                                        | Disabled                            | Enable or disable this integration.                                                                                                                                                                                                                                                                                                                                                                                 |
| **Zabbix Streaming Metric Integration Configuration**                                                         |||
| Provider Type                                                                                                 |                                     | Select the Zabbix Streaming Metric Integration source. Options are Azure Open AI and OpenAI.                                                                                                                                                                                                                                                                                                                        |
| API Key                                                                                                       |                                     | Type or copy paste the API key for your selected Zabbix Streaming Metric Integration provider. The key ensures secure integration between your system and an LLM provider. The API key is stored in a secure Autonomics Locksmith vault. Autonomics synchronizes changes across the system within 5 minutes.                                                                                                                  |
| Batch processing time limit                                                                                   |                                     | If appropriate, select a time limit. If the limit is set to 24 hours, the system will process batches up to this limit. If the time limit is not set (empty), batch processing is disabled. Tasks will be processed individually For OpenAI, the batch processing time limit is capped at 24 hours. Any batch must be completed within that time limit. This ensures efficient resource usage and system stability. |
| Endpoint                                                                                                      |                                     | Endpoint of an Azure OpenAI LLM deployment. Displays only if Azure OpenAI is selected as Provider Type.                                                                                                                                                                                                                                                                                                             |
| **Azure OpenAI: Required LLM Properties for Knowledge Articles**                                              |||
| Model                                                                                                         |                                     | Azure OpenAI completion model. Options are gpt-4 (8192) and gpt-4o (128000).                                                                                                                                                                                                                                                                                                                                        |
| Deployment Name                                                                                               |                                     | Azure OpenAI model deployment name.                                                                                                                                                                                                                                                                                                                                                                                 |
| API Version                                                                                                   |                                     | Enter the type of Azure OpenAI deployment model API version.                                                                                                                                                                                                                                                                                                                                                        |
| **Azure OpenAI: Optional LLM Properties for Embeddings**                                                      |||
| Model                                                                                                         |                                     | Azure OpenAI completion model. Option is text-embedding-ada-002.                                                                                                                                                                                                                                                                                                                                                    |
| Deployment Name                                                                                               |                                     | Azure OpenAI model deployment name.                                                                                                                                                                                                                                                                                                                                                                                 |
| API Version                                                                                                   |                                     | Enter the type of Azure OpenAI deployment model API version.                                                                                                                                                                                                                                                                                                                                                        |
| **OpenAI: Required LLM Properties for Knowledge Articles**                                                    |||
| Model                                                                                                         |                                     | OpenAI completion model. Options are gpt-4 (8192) and gpt-4o (128000).                                                                                                                                                                                                                                                                                                                                              |
| **OpenAI: Operational LLM Properties for Embeddings**                                                         |||
| Model                                                                                                         |                                     | OpenAI completion model. Option is text-embedding-ada-002.                                                                                                                                                                                                                                                                                                                                                          |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                                     | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                                                                                                                                                                                                                                                                   |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}

 
