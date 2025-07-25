# Correlation Module Introduction


Early draft of what became Event Management Intro topic after heavy edits



## Introduction

Correlation in event processing refers to the method of grouping, relating, or handling multiple events based on specific criteria. This makes it easier to analyze and respond to patterns.

In this approach, events are grouped by shared attributes, such as host names, event types, or locations, to identify trends or relationships among them. This approach is useful for detecting patterns, automating responses, or triggering actions based on event patterns.

### Defining Correlation Criteria

Correlation begins with defining rules or conditions that specify how events should be grouped. Criteria for grouping can include:

* Host names: Events originating from a particular source, like "abcd.amelia.com.

<!-- -->

* Event type: Grouping based on the nature of the event, like "error" or "warning.

<!-- -->

* Location: Grouping based on geographical origin, such as events from a New York store.

For example, if 10 events are received, with five from "abcd.amelia.com" and two from "bp.amelia.com," a rule can group events by host name. This allows monitoring activity from a single source as a unit, rather than handling each event individually.

### Setting Up Correlation Rules

Correlation rules instruct the system to process grouped events with specific actions, such as sending alerts or performing automated responses. For instance:

* If an event originates from abcd.amelia.com, perform action A.

* If an event is from bp.amelia.com, perform action B.

Rules may also group events for downstream processing without immediate action.

### Grouping and Processing Events

After defining correlation rules, the system groups events based on these conditions. For example:

* A rule might state: Group the last five events by host name, treating every five events from the same host as a correlated group.

This grouped collection of events can then be processed as a unit, indicating a set frequency of occurrences.

### Examples of Correlation in Action

A practical example might be forwarding events based on geographical criteria:

* Events from a New York store can be routed to a warehouse in Delaware, allowing for localized responses.

Another example is monitoring high event rates from a specific host over a set time period, revealing patterns like frequent errors from a single source.

### Handling Overlapping Rules

Multiple rules may overlap, where more than one rule applies to the same set of events. For instance:

* One rule could state to group by host name abcd.amelia.com.

* Another overlapping rule might specify a more granular match, like "xxx.abcd.amelia.com.

In cases of overlap, the system applies rules based on specificity (with more specific rules taking priority) or a predefined order.

Event correlation streamlines processing by grouping similar events, simplifying analysis, and improving response times. Specific rules allow the system to track event trends, automate responses, and route events based on defined criteria, ultimately enhancing efficiency and reliability in event handling.

 

## What You'll Learn

In this topic you'll learn about:

* [Included Correlation workspace data and features.](#Correlation)

* [Accessing the Correlation workspace.](#AccessingCorrelation)

 

## Correlation Workspace Data and Features {% #Correlation %}

The list of correlation rules in the "Event Management > Correlation" section of the Amelia Autonomics application. Here is an explanation of each field:

* Rule Name: This column lists the names of various correlation rules. Each rule has a unique name that likely indicates its function or testing stage, such as "TestRule" or "Multiple Alerts From Same Host." Rule names may vary in length and format, and they can include descriptive elements, such as "Rule with long name."

* Created: This column displays the date on which each correlation rule was created. The format shown is "Month Day, Year" (for example, "Sep 3, 2024"). This helps track when each rule was initially set up.

* Creator: This field shows the name of the user who created each correlation rule. Users appear as creators, providing accountability and tracking for who added each rule.

* Modified: This column lists the last modification date for each rule, showing the most recent update. Like the "Created" column, it uses the "Month Day, Year" format.

* Modifier: The "Modifier" column indicates the user who last modified each rule, which may differ from the original creator. This provides a record of any updates made to the rules and who made them.

These fields collectively offer insight into the rule configuration, history, and ownership, making it easier for users to manage and understand the correlation rules within the event management system.

 

##Accessing the Correlation workspace {% #AccessingCorrelation %}

To go to the Correlation module:

1. Using Amelia's **top-left main** menu, click **Autonomics**. By default, you're taken to the Tasks module (Tasks Inbox workspace) as your landing page.

2. Using the Autonomics**top left main** menu, click **Configuration**.

   ![E04-02_0102-Correlation-HomePage](E04-02_0102-Correlation-HomePage.png)

   *Autonomics Top Left Main Menu Showing Correlation*

3. The right pane appears with the Event Management option.

4. Click the Correlation option.

Once inside the Configuration module, you'll see the Correlation workspace.

## More Resources

{% include from="E04-02_0101-CorrelationMoreInfo.md" element-id="E04-02_0101-CorrelationMoreInfo_snippet" /%}
