# Escalation Team Management

## Introduction

To use Escalation Teams to manage escalated conversations, you must understand their features and how to configure them. This topic describes how to create and manage escalation teams.

You can designate escalation teams as global or assigned to a domain. A global team services any queue in any domain. Teams assigned to a domain only service queues in that domain. Changing queue or team domain classification can affect what conversations agents can access.

See the [Escalation Team Introduction](B05-03_0002-Escalation-Teams-Intro.md) topic for a high-level introduction to how escalation teams, queues, and agents work.

## Access the Escalation Teams Workspace

{% include from="B05-03_0002-EscalationTeams-Access.md" element-id="B05-03_0002-EscalationTeams-Access_snippet" /%}

![B05-03_0003-Escalation-Teams-Workspace](B05-03_0003-Escalation-Teams-Workspace.png){width="900" style="block"}

*The Escalation Teams Workspace with Panel Highlighted*

## What You'll Learn

In this topic you'll learn about:

* [The Escalation Team workspace](#The).

* [Adding an Escalation Team](#Add).

* [Searching for an Escalation Team](#Search).

* [Editing an Escalation Team](#Edit).

* [Deleting an Escalation Team](#Delete).

## The Escalation Teams Workspace {% #The %}

### The Escalation Teams Panel

This panel appears between the left-edge links and the Contact Center Home workspace. The panel displays a list of escalation teams.

To toggle open the Escalation Teams panel, click the **Escalation Teams** icon link on the left-edge links. Then click the **Escalation Teams** or **Global Escalation Teams** links in a flyout menu that appears.

To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the **Escalation Teams** panel.

![B05-03_0003-Escalation-Teams-Panel](B05-03_0003-Escalation-Teams-Panel.png){width="400" style="block"}

*The Escalation Teams Panel*

*Escalation Teams Panel Elements*

|   Element   |                                                   Description                                                    |
|-------------|------------------------------------------------------------------------------------------------------------------|
| +Add New    | Click to add a new escalation team. A New Escalation Team tab workspace will display to the right of this panel. |
| Search Here | Type a full or partial phrase to filter the list of escalation teams.                                            |


### The Escalation Teams Workspace

The Escalation Teams tab workspace has these elements:

* A top panel with buttons to save and delete the escalation team.

* A workspace to define the escalation team.

*Escalation Team Workspace Elements*

| Element               | Description                                                                                                                                                                                                                                                                                    |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Properties Tab**    |                                                                                                                                                                                                                                                                                                |
| Name                  | Type a unique name for the escalation team.                                                                                                                                                                                                                                                    |
| Domain                | Only displays if escalation team is assigned only to one domain. The pre-configured value is the domain name.                                                                                                                                                                                  |
| Enabled               | Toggle to enable or disable the escalation team.                                                                                                                                                                                                                                               |
| Custom Schedule       | Toggle to assign a custom schedule or not. If Yes is selected, the Time Zone and Week Schedule settings display. Configure them as needed.                                                                                                                                                     |
| Esclusive Agent Group | If appropriate, select a group of agents to be assigned exclusively to this team.                                                                                                                                                                                                              |
| **Agents Tab**        |                                                                                                                                                                                                                                                                                                |
| Search                | Click and then type a partial user name to find a name in the list of users already selected in the Existing, Added, or Delete tab headings.                                                                                                                                                   |
| Select a User to Add  | Type a partial user name and then click the name that appears. Selected names display in the Added tab. For each name, type a numeric value for the maximum chats the agent can handle. Or click the ![Delete-Btn-DEB](Delete-Btn-DEB.png){width="25" style="inline"} icon to delete the name. |
| Browse                | Click the Browse button to display a popup to select multiple user names. Once you select names, click the Add button in the popup button. Selected names display in the Added tab.                                                                                                            |
| Existing              | Click this tab heading to display users that have been saved for this escalation team.                                                                                                                                                                                                         |
| Added                 | Click this tab heading to display users that have been added but not yet saved for this escalation team.                                                                                                                                                                                       |
| Deleted               | Click this tab to display users who have been deleted from the Existing and/or Added tab. This list disappears when the escalation team is saved.                                                                                                                                              |
| **Statuses Tab**      |                                                                                                                                                                                                                                                                                                |
| Online                | Click the +Add button to add one or more status names to indicate the team member is online.                                                                                                                                                                                                   |
| Away                  | Click the +Add button to add one or more status names to indicate the team member is away from their computer.                                                                                                                                                                                 |
| Busy                  | Click the +Add button to add one or more status names to indicate the team member is busy with conversations or other tasks..                                                                                                                                                                  |
| Offline               | Click the +Add button to add one or more status names to indicate the team member is offline.                                                                                                                                                                                                  |
[Escalation Team Workspace Elements]

##Add an Escalation Team {% #Add %}

To add an escalation team:

1. Open the Escalation Teams or Global Escalation Teams panel between the left panel navigation and the Escalation Teams Home tab workspace. If the panel isn't displayed, click the **Escalation Teams** button on the left edge then click the **Escalation Teams** or **Global Escalation Teams** link that appears in a flyout menu.

2. At the top left of the Escalation Team panel, click the **+Add New** button. A New Escalation Team workspace opens.

3. Configure the Escalation Teams workspace. Then click the Save button.

##Search for an Escalation Team {% #Search %}

To search for an escalation team:

1. Open the Escalation Teams or Global Escalation Teams panel between the left panel navigation and the Escalation Teams Home tab workspace. If the panel isn't displayed, click the **Escalation Teams** button on the left edge then click the **Escalation Teams** or **Global Escalation Teams** link that appears in a flyout menu.

2. At the top left of the Escalation Team panel, click the Search here field. Type a few characters or team name to filter the list of team names.

3. Click a team name. Its workspace displays.

##Edit an Escalation Team {% #Edit %}

To edit an escalation team:

1. Open the Escalation Teams or Global Escalation Teams panel between the left panel navigation and the Escalation Teams Home tab workspace. If the panel isn't displayed, click the **Escalation Teams** button on the left edge then click the **Escalation Teams** or **Global Escalation Teams** link that appears in a flyout menu.

2. In the Escalation Team panel, click a team name. Its workspace opens.

3. Edit the Escalation Teams workspace. Then click the Save button.

##Delete an Escalation Team {% #Delete %}

To delete an escalation team:

1. Open the Escalation Teams or Global Escalation Teams panel between the left panel navigation and the Escalation Teams Home tab workspace. If the panel isn't displayed, click the **Escalation Team**s button on the left edge then click the **Escalation Teams** or **Global Escalation Teams** link that appears in a flyout menu.

2. In the Escalation Team panel, click a team name. Its workspace opens.

3. Click the Delete button at the top of the escalation team workspace.

## More Resources

{% include from="B05-00_0001-ContactCenter-MoreResources.md" element-id="B05-00_0001-ContactCenter-MoreResources_snippet" /%}
