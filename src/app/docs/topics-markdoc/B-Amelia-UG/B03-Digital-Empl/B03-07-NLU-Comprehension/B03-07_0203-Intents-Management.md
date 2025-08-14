# Intents Management

## Introduction

{% include from="B03-07_0203-Intents-Intro.md" element-id="B03-07_0203-Intents-Intro_snippet" /%}

To use Intents effectively, you should first understand intent features and how to configure them. This topic gives insights into when and how to use Intents. See our [Intents Introduction](B03-07_0201-Intents-Intro.md) topic for a high-level introduction to Intents.

## What You'll Learn

In this topic you'll learn how to:

* [Access the Intents panel](#Access).
* [Add an intent](#Add).
* [Search for an intent](#Search).
* [Edit an intent](#Edit).
* [Delete an intent](#Delete).
* [Export intents](#Export).
* [Import an intent](#Import).

##Access the Intents Panel {% #Access %}

{% include from="B03-07_0201-Intents-Access.md" element-id="B03-07_0201-Intents-Access_snippet" /%}

Open these dropdowns to learn more about what you'll see in the Intents panel.

   <chapter title="Default Intents Panel" collapsible="true" level="5">
   
   ![B03-07_0203-Intents-Panel-Add](B03-07_0203-Intents-Panel-Add.png){width="400" style="block"}

   *The Default Intents Panel*

*Intents Panel Elements*
   
   |                                                   Element                                                   |                                                                                                  Description                                                                                                  |
   |-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | + Add New button                                                                                            | Click to create a new intent. On button-press, a New Intent tab opens after the Home page.                                                                                                                    |
   | Import button                                                                                               | To move an intent from one domain to another, you'll export it from the original domain and import it into the new one. Click to import your chosen intent.                                                   |
   | Ellipsis ( ![Ellipsis-Btn-Intents_Panel](Ellipsis-Btn-Intents_Panel.png){width="25" style="inline"}) button | Click to download details for all intents in your domain. Intents download as a single TSV file named according to your domain. You'll find the downloaded file in your chosen downloads location.            |
   | Search Here                                                                                                 | Click and then enter a name or phrase to find one or more intents. Click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} to clear the search and show all intents. |
   
   
   
   
   </chapter>


   <chapter title="Intents Panel with Intent Checked" collapsible="true" level="5">
   
   ![B03-07_0203-Intents-Panel-Del](B03-07_0203-Intents-Panel-Del.png){width="400" style="block"}

   *The Intents Panel with Intent Checked*
   
   The following table shows elements unique to this view of the Intents panel. To learn about default elements, open the Default Intents Panel dropdown above.

   *Intents Panel Elements*
   
   |    Element    |                                                                                                                                                                                                                                                                                                                                                                                       Description                                                                                                                                                                                                                                                                                                                                                                                        |
   |---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Export button | The Export button shows when you select an intents checkbox. Click to download details for your selected intent. The intent downloads as a single TSV file named according to your domain. You'll find the downloaded file in your chosen downloads location. Open the Export dropdown to show the Export Selected and Export All options. * Export Selected: Click to download details for your selected intent. The intent downloads as a single TSV file named according to your domain. You'll find the downloaded file in your chosen downloads location. <!-- --> * Export All: Click to download details for all intents in your domain. Intents download as a single TSV file named according to your domain. You'll find the downloaded file in your chosen downloads location. |
   | Delete button | Click to delete the selected intents. Clicking the button triggers a Delete Confirmation modal where you can confirm or cancel the operation. Clicking Delete here removes the selected intent. Deleting an intent is final. You can't restore an intent once it's deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

   
   </chapter>              


##Add or Create an Intent {% #Add %}

Creating intents is part of how you train Amelia to identify intent in conversations.

To create an intent:

1. In the Intents panel, click the + Add New button. A New Intent page opens after the Home page. The New Intent page has two tabs. One tab for Basic settings and the second for Advanced settings.
2. Give your intent a Name.
3. Complete remaining Basic and Advanced settings as needed. Open these dropdowns to learn about the elements you'll see when adding intents.

   <chapter title="Basic Tab" collapsible="true" level="5">
      
   ![B03-07_0203-Intents-New-Basic](B03-07_0203-Intents-New-Basic.png){width="600" style="block"}

   *The Basic Tab*

   *Basic Tab Elements*
   
   | Element                                                                                                                             | Default         | Description                                                                                                                                  |
   |-------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
   | Basic                                                                                                                               |                 |                                                                                                                                              |
   | Name                                                                                                                                |                 | {% include from="B03-07_0203-Intents-Name-Desc.md" element-id="B03-07_0203-Intents-Name-Desc_snippet" /%}                               |
   | Description                                                                                                                         |                 | {% include from="B03-07_0203-Intents-Description-Desc.md" element-id="B03-07_0203-Intents-Description-Desc_snippet" /%}                 |
   | Status                                                                                                                              | Active          | {% include from="B03-07_0203-Intents-Status-Desc.md" element-id="B03-07_0203-Intents-Status-Desc_snippet" /%}                           |
   | Action                                                                                                                              |                 |                                                                                                                                              |
   | When Intent is Triggered                                                                                                            | Execute Process | {% include from="B03-07_0203-Intents-Intent-Triggered-Desc.md" element-id="B03-07_0203-Intents-Intent-Triggered-Desc_snippet" /%}       |
   | Choose button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Choose-Btn-Desc.md" element-id="B03-07_0203-Intents-Choose-Btn-Desc_snippet" /%}                   |
   | Search Here                                                                                                                         |                 | {% include from="B03-07_0203-Intents-Search-Here-Desc.md" element-id="B03-07_0203-Intents-Search-Here-Desc_snippet" /%}                 |
   | Cancel button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Cancel-Btn-Desc.md" element-id="B03-07_0203-Intents-Cancel-Btn-Desc_snippet" /%}                   |
   | Add button                                                                                                                          |                 | {% include from="B03-07_0203-Intents-Add-Btn-Desc.md" element-id="B03-07_0203-Intents-Add-Btn-Desc_snippet" /%}                         |
   | When Returning to Root Context, Execute Process                                                                                     |                 | {% include from="B03-07_0203-Intents-Ret-Root-Context-Desc.md" element-id="B03-07_0203-Intents-Ret-Root-Context-Desc_snippet" /%}       |
   | Choose button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Choose-Btn-Desc.md" element-id="B03-07_0203-Intents-Choose-Btn-Desc_snippet" /%}                   |
   | Search Here                                                                                                                         |                 | {% include from="B03-07_0203-Intents-Search-Here-Desc.md" element-id="B03-07_0203-Intents-Search-Here-Desc_snippet" /%}                 |
   | Cancel button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Cancel-Btn-Desc.md" element-id="B03-07_0203-Intents-Cancel-Btn-Desc_snippet" /%}                   |
   | Add button                                                                                                                          |                 | {% include from="B03-07_0203-Intents-Add-Btn-Desc.md" element-id="B03-07_0203-Intents-Add-Btn-Desc_snippet" /%}                         |
   | Utterances                                                                                                                          |                 |                                                                                                                                              |
   | Search                                                                                                                              |                 | {% include from="B03-07_0203-Intents-Utterance-Search-Desc.md" element-id="B03-07_0203-Intents-Utterance-Search-Desc_snippet" /%}       |
   | Utterance                                                                                                                           |                 | {% include from="B03-07_0203-Intents-Utterance-Desc.md" element-id="B03-07_0203-Intents-Utterance-Desc_snippet" /%}                     |
   | Select Tags                                                                                                                         | Train           | {% include from="B03-07_0203-Intents-Select-Tags-Desc.md" element-id="B03-07_0203-Intents-Select-Tags-Desc_snippet" /%}                 |
   | + Add button                                                                                                                        |                 | {% include from="B03-07_0203-Intents-Plus_Add-Btn-Desc.md" element-id="B03-07_0203-Intents-Plus_Add-Btn-Desc_snippet" /%}               |
   | Checkbox                                                                                                                            |                 | {% include from="B03-07_0203-Intents-Checkbox-Desc.md" element-id="B03-07_0203-Intents-Checkbox-Desc_snippet" /%}                       |
   | Generate Paraphrases ( ![Paraphrase-Btn-Intents_Utterance](Paraphrase-Btn-Intents_Utterance.png){width="25" style="inline"}) button |                 | {% include from="B03-07_0203-Intents-Paraphrase-Btn-Desc.md" element-id="B03-07_0203-Intents-Paraphrase-Btn-Desc_snippet" /%}           |
   | Delete ( ![Delete-Btn-Intents_Utterance](Delete-Btn-Intents_Utterance.png){width="25" style="inline"}) button                       |                 | {% include from="B03-07_0203-Intents-DeleteUtterance-Btn-Desc.md" element-id="B03-07_0203-Intents-DeleteUtterance-Btn-Desc_snippet" /%} |
   
   </chapter>
   
   <chapter title="Advanced Tab" collapsible="true" level="5">
   
   ![B03-07_0203-Intents-New-Advanced](B03-07_0203-Intents-New-Advanced.png){width="600" style="block"}

   *The Advanced Tab*

   *Advanced Tab Elements*
   
   | Element                                                    | Default | Description                                                                                                                                                        |
   |------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Context Management**                                     |         |                                                                                                                                                                    |
   | On Switching to a New Intent, this Intent Becomes          |         | {% include from="B03-07_0203-Intents-Context-Switch-Desc.md" element-id="B03-07_0203-Intents-Context-Switch-Desc_snippet" /%}                                 |
   | When Resuming this Intent, Amelia Asks                     |         | {% include from="B03-07_0203-Intents-Resume-Intent-Desc.md" element-id="B03-07_0203-Intents-Resume-Intent-Desc_snippet" /%}                                   |
   | Preference                                                 |         | {% include from="B03-07_0203-Intents-Resume-Preference-Desc.md" element-id="B03-07_0203-Intents-Resume-Preference-Desc_snippet" /%}                           |
   | When canceling this intent, Amelia asks                    |         | {% include from="B03-07_0203-Intents-Cancel-Intent-Desc.md" element-id="B03-07_0203-Intents-Cancel-Intent-Desc_snippet" /%}                                   |
   | Preference                                                 |         | {% include from="B03-07_0203-Intents-Cancel-Preference-Desc.md" element-id="B03-07_0203-Intents-Cancel-Preference-Desc_snippet" /%}                           |
   | **Confirmation and Disambiguation**                        |         |                                                                                                                                                                    |
   | If the Confidence of this Intent is Low                    |         | {% include from="B03-07_0203-Intents-Confidence-Low-Desc.md" element-id="B03-07_0203-Intents-Confidence-Low-Desc_snippet" /%}                                 |
   | If there is an Ambiguity with Another Intent               |         | {% include from="B03-07_0203-Intents-Ambiguity-Desc.md" element-id="B03-07_0203-Intents-Ambiguity-Desc_snippet" /%}                                           |
   | **Multi Intent**                                           |         |                                                                                                                                                                    |
   | Enable Intent for Multi-intent Execution                   |         | {% include from="B03-07_0203-Intents-Multi-Intent-Execution-Desc.md" element-id="B03-07_0203-Intents-Multi-Intent-Execution-Desc_snippet" /%}                 |
   | Language and Understanding                                 |         |                                                                                                                                                                    |
   | The User Wants To                                          |         | {% include from="B03-07_0203-Intents-User-Wants-To-Desc.md" element-id="B03-07_0203-Intents-User-Wants-To-Desc_snippet" /%}                                   |
   | Matching Keywords and Phrases for Disambiguation           |         | {% include from="B03-07_0203-Intents-Disambiguation-Match-Desc.md" element-id="B03-07_0203-Intents-Disambiguation-Match-Desc_snippet" /%}                     |
   | **Negation**                                               |         |                                                                                                                                                                    |
   | When the Triggered Intent is Negated                       |         | {% include from="B03-07_0203-Intents-Triggered-Intent-Negated-Desc.md" element-id="B03-07_0203-Intents-Triggered-Intent-Negated-Desc_snippet" /%}             |
   | Alternative Intent                                         | None    | {% include from="B03-07_0203-Intents-Alterantive-Intent-Desc.md" element-id="B03-07_0203-Intents-Alterantive-Intent-Desc_snippet" /%}                         |
   | **Entities**                                               |         |                                                                                                                                                                    |
   | Select Entities Scoped to This Intent                      |         | {% include from="B03-07_0203-Intents-Entities-Scoped-to-Intent-Desc.md" element-id="B03-07_0203-Intents-Entities-Scoped-to-Intent-Desc_snippet" /%}           |
   | Select Entities that Give Preference to Select This Intent |         | {% include from="B03-07_0203-Intents-Give-Preference-to-This-Intent-Desc.md" element-id="B03-07_0203-Intents-Give-Preference-to-This-Intent-Desc_snippet" /%} |
   | **Grammar**                                                |         |                                                                                                                                                                    |
   | Intent Grammar                                             |         | {% include from="B03-07_0203-Intents-Grammar-Desc.md" element-id="B03-07_0203-Intents-Grammar-Desc_snippet" /%}                                               |
   
   </chapter>
4. Click Create.

##Search for Intents {% #Search %}

As you develop your Amelia instance, you'll add to your intents. The Intents panel shows your intents using pagination. This means that a particular intent might not show on the front page. Searching is a quick and easy way to find an intent.

To search for an intent:

1. In the Intents panel, position your cursor in the Search Here field.
2. Enter a search term. Your search term can include letters, numbers, and special characters.

Amelia calculates search results from the first character entered. If there are no matches, "No Intents Found" shows.

##Edit an Intent {% #Edit %}

Refining your intents is an important part of training Amelia.

1. In the Intents panel, find and select the intent you want to edit.

   With your intent open in edit mode, you have access to a range of elements. The Intents page includes a header area and two tabs. One tab shows Basic settings and a second Advanced settings. Open these dropdowns to learn more about these elements.

   <chapter title="Edit Intent Header Area" collapsible="true" level="5">
   
   ![B03-07_0203-Intents-Header](B03-07_0203-Intents-Header.png){width="600" style="block"}

   *The Header Area*

   *Header Area Elements*
   
   |    Element    | Description                                                                                                                                                                                                                                                                                   |
   |---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Created       | The date and time of adding the intent.                                                                                                                                                                                                                                                       |
   | Created By    | The name of the person who added the intent.                                                                                                                                                                                                                                                  |
   | Modified      | The date and time when the intent was last edited.                                                                                                                                                                                                                                            |
   | Modified By   | The name of the person who edited the intent.                                                                                                                                                                                                                                                 |
   | Save button   | Stores all changes and updates made to Basic and Advanced tab elements.                                                                                                                                                                                                                       |
   | Export button | Click to download details for your selected intent. The intent downloads as a single TSV file named with the same name as your selected intent. You'll find the downloaded file in your chosen downloads location.                                                                            |
   | Delete button | Click to delete the selected intent. Clicking the button triggers a Delete Confirmation modal where you can confirm or cancel the operation. Clicking Delete here removes the selected intent. <warning>Deleting an intent is final. You can't restore an intent once it's deleted.</warning> |
   
   
   </chapter>
   
   <chapter title="Basic Tab" collapsible="true" level="5">
   
   ![B03-07_0203-Intents-Edit-Basic](B03-07_0203-Intents-Edit-Basic.png){width="600" style="block"}

   *The Basic Tab*

   *Basic Tab Elements*
   
   | Element                                                                                                                             | Default         | Description                                                                                                                                  |
   |-------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
   | **Basic**                                                                                                                           |                 |                                                                                                                                              |
   | Name                                                                                                                                |                 | {% include from="B03-07_0203-Intents-Name-Desc.md" element-id="B03-07_0203-Intents-Name-Desc_snippet" /%}                               |
   | Description                                                                                                                         |                 | {% include from="B03-07_0203-Intents-Description-Desc.md" element-id="B03-07_0203-Intents-Description-Desc_snippet" /%}                 |
   | Status                                                                                                                              | Active          | {% include from="B03-07_0203-Intents-Status-Desc.md" element-id="B03-07_0203-Intents-Status-Desc_snippet" /%}                           |
   | **Action**                                                                                                                          |                 |                                                                                                                                              |
   | When Intent is Triggered                                                                                                            | Execute Process | {% include from="B03-07_0203-Intents-Intent-Triggered-Desc.md" element-id="B03-07_0203-Intents-Intent-Triggered-Desc_snippet" /%}       |
   | Choose button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Choose-Btn-Desc.md" element-id="B03-07_0203-Intents-Choose-Btn-Desc_snippet" /%}                   |
   | Search Here                                                                                                                         |                 | {% include from="B03-07_0203-Intents-Search-Here-Desc.md" element-id="B03-07_0203-Intents-Search-Here-Desc_snippet" /%}                 |
   | Cancel button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Cancel-Btn-Desc.md" element-id="B03-07_0203-Intents-Cancel-Btn-Desc_snippet" /%}                   |
   | Add button                                                                                                                          |                 | {% include from="B03-07_0203-Intents-Add-Btn-Desc.md" element-id="B03-07_0203-Intents-Add-Btn-Desc_snippet" /%}                         |
   | When Returning to Root Context, Execute Process                                                                                     |                 | {% include from="B03-07_0203-Intents-Ret-Root-Context-Desc.md" element-id="B03-07_0203-Intents-Ret-Root-Context-Desc_snippet" /%}       |
   | Choose button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Choose-Btn-Desc.md" element-id="B03-07_0203-Intents-Choose-Btn-Desc_snippet" /%}                   |
   | Search Here                                                                                                                         |                 | {% include from="B03-07_0203-Intents-Search-Here-Desc.md" element-id="B03-07_0203-Intents-Search-Here-Desc_snippet" /%}                 |
   | Cancel button                                                                                                                       |                 | {% include from="B03-07_0203-Intents-Cancel-Btn-Desc.md" element-id="B03-07_0203-Intents-Cancel-Btn-Desc_snippet" /%}                   |
   | Add button                                                                                                                          |                 | {% include from="B03-07_0203-Intents-Add-Btn-Desc.md" element-id="B03-07_0203-Intents-Add-Btn-Desc_snippet" /%}                         |
   | **Utterances**                                                                                                                      |                 |                                                                                                                                              |
   | Search                                                                                                                              |                 | {% include from="B03-07_0203-Intents-Utterance-Search-Desc.md" element-id="B03-07_0203-Intents-Utterance-Search-Desc_snippet" /%}       |
   | Utterance                                                                                                                           |                 | {% include from="B03-07_0203-Intents-Utterance-Desc.md" element-id="B03-07_0203-Intents-Utterance-Desc_snippet" /%}                     |
   | Select Tags                                                                                                                         | Train           | {% include from="B03-07_0203-Intents-Select-Tags-Desc.md" element-id="B03-07_0203-Intents-Select-Tags-Desc_snippet" /%}                 |
   | + Add button                                                                                                                        |                 | {% include from="B03-07_0203-Intents-Plus_Add-Btn-Desc.md" element-id="B03-07_0203-Intents-Plus_Add-Btn-Desc_snippet" /%}               |
   | Checkbox                                                                                                                            |                 | {% include from="B03-07_0203-Intents-Checkbox-Desc.md" element-id="B03-07_0203-Intents-Checkbox-Desc_snippet" /%}                       |
   | Generate Paraphrases ( ![Paraphrase-Btn-Intents_Utterance](Paraphrase-Btn-Intents_Utterance.png){width="25" style="inline"}) button |                 | {% include from="B03-07_0203-Intents-Paraphrase-Btn-Desc.md" element-id="B03-07_0203-Intents-Paraphrase-Btn-Desc_snippet" /%}           |
   | Delete ( ![Delete-Btn-Intents_Utterance](Delete-Btn-Intents_Utterance.png){width="25" style="inline"}) button                       |                 | {% include from="B03-07_0203-Intents-DeleteUtterance-Btn-Desc.md" element-id="B03-07_0203-Intents-DeleteUtterance-Btn-Desc_snippet" /%} |
   [Basic Tab Elements]
   
   
   
   </chapter>
   
   <chapter title="Advanced Tab" collapsible="true" level="5">
   
   ![B03-07_0203-Intents-Edit-Advanced](B03-07_0203-Intents-Edit-Advanced.png){width="600" style="block"}

   *The Advanced Tab*

   *Advanced Tab Elements*
   
   |                          Element                           | Default |                                                                            Description                                                                             |
   |------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Context Management                                                                                                                                                                                                                      |||
   | On Switching to a New Intent, this Intent Becomes          |        | {% include from="B03-07_0203-Intents-Context-Switch-Desc.md" element-id="B03-07_0203-Intents-Context-Switch-Desc_snippet" /%}                                 |
   | When Resuming this Intent, Amelia Asks                     |        | {% include from="B03-07_0203-Intents-Resume-Intent-Desc.md" element-id="B03-07_0203-Intents-Resume-Intent-Desc_snippet" /%}                                   |
   | Preference                                                 |        | {% include from="B03-07_0203-Intents-Resume-Preference-Desc.md" element-id="B03-07_0203-Intents-Resume-Preference-Desc_snippet" /%}                           |
   | When canceling this intent, Amelia asks                    |        | {% include from="B03-07_0203-Intents-Cancel-Intent-Desc.md" element-id="B03-07_0203-Intents-Cancel-Intent-Desc_snippet" /%}                                   |
   | Preference                                                 |        | {% include from="B03-07_0203-Intents-Cancel-Preference-Desc.md" element-id="B03-07_0203-Intents-Cancel-Preference-Desc_snippet" /%}                           |
   | Confirmation and Disambiguation                                                                                                                                                                                                         |||
   | If the Confidence of this Intent is Low                    |        | {% include from="B03-07_0203-Intents-Confidence-Low-Desc.md" element-id="B03-07_0203-Intents-Confidence-Low-Desc_snippet" /%}                                 |
   | If there is an Ambiguity with Another Intent               |        | {% include from="B03-07_0203-Intents-Ambiguity-Desc.md" element-id="B03-07_0203-Intents-Ambiguity-Desc_snippet" /%}                                           |
   | Multi Intent                                                                                                                                                                                                                            |||
   | Enable Intent for Multi-intent Execution                   |        | {% include from="B03-07_0203-Intents-Multi-Intent-Execution-Desc.md" element-id="B03-07_0203-Intents-Multi-Intent-Execution-Desc_snippet" /%}                 |
   | Language and Understanding                                                                                                                                                                                                              |||
   | The User Wants To                                          |        | {% include from="B03-07_0203-Intents-User-Wants-To-Desc.md" element-id="B03-07_0203-Intents-User-Wants-To-Desc_snippet" /%}                                   |
   | Matching Keywords and Phrases for Disambiguation           |        | {% include from="B03-07_0203-Intents-Disambiguation-Match-Desc.md" element-id="B03-07_0203-Intents-Disambiguation-Match-Desc_snippet" /%}                     |
   | Negation                                                                                                                                                                                                                                |||
   | When the Triggered Intent is Negated                       |        | {% include from="B03-07_0203-Intents-Triggered-Intent-Negated-Desc.md" element-id="B03-07_0203-Intents-Triggered-Intent-Negated-Desc_snippet" /%}             |
   | Alternative Intent                                         | None    | {% include from="B03-07_0203-Intents-Alterantive-Intent-Desc.md" element-id="B03-07_0203-Intents-Alterantive-Intent-Desc_snippet" /%}                         |
   | Entities                                                                                                                                                                                                                                |||
   | Select Entities Scoped to This Intent                      |        | {% include from="B03-07_0203-Intents-Entities-Scoped-to-Intent-Desc.md" element-id="B03-07_0203-Intents-Entities-Scoped-to-Intent-Desc_snippet" /%}           |
   | Select Entities that Give Preference to Select This Intent |        | {% include from="B03-07_0203-Intents-Give-Preference-to-This-Intent-Desc.md" element-id="B03-07_0203-Intents-Give-Preference-to-This-Intent-Desc_snippet" /%} |
   | Grammar                                                                                                                                                                                                                                 |||
   | Intent Grammar                                             |        | {% include from="B03-07_0203-Intents-Grammar-Desc.md" element-id="B03-07_0203-Intents-Grammar-Desc_snippet" /%}                                               |
   
   </chapter>

2. In the intent editor, edit the intent as needed.

3. Click Save.

##Delete an Intent {% #Delete %}

You can delete a single intent using the intent editor, or you can delete one or more intents using the Intents panel.

> **Note:** The builtins.fallback intents file is an inherent intent you can't remove. It acts as an alternative option. So, if all others fail, it must be builtins.fallback.

### Delete an Intent Using the Intent Editor

To delete an single intent:

1. In the Intents panel, find and select the intent to delete.

2. In the intent editor, in the header area, click the Delete button.

3. At the Delete Confirmation modal, click Delete. Alternatively, click Cancel to cancel the operation.

### Delete Intents from the Intents Panel

To delete one or many intents, use the Intents panel:

1. In the **Intents** panel, find one or many intents to delete.

2. Click the checkboxes to the right of your chosen intents.

   > The + Add New and Import buttons at the top of the panel change to Delete and Export buttons.
3. Click the **Delete** button.

##Export Intents {% #Export %}

After testing your intents, you're ready to deploy. Deploying means promoting your intent(s) from a lower instance to production. That's where exporting and importing comes into play. Amelia gives you the choice to export all, export a single file, or export multiple files.

When you export an intent, you download a TSV (tab separated value) file to your chosen Downloads location. Once downloaded, you can import this file to another domain.

### Export an Intent Using the Intent Editor

To export a single intent:

1. In the Intents panel, find and select an intent.

2. In the intent editor, click the Export button. The file downloads immediately named similarly to your intent. You'll find the downloaded TSV file in your default downloads location.

### Export Intents from the Intents Panel

To export one or many intents, use the Intents panel:

1. In the **Intents** panel, find one or many intents to export.

2. Click the checkboxes to the right of your chosen intents.

   > The + Add New and Import buttons at the top of the Intents panel change to **Delete** and **Export** buttons.
3. Click the **Export** button. The package downloads immediately, named similarly to your domain. You'll find the downloaded TSV file in your default downloads location.

   > Click the arrow to the right of the Export button. From here you can choose to **Export Selected** or Export All. The Export Selected option exports only the chosen intents to a TSV file named similarly to your domain. The Export All exports all intents in your domain to a single TSV file named similarly to your domain. You'll find the downloaded TSV file in your default downloads location.

   > You can also choose to Export All intents using the Ellipses ( ![Ellipsis-Btn-Intents_Panel](Ellipsis-Btn-Intents_Panel.png){width="25" style="inline"}) button. From here Export All exports all intents in your domain to a single TSV file named similarly to your domain. You'll find the downloaded TSV file in your default downloads location.

##Import an Intent {% #Import %}

After exporting your intent, you'll import it to the new domain. The Intents panel lets you import previously downloaded intent TSV files or grammar XML files.

### Import Intents From an Intents File

When you import intents, you upload the previously exported TSV file.

1. In the Intents panel, click the Import button. The Upload Intents File modal shows.
2. From the Source options, click From File.
3. From the Conflicts Resolution dropdown, make a selection:
   1. Merge with Existing: This option keeps the existing intents, and adds all new intents.
   2. Overwrite Existing: This option overwrites existing intents, and adds all new intents.
   3. Add to Existing: This option adds new intents only.
4. Drag and drop your TSV file to the upload area.

   > To remove the connected file, click the ![Delete-Btn-DEB](Delete-Btn-DEB.png){width="25" style="inline"} button at the right of the modal. Alternatively, browse for and select another file to replace your original selection.
5. Click the Upload button. Alternatively, click cancel to cancel the operation.

Your imported intent shows in the Intents panel.

### Import Intents from a Grammars File

When you import intents from grammars, you upload the previously exported XML file.
See our Grammars Management topic to learn more.

1. In the **Intents** panel, click the **Import** button. The Upload Intents File modal shows.
2. From the **Source** options, click **From Grammar**.
3. Click the **Upload** button. Alternatively, click Cancel to cancel the operation.

A new intent shows in the Intents panel named according to your imported grammar.

## More Resources

For more information, see: 

* [Intents Introduction](B03-07_0201-Intents-Intro.md)
* [Models Introduction](B03-07-NLU-Comprehension_B03-07_0701-Models-Intro.md)
* Grammars Introduction

