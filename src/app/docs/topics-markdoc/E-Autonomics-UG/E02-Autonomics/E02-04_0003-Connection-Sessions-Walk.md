# Connections Sessions Walkthrough

## Introduction

The Connections module gives you a broad flexible range of connectivity options. It lets you connect with many resources and configuration items (CIs). You can connect with DB2, MSSQL, MySQL, Oracle, Postgres, and Teradata databases. Connectivity tools include PowerShell, SSH, PowerShell Over SSH, and Telnet. The module also supports PowerBroker to manage commands used with resources.

The Connections module also includes a command line interface (CLI). It displays as a web page with a Terminal tab and a Log tab.

The Sessions workspace lets you view sessions, as well as connect to hosts to run commands. And you can generate automations from host sessions.

## Accessing the Connection Sessions Workspace

To access the Connections Sessions workspace:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Autonomics**. A flyout menu appears.
3. In the flyout menu, hover over the Connections label to display a second flyout menu. In the second flyout menu, click the **Sessions** link.

## What You'll Learn

In this topic, you'll learn about:

* [The Sessions workspace](#Workspace)
* [Connecting to hosts](#HostConnect)
* [Generating automations from sessions](#Automations)

##The Sessions Workspace {% #Workspace %}

The Sessions workspace has three key elements:

* The main workspace with a list of sessions and a detail panel that displays when a session is clicked.

* The Connect to Host workspace that provides a CLI (command line interface) to interact with the host configured for a session.

* The Generate Automation button opens a new window with the Automation Studio workspace. You can generate an automation from a series of host commands.

### The Main Sessions Workspace

In the Sessions workspace, click any session to view its detail panel. You can connect to a host and generate an automation. Tabs let you view the Commands and Session Log history for the session.

![E02-04_0003-Connection-Sessions-Workspace.png](E02-04_0003-Connection-Sessions-Workspace.png){width="800"}

*The Sessions Workspace with Session Detail Panel*

### The Connect to Host Workspace

This workspace appears when you click the Connect to Host button in a session detail panel. The workspace provides all the basic tools found in a CLI tool.

![E02-04_0003-Connection-Sessions-CLI.png](E02-04_0003-Connection-Sessions-CLI.png){width="800"}

*The Connect to Host Workspace*

### The Generate Automation Workspace

This workspace appears when you click the Connect to Host button in a sesion detail panel. Or click it within the Connect to Host workspace. It displays the [Automation Studio workspace](E02-01_0019-Automation-Studio-Intro.md).


##Connect to Hosts {% #HostConnect %}

To connect to a host configured for a session:

1. In the Sessions list workspace, click a session entry to display its detail page.
2. In the detail page, click the **Connect to Host** button.

##Generate Automations {% #Automations %}

To generate an automation from a host session:

1. In the Sessions list workspace, click a session entry to display its detail page.
2. In the detail page, click the **Generate Automation** button.

> You also can generate an automation from the Connect to Host workspace. Click the **Generate Automation** button at the top right of that workspace. It will display the Automation Studio workspace.

## More Resources

{% include from="E02-04_0003-ConnectionsMoreInfo.md" element-id="E02-04_0003-ConnectionsMoreInfo_snippet" /%}

