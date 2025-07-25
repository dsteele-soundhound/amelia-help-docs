# Automations Management

## Introduction

When you enter the Automations module, you'll see the Browser workspace. 
{% include from="E02-01_0003-Browser-WS-Intro.md" element-id="E02-01_0003-Browser-WS-Intro_snippet" /%}

## What You'll Learn

In this topic, you'll learn how to:

* [Access the Browser workspace](#Browser).
* [Change workspaces](#Change).
* [Set the domain or client](#Domain).
* [Add or create a new folder](#AddFolder).
* [Rename an existing folder](#RenameFolder).
* [Set folder properties and permissions](#FolderProperties).
* [Delete a folder from the Browser workspace](#DeleteFolder).
* [Add or create a new automation using Generate with AI](#AddAutomationAI).
* [Add or create a new automation using the Automation Studio](#AddAutomationStudio).
* [Search for an automation](#Search).
* [Rename an existing automation](#RenameAutomation).
* [Edit an automation](#EditAutomation).
* [Approve an automation](#ApproveAutomation).
* [Execute an automation](#ExecuteAutomation).
* [Delete an automation](#DeleteAutomation).
* [Clone an automation](#Clone).
* [Move an automation to a new folder](#MoveAutomation).
* [Compare two versions of an automation](#DiffCompare).
* [Export and Import an automation](#ExportImport).
* [Make best use of the Automations module and Browser](#BestPractices).

##Access the Browser Workspace {% #Browser %}

After login, you'll enter the Amelia application. From here, you'll navigate to Autonomics.

By default, You'll enter Autonomics through the Tasks module (Tasks Inbox workspace). To use automations, you must navigate to the Automations module (Browser workspace).

To go to the Browser workspace:

1. Using Amelia's **top left mai**n menu, click **Autonomics**.

2. Using the Autonomics **top left main** menu, click **Autonomics**.

   ![E02-01_0003-Autonomics-Menu-Option](E02-01_0003-Autonomics-Menu-Option.png){width="900" style="block"}

   *The Autonomics Top Left Main Menu Showing Autonomics Highlighted*

Once inside the Automations module, you'll see the Browser workspace. This is your library of automations. Automations nest in folders by domain.   

##Change Workspaces {% #Change %}

{% include from="E02-01_0003-Browser-Menu-Change.md" element-id="E02-01_0003-Browser-Menu-Change_snippet" /%}

##Set the Domain or Client {% #Domain %}

To choose a domain, or switch to another client, you'll use the Domain dropdown.

![E02-01_0004-Domain-Dropdown](E02-01_0004-Domain-Dropdown.png){width="900" style="block"}

*The Browser Workspace Showing Domain Dropdown Highlighted*

##Add a New Folder {% #AddFolder %}

Organizing your automations is crucial for quick and easy access. You can create new folders and sub-folders in the Browser workspace.

### Add a New Folder to the Browser Workspace

To create a new top-level folder:

1. At the center of the Browser workspace, click the **Add New Folder** button. The Add New Folder button is replaced with a field where you can type the name of your new folder.

2. In the open field, enter a name for your new folder.

3. Click the Check ( ![Check Mark-Blue-Btn-Automations_Browser](Check Mark-Blue-Btn-Automations_Browser.png){width="25" style="inline"}) button. Your new folder shows in the folder list, sorted alphabetically.

   > Alternatively, click the Cancel ( ![Cancel-X-Blue-Btn-Automations-Browser](Cancel-X-Blue-Btn-Automations-Browser.png){width="25" style="inline"}) button to cancel the operation.

### Add a New Sub-folder

To create a new sub-folder inside a top-level folder:

1. Find and hover over the folder where you want to add the sub-folder.

2. At the right of the workspace, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Create Folder**.

4. In the **Type Folder Name** field, enter a name for your new sub-folder.

5. Click the **Check** ( ![Check Mark-Blue-Btn-Automations_Browser](Check Mark-Blue-Btn-Automations_Browser.png){width="25" style="inline"}) button. Your new sub-folder shows inside the folder, sorted alphabetically.

   > Alternatively, click the Cancel ( ![Cancel-X-Blue-Btn-Automations-Browser](Cancel-X-Blue-Btn-Automations-Browser.png){width="25" style="inline"}) button to cancel the operation.

##Rename an Existing Folder or Sub-folder {% #RenameFolder %}

It's important to keep your automations organized so that you can find them easily. Sometimes, you may need to rename a folder or sub-folder when processes change or teams reorganize. You can rename your folders and sub-folders in the Browser workspace.

To rename an existing folder or sub-folder:

1. Hover over the folder or sub-folder.

2. At the right of the workspace, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Rename**.

4. Adjust the name of the folder or sub-folder as needed.

5. Click the **Check** ( ![Check Mark-Blue-Btn-Automations_Browser](Check Mark-Blue-Btn-Automations_Browser.png){width="25" style="inline"}) button.

   > Alternatively, click the Cancel ( ![Cancel-X-Blue-Btn-Automations-Browser](Cancel-X-Blue-Btn-Automations-Browser.png){width="25" style="inline"}) button to cancel the operation.

##Set Folder Properties and Permissions {% #FolderProperties %}

Ensuring that all groups and key players have permission to access and update automations is essential for smooth operations. To do this, you'll use folder properties.

To update folder properties and permissions:

1. Hover over the folder or sub-folder.

2. At the right of the workspace, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Properties**.

   Open this dropdown to learn about the elements you'll see when setting or updating folder properties.
   
   
   <chapter title="Properties Elements" collapsible="true" level="5">
         Selecting Properties opens a panel at the right of the page. Clicking the + Add New Group button opens the Add New Group panel to the right of the Properties panel.
      
   | Element                                                                                                                 | Default      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   |-------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Properties Panel                                                                                                        |              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
   | Folder Permissions                                                                                                      |              | On first entry into the Properties panel the Folder Permissions table shows unpopulated. When populated, Folder Permissions shows as a table. The table has rows listing the group name and the chosen access permissions, along with a value indicating the number of permissions set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
   | + Add New Group button                                                                                                  |              | Clicking the + Add New Group button displays the Add New Group panel. Here you can search for a group to apply access permissions on a specific folder or sub-folder. Click the Plus ( ![Plus-Btn-Automations_Browser](Plus-Btn-Automations_Browser.png){width="25" style="inline"}) button alongside a group name to apply your selection. Click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button on the right of the search bar to clear your search. Once applied, you can set the level of access using the Folder Permissions table. Clicking the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button in the top right of the Add New Group panel closes the panel. |
   | Name                                                                                                                    |              | On first entry into the Properties panel the Name shows unpopulated. Selecting and setting a new group populates this field with the name of the group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
   | Access                                                                                                                  | Read+Execute | On first entry into the Properties panel Access shows unpopulated. Selecting and setting a new group populates this field. By default access shows as Read+Execute only. Clicking the dropdown shows the following additional options. You can select one or many options here. * Read+Execute: TBA. * Edit+Read+Execute: TBA. * Approve: TBA. * Admin: TBA.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   | Delete ( ![Delete2-Btn-DEB_Inside_Properties](Delete2-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button |              | Applies to the table of folder permissions. Clicking the Delete ( ![Delete2-Btn-DEB_Inside_Properties](Delete2-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button on a row clears the Name and Access set for that row.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Save button                                                                                                             |              | Stores the selected properties but doesn't close the panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Close button                                                                                                            |              | Closes the panel and returns your focus to the Browser workspace. If you haven't saved, your changes clear without saving.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   | Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button          |              | Closes the Properties panel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   [Properties Elements]
      
      
   </chapter>

4. Click the **+ Add New Group** button.

5. In the search field, enter a group name.

6. Using the returned search results, click the **Plus** ( ![Plus-Btn-Automations_Browser](Plus-Btn-Automations_Browser.png){width="25" style="inline"}) button alongside a group name. This adds your chosen group to the Folder Permissions table.

7. In the **Folder Permissions** table, open the group's **Access** dropdown and make a selection. You can select one or more options here.

   ![E02-01_0004-Folder-Prop-Permissions](E02-01_0004-Folder-Prop-Permissions.png){width="900" style="block"}

   *Folder Properties and Permissions Showing Access Dropdown Open*

8. Click **Save**.

##Delete a Folder {% #DeleteFolder %}

It's important to keep your automations organized so that you can find them easily. Sometimes, you may need to delete a folder or sub-folder when processes change or teams reorganize. You can delete your folders and sub-folders in the Browser workspace.

To delete an existing folder or sub-folder:

1. Hover over the folder or sub-folder.

2. At the right of the workspace, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Delete**.

4. In the confirmation modal, click **Delete**.

> Alternatively, click the Close button to cancel the operation. Clicking the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button at the top right, closes the modal without deleting the folder or sub-folder.

##Add or Create an Automation Using Generate with AI {% #AddAutomationAI %}

The Automations module's core function is building automations. Normally, it takes time and knowledge to create the first version of an automated process. Generate with AI makes prototyping and development work easy. In just moments, you have an automation and a starting point to iterate, build on, and improve.

To create an automation using Generate with AI:

1. Hover over a folder or sub-folder.

2. At the right of the workspace, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Generate with AI**.

   In the new Generate with AI workspace, you'll see two panels. On the left side, there's a chat interface, and on the right side, there's a preview panel. You can input your prompt on the left, and based on your prompt, the automation shows on the right.

   ![E02-01_0004-Gen-with-AI-Landing](E02-01_0004-Gen-with-AI-Landing.png){width="900" style="block"}

   *The Generate with AI Workspace*

4. In the message box at the bottom of the conversation area, enter your prompt.

   > You can copy and paste your prompt directly from a Knowledge. Or, you can enter a prompt from scratch.

   > It's also possible to generate an automation directly from the Knowledge module. To learn more see the TBA topic.

5. Click **Send** ( ![Send-Btn-Gen_with_AI](Send-Btn-Gen_with_AI.png){width="25" style="inline"}). Your automation generates in the Generated Automation panel on the right.

   ![E02-01_0004-Gen-With-AI-Automation](E02-01_0004-Gen-With-AI-Automation.png){width="900" style="block"}

   *The Generate with AI Workspace Showing the Generated Automation*

You can enter additional prompts in the message area to refine or modify your automation. Clicking the Regenerate button rebuilds the automation using AI. Alternatively, click Edit to modify your automation using the Automation Studio. To learn more about the Automation Studio, see the TBA topic.

> Click the Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button in either panel to return to the Browser workspace.








##Add or Create a New Automation Using the Automation Studio {% #AddAutomationStudio %}

Automation Studio is where you build out your automations manually using actions or a combination of actions and generative AI. Minimal technical knowledge is required to build a basic automation. So, non-technical staff can use placeholders with the final configuration handled by more technical staff.

To create an automation using the Automation Studio:

1. Hover over a folder or sub-folder.

2. At the right of the workspace, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Create Automation**.

   When you open Automation Studio, you'll see an Actions palette on the left of the canvas and the Properties panel open. The Properties panel shows the default settings and applies to the entire automation, not the individual actions.

   > Select an individual action to open the properties for that action.

   To learn more about when and how to use the Automation Studio, see the TBA topic.

   ![E02-01_0004-Automation-Studio-Landing](E02-01_0004-Automation-Studio-Landing.png){width="900" style="block"}

   *The Automation Studio*

4. Open these dropdowns to learn more about the automation's Properties panel and the elements inside this panel.


<chapter title="Core Tab Elements" collapsible="true" level="5">
   The Core tab defines basic information about your automation.
   
   ![E02-01_0004-Automation-Prop-Panel-Core](E02-01_0004-Automation-Prop-Panel-Core.png){width="600" style="block"}

   *The Properties Panel Showing Core Tab Selected*

   *Core Tab Elements*
   
   |            Element             |  Default  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
   |--------------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Name                           |           | Use structured, meaningful and descriptive names for your automations. An automation's name should reflect the automation's purpose. Avoid ambiguous names and words like newest or latest. As a best practice, we encourage you to use the version number in your automation's name. When adding components, name them as COMPONENT: Component Name, where Component Name is the unique name of your component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   | Live                           | Unchecked | An automation can be either live or inactive (not live). Select this checkbox to mark your automation as live. Mark your automation as live, unless it's a disabled change request. You can only run live automations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   | Template                       | Unchecked | Select this checkbox to mark your automation as a template. When enabled, your automation functions as a template. An automation template is a reusable automation. Templates let you quickly and efficiently build new automations without re-entering duplicate information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Client                         |           | The domain name or client name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   | Category                       |           | The name of the domain sub-subfolder used to store the automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
   | Tags                           |           | Select a pre-existing tag from the dropdown. You can then use this pre-formatted automation as a guide to other automations. This is another great way to save development time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   | Run As                         | Inherit   | This setting controls the security access for your automations. By default, Autonomics executes all automations in a security context with limited access. This means automations from one tenant on a multi-tenant instance can't access data from other tenants. * Inherit: This means the automation uses the value from the automation Properties for the Client where the automation resides. * Caller: This means that if Autonomics calls the automation from another automation, it executes the security context of the calling automation. This is useful when automations located in individual tenants reuse shared components stored under another client. In that case, shared components will have access to data from the calling tenant. * Owner: This means the automation executes using the security context of the Client it's stored in. This is useful in cases like privilege escalation. So, automations located in individual tenants can call shared components from other clients to perform some actions on behalf of that shared tenant. |
   | Execution Mode                 | Manual    | {% include from="E02-01_0004-Automation-Execution-Mode.md" element-id="E02-01_0004-Automation-Execution-Mode_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Execution Group                |           | Execution groups route automation executions to specific automation instances. Make a selection from the dropdown to set an execution group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   | Equivalent Engineer Time (min) | 1         | Here you'll specify the time it takes for a human to complete the task as it's being done by the automation. This factors into reporting, and calculating saved time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
   | Concurrency Limit              |           | {% include from="E02-01_0004-Automation-Concurrency-Limit.md" element-id="E02-01_0004-Automation-Concurrency-Limit_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   | If Limit Exceeds               | Inherit   | {% include from="E02-01_0004-Automation-If-Limit-Exceeds.md" element-id="E02-01_0004-Automation-If-Limit-Exceeds_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
   | Timeout                        | 24 Hours  | {% include from="E02-01_0004-Automation-Timeout.md" element-id="E02-01_0004-Automation-Timeout_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   | Purpose                        | Diagnosis | {% include from="E02-01_0004-Automation-Purpose.md" element-id="E02-01_0004-Automation-Purpose_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   | Notes                          |           | Enter a brief description outlining the purpose of your automation. Include RFC IDs, version updates, or specific instructions for using the automation in these notes. This field is optional.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   
   
   
   </chapter>

   <chapter title="Matchers Tab Elements" collapsible="true" level="5">
   This tab is where you'll build out your matcher. Here you'll list task parameters used to match and then run the current automation automatically.
   
   To build a matcher, you create an expression using groups of rules connected by logical operators. Rules are a combination of parameters. By matching the parameters in your matcher, you can auto-run the selected automation. For example, you could use a matcher to auto-run your automation on new tickets where the subject shows as "Urgent."
   
   ![E02-01_0004-Automation-Prop-Panel-Match](E02-01_0004-Automation-Prop-Panel-Match.png){width="600" style="block"}

   *The Properties Panel Showing Matchers Tab Selected and an Expression Added*

   *Matchers Tab Elements*
   
   |                                                                           Element                                                                           | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   |-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Rules Preview                                                                                                                                               |         | Shows a preview of your matcher expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Edit ( ![Edit1-Btn-Automation-Studio-Prop-Panel](Edit1-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}) button                             |         | Opens an Edit Matchers modal where you can edit your matcher expression. Click Ok to save your updates. Click Cancel or Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) to exit the modal without saving.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   | Expression                                                                                                                                                  |         | Remember, to build a matcher, you create an expression using groups of rules connected by logical operators. And rules are a combination of parameters. When you open the Matchers tab, you'll see the rules preview area followed by 3 fields. These fields (or parameters) combined form a rule. * Parameter 1: The first dropdown lets you select a field name. This field name comes from the Tasks module. * Parameter 2: The second dropdown sets a logical operator (Equals, Not Equals, Contains, or Not Contains). * Parameter 3: The last field lets you set the value. Depending on what you chose as your field name, the value can either be a dropdown or a text field. `{field} {logical operator} {value}` You're encouraged to use these rules to build your matchers. Once you've added your second rule, the rules preview area updates to show your expression. As you change and update your rules, the rules preview area updates. Using the Automation Studio top toolbar, click Save ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}) to store your Matcher. |
   | Logical Operators                                                                                                                                           | AND     | These logical operators show as an AND/OR choice chip. To build a matcher, you create an expression using groups of rules connected by logical operators. This logical operator first appears when you add your second rule. You can add more, or change the logical operator by adding more groups to your expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
   | Add Expression ( ![Add-Expression-Btn-Automation_Studio_Prop_Panel](Add-Expression-Btn-Automation_Studio_Prop_Panel.png){width="25" style="inline"}) button |         | Adds another rule to your expression. Remember, rules consist of 3 fields or parameters ({field} {logical operator} {value}).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   | Add Group ( ![Add-Group-Btn-Automation_Studio_Prop_Panel](Add-Group-Btn-Automation_Studio_Prop_Panel.png){width="25" style="inline"}) button                |         | Adds another group to your expression. You'll see a new set of And/Or logical operators under your original group. Add rules to continue building your expression out.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Delete ( ![Delete2-Btn-DEB_Inside_Properties](Delete2-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button                                     |         | When positioned alongside a rule, this button removes the associated rule. When positioned in the header area of a group, this button removes the associated group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   
   
   </chapter>

   <chapter title="Connections Tab Elements" collapsible="true" level="5">
   You'll use this tab to set up connection information used by Automation Studio actions. For example, connection information used by the Update Task action.
   
   Connections should use a backup to the secondary when available. If a backup server is available for a connection, you should configure the connection to use it.
   
   ![E02-01_0004-Automation-Prop-Panel-Con](E02-01_0004-Automation-Prop-Panel-Con.png){width="600" style="block"}

   *The Properties Panel Showing Connections Tab Selected and a Group Added*

   *Connections Tab Elements*
   
   |                                                                Element                                                                | Default |                                                                                                                                                                                                      Description                                                                                                                                                                                                       |
   |---------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Connections Tab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |||
   | + Create New Connection Group button                                                                                                  |         | Opens the Create New Connection Group modal where you can add a new connection group.                                                                                                                                                                                                                                                                                                                                  |
   | Edit ( ![Edit2-Btn-Automation-Studio-Prop-Panel](Edit2-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}) button       |         | Opens the Edit Connection Group modal where you can update the details of your saved connection. After making changes, click the Edit button. Click Cancel or Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) to exit the modal without saving.                                                                                                                |
   | Delete ( ![Delete3-Btn-Automation-Studio-Prop-Panel](Delete3-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}) button |         | Removes the connection group. Take care when considering deleting a connection group. It can't be undone, and there's no confirmation modal for this process.                                                                                                                                                                                                                                                          |
   | Create New/Edit Connection Group Modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |||
   | Name                                                                                                                                  |         | Enter a descriptive name for your connection group. Connection names should reflect the name or type of machine connected to your automation. If your automation has linked components, share connection names between the linked components for connection sharing. And if you have more than one connection to a single machine, include the connection protocol (SSH, ISH) and the username in the connection name. |
   | Connection from Context                                                                                                               | Checked | Adding connections manually isn't currently supported. Set by Autonomics based on the provided protocol type and hostname/IP address.                                                                                                                                                                                                                                                                                       |
   | Connection Type                                                                                                                       | DB2     | Select a connection from the dropdown list. If a connection doesn't appear in the list, you can add a connection using the Connections module.                                                                                                                                                                                                                                                 |
   | Host                                                                                                                                  | Auto    | The host for the connection. Options include: * Auto: TBA * From Variable: TBA                                                                                                                                                                                                                                                                                                                                         |
   
   
   </chapter>

   <chapter title="Variables Tab Elements" collapsible="true" level="5">
   Here you'll define new variables. Constant variables are set and available to automations before runtime.
   
   ![E02-01_0004-Automation-Prop-Panel-Variab](E02-01_0004-Automation-Prop-Panel-Variab.png){width="600" style="block"}

   *The Properties Panel Showing Variables Tab Selected*

   *Variables Tab Elements*
   
   | Element                                                                                                                               | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   |---------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Variables Tab                                                                                                                         |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   | Create New Variable button                                                                                                            |           | Click to show the Create New Variable modal where you can create a new variable.                                                                                                                                                                                                                                                                                                                                                                                                                            |
   | Search                                                                                                                                |           | Helps to navigate and search through your created variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Name                                                                                                                                  |           | This is the first column of the variables table. Here you'll see the name of your variable. By default, variables sort by the Name column using an ascending sort order. Clicking the column header changes the sorting direction.                                                                                                                                                                                                                                                                          |
   | Scope                                                                                                                                 |           | This is TBA.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Edit ( ![Edit2-Btn-Automation-Studio-Prop-Panel](Edit2-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}) button       |           | Shows when you hover over a created variable listed in the variable table. Clicking Edit ( ![Edit2-Btn-Automation-Studio-Prop-Panel](Edit2-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}) shows the Edit Variable modal where you can update the details of your saved variable. After making changes, click the Apply button. Click Cancel or Close ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) to exit the modal without saving. |
   | Delete ( ![Delete3-Btn-Automation-Studio-Prop-Panel](Delete3-Btn-Automation-Studio-Prop-Panel.png){width="25" style="inline"}) button |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   | Create New/Edit Variable Modal                                                                                                        |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   | Name                                                                                                                                  |           | Enter a descriptive and meaningful name for your variable. This is a required field.                                                                                                                                                                                                                                                                                                                                                                                                                        |
   | Fail if Absent                                                                                                                        | Unchecked | When unchecked, the automation triggers only if a value exists in the variable. When checked, the automation triggers regardless of whether a value exists.                                                                                                                                                                                                                                                                                                                                                 |
   | Validation                                                                                                                            |           | Enter a RegEx (regular expression) pattern to validate the variable value.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   | Default                                                                                                                               |           | Enter a value to assign to the variable if the variable output is null.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   | Enable Value Masking                                                                                                                  | Unchecked | When unchecked, Autonomics won't mask sensitive data contained in the variable. When checked, Autonomics masks sensitive data.                                                                                                                                                                                                                                                                                                                                                                                        |
   | Visibility                                                                                                                            | Local     | Sets the visibility. Options include: * Input/Output: TBA * Input: TBA * Output: TBA * Local: TBA * Transient: TBA                                                                                                                                                                                                                                                                                                                                                                                          |
   | Notes                                                                                                                                 |           | Add any notes or comments related to your variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   | Field                                                                                                                                 |           | Select a Tasks module field name using the dropdown. This is a required field.                                                                                                                                                                                                                                                                                                                                                                                                       |
   | Match                                                                                                                                 |           | Enter a RegEx pattern to match to the output from the Field specified above.                                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Replace                                                                                                                               |           | Replaces any matching subsequences in the input sequence with the specified replacement string. See[Oracle's Class Matcher documentation (replaceAll)](https://docs.oracle.com/javase/9/docs/api/java/util/regex/Matcher.html#replaceAll-java.lang.String-) for more information.                                                                                                                                                                                                                           |
   
   
   </chapter>

   <chapter title="Scripts Tab Elements" collapsible="true" level="5">
   This tab lets you set a script for use with your automation.
   
   ![E02-01_0004-Automation-Prop-Panel-Scripts](E02-01_0004-Automation-Prop-Panel-Scripts.png){width="600" style="block"}

   *The Properties Panel Showing Scripts Tab Selected*

   *Script Tab Elements*
   
   | Element | Default | Description |
   |---------|---------|-------------|
   | Scripts |         | TBA         |
   

   </chapter>

   <chapter title="Approval Tab Elements" collapsible="true" level="5">
   The Approval tab shows the approval history for your automations. An automation's status can show as Submitted, Approved, or Deprecated. When you get a new version of an automation approved, Autonomics deprecates prior versions.
   
   When you update an automation, the Submit Current button appears on the Approval tab. Clicking this button brings up the Approval Request modal. Here, you'll find a Notes field where you can describe the changes made to your automation. Submitting an approval request updates the automation's status to Submitted and adds a task to the Tasks module. This task will be assigned, and the workflow will be reviewed.
   
   ![E02-01_0004-Automation-Prop-Panel-Approv](E02-01_0004-Automation-Prop-Panel-Approv.png){width="600" style="block"}

   *The Properties Panel Showing Approval Tab Selected*

   *Approval Tab Elements*
   
   |                                                           Element                                                           | Default |                                                                                                                                                                                     Description                                                                                                                                                                                      |
   |-----------------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Approval Tab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |||
   | Submit Current button                                                                                                       |         | Sends the version of the automation for approval.                                                                                                                                                                                                                                                                                                                                    |
   | Version                                                                                                                     |         | The version number of the automation.                                                                                                                                                                                                                                                                                                                                                |
   | Submitted At                                                                                                                |         | {% include from="E02-01_0004-Automation-Submit-At.md" element-id="E02-01_0004-Automation-Submit-At_snippet" /%}                                                                                                                                                                                                                                                                 |
   | Submitted By                                                                                                                |         | {% include from="E02-01_0004-Automation-Submitter-Name.md" element-id="E02-01_0004-Automation-Submitter-Name_snippet" /%}                                                                                                                                                                                                                                                       |
   | Submitter Notes                                                                                                             |         | {% include from="E02-01_0004-Automation-Submitter-Notes.md" element-id="E02-01_0004-Automation-Submitter-Notes_snippet" /%}                                                                                                                                                                                                                                                     |
   | Reviewer Notes                                                                                                              |         | {% include from="E02-01_0004-Automation-Reviewer-Note.md" element-id="E02-01_0004-Automation-Reviewer-Note_snippet" /%}                                                                                                                                                                                                                                                         |
   | Status                                                                                                                      |         | Shows the approval status of the automation. An automation's status can show as Submitted, Approved, or Deprecated. Visual indicators are a quick way to see if an automation is approved or not. Approved automations have a green checkmark indicator.                                                                                                                             |
   | ![Chevron-Btn-Automation_Studio_Prop_Panel](Chevron-Btn-Automation_Studio_Prop_Panel.png){width="25" style="inline"} button |         | To learn more about your automation, open the dropdown ( ![Chevron-Btn-Automation_Studio_Prop_Panel](Chevron-Btn-Automation_Studio_Prop_Panel.png){width="25" style="inline"}) associated with an automation version.                                                                                                                                                                |
   | Automation Details                                                                                                          |         | As you develop and improve your automations, your automations will have new versions. Each version of your automation shows as a separate row on the Approval tab. Automation details show when you open the dropdown ( ![Chevron-Btn-Automation_Studio_Prop_Panel](Chevron-Btn-Automation_Studio_Prop_Panel.png){width="25" style="inline"}) associated with an automation version. |
   | Name                                                                                                                        |         | The name of the automation.                                                                                                                                                                                                                                                                                                                                                          |
   | Current Version                                                                                                             |         | The version number of the current version being viewed. For example, if you open the automation details for version 3 of your automation, you'll see 3 here.                                                                                                                                                                                                                         |
   | Purpose                                                                                                                     |         | Shows the purpose of the automation. {% include from="E02-01_0004-Automation-Purpose.md" element-id="E02-01_0004-Automation-Purpose_snippet" /%}                                                                                                                                                                                                                                |
   | Status                                                                                                                      |         | {% include from="E02-01_0004-Automation-Status.md" element-id="E02-01_0004-Automation-Status_snippet" /%}                                                                                                                                                                                                                                                                       |
   | Submitter Notes                                                                                                             |         | {% include from="E02-01_0004-Automation-Submitter-Notes.md" element-id="E02-01_0004-Automation-Submitter-Notes_snippet" /%}                                                                                                                                                                                                                                                     |
   | Submitted By                                                                                                                |         | {% include from="E02-01_0004-Automation-Submitter-Name.md" element-id="E02-01_0004-Automation-Submitter-Name_snippet" /%}                                                                                                                                                                                                                                                       |
   | Submitted At                                                                                                                |         | {% include from="E02-01_0004-Automation-Submit-At.md" element-id="E02-01_0004-Automation-Submit-At_snippet" /%}                                                                                                                                                                                                                                                                 |
   | Task                                                                                                                        |         | The Tasks module Task ID associated with the request for approval. Click on the Task ID to see more details about the task. Once the task is assigned, it can be approved.                                                                                                                                                                                    |
   | Reviewed By                                                                                                                 |         | The name of the person who reviewed the automation for approval.                                                                                                                                                                                                                                                                                                                     |
   | Reviewed At                                                                                                                 |         | The date of the review.                                                                                                                                                                                                                                                                                                                                                              |
   | Submit Current Modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |||
   | Note                                                                                                                        |         | Enter an optional note supporting your request for approval.                                                                                                                                                                                                                                                                                                                         |
   
   
   
   </chapter>

   <chapter title="Fail To Tab Elements" collapsible="true" level="5">
   Here you'll set what automation to call if the current automation fails.
   
   ![E02-01_0004-Automation-Prop-Panel-Fail](E02-01_0004-Automation-Prop-Panel-Fail.png){width="600" style="block"}

   *The Properties Panel Showing Fail To Tab Selected*

   *Fail To Tab Elements*
   
   |                                                Element                                                | Default |                                                                                                                  Description                                                                                                                   |
   |-------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Automation                                                                                            |         | Click Choose to select the automation that you'll call if your current automation fails. Clicking Choose opens the Choose Automation modal. From here you can navigate the folder levels to select one automation.                             |
   | Choose button                                                                                         |         | Opens the Choose Automation modal where you can select one automation. Click Select to link this automation to your original automation.                                                                                                       |
   | Choose Automation modal                                                                                                                                                                                                                                                                                                                                        |||
   | Automation                                                                                            |         | Here you can navigate the folder levels to select one automation.                                                                                                                                                                              |
   | Purpose                                                                                               |         | Shows the purpose of the automation. {% include from="E02-01_0004-Automation-Purpose.md" element-id="E02-01_0004-Automation-Purpose_snippet" /%}                                                                                          |
   | Live                                                                                                  |         | {% include from="E02-01_0004-Automation-Live.md" element-id="E02-01_0004-Automation-Live_snippet" /%}                                                                                                                                     |
   | Approved                                                                                              |         | Shows the approval status of the automation. Visual indicators are a quick way to see if an automation is approved or not. Approved automations have a green checkmark indicator. Unapproved automations have a gray no entry-style indicator. |
   | Change button                                                                                         |         | Opens the Choose Automation modal where you can change out your currently selected automation with another. Click Select to link this automation to your original automation.                                                                  |
   | ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"} button |         | Clears the selected automation. The Choose button reappears so that you can select a new automation.                                                                                                                                           |
   | Variable Overrides                                                                                    |         | TBA                                                                                                                                                                                                                                            |
   | Connection Group Overrides                                                                            |         | TBA                                                                                                                                                                                                                                            |
   
      
   </chapter>

   <chapter title="Past Executions Tab Elements" collapsible="true" level="5">
   Here you'll see a list of your past executions for the viewed automation.
   
   If you select the execution, you're taken to the Execution view. If you click on the task ID, a new Task window opens with the task selected.
   
   ![E02-01_0004-Automation-Prop-Panel-PastExec](E02-01_0004-Automation-Prop-Panel-PastExec.png){width="600" style="block"}

   *The Past Executions Tab*

   *Past Executions Tab Elements*
   
   |  Element  | Default |                                                                         Description                                                                          |
   |-----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Status    |         | TBA                                                                                                                                                          |
   | Task      |         | TBA                                                                                                                                                          |
   | Executed  |         | By default, past executions sort by the Executed column using a descending sort order. Clicking a column header changes the sorting direction and/or column. |
   | Duration  |         | TBA                                                                                                                                                          |
   | Execution |         | TBA                                                                                                                                                          |
   
   </chapter>

   <chapter title="Linked Automations Tab Elements" collapsible="true" level="5">
   Here you can see linked automations associated with your automation.
   
   ![E02-01_0004-Automation-Prop-Panel-LinkedAut](E02-01_0004-Automation-Prop-Panel-LinkedAut.png){width="600" style="block"}

   *The Linked Automations Tab Tab*

   *Linked Automations Tab Elements*

| Element | Default | Description |
   |---------|---------|-------------|
   | Name    |         | TBA         |
   | Client  |         | TBA         |
   | Path    |         | TBA         |
   | Purpose |         | TBA         |
   | Version |         | TBA         |
   
   </chapter>

4. Drag and drop actions onto the canvas to build out your automation using individual actions. Or, click the **Generate** ( ![Generate-Btn-Automation_Studio](Generate-Btn-Automation_Studio.png){width="25" style="inline"}) button to generate the automation using AI.

5. In the **Generate Automation** modal message box, enter your prompt.

   > You can copy and paste your prompt directly from aKnowledge. Or, you can enter a prompt from scratch.

6. Click **Generate**.

   ![E02-01_0004-Automation-Studio-Generated](E02-01_0004-Automation-Studio-Generated.png){width="900" style="block"}

   *The Automation Studio Showing Generated Automation*

7. Click **Save** ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Search for an Automation {% #Search %}

Because you can organize your automations into folders and sub-folders, it can take time to find a specific automation. The Automations module has a search function to make it easier to find your automations.

To begin a search:

1. In the top right of the Browser workspace, find the **Search** field.

2. Enter your search term.

Autonomics starts showing search results as soon as you enter the first character. The results show using a table layout. The Automation column shows the automation's name and the automation's top-level folder. The remaining columns show the purpose and status of the automation. If Autonomics can't find a match, the result shows as Nothing Found.

> To clear a search, click the Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button alongside your search term.

##Rename an Existing Automation {% #RenameAutomation %}

Over time, your automations will change and evolve. This could result in the purpose of your automation evolving beyond its original name. If this happens, you might consider renaming your automation.

To rename your automation:

1. Find the automation to be renamed.

2. At the right of the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Edit**.

   > Alternatively, select an automation. The automation's details panel shows. Click the Edit button to open the Automation Studio.
4. Inside Automation Studio, find the mini toolbar at the top right of the canvas.

   ![E02-01_0004-Automation-Studio-Rght-TBar](E02-01_0004-Automation-Studio-Rght-TBar.png){width="900" style="block"}

   *The Automation Studio Showing Right-Side Toolbar Highlighted*

   To learn more about when and how to use the Automation Studio, see the TBA topic.
   
5. Click the **Properties** ( ![Properties-Btn-Automations_Studio_Rght-Tbar](Properties-Btn-Automations_Studio_Rght-Tbar.png){width="25" style="inline"}) button.

6. Select the **Core** tab if it's not already selected.

7. Edit the **Name** field as needed.

8. Click **Save** ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Edit an Automation {% #EditAutomation %}

Changes in your organization and team could impact your automations. This section gives insight into where and how to edit and update your automations. While there are a few ways to access the different elements and tools, you'll make most changes using the Automation Studio.

To learn more about when and how to use the Automation Studio, see the TBA topic.

To edit or update an automation:

1. Find the automation to be updated.

2. Update the automation from the automation's details panel:

   1. Select the automation. The automation's details panel shows.

      Open these dropdowns to learn more about the automation's details panel and the elements inside this panel.
   
   
   <chapter title="Details Panel Header Elements" collapsible="true" level="5">
      
   The details panel header is the first section you'll see. This dropdown displays the elements in this section and their purpose.
   
   ![E02-01_0004-Automation-Details-Panel-Header](E02-01_0004-Automation-Details-Panel-Header.png){width="600" style="block"}
   
   *The Details Panel Header Elements*
   
   | Element         | Default        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   |-----------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Creator         |                | The name of the person who created the automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   | Purpose         | Diagnosis      | {% include from="E02-01_0004-Automation-Purpose.md" element-id="E02-01_0004-Automation-Purpose_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   | Live            | No (Unchecked) | {% include from="E02-01_0004-Automation-Live.md" element-id="E02-01_0004-Automation-Live_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Path            |                | The progression of folders used to store the automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   | Client          |                | The name of the domain where the automation applies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   | Actions         |                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
   | Execute button  |                | Runs the automation. To execute your automation, you must have the Task ID. You'll find this TBA. You must also have runtime variables set. Click Ok to execute your automation, or Cancel to exit the process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
   | Edit button     |                | Takes you to the Automation Studio. From here, you can modify or update your automation manually or using generative AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   | Clone button    |                | Creates a copy of the currently selected automation. Clicking the Clone button opens the Clone Automation modal. From here, you'll select a name for your new automation. To clear the suggested name, click the Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button, then enter a new name. Click Create to finish the cloning process. Alternatively, click Cancel to stop the process. To learn more, see [Cloning an Automation](#Clone).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   | Diff button     |                | Opens a new workspace where you can see a side-by-side comparison of two versions of your automation. Use the dropdowns to set which version appears left and right. Use the Zoom In ( ![Zoom-In-Btn-Automations_Details_Panel](Zoom-In-Btn-Automations_Details_Panel.png){width="25" style="inline"}) and Zoom Out ( ![Zoom-Out-Btn-Automations_Details_Panel](Zoom-Out-Btn-Automations_Details_Panel.png){width="25" style="inline"}) buttons and see more or less detail. You can also choose to see the full list of changes made between the two versions by clicking List of Changes. On button-press, the List of Changes panel opens on the right with a table showing the change, the name applied to the new action and the type of action. Use the Open ( ![Open-Details-Btn-Automations-Diff](Open-Details-Btn-Automations-Diff.png){width="25" style="inline"}) button to open the automation in a new tab. To learn more, see [Comparing Two Versions of an Automation](#DiffCompare). |
   | Approval Status |                | {% include from="E02-01_0004-Automation-Status.md" element-id="E02-01_0004-Automation-Status_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
   | Execution Mode  | Manual         | {% include from="E02-01_0004-Automation-Execution-Mode.md" element-id="E02-01_0004-Automation-Execution-Mode_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
   | Last Reviewed   |                | The date the automation was last reviewed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Reviewed By     |                | The name of the person who last reviewed the automation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   [Details Panel Header Elements]

   </chapter>

   <chapter title="Graphical State Tab Elements" collapsible="true" level="5">
   Below the details panel header area, you'll see a series of tabs. The first tab is Graphical State, which shows a visual representation of your automation.
   
   ![E02-01_0004-Automation-Details-Panel-Graphic-State](E02-01_0004-Automation-Details-Panel-Graphic-State.png){width="600" style="block"}
   *Figure 17. Details Panel Showing Graphical State Tab Selected*
   
   |                                                               Element                                                               | Default |                                                                                                                                                      Description                                                                                                                                                       |
   |-------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Automation Graphic                                                                                                                  |         | Shows a non-editable image of your automation. To make changes to your automation, click the Edit button in the header area above. To position the image for viewing, click and drag your mouse anywhere inside the Graphical State tab. To magnify or reduce the image for viewing, use the Zoom In/Zoom Out buttons. |
   | Zoom In ( ![Zoom-In-Btn-Automations_Details_Panel](Zoom-In-Btn-Automations_Details_Panel.png){width="25" style="inline"}) button    |         | Magnifies the automation graphic. You can also get a similar result by scrolling your mouse over the image.                                                                                                                                                                                                            |
   | Zoom Out ( ![Zoom-Out-Btn-Automations_Details_Panel](Zoom-Out-Btn-Automations_Details_Panel.png){width="25" style="inline"}) button |         | Reduces the automation graphic. You can also get a similar result by scrolling your mouse over the image.                                                                                                                                                                                                              |
   [Graphical State Tab Elements]
   
   </chapter>

   <chapter title="Variables Tab Elements" collapsible="true" level="5">
   Below the details panel header area, you'll see a series of tabs. The next tab is Variables, which shows Runtime, Constant, and Regex variables for an automation. Use this space to see what variables an automation needs to run without the need to edit or open the automation. This is handy if you have permission to see the variable needed but don't have editorial rights.
   
   ![E02-01_0004-Automation-Details-Panel-Variables](E02-01_0004-Automation-Details-Panel-Variables.png){width="600" style="block"}
   *Figure 18. Details Panel Showing Variables Tab Selected*
   
   | Element            | Default | Description |
   |--------------------|---------|-------------|
   | Runtime Variables  |         |             |
   | Name               |         | TBA         |
   | Secure             |         | TBA         |
   | Transient          |         | TBA         |
   | Prompt             |         | TBA         |
   | Required           |         | TBA         |
   | Task Field         |         | TBA         |
   | Match Pattern      |         | TBA         |
   | Replace Pattern    |         | TBA         |
   | Default            |         | TBA         |
   | Validation         |         | TBA         |
   | Notes              |         | TBA         |
   | Constant Variables |         |             |
   | Name               |         | TBA         |
   | Secure             |         | TBA         |
   | Transient          |         | TBA         |
   | Value              |         | TBA         |
   | Notes              |         | TBA         |
   | Regex Variables    |         |             |
   | Name               |         | TBA         |
   | State              |         | TBA         |
   | Secure             |         | TBA         |
   | Task Field         |         | TBA         |
   | Filter Pattern     |         | TBA         |
   | Match Pattern      |         | TBA         |
   | Replace Pattern    |         | TBA         |
   | Default            |         | TBA         |
   | Notes              |         | TBA         |
   [Variables Tab Elements]
   
   </chapter>

   <chapter title="Past Executions Tab Elements" collapsible="true" level="5">
   Below the details panel header area, you'll see a series of tabs. The next tab is Past Executions. This tab shows the status of past executions, their duration, and details of the person who ran them. The Execution view shows all executions for all automations. This is useful for determining if an automation ran, when, who initiated it, and its success.
   
   ![E02-01_0004-Automation-Details-Panel-Past-Ex](E02-01_0004-Automation-Details-Panel-Past-Ex.png){width="600" style="block"}
   *Figure 19. Details Panel Showing Past Executions Tab Selected*
   
   | Element  | Default |                                                                         Description                                                                          |
   |----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Status   |         | TBA                                                                                                                                                          |
   | Task     |         | TBA                                                                                                                                                          |
   | Executed |         | By default, past executions sort by the Executed column using a descending sort order. Clicking a column header changes the sorting direction and/or column. |
   | Duration |         | TBA                                                                                                                                                          |
   [Past Executions Tab Elements]
   
   </chapter>

   <chapter title="Change Logs Tab Elements" collapsible="true" level="5">
   Below the details panel header area, you'll see a series of tabs. The next tab is Change Logs. This tab shows details of all changes made when you save your automation as a new version. Here you can see the change date, who made the change and comments.
   
   ![E02-01_0004-Automation-Details-Panel-Change-Log](E02-01_0004-Automation-Details-Panel-Change-Log.png){width="600" style="block"}
   *Figure 20. Details Panel Showing Change Logs Tab Selected*
   
   |  Element   | Default |                                                                                                                                                                                            Description                                                                                                                                                                                            |
   |------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Version ID |         | {% include from="E02-01_0004-Automation-VersionID.md" element-id="E02-01_0004-Automation-VersionID_snippet" /%} This number increases each time you save your automation. However, only the changes made when you Save New Version ( ![Save-New-Ver-Btn-Automation_Studio_Toolbar](Save-New-Ver-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}) appear on the Change Log tab. |
   | Log Date   |         | The logged date of the change.                                                                                                                                                                                                                                                                                                                                                                    |
   | Actor      |         | The person responsible for the change.                                                                                                                                                                                                                                                                                                                                                            |
   | Comments   |         | Comments associated with the change. Autonomics applies this comment; it's not editable when saving the new version.                                                                                                                                                                                                                                                             |
   | Action     |         | What happened when Autonomics recorded the change.                                                                                                                                                                                                                                                                                                                               |
   [Change Logs Tab Elements]
   
   </chapter>

   <chapter title="Details Tab Elements" collapsible="true" level="5">
   Below the details panel header area, you'll see a series of tabs. The next tab is Details. Here, you'll see your automation's ID number, version details, and the prompt used to create your automation.
   
   ![E02-01_0004-Automation-Details-Panel-Details](E02-01_0004-Automation-Details-Panel-Details.png){width="600" style="block"}
   *Figure 21. Details Panel Showing Details Tab Selected*
   
   |            Element             | Default |                                                                            Description                                                                             |
   |--------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Version Number                 |         | {% include from="E02-01_0004-Automation-VersionID.md" element-id="E02-01_0004-Automation-VersionID_snippet" /%}                                               |
   | ID                             |         | TBA                                                                                                                                                                |
   | Version ID                     |         | TBA                                                                                                                                                                |
   | Created                        |         | The date and time that you created the unique version. For example, an automation created yesterday, updated today, and saved as a new version shows today's date. |
   | Equivalent Engineer Time (min) |         | Defaults to 1.                                                                                                                                                     |
   | Concurrency Limit              |         | {% include from="E02-01_0004-Automation-Concurrency-Limit.md" element-id="E02-01_0004-Automation-Concurrency-Limit_snippet" /%}                               |
   | Timeout                        |         | {% include from="E02-01_0004-Automation-Timeout.md" element-id="E02-01_0004-Automation-Timeout_snippet" /%}                                                   |
   | If Limit Exceeds               |         | {% include from="E02-01_0004-Automation-If-Limit-Exceeds.md" element-id="E02-01_0004-Automation-If-Limit-Exceeds_snippet" /%}                                 |
   | Submitted By                   |         | {% include from="E02-01_0004-Automation-Submitter-Name.md" element-id="E02-01_0004-Automation-Submitter-Name_snippet" /%}                                     |
   | Last Submitted                 |         | TBA                                                                                                                                                                |
   | Matchers                       |         | TBA                                                                                                                                                                |
   | Reviewer Notes                 |         | {% include from="E02-01_0004-Automation-Reviewer-Note.md" element-id="E02-01_0004-Automation-Reviewer-Note_snippet" /%}                                       |
   | Notes                          |         | TBA                                                                                                                                                                |
   [Details Tab Elements]
   
   </chapter>

   <chapter title="Linked Automations Tab Elements" collapsible="true" level="5">
   Below the details panel header area, you'll see a series of tabs. The last tab shows Linked Automations. Here you'll see a table of all automations linked to the selected automation. The tab also showcases a search field to make it easier to find a specific automation.
   
   ![E02-01_0004-Automation-Details-Panel-Linked-Aut](E02-01_0004-Automation-Details-Panel-Linked-Aut.png){width="600" style="block"}
   *Figure 22. Details Panel Showing Linked Automations Tab Selected*
   
   | Element | Default |                                                                    Description                                                                    |
   |---------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
   | Search  |         | TBA                                                                                                                                               |
   | Name    |         | By default, linked automations sort by the Name column using an ascending sort order. Clicking the Name column header changes the sort direction. |
   | Client  |         | TBA                                                                                                                                               |
   | Path    |         | TBA                                                                                                                                               |
   | Purpose |         | TBA                                                                                                                                               |
   | Version |         | TBA                                                                                                                                               |
   [Linked Automations Tab Elements]
   
   </chapter>
   2. Inside the details panel, click the Edit button. The Automation Studio opens.

3. Or, update the automation using the **popup** menu:

   1. At the right of the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

   2. From the **popup** menu, select Edit. The **Automation Studio** opens.

4. Inside Automation Studio:

   * Find the **mini** toolbar at the top right of the canvas. Click the **Properties** ( ![Properties-Btn-Automations_Studio_Rght-Tbar](Properties-Btn-Automations_Studio_Rght-Tbar.png){width="25" style="inline"}) button to change the automation's settings.

   * Select an individual action for update. Using the Action toolbar, click the **Properties** ( ![Properties-Btn-Automation_Studio_Action_Tbar](Properties-Btn-Automation_Studio_Action_Tbar.png){width="25" style="inline"}) button to change the action's settings.

   * Using the Actions palette, drag and drop new actions into your automation as needed.

5. Click **Save** ( ![Save-Btn-Automation_Studio_Toolbar](Save-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}).

##Approve an Automation {% #ApproveAutomation %}

> To approve an automation, reviewers must have **Automations Approver** or **Automations Auto Approve** authority. {style="warning"}

See the Autonomics permissions and authorities topic for more information.

Once you finish building and saving your automation, it's time to get it approved. You must have your automation approved before executing it.

To submit your automation for approval:

1. Find and select the automation.

2. In the details panel, click **Edit**.

   > Or, while hovering over the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button. From the popup menu, select Edit.
3. Inside Automation Studio, click **Submit for Approval**.

   ![E02-01_0004-Automation-Studio-Approval](E02-01_0004-Automation-Studio-Approval.png){width="900" style="block"}
   *Figure 23. Automation Studio Showing the Submit for Approval Button Highlighted*

   To learn more about when and how to use the Automation Studio, see the TBA topic.

4. In the **Submit for Approval** modal enter an optional Note supporting your request.

5. Click **Submit**.

In the Browser workspace, the Task ID for your request shows in place of the Submit for Approval button. Click on the Task ID to see more details about the task. Once the task is assigned, it can be approved. Once approved, approval details show inside the Automation Studio in the automation's Properties (Approval tab). Here you'll see the approved version, reviewer notes and status.

##Execute an Automation {% #ExecuteAutomation %}

> You must have runtime variables in place to execute an automation. {style="warning"}

To make your automation live you must execute it.

To execute your automation:

1. Find and select the automation.

2. In the details panel, click **Execute**.

   > Or, while hovering over the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button. From the popup menu, select Edit. Inside the Automation Studio, click Execute ( ![Execute-Btn-Automation_Studio_Toolbar](Execute-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}). 
   To learn more about when and how to use the Automation Studio, see the TBA topic.

3. In the **Execute** modal, you have the option to enter a **Task ID**.

4. Click **Ok**. Or, click Cancel to stop the process.

##Delete an Automation {% #DeleteAutomation %}

Removing old and unused automations is key to staying organized.

To delete an automation:

1. Find and hover over the automation.

2. At the right of the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the **popup** menu, select **Delete**.

4. At the confirmation modal, click **Delete**. Or, click Cancel to stop the process.

##Clone an Automation {% #Clone %}

Occasionally, you may want to copy an automation. This could be for testing. For example, to see how changes could affect an automation before applying them to the original. Or, you might want to use the duplicated automation as a foundation for a new one. Regardless of your motive, cloning is a fast and simple way to expand your library of automations.

To clone an automation:

1. Find and select the automation.

2. In the details panel, click **Clone**.

   > Or, while hovering over the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button. From the popup menu, select Clone.

   > You can also clone an automation using the Automation Studio. Click the Clone ( ![Clone-Btn-Automation_Studio_Toolbar](Clone-Btn-Automation_Studio_Toolbar.png){width="25" style="inline"}) button to start the process.
3. In the **Clone Automation** modal, enter or edit the **Name**.

   > To clear the suggested name, click the Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button, then enter a new name.
4. Click **Create**. Or, click Cancel to stop the process.

The clone shows in to the same folder as your original automation. You can now move or edit the clone as needed.

##Move an Automation to Another Folder {% #MoveAutomation %}

Organizations and teams change over time, and so do their needs. This means that you may have to rearrange your automations.

To move an automation from one folder to another:

1. Find and hover over the automation.

2. At the right of the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the popup menu, select **Move to Folder**.

4. In the **Move to Folder** modal, choose a folder location.

5. Click **Move**. Or, click Cancel to stop the process.

##Compare Two Versions of an Automation {% #DiffCompare %}

The Diff tool helps you compare and understand changes in your automation. You can use it to compare two versions of the same automation and track current and past changes.

To compare versions:

1. Find and select the automation.

2. In the details panel, click **Diff**.

   A new workspace opens where you can see a side-by-side comparison of two versions of your automation.
   * Use the dropdowns to set which version appears left and right.

   * Use the Zoom In ( ![Zoom-In-Btn-Automations_Details_Panel](Zoom-In-Btn-Automations_Details_Panel.png){width="25" style="inline"}) and Zoom Out ( ![Zoom-Out-Btn-Automations_Details_Panel](Zoom-Out-Btn-Automations_Details_Panel.png){width="25" style="inline"}) buttons and see more or less detail.

   * Click List of Changes to see the full list of changes made between the two versions. On button-press, the List of Changes panel opens on the right with a table showing the change, the name applied to the new action and the type of action.

   * Use the Open ( ![Open-Details-Btn-Automations-Diff](Open-Details-Btn-Automations-Diff.png){width="25" style="inline"}) button to open the automation in a new tab.

3. Close the tab to return your focus to the Browser workspace.

##Export and Import Automations {% #ExportImport %}

Moving automations between folders is one way of reorganizing your automations. But, what about moving automations between domains or clients. Also, after testing your automation, it's ready to deploy. Deploying an automation means promoting it from a lower instance to production. That's where exporting and importing comes into play.

### Export an Automation

When you export an automation, you download a JSON file representing your automation to your Downloads folder. Once downloaded, you can import this file to another domain or client.

To export an automation:

1. Find and hover over the automation.

2. At the right of the automation, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. From the popup menu, select Export.

   When the Export Automation modal appears, you'll be able to view the ID number and name of your automation. You'll also see a complete list of all connected automations. These automations either depend on your original automation or are relied upon by it. In both cases, it's important to consider exporting these as well.
4. Click Export. Or, click Cancel to stop the process.

Autonomics names the JSON file using the automaton prefix followed by your automation's ID. So, if your automation's ID is 2970, your JSON will be automaton 2970.json.

### Import an Automation

> Before importing your automation, ensure it has a unique name. Automation names must be unique per domain or client. {style="warning"}

After exporting your automation, you'll import it to its new location.

To import an automation:

1. Find and hover over a folder or sub-folder.

2. At the right of the folder or sub-folder, click the **gear** ( ![Gear-Btn-Automations_Browser](Gear-Btn-Automations_Browser.png){width="25" style="inline"}) button.

3. Find and select your JSON file for import.

4. Click **Open**.

5. In the **Import Automation** modal, enter or edit the **Name**.

   > To clear the suggested name, click the Delete ( ![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) button, then enter a new name.
6. Set **Tags** as needed.

7. Click **Import**. Or, click Cancel to stop the process.

##Best Practices {% #BestPractices %}

Use the following best practices when working with automations:

* Store your automations using well-named folders and sub-folders. And make sure that teams and key players have the right folder settings and permissions. This ensures smooth operations and helps you stay organized.

* Use structured, meaningful and descriptive names for your automations. Avoid ambiguous names and words like newest or latest. We encourage you to use the version number in your automation's name. This will make your automation's easy to find and update as needs evolve.

* Connection names should reflect the name or type of machine connected to your automation. If your automation has linked components, share connection names between the linked components for connection sharing. And if you have more than one connection to a single machine, include the connection protocol (SSH, ISH) and the username in the connection name.

* To adapt to changes and your organization's evolving needs, it's important to delete unused folders and automations. Also, it's important to adjust your folder structure and position your automations to best meet your business needs.

* Create automation templates as the starting point for similar automations. Templates let you quickly and efficiently build new automations without re-entering duplicate information.

* Select a pre-existing tag from the automation properties Tag dropdown. You can then use this pre-formatted automation as a guide to other automations. This is another great way to save development time.

* Use the Whitelisted Commands workspace during a "Resolve with AI" session for a ticket. In this session, Autonomics may suggest running a command on relevant hosts. You need to know the command's impact before making a decision. This workspace stores all user-approved commands. AI can run them in future "Resolve with AI" sessions without needing another review.

* Test potential automation changes on a cloned version of your automation. This will prevent possible downtime in the event of a breaking change.

* Use the Diff tool to find and help you resolve breaking changes.

## More Resources

For more information, see:

* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)

* [Automations Module Walkthrough](E02-01_0003-Automations-Mod-Walk.md)

* [Automations Module Introduction](E02-01_0002-Automations-Mod-Intro.md)

* [Automations Management](E02-01_0004-Automations-Mgmnt.md)

* [Automations Workflow](E02-01_0003-Automations-Mod-Walk.md)


