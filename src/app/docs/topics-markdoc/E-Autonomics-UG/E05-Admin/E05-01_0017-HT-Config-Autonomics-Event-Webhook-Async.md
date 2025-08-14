# Configure Autonomics for Event Webhook Async

## Introduction

{% include from="E05-01_0012-EventWebhook-Async.md" element-id="E05-01_0012-EventWebhook-Async_snippet" /%}

Upon receiving a request, the platform responds with a 202 Accepted status and a unique Event ID. This confirms receipt while continuing to process the event in the background. This approach reduces latency. It allows your system to operate without waiting for event completion.

Several key properties manage asynchronous event processing:

* The **Platform Token** property ensures secure handling. It protects communication between your systems and the platform. Even if a timeout occurs, the event processing continues in the background. This prevents data loss and ensures successful completion.

* The **Request Timeout** property manages how long the system will wait before failing to send a reply. The property optimizes request handling during high-demand periods.

* The **Reply Url** property receives an additional reply once event processing completes. This provides updates on the event's resolution. It enables synchronization of workflows and informed decision-making based on the latest information.

This feature minimizes manual intervention. It streamlines operations, improves overall efficiency, and reduces error risks. Your systems remain updated with real-time event status.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating an Event Webhook Async integration](#Create).

* [The Event Webhook Async panel workspace](#The).

##Create an Event Webhook Async Integration {% #Create %}

To create an Event Web-hook Async integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Event Web-hook Async** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*Figure 1. Integrations Workspace with Select External System Panel*

##The Event Webhook Async Panel Workspace {% #The %}

Click the Event Webhook Async button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure an Event Webhook Async integration.

![E05-01-0017_EventWebhookAsync](E05-01-0017_EventWebhookAsync.png){width="600"}

*Figure 2. Event Webhook Async Settings*

|                                                    Setting                                                    |       Default        |                                                                                                                            Description                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                      | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                                                              |
| External System                                                                                               | Event Web-hook Async | Shows the type of integration in the list.                                                                                                                                                                                                                        |
| Status                                                                                                        | Disabled             | Enable or disable this integration. Disabled is the default.                                                                                                                                                                                                      |
| Platform Token                                                                                                |                      | Enter the platform token.                                                                                                                                                                                                                                         |
| Request Timeout                                                                                               |                      | The maximum duration a client is willing to wait for a response. Timeout after which no further replies (with a fully handled Event) will be posted; for example, PT60S. Even if the timeout is reached, Event handling can still be completed in the background. |
| replyUrl                                                                                                      |                      | URL that will be triggered once the web hook Event has been fully handled. The handled Event will be included in the request body. This field can be left blank if no notification is required for the requestor.                                                 |
| Reply HTTP Method                                                                                             | POST                 | Select the type of method from the dropdown list. The available options are: * POST <!-- --> * PUT.                                                                                                                                                               |
| Reply HTTP Headers                                                                                            |                      | Headers to be set when invoking the replyURL (can be left empty).                                                                                                                                                                                                 |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                      | Closes the Properties panel and returns your focus to the canvas. Clicking the Delete icon, clears the field.                                                                                                                                                     |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}