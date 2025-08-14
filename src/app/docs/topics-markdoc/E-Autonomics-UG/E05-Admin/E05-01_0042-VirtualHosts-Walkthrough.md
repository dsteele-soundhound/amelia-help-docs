# Virtual Hosts Walkthrough

## Introduction

With the 3.12.0 release, Autonomics lets you create virtual hosts. Virtual hosts let you host multiple domain names on a single server. The Autonomics virtual host feature stores your virtual host configuration details. This lets you include your Autonomics instance in your virtual hosting setup.


## Access the Virtual Hosts Workspace

To access the Virtual Hosts workspace:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Virtual Hosts** link, hover over the **Settings** label that displays.

2. Click the **Virtual Hosts** link to display the module workspace that lists available virtual hosts.

> Already working in the Settings workspaces? Click the **Virtual Hosts** link that appears in a drop down list at the top left, under the logo. This lets you work with the Users module, for example, then switch to working with the Virtual Hosts module.

![E05-01_0042-VirtualHost-Workspace.png](E05-01_0042-VirtualHost-Workspace.png){width="800"}

*The Virtual Hosts Module Workspace*



## What You'll Learn

In this topic, you'll learn about:

* [Using the Virtual Hosts module workspace](#VirtualHostsWorkspace).
* [Adding Virtual Hosts](#AddVirtualHosts).
* [Searching for Virtual Hosts](#SearchVirtualHosts).
* [Editing Virtual Hosts](#EditVirtualHosts).
* [Deleting Virtual Hosts](#DeleteVirtualHosts).


##Using the Virtual Hosts Module Workspace {% #VirtualHostsWorkspace %}

The Virtual Hosts workspace lets you create and configure virtual hosts. The workspace has two views:

* The main workspace lists virtual hosts with the ability to search, sort, and create virtual hosts.

* When a virtual host is selected or created, a right side panel displays.


### The Main Workspace

![E05-01_0042-VirtualHost-Workspace.png](E05-01_0042-VirtualHost-Workspace.png){width="800"}

*The Main Virtual Hosts Workspace*

*Virtual Hosts Module Workspace Settings*

| Setting                   | Description                                                                                                                                                     |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| + New Virtual Host button | Click to display the New Virtual Hosts right side panel. When the right side panel displays, the button changes to a **+ button**. |
| Search box                | Click then type a partial or complete virtual host name to filter the list of hosts.                                                                            |


### The Right Side Panel

When you click the **+ New Virtual Host button** in the main workspace, or click an entry listed in that workspace, the right side panel displays. Use the panel to add or edit a virtual host.

![E05-01_0042-VirtualHost-EditPanel.png](E05-01_0042-VirtualHost-EditPanel.png){width="800"}

*The Right Side Edit Panel*

*Right Side Panel Settings*

| Setting                                                                   | Description                                                                                                                                   |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Top Buttons                                                               ||
| Save button                                                               | Click to save your changes.                                                                                                                   |
| Edit button                                                               | Click to display a form with details about the selected virtual host.                                                                         |
| Update button                                                             | Click to update then save changes to the selected virtual host.                                                                               |
| Delete button                                                             | Click to Delete a virtual host.                                                                                                               |
| Form Settings                                                             ||
| Name                                                                      | Type a unique descriptive name for your virtual host.                                                                                         |
| Host Names                                                                | Type one or more hosts names to use. Press the Enter key after typing each host name to save them below this field.                           |
| Description                                                               | Type a unique description for this virtual host.                                                                                              |
| Available Themes                                                          | Type one or more theme names to use. Press the Enter key after typing each theme name to save them below this field.                          |
| Default Theme                                                             | Click the dropdown list to select a default theme.                                                                                            |
| Authentication Systems                                                    | Click the dropdown list to select one or more authentication systems to use with this virtual host. Each selection displays below this field. |



## Add a Virtual Host {% #AddVirtualHosts %}

To add a virtual host:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Virtual Hosts** link, hover over the **Settings** label that displays.

2. Click the **Virtual Hosts** link to display the module workspace that lists available virtual hosts.

3. Click the **+ New Virtual Host button** in the top right of the main workspace. A New Virtual Host tab workspace will display on the right side of your screen.

4. Configure the New Virtual Host workspace. For example, the theme names and authentication systems to use.

5. Click the **Save button** to save the new virtual host.



## Search for a Virtual Host {% #SearchVirtualHosts %}

To search for a virtual host, click the **Search box** at the top right of the Virtual Hosts workspace.



## Edit a Virtual Host {% #EditVirtualHosts %}

To edit a virtual host:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Virtual Hosts** link, hover over the **Settings** label that displays.

2. Click the **Virtual Hosts** link to display the module workspace that lists available virtual hosts.

3. Click a virtual host listed in the main workspace. Or use the Search box at the top of the panel to filter the list of virtual hosts. When selected, the edit virtual host workspace will display on the right side of your screen.

4. Click the **Edit button** and then edit the virtual host details.

5. Click the **Update button** at the top of the right side workspace to save your changes.



## Delete a Virtual Host {% #DeleteVirtualHosts %}

To delete a virtual host:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Virtual Hosts** link, hover over the **Settings** label that displays.

2. Click the **Virtual Hosts** link to display the module workspace that lists available virtual host.

3. Click a virtual host listed in the main workspace. Or use the Search box at the top of the panel to filter the list of virtual hosts. When selected, the edit virtual host workspace will display on the right side of your screen.

4. Click the **Delete button** at the top of the right side workspace.



## More Resources

{% include from="E05-01_0001-Admin-SettingsMoreInfo.md" element-id="E05-01_0001-Admin-SettingsMoreInfo_snippet" /%}
