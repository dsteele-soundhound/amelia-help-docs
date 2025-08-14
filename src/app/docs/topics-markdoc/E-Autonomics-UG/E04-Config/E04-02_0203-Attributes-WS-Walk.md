# Event Attributes Walkthrough

## Introduction

Attributes let you identify and organize events based on specific criteria. For example, a configuration item or resource. Once you organize events using attributes, you can then perform actions. An attribute to identify databases in a location might be rebooted at a set time. Or rebooted when one of the databases does not respond to a heartbeat signal.

Once created, you can assign an attribute to all appropriate resources.

The [Event Management Introduction](E04-02_0002-Event-Mgmnt-Mod-Intro.md) topic describes how to use rules, attributes, and correlations.


## Accessing the Event Management Workspaces {% #Access %}

{% include from="E04-02_0002-EventManagementAccess.md" element-id="E04-02_0002-EventManagementAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Attributes workspace](#Workspace).

* [Adding an event attribute](#AddAttribute).

* [Deleting an event attribute](#UpdateAttribute).

* [Best practices for creating and using attributes](#BestPractices)

## The Attributes Workspace {% #Workspace %}

The Attributes feature includes several workspaces:

* A default workspace that lists all available attributes with tools to search, create, and edit individual attributes.

* A right side panel that displays details about a specific attributes and configure new attributes.

### The Default Workspace

The first workspace you'll see is the list of attributes. These are sorted by client and by any search terms. This includes tools to create new attributes.

![E04-02_0203-Attributes-Panel.png](E04-02_0203-Attributes-Panel.png){width="800"}

*Attributes Workspace with Right Side Panel*

### The Right Side Panel

When you select an attribute in the default list workspace, details about the attribute displays in a right side panel. Clicking the **+ Add New button** in the default workspace also displays the right side panel. When you open this panel, the + Add New button changes to a + button.


*Attributes Right Side Panel Settings*

| Setting                  | Description                                                                                                                                                                                                            |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client Name              | Click the dropdown list to select the client name.                                                                                                                                                                     |
| Name                     | Type a unique name for this rule.                                                                                                                                                                                      |
| Target Field Name                    | Type the name of a field to target with this attribute.                                                                                                    |
| RegEx for Processing    | If appropriate, type a regular expression to use to search and identify resources for this attribute.                                                                                                                                   |
| Filter By                | Define each filter rule used to group events. Click the + Add button then configure the Field/Attribute, the comparison operator, and the value to search and identify events. For example, Email Subject Contains QA. |

## Add an Event Attribute {% #AddAttribute %}

To add an attribute:

1. At the top right of the list workspace, click the **+ Add New button** or the **+ button**. A New Attribute panel opens on the right side of the screen.

2. Use the form to configure a new attribute.

3. To save the new attribute, click the **Create button** at the top of the right panel.


## Update an Event Attribute {% #UpdateAttribute %}

To update an attribute:

1. In the list workspace, click the attribute you want to update. A panel opens on the right side of the screen.

2. Use the form to update the attribute.

3. To save the updated attribute, click the **Save button** at the top of the right panel.


## Best Practices {% #BestPractices %}

* Give each attribute a unique descriptive name that reflects its purpose.
* Use a naming convention that reflects the attribute’s purpose.
* Avoid assigning multiple attributes that serve the same purpose.
* Create attributes that can be applied across multiple correlation rules.

## More Resources

{% include from="E04-02_0002-EventManagementMoreInfo.md" element-id="E04-02_0002-EventManagementMoreInfo_snippet" /%}

