# UiPath Configuration Introduction

## Introduction

Amelia includes the ability to connect with the UiPath Orchestrator app. The app acts as an integration point with third-party solutions and applications.

> UiPath configuration is needed ONLY if an Unattended Bot is invoked. Or a queue approach is used to invoke unattended or attended bots. The queue approach is typically used if the user Channel is not Amelia's Custom UI or FaceCall web chat interfaces. The queue approach uses a Voice call, a Teams chat, or Slack based chat as the user channel.

Attended UiPath robots invoked in a web channel do not need to be configured. Instead, they can connect with Amelia using the Backend block in a Digital Employee Builder flow.

The [UiPath Configuration Management](B03-04_0802-UiPath-Instance-Management.md) topic describes how to use UiPath configurations.

## What You'll Learn

In this topic you'll learn about:

* [Configuring a UiPath application](#Configure).
* [Connecting a UiPath Application](#Connect).
* [How to access the %B03-Digital-Empl-UiPath.feature% workspace](#Access).

##Configure a UiPath Application {% #Configure %}

The UiPath Orchestrator application provides attended and unattended execution of robots that perform tasks. Refer to their [Orchestrator Automation Cloud User Guide](https://docs.uipath.com/orchestrator/automation-cloud/latest/user-guide/introduction) for complete details.

##Connect a UiPath Application {% #Connect %}

To connect UiPath Orchestrator applications with Amelia, create an external application, set the scope and resource type, and then copy the App ID and App Secret for use by Amelia.

##Access the UiPath Configuration Workspace {% #Access %}

{% include from="B03-04_0801-UiPath-Access.md" element-id="B03-04_0801-UiPath-Access_snippet" /%}

## More Resources

{% include from="B03-04_0801-MoreResources.md" element-id="B03-04_0801-MoreResources_snippet" /%}
