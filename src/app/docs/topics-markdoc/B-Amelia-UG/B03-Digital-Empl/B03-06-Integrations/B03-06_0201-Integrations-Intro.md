# Integrations Introduction

## Introduction

Amelia includes an integration framework and tools to create integration flows. The integration flows connect Amelia to third-party services. Once created, integration flows and data are available when you build conversation flows. You can assign data from APIs to variables used in a conversation.

The framework can customize logic and overrides needed to connect with services. You also can create custom integrations with templates. The framework uses the Camel expression language.

For simplified integrations, [Web Actions](B03-05_0101-Web-Actions-Intro.md) may be used.

## What You'll Learn

In this topic you'll learn about:

* [How Integrations Work](#How).
* [How to use Integration Assets](#How2).
* [How to use Integration Templates](#How3).
* [How to use Integration Property Sets](#How4).
* [How to use Integration Logs](#How5).
* [Best practices for third-party integrations](#Best).
* [How to access Integrations](#Access).

##How Integrations Work {% #How %}

Amelia's integration service runs separately from  Amelia. The service runs on an Amelia instance or another host or hosts. It allows Amelia to interact with external systems. Integration flows are Apache Camel contexts created with Amelia's administration tools. Flows deploy to these remote processes with gRPC, a universal remote procedure call (RPC) standard.

The integration service unpacks the data received from an external system. Then deploys it in a Spring application. The application is separate from the parent context and other active flows. Spring integration handles RPC-style calls to Apache Camel to execute a request.

##How to Use Integration Assets {% #How2 %}

{% include from="B03-06_0401-Assets-Intro.md" element-id="B03-06_0401-Assets-Intro_snippet" /%}

See the [Assets Introduction](B03-06-Integrations_B03-06_0401-Assets-Intro.md) and [Assets Management](B03-06_0402-Assets-Management.md) topics for details.

##How to Use Integration Templates {% #How3 %}

{% include from="B03-06_0301-Templates-Short-Intro.md" element-id="B03-06_0301-Templates-Short-Intro_snippet" /%}

See the [Templates Introduction](B03-06_0301-Templates-Intro.md) and [Templates Management](B03-06_0303-Templates-Management.md) topics for details.

##How to Use Integration Property Sets {% #How4 %}

{% include from="B03-06_0501-PropSets-Intro.md" element-id="B03-06_0501-PropSets-Intro_snippet" /%}

See the [Property Sets Introduction](B03-06_0501-Property-Sets-Intro.md) and [Property Sets Management](B03-06_0502-Property-Sets-Management.md) topics for details.

##How to Use Integration Logs {% #How5 %}

{% include from="B03-06_0601-IntegrationLogs-Intro.md" element-id="B03-06_0601-IntegrationLogs-Intro_snippet" /%}

See the [Integration Logs Introduction](B03-06_0601-Integration-Logs-Intro.md) and [Integration Logs Management](B03-06_0602-Integration-Logs-Management.md) topics for more details.

##Best Practices {% #Best %}

Follow these best practices to make using integrations easier to use.

* Retrieve only the minimum data required. Take extreme care when logging payloads or data subject to compliance regulations. Get explicit approval and sign off when this data is to pass through Amelia integrations.

* Whenever possible, reuse integration templates, assets, and property sets. This helps reduce or eliminate business logic being hard coded into integration flows.

* Be sure to include retries and error logic in the integration to handle exceptions.

##Access Integrations {% #Access %}

{% include from="B03-06_0201-IntegrationAccess.md" element-id="B03-06_0201-IntegrationAccess_snippet" /%}

## More Resources

For more information, see:

* [Integrations Management](B03-06_0205-Integrations-Management.md).
