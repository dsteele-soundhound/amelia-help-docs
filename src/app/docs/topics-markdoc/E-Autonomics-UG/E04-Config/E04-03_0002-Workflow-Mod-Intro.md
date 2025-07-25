# Workflows Module Introduction

## Introduction

Workflows define steps for a task to take to resolve incidents. For example, to execute a service request. Or fix a major incident. Steps might include notifications, scripting, waiting for auto recovery, or conditional logic. Workflows can work without human involvement, with a human engineer, or a mix of both.

The [Workflows Management](E04-03_0004-Workflow-Mgmnt.md) topic explains how to configure workflows.

## What You'll Learn

In this topic you'll learn about:

* [The Workflows module](#Introduc).
* [Orchestrating Automations with Workflows](#Orchestr).
* [Accessing the Workflows workspace](#Access).

##Introduction to the Workflows Module {% #Introduc %}

The Workflows module is an incredibly flexible tool. Workflow designers can create and manage workflows tailored to their organisation needs. Designers can use ITIL best practices. While also having the freedom to adapt principles to meet goals and requirements.

You can craft workflows based on Task Types. This provides a structured approach to handle different tasks easily. Designers can set up one or more workflows for each Task Type to meet operational needs. The available Task Types include:

* **Event**: Based on the ITIL Event Management process, this type addresses the detection and handling of significant operational events.
* **Incident**: Inspired by ITIL Incident Management, this type focuses on restoring service operations after disruptions.
* **Change Request**: Reflecting ITIL Change Management, this type oversees changes to systems and services in a controlled way.
* **Problem**: Aligned with ITIL Problem Management, this type supports identifying and resolving root causes to mitigate recurring issues.
* **Service Request**: Rooted in ITIL Request Fulfillment, this type manages user requests for services or resources.
* **Lookup**: A flexible Task Type for any inquiries or actions that don't fit the standard ITIL-aligned categories.

The Workflows module is thoughtfully crafted to adjust to your organisation's needs. You can create workflows to streamline processes and enhance efficiency. Workflows that can encourage best practices, whether you follow ITIL frameworks or embrace completely customised approaches. This flexibility, helps you develop workflows as unique and dynamic as the operational challenges you face.

##Orchestrating Automations with Workflows {% #Orchestr %}

At its core, the Workflows module seamlessly orchestrates one or more Automations. This transforms complex processes into streamlined, efficient operations. Workflows are the overarching structure. They define the sequence, logic, and flow of tasks. Automations execute specific actions within those workflows.

Using the Workflows module, designers can:

* **Integrate Automations**: Each workflow can include one or more Automations. They perform defined actions such as triggering notifications, updating systems, or executing scripts.
* **Define Logic and Dependencies**: Workflows manage the flow of tasks and Automations. This ensures each action occurs in the correct order. And adheres to specified conditions or dependencies.
* **Coordinate Human and Machine Tasks**: Automations handle routine, repetitive tasks. Workflows incorporate manual tasks that require user interaction through the Tasks module.
* **Adapt Dynamically**: You can design workflows with decision points and conditional logic. They can adapt to changing circumstances. And also trigger the right Automations based on task outcomes or external inputs.

Combining Workflows and Automations let you achieve a high degree of process automation. While maintaining control and flexibility. Integration lets you manage and execute tasks with precision. This drives better outcomes across your organization.

##Access the Workflows Workspace {% #Access %}

{% include from="E01-03_0002-WorkflowsAccess.md" element-id="E01-03_0002-WorkflowsAccess_snippet" /%}

## More Resources

{% include from="E04-03_0002-WorkflowsMoreInfo.md" element-id="E04-03_0002-WorkflowsMoreInfo_snippet" /%}