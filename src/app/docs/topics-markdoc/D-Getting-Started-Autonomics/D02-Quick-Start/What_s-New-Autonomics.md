# What's New in AIOps

The Async Web-Hook Integration feature handles HTTP requests asynchronously. This facilitates seamless communication between your external systems and the platform. Your initial request is accepted and acknowledged immediately. Event processing occurs in the background. This allows for efficient handling without blocking the system.

Upon receiving a request, the platform responds with a 202 Accepted status and a unique Event ID. This confirms receipt while continuing to process the event in the background. This approach reduces latency. It allows your system to operate without waiting for event completion.

Several key properties manage asynchronous event processing:

* The Platform Token property ensures secure handling. It protects communication between your systems and the platform. Even if a timeout occurs, the event processing continues in the background. This prevents data loss and ensures successful completion.

* The Request Timeout property manages how long the system will wait before failing to send a reply. The property optimizes request handling during high-demand periods.

* The Reply Url property receives an additional reply once event processing completes. This provides updates on the event's resolution. It enables synchronization of workflows and informed decision-making based on the latest information.

This feature minimizes manual intervention. It streamlines operations, improves overall efficiency, and reduces error risks. Your systems remain updated with real-time event status.

## Access the Integrations Workspace

To access the New Integration workspace:

1. Click the main navigation menu at the top left and select the Administration link.

2. Click the Settings link that appears in a flyout menu.

3. Click the Integrations link that appears in a flyout menu.

![E05-01-0017_Integrations-Panel](E05-01-0017_Integrations-Panel.png){width="900" style="block"}
*Figure 1. Integrations Workspace*

## What You'll Learn

In this topic, you'll learn about:

* [Creating an Event Webhook Async integration](#Create).

* [The Event Webhook Async panel workspace](#The).

##Create an Event Webhook Async Integration {% #Create %}

To create an Event Web-hook Async integration:

1. At the top right of the Integrations workspace, click the + New Integration button. It's located at the top right. The Select External System panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the Event Web-hook Async button in the Select External Systems panel. The New Integration form will display.

3. Configure the properties in the panel.

4. Click the Create button at the top of the panel.

![E05-01-0017_Integrations-New](E05-01-0017_Integrations-New.png){width="900" style="block"}
*Figure 2. Integrations Workspace with Select External System Panel*

##The Event Webhook Async Panel Workspace {% #The %}

The New Configuration panel includes several properties to configure an Event Webhook Async integration.

![E05-01-0017_EventWebhookAsync](E05-01-0017_EventWebhookAsync.png){width="600" style="block"}
*Figure 3. Event Webhook Async Settings*

|                                                    Setting                                                    |       Default        |                                                                                                                                                 Description                                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                      | Type the name of the integration. Clicking Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                                                                                                         |
| External System                                                                                               | Event Web-hook Async | Shows the type of integration in the list.                                                                                                                                                                                                                                                                   |
| Status                                                                                                        | Disabled             | * Enabled: By enabling this module, you allow the Autonomics platform to connect and interact with the specified Event Web-hook Async services. * Disabled: By disabling this module, you effectively prevent the Autonomics platform from connecting and interacting with the specified Event Web-hook Sync services. |
| Platform Token                                                                                                |                      | Enter the platform token.                                                                                                                                                                                                                                                                                    |
| Request Timeout                                                                                               |                      | The maximum duration a client is willing to wait for a response. Timeout after which no further replies (with a fully handled Event) will be posted; for example, PT60S. Even if the timeout is reached, Event handling can still be completed in the background.                                            |
| replyUrl                                                                                                      |                      | URL that will be triggered once the web hook Event has been fully handled. The handled Event will be included in the request body. This field can be left blank if no notification is required for the requestor.                                                                                            |
| Reply HTTP Method                                                                                             | POST                 | Select the type of method from the dropdown list. The available options are: * POST <!-- --> * PUT.                                                                                                                                                                                                          |
| Reply HTTP Headers                                                                                            |                      | Headers to be set when invoking the replyURL (can be left empty).                                                                                                                                                                                                                                            |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                      | Closes the Properties panel and returns your focus to the canvas. Clicking the Delete icon, clears the field.                                                                                                                                                                                                |
[Event Webhook Async Settings]

## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md).

* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md).

* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md).

 

 

 
