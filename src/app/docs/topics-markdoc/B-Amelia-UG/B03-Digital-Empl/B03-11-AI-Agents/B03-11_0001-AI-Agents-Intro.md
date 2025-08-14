# AI Agents Introduction

{% include from="B11-00_0003-AgenticAI-EAP.md" element-id="B11-00_0003-AgenticAI-EAP_snippet" /%}

## Introduction

In simple terms, AI Agents is a goal-oriented and multi-agent system. It's coordinated by the reasoning and planning capabilities of Large Language Models (LLMs).

The central AI Agents coordination system (Orchestrator) uses software agents. Each agent has access to knowledge resources and integrations to applications and services. Agents also have access to predefined task-oriented workflows. For example, an agent might have a workflow to retrieve weather information. These agent workflows resolve users requests without using full pre-determined conversation flows. Instead, the agents can work together or act independently. They can make real-time decisions. Software agents pull data and perform tasks using diverse resources and business domains. AI Agents is the natural evolution from Conversation AI (CAI).

In contrast, Conversation AI first determines user intent. Then it captures the data entities needed to resolve intent. Pre-defined conversation flows direct conversations, identify intent, and capture entities. Conversation flows connect to third-party resources as needed. Conversation designers use their customer knowledge to design flows. The flows can be flexible. But flexibility is pre-defined then programmed into the flows.

AI Agents uses LLMs to plan the flow in real-time, and orchestrate responses to user requests. Flexibility is dynamic. When needed, AI Agents also can use deterministic CAI conversation flows. For example, for performance, risk aversion, or simplicity. AI Agents can build on your existing CAI artifacts and works with new ones. AI Agents is more flexible than CAI. It also requires less time to build than CAI solutions. Business architects use their knowledge of business processes and data to build agents.


## What You'll Learn

In this topic you'll learn about:

* [The history of AI solutions](#HistoryAI)
* [Key Elements of AI Agents](#KeyElements)
* [Creating AI Agents agents with Amelia](#AmeliaAgenticAI)
* [Amelia's AI Agents architecture](#Architecture)
* [Things to consider with AI Agents](#AgenticAI)
* [Accessing AI Agents features in Amelia](#AccessAgenticAI)

##The History of AI Solutions {% #HistoryAI %}

Artificial Intelligence (AI) solutions have evolved dramatically over years. Starting with simple bots to virtual agents and AI Agents.

* **Bots** - These first efforts were FAQ-centric. They use decision trees to manage conversations. They often led to poor customer experiences.

* **Virtual Agents** - These agents used conversation design to engage users. Conversations are more flexible than bots.

* **GenAI Powered Agents** - These agents are more human like. You can turn common integrations into templates. And build libraries and other tools for reuse.

* **AI Agents** - This multi-agent architecture uses LLMs. It orchestrates systems, knowledge, software agents, and human agents. The result is richer more human responses. With AI Agents, everyone can have personal digital concierge to perform tasks. 

##Key Elements of AI Agents {% #KeyElements %}

AI Agents has several common elements:

* **Goals** - LLMs extracts user goals from utterances. Then orchestrates a response using agents.

* **Agents** - Pre-configured software agents use functions and knowledge to respond to users. Agents collect useful information and initiate tasks.

* **Functions** - These organize sources, inputs, and outputs to perform unique tasks. You also can define pre-conditions for user responses. A function to identify a user might use an employee ID and integrate with a third-party resource.

* **Knowledge** - Agents rely on documents to provide answers to users. For example, a user might ask about return policies.

* **Responses** - Goals, agents, functions, and knowledge result in responses and actions. Responses evolve as a conversation evolves. LLMs orchestrate the contents of responses.


##Create AI Agents Agents with Amelia {% #AmeliaAgenticAI %}

### Building AI Agents Agents

To build AI Agents agents, Amelia provides three key tools:

* **Cognitive Agents** - This tool lets you define unique agents. The LLM orchestrates which agent to call based on the conversation. Agents define sources, functions, and knowledge needed to execute a task. See the [Cognitive Tasks Introduction](B03-11_0101-Cognitive-Agents-Intro.md) topic for details.

* **Cognitive Functions** - This tool performs actions used to accomplish tasks. You can use web actions, CAI conversation flows, or integration flows. These artifacts manage conversation flows and interact with third-party resources. See the [Cognitive Functions Introduction](B03-11_0201-Cognitive-Functions-Intro.md) topic for details.

* **Knowledge Collections** - This tool collects information needed to perform tasks. LLMs use the information when processing utterances and orchestrating responses. See the [Knowledge Collections Introduction](B03-11_0301-Knowledge-Collections-Intro.md) for details.

> The chat interface and Debug panel provide details about Amelia's AI Agents responses. The Cognitive Agents tool also has a test feature with debug details.

### Configuring LLMs for AI Agents

Currently, Amelia lets you connect to OpenAI, Azure, and custom LLMs. You can use these to orchestrate AI Agents. See the [Cognitive Provider Introduction](B03-08_0701-Cog-Provider-Intro.md) and [Cognitive Provider Management](B03-08_0703-Cog-Provider-Mgmt.md) topics for details.

##Amelia's AI Agents Architecture {% #Architecture %}

The AI Agents feature uses LLMs to process end user input through steps.

* The Planner step analyzes user utterances and conversation context. Then identifies user goals. This step directs the conversation one of three ways. Intent driven conversation flows and Document FAQ goals generate output. For goals that require orchestration, the Planner assigns agents to fulfill the goal.

* The Agent Execution step invokes and executes one or more agents to fulfill goals.

* Each agent determines which functions and knowledge collections to use. Then executes them as needed.

* Each agent then uses function outputs to generate responses.

* The LLMs then evaluate if user needs are met. If not, they identify additional goals. Then invoke agents, and repeat the process until all needs are met.


##Things to Consider with AI Agents {% #AgenticAI %}

In 2024 1% of organizations used %B03-AgenticAI.feature%. In 2025 about 30% of organizations will leverage AI Agents. Because it is new, there are a few things to consider when using AI Agents.

* For the forseeable future, enterprises will be in a hybrid AI world. Some question are best answered in a deterministic way with CAI conversation flows. Dynamically generated responses work better in other situations. And some requests require rule-based approaches for compliance.

* Enterprises will adapt and new roles will emerge. Where CAI created the Conversation Designer role, AI Agents requires business process experts and Agentic Business Architects.

* New tools will be needed for large deployments. Agent AI will require new analytics, dependency management, guardrails, and controls built in.

* Business process reengineering might be required. This will require organizational change management.


##Access AI Agents Features {% #AccessAgenticAI %}

{% include from="B11-00_0001-AgenticAIAccess.md" element-id="B11-00_0001-AgenticAIAccess_snippet" /%}

## More Resources

{% include from="B11-00_0002-AgenticAI-MoreResources.md" element-id="B11-00_0002-AgenticAI-MoreResources_snippet" /%}
