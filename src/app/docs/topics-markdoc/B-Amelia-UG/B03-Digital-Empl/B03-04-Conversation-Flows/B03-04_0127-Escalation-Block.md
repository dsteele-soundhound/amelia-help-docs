# Escalation Block

## Introduction

{% include from="B03-04_0127-Escalation-Block-Intro.md" element-id="B03-04_0127-Escalation-Block-Intro_snippet" /%}

![B03-04_0127-DEB-Escalation](B03-04_0127-DEB-Escalation.png){width="900" style="block"}

*The Escalation Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure an Escalation block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copy).
* [Delete a block](#Deleting).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Escalation block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has a few tabs with settings to configure.

* **Settings tab**: Configures the Source Type, Target Queue and Reason along with Custom Properties and Escalation Variables.
* **Voice tab**: Configures how the block presents in audio.

### Settings Tab

The Settings tab defines the Source Type, Target Queue and Reason along with Custom Properties and Escalation Variables.

![B03-04_0127-DEB-Escalation-Settings-Resource](B03-04_0127-DEB-Escalation-Settings-Resource.png){width="600" style="block"}

*The Settings Tab with Resource Source Type Selected*

![B03-04_0127-DEB-Escalation-Settings-Variable](B03-04_0127-DEB-Escalation-Settings-Variable.png){width="600" style="block"}

*The Settings Tab with Variable Source Type Selected*

*Settings Tab Elements*


| Element               | Default    | Description                                                                                              |
|-----------------------|------------|----------------------------------------------------------------------------------------------------------|
| **Settings**          |            |                                                                                                          |
| Source Type           | Resource   | Select the source of the escalation queue name, either a listed Resource or a name stored in a Variable. |
| Target Queue          |            | If the escalation queue name is from a listed resource, select the name of the escalation queue.         |
| Target Queue Variable |            | If you stored the escalation queue name as a variable, enter the name of the variable.                   |
| Reason                | Escalation | Enter a short description of the reason for the escalation.                                              |
| **Custom Properties** |            |                                                                                                          |
| + Add Properties      |            | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}   |
| Escalation Variables  |            |                                                                                                          |
| Variables             |            | Select any existing active variables to pass to the escalation queue.                                    |


### Voice Tab

The Voice tab defines voice configuration settings to manage how the block presents in audio.

![B03-04_0127-DEB-Escalation-Voice](B03-04_0127-DEB-Escalation-Voice.png){width="600" style="block"}

*The Voice Tab with Voice Configuration Settings Added*

*Voice Tab Elements*


| Setting                      | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Voice Configuration**      |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Settings                     |         | {% include from="B03-04_0113-DEB-Amelia-Says-Settings.md" element-id="B03-04_0113-DEB-Amelia-Says-Settings_snippet" /%} <ul><li><strong>Additional CDR</strong>: {% include from="B03-06_0138-Addit-CDR.md" element-id="B03-06_0138-Addit-CDR_snippet" /%}</li><li><strong>Escalate Silently</strong>: {% include from="B03-06_0138-Escalate-Silently.md" element-id="B03-06_0138-Escalate-Silently_snippet" /%}</li><li><strong>Escalation Target</strong>: {% include from="B03-06_0138-Escalate-Target.md" element-id="B03-06_0138-Escalate-Target_snippet" /%}</li><li><strong>Escalation Type</strong>: {% include from="B03-06_0138-Escalate-Type.md" element-id="B03-06_0138-Escalate-Type_snippet" /%}</li><li><strong>Sofia Profile for Escalation</strong>: {% include from="B03-06_0138-Sofia Prof-Escalation.md" element-id="B03-06_0138-Sofia Prof-Escalation_snippet" /%}</li></ul> |
| **MRCP**                     |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| + Add MRCP Header button     |         | {% include from="B03-04_0113-DEB-Amelia-Says-Add-MRCP.md" element-id="B03-04_0113-DEB-Amelia-Says-Add-MRCP_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **SIP**                      |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| + Add SIP      Header button |         | {% include from="B03-04_0127-DEB-SIP-Header-Description.md" element-id="B03-04_0127-DEB-SIP-Header-Description_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |


##Adding a Block {% #Adding %}

To add an Escalation block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Escalation block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the **Escalation** button.

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

