# Configure Autonomics for Java Integration

## Introduction

{% include from="E05-01_0030-Java.md" element-id="E05-01_0030-Java_snippet" /%}

## Access the Integrations Workspace

{% include from="E05-01_0016-AccessIntegrations.md" element-id="E05-01_0016-AccessIntegrations_snippet" /%}

## What You'll Learn

In this topic, you'll learn about:

* [Creating a Java integration](#Create).

* [The Java Integration workspace](#The).

##Create a Java Integration {% #Create %}

To create a Java integration:

1. At the top right of the Integrations workspace, click the **+ New Integration** button. The **Select External System** panel displays on the right half of the workspace. The Select External Systems panel includes available integration options.

2. Click the **Java Integration** button in the Select External Systems panel. The **New Integration** workspace will display.

3. Configure the properties in the panel.

4. Click the **Create** button at the top of the Select External System panel to save the new integration.

![E05-01_0012-Integrations-Workspace](E05-01_0012-Integrations-Workspace.png){width="900"}

*The Integrations Workspace with Select External System Panel*

##The Java Integration Workspace {% #The %}

Click the Java Integration button in the Select External System panel to display the New Integration workspace. The workspace includes several properties to configure a Java integration.

![E05-01_0030-Config-Java-Panel.png](E05-01_0030-Config-Java-Panel.png){width="600"}

*The Java Integration Basic Section*

*Java Integration Basic Section Elements*

| Element                                                                                                                                                 | Default           | Description                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration Name                                                                                                                                        |                   | Enter the name of the integration. Clicking Delete (![Close-Panel-X-Btn-Automations](Close-Panel-X-Btn-Automations.png){width="25" style="inline"}) clears this field. |
| External System                                                                                                                                         | Generative AI     | Shows the type of integration in the list.                                                                                                                             |
| Status                                                                                                                                                  | Disabled          | Enable or disable this integration.                                                                                                                                    |
| **Java Integration Configuration**                                                                                                                      |||
| Platform Token                                                                                                                                          |                   | Token used to authenticate handle event HTTP requests to Autonomics                                                                                                         |
| Platform Token Header                                                                                                                                   |                   | Platform token header name which will be used to obtain platform token value                                                                                           |
| Request Timeout                                                                                                                                         | 0 hrs 1 min 0 sec | Timeout after which an HTTP request will be aborted. IMPORTANT: Even if the timeout is reached, metric handling can still be completed in the background.              |
| Execution Group                                                                                                                                         |                   | Enter the name of the execution group.                                                                                                                                 |
| Support Shared Dependencies Classloader                                                                                                                 | Yes               | Shows whether shared dependencies classloader is supported.                                                                                                            |
| Deployment Type                                                                                                                                         | Single Instance   | Select whether an integration should be deployed on a single ALite or on all available.                                                                                |
| **Java Integration File**                                                                                                                               |||
| File Upload (.jar)                                                                                                                                      |                   | Click to upload your Java .jar file.                                                                                                                                   |


## More Resources

For more information see:
{% include from="E05-01_0010-IntegrationsMoreResources.md" element-id="E05-01_0010-IntegrationsMoreResources_snippet" /%}
