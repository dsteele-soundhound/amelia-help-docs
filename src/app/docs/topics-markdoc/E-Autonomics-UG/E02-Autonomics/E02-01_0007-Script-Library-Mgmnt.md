

# Script Library Module

## Introduction

The Script Library workspace lets you store scripts for use by one or more automata. You'll use the Script Library workspace to manage these scripts. From the Script Library table, you can see available scripts, as well as add, edit, and delete scripts. It's also possible to maintain multiple versions of scripts and view their change histories.

## What You'll Learn

In this topic, you'll learn how to:

* [Access the Script Library workspace](#AccessWorkspace).

* [Change workspaces](#Change).

* [Set the domain or client](#Domain).

* [Search for a script](#Search).

* [View script details](#View).

* [View script change history](#History).

* [Edit a script](#Edit).

* [Create a new script](#Create).

* [Create or switch versions of a script](#Versions)

* [Import a script](#Import).

* [Export a script](#Export).

* [Diff a script to view change history](#Diff).

* [Delete a script](#Delete).

## Access the Script Library Workspace {% #AccessWorkspace %}

After login, you'll enter the Amelia application. From here, you'll navigate to Autonomics.

By default, You'll enter Autonomics through the Tasks module (Tasks Inbox workspace). To use automations, you must navigate to the Automations module and the Script Library workspace.

To go to the Script Library workspace:

{% include from="E02-01_0003-Access-Automations-Module.md" element-id="E02-01_0003-Access-Automations-Module_snippet" /%}

Once inside the Automations module, you'll see the Browser workspace. This displays available automations organized into folders.

##Change Workspaces {% #Change %}

{% include from="E02-01_0003-Browser-Menu-Change.md" element-id="E02-01_0003-Browser-Menu-Change_snippet" /%}

##Set the Domain or Client {% #Domain %}

To choose a domain, or switch to another client, you'll use the Domain dropdown.

![E02-01-0007-Script-Library-Domain.png](E02-01-0007-Script-Library-Domain.png){width="900" style="block"}

*Select a Domain or Client Name*

##Search for a Script {% #Search %}

The Script Library History page offers a display and search functionality to efficiently find and review scripts. Type the name of a script to display one or more scripts that match your search phrase.

![E02-01-0007-Script-Library-Search.png](E02-01-0007-Script-Library-Search.png){width="900" style="block"}

*The Script Library History Showing the Search Field*

##View Script Details {% #View %}

To display a script in the Autonomics platform, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click any list item in the Script Library workspace. This action will display a script detail panel on the right half of the workspace.

    ![E02-01-0007-Script-Library-Workspace.png](E02-01-0007-Script-Library-Workspace.png)

    *The Script Library Workspace View*

    ![E02-01-0007-Script-Library-Script.png](E02-01-0007-Script-Library-Script.png)

    *The Script Library Workspace View Details*

3. Clicking a script item in the right panel will move that detail panel to the left side of the workspace. The details about the item will be displayed in a new right panel.
4. To close panels and return to the default workspace, click the 'x' in the top right corner of the right side panel.
5. To return to the workspace with the initial Script Library details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##View Script Change History {% #History %}

To display the change history for a script, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click any list item in the Script Library workspace. This action will display a script detail panel on the right half of the workspace.
3. Click the Change History tab to display the change history for the script.

    ![E02-01-0007-Script-Library-History.png](E02-01-0007-Script-Library-History.png)

    *The Script Library History Tab*

##Edit a Script {% #Edit %}

To edit a script, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click any list item in the Script Library workspace. This action will display a script detail panel on the right half of the workspace.
3. Click the Script tab to display the script. Make any changes.

    ![E02-01-0007-Script-Library-Script.png](E02-01-0007-Script-Library-Script.png)

    *The Script Library Script Tab*

4. Click the Save button at the top of the panel.

5. To return to the workspace with the initial Script Library details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Create a New Script {% #Create %}

To create a new script, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click the **+ New Script** button at the top right of the Script Library workspace. This action will display a script detail panel on the right half of the workspace.
3. Click the Script tab to display the script workspace. Type or copy then paste your code.

    ![E02-01-0007-Script-Library-New.png](E02-01-0007-Script-Library-New.png)

    *The Script Library Create Panel*

    > The Script workspace will add lines as you press the Enter key. An auto-complete dropdown will display options when you type code.

4. Click the **Create** button at the top of the panel.

5. To return to the workspace with the initial Script Library details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Create or Switch Versions of a Script {% #Versions %}

When a script has multiple versions, a dropdown list appears at the top left of the right side panel.

To create a new version of a script, make changes to any script and then click the Save button at the top of the right side panel. This creates a new active version. The version will appear in the dropdown list at the top of the right side panel.

To switch to an earlier or new version of a script, click the version dropdown list at the top of the right side panel. Select the version to use. Then click the Save button at the top of the right side panel. Your selected version will appear as the active version of the script.

##Import a Script {% #Import %}

To import a script, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click the **Import Script** button at the top right of the Script Library workspace. This action will display an Import Script popup.
3. In the popup, type a Name for the imported script. Then drag and drop or use your file browser to upload the script.
4. Click the OK button to import the script.

> You also can import a script when creating or editing a script. Click the **Import** button at the top of the right side script panel. Then follow the steps above.

##Export a Script {% #Export %}

To export a script, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click any list item in the Script Library workspace. This action will display a script detail panel on the right half of the workspace.
3. Click the **Export** button at the top of the right side script panel.

##Diff a Script to View Change History {% #Diff %}

It's possible to see the code change history for a script. To view script change history, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click any list item in the Script Library workspace. This action will display a script detail panel on the right half of the workspace.
3. Click the **Diff** button at the top far right edge of the right side script panel. Additions appear with a green background. Deletions appear with a red background.

   ![E02-01-0007-Script-Library-Diff.png](E02-01-0007-Script-Library-Diff.png)

   *The Script Library Diff Panel*

   > The **Diff** button appears only when more than one version of a script exists. You also may need to select a version that is not the current version. Click the Version dropdown list at the top left of the right side panel to select and view versions.

4. To return to the workspace with the initial Script Library details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with script item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Delete a Script {% #Delete %}

To delete a script, follow these steps:

1. Access the Script Library workspace. The default Script Library workspace will appear.
2. In the script list workspace, click any list item in the Script Library workspace. This action will display a script detail panel on the right half of the workspace.
3. Click the **Delete** button at the top of the right side script panel.

## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md)
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md)