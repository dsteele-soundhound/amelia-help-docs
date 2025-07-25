# Event Correlation Rules Walkthrough

## Introduction

Correlation rules let you define criteria used to help identify and correlate events and resources.

The [Event Management Introduction](E04-02_0002-Event-Mgmnt-Mod-Intro.md) topic describes how to use rules, attributes, and correlations.

## Accessing the Event Management Workspaces {% #Access %}

{% include from="E04-02_0002-EventManagementAccess.md" element-id="E04-02_0002-EventManagementAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Correlation Rules workspace](#Workspace).

* [Adding an event correlation rule](#AddCorrelation).

* [Updating an event correlation rule](#UpdateCorrelation).

* [Best practices for creating and using correlation rules](#BestPractices)


## The Correlation Rules Workspace {% #Workspace %}

The Correlation Rules feature includes several workspaces:

* A default workspace that lists all available correlation rules with tools to search, create, and edit individual rules.

* A right side panel that displays details about a specific correlation rule and configure new rules.

### The Default Workspace

The first workspace you'll see is the list of correlation rules. These are sorted by client and by any search terms. This includes tools to create new rules.

![E04-02_0103-Correlation-Workspace.png](E04-02_0103-Correlation-Workspace.png){width="800"}

*Correlation Rules Default Workspace*

### The Right Side Panel

When you select a correlation rule in the default list workspace, details about the rule displays in a right side panel. Clicking the **+ Add New button** in the default workspace also displays the right side panel. When you open this panel, the + Add New button also changes to a small + button.

![E04-02_0103-Correlation-Panel.png](E04-02_0103-Correlation-Panel.png){width="800"}

*Correlation Rules Workspace and Right Side Panel*

*Correlation Rules Right Side Panel Settings*

| Setting                  | Description                                                                                                                                                                                                            |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client Name              | Click the dropdown list to select the client name.                                                                                                                                                                     |
| Name                     | Type a unique name for this rule.                                                                                                                                                                                      |
| Order                    | If appropriate, type the order number to execute this rule. A lower number is executed earlier than a later number.                                                                                                    |
| Time Window (minutes)    | The duration (in minutes) for the rule to evaluate events (for example, 15 minutes).                                                                                                                                   |
| Number of Events         | Specifies the threshold number of events required for the rule to trigger.                                                                                                                                             |
| Filter By                | Define each filter rule used to group events. Click the + Add button then configure the Field/Attribute, the comparison operator, and the value to search and identify events. For example, Email Subject Contains QA. |
| Group By                 | Define how to group events. Click the + Add button to configure the criteria.                                                                                                                                          |
| Filter by Previous Event | Define conditional filtering based on prior events.                                                                                                                                                                    | 


## Add an Event Correlation Rule {% #AddCorrelation %}

To add a correlation rule:

1. At the top right of the list workspace, click the **+ Add New button** or the **+ button**. A New Rule panel opens on the right side of the screen.

2. Use the form to configure a new rule.

3. To save the new rule, click the **Create button** at the top of the right panel.


## Update an Event Correlation Rule {% #UpdateCorrelation %}

To update a correlation rule:

1. In the list workspace, click the rule you want to update. A panel opens on the right side of the screen.

2. Use the form to update the rule.

3. To save the updated rule, click the **Save button** at the top of the right panel.


## Best Practices {% #BestPractices %}

* Give each rule a unique descriptive name that reflects its purpose.
* Review your rule set regularly to prevent duplication or unintended overlaps.
* Use time windows that match real-world behavior. Too short a window might miss patterns; too long could lead to noise.
* Always validate your rule logic in a staging environment.


## More Resources

{% include from="E04-02_0002-EventManagementMoreInfo.md" element-id="E04-02_0002-EventManagementMoreInfo_snippet" /%}
