# Administration Workspace Walkthrough

## Introduction

To use the Administration workspace, you must understand its features and where they live. You'll see the left-side menu and Home page on entry into the Administration workspace. This topic gives insight into when and how to use these elements.

Because domains organize knowledge in Amelia, your first step is creating domains. Then use the Administration workspaces to configure authentication, virtual hosts, and other details.

Our [Administration Workspace Introduction](B01-00_0001-Administration-Workspace-Intro.md) topic provides added background information.

## Accessing the Administration Workspace

{% include from="B01-00_0001-AdminAccess.md" element-id="B01-00_0001-AdminAccess_snippet" /%}

![B04-00_0001-Admin-Workspace](B04-00_0001-Admin-Workspace.png){width="900" style="block"}

*Administration Workspace Showing Main Menu, Left-side Menu, and Home Page*

## What You'll Learn

In this topic, you'll learn about:

* [The main menu](#Main).
* [The Home page](#Home).
* [The left-side menu and related options](#Left-Side).

##The Main Menu {% #Main %}

On entry into Amelia, you'll find the main menu in the header area at the top left of the application. The main menu is your key entry point into any of the workspaces offered by Amelia.

To go to the Administration workspace, From the **top left main** menu, click Administration.

##The Home Page {% #Home %}

The Home page shows as a page tab in the Administration workspace. Home serves as the starting point for your Administration journey. You'll navigate the Home page by moving through the individual cards presented to you.

![B04-00_0001-Admin-Workspace](B04-00_0001-Admin-Workspace.png){width="900" style="block"}

*Administration Workspace Showing the Home Page*

### Add New Configuration

The Home page showcases a few ways to help you get started with administrative tasks. Click the Plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button to get started.

* **Escalation Queues**: Let's you quickly create escalation queues.
* **Escalation Teams**: Let's you create escalation teams.
* **Virtual Hosts**: Let's you start creating one or more virtual hosts.
* **UI Bundles**: Let's you create UI bundles, including Custom UIs.

### Continue Where Left Off

These panels list your most recent artifacts and provide quick access. Click an artifact name to go directly to its edit workspace.

##The Left-Side Menu and Related Options {% #Left-Side %}

Inside the Administration workspace, you'll also see the left-side menu. Options on this menu are dynamic. They change based on the workspace you've selected.

Inside the Administration workspace, you'll see buttons for Domains, Users, Security, UI, Orchestrator, and Content Packs. These are described in more detail below.

### Domains

Creating domains is one of the first administrative tasks you need to complete. Domains organize users, groups, roles, escalation teams, and other systems. The global domain should be the parent to one or more child domains. This allows future changes without affecting the global domain settings.

Clicking the Domains button opens the Domains panel. It opens between the left-side menu and the Administration Home tab. Using this panel, you can add, edit, and delete domains. Once you create a domain, then you can add users, escalation groups, and other elements.

> Click the **Collapse** ( ![Close-Panel-Btn-DEB_Left](Close-Panel-Btn-DEB_Left.png){width="25" style="inline"}) button to close and hide the panel.

![B01-00_0002-Admin-Domains](B01-00_0002-Admin-Domains.png){width="900" style="block"}

*Administration Workspace With Domains Button and Panel Highlighted*

### Users

Once created, users have access to a mix of groups, roles, authorities, and domains.

Clicking the Users button On the **left-side** menu displays a flyout menu with more options.

* **Users**: Click to add, edit, and delete user accounts.
* **Roles**: Click to add, edit, and delete roles assigned to user accounts.
* **User Groups**: Click to add, edit, and delete groups used to organize users.
* **Global User Groups**: Click to add, edit, and delete global groups used to organize users. These groups work in all domains within an Amelia instance.

### Security

The Security workspaces let you set up authentication systems to access  Amelia. This includes a set of default systems, for example, LDAP, OAuth, and SAML. The Security workspaces include managing virtual hosts and accessing logs for auditing.

Clicking the Security button On the **left-side** menu displays a flyout menu with more options.

* **Authentication Systems**: Click to create and manage authentication systems, for example, SSO and LDAP.
* **Authentication Policies**: Click to create and manage password policies used with authentication systems.
* **Virtual Hosts**: Click to create and manage virtual hosts. You can assign a custom domain name for your Amelia instance.
* **1RPA**: Click to create and manage robotic process automations (RPA) using 1RPA.
* **1Store**: Click to create and manage 1Store marketplaces.
* **License**: Click to configure your Amelia license.
* **Audit**: Click to access logs for auditing purposes.

### UI

The UI workspaces let you change the default Amelia chat interface. This includes changing out the avatar and the voice used.

Clicking the UI button On the **left-side** menu displays a flyout menu with more options.

* **Avatars**: Click to manage the Amelia avatar. Or replace the avatar used by Amelia software.
* **Avatar Voices**: Click to manage the voice used by the Amelia software.
* **UI Bundles**: Click to manage the user interface design, including the Custom UI interface.
* **Themes**: Click to create and manage themes used to display Amelia's interfaces.

### Orchestrator

Amelia's Orchestrator coordinates and manages data flows between Amelia and other services. These include AI Ops and RPA bots. Plus the web services and CLI capabilities of corporate back-end systems.

Clicking the Orchestrator button On the **left-side** menu displays a flyout menu with more options.

* **Endpoints**: Click to add, edit, and delete endpoints used by Orchestrator.
* **Routes**: Click to add, edit, and delete routes Orchestrator uses.
* **Requests**: Click to manage a log of Orchestrator requests.

### Content Packs

Click this button to add, edit, or delete content packs. Content packs are a jar-file containing Amelia-related assets. For example, configuration files, data models, and other artifacts.

## More Resources

{% include from="B01-00_0001-AdminMoreResources.md" element-id="B01-00_0001-AdminMoreResources_snippet" /%}