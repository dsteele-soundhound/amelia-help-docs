# Allowed Commands Management

## Introduction

Some Autonomics commands can run automatically when executed by an automation. They do not request user confirmation to execute. The Allowed Commands workspace lets you create and manage these commands.

* Only users with the necessary permissions can add, update, or delete commands in the list of allowed commands.

  Users must be assigned these permissions: IPautomata Allowed Command Admin, IPautomata Allowed Command Execute, IPautomata Allowed Command Update, and IPautomata Allowed Command View.
* Automations will execute allowed commands without prompting the user for confirmation. Automations trigger when the Resolve with AI button is clicked in a Task workspace.

* Commands not in the Allowed Commands workspace will prompt the user before they execute. User prompt options are Yes, No, or Always. Selecting Always will add the command to the allowed commands. These commands will execute without confirmation in the future.

## Access the Allowed Commands Workspace

To access the Allowed Commands workspace:

1. Using Amelia's top left main menu, click Autonomics.
2. Using the Autonomicstop left main menu, click Autonomics.
3. Click the Browser link on the left side, below the logo, and select the Allowed Commands link.

Click any Allowed Command to view its detail page with the ability to edit or delete the command.

To work with the correct commands, click the correct domain from the drop down list. It's to the right of the Automations link.

![E02-01_0012-AIOps-AllowedCommands](E02-01_0012-AIOps-AllowedCommands.png){width="900" style="block"}

*The Autonomics Left Menu Showing Allowed Commands Option*

## What You'll Learn

In this topic, you'll learn about:

* [The Allowed Commands workspace](#View).
* [Creating an Allowed Command](#Create).
* [Editing an Allowed Command](#Edit).
* [Deleting an Allowed Command](#Delete).
* [Searching for an Allowed Command](#Search).
* [Sorting Allowed Commands](#Sort).

##The Allowed Commands Workspace {% #View %}

To display the Allowed Commands workspace:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Allowed Commands link. The Allowed Commands workspace will display.
2. Click any item listed in the Allowed Commands workspace. Its detail panel displays on the right half of the workspace.

   ![E02-01_0012-AIOps-NewCommand-Panel](E02-01_0012-AIOps-NewCommand-Panel.png){width="900" style="block"}

   *The Allowed Commands Workspace View Details*

3. To close the right side panel and display only the Allowed Commands list, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Create an Allowed Command {% #Create %}

To create a new allowed command:

1. Click the New Command button. A blank edit panel displays to the right of the workspace.
2. Use the edit panel to configure then save the new allowed command.

![E02-01_0012-AIOps-NewCommand](E02-01_0012-AIOps-NewCommand.png){width="900" style="block"}

*The New Command Button*

![E02-01_0012-AIOps-NewCommand-Panel](E02-01_0012-AIOps-NewCommand-Panel.png)

*The New Allowed Command Panel on Right Side*

*New Allowed Command Panel Elements*

| Element | Default |                                                                                                             Description                                                                                                              |
|---------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Command |         | Enter the command that you want to create. Click the ![Join-Btn-Auto_Studio_ActionsPanel](Join-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"} button at the top right to open the command editor in a separate window.. |
| Enabled | Yes     | Click radio button to enable or disable the command.                                                                                                                                                                                 |


##Edit an Allowed Command {% #Edit %}

To edit an allowed command:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Allowed Commands link. The Allowed Commands workspace will display.
2. In the Allowed Commands workspace, click the command to edit. Its detail panel displays on the right half of the workspace.
3. Make any changes to the right side panel. Then save your changes.

##Delete an Allowed Command {% #Delete %}

To delete an allowed command:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Allowed Commands link. The Allowed Commands workspace will display.
2. In the Allowed Commands workspace, click the command to delete. Its detail panel displays on the right half of the workspace.
3. Click the Delete button to delete the command.

##Search for an Allowed Commands {% #Search %}

To search for an allowed command:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Allowed Commands link. The Allowed Commands workspace will display.
2. In the Allowed Commands workspace, click the Search box at the top right of the list of commands.
3. Type characters or phrases to dynamically filter the list of allowed commands.

##Sort Allowed Commands {% #Sort %}

The Sort feature lets you organize and view task Allowed Commands based on various criteria. This helps you quickly find and analyze specific commands.

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Allowed Commands link. The Allowed Commands workspace will display.
2. Click any heading to sort allowed commands.

*Sort Allowed Commands Headings*

|   Heading   |                     Description                      |
|-------------|------------------------------------------------------|
| Enabled     | Sort allowed commands by their status Yes and No.    |
| Created by  | Sort allowed commands by the name of their creators. |
| Modified by | Sort allowed commands by their modification date.    |


## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md).
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md).
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md).