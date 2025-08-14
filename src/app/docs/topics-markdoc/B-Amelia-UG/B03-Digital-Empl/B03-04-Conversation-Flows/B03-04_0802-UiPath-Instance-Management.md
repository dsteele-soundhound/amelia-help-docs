# UiPath Configuration Management

## Introduction

To use the UiPath Configuration workspace, you must understand its features. You can add, edit, or delete a UiPath configuration. Then use these configurations in a BPN process of DEB flow. The Backend block can connect to any UiPath configuration that you create.

The UiPath Orchestrator application provides attended and unattended execution of robots that perform tasks. Refer to their [Orchestrator Automation Cloud User Guide](https://docs.uipath.com/orchestrator/automation-cloud/latest/user-guide/introduction) for complete details.

To connect UiPath Orchestrator applications with Amelia, create an external application, set the scope and resource type, and then copy the App ID and App Secret for use by Amelia.

This topic describes the UiPath Configuration workspace, its features and where to find them.

## Access the UiPath Configuration Workspace

{% include from="B03-04_0801-UiPath-Access.md" element-id="B03-04_0801-UiPath-Access_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [Using the UiPath Configuration workspace](#UsingWorkspace).
* [Using the UiPath Configuration panel](#UsingPanel).
* [Adding a UiPath configuration](#Adding).
* [Editing a UiPath configuration](#Editing).
* [Deleting a UiPath configuration](#Deleting).

##Using the UiPath Configuration Workspace {% #UsingWorkspace %}

The UiPath Configuration workspace includes tools to create and manage tabular data files.

*The UiPath Configuration Workspace Elements*

| Element           | Description                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| Top Panel Buttons |
| Save              | Click to save the UiPath configuration.                                          |
| Delete            | Appears once a configuration is saved. Click to delete the UiPath configuration. |


##Using the UiPath Configuration Panel {% #UsingPanel %}

This panel appears between the left edge navigation links and the Builder workspace. The panel displays a list of UiPath configurations.

To toggle open the UiPath Configuration panel, click the Conversation Flows icon link on the left edge navigation links. Then click the UiPath Configuration link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the UiPath Configuration panel.

![B03-04_0801-UiPath-Panel](B03-04_0801-UiPath-Panel.png){width="400" style="block"}

*The UiPath Configuration Panel*

*The UiPath Configuration Panel Elements*

| Element                                                                                    | Description                                                                  |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| + Create New                                                                               | Click to display a new UiPath configuration workspace.                       |
| ![Delete-Btn-DEB_Properties.png](Delete-Btn-DEB_Properties.png){width="40" style="inline"} | Hover over an entry to display, then click to delete a UiPath configuration. |

##Add a UiPath Configuration {% #Adding %}

To add a new UiPath configuration:

1. Click the + Create New button in the UiPath Configuration panel between the left panel navigation and the Digital Employees Home tab workspace.
   
   If the panel isn't displayed, click the Conversation Flows icon link on the left edge then click the UiPath Configuration link that appears. A New UiPath Configuration tab workspace appears.

   ![B03-04_0801-UiPath-Workspace](B03-04_0801-UiPath-Workspace.png){width="600" style="block"}

   *A New UiPath Configuration Workspace*

2. Type a unique name in the Name field. Then complete the other fields.

   *Data in New UiPath Configuration Workspace*

   *New UiPath Workspace Fields*

   | Fields            | Description                                                                                                                                                                                                                                                                                                                                                                                          |
    |-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Name              | Type a unique name for this configuration.                                                                                                                                                                                                                                                                                                                                                           |
   | URL               | Type or copy/paste the UiPath URL path.                                                                                                                                                                                                                                                                                                                                                              |
   | Is On-Prem        | Click to select Specifies if cloud or on-prem UiPath Orchestrator app should be used. No is the default.                                                                                                                                                                                                                                                                                             |
   | Client ID         | The client ID or App ID of the app created in the UiPath Orchestrator tenant.                                                                                                                                                                                                                                                                                                                        |
   | Client Secret     | The client secret or app secret of the app created in the UiPath Orchestrator tenant.                                                                                                                                                                                                                                                                                                                |
   | Callback Hostname | This URL is the callback endpoint for Amelia that enables communication of data and results after bot execution. This URL endpoint will be used when the callback is enabled in the UiPath bot when starting a job. Do not include http, https, or other URL elements.<br/>For example, yoursubdomain.amelia.com where yoursubdomain name is a client name or other name arranged with Amelia staff. |
   | Execution Group   | If appropriate, the name of the Execution Group to assign to this UiPath configuration.                                                                                                                                                                                                                                                                                                              |

3. Click the Save button to process and save your UiPath configuration.

##Editing a UiPath Configuration {% #Editing %}

To edit a new UiPath configuration:

1. Click an entry in the UiPath Configuration panel between the left panel navigation and the Digital Employees Home tab workspace. The configuration tab workspace will display.

   If the panel isn't displayed, click the Conversation Flows icon link on the left edge then click the UiPath Configuration link that appears. A New UiPath Configuration tab workspace appears.
2. Make any changes to the UiPath configuration.
3. Click the Save button to save your UiPath configuration.

##Deleting a UiPath Configuration {% #Deleting %}

To delete a new UiPath configuration:

1. Hover over an entry in the UiPath Configuration panel between the left panel navigation and the Digital Employees Home tab workspace. The configuration tab workspace will display.

   If the panel isn't displayed, click the Conversation Flows icon link on the left edge then click the UiPath Configuration link that appears. A New UiPath Configuration tab workspace appears.
2. Click the ![Delete-Btn-DEB_Properties.png](Delete-Btn-DEB_Properties.png){width="30" style="inline"} button that displays.

> Alternately, you can click an entry to display a UiPath configuration tab workspace. Then click the Delete button at the top of the workspace.


## More Resources

{% include from="B03-04_0801-MoreResources.md" element-id="B03-04_0801-MoreResources_snippet" /%}

