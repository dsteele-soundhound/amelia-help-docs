

# Integration Logs Introduction

## Introduction

Amelia includes an integration framework and tools to create integration flows. The integration flows connect Amelia to third-party services. Once created, integration flows and data are available when you build conversation flows.

Integration flows update a log file, for example, when a flow connects to a host. You can view, filter, and sort these log file entries with the Integration Logs tab workspace.

The [Integration Logs Management](B03-06_0602-Integration-Logs-Management.md) topic describes how to use this workspace.

## What You'll Learn

In this topic you'll learn about:

* How Integrations work.

* Event types and sorting options in the Integration Logs workspace.

* [How to access Integration Logs](#Access).

##How Integrations Work {% #How %}

Amelia's integration service runs separately from  Amelia. The service runs on an Amelia instance or another host or hosts. It allows Amelia to interact with external systems. Integration flows are Apache Camel contexts created with Amelia's administration tools. Flows deploy to these remote processes with gRPC, a universal remote procedure call (RPC) standard.

The integration service unpacks the data received from an external system. Then deploys it in a Spring application. The application is separate from the parent context and other active flows. Spring integration handles RPC-style calls to Apache Camel to execute a request.

##Access Integration Logs {% #Access %}

{% include from="B03-06_0601-IntegrationLogsAccess.md" element-id="B03-06_0601-IntegrationLogsAccess_snippet" /%}

## More Resources

For more information, see:

* [Integrations Management](B03-06_0205-Integrations-Management.md)

 
