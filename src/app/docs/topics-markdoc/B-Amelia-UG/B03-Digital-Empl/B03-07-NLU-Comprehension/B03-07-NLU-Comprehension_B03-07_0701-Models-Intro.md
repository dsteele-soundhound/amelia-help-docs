# Models Introduction

## Introduction

{% include from="B03-07_0701-Models-Intro.md" element-id="B03-07_0701-Models-Intro_snippet" /%}

See our [Models Configuration](B03-07_0703-Models-Configuration.md) topic to learn more about these models and their settings.

### Training a Model

Training a model involves transforming data into meaningful representations. Models learn dense vector representations and embeddings for words, phrases, or entire sentences.

Neural networks capture semantic relationships. They go beyond relying on combinations like two-word bigrams and three-word trigrams. Training positions similar words or phrases closer together. This helps a model identify nuanced patterns, dependencies, and similarities between utterances. This allows a model to make more complex and context-aware predictions.

Because training relies on collecting utterances, you'll start with a few questions:

* Who is your target audience?

* What are their expectations for a conversation with Amelia?

* How are they likely to express their intents?

* What data will help them achieve their goals with Amelia?

Conversation logs of users speaking with an AI agent or live agents are the best sources of utterances. These logs are a great way to see the words and phrases people use to express intent and how they convey confusion.

### Model Testing and Validation

Aside from the unique properties for algorithms, all models use a series of files for testing and validation. These files include:
{% include from="B03-07_0201-Model-Training-Files.md" element-id="B03-07_0201-Model-Training-Files_snippet" /%}

You'll upload these files using the NLU Resources > Datasets feature.

#### Test File Processing

There are at least two ways to process test files. Amelia cross-validates data files by breaking them up into separate files for testing. The other method uses one dataset for tests and another dataset for validation.

Using a validation dataset can ensure more accurate results than cross-validation testing. For example, the validation dataset can include utterances challenging for Amelia to understand. A validation dataset also includes utterances not used to train the model.

The cross-validation configuration option defines how you'll process the Test file. Settings include:

* **None**: Process, train, and validate the Test file in one pass.

* **3-fold**: Split the Test file into three equal parts. Use one part for validation and the other parts for training. Then, repeat this process with the other parts. Use another part for validation while using the remaining parts for training. Repeat until you've validated and tested all parts..

* **5-fold**: Split the test file into five equal parts. Use one part for validation and the other parts for training. Then, repeat this process with the other parts. Use another part for validation while using the remaining parts for training. 5-fold cross-validation is the most common configuration for testing. Repeat until you've validated and tested all parts.

* **10-fold**: Split the test file into ten equal parts. Use one part for validation while using the other parts for training. Then, repeat this process with the other parts. Use another part for validation while using the remaining parts for training. Repeat until you've validated and tested all parts.

The cross-validation setting outputs performance statistics. These statistics can help to refine the results of training models.

### Performance Statistics

The metrics output by the training process can help check model performance. Sometimes Amelia picks the wrong intent or entity a little or a lot. Tweak the utterances and labels. Then train again to address any imbalances. Be sure that any tweaks don't impact the metrics for other intents or entities.

For example, put aside utterances that caused Amelia to return an incorrect response. Don't put them into a training set for retraining. Instead, use these utterances in a test or validation data set. Then, experiment with these missed utterances. Add and remove different variations into training sets until no longer misses.

Also, analyze sentence structure and word choices in missed utterances. Do the same with the current training set. Determine how to revise the training data to retrain the model. New and different utterances shouldn't be identical to those that returned incorrect labels.

Repeat this process until you achieve optimal model performance.

See the [Models Configuration](B03-07_0703-Models-Configuration.md) topic to learn more.

### Model Storage and Maintenance

Store your training data and models in a version control repository or safe place. Then, update these saved files with any changes. A repository also is a resource for new projects and projects looking to expand their data sets.

## What You'll Learn

In this topic you'll learn how to access the Models panel.

## Access the Models Panel

{% include from="B03-07_0701-Models-Panel.md" element-id="B03-07_0701-Models-Panel_snippet" /%}

## More Resources

For more information, see:

* [Models Configuration](B03-07_0703-Models-Configuration.md)

* [Intents Introduction](B03-07_0201-Intents-Intro.md)

* [Entities Introduction](B03-07-NLU-Comprehension_B03-07_0301-Entities-Intro.md)

 
