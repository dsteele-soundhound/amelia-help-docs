# Tasks Module Walkthrough

## Introduction

The Tasks workspace lets you create, assign, clone, and link tasks. Events, exceptions, alerts, and other processes trigger tasks or create tasks. These are managed and queued with the Tasks workspace. This topic describes the Tasks workspaces in detail.

Our [Task Workspace Introduction](E01-01_0002-Tasks-Module-Intro.md) topic describes key features of tasks. The [Tasks Module Management](E01-01_0004-Tasks-Mgmnt.md) topic describes how to create and manage tasks. And the [Tasks Settings Walkthrough](E01-01_0005-Settings-Mod-Walk.md) topic describe how to configure generative AI settings for tasks.

## Accessing the Tasks Workspace

{% include from="E01-01_0002-Tasks-Modules-Access.md" element-id="E01-01_0002-Tasks-Modules-Access_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Tasks list workspace](#ListWorkspace).

* [The Tasks right side detail panel](#DetailPanel).

##The Tasks List Workspace {% #ListWorkspace %}

The default Tasks workspace lists all available tasks. It includes their current status and tools to manage tasks. You also can use this workspace to create and configure custom workspaces. For example, to view only P1 tasks for a specific team.

### View and Sort Tasks

The list of tasks is visible with attributes like Task ID, Priority, Client, Status, Owner, Subject, and so on. Click a heading to sort by that attribute. For example, sort tasks by Task ID, Priority, Status, Owner, and Created time.

* **Task Assignment**: The Owner heading and column shows who is responsible for the task.
* **Task Status Management**: Task status is under the Status heading and column.
* **Track SLA and Workflow**: Track the SLA status of a task using the SLA heading and column. Hover over an icon in this column to display its status. respective icons and indicators. For example, the SLA status shows if a task is within the defined time limits, and the workflow column might show if the task has been automated.
* **Manage Automation**: The automation status for each task is visible in the Automata column, showing whether the task is automated or manually handled.
* **Estimated Time of Arrival (ETA)**: You can track the ETA for each task under the ETA column to know the expected completion time.

### Filter Tasks

Use the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} gear icon to filter tasks and display a filter panel. For example, you can filter tasks by client. The filter panel has many options to sort tasks. To save a filter as a new workspace, click the Save button at the bottom right of this panel.

![E01-01_0003-Tasks-Module-Filter](E01-01_0003-Tasks-Module-Filter.png){width="900" style="block"}

*The Tasks Filter Panel*

### Create a New Task

You can create a new task using the + New Task button located on the top right. It opens a Create Task popup. Use the popup to configure a new task. Then click the Save button.

### Navigate Between Task Pages

Navigate between pages of tasks using the page navigation tools at the bottom of the main list workspace.

### Quick Navigation

The Quick Navigation field, located at the top right, lets you move to a specific task or section. Type a task ID or section name then press Enter.

### Search Tasks

Use the Search field to find tasks using keywords. For example, you can input terms related to the Task ID, Subject, Owner, or other task details. This narrows down the list of tasks to those that match the search criteria The Search field is located at the top right of the list workspace.

##The Tasks Detail Panel {% #DetailPanel %}

Once you click a ticket in the Tasks list workspace, its detail page will display on the right half of the screen.

The panel provides a number of options that you can use to resolve the task. The panel displays task history plus the workflow and automations used by the task. You also can use generative AI to resolve and automate tasks, as well as generate a root cause analysis.

![E01-01_0003-Tasks-Module-Details](E01-01_0003-Tasks-Module-Details.png){width="900" style="block"}

*The Tasks Detail Panel*

### Top Task Buttons

The top panel includes actions you can take to complete a task.

* **Assign**: The Assign button allows you to reassign the task to another individual or team. This ensures that the person or team handles the issue. Once a task is assigned, the new owner is responsible for its completion. Their name will appear as the task Owner.
* **Edit**: Click the Edit to modify the task details. You can change the task priority, update the description, alter due dates, or correct information.
* **Clone**: The Clone button creates a new task that is an exact copy of the current task. This lets you create similar tasks for different environments or clients. Or when a repeated issue arises that follows the same steps for resolution.
* **Resolve with AI**: This feature lets IT operations personnel remediate incidents while exploring automation opportunities. It leverages runbooks, OpenAI models, and in-house technologies. Resolve with AI suggests the steps needed to triage and resolve an issue. It calculates the impact and risk of each suggestion. Then optionally generates automation for future process improvements. This leverages our Automate with AI engine.
* **Automate with AI**: This feature generates automations from knowledge articles, runbooks, and standard operating procedures. Native integrations connect Autonomics to customer platforms.
* **Workflow**: This feature defines the steps a task goes through, from creation to resolution. A workflow can include New, In Progress, Waiting for Recovery, Resolved, and Closed steps. Workflow management allows users to track task progress through these stages. This includes actions and approvals that need to complete a task. Additionally, you can customize workflows to suit the operational needs of a team. And you might automate some steps with AI.

### Task Tabs

The task panel includes tabs that describe a task and its history.

* **Overview**: This tab provides a detailed description of the task. Not only a summary but also root cause analysis, event statuses, and automations. The Root Cause Analysis section includes a Generate with AI button. Click it to use generative AI to analyze all ticket details. The output is a step by step description of how the task happened and its resolution.
* **Details**: This tab includes task details, workflow fields, and any attachments.
* **Task History**: The Task History tab has comments from automations and humans as they work a task to resolution. People can add a comment and files, as needed. If the history is long, click the Full History button to display a new panel with all comments.
* **Workflow**: You can see the full process used to resolve a task. There's a Root view and ITIL V3 Incident Management view. At the bottom right of this tab, click the + to zoom in or - button to zoom out.
* **Attributes**: This tab displays the basic task attributes. For example, ServiceNow integrations might display their ID numbers on this tab. The recommended largest number of attributes is 100. If a field attribute is whitelisted, 1000 attributes is possible but not recommended. If a field attribute is not whitelisted, the total size limit is 32kb. This includes the names and values of attributes. The recommended largest length size of data that a ticket attribute can hold is 100. The length limit is 32kb.
* **Connect**: This tab lets you connect live to a remote resource to resolve a task. It provides a basic CLI interface to run commands.
* **CMDB**: Use this tab to see any linked configuration items (CIs). CIs are logins and other data useful to resolving tasks.
* **Automations**: This tab lists available and executed automations for a task. Plus automations generated by this task.
* **Events**: This tab lists events that trigger, progress, or resolve a task.
* **Knowledge**: This tab displays any knowledge sources used to resolve a task.
* **Linked Tasks**: Multiple tasks might be used to complete one action. These tasks can be linked with the Linked Tasks tab. Click the +Link Task button to display a new panel. Use the panel to search for one or more tasks to link to a task.



## More Resources

{% include from="E01-01_0002-Tasks-More-Resources.md" element-id="E01-01_0002-Tasks-More-Resources_snippet" /%}