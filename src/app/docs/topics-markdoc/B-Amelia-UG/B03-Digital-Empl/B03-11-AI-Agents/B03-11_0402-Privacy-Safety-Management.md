# Privacy and Safety Management

{% include from="B11-00_0003-AgenticAI-EAP.md" element-id="B11-00_0003-AgenticAI-EAP_snippet" /%}

## Introduction

The Privacy and Safety tools help you manage content as your AI agents interact with users. You can mask Personal Identifying Information (PII) content captured in log files and transcripts. And PII content that displays in live conversations. It's also possible to create rules to filter content. For example, to confirm email addresses before processing.

To use Privacy and Safety features effectively, you should first understand their features and how to configure them. This topic gives insights into when and how to use custom rule filters and topic guardrails.

The [Privacy and Safety Introduction](B03-11_0401-Privacy-Safety-Intro.md) topic describes how privacy rules and content guardrails work.

## Access Privacy and Safety Features

{% include from="B11-00_0007-AgenticAI-PrivacySafety-Access.md" element-id="B11-00_0007-AgenticAI-PrivacySafety-Access_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The Privacy and Safety workspaces](#Workspaces).

* [Masking content with a privacy rule](#AddMaskContent).

* [Adding a custom privacy rule](#AddCustomPrivacyRule).

* [Editing a custom privacy rule](#EditCustomPrivacyRule).

* [Deleting a custom privacy rule](#DeleteCustomPrivacyRule).

* [Enabling and disabling custom privacy rules](#EnableDisableRule).

* [Moderating content with guardrails](#AddContentModeration).

* [Adding a topic filter guardrail](#AddTopicFilter).

* [Editing a topic filter guardrail](#EditTopicFilter).

* [Deleting a topic filter guardrail](#DeleteTopicFilter).

* [Enabling and disabling a topic filter guardrail](#EnableDisableGuardrail).


## The Privacy and Safety Workspaces {% #Workspaces %}

Two workspaces let you create, edit, and delete masking rules and moderation filters:

* **The Privacy tab**: Use this tab to define general rules and custom rules. You also can apply custom rules to input and output parameters of functions used by agents.

* **The Guardrails tab**: Use this tab to enable or disable content moderation. You also can add filters for permitted and prohibited topics.

### The Privacy Tab

The Privacy tab defines general rules and custom rules. You can apply custom rules to the input and output parameters of functions used by agents.

![B03-11_0402-PrivacySafety-New-Rule.png](B03-11_0402-PrivacySafety-New-Rule.png){width="800"}

*The Privacy Tab with New Custom Rule Panel*

*Privacy Tab Settings*

| Setting                                                                                                                              | Description                                                                                                                                                                                                                                                                                                |
|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Rules Panel                                                                                                                  ||
| General Rules                                                                                                                        | Click the Masked buttons to enable or disable masking for Address, Email, International Bank Account Number (IBAN), IPv4 Address, and/or Phone Number. Log files, transcripts, and conversations will mask these general types of content. Amelia saves your choices automatically. |
| Custom Rules Panel                                                                                                                   ||
| Name                                                                                                                                 | The name of a custom rule filter. Click the Name label to sort custom rule filters by name.                                                                                                                                                                                                                |
| Type                                                                                                                                 | Displays the Type of custom rule filter. Click the Type label to sort custom rule filters by type.                                                                                                                                                                                                         |
| Enabled                                                                                                                              | Click the Enabled button to enable or disable a custom rule filter.                                                                                                                                                                                                                                        |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}     | Click to display the Topic Filtering panel on the right side of the workspace. The settings for the selected topic filter guardrail will display.                                                                                                                                                          |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"} | Click to delete a topic filter guardrail.                                                                                                                                                                                                                                                                  |



*Custom Rule Panel Settings*

| Setting                                                                                                                              | Description                                                                                                                                    |
|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                                                                                                 | Type a unique descriptive name for the filter.                                                                                                 |
| Type                                                                                                                                 | Select the type of content to filter. Options are Address, Email, International Bank Account Number (IBAN), IPv4 Address, and/or Phone Number. |
| Enabled                                                                                                                              | Click Yes or No to enable or disable the filter.                                                                                               |
| Apply to Function Parameters                                                                                                         |                                                                                                                                                |
| + Add button                                                                                                                         | Click to assign the custom rule filter to Input and/or Output parameters for functions used by agents.                                         |
| Function                                                                                                                             | Displays the name of functions assigned to the custom rule filter.                                                                             |
| Input Parameters                                                                                                                     | The input parameters using the custom rule filter.                                                                                             |
| Output Parameters                                                                                                                    | The output parameters using the custom rule filter.                                                                                            |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}     | Click to display and edit a popup with details about the function and its parameters.                                                          |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"} | Click to delete a custom rule filter.                                                                                                          |
| Create button          | Displays at the top of the Custom Rule panel. Click to create a new rule filter.                                                               |
| Save button            | Displays at the top of the Custom Rule panel. Click to save a rule filter.                                                                     |
| Delete button          | Displays at the top of the Custom Rule panel. Click to delete a rule filter.                                                                   |


### The Guardrail Tab

The Guardrails tab enables or disables content moderation. You also can add filters for permitted and prohibited topics.

![B03-11_0402-PrivacySafety-New-Guardrail.png](B03-11_0402-PrivacySafety-New-Guardrail.png){width="800"}

*The Guardrails Tab with New Topic Filtering Panel*

*Guardrails Tab Settings*

| Setting                                                                                                                              | Description                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Moderation Panel                                                                                                                     ||
| Content Moderation                                                                                                                   | Click the Enabled button to enable or disable content moderation.                                                                                |
| Topic Filtering Panel                                                                                                                ||
| Name                                                                                                                                 | The name of a topic filter guardrail. Click the Name label to sort filters by name.                                                              |
| Permitted Topic                                                                                                                      | Displays the Name of permitted topics.                                                                                                           |
| Prohibited Topics                                                                                                                    | Displays the Name of prohibited topics.                                                                                                          |
| Enabled                                                                                                                              | Click the Enabled button to enable or disable a topic filter guardrail.                                                                          |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}     | Click to display the Topic Filtering panel on the right side of the workspace. The settings for the selected topic filter guardrail will display. |
| ![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"} | Click to delete a topic filter guardrail.                                                                                                        |



*Topic Filtering Panel Settings*

| Setting                | Description                                                                                                                                                                                                                                                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                   | Type a unique descriptive name for the filter.                                                                                                                                                                                                                                                                                               |
| Enabled                | Click Yes or No to enable or disable the filter.                                                                                                                                                                                                                                                                                             |
| + Add Permitted Topic  | Click to display a Name and Description field pair. Type a unique Name and Description for a filter that permits a topic.<br><br>Click the Delete (![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"}) button to delete a Name and Description field pair. |
| + Add Prohibited Topic | Click to display a Name and Description field pair. Type a unique Name and Description for a filter that prohibits a topic.<br><br>Click the Delete (![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"}) button to delete a Name and Description field pair.                                                                                                                                                                                                                  |
| Create button          | Displays at the top of the Topic Filtering panel. Click to create a new filter.                                                                                                                                                                                                                                                              |
| Save button            | Displays at the top of the Topic Filtering panel. Click to save a filter.                                                                                                                                                                                                                                                                    |
| Delete button          | Displays at the top of the Topic Filtering panel. Click to delete a filter.                                                                                                                                                                                                                                                                  |


## Mask Content with a Privacy Rule {% #AddMaskContent %}

To mask content:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Privacy tab, the General Rules panel, toggle masking on or off. Options are Address, Email, International Bank Account Number (IBAN), IPv4 Address, and/or Phone Number. Log files, transcripts, and live conversations will mask these general types of content. Amelia saves your choices automatically.

    You also can mask content with custom rules, as described in the next section.

## Add a Custom Privacy Rule {% #AddCustomPrivacyRule %}

To add a custom privacy rule:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Privacy tab, the Custom Rules panel, click the **+ Add button** at the top right of this panel. The New Custom Rule panel and form will display on the right half of the workspace.

3. Complete the New Custom Rule form. Type a unique descriptive Name and Type. Options for Type are Address, Email, International Bank Account Number (IBAN), IPv4 Address, and/or Phone Number.

    You also can apply the privacy rule to function parameters parsed by agents. To do so, click the **+ Add button** to the far right of the Apply to Function Parameters heading. The Add Function popup will display. Select one or more functions to use your filter. For each function, click the checkbox to the left of any Input or Output Parameters. Parameters display when you select a function. Then click the Save button in the popup to save your choices.

4. Click the Create button at the top of the New Custom Rule panel to create then save your custom privacy rule.

## Edit a Custom Privacy Rule {% #EditCustomPrivacyRule %}

To edit a custom privacy rule:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Privacy tab, the Custom Rules panel, click the Edit (![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}) button to display the rule settings in a right side panel.

3. Make changes as needed to your rule.

4. Click the Save button at the top of the right side panel to save your edits.


## Delete a Custom Privacy Rule {% #DeleteCustomPrivacyRule %}

To delete a custom privacy rule:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Privacy tab, the Custom Rules panel, click the Delete (![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"}) button. The Delete Confirmation popup will display.

3. Click the **Delete button** in the Delete Confirmation popup.

>You also can click the Edit (![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}) button to display the rule settings in a right side panel. Then click the Delete button at the top of the right side panel.


## Enable and Disable a Custom Privacy Rule {% #EnableDisableRule %}

To enable or disable a custom privacy rule:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Privacy tab, the Custom Rules panel, click the Enabled button to enable or disable the rule.

    You also can click the Edit (![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}) button to display the rule in a right side panel. Then click the Yes button or No button to the right of the Enabled setting.


## Moderating Content with Guardrails {% #AddContentModeration %}

To moderate content with guardrails:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Guardrails tab, the Moderation panel, toggle Content Moderation to enable or disable moderation. Amelia saves your choices automatically.

   You also can create topic filter guardrails, as described in the next section.


## Add a Topic Filter Guardrail {% #AddTopicFilter %}

To add a topic filter guardrail:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Guardrails tab, the Topic Filtering panel, click the **+ Add button** at the top right of this panel. The New Topic Filtering panel and form will display on the right half of the workspace.

3. Complete the New Topic Filtering form. Type a unique descriptive Name. Then click the + Add Permitted Topic and/or + Add Prohibited Topic buttons. Type a unique descriptive Name for each topic and a short Description.

4. Click the Create button at the top of the New Topic Filtering panel to create then save your topic filter guardrail.



## Edit a Topic Filter Guardrail {% #EditTopicFilter %}

To edit a topic filter guardrail:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Guardrails tab, the Topic Filtering panel, click the Edit (![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}) button to display the rule settings in a right side panel.

3. Make changes as needed to your topic filter.

4. Click the Save button at the top of the right side panel to save your edits.



## Delete a Topic Filter Guardrail {% #DeleteTopicFilter %}

To delete a topic filter guardrail:

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Guardrails tab, the Topic Filtering panel, click the Delete (![B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Delete.png){width="30" style="inline"}) button. The Delete Confirmation popup will display.

3. Click the **Delete button** in the Delete Confirmation popup.

>You also can click the Edit (![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}) button to display the topic filter settings in a right side panel. Then click the Delete button at the top of the right side panel.



## Enable or Disable a Topic Filter Guardrail {% #EnableDisableGuardrail %}

1. From the top left main navigation menu, click **AI Agents**. On the left edge, click the **AI Agents** button. From the flyout menu, then select the **Privacy and Safety** button. The Data Protection tab workspace displays.

2. On the Guardrails tab, the Topic Filtering panel, click the Enabled button to enable or disable the rule.

   You also can click the Edit (![B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png](B03-04_0112-DEB-Intent-Settings-New-Btn-Edit.png){width="30" style="inline"}) button to display the filter in a right side panel. Then click the Yes button or No button to the right of the Enabled setting.




## More Resources

{% include from="B11-00_0002-AgenticAI-MoreResources.md" element-id="B11-00_0002-AgenticAI-MoreResources_snippet" /%}
