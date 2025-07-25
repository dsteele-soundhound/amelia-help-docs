# Amelia Says Block

## Introduction

{% include from="B03-04_0113-Amelia-Says-Block-Intro.md" element-id="B03-04_0113-Amelia-Says-Block-Intro_snippet" /%}

![B03-04_0113-DEB-Amelia-Says](B03-04_0113-DEB-Amelia-Says.png){width="900" style="block"}

*The Amelia Says Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure an Amelia Says block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).
* [Best use the Amelia Says block](#Best).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Amelia Says block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has several tabs with settings to configure.

* **Utterance tab**: Displays settings for the input source, including typed utterances and response pool entries.
* **Settings tab**: Configures the response pool selection policy to use, if you're using response pools.
* **Locale Settings tab**: Configures what Amelia says across languages.
* **Voice tab**: Configures how the block presents in audio.

### Utterance Tab

{% include from="Utterance-Intro.md" element-id="Utterance-Intro_snippet" /%}

![B03-04_0113-DEB-Amelia-Says-Utterance](B03-04_0113-DEB-Amelia-Says-Utterance.png){width="600" style="block"}

*The Utterance Tab with Style Selected*

*Utterance Tab with Style Elements*


| Element | Default    | Description                                                                                        |
|---------|------------|----------------------------------------------------------------------------------------------------|
| Amelia  | Off (Gray) | {% include from="Utterance-Amelia-Toggle.md" element-id="Utterance-Amelia-Toggle_snippet" /%} |
| Source  | Style      | {% include from="Utterance-Source-Chip.md" element-id="Utterance-Source-Chip_snippet" /%}     |
| Editor  |            | {% include from="Utterance-Editor-Field.md" element-id="Utterance-Editor-Field_snippet" /%}   |


![B03-04_0113-DEB-Amelia-Says-SSML](B03-04_0113-DEB-Amelia-Says-SSML.png){width="600" style="block"}

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


![B03-04_0113-DEB-Amelia-Says-Pools](B03-04_0113-DEB-Amelia-Says-Pools.png){width="600" style="block"}

*Figure 4. Utterance Tab with Response Pool Selected*

*Utterance Tab with Response Pool Elements*


| Element              | Default        | Description                                                                                              |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------|
| Response Pool Domain | Current domain | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%} |
| Response Pool Group  |                | {% include from="Utterance-Resp-Pool-Group.md" element-id="Utterance-Resp-Pool-Group_snippet" /%}   |


### Settings Tab

The Settings tab defines how the Amelia software chooses response pool entries, if they're used for utterances. You can also define custom properties to be included during the processing of this block. For example, a Script block might use a property value to maintain state or to perform an action.

![B03-04_0113-DEB-Amelia-Says-Settings](B03-04_0113-DEB-Amelia-Says-Settings.png){width="600" style="block"}

*Figure 5. Settings Tab*

*Settings Tab Elements*


| Element                        | Default             | Description                                                                                                                                                                                                                                                                                                                                 |
|--------------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Here                    |                     | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                                                                                                                                                                                                                                      |
| **Basic**                      |                     |                                                                                                                                                                                                                                                                                                                                             |
| Response Pool Selection Policy | Unrepeatable Random | The Response Pool Selection Policy setting determines how to choose a message entry from a Response Pool. * Unrepeatable Random: Pick an entry from random, but do not repeat an entry until all options have been chosen. * Round Robin: Select entries in sequence order. * Random: Select an entry at random without regard for repeats. |
| **Custom Properties**          |                     |                                                                                                                                                                                                                                                                                                                                             |
| + Add Property button          |                     | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                                                                                                                                                                                                                                      |


### Locale Settings Tab

The Locale Settings tab allows for translation of the utterance, which displays on the Utterances tab. This is useful when you want Amelia to deliver an utterance in multiple languages.

![B03-04_0113-DEB-Amelia-Says-Locale](B03-04_0113-DEB-Amelia-Says-Locale.png){width="600" style="block"}

*The Locale Settings Tab*

*Locale Settings Tab Elements*


| Element                                                                                                       | Default | Description                                                                                                      |
|---------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------|
| Language                                                                                                      |         | {% include from="Locale-Settings-Language.md" element-id="Locale-Settings-Language_snippet" /%}             |
| Translations                                                                                                  |         | {% include from="Locale-Settings-Translations.md" element-id="Locale-Settings-Translations_snippet" /%}     |
| ![Delete1-Btn-DEB_Inside_Properties](Delete1-Btn-DEB_Inside_Properties.png){width="25" style="inline"} button |         | {% include from="Locale-Settings-Delete-btn.md" element-id="Locale-Settings-Delete-btn_snippet" /%}         |
| + Add Locale button                                                                                           |         | {% include from="Locale-Settings-Add-Locale-Btn.md" element-id="Locale-Settings-Add-Locale-Btn_snippet" /%} |


### Voice Tab

This tab lets you configure settings for use by a voice channel through the public switched telephone network or Voice Over IP.

![B03-04_0113-DEB-Amelia-Says-Voice](B03-04_0113-DEB-Amelia-Says-Voice.png){width="600" style="block"}

*The Voice Tab*

*Voice Tab Elements*


| Element                  | Default      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Voice Configuration**  |              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Settings                 | Not Selected | {% include from="B03-04_0113-DEB-Amelia-Says-Settings.md" element-id="B03-04_0113-DEB-Amelia-Says-Settings_snippet" /%}<ul><li><strong>Disable Barge In</strong>: If enabled on the extension, this setting will temporarily deactivate the ability to barge in for a dialog set. {% include from="B03-06_0138-Disable-Barge-In.md" element-id="B03-06_0138-Disable-Barge-In_snippet" /%}</li><li><strong>Send as DTMF</strong>: Sends the current tasks message as DTMF (dual-tone multi-frequency) tones instead of speaking them.</li><li><strong>Strip Tags</strong>: Strips out all HTML tags from Amelia's utterance before sending as text-to-speech. All default SSML (Speech Synthesis Markup Language) elements and attributes are stored and preserved.</li></ul> |
| Browse button            |              | {% include from="B03-04_0113-DEB-Amelia-Says-Browse.md" element-id="B03-04_0113-DEB-Amelia-Says-Browse_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **MRCP**                 |              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| + Add MRCP Header button |              | {% include from="B03-04_0113-DEB-Amelia-Says-Add-MRCP.md" element-id="B03-04_0113-DEB-Amelia-Says-Add-MRCP_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |


##Adding a Block {% #Adding %}

To add an Amelia Says block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Amelia Says block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the **Amelia Says** button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"} Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.
{% include from="B03-04_0113-Block-Error-State.md" element-id="B03-04_0113-Block-Error-State_snippet" /%}

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Amelia Says block:

* Make sure that all utterances used with the Amelia Says block are error-free and company-approved.

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)

