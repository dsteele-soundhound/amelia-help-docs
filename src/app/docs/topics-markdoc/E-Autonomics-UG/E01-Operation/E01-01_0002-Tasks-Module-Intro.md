# Tasks Module Introduction

## Introduction

The Tasks module helps manage workflows and queues in Autonomics. It lets you control of exceptions, events, alerts, trouble tickets, and project tasks. It ensures that tasks are completed on time and efficiently. The module improves system availability and provides reliable performance for business users.

The [Tasks Module Walkthrough](E01-01_0003-Tasks-Mod-Walk.md) topic describes the Tasks workspace in more detail. The [Tasks Module Management](E01-01_0004-Tasks-Mgmnt.md) topic describes how to create and manage tasks. And the [Tasks Settings Walkthrough](E01-01_0005-Settings-Mod-Walk.md) topic describe how to configure generative AI settings for tasks.

## What You'll Learn

In this topic you'll learn about:

* [The Tasks Workspaces](#The).

* [How to manage tasks](#How).

* [Using generative AI with tasks](#Using).

* [Creating custom workspace views of tasks](#Creating).

* [Accessing the Tasks workspace](#Accessin)

##The Tasks Workspaces {% #The %}

A Tasks list workspace displays all tasks. You can filter the list of tasks using a detailed search panel. When you click on a task listed in the workspace, its details appear in a panel on the right side of the list workspace. This lets you move quickly between tasks.

##How to Manage Tasks {% #How %}

Once a ticket details display on the right side of the list workspace, you can review and manage the task. For example, you can use buttons to assign, edit, and clone the task. Buttons also let you resolve the task with AI and create automations with AI. And you can view the workflow process that controls the task.

Each ticket also has tabs with extensive details. You can link tasks or review the task history. The Overview tab lets you use generative AI to create a root cause analysis for a task.

##Using Generative AI with Tasks {% #Using %}

Managing a task includes using generative AI as part of the resolution process.

* **Resolve with AI**: This feature lets IT operations personnel remediate incidents while exploring automation opportunities. It leverages runbooks, OpenAI models, and in-house technologies. Resolve with AI suggests the steps needed to triage and resolve an issue. It calculates the impact and risk of each suggestion. Then optionally generates automation for future process improvements. This leverages our Automate with AI engine.
* **Automate with AI**: This feature generates automations from knowledge articles, runbooks, and standard operating procedures. Native integrations connect Autonomics to customer platforms.

* **Generate with AI**: The Overview tab in a ticket panel displays a Root Cause Analysis section. This includes a **Generate with AI** button. Click it to use generative AI to analyze all details about a task. The output is a step by step description of how the task happened and its resolution.

##Creating Custom Workspace Views of Tasks {% #Creating %}

You can filter tasks in the Tasks list workspace. For example, you might want to see only P1 tickets for a team. click the **gear** icon to display a detailed search panel. Once you create a filter that meets your needs, you can save it as a custom workspace. The new workspace appears in the All Tasks dropdown list next to the gear icon.

##Accessing the Tasks workspace {% #Accessin %}

{% include from="E01-01_0002-Tasks-Modules-Access.md" element-id="E01-01_0002-Tasks-Modules-Access_snippet" /%}


## More Resources

{% include from="E01-01_0002-Tasks-More-Resources.md" element-id="E01-01_0002-Tasks-More-Resources_snippet" /%}