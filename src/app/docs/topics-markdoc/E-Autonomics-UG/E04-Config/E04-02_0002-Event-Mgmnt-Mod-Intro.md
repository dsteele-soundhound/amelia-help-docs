# Event Management Introduction

## Introduction

Correlating events makes it easier to analyze and respond to event patterns. These groupings and relationships based on criteria also helps you identify trends. This is useful for automating responses based on patterns. Or triggering actions based on event patterns. And you can separate events to streamline analysis and event management.

You can manage events with rules, attributes, and correlations:

* The [Event Correlations Walkthrough topic](E04-02_0103-Correlation-Mod-Walk.md) describes how to create and manage correlations between events.

* The [Event Attributes Walkthrough topic](E04-02_0203-Attributes-WS-Walk.md) describes how to create and manage attributes used to manage events.

* The [Event Rules Walkthrough topic](E04-02_0303-Event-Rules-WS-Walk.md) describes how to create and manage event rules.


## What You'll Learn

In this topic you'll learn about:

* [Defining event correlation criteria](#Correlation).
* [Grouping and processing events](#Processing).
* [Setting up correlation rules](#SettingUp).
* [Handling overlapping rules](#Overlapping).
* [Event correlation examples](#Examples).
* [Accessing the Event Management workspaces](#Access).

### Defining Event Correlation Criteria {% #Correlation %}

Correlation begins with defining rules or conditions that specify how to group events. Criteria for grouping can include:

* **Host names**: Events originating from a particular source, like "ny.amelia.com.

* **Event type**: Grouping based on the nature of the event, like "error" or "warning".

* **Location**: Grouping based on geographical origin, such as events from a New York store.

Imagine if you receive 10 events with eight from ny.amelia.com and two from sf.amelia.com. You can group these events by host name. You would need two groups, in this example. You can track activity by a single host name group rather than individually by each of the 10 events.

### Grouping and Processing Events {% #Processing %}

After defining correlation rules, the system groups events based on these conditions. A rule might state: Group the last five events by host name. This would treat the last five events from the same host as one correlated group.

You can then process this grouped collection of events as one unit. With the unit indicating a set frequency of occurrences. In this example, the last five events by host name.

### Setting Up Correlation Rules {% #SettingUp %}

Correlation rules instruct the system to process grouped events with specific actions. You might send alerts or perform automated responses for each group.

* If an event originates from ny.amelia.com, perform action A.
* If an event is from sf.amelia.com, perform action B.

Rules may also group events for downstream processing without immediate action.

### Handling Overlapping Rules {% #Overlapping %}

Event rules can overlap. Specificity determines the rule execution priority. One rule might match amelia.com while another rule matches ny.amelia.com. The latter rule would execute first because it's more specific. The other rule would execute second.

### Examples of Event Correlation in Action {% #Examples %}

You could forward events based on geography. You might route New York store sales to a nearby warehouse. This would allow for localized messaging and delivery. It's also possible to watch high event rates from a specific host for a defined time period. Doing so might reveal patterns, for example, frequent errors from a single source.

## Accessing the Event Management Workspaces {% #Access %}

{% include from="E04-02_0002-EventManagementAccess.md" element-id="E04-02_0002-EventManagementAccess_snippet" /%}

## More Resources

{% include from="E04-02_0002-EventManagementMoreInfo.md" element-id="E04-02_0002-EventManagementMoreInfo_snippet" /%}
