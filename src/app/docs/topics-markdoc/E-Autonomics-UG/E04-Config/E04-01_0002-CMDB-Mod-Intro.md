# CMDB Introduction

## Introduction

The Configuration Management Database (CMDB) is a framework used to access IT information. Autonomics uses a CMDB to integrate IT management services.

The CMDB stores information about IT assets. Configuration Items (CIs) store details about asset properties, locations, and relationships. Scopes organize CIs into useful groups in a CMDB.

## What You'll Learn

In this topic, you'll learn about:

* [How a CMDB works](#CMDB).
* [How Scopes and CIs work](#Scopes).
* [How Classes and CIs work](#Classes).
* [What is a CI](#CIs).

## How a CMDB Works {% #CMDB %}

A CMDB (Configuration Management Database) stores data about your IT environment. This includes assets like servers as well as services. A single repository makes it possible to organize and monitor your environment.

CIs (Configuration Items) define individual assets and services. They're organized into useful groupings with scopes.

When you create a client in AIOps, it includes a CMDB with two default scopes. You can create different types of CIs based on their scope.

* The **Default System Scope** lets you create and store CIs for script factories. The factories manage connections. They also manage discovery and monitoring. And factories manage authentication for devices using IPlocksmith.

* The **Default Scope** and custom scopes create and store CIs. These CIs describe devices, subnets, and cloud environments like Amazon and Azure.

While you can archive CIs in a CMDB, you cannot delete them. It's also possible to import CIs using an Excel file. The first step setting up Autonomics is to create and configure one or more CIs. You use the Default System Scope, Default Scope, or custom scopes you create.

## How Scopes and CIs Work {% #Scopes %}

Scopes organize configuration items (CIs) into useful groups for monitoring with AI Ops. For example, you might have database servers. You would define each server as a unique CI. Then you might use the Default scope, or create a custom scope, to organize all your database servers. This would let you use the scope to monitor your database servers, separate from other IT assets. Scopes work similar to folders.

For obvious reasons, it's important to use unique descriptive names for your scopes.

## How Classes and CIs work {% #Classes %}

Configuration items can include custom fields. These fields store key:value properties organized into classes. For example, a server disk may have many more properties than device with a simple connection. Monitoring and other services use these properties to connect to IT assets.

When working with a configuration item, you can create a class to hold key:value properties. For example, you could create a class called Device. The class would capture then store fields called Host and other connection details.

Cloning a configuration item lets you reuse classes, as needed.

## Configuration Items (CIs) {% #CIs %}

When you create a client account in AIOps, it includes a CMDB with two default scopes. You can create different types of CIs based on their scope. You also can use CIs as templates, or Base CIs, when creating a new configuration item.

While you can archive CIs in a CMDB, you cannot delete them. It's also possible to import CIs using an Excel file. The first step setting up Autonomics is to create and configure one or more CIs. You organize them with the Default System Scope, Default Scope, or custom scopes you create.

### Discovering CIs

You can discover CIs using a connection once they're organized with scopes in a CMDB. The IPmon service connects with fully configured CIs.

The first step is to create a CI for a Locksmith server. Then create an IPmon CI to monitor assets and services. You'll then need to create a relationship between the CI you want to discover and the IPmon CI. The last step is to use SSH, ish, or other connection type to connect to your CI.

### CI History

The History workspace lists the activity for CIs with the ability to search by CI name. Clicking a CI name displays CIs workspace with detailed data for the CI. This includes its properties, linked tasks, connections, and other data. You also can discover the CI or clone it.

### Exporting and Importing CIs

The CIs workspace lets you export and import configuration items. The Exports and Imports workspaces list exports and imports in progress, respectively.

## Accessing the CMDB

{% include from="E04-01_0002-CMDBAccess.md" element-id="E04-01_0002-CMDBAccess_snippet" /%}

## More Resources

{% include from="E04-01_0002-CMDBMoreInfo.md" element-id="E04-01_0002-CMDBMoreInfo_snippet" /%}
