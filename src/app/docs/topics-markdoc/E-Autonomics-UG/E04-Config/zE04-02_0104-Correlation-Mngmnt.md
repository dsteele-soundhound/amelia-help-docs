# Correlation Management

Early draft of Event Management Intro topic.


## Introduction

Correlation in event processing refers to the method of grouping, relating, or handling multiple events based on specific criteria, making it easier to analyze and respond to patterns. In this approach, events are grouped by shared attributes, such as host names, event types, or locations, to identify trends or relationships among them. This approach is useful for detecting patterns, automating responses, or triggering actions based on event patterns.

![E04-02_0102-CorrelationWalkThrgh-HomePage](E04-02_0102-CorrelationWalkThrgh-HomePage.png){width="900"}

*Figure 1. Autonomics Main Menu Showing Correlation*

You can also switch workspaces using Amelia's top-left main menu. Here you'll choose Event Management. Then, from the flyout menus, you'll choose Correlation followed by the workspace.

## What You'll Learn

In this topic, you'll learn how to:

* [Accessing the Correlation workspace.](#AccessingWorkspace)

* [Change Workspace.](#ChangeWorkspace)

* [Add New Rule.](#AddRule)

* [Update the Existing Rule.](#Update)

##Accessing the Correlation Workspace {% #AccessingWorkspace %}

After login, you'll enter the Amelia application. From here, you'll navigate to Autonomics.

By default, You'll enter Autonomics through the Event Management module (Correlation workspace). To use Correlation, you must navigate to the Event Management module (Correlation workspace).

1. Using Amelia's **top-left main** menu, click **Autonomics**. By default, you're taken to the Tasks module (Tasks Inbox workspace) as your landing page.

2. Using the Autonomics**top left main** menu, click **Configuration**.

   ![E04-02_0102-Correlation-HomePage](E04-02_0102-Correlation-HomePage.png)

   *Figure 2. Autonomics Top Left Main Menu Showing Correlation*
3. The right pane appears with the Event Management option.

4. Click the **Correlation** option.

##Change Workspace {% #ChangeWorkspace %}

The workspace's main menu sits on the left side of the page header area. You'll use this menu to switch between the module's workspaces. From here you'll access the Correlation, Attributes, and Event Rules workspaces.

![E04-02_0102-CorrelationWalkThrgh-DropdownMenu](E04-02_0102-CorrelationWalkThrgh-DropdownMenu.png)

*Figure 3. Correlation Workspace Showing Workspace Main Menu*

##Add New Rule {% #AddRule %}

A rule in event correlation is a mechanism that determines how multiple events are processed together to identify patterns, reduce redundancy, and provide meaningful insights for further actions.

To add a new rule using Correlation:

1. Click the New Rule button that is place on the top-right of the Correlation workspace.

2. The New Rule workspace opens in the right of the workspace.

   ![E04-02_0102-CorrelationMngmt-NewRule](E04-02_0102-CorrelationMngmt-NewRule.png){width="900"}

   *Figure 4. Correlation New Rule Workspace Showing Workspace*

   |               Element               |  Default   |                                     Description                                      |
   |-------------------------------------|------------|--------------------------------------------------------------------------------------|
   | Client Name                         | IPsoft Inc | The client associated with the rule.                                                 |
   | Name                                |            | The rule name.                                                                       |
   | Order                               |            | The execution order of the rule.                                                     |
   | Time Window (minutes)               |            | The duration (in minutes) for the rule to evaluate events (for example, 15 minutes). |
   | Number of Events                    |            | Specifies the threshold number of events required for the rule to trigger.           |
   | Matchers |            |                                                                                      |
   | Filter by                           |            | Defines criteria to filter events, such as service contains Axiom Monitor.           |
   | Group by                            |            | Specifies how events are grouped (for example, by service).                          |
   | Filter by Previous Event            |            | Adds conditional filtering based on prior events.                                    |

3. Click the **Create** button, to add new rule and return to the workspace.

4. Click **Cancel** to return to the workspace.

##Update the Existing Rule {% #Update %}

To update or modify a rule in an event management system like the one described, you can follow these steps.

![E04-02_0102-CorrelationMngmt-ExistingRule](E04-02_0102-CorrelationMngmt-ExistingRule.png){width="900"}

*Figure 5. **Correlation** Workspace*

1. Open the Event Management module in your system.

2. Go to the Correlation section where rules are listed.

3. Find the rule you want to update from the list of existing rules.

4. Use the search bar (if available) to locate the rule by its name or attributes.

5. Click on the rule to view its details.

6. Click the Edit button. This will open the rule configuration panel.

7. Update the fields as required.

8. Click the **Update** button.

9. Click the **Cancel** button to return to the workspace.

## More Resources

{% include from="E04-02_0101-CorrelationMoreInfo.md" element-id="E04-02_0101-CorrelationMoreInfo_snippet" /%}
