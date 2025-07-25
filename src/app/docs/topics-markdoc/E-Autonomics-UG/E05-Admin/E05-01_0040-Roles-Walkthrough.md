# Roles Walkthrough

## Introduction

With the 3.12.0 release, Autonomics lets you assign roles to login groups. Roles collect authorities needed by groups to perform tasks. The authorities enable users to see specific activities and perform actions.


## Access the Roles Workspace

To access the Roles workspace:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Roles** link, hover over the **Settings** label that displays.

2. Click the **Roles** link to display the module workspace that lists available tags.

> Already working in the Settings workspaces? Click the **Roles** link that appears in a drop down list at the top left, under the logo. This lets you work with the Users module, for example, then switch to working with the Roles module.

![E05-01_0040-Roles-Workspace.png](E05-01_0040-Roles-Workspace.png){width="800"}

*The Roles Module Workspace*


## What You'll Learn

In this topic, you'll learn about:

* [Using the Roles workspace](#RolesWorkspace).
* [Adding roles](#AddRoles).
* [Editing roles](#EditRoles).
* [Deleting roles](#DeleteRoles).


## Using the Roles Module Workspace {% #RolesWorkspace %}

The Roles workspace lets you create and configure roles. You can assign roles to login groups. The workspace has two views:

* The main workspace lists roles with the ability to search, sort, and create roles.

* When a role is selected or created, a right side panel displays.


### The Main Workspace


![E05-01_0040-Roles-Workspace.png](E05-01_0040-Roles-Workspace.png){width="800"}

*The Main Roles Workspace*

*Roles Module Workspace Settings*

| Setting                                                             | Description                                                                                                                                              |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| + New Role button                                                   | Click to display the New Roles right side panel. When the right side panel displays, the button changes to a **+ button**. |
| Search box                                                          | Click then type a partial or complete role name to filter the list of roles.                                                                             |


### The Right Side Panel

When you click the **+ New Role button** in the main workspace, or click an entry listed in that workspace, the right side panel displays. Use the panel to add or edit a role.


![E05-01_0040-Roles-EditPanel.png](E05-01_0040-Roles-EditPanel.png){width="800"}

*The Right Side Edit Panel*

*Right Side Panel Settings*

| Setting                                                                   | Description                                                                                                                                                                                              |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Top Buttons                                                               ||
| Save button                                                               | Click to save your changes.                                                                                                                                                                              |
| Edit button                                                               | Click to display a form with details about the selected role.                                                                                                                                            |
| Update button                                                             | Click to update then save changes to the selected role.                                                                                                                                                  |
| Delete button                                                             | Click to Delete a role.                                                                                                                                                                                  |
| Form Settings                                                             |                                                                                                                                                                                                          |
| Name                                                                      | Type a unique descriptive name for your role.                                                                                                                                                            |
| Code                                                                      | Type a phrase to use as a code for your role. Use underscores instead of spaces.                                                                                                                         |
| Client                                                                    | Select the client to use the role.                                                                                                                                                                       |
| Authorities                                                               ||
| Browse button                                                             | Click the Browse button to display a dropdown list of authorities. See the [Roles Authorities topic](E05-01_0040-Roles-Authorities.md) for descriptions of each authority. |
| Search                                                                    | Click then type a partial or full authority name.                                                                                                                                                        |
| Existing Tab                                                              | This tab lists existing authorities assigned to the role.                                                                                                                                                |
| Added Tab                                                                 | This tab lists authorities recently assigned to the role. Save your changes to move these items to the Existing tab.                                                                                     |
| Deleted Tab                                                               | This tab lists authorities recently deleted from the role. Save your changes to remove these items from this tab.                                                                                        |
| ![Btn-Content-Packs-Delete.png](Btn-Content-Packs-Delete.png){width="30"} | Click to delete specific authorities currently assigned to the role.                                                                                                                                     |



## Add Roles {% #AddRoles %}

To add a role:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Roles** link, hover over the **Settings** label that displays.

2. Click the **Roles** link to display the module workspace that lists available roles.

3. Click the **+ New Role button** in the top right of the main workspace. A New Role tab workspace will display on the right side of your screen.

4. Configure the New Role workspace with a Name, Code, and Client. Then add authorities to the role.

5. Click the **Save button** to save the new role.

> When you add or delete an authority, the authority name appears in the Added or Deleted tab, respectively. Click the Save button to move an added authority to the Existing tab and/or to delete any authority listed in the Delete tab. All changes are applied ONLY after they're saved.


## Edit Roles {% #EditRoles %}

To edit a role:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Roles** link, hover over the **Settings** label that displays.

2. Click the **Roles** link to display the module workspace that lists available roles.

3. Click a role listed in the main workspace. Or use the Search box at the top of the panel to filter the list of roles. When selected, the edit role workspace will display on the right side of your screen.

4. Click the **Edit button** and then edit the role. For example, add or delete authorities.

5. Click the **Update button** at the top of the right side workspace to save your changes.

> When you add or delete an authority, the authority name appears in the Added or Deleted tab, respectively. Click the Save button to move an added authority to the Existing tab and/or to delete any authority listed in the Delete tab. All changes are applied ONLY after they're saved.


## Delete Roles {% #DeleteRoles %}

To delete a role:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Roles** link, hover over the **Settings** label that displays.

2. Click the **Roles** link to display the module workspace that lists available roles.

3. Click a role listed in the main workspace. Or use the Search box at the top of the panel to filter the list of roles. When selected, the role workspace will display on the right side of your screen.

4. Click the **Edit button** and then edit the role. For example, add or delete authorities.

5. Click the **Delete button** at the top of the right side workspace.

> When you add or delete an authority, the authority name appears in the Added or Deleted tab, respectively. Click the Save button to move an added authority to the Existing tab and/or to delete any authority listed in the Delete tab. All changes are applied ONLY after they're saved.


## More Resources

{% include from="E05-01_0001-Admin-SettingsMoreInfo.md" element-id="E05-01_0001-Admin-SettingsMoreInfo_snippet" /%}
