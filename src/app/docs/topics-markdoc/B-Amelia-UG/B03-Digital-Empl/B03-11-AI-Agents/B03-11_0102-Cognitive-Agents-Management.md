# Cognitive Agents Management

{% include from="B11-00_0003-AgenticAI-EAP.md" element-id="B11-00_0003-AgenticAI-EAP_snippet" /%}

## Introduction

{% include from="B11-00_0004-AgenticAI-CogAgents-Intro.md" element-id="B11-00_0004-AgenticAI-CogAgents-Intro_snippet" /%}

To use Cognitive Agents effectively, you should first understand their features and how to configure them. This topic gives insights into when and how to use Cognitive Agents.

The [Cognitive Agents Introduction](B03-11_0101-Cognitive-Agents-Intro.md) topic describes how they work. The [AI Agents Introduction](B03-11_0001-AI-Agents-Intro.md) topic describes Agentic AI and how it compares to other AI methods.

## Access Cognitive Agents Features

{% include from="B11-00_0004-AgenticAI-CogAgents-Access.md" element-id="B11-00_0004-AgenticAI-CogAgents-Access_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [Cognitive Agents Workspaces](#Workspaces)

* [Adding Cognitive Agents](#Add)

* [Testing Cognitive Agents](#Test)

* [Deploying and undeploying Cognitive Agents](#Deploy)

* [Searching for Cognitive Agents](#Search)

* [Editing Cognitive Agents](#Edit)

* [Importing Cognitive Agents](#Import)

* [Exporting Cognitive Agents](#Export)

* [Deleting Cognitive Agents](#Delete)

##Cognitive Agents Workspaces {% #Workspaces %}

The Cognitive Agents workspace includes tools to create and manage agents.

### The Creating Cognitive Agents Workspace

When you click the **+ Add New button** in the left side Cognitive Agents panel, the Creating AI Agent tab workspace displays. The workspace displays three ways to create agents.

>To create an AI agent, click the **Design AI Agent button** in the Create Manually panel. It's located at the top right of the tab workspace. The other options &mdash; AI Agent Design Assistant and Browse Templates &mdash; are inactive currently.{style="note"}

* **Create Manually** - Click the Design AI Agent button in this panel located at the top right of the workspace. This displays the Edit Cognitive Agents Workspace.

* **AI Agent Design Assistant** - Type a short goal-oriented description of your AI agent. Include any key features and abilities. Then click the Generate button to create an agent. _This option is inactive currently._

* **Browse Templates** - Browse a number of pre-built agents. Then click an agent the same or similar to what you need. _This option is inactive currently._

### The Edit Cognitive Agents Workspace

Once a new agent is created, the default Cognitive Agents edit workspace displays. The workspace is split into vertical columns.

* The Cognitive Agents Left Side Panel.

* The **Edit tab column** lets you configure agent details.

* The **Test/Playground column** appears when you click the Test button in the Edit tab column.

* The **Debug Test column** appears when you click the Debug (![Debug-Btn-AgenticAI.png](Debug-Btn-AgenticAI.png){width="30"}) button at the top of the Test column.

* The **right side column** displays content based on the top right edge icons.


![B03-11_0101-CognitiveAgents-Workspace-Edit-Full.png](B03-11_0101-CognitiveAgents-Workspace-Edit-Full.png){width="800"}

*The Edit Cognitive Agents Workspace*

![B03-11_0101-CognitiveAgents-Workspace-Debug.png](B03-11_0101-CognitiveAgents-Workspace-Debug.png){width="800"}

*The Test and Debug Test Columns*


<chapter title="Left Side Panel" collapsible="true" level="5">

This panel appears between the left edge navigation links and the Cognitive Agents workspace. The panel displays a list of agents.

To toggle open the Cognitive Agents panel, click the AI Agents icon link on the left edge navigation links. Then click the Cognitive Agents link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="20" style="inline"} icon at the top right of the Cognitive Agents panel.

*Cognitive Agents Panel Elements*

| Element                                                                     | Description                                                                                                                                                               |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![AddNewAgent-Btn-AgenticAI.png](AddNewAgent-Btn-AgenticAI.png){width="90"} | Click to display the Creating AI Agent workspace tab.                                                                                                                     |
| ![Import-Btn-AgenticAI.png](Import-Btn-AgenticAI.png){width="35"}           | Click to Import an existing Cognitive Agents file.                                                                                                |
| ![Export-Btn-AgenticAI.png](Export-Btn-AgenticAI.png){width="35"}           | Click a checkbox next to a Click to export a Cognitive Agents selected listed in the panel. Then click this button to export the selected agents. |
| Search here                                                                 | Click this box then type a partial or full name to find a Cognitive Agents.                                                     |

</chapter>

<chapter title="Edit Cognitive Agents Column" collapsible="true" level="5">

This column displays after you select how you want to create an agent. You select an option using the Creating AI Agent tab workspace. The workspace appears when you navigate to the Cognitive Agents link.

However you create an agent, or select an existing agent, this column lets you configure an agent. The column has four areas.

* **Agent Description** - The agent description fields help an LLM decide whether to call the agent or not. The fields include a role name, description, instructions, and links to any documents. The documents define operational guidelines and interaction boundaries.

* **Functions** - Each agent includes functions that perform tasks. For example, a conversation flow, web action, or integration with third-party tools. A cognitive agent for tourists might have a function to get local weather. And another function to return information about local attractions based on location.

* **Knowledge Collections** - Each agent can include documents with useful information about the agent task. This might include troubleshooting information, for example. Or sales return guidelines.

* **Response Post-Processors** - Agents also can include instructions used to process output. For example, to process and optimize third-party data for voice channels.



**Agent Description Area**

| Element               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Top Panel             ||
| Save                  | Click this button to save the agent.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Deploy/Undeploy       | Click to deploy or undeploy an agent.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Export                | Click this button to export an agent.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Test                  | Click to test this agent. The Test column will display with the Debug and Reset buttons at the top.                                                                                                                                                                                                                                                                                                                                                                |
| Delete                | Click this button to delete an agent.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Basics Panel          ||
| Name                  | Type a unique descriptive name for your agent. If help text is not visible to the right of this column, click the Help (![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="20"}) icon at the top right edge.                                                                                                                                                                                                                                                 |
| Description           | Type a clear and concise description of the purpose for your agent. If help text is not visible to the right of this column, click the Help (![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="20"}) icon at the top right edge.                                                                                                                                                                                                                            |
| Instructions Panels   ||
| Instructions          | Instructions are the operational framework for your AI agent. They guide the agent’s behavior, tone, and boundaries when interacting with users or performing tasks.<br><br>Type instructions for how your agent should behave. Specify tasks, responses, edge cases, and how it should adapt. If help text is not visible to the right of this column, click the Help (![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="20"}) icon at the top right edge. |
| Instruction Documents | Instruction documents provide additional context and guidance for the agent. They serve as reference materials. They reinforce the agent's behavior, tone, and boundaries outlined in the Instructions section. These documents help maintain consistency in responses, especially for complex or specialized tasks.<br><br>Click the dropdown list of any existing documents. Or click the Browse and Create buttons to create instructions for the agent.        |

**The Functions Area**

| Element   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functions | Functions define the specific tasks and operations the agent can perform. They are the actionable components of the agent’s design. They determine how it processes user inputs and delivers outputs.<br><br>Click the dropdown list of any existing functions. Or click the Browse and Create buttons to create functions to be used by the agent. If help text is not visible to the right of this column, click the Help (![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="20"}) icon at the top right edge. |

**The Knowledge Collection Area**

| Element               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Knowledge Collections | Knowledge collections contain curated sets of documents. These provide factual information for the agent to reference when responding to users. They help expand the agent’s knowledge base and improve accuracy in specific domains.<br><br>Click the dropdown list of any existing documents. Or click the Browse and Create buttons to create instructions for the agent. If help text is not visible to the right of this column, click the Help (![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="20"}) icon at the top right edge. |

**The Response Post-Processors Area**

| Element             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select channel here | Post-processors adapt outputs to meet the requirements of various platforms or mediums. For example, chat, voice, WhatsApp, or Microsoft Teams. Processors ensure the responses align with the target channel’s formatting, interaction style, and user expectations. Functions are a set of instructions or use a pre-defined function.<br><br>Click the dropdown and select a channel. A new panel displays with two options, Instructions and Functions.<br/>If help text is not visible to the right of this column, click the Help (![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="20"}) icon at the top right edge. |
| Instructions        | Type what the post-processor should do.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Functions           | Click the dropdown list of any existing functions. Or click the Browse and Create buttons to create instructions for the post-processor. If you create a function, see the [Cognitive Functions Management](B03-11_0202-Cognitive-Functions-Management.md) topic for details.                                                                                                                                                                                                                                                                                                                                                 |

</chapter>

<chapter title="The Test/Playground Column" collapsible="true" level="5">

This column displays after you click the Test button in the Edit Cognitive Agents column.

| Element                                                                     | Description                                                           |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------|
| ![Debug-Btn-AgenticAI.png](Debug-Btn-AgenticAI.png){width="28"}             | Click to display or hide the Debug column with its results and tools. |
| ![TestRefresh-Btn-AgenticAI.png](TestRefresh-Btn-AgenticAI.png){width="28"} | Click to refresh and reset the Test/Plaground column.                 |
| ![Send-Btn-AgenticAI.png](Send-Btn-AgenticAI.png){width="28"}               | Click to send a message utterance.                                    |
| ![Voice-Btn-AgenticAI.png](Voice-Btn-AgenticAI.png){width="20"}             | Click to speak a message.                                             |
| Type message here                                                           | Click then type a test message.                                       |


</chapter>

<chapter title="The Debug Test Column" collapsible="true" level="5">

This column displays after you click the Debug (![Debug-Btn-AgenticAI.png](Debug-Btn-AgenticAI.png){width="28"}) button at the top of the Test/Playground column. That column displays when you click the Test button in the Edit Cognitive Agents column.

The Debug Test column displays a columns with a number of tabs. Each tab displays a different view into how Amelia responds using your agent. Click the Agents tab to see the AI Agents interactions. The By Agent button shows the AI Agents processes.

| Element                                                                               | Description                                                                                               |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| ![Tokens-Btn-AgenticAI.png](Tokens-Btn-AgenticAI.png){width="25"}                     | The number of tokens used to respond to the user utterance.                                               |
| ![FunctionNumCalls-Btn-AgenticAI.png](FunctionNumCalls-Btn-AgenticAI.png){width="25"} | The number Functions called to respond to the user utterance.                                             |
| ![LLMNumCalls-Btn-AgenticAI.png](LLMNumCalls-Btn-AgenticAI.png){width="25"}           | The number of LLMs called to respond to the user utterance. Located at the top right of the Debug column. |
| ![ElapsedTime-Btn-AgenticAI.png](ElapsedTime-Btn-AgenticAI.png){width="25"}           | The elapsed time spent responding to the user utterance.                                                  |
| ![Timestamp-Btn-AgenticAI.png](Timestamp-Btn-AgenticAI.png){width="25"}               | The timestamp for each step in the process responding to the user utterance.                              |
| ![Function-Btn-AgenticAI.png](Function-Btn-AgenticAI.png){width="25"}                 | the name of the function called responding to the user utterance.                                         |
| ![View-Btn-DEB_Debug.png](View-Btn-DEB_Debug.png){width="30"}                         | Click to view Input and Output details for functions.                                                     |
| ![Copy-Btn-DEB_Toolbar.png](Copy-Btn-DEB_Toolbar.png){width="30"}                     | Click to copy Input and Output details for functions.                                                     |


</chapter>

<chapter title="Right Side Column" collapsible="true" level="5">

Regardless of the columns displayed, the top right edge has four buttons. Clicking each button displays different data.

| Button | Description                                          |
|--------|------------------------------------------------------|
|![Help-Btn-AgenticAI.png](Help-Btn-AgenticAI.png){width="25"}      | Click to display the column with help details.       |
|![TestDetails-Btn-AgenticAI.png](TestDetails-Btn-AgenticAI.png){width="25"}      | Click to close the Debug column.                     |
|![Analytics-Btn-AgenticAI.png](Analytics-Btn-AgenticAI.png){width="25"}       | Click to display analytics. Not currently activated. |
|![History-Btn-AgenticAI.png](History-Btn-AgenticAI.png){width="25"}        | Click to display history. Not currently activated.   |


</chapter>


##Add Cognitive Agents {% #Add %}

You can add agents several ways. For example, by importing an existing agent file you've exported. To begin with a new agent, use the **+ Add New button** in the left side panel. Save your initial configuration. Then add and rework the configuration details based on testing and debugging.

To add a new agent:

1. Click the **+ Add New button** in the left side panel. The Creating AI Agent tab workspace displays.

2. In the Create Manually area, click the **Design AI Agent button**. The Creating AI Agent tab workspace displays.

3. Type the **Name** and **Description** fields. Then type skills and other operational details in the Instructions field.

4. If you have instruction documents, click the **Select documents here dropdown**. You also can click the **Browse** or **+ Create button** to add detailed instructions.

5. Click the **+ Create button** at the top of the workspace to create then save your agent.


##Test Cognitive Agents {% #Test %}

To test an agent:

1. Create a new agent or click an agent listed in the left side panel.

2. Click the **Test button** at the top of the edit workspace. The Testing/Playground column will display.

3. Click the Debug (![Debug-Btn-AgenticAI.png](Debug-Btn-AgenticAI.png){width="28" style="inline"}) button to display the Debug column. Then click the **Agents tab** in the Debug column. Or other tab.

4. In the Testing/Playground column, at the bottom type or speak a test utterance. Then click the Send (![Send-Btn-AgenticAI.png](Send-Btn-AgenticAI.png){width="20" style="inline"}) button.

> Test with voice by clicking the Voice (![Voice-Btn-AgenticAI.png](Voice-Btn-AgenticAI.png){width="18" style="inline"}) button at the bottom left of the Testing/Playground column.


##Deploy or Undeploy Cognitive Agents {% #Deploy %}

To deploy an agent:

1. Create a new agent or click an agent listed in the left side panel.

2. Click the **Deploy button** at the top of the edit workspace. If this is not the first version, the deployment dropdown displays at the top of the tab workspace.

> To undeploy an agent, click the **Undeploy button** that appears at the top of the edit workspace.{style="note"}


##Search for Cognitive Agents {% #Search %}

To search for an agent listed in the left side panel, click the **Search here box** near the top of the panel. Then click an item to display it in a tab workspace.

##Edit Cognitive Agents {% #Edit %}

To edit an agent:

1. Create a new agent or click an agent listed in the left side panel.

2. In the edit workspace that appears, make any changes.

3. Click the **Save button** at the top of the workspace.


##Import Cognitive Agents {% #Import %}

To import an agent:

1. In the left side panel, click the Import (![Import-Btn-AgenticAI.png](Import-Btn-AgenticAI.png){width="30" style="inline"}) button.

2. In the file explorer popup, navigate to the agent file to import.

3. Click the Upload button in your file explorer popup to import the file.


##Export Cognitive Agents {% #Export %}

To export an agent file:

1. Create a new agent or click an agent listed in the left side panel.

2. Click the **Export button** at the top of the edit workspace.

3. Save the exported agent file to your computer or network.

> You can export agent files from the left side panel. Click the empty checkbox to the right of an agent name listed there. The **Export button** will display at the top of the panel. Click the **Export button** to export one or more files.


##Delete Cognitive Agents {% #Delete %}

To delete an agent:

1. Click an agent listed in the left side panel.

2. Click the **Delete button** at the top of the edit workspace.


## More Resources

{% include from="B11-00_0002-AgenticAI-MoreResources.md" element-id="B11-00_0002-AgenticAI-MoreResources_snippet" /%}
