# Content Management Configuration

## Introduction

To use the Content Management workspace, you must understand its features. You'll see the left-side menu and Home tab page on entry into the Content Management workspace. This topic gives insight into when and how to use these elements.

![B03-04_0501-ContentMgmt-Workspace](B03-04_0501-ContentMgmt-Workspace.png){width="900" style="block"}

*The Content Management Workspace*

##Access the Content Management Feature {% #Access %}

{% include from="B03-04_0501-ContentMgmtAccess.md" element-id="B03-04_0501-ContentMgmtAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Content Management Workspace](#The).
* [Naming Content Buckets](#Naming).
* [Adding new content](#Add).
* [Editing content](#Edit).
* [Copying Conversation URL](#Copy).
* [Copying Admin URL](#Copy2).
* [Downloading a file](#Download).
* [Deleting a file](#Delete).

## The Content Management Workspace {% #The %}

The workspace has three components:

* The **Content Management panel** lists content buckets used to store files.
* The **Content bucket tab workspace** lists all files stored in the bucket.
* The **File Editor panel** allows editing of files stored in a bucket.


*The Content Management Workspace Elements*

| Element                                                                          | Description                                                                                                                                                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Content Management Panel**                                                     |                                                                                                                                                                                                                                                                                                                                                                        |
| + Add New                                                                        | Click to display a New Bucket tab workspace to the right of this panel.                                                                                                                                                                                                                                                                                                |
| Search                                                                           | Click and type a partial or full bucket name to find then select a content bucket.                                                                                                                                                                                                                                                                                     |
| **Content Bucket Tab Workspace**                                                 |                                                                                                                                                                                                                                                                                                                                                                        |
| Save                                                                             | Once the name is entered, click to Save the new bucket.                                                                                                                                                                                                                                                                                                                |
| Name                                                                             | Type the name of the new bucket.                                                                                                                                                                                                                                                                                                                                       |
| Delete                                                                           | Click to delete a new or existing bucket.                                                                                                                                                                                                                                                                                                                              |
| Create                                                                           | Click to add a file to a saved bucket. The New File editor panel will display on the right side of the workspace. Type a file name, add content to the file, and then click the Save button in the editor panel.                                                                                                                                                       |
| Upload                                                                           | Click to upload a file to a saved bucket.                                                                                                                                                                                                                                                                                                                              |
| ![DownloadFile-Btn-DEB](DownloadFile-Btn-DEB.png){width="25" style="inline"}     | Click to download a selected file.                                                                                                                                                                                                                                                                                                                                     |
| ![CopyAdminURL-Btn-DEB](CopyAdminURL-Btn-DEB.png){width="25" style="inline"}     | Click to copy a URL to download the selected file. Access will depend on the user being authenticated in a conversation. This URL can be used in Request blocks/tasks and Present blocks/tasks used in BPN processes and Digital Employees builder flows, as well as in the Custom UI.             |
| ![Copy-Btn-DEB_Toolbar](Copy-Btn-DEB_Toolbar.png){width="25" style="inline"}     | Click to copy a URL to download the selected file. Access is open to any user in a conversation and does not require authentication. This URL can be used in Request blocks/tasks and Present blocks/tasks used in BPN processes and Digital Employees builder flows, as well as in the Custom UI. |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"} | Click to delete a selected file.                                                                                                                                                                                                                                                                                                                                       |
| **File Editor Panel**                                                            |                                                                                                                                                                                                                                                                                                                                                                        |
| Save                                                                             | Once a file name is present, click to Save a file.                                                                                                                                                                                                                                                                                                                     |
| Delete                                                                           | Click to delete a file.                                                                                                                                                                                                                                                                                                                                                |
| Name                                                                             | Type a name for the file.                                                                                                                                                                                                                                                                                                                                              |
| Content                                                                          | For text files, type content in this text area.                                                                                                                                                                                                                                                                                                                        |
| Upload File                                                                      | For non-text files, click to upload a file.                                                                                                                                                                                                                                                                                                                            |


##Naming Content Buckets {% #Naming %}

Content buckets hold one or more files used by the Present, Request, or Script blocks. Bucket names must follow these naming conventions:

* Bucket names can be between 3 and 63 characters long. They can contain only lower-case characters, numbers, periods, and dashes.
* Each bucket name must start with a lowercase letter or a number.
* Names cannot contain underscores, end with a dash, or have consecutive periods. Also do not or use dashes adjacent to periods.
* Do not use an IP address (e.g. 1.1.1.1) as a name.
* HTML file names must include the extension in the name, for example, htmlDoc.html for an HTML file name.

> It's possible for resource and bucket names to use the same names, in the admin and conversation. If this happens, the resource and bucket names from the conversation has precedence. {style="warning"}

##Add New Content {% #Add %}

To add content, the first step is to create a bucket.

1. Click the + Add New button in the Content Management panel between the left navigation buttons and the Home tab workspace.
2. Type a name for the new bucket.
3. Click the Save button at the top of the new bucket tab workspace.

Once a bucket is created, the next step is to add one or more files.

* To create an HTML or text file, click the Create button in the content bucket workspace. The New File editor panel appears on the right side.
* To upload a file, click the Upload button and follow the file explorer prompts.

##Edit Content {% #Edit %}

1. To edit an existing HTML or text file, click the name of the file in the content bucket. The file editor panel appears on the right side.
2. Make any changes in the editor. Upload a new file, for example. Or edit the contents of a file.
3. Click the Save button in the file editor.

## Copy Conversation URL {% #Copy %}

1. To copy the conversation URL for a file, click the file name in the content bucket. Buttons will appear to the right of the file entry.
2. Click the Copy Conversation URL ( ![Copy-Btn-DEB_Toolbar](Copy-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

##Copy Administration URL {% #Copy2 %}

1. To copy the conversation URL for a file, click the file name in the content bucket. Buttons will appear to the right of the file entry.
2. Click the Copy Admin URL ( ![CopyAdminURL-Btn-DEB](CopyAdminURL-Btn-DEB.png){width="25" style="inline"}) button.

##Download a File {% #Download %}

1. To copy the conversation URL for a file, click the file name in the content bucket. Buttons will appear to the right of the file entry.
2. Click the Download ( ![DownloadFile-Btn-DEB](DownloadFile-Btn-DEB.png){width="25" style="inline"}) button.

##Delete Content {% #Delete %}

1. To delete a file, click the file name in the content bucket. Buttons will appear to the right of the file entry.
2. Click the Delete ( ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

## More Resources

For more information, see:

* [Content Management Configuration](#introduction).
* [Present Block](B03-04_0115-Present-Block.md).
* [Request Block](B03-04_0116-Request-Block.md).
* [Script Block](B03-04_0120-Script-Block.md).
* [Content Management Service](B03-04_0423-Content-Management-Service.md).
* [Service Handles](B03-04_0421-Service-Handles-Library.md).
* [Scripts Introduction](B03-04_0401-Scripts-Intro.md).
* [Script Sandboxing and Whitelists](B03-04_0404-Script-Sandboxing-and-Whitelist.md).
