# FAQ Tests Management

## Introduction

{% include from="B04-00_0002-FAQ-Tester-Intro.md" element-id="B04-00_0002-FAQ-Tester-Intro_snippet" /%}

![B04-00_0002-AA-Tests](B04-00_0002-AA-Tests.png){width="900" style="block"}

*The Workspace With Tests Button and Panel Highlighted*

## What You'll Learn

In this topic, you'll learn how to:

* [Access Tests](#Access).
* [Upload and test QA pairs](#Upload).
* [Review a Tests output](#Review).
* [Search for tests](#Search).
* [Export a test summary](#Export).
* [Export prediction scores](#Export2).
* [Delete tests](#Delete).

##Access the Tests Panel {% #Access %}

1. From the **top left main** menu, click **Amelia Answers**.

2. On the **left-side** menu, click **Tests**.

The Tests page opens as a new page tab after the Home page.

##Upload and Test QA Pairs {% #Upload %}

Tests works best for testing single-question/answer tests or QA pairs (question and answer pairs). It shouldn't be used for testing multi-step conversations.

Create your pre-defined QA pair file in XLSX without column headings. Show two columns. In column A show the term Question or Answer on alternating rows. In column B show the associated question or answer's utterance.

![B04-05_0004-AA-QA-Pair-Sample-XLSX](B04-05_0004-AA-QA-Pair-Sample-XLSX.png){width="600" style="block"}

*A Sample Pre-defined QA Pair File in XLSX Format*

To upload this XLSX file for testing:

1. Click **+ Add New**. The New Test page opens as a new page tab after the Home page.

2. Click **Upload**.

3. Navigate to the file that you'd like to upload and test.

4. Click **Open**.

5. Click **Create**.

> After upload, file details appear on the right of the Upload File button. Clicking Upload File after selecting a file, clears your original selection. You can also clear a file by clicking ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} next to its name.

As Amelia processes the file, the Status shows as Queued. The New Test page tab updates to display the name of the uploaded file. The Summary and FAQ Prediction Score tabs also appear, along with a Delete button.

After some time, the Status changes to Running, indicating that the testing is in progress. Finally, the Status changes to Finished once the testing is complete. At this point, two buttons - Export Summary and Export Scores - show.

##Review a Tests Output {% #Review %}

Open this dropdown to learn more about your Tests output.

<chapter id="Summary" title="Summary Elements" collapsible="true" level="5">
Use this table to learn about Summary elements.

|   Element   | Default |                                                                                  Description                                                                                   |
|-------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name        |         | The name of the QA pair file tested.                                                                                                                                           |
| # Correct   |         | True Positives. The number of occurrences where the model correctly predicts the positive class.                                                                               |
| # Actual    |         | True Positives + False Negatives: The total number of actual occurrences where the model correctly predicts the positive class and incorrectly predicts the negative class.    |
| # Predicted |         | True Positives + False Positives: The total number of predicted occurrences where the model correctly predicts the positive class and incorrectly predicts the positive class. |
| Precision   |         | The ability of a classification model to return only the data points in a class. What proportion of positive identifications were actually correct.                            |
| Recall      |         | The ability of a classification model to identify all data points in a relevant class. What proportion of actual positives were identified correctly.                          |
| F1          |         | A single metric that combines recall and precision using the harmonic mean. That is, (2*(Precision*Recall)/(Precision+Recall).                                                 |
[Summary Elements]


</chapter>

<chapter id="Use" title="Prediction Score Elements" collapsible="true" level="5">
Use this table to learn about Score Elements.

| Element  | Default |                            Description                            |
|----------|---------|-------------------------------------------------------------------|
| Question |         | Lists each question in the QA pair file.                          |
| Answer   |         | Lists each answer in the QA pair file.                            |
| Matched  |         | Shows Yes or No based on whether the question and answer matched. |
| Note     |         | Any Amelia response to a match or no match. |
[Score Elements]


</chapter>

##Search for a Test {% #Search %}

Depending on your domain, you may have one or more tests. The Tests panel shows your tests using pagination. This means that your test might not show on the front page. Searching is a quick and easy way to find a particular test.

To search for a test:

1. In the Tests panel, position your cursor in the **Search Here** field.

2. Enter a search term.

Amelia calculates search results from the first character entered. If there are no matches, "No Tests Found" shows.

> To clear a search, click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} alongside your search term.

##Export a Summary {% #Export %}

The summary file downloads as a CSV file named as summary-[current date]. Opening the file shows columns for Name, Correct, Actual, Predicted, Precision, Recall, and F1. For more information on these values, see the [Summary Elements](#Summary) dropdown above.

To export the summary file:

1. Select a test. Your chosen test opens in a new tab after the Home page.

2. Click **Export Summary**.

3. Open your **Downloads** folder.

4. Find and open the downloaded file.

   ![B04-05_0004-AA-Export-Summary](B04-05_0004-AA-Export-Summary.png){width="600" style="block"}

   *A Downloaded Sample Export Summary File*

##Export Prediction Scores {% #Export2 %}

The summary file downloads as a CSV file named as scores-[current date]. Opening the file shows columns for Question, Answer, Matched and Note. For more information on these values, see the [Score Elements](#Use) dropdown above.

To export the summary file:

1. Select a test. Your chosen test opens in a new tab after the Home page.

2. Click **Export** Scores.

3. Open your **Downloads** folder.

4. Find and open the downloaded file.

   ![B04-05_0004-AA-Export-Scores](B04-05_0004-AA-Export-Scores.png){width="900" style="block"}

   *A Downloaded Sample Export Scores File*

##Delete a Test {% #Delete %}

> Deleting a test is final and can't be undone. {style="warning"}

To delete a test:

1. In the Tests panel, find and select the test you want to delete.

2. In the open Tests page, click **Delete** to stop the test from processing. The Status updates to Aborted.

3. Click **Delete** again to remove the test from the **Tests** panel.

## More Resources

{% include from="B04-00_0001-Amelia-AnswersMoreInfo.md" element-id="B04-00_0001-Amelia-AnswersAccess_snippet" /%}
