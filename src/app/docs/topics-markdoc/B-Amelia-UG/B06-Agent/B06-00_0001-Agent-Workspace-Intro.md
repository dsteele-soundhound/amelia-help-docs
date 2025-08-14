# Agent Workspace Introduction

## Introduction

Amelia understands user requests enough to complete tasks to resolve requests. Amelia also senses the emotions of people from their words and phrases. Then responds based on the live conversation. Responses can include escalating a conversation to an agent if needed.

Agents do not have to interact directly with Amelia. Instead, agents join conversations escalated by Amelia. Agents see the full chat history and have direct contact with each customer. Amelia can provide recommended responses as the agent chats with a person. And suggest answers based on analyzing the current conversation.

Amelia escalates conversations for a variety of reasons.

* A Digital Employees builder flow used to direct Amelia's conversation might include escalation. Usually at a point in a conversation where Amelia will not be trained on one or more tasks.
* If Amelia asks a question, an escalation occurs if the person misunderstands. For example, if a date and time is needed but the person provides a dollar amount instead.
* Integration errors with third party systems can cause escalations. Also, problems with a Digital Employees builder flow. Or Amelia's sentiment analysis feature senses that a person is confused or upset.

The Agent workspace is robust and deeply integrated with Amelia. However, it does not compete with third-party tools like ServiceNow. Instead, Amelia has gateways that connect to third-party chat and escalation tools.

Our [Agent Workspace Walkthrough](B06-00_0002-Agent-Workspace-Walkthrough.md) topic has details about the workspace.

## What You'll Learn

In this topic you'll learn about:

* [The Agent workspace](#The).
* [Managing conversations](#Managing).
* [Using the message box in conversations](#Using).
* [Using widgets in conversations](#Using2).
* [Setting agent status](#Setting).
* [How language models support agents](#How).
* [Managing agent widgets, canned responses, and assignments](#Managing2).
* [Managing conversation queue priority](#Managing3).
* [Using resolution codes](#Using3).
* [Creating and using agent resolution plans](#Creating).
* [Alerting agents to newly assigned conversations](#Alerting).
* [Accessing the Agent workspace](#Access).

## The Agent Workspace {% #The %}

The Agent workspace has three vertical columns of equal width:

* On the left, the Conversations column lists Active, Ready, Pending, and Closed conversations.

* The center column shows the current selected conversation with a message box at the bottom.

* The right column has widgets that agents can use to streamline their responses.

##Managing Conversations {% #Managing %}

To manage conversations, agents click on a conversation in the Ready tab in the left column. This displays the escalated conversation in the center column. Clicking the Pickup button in the bottom of the center column picks the conversation up. The conversation then moves from the Ready tab to the Active tab.

Once active, agents or their supervisors can move conversations to the Pending tab. It's possible to set a refresh time for pending conversations. And closed conversations appear under the Closed tab.

Supervisors can configure how many active conversations agents can handle at one time. This factors into conversation assignment and prioritization.

##Using the Message Box in Conversations {% #Using %}

Agents type or speak into the message box at the bottom of the center column. When an agent picks up a conversation, the message box appears. When Amelia, the agent, or the user type, three dots appear. This lets everyone know a response is coming soon.

The Message box includes options available by clicking the three dots at the left of the box. Options include transferring a conversation to another agent, to Amelia, or to the Pending tab. Options also allow users and agents to upload files. And agents can mute a voice conversation or close the conversation.

##Using Widgets in Conversations {% #Using2 %}

The right column of the Agent workspace includes widgets. These widgets help agents be efficient and minimize repetition. For example, canned responses saves agents from typing the same information repeatedly.

The primary widget is My Responses. This is a list of responses created by agents and their supervisors. You can tag responses to help sort and find them quickly. Clicking a response in this widget displays the response in the message box in the center column.

Other widgets provide Amelia's summary of the current active conversation. For example, sentiment analysis to help agents gauge how people feel as they talk. Supervisors manage which widgets their agents see on screen. Agents are able to arrange these widgets on their screen in ways that work best for them.

##Setting Agent Status {% #Setting %}

Agents set their status using a Status dropdown. It's located next to the circular Account button at the top right of their workspace. This impacts their availability and the assignment of conversations. Supervisors also can define custom status settings for their environment.

##How Language Models Support Agents {% #How %}

If you connect Amelia to a Cognitive Provider, Amelia will analyze conversations. The analysis happens in real time as agents respond to escalations. This can generate summaries and possible responses for the agent to use. The analysis uses large language models (LLMs). You can use general models or specialized ones, depending on your configuration.

##Managing Agent Widgets, Canned Responses, and Assignments {% #Managing2 %}

Supervisors can help agents respond to conversations and to manage their workflow. Besides custom status settings and canned responses. They also can configure the assignment of conversations.

##Managing Conversation Queue Priority {% #Managing3 %}

Supervisors also can create priority queues to manage escalated conversations. For example, conversations with paying customers might be in a higher priority queue. This helps ensure quick efficient responses to the most important conversations

##Using Resolution Codes {% #Using3 %}

{% include from="B06-00_0001-Agent-Resolution-Codes.md" element-id="B06-00_0001-Agent-Resolution-Codes_snippet" /%}

To use resolution codes, create a tabular data file. Then upload the file to the Tabular Data workspace. It's part of the Digital Employees and Conversation Flows workspaces. Once uploaded, then select the resolution codes file in the Escalation Queues workspace. Define escalation queues with the Contact Center workspaces. The codes will be available for any conversation escalated to that queue.

See the [Tabular Data Management topic](B03-04_0603-Tabular-Data-Management.md) for details about uploading resolution codes.

##Creating and Using Agent Resolution Plans {% #Creating %}

When using Amelia Answers, you can upload documents and mark them with an Agent tag. The documents describe resolution plans for common questions or issues. For example, asking how long it takes to file an insurance claim. Resolution plans could be step procedures with answers to common follow-up questions.

The first step is to process a resolution plan source document. Then in the right column of their workspace, Agents click the Summarize with AI button. This summarizes the current escalated conversation. Amelia will display the appropriate resolution plan. This feature helps agents to leverage their expertise quickly and efficiently.

See the Amelia Answers [Sources Management](B10-01_0002-Sources-Management.md) topic for details about uploading resolution plans.

This feature requires that you configure OpenAI and use the Amelia Answers feature.

##Alerting Agents to Newly Assigned Conversations {% #Alerting %}

A round robin process assigns escalated conversations. Agents see browser popup alerts when they have an active conversation assigned to them. The popup alert includes Accept and Reject buttons. Clicking the Accept button makes a conversation active. If the agent is elsewhere on the Amelia platform, they're directed to the Agent workspace. The new conversation will appear in the Active tab. Its transcript will be displayed in the center column.

If an agent does not respond to three consecutive alerts, an Escalation Alert displays. The system also sets the agent status to Away.

##Accessing the Agent Workspace {% #Access %}

{% include from="B06-00_0001-AgentAccess.md" element-id="B06-00_0001-AgentAccess_snippet" /%}

## More Resources

{% include from="B06-00_0001-AgentMoreResources.md" element-id="B06-00_0001-AgentMoreResources" /%}