# Intents Introduction

## Introduction

{% include from="B03-07_0203-Intents-Intro.md" element-id="B03-07_0203-Intents-Intro_snippet" /%}

Configuring Amelia to identify intents depends on your training approach. Training options include:

* **Machine Learning Models**: With machine learning models, you define intents as standalone items supported by user utterances. You also can tag chat transcripts with intents. Amelia uses both to create a model that represents the words and phrases tied to an intent. Then Amelia uses the model to process live conversations and identify user intents. When a person uses words that match the mental model, Amelia identifies their intent.
* **LLM**: With LLMs (large language models), Amelia detects intent by comparing live user utterances with intent details. The intent name and description must describe user intent. For example, the intent description acts as a prompt. Amelia combines these details with the LLM to identify user intent in conversations.

When using an LLM to help Amelia identify user intent, an intent classifier model is used.

Amelia also has the ability to switch from one intent to another. Here Amelia asks a qualifying question to confirm a change in intent.

### Training Intents with Machine Learning Models

Amelia includes built-in machine learning models. These models process utterances to create a mental model used to identify intent.

To identify intent with machine learning, Amelia processes four types of files:
{% include from="B03-07_0201-Model-Training-Files.md" element-id="B03-07_0201-Model-Training-Files_snippet" /%}

To learn more about training with machine learning models, see our [Models Introduction](B03-07-NLU-Comprehension_B03-07_0701-Models-Intro.md) topic.

### Training Intents with LLMs

LLMs also can identify Intents using an intent classifier model. Training with LLMs takes fewer steps than using other machine learning models. The intent name and description help Amelia understand intent. For example, the intent description should be like a prompt used with ChatGPT or other LLM. Provide information about when to select an intent and when to avoid selecting an intent.

To learn about training with LLMs, see our [Models Introduction](B03-07-NLU-Comprehension_B03-07_0701-Models-Intro.md) topic.

### Predicting Intent

The Predict tool helps you test or process an individual utterance. These results help you understand what intent triggers and with what level of accuracy.

To learn more about the Predict tool, see our [Predict Configuration](B10-03_0003-Predict-Configuration.md) topic.

## What You'll Learn

In this topic you'll learn how to access the Intents panel.

## Access the Intents Panel

{% include from="B03-07_0201-Intents-Access.md" element-id="B03-07_0201-Intents-Access_snippet" /%}

## More Resources

For more information, see:

* [Intents Management](B03-07_0203-Intents-Management.md)
* [Intents Best Practices](#introduction)
* [Entities Introduction](B03-07-NLU-Comprehension_B03-07_0301-Entities-Intro.md)
* [Models Introduction](B03-07-NLU-Comprehension_B03-07_0701-Models-Intro.md)

