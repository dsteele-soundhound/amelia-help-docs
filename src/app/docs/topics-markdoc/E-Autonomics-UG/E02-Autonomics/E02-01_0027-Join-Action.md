# Join Action

## Introduction

{% include from="E02-01_0027-Join-Action-Intro.md" element-id="E02-01_0027-Join-Action-Intro_snippet" /%}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation. Autonomics performs actions in the order that you add them to each automation---top to bottom or left to right.

Adding a Join action to your automation is simple. You'll find the Join button on the Actions panel. Click the button, and then click your mouse anywhere on the Automation Studio canvas to add the action. Once added, you can reposition and connect it as needed.

![E02-01_0027-Join-Action-Intro](E02-01_0027-Join-Action-Intro.png){width="600" style="block"}

*The Join Action Showing the Properties Panel*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure a Join action](#Property).
* [Add an action](#Adding).
* [Connect an action](#Connecting).
* [Copy an action](#Copying).
* [Delete an action](#Deleting).
* [Best use the Join action](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

Clicking the Join action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **State Properties tab**: Display basic settings, including the name of the action.
* **State Notes tab**: Provides an opportunity to add notes to your action.

### State Properties Tab

Here you'll set basic properties, including the name of the action.

![E02-01_0027-Join-State-Prop](E02-01_0027-Join-State-Prop.png){width="600" style="block"}

*The State Properties Tab*

*State Properties Tab Elements*

| Element                                                                                                        | Default                                    | Description                                                                                                                                                                         |
|----------------------------------------------------------------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                                                           | Join               | Type the name of the action. Clicking Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field.                    |
| State Type                                                                                                     | JoinState                                  | Shows the state type for the action. A join state joins two or more execution paths. On reaching the joint state, the execution pauses until all incoming transitions have crossed. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button | From the **popup** menu, select **Delete** | Closes the Properties panel and returns your focus to the canvas.                                                                                                                   |


### State Notes Tab

Here you can add notes to your action.

![E02-01_0027-Join-State-Notes](E02-01_0027-Join-State-Notes.png){width="600" style="block"}

*The State Notes Tab*

*State Notes Tab*

| Element                                                                                                        | Default                                    | Description                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| State Notes                                                                                                    | From the **popup** menu, select **Delete** | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button | From the **popup** menu, select **Delete** | Closes the Properties panel and returns your focus to the canvas.                                                           |



##Adding an Action {% #Adding %}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation. Adding a Join action is simple.

To add a Join action to your Automation Studio canvas:

1. On the left of the Automation Studio canvas, find the **Actions** panel.
2. Click the **Join** ( ![Join-Btn-Auto_Studio_ActionsPanel](Join-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"}) button. You'll see your mouse pointer change to a hand, and a floating Join action appears. The orange color lets you know that this action hasn't been added and positioned.
3. Drop your new Join action on the canvas. Once added, you can reposition and connect your new Join action as needed.
4. Click **Save** ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Connecting an Action {% #Connecting %}

{% include from="E02-01_0023-Connect-Action.md" element-id="E02-01_0023-Connect-Action_snippet" /%}

##Copying an Action {% #Copying %}

{% include from="E02-01_0023-Copy-Action.md" element-id="E02-01_0023-Copy-Action_snippet" /%}

##Deleting an Action {% #Deleting %}

{% include from="E02-01_0023-Delete-Action.md" element-id="E02-01_0023-Delete-Action_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Join action:

* Arrange actions vertically, to help minimize horizontal scrolling when the right side Properties panel is open.

## More Resources

For more information, see:

* [Automation Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)
* [Automation Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)
* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)
* [Fork Action](E02-01_0026-Fork-Action.md)

