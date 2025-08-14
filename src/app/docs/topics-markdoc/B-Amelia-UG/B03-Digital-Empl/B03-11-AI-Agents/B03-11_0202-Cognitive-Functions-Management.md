# Cognitive Functions Management

{% include from="B11-00_0003-AgenticAI-EAP.md" element-id="B11-00_0003-AgenticAI-EAP_snippet" /%}

## Introduction

{% include from="B11-00_0005-AgenticAI-CogFunctions-Intro.md" element-id="B11-00_0005-AgenticAI-CogFunctions-Intro_snippet" /%}

To use Cognitive Functions effectively, you should first understand their features and how to configure them. This topic gives insights into when and how to use Cognitive Functions.

The [Cognitive Functions Introduction](B03-11_0201-Cognitive-Functions-Intro.md) topic describes how they work. The [AI Agents Introduction](B03-11_0001-AI-Agents-Intro.md) topic describes Agentic AI and how it compares to other AI methods.

## Access Cognitive Functions Features

{% include from="B11-00_0005-AgenticAI-CogFunctions-Access.md" element-id="B11-00_0005-AgenticAI-CogFunctions-Access_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [Cognitive Functions Workspaces](#Workspaces)

* [Adding Cognitive Functions](#Add)

* [Searching for Cognitive Functions](#Search)

* [Editing Cognitive Functions](#Edit)

* [Importing Cognitive Functions](#Import)

* [Exporting Cognitive Functions](#Export)

* [Deleting Cognitive Functions](#Delete)

##Cognitive Functions Workspaces {% #Workspaces %}

The Cognitive Functions workspaces include three workspaces.

* The Cognitive Functions Left Side Panel.

* The **New Cognitive Functions tab workspace** lets you create new functions.

* The **Cognitive Functions Edit tab workspace** lets you configure existing functions.


![B03-11_0201-CognitiveFunctions-Workspace-New.png](B03-11_0201-CognitiveFunctions-Workspace-New.png){width="800"}

*The New Cognitive Function Tab Workspace*

![B03-11_0201-CognitiveFunctions-Workspace-New-Edit.png](B03-11_0201-CognitiveFunctions-Workspace-New-Edit.png){width="800"}

*The Cognitive Function Edit Workspace*


### Left Side Panel

This panel appears between the left edge navigation links and the Cognitive Functions workspace. The panel displays a list of functions.

To toggle open the Cognitive Functions panel, click the AI Agents icon link on the left edge navigation links. Then click the Cognitive Functions link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="20" style="inline"} icon at the top right of the Cognitive Functions panel.

*Cognitive Functions Panel Elements*

| Element                                                                     | Description                                                                                                                                                               |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![AddNewAgent-Btn-AgenticAI.png](AddNewAgent-Btn-AgenticAI.png){width="90"} | Click to display the Creating AI Agent workspace tab.                                                                                                                     |
| ![Import-Btn-AgenticAI.png](Import-Btn-AgenticAI.png){width="35"}           | Click to Import an existing Cognitive Agents file.                                                                                                |
| ![Export-Btn-AgenticAI.png](Export-Btn-AgenticAI.png){width="35"}           | Click a checkbox next to a Click to export a Cognitive Agents selected listed in the panel. Then click this button to export the selected agents. |
| Search here                                                                 | Click this box then type a partial or full name to find a Cognitive Agents.              


### Edit Workspace

The Edit workspace is a single column form with five panels. Each panel describes information needed by any agent using the function. For example, variables for check-in and check-out dates for a hotel booking function. Use this workspace to define a function to help an agent perform a task.

#### Basics Panel

This panel includes a unique descriptive Name and Description for the function.

#### Source Panel

Use this panel to define the Source the function uses to perform a task for an agent. You can use web actions, CAI conversation flows, or integration flows. These artifacts manage conversation flows and interact with third-party resources. Three sources are available.

* **Web Actions** - Use a web interface to create a function to connect to third-party resources. Connections are reusable. Cognitive Agents use these actions directly or in a Conversation AI flow. See the [Web Actions Introduction](B03-05_0101-Web-Actions-Intro.md) topic for more details.

* **Conversation Flows** - The Digital Employees builder, or DEB, uses natural conversation to help you build repeatable process flows. These deterministic flows typically complete one or more tasks, such as handling personal banking. See the [Conversation Flows Introduction](B03-04_0100-Conversation-Flows-Intro.md) topic for more details.

* **Integrations** - Amelia includes an integration framework and tools to create integration flows. The framework can customize logic and overrides needed to connect with services. The framework uses the Camel expression language. See the [Integrations Introduction](B03-06_0201-Integrations-Intro.md) topic for more details.


#### Inputs Panel

Inputs define parameters each of your functions requires. Use unique descriptive words for the Name and Description fields. This helps the agent and LLMs process input values.

*Input Fields*

| Field                                                                       | Description                                                                                                                                                                                                                         |
|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                        | Type a unique descriptive name for your input parameter. For example, checkInDate to capture the user's date to check in to a hotel.                                                                                                |
| Description                                                                 | Type a unique descriptive phrase or sentence for your input parameter.                                                                                                                                                              |
| Type                                                                        | Select the data type for the input parameter. Options are String, Number, Boolean, Array, and Object.                                                                                                                               |
| Required                                                                    | Select if the input parameter is required.                                                                                                                                                                                          |
| ![AddMetadata-Btn-AgenticAI.png](AddMetadata-Btn-AgenticAI.png){width="20"} | Click to add metadata for the input parameter.<br/>If the parameter is an Object or Array, the popup lets you copy paste JSON code to define the parameter.<br/>Otherwise, the popup lets you set an exact value for the parameter. |
| ![Delete-Btn-AgenticAI.png](Delete-Btn-AgenticAI.png){width="16"}           | Click to delete an input parameter.                                                                                                                                                                                                 |
| + Add Input Parameter                                                       | Click to add a new row with fields to define an input parameter.                                                                                                                                                              |


#### Outputs Panel

Outputs capture data from a function. Use unique descriptive words for the Name and Description fields. This helps the agent and LLMs process output values.

*Output Fields*

| Field                                                             | Description                                                                                                                         |
|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                              | Type a unique descriptive name for an output parameter. For example, checkInDate to capture the user's date to check in to a hotel. |
| Description                                                       | Type a unique descriptive phrase or sentence for an output parameter.                                                               |
| ![Delete-Btn-AgenticAI.png](Delete-Btn-AgenticAI.png){width="16"} | Click to delete an input parameter.                                                                                                 |
| + Add Output Parameter                                            | Click to add a new row with fields to define an output parameter.                                                                   |


#### Pre-Condition Panel

Use the Pre-Condition panel to define any pre-conditions for the input or output parameters. Type a parameter variable name, the evaluation type, and expected value. You also can add instructions for the pre-condition.

Click the Advanced tab to display an editor. The editor lets you type more complex evaluation instructions. For example, regular expressions to validate an email address.


##Add Cognitive Functions {% #Add %}

You can add functions in different ways. For example, by importing an existing function file you've exported. Or as part of configuring an agent. To begin with a new function, use the **+ Add New button** in the left side panel.

To add a function:

1. Click the **+ Add New button** in the left side panel. The New Cognitive Function tab workspace displays.

2. Pick one of the three options: Web Action, Conversation Flow, or Integration. Click each option to display existing examples to use as a model. You'll see examples below each option.

3. Click an existing Web Action, Conversation Flow, or Integration from the list.

4. Click the Next button at the bottom of the workspace.

5. Rename the function. Make any changes needed, for example, the function name.

6. Click the **Save button**.


##Search for Cognitive Functions {% #Search %}

To search for a function listed in the left side panel, click the **Search here box** near the top of the panel. Then click an item to display it in a tab workspace.


##Edit Cognitive Functions {% #Edit %}

To edit a function:

1. Create a new function or click a function listed in the left side panel.

2. In the edit workspace that appears, make any changes.

3. Click the **Save button** at the top of the workspace.


##Import Cognitive Functions {% #Import %}

To import a function file:

1. In the left side panel, click the Import (![Import-Btn-AgenticAI.png](Import-Btn-AgenticAI.png){width="30" style="inline"}) button.

2. In your file explorer popup, navigate to the function file to import.

3. Click the Upload button in your file explorer popup to import the file.


##Export Cognitive Functions {% #Export %}

To export a function file:

1. Create a new function or click a function listed in the left side panel.

2. Click the **Export button** at the top of the edit workspace.

3. Save the exported function file to your computer or network.

> You can export function files from the left side panel. Click the empty checkbox to the right of a function name listed there. The **Export button** will display at the top of the panel. Click the **Export button** to export one or more files.


##Delete Cognitive Functions {% #Delete %}

To delete a function:

1. Click a function listed in the left side panel.

2. Click the **Delete button** at the top of the edit workspace.


## More Resources

{% include from="B11-00_0002-AgenticAI-MoreResources.md" element-id="B11-00_0002-AgenticAI-MoreResources_snippet" /%}

