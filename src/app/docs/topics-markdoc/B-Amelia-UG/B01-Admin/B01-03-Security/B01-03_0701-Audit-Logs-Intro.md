# Audit Introduction


## Introduction

You can search for and view Amelia events and sort them by event type, initiator, and domain code. You'll need the ADMIN_AUDIT_EVENT authority assigned to your user account.

To find a domain code, use the Domains workspace in the Administration module. It's the Code setting in the Basic tab of that workspace.

To view events not connected to a domain, you'll need the ADMIN_AUDIT_EVENT authority. It needs to be part of a group with global authority.

## Accessing the Audit Workspace

{% include from="B01-03_0701-AuditAccess.md" element-id="B01-03_0701-AuditAccess_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The Audit workspace](#Workspace).

* [Filtering audit events](#FilterEvents).


## The Audit Workspace {% #Workspace %}

The Audit workspace has a default list workspace and a right panel to display details.

### Default Audit Workspace

The default Audit workspace lists all Amelia system events. You can filter events by initiator, event type, and domain code.

### Right Panel

The right panel displays an Audit Log when you click an event listed in the default Audit workspace. Data displayed depends on the event type.

> The right panel displays data if the Has Event column displays a checkmark in the list workspace.

## Filter Audit Events {% #FilterEvents %}

To filter log events:

1. In the Audit workspace, click the Filter ( ![Btn-Audit-Filter.png](Btn-Audit-Filter.png){width="12" style="inline"} ) icon at the top right of the list of events. A horizontal panel with filter options displays above the event list.

2. Click the Event Type and/or Date Range filter options.

3. If an event entry has a checkmark in the Has Event Data, click the entry to display event details in a right-side panel.

## More Resources

{% include from="B01-03_0001-SecurityMoreResources.md" element-id="B01-03_0001-SecurityMoreResources_snippet" /%}