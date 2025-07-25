# Dashboard Walkthrough

## Introduction

The Dashboard workspace displays conversation-related data. For example, average and maximum handle times. You can filter the data by clicking the tabs at the top. Filter data by Amelia domain, escalation queues, agents, and other elements. And you can export the tabular data in CSV format. This makes it easy to work with conversation performance data.

## Access the Dashboard Workspace

{% include from="B08-02_0101-DashboardAccess.md" element-id="B08-02_0101-DashboardAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Use the Dashboard workspace.](#Workspace)
* [Export dashboard data](#Export)

##Using the Dashboard Workspace {% #Workspace %}

The Conversation Analytics tab workspace top panel lets you filter data by date and domains. There's also a button to export filtered data in CSV format.

The Conversation Analytics tab workspace also includes tabs. Click each tab to filter data by Domain, Escalation Queue, Agent, BPN process or DEB flow, and more.

> Hover your computer mouse over a pie chart to see data sources and values.

*Headings for Conversation Analytics Dashboard*

| Heading            | Description                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name               | The unique name based on tab you selected. For example, an agent name or DEB flow name.                                                                        |
| Total              | The total number of conversations.                                                                                                                             |
| Amelia Handled     | Total conversations handled completely by  Amelia.                                                                                                              |
| Agent Handled      | Total conversations handled by an agent.                                                                                                                       |
| Escalated          | Total number of escalated conversations.                                                                                                                       |
| Max Concurrent     | Maximum concurrent conversations for the selected time period.                                                                                                 |
| SLA Violations     | The number of conversations whose pick up time exceeded (violated) the SLA agreement time.                                                                     |
| Total Abandoned    | The total number of abandoned conversations by domain, escalation queue, or agent.                                                                             |
| Amelia Abandoned   | The total number of abandoned conversations by  Amelia.                                                                                                         |
| Escalate Abandoned | The total number of escalated conversations abandoned by agents.                                                                                               |
| Agent Abandoned    | The total number of escalated conversations abandoned.                                                                                                         |
| Avg Answer Speed   | The average time between escalation and agent pick up.                                                                                                         |
| Max Answer Speed   | The maximum time between escalation and agent pick up.                                                                                                         |
| Avg Handle Time    | The average time between escalation and conversation end.                                                                                                      |
| Max Handle Time    | The maximum time between escalation and conversation end.                                                                                                      |
| Avg RCS Time       | The average agent work time after a conversation is closed. This data displays only in the Domain, Escalation Queue, and Agent tabs.                           |
| Max RCS Time       | The maximum agent work time after a conversation is closed. This data displays only in the Domain, Escalation Queue, and Agent tabs.                           |
| RCS Violations     | The number of violations of the agent work time limit after a conversation is closed. This data displays only in the Domain, Escalation Queue, and Agent tabs. |


##Export Dashboard Data {% #Export %}

The Conversation Analytics tab workspace lets you export data in CSV format. To export data, click one of the tabs and then click the Export button in the top right panel.

Headings in the CSV file match what you see in the dashboard, as described above.

## More Resources

{% include from="B08-02_Analytics-MoreResources.md" element-id="B08-02_ConvAnalytics-MoreResources_snippet" /%}
