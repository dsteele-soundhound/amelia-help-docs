# Users Walkthrough

## Introduction

Once domains, roles, authorities, and groups are set up, you can create user accounts. User accounts provide access to a mix of groups, roles, authorities, and domains. Once you set up a user account, the next step is to assign the user to groups and authorities as appropriate.

## Accessing the Users Workspace

To access the Users workspace:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. From the flyout menu, select the **Users link**.

![B01-02_0104-Users-New-Workspace.png](B01-02_0104-Users-New-Workspace.png){width="800"}

*The Users Workspace with New User Tab Workspace*


## What You'll Learn

In this topic, you'll learn about:

* [The Users workspace](#Workspace).
* [Adding users](#AddUserGroups).
* [Editing users](#EditUserGroups).
* [Deleting users](#DeleteUserGroups).



## The Users Workspace {% #Workspace %}

The Users workspace lets you create and configure user accounts. You can assign user accounts to user groups, authorities, and attributes.

### The Users Left-Side Panel

This panel appears between the left edge navigation links and the Administration Home tab workspace. The panel displays a list of users.

To toggle open the Users panel, click the Administration link at the top left. Then click the Users button that appears on the left edge. Click the Users link in the flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="20" style="inline"} icon at the top right of the Users panel.

![B01-02_0104-Users-Panel.png](B01-02_0104-Users-Panel.png){width="400" style="block"}

*The Users Left-Side Panel*

*Users Panel Elements*

| Element  | Description                                                                           |
|----------|---------------------------------------------------------------------------------------|
| +Add New | Click to add a new user account. A New User tab workspace displays on the right side. |


### The Default Tab Workspace

The default tab workspace lets you create user accounts and edit existing accounts. When you create a new account, the workspace displays only the Basic settings. Clicking the Create button at the top of the workspace then saves the account. Configuration tabs then appear along with a Change Password and Delete buttons. The Cleanup Transcripts button removes all transcripts for conversations with the user. This helps with GDPR regulation compliance.

![B01-02_0104-Users-Edit-Workspace.png](B01-02_0104-Users-Edit-Workspace.png){width="800"}

*The Users Workspace with Edit Tab Workspace*

<chapter title="Basic Tab Settings" collapsible="true" level="5">

*Basic Tab Settings*

| Setting              | Description                                                                                                                                                                                                                                                                                |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Domain               | Select a domain for this user account.                                                                                                                                                                                                                                                     |
| First Name           | Type the user's first name.                                                                                                                                                                                                                                                                |
| Last Name            | Type the user's last name.                                                                                                                                                                                                                                                                 |
| Email Address        | Type the user's email address.                                                                                                                                                                                                                                                             |
| External UID         | Optional. Type the user's external UID. This is helpful when integrating some authentication systems.                                                                                                                                                                                      |
| Authentication Policy | Select the authentication policy for the user to login.                                                                                                                                                                                                                                    |
| Locale               | Select the locale to use for language during a conversation.                                                                                                                                                                                                                               |
| Timezone             | Select the global timezone for the user.                                                                                                                                                                                                                                                   |
| Agent Spoken Language | Select one or more languages from the dropdown list of languages.                                                                                                                                                                                                                          |
| Availability         | Select the default availability status. Options are Away, Busy, Online, Ready.                                                                                                                                                                                                             |
| Max Concurrent Chats | Type in a number. Users who are part of an escalation team must have this value set greater than the default of 0.<br>Max number of concurrent chats is the number of chats an agent will be pushed through dispatch but does not limit the number of chats an agent can pick up manually. |
| Enable User          | Select or deselect to enable the user's access.                                                                                                                                                                                                                                            |
| Exclude From Metrics | Select or deselect to exclude this user's activity from metrics.                                                                                                                                                                                                                           |


</chapter>


<chapter title="Groups Tab Settings" collapsible="true" level="5">

Assign the user to one or more groups. Select a group to add from the dropdown list. Or click the Browse button to display the Add New User Groups popup. The popup lets you select multiple groups at one time.

Use the search box to confirm a group is in the Existing tab. Or to filter the Add New User Groups popup list.

When you add or delete a group from an account, the group name appears in the Added or Deleted tab, respectively. Click the Save button to move an added group to the Existing tab and to delete any groups in the Delete tab. All changes are applied ONLY after they're saved.

To delete a group from a user account, click the Delete (![Delete1-Btn-DEB_Inside_Properties.png](Delete1-Btn-DEB_Inside_Properties.png){width="30" style="inline"}) icon to the right of any group name.

</chapter>


<chapter title="Effective Authorities Tab Settings" collapsible="true" level="5">

Authorities display based upon the groups assigned to a user account. Use the Search box to filter the list of authorities.

</chapter>


<chapter title="Attributes Tab Settings" collapsible="true" level="5">

You can add user attributes and retrieve them using Script tasks in a Builder flow or a BPN process. This helps customize interactions in a conversation and, in some cases, reduce lookups.

Click the + Add button to display a Name and Value input field.

To delete an attribute from a user account, click the Delete (![Delete1-Btn-DEB_Inside_Properties.png](Delete1-Btn-DEB_Inside_Properties.png){width="30" style="inline"}) icon to the right of any attribute name and value.

</chapter>




## Add Users {% #AddUserGroups %}

To add a user:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. Click the **+ Add New button** in the left-side panel. A New User tab workspace will display on the right side of your screen.

4. Configure the Basic tab in the New User workspace. Then click the **Create button** to save the new account. Additional tabs will display.

5. Configure the additional tabs, as needed. Then click the **Save button** in the tab workspace to save the new account.

## Edit Users {% #EditUserGroups %}

To edit a user:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. Click a user account listed in the left-side panel. Or use the Search box at the top of the panel to filter the list of accounts. When selected, the user account tab workspace will display on the right side of your screen.

4. Edit the user account. Then click the **Save button** in the tab workspace to save your changes.


## Delete Users {% #DeleteUserGroups %}

To delete a user:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. Click a user account listed in the left-side panel. Or use the Search box at the top of the panel to filter the list of accounts. When selected, the user account tab workspace will display on the right side of your screen.

4. Click the **Delete button** in the tab workspace.


## More Resources

{% include from="B01-02_0102-UsersMoreResources.md" element-id="B01-02_0102-UsersMoreResources_snippet" /%}