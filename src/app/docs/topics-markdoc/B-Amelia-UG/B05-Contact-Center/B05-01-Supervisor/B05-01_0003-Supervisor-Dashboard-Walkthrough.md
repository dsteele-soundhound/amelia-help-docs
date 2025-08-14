
# Supervisor Dashboard Walkthrough

## Introduction

Supervisors can view metrics for all conversations with the ability to export conversation data for offline analysis. The Supervisor Dashboard displays conversation metrics organized by queues and agents.

## Accessing the Supervisor Dashboard

{% include from="B05-00_0001-SupervisorDashboard-Access.md" element-id="B05-01_0002-SupervisorDashboard-Access_snippet" /%}


## What You'll Learn

In this topic you'll learn about:

* [Access permissions needed to view the dashboard](#Permissions)

* [The Supervisor Dashboard](#Supervisor)

##Access Permissions to View the Dashboard {% #Permissions %}

To view the dashboard, you must be assigned to the `Global Agent Supervisor` group.

In addition, to see Agent Summary data in the Agent Supervisor charts, supervisors much have `AUTHORITY_ADMIN_ORCHESTRATOR_VIEW`, `AUTHORITY_RESPONSE_POOL_VIEW`, `AUTHORITY_ADMIN_VIEW`, `AUTHORITY_ADMIN_DOMAIN_VIEW`, and `AUTHORITY_ADMIN_USER_VIEW` authorities assigned to their user account.

To assign groups and authorities to users, click the Administration link. It's at the top left of any workspace. Then click the Users button that appears on the left edge to display tools.

##The Supervisor Dashboard {% #Supervisor %}

The Supervisor dashboard includes tools with a chart and two data tables.

* Tools above the chart and in the data tables let you filter data by a variety of criteria.
* The **Conversations chart** displays conversations handled by Amelia and agents. The chart also displays abandoned escalated conversations.
* The **Queues Summary** table displays performance data for each escalation queue.
* The **Agents Summary** table displays performance data for each agent.

### Tools

The top of the dashboard has several tools to filter data and refresh data. You also can set audio alerts for SLA events.

| Tool                                                                                                    | Description                                                                                              |
|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Date                                                                                                    | Filters dashboard data by date. Today is the default.                                                    |
| Domain                                                                                                  | Filters dashboard data by domain.                                                                        |
| Queues                                                                                                  | Filters dashboard data by escalation queue.                                                              |
| Online Agents                                                                                           | Toggle on or off to display data from online agents only.                                                |
| ![AudioAlert-Btn-Supervisor-Dashboard.png](AudioAlert-Btn-Supervisor-Dashboard.png){width="40"}         | Click the button to activate audio alerts. You can select alerts for SLA OK, SLA Warn, and SLA Critical. |
| ![Refresh-Btn-Supervisor-Dashboard.png](Refresh-Btn-Supervisor-Dashboard.png){width="40"}               | Click to set a refresh rate for data to be updated. 5 seconds is the default.                            |


### Conversations Chart

This chart displays aggregate data in visual form. Hover over the chart to display data for selected time periods.

| Heading            | Description                                                |
|--------------------|------------------------------------------------------------|
| Amelia Handled     | The number of conversations Amelia handled.                |
| Amelia Abandoned   | The number conversations Amelia abandoned.                 |
| Escalate Abandoned | The number of escalated conversations that were abandoned. |
| Agent Handled      | The number of conversations handled by agents.             |
| Agent Abandoned    | The number of conversations abandoned by agents.           |


### Queues Summary

For each escalation queue, this table shows a variety of performance data.

All values and totals are for the current day in UTC time. Backend metrics update every two minutes by default. Data refreshes every 5 seconds by default.

| Heading                   | Description                                                                                                                                                                        |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Show Agents               | Click to show or hide the Agent Summary panel with details about agents assigned to the selected queue.                                                                            |
| Queue                     | The name of the escalation queue.                                                                                                                                                  |
| Queue Code                | The code used to identify the escalation queue.                                                                                                                                    |
| Current Conversations     | The number of currently active conversations: Current / Pending / Active.                                                                                                          |
| Ready Agents              | The number of agents assigned to the escalation queue whose status is Online.                                                                                                      |
| Busy Agents               | The number of agents assigned to the escalation queue whose status is Busy.                                                                                                        |
| Away Agents               | The number of agents assigned to the escalation queue whose status is Away.                                                                                                        |
| Offline Agents            | The number of agents assigned to the escalation queue whose status is Offline.                                                                                                     |
| Silent Agents             | The number of agents silenced for a selected queue.                                                                                                                                |
| Total Conversations       | The total number of conversations.                                                                                                                                                 |
| SLA Violations            | The number of conversations whose pick up time exceeded the SLA agreement time.                                                                                                    |
| Abandoned                 | The total number of abandoned conversations.                                                                                                                                       |
| Max Concurrent            | The number of conversations started today.                                                                                                                                         |
| Avg Answer Speed          | The average time between escalation and agent pick up.                                                                                                                             |
| Max Answer Speed          | The maximum time between escalation and agent pick up.                                                                                                                             |
| Avg Handle Time           | The average time between escalation and conversation end.                                                                                                                          |
| Max Handle Time           | The maximum time between escalation and agent pick up.                                                                                                                             |
| Avg RCS Time              | Average agent work time after a conversation is closed.                                                                                                                            |
| Max RCS Time              | Maximum agent work time after a conversation is closed.                                                                                                                            |
| Current Longest Wait Time | The longest current conversation wait time for the escalation queue.                                                                                                               |
| RCS Violations            | Number of violations of work time limit after a conversation is closed.                                                                                                            |
| Suppress Escalations      | Click to silence escalation data on or off for a selected queue. If there are no escalations and/or conversations, and no agents with Online status, this toggle does not display. |


### Agents Summary

For each agent assigned to an escalation queue, this table shows a variety of performance data.

All values and totals are for the current day in UTC time. Backend metrics update every two minutes by default. Data refreshes every 5 seconds by default.


| Heading        | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| Name           | The full name of the agent.                                              |
| Status         | The current status for the agent.                                        |
| Duration       | Total time the agent has spent resolving issues.                         |
| ALW            | Number of conversations the agent can handle currently.                  |
| CON            | Number of conversations agent is currently handling.                     |
| AV             | Availability for concurrent conversations.                               |
| Last Pickup    | Time since last conversation picked up by the agent.                     |
| VLM            | Total number of conversations handled by the agent.                      |
| MHC            | Maximum concurrent conversations agent is allowed to handle.             |
| Containment    | The rate of handled conversations for the agent.                         |
| NPS            | The Net Promoter Score based on agent handline conversations.            |
| CRT            | Number of SLA violations for conversations handled by the agent.         |
| AAS            | The average time between escalation and agent pick up.                   |
| MAS            | The maximum time between escalation and agent pick up.                   |
| AHT            | The average handle time between escalation and conversation end.         |
| MHT            | The maximum handle time between escalation and agent pick up.            |
| AR             | Abandoned rate for the agent.                                            |
| ER             | Escalation rate for the agent.                                           |
| ART            | Average time to provide a resolution code.                               |
| MRT            | Maximum time to provide a resolution code.                               |
| RV             | Number of times a resolution code was not provided in time.              |
| Silence Queue  | The number of Silent Queues / All Queues.                                |
| Silence Button | Click to silence data from the escalation queue that includes the agent. |



## More Resources

{% include from="B05-00_0001-ContactCenter-MoreResources.md" element-id="B05-00_0001-ContactCenter-MoreResources_snippet" /%}

