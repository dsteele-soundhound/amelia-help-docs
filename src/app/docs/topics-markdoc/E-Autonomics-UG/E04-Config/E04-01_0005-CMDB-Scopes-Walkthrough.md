# Scopes Walkthrough

## Introduction

Scopes organize configuration items (CIs) into useful groups for monitoring with AI Ops. For example, you might have database servers. You would define each server as a unique CI. Then you might use the Default scope, or create a custom scope, to organize all your database servers. This would let you use the scope to monitor your database servers, separate from other IT assets.

> Scopes must use unique descriptive names to help organize and monitor resources.

## Accessing the Scopes

{% include from="E04-01_0002-CMDBAccess.md" element-id="E04-01_0002-CMDBAccess_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [The Scopes workspaces](#Workspaces).
* [Adding scopes](#AddScopes).
* [Archiving scopes](#ArchiveScopes).
* [Renaming scopes](#RenameScopes).
* [Importing CIs into a scope](#ImportCIs).
* [Viewing archived scopes](#ViewArchivedScopes).

## The Scopes Workspaces {% #Workspaces %}

The Scopes workspace includes two views:

* The default workspace lists active scopes with the ability to create new scopes. You also can include archived scopes.
* A right side panel that displays all the elements of a selected scope. You also can import CIs, create CIs, and filter the elements by classes.

![E04-01_0005-CMDB-Scopes-Workspace.png](E04-01_0005-CMDB-Scopes-Workspace.png){width="800"}

*The Scopes Default Workspace and Right Panel*

### The Default Workspace

The default workspace lists all active scopes. You also can create scopes and search within the listed scopes. And you can include archived scopes in the list. Clicking a scope opens a right side panel to display and work with the CIs assigned to it.

### The Right Panel

Click any scope listed in the default workspace to open the right side panel. You'll see all the CIs assigned to the scope. There's also tools available to work with CIs.

Click any CI listed in the right side panel to view its details. The panel that lists all the scope CIs slides to the left. The right panel displays details about the CI. You can edit, discover, or clone the CI. And view properties, relations, linked tasks, and other details.

![E04-01_0005-CMDB-Scopes-Detail.png](E04-01_0005-CMDB-Scopes-Detail.png){width="800"}

*List of Scope CIs on Left Panel with CI Detail in Right Panel*

*Scopes CIs Panel*

| Element                 | Description                                                                                                                                                        |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Import                  | Click to import CIs into your scope.                                                                                                                               |
| + Create CI             | Click to create and add a CI to your scope. The Create New CI popup displays. Complete the short form then click the Create button to create then save the new CI. |
| Enforce Unique CI Names | Toggle on to enforce unique names for CIs. This can help avoid confusion when performing monitoring and other tasks.                                               |
| Search                  | Type a partial or complete CI name to filter the list of CIs.                                                                                                      |
| Class Buttons           | Click these buttons to filter the list of CIs.                                                                                                                     |
| CI Name                 | Click a Name link to view details and work with the CI.                                                                                                            |

## Add a Scope {% #AddScopes %}

To add a scope:

1. In the default Scopes workspace, click the **+ Create Scope button** at the top right of the workspace. The Create New Scope popup displays.

2. Type the Scope Name in the popup. Click to select or unselct whether to Enforce Unique CI Names in your new scope.

3. Click the Create button to create then save the scope.

## Archive a Scope {% #ArchiveScopes %}

To archive a scope:

1. In the default Scopes workspace, hover to the right edge of a scope listed. A black Gear ( ![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="15" style="inline"} ) icon will display with a small dropdown list. The options are Import, Archive, and Rename.

2. Select **Archive** from the small dropdown list.

3. Confirm that you want to archive the scope.

## Rename a Scope {% #RenameScopes %}

To rename a scope:

1. In the default Scopes workspace, hover to the right edge of a scope listed. A black Gear ( ![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="18" style="inline"} ) icon will display with a small dropdown list. The options are Import, Archive, and Rename.

2. Select **Rename** from the small dropdown list. The Rename the Scope popup displays.

3. Edit the Name field then click the Rename button to save your changes.

## Import CIs into a Scope {% #ImportCIs %}

To import CIs into a scope:

1. In the default Scopes workspace, hover to the right edge of a scope listed. A black Gear ( ![Btn-Gear-CMDB-Scopes.png](Btn-Gear-CMDB-Scopes.png){width="18" style="inline"} ) icon will display with a small dropdown list. The options are Import, Archive, and Rename.

2. Select **Import** from the small dropdown list. The Import New CIs popup displays.

3. Edit the Import New CIs popup. Click the Upload File button to find then upload a file to import.

4. Click the Create button in the popup to import and save the CIs.

> You also can import CIs by clicking a scope listed in the default Scopes workspace. The right panel will display the elements assigned to the scope. Then click the Import button and follow the steps above. {style="note"}

## View Archived Scopes {% #ViewArchivedScopes %}


## More Resources

{% include from="E04-01_0002-CMDBMoreInfo.md" element-id="E04-01_0002-CMDBMoreInfo_snippet" /%}
