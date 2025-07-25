

# Navigating the Autonomics Platform

## Introduction

Autonomics uses an innovative combination of cognitive and autonomic capabilities to deliver streamlined digital enterprise services. It integrates digital and human labor, making it easy to deliver efficient operational and business services. By combining automated infrastructure with smart technology, Autonomics provides seamless support to business users across various departments, including IT, HR, Finance, and Administration.

In earlier versions of AIOps, you accessed modules and functions using the ![AIOps-Hamburger-Btn](Autonomics-Hamburger-Btn.png){width="25" style="inline"} menu at the top-right of the page. The menu opened in two stages. The first stage showed the most used modules. The second stage showed modules organized by categories. These categories included Tasks, Configuration, Knowledge, Monitoring, and Execution.

Amelia's redesign of the Autonomics V3.0 menu improves categorization and module naming, Autonomics is now more intuitive and user-friendly. From V3.0 onwards, you'll access Autonomics directly from inside  Amelia. All your tools are in one place, and switching back and forth between Amelia and Autonomics is seamless.

Much like Amelia's own main menu, the new Autonomics menu shows modules categorized by function. These categories include Operation, Autonomics, Reporting, Configuration, and Administration.

The domain name is to the immediate right of the Autonomics main menu. Be sure to select the correct domain as you work.

![D02-00_0004.Autonomics.Task-Landing0](D02-00_0004-Autonomics-Task-Landing0.png){width="800"}

*The Autonomics Tasks Landing Page with Main Menu Open*

## What You'll Learn

In this topic you'll learn about:

* [Mapping new module names to old](#Map).

* [Accessing navigation menus](#Accessin).

* [Features in the Operation module](#_bm).

* [Features in the Autonomics module](#_bm2).

* [Features in the Reports module](#_bm3).

* [Features in the Configuration module](#_bm4).

* [Features in the Administration module](#_bm5).

## Mapping New Module Names to Old {% #Map %}

This section aims to help you navigate Autonomics and bridge the gap between Autonomics of the past and V3.0 onwards.

From V3.0 onwards, you'll access Autonomics directly from inside Amelia. All your tools are in one place, and switching back and forth between Amelia and Autonomics is seamless. Much like Amelia's own main menu, the new Autonomics menu shows modules categorized by function. These categories include Operation, Autonomics, Reporting, Configuration, and Administration.

The following table shows the new module names mapped to the old module names.

| New Grouping and Module Names (V3.0 Onwards)                                                                |   Old Module Names    |
|-------------------------------------------------------------------------------------------------------------|-----------------------|
| ![D02-00_0004-Operation](D02-00_0004-Operation.png){width="25" style="inline"} **Operation**                ||
| Tasks                                                                                                       | IPradar               |
| Problems                                                                                                    | IPpm                  |
| Workflows                                                                                                   | IPworkflow            |
| Knowledge Base                                                                                              | IPkm                  |
| Contacts                                                                                                    | IPcontacts            |
| ![D02-00_0004-Autonomics](D02-00_0004-Autonomics.png){width="25" style="inline"} **Autonomics**             ||
| Automations                                                                                                 | IPautomata (Automata) |
| Runbooks (New Module)                                                                                       |                       |
| Connections                                                                                                 | IPconnect             |
| Credentials                                                                                                 | IPlocksmith           |
| Scheduling                                                                                                  | IPcal                 |
| ![D02-00_0004-Reporting](D02-00_0004-Reporting.png){width="25" style="inline"} **Reporting**                ||
| Dashboards                                                                                                  |                       |
| Reports                                                                              | IPreports             |
| ![D02-00_0004-Configuration](D02-00_0004-Configuration.png){width="25" style="inline"} **Configuration**    ||
| CMDB                                                                                    | IPcmdb                |
| Event Management                                                                        | IPcorrelate           |
| Downtime                                                                                | IPdowntime            |
| Workflows                                                                            |                       |
| ![D02-00_0004-Administration](D02-00_0004-Administration.png){width="25" style="inline"} **Administration** ||
| Settings                                                                                                    | IPdeploy              |
| Content Packs                                                                                               |                       |

##Accessing Navigation Menus {% #Accessin %}

Autonomics has two ways to navigate between modules. Both methods start with the main menu at the top left of any Autonomics workspace, next to the logo.

![D02-00_0004.Autonomics.Main-Menu](D02-00_0004-Autonomics-Main-Menu.png){width="400"}

*The Main Menu Dropdown Links*

Once you display this main menu, you have two options:

* **Top Left Module Feature Links**: You can select one of the modules to display its default workspace. That workspace includes a navigation menu to access module features.

* **Main Menu Flyout Links**: You can click the > to the right of any module name in the main menu. That displays a series of flyout menus with links to module features.

The easiest method is to select a module from the main menu, then select the module features menu.

The Reporting module is the only module that requires you to use the flyout menus for navigation.

![D02-00_0004.Autonomics.Module-Menu](D02-00_0004-Autonomics-Module-Menu.png){width="400"}

*The Top Left Modules Features Drop-down Links*

![D02-00_0004.Autonomics.Flyout-Menus](D02-00_0004-Autonomics-Flyout-Menus.png){width="600"}

*The Main Menu Dropdown Flyout Menus*

## Autonomics Modules

The Autonomics application includes a number of modules. You can use them individually and together to manage IT resources.

###Operation {% #_bm %}

The Operation module includes features used to create and manage tasks.

#### Tasks

Tasks is the core workflow management application. It encompasses all facets of the operational lifecycle, including Incident Management. Tasks allow you to monitor and pick up tickets of varying criticality.

#### Problems

* **Problems**: The Problems module can automatically detect and flag trends in incidents. It interacts with IPmon and other event management modules.

* **Rules**: This module lets you create rules used to detect and flag trends to identify problems.

#### Knowledge Base

The Knowledge Base module allows complete enterprise knowledge management. It provides document management, collaboration, records management, web content management, imaging, and free text information administration. It also gives the ability to search the entire archive.

#### Contacts

The Contacts module stores customer and partner contact information and attributes.

###Autonomics {% #_bm2 %}

The Autonomics module includes features used to create and manage automations.

Automations

* **Automations**: This feature provides an intelligent IT management system. It can quickly and effectively detect and repair issues on its own. It's intelligent software agents allow you to facilitate data gathering, management, and remediation of detected issues.

* **Executions**: This feature allows you to execute automata manually or automatically. You also can view the current and past executions.

* **Script library**: This feature lets you create and manage scripts used by automations.

* **Settings**: This features includes common configuration settings used by automations.

* **Automations Lite**: This workspace displays a list and status of all available ALite instances.

* **Matchers**: Use this feature to create and manage matches used to identify events and how to process them.

* **Knowledge**: This feature collects process narratives used to identify, manage, and resolve events.

* **Allowed Commands**: Some Autonomics shell commands can run automatically when executed by an automation. They do not request user confirmation to execute. The Allowed Commands workspace lets you create and manage these commands.

* **Denied Commands**: These shell commands are not allowed to be executed by automations.

#### Connections

* **Connections**: This feature lets you configure connections used by automations.

* **Sessions**: Use this feature to run real time connections with remote resources.

#### Credentials

* **Passwords**: This feature manages authentication with IT assets. It helps you retrieve credentials and establish secured connections with devices.

* **User Groups**: Use this feature to create groups to help manage contacts.

* **Users**: This feature lets you create user accounts and assign authorities. The authorities control what features a user can view and manage.

* **Events**: This feature logs credential and user account usage and changes.

#### Scheduling

This feature displays asynchronous events and scheduled batch processes in a calendar format. You can schedule events to happen automatically.

###Reporting {% #_bm3 %}

You can run canned reports from within this module. Or develop custom reports. This module shows performance and availability trends. Plus, you can see characteristics of your servers, network devices, and applications.

#### Dashboards

This feature uses OpenSearch to generate different dashboards.

* **Overview**: This displays the default reporting dashboard.

* **Discover**: This displays a query engine dashboard.

* **Visualize**: This dashboard lets you display data in several visual ways.

* **Dashboard**: This dashboard lets you create and manage dashboards for specific purposes.

* **Reporting**: This dashboard define then view reports.

* **Dev Tools**: This dashboard is a console you can use to access developer tools.

* **Management**: This dashboard lets you configure OpenSearch features.

#### Reports

This feature uses different software to create reports and explore activity data.

* **Dashboard**:

  * **Dashboard**: This dashboard provides a console with data summaries.

  * **Playlists**: This feature lets you create and configure dashboards.

* **Explore**: This workspace lets you explore activity data by creating queries.

* **Configuration**:

  * **Data Sources**: This workspace lets you identify data sources to use for OpenSearch reports and dashboards.

  * **Plugins**: This workspace lets you work with plugins to augment the reporting tools.

###Configuration {% #_bm4 %}

This module organizes the creation and maintenance of configuration items (CIs) used by Autonomics.

#### CMDB

The Configuration Management Database (CMDB) is a standard framework. It's used to access IT information used to integrate Autonomics IT management services. The CMDB centrally stores information about IT assets. CIs store asset properties, locations, relationships, and other details in the CMDB.

* **Scopes**: This workspace organizes CIs into useful groups called scopes for monitoring with Autonomics.

* **CIs**: This workspace lets you create Configuration Items (CIs) that contain information about IT resources monitored with Autonomics.

* **Discoveries**: This workspace displays a list of CIs discovered.

* **History**: This workspace displays a history of CMDB activities, for example, changes in CI settings.

* **Exports**: Use this workspace to export CIs.

* **Imports**: Use this workspace to import CIs.

* **Batch Updates**: This workspace lets you create and update CI properties in bulk.

#### Event Management

This feature manages event flows from diverse management systems into the Autonomics platform.

* **Correlation**: This workspace allows you to define rich rules similar to how Big Panda does it without requiring knowledge of Esper syntax.

* **Attributes**: This workspace allows you to create and manage attributes used to correlate and match events.

* **Event Rules**: Use this workspace to create rules to correlate events.

#### Downtime

This feature creates and manages downtime events for CIs.

#### Workflows

Workflows route requests through a pre-defined process. Requests are evaluated automatically or manually for their type. Then they're routed first through the root workflow and then to any additional workflow processes.

* **Workflows**: This workspace lets you create and manage workflows.

* **Cascades**: This workspace lets you configure cascade (hierarchical) keys and values used for Workflows fields.

###Administration {% #_bm5 %}

The Administration workspaces set up an Autonomics instance.

#### Settings

* **Clients**: This workspace lets you create and manage clients.

* **Users**: This workspace lets you create and manage user accounts.

* **Login Groups**: This workspace lets you create and manage groups. These groups include authorities used to allow users to view

* **Password Policies**: Use this workspace to create and manage password policies.

* **Auth Systems**: This workspace manages authentication systems used by Autonomics to authenticate users.

* **Integrations**: This workspace manages integrations used by AIOps, for example, generative AI and ServiceNow.

#### %E05-Autonomics-Admin.Content.Packs.modulee%

Content packs are a jar-file containing assets. They're installed with corresponding Groovy installation scripts.

* **Upload**: This workspace lets you upload content packs.

* **Configurations**: This workspace manages the configuration of existing and new content packs.

* **Exports**: This workspace lets you export content packs.

#### Audit

You can use this workspace to search and view activity with your Autonomics instance.

### Amelia

Clicking this link takes you back to the default Amelia chat interface.

## More Resources

For more information, see:

* [Autonomics Platform Introduction](D02-00_0001-Autonomics-Platform-Intro.md).

* [Accessing the Autonomics Platform](D02-00_0003-Access-Autonomics-Platform.md).

* [Light and Dark Mode](D02-00_0008-Light-Dark-Mode.md).

