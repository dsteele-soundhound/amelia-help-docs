# Administration Workspace Introduction

## Introduction

To use the Administration modules, you must understand their features and where they live. There are three key modules: Settings, Content Packs, and Audit. Each of these modules include one or more workspaces. This topic gives insight into when and how to use these modules and workspaces.

## Access the Administration Modules

To access the Administration workspaces:

1. Click the main navigation menu at the top-left and hover over the **Administration** label.

2. Hover over the **Settings** label, **Content Packs** label, or **Audit** label that displays.

2. For Settings and Content Packs modules, click the flyout links to display a workspace. The Audit module has only one workspace.

![E05-00_0001-Admin-Settings-Flyout.png](E05-00_0001-Admin-Settings-Flyout.png){width="800"}

*The Administration Settings Menu Options*

![E05-00_0001-Admin-ContentPacks-Flyout.png](E05-00_0001-Admin-ContentPacks-Flyout.png){width="800"}

*The Administration Content Packs Menu Options*


## What You'll Learn

In this topic, you'll learn about:

* [The Workspaces top-left dropdown menus](#TopLeft).
* [The Settings workspaces](#Settings).
* [The Content Packs workspaces](#ContentPacks).
* [The Audit workspace](#Audit).

## Workspaces Top-Left Dropdown Menus {% #TopLeft %}

Once you're in a Settings or Content Packs workspace, there's an easy way to navigate in those modules. Under the logo at the top-left of these workspaces is a dropdown menu. Click this menu to navigate between workspaces. With only one workspace, the Audit workspace doesn't have this functionality.

![E05-00_0001-Admin-Settings-Dropdown.png](E05-00_0001-Admin-Settings-Dropdown.png){width="450"}

*The Settings top-left Dropdown Options*

![E05-00_0001-Admin-ContentPacks-Dropdown.png](E05-00_0001-Admin-ContentPacks-Dropdown.png){width="400"}

*The Content Packs top-left Dropdown Options*



## The Settings Workspaces {% #Settings %}



### The Clients Workspace

The Clients module enables Administrators to create, update, and manage clients. This provides a structured way to organize and separate IT workloads. This feature lets you logically separate IT environments in a single platform. For example, different clients can support different business units. Or lines of business (LOBs), geographies, and Managed Service Provider (MSP) customers.

Please see the [Clients Walkthrough topic](E05-01_0005-Clients-Walkthrough.md) for more details.

![E05-01_0005-Clients-Panel.png](E05-01_0005-Clients-Panel.png){width="800"}

*The Settings Clients Workspace*

### The Users Workspace

User accounts let individuals access Autonomics instances. Create them after you create clients, groups, password policies, and other artifacts. You'll need these artifacts to configure a user account.

Please see the [Users Walkthrough topic](E05-01_0006-Users-Walkthrough.md) for more details.

![E05-01_0006-Admin-Users-Panel.png](E05-01_0006-Admin-Users-Panel.png){width="800"}

*The Settings Users Workspace*

### The Login Groups Workspace

Login groups help organize access authorities, groups, and login groups. Before you create login groups, first create clients and other artifacts.

Please see the [Login Groups Walkthrough topic](E05-01_0007-Login-Groups-Walkthrough.md) for more details.

![E05-01_0007-Admin-LoginGroups-Panel.png](E05-01_0007-Admin-LoginGroups-Panel.png){width="800"}

*The Settings Login Groups Workspace*

### The Tags Workspace

Tags help organize related but different artifacts in Autonomics. For example, you could tag a database CI with a tag MSSQL123. Then use the same tag for tasks that use the database. Tags also are powerful. A task with a matcher for a tag given to an automata will execute the automata.

You'll find tags in many places in Autonomics. For example, Users, Clients, Tasks, Workflows, CIs, Automata, Connections, Knowledgebases, and Scheduling all use tags.

Before you use tags, it's best practice to develop a strategy to use them based on your situation. Then apply tags to artifacts as needed.

Please see the [Tags Walkthrough topic](E05-01_0014-Tags-Walkthrough.md) for more details.

![E05-01_0014-Admin-Tags-Workspace.png](E05-01_0014-Admin-Tags-Workspace.png){width="800"}

*The Settings Tags Workspace*

### The Integrations Workspaces

The Integrations module is your hub for connecting and managing external systems within the platform. It enables seamless integration with third-party tools and applications, allowing you to automate and streamline your IT operations. By setting up these integrations, you can ensure that your workflows are connected to the systems that power your business processes.

You'll typically use the Integrations module for:

* **Connecting external tools**: Integrate with monitoring systems, collaboration platforms, and other enterprise applications to enable end-to-end automation.

* **Powering Knowledge**: Leverage integrations to execute automated workflows that interact with external systems, enhancing incident management, task execution, and overall operational efficiency.

* **Customizing processes**: Create and manage integrations tailored to your specific IT environment, ensuring that your automations are always in sync with your external tools.

* **Self-service capabilities**: Empower teams to create and manage their own integrations, reducing dependency on support and speeding up deployment times.

Please see the [Integrations Introduction topic](E05-01_0010-Integrations-Mod-Intro.md) for more details.

![E05-01_0012-Integrations-Workspace.png](E05-01_0012-Integrations-Workspace.png){width="800"}

*The Settings %05-AIOps-Admin.Integrations.module% Workspace*

### The Authentication Systems Workspace

Setting up your Autonomics instance includes defining and configuring authentication systems. It requires Global Administrator privileges.

### The Password Policies Workspace

Setting up your Autonomics instance includes defining and configuring password policies. It requires Global Administrator privileges.


## The Content Packs Workspaces {% #ContentPacks %}

The [Content Packs Walkthrough topic](E05-02_0003-Content-Packs-Mod-Walk.md) provides details about these workspaces.

### The Upload Workspace

Content packs are a jar-file used to populate an Autonomics instance. Once uploaded, they're installed with Groovy installation scripts. You also can download instance files as a content pack, for example, to create a mirror image of an instance.

![E05-02_0003-Content-Packs-Upload.png](E05-02_0003-Content-Packs-Upload.png){width="800"}

*The Content Packs Upload Workspace*


### The Configurations Workspace

The Configurations workspace lets you build a content pack with existing automations and other artifacts.

![E05-02_0003-Content-Packs-Config-Edit.png](E05-02_0003-Content-Packs-Config-Edit.png){width="800"}

*The Content Packs Configurations Workspace*


### The Exports Workspace

The Exports workspace shows data about exports in progress. You can download content packs from this workspace.

![E05-02_0003-Content-Packs-Export-Download.png](E05-02_0003-Content-Packs-Export-Download.png){width="800"}

*The Content Packs Exports Workspace*

## The Audit Workspace {% #Audit %}

The Audit workspace lets you monitor and filter system events. Filters include date ranges, types of actions, and activity types.

Please see the [Audit Walkthrough topic](E05-03_0001-Audit-Mod-Walk.md) for more details.

![E05-03_0001-Settings-Audit.png](E05-03_0001-Settings-Audit.png){width="800"}

*The Settings Audit Workspace*


## More Resources

{% include from="E05-01_0001-AdminMoreResources.md" element-id="E05-01_0001-AdminMoreResources_snippet" /%}
