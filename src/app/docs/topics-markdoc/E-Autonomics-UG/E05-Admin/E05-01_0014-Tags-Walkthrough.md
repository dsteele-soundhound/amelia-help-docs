# Tags Walkthrough

## Introduction

Tags help organize related but different artifacts in Autonomics. For example, you could tag a database CI with a tag MSSQL123. Then use the same tag for tasks that use the database. Tags also are powerful. A task with a matcher for a tag given to an automata will execute the automata.

You'll find tags in many places in Autonomics. For example, Users, Clients, Tasks, Workflows, CIs, Automata, Connections, Knowledgebases, and Scheduling all use tags.

Before you use tags, it's best practice to develop a strategy to use them based on your situation. Then apply tags to artifacts as needed.

## Access the Tags Workspace

To access the Tags workspace:

1. Click the main navigation menu at the top left and hover over the **Administration** label. To view the **Tags** link, hover over the **Settings** label that displays.

2. Click the **Tags** link to display the module workspace that lists available tags.

> Already working in the Settings workspaces? Click the **Tags** link that appears in a drop down list at the top left, under the logo. This lets you work with the Users module, for example, then switch to working with the Tags module.

![E05-01_0014-Admin-Tags-Workspace.png](E05-01_0014-Admin-Tags-Workspace.png){width="800"}


*Tags Module Workspace*

## What You'll Learn

In this topic, you'll learn about:

* [Using the Tags module workspace](#TagsWorkspace).
* [Adding Tags](#AddTags)
* [Searching for Tags](#SearchTags)
* [Editing Tags](#EditTags)
* [Merging Tags](#MergeTags)
* [Deleting Tags](#DeleteTags)
* [Finding Resources with Tags](#UsedTags)

##Using the Tags Module Workspace {% #TagsWorkspace %}



*Tags Module Workspace Elements*

| Element                                                             | Description                                                                                           |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| + New Tag button                                                    | Click to display the New Tags popup.                                         |
| Search box                                                          | Click then type a partial or complete tag name to filter the list of tags.                            |
| ![Edit-Btn-Admin-Tags.png](Edit-Btn-Admin-Tags.png){width="30"}     | Click to display the Edit Tags popup.                                        |
| ![Merge-Btn-Admin-Tags.png](Merge-Btn-Admin-Tags.png){width="30"}   | Click to display the Merge Tags popup.                                       |
| ![Delete-Btn-Admin-Tags.png](Delete-Btn-Admin-Tags.png){width="30"} | Click to delete a tag. |

### The New Tags Popup

The new Tags Module Workspace popup appears when you click the **+ New Tag button** at the top right of the Tags module workspace.

> The Edit Tags popup uses the same form as the Edit Tags popup. Only the popup heading differs.

![E05-01_0014-Admin-Tags-New.png](E05-01_0014-Admin-Tags-New.png){width="600"}

*The New Tag Popup*

### The Merge Tags Popup

You can merge tags by clicking the Merge (![Merge-Btn-Admin-Tags.png](Merge-Btn-Admin-Tags.png){width="30"}) icon to the right of a tag listing.

![E05-01_0014-Admin-Tags-Merge.png](E05-01_0014-Admin-Tags-Merge.png){width="600"}

*The Merge Tag Popup*

##Add a Tag {% #AddTags %}

To add a tag, click the **+ New Tag button** at the top right of the Tags workspace. Then type a Tag Name in the New Tags popup and click the Save button.

##Search for a Tag {% #SearchTags %}

To search for a tag, click the **Search box** at the top right of the Tags workspace.

##Edit a Tag {% #EditTags %}

To edit a tag, click the Edit (![Edit-Btn-Admin-Tags.png](Edit-Btn-Admin-Tags.png){width="30"}) icon to the right of the tag in the Tags workspace. Then type a different Tag Name in the Edit Tags popup and click the Save button.

##Merge Tags {% #MergeTags %}

You can merge tags by clicking the Merge (![Merge-Btn-Admin-Tags.png](Merge-Btn-Admin-Tags.png){width="30"}) icon to the right of a tag listing in the Tags workspace.

Start with the tag you want merge into. Once you click the Merge icon, the Merge Tag popup appears. Click one or more check boxes to the left of each tag listed in the popup. Use the search box if needed.

Then click the **Merge button** at the bottom right of the popup to combine one or more tags and close the popup.

If needed, rename the new combined tag. Click the Edit (![Edit-Btn-Admin-Tags.png](Edit-Btn-Admin-Tags.png){width="30"}) icon to the right of the tag in the Tags workspace.


##Delete a Tag {% #DeleteTags %}

To delete a tag, click the Delete (![Delete-Btn-Admin-Tags.png](Delete-Btn-Admin-Tags.png){width="30"}) icon to the right of a tag listing in the Tags workspace.

The tag will be removed from any artifacts you've tagged with the deleted tag.

##Find Tagged Resources {% #UsedTags %}

Currently only Tasks are sortable with tags:

1. Starting from the Amelia chat workspace, using Amelia's **top left main** menu, click **Autonomics**.
2. Starting from within AIOps, using the Autonomics **top left main** menu, click **Operations**. A flyout menu appears.
3. In the flyout menu, hover over the Tasks label to display a second flyout menu. In the second flyout menu, click the **Tasks** link.
4. In the Task list view, click the ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"} button. It's located at the top left, to the immediate right of the word Tasks. A filter panel displays above the list of tasks.
5. Click the Tags dropdowns to filter tasks. Then type one or more tag names. Tasks tagged with your tag names will display.

## More Resources

{% include from="E05-01_0001-Admin-SettingsMoreInfo.md" element-id="E05-01_0001-Admin-SettingsMoreInfo_snippet" /%}
