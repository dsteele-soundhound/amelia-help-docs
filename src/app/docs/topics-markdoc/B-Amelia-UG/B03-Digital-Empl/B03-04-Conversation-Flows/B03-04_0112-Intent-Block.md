# Intent Block

## Introduction

{% include from="B03-04_0112-DEB-Intent-Block-Intro.md" element-id="B03-04_0112-DEB-Intent-Block-Intro_snippet" /%}

![B03-04_0112-DEB-Intent](B03-04_0112-DEB-Intent.png){width="900" style="block"}

*The Intent Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure an Intent block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).
* [Best use of the Intent block](#Best).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

The property panel for anIntent block displays when you click the block. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has two tabs with settings to configure.

* **Utterance tab**: Displays settings for the input source, including typed utterances and response pool entries.
* **Settings tab**: Configures the response pool selection policy to use, if you're using response pools.

### Utterance Tab

{% include from="Utterance-Intro.md" element-id="Utterance-Intro_snippet" /%}

![B03-04_0112-DEB-Intent-Utterance](B03-04_0112-DEB-Intent-Utterance.png){width="600" style="block"}

*The Utterance Tab with Style Selected*

*Utterance Tab with Style Elements*

| Setting | Default    | Description                                                                                        |
|---------|------------|----------------------------------------------------------------------------------------------------|
| Amelia  | Off (Gray) | {% include from="Utterance-Amelia-Toggle.md" element-id="Utterance-Amelia-Toggle_snippet" /%} |
| Source  | Style      | {% include from="Utterance-Source-Chip.md" element-id="Utterance-Source-Chip_snippet" /%}     |
| Editor  |            | {% include from="Utterance-Editor-Field.md" element-id="Utterance-Editor-Field_snippet" /%}   |


![B03-04_0112-DEB-Intent-Utterance-SSML](B03-04_0112-DEB-Intent-Utterance-SSML.png){width="600" style="block"}

*The Utterance Tab with Speech (SSML) Selected*

*Utterance Tab with Speech (SSML) Elements*


| Element        | Default  | Description                                                                                    |
|----------------|----------|------------------------------------------------------------------------------------------------|
| Emphasis tab   | Moderate | {% include from="SpeechSSML-Emphasis.md" element-id="SpeechSSML-Emphasis_snippet" /%}     |
| Phoneme tab    |          | {% include from="SpeechSSML-Phoneme.md" element-id="SpeechSSML-Phoneme_snippet" /%}       |
| Prosody tab    |          | {% include from="SpeechSSML-Prosody.md" element-id="SpeechSSML-Prosody_snippet" /%}       |
| Say As tab     |          | {% include from="SpeechSSML-SayAs.md" element-id="SpeechSSML-SayAs_snippet" /%}           |
| Substitute tab |          | {% include from="SpeechSSML-Substitute.md" element-id="SpeechSSML-Substitute_snippet" /%} |
| Word tab       |          | {% include from="SpeechSSML-Word.md" element-id="SpeechSSML-Word_snippet" /%}             |
| Audio tab      |          | {% include from="SpeechSSML-Audio.md" element-id="SpeechSSML-Audio_snippet" /%}           |


![B03-04_0112-DEB-Intent-Utterance-Pool](B03-04_0112-DEB-Intent-Utterance-Pool.png){width="600" style="block"}

*The Utterance Tab with Response Pool Selected*

*Utterance Tab with Response Pool Elements*


| Setting              | Default        | Description                                                                                              |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------|
| Response Pool Domain | Current domain | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%} |
| Response Pool Group  |                | {% include from="Utterance-Resp-Pool-Group.md" element-id="Utterance-Resp-Pool-Group_snippet" /%}   |


### Settings Tab

Properties in the Settings tab change depending on when you view the block. When you first enter the block, the Intent Source is set to New and only a few settings show. Intent Name and Utterance(s) auto generate based on the user utterance. Saving the Intent block updates NLU Comprehension > Intents to show your new intent.

By changing the Intent Source to Existing, you narrow the focus until you select an Intent Name from the dropdown. Once you've made a selection and saved the changes, you connect the conversation flow and the intent. You can view and edit the intent's properties by clicking the Advanced button.

![B03-04_0112-DEB-Intent-Settings-New](B03-04_0112-DEB-Intent-Settings-New.png){width="600" style="block"}
*Figure 5. Settings Tab with Intent Source set as New*

![B03-04_0112-DEB-Intent-Settings-Existing](B03-04_0112-DEB-Intent-Settings-Existing.png){width="600" style="block"}
*Figure 6. Settings Tab with Intent Source set as Existing*

![B03-04_0112-DEB-Intent-Settings-Existing1](B03-04_0112-DEB-Intent-Settings-Existing1.png){width="600" style="block"}

*The Settings Tab with Intent Source, and Intent Connected and Block Saved*

*Settings Tab Elements*


| Setting                                                                                                                             | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Settings                                                                                                                            |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![B03-04_0121-DEB-Advanced-Btn](B03-04_0121-DEB-Advanced-Btn.png){width="25" style="inline"} button                                 |         | This button shows on the Settings tab after you've saved your conversation flow. To edit an intent linked to this block, click the Advanced button. Your intent opens in edit mode. See the [Intents Introduction](B03-07_0201-Intents-Intro.md) topic for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| User                                                                                                                                |         | Displays the user utterance that generated the intent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Intent Source                                                                                                                       | New     | Sets the origin of the intent. <ul><li><strong>New</strong>: Sets that you're using a new intent as your source. Intent Name and Utterance(s) auto generate based on the user utterance. Saving the Intent block updates NLU Comprehension > Intents to show your new intent. On returning to your Intent block, the Intent Source updates to Existing.</li><li><strong>Existing</strong>: To use a previously created intent as your source, select Existing. You'll select your intent from the Intent Name dropdown.</li></ul>                                                                                                                                          |
| Intent Name                                                                                                                         |         | The name of the intent. <ul><li>If creating a new intent, the name is auto-generated from the user utterance.</li><li>If using an existing intent, select the intent name from the dropdown list.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Utterance(s)                                                                                                                        |         | This option displays when creating a new intent from a user utterance. A list of auto-generated utterances displays below the Search field. <ul><li> To add an utterance, click the blank field below the Search field, type an utterance, and then click the Add ( ![B03-04_0112-DEB-Intent-Settings-New-Btn-Add](B03-04_0112-DEB-Intent-Settings-New-Btn-Add.png){width="25" style="inline"}) button to the right of the field. The new utterance appears in the list of utterances below.</li><li>{% include from="B03-04_0112-DEB-Intent-Block-Edit-Btn.md" element-id="B03-04_0112-DEB-Intent-Block-Edit-Btn_snippet" /%}</li><li>{% include from="B03-04_0112-DEB-Intent-Block-Del-Btn.md" element-id="B03-04_0112-DEB-Intent-Block-Del-Btn_snippet" /%}</li></ul> |
| Search                                                                                                                              |         | Saved utterances are shown using pagination. This means that your utterance might not show on the front page. Searching is a quick and easy way to find a particular utterance.<br/> To find a specific utterance, start typing in the Search field. Amelia calculates search results from the first character entered.<br/> To clear a search, click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} alongside your search term.                                                                                                                                                                                                                                                                                 |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Add](B03-04_0112-DEB-Intent-Settings-New-Btn-Add.png){width="25" style="inline"} button   |         | Enter an utterance using the open field alongside the Add ( ![B03-04_0112-DEB-Intent-Settings-New-Btn-Add](B03-04_0112-DEB-Intent-Settings-New-Btn-Add.png){width="25" style="inline"}) button. Then, click the Add ( ![B03-04_0112-DEB-Intent-Settings-New-Btn-Add](B03-04_0112-DEB-Intent-Settings-New-Btn-Add.png){width="25" style="inline"}) button to add the utterance.                                                                                                                                                                                                                                                                                                                                                                                                          |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="25" style="inline"} button |         | {% include from="B03-04_0112-DEB-Intent-Block-Edit-Btn.md" element-id="B03-04_0112-DEB-Intent-Block-Edit-Btn_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="25" style="inline"} button  |         | {% include from="B03-04_0112-DEB-Intent-Block-Del-Btn.md" element-id="B03-04_0112-DEB-Intent-Block-Del-Btn_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |


##Adding a Block {% #Adding %}

To add an Intent block, you must first create a conversation flow.

1. In the Conversation Flows panel on the left side of the Digital Employees builder, navigate to a folder that will store the new flow.

2. click the Create Flow ( ![B03-04-DEB-Btn-Folder-Flow-Add](B03-04-DEB-Btn-Folder-Flow-Add.png){width="25" style="inline"}) button. The Amelia blocks popup shows over the canvas.

   ![B03-04_0112-DEB-Intent-Block-Popup](B03-04_0112-DEB-Intent-Block-Popup.png){width="400" style="block"}

   *The Amelia Blocks Popup*

3. Click the User Says ( ![B03-04-DEB-Tab-User](B03-04-DEB-Tab-User.png){width="25" style="inline"}) button.

   ![B03-04_0112-DEB-Intent-Block](B03-04_0112-DEB-Intent-Block.png){width="600" style="block"}   

   *The Intent Block Ready for User Says Entry*

4. In the user says field, type a sentence to describe your intent. Amelia will reply within the Intent block.

   > For example, type "I need to buy car insurance."
5. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Intent block:

* Make sure that all utterances used with the Intent block are error-free and company-approved.

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)


