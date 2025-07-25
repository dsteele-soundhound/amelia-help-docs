# Login Groups Walkthrough

## Introduction

Login groups help organize access authorities, groups, and login groups. Before you create login groups, first create clients and other artifacts.

## Access the Login Groups Workspace

To access the Login Groups workspace:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Login Groups** link, hover over the **Settings** label that displays.

2. Click the **Login Groups** link to display the module workspace that lists available tags.

> Already working in the Settings workspaces? Click the **Login Groups** link that appears in a drop down list at the top left, under the logo. This lets you work with the Users module, for example, then switch to working with the Login Groups module.

![E05-01_0007-Admin-LoginGroups-Panel.png](E05-01_0007-Admin-LoginGroups-Panel.png){width="800"}

*Login Groups Module Workspace*

## What You'll Learn

In this topic, you'll learn about:

* [The Login Groups module workspace](#LoginGroupsWorkspace).
* [Add a login group](#AddGroup).
* [Edit a login group](#EditGroup).
* [Delete a login group](#DeleteGroup).


##Using the Login Groups Module Workspace {% #LoginGroupsWorkspace %}

### Top Panel Buttons

The top panel lets you create, edit and perform other basic tasks for a login group. Buttons are visible based on context. For example, the Update button only appears if you click the Edit button.

*Login Groups Top Panel Buttons*

| Button          | Description                                         |
|-----------------|-----------------------------------------------------|
| Create          | Click to create a login group.                      |
| Edit            | Click to edit a login group.                       |
| Update          | Click to update a login group and save your edits. |
| Delete          | Click to delete the login group.                   |

### Login Groups Configuration Tab

This tab lets you configure the basic details for a login group.

*Login Groups Configuration Tab Settings*

| Setting          | Description                                                                                                                                                                                                                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID               | Generated automatically unique ID for a login group.                                                                                                                                                                                                                                          |
| Name             | Type a unique descriptive name for a login group.                                                                                                                                                                                                                                             |
| Code             | Type a unique code for a login group. Letters, numbers, and underscores are allowed. Spaces are not allowed.                                                                                                                                                                                  |
| Email            | When an event or notification is triggered, the system sends information to the email.<br/>**If specified**, individual member mail addresses within the Login Group are discarded.<br/>**If not specified**, the system sends the email to each member's mail address within the Login Group |
| Login Group Type | The type of login group.                                                                                                                                                                                                                                                                      |
| Client           | Select one or more clients to use the login group.                                                                                                                                                                                                                                            |
| Global           | Select whether the login group scope is global. Options are Yes and No.                                                                                                                                                                                                                       |
| Amelia Group     | Select whether the login group scope is an Amelia Group. Options are Yes and No.                                                                                                                                                                                                              |
| Assignment Group | Select whether the login group scope is an Assignment Group. Options are Yes and No.                                                                                                                                                                                                          |

### Login Groups Members Tab

This tab lets you assign login groups to a login group. Each login group includes their assigned login groups.

*Login Groups Members Tab Settings*

| Setting | Description                                                                       |
|---------|-----------------------------------------------------------------------------------|
| + Add   | Click to add a Login Group for the user.                                          |
| Clients | Select a client name to filter the list of Login Groups or Effective Authorities. |
| Search  | Click to search list of Login Groups or Effective Authorities.                                             |


### Login Groups Authorities Tab

This tab lets you configure access permission authorities for a login group.



##Add a Login Group {% #AddGroup %}

To add a login group:

1. Click the New User button at the top of the Login Groups module workspace.
2. Then complete the Create New User form that displays.
3. Save the new login group.

##Edit a Login Group {% #EditGroup %}

To edit a login group:

1. Click a login group name the Login Groups module workspace. The login group panel will display on the right side.
2. Click the Edit button in the top of the login group panel.
3. Make any changes to the login group panel.
4. Click the Update button to save the login group.

##Delete a Login Group {% #DeleteGroup %}

To delete a login group:

1. Click a login group name the Login Groups module workspace. The login group panel will display on the right side.
2. Click the Delete button in the top of the login group panel.



## More Resources

{% include from="E05-01_0001-Admin-SettingsMoreInfo.md" element-id="E05-01_0001-Admin-SettingsMoreInfo_snippet" /%}
