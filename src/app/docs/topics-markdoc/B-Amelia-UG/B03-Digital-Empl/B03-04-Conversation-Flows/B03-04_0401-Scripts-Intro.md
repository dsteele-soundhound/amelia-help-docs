# Scripts & Script Library Introduction

## Introduction

Script libraries organize code used in Script blocks. You can access functions in these scripts across many Builder flows. Amelia also provides services that scripts can use to manipulate data within conversations.

## What You'll Learn

In this topic you'll learn about:

* [How Scripts are Used](#How).
* [Using Script Libraries in Script Blocks](#How2).
* [How to Use Script Libraries](#How3).
* [Script Sandboxing and Whitelists](#Script).
* [How to Use Script Service Handles](#How4).
* [Accessing a Script library](#Accessin).

##How Script Libraries Work {% #How %}

Scripts can get, set, or remove data that appears in conversations. For example, if a person tells Amelia that they want to insure a VW ID.4 car, a script can capture that information. Then use the information to look up insurance rates and update their user records. If the person also says, "I need insurance next week," a script can convert "next week" into a standard date format.

Organizing shared code into script libraries has several benefits. It helps with reuse and reduces the risk of errors. The only caveat? Retest your Digital Employees Builder flows after changing code in a script library.

##How to Use Script Libraries in Script Blocks {% #How2 %}

The Digital Employees Builder tool uses code in Script blocks to manipulate data within a conversation. These blocks also access code organized into script libraries. The [Script block](B03-04_0120-Script-Block.md) topic has details about using script libraries in conversation flows.

##How to Use Script Libraries {% #How3 %}

Amelia can share scripts used by Script blocks in many Builder flows in a domain. Library scripts can import other library scripts. This allows reuse of common code and features. Remember that updating library code also should trigger retesting all Digital Employees builder flows.

Script libraries also can store Math and other Groovy libraries. They work like importing libraries in scripts. You call the method with the required parameters.

![B03-04_0401-ScriptLibrary](B03-04_0401-ScriptLibrary.png){width="900" style="block"}

*The Script Library Workspace*

##Script Sandboxing and Whitelists {% #Script %}

By default, all scripts in a Builder flow execute within a secure sandbox in the Amelia engine. The sandbox prevents malfunctioning or malicious code from doing damage.

The sandbox limits which:

* Classes can be imported.
* Constructors can be invoked on imported classes.
* Instance methods can be invoked on imported classes.
* Static methods can be invoked on imported classes.
* Static fields (constants) can be accessed on imported classes.

An internal whitelist configuration provides default constraints. Anything not in the internal whitelist is not allowed. Creating a custom whitelist allows packages, classes, and other code to execute securely.

Amelia Engine logs capture any sandbox and whitelist errors. The [Script Sandboxing and Whitelists](B03-04_0404-Script-Sandboxing-and-Whitelist.md) topic has details.

##How to use Script Service Handles {% #How4 %}

Scripting services can handle variables, log data, create multimedia objects, retrieve conversation data, and perform other tasks. Services are available to Script blocks and the Script Library. The [Services Handles](B03-04_0421-Service-Handles-Library.md) topic has details.

Each service has a handle used to access the service. For example, execution.setVariable will set a variable using the Execution object.

##Accessing Script Libraries {% #Accessin %}

{% include from="B03-04_0401-AddScriptLibrary.md" element-id="B03-04_0401-AddScriptLibrary_snippet" /%}

## More Resources

For more information, see:

* [Scripts Management](B03-04_0403-Scripts-Management.md)
* [Script Block](B03-04_0120-Script-Block.md)
* [Service Handles](B03-04_0421-Service-Handles-Library.md)
* [Connection Services Handles](B03-04_0470-Connect-Service-Handles-Library.md)
* [Script Sandboxing and Whitelists](B03-04_0404-Script-Sandboxing-and-Whitelist.md)
