# Executions Management

## Introduction

The Executions workspace lets you start and track executions and their automations. You'll use the Executions workspace to manage the health of your automations. From the Executions table, you can see their statuses and manage any outputs.

## What You'll Learn

In this topic, you'll learn how to:

* [Access the Executions workspace](#AccessWorkspace).

* [Change workspaces](#Change).

* [Set the domain or client](#Domain).

* [Filter executions](#Filter).

* [Sort executions](#Sort).

* [View execution details](#View).

* [Search an execution's history](#Search).

## Access the Executions Workspace {% #AccessWorkspace %}

After login, you'll enter the Amelia application. From here, you'll navigate to Autonomics.

By default, You'll enter Autonomics through the Tasks module (Tasks Inbox workspace). To use automations, you must navigate to the Automations module and the Executions workspace.

To go to the Executions workspace:

{% include from="E02-01_0003-Access-Automations-Module.md" element-id="E02-01_0003-Access-Automations-Module_snippet" /%}

Once inside the Automations module, you'll see the Executions workspace. This is your library of automations. Automations nest in folders by domain.   

##Change Workspaces {% #Change %}

{% include from="E02-01_0003-Browser-Menu-Change.md" element-id="E02-01_0003-Browser-Menu-Change_snippet" /%}

##Set the Domain or Client {% #Domain %}

To choose a domain, or switch to another client, you'll use the Domain dropdown.

![E02-01_0004-Domain-Dropdown](E02-01_0004-Domain-Dropdown.png){width="900" style="block"}

*The Browser Workspace Showing Domain Dropdown Highlighted*

##Filter Executions {% #Filter %}

The filter ( ![Filter-Btn-Automations_Executions](Filter-Btn-Automations_Executions.png){width="25" style="inline"})button sits on the left side of the page header area. Click the filter button, all filter options will be displayed below the Executions menu. Filter the automations in the execution page using one or all the filter dropdowns on the top of the dashboard.

![E02-01_0005-Execution-Filter](E02-01_0005-Execution-Filter.png){width="600" style="block"}

*The Executions Filter Option Showing Top Right Corner*

See the table below for detailed descriptions of when and how to apply these filters.

*Filter Elements*

| Element  | Default |                                                                                                                                                                                                                                                                                                                                                                                                                                                                Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Statuses |         | When you click the statuses dropdown menu, the filter options listed help you narrow down tasks based on their current state. * Scheduled - Tasks that are planned and queued to run at a specific time but have not started yet. * Ready: Tasks that are prepared and waiting for resources or a trigger to start execution. * Running: Tasks that are currently in progress. * Complete: Tasks that have finished execution successfully. * Abort Requested: Tasks for which a request to abort has been initiated but not yet completed. * Aborted: Tasks that have been manually stopped before completion. * Auto Aborted: Tasks that were automatically stopped due to predefined conditions or timeouts. * Failed: Tasks that encountered errors during execution and did not complete successfully. You can select as many as Statuses at a time in the filter. Also, you unselect the statuses if you do not required to filter. |
| Executor |         | This filter allows you to select automations based on the user or system component responsible for executing the task. It helps identify which executor initiated specific tasks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Task Id  |         | You can filter tasks by their unique identifier. This is useful when you need to locate and analyze a specific task quickly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Executed |         | Date and Time: Filter tasks based on when they were executed. You can select a specific date range to view tasks executed within that period. Presets: Allows filtering based on how often tasks are executed. For example, last 30 minutes, last 7 days, monthly, and yearly. Relative: Allows you to enter the frequency in the field and then select the minutes, hours, days, months, and years.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |



##Sort Executions {% #Sort %}

The "Sort Executions" feature lets you organize and view task executions based on various criteria. This helps you quickly find and analyze specific executions. Here's how you can sort executions using the provided criteria:

*Sort Executions Criteria*

| Search Criteria |                                                                                                                    Description                                                                                                                     |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Status          | Alphabetical Order (A - Z or Z - A): Sort tasks by their status such as "Aborted", "Auto Aborted", "Complete", "Failed", "Ready", "Running", "Scheduled". Use Case: Group tasks with similar statuses together for easier monitoring and analysis. |
| Automation      | Alphabetical Order (A - Z or Z - A): Sort tasks based on the name of the automation script or process. Use Case: Find all executions of a specific automation to review their performance or troubleshoot issues.                                  |
| Version         | Alphabetical or Numeric Order: Sort tasks by the version of the automation or script being executed. Use Case: Compare performance or outcomes across different versions of the same automation.                                                   |
| Task ID         | Numeric Order (Lowest to Highest or Highest to Lowest): Sort tasks by their unique identifier. Use Case: Locate a specific task quickly using its ID.                                                                                              |
| Executed        | Date and Time Order (Earliest to Latest or Latest to Earliest): Sort tasks by the time they were executed. Use Case: Review the sequence of task executions and identify trends over time.                                                         |
| Duration        | Numeric Order (Shortest to Longest or Longest to Shortest): Sort tasks based on how long they took to execute. Use Case: Identify tasks that are taking unusually long to complete or compare the efficiency of different tasks.                   |
| Executor        | Alphabetical Order (A - Z or Z - A): Sort tasks by the name of the user or system component that executed them. Use Case: Monitor tasks executed by specific users or components for accountability and performance review.                        |


##View Execution Details {% #View %}

To display an execution in the Autonomics platform, follow these steps:

1. Access the Executions workspace. The default Executions workspace will appear.
2. In the execution detail panel, click the non-link area of any list item in the Executions workspace. This action will display an execution detail panel on the right half of the workspace.

   ![E02-01_0005-Execution-Task-Details](E02-01_0005-Execution-Task-Details.png){width="600" style="block"}

   ![E02-01_0005-Execution-View-Details](E02-01_0005-Execution-View-Details.png){width="600" style="block"}

   *The Executions Workspace View Details*

3. To view automation details, click the links of any execution list item to display its automation details task.
4. Clicking an execution item in the right panel will move that detail panel to the left side of the workspace. The details about the item will be displayed in a new right panel.
5. To close panels and return to the default workspace, click the 'x' in the top left corner of the right side panel.
6. To return to the workspace with the initial Executions details panel displayed, click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right of the right side panel with execution item details.

The web browser's back and forward buttons can also be used to navigate between the workspace and panels.

##Search an Execution's History {% #Search %}

The Executions History page offers a display and search functionality to efficiently find and review past executions.

You can enter specific keywords to search for particular information within the execution history. This helps in quickly locating the executions that match your search criteria. These features help users efficiently monitor and manage past executions by providing clear and searchable execution records.

![E02-01_0005-Execution-History-Search](E02-01_0005-Execution-History-Search.png){width="600" style="block"}

*The Executions History Showing the Search Field*

*Executions History Headings*

| History Headings |                     Description                      |
|------------------|------------------------------------------------------|
| State            | The current state of the execution.                  |
| Started          | The timestamp indicating when the execution started. |
| Status           | The current status of the execution.                 |
| Description      | A brief description or summary of the execution.     |



## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md)
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md)
