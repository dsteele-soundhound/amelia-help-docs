# Settings Configuration

## Introduction

{% include from="B04-00_0002-Settings-Intro.md" element-id="B04-00_0002-Settings-Intro_snippet" /%}

For easy navigation, Settings show in groups as follows:

* **AI Settings**: {% include from="B04-06_0003-AI-Settings.md" element-id="B04-06_0003-AI-Settings_snippet" /%}
* **QA Pair Settings**: {% include from="B04-06_0003-QA-Pair-Settings.md" element-id="B04-06_0003-QA-Pair-Settings_snippet" /%}
* **General**: {% include from="B04-06_0003-General-Settings.md" element-id="B04-06_0003-General-Settings_snippet" /%}
* **Parsing**: <br>Settings related to parsing and managing segments. For example, setting a maximum segment overlap.
* **Auditability**: {% include from="B04-06_0003-Auditability-Settings.md" element-id="B04-06_0003-Auditability-Settings_snippet" /%}
* **Allowlist Pattern for URLs**: <br>Configure allowed URL patterns for document URLs. Documents with URLs not matching these patterns will be rejected.
* **Advanced**: {% include from="B04-06_0003-Advanced-Settings.md" element-id="B04-06_0003-Advanced-Settings_snippet" /%}
* **Other**: {% include from="B04-06_0003-Other-Settings.md" element-id="B04-06_0003-Other-Settings_snippet" /%}

![B04-00_0002-AA-Settings](B04-00_0002-AA-Settings.png){width="900" style="block"}

*The Workspace With Settings Button and Page Tab Highlighted*

## What You'll Learn

In this topic, you'll learn when and how to:

* [Access settings](#Access).
* [Change settings](#Change).
* [Reset settings](#Reset).

##Access the Settings Page {% #Access %}

1. From the **top left main** menu, click Amelia Answers.

2. On the **left-side** menu, click Settings. The Settings tab appears after the Home page.

Open these dropdowns to learn about all available settings.


<chapter id="AI" title="AI Settings Elements" collapsible="true" level="5">

{% include from="B04-06_0003-AI-Settings.md" element-id="B04-06_0003-AI-Settings_snippet" /%}

*AI Settings Elements*

| Element                                     | Default   | Description                                                                                                                                                                                                                                                                                                                                                        |
|---------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Segment Selection Threshold                 | 0.6       | The lowest score needed to make a section available to the AI to generate an answer. Lower this score if you get frequent "I don't know" responses from the document QA responder. Or, if you have the answer in a section, you can also lower the score.                                                                                                          |
| Number of Segments Used to Generate Answers | 5         | The number of matching sections used by the AI to create an answer. Increase this number if you get frequent "I don't know" responses from the document QA responder.                                                                                                                                                                                              |
| Maximum Prompt Size                         | 4000      | The maximum number of characters allowed in an LLM prompt. The final prompt may contain a fewer number of segments than the value above, if this limit is reached first.                                                                                                                                                                                           |
| Confidence Score Threshold for QA Answers   | 0.1       | The minimum score needed for Amelia to respond with an AI-generated answer. Lower this score if you get frequent "I don't know" responses from the document QA responder. Or, if you have a knowledge source with the expected answer, you can also lower the score.                                                                         |
| Use Query Expansion (HyDE)                  | No        | Enhance document retrieval by including a hypothetical answer to your input in the search (a.k.a. HyDE). Slightly increases latency.                                                                                                                                                                                                                               |
| Use Query Decomposition                     | No        | Enhance document retrieval by searching using sub-questions of the given input.                                                                                                                                                                                                                                                                                    |
| Enable Query Rephrasing Before Retrieval    | No        | Perform query rephrase before retrieval. Resulting rephrased query will be used for document retrieval and answer generation, enhancing document retrieval performance.                                                                                                                                                                                            |
| Maintain Conversational Context             | No        | Substitute words in utterances with the entity they're referring to based on the conversation. For example, connect the name Riley with their pronoun if your user used Riley earlier. Selecting this checkbox lets Amelia apply conversational context. When unselected, Amelia doesn't apply conversational context. |
| Include Source Metadata                     | No        | Enable this option to provide the LLM with metadata from source documents, enhancing relevance and accuracy by adding contextual details. Included metadata fields: document name, document URL, segment title and segment URL.                                                                                                                                    |
| Table Selection Threshold                   | 0.65      | The lowest score needed to make a table element available to the AI to generate an answer. Lower this score if you get frequent "I don't know" responses from the document QA responder. You can also lower the score if you upload the answer as tabular data.                                                                                                    |
| "I don't know" Answer Threshold             | 0.45      | Used as a fact-checking threshold. This setting only applies where you have an LLM enabled.                                                                                                                                                                                                                                                                        |
| Summarize Generated Answers                 | Unchecked | With this checkbox selected, Amelia returns a summarized answer. When unselected, Amelia returns the full answer.                                                                                                                                                                                                      |



</chapter>

<chapter title="QA Pair Settings Elements" collapsible="true" level="5">

{% include from="B04-06_0003-QA-Pair-Settings.md" element-id="B04-06_0003-QA-Pair-Settings_snippet" /%}

*QA Pair Settings Elements*

| Element                                                      | Default | Description                                                                                                                                                                                                                                                                                               |
|--------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| QA Pair Selection Threshold                                  | 0.7     | The lowest score needed for selecting a QA pair in answer selection. Lower this score if you get frequent "I don't know" responses from the FAQ pair responder. Or, if you have a QA pair with the answer, you can also lower the score. The ideal range for this setting is 0.7-0.8.                     |
| Number of QA Pairs Compared to Identify Most Accurate Answer | 10      | The number of QA pairs that Amelia compares to determine the best answer to the question. Increase this value if you get frequent "I don't know" responses from the FAQ pair responder.                                                                                             |
| Enable Response Pools                                        | No      | When selected, Amelia uses response pools (SEMNET_MULTIPLE_ANSWERS or SEMNET_SINGLE_ANSWER) to precede the answer. When unselected, Amelia won't use response pools.                                                                                          |
| Enable QA Pair Answer Rephrasing with LLM                    | No      | Whether to use an LLM to rephrase QA Pair answers to more closely match the input. Note that this breaks determinism in the QA Pairs FAQ Responder.                                                                                                                                                       |
| "I don't know" Answer Threshold                              | 0.6     | The lowest score needed for Amelia to reply with an answer sourced from a QA pair. Lower this score if you get frequent "I don't know" responses from the QA pair responder. Or, if you have a knowledge source with the expected answer in a QA pair you can also lower the score. |


</chapter>

<chapter title="General Elements" collapsible="true" level="5">

{% include from="B04-06_0003-General-Settings.md" element-id="B04-06_0003-General-Settings_snippet" /%}

*General Elements*

|             Element              |  Default  |                                                                                                                Description                                                                                                                |
|----------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Allow Non-interrogative Query    | Unchecked | When selected, Amelia recognizes questions phrased as statements. When unselected, Amelia doesn't consider statements.                                                                        |
| Maximum Number of Answers        | 2         | The highest number of answers Amelia will generate in a chat. Works with the Show Additional Information setting. If you select Show Additional Information, then Maximum Number of Answers must show as 2 or more. |
| SemNet Selection Threshold       | 0.6       | The lowest score needed for Amelia to respond with the answer using SemNet. Lower this score if you get frequent "I don't know" responses from the SemNet responder.                                                |
| Test Answer Similarity Threshold | 0.5       | When testing, specify the required similarity between the output and answer to consider it "correct."                                                                                                                                     |
</chapter>

<chapter title="Parsing" collapsible="true" level="5">


| Element                                   | Default | Description                                                                                           |
|-------------------------------------------|---------|-------------------------------------------------------------------------------------------------------|
| Maximum Segment Length                    | 2500    | Maximum character length allowed per segment before falling back to splitting at a sentence boundary. |
| Maximum Segment Overlap                   | 100     | Maximum number of characters allowed to overlap between segments.                                     |
| Generate Segment Titles                   | No      | If a Document Parsing task is enabled, will generate custom titles for segments.                      |
| Automatically Filter Unnecessary Segments | No      | If a Document Parsing task is enabled, will filter out segments which contain no meaningful content.  |

</chapter>

<chapter title="Auditability Elements" collapsible="true" level="5">

{% include from="B04-06_0003-Auditability-Settings.md" element-id="B04-06_0003-Auditability-Settings_snippet" /%}

*Auditability Elements*

|                 Element                  |  Default  |                                                                                                                        Description                                                                                                                         |
|------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Show Additional Information              | Unchecked | Works with the Maximum Number of Answers setting to show multiple answers to a question. Responses will include related details along with a document link. Clicking the link shows a popup with details and an option to download the reference document. |
| Cite Knowledge Source Instead of Segment | Unchecked | When selected, Amelia shows the knowledge source name rather than the relevant knowledge source sections. When unselected, Amelia shows relevant sections from the knowledge source instead.                   |


</chapter>

<chapter title="Allowlist Pattern for URLs" collapsible="true" level="5">

Set allowed URL patterns. Documents with URLs not matching these patterns will be rejected. Use regular expressions for pattern matching.

Click the **+ Add button** then type a pattern.

</chapter>

<chapter title="Advanced Elements" collapsible="true" level="5">

{% include from="B04-06_0003-Advanced-Settings.md" element-id="B04-06_0003-Advanced-Settings_snippet" /%}

*Advanced Elements*

|                 Element                  |  Default  |                                                                                                   Description                                                                                                    |
|------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Threshold for Grammaticality Classifier  | 0         | Used when generating QA pairs. Where you've activated the grammaticality parser, all auto-generated questions pass through this classifier. Only questions with a grammaticality score above the threshold save. |
| Remove Grammatically Incorrect Questions | Unchecked | Used when generating QA pairs. Selecting this setting reduces the noise created by ungrammatical sentences. Selecting this setting can make the QA pair-generation process slower.                               |
| Enable Paraphrase                        | Checked   | Used when generating QA pairs. Selecting this setting creates paraphrased questions to improve coverage.                                                                                                         |
| Whether to Ask Clarifying Questions      | Unchecked | This is an experimental setting. Selecting this setting lets Amelia ask clarifying questions.                                                                                              |


</chapter>

<chapter title="Other Elements" collapsible="true" level="5">

{% include from="B04-06_0003-Other-Settings.md" element-id="B04-06_0003-Other-Settings_snippet" /%}

*Other Elements*

|         Element         | Default |                                                                                                                                                 Description                                                                                                                                                  |
|-------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reset Embeddings button |         | Deletes all embeddings and marks sources as invalid. Clicking this button deletes all segments and QA pairs from your knowledge sources. To restore your sources, you must re-index them using the Refresh option or re-upload the files. Use this protocol in case of unusual behavior following ingestion. |


</chapter>

##Change Settings {% #Change %}

1. Change the above settings using the + or - buttons alongside each setting or by checking or clearing the checkbox.

2. Click **Save**.

##Reset Settings {% #Reset %}

1. Click the **Reset to Defaults** button to restore all elements to their original values.

2. Or, to reset individual elements, find the appropriate option and adjust the setting. For element defaults, see the dropdowns [above](#AI).

## More Resources

{% include from="B04-00_0001-Amelia-AnswersMoreInfo.md" element-id="B04-00_0001-Amelia-AnswersAccess_snippet" /%}
