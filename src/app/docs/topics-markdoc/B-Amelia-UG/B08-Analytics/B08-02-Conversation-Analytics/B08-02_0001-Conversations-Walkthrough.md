# Conversations Walkthrough

## Introduction

The Conversations workspace displays all active and archived conversations. You can sort them by domain and date. Once sorted, you can view individual conversation transcripts. And observe active conversations, summarize a conversation, or delete the conversation transcript. The workspace lets you easily find and work with conversations.

## Access the Conversations Workspace

{% include from="B08-02_0101-ConversationsAccess.md" element-id="B08-02_0101-ConversationsAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Use the Reports workspace.](#Workspace)
* [View conversation summaries](#ViewSummary)

##Using the Conversations Workspace {% #Workspace %}

The default All Conversation tab workspace displays conversations in a list. Use the top panel dropdown lists and buttons to filter the conversations.

| Setting                                                                                                  | Description                                                                                                                                  |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Domains                                                                                                  | Click to select conversations from a domain. All Domains is the default.                                                                     |
| Date Range                                                                                               | Click to select a date or pre-defined date range from the date picker that displays.                                                         |
| Auto-refresh                                                                                             | Click to select an automatic refresh rate. Options are 2 seconds, 5 seconds, 30 seconds, 1 minute, 5 minutes. Default is 5 seconds.          |
| ![Refresh-Btn-Supervisor-Dashboard.png](Refresh-Btn-Supervisor-Dashboard.png){style="inline" width="30"}               | Click to refresh the list of conversations manually.                                                     |
| Conversation ID                                                                                          | An automatically generated unique ID for each conversation. Click to display a new tab with a transcript and details about the conversation. |
| Created                                                                                                  | Date and time the conversation started.                                                                                                      |
| Domain                                                                                                   | The domain where the conversation happened.                                                                                                  |
| User                                                                                                     | The user who initiated the conversation.                                                                                                     |
| Handle Time                                                                                              | The total time Amelia and/or an agent handled the conversation to resolution.                                                                |
| Status                                                                                                   | The status of a conversation.                                                                                                                |
| Channel                                                                                                  | The channel where the conversation occurred.                                                                                                 |
| Escalated                                                                                                | Whether or not the conversation was escalated.                                                                                               |


##View Conversation Summaries {% #ViewSummary %}

Click any Conversation ID to display a new Details tab with the conversation summary. The top panel has conversation details and buttons. There's also a Conversation tab with a transcript. And a Summary tab where you can have AI summarize the transcript.

![B08-02_0001-ConvAnalytics-Conversations-Panel-Summary.png](B08-02_0001-ConvAnalytics-Conversations-Panel-Summary.png){style="inline" width="900"}

*A Conversation Summary Tab*

*Conversation Summary Tab Elements*

| Element                         | Descrtion                                                                                                         |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------|
| ID                              | An automatically generated unique ID for each conversation.                                                       |
| User Name                       | The user who initiated the conversation.                                                                          |
| Handled By                      | Who handled the conversation, Amelia or an agent.                                                                 |
| Created                         | Date and time the conversation started.                                                                           |
| Agent Name                      | If appropriate, the name of the agent who handled the conversation.                                               |
| Status                          | The status of the conversation.                                                                                   |
| Qos                             | The Quality of Service (Qos) score for the conversation. Added by the user.                                       |
| Handle Time                     | The total time Amelia and/or an agent handled the conversation to resolution.                                     |
| Observe as User                 | If a conversation is active, click this button to observe the conversation from the user point of view.           |
| Delete Conversation Transcripts | Click to delete any transcripts for this conversation.                                                            |
| Conversation Tab                | Displays the conversation transcript.                                                                             |
| Summary Tab                     | Displays a summary of a conversation. Click the Summarize with AI button in this tab panel to generate a summary. |




## More Resources

{% include from="B08-02_Analytics-MoreResources.md" element-id="B08-02_ConvAnalytics-MoreResources_snippet" /%}
