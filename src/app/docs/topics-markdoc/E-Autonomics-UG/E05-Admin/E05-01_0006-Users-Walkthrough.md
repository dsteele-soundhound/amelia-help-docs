# Users Walkthrough

## Introduction

User accounts let individuals access Autonomics instances. Create them after you create clients, groups, password policies, and other artifacts. You'll need these artifacts to configure a user account.

It's also possible to organize user accounts with tags. See the [Tags Walkthrough](E05-01_0014-Tags-Walkthrough.md) topic for details.

## Access the Users Workspace

To access the Users workspace:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Users** link, hover over the **Settings** label that displays.

2. Click the **Users** link to display the module workspace that lists all user accounts.

> Already working in the Settings workspaces? Click the **Users** link that appears in a drop down list at the top left, under the logo. This lets you work with the Login Groups module, for example, then switch to working with the Users module.

![E05-01_0006-Admin-Users-Panel.png](E05-01_0006-Admin-Users-Panel.png){width="800"}


*Users Module Workspace*

## What You'll Learn

In this topic, you'll learn about:

* [The Users module workspace](#UsersWorkspace).
* [Add a user account](#AddUser).
* [Edit a user account](#EditUser).
* [Delete a user account](#DeleteUser).
* [Change a user account password](#ChangePwd).
* [Unlock a user account](#UnlockUser).

##Using the Users Module Workspace {% #UsersWorkspace %}

This module lets you create user accounts. First create clients, groups, password policies, and other artifacts. You'll need them to configure a user account. If you want to use tags with user accounts, refer to the [Tags Walkthrough](E05-01_0014-Tags-Walkthrough.md) topic for details.

### Top Panel Buttons

The top panel lets you create, edit and perform other basic tasks for a user account. Buttons are visible based on context. For example, the Update button only appears if you click the Edit button.

*Users Top Panel Buttons*

| Button          | Description                                                            |
|-----------------|------------------------------------------------------------------------|
| Create          | Click to create a user account.                                        |
| Edit            | Click to edit a user account.                                          |
| Update          | Click to update a user account and save your edits.                    |
| Change Password | Click to change the user account password.                             |
| Delete          | Click to delete the user account.                                      |
| Unlock Account  | Click to unlock a user account. |


### Configuration Tab

This tab lets you configure the basic details for a user account.

*Users Configuration Tab Settings*

| Setting         | Description                                                                                                      |
|-----------------|------------------------------------------------------------------------------------------------------------------|
| ID              | Generated automatically unique ID for a user.                                                                    |
| First Name      | The first name of the user.                                                                                      |
| Last Name       | The last name of the user.                                                                                       |
| Email           | The email address of the user.                                                                                   |
| Password Policy | The password policy used to handle the user's login.                                                             |
| Client          | The client assigned to the user.                                                                                 |
| Tags            | If appropriate, tags assigned to the user. Type a full or partial tag name the press the Enter key to add a tag. |
| Allow Login     | Whether the user is allowed to login. Options are Yes and No.                                                    |
| User Disabled   | Whether the user account is disabled. Options are Yes and No.                                                    |
| External ID     | If appropriate, an external ID for the user.                                                                     |
| About           | If appropriate, any notes about the user.                                                                        |


### Permissions Tab

This tab lets you assign login groups to user accounts. Each group includes authorities and permissions needed to access Autonomics features. You can assign groups to a user account but not authorities.

*Users Permissions Tab Settings*

| Setting | Description                                                                       |
|---------|-----------------------------------------------------------------------------------|
| + Add   | Click to add a Login Group for the user.                                          |
| Clients | Select a client name to filter the list of Login Groups or Effective Authorities. |
| Search  | Click to search list of Login Groups or Effective Authorities.                                             |


##Add a User Account {% #AddUser %}

To add a user account:

1. Click the New User button at the top of the Users module workspace.
2. Then complete the Create New User form that displays.
3. Save the new user account.

##Edit a User Account {% #EditUser %}

To edit a user account:

1. Click a user account name the Users module workspace. The user account panel will display on the right side.
2. Click the Edit button in the top of the user account panel.
3. Make any changes to the user account panel.
4. Click the Update button to save the user account.

##Delete a User Account {% #DeleteUser %}

To delete a user account:

1. Click a user account name the Users module workspace. The user account panel will display on the right side.
2. Click the Delete button in the top of the user account panel.

##Change a User Account Password {% #ChangePwd %}

To change the password for a user account:

1. Click a user account name the Users module workspace. The user account panel will display on the right side.
2. Click the Change Password button in the top of the user account panel.

##Unlock a User Account {% #UnlockUser %}

To unlock a user account:

1. Click a user account name the Users module workspace. The user account panel will display on the right side.
2. Click the Unlock Account button in the top of the user account panel.


## More Resources

{% include from="E05-01_0001-Admin-SettingsMoreInfo.md" element-id="E05-01_0001-Admin-SettingsMoreInfo_snippet" /%}
