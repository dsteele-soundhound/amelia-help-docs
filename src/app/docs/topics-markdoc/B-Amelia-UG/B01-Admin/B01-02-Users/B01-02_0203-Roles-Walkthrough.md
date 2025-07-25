# Roles Walkthrough

## Introduction

In Amelia, you can assign roles to user groups and global user groups. Roles collect authorities needed by groups to perform tasks. The authorities enable users to see specific activities and perform actions. Agents handling escalations, for example, can see the Agent workspace. They also can manage escalated conversations to resolution. The Agent role collects the authorities needed to see and perform these tasks.


Once you create a role, you assign the role to a user group or global user group using those workspaces.

## Accessing the Roles Workspace

To access the Roles workspace:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. From the flyout menu, select the **Roles link**.

![B01-02_0203-Roles-New-Workspace.png](B01-02_0203-Roles-New-Workspace.png){width="800"}

*The Roles Workspace with New Role Tab Workspace*


## What You'll Learn

In this topic, you'll learn about:

* [The Roles workspace](#Workspace).
* [The default system roles and authorities](#SystemRolesAuthorities).
* [Roles used with third-party gateways](#GatewayRolesAuthorities).
* [Adding roles](#AddRoles).
* [Editing roles](#EditRoles).
* [Deleting roles](#DeleteRoles).



## The Roles Workspace {% #Workspace %}

The Roles workspace lets you create and configure roles. You can assign roles to user groups and global user groups.

### The Roles Left-Side Panel

This panel appears between the left edge navigation links and the Administration Home tab workspace. The panel displays a list of available roles.

To toggle open the Roles panel, click the Administration link at the top left. Then click the Roles button that appears on the left edge. Click the Roles link in the flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="20" style="inline"} icon at the top right of the Roles panel.

![B01-02_0203-Roles-Panel.png](B01-02_0203-Roles-Panel.png){width="400" style="block"}

*The Roles Left-Side Panel*

*Roles Panel Elements*

| Element  | Description                                                                   |
|----------|-------------------------------------------------------------------------------|
| +Add New | Click to add a new role. A New Role tab workspace displays on the right side. |


### The Default Tab Workspace

The default tab workspace lets you create role and edit existing roles. Assign one or more authorities to a role. Select an authority to add from the dropdown list. Or click the Browse button to display the Add New Authorities popup. The popup lets you select multiple authorities at one time.

Use the search box to confirm an authority is in the Existing tab. Or to filter the list of authorities in the Add New Authorities popup.


![B01-02_0203-Roles-Edit-Workspace.png](B01-02_0203-Roles-Edit-Workspace.png){width="800"}

*The Roles Workspace with Edit Tab Workspace*


## Default System Roles and Authorities {% #SystemRolesAuthorities %}

These default roles are pre-configured with Amelia instances. See the [Authorities List topic](B01-02_0600-Authorities-List.md) for details about specific authorities.

*Default System Roles and Authorities*

| Role                 | Authorities                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator        | AUTHORITY_ADMIN_AUDIT_VIEW, AUTHORITY_ADMIN_AVATAR_EDIT, AUTHORITY_ADMIN_AVATAR_VIEW, AUTHORITY_ADMIN_CONVERSATION_CLOSE, AUTHORITY_ADMIN_COG_SETTINGS_EDIT, AUTHORITY_ADMIN_COG_TASK_EDIT, AUTHORITY_ADMIN_COG_TASK_LIST, AUTHORITY_ADMIN_CONVERSATION_DESIGN_EDIT, AUTHORITY_ADMIN_CONVERSATION_DESIGN_VIEW, AUTHORITY_ADMIN_DOMAIN_EDIT, AUTHORITY_ADMIN_DOMAIN_EDIT_AVATAR_VOICE, AUTHORITY_ADMIN_DOMAIN_EDIT_TRANSLATION, AUTHORITY_ADMIN_DOMAIN_VIEW, AUTHORITY_ADMIN_ESCALATION_QUEUE_EDIT, AUTHORITY_ADMIN_ESCALATION_QUEUE_VIEW, AUTHORITY_ADMIN_ESCALATION_TEAM_EDIT, AUTHORITY_ADMIN_ESCALATION_TEAM_VIEW, AUTHORITY_ADMIN_FACE_EDIT, AUTHORITY_ADMIN_GATEWAY_INTEGRATION_EDIT, AUTHORITY_ADMIN_GATEWAY_INTEGRATION_VIEW, AUTHORITY_ADMIN_HUMANIZATION_RESOURCE_EDIT, AUTHORITY_ADMIN_HUMANIZATION_RESOURCE_VIEW, AUTHORITY_ADMIN_LICENSE_EDIT, AUTHORITY_ADMIN_LICENSE_VIEW, AUTHORITY_ADMIN_ONE_RPA_INSTANCE_EDIT, AUTHORITY_ADMIN_ONE_RPA_INSTANCE_VIEW, AUTHORITY_ADMIN_ONE_STORE_INSTANCE_EDIT, AUTHORITY_ADMIN_ONE_STORE_INSTANCE_VIEW, AUTHORITY_ADMIN_ORCHESTRATOR_EDIT, AUTHORITY_ADMIN_ORCHESTRATOR_VIEW, AUTHORITY_ADMIN_THEME_EDIT, AUTHORITY_ADMIN_THEME_VIEW, AUTHORITY_ADMIN_UI_BUNDLE_DEPLOY, AUTHORITY_ADMIN_UI_BUNDLE_EDIT, AUTHORITY_ADMIN_UI_BUNDLE_VIEW, AUTHORITY_ADMIN_USER_VIEW, AUTHORITY_ADMIN_VIEW, AUTHORITY_ADMIN_VIRTUAL_HOST_EDIT, AUTHORITY_ADMIN_VIRTUAL_HOST_VIEW                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Agent                | AUTHORITY_ACTIVE_CONVERSATION_VIEW, AUTHORITY_CONVERSATION_OBSERVE, AUTHORITY_CONVERSATION_PICKUP, AUTHORITY_CONVERSATION_TRANSFER, AUTHORITY_CONVERSATION_TRANSFER_TO_AMELIA, AUTHORITY_JOURNEY_VIEW, AUTHORITY_NPS_ANALYTICS_VIEW, AUTHORITY_ORCHESTRATOR_VIEW, AUTHORITY_SENTIENT_VIEW, AUTHORITY_USER, AUTHORITY_VIEW_TAG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Agent Supervisor     | AUTHORITY_ACTIVE_CONVERSATION_VIEW, AUTHORITY_ADMIN_ESCALATION_QUEUE_EDIT, AUTHORITY_ADMIN_ESCALATION_QUEUE_VIEW, AUTHORITY_ADMIN_ESCALATION_TEAM_EDIT, AUTHORITY_ADMIN_ESCALATION_TEAM_VIEW, AUTHORITY_CONVERSATION_ASSIGN, AUTHORITY_CONVERSATION_OBSERVE, AUTHORITY_CONVERSATION_PICKUP, AUTHORITY_CONVERSATION_TRANSFER_TO_AMELIA, AUTHORITY_JOURNEY_VIEW, AUTHORITY_NPS_ANALYTICS_VIEW, AUTHORITY_ORCHESTRATOR_VIEW, AUTHORITY_SENTIENT_VIEW, AUTHORITY_SUPERVISOR_VIEW, AUTHORITY_USER, AUTHORITY_VIEW_TAG, AUTHORITY_VIEW_DOMAIN_RESPONSES, AUTHORITY_EDIT_QUEUE_RESPONSES, AUTHORITY_VIEW_QUEUE_RESPONSES, AUTHORITY_EDIT_DOMAIN_RESPONSES, AUTHORITY_ADMIN_DOMAIN_EDIT_AGENT_PORTLETS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| End User             | AUTHORITY_CONVERSATION_START, AUTHORITY_USER                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| HyperA User          | AUTHORITY_ORCHESTRATOR_HYPERA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Integration Designer | AUTHORITY_ADMIN_INTEGRATION_DEPLOY, AUTHORITY_ADMIN_INTEGRATION_EDIT, AUTHORITY_ADMIN_INTEGRATION_TEMPLATE_EDIT, AUTHORITY_ADMIN_INTEGRATION_TEMPLATE_VIEW, AUTHORITY_ADMIN_INTEGRATION_VIEW                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Knowledge Designer   | AUTHORITY_ACTIVE_CONVERSATION_VIEW, AUTHORITY_ADMIN_AIML_DOCUMENT_DELETE, AUTHORITY_ADMIN_AIML_DOCUMENT_EDIT, AUTHORITY_ADMIN_AIML_DOCUMENT_VIEW, AUTHORITY_ADMIN_ASPECT_EDIT, AUTHORITY_ADMIN_ASPECT_VIEW, AUTHORITY_ADMIN_BPN_DEPLOY, AUTHORITY_ADMIN_BPN_EDIT, AUTHORITY_ADMIN_BPN_TRIGGER_INTENT, AUTHORITY_ADMIN_BPN_VIEW, AUTHORITY_ADMIN_BULK_IMPORT_JOB_EDIT, AUTHORITY_ADMIN_BULK_IMPORT_JOB_VIEW, AUTHORITY_ADMIN_CARD_EDIT, AUTHORITY_ADMIN_CARD_VIEW, AUTHORITY_ADMIN_CONTENT_MANAGEMENT_DELETE, AUTHORITY_ADMIN_CONTENT_MANAGEMENT_EDIT, AUTHORITY_ADMIN_CONTENT_MANAGEMENT_VIEW, AUTHORITY_ADMIN_CONVERSATION_DESIGN_EDIT, AUTHORITY_ADMIN_CONVERSATION_DESIGN_VIEW, AUTHORITY_ADMIN_DOMAIN_VIEW, AUTHORITY_ADMIN_NLU_ROUTE_EDIT, AUTHORITY_ADMIN_NLU_ROUTE_VIEW, AUTHORITY_ADMIN_ONTO_EDIT, AUTHORITY_ADMIN_ONTO_VIEW, AUTHORITY_ADMIN_ORCHESTRATOR_VIEW, AUTHORITY_ADMIN_SEMNET_CONFIG_EDIT, AUTHORITY_ADMIN_SEMNET_DOCUMENT_DELETE, AUTHORITY_ADMIN_SEMNET_DOCUMENT_EDIT, AUTHORITY_ADMIN_SEMNET_DOCUMENT_VIEW, AUTHORITY_ADMIN_SEMNET_TRANSDUCER_EDIT, AUTHORITY_ADMIN_UI_PATH_EDIT, AUTHORITY_ADMIN_UI_PATH_VIEW, AUTHORITY_ADMIN_VIEW, AUTHORITY_BOT_NETWORK_EDIT, AUTHORITY_BOT_NETWORK_VIEW, AUTHORITY_CONVERSATION_EXPORT, AUTHORITY_CONVERSATION_OBSERVE, AUTHORITY_CONVERSATION_START, AUTHORITY_GLOSSARY_EDIT, AUTHORITY_GLOSSARY_VIEW, AUTHORITY_JOURNEY_VIEW, AUTHORITY_METRICS_VIEW, AUTHORITY_MISCLASSIFICATION_ANNOTATION, AUTHORITY_NPS_ANALYTICS_VIEW, AUTHORITY_PUBLISH_PREVIEW_EDIT, AUTHORITY_PUBLISH_PREVIEW_VIEW, AUTHORITY_RESPONSE_POOL_EDIT, AUTHORITY_RESPONSE_POOL_VIEW, AUTHORITY_RUN_THE_WORKFLOW, AUTHORITY_SENTIENT_EDIT, AUTHORITY_SENTIENT_VIEW, AUTHORITY_TABULAR_ADD, AUTHORITY_TABULAR_EDIT, AUTHORITY_TABULAR_VIEW, AUTHORITY_TRAINING_EDIT, AUTHORITY_TRAINING_REAL_CONVERSATION, AUTHORITY_TRAINING_TEST, AUTHORITY_TRAINING_TRAIN, AUTHORITY_TRAINING_VIEW, AUTHORITY_USER |
| Power User           | AUTHORITY_ACTIVE_CONVERSATION_VIEW, AUTHORITY_ADMIN_BPN_VIEW, AUTHORITY_ADMIN_BULK_IMPORT_JOB_VIEW, AUTHORITY_ADMIN_CONVERSATION_DESIGN_VIEW, AUTHORITY_ADMIN_DOMAIN_VIEW, AUTHORITY_ADMIN_ORCHESTRATOR_VIEW, AUTHORITY_ADMIN_VIEW, AUTHORITY_BOT_NETWORK_VIEW, AUTHORITY_CONVERSATION_EXPORT, AUTHORITY_CONVERSATION_OBSERVE, AUTHORITY_CONVERSATION_START, AUTHORITY_GLOSSARY_VIEW, AUTHORITY_JOURNEY_VIEW, AUTHORITY_METRICS_VIEW, AUTHORITY_MIND_VIEW, AUTHORITY_MIND3D_VIEW, AUTHORITY_NPS_ANALYTICS_VIEW, AUTHORITY_ORCHESTRATOR_VIEW, AUTHORITY_PROCESS_OPTIMIZATION_VIEW, AUTHORITY_PUBLISH_PREVIEW_EDIT, AUTHORITY_PUBLISH_PREVIEW_VIEW, AUTHORITY_RESPONSE_POOL_VIEW, AUTHORITY_RUN_THE_WORKFLOW, AUTHORITY_USER                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| RBAC Administrator   | AUTHORITY_ADMIN_ORCHESTRATOR_VIEW, AUTHORITY_ADMIN_RBAC, AUTHORITY_ADMIN_USER_EDIT, AUTHORITY_ADMIN_USER_VIEW, AUTHORITY_ADMIN_VIEW, AUTHORITY_USER                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |



## Roles Used with Third-Party Gateways {% #GatewayRolesAuthorities %}

ServiceNow, Microsoft Teams, and other third-party tools can interact with Amelia using gateways. While there is no gateway service role, there is a global user group for gateways. It's called Global Gateway Service. It includes default roles and authorities for Agents and End Users. It also includes these authorities:

*The Global Gateway Service User Group Authorities*

|User Group | Authorities                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Global Gateway Service | From AGENT Role Authorities:<br>AUTHORITY_ACTIVE_CONVERSATION_VIEW, AUTHORITY_CONVERSATION_OBSERVE, AUTHORITY_CONVERSATION_PICKUP, AUTHORITY_CONVERSATION_TRANSFER, AUTHORITY_CONVERSATION_TRANSFER_TO_AMELIA, AUTHORITY_JOURNEY_VIEW, AUTHORITY_NPS_ANALYTICS_VIEW, AUTHORITY_ORCHESTRATOR_VIEW, AUTHORITY_SENTIENT_VIEW, AUTHORITY_USER, AUTHORITY_VIEW_TAG<br><br>From END USER Role Authorities:<br>AUTHORITY_CONVERSATION_START, AUTHORITY_USER<br><br>Additional Role Authorities:<br>AUTHORITY_CONVERSATION_OBSERVE, AUTHORITY_CONVERSATION_PICKUP, AUTHORITY_CONVERSATION_START AUTHORITY_CONVERSATION_STEAL, AUTHORITY_CONVERSATION_TRANSFER, AUTHORITY_CONVERSATION_TRANSFER_TO_AMELIA AUTHORITY_GATEWAY_SERVICE, AUTHORITY_USER_OVERRIDE |

To see the global user group, your user account will need appropriate roles and authorities. See the [Authorities List topic](B01-02_0600-Authorities-List.md) for details about specific authorities.

>Do not add individual user accounts to the Global Gateway Service group. Do not assign the AUTHORITY_GATEWAY_SERVICE to regular users and administrators. And do not change the Global Gateway Service user group unless told to do so by Amelia staff.{style="warning"}


## Add Roles {% #AddRoles %}

To add a role:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. Click the **+ Add New button** in the left-side panel. A New Role tab workspace will display on the right side of your screen.

4. Configure the New Role workspace by adding authorities and a role name.

5. Click the **Save button** to save the new role. Additional tabs will display.

> When you add or delete an authority, the authority name appears in the Added or Deleted tab, respectively. Click the Save button to move an added authority to the Existing tab and/or to delete any authority listed in the Delete tab. All changes are applied ONLY after they're saved.


## Edit Roles {% #EditRoles %}

To edit a role:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. Click a role listed in the left-side panel. Or use the Search box at the top of the panel to filter the list of roles. When selected, the role tab workspace will display on the right side of your screen.

4. Edit the role by adding or deleting authorities.

5. Click the **Save button** in the tab workspace to save your changes.

> When you add or delete an authority, the authority name appears in the Added or Deleted tab, respectively. Click the Save button to move an added authority to the Existing tab and/or to delete any authority listed in the Delete tab. All changes are applied ONLY after they're saved.


## Delete Roles {% #DeleteRoles %}

To delete a role:

{% include from="B01-02_0102-UsersAccess.md" element-id="B01-02_0102-UsersAccess_snippet" /%}

3. Click a role listed in the left-side panel. Or use the Search box at the top of the panel to filter the list of roles. When selected, the role tab workspace will display on the right side of your screen.

4. Click the **Delete button** in the tab workspace.

> When you add or delete an authority, the authority name appears in the Added or Deleted tab, respectively. Click the Save button to move an added authority to the Existing tab and/or to delete any authority listed in the Delete tab. All changes are applied ONLY after they're saved.



## More Resources

{% include from="B01-02_0102-UsersMoreResources.md" element-id="B01-02_0102-UsersMoreResources_snippet" /%}