# CIs Walkthrough

## Introduction

Configuration items (CIs) store data about resources. For example, they can store access details for a database server. You can clone CIs that are similar. And you can create new CIs using another CI as a base CI to inherit its properties. Scopes let you organize CIs based on location and other common details.

When you create a client account in AIOps, it includes a CMDB with two default scopes. You can create different types of CIs based on their scope.

* The **Default System Scope** lets you create and store CIs for script factories. The factories manage connections. They also manage discovery and monitoring. And factories manage authentication for devices using IPlocksmith.

* The **Default Scope** and custom scopes create and store CIs. These CIs describe devices, subnets, and cloud environments like Amazon and Azure.

While you can archive CIs in a CMDB, you cannot delete them. It's also possible to import CIs using an Excel file. The first step setting up Autonomics is to create and configure one or more CIs. You organize them with the Default System Scope, Default Scope, or custom scopes you create.

## Accessing the CIs

{% include from="E04-01_0002-CMDBAccess.md" element-id="E04-01_0002-CMDBAccess_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The CIs workspaces](#Workspaces).
* [Adding a configuration item (CI)](#AddCI).
* [Discovering a configuration item (CI)](#DiscoverCI).
* [Cloning a configuration item (CI)](#CloneCI).
* [Exporting a configuration item (CI)](#ExportCI).
* [Importing a configuration item (CI)](#ImportCI).
* [Archiving a configuration item (CI)](#ArchiveCI).
* [Adding a configuration item (CI) template](#AddCITemplate).


## The CIs Workspaces {% #Workspaces %}

The CIs workspace includes two views:

* The default workspace lists active CIs with the ability to create new ones. You also can include archived CIs. And you can filter the list of CIs by scope, class, and name. Plus import, export, and create them.
* When you select a CI in the default workspace, the right side panel displays its details. You also can edit, discover, or clone the CI in this panel.

![E04-01_0006-CI-Workspace.png](E04-01_0006-CI-Workspace.png){width="800"}

*The CIs Workspace with Right Side Panel*

### The Default Workspace

The default workspace lists all active scopes. You also can create scopes and search within the listed scopes. And you can include archived scopes in the list. Clicking a scope opens a right side panel to display and work with the CIs assigned to it.

### The Right Panel

Click any scope listed in the default workspace to open the right side panel. You'll see all the CIs assigned to the scope. There's also tools available to work with CIs.

Click any CI listed in the right side panel to view its details. The panel that lists all the scope CIs slides to the left. The right panel displays details about the CI. You can edit, discover, or clone the CI. And view properties, relations, linked tasks, and other details.

| Element                   | Description                                                                                                                                                                                                                           |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Buttons                   ||
| Save button               | Click to save any configurations for a CI.                                                                                                                                                                                            |
| Edit button               | Click to edit a CI.                                                                                                                                                                                                                   |
| Clone button              | Click to clone a CI.                                                                                                                                                                                                                  |
| Close button              | Click to close a CI without saving edits.                                                                                                                                                                                             |
| Tabs                      ||
| Properties                | Click to display and configure CI properties                                                                                                                                                                                          |
| Relations                 | Click to add any incoming or outgoing relations for the CI. Adding a relation moves the right side panel to the left. The right panel then displays available incoming or outgoing relations.                                         |
| Linked Tasks              | Click to display any tasks linked to the CI.                                                                                                                                                                                          |
| History                   | Click to display the history of the CI.                                                                                                                                                                                               |
| Properties Tab            ||
| Tags                      | Type one or more comma-separated tag names then press Enter to save them.                                                                                                                                                             |
| + Create New Class button | Click to display the Create New Class popup. Type the new class name and the Add New Field button as needed. Classes organize fields as key:value pairs. For example, a class called Device to organize and store connection details. |
| + Add New Field           | Click to add a new field to a Class. For a CI class called Device, you might add a new field called Host.                                                                                                                             |


## Add a Configuration Item (CI) {% #AddCI %}

To add a configuration item:

1. In the default CIs workspace, click the **+ Create CI button** at the top right of the workspace. The Create New CI popup displays.

2. Type the **CI Name** in the popup. Click to select the **Client**, **Scope**, and **Base CI** for the new configuration item.

3. Click the **Create button** to create then save the CI.

4. Find the new CI in the default CIs workspace. Click the entry to display a right side panel with its details.

5. Use the right side panel to configure the new CI.

6. Click the Save button at the top of the right panel to save properties for the new CI.


## Discover a Configuration Item (CI) {% #DiscoverCI %}

To discover a configuration item:

1. In the right side panel, click the **Discover button** at the top of the panel. This starts the discovery process.

2. At the top left of the default list workspace, click the CIs dropdown list. It's under the logo. Select Discoveries from the list. The Discoveries workspace displays.

3. Click an entry in the Discoveries workspace to display its details in a right side panel. The panel shows properties and the Discovery Log. If needed, you can filter the log by date and log event type. Or use the search box to filter the discovery log.

> To return to the CIs default workspace, click the browser Back button. Or select CIs from the top left dropdown list under the logo.


## Clone a Configuration Item (CI) {% #CloneCI %}

To clone a configuration item:

1. In the right side panel, click the **Clone button** at the top of the panel. The Clone CI popup displays.

2. Edit the Name in the popup. By default the Name is the CI name followed by the word Copy.

3. Click the **Clone button** in the popup to clone then save the configuration item.


## Export a Configuration Item (CI) {% #ExportCI %}

To export a configuration item:

1. In the default CIs workspace, click the checkbox next to one or more CIs.

2. Click the **Export button** at the top right of the workspace. The Export popup displays.

3. Select the File Format used to export the configuration item. The default is the New Format, an Excel file with a single tab between items.

4. Click the **Export button** in the popup to export the CI(s).


## Import a Configuration Item (CI) {% #ImportCI %}

Uploading configuration items (CIs) requires an Excel spreadsheet with multiple sheets.

* One sheet has the name **CIs**. It lists all the CIs to import.
* One sheet has the name **Relations**. It lists all relations to import.

Apart from these two sheets, there is one sheet per Class for all the classes of all CIs listed in CIs sheet. Please download the sample spreadsheet for detailed examples.

> **Note:** Only users having CMDB Update authority for a client can upload CIs to that client. Without these permissions, a file upload will display an Access Denied message.

### The CIs Excel Sheet

The CIs sheet contains one CI per row with the first row being the header with names of these columns.

* **Id**: (Required) A unique UUID to identify the CI. If the Id already exists in IPcmdb, importing will update the existing CI.

* **Name**: (Required) CI name.

* **Tags**: (Optional) Tag names for the CI. If the tag does not exist, importing will create the new tag(s).

* Any other property included in the CI class. For example, **Creation Date** or **Modification Date**. Use one property per column. The first row must have the property name. The remaining rows have the property values for each CI in a row.

### The Relations Excel Sheet

This sheet contains relations between CIs with one relation per row. The required columns have these headings in the first row.

* **Id**: A number to identify the relation. It can be any valid number if the relation is new.

* **Name**: The relation name.

* **From**: UUID which is the Id of the source CI of the relation. Include this Id in the CIs sheet.

* **To**: UUID which is the Id of the destination CI of the relation. Include this Id in the CIs sheet.

* **From CI Name**: The name of the source CI.

* **To CI Name**: The name of the destination CI.


### Class Excel Sheets

There is one sheet per class associated with each CI. Each additional sheet contains one CI per row. The columns are the properties of the CI in this class. The first row has the property names. The remaining rows have the corresponding property values for the CI in the row. The first two columns are always Id and Name which are the Id and Name of the CI.

For example, imagine a class named Linux Server with a CI named Server1. The class has properties IPAddress (string) and Hostname (string). You would name the Excel sheet Linux Server. Then add a row of content like this example:

| Id | Name    | IP Address  | Hostname     |
|----|---------|-------------|--------------|
|11eca929-c066-0ef0    | Server1 | 10.10.10.10 | sv1.site.com |


### Importing an Excel File with CIs

To import an Excel file with one or more configuration items:

1. In the default CIs workspace, click the **Import button** at the top right of the workspace. The Import New CIs popup displays.

2. Select the Client and Scope to use for importing. Then click the Upload File button to find then upload an Excel file with your CIs.

3. Click the **Create button** to create then save the scope.


## Archive a Configuration Item (CI) {% #ArchiveCI %}

To archive a configuration item:

1. In the default CIs workspace, click a checkbox the left of one or more CIs. The Add Tags dropdown list appears at the top right of the workspace.

2. Click the Add Tags dropdown list and select **Archive CI(s)**.

3. Click the **Apply button** to archive the selected CIs. It's located to the right of the dropdown list.


## Add a Configuration Item (CI) Template {% #AddCITemplate %}

Configuration item templates help make it easier to create CIs. You can create one set of classes and fields for IT assets with common details. For example, servers all have username, password, OS, and URLs. The type of server and OS could be a dropdown list with options. Use a CI template instead of creating these fields for every IT server in your environment.

Once you create a template, select your template name in the Base CI dropdown list when creating a CI. Then configure your CI as needed.

{% include from="E04-01_0006-CIs-CreateTemplate.md" element-id="E04-01_0006-CIs-CreateTemplate_snippet" /%}


## More Resources

{% include from="E04-01_0002-CMDBMoreInfo.md" element-id="E04-01_0002-CMDBMoreInfo_snippet" /%}
