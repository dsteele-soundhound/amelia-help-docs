

# Escalation Teams Introduction

## Introduction

Escalation teams are agents who handle conversations escalated from Amelia.

Agents engage with customers in escalated conversations. They receive notifications or pick up conversations. Supervisors also assign escalated conversations. Agents see a push notification as a popup they can click to accept the escalation request.

### How Escalation Teams Work

Support teams handle escalated conversations. Supervisors organize, set up, and manage teams using tools included with Amelia. For example, a supervisor might observe a conversation then assign it to an agent. Or use metrics to understand agent workloads before they assign an escalated conversation.

Escalation teams are groups of call center agents or subject matter experts. They work together to handle escalated conversations. Agents can belong to more than one team. For example, a workplace support team and an application support team. One or more teams might handle conversations in escalation queues. And each could possibly support more than one escalation queue.

Before supervisors create new teams, they must set up groups and user accounts for agents. Supervisors then assign agents to groups and escalation teams. Once you configure agents, groups, and teams, in that order, then you set up escalation queues.

The [Escalation Team Management](B05-03_0003-Escalation-Teams-Management.md) topic describes how to create and manage teams.

## What You'll Learn

In this topic you'll learn about:

* [Access privileges needed to configure escalation teams](#Access).
* 
* [Configuring escalation support teams](#Configur).

* [Managing escalation support teams](#Managing).

* [Managing escalated conversations](#Managing2).

* [Maximum Concurrent Chats setting for escalation team members](#Maximum).

* [Accessing the Escalation Teams workspace](#Access2).

##Access privileges needed to configure escalation teams {% #Access %}

To create and modify escalation teams, users must have their access privileges include these authorities:

AUTHORITY_ADMIN_ESCALATION_QUEUE_VIEW

AUTHORITY_ADMIN_ESCALATION_QUEUE_EDIT

In addition, agents who will be part of more than one team need these authorities:

CONVERSATION_OBSERVE_AUTHORITY

CONVERSATION_PICKUP_AUTHORITY

##Configuring escalation support teams {% #Configur %}

Supervisors configure users, roles, groups, escalation teams, and escalation queues. Amelia staff also can configure these features when setting up an Amelia instance.

Once you create a domain, configuration follows these steps in this order:

1. Create users with Administration workspaces.

2. Create an agent group and assign it the Agent role with Administration workspaces.

3. Assign users to the agent group with Administration workspaces.

4. Create an escalation team and add users with Contact Center workspaces.

5. Create an escalation queue and add escalation teams with Contact Center workspaces.

6. Assign an escalation queue to a domain with Contact Center workspaces.

You can designate escalation teams as global or assigned to a domain. A global team services any queue in any domain. Teams assigned to a domain only service queues in that domain. Changing queue or team domain classification can affect what conversations agents can access.

An agent can belong to more than one escalation queue (and team). And more than one team can monitor a queue. In this example, the Workplace Support and Application Support teams monitor the IT Helpdesk Queue. And Agent 006 is part of both teams.

![B05-03_0002-Escalation-Teams-Schematic](B05-03_0002-Escalation-Teams-Schematic.png){width="600" style="block"}

*An Agents, Teams, and Queues Example*

##Managing escalation support teams {% #Managing %}

Supervisors have two dashboards to monitor their teams, queues, and agents.

* The Contact Center Home tab displays all current active conversations. Tools to the right of each conversation let them observe, take, or assign them.

* The Supervisor button on the left side of the Contact Center workspaces shows data for queues and agents.

##Managing escalated conversations {% #Managing2 %}

Supervisors and agents use the Agent workspace to manage escalated conversations. The workspace displays the full conversation in a center panel. Tools on the left side panel organize conversations by status. Tools on the right panel helps agents respond quickly and efficiently. For example, they can click to use canned responses or generative AI suggestions.

##Maximum Concurrent Chats setting for escalation team members {% #Maximum %}

Agents must have their user account configured to accept chats. The Max Concurrent Chats setting is 0 by default. It has to be set to 1 or greater. This is the number of conversations the agent can handle at one time.

##Access the Escalation Teams Workspace {% #Access2 %}

{% include from="B05-03_0002-EscalationTeams-Access.md" element-id="B05-03_0002-EscalationTeams-Access_snippet" /%}

## More Resources

{% include from="B05-00_0001-ContactCenter-MoreResources.md" element-id="B05-00_0001-ContactCenter-MoreResources_snippet" /%}

