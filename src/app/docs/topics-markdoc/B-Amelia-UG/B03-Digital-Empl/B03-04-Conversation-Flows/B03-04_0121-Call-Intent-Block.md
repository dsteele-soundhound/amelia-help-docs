# Call Intent Block

## Introduction

{% include from="B03-04_0121-Call-Intent-Block-Intro.md" element-id="B03-04_0121-Call-Intent-Block-Intro_snippet" /%}

To use intents as targets in the Call Intent block, you must have the AUTHORITY_ADMIN_BPN_TRIGGER_INTENT authority. Don't worry, if you don't have it yet, authorities are assigned by group. See [User Group Management](zB01-02_0302-User-Groups-Management.md) for more information.

![B03-04_0121-DEB-Call-Intent](B03-04_0121-DEB-Call-Intent.png){width="900" style="block"}

*The Call Intent Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Call Intent block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copy).
* [Delete a block](#Deleting).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

The property panel for a Call Intent block displays when you click the block. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **Settings tab**: Displays settings for Name, Domain and Intent. You can also create a brand new Intent by clicking the Advanced button.
* **Advanced Settings tab**: Configures the response pool selection policy to use, if you're using response pools.

### Settings Tab

The Settings tab defines the name, domain and intent of the call intent.

![B03-04_0121-DEB-Call-Intent-Settings](B03-04_0121-DEB-Call-Intent-Settings.png){width="600" style="block"}

*The Settings Tab*

*Settings Tab Elements*


| Element                                                                                             | Default | Description                                                                                                                                                                                                                                          |
|-----------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Settings**                                                                                        |         |                                                                                                                                                                                                                                                      |
| ![B03-04_0121-DEB-Advanced-Btn](B03-04_0121-DEB-Advanced-Btn.png){width="25" style="inline"} button |         | To create a new intent linked to this block, click the Advanced button on the Settings tab. A New Intent tab workspace opens. See the [Intents Introduction](B03-07_0201-Intents-Intro.md) topic for details about creating intents.                 |
| Name                                                                                                |         | Type a descriptive name for the block. You can modify the Name setting to describe the reason to call the intent within the process flow.                                                                                                            |
| Domain                                                                                              |         | Select the source of the intent called, either by clicking the Name or Variable buttons. <ul><li>If using a domain name, select the domain from a dropdown list.</li><li>If using a variable, enter the name of the variable in the field.</li></ul> |
| Intent                                                                                              |         | Select the intent to be called, either by clicking the Name or Variable buttons. <ul><li>If using a domain name, select the intent from a dropdown list.</li><li>If using a variable, enter the name of the variable in the field.</li></ul>         |


### Advanced Settings Elements

The Advanced Settings tab defines basic settings and custom properties.

![B03-04_0121-DEB-Call-Intent-Advanced](B03-04_0121-DEB-Call-Intent-Advanced.png){width="600" style="block"}

*The Advanced Settings Tab With the + Add Properties Button Triggered*

*Advanced Settings Tab Elements*


| Element                       | Default | Description                                                                                                              |
|-------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| Search Here                   |         | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                   |
| **Basic**                     |         |                                                                                                                          |
| SLA Breach Interval (minutes) |         | {% include from="B03-04_0118-Backend-SLA-Breach-Int.md" element-id="B03-04_0118-Backend-SLA-Breach-Int_snippet" /%} |
| **Custom Properties**         |         |                                                                                                                          |
| + Add Property button         |         | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                   |


##Adding a Block {% #Adding %}

To add an Amelia Says block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Call Intent block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the Call Intent button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.
{% include from="B03-04_0113-Block-Error-State.md" element-id="B03-04_0113-Block-Error-State_snippet" /%}

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)
      
