# Scheduling Module Management

The Scheduling module  lets you view and schedule events. You also can filter the display of events by type and users. To use this feature, you must understand how to configure events and filter views of events.

See the [Scheduling Introduction](E02-06_0002-Scheduling-Mod-Intro.md) topic for a high-level introduction to scheduling events.

## Access the Scheduling Workspace

{% include from="E02-06_0002-SchedulingAccess.md" element-id="E02-06_0002-SchedulingAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Scheduling workspaces](#The).
* [Adding an event](#Add).
* [Editing an event](#Edit).
* [Deleting an event](#Delete).
* [Filtering the display of events](#Filter)

## The Scheduling Workspaces {% #The %}

The Scheduling feature includes several workspaces:

* A default calendar workspace that lists all events by month and week. You can filter events by event types and users. And create new events.

* A right side panel that displays details about a specific event, all events for a selected day, and new events.

### The Scheduling List Workspace

The first workspace you'll see is a calendar view of events. These are filtered by User(s) and Calendar(s). This includes tools to create new events and edit, view, and delete events.

![E02-06_0002-Scheduling-Workspace-AllEvents.png](E02-06_0002-Scheduling-Workspace-AllEvents.png){width="800"}

*Scheduling List Workspace with All Events for Selected Day*

| Element                                                                                      | Description                                                                                                                                                                                                                                                                                                     |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| + New Event                                                                              | Click the + New connection button to open a new right side panel and create a new event.                                                                                                                                                                                                                        |
| ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} | To display options, click this button at the top left. It's located to the immediate right of the word Calendar. A filter panel displays.<br/><br/>Click the User(s) and/or Calendar(s) dropdowns to filter events with one or more users or calendars. Events assigned to a user and/or calendar will display. |

### The Scheduling Right Side Panel

When you click an event or day listed in the calendar list view, the right panel will display. The panel includes a form to configure a new or existing event. Settings depend on event features. For example, automations events let you configure an automation for an event.

![E02-06_0002-Scheduling-Workspace-NewEvent.png](E02-06_0002-Scheduling-Workspace-NewEvent.png){width="800"}

*Scheduling List Workspace with New Event Form*

*Right Side Panel Event Settings*

| Setting         | Description                                                                                                                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client          | Select the client for the event.                                                                                                                                                                                                             |
| Subject         | Type a unique and accurate description for the event.                                                                                                                                                                                        |
| Calendar        | Click to assign a calendar to this event. Options are Automations, Hypera, Tasks, Change Freeze, and General. General is the default.                                                                                                        |
| Timezone        | Select a timezone for the event to use.                                                                                                                                                                                                      |
| Start Time      | Select a start time for the event.                                                                                                                                                                                                           |
| All Day         | Click to toggle On or Off if this event happens all day. Off is the default.                                                                                                                                                                 |
| Recurrence Rule | Click to select whether or not this event repeats. Options are Does Not Repeat, Hourly, Daily, Weekly, Monthly, and Yearly. Selecting a recurring time displays options to configure when the event repeats. Does Not Repeat is the default. |
| Automation      | If the Calendar setting is set to Automations, this setting displays. Click the Choose button to select an automation to connect to this event.                                                                                              |
| Owner           | Select who owns the event.                                                                                                                                                                                                                   |
| Tag Names       | Type then select one or more tag names to use for this event.                                                                                                                                                                                |
| Body            | Type a message this event generates when activated.                                                                                                                                                                                          |

##Add an Event {% #Add %}

To add an Event:

1. At the top right of the Scheduling list workspace, click the **+ New connection** button. A New Event panel opens on the right side of the screen.
2. Fill out the form to configure a new event.
3. Click the **Create** button to save the new connection.

##Edit an Event {% #Edit %}

To edit an event:

1. In the Scheduling list workspace, click an event listed in the calendar. The right panel will display.
2. Click the **Edit** button in the bottom right of the right side panel. The Edit event tab workspace displays.
3. In the Edit event workspace, update the form to configure a connection.
4. Click the **Save** button at the bottom right to save the connection.

##Delete an Event {% #Delete %}

To delete an event:

1. In the Scheduling list workspace, click an event listed in the calendar. The right panel will display.
2. Click the **Delete** button in the bottom left of the right side panel.

##Filter the Display of Events {% #Filter %}

To filter which events display in the calendar view:

1. In the calendar list view, click the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} button. It's located at the top left, to the immediate right of the word Calendar. A filter panel displays across the top of the calendar.
2. Click the User(s) and/or Calendar(s) dropdowns to filter events with one or more users and/or calendars. Events assigned to selected users and/or calendars will display.

> To deselect a User or Calendar, click the check mark to the right of a user or calendar name.

## More Resources

{% include from="E02-00_0001-AutonomicsMoreInfo.md" element-id="E02-00_0001-AutonomicsMoreInfo_snippet" /%}

