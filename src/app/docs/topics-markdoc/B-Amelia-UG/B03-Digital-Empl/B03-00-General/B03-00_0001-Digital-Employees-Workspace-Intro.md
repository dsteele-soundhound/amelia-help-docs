# AI Agents (Digital Employees) Introduction

> With Amelia 7.0, we've renamed the Digital Employees module to AI Agents. And added an AI Agents section to let you create Agentic AI agents. Other module changes are called out in the documentation.<br><br>The Amelia 7.0 AI Agents features currently are available only through the Soundhound AI Amelia Early Access Program. Please contact your Program Manager for details.{style="note"}


## Introduction

{% include from="B03-00_0001-Digital-Emp-Workspace-Intro1.md" element-id="B03-00_0001-Digital-Emp-Workspace-Intro1_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The Conversation Flow Build Process](#ConversationBuildProcess).
* [The Digital Employees workspace](#DEBWorkspace).
* [The AI Agents workspace](#AIAgentWorkspace).
* [Accessing the AI Agents (Digital Employees) workspaces](#Access).

## The Conversation Flow Build Process {% #ConversationBuildProcess %}

In Amelia, conversation designers and technical staff have different and specific roles. Despite these differences, collaboration between roles is essential to achieve a tested, and ready-to-use instance,

* **Conversation Designers**: Define user goals and the data needed to complete these goals. They also tweak how Amelia responds both in a conversation flow and outside a flow. Conversation designers mostly use the Conversation Flows and NLU Comprehension features. They also might use the NLU Resources feature to adjust Amelia's responses. With Amelia 7.0, conversation designers can create cognitive agents. They also can use or adapt a pre-existing agent.
* **Technical Staff**: Configure the technical details needed to support a conversation flow. For example, they might use Web Actions to connect third-party resources to a conversation or Integrations to connect a Teams chat gateway. Technical staff might also use LLMs with NLU Comprehension and NLU Resources.

## The Digital Employees Workspace {% #DEBWorkspace %}

The Digital Employees workspace is the starting point for working with deterministic conversation flows.
{% include from="B03-00_0001-Digital-Emp-Workspace-Intro2.md" element-id="B03-00_0001-Digital-Emp-Workspace-Intro2_snippet" /%}

![B03-00_0001-Digital-Empl-Workspace](B03-00_0001-Digital-Empl-Workspace.png){width="800" style="block"}

*The Digital Employees Workspace*

The main tool in the Digital Employees workspace is the Digital Employees builder. 
{% include from="B03-00_0001-DigitalEmployeesDescrip.md" element-id="B03-00_0001-DigitalEmployeesDescrip_snippet" /%}

![B03-04-DEB-Workspace](B03-04-DEB-Workspace.png){width="800" style="block"}

*An Example Conversation Flow in the Digital Employees Builder*


## The AI Agents Workspace {% #AIAgentWorkspace %}

The main tool in the AI Agents workspace is the Cognitive Agents tool. The tool collects artifacts created with the Cognitive Functions and Knowledge Collections tools. The Privacy and Safety and Settings tools control the agents and orchestrator.

![B03-00_0001-AI-Agents-Workspace.png.png](B03-00_0001-AI-Agents-Workspace.png){width="800" style="block"}

*The AI Agents Workspace*

The Cognitive Agents tool lets you create, use, or adapt agents. Each agent is a collection of documents, functions, and parameters. The tool also lets you test your agent live within the workspace.

You can create agents manually or using a template agent. To create an agent manually, you'll need to define its instructions and functions. Plus the knowledge the agent needs to provide answers. Using the template workspace, you pick a template and then customize it. Then tweak and adapt your template agent if needed.

>To create an AI agent, click the **Design AI Agent button** in the Create Manually panel. It's located at the top right of the tab workspace. The other options &mdash; AI Agent Design Assistant and Browse Templates &mdash; are inactive currently.{style="note"}

![B03-04-AI-Agent-Workspace.png](B03-04-AI-Agent-Workspace.png){width="800" style="block"}

*The Cognitive Agent New Templates Workspace*


![B03-04-AI-Agent-Edit-Workspace.png](B03-04-AI-Agent-Edit-Workspace.png){width="800" style="block"}

*The Cognitive Agent Edit Workspace*



##Access the Workspace {% #Access %}

{% include from="B03-00_0001-DigitalEmployeesAccess.md" element-id="B03-00_0001-DigitalEmployeesAccess_snippet" /%}

Once inside the Digital Employees workspace, you'll see the left-side navigation buttons and Home tab workspace. To learn more about these elements and their features, see the [AI Agents (Digital Employees) Workspace Walkthrough](B03-00_0002-Digital-Employees-Workspace-Walkthrough.md).

## More Resources

For more information, see:

* [AI Agents (Digital Employees) Walkthrough](B03-00_0002-Digital-Employees-Workspace-Walkthrough.md).
* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md).
* [Digital Employees Builder Walkthrough](B03-04_0103-Dig-Empl-Builder-Walk.md).
* [AI Agents Introduction](B03-11_0001-AI-Agents-Intro.md).
* [Cognitive Agents Introduction](B03-11_0101-Cognitive-Agents-Intro.md).
* [Cognitive Functions Introduction](B03-11_0201-Cognitive-Functions-Intro.md).
* [Knowledge Collections Introduction](B03-11_0301-Knowledge-Collections-Intro.md).
