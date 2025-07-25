# Amelia Answers Workspace Introduction

{% include from="B04-00_0001-AnswerAgent-EAP.md" element-id="B04-00_0001-AnswerAgent-EAP_snippet" /%}

## Introduction

{% include from="B04-00_0001-Amelia-Answers-Intro.md" element-id="B04-00_0001-Amelia-Answers-Intro_snippet" /%} This advanced technology takes the search experience to the next level.

Have you ever had to deal with the frustration of trying to access information that's scattered across different systems and locations? It's a common issue for many businesses, and it can be a major pain for both customers and employees. But don't worry, there's a solution! Amelia Answers uses Generative and Deterministic AI to bring together all of your enterprise data and deliver intuitive, natural-language search experiences. This means that you and your users can spend less time searching for information and more time focusing on what really matters - growth!

{% include from="B04-00_0001-Sources-Intro-Part1.md" element-id="B04-00_0001-Sources-Intro-Part1_snippet" /%} This means they'll serve as the basis for future interactions with Amelia. Unlike other tools, there's no separate 'deploy' step after indexing. Uploaded knowledge sources automatically become operational in your domain. After indexing, it's important to test your knowledge sources. Testing helps you understand how Amelia will respond to users and ensures all is working as intended.

### Indexing Your Knowledge Source

Amelia provides knowledge in several ways. Some are LLM-based, and some are not. As you set up Amelia Answers, you must choose how to build your knowledge source. You might choose one method over the other or a mix of both. The first method uses preset QA pairs (question and answer pairs). The second uses LLMs.

#### Using QA Pairs

With preset QA pairs, your user asks a question. Amelia checks the similarity of the question imported and stored using Amelia Answers. If the question's similar enough, Amelia gives an answer.

#### Using an LLM

File, website, and integration-type knowledge sources all support LLM-based answers. LLM-based answers let Amelia supercharge complex task automation. Here are some ways that LLMs enhance your answers:

* **Conversational Context**: LLMs include volumes of conversation history. This means Amelia can draw context and pick up cues from earlier dialogue. Because of this, you could ask, "Does my insurance cover cars?" followed by, "What about trucks?" rather than, "Does my insurance cover cars?" followed by, "Does my insurance cover trucks?".

* **CQA (Clarifying Question Answering)**: When Amelia encounters an unclear question, Amelia asks for clarification rather than just giving a best answer.

* **Sourcing**: LLMs can generate text citing sources. Providing the information used to generate a question addresses concerns about hallucinations. By contrast, QA pairs are inherently tied to a source - the pair.

LLMs need more data preparation, so understanding this process can be helpful.

![B04-00_0001-AA-LLM-Data-Prep-Process](B04-00_0001-AA-LLM-Data-Prep-Process.png){width="900" style="block"}

*The LLM Data Preparation Process*

First, your original file or data source goes through a transformation. Your raw data source could be a DOCX, XLSX, PDF, CSV, or HTML document. The result is a document object. This document object has two key components - page_content and metadata. Page_content is the text. Metadata is the page number, file type, and other relevant information.

Next, Amelia splits these structured documents into more manageable chunks. Chunking helps Amelia navigate, extract information, and respond accurately. Then, Amelia transforms the document chunks into vectors of numbers. These fixed-length, numerical, semantic vectors capture the meaning and relationships in your documents.

Finally, Amelia defines the indexes and data structures, organizing these vectors for efficiency. Amelia uses the Weaviate vector store to match queries to stored sources. So, when your user asks Amelia a question, the vector store quickly matches the question and the answer. This search indexing strategy is similarity-based and great for large-scale searches.

### Testing Your Knowledge Source

{% include from="B04-00_0001-Testing-Know-Source.md" element-id="B04-00_0001-Testing-Know-Source_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Amelia Answers pre-configuration](#Pre-Conf).

* [Accessing the workspace](#Access).

##Pre-Configuration {% #Pre-Conf %}

Before you can start using Amelia Answers, You must pre-configure Amelia as follows:

1. To use core Amelia Answers functionality, you'll enable the DocumentFaq subsystem responder on your domain. For more information on this step, see [How-to: Preconfigure a Domain](B01-01_0008-HT-Precon-AAnswers-Responder.md).

2. To use QA pairs, you'll configure the QaPairFaq subsystem responder on your domain. You can skip this step if you don't use QA pairs. For more information on this step, see [How-to: Preconfigure a Domain](B01-01_0008-HT-Precon-AAnswers-Responder.md).

   > With parallel pipelines in Amelia Answers, the QaPairFaq responder takes precedence over DocumentFaq.
3. To avoid timeouts on large documents, you can use LangChain. LangChain typically provides a better pipeline for Amelia Answers. For more information on this step, see [How-to: Preconfigure a Domain](B01-01_0008-HT-Precon-AAnswers-Responder.md).

4. To use a dedicated LLM with Amelia Answers, you'll add a new cognitive provider configuration. Azure OpenAI LLM is recommended for production environment use. It's a Microsoft-specific learning model for advanced artificial intelligence. Use this option for best-in-class performance, scaling and infrastructure support. OpenAI works for all LLM-based functionality. Amelia's Internal LLM is self-hosted. Use this option if you're looking for best-in-class data privacy and monitoring. For more information on this step, see [How-to: Enable LLM Cognitive Providers](B03-08_0704-HT-Precon-AAnswers-CogProvider.md).

   > If both Amelia's in-house LLM and OpenAI are enabled and configured, OpenAI takes priority in most cases.
5. To use Amelia Answers, you must enable a cognitive task configuration for Question Answering. We also recommend adding cognitive task configurations for Document Parsing, and Embeddings. For more information on this step, see [How-to: Enable Cognitive Tasks for Amelia Answers](B03-08_0604-HT-Precon-AAnswers-CogTask.md).

##Access the Workspace {% #Access %}

To go to the Amelia Answers workspace, From the **top left main** menu, click Amelia Answers.

Once inside the Amelia Answers workspace, you'll see the left-side menu and Home page. To learn more about these elements and their features, see the [Amelia Answers Workspace Walkthrough](B10-00_0002-Answer-Agents-Walk.md).

## More Resources

* [How-to: Preconfigure a Domain](B01-01_0008-HT-Precon-AAnswers-Responder.md)
* [How-to: Enable LLM Cognitive Providers](#using-an-llm)
* [How-to: Enable Cognitive Tasks for Amelia Answers](B03-08_0604-HT-Precon-AAnswers-CogTask.md)
* [Workspace Walkthrough](#introduction)

