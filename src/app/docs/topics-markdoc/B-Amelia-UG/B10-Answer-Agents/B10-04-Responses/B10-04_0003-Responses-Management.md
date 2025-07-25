# FAQ Responses Management

## Introduction

{% include from="B04-00_0002-FAQ-Responses-Intro.md" element-id="B04-00_0002-FAQ-Responses-Intro_snippet" /%}

![B04-00_0002-AA-Responses](B04-00_0002-AA-Responses.png){width="900" style="block"}

*The Responses Summary Dashboard*

## What You'll Learn

In this topic, you'll learn how to:

* [Access Responses](#Access).
* [Filter responses](#Filter).
* [Search for a response](#Search).
* [View a response in more detail](#View).

##Access Responses Page {% #Access %}

1. From the **top left main** menu, click **Amelia Answers**.

2. On the **left-side** menu, click **Responses**.

3. Or, on the **Home** page, click **Review Conversations**. The Queries dashboard opens as a new tab.

   ![B04-04_0003-AA-Resp-Review-Conver](B04-04_0003-AA-Resp-Review-Conver.png){width="900" style="block"}

   *The Home Page with Review Conversations Button Highlighted*

##Filter Responses {% #Filter %}

The Queries dashboard offers a range of filters to customize the Summary table. Open this dropdown to learn more about when and how to apply these filters.

<chapter title="FAQ Queries Filter Elements" collapsible="true" level="5">

See the table below for detailed descriptions of when and how to apply these filters.

*Queries Filter Elements*

| Element          | Default       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time filter      | Today         | Use this dropdown to filter your data using time-based values, such as Today, Yesterday, 2024, Q1 2024, January 2024, and so on. Select one option to apply this filter. Results apply immediately on selection.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Domains filter   | All Domains   | Use this dropdown to filter your data by All Domains or an individual domain. Select one option to apply this filter. Results apply immediately on selection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Responder filter |               | By default, the dropdown shows all subsystem responders selected and applied to the Summary table. Available subsystem responders include: <ul><li><strong>DocumentFaq:</strong> Filters the dataset to show only data relating to your LLM (Large Language Model).</li> <li><strong>IntentFaq:</strong> Filters the dataset to show only data relating to QA intents.</li> <li><strong>QaPairsFaq:</strong> Filters the dataset to show only data relating to QA pairs (question and answer pairs).</li></ul> If you unselect a responder, it's added to the list of available responders for selection. Results apply immediately on selection. |
| Feedback filter  | All Feedbacks | Shows summary details relating to the feedback you select. This dropdown includes the following options: <ul><li><strong>All Feedbacks:</strong> Shows all summary details regardless of the feedback.</li> <li><strong>Liked:</strong> Shows only summary details with like-type feedback.</li> <li><strong>Disliked:</strong> Shows only summary details with dislike-type feedback.</li></ul> Select one option to apply this filter. Results apply immediately on selection.                                                                                                                                                                  |
| With Click       | Off (Gray)    | When the With Click toggle shows as off, all records show in the summary table. When With Click shows as on, the summary table only shows responses with clicks. Toggle the switch to apply this filter. Results apply immediately on selection.                                                                                                                                                                                                                                                                                                                                                                                                  |
| With Comment     | Off (Gray)    | When the With Comment toggle is off, all records show in the summary table. When With Comment is on, the summary table only shows responses with feedback. Toggle the switch to apply this filter. Results apply immediately on selection.                                                                                                                                                                                                                                                                                                                                                                                                        |



</chapter>

1. Find the filters at the top of the Summary table.

2. Apply any of the following filters:

   * **Time**
   * **Domains**
   * **Responder**
   * **Feedback**
   * **With Click**
   * **With Comment**

When you select a filter, it's immediately applied. Refresh the page to refresh the Summary table and clear all applied filters.

##Search for a Response {% #Search %}

The Summary table uses pagination and shows up to 20 rows. This means that a specific response might not show on the front page. Searching is a quick and easy way to find a particular response. The Search field sits at the right of the page and searches on Amelia's response data only.

To search for a response:

1. Position your cursor in the **Search** field.

2. Enter a search term.

Amelia calculates search results from the first character entered. If there are no matches, "No FAQ Queries Matching for Selected Criteria" shows.

> To clear a search, click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} alongside your search term.

##View a Response {% #View %}

To open and view a past conversation in more detail:

1. Select any **Summary** table row. The table narrows, and the conversation opens a responder-titled (**DocumentFaq**, **IntentFaq**, or **QaPairsFaq**) panel on the right.

   ![B04-04-0003-AA-Resp-Responder-Panel](B04-04-0003-AA-Resp-Responder-Panel.png){width="900" style="block"}

   *The Summary with Response Selected and Responder Panel Highlighted*

2. To close the responder-titled panel, click the ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"}. Your focus returns to the Summary table.

## More Resources

{% include from="B04-00_0001-Amelia-AnswersMoreInfo.md" element-id="B04-00_0001-Amelia-AnswersAccess_snippet" /%}
