# Knowledge Management

## Introduction

Autonomics captures knowledge articles from knowledge sources. These sources include one or more knowledge bases. Knowledge bases can include articles, FAQs, runbooks, SOPs (Standard Operating Procedures), how-to, and other content. This content may link to a mix of categories, tags, and generative AI embeddings. These help identify and organize knowledge.

Autonomics integrates with knowledge sources, for example, ServiceNow or Confluence. Once integrated, you can identify knowledge bases and categories to import. Autonomics uses this content in a variety of ways. It's used when evaluating and processing tasks and monitoring IT resources. It's also used to create automations and resolve tasks.

The Knowledge workspace lists SOPs with the ability to work with them. This workspace lets you search for relevant information. You also can generate automations from content that includes step procedures.

This topic describes SOP sources, creation, and configuration. They're generated and configured in other Autonomics locations, as described below.

In most cases, you will need to set up an integration to make the best use of the Knowledge features. For example, integrate Autonomics with Confluence, ServiceNow, OpenAI, or other sources. See the [Integrations Introduction](E05-01_0010-Integrations-Mod-Intro.md) and [Integrations Library](E05-01_0012-Integrations-Library.md) topics for details about integrations.

## What You'll Learn

In this topic you'll learn about:

* [Confirming content integration status](#Confirm).
* [Accessing the Knowledge workspace](#Access).
* [Resolve with AI and SOPs](#Resolve).
* [Generate Automation with SOPs](#Generate).
* [Adding embeddings to improve search relevancy](#Add).
* [Searching for SOPs](#Search).
* [Configuring the threshold for searching SOPs](#Configur).
* [Working with SOPs in Tasks](#Display).
* [Working with the Autonomics internal wiki](#The).

##Confirm Integration Status {% #Confirm %}

Using SOPs requires integrations like ServiceNow, Confluence, and other tools. See the [Integrations Management](E05-01_0011-Integrations-Mngmnt.md) topic to learn how to confirm an integration status. You also can test an integration as needed.

The [Integration Introduction](E05-01_0010-Integrations-Mod-Intro.md) topic also describes how integrations work with Autonomics. And the [Integration Library](E05-01_0012-Integrations-Library.md) topic describes available integrations with links to configure each one.

## Access the Knowledge Workspace {% #Access %}

The Knowledge workspace lists all available SOPs. These include those created through integrations and with the Resolve with AI feature. You can search for them and use them to generate automations.

To access the Knowledge workspace:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Autonomics**. A flyout menu appears.
3. In the flyout menu, hover over the Automations label to display a second flyout menu. In the second flyout menu, click the Knowledge link.

Click any entry listed in the Knowledge workspace to view its detail panel. The detail panel displays the runbook or SOP. If needed, click the Generate Automation button to create an automation. You also can click the External Link at the top of the detail panel to visit the source and make any changes there.

![E02-01_0011-Knowledge-BothPanels](E02-01_0011-Knowledge-BothPanels.png){width="900"}

*Knowledge Workspace*

##Resolve With AI and SOPs {% #Resolve %}

The Resolve with AI feature lets IT operations personnel remediate incidents while exploring automation opportunities. It leverages runbooks, OpenAI models, and in-house technologies. Resolve with AI suggests the steps needed to triage and resolve an issue. It calculates the impact and risk of each suggestion. Then optionally generates automation for future process improvements. This leverages our Automate with AI engine.
{% include from="E02-01_0011-KnowledgeResolveAI.md" element-id="E02-01_0011-KnowledgeResolveAI_snippet" /%}

##Generate Automation with SOPs {% #Generate %}

You can generate automations from Knowledge sources. The sources must include actionable information, for example, steps and commands. Usually these are runbooks. But you might include actionable information in an SOP.

The first step is to display a Knowledge article with actionable information. Then click the article to display its contents in the right side panel.

![E02-01_0011-Knowledge-Generate-1](E02-01_0011-Knowledge-Generate-1.png){width="900"}

*Step 1: A Knowledge Article with Actionable Information*

Next, click the Generate Automation button at the top left of the right side panel. This displays the Knowledge article in a left side panel. The right side panel processes the article into an automation.

![E02-01_0011-Knowledge-Generate-2](E02-01_0011-Knowledge-Generate-2.png){width="900"}

*Step 2: Generate the Automation*

Last, if the automation works for you, click the Edit button in the right side panel. The full Automation workspace displays. Click each step to display its Properties (![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) icon. Click the icon to display the Properties panel for the step. Repeat this process with each step to confirm the step details. Make changes as needed. When you finish configuration, click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon at the top left of the workspace.

The [Automations Walkthrough](E02-01_0003-Automations-Mod-Walk.md) and [Automations Management](E02-01_0004-Automations-Mgmnt.md) topics have details about using the full tab workspace.

![E02-01_0011-Knowledge-Generate-3](E02-01_0011-Knowledge-Generate-3.png)

*Step 3: Configure the Automation*

##Add Embeddings to Improve Relevancy {% #Add %}

If you use generative AI with AIOps, configuring embeddings can improve search results. The embeddings can yield better faster matches with SOPs.

To configure embeddings:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Administration**. A flyout menu appears.
3. In the flyout menu, hover over the Settings label to display a second flyout menu. In the second flyout menu, click the **Integrations** link.
4. In the Integrations workspace, click the name of a generative AI integration to display a right side panel.
5. Click the Edit button to display the integration configuration form in the right side panel.
6. Scroll down to the Optional LLM Properties for Embeddings section. Configure the Model, Deployment Name, and API version to use for embeddings.
7. Make any changes. Then click the Update button to save the embedding settings.

##Search for Available SOPs {% #Search %}

The Knowledge workspace includes a search box at the top right. Click it then type your search term.

The search results include a relevance Score column on the right. You can configure the score threshold to increase or decrease possible search results. See the next section for details.

![E02-01_0011-Knowledge-Search](E02-01_0011-Knowledge-Search.png){width="900"}
*Knowledge Workspace Search Results with Scores*

##Configure the Threshold for Searching SOPs {% #Configur %}

If the Knowledge search results returns too many or too few results, you can update the relevancy score threshold. You will need administration privileges to make this change.

To update the relevancy score threshold for Knowledge search results:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Administration**. A flyout menu appears.
3. In the flyout menu, hover over the Settings label to display a second flyout menu. In the second flyout menu, click the **Clients** link.
4. In the Clients workspace, click a client name to display a right side panel.
5. Click the Edit button to display the client configuration form in the right side panel.
6. Scroll down to the Settings section. Update the **Knowledge Engine search threshold** setting. The default value is 0.
7. Make any changes. Then click the Update button to save the new search score threshold.

##Display SOPs in Tasks {% #Display %}

SOPs are available when working to resolve tasks. You can create new knowledge or link to existing knowledge.

In the Tasks list workspace, click on a task to display its detail panel on the right side. Then click the Automate with AI button at the top of the task detail page. A menu appears with two options.

* To link existing knowledge, click the From Existing Knowledge Article option.

* To create new knowledge, click the From Scratch option.

Both options generate a runbook on a left side panel with an automation on the right side panel. You also can use the message input field on the bottom of the left panel to update the runbook. For example, the runbook might start a server. Once the server runs, have the automation verify the server is up.

To save the automation, click the Edit button to display the Automation workspace in a new browser tab. Then click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon at the top left of the Automation workspace.

![E02-01_0011-Knowledge-TaskRunbook](E02-01_0011-Knowledge-TaskRunbook.png){width="900"}
*Example Generated Runbook and Automation*

##Using the Autonomics Internal Wiki {% #The %}

Autonomics includes a basic internal wiki. You can use it to create and store SOPs. It's Xwiki software running within Autonomics. Refer to their [documentation](https://www.xwiki.org/xwiki/bin/view/Documentation/) to learn about using it.

To access and use the internal wiki:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Operation**. A flyout menu appears.
3. In the flyout menu, click the **Knowledge Base** link.

 

## More Resources

For more information, see:

* [Integrations Introduction](E05-01_0010-Integrations-Mod-Intro.md).
* [Integrations Library](E05-01_0012-Integrations-Library.md).
* [Tasks Introduction](E01-01_0002-Tasks-Module-Intro.md).
* [Tasks Management](E01-01_0004-Tasks-Mgmnt.md).
* [Automations Walkthrough](E02-01_0003-Automations-Mod-Walk.md).
* [Automations Management](E02-01_0004-Automations-Mgmnt.md).

