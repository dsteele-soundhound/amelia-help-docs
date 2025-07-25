# Present Block

## Introduction

{% include from="B03-04_0115-Present-Block-Intro.md" element-id="B03-04_0115-Present-Block-Intro_snippet" /%}

![B03-04_0115-DEB-Present](B03-04_0115-DEB-Present.png){width="900" style="block"}

*The Present Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Present block](#Property).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).
* [Best use of the Present block](#Best)


## Property Panel Configuration {% #Property %}

### Showing the Property Panel

The property panel for a Present block displays when you click the block. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has several tabs with settings to configure.

* **Utterance tab**: Displays settings for the input source, including typed utterances and response pool entries.
* **Settings tab**: Configures the response pool selection policy to use, if you're using response pools.
* **Advanced Settings tab**: Configures basic display settings and custom properties.

### Utterance Tab

{% include from="Utterance-Intro.md" element-id="Utterance-Intro_snippet" /%}

![B03-04_0115-DEB-Present-Utterance](B03-04_0115-DEB-Present-Utterance.png){width="600" style="block"}

*The Utterance Tab with Style Selected*

| Element | Default    | Description                                                                                        |
|---------|------------|----------------------------------------------------------------------------------------------------|
| Amelia  | Off (Gray) | {% include from="Utterance-Amelia-Toggle.md" element-id="Utterance-Amelia-Toggle_snippet" /%} |
| Source  | Style      | {% include from="Utterance-Source-Chip.md" element-id="Utterance-Source-Chip_snippet" /%}     |
| Editor  |            | {% include from="Utterance-Editor-Field.md" element-id="Utterance-Editor-Field_snippet" /%}   |
[Utterance Tab with Style Elements]

![B03-04_0115-DEB-Present-Utterance-SSML](B03-04_0115-DEB-Present-Utterance-SSML.png){width="600" style="block"}

*The Utterance Tab with Speech (SSML) Settings*

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


![B03-04_0115-DEB-Present-Utterance-Pool](B03-04_0115-DEB-Present-Utterance-Pool.png){width="600" style="block"}

*The Utterance Tab with Response Pool Selected*

*Utterance Tab with Response Pool Elements*


| Element              | Default        | Description                                                                                              |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------|
| Response Pool Domain | Current Domain | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%} |
| Response Pool Group  |                | {% include from="Utterance-Resp-Pool-Group.md" element-id="Utterance-Resp-Pool-Group_snippet" /%}   |


### Settings Tab

The Settings tab defines the type of resource being presented, the source and its storage location.

![B03-04_0115-DEB-Present-Settings](B03-04_0115-DEB-Present-Settings.png){width="600" style="block"}

*The Settings Tab with Files Type Selected*

*Settings Tab with Files Type Elements*


| Element              | Default        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Settings             |                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Name                 | User Utterance | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Type                 | Files          | {% include from="B03-04_0115-Present-Settings-Type.md" element-id="B03-04_0115-Present-Settings-Type_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Source Type          | Resource       | Identifies and sets the data source for the Files Type. <ul><li><strong>Resource</strong>: Selecting Resource enables the Bucket and bucket management elements. After selecting a bucket, you can upload a file to use in your conversation.</li><li><strong>Variable</strong>: Selecting Variable lets you enter a variable or constant value for the Upload File Variable.</li><li><strong>Dynamic</strong>: Selecting Dynamic enables the Bucket and bucket management elements. After selecting a bucket, you can upload a file to use in your conversation. You can upload one or more files here. Switching buckets lets you swap out the file used as part of the conversation flow.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Bucket               |                | Shows when you select the Files Type and Resource or Dynamic. Sets the content's storage location. Click the Plus ( ![B03-04_0115-DEB-Present-Settings-Btn-Plus](B03-04_0115-DEB-Present-Settings-Btn-Plus.png){width="25" style="inline"}) button to create a new bucket.<br/>Choose a bucket name between 3 and 63 characters long. Bucket names can only use lower-case characters, numbers, periods, and dashes. Always start your bucket name with a lowercase letter or number. Underscores are not allowed in bucket names. Bucket names can't end with a dash or have consecutive periods or dashes next to periods. Bucket names can't be formatted as IP addresses, such as 198.15.200.11. <br/>Once added, the bucket becomes available on the Select Your Item dropdown. Making a selection from the Select Your Item dropdown, enables the following buttons: <ul><li>To edit a bucket, click the Pencil ( ![B03-04_0115-DEB-Present-Settings-Btn-Pencil](B03-04_0115-DEB-Present-Settings-Btn-Pencil.png){width="25" style="inline"}) button. </li><li>To delete the selected bucket, click the Delete ( ![B03-04_0115-DEB-Present-Settings-Btn-Delete](B03-04_0115-DEB-Present-Settings-Btn-Delete.png){width="25" style="inline"}) button.</li></ul> |
| Upload Files         |                | File drop location. Drag and drop your content here, or browse your computer for the file. After uploading a file, it shows under the Upload Files drop location. Selecting the radio button alongside the file name lets you use the file as part of your conversation. If you've uploaded different files for different buckets, switching buckets lets you move between these file uploads. Click the Delete ( ![B03-04_0115-DEB-Present-Settings-Btn-Delete](B03-04_0115-DEB-Present-Settings-Btn-Delete.png){width="25" style="inline"}) button alongside a file to remove the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Upload File Variable |                | Shows when you select the Files Type and Variable. Enter the variable or constant value here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| File Name            |                | Shows the file name for the uploaded file. Clicking Delete ( ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"}) clears the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |


![B03-04_0115-DEB-Present-Settings-MapWid](B03-04_0115-DEB-Present-Settings-MapWid.png){width="600" style="block"}

*The Settings Tab with Map Widget, Chart or Table Widget Type Selected*

*Settings Tab with Map Widget, Chart or Table Widget Type Elements*


| Element                 | Default          | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Settings                |                  |                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Name                    | Present Response | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                        |
| Type                    | Files            | {% include from="B03-04_0115-Present-Settings-Type.md" element-id="B03-04_0115-Present-Settings-Type_snippet" /%}                                                                                                                                                                                                                                                                                                          |
| Address                 |                  | Shows when you select the Map Widget Type. Enter the URL for the map to include in your conversation flow. For example, entering _https://www.google.com/maps/place/Amelia,+an+IPsoft+Company/@40.7028577,-74.0141373,15z/data=!4m6!3m5!1s0x89c25a13a1b7ca2f:0xfaf3daa56ed5e02f!8m2!3d40.7028577!4d-74.0141373!16s%2Fg%2F11b66l5p00?entry=ttu_ includes a map of Amelia's location in your conversation flow. |
| Set Integration Message | Off (Gray)       | Shows when you select the Map Widget Type.                                                                                                                                                                                                                                                                                                                                                                                      |
| Target Variable         |                  | Shows when you select the Map Widget, Chart or Table Widget Type.                                                                                                                                                                                                                                                                                                                                                               |


### Advanced Settings Tab

The Advanced Settings tab defines basic display settings and custom properties.

![B03-04_0115-DEB-Present-Adv-Settings](B03-04_0115-DEB-Present-Adv-Settings.png){width="600" style="block"}

*The Advanced Settings Tab*

*Advanced Settings Tab Elements*


| Element               | Default          | Description                                                                                                                                                                                                                                                                                                                  |
|-----------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Here           |                  | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                                                                                                                                                                                                                       |
| **Basic**             |                  |                                                                                                                                                                                                                                                                                                                              |
| Preview               | Inline and Popup | Select how the resource should display in the conversation area. Options are: <ul><li><strong>Inline and Popup</strong></li><li><strong>Inline Only</strong></li><li><strong>No Preview</strong></li></ul>                                                                                                                   |
| Document Styles       | Inherit          | Select whether or not to use CSS styles in Amelia's user interface. Options are: <ul><li><strong>Inherit</strong></li><li><strong>Original</strong></li></ul>                                                                                                                                          |
| Download              | Yes              | Displays a link to download the resource.                                                                                                                                                                                                                                                                                    |
| Display File Name     | No               | Selecting yes displays the file name under the resource.                                                                                                                                                                                                                                                                     |
| Display File Size     | No               | Selecting yes displays file size details under the resource.                                                                                                                                                                                                                                                                 |
| Mute                  | No               | Selecting yes plays the audio or video file with sound muted.                                                                                                                                                                                                                                                                |
| Aspect Ratio          | Auto             | The aspect ratio to use to display your video. Options are Auto, 16:9, 4:3, 21:9, 14:10, and 19:10. Auto uses the TBA:TBA aspect ratio.                                                                                                                                                                                      |
| Title                 |                  | Displays a title for your resource. Enter the phrase you'd like to use. Limit the length of your title to less than 72 characters for optimal results. To clear a title, click Delete ( ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"}) alongside the title.                     |
| Description           |                  | Displays a description under your resource. Enter the phrase you'd like to use. Limit the length of your title to less than 72 characters for optimal results. To clear a description, click Delete ( ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"}) alongside the description. |
| **Custom Properties** |                  |                                                                                                                                                                                                                                                                                                                              |
| + Add Property button |                  | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                                                                                                                                                                                                                       |


##Adding a Block {% #Adding %}

To add a Present block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Present block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the **Present** button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Present block:

* Keep the resource's size under 50 MB. This ensures that the resource can be accessed without any issues

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)

