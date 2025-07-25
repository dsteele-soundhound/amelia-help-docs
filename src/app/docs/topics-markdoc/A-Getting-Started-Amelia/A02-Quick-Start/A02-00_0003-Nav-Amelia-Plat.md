# Navigate the Amelia Platform

## Introduction

To use the Amelia platform, you must understand its interfaces and workspaces and where they live. Once logged in, you'll see the default chat interface with a variety of navigation options. This topic gives insight into when and how to use these elements.

Amelia has several user interfaces. Most end users will use a custom user interface to chat with Amelia. Agents and Supervisors handling escalations of conversations use the basic conversation interface. This interface includes the ability to access conversations. Plus, agents see how Amelia processes conversations and responds to people.

## Accessing Amelia

The login screen is the entry point to access Amelia's administration pages. The login URL is **&lt;AmeliaURL&gt;/Amelia/login** where **&lt;AmeliaURL&gt;** is the URL path to the Amelia instance. If the login fields are not displayed, click the Login link at the top right corner.

When logged out, the Amelia login page displays by default.

![A02-00_0003-Login](A02-00_0003-Login.png){width="900" style="block"}
*The Amelia Login Interface*

Once logged in, you will see the default Amelia chat interface, described below. See [Default Amelia chat interface](#Default) for more details.

## What You'll Learn

In this topic you'll learn about the:

* [Common Amelia interface and workspace elements](#Common).
* [Default Amelia chat interface](#Default).
* [Digital Employees workspace](#DigEmp).
* [Amelia Answers workspace](#AmAns).
* [Contact Center workspace](#ConCen).
* [Agent View workspace](#View).
* [Learning workspace](#Learn).
* [Analytics workspace](#Analytics).
* [Administration workspace](#Admin).
* [Custom UI interface](#Custom).

##Common Amelia Interfaces and Workspace Elements {% #Common %}

Amelia's user interfaces make it easier to build, deploy, analyze, and administer the application.

* The **Main Navigation** menu list, at the top left of the interface, is used to create and view Amelia's FaceCall interface, digital employees, agent interface, FAQs, conversations, analytics, and other features.
* The **Domains** menu list, also at the top left of the interface, is used to select a domain to configure and update.
* The **Left Side Panel** links, at the left side of the interface, contains features related to the link selected from the Main Navigation menu list.
* The **Tab Workspace** displays tools, widgets, and artifacts depending on the links selected in the Main Navigation menu and Left Side links and panel.
* The **Workspace Panel** appears in some cases when a link is selected in the Left Side Panel, as a way to create and manage artifacts.

When a Main Navigation menu link is clicked, a Home tab workspace is displayed with Left Side link navigation. Clicking Left Side links often will display a Left Side Panel with a list of artifacts. Along with the ability to create and configure new artifacts.

> Click the Amelia logo at the top left corner to display the default Amelia chat interface with its debugging tools.


![A02-00_0003-CommonElements](A02-00_0003-CommonElements.png){width="900" style="block"}

*Common Amelia Interface Elements*

The most commonly used navigation element is the Main Navigation menu. You can find it at the top left of all Amelia interfaces and workspaces.

![A02-00_0003-MainNavMenu](A02-00_0003-MainNavMenu.png){width="400" style="block"}

*Main Navigation Menu Options*

##Default Amelia Chat Interface {% #Default %}

Conversations with Amelia happen with different interfaces. It depends on the device you use to connect. All conversation areas offer the same basic interface design and user experience.

The default chat interface is web-based. It offers you a conversation with a speaking avatar. The chat area is on the left. On the right edge of the screen might be links to view details about a conversation. This is useful for training and debugging purposes.

![A02-00_0003-WebChatUI](A02-00_0003-WebChatUI.png){width="900" style="block"}

*Default Amelia Chat Interface*

The chat area includes a set of tools where you type. Click the three stacked dots ( ![A02-00_0003-Btn-ChatOptions](A02-00_0003-Btn-ChatOptions.png){width="25" style="inline"}) to display or hide conversation-related actions. For example, you can change the conversation language.

![A02-00_0003-ChatOptions](A02-00_0003-ChatOptions.png){width="400" style="block"}

*Chat Input Options Interface*

*Chat Input Options*

|                                               Button                                                |                                               Description                                               |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| ![A02-00_0003-Btn-ChatRefresh](A02-00_0003-Btn-ChatRefresh.png){width="25" style="inline"}           | Click to restart an existing conversation.                                                              |
| ![A02-00_0003-Btn-ChatStart](A02-00_0003-Btn-ChatStart.png){width="25" style="inline"}               | Click to start a new conversation.                                                                      |
| ![A02-00_0003-Btn-DownldTranscript](A02-00_0003-Btn-DownldTranscript.png){width="25" style="inline"} | Click to download a transcript of the current conversation.                                             |
| ![A02-00_0003-Btn-Translate](A02-00_0003-Btn-Translate.png){width="25" style="inline"}               | Click to change language. When clicked a popup will appear with a dropdown list of available languages. |
| ![A02-00_0003-Btn-Close](A02-00_0003-Btn-Close.png){width="25" style="inline"}                       | Click to close the current conversation.                                                                |
| ![A02-00_0003-Btn-Speak](A02-00_0003-Btn-Speak.png){width="25" style="inline"}                       | Click to use voice to converse with Amelia, instead of typing text.                                     |

## Amelia Workspaces

People converse with Amelia using different interfaces. You configure Amelia using workspaces. This includes viewing performance data and analyzing results.

These workspaces are described in detail below, in the order they appear in the Main Navigation menu.

###Digital Employees Workspace {% #DigEmp %}

From the top left main navigation menu, click Digital Employees. This displays the Digital Employees Home tab workspace. The Home tab workspace includes most or all features used to build and train an Amelia instance. Additional build-related links are on the left side panel navigation.

For more details, see the [Digital Employees Workspace Introduction](B03-00_0001-Digital-Employees-Workspace-Intro.md) topic.

![A02-00_0003-DigitalEmployees](A02-00_0003-DigitalEmployees.png){width="900" style="block"}

*The Digital Employees Workspace*

*Digital Employees Workspace Left Edge Links*

|                     Link                      |                                                                                                Description                                                                                                 |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Conversation Flows | Click to display tools used to create and provision Amelia's conversations. Clicking this link displays a flyout menu with seven additional options.                                                       |
| Web Actions        | Click to create and manage reusable HTTP requests used by DEB flows and BPN diagrams. Clicking this link displays a flyout menu with four additional options.                                              |
| Integrations       | Click to manage third party integrations Amelia uses in her conversations. Clicking this link displays a flyout menu with five additional options.                                                         |
| NLU Comprehension  | Click to manage the Natural Language Understanding (NLU) artifacts that Amelia uses to understand and respond to conversations. Clicking this link displays a flyout menu with a dozen additional options. |
| NLU Resources      | Click to manage the Natural Language Understanding (NLU) resources that Amelia uses to understand and respond to conversations. Clicking this link displays a flyout menu with a dozen additional options. |
| Knowledge Ingestor | Click to import utterances in tab separated value (TSV) format as a resource to generate additional related utterances and assign utterances to user intents.                                              |


###Amelia Answers Workspace {% #AmAns %}

From the top left main navigation menu, click Amelia Answers. This displays the Amelia Answers Home tab workspace. The Home tab workspace includes most or all features used to create and manage frequently asked questions. Additional links are on the left side panel navigation.

For more details, see [Amelia Answers Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md) topic.

![A02-00_0003-AmeliaAnswers](A02-00_0003-AmeliaAnswers.png){width="900" style="block"}

*The Amelia Answers Workspace*

*Amelia Answers Workspace Left Edge Links*

|                  Link                  |                                                                                                             Description                                                                                                              |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sources   | Click to manage knowledge Sources used to train Amelia. Sources can contain documents. In turn, documents can contain segments and QA pairs.                                      |
| Analytics | Click to filter and analyze your response data. The Dashboard includes a series of cards showing live data. This data details the performance of the subsystem responders, question rate, answer accuracy, fallback rate, and so on. |
| Predict   | Click to test your Amelia Answers setup. It shows what Amelia Answers knows and how Amelia will respond to your users.                                                                                                               |
| Responses | Click to view a dashboard with an auditable summary of all past conversations that used Amelia Answers.                                                                                               |
| Tests     | Click to test Amelia's ability to respond in your configuration. This includes Amelia's ability to infer context and meaning.                                                                                  |
| Settings  | Click to adjust thresholds, set results shown, and choose behavior to allow or disallow Amelia's performance with Amelia Answers features.                                      |


###Contact Center Workspace {% #ConCen %}

From the top left main navigation menu, click Contact Center. The Contact Center Home tab workspace will display with a constantly updated list of active conversations. Additional links are on the left side panel navigation.

For more details, see the Contact Center topic.

![A02-00_0003-ContactCenter](A02-00_0003-ContactCenter.png){width="900" style="block"}

*The Contact Center Workspace*

###Agent View Workspace {% #View %}

From the top left main navigation menu, click Agent. The Agent Home tab workspace will display. Agents use this interface to manage their escalated conversations. You can access response templates and other tools. This includes responses provided by Amelia based on her initial conversation before escalation. And the way the agent conversation evolves.

The Agent interface includes three panels used to manage escalated conversations:

* The **left panel** organizes all active, pending, and closed conversations.
* The **center panel** displays the current conversation. It displays whatever conversation is selected from the left panel.
* The **right panel** displays all the tools available to agents. These tools help agents be efficient as they manage escalated conversations.

For more details, see the [Agent Workspace Introduction](B06-00_0001-Agent-Workspace-Intro.md) topic.

![A02-00_0003-AgentView](A02-00_0003-AgentView.png){width="900" style="block"}

*The Agent View Workspace*

###Learning Workspace {% #Learn %}

From the top left main navigation menu, click Learning. The Learning Home tab workspace will display with additional learning-related links on the left side panel navigation.

For more details, see the [Learning Workspace Introduction](B07-00_0001-Learning-Workspace-Intro.md) topic.

![A02-00_0003-Learning](A02-00_0003-Learning.png){width="900" style="block"}

*The Learning Workspace*

*Learning Workspace Left Edge Links*

|                     Link                      |                                                    Description                                                    |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Intent Learning        | Click to view details about use of intents in conversations with  Amelia.                                          |
| Abandoned Remediations | Click to view abandoned remediations to identify problem locations in conversations.                              |
| Escalation Learning    | Click to display Digital Employee Builder flows generated by Amelia from watching a completed escalation process. |


###Analytics Workspace {% #Analytics %}

From the top left main navigation menu, click Analytics. The Analytics default Home tab workspace will display with the Journey Analytics report which can display results by data and domain. Additional analytics-related links are on the left side panel.

![A02-00_0003-Analytics](A02-00_0003-Analytics.png){width="900" style="block"}

*The Analytics Workspace*

*Analytics Workspace Left Edge Links*

|           Link           |                                                     Description                                                      |
|--------------------------|----------------------------------------------------------------------------------------------------------------------|
| Conversation Analytics   | Click to view detailed reports about Amelia's conversations with users.                                              |
| Journey Analytics        | Click to view details about the conversation and resolution flows as Amelia handles conversations.                   |
| NPS Analytics            | Click to view the NPS (Net Promoter Score) which captures Amelia's performance based on user feedback and sentiment. |
| Amelia Answers Analytics | Click to view details about the performance of Amelia Answers features.               |
| Export Recordings        | Click to download voice audio recordings captured from Amelia conversations.                   |


###Administration Workspace {% #Admin %}

From the top left main navigation menu, click Administration. The Administration default Home tab workspace will display with most or all functionality used to set up an Amelia instance. Additional administration-related links are on the left side panel navigation.

For more details, see the [Administration Workspace Introduction](B01-00_0001-Administration-Workspace-Intro.md) topic.

![A02-00_0003-Admin](A02-00_0003-Admin.png){width="900" style="block"}

*The Administration Workspace*

*Administration Workspace Left Edge Links*

|                   Link                    |                                                                                    Description                                                                                    |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Domains               | Click to create and manage domains which are used to organize Amelia's knowledge and skills.                                                                                      |
| Users                                     | Click to create and manage user accounts, roles, and groups. Clicking this link displays a flyout menu with additional options.                                                   |
| Security                                  | Click to create and manage the security of an Amelia instance. Clicking this link displays a flyout menu with additional options.                                                 |
| UI                                        | Click to create and manage Amelia's user interface. Clicking this link displays a flyout menu with additional options.                                                            |
| Orchestrator | Click to view and manage all coordination and management of data flows between Amelia, AI Ops, RPA bots, and the web services and CLI capabilities of corporate back-end systems. |
| Content Packs    | Click to create and install content packs used to import and export data sets and other materials in an Amelia instance.                                                          |


##Custom UI Interface {% #Custom %}

The Amelia UI bundles feature lets you create custom chat user interfaces. These interfaces display as an overlay on any website. It's possible to customize colors, buttons, menu items, and other details. You can integrate this custom UI into a variety of platforms. For example, different web browsers and iOS/Android applications. It ensures a seamless user experience aligned to your specific needs.

For more details, see the [UI Bundles (Custom UI) Introduction](B01-04_0301-UI-Bundles-Intro.md).

![A02-00_0003-CustomUIBundles](A02-00_0003-CustomUIBundles.png){width="900" style="block"}

*The Custom User Interface (UI)*

## More Resources

{% include from="A02-00_0007-QuickStartLinks.md" element-id="D02-00_0007-QuickStartLinks_snippet" /%}
