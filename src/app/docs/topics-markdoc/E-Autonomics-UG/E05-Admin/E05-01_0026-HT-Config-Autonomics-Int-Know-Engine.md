# Configure Autonomics for Internal Knowledge Engine

## Introduction

In Amelia AIOps, the Knowledge Management Framework seamlessly integrates with various knowledge sources to automate and enhance operational efficiency. It currently supports three key knowledge base types:

* ServiceNow Knowledge Base

* Atlassian Confluence

* Internal Knowledge

{% include from="E05-01_0026-InternalKnowledge.md" element-id="E05-01_0026-InternalKnowledge_snippet" /%}

For example, you can use Internal Knowledge documents with the Resolve with AI and Automate with AI features to streamline problem-solving and creation of automations.

While the Internal Knowledge solution provides essential capabilities, it complements --- rather than competes with --- ServiceNow and Atlassian Confluence. Customers already using these platforms can seamlessly integrate their existing knowledge repositories for advanced and scalable knowledge management. Internal Knowledge is a practical entry point into automation-enabled knowledge utilisation for those starting out.

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Internal Knowledge Engine integration](#Create).

* [The Internal Knowledge Engine integration workspace](#The).

##Create a Internal Knowledge Engine Integration {% #Create %}

To create an Internal Knowledge Engine integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Internal Knowledge Engine** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Internal Knowledge Engine Configuration Workspace {% #The %}

Click the Internal Knowledge Engine button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Internal Knowledge Engine integration.

![E05-01_0026-Internal-Knowledge](E05-01_0026-Internal-Knowledge.png){width="600"}

*The Internal Knowledge Engine Configuration Panel*

*Internal Knowledge Engine Configuration Panel Elements*

|     Setting      |          Default          |                                                                             Description                                                                              |
|------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name |                           | Type the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears the field. |
| External System  | Internal Knowledge Engine | Shows the type of integration in the list.                                                                                                                           |
| Status           | Disabled                  | Enable or disable this integration.                                                                                                                                  |
| **Internal Knowledge Engine Configuration**                                                                                                                                                                       |||
| Automatic Sync   | Disabled                  | Enable or disable automatic synchronization with the internal knowledge engine. If enabled, select the day and time to synchronize.                                  |

## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}

 
