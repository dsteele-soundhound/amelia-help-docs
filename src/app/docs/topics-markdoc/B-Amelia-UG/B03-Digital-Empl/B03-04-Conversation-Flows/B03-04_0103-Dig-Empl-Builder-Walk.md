# Digital Employees Builder Walkthrough

## Introduction

To use the builder tool effectively, you must understand its features and where to find them. On the left of the builder interface, is a Conversation Flows panel to organize your flows. The builder also includes a center canvas to create and edit flows. The top and right edge of the canvas showcases various elements used in building your flows.


![B03-04-DEB-Workspace](B03-04-DEB-Workspace.png){width="900" style="block"}

*An Example Conversation Flow*

## What You'll Learn

In this topic you'll learn about:

* [The Amelia main menu](#Amelia).
* [Accessing the Digital Employees builder](#DEB).
* [The Conversation Flows panel](#Conversa).
* [The Digital Employees builder canvas](#Digital).
* [The top toolbar](#Top).
* [The blocks popup](#Blocks).
* [Conversation blocks](#Conversation).
* [The properties popup](#Properties).
* [The right side menu](#Right).

##Amelia Main Menu {% #Amelia %}

On entry into Amelia, you'll find the main menu in the header area at the top left of the application. The main menu is your key entry point into any of the workspaces offered by Amelia.

To go to the Digital Employees workspace, From the **top left main** menu, click Digital Employees. The Digital Employees builder is a part of the Digital Employees workspace.

###Access the Digital Employees Builder {% #DEB %}

To access the builder tool:
{% include from="B03-04_0103-BuilderAccessSteps.md" element-id="B03-04_0103-BuilderAccessSteps_snippet" /%}

##Conversation Flows Panel {% #Conversa %}

The Conversation Flows panel appears between the left side menu and the Home tab. The panel has a tree-like structure of folders and builder conversation flows. Using this panel you can create, clone, or delete folders and flows. Hover over an entry to display its related buttons.

> Click the **Collapse** ( ![Close-Panel-Btn-DEB_Left](Close-Panel-Btn-DEB_Left.png){width="25" style="inline"}) button to close and hide the panel.

![B03-04-DEB-Workspace-CF_Panel](B03-04-DEB-Workspace-CF_Panel.png){width="900" style="block"}

*The Digital Employees Workspace with Conversation Flows Panel Open*

*Conversation Flows Panel Elements*
<table>
<tr><td>Element</td><td>Description</td></tr>
<tr><td>Create Folder ( <img src="Create_Folder-Btn-DEB_Panel.png" alt="Create_Folder-Btn-DEB_Panel" width="25" style="inline" />) button</td><td>Click to add a new folder below this folder. In the Name field, enter the name for your new folder. Amelia only accepts the following characters: [a-zA-Z0-9_-]. The maximum length is 128 characters.</td></tr>
<tr><td>Create Flow ( <img src="Create_Flow-Btn-DEB_Panel.png" alt="Create_Flow-Btn-DEB_Panel" width="25" style="inline" />) button</td><td>Click to add a flow in this folder.</td></tr>
<tr><td>Configuration ( <img src="Config-Btn-DEB_Panel.png" alt="Config-Btn-DEB_Panel" width="25" style="inline" />) button</td><td>Click to display folder configuration options: Delete Folder, Rename Folder, and Import. <ul><li><strong>Delete Folder:</strong> Deleting a folder is a two-step process. At the delete confirmation modal, you can choose to cancel the operation or go ahead and delete the folder.</li><li><strong>Rename Folder:</strong> To remove the existing Name, click the <img src="Delete_X-Btn-Amelia_Answers.png" alt="Delete_X-Btn-Amelia_Answers" width="25" style="inline" /> button. Enter a new Name and click Rename. Amelia only accepts the following characters: [a-zA-Z0-9_-]. The maximum length is 128 characters. Clicking Cancel discards all changes made.</li><li><strong>Import:</strong> Click to import a JSON or SVG format conversation flow into the current folder. Click the Upload File button to browse for a file. After finding and selecting a file, click Open. The import modal shows the file name of the file you're importing. To complete the process, click Import.</li></ul> Alternatively, to remove this file, click the Delete ( <img src="B03-04-DEB-Btn-Flow-Del.png" alt="B03-04-DEB-Btn-Flow-Del" width="25" style="inline" />) button alongside the file name or click Cancel to discard all changes.</td></tr>
<tr><td>Clone Flow ( <img src="Clone_Flow-Btn-DEB_Panel.png" alt="Clone_Flow-Btn-DEB_Panel" width="25" style="inline" />) button</td><td>Click to clone the selected flow. In the Name field, enter the name for your new conversation flow. Amelia only accepts the following characters: [a-zA-Z0-9_-]. The maximum length is 128 characters.</td></tr>
<tr><td>Delete Flow ( <img src="B03-04-DEB-Btn-Flow-Del.png" alt="B03-04-DEB-Btn-Flow-Del" width="25" style="inline" />) button</td><td>Click to delete the selected flow.</td></tr>
</table>


##Digital Employees Builder Canvas {% #Digital %}

The Digital Employees builder canvas includes a range of tools to create and manage your conversation flows. These tools include the top toolbar, the blocks popup, conversation blocks, the properties popup, and the right side menu. The following sections guide you in how to use each of these tools and their individual elements.

###Top Toolbar {% #Top %}

The top toolbar sits at the top of the canvas. You can use this toolbar to save, modify, preview, publish, and deploy your conversation flow. Also, you can import and export flows. For more information about each button on this toolbar, see below.

![B03-04-DEB-Blocks-Top](B03-04-DEB-Blocks-Top.png){width="900" style="block"}

*The Builder Canvas with Top Toolbar Highlighted*

*Top Toolbar Elements*

<table>
<tr><td>Element</td><td>Default</td><td>Description</td></tr>
<tr><td>Save ( <img src="Save1-Btn-DEB_Toolbar.png" alt="Save1-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td>On (Blue)</td><td>Click to save a copy of the current conversation flow.<br/> Open the Save ( <img src="Save1-Btn-DEB_Toolbar.png" alt="Save1-Btn-DEB_Toolbar" width="25" style="inline" />) dropdown to show the Enable Auto Save toggle. By default, Amelia has the Enable Auto Save toggle set to On (blue).<br/> Besides supporting the Save button, the builder also offers save hotkeys. For example, to save a conversation flow, press Control+s or Command+s.</td></tr>
<tr><td>Import ( <img src="Import-Btn-DEB_Toolbar.png" alt="Import-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to import a JSON or SVG format conversation flow into the current conversation flow. Click the Upload File button to browse for a file. After finding and selecting a file, click Open. The import modal shows the file name of the file you're importing. To complete the process, click Import. Alternatively, to remove this file, click the Delete ( <img src="B03-04-DEB-Btn-Flow-Del.png" alt="B03-04-DEB-Btn-Flow-Del" width="25" style="inline" />) button alongside the file name or click Cancel to discard all changes.</td></tr>
<tr><td>Export ( <img src="Export-Btn-DEB_Toolbar.png" alt="Export-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td>JSON format</td><td>Click to Export your conversation flow in JSON format to your local or network computer.<br/> Click the Export ( <img src="Export-Btn-DEB_Toolbar.png" alt="Export-Btn-DEB_Toolbar" width="25" style="inline" />) dropdown to toggle between Default (JSON format) and As SVG (Scalable Vector Graphic) format. By default, Amelia uses the Default (JSON format). <ul><li><strong>Default</strong>: TBA</li><li><strong>As SVG</strong>: Use this format if you need an image format that uses XML and can scale without losing resolution.</li></ul></td></tr>
<tr><td>Undo ( <img src="Undo-Btn-DEB_Toolbar.png" alt="Undo-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to undo a earlier step.</td></tr>
<tr><td>Redo ( <img src="Redo-Btn-DEB_Toolbar.png" alt="Redo-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to redo a earlier step.</td></tr>
<tr><td>Copy ( <img src="Copy-Btn-DEB_Toolbar.png" alt="Copy-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to copy the selected block within a conversation flow.</td></tr>
<tr><td>Paste ( <img src="Paste-Btn-DEB_Toolbar.png" alt="Paste-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to paste the copied block below the current conversation. From here you can reposition the block as needed.</td></tr>
<tr><td>Delete ( <img src="Delete-Btn-DEB_Toolbar.png" alt="Delete-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to delete the selected block.</td></tr>
<tr><td>Instance ( <img src="Instance-Btn-DEB_Toolbar.png" alt="Instance-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td>Default</td><td>Click to select an Amelia instance to publish the conversation. Default is the default instance.</td></tr>
<tr><td>Publish ( <img src="Publish-Btn-DEB_Toolbar.png" alt="Publish-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to publish the current conversation to a selected Amelia instance.</td></tr>
<tr><td>Preview ( <img src="Preview-Btn-DEB_Toolbar.png" alt="Preview-Btn-DEB_Toolbar" width="25" style="inline" />) button</td><td> </td><td>Click to preview your current conversation flow. You can chat with Amelia in this panel to test and debug your conversation flow.<br/> The Conversation panel opens to the right of your conversation flow. In the Conversation panel, you'll find the conversation area. The conversation area is where the preview conversation plays out. Below that, you'll see the message area. The message area is where you can add utterances to test your conversation flow. To the right of the message area is the send button.<br/> At the top of the Conversation panel is a Debug button. Click this button to open the Debug panel. Once inside the Debug panel, you'll see a series of tabs as follows: <ul><li><strong>Subsystems tab</strong>: Shows how Amelia's response subsystems responded to an input.</li><li><strong>Entities tab</strong>: Shows entities that Amelia has identified and filled. To display details about a selected entity, click the View (<img src="View-Btn-DEB_Debug.png" alt="View-Btn-DEB_Debug" width="25" style="inline" />) button to the right of an entity row. To copy the value of a selected entity, click the Copy (<img src="Copy-Btn-DEB_Debug.png" alt="Copy-Btn-DEB_Debug" width="25" style="inline" />) button to the right of an entity row.</li><li><strong>Variables tab</strong>: Shows variables as they appear in Amelia. Use the filters to see variables from Amelia's Process, variables that appeared briefly (Transient), and variables displayed by Amelia in a Conversation. To display details about a selected variable, click the View (<img src="View-Btn-DEB_Debug.png" alt="View-Btn-DEB_Debug" width="25" style="inline" />) button to the right of a variable row. To copy the value of a selected variable, click the Copy (<img src="Copy-Btn-DEB_Debug.png" alt="Copy-Btn-DEB_Debug" width="25" style="inline" />) button to the right of a variable row.</li><li><strong>Console Log tab</strong>: Shows log messages with the ability to search and filter results. Messages log when Amelia deviates from the defined conversation flow, such as returning to a previous block. This can happen when Amelia receives unexpected user responses. To copy the value of a selected log entry, click the Copy (<img src="Copy-Btn-DEB_Debug.png" alt="Copy-Btn-DEB_Debug" width="25" style="inline" />) button to the right of a log entry row. Use the Search field at the top right of the tab to search for a specific console log entry.</li><li><strong>Cards tab</strong>: Details show where you've used an adaptive card to help Amelia respond to a conversation.</li><li><strong>Messages tab</strong>: Shows messages used to respond throughout the conversation. Use the dropdown on the left of the tab to filter messages by the selected message type. You can filter messages by one or many message types. Use the Search field at the top right of the tab to search for a specific message entry.</li></ul><br/>Open-ended Questions
Click the <img src="Close_Panel-Btn-DEB_Right.png" alt="Close_Panel-Btn-DEB_Right" width="25" style="inline" /> button to close the Debug panel. <br/>Click the <img src="Delete_X-Btn-Amelia_Answers.png" alt="Delete_X-Btn-Amelia_Answers" width="25" style="inline" /> button to close the Conversation panel.</td></tr>
<tr><td>Deploy Version ( <img src="Deploy_Version-Btn-DEB_Toolbar.png" alt="Deploy_Version-Btn-DEB_Toolbar" width="200" style="inline" />) button</td><td> </td><td>Click to select a version of the conversation to deploy.</td></tr>
<tr><td>Deploy ( <img src="Deploy-Btn-DEB_Toolbar.png" alt="Deploy-Btn-DEB_Toolbar" width="100" style="inline" />) button</td><td> </td><td>Click to deploy the current conversation flow to the selected instance.</td></tr>
</table>


###Blocks Popup {% #Blocks %}

Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button at the bottom of a block to display a popup of available blocks to add to a flow.

![B03-04-DEB-Blocks-Blocks](B03-04-DEB-Blocks-Blocks.png){width="900" style="block"}

*The Builder Canvas with Blocks Popup Highlighted*

*Blocks Popup Elements*

| Element                                           |                                                                                                                                                                   Description                                                                                                                                                                    |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Amelia Says button       | Click to add an Amelia Says block to the conversation flow. {% include from="B03-04_0113-Amelia-Says-Block-Intro.md" element-id="B03-04_0113-Amelia-Says-Block-Intro_snippet" /%} See our [Amelia Says block](B03-04_0113-Amelia-Says-Block.md) topic for more information.               |
| Amelia Asks button       | Click to add an Amelia Asks block to the conversation flow. {% include from="B03-04_0114-Amelia-Says-Intro.md" element-id="B03-04_0114-Amelia-Says-Intro_snippet" /%} See our [Amelia Asks block](B03-04_0114-Amelia-Asks-Block.md) topic for more information.                           |
| Present button           | Click to add a Present block to the conversation flow. {% include from="B03-04_0115-Present-Block-Intro.md" element-id="B03-04_0115-Present-Block-Intro_snippet" /%} See our [Present block](B03-04_0115-Present-Block.md) topic for more information.                                    |
| Request button           | Click to add a Request block to the conversation flow. {% include from="B03-04_0116-Request-Block-Intro.md" element-id="B03-04_0116-Request-Block-Intro_snippet" /%} See our [Request block](B03-04_0116-Request-Block.md) topic for more information.                                    |
| User Utterance button    | Click to add a User Utterance block to the conversation flow. {% include from="B03-04_0117-User-Utterance-Block-Intro.md" element-id="B03-04_0117-User-Utterance-Block-Intro_snippet" /%} See our [User Utterance block](B03-04_0117-User-Utterance-Block.md) topic for more information. |
| Backend button           | Click to add a Backend block to the conversation flow. {% include from="B03-04_0118-Backend-Block-Intro.md" element-id="B03-04_0118-Backend-Block-Intro_snippet" /%} See our [Backend block](B03-04_0118-Backend-Block.md) topic for more information.                                    |
| Subflow button           | Click to add a Subflow block to the conversation flow. {% include from="B03-04_0119-Subflow-Block-Intro.md" element-id="B03-04_0119-Subflow-Block-Intro_snippet" /%} See our [Subflow block](B03-04_0119-Subflow-Block.md) topic for more information.                                    |
| Script button            | Click to add a Script block to the conversation flow. {% include from="B03-04_0120-Script-Block-Intro.md" element-id="B03-04_0120-Script-Block-Intro_snippet" /%} See our [Script block](B03-04_0120-Script-Block.md) topic for more information.                                         |
| Call Intent button       | Click to add a Call Intent block to the conversation flow. {% include from="B03-04_0121-Call-Intent-Block-Intro.md" element-id="B03-04_0121-Call-Intent-Block-Intro_snippet" /%} See our [Call Intent block](B03-04_0121-Call-Intent-Block.md) topic for more information.                |
| Push Conversation button | Click to add Push Conversation block to the conversation flow. {% include from="B03-04_0122-Push-Conversat-Intro.md" element-id="B03-04_0122-Push-Conversat-Intro_snippet" /%} See our [Push Conversation block](B03-04_0122-Push-Conversation-Block.md) topic for more information.      |
| Card button              | Click to add a Card block to the conversation flow. {% include from="B02-04_0111-Card-Block-Intro.md" element-id="B02-04_0111-Card-Block-Intro_snippet" /%} See our [Card block](B03-04_0123-Card-Block.md) topic for more information.                                                   |
| Gateway button           | Click to add a Gateway block to the conversation flow. {% include from="B03-04_0124-Gateway-Block-Intro.md" element-id="B03-04_0124-Gateway-Block-Intro_snippet" /%} See our [Gateway block](B03-04_0124-Gateway-Block.md) topic for more information.                                    |
| Wait button              | Click to add a Wait block to the conversation flow. {% include from="B03-04_0125-Wait-Block-Intro.md" element-id="B03-04_0125-Wait-Block-Intro_snippet" /%} See our [Wait block](B03-04_0125-Wait-Block.md) topic for more information.                                                   |
| Split button             | Click to add a Split block to the conversation flow. {% include from="B03-04_0128-Split-Block-Intro.md" element-id="B03-04_0128-Split-Block-Intro_snippet" /%} See our Split block topic for more information.                                                                                                     |
| Exit button              | Click to add an Exit block to the conversation flow. {% include from="B03-04_0126-Exit-Block-Intro.md" element-id="B03-04_0126-Exit-Block-Intro_snippet" /%} See our [Exit block](B03-04_0126-Exit-Block.md) topic for more information.                                                  |
| Escalation button        | Click to add an Escalation block to the conversation flow. {% include from="B03-04_0127-Escalation-Block-Intro.md" element-id="B03-04_0127-Escalation-Block-Intro_snippet" /%} See our [Escalation block](B03-04_0127-Escalation-Block.md) topic for more information.                    |


###Conversation Blocks {% #Conversation %}

The Digital Employees builder relies on blocks to build out conversation flows and apply actions.

![B03-04-DEB-Workspace-Block](B03-04-DEB-Workspace-Block.png){width="900" style="block"}

*The Builder Canvas with Block Highlighted*

*Block Elements*

|                                                           Element                                                            |                                                                         Description                                                                          |
|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Amelia Says ( ![B03-04-DEB-Tab-Amelia](B03-04-DEB-Tab-Amelia.png){width="25" style="inline"}) button | Click to add an utterance for Amelia.                                                                                                  |
| User Says ( ![B03-04-DEB-Tab-User](B03-04-DEB-Tab-User.png){width="25" style="inline"}) button                                | Click to add a user utterance.                                                                                                                               |
| ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"} button                                             | Click to display the blocks popup. Hover over the block to display this button. See the [Blocks Popup](#Blocks) table to learn more about available options. |


###Properties Popup {% #Properties %}

When you select a block, a small properties popup shows on the left side of the block with three buttons. These buttons let you set the block's properties, copy, or delete the block.

![B03-04-DEB-Blocks-Properties](B03-04-DEB-Blocks-Properties.png){width="900" style="block"}

*The Builder Canvas with Properties Popup Highlighted*

*Properties Popup Elements*

|                                                      Element                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button | Click to open a properties panel for the selected block. Block properties use tabs with settings or elements in subgroups. Common tabs include: <ul><li><strong>Utterance tab</strong>: Typically displays settings for the input source, including typed utterances and response pool entries.</li><li><strong>Settings tab</strong>: Typically sets the response pool selection policy to use, if you're using response pools. Alternatively, defines how Amelia uses the individual block.</li><li><strong>Response tab</strong>: Typically sets the response pool selection policy to use, if you're using response pools.</li><li><strong>Advanced Settings tab</strong>: Typically sets the response pool selection policy to use, if you're using response pools. Or, sets basic display settings and custom properties.</li><li><strong>Voice tab</strong>: Typically configures how the block presents in audio.</li><li><strong>Locale Settings tab</strong>: Typically configures what Amelia says across languages.</li></ul> |
| Copy ( ![Copy-Btn-DEB_Properties](Copy-Btn-DEB_Properties.png){width="25" style="inline"}) button                   | Click to copy the selected block. Use Control+v or the top toolbar Paste ( ![Paste-Btn-DEB_Toolbar](Paste-Btn-DEB_Toolbar.png){width="25" style="inline"}) button to insert the block.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Delete ( ![Delete-Btn-DEB_Properties](Delete-Btn-DEB_Properties.png){width="25" style="inline"}) button             | Click to delete the selected block.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |


###Right Side Menu {% #Right %}

The menu at the top right of the builder canvas lets you open or close flow settings, display error messages or warnings, show variables and entities used, and search for specific words used in a conversation flow.

![B03-04-DEB-Blocks-Right](B03-04-DEB-Blocks-Right.png){width="900" style="block"}

*The Builder Canvas with Right Side Menu Highlighted*

*Right Side Menu Elements*

| Element                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Flow Settings ( ![Flow-Settings-Btn-DEB_Right](Flow-Settings-Btn-DEB_Right.png){width="25" style="inline"}) button                    | Click to access the Flow Settings panel for the current conversation flow. Here you'll find basic details such as the domain, creation date, modification date, creator's name, and the most recent modifier's name. You also have the option to delete the entire conversation flow. Further down the panel, you can update or set the following: the name of the diagram or flow, move the flow to a new folder location, and set the default escalation queue and escalation variables. In the last section, you can add, edit or delete your associated intents. To add a new intent, first set the association using the dropdown, and then click the + Add button. |
| Close Panel ( ![Close_Panel-Btn-DEB_Right](Close_Panel-Btn-DEB_Right.png){width="25" style="inline"}) button                          | Click to close the panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Errors and Warnings ( ![Error_Warn-Btn-DEB_Right](Error_Warn-Btn-DEB_Right.png){width="25" style="inline"}) button                    | Click to show the validation Errors and Warnings panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Variables and Entities ( ![Variables_Entities-Btn-DEB_Right](Variables_Entities-Btn-DEB_Right.png){width="25" style="inline"}) button | Click to show any variables and entities used in the conversation flow.<br/> The top line of the panel shows the intent utterance. Below that, you'll find a search tool that lets you search the table. The search starts from the first character entered. If your search is unsuccessful, a "No Variables Defined" message displays. You can use the Copy ( ![Copy-Btn-DEB_Debug](Copy-Btn-DEB_Debug.png){width="25" style="inline"}) button next to a variable to make a copy of it.                                                                                                                                                                                 |
| Search ( ![Search-Btn-DEB_Right](Search-Btn-DEB_Right.png){width="25" style="inline"}) button                                         | Click to search the Digital Employees builder for words or phrases used in the builder process. The search starts from the first character entered. If your search is unsuccessful, a "0 Result(s)" message displays under the search bar.<br/> Search results present in rows showing the type of block used and the utterance containing the search term. Click a search result to navigate to the block in the process where the search term appears.<br/> Click Delete ( ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"}) to clear a search term and begin a new search.                               |


## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)


