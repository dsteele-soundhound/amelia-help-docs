# Tasks Management

## Introduction

To use the task workspace effectively, you must understand its features and tools and where to find them. Tasks use the workspace to create, manage, and update tasks.

Our [Task Workspace Introduction](E01-01_0002-Tasks-Module-Intro.md) topic describes many of these features. The [Tasks Module Walkthrough](E01-01_0003-Tasks-Mod-Walk.md) topic describes the Tasks workspace in more detail. And the [Tasks Settings Walkthrough](E01-01_0005-Settings-Mod-Walk.md) topic describe how to configure generative AI settings for tasks.

## Accessing the Tasks workspace

{% include from="E01-01_0002-Tasks-Modules-Access.md" element-id="E01-01_0002-Tasks-Modules-Access_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Tasks module workspaces](#The).
* [Creating, cloning, and managing tasks](#Create).
* [Creating and managing task workspace views](#Manage).
* Resolve with AI features.

##The Tasks Workspace {% #The %}

A Tasks list workspace displays all tasks. You can filter the list of tasks using a detailed search panel. When you click on a task listed in the workspace, its details appear in a panel on the right side of the list workspace. This lets you move quickly between tasks.

The [Tasks Module Walkthrough](E01-01_0003-Tasks-Mod-Walk.md) topic describes the Tasks workspace in more detail.

### List Workspace

The default Tasks workspace lists all available tasks. It includes their current status and tools to manage tasks. You also can use this workspace to create and configure custom workspaces. For example, to view only P1 tasks for a specific team.

### Tasks Filter Panel

In the default Tasks workspace, use the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} gear icon to display a filter panel. You can filter tasks by client or priority. The filter panel has many options to sort tasks. To save a filter as a new workspace, click the Save button at the bottom right of the panel.

### Task Panel

Once you click a ticket in the Tasks list workspace, its detail page will display on the right half of the screen.

The panel provides a number of options that you can use to resolve the task. The panel displays task history plus the workflow and automations used by the task. You also can use generative AI to resolve and automate tasks, as well as generate a root cause analysis.

##Create and Manage Tasks {% #Create %}

You can create and manage tasks by clicking a task listed in the main Tasks workspace.

<chapter title="Create a New Task" collapsible="true" level="5">
To create a new task:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Operation**.
3. Click the +New Task button at the top right of the workspace listing available tasks.
4. Configure the Create Task popup.
5. Click **Save** to create the task and close the popup. Or click **Cancel** to return to the Tasks workspace.

![E01-01_0003-Tasks-Module-Create](E01-01_0003-Tasks-Module-Create.png){width="600"}

*The Create Task Popup*

*Create Task Popup Elements*

|                                                    Element                                                    |           Default           |                                                                                                                                                                                                                                              Description                                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client                                                                                                        | Autonomics | The client is automatically set based on your login credentials.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Assignment Group                                                                                              |                             | Select the appropriate group responsible for handling this task. The Assignment Group is typically used to categorize tasks by team or department. This helps to ensure that tasks are routed to the correct group for efficient handling.                                                                                                                                                                                                                                                             |
| Owner                                                                                                         |                             | Choose a user to assign as the task owner if applicable. Or click the Assign to Me button to set yourself as the owner.                                                                                                                                                                                                                                                                                                                                                                                |
| Requester                                                                                                     |                             | This field is pre-filled with your user information. Select a different requester if needed.                                                                                                                                                                                                                                                                                                                                                                                                           |
| Subject                                                                                                       |                             | Type a brief, descriptive subject for the task to clarify its purpose.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ETA                                                                                                           | 15                          | Choose from Minutes, Hours, or Date options. Enter the estimated time required to complete the task according to the selected unit.                                                                                                                                                                                                                                                                                                                                                                    |
| Priority                                                                                                      | Normal (P3)                 | By default, the priority is set to Normal (P3). Other available options are Urgent (P1), High (P2), Low (P4), and Other. Select the appropriate level of urgency.                                                                                                                                                                                                                                                                                                                                      |
| Task Type                                                                                                     | Incident                    | The default type is Incident. Other options include Event, Service Request, Problem, Change, and Lookup Request. Choose the option that best matches the task purpose.                                                                                                                                                                                                                                                                                                                                 |
| Workflow Definitions                                                                                          |                             | Select a system workflow or a custom workflow created with IPworkflow, if applicable. Choosing certain workflows may display additional fields that need to be configured based on the specific workflow requirements.                                                                                                                                                                                                                                                                                 |
| Note                                                                                                          |                             | Enter a detailed description of the task, providing relevant information or context.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Tags                                                                                                          |                             | Type any relevant tags to help categorize or identify the task for easy reference.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CIs                                                                                                           |                             | Select any relevant Configuration Items (CIs) associated with this task.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| CCs                                                                                                           |                             | Enter email addresses of individuals who should receive a copy of the task notification upon creation.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Admin CCs                                                                                                     |                             | Enter email addresses of groups who should receive a copy of the task notification upon creation.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Attachments                                                                                                   |                             | Attach files by either dragging and dropping them or browsing to upload. You may add one or more files as needed. When attaching files to radar tickets via the Radar UI or API, each attachment can be up to 35MB. For files uploaded via the Hypera endpoint, the attachment limit is 15MB per file. If you need to increase this limit, please contact product support. Note that the total request size for all attachments within a single request via Hypera is also limited to 15MB by default. |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                             | Closes the Create Task popup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
</chapter>

<chapter title="Edit a Task" collapsible="true" level="5">
To edit a task:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Locate the task you want to edit. Search or click a task in the task list.
4. In the Tasks detail panel, click the **Edit** button at the top right.
5. Configure the Edit Task popup.
6. Click **Save** to save the task and close the popup. Or click **Cancel** to return to the Tasks workspace.

![E01-01_0003-Tasks-Module-Edit](E01-01_0003-Tasks-Module-Edit.png){width="600"}

*The Edit Task Popup*

*Edit Task Popup Elements*

|                                                    Element                                                    |           Default           |                                                                                                                Description                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client                                                                                                        | Autonomics | The client is automatically set based on your login credentials.                                                                                                                                                                           |
| Assignment Group                                                                                              |                             | Select the appropriate group responsible for handling this task. The Assignment Group is typically used to categorize tasks by team or department. This helps to ensure that tasks are routed to the correct group for efficient handling. |
| Owner                                                                                                         |                             | Choose a user to assign as the task owner if applicable. Or click the Assign to Me button to set yourself as the owner.                                                                                                                    |
| Requester                                                                                                     |                             | This field is pre-filled with your user information. Select a different requester if needed.                                                                                                                                               |
| Subject                                                                                                       |                             | Type a brief, descriptive subject for the task to clarify its purpose.                                                                                                                                                                     |
| ETA                                                                                                           | 15                          | Choose from Minutes, Hours, or Date options. Enter the estimated time required to complete the task according to the selected unit.                                                                                                        |
| Priority                                                                                                      | Normal (P3)                 | By default, the priority is set to Normal (P3). Other available options are Urgent (P1), High (P2), Low (P4), and Other. Select the appropriate level of urgency.                                                                          |
| External ITSM Name                                                                                            |                             | The external name of an ITSM resource.                                                                                                                                                                                                     |
| External Event ID                                                                                             |                             | The external event ID.                                                                                                                                                                                                                     |
| Auto Approve Automation                                                                                       | No                          | Click Yes to have this automation approved automatically.                                                                                                                                                                                  |
| Readable Ref ID                                                                                               |                             | A human readable reference ID for this task.                                                                                                                                                                                               |
| Reference ID                                                                                                  |                             | The machine readable reference ID for this task.                                                                                                                                                                                           |
| Reference Source                                                                                              |                             | The source of the reference ID.                                                                                                                                                                                                            |
| Note                                                                                                          |                             | Enter a detailed description of the task, providing relevant information or context.                                                                                                                                                       |
| Tags                                                                                                          |                             | Type any relevant tags to help categorize or identify the task for easy reference.                                                                                                                                                         |
| CIs                                                                                                           |                             | Select any relevant Configuration Items (CIs) associated with this task.                                                                                                                                                                   |
| CCs                                                                                                           |                             | Enter email addresses of individuals who should receive a copy of the task notification upon creation.                                                                                                                                     |
| Admin CCs                                                                                                     |                             | Enter email addresses of groups who should receive a copy of the task notification upon creation.                                                                                                                                          |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                             | Closes the Edit Task popup.                                                                                                                                                                                                                |

</chapter> 

<chapter title="Assign a Task" collapsible="true" level="5">
To assign a task:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Locate the task you want to edit. Search or click a task in the task list.
4. In the Tasks detail panel, click the **Assign** button at the top right.
5. Configure the Assign Task popup.
6. Click **Save** to create the task and close the popup. Or click **Cancel** to return to the Tasks workspace.

![E01-01_0003-Tasks-Module-Assign](E01-01_0003-Tasks-Module-Assign.png){width="600"}

*The Assign Task Popup*

*Assign Task Popup Elements*

|                                                    Element                                                    | Default |                                       Description                                        |
|---------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------|
| Owner                                                                                                         | None    | Click to display names and then select a name to own this task.                          |
| Assign to Me                                                                                                  |         | Click to assign the task to yourself.                                                    |
| Note                                                                                                          |         | If appropriate, type a note to be attached to information about the change in ownership. |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |         | Closes the Assign Task popup.                                                            |

</chapter> 

<chapter title="Assign a Workflow to a Task" collapsible="true" level="5">
You can assign a workflow when you create and add a new task. The Workflow Definitions field in the Create Task popup lists all available workflows. If a workflow is not listed, confirm that it exists and is available for assignment to tasks.

> See the Create a New Task link above for details about all the Create Task popup fields.
</chapter> 

<chapter title="Link Tasks" collapsible="true" level="5">
You can link a task to one or more tasks. This helps to organize knowledge and processes. Linking tasks involves searching for tasks and then selecting them.

To link a task to another task:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Locate the task you want to edit by linking tasks. Search or click a task in the task list.
4. In the Tasks detail panel, click the **Linked Task** tab at the top right.
5. Click the +Link Task button that displays in the task panel.
6. Use the Search Tasks panel to find and then select one or more tasks to link.
7. Use the Select Your Item dropdown list to configure the relationship between linked tasks.
8. Click the Link button to the right of the Select Your Item dropdown list. The linked task(s) will appear in the Task panel on your left, under the Linked Tasks heading.

![E01-01_0003-Tasks-Module-Link](E01-01_0003-Tasks-Module-Link.png){width="900"}

*Search for Tasks to Link*

</chapter> 

<chapter title="Clone a Task" collapsible="true" level="5">
To clone a task:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Locate the task you want to clone. Search or click a task in the task list.
4. In the Tasks detail panel, click the **Clone** button at the top left.
5. Configure the Clone Task popup.
6. Click **Save** to clone the task and close the popup. Or click **Cancel** to return to the Tasks workspace.

![E01-01_0003-Tasks-Module-Clone](E01-01_0003-Tasks-Module-Clone.png){width="600"}

*The Clone Task Popup*

*Clone Task Popup Elements*

|                                                    Element                                                    |           Default           |                                                                                                                                                                                                                                              Description                                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client                                                                                                        | Autonomics | The client is automatically set based on your login credentials.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Assignment Group                                                                                              |                             | Select the appropriate group responsible for handling this task. The Assignment Group is typically used to categorize tasks by team or department. This helps to ensure that tasks are routed to the correct group for efficient handling.                                                                                                                                                                                                                                                             |
| Owner                                                                                                         |                             | Choose a user to assign as the task owner if applicable. Or click the Assign to Me button to set yourself as the owner.                                                                                                                                                                                                                                                                                                                                                                                |
| Requester                                                                                                     |                             | This field is pre-filled with your user information. Select a different requester if needed.                                                                                                                                                                                                                                                                                                                                                                                                           |
| Subject                                                                                                       |                             | Type a brief, descriptive subject for the task to clarify its purpose.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ETA                                                                                                           | 15                          | Choose from Minutes, Hours, or Date options. Enter the estimated time required to complete the task according to the selected unit.                                                                                                                                                                                                                                                                                                                                                                    |
| Priority                                                                                                      | Normal (P3)                 | By default, the priority is set to Normal (P3). Other available options are Urgent (P1), High (P2), Low (P4), and Other. Select the appropriate level of urgency.                                                                                                                                                                                                                                                                                                                                      |
| Task Type                                                                                                     | Incident                    | The default type is Incident. Other options include Event, Service Request, Problem, Change, and Lookup Request. Choose the option that best matches the task purpose.                                                                                                                                                                                                                                                                                                                                 |
| Workflow Definitions                                                                                          |                             | Select a system workflow or a custom workflow created with IPworkflow, if applicable. Choosing certain workflows may display additional fields that need to be configured based on the specific workflow requirements.                                                                                                                                                                                                                                                                                 |
| Note                                                                                                          |                             | Enter a detailed description of the task, providing relevant information or context.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Tags                                                                                                          |                             | Type any relevant tags to help categorize or identify the task for easy reference.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CIs                                                                                                           |                             | Select any relevant Configuration Items (CIs) associated with this task.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| CCs                                                                                                           |                             | Enter email addresses of individuals who should receive a copy of the task notification upon creation.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Admin CCs                                                                                                     |                             | Enter email addresses of groups who should receive a copy of the task notification upon creation.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Attachments                                                                                                   |                             | Attach files by either dragging and dropping them or browsing to upload. You may add one or more files as needed. When attaching files to radar tickets via the Radar UI or API, each attachment can be up to 35MB. For files uploaded via the Hypera endpoint, the attachment limit is 15MB per file. If you need to increase this limit, please contact product support. Note that the total request size for all attachments within a single request via Hypera is also limited to 15MB by default. |
| Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button |                             | Closes the Properties panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

</chapter>


##Create and Manage Workspace Views {% #Manage %}

Use the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} gear icon to filter tasks and display a filter panel. For example, you can filter tasks by client. The filter panel has many options to sort tasks. To save a filter as a new workspace, click the Save button at the bottom right of this panel.

![E01-01_0003-Tasks-Module-Filter](E01-01_0003-Tasks-Module-Filter.png){width="900"}

*The Tasks Filter Panel*

<chapter title="Create a Tasks Workspace" collapsible="true" level="5">
To create a workspace:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Click the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} gear icon to filter tasks and display a filter panel.
4. Configure the search filter.
5. Click the Save button to save your workspace. It will appear in the All Tasks dropdown list, located to the left of the gear icon.


</chapter> 

<chapter title="View a Tasks Workspace" collapsible="true" level="5">
To view a workspace:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Click the All Tasks dropdown list, located to the left of the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} gear icon.
4. Select your workspace from the list of workspaces.

</chapter> 

<chapter title="Delete a Tasks Workspace" collapsible="true" level="5">
To delete a workspace:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics**top left main** menu, click **Operation**.
3. Click the All Tasks dropdown list, located to the left of the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} gear icon.
4. Select your workspace from the list of workspaces.
5. Click the Delete Workspace button at the bottom left of the Filter panel.

</chapter>

## Resolve with AI Features

{% include from="E02-01_0011-KnowledgeResolveAI.md" element-id="E02-01_0011-KnowledgeResolveAI_snippet" /%}


## More Resources

{% include from="E01-01_0002-Tasks-More-Resources.md" element-id="E01-01_0002-Tasks-More-Resources_snippet" /%}