# Script Block

## Introduction

{% include from="B03-04_0120-Script-Block-Intro.md" element-id="B03-04_0120-Script-Block-Intro_snippet" /%}

![B03-04_0120-DEB-Script](B03-04_0120-DEB-Script.png){width="900" style="block"}

*The Script Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Script block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).
* [Create a Custom UI card](#Create).
* [Create a form](#Create2).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Script block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has several tabs with settings to configure.

* **Settings tab**: Configures script details and console feedback.
* **Advance Settings ta**b: Configures basic settings and custom properties.
* **Voice tab**: Configures how the block presents in audio.

### Settings Tab

The Settings tab defines the script details and console feedback.

![B03-04_0120-DEB-Script-Settings](B03-04_0120-DEB-Script-Settings.png){width="600" style="block"}

*The Settings Tab*

*Settings Tab Elements*


| Element                                                                                                         | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                                                                                                        |         | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Imported Script Libraries                                                                                       |         | Use the dropdown to make a selection from your script library. You'll use this setting when you have a script dependency as part of the script you add to the script editor. So, when using a function in a script that's defined outside of it, the script must import the file where the function's defined. Amelia uses this selection with the content of the script editor to run your script. Once selected, a chip appears below the dropdown. Use the ![B03-04_0120-DEB-Script-Open-Res](B03-04_0120-DEB-Script-Open-Res.png){width="25" style="inline"} button to open the script. The script opens as a new tab with edit, save, import and export capabilities. Clicking Delete ( ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"}) clears the selected script. |
| **Script**                                                                                                      |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ![B03-04_0120-DEB-Script-Syntax-Btn](B03-04_0120-DEB-Script-Syntax-Btn.png){width="25" style="inline"} button   |         | To check the syntax of the code, click the Syntax Check ( ![B03-04_0120-DEB-Script-Syntax-Btn](B03-04_0120-DEB-Script-Syntax-Btn.png){width="25" style="inline"}) button at the top right of the script editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ![B03-04_0120-DEB-Script-Format-Btn](B03-04_0120-DEB-Script-Format-Btn.png){width="25" style="inline"} button   |         | To format code in the script editor, click the Format ( ![B03-04_0120-DEB-Script-Format-Btn](B03-04_0120-DEB-Script-Format-Btn.png){width="25" style="inline"}) button at the top right of the script editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Script Editor                                                                                                   |         | Type or copy/paste Groovy programming language code into the script editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ![B03-04-DEB-Btn-Script-Editor-Popup](B03-04-DEB-Btn-Script-Editor-Popup.png){width="25" style="inline"} button |         | To open the script editor in a large popup, click the Full Screen ( ![B03-04-DEB-Btn-Script-Editor-Popup](B03-04-DEB-Btn-Script-Editor-Popup.png){width="25" style="inline"}) button at the top right inside the editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Console                                                                                                         |         | To see status messages related to the script editor, expand the Console dropdown under the editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


### Advanced Settings Tab

The Advanced Settings tab defines basic settings and custom properties.

![B03-04_0120-DEB-Script-Adv-Settings](B03-04_0120-DEB-Script-Adv-Settings.png){width="600" style="block"}

*The Advanced Settings Tab*

*Advanced Settings Tab Elements*


| Element                       | Default | Description                                                                                                |
|-------------------------------|---------|------------------------------------------------------------------------------------------------------------|
| Search Here                   |         | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                     |
| **Basic**                     |         |                                                                                                            |
| Execution Timeout in Seconds  | 120     | Type a timeout in seconds value.                                                                           |
| SLA Breach Interval (minutes) |         | {% include from="Setting-SLA-Breach-Interval.md" element-id="Setting-SLA-Breach-Interval_snippet" /%} |
| **Custom Properties**         |         |                                                                                                            |
| + Add Property button         |         | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}     |


### Voice Tab

The Voice tab defines voice configuration settings to manage how the block presents in audio.

![B03-04_0120-DEB-Script-Voice](B03-04_0120-DEB-Script-Voice.png){width="600" style="block"}

*The Voice Tab*

*Voice Tab Elements*


| Element                 | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Voice Configuration** |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Settings                |         | {% include from="B03-04_0113-DEB-Amelia-Says-Settings.md" element-id="B03-04_0113-DEB-Amelia-Says-Settings_snippet" /%} <ul><li><strong>Idle State Audio</strong>: {% include from="B03-06_0138-Idle-State-Audio.md" element-id="B03-06_0138-Idle-State-Audio_snippet" /%}</li><li><strong>Trigger Idle State</strong>: {% include from="B03-06_0138-Trigger-Idle-State.md" element-id="B03-06_0138-Trigger-Idle-State_snippet" /%}</li></ul> |


##Adding a Block {% #Adding %}

To add a Script block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Script block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the Script button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.
{% include from="B03-04_0113-Block-Error-State.md" element-id="B03-04_0113-Block-Error-State_snippet" /%}

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Create a Custom UI Card {% #Create %}

Conversation data can display in cards alongside a conversation flow. Working with Amelia to buy car insurance might display a block or card with insurance-related data. The card might update as the conversation evolves using additional Script blocks later in a conversation.

The code needed to create and update cards is placed in Script blocks. When a card appears depends on the location of the Script block as you build a conversation.

This code example is from the Custom UI Integration Guide, available from your Engagement Manager.

![B03-04_0120-Script-Card-Example](B03-04_0120-Script-Card-Example.png){style="block"}

*The Example Card Code and Output for a Script Block*

The Custom UI is part of the UI Bundles feature. The [UI Bundles Configuration](B01-04_0303-UI-Bundles-Configuration.md) topic has details.

<br />

##Create a Form {% #Create2 %}

> This feature is useful but deprecated. The Amelia Asks block includes a Widget property tab feature that can create a variety of forms. Use this feature if you cannot create a form with that block. See [the Amelia Asks topic](B03-04_0114-Amelia-Asks-Block.md) for details. {style="warning"}

The `formInputDataBuilder` handle defines data payloads sent to the Custom UI or conversation flow with a Script block. The payloads are converted into forms that display within the chat interface.

*formInputDataBuilder Handle Elements*


|           Element           |                                                                                                                                                                                                                                                                                                                                     Description                                                                                                                                                                                                                                                                                                                                      |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| def fieldBuilder            | Define a variable fieldBuilder to pass to the custom user interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| name                        | Mandatory internal name, must be unique across sections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| nameForDisplay              | Name visible on the UI (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| formType                    | Type of the form data being sent. Used for gross determinations by the client. For choice buttons use sampleForm, otherwise booleanForm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| staticSelectionUtterance    | Adds text to user's selection when Amelia displays the user response. For example: .staticSelectionUtterance("Edit the first vehicle") Whether the user selects one or many elements, the utterance will be, "Edit the vehicle". One of the three SelectionUtterance fields -- postfixedSelectionUtterance, prefixedSelectionUtterance, or staticSelectionUtterance -- must be present in the form definition code, whether populated or not. Otherwise, any selection in the custom user interface will return and display the word None.                                                                                                                                           |
| allowedUserInputs           | Which inputs should be enabled when the form is displayed on the UI. Valid choices are: both, form_only, chat_only                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| addField                    | Define a unique field made of unique options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| name                        | Internal name for the unique field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| fieldType                   | Custom section title, for example, a multi-selection-field. May be used to provide rendering and behavior hints to the custom UI. Possible values are singleSelection, multipleSelection, multipleSelectionImage, carousel, autoComplete, cancelButton.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| postfixedSelectionUtterance | Adds text to user's selection when Amelia displays the user response. For example: .postfixedSelectionUtterance("I have selected this", "I have selected") For single choice buttons, the first argument is used, "I have selected this " + button label. For a multiple select form, the second argument is used, "I have selected" + button 1 label + button 3 label, etc. One of the three SelectionUtterance fields -postfixedSelectionUtterance, prefixedSelectionUtterance, or staticSelectionUtterance -- must be present in the form definition code, whether populated or not. Otherwise, any selection in the custom user interface will return and display the word None. |
| addOption                   | Define a unique option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| name                        | Displayed name for the unique option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| value                       | Internal field value for the unique option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| backToField                 | Marks the end of the unique option definition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| backToForm                  | Defines the end of the unique field definition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Example

This example includes the most common shared code structure elements for custom UI features displayed in the chat conversation area. It's optimized for the Groovy language.

```Groovy
def fieldBuilder = formInputDataBuilder.create()
    .name("singleChoiceButton")
    .nameForDisplay("Single Choice Button")
    .formType("sampleForm")
    .staticSelectionUtterance("")
    .allowedUserInputs("both")
    .addField()
        .name("someChoice")
        .fieldType("singleSelection")
        .postfixedSelectionUtterance("", "")
            .addOption()
            .name("Rare")
            .value("Rare")
            .backToField()
        .addOption()
            .name("Medium Rare")
            .value("Medium Rare")
            .backToField()
        .addOption()
            .name("Medium")
            .value("Medium")
            .backToField()
        .addOption()
            .name("Medium Well")
            .value("Medium Well")
            .backToField()
        .addOption()
            .name("Well Done")
            .value("Well Done")
            .backToField()
            .backToForm()
        .build()

println(formInputData.toJsonString(true, true)

execution.setVariable('formInputData', formInputData.toJsonString())
```


## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)
* [Sandboxing and Whitelists](B03-04_0404-Script-Sandboxing-and-Whitelist.md)

