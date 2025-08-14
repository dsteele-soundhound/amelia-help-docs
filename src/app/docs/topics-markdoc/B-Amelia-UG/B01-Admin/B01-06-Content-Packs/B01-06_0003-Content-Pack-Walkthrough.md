# Content Packs Walkthrough

## Introduction

Content packs are a jar-file used to populate an Amelia instance. Once uploaded, they're installed with Groovy installation scripts. You also can download instance files as a content pack, for example, to create a mirror image of an instance.

Content pack scripts are platform specific. They use the imperative programming paradigm. Content packs are self-contained and designed to install themselves.

The Content Pack service and Certificate service let you work with content packs. The [Content Pack Service topic](B03-04_0444-Content-Pack-Service.md) describes how to use both services.

## Accessing the Content Pack Workspace

To access the Content Packs workspace:

1. Click the **Administration link**. You can find it in the top left main navigation menu.

2. On the left side panel, click the **Content Packs button** link.

    > **Note:** A Content Packs panel will appear between the left panel navigation and the Administration Home tab workspace.

![B01-06_0003-Content-Pack-Popup.png](B01-06_0003-Content-Pack-Popup.png)

*The Content Pack Workspace with Upload Content Pack Popup*


## What You'll Learn

In this topic, you'll learn about:

* [The Content Pack workspace](#Workspace).

* [The content pack structure and API service](#ContentPackStructure).

* [Adding a content pack](#AddContentPack).

* [Updating a content pack](#UpdateContentPack).

* [Deleting a content pack](#DeleteContentPack).


## The Content Pack Workspace {% #Workspace %}

The Export Recordings workspace includes a left side Export Recordings panel. The panel includes a **+ Add New button**.


## The Content Pack Structure and API Services {% #ContentPackStructure %}

Content packs have a defined file and folder structure. Script tasks and blocks use Context Service methods to process content packs. For example, methods can install, configure, process, and update content packs.

The Content Pack service and Certificate service let you work with content packs. The [Content Pack Service topic](B03-04_0444-Content-Pack-Service.md) describes how to use both services.

### File and Folder Structure

A content pack contains these files and folders in a jar file:

* **manifest.json**: A json file containing meta-data and references to the rest of the files in the content pack. Do not change the file name manifest.json.

* **assets**: Importable versions of the actual pieces of content. Usually JSON files or binary blobs in case of static resources. They're stored in an /assets folder.

* **scripts**: One or more groovy scripts. They run at specified phases in the installation process. They're stored in a /scripts folder.

### Content Packs and the Content Pack Service

The Content Pack service methods install, update, and uninstall content packs. They execute the scripts defined in the content pack manifest.json file. There's two possible execution scenarios:

**Default Script Execution Order**

.Content Pack service methods execute the script section of the manifest.json file. The execution order is pre-defined. The Content Pack methods run as follows:

* The install method executes scripts in this order: preInstall, config, processResources, postUpdate.

* The update method executes scripts in this order: preUpdate, configUpdate, update, postUpdate.

* The uninstall method executes script in this order: preUninstall, configUninstall, uninstall, postUninstall.

**Programmatically Select Script Execution**

You can execute scripts in a non-default order. Your manifest.json file must have installer, updater, or uninstaller sections. The Content Pack service runs install, update, and uninstall methods from those sections. This gives you flexibility about which scripts to run.

Refer to the [Content Pack Service topic](B03-04_0444-Content-Pack-Service.md) for details about its methods.


## Add a Content Pack {% #AddContentPack %}

To add a content pack:

1. Click the **Administration link**. You can find it in the top left main navigation menu.

2. On the left side panel, click the **Content Packs button** link. The Content Packs panel displays, between the left panel navigation and the Administration Home tab workspace.

3. Click the **+ Add New button** in the left side panel. The Upoad Content Pack popup displays.

4. In the popup, upload files as needed. Click the Content Pack Library, Properties, and Assets Select File buttons to upload one or more files.

5. Click the **Upload button** to start downloading audio recordings.


## Delete a Content Pack {% #DeleteContentPack %}

To delete a content pack:

1. Click the **Administration link**. You can find it in the top left main navigation menu.

2. On the left side panel, click the **Content Packs button** link. The Content Packs panel displays, between the left panel navigation and the Administration Home tab workspace.

3. In the Content Packs panel, click the Delete (&nbsp;![Delete1-Btn-DEB_Inside_Properties.png](Delete1-Btn-DEB_Inside_Properties.png){width="35" style="inline"}&nbsp;) button to the right of the content pack you want to delete.


## More Resources

* [Administration Workspace Introduction](B01-00_0001-Administration-Workspace-Intro.md).
