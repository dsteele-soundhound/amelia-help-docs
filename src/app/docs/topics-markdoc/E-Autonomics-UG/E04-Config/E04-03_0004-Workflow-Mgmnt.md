# Workflows Management

## Introduction

To use Workflows to route tasks, you must understand their features and how to configure them. This topic describes how to use workflows.

See the [Introduction topic](E04-03_0002-Workflow-Mod-Intro.md) for a high-level introduction to workflows.

## Access the Workflows Workspace

{% include from="E01-03_0002-WorkflowsAccess.md" element-id="E01-03_0002-WorkflowsAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Workflows workspace](#The).
* [Adding Workflows](#Add).
* [Organize Workflows in folders](#Organize).
* [Searching for Workflows](#Search).
* [Editing Workflows](#Edit).
* [Deleting Workflows](#Delete).
* [Exporting Workflows](#Export).
* [Importing Workflows](#Import).
* [Publishing or Unpublishing Workflows](#Publish).
* [Assigning Workflows](#Assignin).
* [Add or Edit Variables in Workflows](#Add2).
* [Add or Edit Cascades in Workflows](#Add3).

## The Workflows Workspaces {% #The %}

The Workflows feature includes several workspaces:

* A default workspace that lists all available workflows with tools to search, create, and export individual workflows.
* A right side panel that displays details about a specific workflow.
* A full screen editing workspace to create and configure workflows. This includes tools to import workflows, define variables, and perform other tasks.

<chapter title="The Workflows Default List Workspace" collapsible="true" level="5">
The first workspace you'll see is the list of workflows. These are filtered by client and by any search terms. This includes tools to create new workflows and create folders to organize workflows.

![E01-03_0002-Workflows-List](E01-03_0002-Workflows-List.png){width="900"}

*The Workflows List Workspace*

*Workflows List Workspace Elements*

|      Element       |                                                          Description                                                           |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| New Folder         | Click to create a new folder to organize workflows.                                                                            |
| + / + New Workflow | Click the + New Workflow button or the + button to open a new tab workspace. The + button appears if the right panel displays. |
| Search             | Click then type a search term to filter workflows by Name. This feature is case sensitive.                                     |

</chapter> 

<chapter title="The Workflows Panel" collapsible="true" level="5">
When you select a workflow in the Workflows list workspace, details about the workflow displays in a right side panel.

![E01-03_0002-Workflows-Detail](E01-03_0002-Workflows-Detail.png){width="900"}

*The Workflows Panel*

*Workflows Panel Elements*

|         Element         |                                                                     Description                                                                     |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Buttons**                                                                                                                                                                  ||
| Publish / Unpublish All | Click the Publish button to publish a workflow. If the workflow is published, click the Unpublish All button to unpublish the workflow.             |
| Edit                    | Click the Edit button to display a new tab workspace. The workspace includes the workflow plus tools to configure it.                               |
| Export                  | Click the Export button to download the workflow in XML format.                                                                                     |
| Delete                  | Click the Delete button to delete a workflow.                                                                                                       |
| **Tabs**                                                                                                                                                                     ||
| Preview Tab             | Click the Preview tab to display the workflow. You can zoom in with the + and - tools at the bottom right. Or scroll your mouse to zoom in and out. |
| Variables Tab           | Click the Variables tab to display details about any variables configured for the workflow.                                                         |

</chapter> 

<chapter title="New and Edit Workflows Workspace" collapsible="true" level="5">
Creating and editing workflows uses the same workspace and tools. Only the context is different. A new workspace doesn't include a dropdown list of versions, for example.

Several keyboard commands work in the workflow workspace. Ctrl+Z reverses prior steps. Ctrl+C copies a selected action. And Ctrl+V pastes a copied action.

### The Workspace Properties Panel

Clicking the **+New Workflow** button in the default workspace opens a new tab workspace. This dedicated Edit workspace lets you create and update workflows. There's also lots of tools to configure workflows. And you can import, save, define variables, and additional tasks.

When creating a workflow, the first step is to configure the Properties panel. If the workflow Properties panel is closed, click the Properties (![Workflows-Btn-PropsOpen](Workflows-Btn-PropsOpen.png){width="25" style="inline"}) icon to open the right side panel. Click the Close Properties (![Workflows-Btn-PropsClose](Workflows-Btn-PropsClose.png){width="25" style="inline"}) icon to close this right side panel.

See the next section for descriptions of the tools outside of the Property panel.

![E01-03_0002-Workflows-New](E01-03_0002-Workflows-New.png){width="900"}

*The Workflows Workspace Property Panel*

*Workflows Workspace Property Panel Elements*


|        Element        |                                                                                             Description                                                                                              |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Core Tab**                                                                                                                                                                                                                ||
| Client                | This field is pre-selected from the default Workflows workspace. Do not change the client from the Edit workspace. You will lose your work and return to the default workspace that lists workflows. |
| Name                  | Type a unique name for the workflow.                                                                                                                                                                 |
| Task Type             | Select the type of task the workflow completes. * Event * Incident * Service Request * Problem * Change * Lookup                                                                                     |
| Description           | Type a description for the workflow.                                                                                                                                                                 |
| Tags                  | Type any tags useful to organize and find the workflow.                                                                                                                                              |
| Hide Details in Task  | Toggle hiding or not hiding task details in the Tasks workspace. Default is No.                                                                                                                      |
| **VariablesTab**                                                                                                                                                                                                            ||
| + Create New Variable | Click this button to display a Variables popup. Then configure variables to be used in this workflow.                                                                                                |
| **Variables Popup**                                                                                                                                                                                                         ||
| Name                  | Type a name for the variable. For example, automatonVersionId.                                                                                                                                       |
| Label                 | Type a label that briefly describes the variable. For example, Automation Version ID.                                                                                                                |
| Type                  | Select the type of variable. * String * Boolean * Long * Double * Date                                                                                                                               |
| Value                 | Depending on the Type selected, choose a default value for the variable.                                                                                                                             |
| Settings              | As appropriate, select one or more settings. * Hidden * Writable * Required                                                                                                                          |
| **Cascades Tab**                                                                                                                                                                                                            ||
| + Add New Cascade     | Click this button to display a Cascades popup. Select an existing cascade. Or search to filter the list of cascades.                                                                                 |
| **Notes Tab**                                                                                                                                                                                                               ||
| Notes Editor          | As appropriate, type any notes in the text editor. The editor includes line numbers.                                                                                                                 |

### New and Edit Workflow Workspace

Creating or editing a workflow uses a full screen editing workspace. The table below describes these tools.

![E01-03_0002-Workflows-Edit](E01-03_0002-Workflows-Edit.png){width="900"}

*The Workflows Edit Workspace*

*The Workflows Edit Workspace Elements*

| Element                                                                                                          | Description                                                                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Version List                                                                                                     | If the workflow has more than one version, click the dropdown list at the top left of the workspace. Then select the version to display and modify.                                                                          |
| Publish / Unpublish All                                                                                          | Click the Publish button to publish a workflow. If the workflow is published, click the Unpublish All button to unpublish the workflow.                                                                                      |
| **Workflow ManagementTools** Located at the top left of a workflow workspace.                                    |                                                                                                                                                                                                                              |
| ![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}                                         | Click to save the current state of the workflow.                                                                                                                                                                             |
| ![Workflows-Btn-Import](Workflows-Btn-Import.png){width="25" style="inline"}                                     | Click to import a workflow XML file.                                                                                                                                                                                         |
| ![Workflows-Btn-Export](Workflows-Btn-Export.png){width="25" style="inline"}                                     | Click to export the workflow as an XML file. Does not display until a workflow is saved.                                                                                                                                     |
| ![Workflows-Btn-Undo](Workflows-Btn-Undo.png){width="25" style="inline"}                                         | Click to undo the prior change.                                                                                                                                                                                              |
| ![Workflows-Btn-Redo](Workflows-Btn-Redo.png){width="25" style="inline"}                                         | Click to redo the prior change.                                                                                                                                                                                              |
| ![Workflows-Btn-Cut](Workflows-Btn-Cut.png){width="25" style="inline"}                                           | Click to cut the selected workflow action(s).                                                                                                                                                                                |
| ![Workflows-Btn-Copy](Workflows-Btn-Copy.png){width="25" style="inline"}                                         | Click to copy the selected workflow action(s).                                                                                                                                                                               |
| ![Workflows-Btn-Paste](Workflows-Btn-Paste.png){width="25" style="inline"}                                       | Click to paste the selected workflow action(s).                                                                                                                                                                              |
| ![Workflows-Btn-Delete](Workflows-Btn-Delete.png){width="25" style="inline"}                                     | Click to delete the selected workflow action(s).                                                                                                                                                                             |
| **Actions Toolbar Panel** Located on left edge of a workflow workspace.                                          |                                                                                                                                                                                                                              |
| ![Workflows-Btn-Actions-Lasso](Workflows-Btn-Actions-Lasso.png){width="25" style="inline"}                       | Click to active the Lasso tool. Then drag the lasso on the workspace to select one or more actions.                                                                                                                          |
| ![Workflows-Btn-Actions-GlobalConnect](Workflows-Btn-Actions-GlobalConnect.png){width="25" style="inline"}       | Click to activate the Connect tool. Then click an action to begin. Click a second action to connect the two actions.                                                                                                         |
| ![Workflows-Btn-Actions-Start](Workflows-Btn-Actions-Noop.png){width="25" style="inline"}                       | Click to add a Start action in a workflow.                                                                                                                                                                                   |
| ![Workflows-Btn-Actions-End](Workflows-Btn-Actions-End.png){width="25" style="inline"}                           | Click to add an End action in a workflow.                                                                                                                                                                                    |
| ![Workflows-Btn-Actions-ExcGateway](Workflows-Btn-Actions-ExcGateway.png){width="25" style="inline"}             | Click to add an Exclusive gateway action in a workflow.                                                                                                                                                                      |
| ![Workflows-Btn-Actions-SubProcess](Workflows-Btn-Actions-SubProcess.png){width="25" style="inline"}             | Click to add a Sub Process action in a workflow. Then click other actions and drag them into the subprocess.                                                                                                                 |
| ![Workflows-Btn-Actions-Timer](Workflows-Btn-Actions-Timer.png){width="25" style="inline"}                       | Click to add a Timer Boundary Event action to an existing action. Drag then drop this action on to an existing action in a workflow. Then set the timer properties to define when to move to the next action in the process. |
| ![Workflows-Btn-Actions-Error](Workflows-Btn-Actions-Error.png){width="25" style="inline"}                       | Click to add an Error Boundary Event action to an existing action. Drag then drop this action on to an existing action in a workflow. Then set the error properties to define how to handle errors generated by the action.  |
| ![Workflows-Btn-Actions-EditVar](Workflows-Btn-Actions-EditVar.png){width="25" style="inline"}                   | Click to add an Edit Variable action to a workflow.                                                                                                                                                                          |
| ![Workflows-Btn-Actions-ExecuteAuto](Workflows-Btn-Actions-ExecuteAuto.png){width="25" style="inline"}           | Click to add an Execute Automaton action to a workflow.                                                                                                                                                                      |
| ![Workflows-Btn-Actions-Dispatch](Workflows-Btn-Actions-Dispatch.png){width="25" style="inline"}                 | Click to add a Dispatch action to a workflow.                                                                                                                                                                                |
| ![Workflows-Btn-Actions-ExecuteScript](Workflows-Btn-Actions-ExecuteScript.png){width="25" style="inline"}       | Click to add an Execute Script action to a workflow.                                                                                                                                                                         |
| ![Workflows-Btn-Actions-AssignTo](Workflows-Btn-Actions-AssignTo.png){width="25" style="inline"}                 | Click to add an Assign To action in a workflow.                                                                                                                                                                              |
| ![Workflows-Btn-Actions-SendEmail](Workflows-Btn-Actions-SendEmail.png){width="25" style="inline"}               | Click to add a Send Email action to a workflow.                                                                                                                                                                              |
| ![Workflows-Btn-Actions-UpdTask](Workflows-Btn-Actions-UpdTask.png){width="25" style="inline"}                   | Click to add an Update Task action to a workflow.                                                                                                                                                                            |
| ![Workflows-Btn-Actions-ChangeStatus](Workflows-Btn-Actions-ChangeStatus.png){width="25" style="inline"}         | Click to add a Change Status action to a workflow.                                                                                                                                                                           |
| ![Workflows-Btn-Actions-Workflow](Workflows-Btn-Actions-Workflow.png){width="25" style="inline"}                 | Click to add a Workflow action to a workflow.                                                                                                                                                                                |
| ![Workflows-Btn-Actions-ReqDecision](Workflows-Btn-Actions-ReqDecision.png){width="25" style="inline"}           | Click to add a Request Action action to a workflow.                                                                                                                                                                          |
| ![Workflows-Btn-Actions-ManualTask](Workflows-Btn-Actions-ManualTask.png){width="25" style="inline"}             | Click to add a Manual Task to a workflow.                                                                                                                                                                                    |
| ![Workflows-Btn-Actions-UpdAutoApprove](Workflows-Btn-Actions-UpdAutoApprove.png){width="25" style="inline"}     | Click to add an Update Automation Approval action to a workflow.                                                                                                                                                             |
| ![Workflows-Btn-Actions-AmeliaEscalation](Workflows-Btn-Actions-AmeliaEscalation.png){width="25" style="inline"} | Click to add an Amelia Escalation action to a workflow.                                                                                                                                                                      |
| ![Workflows-Btn-Actions-SendHyperaMsg](Workflows-Btn-Actions-SendHyperaMsg.png){width="25" style="inline"}       | Click to add a Send Hypera Message action to a workflow.                                                                                                                                                                     |
| **Action Block Tools** Displays above a selected action block.                                                   |                                                                                                                                                                                                                              |
| ![Workflows-Btn-Actions-ActionConnect](Workflows-Btn-Actions-ActionConnect.png){width="25" style="inline"}       | Click to activate the Connect tool from the selected action. Then click a second action to connect both actions in the workflow.                                                                                             |
| ![Workflows-Btn-Actions-ActionCopy](Workflows-Btn-Actions-ActionCopy.png){width="25" style="inline"}             | Click to copy a selected action. Then type Ctrl+V to paste the action into the workflow. Drag the copied action to a spot in the workflow.                                                                                   |
| ![Workflows-Btn-Actions-ActionDelete](Workflows-Btn-Actions-ActionDelete.png){width="25" style="inline"}         | Click to delete the selected action.                                                                                                                                                                                         |
| ![Workflows-Btn-Actions-ActionProps](Workflows-Btn-Actions-ActionProps.png){width="25" style="inline"}           | Click to display then configure properties for the selected action.                                                                                                                                                          |
| **Workflow Navigation Tools** Located at the top right of a workflow workspace.                                  |                                                                                                                                                                                                                              |
| ![Workflows-Btn-ZoomIn](Workflows-Btn-ZoomIn.png){width="25" style="inline"}                                     | Click to Zoom In to part of a workflow.                                                                                                                                                                                      |
| ![Workflows-Btn-ZoomReset](Workflows-Btn-ZoomReset.png){width="25" style="inline"}                               | Click to Reset Zoom level for the workflow.                                                                                                                                                                                  |
| ![Workflows-Btn-ZoomOut](Workflows-Btn-ZoomOut.png){width="25" style="inline"}                                   | Click to Zoom Out from part of a workflow.                                                                                                                                                                                   |
| ![Workflows-Btn-PropsOpen](Workflows-Btn-PropsOpen.png){width="25" style="inline"}                               | If the workflow Properties panel is closed, click to open the right side panel.                                                                                                                                              |
| ![Workflows-Btn-PropsClose](Workflows-Btn-PropsClose.png){width="25" style="inline"}                             | If the workflow Properties panel is open, click to close the right side panel.                                                                                                                                               |

</chapter>

##Add Workflows {% #Add %}

To add Workflows:

1. At the top right of the Workflows workspace, click the **+ New Workflow** button or the **+** button. A New Workflow tab opens.
2. Use the Actions panel, Property panel, and other workflow tools to create a flow.
3. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon to save the new workflow.

##Organize Workflows in Folders {% #Organize %}

To organize Workflows in folders:

1. At the top right of the Workflows workspace, click the **New Folder** button. A Create New Folder popup displays.
2. Type a folder name in the Name field in the Create New Folder popup.
3. Click the Create button in the popup to save the new folder.

##Search for Workflows {% #Search %}

To search for Workflows:

1. At the top right of the Workflows workspace, click the **Search** field.
2. Type a partial or complete workflow name in the search field. Search is case sensitive.
3. From the search results list, click a workflow to display it in the right side panel.

##Edit Workflows {% #Edit %}

To edit Workflows:

1. In the Workflows workspace, scroll down the list of workflows or use the search field.
2. Once you find the workflow to edit, click the workflow name. The right side panel displays.
3. Click the Edit button in the right side panel. The Edit workflow tab workspace displays.
4. In the Edit workflow workspace, use the Actions panel, Property panel, and other workflow tools to edit a flow.
5. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon to save the workflow.

##Delete Workflows {% #Delete %}

To delete Workflows:

1. In the Workflows workspace, scroll down the list of workflows or use the search field.
2. Once you find the workflow to delete, click the workflow name. The right side panel displays.
3. Click the Delete button in the right side panel.

##Export Workflows {% #Export %}

To export Workflows:

1. In the Workflows workspace, scroll down the list of workflows or use the search field.
2. Once you find the workflow to export, click the workflow name. The right side panel displays.
3. Click the **Export** button in the right side panel. The XML file will be saved locally.

##Import Workflows {% #Import %}

To import Workflows:

1. At the top right of the Workflows workspace, click the **+ New Workflow** button or the **+** button. A New Workflow tab opens.
2. Click the Import (![Workflows-Btn-Import](Workflows-Btn-Import.png){width="25" style="inline"}) icon at the top left of the New Workflow workspace. Then navigate to the XML file on your local computer.
3. If needed, use the Actions panel, Property panel, and other workflow tools to modify the imported flow.
4. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon to save the new workflow.

##Publish or Unpublish Workflows {% #Publish %}

To publish or unpublish Workflows:

1. In the Workflows workspace, scroll down the list of workflows or use the search field.
2. Once you find the workflow to publish or unpublish, click the workflow name. The right side panel displays.
3. Click the Publish button in the right side panel. Or the Unpublish button if the workflow is published currently.

##Assigning Workflows {% #Assignin %}

In most cases, the root workflow assigns and uses a workflow based on the Task Type for a task.

To display the workflow for a task, click a task in the Inbox workspace to display the right panel. Then click the Workflow tab to display the assigned workflow for the task.

To manually assign a workflow to a task:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**. A flyout menu appears.
3. In the flyout menu, click the Tasks link. The tasks Inbox workspace displays.
4. Click the + New Task button. The Create Task popup displays.
5. In the Create Task popup, click the Workflow Definition field to display available workflows. Select the workflow to assign to the new task.

![E01-03_0002-Workflows-Assign](E01-03_0002-Workflows-Assign.png){width="400"}

*The Workflow Definition Field in Create Task Popup*

##Add or Edit Variables in Workflows {% #Add2 %}

To add or edit a variable for use in a workflow:

1. In the New or Edit workflow workspace, click the Properties (![Workflows-Btn-PropsOpen](Workflows-Btn-PropsOpen.png){width="25" style="inline"}) icon to display the workflow Properties. It's located at the top right of the workspace.
2. Click the Variables tab in the Properties panel.
3. Click the +Create New Variable button to display the Create New Variable popup. Configure the variable.
4. Click the Create button in the popup to save the variable definition.
5. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon to save the workflow. It's located at the top left of the workspace.

![E01-03_0002-Workflows-Create-Variable](E01-03_0002-Workflows-Create-Variable.png){width="400"}

*The Create New Variable Popup*

*Create New Variable Popup Elements*

|        Element        |                                              Description                                              |
|-----------------------|-------------------------------------------------------------------------------------------------------|
| + Create New Variable | Click this button to display a Variables popup. Then configure variables to be used in this workflow. |
| **Variables Popup**                                                                                                          ||
| Name                  | Type a name for the variable. For example, automatonVersionId.                                        |
| Label                 | Type a label that briefly describes the variable. For example, Automation Version ID.                 |
| Type                  | Select the type of variable. * String * Boolean * Long * Double * Date                                |
| Value                 | Depending on the Type selected, choose a default value for the variable.                              |
| Settings              | As appropriate, select one or more settings. * Hidden * Writable * Required                           |

##Add or Edit Cascades in Workflows {% #Add3 %}

Workflows also can take advantage of cascades. In AIOps, cascades let you define fields and values that appear on tickets. A Problem Source field might have Network, Software, and Database as values. Assigning a cascade to a workflow adds one or more fields and values to any ticket that uses the workflow.

Linking cascades to a workflow also creates variables. For example, variables to store whether a problem source is hardware, software, or a database. You can use these variables to create routes in the workflow process.

Create and manage cascades with the Configuration main menu. Then hover over the Workflows link to display and select the Cascades link.

To add or edit a cascade for a workflow:

1. In the New or Edit workflow workspace, click the Properties (![Workflows-Btn-PropsOpen](Workflows-Btn-PropsOpen.png){width="25" style="inline"}) icon to display the workflow Properties. It's located at the top right of the workspace.
2. Click the Cascades tab in the Properties panel.
3. Click the +Add New Cascade button to display the Cascades popup. Click the cascade to include in the workflow. To deselect a cascade, click the check mark to the right of a cascade entry.
4. Click the Select button in the popup to save the variable definition.
5. Click the Save (![Workflows-Btn-Save](Workflows-Btn-Save.png){width="25" style="inline"}) icon to save the workflow. It's located at the top left of the workspace.

![E01-03_0002-Workflows-Create-Cascade](E01-03_0002-Workflows-Create-Cascade.png){width="400"}

*The Cascades Popup*

## More Resources

{% include from="E04-03_0002-WorkflowsMoreInfo.md" element-id="E04-03_0002-WorkflowsMoreInfo_snippet" /%}