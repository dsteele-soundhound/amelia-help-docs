# Cognitive Tasks Introduction

## Introduction

{% include from="B03-08_0601-Cog-Tasks-Intro.md" element-id="B03-08_0601-Cog-Tasks-Intro_snippet" /%}

Currently, the General Answering, Langchain, and Humanizer cognitive tasks can use prompts. These prompts help instruct the LLM. For example, to provide specific outputs, help identify user intent, or limit its inputs. Amelia staff can help you define these prompts to optimize Amelia Answers and other features.

See our [Cognitive Tasks Management](B03-08_0603-Cog-Task-Mgmt.md) topic for details about using this feature.

## What You'll Learn

In this topic you'll learn about:

* [Creating cognitive tasks](#Creatin).

* [Extracting entities and intents with cognitive tasks](#Extracti).

* [Testing cognitive tasks](#Testing).

* [Types of cognitive tasks](#Types).

* [Accessing the Cognitive Tasks workspace](#Access).

##Creating Cognitive Tasks {% #Creatin %}

Cognitive tasks let you control how Amelia uses LLMs to parse conversations. The Cognitive Tasks workspace has a broad range of task types. Some tasks also let you write prompts to control how LLMs find and display data. Other tasks help you extract user intent and entity data needed to resolve intent. Your goals determine how to create and configure these tasks.

##Extracting Entities and Intents with Cognitive Tasks {% #Extracti %}

If you want to use cognitive tasks to extract intents and entities, creating the task is the first step. Once created, go to the intent and entity workspaces to configure them to use LLMs.

For entities, once you define a cognitive task, use the Entity workspace. Select the Use LLM setting on the Advanced tab of the workspace. This setting is available for all entity datum types except Custom datums.

For intents, once you define a cognitive task use the Models workspace. Create an LLM Classifier model. Then specify the intents to trigger with the model. Training and deploying the LLM Classifier model connects intents and your cognitive task.

##Testing Cognitive Tasks {% #Testing %}

Once you set up a cognitive task, you can test the connection. This ensures Amelia can use your task with the specified LLM.

##Types of Cognitive Tasks {% #Types %}

Amelia includes nineteen types of cognitive tasks. One task can correct grammatical errors and typos in text data. Other tasks let conversation flows use an LLM, generate code, and answer questions. These are available in the Cognitive Tasks workspace. They're described in more detail in the [Cognitive Tasks Management](B03-08_0603-Cog-Task-Mgmt.md) topic.

##Accessing the Cognitive Tasks Workspace {% #Access %}

{% include from="B03-08_0603-CognitiveTasksAccess.md" element-id="B03-08_0603-CognitiveTasksAccess_snippet" /%}

## More Resources

For more information, see:

* [](B03-08_0603-Cog-Task-Mgmt.md)[Cognitive Tasks Management](B03-08_0703-Cog-Provider-Mgmt.md).

* [Cognitive Providers Introduction](B03-08_0701-Cog-Provider-Intro.md).

* [NLU Resources Introduction](B03-08_0002-NLU-Resources-Intro.md).

