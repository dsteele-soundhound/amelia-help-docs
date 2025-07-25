# Templates Management

## Introduction

{% include from="B03-06_0301-Templates-Short-Intro.md" element-id="B03-06_0301-Templates-Short-Intro_snippet" /%}

To use the Templates workspace, you must understand its features and where to find them. Templates are a key part of integration flows. Integration flows connect Amelia to third-party services. Once created, integration flows and data are available when you build conversation flows. You also can assign data from APIs to variables used in a conversation. Reusing templates makes it easy to create and install new integration flows.

See the [Integrations Introduction](B03-06_0201-Integrations-Intro.md) topic for details about integration flows. For simplified integrations, [Web Actions](B03-05_0101-Web-Actions-Intro.md) may be used.

## Access the Templates Workspace

{% include from="B03-06_0301-IntegrationTemplatesAccess.md" element-id="B03-06_0301-IntegrationTemplatesAccess_snippet" /%}

![B03-06_0303-Templates-Workspace](B03-06_0303-Templates-Workspace.png){width="900" style="block"}

*The Templates Workspace*

## What You'll Learn

In this topic you'll learn about:

* [Using the Templates workspace](#Using).
* [Using the Templates panel](#Using2).
* [Adding a template](#Adding).
* [Searching for a template](#Searchin).
* [Editing a template](#Editing).
* [Importing a template](#Importin).
* [Deleting a template](#Deleting).

##Using the Templates Workspace {% #Using %}

The Templates workspace includes tools to create and manage templates used to create integration flows.

*Templates Workspace Elements*

| Element                                                                                                      | Description                                                                                                                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Top Panel Buttons**                                                                                        |                                                                                                                                                                                                                                                           |
| Save                                                                                                         | Click to save an integration flow.                                                                                                                                                                                                                        |
| Save as Template                                                                                             | Click to save the integration flow as a template.                                                                                                                                                                                                         |
| Deploy/Undeploy                                                                                              | Click to deploy or undeploy the selected integration flow.                                                                                                                                                                                                |
| **Right Edge Icons**                                                                                         |                                                                                                                                                                                                                                                           |
| ![B03-06_0203-Integration-Btn-Info](B03-06_0203-Integration-Btn-Info.png){width="25" style="inline"}         | Click to display a slide out Information panel. This panel displays basic flow information with the ability to add runtime input and output variables.                                                                                                    |
| ![B03-06_0203-Integration-Btn-Assets](B03-06_0203-Integration-Btn-Assets.png){width="25" style="inline"}     | Click to display a slide out Assets panel. This panel provides the ability to add and manage assets needed for an integration flow. You can link to existing assets or drag and drop assets.                                                              |
| ![B03-06_0203-Integration-Btn-PropSets](B03-06_0203-Integration-Btn-PropSets.png){width="25" style="inline"} | Click to display a slide out Property Sets panel. This panel provides the ability to add and manage property sets needed for an integration flow. You can add existing properties and property sets. Or add properties and property sets from this panel. |


##Using the Templates Panel {% #Using2 %}

This panel appears between the left edge navigation links and the Builder workspace. The panel displays a list of integration flow templates.

To toggle open the Templates panel, click the Integrations icon link on the left edge navigation links. Then click the Templates link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Templates panel.

![B03-06_0303-Templates-Panel](B03-06_0303-Templates-Panel.png){width="400" style="block"}

*The Templates Panel*

*Templates Panel Elements*

| Element                                                                                                      | Description                                                                                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| + Add New                                                                                                    | Click to display a new integration flow template in a tab workspace.                                                                                                                                                                   |
| Import                                                                                                       | Click to import a template file on your local computer. The Import Template popup will display. Type a name and then browse to find a file or drag and drop a file on the popup. Then click the Upload button to import your template. |
| ![B03-06_0203-Integration-Btn-Undeploy](B03-06_0203-Integration-Btn-Undeploy.png){width="25" style="inline"} | Hover over an entry to display this button. Then click to deploy or undeploy an integration flow.                                                                                                                                      |
| ![B03-06_0203-Integration-Btn-Delete](B03-06_0203-Integration-Btn-Delete.png){width="25" style="inline"}     | Hover over an entry to display this button. Then click to delete an integration flow.                                                                                                                                                  |


## Adding a Template {% #Adding %}

To add a new integration flow template:

1. Click the + Add New button or the Import button in the Templates panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Integrations icon link on the left edge then click the Templates link that appears.

2. The newly created integration template will include boilerplate code needed for its operation.

   > The varpop line includes variables to return to Amelia. Change those variable names as needed. {style="note"}
   ```JavaScript
   &lt;camel:to uri="bean:varpop?method=moveToOutboundVariables('thing,bod')"&gt;
   ```

3. Customize the Camel code in the editor that appears in a new tab workspace. As needed, click the Info, Assets, and Property Sets buttons on the top right edge of the workspace.  

   The [Integrations Management](B03-06_0205-Integrations-Management.md) topic describes how to add or update template info, Assets, and Property Sets.  

4. Click the Save button to save the custom flow. Additional options will display in the top panel above the code.

##Searching for a Template {% #Searchin %}

To search for a template, click the Search Here field at the top of the Templates panel.

##Editing a Template {% #Editing %}

To edit a template, click an entry in the Templates panel. Then edit and make changes in the tab workspace that appears.

##Importing a Template {% #Importin %}

To import a template:

1. Click the Import button at the top of the Templates panel.

2. In the Import Template popup that displays, type a name and then select a file to import.

3. Click the Upload button to import and then save the template.

##Deleting a Template {% #Deleting %}

To delete a template, open a template and then click the Delete button at the top of the tab workspace.

## More Resources

For more information, see:

* [Templates Introduction](B03-06_0301-Templates-Intro.md).
* [Integrations Introduction](B03-06_0201-Integrations-Intro.md).
* [Integrations Management](B03-06_0205-Integrations-Management.md).

