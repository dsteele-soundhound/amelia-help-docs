# Passwords Walkthrough

## Introduction

The Passwords workspace displays folders and elements used to create and manage passwords. These elements give you access to a variety of IT tools and services. They let you connect to resources as part of setting up and monitoring your environment.


## Accessing the Passwords Workspace

To access the Passwords workspace:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

![E02-05_0005-Passwords-Workspace.png](E02-05_0005-Passwords-Workspace.png){width="800"}

*The Passwords Workspace with Flyout Folder Options*


## What You'll Learn

In this topic, you'll learn about:

* [The Passwords workspace](#Workspace).
* [Creating a Passwords folder](#CreateFolder).
* [Renaming a Passwords folder](#RenameFolder).
* [Deleting a Passwords folder](#DeleteFolder).
* [Managing Passwords folder permissions](#PermissionFolder).
* [Creating a Passwords element](#CreateElement).
* [Editing a Passwords element](#EditElement).
* [Deleting a Passwords element](#DeleteElement).


## The Passwords Workspace {% #Workspace %}

The Passwords workspace gives you access to a variety of IT tools and services.

There are several workspaces and panels:

* The default workspace lists folders. Each folder has tools to manage their elements and access.

* In the default workspace, you can use an inline form to create new folders.

* The folder properties panel lets you give access to user groups with their users.

* The element panel adds access and other data used to manage IT resources.

### Default Workspace

The default workspace lists active folders. At the top right, you can create a new folder and search for a folder in the list.

If you hover over a folder name, on the far right you'll see a Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. Hover over the icon to display options.

*Passwords Default Workspace Options*

| Option            | Description                                                                                                                                                                                                                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create New        | Click to display an inline form to add a folder.                                                                                                                                                                                                                                                  |
| Search            | Click to display a search panel. Type a partial or full folder or element name. To display a dropdown list of element types to search, click the Filter (&nbsp;![Btn-Passwords-FilterSearch.png](Btn-Passwords-FilterSearch.png){width="20" style="inline"}&nbsp;) icon at the top of this panel. |
| Gear Icon Options ||
| Rename            | Click to display the folder name in the inline form. Make any changes then click the checkmark button to save.                                                                                                                                                                                    |
| Delete            | Click to delete a folder.                                                                                                                                                                                                                                                                         |
| Properties        | Click to display the Properties panel on the right side of the workspace. To add groups for access to the folder, click the + Add New Group button at the bottom of this panel.                                                                                                                   |
| Search Here       | Click to display the Search panel pre-populated for the folder.  To display a dropdown list of element types to search, click the Filter (&nbsp;![Btn-Passwords-FilterSearch.png](Btn-Passwords-FilterSearch.png){width="20" style="inline"}&nbsp;) icon at the top of this panel.                |
| Create Folder     | Click to display the inline form. Type the new folder name and then click the checkmark button to save.                                                                                                                                                                                           |
| Create Element    | Click to display the Create Element panel on the right side of the workspace. Fill out the form then click the Save button at the bottom of this panel.                                                                                                                                           |


### Create Folder Inline Form

You can create a folder with the inline form that displays when you select the Create Folder option. This option displays when you click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays when you hover over a folder name in the default workspace.

![E02-05_0005-Passwords-CreateFolder.png](E02-05_0005-Passwords-CreateFolder.png){width="600"}

*The Create Folder Inline Form*

### Folder Properties Panels

The folder Properties panels let you add groups and their users.

* The Folder Properties Panel displays the folder name with a button to add groups.

* When you click the + Add New Group button at the bottom of the Properties panel, the Add New Group panel displays. The Properties panel slides to the left while this panel displays on the right side of the workspace.

![E02-05_0005-Passwords-FolderProperties.png](E02-05_0005-Passwords-FolderProperties.png){width="800"}

*The Folder Properties Panel*

![E02-05_0005-Passwords-AddGroup.png](E02-05_0005-Passwords-AddGroup.png){width="800"}

*The Folder Properties and Add New Group Panels*



### Create Element Panel

Once you create folders and assign groups for access, creating elements is the next step. This option displays when you click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays when you hover over a folder name in the default workspace.

The Create Element panel includes default settings. The bottom of the form displays settings unique to the Type of IT resource you select.

![E02-05_0005-Passwords-CreateElement.png](E02-05_0005-Passwords-CreateElement.png){width="800"}

*The Create Element Right-Side Panel*

*Create Element Right-Side Panel Settings*

| Setting         | Description                                                                                                                                                                                                                                                                 |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Type            | Select the type of IT resource. The resource you select will display additional unique settings at the bottom of this form. These settings are unique to the resource. For example, an AWS resource displays settings for AWS Access Key ID, Secret Access Key, and Region. |
| Name            | Type a unique descriptive name for the element.                                                                                                                                                                                                                             |
| Description     | Type a short description of this element.                                                                                                                                                                                                                                   |
| Note            | Type any useful notes about this element.                                                                                                                                                                                                                                   |
| Expiration Date | If appropriate, select a date for this element to no longer be available.                                                                                                                                                                                                   |


## Create a Passwords Folder {% #CreateFolder %}

To create a folder:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Hover over a folder name then click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays on the far right side of the folder name.

4. Click the **Create Folder** option that displays below the Gear icon. The inline form displays under the folder name. Type a folder name.

5. Click the checkmark in the inline form to save the new folder.


## Rename a Passwords Folder {% #RenameFolder %}

To rename a folder:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Hover over a folder name then click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays on the far right side of the folder name.

4. Click the **Rename** option that displays below the Gear icon. The inline form displays under the folder name. Type a new folder name.

5. Click the checkmark in the inline form to rename the folder.


## Delete a Passwords Folder {% #DeleteFolder %}

To delete a folder:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Hover over a folder name then click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays on the far right side of the folder name.

4. Click the **Delete** option that displays below the Gear icon.


## Manage Passwords Folder Permissions {% #PermissionFolder %}

To permission a folder:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Hover over a folder name then click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays on the far right side of the folder name.

4. Click the **Properties** option that displays below the Gear icon. The Folder Properties panel displays on the right side of the workspace.

5. Click the + Add New Group button at the bottom of the Folder Properties panel. The Properties panel moves to the left side. The Add New Group panel displays on the right side.

6. In the Add New Group panel, click the + icon to add a user group to the folder. The group appears in the left-side Properties panel.

7. In the Properties panel, click the Access dropdown for each group. Then select whether their access is Read, Read+Write, Read+Write+Delete, or Full.

    Click the Delete icon to the right of any group to delete the group from the list.

8. In the Properties panel, click the Save button to save the folder permissions.


## Create a Passwords Element {% #CreateElement %}

To create an element:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Hover over a folder name then click the Gear (&nbsp;![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"}&nbsp;) icon. This icon displays on the far right side of the folder name.

4. Click the **Create Element** option that displays below the Gear icon. The Create Element panel displays on the right side of the workspace.

5. Select the type of IT resource from the **Type dropdown list**.

    The resource type you select will display additional unique settings at the bottom of this form. These settings are unique to the resource. For example, an AWS resource displays settings for AWS Access Key ID, Secret Access Key, and Region.

6. Complete the rest of the form. Then click the **Save button** at the bottom of this panel.


## Edit a Passwords Element {% #EditElement %}

To edit an element:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Click any element listed in the default Passwords workspace. The right-side panel displays with details about the element.

4. Click the **Edit button** at the bottom of the right-side panel. Make any changes needed.

5. Click the **Save button** at the bottom of this panel.


## Delete a Passwords Element {% #DeleteElement %}

To delete an element:

{% include from="E02-05_0005-PasswordsAccess.md" element-id="E02-05_0005-PasswordsAccess_snippet" /%}

3. Click any element listed in the default Passwords workspace. The right-side panel displays with details about the element.

4. Click the **Edit button** at the bottom of the right-side panel.

5. Click the **Delete button** at the bottom of this panel.


## More Resources

{% include from="E02-05_0005-PasswordsMoreResources.md" element-id="E02-05_0005-PasswordsMoreResources_snippet" /%}