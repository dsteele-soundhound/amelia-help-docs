# Event Downtime Rules Walkthrough

## Introduction

Downtime rules let you define when a computer or other resource is unavailable. You can define the start and end time for this event type.

The [Event Management Introduction](E04-02_0002-Event-Mgmnt-Mod-Intro.md) topic describes how to use rules, attributes, and correlations.

## Accessing the Event Management Workspaces

{% include from="E04-02_0002-EventManagementAccess.md" element-id="E04-02_0002-EventManagementAccess_snippet" /%}


## What You'll Learn

In this topic you'll learn about:

* [The Event Downtime Rules workspace](#Workspace).

* [Adding a downtime rule](#AddRule).

* [Updating a downtime rule](#UpdateRule).

* [Best practices for creating and using downtime rules](#BestPractices)


## The Event Downtime Rules Workspace {% #Workspace %}

The Event Downtime Rules feature includes several workspaces:

* A default workspace that lists all available downtime rules with tools to search, create, and edit individual rules.

* A right side panel that displays details about a specific downtime rule and configure new rules.

### The Default Workspace

The first workspace you'll see is the list of downtime rules. These are sorted by client and by any search terms. This includes tools to create new rules.


![E04-02_0403-DowntimeRules-Panel.png](E04-02_0403-DowntimeRules-Panel.png){width="800"}

*Event Downtime Rules Workspace and Right Side Panel*

### The Right Side Panel

When you select a downtime rule in the default list workspace, details about the rule displays in a right side panel. Clicking the **+ New Downtime button** in the default workspace also displays the right side panel.

*Event Downtime Rules Right Side Panel Settings*


| Setting            | Description                                                                                                                                                                                                                                                                                                                                                                    |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client Name        | Type a unique client name for this rule.                                                                                                                                                                                                                                                                                                                                       |
| Start Time         | Type or select a start date and time. Use dd mmm yyyy hh:mm format.                                                                                                                                                                                                                                                                                                            |
| End Time           | Type or select an end date and time. Use dd mmm yyyy hh:mm format.                                                                                                                                                                                                                                                                                                             |
| Note               | Type any useful notes to help yourself and others understand the purpose and scope of this rule.                                                                                                                                                                                                                                                                               |
| Host,Service Pairs | Click the + Add button to define the host and service pairs for this rule.                                                                                                                                                                                                                                                                                                     |
| + Add New CI(s)    | Click this button to add one or more configuration items (CIs) to use for this rule.<br>Clicking the button will move the right panel to the left side of the workspace. The right panel will display a search interface. Type the name of any CI to display then select it. You also can click the name of a CI in this right side search panel to display its CIs workspace. |


## Add a Downtime Rule {% #AddRule %}

To add a downtime rule:

1. At the top right of the list workspace, click the **+ Add New button** or the **+ button**. A New Rule panel opens on the right side of the screen.

2. Use the form to configure a new rule.

3. To save the new rule, click the **Create button** at the top of the right panel.


## Update a Downtime Rule {% #UpdateRule %}

To update a downtime rule:

1. In the list workspace, click the rule you want to update. A panel opens on the right side of the screen.

2. Use the form to update the rule.

3. To save the updated rule, click the **Save button** at the top of the right panel.


## Best Practices {% #BestPractices %}

* Give each rule a unique descriptive name that reflects its purpose.
* Schedule downtime rules in advance to avoid unnecessary alerts or triggered actions during known maintenance windows.
* Document why the downtime is scheduled and what systems are affected. This helps with auditing and troubleshooting later.
* Only include the necessary configuration items, Host, and Service.
* Ensure start time and End Time are entered accurately.

## More Resources

{% include from="E04-02_0002-EventManagementMoreInfo.md" element-id="E04-02_0002-EventManagementMoreInfo_snippet" /%}
