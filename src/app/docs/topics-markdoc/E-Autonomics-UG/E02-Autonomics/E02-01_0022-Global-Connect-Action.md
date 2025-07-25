# Global Connect Tool

## Introduction

The Global Connect Tool is the second step in your Autonomics automation workflow. It is used to link two elements in the automation sequence flow.

Any two actions can be connected using the Global Connect tool, except for the Success Action and the Start Action. The Success Action cannot be the starting point of a connection, and the Start Action cannot be the endpoint of a connection.

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points and connect the elements using global connect tool to develop your automation.

Connecting two workflow elements is simple. You'll find the Global Connect action button at the top of the Actions panel. Click the button, and then click your mouse anywhere on the Automation Studio canvas to connect the two elements.

![E02-01_0022-Automations-Global-Connect-Tool](E02-01_0022-Automations-Global-Connect-Tool.png){width="600" style="block"}

*The Automations Global Connect Tool Window*

## What You'll Learn

In this topic, you'll learn how to:

* [Configure a Global Connect action](#Property).
* [Connect an action](#Connecting).
* [Delete an action](#Deleting).
* [Best use the Global action](#Best).

##Property Panel Configuration {% #Property %}

{% include from="E02-01_0023-Accessing-Using-Automation-Studio-Tip.md" element-id="E02-01_0023-Accessing-Using-Automation-Studio-Tip_snippet" /%}

### Showing the Property Panel

Clicking the Global connect action displays a popup toolbar above the action. Using the popup toolbar, click the Properties ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* Transition Properties tab: Display basic settings, including the name of the action.

### Transition Properties Tab

Here you'll set basic properties, including the name of the action.

![E02-01_0022-Automations-Global-Connect-Tool](E02-01_0022-Automations-Global-Connect-Tool.png){width="600" style="block"}

*The Transition Properties Tab*

*Global Connect Task Properties*

|      Field      | Defaults |                                                                                                                                                               Description                                                                                                                                                               |
|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Always   | Type a descriptive name. This text also displays on workspace grid.                                                                                                                                                                                                                                                                     |
| Evaluator Type  | Always   | Options are ALWAYS, OUTPUT, VARIABLE, SCRIPT. OUTPUT applies regular expression against the field specified by Match Against. For example, to match against the return code of the previous state, specify RET for Match Against and set Script/Expression to 0. VARIABLE applies the regular expression against the variable selected. |
| Match Against   |          | For OUTPUT evaluator type, options are ERR for stderr, OUT for stdout, RET for return code                                                                                                                                                                                                                                              |
| Script Engine   |          | JavaScript is the only option.                                                                                                                                                                                                                                                                                                          |
| Variable        |          | For VARIABLE evaluator type.                                                                                                                                                                                                                                                                                                            |
| Negate          |          | For ALWAYS, OUTPUT, VARIABLE, SCRIPT evaluator types.                                                                                                                                                                                                                                                                                   |
| Complete Match? |          | For OUTPUT, VARIABLE, SCRIPT evaluator types.                                                                                                                                                                                                                                                                                           |
| Weight          | 1        | For ALWAYS, OUTPUT, VARIABLE, SCRIPT evaluator types.                                                                                                                                                                                                                                                                                   |
| Regex           |          | For OUTPUT, VARIABLE, SCRIPT evaluator types. Default value is 0.                                                                                                                                                                                                                                                                       |


##Connecting an Action {% #Connecting %}

As you add more actions, you'll connect them to have your automation flow.

To connect one action to another:

1. On the Automation Studio canvas, click the action that you're connecting from. The action's popup toolbar shows above the selected action.
2. Click the Connect ( ![Connect-Btn-Auto_Studio-Action_Tbar](Connect-Btn-Auto_Studio-Action_Tbar.png){width="25" style="inline"}) button.
3. Pull the connector line to the action that you're connecting to. When you have a good connection, the receiving action will turn green.
4. Click the receiving action to set the connection.
5. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Deleting an Action {% #Deleting %}

You can remove an action from an automation when it's no longer needed.

To remove an action:

1. On the Automation Studio canvas, click the action you want to delete. The action's popup toolbar shows above the selected action.
2. Click the Remove ( ![Remove-Btn-Auto_Studio_Action_Tbar](Remove-Btn-Auto_Studio_Action_Tbar.png){width="25" style="inline"}) button.
3. Click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).
4. Access the New Automation window. 
5. By default, the Global Connect task will be linked to another element. 
6. Click the **Global Connect** icon.  
   The Global Connect action's mini tool bar appears above the Global Connect action.
7. Click the **Properties** ( ![E02-01_0023-Start-Action-properties-icon](E02-01_0023-Start-Action-properties-icon.png){width="25" style="inline"})icon.  
   The **Properties** panel appears on the right of the page.  

##Best Practices {% #Best %}

A best practice is to arrange automaton icons vertically, to help minimize horizontal scrolling when the right side panel is open.

## More Resources

For more information, see:

* [Start Action](E02-01_0023-Start-Action.md)
* [Noop Action](E02-01_0025-Noop-Action.md)
* [Join Action](E02-01_0027-Join-Action.md)
* [Link Action](E02-01_0028-Link-Action.md)
* [Automation Studio Introduction](E02-01_0019-Automation-Studio-Intro.md)

## Revision History

