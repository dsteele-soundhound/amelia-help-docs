# Credentials Introduction

## Introduction

The Credentials module lets you manage access details needed to connect and manage assets. You can store sensitive data securely with an access audit trail.

It lets you connect IT services and resources using groups and user accounts. The Passwords feature stores passwords and other access details. Then lets you assign user groups to these password elements. Each user group contains selected user accounts. This gives you granular access control through passwords, groups, and user accounts.

The [Passwords](E02-05_0005-Passwords-Mod-Walk.md), [Users](E02-05_0006-Users-Mod-Walk.md), [User Groups](E02-05_0007-Groups-Mod-Walk.md), and [Audit Events](E02-05_0008-Audit-Events-Mod-Walk.md) topics describe their features.

## What You'll Learn

In this topic, you'll learn about:

* [Secure features in Credentials workspaces](#SecureFeatures).
* [How elements work in Credentials workspaces](#Elements).
* [How user groups and user accounts work in Credentials workspaces](#UserGroups).
* [The typical workflow using Credentials workspaces](#Workflow).
* [Accessing the Credentials workspaces](#Access)


## Secure Credentials Features {% #SecureFeatures %}

The Credentials workspaces give you secure features:

* A hybrid encryption chain. This ensures secured elements are not accessible. Someone would have to break one or more currently established encryption standards.

* Encryption happens in application memory. This avoids transmitting or storing data in unencrypted form.

* Users can view encrypted attributes of a data element only if they have access rights.

* Users cannot elevate their privileges or add themselves to groups they do not belong to.

You can secure and organize data with users, groups, folders, and elements. This includes the ability to audit event logs to monitor access.

## Elements in Credentials Workspaces {% #Elements %}

Elements in Credentials workspaces are entities that contain sensitive information. Elements store passwords and all the data needed to access and manage resources. For example, Device Name, Alias, and IP Address for network gear. You store these elements in folders and subfolders.

The Passwords workspace also gives you an element hierarchy. This lets you categorize and store sensitive data.

For example, folders may contain elements and sub folders. The sub folders may contain folders and elements. The hierarchy includes separate user and group permissions. This allows you to control access based on the element location in the hierarchy.

## User Groups in Credentials Workspaces {% #UserGroups %}

User groups contain users accounts. You can assign groups with their users to elements in folders and subfolders.

## Typical Credentials Workflow {% #Workflow %}

The typical Credentials workflow is to map out users and groups. And map out IT services and resources based on your monitoring and other needs. With that data, you create these assets:

* Create user accounts and assign them to user groups. Use the Users and User Groups workspaces for these tasks.

* Create folders and subfolders. Use the Passwords workspace for these tasks.

* Create the password elements and assign groups to each element. Use the Passwords workspace for these tasks.

Over time, you can use the Audit workspace to monitor use of these assets.


## Accessing the Credentials Workspaces {% #Access %}

To access the Credentials workspaces:

1. Click the main navigation menu at the top left and hover over the **Autonomics** label. Hover over the **Credentials** label that displays. A flyout menu with links appears.

2. Click any link in the flyout menu to display the workspace.

![E02-05_0005-Passwords-Workspace.png](E02-05_0005-Passwords-Workspace.png){width="800"}

*The Passwords Workspace*

## More Resources

{% include from="E02-05_0005-PasswordsMoreResources.md" element-id="E02-05_0005-PasswordsMoreResources_snippet" /%}