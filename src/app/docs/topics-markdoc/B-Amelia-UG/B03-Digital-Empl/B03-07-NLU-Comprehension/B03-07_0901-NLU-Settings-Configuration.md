# NLU Settings Configuration

## Introduction

{% include from="B03-07_0901-NLU-Settings-Config.md" element-id="B03-07_0901-NLU-Settings-Config_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [Configuring NLU Settings](#Configu).

* [Accessing the NLU Settings panel](#Access).

##Configure NLU Settings {% #Configu %}

The NLU Settings workspace has a number of tabs to help fine-tune Amelia's natural language understanding. Which tabs to configure depends on your use cases.

### Ontologies Tab

These settings help when you use ontologies to detect user intent.

![B03-07_0901-OntologiesTab](B03-07_0901-OntologiesTab.png){width="900" style="block"}

*The Ontologies Tab Workspace*

*Ontologies Tab Workspace Settings*

|             Setting              |                                                              Description                                                              |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Ontological Detection            | Click to enable or disable the use of ontologies. Enabled is the default.                                                             |
| Ontology Out of Domain Detection | If enabled, confirmation questions are asked for intents that fall beyond the scope of the defined ontology. Disabled is the default. |
| Intent Over Ont Threshold        | Set the threshold to prefer intent from the classifier model when Ont mappings to not exist. 0.55 is the default.                     |


### Auto Train Tab

These settings are for models trained using intents. When you add or delete utterances to intents, it automatically retrains the model.

![B03-07_0901-AutoTrainTab](B03-07_0901-AutoTrainTab.png){width="900" style="block"}

*The Auto Train Tab Workspace*

*Auto Train Tab Settings*

|                    Setting                    |                                                           Description                                                           |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Auto Training                                 | Automatically train and deploy a TRIE classifier model using training data utterances from the intents. Enabled is the default. |
| Auto Training LLM Intent Model (Experimental) | Automatically train and deploy a LLM classifier model using training data utterances from the intents. Disabled is the default. |



### Runtime BPNs Tab

These settings help control how Amelia handles complex user utterances in conversation flows.

![B03-07_0901-RuntimeBPNsTab](B03-07_0901-RuntimeBPNsTab.png){width="900" style="block"}

*The Runtime BPNs Tab Workspace*

*Runtime BPNs Tab Settings*

|                  Setting                  |                                                                                                                                            Description                                                                                                                                            |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Runtime Processes                         | Enable the breakdown of input utterances to create dynamically constructed processes. Disabling will disable conditional and multi-intent execution. Enabled is the default.                                                                                                                      |
| Conditional Execution                     | Enable conditional execution of user requests, for example, "If X, then Y." Enabled is the default.                                                                                                                                                                                               |
| Multi-intent Execution                    | Enable execution of multiple intents in the same user utterance. Enabled is the default.                                                                                                                                                                                                          |
| Single-intent Execution Over Multi-Intent | Enable single-intent execution over multi-intent if entire utterance that predicted multiple intents predicts a single internet. Multi-intent execution is executed only if no intent is detected for a user utterance. If an intent is detected, it would be preferred. Disabled is the default. |
| Boolean Query Execution                   | Enable boolean query execution using Dynamic BPN execution. Used during execution to answer Yes or No questions. Enabled is the default.                                                                                                                                                          |
| Enable Contextual Answer Polarity         | Use conversation context to detect the answer polarity of responses. Disabled is the default.                                                                                                                                                                                                     |


### Intent and Entity Prediction Tab

These settings help Amelia with intent prediction and entity extraction.

![B03-07_0901-IntentEntityTab](B03-07_0901-IntentEntityTab.png){width="900" style="block"}

*The Intent and Entity Prediction Tab Workspace*

*Intent and Entity Prediction Tab Settings*

|                   Setting                   |                                                                                                   Description                                                                                                   |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intent Prediction Threshold                 | If the highest score for an intent is less than this value, no intent will be predicted. 0 is the default.                                                                                                      |
| Domain Switching Threshold                  | If domain switching is enabled, the domain classifier returns a confidence score for each domain. If the highest score for a domain is higher than this value, domain switching goes ahead. 0.6 is the default. |
| Entity Filtering                            | Filter entities based upon their similarity. If enabled, only entities with names semantically similar to the user utterance are extracted. Disabled is the default.                                            |
| LLM Based Coupler Extraction (Experimental) | Use Amelia LLM for parsing complex sentences. Disabled is the default.                                                                                                                                          |


### CQA Tab

These settings help Amelia handle ambiguous user utterances.

![B03-07_0901-CQATab](B03-07_0901-CQATab.png){width="900" style="block"}

*The CQA Tab Workspace*

*CQA Tab Settings*

|              Setting               |                                                                                          Description                                                                                           |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intent CQA                         | Enable or disable the clarifying question asking (CQA) feature for intents in this domain. Enabled is the default.                                                                             |
| In-Domain Threshold                | If the in-domain score is less than this value, no intent will be predicted. 0.5 is the default value.                                                                                         |
| Intent Ambiguity Threshold         | IF the difference in scores of the top two intents is less than this value, the input utterance is considered intent ambiguous. 0.6 is the default value.                                      |
| CQA Intent Threshold               | If the top intent score is less than this value, CQA will be ignored. 0.3 is the default value.                                                                                                |
| Intent Confidence Threshold        | If the highest score for an intent is less than this value, a clarification answer would be asked. 0 is the default value.                                                                     |
| Domain CQA                         | Enable or disable the clarifying question asking (CQA) feature for Amelia to make automatic disambiguation questions for domains classification for this domain. Enabled is the default value. |
| Domain Ambiguity Threshold         | If the difference in scores of the top two domains is less than this value, the input utterance is considered domain ambiguous. 0.6 is the default value.                                      |
| CQA Domain Threshold               | If the top domain score is less than this value, CQA will be ignored. 0.3 is the default.                                                                                                      |
| Domain Description for CQA         | Type a phrase that describes the purpose of a domain. Used in domain level CQA to resolve ambiguity. Default is blank.                                                                         |
| Related Keywords, Phrases, or Tags | Related keywords, phrases, and keys that identify the purpose of a domain. Used in domain level CQA to resolve ambiguity. Default is blank.                                                    |
| Entity CQA                         | If enabled, CQA will be triggered when there is ambiguity in entity resolution. Disabled is the default.                                                                                       |


### Clustering Tab

These settings help with knowledge ingestion and handling unlabeled intent utterances.

![B03-07_0901-ClusteringTab](B03-07_0901-ClusteringTab.png){width="900" style="block"}

*The Clustering Tab Workspace*

*Clustering Tab Settings*

|                     Setting                     |                                               Description                                                |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Semantic Clustering                             | Enable or disable semantic clustering to cluster knowledge. Enabled is the default.                      |
| Semantic Clustering Threshold                   | Set the semantic similarity threshold for clustering knowledge. 0.82 is the default.                     |
| Fast Community Detection Minimum Community Size | Set the minimum number of utterances needed for a valid cluster. 10 is the default value.                |
| Fast Community Detection Clustering Threshold   | Set the semantic similarity threshold value to be used in Fast Community Detection. 0.65 is the default. |


### Learning Tab

These settings help choose which utterances to use for intent learning.

![B03-07_0901-LearningTab](B03-07_0901-LearningTab.png){width="900" style="block"}

*The Learning Tab Workspace*

*Learning Tab Settings*

|           Setting           |                                                                               Description                                                                                |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intent Correction           | Enable or disable the Sentient features to gather utterances for intent learning. Enabled is the default.                                                                |
| Intent Correction Threshold | If the highest scored intent/in-domain has a score less than this value, utterances will be considered for intent learning in the Sentient features. 0.7 is the default. |


### Agent View Tab

These settings help set thresholds for providing recommendations in the Agent interface.

![B03-07_0901-AgentViewTab](B03-07_0901-AgentViewTab.png){width="900" style="block"}

*The Agent View Tab Workspace*

*Agent View Tab Settings*

|            Setting            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Agent View Context Threshold  | All the BERT recommendations will have a score greater than this score. Default is 0.95. Raising this score produces more fine-grained similarity between the query and the context used to generate recommendations. BERT is used to generate vectors for comparison to generate recommendations, not processing utterances. <note>For demonstration purposes, this score can be lowered to 0 or 0.1 to populate the response panel in the Agent view. However, when the demonstration is complete, remember to return the value to the default 0.95 or whatever value works best.</note> |
| Agent View Sentence Threshold | All the Paragram recommendations will have a score greater than this score. Default 0.8. Raising this score limits out-of-context recommendations. <note>For demonstration purposes, this score can be lowered to 0 or 0.1 to populate the response panel in the Agent view. However, when the demonstration is complete, remember to return the value to the default 0.8 or whatever value works best.</note>                                                                                                                                                                             |
| Agent View Save Conversions   | Enable or disable saving conversations that happen in Agent View. Disabled is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Agent View Auto Learning      | Enable or disable auto learning in Agent View. Disabled is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |


##Access the NLU Settings Panel {% #Access %}

{% include from="B03-07_0901-NLUSettingsAccess.md" element-id="B03-07_0901-NLUSettingsAccess_snippet" /%}

## More Resources

For more information, see:

* [NLU Comprehension Introduction](B03-07_0002-NLU-Comprehension-Intro.md).

