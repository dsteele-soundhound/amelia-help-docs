# What's New in Amelia 7.0

## Introduction

Amelia 7.0 unlocks a new, more advanced approach to conversational AI for enterprise builders of all types. Autonomous AI agents, pre-built action modules, the market’s most advanced voice recognition, and more — all to help transform how you deliver experience and efficiency.

Created with your innovation in mind, this topic explores what’s new in Amelia 7.0.


## What You'll Learn

In this topic you'll learn about:

* [How Amelia uses autonomous AI Agents](#AutonomousAI).
* [How Amelia uses Action functions](#ActionFunctions).
* [How Agentic+ powers Amelia 7.0](#Agentic+).
* [How Amelia uses Advanced Speech Recognition (ASR)](#AdvancedSpeechRecognition).
* [How Amelia lets you explore Generative Building](#GenerativeBuilding).
* [How Amelia uses guardrails and PII masking](#GuardrailesPII).
* [Links to new Amelia features](#NewFeatures).
* [Additions and Changes to Amelia 7.0](#Additions).


## Amelia 7.0 Features

### Autonomous AI Agents {% #AutonomousAI %}

Autonomous AI agents are the most powerful new tool for every business’ front line. Powered by GenAI, they handle complex requests, communicate with empathy, and complete tasks without human escalation. Each is tailored to your business to act safely and independently, delivering reliable outcomes every time.


### Action Functions {% #ActionFunctions %}

Our AI agents are built to do more than respond — they take action. Equipped with an extensive library of business-ready execution functions, they can handle everything from password resets to prescription refills, including more complex, highly variable interactions such as loan approvals, personalized service recommendations, or intricate customer queries. All action functions are also easily customizable.


### Agentic+ {% #Agentic+ %}

At the core of 7.0 is Agentic+ — our proprietary framework for autonomous, multi-agent orchestration. Agentic+ can toggle seamlessly between generative flows (probabilistic engine synthesizing content from vast datasets) or deterministic flows, which are rules-based and ensure consistent and accurate results. These are absolutely essential in financial, legal, or other high-precision transactions. Additionally, workflows include a human-in-the-loop mechanism to ensure personal oversight when required.

Agentic+ is an unparalleled conversational reasoning engine put at the heart of every Amelia agent.


### Advanced Speech Recognition (ASR) {% #AdvancedSpeechRecognition %}

Amelia’s AI agents include SoundHound AI’s next-gen voice recognition — built for human-like understanding and interaction. With low-latency streaming, rapid NLU handoff, and enterprise tuning, it delivers unmatched speed and accuracy compared to common 3rd-party speech-to-text (STT) solutions.


### Generative Building {% #GenerativeBuilding %}

Discover an entirely new way to design with our generative AI agent builder. Build with prompting and natural language, instead of cumbersome manual design and repetitive logic sequencing for each use case. Advanced deployments with minimal technical expertise required.

### Sophisticated Guardrails and PII Masking {% #GuardrailesPII %}

Amelia 7.0 also has our industry-leading guardrails. This includes extensive Personal Identifying Information (PII) masking. Guardrails help ensure a safe, reliable deployment in any environment.



## Links to New Amelia 7.0 Features {% #NewFeatures %}

### AI Agents

In simple terms, our AI Agents are part of a goal-oriented and multi-agent system. It's coordinated by the reasoning and planning capabilities of Large Language Models (LLMs).

* [Introducing AI Agents](B03-11_0001-AI-Agents-Intro.md).
* [Introducing Cognitive Agents](B03-11_0101-Cognitive-Agents-Intro.md).
* [Introducing Cognitive Functions](B03-11_0201-Cognitive-Functions-Intro.md).
* [Introducing Knowledge Collections](B03-11_0301-Knowledge-Collections-Intro.md).

### Answer Agents

The Amelia Answers Agent workspaces use Deterministic and Generative AI to reduce the time and effort needed to deliver interactive question-and-answer experiences. Amelia Answer Agents uses advanced technologies such as RAG (Retrieval-Augmented Generation) and LLMs (large language models) to give precise and relevant answers to unique and complex user questions.

* [Introducing Answer Agents](B04-00_0001-Amelia-Ans-Intro.md).
* [The Answer Agents walkthrough](B04-00_0002-Amelia-Ans-Walk.md).



##Additions and Changes {% #Additions %}

These are new features and updates to specific parts of the Amelia application and platform.  Use `Ctrl + F` or `Cmd + F` to search this topic for all mentions of a specific release.

> **Note:** Version numbers are in bold, for example, 7.0.0. Multiple paragraphs under a paragraph with a bold version number indicate changes to the same version.

### Breaking Changes

These breaking change notices are sorted by earliest release number.

**7.0.0:** Disable unused NLU configurations by default for New domains. When creating new domains, these NLU (Natural Language Understanding) features are disabled by default.

* Ontological Intent Detection
* Coupler Parsing
* Conditional Execution of Runtime processes
* Sequential Execution of Runtime processes
* Boolean Query Execution
* Semantic Clustering

This does not impact existing domains. These features can be enabled at any time once a new domain is created.

**7.0.0:** Replace Response Pool Disfluency Messages with LLM Responses. For domains configured with an LLM, we've added domain settings. These let Amelia use an LLM for disfluency, handling interruptions in conversations. This provides more dynamic responses than the current DISFLUENCY response pool. The LLM creates short context-aware phrases when a response takes longer than expected. You also can determine the time before the LLM generates a response. For example, to determine when short pauses generate responses.

These settings manage how an LLM responds to disfluency:

* User Engagement Message Initial Delay: Initial delay in seconds before sending the first user engagement message if no response is generated. Should be in the range [< 10.0] seconds. Setting to 0 or negative will disable User engagement message. This setting was previously named DISFLUENCY_RESPONSE_DELAY. Default is 2.0.
* User Engagement Message Backoff Interval: Interval in seconds between consecutive user engagement messages after the initial delay, as long as no response is generated. Setting to 0 will disable User engagement message.  For example, if set to 2, messages are sent at: [initial delay], [initial delay + 2], [initial delay + 4], etc. Should be in the range [0.0 - 10.0] seconds. Default is 3.0.
* Maximum User Engagement Messages Per Turn: Maximum number of user engagement messages sent per turn while waiting for a response. Set to 0 to disable. Should be in the range [0 - 5]. Default is 2.

The new settings are available in the Advanced tab of the Domains workspace. It's located in the Administration module.



### Highlights

**7.0.0:** Build ability to define, execute and test Cognitive Agents and Functions using LLMs. We’ve built Amelia to use LLMs, functions, and knowledge sources to perform tasks and provide information. An orchestrator manages user utterances and Amelia responses. This is a faster more dynamic more precise way to interact in conversation. It is more flexible than the deterministic DEB (Digital Employee Builder) process where you define all reasonable conversation paths. But this new Agentic AI capability can include deterministic processes where that’s helpful.

**7.0.0:** Add Multi-agent execution capability for the Orchestrator. The new orchestrator feature can handle multiple agents at the same time.

**7.0.0:** Add capability to post process Agent Response for different channels The new Agentic AI features can input and output conversation and data through chat, voice, and other channels. This includes ServiceNow and other gateways.

**7.0.0:** Ability to follow steps/guardrails during the Function Calling task. You can define privacy and other guardrails for functions to follow as they respond to the orchestrator. Functions retrieve and organize data based on requests from the orchestrator.



## More Resources

{% include from="A02-00_0007-QuickStartLinks.md" element-id="D02-00_0007-QuickStartLinks_snippet" /%}
