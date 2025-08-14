# Agent Workspace Walkthrough

## Introduction

To use the Agent workspace effectively, you must understand its features and tools and where to find them. Agents use the workspace to help manage escalated conversations. It also includes widgets to make conversations more efficient.

Our [Agent Workspace Introduction](B06-00_0001-Agent-Workspace-Intro.md) topic describes many of these features.

## Accessing the Agent Workspace

{% include from="B06-00_0001-AgentAccess.md" element-id="B06-00_0001-AgentAccess_snippet" /%}

![B06-00_0002-Agent-Workspace](B06-00_0002-Agent-Workspace.png){width="900" style="block"}

*The Agent Workspace*

## What You'll Learn

In this topic you'll learn about:

* [The Conversations column](#The).

* [The center column](#The2).

* [The widgets column](#The3).

##The Conversations Column {% #The %}

The Conversations column sorts escalated conversations into four tabs: Active, Ready, Pending, Closed. To pick up a conversation, agents click an item in the Ready tab. This moves the conversation to the Active tab. The selected conversation shows in the center column. Agents can click one or more conversations in the Active tab. This allows agents to handle multiple conversations at the same time.

Agents also can move a conversation to the Pending tab. This process includes setting a timer. When the timer expires, the pending conversation moves back to the Ready tab.

Closed conversations move to the Closed tab.

##The Center Conversation Column {% #The2 %}

The center column shows the current active conversation. When a new conversation appears, a Pickup button displays at the bottom of the center column. Agents click the Pickup button to take a conversation.

The message box at the bottom of the center column provides agents with features. They can upload files, for example. Or move a conversation to the Pending tab. Agents also can close a conversation and mute a voice conversation.

Some escalation queues include resolution codes. Codes can help when sorting and analyzing closed conversations. If codes exist, then closing a conversation will display a Resolution Codes button. Click the button to display a Resolution Report popup and then assign a resolution code.

For escalation queues configured with Service Level Agreements (SLAs), agents will see timers in the center column. They're located above and below the active conversation space.

* A timer at the top left displays time passed from pickup. A second timer to its right displays the Pickup Time SLA setting if the conversation isn't picked up. Or the Handle Time SLA if it's picked up.

* The timer at the bottom displays the time to breach the Interaction Time Warning setting. Otherwise, it displays the Interaction Time SLA.

You can configure Escalation Queues in the Amelia Contact Center module. SLAs are set with the SLA(s) tab for an escalation queue workspace.

##The Widgets Column {% #The3 %}

The right column of the Agent workspace includes widgets. Agents use widgets to streamline their workload. For example, canned responses save typing the same response over and over. Other widgets show user satisfaction, available automations, and connecting to another host computer.

These are the currently available widgets. They display based on circumstances. For example, the settings configured by a Supervisor. Conversation context also affects what widgets display.

* **My Responses**: Displays response templates and other canned responses. Includes the ability to search responses and filter by tags.

* **Available Automations**: Automations that match terms in the conversation will display in this widget.

* **Connect to host**: If needed, this widget allows the agent to connect to a host computer to help resolve a ticket.

{% include from="B05-05_0001-Settings-List.md" element-id="B06-00_0001-Settings-List_snippet" /%}

Supervisors can configure which widgets agents see by using the Settings workspace in the Contact Center.

## More Resources

{% include from="B06-00_0001-AgentMoreResources.md" element-id="B06-00_0001-AgentMoreResources" /%}