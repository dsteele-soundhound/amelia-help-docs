# Integrations Management

## Introduction

To use the Autonomics integration workspace effectively, you must understand its features and tools and where to find them. The Integrationsworkspace lets you start and trackIntegrationsand their vendors. You'll use theIntegrationsworkspace to manage all the vendors. From theIntegrationstable, you can see their name, external system, statuses, and manage any outputs..

Our Integration Module Introduction topic describes many of these features. The Integration Module Walkthrough topic describes the Integrations workspace in more detail.

## Access the Integration Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The Integration workspace](#The).

* [Selecting the client](#Select).

* [Sorting integrations](#Sort).

* [Viewing integration details](#View).

* [Editing integration details](#Edit).

* [Testing integrations](#Test).

* [Deleting integrations](#Delete).

* [Searching integrations](#Search).

* [Enabling an integration](#Enable).

* [Disabling an integration](#Disable).

##The Integrations Workspace {% #The %}

The Integrations workspace is part of the Administration and Settings features. The workspace includes tools to navigate within the Settings workspaces, select clients, add integrations, and other tasks. Once an integration is selected in the list of integrations, a right side panel displays with details of the integration.

To close panels and return to the default workspace, click the Close (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button in the top right corner of the right side panel.

The web browser's back and forward buttons also can also be used to navigate between the workspace and panels.

![E05-01_0011-Integrations-Workspace](E05-01_0011-Integrations-Workspace.png){width="800"}

*The Integrations Workspace*

*Integrations Workspace Elements*

|                                            Element                                             |                                                                                      Description                                                                                       |
|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Main Menu                                                                                      | Click this menu to navigate between the key Autonomics features. In this example, Settings is the feature selected from the Main menu.                                                      |
| Settings Menu                                                                                  | Click this menu to navigate between the Settings features, including Integrations. In this example, Integrations is the selected Settings feature.                                     |
| Client Drop Down                                                                               | Click to display integrations for a specific client. In this example, Autonomics is the client.                                                                                             |
| + / + New Integration                                                                          | Displays as a **+ New Integration** button when the workspace lists only integrations. Displays as a **+** button when an integration is selected and displayed in a right side panel. |
| Search                                                                                         | Click to search integrations.                                                                                                                                                          |
| **Right Panel**                                                                                                                                                                                                                                                                        ||
| Edit                                                                                           | Click to edit the integration displayed in the right side panel.                                                                                                                       |
| Test                                                                                           | Click to test the integration.                                                                                                                                                         |
| Delete                                                                                         | Click to delete the integration.                                                                                                                                                       |
| Create                                                                                         | The Create button displays when you click the + New Integration button or + button and select an integration type to create. Click this button to save the new integration.            |
| Update                                                                                         | The Update button displays when you click the Edit button to display an integration form.                                                                                              |
| Properties                                                                                     | Once an integration is created, this tab displays details about the integration.                                                                                                       |
| Logs                                                                                           | Once an integration is created, this tab displays any logging details after running the integration.                                                                                   |
| Download                                                                                       | Click to download data related to the integration.                                                                                                                                     |
| ![Copy-Btn-AIOps](Copy-Btn-AIOps.png){width="25" style="inline"}                               | In the right panel, click to copy information to your computer clipboard.                                                                                                              |
| ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"} | Click to close right side panel.                                                                                                                                                       |

##Select the Client {% #Select %}

Selecting a client is the first step when you work with integrations. Click the client drop down list to the right of the Main menu, both located at the top left of the screen.

![E05-01_0011-Integrations-Client](E05-01_0011-Integrations-Client.png){width="800"}

*The Integrations Workspace Showing Client Dropdown Highlighted*

##Add an Integration {% #Add %}

To create an Autonomics integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the integration option you need. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01-0017_Integrations-New](E05-01-0017_Integrations-New.png){width="800"}

*The Integrations Workspace with the Select External System Panel*

![E05-01_0021-Integrations-SNOW-Incident](E05-01_0021-Integrations-SNOW-Incident.png){width="600"}

*An Example New Integration Panel*

##Sort Integrations {% #Sort %}

You can sort integrations using the headings. Click the Name, Enabled, Created, or Modified headings to sort integrations. A small triangle next to each heading indicates whether the sort is ascending or descending.

![E05-01_0011-Integrations-Sort](E05-01_0011-Integrations-Sort.png){width="800"}

*Sort Headings for Integrations*

##View Integration Details {% #View %}

To view details for an integration:

1. Click the main navigation menu at the top left and select the **Administration** link.

2. Click the **Clients** link that appears in a drop down list at the top left, under the logo.

3. Click the **Integrations** link that appears in the drop down menu.

4. Click an integration name in the list of integrations. A right panel will display with details about the integration and tools to edit, test, or delete it.

![E05-01_0011-Integrations-Details](E05-01_0011-Integrations-Details.png){width="800"}

*View Integration Details in Right Side Panel*

##Edit Integration Details {% #Edit %}

To edit an integration:

1. Click the main navigation menu at the top left and select the **Administration** link.

2. Click the **Clients** link that appears in a drop down list at the top left, under the logo.

3. Click the **Integrations** link that appears in the drop down menu.

4. Click an integration name in the list of integrations. A right panel will display.

5. Click the **Edit** button to edit integration details.

6. Click the **Update** button to save your changes.

![E05-01_0011-Integrations-Update](E05-01_0011-Integrations-Update.png){width="800"}

*The Edit Integration Panel*

##Test an Integration {% #Test %}

To test an integration:

1. Click the main navigation menu at the top left and select the **Administration** link.

2. Click the **Clients** link that appears in a drop down list at the top left, under the logo.

3. Click the **Integrations** link that appears in the drop down menu.

4. Click an integration name in the list of integrations. A right panel will display.

5. Click the **Test** button to test the integration. A popup will display with test results.

6. Click the **Close** button in the popup.

![E05-01_0011-Integrations-Test](E05-01_0011-Integrations-Test.png){width="600"}

*The Test Button*

![E05-01_0011-Integrations-Test-Popup](E05-01_0011-Integrations-Test-Popup.png){width="600"}

*The Test Results Popup*

##Delete an Integration {% #Delete %}

To delete an integration:

1. Click the main navigation menu at the top left and select the **Administration** link.

2. Click the **Clients** link that appears in a drop down list at the top left, under the logo.

3. Click the **Integrations** link that appears in the drop down menu.

4. Click an integration name in the list of integrations. A right panel will display.

5. Click the **Delete** button to delete the integration.

##Search for Integrations {% #Search %}

The Integrations workspace includes a search feature. It's located at the top right above the list of integrations. Search by the name of any integration.

![E05-01_0011-Integrations-Search](E05-01_0011-Integrations-Search.png){width="800"}

*The Search Box*

##Enable an Integration {% #Enable %}

Every integration includes a Status setting which is set to Enabled or Disabled. When you create an integration, select one of these options.

To enable an existing integration:

1. Click the main navigation menu at the top left and select the **Administration** link.

2. Click the **Clients** link that appears in a drop down list at the top left, under the logo.

3. Click the **Integrations** link that appears in the drop down menu.

4. Click an integration name in the list of integrations. A right panel will display.

5. Click the **Edit** button to edit the integration.

6. Click the **Enable** radio button for the **Status** setting. Then click the **Update** button to save the integration.

##Disable an Integration {% #Disable %}

Every integration includes a Status setting which is set to Enabled or Disabled. When you create an integration, select one of these options.

To disable an existing integration:

1. Click the main navigation menu at the top left and select the **Administration** link.

2. Click the **Clients** link that appears in a drop down list at the top left, under the logo.

3. Click the **Integrations** link that appears in the drop down menu.

4. Click an integration name in the list of integrations. A right panel will display.

5. Click the **Edit** button to edit the integration.

6. Click the **Disable** radio button for the **Status** setting. Then click the **Update** button to save the integration.

## More Resources

For more information, see:

* [Integrations Module Introduction](E05-01_0010-Integrations-Mod-Intro.md).

* [Integrations Module Library](E05-01_0012-Integrations-Library.md).
