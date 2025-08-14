# Configure Autonomics for Generative AI

## Introduction

{% include from="E05-01_0012-GenAI.md" element-id="E05-01_0012-GenAI_snippet" /%}

Using models provides many benefits. The models use historical data to predict incidents, generate solutions, and automate resolutions. This helps reduce downtime and boosts efficiency. Models also can aid root cause analysis. They can identify patterns, correlations, and anomalies in system data. And models can suggest improvements in server load, memory, and CPU utilization.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Generative AI integration](#Create).

* [The Generative AI integration workspace](#GenAI-workspace).


##Create a Generative AI Integration {% #Create %}

To create a Generative AI integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Generative AI** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Generative AI Integration Workspace {% #GenAI-workspace %}

Click the Generative AI button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Generative AI integration.

Selecting a Provider Type displays configuration options, as shown in the table below.

![E05-01_0020-Integrations-GenAI](E05-01_0020-Integrations-GenAI.png){width="600"}

*The Generative AI Integration Settings*

*Generative AI Integration Settings*

|                                                    Setting                                                    |    Default    |                                                                                                                                                                                                     Description                                                                                                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |               | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                                                                                                                                                                                                                |
| External System                                                                                               | Generative AI | Shows the type of integration in the list.                                                                                                                                                                                                                                                                                                                                                                          |
| Status                                                                                                        | Disabled      | Enable or disable this integration.                                                                                                                                                                                                                                                                                                                                                                                 |
| **Generative AI Configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |||
| Provider Type                                                                                                 |               | Select the generative AI source. Options are Azure Open AI and OpenAI.                                                                                                                                                                                                                                                                                                                                              |
| API Key                                                                                                       |               | Type or copy paste the API key for your selected generative AI provider. The key ensures secure integration between your system and an LLM provider. The API key is stored in a secure Autonomics Locksmith vault. Autonomics synchronizes changes across the system within 5 minutes.                                                                                                                                        |
| Batch processing time limit                                                                                   |               | If appropriate, select a time limit. If the limit is set to 24 hours, the system will process batches up to this limit. If the time limit is not set (empty), batch processing is disabled. Tasks will be processed individually For OpenAI, the batch processing time limit is capped at 24 hours. Any batch must be completed within that time limit. This ensures efficient resource usage and system stability. |
| Endpoint                                                                                                      |               | Endpoint of an Azure OpenAI LLM deployment. Displays only if Azure OpenAI is selected as Provider Type.                                                                                                                                                                                                                                                                                                             |
| **Azure OpenAI: Required LLM Properties for Knowledge Articles**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |||
| Model                                                                                                         |               | Azure OpenAI completion model. Options are gpt-4 (8192) and gpt-4o (128000).                                                                                                                                                                                                                                                                                                                                        |
| Deployment Name                                                                                               |               | Azure OpenAI model deployment name.                                                                                                                                                                                                                                                                                                                                                                                 |
| API Version                                                                                                   |               | Enter the type of Azure OpenAI deployment model API version.                                                                                                                                                                                                                                                                                                                                                        |
| **Azure OpenAI: Optional LLM Properties for Embeddings**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |||
| Model                                                                                                         |               | Azure OpenAI completion model. Option is text-embedding-ada-002.                                                                                                                                                                                                                                                                                                                                                    |
| Deployment Name                                                                                               |               | Azure OpenAI model deployment name.                                                                                                                                                                                                                                                                                                                                                                                 |
| API Version                                                                                                   |               | Enter the type of Azure OpenAI deployment model API version.                                                                                                                                                                                                                                                                                                                                                        |
| **OpenAI: Required LLM Properties for Knowledge Articles**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |||
| Model                                                                                                         |               | OpenAI completion model. Options are gpt-4 (8192) and gpt-4o (128000).                                                                                                                                                                                                                                                                                                                                              |
| **OpenAI: Opetional LLM Properties for Embeddings**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |||
| Model                                                                                                         |               | OpenAI completion model. Option is text-embedding-ada-002.                                                                                                                                                                                                                                                                                                                                                          |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |               | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                                                                                                                                                                                                                                                                   |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}