# Content Packs Walkthrough

## Introduction

Content packs are a jar-file used to populate an Autonomics instance. Once uploaded, they're installed with Groovy installation scripts. You also can download instance files as a content pack, for example, to create a mirror image of an instance.

Content pack scripts are platform specific. They use the imperative programming paradigm. Content packs are self-contained and designed to install themselves.

## Accessing the Content Packs Workspace

To access the Content Packs workspaces:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Content Packs** links, hover over the **Content Packs** label that displays.

2. Click the **Upload**, **Configurations**, or **Export** links to display their workspaces.

> Already working in the Export workspaces? Click the **Export** link that appears in a dropdown list at the top left, under the logo. This lets you work with the Content Packs module, for example, then switch to work with the Upload or Configurations workspaces.



## What You'll Learn

In this topic, you'll learn about:

* [The Content Packs Workspaces](#Configure).

* [The structure of content packs](#Structure).

* [Configuring a content pack](#Configure).

* [Uploading a content pack](#Upload).

* [Exporting a content pack](#Export).


## The Content Packs Workspaces {% #Workspace %}

You can configure, export, and upload content packs with three different workspaces.

### The Upload Workspace

The upload workspace imports existing content packs. Click the landing spot to upload files. Files should be either a zip file with a .jar file and config.json file. Or an individual .jar file and config.json file. The .jar file is the Content Pack library. The json file is the Properties file.

Once uploaded, your content pack will appear in the Configurations workspace.

![E05-02_0003-Content-Packs-Upload.png](E05-02_0003-Content-Packs-Upload.png){width="800"}

*The Content Packs Upload Workspace*


### The Configurations Workspace

The Configurations workspace lets you build a content pack with existing automations and other artifacts.

**The Default Workspace**

The default workspace lists all available content packs. You can search, export, and delete content packs. And create new content packs.

![E05-02_0003-Content-Packs-Config-Workspace.png](E05-02_0003-Content-Packs-Config-Workspace.png){width="800"}

*The Default Content Packs Workspace*

*The Content Packs Workspace Elements*

| Element                                                                   | Description                                                                                                               |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| + Create New button                                                       | Click to display the right side panel with a blank form. The button becomes a + button when the right side panel is open. |
| Search                                                                    | Click and then type a full or partial phrase to sort listed content packs.                                                |
| ![Btn-Content-Packs-Export.png](Btn-Content-Packs-Export.png){width="35"} | Click to export the content pack.                                                                                         |
| ![Btn-Content-Packs-Delete.png](Btn-Content-Packs-Delete.png){width="35"} | Click to delete the content pack.                                                                                         |

**The Right Side Panel**

The right side panel is a form used to configure content packs.

In addition to a Settings tab, there are tabs to add Automation Folders, Automations, Connections, Matchers, Script Library, Scheduling, Workflow Folders, Workflows, CIs, and Integrations. As needed, click each of these tabs then search and add each artifact type. Clicking the **+ Add button** moves the right panel to the left side. The right panel becomes a list of the artifacts available for the selected type.

![E05-02_0003-Content-Packs-Config-Edit.png](E05-02_0003-Content-Packs-Config-Edit.png){width="800"}

*The Content Packs Workspace with Edit Panel*

*The Content Packs Edit Panel Settings Tab Elements*

| Element                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Save button                                         | Click to save a content pack.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Edit button                                         | Click to edit the content pack displayed in the right panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Export button                                       | Click to export the content pack displayed in the right panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Delete button                                       | Click to delete the content pack displayed in the right panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Name                                                | For new content packs, type a unique descriptive name for the content pack.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Update Client Configuration                         | When set to false, the data from the Client is not copied. Default is No.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Do Not Validate Exported Automations                | When enabled, export fails if automation contain hardcoded values, for example, client ID or task ID. Default is No.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Do Not Export Linked Automations                    | When enabled, linked automations will not be exported. Default is No.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Auto Approve Linked Automations                     | When enabled, exported automations should receive automatic approval upon being imported into a different instance. Default is Yes.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Submit Approval Request for Automations             | This setting also affects the behavior of Auto Approve linked Automations:<br><br>If Yes, and Auto Approve Linked Automations is Yes, approval is automatic. The client workflow is not used. If Auto Approve Linked Automations is No, the process submits approval requests for manual approval.<br><br>If No, and Auto Approve Linked Automations is Yes, approval happens without creating a Task. If Auto Approve Linked Automations is No, the process imports automations. They're not approved or submitted as Tasks.<br><br>Default is No. |
| Import Automation Matcher at the Bottom of the List | If yes, all of the imported Automation matchers will have lower priority than the existing Automation matchers.<br><br>If no, all of the imported Automation matchers will have higher priority than the existing Automation matchers. Default is No.                                                                                                                                                                                                                                                                                               |
| The Maximum Number of CIs to Export                 | The maximum number of CIs to export. Default is 1000.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Export Passwords                                    | When enabled, passwords from the Credential Module will be included in the export. Default is Yes                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Export integrations Hidden Properties               | When enabled, hidden integration properties such as webhook tokens will be included in the export. Default is No.                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### The Exports Workspace

The Exports workspace shows data about exports in progress. Click the ![Gear-Btn-Automations_Browser.png](Gear-Btn-Automations_Browser.png){width="30" style="inline"} to the left of the Export dropdown at the top left. Then use the dropdown lists of content packs, users, and export status to filter results.

![E05-02_0003-Content-Packs-Export.png](E05-02_0003-Content-Packs-Export.png){width="800"}

*The Default Export Workspace*

When you use the Configurations workspace to export a content pack, the Exports workspace displays its name. The workspace includes the ability to download the zip file.

![E05-02_0003-Content-Packs-Export-Download.png](E05-02_0003-Content-Packs-Export-Download.png){width="800"}

*The Export Workspace with Download Options*


## The Content Pack Structure {% #Structure %}

Content packs have a defined file and folder structure. This structure guides the process to install, configure, and update content packs. Files should be either a zip file with a .jar file and config.json file. Or an individual .jar file and config.json file. The .jar file is the Content Pack library. The json file is the Properties file.


## Configure a Content Pack {% #Configure %}

To configure a content pack:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Content Packs** links, hover over the **Content Packs** label that displays.

2. Click the **Configurations** link to display the default workspace.

3. To create a new content pack, click the **+ Create New button** at the top right. To edit an existing content pack, click an entry listed in the default workspace. In either case, the right panel will display a right panel. To edit a content pack, click the **Edit button** at the top of the panel.

4. In the right panel, configure the **Settings tab**. Then use the other tabs to add artifacts to the content pack. Each artifact tab has a **+ Add button** that displays a panel with available artifacts.

5. Click the **Save button** at the top of the right panel to save your content pack. 



## Upload a Content Pack {% #Upload %}

To upload a content pack:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Content Packs** links, hover over the **Content Packs** label that displays.

2. Click the **Upload** link to display the default workspace.

3. Use the landing space in the center of the workspace to locate the content pack on your computer.

4. Click the **Upload button** to upload the content pack. Click the Yes button when the Dry Run popup displays.


## Export a Content Pack {% #Export %}

To export a content pack:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Content Packs** links, hover over the **Content Packs** label that displays.
2. Click the **Configurations** link to display the default workspace.

3. Click the Export (![Btn-Content-Packs-Export.png](Btn-Content-Packs-Export.png){width="30" style="inline"}) button to the right of the content pack to export. The Exports workplace displays.

4. In the Exports workspace, either click the Download (![Btn-Content-Packs-Export-Download.png](Btn-Content-Packs-Export-Download.png){width="30" style="inline"}) button on the left side of the workspace, to the right of your entry. Or click the **Download button** in the right panel.


## More Resources

{% include from="E05-01_0001-AdminMoreResources.md" element-id="E05-01_0001-AdminMoreResources_snippet" /%}
