# NPS Analytics Walkthrough

## Introduction

NPS (Net Promoter Score) captures Amelia's performance based on user feedback and sentiment. Amelia calculates scores three different ways.

* End user feedback
* End user sentiment
* Aspect based sentiment

To capture NPS data, you need to configure your domain for NPS collection. When configured, a thumbs up and thumbs down icons will appear in Amelia interfaces.

## Accessing the NPS Analytics Workspace

To access NPS Analytics workspaces:

1. From the top left main navigation menu, click **Analytics**.

2. On the left edge, click the **NPS Analytics button** to access features.

![B08-04_0003-NPS-Workspace.png](B08-04_0003-NPS-Workspace.png){width="800"}

*The NPS Analytics Workspace*

## What You'll Learn

In this topic you'll learn about:

* [Configuring your domain for NPS](#ConfigureNPS).
* [The NPS Analytics workspace](#Workspace).
* [How NPS is calculated](#NPSCalculation).
* [Viewing the NPS Trend chart](#NPSTrend).
* [Viewing the CSAT Trend chart](#CSATTrend).
* [Viewing the Intelligent Causal Analysis chart](#CausalChart).
* [Viewing the Key NPS Factors chart](#KeyNPS).
* [Viewing the Customer Retention Analysis chart](#CustomerRetention).
* [Viewing the Churn Analytics chart](#ChurnAnalytics)

## Configure Your Domain for NPS {% #ConfigureNPS %}

To enable NPS analytics, you need to configure your domain:

1. From the top left main navigation menu, click **Administration**.

2. On the left edge, click the **Domains button**. The default Domains tab workspace displays. A Domains panel also displays between the left edge buttons and the default workspace.

3. In the Domains panel, click the domain to configure. Its details display in a tab workspace.

4. Click the **Configuration tab** in the detail tab workspace. Then scroll down to the **NPS Collection panel**.

5. Click **Yes** for the **Allow Amelia to Collect Feedback from User setting**.

6. Click the **Save button** at the top of the detail tab workspace.


## The NPS Analytics Workspace {% #Workspace %}

The default NPS Analytics workspace displays a number of charts. You can display data by domain and date. The date options depend on data available. For example, the date options might include Today, Yesterday, Last Month, and individual years.

Each chart is described below.


## How NPS is Calculated {% #NPSCalculation %}

{% include from="B08-00_0001-AnalyticsNPSCalculation.md" element-id="B08-00_0001-AnalyticsNPSCalculation_snippet" /%}


## The NPS Trend Chart {% #NPSTrend %}

This chart displays trends for NPS, Feedback, and Survey data points for a time period.

* **NPS**: The net sentiment score for user messages. The Overall Negative Utterances are subtracted from the Overall Positive Utterances. Then the result is divided by the number of Total Utterances.

* **Feedback**: The number of feedback received from the user in the specified time period.

* **Survey**: The NPS score based on user feedback. The Negative Feedback is subtracted from Positive Feedback. Then the result is divided by the Total Feedback.

![B08-04_0003-NPS-Chart-NPS.png](B08-04_0003-NPS-Chart-NPS.png){width="600"}

*NPS Trend Chart*


## The CSAT Trend Chart {% #CSATTrend %}

The CSAT Trend chart displays the net Satisfaction score for a time period.

![B08-04_0003-NPS-Chart-CSAT.png](B08-04_0003-NPS-Chart-CSAT.png){width="600"}

*CSAT Trend Chart*


## The Intelligent Causal Analysis (NPS Aspects) Chart {% #CausalChart %}

The Intelligent Causal Analysis chart displays the top 20 aspects and aspect groups. They're derived from user utterances. The NPS score displays along with the number of responses retrieved for each aspect. It's like the Key NPS Factors chart.

In conversations, Amelia can detect and collect positive and negative user feedback. Amelia can identify broad sentiment for conversations and sentences. Amelia also can detect and assign sentiment to a component of a product or service. If a user says, "I love your website," Amelia can assign a positive sentiment to the component **website**. Components like **website** and **interface** also can be part of a group called **technology**. This would give a sentiment score for **technology**. The score would add up user sentiment for **website** and **interface**.

Aspects are components. Usually, an aspect is a noun or noun phrase such as website or customer service. You can group aspects to add up sentiment across all related individual aspects.  These results are in Amelia's NPS Analytics dashboard.

Amelia also defines default aspects and groups. For example, Resolution Time, Escalations, Agent, Pricing, and related terms.

![B08-04_0003-NPS-Chart-NPSAspects.png](B08-04_0003-NPS-Chart-NPSAspects.png){width="600"}

*NPS Aspect Ratios Chart*


## The Key NPS Factors Chart {% #KeyNPS %}

The Key NPS Factors chart displays the top 20 aspects and aspect groups. They're extracted from user utterances.

* **Promoter**: The Positive Sentiment score or Positive Feedback for a selected aspect or aspect group.

* **Detractor**: The Negative Sentiment score or Negative Feedback for a selected aspect or aspect group

* **Passives**: The Neutral Sentiment score or Neutral Feedback for a selected aspect or aspect group

![B08-04_0003-NPS-Chart-NPSKeyFactors.png](B08-04_0003-NPS-Chart-NPSKeyFactors.png){width="600"}

*Key NPS Factors Chart*


## The Customer Retention Analysis Chart {% #CustomerRetention %}

The Customer Retention Analysis chart displays the churn score for a time period. The churn score uses the number of CSAT scores of 1 and the Feedback score. The 1s complement of CSAT score added to the Feedback score. The result is then divided by 2.

![B08-04_0003-NPS-Chart-NPSCustomerRetention.png](B08-04_0003-NPS-Chart-NPSCustomerRetention.png){width="600"}

*NPS Customer Retention Chart*


## The Churn Analytics Chart {% #ChurnAnalytics %}

The Churn Analytics chart displays NPS scores for the top 20 named customers. Data displays in descending order calculated based on user sentiment.

![B08-04_0003-NPS-Chart-NPSChurn.png](B08-04_0003-NPS-Chart-NPSChurn.png){width="600"}

*Churn Analytics Chart*


## More Resources

{% include from="B08-02_Analytics-MoreResources.md" element-id="B08-02_ConvAnalytics-MoreResources_snippet" /%}
