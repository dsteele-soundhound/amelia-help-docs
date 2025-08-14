# Wait Block

## Introduction

{% include from="B03-04_0125-Wait-Block-Intro.md" element-id="B03-04_0125-Wait-Block-Intro_snippet" /%}

![B03-04_0125-DEB-Wait](B03-04_0125-DEB-Wait.png){width="900" style="block"}

*The Wait Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Wait block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copy).
* [Delete a block](#Deleting).
* [Best use of the Wait block](#Best).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Wait block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has tabs with settings to configure.

* **Utterance tab**: Displays settings for the input source, including typed utterances and response pool entries.

* **Settings tab**: Configures the wait type and the duration.

### Utterance Tab

{% include from="Utterance-Intro.md" element-id="Utterance-Intro_snippet" /%}

![B03-04_0125-DEB-Wait-Utterance](B03-04_0125-DEB-Wait-Utterance.png){width="600" style="block"}

*The Utterance Tab with Style Selected*

*Utterance Tab Elements*


| Element | Default    | Description                                                                                        |
|---------|------------|----------------------------------------------------------------------------------------------------|
| Amelia  | Off (Gray) | {% include from="Utterance-Amelia-Toggle.md" element-id="Utterance-Amelia-Toggle_snippet" /%} |
| Source  | Style      | {% include from="Utterance-Source-Chip.md" element-id="Utterance-Source-Chip_snippet" /%}     |
| Editor  |            | {% include from="Utterance-Editor-Field.md" element-id="Utterance-Editor-Field_snippet" /%}   |


![B03-04_0125-DEB-Wait-Utterance-SSML](B03-04_0125-DEB-Wait-Utterance-SSML.png){width="600" style="block"}

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


![B03-04_0125-DEB-Wait-Utterance-Pool](B03-04_0125-DEB-Wait-Utterance-Pool.png){width="600" style="block"}

*The Utterance Tab with Response Pool Selected*

*Utterance Tab with Response Pool Elements*


| Element              | Default        | Description                                                                                              |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------|
| Response Pool Domain | Current domain | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%} |
| Response Pool Group  |                | {% include from="Utterance-Resp-Pool-Group.md" element-id="Utterance-Resp-Pool-Group_snippet" /%}   |


### Settings Tab

The Settings tab defines the type of wait being applied, and the duration.

![B03-04_0125-DEB-Wait-Settings-Duration](B03-04_0125-DEB-Wait-Settings-Duration.png){width="600" style="block"}

*The Settings Tab With Duration and Value Selected*

*Settings Tab Elements*


| Element  | Default                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|----------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name     | Wait | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Type     | Duration                      | Select from Duration, Until or Signal. <ul><li><strong>Duration</strong>: Selecting Duration lets you configure the wait to end after a specified period. You can set the Duration to use Seconds, Minutes, or Hours and display it as either a Value or a number in a Variable available throughout the conversation.</li><li><strong>Until</strong>: Click the Until button to configure that the wait should end at a specified date or time. You can set the block to use these date (DD MMM YYYY) or time (HH:mm) formats. Or you can use a number in a Variable available throughout the conversation.</li><li><strong>Signal</strong>: Click the Signal button to configure that the wait should end based on a signal.</li></ul> |
| Duration | Value                         | Select the Duration to be used, as Seconds, Minutes, or Hours. After selecting the Duration unit, click either the Value or the Variable button. <ul><li><strong>Value</strong>: If using a Value, type the number of Seconds, Minutes, or Hours.</li><li><strong>Variable</strong>: If using a Variable, type the name of a variable or constant value to use for the wait duration.</li></ul>                                                                                                                                                                                                                                                                                                                                          |


![B03-04_0125-DEB-Wait-Settings-Until](B03-04_0125-DEB-Wait-Settings-Until.png){width="600" style="block"}

*The Settings Tab with Until and Value Selected*

*Settings Tab Elements*


| Element     | Default | Description                                                                                                                                                                                                                                                                                                                                |
|-------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Until (ISO) | Value   | Click either the Value button or click the Variable button. <ul><li><strong>Value</strong>: If using a value, type the date and time using ISO format. For example, enter the time as HH:mm and the date as DD MMM YYYY.</li><li><strong>Variable</strong>: If using a variable, enter the name of a variable or constant value.</li></ul> |


![B03-04_0125-DEB-Wait-Settings-Signal](B03-04_0125-DEB-Wait-Settings-Signal.png){width="600" style="block"}

*The Settings Tab with Signal Selected*

*Settings Tab Elements*


| Element     | Default    | Description                                                                                                                                                                                  |
|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Signal Name |            | Type the name of the signal.                                                                                                                                                                 |
| External ID |            | Tell Amelia what External ID to use for the signal.                                                                                                                    |
| Timeout     | 60 seconds | From the dropdown list, select the number of Seconds, Minutes, or Hours to wait for a signal before timing out. Then enter the number of seconds, minutes, or hours in the text field below. |


##Adding a Block {% #Adding %}

To add a Wait block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Wait block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the **Wait** button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.
{% include from="B03-04_0113-Block-Error-State.md" element-id="B03-04_0113-Block-Error-State_snippet" /%}

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

Keep thes best practices in mind as you work with the Wait block:

* Be strategic in your pauses.

* Let your user know that a wait is coming and why. This sets expectation, lets them prepare and or gather information if necessary. For example, waiting for an update to an SLA (service level agreement) ticket number.

* Depending on what the task is, the wait time needs to be shorter or longer. Use longer wait times for grouped numbers and information recall. Use shorter wait times for quick "yes" or "no" type utterances.

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)

