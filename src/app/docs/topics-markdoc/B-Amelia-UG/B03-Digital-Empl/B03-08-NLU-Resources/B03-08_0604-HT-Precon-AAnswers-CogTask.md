# How-to: Enable Cognitive Tasks for Amelia Answers

## Introduction

To get Amelia Answers up and running, you'll set up a cognitive task for Question Answering. And for Question Answering to work well, you'll enable Document Parsing. Embeddings can significantly speed up document parsing, so Amelia recommends using them together.

To use Question Answering, Document Parsing, and Embeddings, add new cognitive task configurations for each.

To learn more about the various cognitive task types, see our [Task Type Reference List](B03-08_0605-Cog-Task-Type-Ref-List.md).

## What You'll Learn

In this topic, you'll learn about:

* [Requirements for enabling a cognitive task](#Requirem).
* [Adding a cognitive task](#Add).
* [How to enable Question Answering](#Enable).
* [How to enable Document Parsing](#Enable2).
* [How to enable Embeddings](#Enable5).

##Requirements {% #Requirem %}

To complete these pre-configuration steps, you'll need:

* Administrator role for the affected domain.

##Add a Cognitive Task {% #Add %}

To add a cognitive task:

1. From the **top left main** menu, click **%B03-Digital-Empl.Digital.Employees.workspace**%.

2. On the **left-side** menu, click **NLU Resources**.

3. From the flyout menu, click **Cognitive Tasks**. The Cognitive Tasks panel opens between the left-side menu and the Home page.

4. Click **+ Add New**.

   ![B03-08_0604-AA-Cog-Task-Add-New](B03-08_0604-AA-Cog-Task-Add-New.png){width="900" style="block"}

   *The NLU Resources with Cognitive Tasks Panel Highlighted*

###Enable Amelia for Question Answering {% #Enable %}

To get Amelia Answers up and running, you'll enable Question Answering:

1. From the **Task Type**, select **Question Answering**.

2. From the **Provider Configuration** dropdown, select the provider that you set for Amelia Answers. See [How-to: Enable a Cognitive Provider for Amelia Answers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md) if you're unsure of this step.

3. Set a **Timeout (ms)**.

4. Click **Save**.

###Enable Amelia for Document Parsing {% #Enable2 %}

To maximize Amelia Answers performance, Amelia recommends enabling Document Parsing:

1. From the **Task Type**, select **Document Parsing**.

2. From the **Provider Configuration** dropdown, select the provider that you set for Amelia Answers.

3. Set a **Timeout (ms)**.

4. Click **Save**.

###Enable Amelia for Embeddings {% #Enable5 %}

Embeddings can significantly speed up document parsing, so Amelia recommends using Embeddings and Document Parsing together.

To enable Embeddings:

1. From the **Task Type**, select **Embeddings**.

2. From the **Provider Configuration** dropdown, select the provider that you set for Amelia Answers.

3. Set a **Timeout (ms)**.

4. Click **Save**.

## More Resources

* [How-to: Preconfigure a Domain](B01-01_0008-HT-Precon-AAnswers-Responder.md)

* [Cognitive Task Type Reference List](B03-08_0605-Cog-Task-Type-Ref-List.md)

* [How-to: Enable LLM Cognitive Providers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md)

* [Amelia Answers Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md)

* [Amelia Answers Workspace Walkthrough](B10-00_0002-Answer-Agents-Walk.md)

