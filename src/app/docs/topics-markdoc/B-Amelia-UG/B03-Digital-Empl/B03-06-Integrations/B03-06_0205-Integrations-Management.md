# Integrations Management

## Introduction

To use the Integrations workspace, you must understand its features and where to find them. Integration flows connect Amelia to third-party services. Once created, integration flows and data are available when you build conversation flows. You also can assign data from APIs to variables used in a conversation. See the [Integrations Introduction](B03-06_0201-Integrations-Intro.md) topic for details about to integration flows. For simplified integrations, [Web Actions](B03-05_0101-Web-Actions-Intro.md) may be used.

## Access the Integrations Workspace

{% include from="B03-06_0201-IntegrationAccess.md" element-id="B03-06_0201-IntegrationAccess_snippet" /%}

![B03-06_0203-Integration-Workspace](B03-06_0203-Integration-Workspace.png){width="900" style="block"}

*The Integrations Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Integrations Workspace](#Using).
* [Add an integration flow](#Add).
* [Edit an integration flow](#Edit).
* [Add or remove runtime variables from an integration flow](#Add2).
* [Add or remove assets from an integration flow](#Add3).
* [Add or remove property sets from an integration flow](#Add4).
* [Monitor Integration Logs](#Monitor).
* [Best Practices for integration flows](#Best).

##Using the Integrations Workspace {% #Using %}

The Integrations workspace includes tools to create and manage integration flows.

*Integrations Workspace Elements*

| Element                                                                                                      | Description                                                                                                                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Top Panel Buttons                                                                                            |                                                                                                                                                                                                                                                           |
| Save                                                                                                         | Click to save an integration flow.                                                                                                                                                                                                                        |
| Save as Template                                                                                             | Click to save the integration flow as a template.                                                                                                                                                                                                         |
| Deploy/Undeploy                                                                                              | Click to deploy or undeploy the selected integration flow.                                                                                                                                                                                                |
| Right Edge Icons                                                                                             |                                                                                                                                                                                                                                                           |
| ![B03-06_0203-Integration-Btn-Info](B03-06_0203-Integration-Btn-Info.png){width="25" style="inline"}         | Click to display a slide out Information panel. This panel displays basic flow information with the ability to add runtime input and output variables.                                                                                                    |
| ![B03-06_0203-Integration-Btn-Assets](B03-06_0203-Integration-Btn-Assets.png){width="25" style="inline"}     | Click to display a slide out Assets panel. This panel provides the ability to add and manage assets needed for an integration flow. You can link to existing assets or drag and drop assets.                                                              |
| ![B03-06_0203-Integration-Btn-PropSets](B03-06_0203-Integration-Btn-PropSets.png){width="25" style="inline"} | Click to display a slide out Property Sets panel. This panel provides the ability to add and manage property sets needed for an integration flow. You can add existing properties and property sets. Or add properties and property sets from this panel. |


## Using the Integrations Panel

This panel appears between the left edge navigation links and the Builder workspace. The panel displays a list of integration flows.

To toggle open the Integrations panel, click the Integrations icon link on the left edge navigation links. Then click the Integrations link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Integrations panel.

![B03-06_0203-Integration-Panel](B03-06_0203-Integration-Panel.png){width="400" style="block"}

*The Integrations Panel*

*The Integrations Panel Elements*

| Element                                                                                                      | Description                                                                                                                                                                                 |
|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| + Add New                                                                                                    | Click to display a new integration flow template in a tab workspace.                                                                                                                        |
| + From Template                                                                                              | Click to display a popup with a list of any custom integration flow templates that you have created. Click the template name to display a new integration flow template in a tab workspace. |
| ![B03-06_0203-Integration-Btn-Undeploy](B03-06_0203-Integration-Btn-Undeploy.png){width="25" style="inline"} | Hover over an entry to display this button. Then click to deploy or undeploy an integration flow.                                                                                           |
| ![B03-06_0203-Integration-Btn-Delete](B03-06_0203-Integration-Btn-Delete.png){width="25" style="inline"}     | Hover over an entry to display this button. Then click to delete an integration flow.                                                                                                       |


##Add an Integration Flow {% #Add %}

To add a new integration flow:

1. Click the + Add New button or the + From Template button in the Integrations panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Integrations icon link on the left edge then click the Integrations link that appears.
2. The newly created integration will include boilerplate code needed for its operation.

   The varpop line includes variables to return to Amelia. Change those variable names as needed.
   ```JavaScript
   <camel:to uri="bean:varpop?method=moveToOutboundVariables('thing,bod')> **Note:** ;
   ```

3. Customize the Camel code in the editor that appears in a new tab workspace. As needed, click the Info, Assets, and Property Sets buttons on the top right edge of the workspace.
4. Click the Save button to save the custom flow. Additional options will display in the top panel above the code.

> Custom integration flow templates are managed by clicking the Integrations icon link on the left panel navigation. Then click the Templates link in the flyout menu that appears. Templates created at this location appear in the popup that displays when the + From Template button is clicked.

##Edit an Integration Flow {% #Edit %}

To edit an existing integration flow:

1. Open the Integrations panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Integrations icon link on the left edge then click the Integrations link that appears.
2. In the Integrations panel, find the integration flow to edit and then click the entry to display the flow in a tab workspace.
3. Customize the Camel code in the editor that appears in a new tab workspace. As needed, click the Info, Assets, and Property Sets buttons on the top right edge of the workspace.
4. Click the Save button to save the custom flow. Additional options will display in the top panel above the code.

##Add or Remove Runtime Variables from an Integration Flow {% #Add2 %}

To manage runtime variables used by an integration flow:

1. Click the ![B03-06_0203-Integration-Btn-Info](B03-06_0203-Integration-Btn-Info.png){width="25" style="inline"} button at the top right of the integration tab workspace. The Integration Flow panel will display.
2. As needed, use the Integration Flow panel to define the flow. Then define any runtime input or output variables.
3. Click the Save button in the top panel of the tab workspace.
4. Runtime variables can be accessed in a Camel integration inside of the Groovy script context.

   ```JavaScript
   <camel:groovy> <![CDATA[ def myVar = exchange.getProperty('myVar') ]]> </camel:groovy>
   ```

![B03-06_0203-Integration-Panel-IntFlow](B03-06_0203-Integration-Panel-IntFlow.png){width="900" style="block"}

*The Integration Flow Panel for an Integration Flow*

##Add or Remove Assets from an Integration Flow {% #Add3 %}

Assets are files that can be attached to an integration flow for use inside of the integration. Typical examples of assets include JAR files and certificates. To manage assets used by an integration flow:

1. Click the ![B03-06_0203-Integration-Btn-Assets](B03-06_0203-Integration-Btn-Assets.png){width="25" style="inline"} button at the top right of the integration tab workspace. The Assets panel will display.
2. As needed, add assets by selecting from the Add Existing Assets dropdown list or dropping an asset file on the landing spot.
3. Click the Save button in the top panel of the tab workspace.

> **Note:** Assets are managed by clicking the Integrations icon link on the left panel navigation. Then click the Assets link in the flyout menu that appears.

![B03-06_0203-Integration-Panel-Assets](B03-06_0203-Integration-Panel-Assets.png){width="900" style="block"}

*The Assets Panel for an Integration Flow*

##Add or Remove Property Sets from an Integration Flow {% #Add4 %}

Individual properties and property sets can be associated with an integration. To manage properties and property sets used by an integration flow:

1. Click the ![B03-06_0203-Integration-Btn-PropSets](B03-06_0203-Integration-Btn-PropSets.png){width="25" style="inline"} button at the top right of the integration tab workspace. The Properties panel will display.
2. As needed, use the Properties panel to add flow properties, existing property sets, import property sets, and define individual properties.
3. Click the Save button in the top panel of the tab workspace.
4. These properties are accessible in an integration using the syntax `{{myVar}}`.

> **Note:** Property Sets are managed by clicking the Integrations icon link on the left panel navigation. Then click the Property Sets link in the flyout menu that appears.

![B03-06_0203-Integration-Panel-PropSets](B03-06_0203-Integration-Panel-PropSets.png){width="900" style="block"}

*The Properties Panel for an Integration Flow*

##Monitor Integration Logs {% #Monitor %}

You can monitor the performance of integration flows with the Integration Logs feature. Integration logs are available by clicking the Integrations icon link on the left edge. Then select the Integration Logs link in the flyout menu that appears. You can search for an initiator, event type, or domain code. Or filter results by event type and date range.

##Best Practices {% #Best %}

Follow these best practices to make using integrations easier to use.

* Retrieve only the minimum data required. Take extreme care when logging payloads or data subject to compliance regulations. Get explicit approval and sign off when this data is to pass through Amelia integrations.
* Whenever possible, reuse integration templates, assets, and property sets. This helps reduce or eliminate business logic being hard coded into integration flows.
* Be sure to include retries and error logic in the integration to handle exceptions.

## More Resources

For more information, see:

* [Integrations Introduction](B03-06_0201-Integrations-Intro.md)