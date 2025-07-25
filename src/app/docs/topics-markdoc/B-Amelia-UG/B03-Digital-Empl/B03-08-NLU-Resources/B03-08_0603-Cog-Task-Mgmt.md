# Cognitive Tasks Management

## Introduction

To use the Cognitive Tasks workspace, you must understand its features and where to find them. This feature lets you create individual LLM-related tasks to use with Amelia. When Amelia uses an LLM, you can create a task to specify an LLM to use, the timeout threshold, and any custom prompts. You also can test a task. For some tasks like entity extraction, you also must configure other parts of Amelia.

See our [Cognitive Tasks Introduction](B03-08_0601-Cog-Task-Config-Intro.md) topic for details about cognitive tasks.

## Access the Cognitive Tasks Workspace

{% include from="B03-08_0603-CognitiveTasksAccess.md" element-id="B03-08_0603-CognitiveTasksAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Cognitive Tasks workspace](#The).
* [Add a cognitive task](#Add).
* [Edit a cognitive task](#Edit).
* [Test a cognitive task](#Test).
* [Delete a cognitive task](#Delete).
* [Search for a cognitive task](#Search).

## The Cognitive Tasks Workspace {% #The %}

Cognitive tasks are created and managed with a panel and a tab workspace.

### The Cognitive Tasks Panel

This panel lists existing tasks with the ability to add new tasks and search for tasks.

![B03-08_0603-CogTasks-Panel](B03-08_0603-CogTasks-Panel.png){width="400" style="block"}

*The Cognitive Tasks Panel*

### The Cognitive Tasks Tab

You use this tab to create tasks that run when Amelia uses an LLM to perform an action.

Not all tasks need to use Overrides. This includes the Question Answering, Langchain, and Humanizer tasks which include this feature. It depends on your requirements.

![B03-08_0603-CogTasks-Tab](B03-08_0603-CogTasks-Tab.png){width="600" style="block"}

*The New Cognitive Task Tab*

*Cognitive Task Tab Settings*

<table>
<tr><td>Settings</td><td>Description</td></tr>
<tr><td>Name</td><td>Type a unique name for this task.</td></tr>
<tr><td>Task Type</td><td>Select the type of task to create. <ul><li><strong>Question answering:</strong> Retrieves answers for the given question using the provided context. Context can include documents, articles, databases or other structured information sources.</li> <li><strong>FAQ correction:</strong> Automatically improves the FAQ responses based on the user feedback. When a user asks a question and is unsatisfied with the answer, they can provide feedback. This feedback helps Amelia to enhance and refine its responses, ensuring more accurate and relevant answers in the future.</li> <li><strong>DEB call llm:</strong> Enables the interaction with an LLM defined in cognitive providers from DEB or BPN.</li> <li><strong>Sentence correction:</strong> Automatically corrects grammatical errors and typos in user utterances. This ensures that Amelia can process and understand the user's intent more accurately, leading to more relevant and helpful responses. The corrected sentences are used internally for further processing and are also displayed in the conversation interface.</li> <li><strong>Humanizer:</strong> Engages in friendly and contextual conversations with users. It maintains a positive tone and avoids making uncertain claims or providing potentially harmful information. The Humanizer's goal is to create a pleasant and engaging conversational experience.</li> <li><strong>Paraphrasing:</strong> Generates different variations of a given sentence, which is helpful for augmenting datasets with low utterance counts, leading to improved performance in intent classification. By generating and selecting paraphrases, users can create a more diverse and representative dataset for training Amelia's models.</li> <li><strong>Rephrasing:</strong> Generates a more personalized and context-appropriate version of a given response. By analyzing the conversation history it can tailor the responses to better fit the specific context and make them sound more natural and engaging. This is particularly useful for generating natural variations when Amelia needs to respond using a pre-defined fixed pool of responses.</li> <li><strong>DEB task definition:</strong> Used for building DEB and BPN models. It includes various sub-tasks such as generating &quot;ask&quot; and &quot;say&quot; tasks, identifying integration and file type support, extracting entities, and classifying task types. It is essential for creating effective and efficient DEB and BPN models.</li> <li><strong>DEB payload generation:</strong> Generates payload and output variables for DEB and BPN models. This includes generating JSON payloads for mock backend connections and extracting variables from given text. These outputs are essential for simulating interactions with external systems and providing relevant responses to users.</li> <li><strong>Code generation:</strong> Generates various types of code, including Groovy scripts for BPN and DEB tasks, Jexl expressions for graph edges, and HTML code for specific variables and templates. It is essential for automating tasks and creating dynamic and interactive interfaces.</li> <li><strong>Amelia Builds Amelia:</strong> Automates the creation of DEB flows using advanced language models. By analyzing transcripts, knowledge bases, and use cases, ABA can streamline the process of building DEB flows. Users can build DEB flows in three ways: by uploading bulk transcripts, providing custom commands, or interacting directly through Amelia Chat.</li> <li><strong>Keyword extraction:</strong> Identifies and extracts the most important words or phrases from a given sentence. It is useful for summarizing information, categorizing content, and improving search results.</li> <li><strong>Intent classification:</strong> Determines the underlying purpose or goal of a user's utterance. It is crucial for triggering appropriate processes and subflows within Amelia's system, ensuring that the user's needs are met effectively.</li> <li><strong>Entity extraction:</strong> Identifies and extracts specific entities, such as people, places, organizations, or dates, from a given sentence. It is valuable for understanding the context of a conversation and extracting relevant information.</li> <li><strong>Elaborating question:</strong> Generates clarifying questions when a user's input is unclear or incomplete. This helps Amelia to gather more information and provide more accurate and relevant responses.</li> <li><strong>Document parsing:</strong> Processes documents to extract specific information, such as tables, titles, and other key elements. For example, it can convert raw text from a PDF table into detailed paragraphs for an FAQ model. It ensures that all relevant information is captured and presented in a clear and concise manner.</li> <li><strong>Sentence parsing:</strong> Analyzes sentences to extract information such as verb senses, predicate role descriptions, antecedents, consequents, and verb sense similarities. It is essential for understanding the structure and meaning of sentences, and for automating tasks like matching routes and summarizing contexts.</li> <li><strong>Embeddings:</strong> Extracts numerical representations (embeddings) of text data, such as queries and contexts. These embeddings capture the semantic meaning of the text, allowing for tasks like finding semantically similar documents and retrieval-based augmentation. By computing cosine similarity between embeddings, Amelia can identify the most relevant answers to user queries.</li> <li><strong>Agent recommendation:</strong> Generates relevant response suggestions for agents based on the last user utterance and the overall chat context. These suggestions are ranked by relevance score, making it easier for agents to choose the most appropriate response.</li> <li><strong>Langchain:</strong> Interacts with the Langchain framework to leverage large language models (LLMs) for tasks like question answering. By searching through documents, URLs, and knowledge bases, Langchain can provide informative and relevant responses to user queries.</li> <li><strong>Design Assistant:</strong> Aids users in creating and managing DEB flows. It generates subgraphs with conditional edge expressions and adds relevant comments to improve clarity and efficiency. This tool simplifies the design process and helps ensure that DEB flows are well-structured and understandable.</li> <li><strong>Conversation Summarization:</strong> Provides a concise overview of user conversations, focusing on key points, issues, and resolutions. It offers a detailed resolution plan in bullet points for human agents and analyzes the user's sentiment throughout the conversation.</li></ul></td></tr>
<tr><td>Provider Configuration</td><td>Select an LLM provider. These are created with the Cognitive Providers feature.</td></tr>
<tr><td>Timeout (ms)</td><td>Configure how long for Amelia to wait before canceling this task.</td></tr>
<tr><td>Enable Configuration</td><td>Click to enable this task configuration.</td></tr>
<tr><td>Overrides Optional for Question Answering, Langchain, and Humanizer tasks</td><td> </td></tr>
<tr><td>Type</td><td>Select the type of override to create. These options appear if the Task Type is set to Question Answering, Humanizer, and Langchain. Question Answering Task Options <ul><li><strong>Question answer task:</strong> Answer as question based on the context provided.</li> <li><strong>Out of context question:</strong> Check if a question is out of context.</li> <li><strong>Clarifying Question Necessity Assessment:</strong> This prompt assesses if a clarifying question is needed by analyzing the conversation history and original user query.</li> <li><strong>Clarifying Question vs. Final FAQ Decision:</strong> Prompt to decide if it is better for you to output the clarifying question or pass it to another bot to output a final FAQ answer instead.</li> <li><strong>Clarifying Question Assessment:</strong> A clarifying question is required by analyzing the conversation history, user's question, and potential clarifying question.</li> <li><strong>Rephrase a question:</strong> Task to rephrase a question.</li> <li><strong>QA pair generation:</strong> Generate a set of QA pair from context.</li> <li><strong>Multiple Alternate Answer From Amelia Answers:</strong> Generate multiple alternate answers by using Context, Question and main answer returned by LLM.</li> <li><strong>Question and Answering from llm:</strong> Used for providing analysis and answering from LLM.</li> <li><strong>Query relevance:</strong> Relevance for query in the source.</li> <li><strong>Rephrase user input:</strong> Rephrase input to capture conversational context.</li> <li><strong>Query Expansion:</strong> Expands the query to retrieve more relevant information.</li> <li><strong>Alternate Queries:</strong> Provides alternate queries for the given query to help retrieval.</li> <li><strong>Humanizer Task Option:</strong> Engages in contextual talk with the user as part of Amelia's social interaction.</li></ul></td></tr>
<tr><td>Locale</td><td>Select the language locale to use.</td></tr>
<tr><td>Custom System Prompt Instructions</td><td>Type a prompt for the Amelia system to use. For example, &quot;Respond more concisely.&quot;</td></tr>
<tr><td>Custom User Prompt Instructions</td><td>Type a prompt that applies to users.</td></tr>
</table>


##Add a Cognitive Task {% #Add %}

To create a task:

1. From the **top left main** menu, click Digital Employees. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Tasks.

2. In the **Cognitive Tasks** panel, click the **+ Add New** button. A New Cognitive Task tab opens after the Home page.

3. Give your task a **Name**.

4. Complete remaining settings as needed. Open these drop downs to learn about the elements you'll see when adding tasks.

##Edit a Cognitive Task {% #Edit %}

To edit a task:

1. From the **top left main** menu, click Digital Employees. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Tasks.

2. In the **Cognitive Tasks** panel, find then click a task. A Cognitive Task tab opens after the Home page.

3. Edit settings as needed. Open these drop downs to learn about the elements you'll see when adding a cognitive task.

##Test a Cognitive Task {% #Test %}

To test a task:

1. From the **top left main** menu, click Digital Employees. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Tasks.

2. In the **Cognitive Tasks** panel, find then click a task. Or click the + Add New button. A Cognitive Task tab opens after the Home page.

3. The Test button appears when you save a task, next to the Save button. If the button does not appear, configure the task and then save. Click the Test button to test the task.

##Delete a Cognitive Task {% #Delete %}

To delete a task:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Tasks.

2. In the **Cognitive Tasks** panel, find then click a task. Or click the + Add New button. A Cognitive Task tab opens after the Home page.

3. The Delete button appears when you save a task, next to the Save button. If the button does not appear, configure the task and then save. Click the Delete button to delete the task.

##Search for a Cognitive Task {% #Search %}

To search for a cognitive task:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Tasks.

2. In the **Cognitive Tasks** panel, click the Search Here field, below the +Add New button. Type a few characters or a word to filter the list of tasks. Then click the task you want. A Cognitive Task tab opens.

## More Resources

For more information, see:

* [Cognitive Tasks Introduction](B03-08_0601-Cog-Task-Config-Intro.md).
* [Cognitive Providers Introduction](B03-08_0701-Cog-Provider-Intro.md).

