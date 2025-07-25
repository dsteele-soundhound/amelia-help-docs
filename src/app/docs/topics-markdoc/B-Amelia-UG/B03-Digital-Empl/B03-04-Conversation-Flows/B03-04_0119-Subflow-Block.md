# Subflow Block

## Introduction

{% include from="B03-04_0119-Subflow-Block-Intro.md" element-id="B03-04_0119-Subflow-Block-Intro_snippet" /%}

![B03-04_0119-DEB-Subflow](B03-04_0119-DEB-Subflow.png){width="900" style="block"}

*The Subflow Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Subflow block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).
* [Best use of the Subflow block](#Best).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Subflow block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has several tabs with settings to configure.

* **Settings tab**: Sets how you'll connect to the subflow, and related inputs and outputs.
* **Advanced Settings tab**: Configures a variety of basic and custom properties.
* **Voice tab**: Configures how the block presents in audio.

### Settings Tab

The Settings tab defines how the Amelia connects to the subflow and configuration for related inputs and outputs.

![B03-04_0119-DEB-Subflow-Settings](B03-04_0119-DEB-Subflow-Settings.png){width="600" style="block"}

*The Settings Tab with Flow Selected*

*Settings Tab with Flow Elements*


| Element                         | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|---------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Settings**                    |            |                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Path                            | Flow       | Sets the source for your subflow process, or how you'll connect your subflow. <ul><li><strong>Flow</strong>: Shows the Choose Flow button. {% include from="B03-04_0119-Choose-Flow-Btn.md" element-id="B03-04_0119-Choose-Flow-Btn_snippet" /%}</li><li><strong>Variable</strong>: Selecting Variable shows the Type Variable or Constant Value field. Enter the variable name or constant value in this field to continue.</li></ul> |
| Choose Flow button              |            | {% include from="B03-04_0119-Choose-Flow-Btn.md" element-id="B03-04_0119-Choose-Flow-Btn_snippet" /%}                                                                                                                                                                                                                                                                                                                                  |
| Edit button                     |            | Opens the associated Digital Employees builder flow for editing.                                                                                                                                                                                                                                                                                                                                                         |
| Type Variable or Constant value |            | If you selected Variable earlier, type the variable name or constant value in this field.                                                                                                                                                                                                                                                                                                                                                   |
| Variable Propagation            |            | How Amelia passes variables between the parent conversation flow and the child subflow. Enter one of the following options. {% include from="B03-04_0118-Variable-Propagation.md" element-id="B03-04_0118-Variable-Propagation_snippet" /%}                                                                                                                                                                      |
| Block Backjumps                 | Off (Gray) | The ability for the subflow process to block backjumps into the subflow process. By default Amelia blocks backjumps. Toggle this setting On (blue) to allow backjumps into your subflow process.                                                                                                                                                                                                                      |
| **Input**                       |            |                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Variables                       |            | Select variables to send to the subflow process.                                                                                                                                                                                                                                                                                                                                                                                            |
| **Output**                      |            |                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| + Add Variable button           |            | {% include from="B03-04_0118-Add-Variable-Btn.md" element-id="B03-04_0118-Add-Variable-Btn_snippet" /%}                                                                                                                                                                                                                                                                                                                                |


![B03-04_0119-DEB-Subflow-Popup-Flow](B03-04_0119-DEB-Subflow-Popup-Flow.png){width="600" style="block"}

*The Choose Flow Popup*

*Choose Flow Popup Elements*


| Element       | Default        | Description                                                                                                                                                                                        |
|---------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Here   |                | Helps to navigate and search through Digital Employees builder and or BPNs flows. Enter a folder or flow name to start a search.                     |
| Domain        | Current Domain | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%}                                                                                           |
| DEB Flows     |                | Selected by default. Filters the list below to show DEB flows only.                                                                                                                                |
| BPN Flows     |                | Click this option to filter the list below to show BPNs flows only.                                                                                                     |
| List          |                | To find the appropriate flow to use, click on the folders and then select the flow name from the list.                                                                                             |
| Cancel button |                | Cancels the selection process and closes the popup. Alternatively, click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} in the top right of the popup. |
| Select button |                | Clicking Select applies and completes the selection process and closes the popup.                                                                                                                  |


### Advanced Settings Tab

The Advanced Settings tab defines basic settings and custom properties.

![B03-04_0119-DEB-Subflow-Adv-Settings](B03-04_0119-DEB-Subflow-Adv-Settings.png){width="600" style="block"}

*The Advanced Settings Tab*

*Advanced Settings Tab Elements*


| Element                       | Default       | Description                                                                                                                                                                                                                                                            |
|-------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Here                   |               | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                                                                                                                                                                 |
| **Basic**                     |               |                                                                                                                                                                                                                                                                        |
| Block backjumps               | No            | Toggle on or off the ability for the Subflow to block backjumps into the parent conversation process flow.                                                                                                                                                             |
| Variable propagation          | Bidirectional | How Amelia passes variables between the parent conversation flow and the child subflow. Make a selection from the dropdown. {% include from="B03-04_0118-Variable-Propagation.md" element-id="B03-04_0118-Variable-Propagation_snippet" /%} |
| SLA Breach Interval (minutes) |               | {% include from="B03-04_0118-Backend-SLA-Breach-Int.md" element-id="B03-04_0118-Backend-SLA-Breach-Int_snippet" /%}                                                                                                                                               |
| **Custom Properties**         |               |                                                                                                                                                                                                                                                                        |
| + Add Property button         |               | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                                                                                                                                                                 |


### Voice Tab

This tab lets you configure settings for use by a voice channel through the public switched telephone network or Voice Over IP.

![B03-04_0119-DEB-Subflow-Voice](B03-04_0119-DEB-Subflow-Voice.png){width="600" style="block"}

*The Voice Tab*

*Voice Tab Elements*


| Element                 | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Voice Configuration** |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Settings                |         | {% include from="B03-04_0113-DEB-Amelia-Says-Settings.md" element-id="B03-04_0113-DEB-Amelia-Says-Settings_snippet" /%} <ul><li><strong>Idle State Audio</strong>: {% include from="B03-06_0138-Idle-State-Audio.md" element-id="B03-06_0138-Idle-State-Audio_snippet" /%}</li><li><strong>Trigger Idle State</strong>: {% include from="B03-06_0138-Trigger-Idle-State.md" element-id="B03-06_0138-Trigger-Idle-State_snippet" /%}</li></ul> |
| Browse button           |         | {% include from="B03-04_0113-DEB-Amelia-Says-Browse.md" element-id="B03-04_0113-DEB-Amelia-Says-Browse_snippet" /%}                                                                                                                                                                                                                                                                                                                                     |


##Adding a Block {% #Adding %}

To add a Subflow block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Subflow block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the Subflow button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.
{% include from="B03-04_0113-Block-Error-State.md" element-id="B03-04_0113-Block-Error-State_snippet" /%}

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Subflow block:

* To speed up development and testing, look for opportunities to reuse subflows across conversation flows.

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)


