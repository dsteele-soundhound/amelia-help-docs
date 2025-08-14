# Backend Block

## Introduction

{% include from="B03-04_0118-Backend-Block-Intro.md" element-id="B03-04_0118-Backend-Block-Intro_snippet" /%}

![B03-04_0118-DEB-Backend](B03-04_0118-DEB-Backend.png){width="900" style="block"}

*The Backend block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Backend block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Backend block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has several tabs with settings to configure.

* **Settings tab**: Defines how Amelia uses the block. After choosing a type, you'll configure related inputs, outputs, custom properties, and error handling.

* Advanced Settings tab: Configures a variety of basic and custom properties.

* **Voice tab**: Configures how the block presents in audio.

### Settings Tab

The Settings tab defines how Amelia uses the block. After choosing a type, you'll configure related inputs, outputs, custom properties, and error handling.

![B03-04_0118-DEB-Backend-Settings1](B03-04_0118-DEB-Backend-Settings1.png){width="600" style="block"}

*The Settings Tab Showing the Type Dropdown*

*Settings Tab Showing the Type Dropdown*


| Element      | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Settings** |             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Type         | Placeholder | Lets you connect third-party resources in several ways, including a Placeholder option. <ul><li><strong>Integration Flow</strong>: use the Integrations workspace and Camel to connect with resources.</li><li><strong>Automation</strong>: use Automation to connect with resources.</li><li><strong>Web Action</strong>: use the Web Action workspace and the OpenAPI standard to connect with resources.</li><li><strong>Placeholder</strong>: create a temporary filler connection with temporary variables and other values to mimic a live connection for testing your conversation flow process.</li><li><strong>UiPath Bot</strong>: use a UiPath Bot to connect with resources.</li></ul> |


![B03-04_0118-DEB-Backend-Settings2](B03-04_0118-DEB-Backend-Settings2.png){width="600" style="block"}

*The Settings Tab with Type Set to Integration Flow*

*Settings Tab with Integration Flow Elements*


| Element            | Default | Description                                                                                                                    |
|--------------------|---------|--------------------------------------------------------------------------------------------------------------------------------|
| **Settings**       |         |                                                                                                                                |
| Integration Domain |         | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%}                       |
| Integration        |         | Select an integration flow from the dropdown, or click Create to setup a new integration.                                      |
| Execution Group    |         | A runtime parameter indicating which integration host to use to run the execution. Enter the name of the execution group here. |


![B03-04_0118-DEB-Backend-Settings3](B03-04_0118-DEB-Backend-Settings3.png){width="600" style="block"}

*The Settings Tab with Type Set to Automation*

*Settings Tab with Automation Elements*


| Element                                | Default            | Description                                                                                                                        |
|----------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Settings**                           |                    |                                                                                                                                    |
| Name                                   | Connect to Backend | The name of the backend automation process.                                                                                        |
| **Input**                              |                    |                                                                                                                                    |
| Variables                              |                    | Select variables to include.                                                                                                       |
| **Output**                             |                    |                                                                                                                                    |
| + Add Variable button                  |                    | {% include from="B03-04_0118-Add-Variable-Btn.md" element-id="B03-04_0118-Add-Variable-Btn_snippet" /%}                       |
| **Basic**                              |                    |                                                                                                                                    |
| Route                                  |                    | Select the route for the automation process.                                                                                       |
| Subject                                |                    | Enter the subject line for the automation process.                                                                                 |
| Task Type                              |                    | Enter the task type for the automation process.                                                                                    |
| Wait for Automation Execution          | None               | {% include from="B03-04_0118-Add-Wait-for-Auto-Execution.md" element-id="B03-04_0118-Add-Wait-for-Auto-Execution_snippet" /%} |
| Log Automation Execution Notifications | None               | {% include from="B03-04_0118-Log-Auto-Execution-Note.md" element-id="B03-04_0118-Log-Auto-Execution-Note_snippet" /%}         |


![B03-04_0118-DEB-Backend-Settings4](B03-04_0118-DEB-Backend-Settings4.png){width="600" style="block"}

*The Settings Tab with Type Set to Web Action*

*Settings Tab with Web Action Elements*


| Element                       | Default | Description                                                                                                      |
|-------------------------------|---------|------------------------------------------------------------------------------------------------------------------|
| **Settings**                  |         |                                                                                                                  |
| Web Action Domain             |         | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%}         |
| Web Action                    |         | Select a web action from the dropdown or click Create to setup a new web action.                                 |
| **Add to Web Action Scope**   |         |                                                                                                                  |
| Variables                     |         | {% include from="B03-04_0118-Add-Input-Variable.md" element-id="B03-04_0118-Add-Input-Variable_snippet" /%} |
| **Get From Web Action Scope** |         |                                                                                                                  |
| + Add Variable button         |         | {% include from="B03-04_0118-Add-Variable-Btn.md" element-id="B03-04_0118-Add-Variable-Btn_snippet" /%}     |


![B03-04_0118-DEB-Backend-Settings](B03-04_0118-DEB-Backend-Settings.png){width="600" style="block"}

*The Settings Tab with Type Set to Placeholder*

*Settings Tab with Placeholder Elements*


| Element               | Default            | Description                                                                                                                               |
|-----------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Settings**          |                    |                                                                                                                                           |
| Name                  | Connect to Backend | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                  |
| **Input**             |                    |                                                                                                                                           |
| Variables             |                    | {% include from="B03-04_0118-Add-Input-Variable.md" element-id="B03-04_0118-Add-Input-Variable_snippet" /%}                          |
| **Output**            |                    |                                                                                                                                           |
| + Add Variable button |                    | {% include from="B03-04_0118-Add-Variable-Btn.md" element-id="B03-04_0118-Add-Variable-Btn_snippet" /%}                              |
| **Custom Properties** |                    |                                                                                                                                           |
| + Add Property button |                    | Click to define custom properties. {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%} |


![B03-04_0118-DEB-Backend-Settings5](B03-04_0118-DEB-Backend-Settings5.png){width="600" style="block"}

The Settings Tab with Type Set to UiPath Bot (Attended Bot Type)*

![B03-04_0118-DEB-Backend-Settings6](B03-04_0118-DEB-Backend-Settings6.png){width="600" style="block"}

*The Settings Tab with Type Set to UiPath Bot (Unattended Bot Type)*

*Settings Tab with UiPath Bot Elements*


| Element                   | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **UiPath Basic Settings** |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Use Queue                 | Unchecked | Click to use a queue to invoke a UiPath robot.You'll use the queue approach if the user's Channel is not Amelia's Custom UI or FaceCall web chat interfaces and is instead a Voice call or Teams or Slack-based chat. To use a queue you must configure Amelia, as described in theUiPath topic.                                                                                                                              |
| Bot Type                  | Attended  | Attended bots take their cues from humans to increase productivity. Unattended bots automate processes without human intervention.                                                                                                                                                                                                                                                                                                                                        |
| Bot Name                  |           | Enter the process name of the UiPath bot that Amelia must invoke.                                                                                                                                                                                                                                                                                                                                                                                   |
| UiPath Configuration      |           | Select a UiPath configuration from the dropdown.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| UiPath Folder             |           | Select a UiPath folder from the dropdown.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Bot                       |           | Click to select from a list of available bots for the selected UiPath folder.                                                                                                                                                                                                                                                                                                                                                                                             |
| Strategy                  | All       | Select a method to use to execute your UiPath jobs. Options include: <ul><li><strong>All</strong>: Enter All to use all robots within the environment that are eligible to run the job.</li><li><strong>RobotCount</strong>: Enter RobotCount to use any specified number of robots from the environment that are eligible to run the job.</li><li><strong>Specific</strong>: Enter Specific to use a specific list of robots that are eligible to run the job.</li></ul> |
| Callback                  | Unchecked | Select if you expect to receive a response or results after the bot executes a task through the callback mechanism.                                                                                                                                                                                                                                                                                                                                                       |
| Task Timeout Type         | Seconds   | Select the type of timeout to use, Seconds, Minutes, or Hours.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Task Timeout Duration     | 60        | For the selected timeout type, enter the number of units to use to trigger a timeout.                                                                                                                                                                                                                                                                                                                                                                                     |
| **Error Handling**        |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Task Timeout              | Escalate  | Select whether to escalate or ignore when a task times out.                                                                                                                                                                                                                                                                                                                                                                                                               |
| Execution Error           | Escalate  | Select whether to escalate, ignore, or retry when there is an execution error.                                                                                                                                                                                                                                                                                                                                                                                            |
| Connection Failed         | Escalate  | Select whether to escalate, ignore, or retry when the connection fails.                                                                                                                                                                                                                                                                                                                                                                                                   |
| Integration Timeout       | Escalate  | Select whether to escalate, ignore, or retry when the integration times out.                                                                                                                                                                                                                                                                                                                                                                                              |
| **Parameters**            |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| + Add Parameter button    |           | Clicking the + Add Parameter button displays a pair of Name and Value fields. Click the + Add Parameter button to add more parameter key-value pairs. Click the Delete ( ![B04-01_0002-AA-Trash-Small](B04-01_0002-AA-Trash-Small.png){width="25" style="inline"}) button to delete a parameter key-value pair.                                                                                                                                                           |
| Output                    |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| + Add Variable button     |           | {% include from="B03-04_0118-Add-Variable-Btn.md" element-id="B03-04_0118-Add-Variable-Btn_snippet" /%} The variables created here are available to Amelia as Digital Employee builder and BPN (business process network) variables once you've executed the UiPath bot.                                                                                                                                                                       |


### Advanced Settings Tab

From this tab, you can set a variety of basic and custom properties.

![B03-04_0118-DEB-Backend-Adv-Set1](B03-04_0118-DEB-Backend-Adv-Set1.png){width="600" style="block"}

*The Advanced Settings Tab with Type Set to Integration Flow*

*Advanced Settings Tab with Integration Flow Elements*


| Element                             | Default                     | Description                                                                                                                                                                                                                                                          |
|-------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Here                         |                             | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                                                                                                                                                               |
| **Basic**                           |                             |                                                                                                                                                                                                                                                                      |
| Variable Propagation                | Bidirectional               | The type of variable propagation to and from the backend process. {% include from="B03-04_0118-Variable-Propagation.md" element-id="B03-04_0118-Variable-Propagation_snippet" /%}                                                                               |
| Flow Category                       |                             | The category in which to execute this flow for reporting purposes. For a null value, Amelia uses the default category.                                                                                                                         |
| Integration Flow Timeout in Seconds | 60                          | Enter the amount of time in seconds to wait for an integration flow before declaring a timeout.                                                                                                                                                                      |
| Integration Flow Log Level          | ERROR                       | Select the level of logged events to make available to Amelia's overall conversation process. Options are Error, Warning, and Info. <ul><li><strong>Error</strong>:</li><li><strong>Warning</strong>:</li><li><strong>Info</strong>:</li></ul> |
| Outgoing Entities                   | Property Type Not Supported |                                                                                                                                                                                                                                                                      |
| Async Execution                     | No                          | Runs the integration asynchronously at every retry interval, to keep the conversation in a suspended state.                                                                                                                                                          |
| Retry Interval (Minutes)            | 15                          | Interval at which an integration will be rerun.                                                                                                                                                                                                                      |
| Execution Expression                |                             | A JEXL expression supporting the resumption of Digital Employee builder execution. Once Amelia meets the provided expression, the integration will no longer retry, and the Digital Employee builder execution will proceed.                   |
| SLA Breach Interval (Minutes)       |                             | {% include from="B03-04_0118-Backend-SLA-Breach-Int.md" element-id="B03-04_0118-Backend-SLA-Breach-Int_snippet" /%}                                                                                                                                             |
| **Custom Properties**               |                             |                                                                                                                                                                                                                                                                      |
| + Add Property button               |                             | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                                                                                                                                                               |


![B03-04_0118-DEB-Backend-Adv-Set2](B03-04_0118-DEB-Backend-Adv-Set2.png){width="600" style="block"}

*The Advanced Settings Tab with Type Set to Automation*

*Advanced Settings Tab with Automation Elements*


| Element                                | Default                     | Description                                                                                                                        |
|----------------------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Search Here                            |                             | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                             |
| **Basic**                              |                             |                                                                                                                                    |
| Outgoing Entities                      | Property Type Not Supported |                                                                                                                                    |
| Subject                                |                             | Enter the subject line for the automaton process.                                                                                  |
| Task Type                              |                             | Enter the task type for the automation process.                                                                                    |
| Wait for Automation Execution          | Yes                         | {% include from="B03-04_0118-Add-Wait-for-Auto-Execution.md" element-id="B03-04_0118-Add-Wait-for-Auto-Execution_snippet" /%} |
| Log Automation Execution Notifications | Yes                         | {% include from="B03-04_0118-Log-Auto-Execution-Note.md" element-id="B03-04_0118-Log-Auto-Execution-Note_snippet" /%}         |
| **Custom Properties**                  |                             |                                                                                                                                    |
| + Add Property                         |                             | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                             |


![B03-04_0118-DEB-Backend-Adv-Set3](B03-04_0118-DEB-Backend-Adv-Set3.png){width="600" style="block"}

*The Advanced Settings Tab with Type Set to Web Action, Placeholder or UiPath Bot*

*Advanced Settings Tab with Web Action, Placeholder or UiPath Bot Elements*


| Element                       | Default | Description                                                                                            |
|-------------------------------|---------|--------------------------------------------------------------------------------------------------------|
| Search Here                   |         | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                 |
| **Basic**                     |         |                                                                                                        |
| SLA Breach Interval (Minutes) |         | Shown for Integration Flow and Web Action types only.                                                  |
| **Custom Properties**         |         |                                                                                                        |
| + Add Property                |         | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%} |


### Voice Tab

This tab lets you configure settings for use by a voice channel through the public switched telephone network or Voice Over IP.

![B03-04_0118-DEB-Backend-Voice](B03-04_0118-DEB-Backend-Voice.png){width="600" style="block"}

*Figure 12. Voice Tab*

*Voice Tab Elements*


| Element             | Default      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Voice Configuration |              |                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Settings            | Not Selected | {% include from="B03-04_0113-DEB-Amelia-Says-Settings.md" element-id="B03-04_0113-DEB-Amelia-Says-Settings_snippet" /%} <ul><li><strong>Idle State Audio</strong>: {% include from="B03-06_0138-Idle-State-Audio.md" element-id="B03-06_0138-Idle-State-Audio_snippet" /%}</li><li><strong>Trigger Idle State</strong>: {% include from="B03-06_0138-Trigger-Idle-State.md" element-id="B03-06_0138-Trigger-Idle-State_snippet" /%}</li></ul> |
| Browse button       |              | {% include from="B03-04_0113-DEB-Amelia-Says-Browse.md" element-id="B03-04_0113-DEB-Amelia-Says-Browse_snippet" /%}                                                                                                                                                                                                                                                                                                                                     |


##Adding a Block {% #Adding %}

To add a Backend block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Backend block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Builder Workspace Showing the Blocks Popup*

3. Click the Backend button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)


