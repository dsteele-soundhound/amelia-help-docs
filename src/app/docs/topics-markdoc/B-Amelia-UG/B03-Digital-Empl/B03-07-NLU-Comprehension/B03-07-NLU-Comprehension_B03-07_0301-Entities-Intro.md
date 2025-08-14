# Entities Introduction

## Introduction

{% include from="B03-07_0301-Entities-Intro2.md" element-id="B03-07_0301-Entities-Intro2_snippet" /%}

![B03-07_0301-Entities-Intro-Flow](B03-07_0301-Entities-Intro-Flow.png){width="900" style="block"}
*Figure 1. How Entities Fit Into a Conversation*

### Types of Entities

Every entity is either normalized or non-normalized. An entity that's normalized uses standard built-in definitions. Normalization is a process that uses guidelines to connect attributes with entities. This helps to remove redundancies and discrepancies. An entity that's non-normalized hasn't undergone cleansing and de-duplication and isn't consistently organized. Non-normalized entities don't use the built-in entity extractor and normalizer for entity data. Instead, you extract and normalize these entities with a mix of regular expressions, tabular data, and grammars. See our [Datum Types Library](B03-07_0101-Datum-Types-Library.md) topic for information about the datum types used by entities.

#### Normalized Entities

* {% include from="B03-07_0302-Entity-Types-Norm-BuiltIn.md" element-id="B03-07_0302-Entity-Types-Norm-BuiltIn_snippet" /%}
* {% include from="B03-07_0302-Entity-Types-Norm-Composite.md" element-id="B03-07_0302-Entity-Types-Norm-Composite_snippet" /%}
* {% include from="B03-07_0302-Entity-Types-Norm-Role.md" element-id="B03-07_0302-Entity-Types-Norm-Role_snippet" /%}

#### Non-Normalized Entities

* {% include from="B03-07_0302-Entity-Types-NonNorm-Custom.md" element-id="B03-07_0302-Entity-Types-NonNorm-Custom_snippet" /%}
* {% include from="B03-07_0302-Entity-Types-NonNorm-Spanless.md" element-id="B03-07_0302-Entity-Types-NonNorm-Spanless_snippet" /%}
* {% include from="B03-07_0302-Entity-Types-NonNorm-Text.md" element-id="B03-07_0302-Entity-Types-NonNorm-Text_snippet" /%}

### Extracting Entities

In a Digital Employees builder conversation flow, the Amelia Asks and Script blocks can extract and manage entities from user utterances. For example, a Script block can save an entity value to a variable. The variable then passes to a third-party application for processing. And an Escalation block can pass entity values as part of the escalation process.

It's possible to extract one or more entities from a single user utterance. For example, the utterance "I need building access for Fred, Wilma, and Barney for next Monday through Friday" might generate five entities. One entity for each of the three people, a start date, and an end date. Amelia then might ask for details about each of the three people.

The biggest challenge with entity extraction is managing ambiguities. A request for Visual Studio C++ and Visual Studio Code software, for example, might cause confusion because of the Visual Studio prefix. Amelia has several tools to help test and optimize ambiguous entity data.

* Datasets: These are text files with utterances. Amelia processes the dataset and assigns entities. For each utterance, you can change the entity assignment, and assign intents.

* Tabular Data Files: These files use CSV (comma-separated values) format. This allows for quick searches to retrieve data. For example, postal codes or city names.

* Lookup Tables: These help identify all possible variations of one name. For example, you could assign one entity name for the product names Microsoft Visual Basic, MS Visual Basic, Microsoft VB, and VB.

Amelia extracts entities either by training a model or with an LLM. Training a model uses entities and other data to create a representational model about a topic. Words and phrases in the model will or won't match words in conversations. Matches indicate an entity or intent exists in a conversation.Unlike training a model, using an LLM to extract entities works differently. The LLM evaluates words and phrases in a conversation to identify an entity.

### Entities and Training Models

It's possible to train Amelia to identify entities using machine learning models. You collect utterances that contain examples of the entities. For example, you might find a dozen different ways to ask to change a password. First you'll markup words and phrases in the utterances. Then you'll process the files using a machine learning algorithm.

The goal is to help Amelia recognize word and phrase patterns in utterances and identify entities in those patterns.

To train Amelia to identify the correct entities, you create two tab-separated files. One file includes utterances marked up to identify values that are possible entities. This includes the entity name assigned to each value. The second file of utterances tests and validates the model Amelia creates. The second file isn't marked up.

These files of utterances can also include negative examples. Negatives aren't annotated. They include utterances that shouldn't launch any entity extraction. Negatives should be both in-domain and out-of-domain.

The phrase, "I want" is a good example of how to handle negatives. If you have lots of utterances that begin with "I want," it'll confuse Amelia. Amelia equates "I want a cookie" with "I want to book a hotel room." The cookie utterance is out of domain. The goal is to help Amelia focus on the nuances around booking hotel rooms.

See our [Models Introduction](B03-07-NLU-Comprehension_B03-07_0701-Models-Intro.md) topic for details about using models to extract entities.

### Entities and LLMs

It's also possible to use Large Language Models (LLMs) to identify and extract entities. The entity description and property settings help LLMs identify entities in user responses. And you should configure the LLM and NLU settings.

> Extracting entities with an LLM uses the Entities panel, not the Models panel. While it's possible to create an entity model, it's not needed when using an LLM. See the [Entities Management](B03-07_0302-Entities-Management.md) topic for more information.

See our LLM topic for details about using language models to extract entities.

### Scoping Entities

Long conversations can veer back and forth between topics. Each topic may need extracting, evaluating, and possibly normalizing different intents and entities. At each return to a topic, Amelia can ask a question to confirm the person wants to return to resolve a prior topic. Amelia's response also might include entity data for the person to re-confirm.

Amelia scopes entities to an intent or to a Digital Employees builder block or BPNs task in a conversation flow. When an intent changes, for example, the person must confirm which topic they want to pursue. Otherwise, Amelia stores entities using the conversation location in a Digital Employees builder flow or BPNs process.

## What You'll Learn

In this topic you'll learn how to access the Entities panel.

## Access the Entities Panel

{% include from="B03-07_0302-EntityAccessSteps.md" element-id="B03-07_0302-EntityAccessSteps_snippet" /%}

## More Resources

For more information, see:

* [Managing Entities](B03-07_0302-Entities-Management.md)

* [Models Introduction](B03-07-NLU-Comprehension_B03-07_0701-Models-Intro.md)

