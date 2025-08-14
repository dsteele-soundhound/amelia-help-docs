# Exit Block

## Introduction

{% include from="B03-04_0126-Exit-Block-Intro.md" element-id="B03-04_0126-Exit-Block-Intro_snippet" /%}

![B03-04_0126-DEB-Exit](B03-04_0126-DEB-Exit.png){width="900" style="block"}

*The Exit Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure an Exit block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copy).
* [Delete a block](#Deleting).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

The property panel for an Exit block displays when you click the block. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has a few settings to configure.

* **Settings tab**: Configures the block's name and the exit type.

* **Advanced Settings tab**: Configures custom properties.

* **Voice tab**: Configures how the block presents in audio.

### Settings Tab

The Settings tab configures the block's name and the exit type used.

![B03-04_0126-DEB-Exit-Settings](B03-04_0126-DEB-Exit-Settings.png){width="600" style="block"}

*The Settings Tab*

*Settings Tab Elements*


| Element      | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Settings** |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Name         | Exit Flow | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Exit Type    | Exit Flow | Select the type of exit: <ul><li><strong>Exit Flow</strong>: Stops the current active flow but keeps any context and information used by other active flows.</li><li><strong>Exit Context</strong>: Discards any details about the current context. For example, Amelia discards details for intents, entities, user data and other stored information.</li><li><strong>Exit All Contexts</strong>: Discards all details about all existing active contexts. For example, Amelia discards details for intents, entities, user data and other stored information.</li><li><strong>Exit Conversation</strong>: Stops the current conversation and exits.</li></ul> |


### Advanced Settings Tab

The Advanced Settings tab defines the block's custom properties.

![B03-04_0126-DEB-Exit-Advanced-Settings](B03-04_0126-DEB-Exit-Advanced-Settings.png){width="600" style="block"}

*The Advanced Settings Tab*

*Advanced Settings Elements*


| Element               | Default | Description                                                                                            |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------|
| Search Here           |         | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                 |
| **Custom Properties** |         |                                                                                                        |
| + Add Property button |         | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%} |


### Voice Tab

The Voice tab defines voice configuration settings to manage how the block presents in audio.

![B03-04_0126-DEB-Exit-Voice](B03-04_0126-DEB-Exit-Voice.png){width="600" style="block"}

*The Voice Tab*

*Voice Tab Elements*


| Setting                      | Default | Description                                                                                                                                                                                                                                 |
|------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Voice Configuration**      |         |                                                                                                                                                                                                                                             |
| Settings                     |         | {% include from="B03-04_0113-DEB-Amelia-Says-Settings.md" element-id="B03-04_0113-DEB-Amelia-Says-Settings_snippet" /%} Additional CDR: {% include from="B03-06_0138-Addit-CDR.md" element-id="B03-06_0138-Addit-CDR_snippet" /%} |
| Browse button                |         | {% include from="B03-04_0113-DEB-Amelia-Says-Browse.md" element-id="B03-04_0113-DEB-Amelia-Says-Browse_snippet" /%}                                                                                                                    |
| **SIP**                      |         |                                                                                                                                                                                                                                             |
| + Add SIP      Header button |         | {% include from="B03-04_0127-DEB-SIP-Header-Description.md" element-id="B03-04_0127-DEB-SIP-Header-Description_snippet" /%}                                                                                                            |


##Adding a Block {% #Adding %}

To add an Exit block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Exit block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"})      button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the **Exit** button.

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

