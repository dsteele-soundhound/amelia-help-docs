# Content Pack Service

## Introduction

{% include from="B03-04_0444-ContentPackSvc.md" element-id="B03-04_0444-ContentPackSvc_snippet" /%}

Content packs are Java jar-files containing assets to be installed. They include Groovy installation scripts. Content pack scripts are platform specific. They use imperative programming paradigm, using statements to change a program's state. A content pack is self-contained and knows how to install itself.

The Content Pack service and Certificate service let you work with content packs. The [Content Pack Walkthrough topic](B01-06_0003-Content-Pack-Walkthrough.md) describes how to use content packs.

## What You'll Learn

In this topic you'll learn how to:

* [Content Pack script execution scenarios](#Scenarios).

* [Call the Content Pack service](#CallContentPack).

* [Use the Content Pack service](#ContentPackOperations).

* [Call the Certificate service](#CallCertificate).

* [Use the Certificate service](#CertificateOperations).


## Content Pack Execution Script Scenarios {% #Scenarios %}

Install, update and uninstall methods of content pack service execute Groovy scripts. The script section of the Manifest lists these scripts. There are two possible execution scenarios:

### Default Script Execution Order

Execute the Manifest script sections in a predefined order. Execute scripts in the same order as they're listed in the Manifest.

* The `install` method executes script sections in the following order: preInstall, config, processResources, postInstall

* The `update` method executes script sections in the following order: preUpdate, configUpdate, update, postUpdate

* The `uninstall` method executes script sections in the following order: preUninstall, configUninstall, uninstall, postUninstall

### Programmatically Selectable Script Execution

Some Manifest script sections include `installer`, `updater`, or `uninstaller` methods. The install, update or uninstall methods execute scripts from corresponding sections only. An additional mechanism is available to selectively run other scripts in this case.


## Call the Content Pack Service {% #CallContentPack %}

To call the Content Pack service, use the `contentPackService` handle appended to the service operation. For example, `contentPackService.getContentPacks`. Here the service calls the `getContentPacks` operation. The operation gets a list of content packs ready to be installed.


## Content Pack Operations {% #ContentPackOperations %}

Use the `contentPackService` handle to call the following operations:


### manifest()

This operation gets a content pack manifest.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns the content pack manifest.


### assetRetriever()

This operation gets a content pack asset retriever.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns the content pack asset retriever.


### install(config,assets,context)

This operation installs the content pack with the configuration and external assets.

#### Parameters

`Map<String, String> install(Map<String, String> config,
                            Map<String, byte[]> assets,
                            Map<String, Object> context)`

| Parameter | Type   | Description                                           |
|-----------|--------|-------------------------------------------------------|
| config    | String | The content pack configuration.                       |
| assets    | byte   | The content pack binary assets.                       |
| context   | Object | The platform-specific content pack execution context. |

#### Returns

This operation returns the execution result.


### install(config, context)

This operation installs the content pack with the configuration.

#### Parameters

`Map<String, String> install(Map<String, String> config,
                            Map<String, Object> context)`

| Parameter | Type   | Description                                           |
|-----------|--------|-------------------------------------------------------|
| config    | String | The content pack configuration.                       |
| context   | Object | The platform-specific content pack execution context. |

#### Returns

This operation returns the execution result.


### install(context)

This operation installs the content pack.

#### Parameters

`Map<String, String> install(Map<String, Object> context)`

| Parameter | Type   | Description                                           |
|-----------|--------|-------------------------------------------------------|
| context   | Object | The platform-specific content pack execution context. |

#### Returns

This operation returns the execution result.


### update(config,assets,context)

This operation updates the content pack with the configuration and external assets.

#### Parameters

`Map<String, String> install(Map<String, String> config,
                            Map<String, byte[]> assets,
                            Map<String, Object> context)`

| Parameter | Type   | Description                                           |
|-----------|--------|-------------------------------------------------------|
| config    | String | The content pack configuration.                       |
| assets    | Byte   | The content pack binary assets.                       |
| context   | Object | The platform-specific content pack execution context. |

#### Returns

This operation returns the execution result.


### uninstall(config,assets,context)

This operation uninstalls the content pack with the configuration and external assets.

#### Parameters

`Map<String, String> install(Map<String, String> config,
                            Map<String, byte[]> assets,
                            Map<String, Object> context)`

| Parameter | Type   | Description                                           |
|-----------|--------|-------------------------------------------------------|
| config    | String | The content pack configuration.                       |
| assets    | Byte   | The content pack binary assets.                       |
| context   | Object | The platform-specific content pack execution context. |

#### Returns

This operation returns the execution result.


### addScriptExecutionListener(listener)

This operation adds a script execution listener.

#### Parameters

`void addScriptExecutionListener(ScriptExecutionListener listener)`

| Parameter | Type   | Description                                 |
|-----------|--------|---------------------------------------------|
| listener  | String | The content pack script execution listener. |

#### Returns

This operation returns the execution result.


### close()

This operation deletes all unpacked assets from the temp folder.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns nothing.


### getContentPacks()

This operation gets a list of content packs ready to be installed

#### Parameters

This operation has no parameters.

#### Returns

This operation returns a list of content packs ready for installation.



### deployContentPackConfigBpn(contentPack)

This operation deploys the configuration BPN for the downloaded content pack.

#### Parameters

|  Parameter  |  Type  |               Description                |
|-------------|--------|------------------------------------------|
| contentPack | String | The name of the downloaded content pack. |

#### Returns

This operation returns true if the configuration BPN is successfully installed.


### deployContentPackConfigBpnFromOneStore(contentPack)

This operation deploys the config BPN for the content pack provided.

#### Parameters

|  Parameter  |  Type  |               Description                |
|-------------|--------|------------------------------------------|
| contentPack | String | The name of the downloaded content pack. |

#### Returns

This operation returns the execution result. It is a map of key-value pairs containing details about the content pack installer execution. It varies from content pack to content pack.


### configBpnDeployed(contentPack)

This operation hecks whether a config BPN is already deployed.

#### Parameters

|  Parameter  |  Type  |               Description                |
|-------------|--------|------------------------------------------|
| contentPack | String | The name of the downloaded content pack. |

#### Returns

This operation returns


### installContentPack(contentPack, configs)

This operation

#### Parameters

|  Parameter  |        Type         |               Description                |
|-------------|---------------------|------------------------------------------|
| contentPack | String              | The name of the downloaded content pack. |
| configs     | Map<String, String> | The content pack configuration.          |

#### Returns

This operation returns true if the content pack is installed successfully.


### installContentPack(contentPack, configs, assets)

This operation installs a content pack using configuration and external assets provided by running the config BPN.

#### Parameters

|  Parameter  |        Type         |                  Description                   |
|-------------|---------------------|------------------------------------------------|
| contentPack | String              | The name of the downloaded content pack.       |
| configs     | Map<String, String> | The content pack configuration.                |
| assets      | Byte                | External assets to include in an installation. |

#### Returns

This operation returns true if the content pack is installed successfully.


### installContentPackFromOneStore(contentPack, configs, assets)

This operation installs a content pack using configuration and external assets provided by running the config BPN.

#### Parameters

|  Parameter  |        Type         |                  Description                   |
|-------------|---------------------|------------------------------------------------|
| contentPack | String              | The name of the downloaded content pack.       |
| configs     | Map<String, String> | The content pack configuration.                |
| assets      | Byte                | External assets to include in an installation. |

#### Returns

This operation returns true if the content pack is installed successfully.


### updateContentPack(contentPack, configs, assets)

This operation updates a content pack using configuration and external assets provided by running config BPN.

#### Parameters

|  Parameter  |        Type         |                  Description                   |
|-------------|---------------------|------------------------------------------------|
| contentPack | String              | The name of the downloaded content pack.       |
| configs     | Map<String, String> | The content pack configuration.                |
| assets      | Byte                | External assets to include in an installation. |

#### Returns

This operation returns the execution result. It is a map of key-value pairs containing details about the content pack installer execution. It varies from content pack to content pack.


### uninstallContentPack(contentPack, configs, assets)

This operation uninstalls a content pack using configuration and external assets provided by running config BPN.

#### Parameters

|  Parameter  |        Type         |                  Description                   |
|-------------|---------------------|------------------------------------------------|
| contentPack | String              | The name of the downloaded content pack.       |
| configs     | Map<String, String> | The content pack configuration.                |
| assets      | Byte                | External assets to include in an installation. |

#### Returns

This operation returns the execution result. It is a map of key-value pairs containing details about the content pack installer execution. It varies from content pack to content pack.


### updateContentPackInstallationStatus(contentPack, success)

This operation

#### Parameters

|  Parameter  |  Type   |                       Description                       |
|-------------|---------|---------------------------------------------------------|
| contentPack | String  | The name of the downloaded content pack.                |
| success     | Boolean | The status returned from the install content pack call. |

#### Returns

This operation returns true if the content pack is installed successfully.


### installContentPackOnOneDesk(contentPack, config)

This operation installs the content pack on the 1Desk instance.

#### Parameters

|  Parameter  |        Type         |           Description           |
|-------------|---------------------|---------------------------------|
| contentPack | Byte                | The name of a content pack.     |
| config      | Map<String, String> | The content pack configuration. |

#### Returns

This operation does not return a value. Instead, it changes the state of one or more objects.


### contentPackInstalled(name)

This operation checks whether a content pack installed in the current domain.

#### Parameters

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| name      | String | The name of a content pack. |

#### Returns

This operation returns true if the content pack is installed successfully.


### getInstalledContentPack(name)

This operation gets an installed content pack name.

#### Parameters

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| name      | String | The name of a content pack. |

#### Returns

This operation returns the name of the currently installed content pack.


### checkForAvailableUpdates()

his operation requests a list of all content packs that have new versions.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns a list of content packs that have new versions available.




## Call the Certificate Service {% #CallCertificate %}

This service executes BPN task config certificate related operations in content pack scripts. It's used during the execution of a content pack installation, update or deletion.

To call the Certificate service, use the `taskConfigCertService` handle appended to the service operation. For example, `taskConfigCertService.retrieveTaskConfigCertModel(path)`. Here the service calls the `retrieveTaskConfigCertModel` operation and passes one parameter to the operation. The operation returns the existing BPN task config certificate model.

## Certificate Service Operations {% #CertificateOperations %}

Use the `contentPackService` handle to call the following operations:


### deployTaskConfigCertModel(domainCode, modelPath, trustStorePath)

Deploys a BPN task or DEB block certificate model. The model file has to be under `assets/bpn-task-config-cert` folder in the manifest.json file. The truststore file has to be under `assets/bpn-task-config-cert-truststore`.

#### Parameters

| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| domainCode     | String | A domain code for deployment.      |
| modelPath      | String | A BPN task config cert model path. |
| trustStorePath | String | A path to the trustStore file.                                |

#### Returns

This operation returns the BPN task config certificate model.


### retrieveTaskConfigCertModel(path)

Retrieves a BPN task config certificate model from the content pack. The model JSON-file has to be listed under the `assets/bpn-bpn-task-config-cert` folder in the manifest.json file.

#### Parameters

| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| path           | String | A BPN task config cert model path. |

#### Returns

This operation returns the existing BPN task config certificate model.


### deployTaskConfigCertModel(domainCode, certModel, trustStorePath)

Deploys a new or existing BPN task config certificate. The truststore file has to be under `assets/bpn-task-config-cert-truststore` folder in the manifest.json file.

#### Parameters

| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| domainCode     | String | A domain code for deployment.      |
| certModel      | IpcpTaskConfigCertModel | A BPN task config certificate model. |
| trustStorePath | String | A path to the trustStore file.                                |

#### Returns

This operation returns the BPN task config certificate model.


### taskConfigCertExists(domainCode, name)

Checks if a BPN task config certificate exists.

#### Parameters

| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| domainCode     | String | A domain code for deployment.      |
| name           | String | A BPN task config certificate name. |

#### Returns

This operation returns true if a BPN task config certificate exists.


### deleteTaskConfigCert(domainCode, name)

DDeletes a BPN task config certificate.

#### Parameters

| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| domainCode     | String | A domain code for deployment.      |
| name           | String | A BPN task config certificate name. |

#### Returns

This operation does not return a value.



## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

