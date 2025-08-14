# Web Actions Configuration

## Introduction

Web Actions use a web interface to configure connections to third-party resources. These actions are available to Digital Employees builderBackend blocks and BPN Consume Web Service tasks. This provides an easy way to use and display third-party data in a conversation flow. See the [Web Actions Introduction](B03-05_0101-Web-Actions-Intro.md) topic for details.

Web Actions are designed to be a low code or no code alternative to the Integrations feature. Both features connect to third-party data sources and make data available in a conversation flow. However, Web Actions use a web interface instead of Camel code.

## Access the Web Actions Workspace

{% include from="B03-05_0101-WebActionAccess.md" element-id="B03-05_0101-WebActionAccess_snippet" /%}

![B03-05_0102-WebActions-Workspace](B03-05_0102-WebActions-Workspace.png){width="900" style="block"}

*The Web Actions Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Web Actions Workspace](#Use).
* [Add a Web Action](#Add).
* [Edit a Web Action](#Edit).
* [Delete a Web Action](#Delete).
* [Search for a Web Action](#Search).
* [Use a Web Action in blocks and tasks](#Use2).

##Use the Web Actions Workspace {% #Use %}

The Web Actions workspace includes tools to create and manage web actions.

### The Web Actions Panel

This panel appears between the left edge navigation links and the Builder workspace. The panel displays a list of web actions.

To toggle open the Web Actions panel, click the Web Actions icon link on the left edge navigation links. Then click the Web Actions link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Web Actions panel.

![B03-05_0102-WebActions-Panel](B03-05_0102-WebActions-Panel.png){width="400" style="block"}

*The Web Actions Panel*

*Web Actions Panel Elements*


| Element                                                                                    | Description                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| +Add New                                                                                   | Click to add a new web action from an external source: * Upload Content Pack: * Import from Open API: Import API resource URL documentation in OpenAPI format. This generates Web Actions, Authentications, and other artifacts. Swagger's OpenAPI specification is online at swagger.io.                                                           |
| ![Flow-Settings-Btn-DEB_Right](Flow-Settings-Btn-DEB_Right.png){width="25" style="inline"} | Hover over a folder to display this button. Click to display folder and web action options. * Create Folder: Click to create a folder to hold web actions. * Create New Web Action: Click to display a New web action tab workspace. * Edit: Click to display a popup to edit the folder name. * Delete: Click to delete a folder and its contents. |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}           | Hover over a web action to display the Delete icon. Click to delete the web action.                                                                                                                                                                                                                                                                 |


### The Web Actions Workspace

The Web Actions workspace has three elements:

* A top panel with buttons to save, delete, or export the web action.

* A Web Service Action panel to define the web action.

* A Response panel to display the results of sending an http/https query defined in the Web Service Action panel.

#### The Top Panel

The top panel includes buttons to perform basic actions.

*Web Actions Top Panel Elements*

| Element |                                                                                Description                                                                                 |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Save    | Click to save a new web action or changes to a web action.                                                                                                                 |
| Delete  | Click to delete a web action. This button appears after a web action is saved the first time.                                                                              |
| Export  | Click to export a web action. The web action is saved as a zipped file with a config file and a .jar file. This button appears after a web action is saved the first time. |


#### The Web Service Action Panel

Configure the name, request type, and request URL with the top part of this panel.

*Web Service Action Panel Elements*


| Element | Description                                                                                                                                                                                                                                                                                                                                                    |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name    | Type a name for the web action.                                                                                                                                                                                                                                                                                                                                |
| Request | Click the dropdown list to select a login request type. Options are GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, and TRACE. Then type the request URL in the field to the right of the dropdown list. <note>Request URLs can include variables, for example, https://example.amelia.com/api/${var}/endpoint where ${var} is a variable in JEXL format.</note> |
| Send    | Click this button to send any input data to the request URL using the request type. If input data is configured, a popup will appear. Type test data and then click the Send button in the popup. Return data will appear in the Response panel.                                                                                                               |


The Web Service Action panel also provides several tabs to configure re-usable web actions.

<chapter title="Input Tab" collapsible="true" level="5">
<p>The input tab lets you create parameters to send to the http/https resource. For example, access keys.</p>

*Web Service Action Panel: Input Tab Elements*

|                                                Element                                                 |                                     Description                                      |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| + Add Parameter                                                                                        | Click to add an open text Name and Value parameter pairs to pass to the request URL. |
| + Add Secure Parameter                                                                                 | Click to add a secure Name and Value parameter pairs to pass to the request URL.     |
| ![Delete2-Btn-DEB_Inside_Properties](Delete2-Btn-DEB_Inside_Properties.png){width="25" style="inline"} | Click the Delete icon next to a parameter to delete it.                              |


</chapter>

<chapter title="Output Tab" collapsible="true" level="5">
<p>The output tab lets you configure how to handle the response from a web action.</p>

*Web Service Action Panel: Output Tab Elements*


| Element                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Content Type                                                                                           | Select the type of data output received from a web action. Options are Auto, Text, JSON, XML, HTML, and Binary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Add Code Group                                                                                         | Click this dropdown list to select response codes to capture with a response. OK is the default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| + Add Output Mapping                                                                                   | Click to add an output mapping configuration. For each mapping, type a Variable Name, Mapped Value, and the Origin. <ul><li><strong>Variable Name</strong>: the name used to store response data. And by Script blocks and tasks to display responses in a conversation flow.</li><li><strong>Mapped Value</strong>: The output value in $.value format.</li><li><strong>Origin</strong>: Select where the element is stored. Options are Body, Header, and Expression.</li></ul> Variables saved here may be accessed in a Digital Employee Builder workflow. These will become automatically available for some elements, such as say tasks. Inside of a script, these may be accessed inside a script by: `def varName = execution.getVariable('varName')` |
| ![Delete2-Btn-DEB_Inside_Properties](Delete2-Btn-DEB_Inside_Properties.png){width="25" style="inline"} | Click the Delete icon to delete a mapping configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


</chapter>

<chapter title="Headers Tab" collapsible="true" level="5">


*Web Service Action Panel: Headers Tab Elements*

|                                                Element                                                 |                                        Description                                         |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| + Add Header                                                                                           | Click to add and define text Name and Value pairs to pass as headers to the request URL.   |
| + Add Secure Header                                                                                    | Click to add and define secure Name and Value pairs to pass as headers to the request URL. |
| ![Delete2-Btn-DEB_Inside_Properties](Delete2-Btn-DEB_Inside_Properties.png){width="25" style="inline"} | Click the Delete icon to delete a header configuration.                                    |


</chapter>

<chapter title="Body Tab" collapsible="true" level="5">
<p>The Body tab configures data to be sent, for example, a message or structured information.</p>

*Web Service Action Panel: Body Tab Elements*


|   Element    |                                                                                        Description                                                                                         |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Content Type | Select the type of content to include in the body of a message sent to the request URL. Options are None, Form-data, URL-encoded, JSON, XML text, XML application, Text, HTML, and Binary. |
| Editor       | Type the data to be included in the body of a message.                                                                                                                                     |


</chapter>

<chapter title="Settings Tab" collapsible="true" level="5">
<p>The Settings tab configures basic qualities of the web action, as well as how to handle errors.</p>

*Web Service Action Panel: Settings Tab Elements*

| Element             | Description                                                                                        |
|---------------------|----------------------------------------------------------------------------------------------------|
| Authorization       | If needed, select an authorization to use for this web action.                                     |
| Certificate         | If needed, select a certificate to use for this web action.                                        |
| Proxy               | If needed, select a proxy to use for this web action.                                              |
| Execution Group     | Select an execution group to manage web action interactions. shared is the default.                |
| Execution Timeout   | If needed, select an execution timeout to use for this web action.                                 |
| Property Sets       | If needed, select a property set to use for this web action.                                       |
| Error Handling      |                                                                                                    |
| Execution Error     | On execution error, select whether to Escalate, Ignore, or Retry. Escalate is the default.         |
| Timeout             | On timeout error, select whether to Escalate, Ignore, or Retry. Escalate is the default.           |
| Connection Failed   | On connection failed error, select whether to Escalate, Ignore, or Retry. Escalate is the default. |
| Retry Timeout (sec) | For any connection error, type the number of seconds to wait to retry the connection.              |
| Retry Attempts      | For any connection error, type the number of times to retry the connection.                        |


</chapter>

#### The Response Panel

The Response panel displays web action results. Clicking the Send button in the Web Service Action panel generates results. The panel provides the ability to test connections and configurations.

*Response Panel Elements*


|   Element   |                                           Description                                            |
|-------------|--------------------------------------------------------------------------------------------------|
| Status      | Displays the status code returned from the request.                                              |
| Time        | Displays the time required to send and receive data.                                             |
| Size        | Displays the size of the data received.                                                          |
| Headers Tab | Click to displays the headers and header details returned from the request.                      |
| Body Tab    | Click to display the data payload returned from the request. Data can be viewed as JSON or Text. |



##Add a Web Action {% #Add %}

To add a new web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Web Actions link that appears.

2. In the Web Actions panel, hover over a folder to display and then click the Configuration ( ![Config-Btn-DEB_Panel](Config-Btn-DEB_Panel.png){width="25" style="inline"}) button. Click the Create New Web Action link that displays below the button. A new Web Actions tab workspace will display. If no folders or web actions exist, create a folder and then create a web action in that folder.

3. Customize the Web Actions tab workspace to create the web action.

4. Click the Save button to save the web action. Additional options will display in the top panel above the workspace.

##Edit a Web Action {% #Edit %}

To edit an existing web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Web Actions link that appears.

2. In the Web Actions panel, find the web action to edit and then click the entry to display the web action in a tab workspace.

3. Customize the web action in the Web Actions tab workspace.

4. Click the Save button to save the web action.

##Delete a Web Action {% #Delete %}

To delete a web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Web Actions link that appears.

2. In the Web Actions panel, find the web action to delete. Hover over the entry to display the Delete ( ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

3. Click the Delete button to delete the web action.

##Search for a Web Action {% #Search %}

To search for a web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Web Actions link that appears.

2. In the Web Actions panel, click the Search Here field at the top of the panel. Type a partial or complete phrase. Search results appear dynamically in the panel.

##Use a Web Action in Blocks and Tasks {% #Use2 %}

A Digital Employees builderBackend block or the BPN Consume Web Service task can call a web action. They receive the response from the action. One or more variables store the response. And Script blocks and Script tasks then use the variable to display results in a conversation flow.

To use a Web Action in a conversation flow:

1. Add a Backend block and then click the block to display the Properties panel.

2. In the Settings tab of a Backend block, select Web Action from the Type dropdown menu. Then select the web action name in the Web Action dropdown list.

These steps display settings defined for the web action. For example, the variable name used to store return data.

In this example, this conversation flow has a Backend block. The block calls the search_location web action. The block captures the return data in the searchResults variable. This variable becomes part of the conversation context. It is available for use by Script blocks and tasks.

![B03-05_0102-WebActions-Script](B03-05_0102-WebActions-Script.png){width="900" style="block"}

*The Backend Block Calls a Web Action*

## Best Practices

Follow these best practices to make using web actions easier to use.

* Use authorizations instead of embedding credentials into a Web Action
* Group common Web Actions together by folder
* Divide into subfolders if needed
* Use variable names that are obvious and relate to the information being returned
* Make Web Actions as dynamic as possible using variables
* Use a Property Set for common variables shared between Web Actions
* Set error handling behavior, which is appropriate for your use case

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}
