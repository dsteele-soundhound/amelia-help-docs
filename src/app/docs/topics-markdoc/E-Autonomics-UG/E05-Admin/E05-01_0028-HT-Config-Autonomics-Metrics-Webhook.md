# Configure Autonomics for Metrics Webhook Integration

## Introduction

{% include from="E05-01_0028-MetricsWebhook.md" element-id="E05-01_0028-MetricsWebhook_snippet" /%}

Webhooks allow for real-time, event-driven communication, ensuring that performance metrics are updated as soon as new data is available. This continuous flow of metrics enables Amelia Autonomics to monitor for performance deviations in near real-time, enhancing its ability to detect anomalies quickly.

For example, the Metrics Webhook Integration powers the anomaly detection engine, enabling faster identification and resolution of potential issues. The result is a more responsive, reliable system that optimizes performance monitoring and troubleshooting.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Metrics Webhook integration](#Create).

* [The Metrics Webhook integration workspace](#The).

##Create a Metrics Webhook Integration {% #Create %}

To create a Metrics Webhook integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Metrics Webhook Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Metrics Webhook Integration Workspace {% #The %}

Click the Metrics Webhook Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Metrics Webhook integration.

![E05-01_0028-Metrics-Webhook](E05-01_0028-Metrics-Webhook.png){width="600"}

*The Metrics Webhook Integration Basic Section*

*Metrics Webhook Integration Basic Section Elements*

|                                                    Element                                                    |      Default      |                                                                              Description                                                                              |
|---------------------------------------------------------------------------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                   | Enter the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| External System                                                                                               | Generative AI     | Shows the type of integration in the list.                                                                                                                            |
| Status                                                                                                        | Disabled          | Enable or disable this integration.                                                                                                                                   |
| **Metrics Webhook Integration Configuration**                                                                                                                                                                                                                                                           |||
| Platform Token                                                                                                |                   | Enter the token which will be used to authenticate and handle event HTTP requests to Autonomics.                                                                           |
| Request Timeout                                                                                               | 0 hrs 1 min 0 sec | Timeout after which an HTTP request will be aborted. Default is 1 minute. Even if the timeout is reached, metric handling can still be completed in the background.   |
| Execution Group                                                                                               |                   | Enter the name of the execution group that will use this integration.                                                                                                 |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                   | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                     |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}