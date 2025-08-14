# Host Command Action

## Introduction

{% include from="E02-01_0032-Host-Command-Intro.md" element-id="E02-01_0032-Host-Command-Action-Intro_snippet" /%}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation.

Adding another Host Command action is simple. You'll find the Host Command button at the top of the Actions panel. Click the button, and then click your mouse anywhere on the Automation Studio canvas to add the action. Once added, you can reposition and connect it as needed.

![E02-01-032-Automations-HostCommand-ActionHome](E02-01-032-Automations-HostCommand-ActionHome.png){width="600" style="block"}

*The AutomationsHost Command Action Window*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure a Host Command action](#Property).
* [Add an action](#Adding).
* [Connect an action](#Connecting).
* [Copy an action](#Copying).
* [Delete an action](#Deleting).
* [Best use the Host Command action](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

Clicking the Host Command action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **State Properties tab**: Displays the basic settings, including the name of the action.
* **Extract Variables**: Allows to create a new variables and displays the created variables.
* **State Notes tab**: Provides an opportunity to add notes to your action.

### State Properties Tab

Here you'll set basic properties, including the name of the action and script engine.

![E02-01-032-Automations-HostCommand-StateProperties](E02-01-032-Automations-HostCommand-StateProperties.png){width="600" style="block"}

*The State Properties Tab Options*

*State Properties Elements*

|                                                    Element                                                    |      Default      |                                                                           Description                                                                           |
|---------------------------------------------------------------------------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                                                          | Host Command      | Type the name of the action. Clicking Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| State Type                                                                                                    | HostCommandAction | Shows the state type for the action. A Host Command state has no other action other than passing execution through a single outgoing transition.                |
| Connection Group Name                                                                                         |                   | Type the name of a connection group.                                                                                                                            |
| Command                                                                                                       |                   | Type a command to execute automation.                                                                                                                           |
| Raw STDOUT                                                                                                    |                   | Unmasked STDOUT output.                                                                                                                                         |
| Secure STDOUT                                                                                                 |                   | If checked, do not display STDOUT output. Data is masked.                                                                                                       |
| Secure STDERR                                                                                                 |                   | If checked, do not display STDERR output. Data is masked.                                                                                                       |
| Auto-Trim                                                                                                     |                   | Trim output generated by command.                                                                                                                               |
| Reset Prompt                                                                                                  |                   | When selected, resets prompt used during a CLI session.                                                                                                         |
| Soft Timeout                                                                                                  | 5                 | Set the soft timeout.                                                                                                                                           |
| Hard Timeout                                                                                                  | 60                | Set the hard timeout.                                                                                                                                           |
| Regex to Detect Prompt                                                                                        |                   | If appropriate, type a regex to detect value in prompt.                                                                                                         |
| Transient Data                                                                                                |                   | Data will not be visible in the stdout/variables section and data won't be stored in Cassandra database during execution. Applies to every state in IPautomata. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                   | Closes the Properties panel and returns your focus to the canvas.                                                                                               |


### Extract Variables

Here you can add variables to your action. Allows to create a new variables and displays the created variables.

![E02-01_0031-Automations-Script-Regex-Variable](E02-01_0031-Automations-Script-Regex-Variable.png){width="600" style="block"}

*Create New Variable with Regex Options*

![E02-01_0028-Automations-Link-Script](E02-01_0028-Automations-Link-Script.png){width="600" style="block"}

*Create New Variable with Script Options*

*Extract Variables Properties Elements*

|                                                    Element                                                    |  Default   |                                                         Description                                                         |
|---------------------------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------|
| Create New Variable                                                                                           | Regex      | Click the variable button, the Create New Variable window appears on the new window.                                        |
| Type of variable                                                                                              | Regex      | By default, the Regex variable window appears.                                                                              |
| Name                                                                                                          |            | Type a descriptive name. This text also displays on workspace grid.                                                         |
| Output Field                                                                                                  |            | ERR for stderr, OUT for stdout, RET for return code.                                                                        |
| Match                                                                                                         |            | Regular expression for matching with Line Filter                                                                            |
| Filter                                                                                                        |            | Regular expression for filtering lines in output                                                                            |
| Replace                                                                                                       |            | Regular expression for replacement.                                                                                         |
| Visibility                                                                                                    | Local      | Select the type of visibility from the list. Output, Local, and Transient.                                                  |
| Default                                                                                                       |            | Default value to be appeared.                                                                                               |
| Secure                                                                                                        |            | If checked, do not display output. Data will be masked.                                                                     |
| Notes                                                                                                         |            | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Create                                                                                                        |            | It creates the Regex variable and lists in the extract variable canvas.                                                     |
| Cancel                                                                                                        |            | Closes the Properties panel and returns your focus to the canvas.                                                           |
| Script                                                                                                        |            | Select the type of variable.                                                                                                |
| Name                                                                                                          |            | Type a descriptive name. This text also displays on workspace grid.                                                         |
| Script                                                                                                        |            | A scripting console. It allows you to enter the required script for the automation.                                         |
| Script Engine                                                                                                 | JavaScript | JavaScript is the only option.                                                                                              |
| Visibility                                                                                                    |            | Select the type of visibility from the list. Output, Local, and Transient.                                                  |
| Default                                                                                                       |            | Default value to be appeared.                                                                                               |
| Notes                                                                                                         |            | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Create                                                                                                        |            | It creates the Script variable and lists in the extract variable canvas.                                                    |
| Cancel                                                                                                        |            | Closes the Properties panel and returns your focus to the canvas.                                                           |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |            | Closes the Properties panel and returns your focus to the canvas.                                                           |


### State Notes Tab

Here you can add notes to your action.

![E02-01-032-Automations-HostCommand-Note](E02-01-032-Automations-HostCommand-Note.png){width="600" style="block"}

*The State Notes Tab*

*State Notes Tab Elements*

|                                                    Element                                                    | Default |                                                         Description                                                         |
|---------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| State Notes                                                                                                   |         | Add notes or comments related to the purpose of the state, this action or stage of your automation. This field is optional. |
| Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |         | Closes the Properties panel and returns your focus to the canvas.                                                           |


##Adding an Action {% #Adding %}

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation. Adding another Host Command action is simple.

To add a Host Command action to your Automation Studio canvas:

1. On the left of the Automation Studio canvas, find the Actions panel.
2. Click the Host Command ( ![HostCmnd-Btn-Auto_Studio_ActionsPanel](HostCmnd-Btn-Auto_Studio_ActionsPanel.png){width="32" style="inline"}) button. You'll see your mouse pointer change to a hand, and a floating Host Command action appears. The orange color lets you know that this action hasn't been added and positioned.
3. Drop your new Host Command action on the canvas. Once added, you can reposition and connect your new Host Command action as needed.
4. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Connecting an Action {% #Connecting %}

As you add more actions, you'll connect them to have your automation flow.

To connect one action to another:

1. On the Automation Studio canvas, click the action that you're connecting from. The action's popup toolbar shows above the selected action.
2. Click the Connect ( ![Connect-Btn-Auto_Studio-Action_Tbar](Connect-Btn-Auto_Studio-Action_Tbar.png){width="25" style="inline"}) button.
3. Pull the connector line to the action that you're connecting to. When you have a good connection, the receiving action will turn green.
4. Click the receiving action to set the connection.
5. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Copying an Action {% #Copying %}

Copying an action is an effective way to duplicate functionality. You can make a copy of an action using Copy and Paste tools. Copy makes an exact copy of your action, matching all the settings. Then, you can use the Paste button to apply the copied action to the canvas.

To copy an action:

1. On the Automation Studio canvas, click the action you want to copy. The action's popup toolbar shows above the selected action.
2. Click the Copy ( ![Copy-Btn-Auto_Studio_Action_Tbar](Copy-Btn-Auto_Studio_Action_Tbar.png){width="25" style="inline"}) button.
3. From the Automation Studiomain toolbar, click the Paste ( ![Paste-Btn-Automation_Studio_Toolbar](Paste-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}) button. Once added, you can reposition and connect your copied action as needed.
4. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Deleting an Action {% #Deleting %}

You can remove an action from an automation when it's no longer needed.

To remove an action:

1. On the Automation Studio canvas, click the action you want to delete. The action's popup toolbar shows above the selected action.
2. Click the Remove ( ![Remove-Btn-Auto_Studio_Action_Tbar](Remove-Btn-Auto_Studio_Action_Tbar.png){width="25" style="inline"}) button.
3. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Start action:

* Arrange actions vertically, to help minimize horizontal scrolling when the right side Properties panel is open.

## More Resources

For more information, see:

* [Automations Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)
* [Automations Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)
* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)
* [Success Action](E02-01_0024-Success-Action.md)

