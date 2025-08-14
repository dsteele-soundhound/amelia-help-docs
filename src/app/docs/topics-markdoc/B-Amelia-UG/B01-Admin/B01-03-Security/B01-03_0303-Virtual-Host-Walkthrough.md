# Virtual Hosts Walkthrough

## Introduction

Amelia's Virtual Host feature matches host name requests to a virtual host name. Then Amelia applies any details. For example, domain and authentication systems. Or an optional user interface assigned to the virtual host name.

For example, you can create a virtual host for a test version of Amelia using a test host name. Then add a production host name to the virtual host after you build and validate the test instance.

You also can assign one or more authentication systems to a virtual host address. Plus any domains assigned to the same virtual host.

Virtual hosts also help manage multi-tenant Amelia instances. They help manage user interactions with domains that allow anonymous access. Without virtual hosts, non-logged in users see every domain that accepts anonymous users. Virtual hosts can segregate these anonymous domains.

Imagine you have two clients with a mix of domains that require login and anonymous access. Setting up virtual hosts for each client helps segregate access. Non-logged in users for one client cannot see domains from the other client. Without virtual hosts, these users would see anonymous access domains for both clients.

> **Note:** Creating a virtual host does NOT create corresponding DNS entries. First create DNS entries through normal channels. Then create virtual hosts with Amelia's administration pages.<br><br>You also must assign at least one Amelia domain and authentication system to a virtual host.

## Access Virtual Hosts

You can view system events using the Virtual Hosts workspace in Amelia's Administration module.

1. From the top left main navigation menu, click **Administration**.

2. On the left side panel, click the **Security** icon link.

3. In the flyout menu that appears, click the **Virtual Hosts** link.

![B01-03_0303-VirtualHost-Workspace-New.png](B01-03_0303-VirtualHost-Workspace-New.png){width="800"}

*The Virtual Hosts Left Panel and New Virtual Host Tab Workspace*


## What You'll Learn

In this topic, you'll learn about:

* [The Virtual Hosts workspaces](#VirtualHostWorkspaces).
* [Adding a virtual host](#AddVirtualHost).
* [Searching for a virtual host](#SearchVirtualHosts).
* [Editing a virtual host](#EditVirtualHost).
* [Deleting a virtual host](#DeleteVirtualHost).


## The Virtual Hosts Workspaces {% #VirtualHostWorkspaces %}

The Virtual Hosts workspace includes a tab workspace to configure virtual hosts. There's also a left side panel that lists virtual hosts with the ability to create and search for hosts.

### The Default Tab Workspace

* **The Basic Tab:** displays settings to configure a virtual host.
* **The Advanced Tab:** displays settings to configure the behavior of a virtual host.

#### The Basic Tab

The Basic tab gives you settings to define your virtual hosts. For example, host names and domains that will use the virtual host.

![B01-03_0303-VirtualHost-Workspace-Basic.png](B01-03_0303-VirtualHost-Workspace-Basic.png){width="800"}

*The Basic Tab Workspace*

<chapter title="Basic Tab Settings" collapsible="true" level="5">


*The Basic Tab Workspace Settings*

| Setting                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Buttons                ||
| Save                   | Click to save the virtual host configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Delete                 | When present, click to delete the virtual host configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Basic Tab              ||
| Name                   | Type a unique descriptive name for the virtual host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Host Name              | Type one or more virtual host names. Press enter to list each name under this field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Description            | Type a short description of the purpose, location, and/or other relevant details for this virtual host configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Chat Overlay Policy    | Select an option if your virtual host will use a Custom UI overlay to interact with Amelia.<br><br>**Allow Chat Overlay:** this virtual host will emit headers permitting iframe embedding of the Amelia chat overlay.<br>**Forbid Chat Overlay:** this virtual host will not emit headers permitting iframe embedding.<br>**Use Global Default:** this virtual host will use the globally set configuration for this instance.                                                                                                                                                                                                               |
| UI Bundle              | A UI Bundles selected here will become the default user interface for any request to the host names identified by this virtual host. To display in this list, the UI Bundles must have a default deployed revision.<br><br>To configure UI Bundles, click the **UI Bundles link** on the left edge of the Administration workspaces.                                                                                                                                                                                                                          |
| Default Locale         | For internationalization, select the default language locale to use for the virtual host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Available Themes       | Select one or more themes to make available for users interacting with this virtual host. If no themes are selected, themes attached to the Default Virtual Host are used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Default Theme          | Select the theme that will be used in the absence of user preference. The default theme must be listed with the Available Themes setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Domains                | Once a new virtual host configuration is saved, you can select Amelia domains used for conversations on this virtual host. Domains are assigned to a virtual host in the Domains workspace.<br><br>To assign a virtual host to a domain, click the **Domains link** on the left edge of the Administration workspaces. Then select (or create) a domain and display its tab workspace. In the **Configuration** tab of the workspace, select the **Virtual Host** setting.<br><br>Once a virtual host is assigned to a domain, select the domain here and press Enter to display it below this field. |
| Authentication Systems | Once a new virtual host configuration is saved, you can select authentication systems to use for this virtual hosts. Authentication systems are defined with the Administration workspaces.<br><br>Once an authentication system is configured to work with your virtual host, it will display here.                                                                                                                                                                                                                                                                                                                                          |

</chapter>


#### The Advanced Tab

The Advanced tab lets you configure the behavior of your virtual host. For example, the default landing page and whether to enable NLU routes and ontologies for Amelia.

![B01-03_0303-VirtualHost-Workspace-Advanced.png](B01-03_0303-VirtualHost-Workspace-Advanced.png){width="800"}

*The Advanced Tab Workspace*

<chapter title="Advanced Tab Settings" collapsible="true" level="5">


*The Advanced Tab Workspace Settings*

| Setting             | Description                                                                                                                                                                               |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Buttons             ||
| Save                | Click to save the virtual host configuration.                                                                                                                                             |
| Delete              | When present, click to delete the virtual host configuration.                                                                                                                             |
| Advanced Tab        ||
| Select Your Item    | Click to display a dropdown list of settings to apply to this virtual host.                                                                                                               |
| Browse button       | Click to display a popup with all possible settings to apply to this virtual host. Select one or more settings. Then click the Add button in the popup to save and display your settings. |
| Custom Value column | For each setting, type the appropriate value if different from the default setting. Click the X to the right a setting to remove it.                                                      |

</chapter>

<chapter title="Virtual Host Advanced Settings" collapsible="true" level="5">


*The Virtual Host Advanced Settings*

| Setting                                   | Default | Description                                                                                                                                                              |
|-------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Agent Closed Conversation Last Agent Only | false   | Display closed conversations to every agent who participated (false). Or show closed conversations only for the last agent to participate (true).                        |
| Agent Closed Conversation Max Hours       | 24      | The maximum number of hours of conversations to show in the Agent Closed panel. Value must be less that the maximum retained conversations.                              |
| Agent Enable Pending                      | true    | Whether to allow agents to put conversations in a pending state and whether to show pending tasks in agent view.                                                         |
| Agent Show Ready                          | true    | Whether to show ready tasks in Agent view.                                                                                                                               |
| Allowed web socket origin                 | (empty) | Allowed web socket origin which is set to empty by default. Should be set as a comma separated list.                                                                     |
| Availability Ready on Login               | true    | Set agent availability to READY (true) or AWAY (false).                                                                                                                  |
| Conversation Search Queue Supervisor Only | false   | If true, conversation search will be available only to queue supervisors. And members of exclusive supervisor groups will see only their exclusive group managed queues. |
| Default Landing Page                      | (empty) | When no other parameter such as a query string or SSO configuration is present, the URL to redirect users after login.                                                   |
| Enable bot network                        | false   | Set a flag to indicate if the bot network is enabled.                                                                                                                    |
| Enable deployment wizard                  | false   | Set a flag to indicate if the deployment wizard is enabled.                                                                                                              |
| Enable NLU routes                         | false   | Set a flag to indicate if the NLU route is enabled.                                                                                                                      |
| Enable ontologies                         | false   | Set a flag to indicate if the ontology is enabled.                                                                                                                       |
| Enable Orchestrator                       | false   | Set a flag to indicate if the Orchestrator is enabled.                                                                                                                   |
| Maximum Concurrent Sessions               | -1      | The number of concurrent logged in sessions a user may have. -1 is disabled. Users with AUTHORITY_UNLIMITED_CONCURRENT_USER_SESSIONS are excluded.                       |
| Terms of Service Enabled                  | false   | Set whether to force users to accept a TOS before logging in. If set to true, add a message to the Terms of Service Message setting.                                     |
| Terms of Service Message                  | (empty) | If the Terms of Service Enabled setting is set to true, type the TOS message to be displayed on login page. Empty otherwise.                                             |
| UI Footer Details                         | (empty) | If appropriate, type a message to display in footer. It displays on the right side of the footer.                                                                        |
| UI Footer Enabled                         | false   | Set whether to display a footer on all UI pages for the virtual host.                                                                                                    |
| UI Footer Icon                            | none    | Define the icon style to use in the footer. Options are none, info, alert, and warning.                                                                                  |
| UI Footer Message                         | (empty) | If appropriate, type a message to display in the footer. It displays in the middle of the footer.                                                                        |
| UI Footer Show Previous Login             | false   | Set whether to display the user's previous login time in the footer.                                                                                                     |
| Use new version of Amelia and Agent UIs   | true    | Set whether to use the new Amelia and Agent view interfaces (true) or not (false).                                                                                       |

</chapter>



### The Left Side Panel



![B01-03_0303-VirtualHost-Panel-Left.png](B01-03_0303-VirtualHost-Panel-Left.png){width="400"}

*The Left Side Panel*

<chapter title="Left Side Panel Settings" collapsible="true" level="5">

*The Left Side Panel Settings*

| Setting          | Description                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| + Add New button | Click to display a new virtual host tab workspace.                                            |
| Search here box  | Click then type a partial or complete virtual host name and filter the list of virtual hosts. |

</chapter>



## Add Virtual Hosts {% #AddVirtualHost %}

> **Note:** Creating a virtual host does NOT create corresponding DNS entries. First create DNS entries through normal channels. Then create virtual hosts with Amelia's administration pages.<br><br>You also must assign at least one Amelia domain and authentication system to a virtual host.

To add a virtual host:

1. Open the Virtual Hosts panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Security** icon link on the left edge. Then click the **Virtual Hosts** link that appears in a flyout menu.

2. In the Virtual Hosts panel, click the **+Add New** button that displays at the top of this panel. A new Virtual Hosts tab workspace will display.

3. Customize the Virtual Hosts tab workspace to create the virtual host.

4. Click the **Save button** to save the virtual host.

For new virtual hosts, the next step is to configure one or more domains to use the new host. And configure authentication systems for the new host. Then return to your virtual host tab workspace to add domains and authentication systems.

5. To assign a virtual host to a domain, click the **Domains link** on the left edge of the Administration workspaces. Then select (or create) a domain and display its tab workspace. In the **Configuration** tab of the workspace, select the **Virtual Host** setting.

   Once a virtual host is assigned to one or more domains, select the **Domain setting** in the **Basic tab** of the Virtual Hosts tab workspace. Select a domain and press Enter to display it below this field.

6. To assign a virtual host to one or more authentication systems, use the **Administration workspace** to configure an authentication system to work with your virtual host.

   Once an authentication system is configured to work with your virtual host, it will display in the **Authentication System setting** in the Virtual Hosts tab workspace.

## Search for Virtual Hosts {% #SearchVirtualHosts %}

To search for a virtual host listed in the Virtual Hosts panel:

1. Open the Virtual Hosts panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Security** icon link on the left edge. Then click the **Virtual Hosts** link that appears in a flyout menu.

2. In the Virtual Hosts panel, click the Search Here field at the top of the panel. Type a partial or complete phrase. Search results appear dynamically in the panel.



## Edit Virtual Hosts {% #EditVirtualHost %}

To edit a virtual host:

1. Open the Virtual Hosts panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Security** icon link on the left edge. Then click the **Virtual Hosts** link that appears in a flyout menu.

2. In the Virtual Hosts panel, click a virtual host listed in the panel. Or use the search box at the top to find then select a host. The Virtual Hosts edit tab workspace will display.

3. Customize the Virtual Hosts tab workspace to update the virtual host.

   If you need to edit the Domain or Authentication System settings for a virtual host, follow Steps 5 and 6 in the **Add Virtual Hosts section** above.

4. Click the **Save button** to save the virtual host.



## Delete Virtual Hosts {% #DeleteVirtualHost %}

To delete a virtual host:

1. Open the Virtual Hosts panel between the left panel navigation and the Administration Home tab workspace.

   If the panel isn't displayed, click the **Security** icon link on the left edge. Then click the **Virtual Hosts** link that appears in a flyout menu.

2. In the Virtual Hosts panel, click a virtual host listed in the panel. Or use the search box at the top to find then select a host. The Virtual Hosts edit tab workspace will display.

3. Click the **Delete button** to delete the virtual host. It's located at the top of the tab workspace.



## More Resources

{% include from="B01-03_0001-SecurityMoreResources.md" element-id="B01-03_0001-SecurityMoreResources_snippet" /%}