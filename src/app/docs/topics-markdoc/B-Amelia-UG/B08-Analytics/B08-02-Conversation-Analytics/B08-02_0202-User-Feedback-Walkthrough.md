# User Feedback Walkthrough

## Introduction

The User Feedback workspace displays user feedback. You can filter data by date, domain, and responders. Then click a conversation entry to see a transcript and other details. This makes it easy to work with user feedback. You can see both user responses and their conversation transcript for context.

## Access the User Feedback Workspace

{% include from="B08-02_0101-FeedbackAccess.md" element-id="B08-02_0101-FeedbackAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Use the User Feedback workspace.](#Workspace)
* [View conversation summaries](#ViewSummary)

##Using the Conversations Workspace {% #Workspace %}

The default All Conversation tab workspace displays conversations in a list. Use the top panel dropdown lists and buttons to filter the conversations.

> A red stripe background for a conversation indicates the conversation exceeded SLA configured timeouts.

| Setting         | Description                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Date Range      | Click to select a date or pre-defined date range from the date picker that displays.                                                         |
| Domains         | Click to select conversation feedback from a domain.                                                                                         |
| Responder       | Click to filter conversations by responders used by Amelia to handle a conversation. All responders are selected by default.                 |
| With Click      | Click the button to filter conversations where the user clicked.                                                                             |
| With Comment    | Click the button to filter conversation feedback based upon comments provided.                                                               |
| Search          | Click to filter conversation feedback with a search term.                                                                                    |
| User/Agent      | Click to filter conversation feedback from users and from agents.                                                                            |
| Conversation ID | An automatically generated unique ID for each conversation. Click to display a new tab with a transcript and details about the conversation. |
| Date            | Date and time the conversation started.                                                                                                      |
| Domain          | The domain where the conversation happened.                                                                                                  |
| User Request    | The initial user request that triggered the conversation.                                                                                    |
| Resp Time       | The amount of time that passed before Amelia and/or an agent responded.                                                                      |
| Amelia Response | Amelia's initial response to the User Request.                                                                                               |
| Responder       | The system responder Amelia used to respond to the User Request.                                                                             |
| Score           | The score for Amelia's response.                                                                                                             |
| Click           | Whether the user clicked.                                                                                                                    |
| Status          | The status of a conversation.                                                                                                                |
| Feedback        | The user feedback.                                                                                                                           |


##View Conversation Summaries {% #ViewSummary %}

Click any Conversation ID to display a new Details tab with the conversation summary. The top panel has conversation details and buttons. There's also a Conversation tab with a transcript. And a Summary tab where you can have AI summarize the transcript.

![B08-02_0202-ConvAnalytics-User-Feedback-Panel-Summary.png](B08-02_0202-ConvAnalytics-User-Feedback-Panel-Summary.png){style="inline" width="900"}

*A Conversation Summary Tab*

*Conversation Summary Tab Elements*

| Element          | Descrtion                                                                                                         |
|------------------|-------------------------------------------------------------------------------------------------------------------|
| ID               | An automatically generated unique ID for each conversation.                                                       |
| User Name        | The user who initiated the conversation.                                                                          |
| Handled By       | Who handled the conversation, Amelia or an agent.                                                                 |
| Created          | Date and time the conversation started.                                                                           |
| Agent Name       | If appropriate, the name of the agent who handled the conversation.                                               |
| Status           | The status of the conversation.                                                                                   |
| Qos              | The Quality of Service (Qos) score for the conversation. Added by the user.                                       |
| Handle Time      | The total time Amelia and/or an agent handled the conversation to resolution.                                     |
| Conversation Tab | Displays the conversation transcript.                                                                             |
| Execution Tab    | Displays the BPN process or DEB flow used by the conversation, as well any intents triggered.                     |
| Summary Tab      | Displays a summary of a conversation. Click the Summarize with AI button in this tab panel to generate a summary. |


## More Resources

{% include from="B08-02_Analytics-MoreResources.md" element-id="B08-02_ConvAnalytics-MoreResources_snippet" /%}
