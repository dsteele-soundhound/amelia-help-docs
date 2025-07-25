[//]: # ()
[//]: # (# Use to re-add Prompt information only)

# How-to: Enable Cognitive Tasks for Amelia Answers

## Introduction

To get Amelia Answers up and running, you'll set up a cognitive task for Question Answering. And for Question Answering to work well, you'll enable Document Parsing. Embeddings can significantly speed up document parsing, so Amelia recommends using them together. And, to avoid timeouts on large documents, you can use LangChain. LangChain typically provides a better pipeline for Amelia Answers.

To use Question Answering, Document Parsing, LangChain, and Embeddings, you'll add new cognitive task configurations for each.

## What You'll Learn

In this topic, you'll learn about:

* [Requirements for enabling a cognitive task](#Requirem).

* [Adding a cognitive task](#Add).

* [How to enable Question Answering](#Enable).

* [How to enable Document Parsing](#Enable2).

* [How to enable Embeddings](#Enable5).

* [How to enable LangChain](#Enable6).

##Requirements {% #Requirem %}

To complete these pre-configuration steps, you'll need:

* Administrator role for the affected domain.

##Add a Cognitive Task {% #Add %}

To add a cognitive task:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click NLU Resources.

3. From the flyout menu, click Cognitive Tasks. The Cognitive Tasks panel opens between the left-side menu and the Home page.

4. Click + Add New.

   ![B03-08_0604-AA-Cog-Task-Add-New](B03-08_0604-AA-Cog-Task-Add-New.png){width="900" style="block"}
   *Figure 1. NLU Resources with Cognitive Tasks Panel Highlighted*

###Enable Amelia for Question Answering {% #Enable %}

To get Amelia Answers up and running, you'll enable Question Answering:

1. From the Task Type, select Question Answering.

2. From the Provider Configuration dropdown, select the provider that you set for Amelia Answers. See [How-to: Enable a Cognitive Provider for Amelia Answers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md) if you're unsure of this step.

3. Set a Timeout (ms).

4. At this point, you have the option to add Prompts to suit your specific needs. You may want to do this in various situations such as answering context-based questions, verifying if a question is relevant, determining if a clarifying question is needed, or delegating a clarifying question to another virtual assistant.

   {% include from="B03-08_0604-Add-Prompts.md" element-id="B03-08_0604-Add-Prompts_snippet" /%}

   ![B03-08_0604-AA-Cog-Task-Add-Prompt](B03-08_0604-AA-Cog-Task-Add-Prompt.png){width="900" style="block"}
   *Figure 2. New Cognitive Task with Prompts Section Highlighted*
5. Click Save.

###Enable Amelia for Document Parsing {% #Enable2 %}

To maximize Amelia Answers performance, Amelia recommends enabling Document Parsing:

1. From the Task Type, select Document Parsing.

2. From the Provider Configuration dropdown, select the provider that you set for Amelia Answers. See [How-to: Enable a Cognitive Provider for Amelia Answers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md) if you're unsure of this step.

3. Set a Timeout (ms).

4. At this point, you have the option to add Prompts to suit your specific needs. You may want to do this in various situations such as extracting tables from text, and generating titles for paragraphs.

   {% include from="B03-08_0604-Add-Prompts.md" element-id="B03-08_0604-Add-Prompts_snippet" /%}
5. Click Save.

###Enable Amelia for Embeddings {% #Enable5 %}

Embeddings can significantly speed up document parsing, so Amelia recommends using Embeddings and Document Parsing together.

To enable Embeddings:

1. From the Task Type, select Embeddings.

2. From the Provider Configuration dropdown, select the provider that you set for Amelia Answers. See [How-to: Enable a Cognitive Provider for Amelia Answers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md) if you're unsure of this step.

3. Set a Timeout (ms).

4. At this point, you have the option to add Prompts to suit your specific needs. You may want to do this in various situations such as extracting embeddings used in discovering semantic similarity and retrieval-based augmentation.

   {% include from="B03-08_0604-Add-Prompts.md" element-id="B03-08_0604-Add-Prompts_snippet" /%}
5. Click Save.

###Enable Amelia for LangChain {% #Enable6 %}

From Amelia V6.1+, you can use the LangChain document processing service. Using LangChain offers better document parsing and context review for QA pair processing. LangChain stores and retrieves embeddings or document chunks using Weaviate, a vector database.

To enable LangChain:

1. From the Task Type, select LangChain.

2. From the Provider Configuration dropdown, select the provider that you set for Amelia Answers. See [How-to: Enable a Cognitive Provider for Amelia Answers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md) if you're unsure of this step.

3. Set a Timeout (ms).

4. At this point, you have the option to add Prompts to suit your specific needs. You may want to do this in various situations such as proving analysis and answers from the LLM and query relevance.

   {% include from="B03-08_0604-Add-Prompts.md" element-id="B03-08_0604-Add-Prompts_snippet" /%}
5. Click Save.

## More Resources

* [How-to: Enable Sub-system Responders](B01-01_0008-HT-Precon-AAnswers-Responder.md)

* [How-to: Enable LLM Cognitive Providers](#)

* [Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md)

* [Workspace Walkthrough](#)

