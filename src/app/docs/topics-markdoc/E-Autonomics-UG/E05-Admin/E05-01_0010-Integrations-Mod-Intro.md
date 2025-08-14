# Integrations Module Introduction

## Introduction

The **Integration** module is your hub for connecting and managing external systems within the platform. It enables seamless integration with third-party tools and applications, allowing you to automate and streamline your IT operations. By setting up these integrations, you can ensure that your workflows are connected to the systems that power your business processes.

You'll typically use the **Integration** module for:

* **Connecting external tools**: Integrate with monitoring systems, collaboration platforms, and other enterprise applications to enable end-to-end automation.

* **Powering Knowledge**: Leverage integrations to execute automated workflows that interact with external systems, enhancing incident management, task execution, and overall operational efficiency.

* **Customizing processes**: Create and manage integrations tailored to your specific IT environment, ensuring that your automations are always in sync with your external tools.

* **Self-service capabilities**: Empower teams to create and manage their own integrations, reducing dependency on support and speeding up deployment times.

Our [Integrations Management](E05-01_0011-Integrations-Mngmnt.md) topic describe how to access the %General.%General.Autonomics.application%.application% integration features. And our [Integrations Library](E05-01_0012-Integrations-Library.md) topic describes the available integrations.

## What You'll Learn

In this topic, you'll learn about:

* [Creating and managing integrations](#Create).

* [Exploring the Integrations module](#Integrat).

* [Using webhooks and notifications](#Using).

* [Accessing the Integrations module](#Access).

##Create and Manage Integrations {% #Create %}

The process for creating and managing integrations is key. It ensures a seamless connection between the Autonomics platform and external systems. You'll begin by identifying the external systems and applications that are essential to your IT operations. These could include monitoring tools, collaboration platforms, or service management systems.

Next, you'll explore the available integration options within the platform, checking for any pre-existing integrations to avoid redundancy. You can either choose from a list of pre-built integrations or create custom ones to meet your specific needs. The Integration module offers a user-friendly interface, enabling you to configure settings, manage API keys, and set up secure connections with minimal technical expertise.

Once your integrations are set up, it's important to test them thoroughly to ensure they work as expected. You can then activate these integrations to power your Knowledge, automations, and other IT processes. Additionally, the platform provides tools to monitor, optimize, and troubleshoot your integrations over time, ensuring they remain aligned with your evolving business requirements.

##Exploring the Integration Module {% #Integrat %}

When you enter the Integration module, you'll be greeted by the Integrations workspace. This is your central library for all your integrations. Here, you'll see your integrations organized by system or category. This lets you easily manage, create, and update your connections. The workspace aims to simplify integrating with third-party tools. It shows a clear view of all active and inactive integrations. This layout helps you set up, monitor, and modify your integrations. It ensures your IT operations stay connected and responsive to your business needs.

The workspace lists all active integrations filtered by client. Clicking the + New Integration button displays a right side panel called Select External Systems. Selecting an integration from the panel displays the configuration settings for that integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png)

*The Integrations Workspace with Select External System Panel*

You will see a list of integrations within an Autonomics platform. They're filtered by client. This interface provide details about various integrations that have been set up within the platform. Here's a breakdown of the key columns and what they represent:

* **Name**: The first column lists the name of each integration. These names appear to be identifiers or titles for the different integrations (for example, "AP-29028_ZabbixEvent", "Confluence", "NewOffice365_IPsoft").

* **External System**: This column indicates which external system the integration is linked to. For example:

  * "Zabbix Event Integration" (for Zabbix-related integrations)

  * "Office 365" (for Office 365-related integrations)

  * "Confluence" (for integrations related to Atlassian Confluence)

  * "Generative AI" for an AI-based integration.

* **Enabled**: This column shows whether the integration is currently enabled. It typically displays "Yes" or "No" to indicate the status.

* **Status**: The status column indicates the current operational status of the integration:

  * **Ok**(with a green check mark) indicates that the integration is functioning correctly.

  * **Error**(with a red cross) suggests that there is an issue with the integration.

  * **Unknown**(with a question mark) indicates that the current status of the integration is unclear.

* **Created by**: This column shows the user who originally set up the integration, with names listed (for example, Vishwas, Tamil).

* **Created**: This column shows the date when the integration was initially created, providing a timeline for when each integration was set up.

* **Modified by**: This column indicates the user who last modified the integration.

* **Modified**: This column shows the last date when the integration was modified

##Using Webhooks and Notifications {% #Using %}

In addition, %General.%General.Autonomics.application%.application% includes robust support for standard webhooks. These provide real-time notifications as events occur or new data points and metrics appear. Real-time updates ensure that %General.%General.Autonomics.application%.application% stays in perfect sync with integrated platforms. IT teams gain immediate insights and notifications crucial for responsive incident management. By eliminating complex polling mechanisms, webhook support simplifies event-driven integration. It enables real-time responsiveness. And reduces the load on both system resources and developers.

Beyond notifications, %General.%General.Autonomics.application%.application% uses webhook-triggered events to fuel its automation workflows. Events initiate the appropriate responses, from triaging incidents to deploying remediations. Raising a high-priority ServiceNow® ticket can trigger %General.%General.Autonomics.application%.application% to triage and prioritize it using pre-defined SOPs. Without human intervention.

## Access the Integration Module {% #Access %}

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## More Resources

For more information, see:

* [Integrations Management](E05-01_0011-Integrations-Mngmnt.md).

* [Integrations Library](E05-01_0012-Integrations-Library.md).


