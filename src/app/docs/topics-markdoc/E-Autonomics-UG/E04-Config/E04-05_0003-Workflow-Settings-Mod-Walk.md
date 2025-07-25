# Configuration Workflow Settings Walkthrough

## Introduction

The Configuration module lets you configure Workflow Settings. Default workflows define the underlying workflows for events, incidents, and other common processes. They're set to the root workflow. However, you can change one or more if needed.

## Accessing the Workflow Settings Workspace

To access the Workflows module workspace:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Configuration**. A flyout menu appears.
3. In the flyout menu, hover over the **Workflows label** to display a second flyout menu. In the second flyout menu, click the **Settings link**.

Click any workflow to view its detail panel with the ability to manage the workflow. For example, you can edit, publish, export, or delete the workflow. Or use the list workspace to filter tasks and create new tasks.

![E04-05_0003-Workflow-Settings-Workspace.png](E04-05_0003-Workflow-Settings-Workspace.png){width="800"}

*Workflow Settings Workspace*

## What You'll Learn

In this topic, you'll learn about:

* [The Workflow Settings workspace](#Workspace).
* [Choosing a default workflow](#ChooseWorkflow).


## The Workflow Settings Workspace {% #Workspace %}

The Workflow Settings workspace displays a list of common processes. Each process has a button to change the current workflow source for the process. Clicking the current workflow displays the process in the Workflows workspace.

In most cases, the Root workflow is appropriate for all common processes.

![E04-05_0003-Workflow-Settings-Root.png](E04-05_0003-Workflow-Settings-Root.png){width="800"}

*The Root Workflow in the Workflows Workspace*


## Choose a Default Workflow {% #ChooseWorkflow %}

To choose a different workflow for a common process:

1. In the Workflow Settings workspace, scroll down the list of Event, Incident, and other common processes.

2. Once you find the process to edit, click the **Choose Workflow button**. The Choose Workflow popup displays with a list of workflows.

3. In the popup, scroll down or search for the workflow to use. Click a workflow name to select it.

4. Click the **Select button** in the popup to select then save your workflow choice.

5. In the Workflow Settings workspace, click the **Save button** at the top left to save all the default workflow settings.


## More Resources

{% include from="E04-03_0002-WorkflowsMoreInfo.md" element-id="E04-03_0002-WorkflowsMoreInfo_snippet" /%}