# Automation Studio Walkthrough

## Introduction

To use the Autonomics Automation Studio workspace, you must understand its features and where they live. The workspace includes a series of tools and property panels used to build automations. This topic gives insight into how to use the Automation Studio workspace.

The [Automation Studio Introduction](E02-01_0019-Automation-Studio-Intro.md) topic provides a high level description of the workspace. The [Automation Studio Library Introduction](E02-01_0021-Actions-Library-Intro.md) topic describes all available actions that you can use to build automations. With links to detailed information about each action.

![E02-01-0019-Automation-Studio-Workspace.png](E02-01-0019-Automation-Studio-Workspace.png){width="900" style="block"}

*The Automation Studio Workspace Showing the Panels and Tools Highlighted*

## What You'll Learn

In this topic, you'll learn about:

* [Accessing the Automation Studio workspace](#Access).
* [Actions palette](#Actions).
* [Properties panel](#Properties).
* [Action popup tools](#ActionPopup).
* [Workspace Tools palette](#WorkspaceTools).
* [Top Navigation tools](#TopNavTools).

##Access the Automation Studio Workspace {% #Access %}

{% include from="E02-01_0019-Automation-StudioAccess.md" element-id="E02-01_0019-Automation-StudioAccess_snippet" /%}

##Actions Palette {% #Actions %}

Floating on the left edge, this palette includes actions to use when building an automation. You drag and drop one or more actions on to any flow line between actions in the workspace. Or drop an isolated action on to the workspace then use the Join action to connect it to a workflow.

*Automation Studio Actions Palette Tools*

| Tool        | Description             |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Workflows-Btn-Actions-Lasso.png](Workflows-Btn-Actions-Lasso.png){width="25" style="inline"}                             | Click to drag and select multiple actions and flow lines in the workflow workspace.   |
| ![Workflows-Btn-Actions-GlobalConnect.png](Workflows-Btn-Actions-GlobalConnect.png){width="20" style="inline"}             | Click to activate the global connect tool.             |
| ![Start-Btn-Auto_Studio_ActionsPanel.png](Start-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"}               | The Start state that begins the automaton process.     |
| ![Success-Btn-Auto_Studio_ActionsPanel.png](Success-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}           | Each automaton must have one or more Success states. If the last state executed by an automation is a success state, the entire execution is considered a success. Otherwise, the execution is considered to have failed to resolve the problem. |
| ![Workflows-Btn-Actions-Noop.png](Workflows-Btn-Actions-Noop.png){width="25" style="inline"}| Does nothing. Passes execution through a single outgoing transition to another state. |
| ![Fork-Btn-Auto_Studio_ActionsPanel.png](Fork-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}                 | Splits the automation execution into two or more concurrent paths of execution. Both paths execute concurrently until they reach a join state.      |
| ![Join-Btn-Auto_Studio_ActionsPanel.png](Join-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}                 | Joins two or more execution paths. Upon reaching a join state, that path of execution is paused until all incoming transitions have been traversed. |
| ![Link-Btn-Auto_Studio_ActionsPanel.png](Link-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}                 | Links to another automaton. Variables can be passed in and/or extracted from the sub-automaton. Links may be of arbitrary depth and number. However, recursion is not supported. The return code from a link state is always 0 (zero).           |
| ![TimedWait-Btn-Auto_Studio_ActionsPanel.png](TimedWait-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}       | Introduces a delay on the execution by waiting for a period of time.                  |
| ![EditVariable-Btn-Auto_Studio_ActionsPanel.png](EditVariable-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"} | Allows editing a variable at runtime. Script (Java Script) or Method call (function from context) can be used.       |
| ![Script-Btn-Auto_Studio_ActionsPanel.png](Script-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}             | Script action that allows programmatic manipulation of an execution.                  |
| ![HostCmnd-Btn-Auto_Studio_ActionsPanel.png](HostCmnd-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}         | Executes a single command using connection group and returns output.                  |
| ![AIOps_Api-Btn-Auto_Studio_ActionsPanel.png](AIOps_Api-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}       | Calls any of AI Ops APIs and returns output.           |
| ![HTTPRequest-Btn-Auto_Studio_ActionsPanel.png](HTTPRequest-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}   | Executes HTTP request and returns output.              |
| ![Email-Btn-Auto_Studio_ActionsPanel.png](Email-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}               | Sends an email.         |
| ![UpdateTask-Btn-Auto_Studio_ActionsPanel.png](UpdateTask-Btn-Auto_Studio_ActionsPanel.png){width="35" style="inline"}     | Creates or updates a task.                             |
| ![TaskLifecycle-Btn-Auto_Studio_ActionsPanel.png](TaskLifecycle-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"} | Makes a choice in task workflow to proceed.            |
| ![AIF_API-Btn-Auto_Studio_ActionsPanel.png](AIF_API-Btn-Auto_Studio_ActionsPanel.png){width="40" style="inline"}           | Calls an Amelia Integration Framework (AIF) API to integrate with third-party software.                              |
| ![PhoneCall-Btn-Auto_Studio_ActionsPanel.png](PhoneCall-Btn-Auto_Studio_ActionsPanel.png){width="20" style="inline"}       | Used to communicate with anyone. Allows using text and options to communicate if required.                           |
| ![GetCreds-Btn-Auto_Studio_ActionsPanel.png](GetCreds-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"}         | Pulls the locksmith credentials to automaton variables.|
| ![SendHypera-Btn-Auto_Studio_ActionsPanel.png](SendHypera-Btn-Auto_Studio_ActionsPanel.png){width="25" style="inline"}     | Send a HyperA message.  |

##Properties Panels {% #Properties %}

There are two types of property panels in the Automation Studio. Individual actions include their own property panels. And each automation has a property panel.

### Action Propery Panels

Every action includes a Properties panel to configure an action and the workspace. The panel displays when you click the Properties icon from a selected action. The workspace tools palette includes an arrow to open or close the properties panel. The image above displays the workspace Properties panel.

The [Automation Studio Library Introduction](E02-01_0021-Actions-Library-Intro.md) topic has details about each action. This includes links to each action with descriptions of their individual property panels.

### Automation Properties

Each individual automation has a property panel with settings. For example, variables that actions can use to complete tasks like sending emails.

<chapter title="Core Tab" collapsible="true" level="5">

![E02-01_0020-Automation-Props-Core.png](E02-01_0020-Automation-Props-Core.png){width="600" style="block"}

*The Automation Properties Panel: Core Tab*

*The Automation Properties Panel: Core Tab*

| Setting                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID                             | The autogenerated identifier for this automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Version ID                     | The version identifier for this automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Version                        | The version number for this automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Created Date                   | When this automation was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Creator                        | Who created the automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Name                           | Type a name for this automation. The name should reflect the automaton's purpose. Ambiguous names and words like Newest or Latest should be avoided. However, version numbers are permissible.<br/>Components should be labeled as COMPONENT:Component Name where Component Name is the unique name for a component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Live                           | Toggle on or off to make this automation live.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Template                       | Toggle on or off whether to use this automation as a template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Client                         | The client name for this automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Category                       | The category assigned to this automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Tags                           | Select a pre-existing tag from the dropdown. Or type a new tag name. This pre-formatted automation can then be used as a guide to other automations, saving you development time. Press Enter to save the tag.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Approval Status                | The status for this automation. hows as None prior to approval. Following approval (Submit for Approval), it updates to Approved. The approved status also shows in the header of the Automations Designer workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Run As                         | This setting controls the security access for automations. By default, all automations are executed in a security context with limited access. This means that automation from one tenant on a multi-tenant instance cannot access data from other tenants.<br/>**Inherit:** Uses the value from the Automations Settings page for the Client where the automation resides.<br/>**Caller:** If the automation is called from another automation, it executes the security context of the calling automation. This is useful when automations located in individual tenants reuse shared components that are stored under some other Client. In that case, those shared components will have access to data from the calling tenant.<br/>**Owner:** he automation executes using the security context of the Client it's stored in. This is useful in cases like privilege escalation, where automation located in individual tenants can call shared components from other clients to perform some actions on behalf of that shared tenant.                                                                                                                                                                                                                        |
| Execution Mode                 | Sets how the automaton is executed.<br/>**Automatic:** Verify automaton matches appropriate events or tickets and that it does not match inappropriate events for the automation type. Automatons that match events where other automation are already running should be handled with care, especially with ticketing events.<br/>**Manual:** An automaton may or may not match an event. IPcal and ESCALATION automatons must be set to MANUAL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Equivalent Group               | Execution groups route automation executions to specific automation instances.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Equivalent Engineer Time (min) | The time an engineer needs to perform one or more tasks in this automation. Used to calculate time saved with an automation. Default is 1 minute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Concurrency Limit              | A concurrency limit is a number that limits how many of a specific automations can run at the same time. For example, an automation that backs up data from different servers into a centralized location might be limited to only 10 executions at a time to avoid overloading the backup server.<br/>The concurrency limit is also configured on the Automation Settings page, where it's possible to limit the number of automations running for a specific tenant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| If Limit Exceeds               | This setting determines what will happen when a new automation is trying to start when the concurrency limit is already reached.<br/>**Inherit:** The automation uses the value from the Automations Settings page for the Client where the automation resides. Selected by default. <br/>**Auto Abort:** The automation is aborted.<br/>**Keep in Scheduled State Until Other Automations Finish:** The automation is queued and is only started when the number of executions for the same automation drops below the concurrency limit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Timeout                        | The maximum amount of time that an automation can run. The default is 24 hours.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Purpose                        | How an automation is used. This setting is for reporting only and doesn't impact automaton performance.<br/>**DIAGNOSIS:** This type of automation may verify that the problem exists and baby sits an event or log into a system to gather diagnostic data and send this information back to the client or engineer to process manually. See ITL definition for Incident Investigation and Diagnosis at http://itsm.certification.info/incidentinvestdiag.html.<br/>**MAINTENANCE:** This type of automaton is reactive and is for change management processes.<br/>**PROCESS:** This type of automaton also is reactive and is related to an overall process, usually a process within a process to notify, approve, calculate, or assess a resource.<br/>**REMEDIATION:** This type of automaton logs onto the affected system or systems and takes the necessary steps to fix a problem, such as restarting a process or clearing some disk space. See ITIL definition for REMEDIATE http://itsm.certification.info/remediation.html.<br/>**ROUTINE:** This automaton actively performs a task on a regular repeated schedule, for example, validating that a resource is alive.<br/>**VERIFICATION:** This automaton interrogates and verifies the status or condition of a resource. |
| Notes                          | This field must contain a brief description of the function of the automaton. RFC IDs, version changes, or specific details regarding the use of the automation as a component can be included as notes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |


</chapter>

<chapter title="Matchers Tab" collapsible="true" level="5">

The Matchers tab lists any matchers used by an automation. Matchers use task parameters to match then run a selected automaton automatically. You could define a query to run an automaton on new tickets if the subject contains the word, _Urgent_.

> Creating Matchers in the Properties panel is deprecated. It's best to use the full Matchers module and then add and connect your automation there.<br/><br/>To access the Matchers module, click the Autonomics link at the top left. Then hover over the Automations link to display then click the Matchers link.

![E02-01_0020-Automation-Props-Matchers.png](E02-01_0020-Automation-Props-Matchers.png){width="600" style="block"}

*The Automation Properties Panel: Matchers Tab*

*The Automation Properties Panel: Matchers Tab Settings*

| Setting    | Description                                            |
|------------|--------------------------------------------------------|
| Name       | The name of a matcher created with the Matcher module. |
| Created by | The name of the person who created the matcher.        |


</chapter>

<chapter title="Connections Tab" collapsible="true" level="5">

The Connections tab lets you create groups of connections to use with an automation. You can add to a group an existing connection or a connection using an existing variable.

In the example below, Windows and windows_over are groups. Each group has buttons to add an existing connection or a connection from a variable.

> Connections should use a backup when available. If there is a backup server available for a connection, make sure you configure the connection to use it.

![E02-01_0020-Automation-Props-Connections.png](E02-01_0020-Automation-Props-Connections.png){width="600" style="block"}

*The Automation Properties Panel: Connections Tab*

**Create New Connection Group Popup**

When you click the + Create New Connection Group button on this tab, the Create New Connection Group popup displays.

![E02-01_0020-Automation-Props-Connections-Popup.png](E02-01_0020-Automation-Props-Connections-Popup.png){width="600" style="block"}

*The Create New Connection Group Popup*

*The Create New Connection Group Popup Settings*

| Setting                 | Description                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                    | The name should reflect the name or machine type connected to the automaton.<br/>If your automaton has linked components, use shared connection names throughout the linked components. This allows for connection sharing.<br/>If one machine has multiple connections to it, use the connection protocol (SSH, ISH) in the name. And the username where applicable. |
| Connection from Context | Toggle on or off whether a connection should be made based on the execution context.                                                                                                                                                                                                                                                                                  |
| Connection Type         | Select the connection type from a dropdown list of common options. For example, DB2, MSSQL, Telnet, and Teradata.                                                                                                                                                                                                                                                     |
| Host                    | Select whether to determine the host automatically or from a variable.                                                                                                                                                                                                                                                                                                |
| Create                  | Click to create the connection group.                                                                                                                                                                                                                                                                                                                                 |


**Connection Group Settings**

Click the + Add Existing button or + Add From Variable buttons to create connections. Then configure the unique settings for each connection.

| Setting                                                                                                                 | Description                                         |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| + Add Existing                                                                                                          | Click to add an existing pre-configured connection. |
| + Add From Variable                                                                                                     | Click to add a connection using a variable.         |
| ![Add-Connection-Props-Btn.png](Add-Btn-Automation-Studio-Connection-Prop-Panel.png){width="20" style="block"}          | Click to add a new connection within the group.     |
| ![Edit2-Btn-Automation-Studio-Prop-Panel.png](Edit2-Btn-Automation-Studio-Prop-Panel.png){width="20" style="block"}     | Click to edit the connection group.                 |
| ![Delete3-Btn-Automation-Studio-Prop-Panel.png](Delete3-Btn-Automation-Studio-Prop-Panel.png){width="20" style="block"} | Click to delete a connection or a connection group. |


</chapter>

<chapter title="Variables Tab" collapsible="true" level="5">

The Variables tab lets you create, edit, and manage variables used by an automation.

> The maximum allowed size for variables is 16MB.{style="note"}

![E02-01_0020-Automation-Props-Variables.png](E02-01_0020-Automation-Props-Variables.png){width="600" style="block"}

*The Automation Properties Panel: Variables Tab*

*The Automation Properties Panel: Variables Tab Settings*

| Setting             | Description                                                      |
|---------------------|------------------------------------------------------------------|
| Create New Variable | Click to display the Create New Variable popup.                  |
| ![Edit2-Btn-Automation-Studio-Prop-Panel.png](Edit2-Btn-Automation-Studio-Prop-Panel.png){width="20" style="block"}     | Hover over a script name to display. Click to edit the variable. |
| ![Delete3-Btn-Automation-Studio-Prop-Panel.png](Delete3-Btn-Automation-Studio-Prop-Panel.png){width="20" style="block"} | Hover over a script name to display. Click to delete a variable.                                      |

The Create New Variable popup lets you define variables to include in an automation.

![E02-01_0020-Automation-Props-Variables-Popup.png](E02-01_0020-Automation-Props-Variables-Popup.png){width="600" style="block"}

*The Create New Variable Popup*

*The Create New Variable Popup Settings*

| Setting              | Description                                                                                                  |
|----------------------|--------------------------------------------------------------------------------------------------------------|
| Name                 | Type a unique descriptive name for a variable.                                                               |
| Fail if absent       | Toggle on or off whether the automation fails if this variable has no value.                                 |
| Validation           | If appropriate, type a regex to validate the variable value.                                                 |
| Default              | If appropriate, type a value for the variable.                                                               |
| Enable value masking | Toggle on or off masking the value of the variable.                                                          |
| Visibility           | Set where this variable value will be visible. Options are Input/Output, Input, Output, Local, or Transient. |
| Notes                | Type brief notes to help identify the purpose of this variable.                                              |
| Field                | Select a field to use to capture a value for this variable.                                                  |
| Match                | If appropriate, type a regex to use to match the value of this variable.                                     |
| Replace              | If appropriate, and a match, type what to use to replace the variable value.                                 |

</chapter>

<chapter title="Script Library Tab" collapsible="true" level="5">

The Script Library tab lets you connect script libraries to an automation.

> Scripts are created with the Script Library module. To access this module, click the Autonomics link at the top left. Then hover over the Automations link to display then click the Script Library link.

![E02-01_0020-Automation-Props-Scripts.png](E02-01_0020-Automation-Props-Scripts.png){width="600" style="block"}

*The Automation Properties Panel: Script Library Tab*

</chapter>

<chapter title="Approval Tab" collapsible="true" level="5">

The Approval tab lets you see details about any approval of the automation. Click the Status label at the top right, to show or hide display details about the status. In this example, _Approved_ with a green check mark is the status label to click.

![E02-01_0020-Automation-Props-Approval.png](E02-01_0020-Automation-Props-Approval.png){width="600" style="block"}

*The Automation Properties Panel: Approval Tab*


</chapter>

<chapter title="Fail To Tab" collapsible="true" level="5">

The Fail To tab lets you specify an automation to invoke if the automation fails. Click the Choose button to display a popup with a searchable list of automations. Then in the popup select an automation to use in case your automation fails.

![E02-01_0020-Automation-Props-FailTo.png](E02-01_0020-Automation-Props-FailTo.png){width="600" style="block"}

*The Automation Properties Panel: Fail To Tab*


</chapter>


<chapter title="Past Executions / Linked Automations" collapsible="true" level="5">

Click the three dots to the right of the Fail To tab. This will display a dropdown list with two additional options:

* **Past Executions**: Display a searchable list of executions for this automation.
* **Linked Automations**: Display a searchable list of automations linked to this automation.

![E02-01-0020-Automation-Props-LinkedPast.png](E02-01-0020-Automation-Props-LinkedPast.png){width="600" style="block"}

*The Automation Properties Panel: Past Executions / Linked Automation Options*


</chapter>



##Action Popup Tools {% #ActionPopup %}

Click any action to display a small popup with four key features. You can add and connect a flow line out from the selected action. Or you can copy or delete the action. And you also can display the Properties panel for the selected action.

*Automation Studio Action Palette Tools*

| Tool              | Description                                                                                                                                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Workflows-Btn-Actions-ActionConnect.png](Workflows-Btn-Actions-ActionConnect.png){width="30" style="inline"}                   | Connect the selection action to another action.                                                                                                                                                                  |
| ![Copy-Btn-Auto_Studio_Action_Tbar.png](Copy-Btn-Auto_Studio_Action_Tbar.png){width="30" style="inline"}                         | Copy the selected action.                                                                                                                                                                                        |
| ![Workflows-Btn-Actions-ActionDelete.png](Workflows-Btn-Actions-ActionDelete.png){width="30" style="inline"}                     | Remove the selected action from the workflow.                                                                                                                                                                    |
| ![Properties-Btn-Automation_Studio_Action_Tbar.png](Properties-Btn-Automation_Studio_Action_Tbar.png){width="30" style="inline"} | Display the properties for the selected action. See the [Automation Studio Library Introduction](E02-01_0021-Actions-Library-Intro.md) topic for links and details about each action. |

##Workspace Tools Palette {% #WorkspaceTools %}

This small palette is located at the top right of the workspace. It moves towards the left when the Properties panel slides out. These tools let you zoom in, zoom out, or reset the zoom level when viewing your workspace. Another tool automatically lays out your workflow in a vertical layout. And the arrows open or close the Properties panel.

*Automation Studio Workspace Tools Palette Tools*

| Tool | Description  |
|------|--------------|
| ![Workflows-Btn-ZoomIn.png](Workflows-Btn-ZoomIn.png){width="30" style="inline"} | Click to zoom in.     |
| ![Workflows-Btn-ZoomReset.png](Workflows-Btn-ZoomReset.png){width="30" style="inline"} | Click to center the automata in the workspace.       |
| ![Workflows-Btn-ZoomOut.png](Workflows-Btn-ZoomOut.png){width="30" style="inline"} | Click to zoom out.    |
| ![Workflows-Btn-AutoLayout.png](Workflows-Btn-AutoLayout.png){width="30" style="inline"}  | Click to snap the automata lines and actions to a grid. |
| ![Workflows-Btn-PropsOpen.png](Workflows-Btn-PropsOpen.png){width="30" style="inline"} | Displays only if Properties panel is closed. Click to open the Properties panel..  |
| ![Workflows-Btn-PropsClose.png](Workflows-Btn-PropsClose.png){width="30" style="inline"} | Displays only if Properties panel is open. Click to close the Properties panel.  |


##Top Navigation Tools {% #TopNavTools %}

These tools at the top left let you manage your work and workspace. You can save your work, save a new version of your work, and export your automation. There's also Undo and Redo. Plus Cut, Copy, Paste, and Delete. The Generate button uses Generative AI to help you design your automation workflow.

*Automation Studio Top Navigation Tools*

| Tool         | Description                    |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Save-Btn-Automation_Studio_Toolbar.png](Save-Btn-Automation_Studio_Toolbar.png){width="30" style="inline"}                | Save the automaton. If changes have been made, when clicked the version number to the right of the automaton name will update.                             |
| ![Save-New-Ver-Btn-Automation_Studio_Toolbar.png](Save-New-Ver-Btn-Automation_Studio_Toolbar.png){width="30" style="inline"} | Save a new version of the workflow. Whether or not changes have been made, when clicked the version number to the right of the automaton name will update. |
| ![Execute-Btn-Automation_Studio_Toolbar.png](Execute-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}          | Execute the workflow.          |
| ![Workflows-Btn-Export.png](Workflows-Btn-Export.png){width="25" style="inline"}   | Export the workflow.           |
| ![Workflows-Btn-Undo.png](Workflows-Btn-Undo.png){width="25" style="inline"}       | Undo last change.              |
| ![Workflows-Btn-Redo.png](Workflows-Btn-Redo.png){width="25" style="inline"}       | Redo last change.              |
| ![Workflows-Btn-Cut.png](Workflows-Btn-Cut.png){width="25" style="inline"}         | Cut an action or portion of a workflow.                       |
| ![Workflows-Btn-Copy.png](Workflows-Btn-Copy.png){width="25" style="inline"}       | Copy an action or portion of a workflow.                      |
| ![Workflows-Btn-Paste.png](Workflows-Btn-Paste.png){width="25" style="inline"}     | Paste a cut or copied action or portion of a workflow.        |
| ![Workflows-Btn-Delete.png](Workflows-Btn-Delete.png){width="20" style="inline"}   | Delete the workflow.           |
| ![Generate-Btn-Automation_Studio.png](Generate-Btn-Automation_Studio.png){width="40" style="inline"}                        | Use Generative AI to help create an automaton.                |


## More Resources

For more information, see:

* [Automation Studio Walkthrough](E02-01_0020_Automation-Studio-Walk.md)
* [Actions Library Introduction](E02-01_0021-Actions-Library-Intro.md)
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)
* [Automations Management](E02-01_0004-Automations-Mgmnt.md)
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md)
