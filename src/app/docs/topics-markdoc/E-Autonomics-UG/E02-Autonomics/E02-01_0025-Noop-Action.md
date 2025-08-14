# Noop Action

## Introduction

{% include from="E02-01_0025-Noop-Action-Intro.md" element-id="E02-01_0025-Noop-Action-Intro_snippet" /%}

When you use generative AI to create an automation, Autonomics follows your prompt to build the automation. Autonomics starts the process with a Start action and finishes with a Success action. The steps between make up the remaining logic. Once created, and in the above scenarios, you can replace the Start action with a Noop action. Then, you can add actions between the Noop and Success actions to develop your automation.

Introducing a **Noop** action is simple. You'll find the Noop button near the top of the Actions panel. Click the button, and then click your mouse anywhere on the Automation Studio canvas to add the action. Once added, you can reposition and connect the action as needed.

![E02-01_0025-Noop-Action](E02-01_0025-Noop-Action.png){width="600" style="block"}   

*The Noop Action Showing the Properties Panel*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure a Noop action](#Property).
* [Add an action](#Adding).
* [Connect an action](#Connecting).
* [Copy an action](#Copying).
* [Delete an action](#Deleting).
* [Best use the Noop action](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

Clicking the Noop action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* State Properties tab: Display basic settings, including the name of the action.

* State Notes tab: Provides an opportunity to add notes to your action.

### State Properties Tab

Here you'll set basic properties, including the name of the action.

![E02-01_0025-Noop-Action-State-Prop](E02-01_0025-Noop-Action-State-Prop.png){width="600" style="block"}

*The State Properties Tab*

*State Properties Elements*

| Element                                                                                                        | Default   | Description                                                                                                                                                      |
|----------------------------------------------------------------------------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                                                           | Noop      | Type the name of the action. Clicking Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| State Type                                                                                                     | NoopState | Shows the state type for the action. A Noop state has no other action other than passing execution through a single outgoing transition.                         |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |           | Closes the Properties panel and returns your focus to the canvas.                                                                                                |


### State Notes Tab

Here you can add notes to your action.

![E02-01_0025-Noop-Action-NotesState](E02-01_0025-Noop-Action-NotesState.png){width="600" style="block"}

*The State Notes Tab*

*State Notes Tab Elements*

| Element                                                                                                        | Default | Description                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| State Notes                                                                                                    |         | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |         | Closes the Properties panel and returns your focus to the canvas.                                                           |



##Add an Action {% #Adding %}

When you manually create an automation using Automation Studio, Autonomics adds a Start action and a Success action to help you get started. You can then add actions between these points to develop your automation. Using a Noop action in an automation is simple.

> See the [Deleting an Action](#Deleting) steps below for help with removing an existing Start action.

To add a Noop action to your Automation Studio canvas:

1. On the left of the Automation Studio canvas, find the **Actions** panel.
2. Click the **Noop** ( ![Noop-Btn-Auto_Studio_ActionsPanel](Noop-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"}) button. You'll see your mouse pointer change to a hand, and a floating Noop action appears. The orange color lets you know that this action hasn't been added and positioned.
3. Drop your new Noop action on the canvas. Once added, you can reposition and connect your new Noop action as needed.
4. Click **Save** ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Connect an Action {% #Connecting %}

{% include from="E02-01_0023-Connect-Action.md" element-id="E02-01_0023-Connect-Action_snippet" /%}

##Copy an Action {% #Copying %}

{% include from="E02-01_0023-Copy-Action.md" element-id="E02-01_0023-Copy-Action_snippet" /%}

##Delete an Action {% #Deleting %}

{% include from="E02-01_0023-Delete-Action.md" element-id="E02-01_0023-Delete-Action_snippet" /%}

##Best Practices {% #Best %}

Keep these best practices in mind as you work with the Noop action:

* Arrange actions vertically, to help minimize horizontal scrolling when the right side Properties panel is open.
* You can only have one Noop state in your automation. To save your automation, you must remove any extra Noop actions.

## More Resources

For more information, see:

* [Automation Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)
* [Automation Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)
* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)
* [Start Action](E02-01_0023-Start-Action.md)
* [Success Action](E02-01_0024-Success-Action.md)

