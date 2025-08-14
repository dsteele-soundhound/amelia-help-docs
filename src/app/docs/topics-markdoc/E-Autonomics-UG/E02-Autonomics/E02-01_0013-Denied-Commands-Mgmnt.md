# Denied Commands Management

## Introduction

Some Autonomics commands can run automatically when executed by an automation. They do not request user confirmation to execute. The Denied Commands workspace lets you create and manage these commands.

* Only users with the necessary permissions can add, update, or delete commands in the list of Denied Commands.

  Users must be assigned these permissions: IPautomata Denied Command Admin, IPautomata Denied Command Execute, IPautomata Denied Command Update, and IPautomata Denied Command View.

* Automations will execute Denied Commands without prompting the user for confirmation. Automations trigger when the Resolve with AI button is clicked in a Task workspace.

* Commands not in the Denied Commands workspace will prompt the user before they execute. User prompt options are Yes, No, or Always. Selecting Always will add the command to the Denied Commands. These commands will execute without confirmation in the future.

## Access the Denied Commands Workspace

To access the Denied Commands workspace:

1. Using Amelia's top left main menu, click Autonomics.
2. Using the Autonomicstop left main menu, click Autonomics.
3. Click the Browser link on the left side, below the logo, and select the Denied Commands link.

Click any Denied Command to view its detail page with the ability to edit or delete the command.

To work with the correct commands, click the correct domain from the drop down list. It's to the right of the Automations link.

![E02-01-0013-Denied-Commands-Dropdown.png](E02-01-0013-Denied-Commands-Dropdown.png){width="900" style="block"}

*The Autonomics Left Menu Showing Denied Commands Option*

## What You'll Learn

In this topic, you'll learn about:

* [The Denied Commands workspace](#View).
* [Creating a Denied Command](#Create).
* [Editing a Denied Command](#Edit).
* [Deleting a Denied Command](#Delete).
* [Searching for a Denied Command](#Search).
* [Sorting Denied Commands](#Sort).

##The Denied Commands Workspace {% #View %}

To display the Denied Commands workspace:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Denied Commands link. The Denied Commands workspace will display.
2. Click any item listed in the Denied Commands workspace. Its detail panel displays on the right half of the workspace.

    ![E02-01-0013-Denied-Commands-New.png](E02-01-0013-Denied-Commands-New.png){width="900" style="block"}

   *The Denied Commands Workspace View Details*

3. To close the right side panel and display only the Denied Commands list, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Create a Denied Command {% #Create %}

To create a new Denied Command:

1. Click the New Command button. A blank edit panel displays to the right of the workspace.
2. Use the edit panel to configure then save the new Denied Command.

![E02-01-0013-Denied-Commands-New-Btn.png](E02-01-0013-Denied-Commands-New-Btn.png){width="900" style="block"}

*The New Command Button*

![E02-01-0013-Denied-Commands-New.png](E02-01-0013-Denied-Commands-New.png){width="900" style="block"}

*The New Denied Command Panel on Right Side*

*New Denied Command Panel Elements*

| Element | Default |                                                                                                             Description                                                                                                              |
|---------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Command |         | Enter the command that you want to create. Click the ![Join-Btn-Auto_Studio_ActionsPanel](Join-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"} button at the top right to open the command editor in a separate window.. |
| Enabled | Yes     | Click radio button to enable or disable the command.                                                                                                                                                                                 |


##Edit a Denied Command {% #Edit %}

To edit a Denied Command:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Denied Commands link. The Denied Commands workspace will display.
2. In the Denied Commands workspace, click the command to edit. Its detail panel displays on the right half of the workspace.
3. Make any changes to the right side panel. Then save your changes.

##Delete a Denied Command {% #Delete %}

To delete a Denied Command:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Denied Commands link. The Denied Commands workspace will display.
2. In the Denied Commands workspace, click the command to delete. Its detail panel displays on the right half of the workspace.
3. Click the Delete button to delete the command.

##Search for a Denied Commands {% #Search %}

To search for a Denied Command:

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Denied Commands link. The Denied Commands workspace will display.
2. In the Denied Commands workspace, click the Search box at the top right of the list of commands.
3. Type characters or phrases to dynamically filter the list of Denied Commands.

##Sort Denied Commands {% #Sort %}

The Sort feature lets you organize and view Denied Commands based on various criteria. This helps you quickly find and analyze specific commands.

1. Click the Autonomics link in the main menu. Then click the Browser link on the left side, below the logo, and select the Denied Commands link. The Denied Commands workspace will display.
2. Click a heading to sort commands.

*Sort Denied Commands Headings*

|   Heading   |                     Description                      |
|-------------|------------------------------------------------------|
| Enabled     | Sort Denied Commands by their status Yes and No.    |
| Created by  | Sort Denied Commands by the name of their creators. |
| Modified by | Sort Denied Commands by their modification date.    |


## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md).
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md).
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md).