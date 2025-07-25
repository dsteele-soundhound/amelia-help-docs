# Predict Configuration

{% include from="B04-00_0001-AnswerAgent-EAP.md" element-id="B04-00_0001-AnswerAgent-EAP_snippet" /%}

## Introduction

{% include from="B04-00_0002-Predict-Intro.md" element-id="B04-00_0002-Predict-Intro_snippet" /%}

![B04-00_0002-AA-Predict](B04-00_0002-AA-Predict.png){width="900" style="block"}

*The Workspace With Predict Button and Page Tab Highlighted*

## What You'll Learn

In this topic, you'll learn how to:

* [Access the Predict page](#Access).
* [Predict a user utterance](#Predict).
* [Filter prediction results](#Filter).
* [Navigate prediction results](#Navigate).
* [Clear a prediction](#Clear).

##Access the Predict Page {% #Access %}

1. From the **top left main** menu, click **Amelia Answers**.

2. On the **left-side** menu, click **Predict**.

The Predict page opens as a new tab.

##Predict a User Utterance {% #Predict %}

To make a prediction:

1. In the **User Says** field, enter your question. For example, you could enter _Does Company XYZ offer auto insurance?_.

2. Click **Predict**.

Results show as cards below the User Says field.

##Filter Prediction Results {% #Filter %}

The Predict page also offers a range of filters to customize Amelia's prediction. Click the ![B04-03_0003-AA-Predict-Filter](B04-03_0003-AA-Predict-Filter.png){width="25" style="inline"} button to show all available filters.

Open the following dropdown to learn more about when and how to apply these filters.

<chapter title="Results Filter Elements" collapsible="true" level="5">

![B04-03_0003-AA-Predict-Filter-Element](B04-03_0003-AA-Predict-Filter-Element.png){width="900" style="block"}

*The Results Filter Elements*

*Results Filter Elements*

|               Element               | Default |                                                                                                                                                                                                                                                                                                                                                                                              Description                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Filter Entity Results filter        |         | If you hit a QA pair, only entities listed in that segment (select at least one) will come through. This is useful if you want to prevent an QA pair from populating an entity accidentally. To apply this filter, open the first dropdown. At the Select Your Item dropdown, select an entity. Select one or many entities from the list. After closing the dropdown, only the last selected entity shows. A value appears on the right showing the number of entities applied. Results apply immediately on selection. To review all applied entities or add more entities, reopen the dropdown. To remove selected entities, open the dropdown and click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} alongside the entity. Then, close the dropdown. |
| Prompt Entity filter                | None    | This defines a prompt or focus entity for prediction. For example, this would be an entity evoked by an Ask task. Focus entities apply to any applicable span because Amelia is 'expecting' to see it in the user utterance. To apply this filter, open the dropdown, select an entity from the list. Results apply immediately on selection. To remove the selected entity, open the dropdown and select another entity or None.                                                                                                                                                                                                                                                                                                                                                |
| Scope Intent filter                 | None    | Filters your prediction results by intent. This is useful if your domain has many defined intents. Remember, intent refers to the goal or purpose of an utterance. For example, an intent could be to look up information, make a purchase or configure a device. To apply this filter, open the dropdown, select a intent from the list. Results apply immediately on selection. To remove the selected intent, open the dropdown and select another intent or None.                                                                                                                                                                                                                                                                                                                                  |
| Language filter                     | None    | This lets you test utterances outside the language pack. For example, with None selected, you enter the Japanese equivalent of an utterance that has QA pairs. Amelia returns no QA pairs as it expects only English. By setting the Language to Japanese, you can test either English (the language pack you have) or Japanese utterances in Amelia. Results apply immediately on selection. To remove the selected language filter, open the dropdown and select another language or None.                                                                                                                                                                                                                                                               |
| Use Predicted domain for FAQ filter | Yes     | Amelia can predict when the user switches to a different subject with a different domain and will run the QA pairs for that domain. Results apply immediately on selection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |



</chapter>

To filter your prediction results:

1. At the right of the page, click the ![B04-03_0003-AA-Predict-Filter](B04-03_0003-AA-Predict-Filter.png){width="25" style="inline"} button. A series of dropdowns show under the User Says field.

2. Apply any of the following filters:

   * **Filter Entity Results**
   * **Prompt Entity**
   * **Scope Intent**
   * **Language**
   * **Use Predicted Domain for FAQ**

When you select a filter, it's immediately applied. Refresh the page to reset the prediction results and clear all applied filters.

##Navigate Prediction Results {% #Navigate %}

Open this dropdown to learn more about your prediction results.


<chapter title="Results Card Elements" collapsible="true" level="5">

![B04-03_0003-AA-Predict-Elements](B04-03_0003-AA-Predict-Elements.png)

*User Utterance Results Cards*

*Results Card Elements*

|      Element       | Default |                                                                                                                                                               Description                                                                                                                                                                |
|--------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intents card       |         | Shows the most likely intention of a sentence, along with other possibilities and their confidence scores. The predicted intention will have a button to reveal the classifier used to make the prediction. If available, Amelia also shows which parts of the sentence significantly impacted the classification. |
| Entities card      |         | Shows all of the predicted entities for the utterance, with spans and normalized values.                                                                                                                                                                                                                                                 |
| QA card            |         | Shows what the answer would be if asked as a question in a conversation using the DocumentFaq or QaPairFaq subsystem responder.                                                                                                                                                                                                          |
| System NLP card    |         | Lists Amelia's automatic, internal NLP classifications like Problem Type, Sentiment, Answer Polarity, and so on.                                                                                                                                                                                                   |
| Domain Switch card |         | Lists confidence scores where the utterance suggests that your user switched domains.                                                                                                                                                                                                                                                    |
| Semantics card     |         | Gives a semantic analysis of the sentence, including the subject, main verb, and object.                                                                                                                                                                                                                                                 |


</chapter>

##Clear a Prediction {% #Clear %}

To clear a prediction and keep the page tab open:

1. On the **left-side** menu, click Predict.

2. Or refresh your web page. The Predict page resets.

To clear a prediction and close the page tab, click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} on the right side of the page tab.

## More Resources

{% include from="B04-00_0001-Amelia-AnswersMoreInfo.md" element-id="B04-00_0001-Amelia-AnswersAccess_snippet" /%}
