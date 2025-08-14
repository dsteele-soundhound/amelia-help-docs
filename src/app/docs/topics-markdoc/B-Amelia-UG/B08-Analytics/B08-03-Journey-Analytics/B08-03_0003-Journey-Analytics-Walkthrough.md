# Journey Analytics Walkthrough

## Introduction

The Journey Analytics tab workspace shows Amelia's conversation and resolution flows. The flow diagram begins with the number of conversations on the left. Then the diagram evolves to include conversations Amelia covered and escalated conversations.

> **Note:** The AUTHORITY_JOURNEY_VIEW authority is required to view the Journey Analytics tab workspace. Several user roles include this authority. The Admin, Agent, Agent Supervisor, Knowledge Designer, Power User, and RBAC Administrator roles.

## Accessing the Journey Analytics Workspace

To access Journey Analytics workspaces:

1. From the top left main navigation menu, click **Analytics**.

2. On the left edge, click the **Journey Analytics button** to access features.

![B08-03_0003-Journey-Analytics-Workspace.png](B08-03_0003-Journey-Analytics-Workspace.png){width="800"}

*The Journey Analytics Workspace*

## What You'll Learn

In this topic you'll learn about:

* [The Journey Analytics workspace](#Workspace).

* [Viewing journey step charts](#StepCharts).

* [Viewing a list of conversations for a journey steps](#StepConversationList).

* [Viewing a conversation for a journey step](#StepConversations).


## The Journey Analytics Workspace {% #Workspace %}

The Journey Analytics default tab workspace displays a chart. The chart displays all the steps in conversations with  Amelia. For example, steps for conversations Amelia covered and escalated.

Each step includes the number of conversations, Average Quality of Service (QoS) score from -1 to 1, counts for BPN flows and Intents, and Average Handle time in hh:mm:ss format.

Each step in the chart also can display information:

* Clicking a step in the Journey Analytics displays charts for the step. With the list of all steps displayed along the left edge of the tab workspace.

* Clicking a chart displays a right side panel that lists all the conversations for the chart.

* Clicking a conversation listed in the right side panel displays the conversation in the tab workspace. Two extra tabs display the execution process and a summary of the conversation.

## View Step Charts {% #StepCharts %}

To view charts and more information about a step in a conversation:

1. Click any step in the Journey Analytics default tab workspace. A set of charts for that step displays in the tab workspace.

2. Hover over a chart to display data in a small popup.

![B08-03_0003-Journey-Analytics-Charts.png](B08-03_0003-Journey-Analytics-Charts.png){width="800"}

*Charts for the Handled Step*


## View a List of Conversations for a Journey Step {% #StepConversationList %}

To view a list of conversations for a step:

1. Click any step in the Journey Analytics default tab workspace. A set of charts for that step displays in the tab workspace.

2. Click any chart in the charts displayed. A right side panel displays with conversations for the step.

![B08-03_0003-Journey-Analytics-List.png](B08-03_0003-Journey-Analytics-List.png){width="800"}

*List of Conversations for Selected Step*


## View a Conversation for a Journey Step {% #StepConversations %}

To display details about one conversation for a step:

1. Click any step in the Journey Analytics default tab workspace. A set of charts for that step displays in the tab workspace.

2. Click any chart in the charts displayed. A right side panel displays with conversations for the step.

3. Click a conversation listed in the right side panel. The conversation displays in a new tab workspace.

> **Note:** The conversation tab workspace includes tabs to display the conversation, the execution history, and an AI-generated summary of the conversation. You also can observe the conversation as a user. Or delete the conversation transcript.

![B08-03_0003-Journey-Analytics-Convo.png](B08-03_0003-Journey-Analytics-Convo.png){width="800"}

*The Conversation Tab*

![B08-03_0003-Journey-Analytics-ConvoExecution.png](B08-03_0003-Journey-Analytics-ConvoExecution.png){width="800"}

*The Execution History Tab*

![B08-03_0003-Journey-Analytics-ConvoSummary.png](B08-03_0003-Journey-Analytics-ConvoSummary.png){width="800"}

*The Summary Tab*




## More Resources

{% include from="B08-02_Analytics-MoreResources.md" element-id="B08-02_ConvAnalytics-MoreResources_snippet" /%}
