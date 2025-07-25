# Phone Call Action

## Introduction

{% include from="E02-01_0039-Phone-Call-Intro.md" element-id="E02-01_0039-AIOps-Phone-Call-Intro_snippet" /%}

When you manually create an automation in Automation Studio, Autonomics adds a Start and a Success action. You can then add one or more Phone Call actions between these points to develop your automation. Autonomics performs actions in the order that you add them to each automation---top to bottom or left to right. It's an optional action in the automation.

Adding a Phone Call action is simple. The Phone Call button is on the Actions panel. Click the button, then click your mouse anywhere on the canvas to add the action. Once added, you can reposition and connect it as needed.


![E02-01_0039-Automations-Phone-Call-Action.png](E02-01_0039-Automations-Phone-Call-Action.png){width="600" style="block"}

*The Phone Call Action
Showing the Properties Panel*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure a Phone Call action](#Property).
* [Add an action](#Adding).
* [Connect an action](#Connecting).
* [Copy an action](#Copying).
* [Delete an action](#Deleting).
* [Best use of the Phone Call action
  ](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

When you add a Phone Call action to the Automation Studio canvas, a Choose Automaton modal displays. For more information on this modal, refer to the section [Adding an Action](#Adding) below. After selecting a process, you're returned to the canvas and your Phone Call action.

Clicking the Phone Call action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **State Properties tab**: Lets you link another automation and shows basic settings, including the name of the action.
* **Extract Variables**: Lets you create new variables and shows created variables.
* **State Notes tab**: Provides an opportunity to add notes to your action.

### State Properties Tab

Here you'll add a phone number to call as part of an automation process. You can configure the text for Autonomics to speak once the call is connected. And you can add a single-digit or multi-digit prompt to direct the call or gain access.

![E02-01_0039-Automations-Phone-Call-StateProperties.png](E02-01_0039-Automations-Phone-Call-StateProperties.png){width="600" style="block"}

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
    <td>Phone Call</td>
    <td>Type the name of the action. Clicking Delete ( x ) clears the field. Autonomics assigns it the default name of "Phone Call".</td>
</tr>
<tr>
    <td>State Type</td>
    <td>Phone CallAction</td>
    <td>This is the default state used by Autonomics.</td>
</tr>
<tr>
    <td>Phone Number</td>
    <td>Number</td>
    <td>Either type a phone number or click to select None.</td>
</tr>
<tr>
    <td>TTS Language</td>
    <td>English</td>
    <td>Select a language to use for the call.</td>
</tr>
<tr>
    <td>Text to Speak</td>
    <td></td>
    <td>Type the automated message for Autonomics to speak after a call is connected.</td>
</tr>
<tr>
    <td>Disconnect</td>
    <td>No</td>
    <td>Select whether to disconnect the call.</td>
</tr>
<tr>
    <td>Secure STDOUT</td>
    <td>No</td>
    <td>Select whether to use secure STDOUT for the call.</td>
</tr>
<tr>
    <td>Prompt</td>
    <td>None</td>
    <td>If appropriate, select a prompt to use for the call. If you select Single-Digit, type the prompt either manually or use a variable.</td>
</tr>
<tr>
    <td>Prompt Timeout (sec)</td>
    <td>10</td>
    <td>Select the timeout in seconds to wait for the prompt.</td>
</tr>
<tr>
    <td>Close (Close-Panel-X-Btn-Automations) button</td>
    <td></td>
    <td>Closes the Properties panel and returns your focus to the canvas.</td>
</tr>
</table>


### Extract Variables Tab

Here you can add new variables and see created variables.

![E02-01-0039-Automations-Phone-Call-ExtractVariables.png](E02-01-0039-Automations-Phone-Call-ExtractVariables.png){width="600" style="block"}

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

![E02-01_0039-Automations-Phone-Call-StateNotes.png](E02-01_0039-Automations-Phone-Call-StateNotes.png){width="600" style="block"}

*The State Notes Tab*

*State Notes Tab Elements*

| Element                                                                                                        | Default | Description                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| State Notes                                                                                                    |         | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |         | Closes the Properties panel and returns your focus to the canvas.                                                           |



##Adding an Action {% #Adding %}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation. Adding a Phone Call action is simple.

To add a Phone Call action to your Automation Studio canvas:

1. On the left of the Automation Studio canvas, find the Actions panel.
2. Click the Link (&nbsp;&nbsp;![PhoneCall-Btn-Auto_Studio_ActionsPanel](PhoneCall-Btn-Auto_Studio_ActionsPanel.png){width="16" style="inline"}&nbsp;) button. You'll see your mouse pointer change to a hand, and a floating Phone Call action appears. The orange color lets you know that this action hasn't been added and positioned.
3. Drop your new Phone Call action on the canvas. Once added, you can reposition and connect your new Phone Call action as needed. When you add the action to canvas, the Choose Automation modal shows.
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

Keep this best practice in mind as you work with the Phone Call action:

* Arrange actions vertically, to help minimize horizontal scrolling when the right side Properties panel is open.

## More Resources

For more information, see:

* [Automations Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)

* [Automations Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)

* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)

