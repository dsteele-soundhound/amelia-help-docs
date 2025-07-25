# Configure Autonomics for Event Webhook Sync

## Introduction

{% include from="E05-01_0012-EventWebhook-sync.md" element-id="E05-01_0012-EventWebhook-sync_snippet" /%}

This integration allows you to enhance the reliability of your incident management and automation processes. The platform Token and Request Timeout properties allow for secure and efficient handling of requests, ensuring that your system remains responsive even under heavy loads. Additionally, the automatic continuation of event processing in the background ensures that no data is lost, even if a timeout occurs.

This integration minimizes manual intervention, streamlining your operations and ensuring that your systems stay up-to-date with real-time event statuses, ultimately improving operational efficiency and reducing the risk of errors.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating an Event Web-hook Sync integration](#Create).

* [The Event Webhook Sync workspace](#The).

##Create an Event Webhook Sync Integration {% #Create %}

To create an Event Web-hook Async integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Event Web-hook Async** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Event Webhook Sync Workspace {% #The %}

Click the Event Webhook Sync button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure an Event Webhook Sync integration.

![E05-01_0016-Integrations-Webhook-Sync](E05-01_0016-Integrations-Webhook-Sync.png){width="600"}

*The Event Webhook Sync Settings*

*Event Webhook Sync Settings*

|                                                    Setting                                                    |      Default       |                                                                                                                            Description                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                    | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                                                              |
| External System                                                                                               | Event Webhook Sync | Shows the type of integration in the list.                                                                                                                                                                                                                        |
| Status                                                                                                        | Disabled           | Enable or disable this integration. Disabled is the default.                                                                                                                                                                                                      |
| Platform Token                                                                                                |                    | Enter the platform token.                                                                                                                                                                                                                                         |
| Request Timeout                                                                                               |                    | The maximum duration a client is willing to wait for a response. Timeout after which no further replies (with a fully handled Event) will be posted; for example, PT60S. Even if the timeout is reached, Event handling can still be completed in the background. |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                    | Closes the Properties panel and returns your focus to the canvas. Clicking the Delete icon, clears the field.                                                                                                                                                     |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}
