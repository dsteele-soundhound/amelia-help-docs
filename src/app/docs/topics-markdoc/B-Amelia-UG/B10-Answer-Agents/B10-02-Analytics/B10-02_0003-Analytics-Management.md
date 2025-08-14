# Analytics Management

## Introduction

{% include from="B04-00_0002-Analytics-Intro.md" element-id="B04-00_0002-Analytics-Intro_snippet" /%}

> **Note:** This Amelia Answers data also is available through the [Amelia Answers Analytics](B08-05_0003-Amelia-Answers-Walkthrough.md) workspace. Its part of the [Analytics module](B08-00_0001-Analytics-Workspace-Intro.md).

![B04-00_0002-AA-Analytics](B04-00_0002-AA-Analytics.png){width="800" style="block"}

*The Analytics Workspace*

## What You'll Learn

In this topic, you'll learn how to:

* [Access the Analytics dashboard](#Access).

* [Filter your data](#Filter).

* [Navigate the Analytics dashboard cards](#Navigate).

##Access the Analytics Dashboard {% #Access %}

1. From the **top left main** menu, click **Amelia Answers**.
2. On the **left-side** menu, click **Analytics**.
3. Or, on the Home page, click **Go To Analytics**. The Analytics dashboard opens as a new tab.

   ![B04-02_0003-AA-Go-To-Analytics](B04-02_0003-AA-Go-To-Analytics.png){width="800" style="block"}

   *The Home Page with Go To Analytics Button Highlighted*

##Filter Your Data {% #Filter %}

Filter analytics data using one or all the filter dropdowns on the top right side of the dashboard.

Open this dropdown to learn more about dashboard filter elements.

<chapter title="Analytics Dashboard Filter Elements" collapsible="true" level="5">
Use these elements to filter your dashboard.

*Dashboard Filter Elements*

| Element           | Default        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time filter       | Today          | Use this dropdown to filter your data using time-based values, such as Today, Yesterday, 2024, Q1 2024, January 2024, and so on. Select one option to apply this filter.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Responders filter | All Responders | Shows data relating to the subsystem responder that you select. This dropdown includes the following options: <ul><li><strong>All Responders:</strong> Shows information for all established responders.</li> <li><strong>Document:</strong> Filters the dataset to show only data relating to your LLM (large language model).</li> <li><strong>FAQ Pair:</strong> Filters the dataset to show only data relating to QA pairs (question and answer pairs).</li> <li><strong>FAQ Intent:</strong> Filters the dataset to show only data relating to FAQ intents.</li></ul> Select one option to apply this filter. |
| Domains filter    | All Domains    | Use this dropdown to filter your data by All Domains or an individual domain. Select one option to apply this filter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |


</chapter>

1. Using the **Time** dropdown, select a period to apply.

2. Using the **Responder** dropdown, select a subsystem responder type to apply.

3. Using the **Domains** dropdown, select a domain to apply.

Filter settings apply as they're selected. To reset these filter options, refresh your page.

##Navigate the Analytics Dashboard {% #Navigate %}

Open this dropdown to learn more about dashboard card elements.

<chapter title="Analytics Dashboard Card Elements" collapsible="true" level="5">

Use the following table to learn about dashboard card elements.

*Dashboard Card Elements*

| Element                              | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Timeline Likes/Dislikes/Neutral card |         | This stacked bar or column chart card has two parts. The first part, located at the top of the dashboard, uses a graphic representation. Here you can see the reception of Amelia's responses or answers. For example, were Amelia's responses liked, disliked, or did they get a neutral response. The second part, located after the graphic representation, consists of numerical values. These include: <ul><li><strong>Total:</strong> The total number of clicks received in your Amelia Answers knowledge center.</li> <li><strong>Liked:</strong> The number of responses or answers marked as liked in your Amelia Answers knowledge center.</li> <li><strong>Disliked:</strong> This is the number of responses marked as disliked in your Amelia Answers knowledge center.</li> <li><strong>Avg. per Conversation:</strong> The average number of responses given in each conversation.</li> <li><strong>Amelia Answers Responses:</strong> The percentage of conversations with common user questions.</li></ul> |
| Question Rate card                   |         | This pie chart card groups the number of questions per conversation. For example, one conversation might include a single question. Three conversations might include two questions each and so on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Answer Accuracy card                 |         | This semi-circle donut card shows answer accuracy based on liked and disliked responses. A satisfaction score shows at the center of the card. The closer this score gets to 1.000, the better your answer accuracy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Fallback Rate card                   |         | This bar chart card shows what generated the response to your user's question. Possible responders include Document, FAQ Pair, FAQ Intent or All Responders. This card shows the number of responses per responder. FAQ Pair and FAQ Intent use a deterministic model, which makes them faster and less expensive. These values are usually on the higher end of the spectrum. Document is your catchall and refers to your LLM. Remember, cost and answer speed come into play here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Response Time card                   |         | This stacked area card shows the rate of response for each responder type. You can expect FAQ Pair and FAQ Intent to have the fastest response times. LLMs (Document) typically have the slowest response time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |


</chapter>



## More Resources

{% include from="B04-00_0001-Amelia-AnswersMoreInfo.md" element-id="B04-00_0001-Amelia-AnswersAccess_snippet" /%}

