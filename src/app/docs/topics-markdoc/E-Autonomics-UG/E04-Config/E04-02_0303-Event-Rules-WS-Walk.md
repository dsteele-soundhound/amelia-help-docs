# Event Rules Walkthrough

## Introduction

Event rules let you define criteria to identify patterns that happen across events. You can group events by shared attributes. For example, host names, event types, or locations.

The [Event Management Introduction](E04-02_0002-Event-Mgmnt-Mod-Intro.md) topic describes how to use rules, attributes, and correlations.

## Accessing the Event Management Workspaces

{% include from="E04-02_0002-EventManagementAccess.md" element-id="E04-02_0002-EventManagementAccess_snippet" /%}


## What You'll Learn

In this topic, you'll learn about:

* [The Event Rules workspace](#Workspace).

* [Adding a new event rule](#AddRule).

* [Updating an existing event rule](#UpdateRule).

* [Best practices for creating and using event rules](#BestPractices)


## The Event Rules Workspace {% #Workspace %}

The Event Rules feature includes several workspaces:

* A default workspace that lists all available event rules with tools to search, create, and edit individual rules.

* A right side panel that displays details about a specific event rule and configure new rules.

### The Default Workspace

The first workspace you'll see is the list of event rules. These are sorted by client and by any search terms. This includes tools to create new rules.

![E04-02_0303-EventRules-Workspace.png](E04-02_0303-EventRules-Workspace.png){width="800"}

*Event Rules Default Workspace*

### The Right Side Panel

When you select an event rule in the default list workspace, details about the rule displays in a right side panel. Clicking the **+ Add New button** in the default workspace also displays the right side panel. When you open this panel, the + Add New button also changes to a + button.

![E04-02_0303-EventRules-Panel.png](E04-02_0303-EventRules-Panel.png){width="800"}

*Event Rules Workspace and Right Side Panel*

*Event Rules Right Side Panel Settings*

| Setting    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name       | Type a unique name for this rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Rule Type  | Click the dropdown list and select the type of rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Enabled    | Click Yes or No to enable or disable this rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Start Time | Type or select a start date and time. Use dd mmm yyyy hh:mm format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| End Time   | Type or select an end date and time. Use dd mmm yyyy hh:mm format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Note       | Type any useful notes to help yourself and others understand the purpose and scope of this rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Rules      | Create one or more rules to match. Click the dropdown lists to build your match query. The left dropdown lists elements to match. The center list includes query operators. And the right input field lets you specify the exact term or regex to match.<br/>To add a rule, click the Add Expression ( ![Add-Expression-Btn-Automation_Studio_Prop_Panel.png](Add-Expression-Btn-Automation_Studio_Prop_Panel.png){width="30" style="inline"}) button near the three dropdown lists. If you have more than one rule, this button displays above your rules, next to the AND and OR buttons.<br/>To group rules, click the Add Group ( ![Add-Group-Btn-Automation_Studio_Prop_Panel.png](Add-Group-Btn-Automation_Studio_Prop_Panel.png){width="30" style="inline"} ) button that appears next to the AND, OR, and Add Expressions buttons. |


## Add an Event Rule {% #AddRule %}

To add an event rule:

1. At the top right of the list workspace, click the **+ Add New button** or the **+ button**. A New Rule panel opens on the right side of the screen.

2. Use the form to configure a new rule.

3. To save the new rule, click the **Create button** at the top of the right panel.


## Update an Event Rule {% #UpdateRule %}

To update an event rule:

1. In the list workspace, click the rule you want to update. A panel opens on the right side of the screen.

2. Use the form to update the rule.

3. To save the updated rule, click the **Save button** at the top of the right panel.


## Best Practices {% #BestPractices %}

* Give each rule a unique descriptive name that reflects its purpose.
* Use start and end times to limit when a rule is active.
* Always validate rule logic in a staging environment.
* Avoid creating rules that duplicate conditions or logic already covered by existing rules.

## More Resources

{% include from="E04-02_0002-EventManagementMoreInfo.md" element-id="E04-02_0002-EventManagementMoreInfo_snippet" /%}
