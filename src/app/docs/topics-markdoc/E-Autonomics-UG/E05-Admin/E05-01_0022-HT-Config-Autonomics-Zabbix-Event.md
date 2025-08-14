# Configure Autonomics for Zabbix Event Integration

## Introduction

{% include from="E05-01_0022-ZabbixEvent.md" element-id="E05-01_0022-ZabbixEvent_snippet" /%}

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Zabbix Event integration](#Create).

* [The Zabbix Event integration workspace](#The).

##Create a Zabbix Event Integration Integration {% #Create %}

To create a Zabbix Event integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Zabbix Event Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Zabbix Event Integration Workspace {% #The %}

Click the Zabbix Event Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Zabbix Event integration.

![E05-01_0022-Zabbix-Event](E05-01_0022-Zabbix-Event.png){width="600"}

*The Zabbix Event Integration Settings*

*Zabbix Event Integration Settings*

| Setting                                                                                                       | Default                  | Description                                                                                                                                                                                                              |
|---------------------------------------------------------------------------------------------------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                              |                          | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                                                     |
| External System                                                                                               | Zabbix Event Integration | Shows the type of integration in the list.                                                                                                                                                                               |
| Status                                                                                                        | Disabled                 | Enable or disable this integration.                                                                                                                                                                                      |
| **Zabbix Event Integration Configuration**                                                                    |                          |                                                                                                                                                                                                                          |
| API Key                                                                                                       |                          | Click to choose the Zabbix API key stored in Locksmith. The key ensures secure integration between your system and an LLM provider. Autonomics synchronizes changes across the system within 5 minutes.                       |
| API URL                                                                                                       |                          | Enter the API URL to use to connect with Zabbix.                                                                                                                                                                         |
| Execution Group                                                                                               |                          | Enter the name of the execution group that will use this integration.                                                                                                                                                    |
| Client Code Tag                                                                                               | clientCode               | Enter the tag name whose value refers to client code. This is required for global Zabbix integrations.                                                                                                                   |
| Public URL                                                                                                    |                          | Enter the public Zabbix instance URL.                                                                                                                                                                                    |
| Tag Filter                                                                                                    |                          | Click the +Add Filter button to display one entry to map Name and Value. Enter any filters to match events to tags. Matching is case sensitive. This field can be empty if all events should be handled.                 |
| Attempts                                                                                                      | 3                        | Enter the maximum number of attempts to send an alert. The possible values range from 1-100.                                                                                                                             |
| Attempt Interval                                                                                              | 0 hrs 0 min 10 sec       | Enter the interval between retry attempts. The field accepts seconds and time unit with suffix. The possible values range from 0 seconds to 1 hour.                                                                      |
| Concurrent Sessions                                                                                           | 16                       | Enter the maximum number of alerts that can be processed in parallel. The possible values range from 0-100 with 0 equal to unlimited concurrent sessions.                                                                |
| Escalation Step Count                                                                                         | 0                        | Enter the maximum number of alerts for non-acknowledged events. The value must be greater than or equal to 0. 0 is equal to unlimited alerts for non-acknowledged events.                                                |
| Escalation Step Duration                                                                                      | 0 hrs 2 min 0 sec        | Enter the alert retry interval for non-acknowledged events. The value must be greater than 60 seconds.                                                                                                                   |
| Platform Token                                                                                                |                          | Enter the token used to authenticate Zabbix HTTP requests to Autonomics.                                                                                                                                                      |
| Severities                                                                                                    |                          | Click the +Add Severity Mapping button to display an entry to map a severity label to a task priority. Enter the event severities mapped to task priorities. The integration will only handle pre-configured severities. |
| Timeout                                                                                                       | 30                       | Enter the Alert script timeout. The field accepts seconds and time unit with suffix. Possible values range from 1 to 60 seconds.                                                                                         |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                          | Closes the right side panel and returns your focus to the Integrations workspace.                                                                                                                                        |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}
