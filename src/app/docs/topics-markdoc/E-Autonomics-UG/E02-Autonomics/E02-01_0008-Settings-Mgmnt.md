

# Settings Module

## Introduction

The Settings workspace lets you configure the operation of your Autonomics instance. You'll use the Settings workspace to manage individual settings for data limits, concurrency, scheduling, execution, and other features.

## What You'll Learn

In this topic, you'll learn about the settings available to configure and manage the Autonomics module.

* [Access the Script Library workspace](#AccessWorkspace).

* [Change workspaces](#Change).

* [Set the domain or client](#Domain).

* [Data Limit Settings](#DataLimits).

* [Concurrency Limit Settings](#Concurrency).

* [Global Automation Settings](#Automation).

* [Error Handling Settings](#ErrorHandling).

* [Scheduling Settings](#Scheduling).

* [Execution Settings](#Execution).

* [AIF (Amelia Integration Framework) Settings](#AIF).

* [Retry in HTTP Request State](#RetryHTTPRequestState).

* [Native Java Integration](#NativeJavaIntegration).

## Access the Settings Workspace {% #AccessWorkspace %}

After login, you'll enter the Amelia application. From here, you'll navigate to Autonomics.

By default, You'll enter Autonomics through the Tasks module (Tasks Inbox workspace). To use automations, you must navigate to the Automations module and the Settings workspace.

To go to the Settings workspace:

{% include from="E02-01_0003-Access-Automations-Module.md" element-id="E02-01_0003-Access-Automations-Module_snippet" /%}

Once inside the Automations module, you'll see the Browser workspace. This displays available automations organized into folders.

##Change Workspaces {% #Change %}

{% include from="E02-01_0003-Browser-Menu-Change.md" element-id="E02-01_0003-Browser-Menu-Change_snippet" /%}

##Set the Domain or Client {% #Domain %}

To choose a domain, or switch to another client, you'll use the Domain dropdown.

![E02-01-0007-Script-Library-Domain.png](E02-01-0007-Script-Library-Domain.png){width="900" style="block"}

*Select a Domain or Client Name*

##Data Limit {% #DataLimits %}

* **Data Usage Limit (Bytes):** The default is 100000000 (10 million bytes). This limit works on execution level. It limits the amount of data allowed for one execution. Most of the data usage goes to execution variables and execution logs. Once this limitation is met, execution will be auto-aborted.


##Concurrency Limit {% #Concurrency %}

* **Concurrency Limit:** This setting limits the number of concurrent running executions.


* **If Limit Exceeds:**

  * Inherit: Default. When the concurrency limit is reached, inherit the settings from Global settings.
  * Auto Abort: Auto-abort the execution if the number of concurrent running executions reaches the limit already.
  * Keep in Scheduled state until other automations finish:  Any new execution will be kept in Scheduled status until other executions finish.

##Global Automation {% #Automation %}

This setting works together with Automaton matcher. You can set up matchers to match and execute automaton. This setting let you use the global matchers.

* **Match on Global Automation:** 

  * Inherit from Global:  Inherits from the global settings.
  * Enable: Default. Enable global matchers by default.
  * Disable: Disable global matchers for the client.

##Error Handling {% #ErrorHandling %}

This setting determines what to do when an execution fails.

* **When automation is aborted by user:** 

  * Inherit: Inherits from the global settings.
  * Select Automation: If selecting any automaton, this automaton will be executed if any execution is aborted by some user.

* **When automation is automatically aborted:** 

  * Inherit: Default. Inherits from the global settings.
  * Select Automation - if selecting any automaton, this automaton will be executed if any execution is auto-aborted. Auto-aborting can happen when execution reaches the data usage limit. Or execution reaches the maximum number of states executed. Or there are max concurrent executions running because the corresponding setting is enabled.

* **When automation is Failed:**

  * Inherit: Default. Inherits from the global settings.
  * Select Automation: If selecting any automaton, this automaton will be executed if any execution fails,

##Scheduling {% #Scheduling %}

* **When Automation is Deleted:** This setting applies to scheduling module (the old IPcal module). If there is an automaton type of event, this setting controls what happens to the event if the linked automaton is deleted.

  * Remove Calendar Entry: If the linked automaton is deleted, delete the calendar event.
  * Keep Calendar Entry: Default. Keep the calendar event if the linked automaton is deleted.

##Execution {% #Execution %}

* **Run As:** This setting determines the executor of an execution. It mostly affects the authorities when calling Autonomics APIs.

  * Inherit from Global: Default. Inherits from the global settings.
  * Caller: The caller that tries to call and execute the automaton.
  * Owner: The owner who created the automaton.

* **Enable/Disable Execution of Automation after Unmatched Exception:** 

  * Stop on Exception: When an execution starts, it will fail if it encounters any exceptions or errors.
  * Continue on Exception: Default. Execution continues when it encounter sexceptions, leave the exception handling to the automaton developer.

* **Legacy SQL Output Format:** This setting determines the SQL output format for execution logs.

  * Inherit from Global: Inherits from the global settings.
  * Enable: Enable legacy SQL output format in execution logs.
  * Disable: Default. Disable using legacy SQL output format in execution logs.

* **Default Execution Location Group:** The default Execution Group for executions running on Edge. Select the group from the dropdown list.

* **Show Output on Command Timeout:** 

  * Inherit from Global: Default. Inherits from the global settings.
  * Enable: Enable display of output on command timeout.
  * Disable: Disable  display of output on command timeout.


##AIF {% #AIF %}

* **Allowed AIF Domains:** The AIF API action in an automaton can call the Amelia integration framework (AIF) API. It asks the automaton developer to provide a domain code to use for the connection. This setting determines if the provided domain is allowed. If not allowed, then the AIF API action will fail.

  * All: Allows all the domains in the Autonomics instance to use the AIF API.
  * Client: Allows only the client Amelia domain to use the AIF API. Domains can be selected in Amelia on the client edit page.
  * Client and Global: Default. Allows the client and global domains to use the AIF API.


## Retry in HTTP Request State {% #RetryHTTPRequestState %}

* **Retry Count:** Configure the number of times that a HTTP request will be retried before failure.

* **Retry Initial Delay (ms):** Configure the delay in milliseconds before the first retry. Between retries, an exponential backoff strategy is used to prevent overwhelming the target server.

* **Retry Timeout (s):** Configure the maximum cumulative time (in seconds) allowed for retry attempts after the initial request fails. This includes both retry request processing time and any delay intervals between retries.


## Native Java Integration {% #NativeJavaIntegration %}

* **Default Execution Group:** Type the name of the execution group to use as a default for Java integration.

* **ISC Fallback Flows:** Click the **+ Add button** to add an ISC fallback flow to use for Java integration.


## More Resources

For more information, see:

* [Automations Management](E02-01_0004-Automations-Mgmnt.md)
* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)
* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md)

