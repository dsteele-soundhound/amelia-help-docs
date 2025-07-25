# Escalation Queues Introduction

## Introduction

Escalation queues manage conversations that Amelia escalates to human agents.

### How Conversations Escalate

Amelia handles conversations from start to finish. However, there are several situations where Amelia can escalate conversations to human agents.

Amelia escalates a conversation when:

* A Builder flow or BPN process includes an Escalate task. Usually this is for a part of a process Amelia is not trained to complete.

* Amelia's emotional quotient can trigger escalations. Sometimes, it shows the person in a conversation is upset or close to upset.

* Any misunderstanding where Amelia expects one type of answer and receives another. For example, a verb when she expects a date or number.

### How Escalated Conversation are Managed

Amelia's Escalation Service escalates conversations from Amelia to a human agent. The service chooses an escalation queue based on a mix of factors. For example, conversations can include escalation queue information. Some conversations also might use their context to determine the escalation queue. If a queue isn't identified, Amelia uses the default queue configured for the domain.

Escalation queues determine which agents are available to handle an escalated conversation. A set of rules determines which agent gets the conversation.

The [Escalation Queues Management](B05-02_0003-Escalation-Queues-Management.md) topic has details about how to create and manage queues.

## What You'll Learn

In this topic you'll learn about:

* How conversations are queued and assigned.

* How agent notifications are sent and answered.

* Accessing the Escalation Queues workspace.

## How Conversations are Queued and Assigned

Amelia routes escalated conversations to a specific escalation queue. The escalation includes conversation details and queue details. The Escalation Service takes these details and polls the queue for unassigned escalations. The service uses the information to notify agents.

Each time the service polls an escalation queue, it looks for the status of any conversations. Then acts based upon the status, ACCEPTED, RUNNING, or QUEUED.

* **ACCEPTED**: Amelia does not process further these conversations.

* **RUNNING**: Amelia does not process further these escalations. Amelia might send an Escalation Idle Message should the queue require it.

* **QUEUED**: Amelia identifies these conversations as eligible for escalation. Amelia also notes the type of escalation.

For most escalations, the Escalation Service locates the best agent available. The best available agents meet these criteria:

* The agent must have their status set to READY. If they are BUSY or AWAY, the service ignores them.

* Their supervisor has not marked the agent as Silent for the queue.

* The agent must not be currently servicing all the chats they can handle. This is their configured Maximum Concurrent Chat setting in their user account.

If no agents meet these criteria, the service logs that fact. And then requeues the escalation for the next poll.

If one or more agents meet these criteria, the service chooses the agent with the lowest current load. The service calculates the current agent load using these criteria:

* The agent's Current Active Chats + timed out attempts at this particular escalation.

* Agents who recently rejected this escalation fall to the bottom of the priority list. The duration of time an agent spends in this condition is configurable. Two minutes is the default.

For example, two agents servicing three calls have a current load of three. The service may assign a new escalated conversation to either agent. If the service selects an agent, and times out, their current load increments to four. The other agent with a current load of 3 moves ahead of them in the priority list. The service will assign the next conversation to them.

## How Agent Notifications are Sent and Answered

Once the escalation service identifies the best available agent, it sends a notification. The agent sees the notification for a set time. The escalation queue includes a setting for how long the message displays. While displayed, agents can accept or reject the notification. Or they can ignore the notification. The service counts ignored notifications as timeouts. While waiting for agents to respond, the service also can send "please wait" messages to the end user.

There are three possible agent responses to a notification:

* **Accept**: The escalated conversation displays automatically. If the agent cannot or does not engage the end user, the service re-queues the conversation.

* **Reject**: Agents who reject a conversation fall to the bottom of the priority list. The duration of time an agent spends in this condition is configurable. Two minutes is the default.

* **Timeout**: Failure to act on a notification triggers a timeout. The agent current load calculation adds one to their current load. This pushes the agent down the priority list but not to the bottom.

Rejected or timed out responses re-queue a conversation. The next time the service polls the queue, the service uses the updated agent current load values to assign conversations.

## Accessing the Escalation Queues Workspace

{% include from="B05-02_0002-EscalationQueues-Access.md" element-id="B05-02_0002-EscalationQueues-Access_snippet" /%}

## More Resources

{% include from="B05-00_0001-ContactCenter-MoreResources.md" element-id="B05-00_0001-ContactCenter-MoreResources_snippet" /%}

