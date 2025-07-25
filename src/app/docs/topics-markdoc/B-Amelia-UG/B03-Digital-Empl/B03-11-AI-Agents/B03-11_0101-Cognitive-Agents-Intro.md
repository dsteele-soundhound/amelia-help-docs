# Cognitive Agents Introduction

{% include from="B11-00_0003-AgenticAI-EAP.md" element-id="B11-00_0003-AgenticAI-EAP_snippet" /%}

## Introduction

{% include from="B11-00_0004-AgenticAI-CogAgents-Intro.md" element-id="B11-00_0004-AgenticAI-CogAgents-Intro_snippet" /%}

The [Cognitive Agents Management](B03-11_0102-Cognitive-Agents-Management.md) topic describes how to create agents used by Agentic AI. The [AI Agents Introduction](B03-11_0001-AI-Agents-Intro.md) topic describes Agentic AI and how it compares to other AI methods.

## What You'll Learn

In this topic you'll learn about:

* [What are Cognitive Agents?](#Definition)
* [Access Knowledge Collections features](#Access)


##What are Cognitive Agents? {% #Definition %}

Cognitive Agents include all the elements needed to perform one or more related tasks. They're called by Amelia's AI Agents feature as needed. The elements used to define an agent also must be strictly relevant to the agent task.

* **Agent Description** - The agent description fields help an LLM decide whether to call the agent or not. The fields include a role name, description, instructions, and links to any documents. The documents define operational guidelines and interaction boundaries.
* **Functions** - Each agent includes functions that perform tasks. For example, a conversation flow, web action, or integration with third-party tools. A cognitive agent for tourists might have a function to get local weather. And another function to return information about local attractions based on location.
* **Knowledge Collections** - Each agent can include documents with useful information about the agent task. This might include troubleshooting information, for example. Or sales return guidelines.
* **Response Post-Processors** - Agents also can include instructions used to process output. For example, to process and optimize third-party data for voice channels.

##Access Cognitive Agents Features {% #Access %}

{% include from="B11-00_0004-AgenticAI-CogAgents-Access.md" element-id="B11-00_0004-AgenticAI-CogAgents-Access_snippet" /%}

## More Resources

{% include from="B11-00_0002-AgenticAI-MoreResources.md" element-id="B11-00_0002-AgenticAI-MoreResources_snippet" /%}
