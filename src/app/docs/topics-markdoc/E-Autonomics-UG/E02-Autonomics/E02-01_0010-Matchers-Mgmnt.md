

# Matchers Module

## Introduction

The Matchers workspace lets you create and store queries to identify tasks. Once matched, you can process these tasks with automations. You'll use the Matchers workspace to manage these matcher queries. From the Matchers workspace, you can see available queries, as well as add, edit, and delete queries.

## What You'll Learn

In this topic, you'll learn how to:

* [Access the Matchers workspace](#AccessWorkspace).

* [Change workspaces](#Change).

* [Set the domain or client](#Domain).

* [Search for a matcher query](#Search).

* [View a matcher query](#ViewMatch).

* [Edit a matcher query](#EditMatch).

* [Add a matcher query](#AddMatch).

* [Delete a matcher query](#DeleteMatch).

* [Enable or disable a matcher query](#EnableDisable).

* [Set Priority Adjustment for a matcher query](#AdjustPriority).

## Access the Matchers Workspace {% #AccessWorkspace %}

After login, you'll enter the Amelia application. From here, you'll navigate to Autonomics.

By default, You'll enter Autonomics through the Tasks module (Tasks Inbox workspace). To use automations, you must navigate to the Automations module and the Matchers workspace.

To go to the Matchers workspace:

{% include from="E02-01_0003-Access-Automations-Module.md" element-id="E02-01_0003-Access-Automations-Module_snippet" /%}

Once inside the Automations module, you'll see the Browser workspace. This displays available automations organized into folders.

##Change Workspaces {% #Change %}

{% include from="E02-01_0003-Browser-Menu-Change.md" element-id="E02-01_0003-Browser-Menu-Change_snippet" /%}

##Set the Domain or Client {% #Domain %}

To choose a domain, or switch to another client, you'll use the Domain dropdown.

![E02-01-0007-Script-Library-Domain.png](E02-01-0007-Script-Library-Domain.png){width="900" style="block"}

*Select a Domain or Client Name*

##Search for a Matcher Query {% #Search %}

To search for a matcher query, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. In the Matchers workspace, click the **Search** field at the top right of the workspace.
3. Type a search term to find the name of a matcher.

##View a Matcher Query {% #ViewMatch %}

To display a match query in the Autonomics platform, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. In the Matchers list workspace, click any list item in the workspace. This action will display a query detail panel on the right half of the workspace.

    ![E02-01-0010-Matchers-View.png](E02-01-0010-Matchers-View.png){width="900" style="block"}

    *The Matchers Workspace*

3. To close panels and return to the default workspace, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button in the top right corner of the right side panel.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Edit a Matcher Query {% #EditMatch %}

To edit a matcher query, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. In the script list workspace, click the **+ New Matcher** button at the top right of the workspace. This action will display a matcher detail panel on the right half of the workspace.

   ![E02-01-0010-Matchers-Edit.png](E02-01-0010-Matchers-Edit.png){width="600" style="block"}

   *The Matchers Workspace with Edit Matcher Panel* 

3. Click the **Edit** button to display matcher details. As needed, change the Automation, edit the Rules, and configure any variable overrides.

   > The **Add a Matcher Query** section immediately below describes how to change the automation, edit rules, and configure variable overrides.

4. To save the matcher query, click the **Save** button at the top of the right side detail panel.

5. To return to the workspace with the initial Matchers details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Add a Matcher Query {% #AddMatch %}

To add a matcher query, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. In the script list workspace, click the **+ New Matcher** button at the top right of the workspace. This action will display a New Matcher detail panel on the right half of the workspace.

   ![E02-01-0010-Matchers-New.png](E02-01-0010-Matchers-New.png){width="900" style="block"}

   *The Matchers Workspace with New Matcher Panel*

3. **Select an automation.** Click the **Select** button at the top of the panel next to the Automation heading. The Choose Automation popup displays. Confirm the domain or client is selected at the top of the popup. Then use the Search box to find an automation to run when this query matches a task. Click the Select button in the popup after you select an automation.

   ![E02-01-0010-Matchers-Choose-Automation.png](E02-01-0010-Matchers-Choose-Automation.png){width="600" style="block"}

   *The Choose Automation Popup with Domain/Client and Search Box*

   > In the popup, if the Live or Approve icons are not green, be sure to make the automation live and/or approved when making your match query live.

4. **Create one or more rules to match.** In the right side panel, click the dropdown lists to build your match query. The left dropdown lists elements to match. The center list includes query operators. And the right input field lets you specify the exact term or regex to match.

   To add a rule, click the Add Expression ( ![Add-Expression-Btn-Automation_Studio_Prop_Panel.png](Add-Expression-Btn-Automation_Studio_Prop_Panel.png){width="30" style="inline"}) button to the right of the three dropdown lists. If you have more than one rule, this button displays above your rules, next to the AND and OR buttons.

   To group rules, click the Add Group ( ![Add-Group-Btn-Automation_Studio_Prop_Panel.png](Add-Group-Btn-Automation_Studio_Prop_Panel.png){width="30" style="inline"} ) button that appears next to the AND, OR, and Add Expressions buttons.

   > The Rules Preview heading includes an Edit button. As you create rules, you'll see this heading update to match your rules. Clicking the Edit button displays a popup with your rules. In most cases, it will be easier to build rules without the popup.

   To delete a rule in your query, click the Delete ( ![Delete2-Btn-DEB_Inside_Properties.png](Delete2-Btn-DEB_Inside_Properties.png){width="30" style="inline"} ) button to the right of any rule or group.

5. **Configure one or more Variable Overrides.** If you select an Automation that includes variables, you can override their values in your matcher query. The Variables Override sections will display below the Rules section. Select the field name, type a regex to match, and then type the data to override any matched variable value.

6. To save your matcher query, click the **Create** button at the top of the right side detail panel.

7. To return to the workspace with the initial Matchers details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Delete a Matcher Query {% #DeleteMatch %}

To delete a matcher query, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. In the script list workspace, click the **+ New Matcher** button at the top right of the workspace. This action will display a matcher detail panel on the right half of the workspace.

3. Click the **Delete** button to delete the matcher query.

4. To return to the workspace with the initial Matchers details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Enable or Disable a Matcher Query {% #EnableDisable %}

To enable or disable a matcher query, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. In the Matchers list workspace, click a matcher entry. This action will display a matcher detail panel on the right half of the workspace.
3. Click the **Edit** button to display matcher details.
4. Click either the **Enable** or **Disable** radio button to the right of the Status heading at the top of the panel.
4. To save your matcher query, click the **Save** button at the top of the right side detail panel.
5. To return to the workspace with the initial Matchers details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Set Priority Adjustment for a matcher query {% #AdjustPriority %}

You can set matcher queries to process in a specific order of priority. This helps ensure higher priority matchers trigger more often than lower priority matchers.

To set or adjust the priority of one or more matchers, follow these steps:

1. Access the Matchers workspace. The default Matchers workspace will appear.
2. Click the **Priority Adjustment** button at the top left of the list of matchers. a set of arrows will display to the right of each matcher entry.

   ![E02-01-0010-Matchers-Set-Priority.png](E02-01-0010-Matchers-Set-Priority.png){width="900" style="block"}

   *Click the Priority Adjustment button*

3. Click the Up and Down arrows to move a matcher entry up or down one step. The Up and Down arrows with a line above or below them moves an entry to the top or bottom of all matcher entries.

   Alternately, hover your mouse over a matcher entry then click and drag the entry up or down as needed. In addition to changing the mouse cursor, a drag button will display at the far left of each entry.

##Best Practices {% #BestPractices %}

Observe these best practices when creating matcher rules and variable overrides:

**Automata Conflicts** - Check multiple tickets to ensure proper ticket mapping. Looking at test execution tickets with multiple matching automata may indicate an issue. Don't only review the execution, check the IPradar tasks as well.

**Regex** - Use of greedy matches at the beginning or end of a match condition is not allowed. Matchers must be specific and avoid usage of.* The matcher already is a partial match, so there's no need to use it.* Verify each matcher has a valid regex, with no || or similar, and that the matches reflect the alert details provided in the RFC. The beginning of a match can use ?i to ignore case sensitivity. However, it's always better to be more specific than less with matches to prevent unwanted matching.

**Matchers using** \*.* -- when automata with these style matchers are evaluated, the extra time required to process these matchers exhibits itself in the Consumer.ipautomata_auto.VirtualTopic.AI Ops.ipradar.event queue becoming bloated. This, in turn, causes delays for all the requests being inserted into the message queue. This will also cause running automations to fail.

In the scenario where an automation is designed to run against all automations for a given client, instead of using a .* matcher on the description, match against Client.ClientName. This puts minimal strain on the engine, and can easily be adjusted in the future to further match criteria.

**Workflow interaction question** - The question can be found with workflow definition xml, in a block which needs manual work, the question is the name of the workflow block.

This field does text match on the workflow interaction question, can be fully or partial, depends on the logical operator.

**Workflow activity id** - Every workflow block has an activity id, and can be found with the workflow definition xml.

When the workflow moves to a block which needs manual work, this field does text match on the activity id, can be fully or partial, depends on the logical operator.

**Workflow activity name** - Every workflow block has an activity name, and can be found with the workflow definition xml.

When the workflow moves to a block which needs manual work, this field does text match on the activity name, can be fully or partial, depends on the logical operator.

**Workflow definition id** - The definition id can be found with the workflow definition xml. This field does text match on the workflow definition id, can be fully or partial, depends on the logical operator.

**Workflow definition name** - The definition name can be found with the workflow definition xml. This field does text match on the workflow definition name, can be fully or partial, depends on the logical operator.

**Workflow definition key** - The definition key can be found with the workflow definition xml. This field does text match on the workflow definition key, can be fully or partial, depends on the logical operator.

**Workflow definition description** - The definition description can be found with the workflow definition xml. This field does text match on the workflow definition key, can be fully or partial, depends on the logical operator.

## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md)
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md)