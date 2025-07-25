# Script Sandboxing and Whitelists

## Introduction

By default, all scripts in a Digital Employee Builder flow execute in a secure sandbox. The Amelia engine includes this sandbox feature. This is true whether code appears directly in a Script block or a script library script. The sandbox prevents malfunctioning or malicious code from doing damage.

The sandbox limits which:

* Classes you can import.
* Constructors you can invoke on imported classes.
* Instance methods you can invoke on imported classes.
* Static methods you can invoke on imported classes.
* Static fields (constants) you can access on imported classes.

An internal whitelist configuration controls the default constraints. Anything not in the whitelist is not available for use. A custom configuration file can extend the default whitelist, as described below.

> Creating whitelists and updating Amelia instance files requires system administration access. It also requires access to SSH and CLI tools. For SaaS customers, please file a ticket with the Amelia Service Technology group. For on-premise customers, the Service Technology group can provide the steps needed. But you are responsible for your servers.

## What You'll Learn

In this topic you'll learn how to:

* [Identify sandbox and whitelist issues](#Identify).
* [Create a custom whitelist configuration file](#Create).
* [Install a custom whitelist configuration file](#Install).
* [Modify application properties to enable a whitelist](#Modify).
* [Activate whitelists by restarting Amelia](#Activate).
* [Troubleshooting whitelists](#Troubles).

##Identify Sandbox and Whitelist Issues {% #Identify %}

Sandbox and whitelist issue show up as script states that do not execute. You can identify these issues by tailing Amelia Engine logs. Search the logs for these two messages, one after another.
```Groovy
Script is unsafe. 
Execution error detected. Error message: Groovy scripts are not allowed to call instance method &lt;insert whatever bad thing you're trying to do here&gt;
```

##Create a Custom Whitelist Configuration File {% #Create %}

You can add a whitelist file to execute packages, classes, and code securely. The file name should be whitelist.config. Then store it in the /apps/IPsoft/amelia/amelia-common-config/scripting/groovy/sandbox/ folder. The next section describes this process.

### Selecting Items to Import

Do not add items to a whitelist file unless the default file doesn't meet your needs.

Importing whitelist files should start from a narrower scoped import to a wider range import. For example:

* If you need to blacklist any class in a package, do not use starImport. Instead, use usingclassImport. Put all the remaining necessary whitelisted classes under that package manually by usingclassImport.
* Similarly, if you don't need all methods of a certain class, do not use a whole classImport. Instead, use staticMethod or method import. Put all necessary whitelisted methods with corresponding parameters to the external config file.
* Avoid overlapping in the whitelist configuration files. Otherwise, the wider range import will override your narrower imports.

### Sample whitelist.config File

```Groovy
# Star imports (white list all classes under the package)
starImport java.util.regex
starImport java.util

# Concrete class imports (any interesting classes under not start-imported package must be whitelisted here)
classImport java.lang.Byte
classImport java.lang.CharSequence

# Static methods and fields, instance methods, and constructors
staticMethod com.cloudbees.groovy.cps.CpsDefaultGroovyMethods each java.util.Iterator groovy.lang.Closure
staticMethod groovy.json.JsonOutput prettyPrint java.lang.String
staticMethod groovy.json.JsonOutput toJson java.lang.Boolean
new groovy.json.JsonSlurper
new groovy.json.JsonSlurperClassic
method groovy.json.JsonSlurper parseText java.lang.String
method groovy.lang.Binding hasVariable java.lang.String
staticField groovy.lang.Closure DELEGATE_FIRST
staticField groovy.lang.Closure DELEGATE_ONLY
```

The table below describes possible script types. Formats are case-sensitive.

*Custom Whitelist Configuration File Format Options*


| Element Type    | Format                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                      |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Package         | starImport&lt;one space&gt;packageName                                                                                                            | Whitelists all constructors, staticFields, staticMethods, and instanceMethods of all classes in a package. <code-block> starImport java.math </code-block>                                                                                                                                                                                       |
| Class           | classImport&lt;one space&gt;className                                                                                                             | Whitelists all constructors, staticFields, staticMethods, and instanceMethods of a class. <code-block> classImport java.lang.StringBuilder </code-block>                                                                                                                                                                                         |
| Static Method   | staticMethod&lt;one space&gt;className&lt;one space&gt;staticMethodName(&lt;one space&gt;parameter1ClassName&lt;one space&gt;parameter2ClassName) | Parameter is optional. Whitelists only specified staticMethods of a class. <code-block> One Parameter example: staticMethod groovy.json.JsonOutput prettyPrint java.lang.String Two Parameters (int[] and java.lang.Object) example: staticMethod org.codehaus.groovy.runtime.DefaultGroovyMethods contains int[] java.lang.Object </code-block> |
| Instance Method | method&lt;one space&gt;className&lt;one space&gt;methodName(&lt;one space&gt;parameter1ClassName&lt;one space&gt;parameter2ClassName)             | Parameter is optional. Whitelists only specified instanceMethods of a class. <code-block> No Parameter example: method java.lang.String length One Parameter example: method java.lang.String charAt int </code-block>                                                                                                                           |
| Constructor     | new&lt;one space&gt;className(&lt;one space&gt;parameter1ClassName&lt;one space&gt;parameter2ClassName)                                           | Parameter is optional. Whitelists only specified instanceMethods of a class. <code-block> No parameter example: new java.util.Date One Parameter example: new java.util.Date long </code-block>                                                                                                                                                  |
| Static Field    | staticField&lt;one space&gt;className&lt;one space&gt;fieldName                                                                                   | Whitelists only specified staticFields of a class. <code-block> staticField java.util.Locale CANADA </code-block>                                                                                                                                                                                                                                |


##Install a Custom Whitelist Configuration File {% #Install %}

Once you define a whitelist configuration file, place the file in your Amelia instance. Use a CLI tool to create a sandbox directory and configuration file. Then set permissions and restart the Amelia server.

> Before you execute these steps, confirm the scripting/groovy/sandbox folder structure does not exist. And confirm the whitelist.config file is not in the /sandbox folder. {style="warning"}

1. Create a sandbox directory with this CLI command:
```Shell
mkdir -p /apps/IPsoft/amelia/amelia-common-config/scripting/groovy/sandbox
```
2. In the sandbox directory, create a whitelist.config text file. Then add configuration settings, as described above.

3. Change owner and permissions for directories and files as amelia:amelia.

   ```Shell
   mkdir -p /apps/IPsoft/amelia/amelia-common-config/scripting/groovy/sandbox
   ```

##Modify Application Properties to Enable a Whitelist {% #Modify %}

The name of the application properties files depends on your Amelia instance setup. It may be application.yml or application.properties file.

Regardless of the file type, you can find these files in the /apps/IPsoft/amelia/amelia-common-config/ folder structure.

### application.yml Example

It's possible the application.yml file does not exist. In that case, you will need to create it. Edit the application.yml file in the /apps/IPsoft/amelia/amelia-common-config/ folder. Then add the following lines:
```Groovy
amelia:
    bpn:
      groovy:
         sandbox:
            conf:
               path: /apps/IPsoft/amelia/amelia-common-config/scripting/groovy/sandbox
            whitelist:
               filename: whitelist.config
```

> The hierarchy for the .yml file is likely already created. Therefore, add only the sections starting with bpn and below. {style="warning"}

### application.properties Example

Edit the application.properties file and add the following lines:
```Groovy
amelia.bpn.groovy.sandbox.conf.path=/apps/IPsoft/amelia/amelia-common-config/scripting/groovy/sandbox
amelia.bpn.groovy.sandbox.whitelist.filename=whitelist.config
```

##Activate Whitelists by Restarting Amelia {% #Activate %}

Once the steps above are completed, restart Amelia Engine for the configuration changes to take effect. Type this CLI command.
```Groovy
systemctl restart amelia-engine-service.service
```

##Troubleshooting Whitelists {% #Troubles %}

* After you add the whitelist, test the script state for functionality.
* You might need to update the whitelist several times. As you test script states, make sure that you've added classes and/or modules appropriately.
* Also, you may not need to add an entire class to load methods. Try adding specific methods to the whitelist before adding an entire class.

## More Resources

For more information, see:

* [Scripts Introduction](B03-04_0401-Scripts-Intro.md).
* [Scripts Management](B03-04_0403-Scripts-Management.md).
* [Script Block](B03-04_0120-Script-Block.md).

