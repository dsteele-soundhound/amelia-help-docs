# Scripts & Script Library Management

## Introduction

To use the Scripts workspace, you must understand its features and where to find them. The Scripts workspace manages script libraries used by Script blocks. See the [Script Block topic](B03-04_0120-Script-Block.md) for details about to access scripts from a script library.

## Access the Scripts Workspace

{% include from="B03-04_0401-AddScriptLibrary.md" element-id="B03-04_0401-AddScriptLibrary_snippet" /%}

![B03-04_0401-ScriptLibrary](B03-04_0401-ScriptLibrary.png){width="900" style="block"}

*The Scripts Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Script Library Workspace](#Using).
* [Use the Scripts Panel](#Using2).
* [Add a Folder to organize scripts](#Add).
* [Create a script](#Create).
* [Search for a script](#Search).
* [Edit a script](#Edit).
* [Delete a script](#Delete).
* [Export a script](#Export).
* [Import a script](#Import).

##Using the Script Library Workspace {% #Using %}

The Script Library workspace includes tools to create and manage conversation flows. Hover over a block to display these tools.

![B03-04_0403-ScriptLibraryWorkspace](B03-04_0403-ScriptLibraryWorkspace.png){width="900" style="block"}

*The Script Workspace*

*Script Workspace Elements*


| Element                                                                                                      | Description                                                                                                           |
|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Navigation Buttons                                                                                           |                                                                                                                       |
| ![B03-04-DEB-Btn-Top-Save](B03-04-DEB-Btn-Top-Save.png){width="25" style="inline"}                           | Click to save the script.                                                                                             |
| ![B03-04-DEB-Btn-Top-Redo](B03-04-DEB-Btn-Top-Redo.png){width="25" style="inline"}                           | Click to export the script.                                                                                           |
| ![B03-04-DEB-Btn-Top-Import](B03-04-DEB-Btn-Top-Import.png){width="25" style="inline"}                       | Click to import a script.                                                                                             |
| ![B03-04-DEB-Btn-Top-Version](B03-04-DEB-Btn-Top-Version.png){width="25" style="inline"}                     | Click to view then change to a different version of the script.                                                       |
| ![B03-04_0120-DEB-Script-Syntax-Btn](B03-04_0120-DEB-Script-Syntax-Btn.png){width="25" style="inline"}       | Click to perform a syntax check on the script. Any errors will appear in the console log at the bottom of the editor. |
| ![B03-04_0403-ScriptLibraryBtnSettings](B03-04_0403-ScriptLibraryBtnSettings.png){width="25" style="inline"} | Click to view the Script Settings panel and configure the script library.                                             |
| ![B03-04-DEB-Btn-Right-Messgs](B03-04-DEB-Btn-Right-Messgs.png){width="25" style="inline"}                   | Click to display the Errors and Messages panel.                                                                       |
| Script Settings Panel                                                                                        |                                                                                                                       |
| Name                                                                                                         | Type a unique descriptive name for the script.                                                                        |
| Imported Script Libraries                                                                                    | Click the dropdown list to display then import any script libraries to be referenced in the script.                   |


##Using the Scripts Panel {% #Using2 %}

This panel appears between the left edge navigation links and the Builder workspace. The panel displays a tree structure of folders and scripts.

To toggle open the Scripts panel, click the Conversation Flows icon link on the left edge navigation links. Then click the Scripts link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Scripts panel.

![B03-04_0403-Scripts-Panel](B03-04_0403-Scripts-Panel.png){width="400" style="block"}

*The Scripts Panel*

##Add a Folder to organize scripts {% #Add %}

To create, edit, or delete folders, in the Scripts panel, hover over a folder to display icons and then select options.

##Create a script {% #Create %}

To add a script, in the Scripts panel, hover over a folder to display icons and then select the Create new script option.

##Search for a script {% #Search %}

To search for a script, click the Search here field at the top of the Scripts panel and type a partial or complete script name.

##Edit a script {% #Edit %}

To edit a script, in the Scripts panel, hover over a script name. Then click the script name to open a tab workspace.

##Delete a script {% #Delete %}

To delete a script, in the Scripts panel, hover over a script to display the Delete ( ![B03-04-DEB-Btn-Block-Delete](B03-04-DEB-Btn-Block-Delete.png){width="25" style="inline"}) icon and then select the icon.

##Export a script {% #Export %}

To export a script, in an active script tab workspace, click the Export ( ![Export-Btn-Script_Toolbar](Export-Btn-Script_Toolbar.png){width="25" style="inline"}) arrow icon at the top left of the workspace. The script file will be downloaded to your computer.

##Import a script {% #Import %}

To import a script, in an active script tab workspace, click the Import ( ![Import-Btn-Script_Toolbar](Import-Btn-Script_Toolbar.png){width="25" style="inline"}) arrow icon at the top left of the workspace. A file browser popup will display. Navigate to a script file and then select to import the file..

## Best Practices

Follow these best practices to make using script libraries easier to use.

* Have a folder structure, which groups together scripts in a logical way. For example, if a set of scripts are all related to authentication, group them in an authentication folder.
* Script library names should describe what that set of functions is designed to do. For example, **auth** may indicate a library has authentication scripts. However, a library with the name **authO365Functions** clearly indicates it contains functions to manage authentication for O365.
* Functions inside of each script library should follow coding best practices.
* Function names should describe their purpose. For example, **resetPassword()** is better than **myFunction()**.
* Limit each function to perform a single task.
* Once work on a set of scripts is ready or updated, export your code to a repository. For example, push your code into Github, Bitbucket, or other code repository of your choice.

## More Resources

For more information, see:

* [Scripts Introduction](B03-04_0401-Scripts-Intro.md)
* [Script Block](B03-04_0120-Script-Block.md)
* [Service Handles](B03-04_0421-Service-Handles-Library.md)
* [Connection Services Handles](B03-04_0470-Connect-Service-Handles-Library.md)
* [Script Sandboxing and Whitelists](B03-04_0404-Script-Sandboxing-and-Whitelist.md)
