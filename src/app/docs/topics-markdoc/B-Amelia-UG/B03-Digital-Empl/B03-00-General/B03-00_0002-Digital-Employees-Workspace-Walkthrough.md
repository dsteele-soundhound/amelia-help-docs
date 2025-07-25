# AI Agents (Digital Employees) Walkthrough

> With Amelia 7.0, we've renamed the Digital Employees module to AI Agents. And added an AI Agents section to let you create Agentic AI agents. Other module changes are called out in the documentation.<br><br>The Amelia 7.0 AI Agents features currently are available only through the Soundhound AI Amelia Early Access Program. Please contact your Program Manager for details.{style="note"}


## Introduction

To use the AI Agents (Digital Employees) workspace effectively, you must understand its features and tools and where to find them. The left-side menu lets you access features used to create conversation flows. The Home tab has cards to access many of these features and tools and go directly to work in progress.

The elements of this Home tab workspace are described below in detail.

![B03-00_0001-AI-Agents-Workspace.png](B03-00_0001-AI-Agents-Workspace.png){width="800" style="block"}

*The AI Agents Workspace Showing the Home Tab*

## What You'll Learn

In this topic you'll learn about:

* [The Amelia main menu](#Main).
* [The Home page](#Home).
* [The left side menu and related options](#Left).

##Amelia Main Menu {% #Main %}

On entry into Amelia, you'll find the main menu in the header area at the top left of the application. The main menu is your key entry point into any of the workspaces offered by Amelia.
{% include from="B03-00_0001-DigitalEmployeesAccess.md" element-id="B03-00_0001-DigitalEmployeesAccess_snippet" /%}

##Home Page {% #Home %}

The Home page shows as a page tab in the AI Agents (Digital Employees) workspace. Home serves as the starting point for your AI Agents (Digital Employees) journey. You'll navigate the Home page by moving through the individual cards presented to you.

![B03-00_0001-Digital-Empl-Workspace](B03-00_0001-Digital-Empl-Workspace.png){width="800" style="block"}

*The Digital Employees Workspace Showing the Home Tab*

For Amelia 7.0, the Home page shows slightly different cards. The cards reflect key features of the AI Agents workflow process.

![B03-00_0001-AI-Agents-Workspace.png](B03-00_0001-AI-Agents-Workspace.png){width="800" style="block"}

*The AI Agents Workspace Showing the Home Tab*



### Test User Utterances

Here you'll test Amelia's training and setup. Enter a question in the Start Typing field and click Predict. This takes you to the Predict page, where you can see how Amelia processes individual questions. Besides Intents, Entities, and QAs, you'll also see system NLP (natural language processing) results. These NLP results give insight into sentiment, toxicity, and other subtle processing cues.

### Build Your Digital Employee

This section shows cards for Amelia Builds Amelia, conversation Flows, Intents, and Entities.

* **Amelia Builds Amelia**: Opens the Amelia Builds Amelia workspace. 
  {% include from="B03-03_0002-ABA-Create-Dig-Empl.md" element-id="B03-03_0002-ABA-Create-Dig-Empl_snippet" /%} {% include from="B03-03_0002-ABA-Customize-Result.md" element-id="B03-03_0002-ABA-Customize-Result_snippet" /%}
  
  To learn more, see our [Amelia Builds Amelia Workspace Introduction](B03-03_0002-ABA-Workspace-Intro.md) and [Amelia Builds Amelia Workspace Walkthrough](B03-03_0003-ABA-Workspace-Walkthrough.md) topics.

* **Flows**: 
  {% include from="B03-04_0102-DEB-Introduction.md" element-id="B03-04_0102-DEB-Introduction_snippet" /%}
  
  To learn more about the Digital Employees builder, see our
  [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md) and [Digital Employees Builder Walkthrough](B03-04_0103-Dig-Empl-Builder-Walk.md) topics.

* **Intents**: Opens a new tab where you can create and save a new intent. Intents define user goals and intentions in a conversation. The primary use of intents is to identify intent in a real-time conversation. To learn more about Intents, see our [Intents Introduction](B03-07_0201-Intents-Intro.md) and [Intents Management](B03-07_0203-Intents-Management.md) topics.

* **Entities**: Opens a new tab where you can create and save a new entity. 
    {% include from="B03-07_0301-Entities-Intro.md" element-id="B03-07_0301-Entities-Intro_snippet" /%} 
    
  To learn more about entities, see our [Entities Introduction](B03-07-NLU-Comprehension_B03-07_0301-Entities-Intro.md) and [Entities Management](B03-07_0302-Entities-Management.md) topics.

### Build Your AI Agent

For Amelia 7.0, this section shows cards for key features used by the AI Agents workflow process.

* **AI Agents**: Opens the AI Agents workspace with a Creating AI Agent tab workspace. The workspace lists agent templates you can use or adapt. There's also a design assistant where you can type a short description of the agent you want to create. And there's an option to create an agent manually.

  Read [Cognitive Agents Introduction](B03-11_0101-Cognitive-Agents-Intro.md) to learn about AI agents.

* **Functions**: Opens the New Cognitive Function tab workspace. You can use the workspace to create a web action, conversation flow, or integration. Agents use functions to perform tasks when called upon by an orchestrator.

  Read [Cognitive Functions Introduction](B03-11_0201-Cognitive-Functions-Intro.md) to learn about how functions work with AI agents.

* **Web Actions**: Opens a New Web Action tab workspace. You can use the workspace to create and test API calls. This provides information agents use to respond in conversations. For example, to retrieve passwords or order details.

  Read [Web Actions Introduction](B03-05_0101-Web-Actions-Intro.md) to learn about how to create and manage web actions.

* **Flows**: Opens a Digital Employees builder, or DEB, tab workspace. {% include from="B03-04_0102-DEB-Introduction.md" element-id="B03-04_0102-DEB-Introduction_snippet" /%}

  To learn more about the Digital Employees builder, see our
  [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md) and [Digital Employees Builder Walkthrough](B03-04_0103-Dig-Empl-Builder-Walk.md) topics.



### Continue Where You Left Off

Displays the most recent 10 artifacts of each type. For the Digital Employees workspace, its Flows, Intents, Entities, and Web Actions. For Amelia 7.0, it's AI Agents, Functions, Web Actions, and Flows.

For each type, Amelia shows you the most recent artifacts you created so you can quickly access the files using the links provided. Clicking on an artifact opens it in a new tab.

### Deploy

Provides a link to Gateway Integrations tools. These tools connect Amelia with Zendesk, Teams, and other third-party chat software.

### What is Currently Deployed

Displays details of the Integrations, Gateways, and Models associated with your domain.

* **Integrations**: This card shows the integrations associated with your domain. Integrations let Amelia interact with external systems. For example, you could set up integrations for Google Maps, ServiceNow, Stripe or Jira to name just a few. Integration flows are Apache Camel contexts created in Amelia's Administration workspace and deployed to these remote processes with gRPC, a universal remote procedure call standard. Alternatively, you can create integration flows from templates. Back on the Home page, the Integrations card includes 3 tabs in the card header area - All, Deployed, and Undeployed. As the name implies, All shows all integrations, deployed and undeployed. By selecting the Deployed tab, you'll see deployed integrations only. And, by selecting Undeployed, you'll see undeployed integrations only. Selecting an integration opens the Apache Camel context in a new page tab after the Home page.
* **Gateways**: This card shows the gateway integrations associated with your domain. Gateway integrations let Amelia chat through Microsoft Teams, Webex, and other chat gateways, as well as handle escalations from selected gateways. The Gateways card includes 7 tabs in the card header area - All, Deployed, Error, Disabled, Submitted, Deploying and Pending. As the name implies, All shows all gateway integrations, including those in deployed, error, disabled, submitted, deploying and pending status. Selecting a gateway opens the gateway editor in a new page tab after the Home page.
* **Models**: This card shows the models associated with your domain. A model is a program that's trained on a data set to recognize patterns or make decisions without human intervention. Models replicate human intelligence by finding patterns in data and drawing conclusions. There are two types of models, intent and entity models. Each type has their own machine learning algorithms. The Models card includes 8 tabs in the card header area - Deployed, Ready, Queued, Training, Editing, New, Failed and Canceled. Selecting a model opens the model editor in a new page tab after the Home page.



##Left-Side Menu {% #Left %}

Inside the AI Agents (Digital Employees) workspace, you'll also see the left-side menu. Options on this menu are dynamic, changing based on the workspace you've selected.

Amelia 7.0 has an additional AI Agents button at the top left.

![B03-00_0001-AI-Agents-WS-LeftMenu.png](B03-00_0001-AI-Agents-WS-LeftMenu.png){width="800" style="block"}

*The AI Agents Workspace Showing Left Side Menu Buttons*

![B03-00_0001-Digital-Empl-WS-LeftMenu](B03-00_0001-Digital-Empl-WS-LeftMenu.png){width="800" style="block"}

*The Digital Employees Workspace Showing Left Side Menu Buttons*


### AI Agents

This button displays only in Amelia 7.0. Clicking the AI Agents button displays a flyout menu with the following options:

* **Cognitive Agents**: Used to create cognitive agents. You'll collect cognitive functions, instructions, and other artifacts to build agents.

* **Cognitive Functions**: Used to define actions performed by agents. These workspaces define actions needed to perform specific functions. For example, scheduling an appointment.

* **Knowledge Collections**: Used to collect and organize knowledge agents share in conversations. This might include return policies and instructions.

* **Privacy and Safety**: Used to set privacy and guardrail rules to control agent behavior. This includes masking Personal Identifiable Information (PII), for example, addresses and phone numbers.

* **Settings**: Used to define overall agent behavior. For example, the maximum number of loops to perform before stopping executions.


### Conversation Flows

Clicking the Conversation Flows button displays a flyout menu with the following options:

* **Conversation Flows**: Used to create and manage your conversation flows. Here you'll build out the logic for your conversation flow.
* **Business Process Network**: Used to create and manage conversation flows using business process network diagrams. The Digital Employees builder available through Conversation Flows replaces the use of BPNs.
* **Scripts**: Used to create and manage shared scripts and script libraries. Here you'll code reusable functions to be used in your conversation flows. These scripts and libraries are available in Script blocks used in conversation flows.
* **Content Management**: Used to upload and manage image and document files used in conversation flows. Conversation flows and BPN processes typically present or request these files.
* **Tabular Data**: Used to create and manage reusable data sets used by Script blocks in conversation flows and BPN processes. For example, a tabular data file might include the names of states or the names of countries.
* **Custom Cards**: Used to create and manage adaptive cards or custom widgets used in conversation flows.

### Web Actions

Clicking the Web Actions button displays a flyout menu with the following options:

* **Web Actions**: Used to create and manage reusable HTTP requests to third-party resources.
* **Authorizations**: Used to configure credentials used by Web Actions.
* **Certificates**: Used to configure SSL certificates used by Web Actions.
* **Proxies**: Used to configure proxies used by Web Actions.
* **Web URLs (BPN)**: Used to create and manage URLs used in BPN processes.

### Integrations

Clicking the Integrations button displays a flyout menu with the following options:

* **Gateway Integrations** Used to connect Amelia to third-party chat and escalation tools. For example, Salesforce, Teams, and other third-party support tools.
* **Integrations** Used to create and manage Camel flows. These flows connect with third-party databases and services.
* **Templates**: Used to create and manage Camel flow templates.
* **Assets**: Used to create and manage assets used by Camel flows.
* **Property Sets** Used to create and manage property sets used by Camel flows. Property sets are variables organized into groups used by Camel integration flows.

* Integration Logs: Used to view log files from Camel flow integrations.

### NLU Comprehension

Clicking the NLU Comprehension button displays a flyout menu with options:

* **Intents**: Used to create and manage intents. Intents identify and capture user goals in a conversation.
* **Entities**: Used to create and manage entities. Entities identify and capture the data needed to meet user goals in a conversation.
* **Grammars**: Used to create and manage grammars. Grammars are sets of rewriting rules that represent Natural Language patterns. Amelia can use them to help identify intents and entities in a conversation.
* **Models**: Used to display a workspace used to create and manage models. These models are created from intents, entities, utterances, and other materials. Amelia uses models to help identify intent and entities in a conversation.
* **Intent Tester**: Used to test possible user utterances. The workspace reveals if utterances trigger the appropriate intent.
* **Settings**: Used to define settings used by NLU features.
* **Bulk Import/Export**: Used to import and export data used to define intents and entities. For example, you can export grammars, entities, NLU settings, semantic mappings, and more.

### NLU Resources

Clicking the NLU Resources button displays a flyout menu with options:

* **Translations**: Used to create and manage custom translations for utterances. Amelia uses these translations in conversations.
* **Datasets**: Used to create and manage tab-separated value formatted files. Conversation flows access these files.
* **Response Pools**: Used to create and manage what Amelia says in a conversation. For example, a greeting when a conversation begins.
* **Aspects**: Used to create and manage aspects. Aspects detect and assign user sentiment to a component of a product or service. For example, how a user feels about website as an aspect of technology.
* **Vocabularies**: Used to create and manage sets of words and phrases. For example, stop words like an, the, and for which are stripped from utterances before processing.
* **Cognitive Tasks**: Used to assign LLMs to specific Amelia features.
* **Cognitive Providers**: Used to define connection to LLM providers. Amelia tools and features use these connections to process data.
* **AIML**: Used to create and manage any AIML (Artificial Intelligence Markup Language) files. Informal chit chat in a conversation uses AIML files.

### Knowledge Ingestor

Click this button to import utterances in tab separated value file format. These files can generate related utterances and assign utterances to user intents.

## More Resources

For more information, see:

* [AI Agents (Digital Employees) Introduction](B03-00_0001-Digital-Employees-Workspace-Intro.md).
* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md).
* [Digital Employees Builder Walkthrough](B03-04_0103-Dig-Empl-Builder-Walk.md).
* [AI Agents Introduction](B03-11_0001-AI-Agents-Intro.md).
* [Cognitive Agents Introduction](B03-11_0101-Cognitive-Agents-Intro.md).
* [Cognitive Functions Introduction](B03-11_0201-Cognitive-Functions-Intro.md).
* [Knowledge Collections Introduction](B03-11_0301-Knowledge-Collections-Intro.md).
