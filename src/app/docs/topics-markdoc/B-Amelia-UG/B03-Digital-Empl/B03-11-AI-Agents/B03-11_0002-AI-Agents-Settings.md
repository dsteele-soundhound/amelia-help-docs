# AI Agents Settings

{% include from="B11-00_0003-AgenticAI-EAP.md" element-id="B11-00_0003-AgenticAI-EAP_snippet" /%}

## Introduction

You can use the Settings tab workspace to control how Agentic AI orchestrates agents. This includes processing cognitive functions and knowledge collections. The Settings let you optimize Amelia based on your organizational needs.

The [AI Agents Introduction](B03-11_0001-AI-Agents-Intro.md) topic describes Agentic AI. And how it compares to other AI methods.



##Access AI Agents Settings {% #Access %}

To access AI Agents Settings workspace:

1. From the top left main navigation menu, click **Digital Employees**.

2. On the left edge, click the **AI Agents** button.

3. From the flyout menu, select the **Agent Settings** buttons to build AgenticAI agents.

![B03-11_0002-AgenticAI-Settings-Workspace.png](B03-11_0002-AgenticAI-Settings-Workspace.png){width="800"}

*The AI Agents Settings Workspace*



## What You'll Learn

In this topic you'll learn about AI Agents Settings.


## AI Agents Settings


| Setting                                                                | Description                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reset to Default                                                       | Click this button to switch all settings to their default values.                                                                                                                                                                                                                                                                                                                      |
| Save                                                                   | Click to save settings changes.                                                                                                                                                                                                                                                                                                                                                        |
| Enable Detailed Execution Explanations                                 | When enabled, the system provides verbose explanations of agent decisions and execution flows. This provides better debugging and transparency. No is the default.                                                                                                                                                                                                                     |
| Enable Planner to ask disambiguation questions during Agentic Planning | Click Yes or No to set or unset a flag that allows the Planner to ask the user disambiguation questions when the input is unclear during planning. Yes is the default.                                                                                                                                                                                                                 |
| Enable Response Chunking                                               | Splits agent responses into smaller chunks. This improves processing speed and faster user feedback. Yes is the default.                                                                                                                                                                                                                                                               |
| Include Function Call Results in Agent Context                         | Determines whether an Agent should store function call results in its execution context. This allows use of results for future reference. Yes is the default.                                                                                                                                                                                                                          |
| Integration Flow Category                                              | Type the name of the reporting category for integration flow executions. Used by all functions in that domain as flow category. Same as the Flow Category setting set in the Advanced tab of a Backend task in any DEB flow in that domain. Agentic is the default.                                                                                                                    |
| Max Iterations for Self-Reflection Loop                                | The maximum number of iterations an agent can perform in its self-reflection feedback loop. This can help to refine execution. A value of 0 disables self-reflection. Higher values may improve decision-making but can impact performance. 0 is the default.                                                                                                                          |
| Maximum Document Collections per Agent                                 | Defines the maximum number of document collections an agent can access. Helps manage complexity of cognitive Agent and ensures efficiency. 10 is the default.                                                                                                                                                                                                                          |
| Maximum Functions per Agent                                            | Specifies the maximum number of cognitive functions that an agent can utilize. Helps manage complexity of cognitive Agent and ensures efficiency. 30 is the default.                                                                                                                                                                                                                   |
| Maximum Iterations By Agent per User Turn                              | Limits the number of iterative executions an Agent can perform within a single user turn. Helps to prevent unintended loops and excessive processing. 10 is the default.                                                                                                                                                                                                               |
| Maximum Number of Instruction Document Results                         | The maximum number of instruction document results a Cognitive Agent can use to process a user question. 5 is the default.                                                                                                                                                                                                                                                             |
| Maximum Number of Knowledge Document Results                           | Defines the maximum number of knowledge document results a Cognitive Agent can use to provide an answer. 5 is the default.                                                                                                                                                                                                                                                             |
| Maximum Planning Iterations per User Turn                              | Defines the maximum number of iterations an Agentic AI planner can execute per user turn. This helps prevent unintended loops and excessive processing. 6 is the default.                                                                                                                                                                                                              |
| Response Post Processing Channels considered as Chat                   | Comma separated list of channels to be considered as Chat channel for Response Post Processing when creating AI agents. For example, if you configure another channel like `twilio` here, Amelia's responses in twilio channel will be post-processed using the Response Post processor configured for Chat in the AI agent definition. webchat_coremind,webchat_coreuser is the default. |
| Response Post Processing Channels considered as Voice                                                                       | Response Post Processing channel(s) considered as Voice when creating AI agents. For example, if you configure another channel like `sms` here, Amelia's responses in the sms channel will be post-processed using the Response Post processor configured for Voice in the agent definition. voice is the default.                                                                     |


## More Resources

{% include from="B11-00_0002-AgenticAI-MoreResources.md" element-id="B11-00_0002-AgenticAI-MoreResources_snippet" /%}
