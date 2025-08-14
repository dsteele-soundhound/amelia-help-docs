# AIOps API Action

## Introduction

{% include from="E02-01_0033-Autonomics-API-Intro.md" element-id="E02-01_0033-AIOps-API-Action-Intro_snippet" /%}

Adding a AIOps API action is simple. The AIOps API button is on the Actions panel. Click the button, then click your mouse anywhere on the canvas to add the action. Once added, you can reposition and connect it as needed.

![E02-01_0033-Automations-AIOps-API-Action](E02-01_0033-Automations-AIOps-API-Action.png){width="600" style="block"}

*The AIOps API Action
 Showing the Properties Panel*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure an AIOps API action](#Property).
* [Add an action](#Adding).
* [Connect an action](#Connecting).
* [Copy an action](#Copying).
* [Delete an action](#Deleting).
* [Best use of the AIOps API action
](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

When you add a AIOps API action to the Automation Studio canvas, a Choose Automaton modal displays. For more information on this modal, refer to the section [Adding an Action](#Adding) below. After selecting a process, you're returned to the canvas and your AIOps API action.

Clicking the AIOps API action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **State Properties tab**: Lets you link another automation and shows basic settings, including the name of the action.
* **Extract Variables**: Lets you create new variables and shows created variables.
* **State Notes tab**: Provides an opportunity to add notes to your action.

### State Properties Tab

Here you'll select an API and set basic properties, including the name of the action. Modules include one or more APIs. And each API includes a number of methods. Based upon which API and method you select, a Parameters field will display. Which type of parameters will depend on the method you select.

![E02-01_0033-Automations-AIOps-API-StateProperties](E02-01_0033-Automations-AIOps-API-StateProperties.png){width="600" style="block"}

*The State Properties Tab*

*State Properties Tab Elements*

<table>
<tr>
    <th>Element</th>
    <th>Default</th>
    <th>Description</th>
</tr>
<tr>
    <td>Name</td>
    <td>AIOps API</td>
    <td>Type the name of the action. Clicking Delete ( x ) clears the field. Autonomics assigns it the default name of "AIOps API".</td>
</tr>
<tr>
    <td>State Type</td>
    <td>ApolloAPIAction</td>
    <td>This is the default API state used by Autonomics.</td>
</tr>
<tr>
    <td>Module</td>
    <td></td>
    <td>APIs are organized into modules. For example, select the IPanalyticsApi module to access analytics-related APIs.</td>
</tr>
<tr>
    <td>API</td>
    <td></td>
    <td>Once you select a module, then select the appropriate API in that module.</td>
</tr>
<tr>
    <td>Method</td>
    <td></td>
    <td>Once you select an API from a module, then select the method needed.</td>
</tr>
<tr>
    <td>Transient Data</td>
    <td></td>
    <td>Click to select whether API data should be transient.</td>
</tr>
<tr>
    <td>Parameters</td>
    <td></td>
    <td>This section displays once an API module, API, and method are selected. Parameter types -- for example, date ranges -- will depend on the method.</td>
</tr>
<tr>
    <td>Close (Close-Panel-X-Btn-Automations) button</td>
    <td></td>
    <td>Closes the Properties panel and returns your focus to the canvas.</td>
</tr>
</table>


### Extract Variables Tab

Here you can add new variables and see created variables.

![E02-01-0033-Automations-AIOps-API-ExtractVariables.png](E02-01-0033-Automations-AIOps-API-ExtractVariables.png){width="600" style="block"}


*The Extract Variables Tab*

*Extract Variables Tab Elements*


| Element                                                                                                                                 | Default | Description                                                                                                                                                            |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| + Create New Variable button                                                                                                            |         | Clicking this button opens the Create New Variable modal. Here you can add a new Regex-type variable or Script-type variable.                                          |
| Variable                                                                                                                                |         |                                                                                                                                                                        |
| Edit ( ![Edit3-Btn-Automation-Studio-Link-Action](Edit3-Btn-Automation-Studio-Link-Action.png){width="25" style="inline"}) button       |         | Lets you edit the associated variable using the Edit Variable modal. Here you can edit the variable type, name, outputs, visibility and add notes among other updates. |
| Delete ( ![Delete4-Btn-Automation-Studio-Link-Action](Delete4-Btn-Automation-Studio-Link-Action.png){width="25" style="inline"}) button |         | Lets you delete the associated variable. Take care when deleting variables, as there's no confirmation, and deleting a variable is final.                              |



![E02-01_0028-Automations-Link-Regex](E02-01_0028-Automations-Link-Regex.png){width="600" style="block"}

*The Create New Variable Modal with Regex Selected*

*Create New Variable Elements*

| Element          | Default   | Description                                                                                                                                                                                                       |
|------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Type of Variable | Regex     | Uses a choice chip to set the type of variable to create. Options include: * Regex: Creates a variable based off of the regular expression entered. * Script: Creates a variable based off of the script entered. |
| Name             |           | Enter a descriptive name. This name shows as the Regex Name or Script Name on the Extract Variables tab.                                                                                                          |
| Output Field     |           | Sets the output stream destination. Dropdown options include: * ERR: Output goes to the stderr (standard error) stream. * OUT: Output goes to the stdout (default output) stream. * RET: The return code.         |
| Match            |           | Regular expression for matching with Line Filter                                                                                                                                                                  |
| Filter           |           | Regular expression for filtering lines in output                                                                                                                                                                  |
| Replace          |           | Regular expression for replacement.                                                                                                                                                                               |
| Visibility       | Local     | Select the type of visibility from the dropdown: * Output: * Local: * Transient:                                                                                                                                  |
| Default          |           |                                                                                                                                                                                                                   |
| Secure           | Unchecked | If unchecked, Autonomics shows the output without masking. If checked, the application masks the data, preventing the output from showing.                                                       |
| Notes            |           | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional.                                                                                       |
| Cancel button    |           | Closes the Properties panel and returns your focus to the canvas.                                                                                                                                                 |
| Create button    |           | It creates the Regex variable and lists in the extract variable canvas.                                                                                                                                           |



![E02-01_0028-Automations-Link-Script](E02-01_0028-Automations-Link-Script.png){width="600" style="block"}

*The Create New Variable Modal with Script Selected*

> The following table only shows fields unique to this view. See earlier tables for fields not shown.

*Create New Variable Elements*

| Element       | Default    | Description                                                                         |
|---------------|------------|-------------------------------------------------------------------------------------|
| Script        |            | A scripting console. It allows you to enter the required script for the automation. |
| Script Engine | JavaScript | JavaScript is the only option.                                                      |


### State Notes Tab

Here you can add notes to your action.

![E02-01_0033-Automations-AIOps-API-StateNotes.png](E02-01_0033-Automations-AIOps-API-StateNotes.png){width="600" style="block"}


*The State Notes Tab*

*State Notes Tab Elements*

| Element                                                                                                        | Default | Description                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| State Notes                                                                                                    |         | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |         | Closes the Properties panel and returns your focus to the canvas.                                                           |



##Adding an Action {% #Adding %}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation. Adding a AIOps API action is simple.

To add a AIOps API action to your Automation Studio canvas:

1. On the left of the Automation Studio canvas, find the Actions panel.
2. Click the Link ( ![AIOps_Api-Btn-Auto_Studio_ActionsPanel](AIOps_Api-Btn-Auto_Studio_ActionsPanel.png){width="32" style="inline"}) button. You'll see your mouse pointer change to a hand, and a floating AIOps API action appears. The orange color lets you know that this action hasn't been added and positioned.
3. Drop your new AIOps API action on the canvas. Once added, you can reposition and connect your new AIOps API action as needed. When you add the action to canvas, the Choose Automation modal shows.
4. Using the top dropdown, select the client or domain.
5. Find and select the automation for linking.
   > Depending on your client or domain, you may have one or more automations. The Choose Automation modal shows your automations as a list nested in folders. This means that your automation may not be immediately visible. Searching is a quick and easy way to find a particular automation. Autonomics calculates search results from the first character entered. If there are no matches, "Nothing Found" shows.
6. Click Select.

##Connecting an Action {% #Connecting %}

{% include from="E02-01_0023-Connect-Action.md" element-id="E02-01_0023-Connect-Action_snippet" /%}

##Copying an Action {% #Copying %}

{% include from="E02-01_0023-Copy-Action.md" element-id="E02-01_0023-Copy-Action_snippet" /%}

##Deleting an Action {% #Deleting %}

{% include from="E02-01_0023-Delete-Action.md" element-id="E02-01_0023-Delete-Action_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the AIOps API action:

* Arrange actions vertically, to help minimize horizontal scrolling when the right side Properties panel is open.

## More Resources

For more information, see:

* [Automations Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)

* [Automations Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)

* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)

