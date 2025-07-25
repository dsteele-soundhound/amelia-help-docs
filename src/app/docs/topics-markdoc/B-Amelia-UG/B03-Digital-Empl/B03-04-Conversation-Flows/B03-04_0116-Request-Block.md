# Request Block

## Introduction

{% include from="B03-04_0116-Request-Block-Intro.md" element-id="B03-04_0116-Request-Block-Intro_snippet" /%}

![B03-04_0116-DEB-Request](B03-04_0116-DEB-Request.png){width="900" style="block"}
*Figure 1. Request Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Request block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copying).
* [Delete a block](#Deleting).
* [Best use of the Request block](#Best).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

Clicking the Request block displays the properties panel. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has several tabs with settings to configure.

* **Utterance tab**: Displays settings for the input source, including typed utterances and response pool entries.
* **Settings tab**: Configures file types and bucket settings.
* **Advanced Settings tab**: Configures basic settings and custom properties.
* **Locale Settings tab**: Configures what Amelia says across languages.

### Utterance Tab

{% include from="Utterance-Intro.md" element-id="Utterance-Intro_snippet" /%}

![B03-04_0116-DEB-Request-Utterance](B03-04_0116-DEB-Request-Utterance.png){width="600" style="block"}

*The Utterance Tab with Style Selected*

*Utterance Tab with Style Elements*


| Element | Default    | Description                                                                                        |
|---------|------------|----------------------------------------------------------------------------------------------------|
| Amelia  | Off (Gray) | {% include from="Utterance-Amelia-Toggle.md" element-id="Utterance-Amelia-Toggle_snippet" /%} |
| Source  | Style      | {% include from="Utterance-Source-Chip.md" element-id="Utterance-Source-Chip_snippet" /%}     |
| Editor  |            | {% include from="Utterance-Editor-Field.md" element-id="Utterance-Editor-Field_snippet" /%}   |


![B03-04_0116-DEB-Request-Utterance-SSML](B03-04_0116-DEB-Request-Utterance-SSML.png){width="600" style="block"}

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


![B03-04_0116-DEB-Request-Utterance-Pool](B03-04_0116-DEB-Request-Utterance-Pool.png){width="600" style="block"}

*The Utterance Tab with Response Pool Settings*

*Utterance Tab with Response Pool Elements*


| Element              | Default        | Description                                                                                              |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------|
| Response Pool Domain | Current Domain | {% include from="Utterance-Resp-Pool-Domain.md" element-id="Utterance-Resp-Pool-Domain_snippet" /%} |
| Response Pool Group  |                | {% include from="Utterance-Resp-Pool-Group.md" element-id="Utterance-Resp-Pool-Group_snippet" /%}   |


### Settings Tab

The Settings tab defines the type of resource being requested, and its storage location.

![B03-04_0116-DEB-Request-Settings](B03-04_0116-DEB-Request-Settings.png){width="600" style="block"}

*The Settings Tab*

*Settings Tab Elements*


| Element               | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Settings              |            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| File Types            |            | Select the type of resource(s) to request. Amelia supports several resource types: <ul><li><strong>Binery</strong>: All file types, including executable files, compiled programs, SAS and SPSS system files, spreadsheets, compressed files, and graphic (image) files.</li><li><strong>Excel</strong>: XLS, and XLSX.</li><li><strong>Audio</strong>: WAV, MP3, AC3, and OGG.</li><li><strong>Office</strong>: DOC, DOCX, XLS, XLSX, PPS, PPT, PPTX, PPSX, KEY, PDF, ODS, ODT, RTF, and WPS.</li><li><strong>Spreadsheet</strong>: XLS, XLSX and ODS.</li><li><strong>HTML</strong>: All text files with small markup tags.</li><li><strong>Document</strong>: DOC, DOCX, PDF, ODT, RTF, PS and EPS.</li><li><strong>Image</strong>: JPEG, JPG, PNG, GIF, TIFF, SVG, EMF, BMP, WMF, PS, and EPS.</li><li><strong>Video</strong>: MP4 (ideally with H.264 video and AAC audio encoding).</li><li><strong>Presentation</strong>: PPS, PPT, PPTX, PPSX, and KEY.</li><li><strong>Word</strong>: DOC and DOCX.</li><li><strong>Text</strong>: TXT, CSV, MD, and RTF.</li></ul> |
| Request More Than One | Off (Gray) | Toggle on or off to request one or more files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Bucket Name           |            | Sets the content's storage location. Select Create New from the dropdown to create a new bucket. Choose a bucket name between 3 and 63 characters long. Bucket names can only use lower-case characters, numbers, periods, and dashes. Always start your bucket name with a lowercase letter or number. Underscores are not allowed in bucket names. Bucket names can't end with a dash or have consecutive periods or dashes next to periods. Bucket names can't be formatted as IP addresses, such as 198.15.200.11. Once added, the bucket becomes available on the Bucket Name dropdown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Store to Variable     |            | Enter a variable name if you're storing the file in a variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |


### Advanced Settings Tab

The Advanced Settings tab defines basic settings and custom properties.

![B03-04_0116-DEB-Request-Adv-Settings](B03-04_0116-DEB-Request-Adv-Settings.png){width="600" style="block"}

*The Advanced Settings Tab*

*Advanced Settings Tab Elements*


| Element                       | Default     | Description                                                                                                                                                                                                                                                                                                        |
|-------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Here                   |             | {% include from="Search-Here-Field.md" element-id="Search-Here-Field_snippet" /%}                                                                                                                                                                                                                             |
| **Basic**                     |             |                                                                                                                                                                                                                                                                                                                    |
| Hint Text                     |             | Type text to appear when the user hovers over a file request link.                                                                                                                                                                                                                                                 |
| Mode                          | File Upload | elect the content mode to use. * File Upload: Select File Upload to accept a file from the user. <ul><li><strong>Audio Capture</strong>: Select Audio Capture to have the user record their response.</li><li><strong>Photo Capture</strong>: Select Photo Capture to have the user submit a photograph.</li></ul> |
| Cancellable                   | No          | Select whether or not the upload can be canceled by the user.                                                                                                                                                                                                                                                      |
| Allow Intent Switch           | Yes         | Select whether or not uploading a file can trigger an intent switch in the conversation flow.                                                                                                                                                                                                                      |
| SLA Breach Interval (minutes) |             | Type the number of minutes allowed before a Service Level Agreement breach is triggered.                                                                                                                                                                                                                           |
| **Custom Properties**         |             |                                                                                                                                                                                                                                                                                                                    |
| + Add Property button         |             | {% include from="Settings-Add-Property-Btn.md" element-id="Settings-Add-Property-Btn_snippet" /%}                                                                                                                                                                                                             |


### Locale Settings Tab

The Locale Settings tab allows for translation of the utterance, which displays on the Utterances tab. This is useful when you want Amelia to deliver an utterance in multiple languages.

![B03-04_0116-DEB-Request-Loc-Settings](B03-04_0116-DEB-Request-Loc-Settings.png){width="600" style="block"}

*The Request Block Showing the Locale Settings*

*Locale Settings Tab Elements*


|                                                   Element                                                    | Default |                                                   Description                                                    |
|--------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------|
| Language                                                                                                     |        | {% include from="Locale-Settings-Language.md" element-id="Locale-Settings-Language_snippet" /%}             |
| Translations                                                                                                 |        | {% include from="Locale-Settings-Translations.md" element-id="Locale-Settings-Translations_snippet" /%}     |
| ![Delete1-Btn-DEB_Inside_Properties](Delete1-Btn-DEB_Inside_Properties.png){width="25" style="inline"} button |        | {% include from="Locale-Settings-Delete-btn.md" element-id="Locale-Settings-Delete-btn_snippet" /%}         |
| + Add Locale button                                                                                          |        | {% include from="Locale-Settings-Add-Locale-Btn.md" element-id="Locale-Settings-Add-Locale-Btn_snippet" /%} |


##Adding a Block {% #Adding %}

To add a Request block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Request block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the Request button.

4. On the **top toolbar**, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

Keep this best practice in mind as you work with the Request block:

* Keep the resource's size under 50 MB. This ensures that the resource can be accessed without any issues

## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)


