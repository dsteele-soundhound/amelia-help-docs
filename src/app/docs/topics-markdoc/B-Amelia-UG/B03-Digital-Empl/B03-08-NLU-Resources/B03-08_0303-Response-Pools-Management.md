# Response Pools Management

## Introduction

To use the Response Pools workspace, you must understand its features and where to find them. Response pools are a collection of possible responses. Amelia uses pools to randomly select responses for specific purposes. To greet users, a greeting response pool might have many possible utterances. Amelia would select a greeting for the start of each interaction.

See our [Response Pools Introduction](B03-08-NLU-Resources_B03-08_0301-Response-Pools-Intro.md) topic for details about response pools.

## Access the Response Pools Panel

{% include from="B03-08_0301-ResponsePoolsAccess.md" element-id="B03-08_0301-ResponsePoolsAccess_snippet" /%}

![B03-08_0303-ResponsePools-Workspace](B03-08_0303-ResponsePools-Workspace.png){width="900" style="block"}

*The Response Pools Panel and Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Response Pools workspace](#Use).
* [Add a Response Pool group](#Add).
* [Add a Response Pool to a Response Pool group](#Add2).
* [Add a Response to a Response Pool](#Add3).
* [Add a Tag to a Response](#Add4).
* [Annotate a Response](#Annotate).
* [Search for a Response Pool group, pool, or response](#Search).
* [Edit a Response Pool group](#Edit).
* [Edit a Response Pool](#Edit2).
* [Edit a Response](#Edit3).
* [Import Response Pool groups, pools, and responses](#Import).
* [Export Response Pool groups, pools, and responses](#Export).
* [Delete a Response Pool group, pool, or response](#Delete).

##Use the Response Pools Workspace {% #Use %}

### The Response Pools Panel

This panel appears between the left-edge links and the Digital Employees Home workspace. The panel displays a list of response pool groups, pools, and responses.

To toggle open the Response Pools panel, click the NLU Resources icon link on the left-edge links. Then click the Response Pools link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Response Pools panel.

The Response Pools panel has two links:

* A Response Pools link that displays response pools used to organize responses. It includes the ability to add, edit, delete, import, and export pools and their responses. You also can search for pools and display pools by response group.

* A Response Groups link that displays groups. Groups organize response pools and their responses. It includes the ability to add one or more groups.

Click the Response Pool or Response Group link to display or hide options and a list of artifacts.

![B03-08_0303-ResponsePools-Panel](B03-08_0303-ResponsePools-Panel.png){width="400" style="block"}

*The Response Pools Panel*

*Response Pools Panel Elements*

| Element                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Response Pools**                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +Add New                                                                                     | Click to add a new response pool. A New Response Pool popup displays. Type a unique Name for the pool, select the Group, and type a short description. Then click the Create button to save the new pool.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ![Import-Btn-DEB_Toolbar](Import-Btn-DEB_Toolbar.png){width="25" style="inline"}             | Click to import one or more response pools. A Response Pools Import popup displays. Click the popup landing spot and navigate to a file to import. Then click the Upload button to import.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ![Export-Btn-Script_Toolbar](Export-Btn-Script_Toolbar.png){width="25" style="inline"}       | Click to export one or more response pools. A dropdown menu displays with two options: <ul><li><strong>Export as XML:</strong> Exports response pools in XML format.</li> <li><strong>Export as Content Pack:</strong> Exports response pools in Content Pack format.</li></ul> To select pools to export, click the checkbox ( ![Checkbox-Btn-Pools_DelExport](Checkbox-Btn-Pools_DelExport.png){width="25" style="inline"}) at the top of the Response Pools panel to select all pools. Or click the checkbox to select individual pools. Then click the Export button that appears at the top of the panel. The response pools are exported to the local downloads folder on your computer. |
| ![Checkbox-Btn-Pools_DelExport](Checkbox-Btn-Pools_DelExport.png){width="25" style="inline"} | Click to select all or individual response pools. When selected, the +Add New, Import, and Export buttons are replaced with two buttons: Delete and Export.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Search Here                                                                                  | Type a full or partial phrase to filter the list of response pools.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Response Pool Group                                                                          | Select a response pool group to filter the list of response pools by group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Response Groups**                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +Add New                                                                                 
### The Response Pools Workspace    | Click to add a new response group. A New Response Pools Group popup displays. Type a unique Code for the group and type a short description. Then click the Create button to save the new group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}             | Click to delete a response pool group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |



The Response Pools workspace has these elements:

* A top panel with buttons to save and delete the response pool group, pool, or response.
* A workspace to define the response pool group, pool, or response.

#### The Top Panel

The top panel includes buttons to perform basic actions.

*Response Pools Top Panel Elements*

|    Element    |                                                                           Description                                                                            |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edit Metadata | Click to edit the response pool metadata. The Edit Metadata popup displays. Type any metadata in the Description field. Then click the Save button in the popup. |
| Delete        | Click to delete a response pool.                                                                                                                                 |


#### The Response Pools Workspace

Configure the certificate with this workspace.

*Response Pools Workspace Elements*

|                             Element                             |                                Description                                |
|-----------------------------------------------------------------|---------------------------------------------------------------------------|
| Tags                                                            | Click a tag to filter the list of responses.                              |
| Search Here                                                     | Type a full or partial phrase to filter the list of responses.            |
| Response Entry                                                  | Type a response in this field.                                            |
| Language                                                        | For each response, select the language used for the response.             |
| Add Tags                                                        | For each response, add any tags used for the response.                    |
| +Add                                                            | For each response, click to add the response to the response pool.        |
| **List of Responses**                                                                                                                          ||
| Sequence                                                        | The priority order for a specific response.                               |
| Locale                                                          | Click to change the currently selected language to use for this response. |
| Template                                                        | Click to change the response text.                                        |
| Tags                                                            | Click to add new or existing tags to a response.                          |
| ![Delete-Btn-DEB](Delete-Btn-DEB.png){width="25" style="inline"} | Click to delete a response.                                               |


##Add a Response Pool Group {% #Add %}

To add a new response pool group:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. In the Response Pools panel, click the Response Pools Groups link. At times, the link is at the bottom of the panel. Click the +Add New button that displays at the top of this panel. A New Response Pools Group popup displays.

3. In the popup, type a unique Code for the group and type a short description. Then click the Create button to save the new group.

4. Click the Create button to save the new group and close the popup.

##Add a Response Pool to a Response Pool Group {% #Add2 %}

To add a new response pool to a response pool group:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. In the Response Pools panel, click the Response Pools link. Click the +Add New button that displays at the top of this panel. A New Response Pools popup displays.

3. In the popup, type a unique Name for the pool, select the response pool Group, and type a short description.

4. Click the Create button to save the new pool.

##Add a Response to a Response Pool {% #Add3 %}

To add a response to a response pool:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools. If needed, use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools. Click the pool needed. The selected pool will display in a tab workspace.

3. In the tab workspace, click the Response entry field and type a unique pool name. Select a language from the Language dropdown. If useful, click the Tags dropdown to add or select one or more tags.

4. Click the +Add button to add the response to the response pool.

##Add a Tag to a Response {% #Add4 %}

You can use tags to filter responses listed in the Response Pool tab workspace. There are two ways to add one or more tags to a response.

* When adding a new response, click the Add Tags dropdown. A small Select Your Item dropdown will display. Click the dropdown and then type your unique tag name. A second dropdown will appear with text, Add Test where Test is the name of your tag. Click the word Add to add the tag to the response.

* Once a response is created, click the Tags part of the response you want to update. A Select Your Item dropdown appears. Click the dropdown and then type your unique tag name. A second dropdown will appear with text, Add Test where Test is the name of your tag. Click the word Add to add the tag to the response.

##Annotate a Response {% #Annotate %}

You can annotate response pool entries. For example, you can present response text with bold. Speech modifications also are possible using SSML. Amelia might speak a word or phrase slowly to make it easier to understand the response.

To annotate a response:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools. If needed, use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools. Click the pool needed. The selected pool will display in a tab workspace.

3. In the tab workspace, click a Response. The response text becomes active with icons displayed. Click the Annotate ( ![Annotate-Btn-ResponsePools](Annotate-Btn-ResponsePools.png){width="25" style="inline"}) button to display a popup annotation editor.

![B03-08_0303-ResponsePools-Annotate](B03-08_0303-ResponsePools-Annotate.png){width="600" style="block"}

*The Annotate Editor Popup*

##Search for a Response Pool Group, Pool, or Response {% #Search %}

The Responses Pool feature provides a few ways to filter and find responses, pools, and groups.

To find groups and pools:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. To filter response pools, click the Response Pools link to display a list of existing pools. Use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools. Click the pool needed. The selected pool will display in a tab workspace.

3. To filter response pool groups, click the Response Pools Groups link to display a list of existing pool groups. Use the Search Here input field. Click the group needed. A popup will appear where you can edit the Group Code and Description.

To find responses in a response pool tab workspace:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools. If needed, use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools. Click the pool needed. The selected pool will display in a tab workspace.

3. Click the Search box at the top right, above the list of responses. Or click the Tags field to the left of the Search box. Then click the Select Your Item dropdown that appears. Select a tag name to filter the list of responses.

##Edit a Response Pool Group {% #Edit %}

To edit a response pool group:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools Groups link to display a list of existing pool groups. If needed, use the Search Here input field to filter the list of groups. Click a group name. A popup will appear.

3. Edit the Group Code and Description in the popup.

4. Click the Save button in the popup.

##Edit a Response Pool {% #Edit2 %}

Unfortunately, you cannot edit response pools.

##Edit a Response {% #Edit3 %}

To edit a response in a response pool:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools. If needed, use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools. Click the pool needed. The selected pool will display in a tab workspace.

3. Click a response listed in the tab workspace. For example, to change the language of a response, click the Locale field for the response.

4. Click the Save ( ![Save-Btn-ResponsePools](Save-Btn-ResponsePools.png){width="25" style="inline"}) button that appears next to the field you're editing.

   > To restore the original edit, click the Restore ( ![Del-Btn-ResponsePools](Del-Btn-ResponsePools.png){width="25" style="inline"}) button.

##Import Response Pool Groups, Pools, and Responses {% #Import %}

To import response pool groups, pools, and responses.

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools.

3. At the top of the Response Pools panel, click the Import ( ![Import-Btn-DEB_Toolbar](Import-Btn-DEB_Toolbar.png){width="25" style="inline"}) button to import one or more response pools. A Response Pools Import popup displays.

4. Click the popup landing spot and navigate to a file to import. Then click the Upload button to import.

##Export Response Pool Groups, Pools, and Responses {% #Export %}

To import response pool groups, pools, and responses.

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools. If needed, use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools.

3. Click the checkbox ( ![Checkbox-Btn-Pools_DelExport](Checkbox-Btn-Pools_DelExport.png){width="25" style="inline"}) at the top of the panel to select all pools with their groups and responses. Or click the checkbox to the right of one of more listed response pools.

4. At the top of the Response Pools panel, click the Export ( ![Export-Btn-Script_Toolbar](Export-Btn-Script_Toolbar.png){width="25" style="inline"}) button to export the selected response pools. You have two options, Export as XML or Export as a Content Pack. Select the appropriate option.

> **Note:** The response pools are exported to the local downloads folder on your computer.

##Delete a Response Pool Group, Pool, or Response {% #Delete %}

To delete a response pool group, pool, or response:

To delete response groups:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. To delete response pool groups, click the Response Pools Group link to display a list of existing groups. Click the Delete () button to delete the group.

To delete a response pool:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools.

3. Click the checkbox ( ![Checkbox-Btn-Pools_DelExport](Checkbox-Btn-Pools_DelExport.png){width="25" style="inline"}) at the top of the panel to select all pools with their responses. Or click the checkbox to the right of one of more listed response pools. The Delete button will appear at the top of the panel.

4. Click the Delete ( ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}) button to delete the selected pools and responses.

To delete a response in a response pool:

1. Open the Response Pools panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the NLU Resources link on the left edge then click the Response Pools link that appears.

2. Click the Response Pools link to display a list of existing pools. If needed, use the Search Here input field or select a group from the Response Pool Group dropdown to filter the list of pools. Click the pool needed. The selected pool will display in a tab workspace.

3. Click a response listed in the tab workspace that you want to delete. Click the Delete ( ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}) button that appears at the right edge of the listed response.

## More Resources

For more information, see:

* [Response Pools Introduction](B03-08-NLU-Resources_B03-08_0301-Response-Pools-Intro.md).