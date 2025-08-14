# Start Action

## Introduction

{% include from="E02-01_0023-Start-Action-Intro.md" element-id="E02-01_0023-Start-Action-Intro_snippet" /%}

When you use generative AI to create an automation, Autonomics follows your prompt to build the automation. Autonomics starts the process with a Start action and finishes with a Success action. The steps between make up the remaining logic. Any changes you make will happen after the Start action but before the Success action.

Say by chance you delete your Start action, to re-add it, you'll find the Start button at the top left of the Actions panel. Click the button, and then click your mouse anywhere on the Automation Studio canvas to add the action. Once added, you can reposition and connect action as needed.

![E02-01_0023-Start-Action-Intro](E02-01_0023-Start-Action-Intro.png){width="600" style="block"}   

*The Start Action Showing the Properties Panel*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure a Start action](#Property).
* [Add an action](#Adding).
* [Connect an action](#Connecting).
* [Copy an action](#Copying).
* [Delete an action](#Deleting).
* [Best use the Start action](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

Clicking the Start action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **State Properties tab**: Display basic settings, including the name of the action.
* **State Notes tab**: Provides an opportunity to add notes to your action.

### State Properties Tab

Here you'll set basic properties, including the name of the action.

![E02-01_0023-Start-Action-State-Prop](E02-01_0023-Start-Action-State-Prop.png){width="600" style="block"}

*The State Properties Tab*

*State Properties Tab Elements*

| Element                                                                                                        | Default                                    | Description                                                                                                                                                      |
|----------------------------------------------------------------------------------------------------------------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                                                           | Start                                      | Type the name of the action. Clicking Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| State Type                                                                                                     | NoopState                                  | Shows the state type for the action. A Noop state has no other action other than passing execution through a single outgoing transition.                         |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button | From the **popup** menu, select **Delete** | Closes the Properties panel and returns your focus to the canvas.                                                                                                |


### State Notes Tab

Here you can add notes to your action.

![E02-01_0023-Start-Action-State-Notes](E02-01_0023-Start-Action-State-Notes.png){width="600" style="block"}

*The State Notes Tab*

*State Notes Tab Elements*

| Element                                                                                                        | Default                                    | Description                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| State Notes                                                                                                    | From the **popup** menu, select **Delete** | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button | From the **popup** menu, select **Delete** | Closes the Properties panel and returns your focus to the canvas.                                                           |


##Add an Action {% #Adding %}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation. Say by chance you delete your Start action, to re-add it, you'll find the Start button at the top left of the Actions panel. Click the button, and then click your mouse anywhere on the Automation Studio canvas to add the action. Once added, you can reposition and connect it as needed.

To add a Start action to your Automation Studio canvas:

1. On the left of the Automation Studio canvas, find the Actions panel.
2. Click the Start ( ![Start-Btn-Auto_Studio_ActionsPanel](Start-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"}) button. You'll see your mouse pointer change to a hand, and a floating Start action appears. The orange color lets you know that this action hasn't been added and positioned.
3. Drop your new Start action on the canvas. Once added, you can reposition and connect your new Start action as needed.
4. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Connect an Action {% #Connecting %}

{% include from="E02-01_0023-Connect-Action.md" element-id="E02-01_0023-Connect-Action_snippet" /%}

##Copy an Action {% #Copying %}

{% include from="E02-01_0023-Copy-Action.md" element-id="E02-01_0023-Copy-Action_snippet" /%}

##Delete an Action {% #Deleting %}

{% include from="E02-01_0023-Delete-Action.md" element-id="E02-01_0023-Delete-Action_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Start action:

* Arrange actions vertically, to help minimize horizontal scrolling when the right side Properties panel is open.

* Every automation must have a Start action.

## More Resources

For more information, see:

* [Automation Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)
* [Automation Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)
* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)
* [Success Action](E02-01_0024-Success-Action.md)
* [Noop Action](E02-01_0025-Noop-Action.md)

