# Conductor Command Line Interface (CLI) Tool

## Introduction

The Conductor CLI application lets you migrate Amelia knowledge and configurations. You can move these files between Amelia instances, Git repositories, and other locations. It's also possible to export metrics with this application. This tool is for Amelia administrators and engineers.



## What You'll Learn

In this topic, you'll learn about:

* [Authorities needed to use the Conductor CLI Tool](#AuthoritiesNeeded).

* [Getting started with the Conductor CLI tool](#ConducterCLIStart).

* [Downloading the Conductor CLI tool](#DownloadConductor).

* [Running the Conductor CLI tool](#RunConductorCLI).

* [Conductor CLI commands](#ConductorCLICommands).

* [Conductor CLI scripts](#ConductorCLIScripts).

* [Conductor CLI File output](#ConductorCLIFileOutput).



## Authorities Needed to Use the Conductor CLI Tool {% #AuthoritiesNeeded %}

To work with the Conductor CLI tool, your user account needs specific authorities. Which authorities depends on roles and groups assigned to your account.

If you need more details, see the [Users](B01-02_0104-Users-Walkthrough.md), [Roles](B01-02_0203-Roles-Walkthrough.md), [User Groups](B01-02_0303-User-Groups-Walkthrough.md), and [Global User Groups](B01-02_0403-Global-User-Groups-Walkthrough.md) topics. The [Authorities List](B01-02_0600-Authorities-List.md) topic also describes individual authorities.

The authorities detailed here are specific to each content or system type. To access any content, you'll also need to add the AUTHORITY_ADMIN_VIEW authority.

<chapter title="Authorities Needed for Knowledge Resources" collapsible="true" level="5">

| Content Type                                                 | Required Authorities |
|--------------------------------------------------------------|----------------------|
| BPN, SCRIPT, CONSUME WEB SERVICE                             | AUTHORITY_ADMIN_BPN_EDIT, AUTHORITY_ADMIN_BPN_DEPLOY, AUTHORITY_ADMIN_BPN_VIEW |
| TABULAR                                                      | AUTHORITY_TABULAR_ADD, AUTHORITY_TABULAR_EDIT, AUTHORITY_TABULAR_VIEW |
| MULTIMEDIA                                                   | AUTHORITY_ADMIN_CONTENT_MANAGEMENT_VIEW, AUTHORITY_ADMIN_CONTENT_MANAGEMENT_EDIT, AUTHORITY_ADMIN_CONTENT_MANAGEMENT_DELETE |
| GRAMMAR, INTENT, ENTITY, CLASSIFIER, TRAINING, NLU (3.7+ only) | AUTHORITY_TRAINING_VIEW, AUTHORITY_TRAINING_EDIT |
| SEMNET                                                       | AUTHORITY_ADMIN_SEMNET_DOCUMENT_VIEW, AUTHORITY_ADMIN_SEMNET_DOCUMENT_EDIT, AUTHORITY_ADMIN_SEMNET_DOCUMENT_DELETE |
| INTEGRATION_ASSET, INTEGRATION_FLOW, INTEGRATION_PROPERTY_SET | AUTHORITY_ADMIN_INTEGRATION_EDIT, AUTHORITY_ADMIN_INTEGRATION_DEPLOY, AUTHORITY_ADMIN_INTEGRATION_VIEW |
| RESPONSE_POOL | AUTHORITY_RESPONSE_POOL_VIEW, AUTHORITY_RESPONSE_POOL_EDIT |
| AIML | AUTHORITY_ADMIN_AIML_DOCUMENT_VIEW, AUTHORITY_ADMIN_AIML_DOCUMENT_EDIT, AUTHORITY_ADMIN_AIML_DOCUMENT_DELETE |
| Glossary | AUTHORITY_GLOSSARY_VIEW, AUTHORITY_GLOSSARY_EDIT |
| Affective memory | AUTHORITY_ADMIN_HUMANIZATION_RESOURCE_VIEW, AUTHORITY_ADMIN_HUMANIZATION_RESOURCE_EDIT |
| Aspect (v4), Aspect Group (v4) | AUTHORITY_ADMIN_ASPECT_VIEW, AUTHORITY_ADMIN_ASPECT_EDIT |
| Route (v5), Endpoint (v5) | AUTHORITY_ADMIN_ORCHESTRATOR_VIEW, AUTHORITY_ADMIN_ORCHESTRATOR_EDIT |
| Conversation Flow (v5) | AUTHORITY_ADMIN_CONVERSATION_DESIGN_VIEW, AUTHORITY_ADMIN_CONVERSATION_DESIGN_EDIT |
| NLU Route (v5) | AUTHORITY_ADMIN_NLU_ROUTE_VIEW, AUTHORITY_ADMIN_NLU_ROUTE_EDIT |
| Ontology Action (v5), Ontology Object, Ontology Intent Mapping | AUTHORITY_ADMIN_ONTO_VIEW, AUTHORITY_ADMIN_ONTO_EDIT |

</chapter>

<chapter title="Authorities Needed for System Configuration" collapsible="true" level="5">

| Content Type | Required Authorities |
|--------------|----------------------|
| Authentication Policy, Authentication System | AUTHORITY_ADMIN_VIEW, AUTHORITY_ADMIN_RBAC |
| Avatar | AUTHORITY_ADMIN_AVATAR_VIEW, AUTHORITY_ADMIN_AVATAR_EDIT |
| Domain | AUTHORITY_ADMIN_DOMAIN_VIEW, AUTHORITY_ADMIN_DOMAIN_EDIT |
| Escalation Queue | AUTHORITY_ADMIN_ESCALATION_QUEUE_VIEW, AUTHORITY_ADMIN_ESCALATION_QUEUE_EDIT |
| Escalation Team | AUTHORITY_ADMIN_ESCALATION_TEAM_VIEW, AUTHORITY_ADMIN_ESCALATION_TEAM_EDIT |
| Integration Host, Integration Cluster | AUTHORITY_ADMIN_INTEGRATION_VIEW, AUTHORITY_ADMIN_INTEGRATION_EDIT |
| 1Desk Instance | AUTHORITY_ADMIN_ONE_DESK_INSTANCE_VIEW, AUTHORITY_ADMIN_ONE_DESK_INSTANCE_EDIT, AUTHORITY_ADMIN_DOMAIN_VIEW |
| Role | AUTHORITY_ADMIN_VIEW, AUTHORITY_ADMIN_RBAC |
| UI Bundle | AUTHORITY_ADMIN_VIEW, AUTHORITY_ADMIN_UI_BUNDLE_EDIT, AUTHORITY_ADMIN_UI_BUNDLE_DEPLOY |
| User | AUTHORITY_ADMIN_USER_VIEW, AUTHORITY_ADMIN_USER_EDIT |
| User Group | AUTHORITY_ADMIN_VIEW, AUTHORITY_ADMIN_RBAC |
| Themes | AUTHORITY_ADMIN_THEME_VIEW, AUTHORITY_ADMIN_THEME_EDIT |
| Metrics | AUTHORITY_METRICS_VIEW, AUTHORITY_CONVERSATION_EXPORT |
| Virtual Host (v4) | AUTHORITY_ADMIN_VIRTUAL_HOST_VIEW, AUTHORITY_ADMIN_VIRTUAL_HOST_EDIT |



</chapter>



## Getting Started with the Conductor CLI Tool {% #ConducterCLIStart %}

Once your user account has the appropriate authorities, download the tool. There's also a few issues around moving content between major and minor versions. And how to move content for domain hierarchy, if that's an concern for you.

### What version should you use?

Conductor CLI application versions match up with Amelia core versions. Use the Conductor CLI version that matches your Amelia instance. This chart shows which version to use with which Amelia version.

>Mismatching CLI tool versions and Amelia versions can cause errors. New Amelia versions can include breaking changes to features and APIs. And the opposite is true: using a new CLI tool with an older Amelia doesn't work.{style="warning"}

| Amelia/Conductor | 3.7.x | 4.3.x | 5.2.x | 5.6.x | 5.7.x | 6.x |
|------------------|-------|-------|-------|-------|-------|-----|
| 3.7.x            | **Yes**     | No     | No     | No     | No     | No   |
| 4.3.x            | No    | **Yes**     | No     | No     | No     | No   |
| 5.2.x            | No     | No     | **Yes**     | No     | No     | No   |
| 5.6.x            | No     | No     | No     | **Yes**     | No     | No   |
| 5.7.x            | No     | No     | No     | No     | **Yes**     | No   |
| 6.x              | No     | No     | No     | No     | No     | **Yes**   |


### Moving content between major/minor versions of Amelia

You can mix and match Conductor and Amelia versions. However, there is a catch. Major and minor versions might include breaking API changes. It's the reason Conductor release versions match Amelia release versions. The Conductor version is aware of the compatible Amelia version features and changes. Using one Conductor version with a different Amelia version could cause problems.

To move content from an earlier Amelia version to a newer Amelia version, use stages. Use the Conductor 5.6 tool to export content from an Amelia 5.6. Then use a Conductor 6.15.1 tool to import your 5.6 export into an Amelia 6.15 instance.

### How to move contents for domain hierarchy

If your Amelia has multiple domains with parent/child relationships, follow these steps. Export then import the parent domain content first. Then export and import the child domain content. This preserves relationships between parent and child domains and their content.

Assume you have a parent domain called Parent Domain. It has a child domain called Child Domain A. And Child Domain A has a child domain called Child Domain B.

In this scenario, export then import the Parent Domain content first. Then export and import the Child Domain A content. Then export and import Child Domain B content.


## Download Conductor CLI Files {% #DownloadConductor %}

To run V4 and V5 compatible Amelia versions, you must use Java 11 on the host machine. We build and test Conductor CLI using the Amazon Corretto JDK. Other JDK distributions should work. But they're not tested by our developers. You also can use the Docker image if managing multiple Java versions is an issue.

To run Amelia V3 compatible versions, you must install Java 8 on the host machine.

<chapter title="Conductor Engine CLI Versions" collapsible="true" level="5">


| File                            | Amelia Version      | Date        |
|---------------------------------|---------------------|-------------|
| [Conductor Engine CLI 6.15.1](https://artifactory-us.amelia.com/artifactory/libs-release-local/net/ipsoft/amelia/conductor-engine-cli-service/6.15.1/conductor-engine-cli-service-6.15.1.jar) | Amelia Core V6.15.1 | 14 Apr 2025 |
| [Conductor Engine CLI 6.14.3](https://artifactory.amelia.com/ui/repos/tree/General/libs-release-local/net/ipsoft/amelia/conductor-engine-cli-service/6.14.3/conductor-engine-cli-service-6.14.3.jar)    | Amelia Core V6.14.3 | 24 Mar 2025 |
| [Conductor Engine CLI 6.12.0](https://artifactory.amelia.com/ui/repos/tree/General/libs-release-local/net/ipsoft/amelia/conductor-engine-cli-service/6.12.0/conductor-engine-cli-service-6.12.0.jar)    | Amelia Core V6.12.0 | 1 Mar 2025  |
| [Conductor Engine CLI 6.5.8](https://artifactory.amelia.com/ui/repos/tree/General/libs-release-local/net/ipsoft/amelia/conductor-engine-cli-service/6.5.8/conductor-engine-cli-service-6.5.8.jar)     | Amelia Core V6.5.8  | 31 Dec 2024 |
| [Conductor Engine CLI 5.7.9](https://artifactory.ipsoft.com/artifactory/libs-release/net/ipsoft/conductor/conductor-engine-cli-service/5.7.9/conductor-engine-cli-service-5.7.9.jar) |  Amelia Core V5.7 | 22 Sep 2023 |
| [Conductor Engine CLI 5.6.45](https://dtools.ipsoft.com/artifactory/libs-release/net/ipsoft/amelia/conductor-engine-cli-service/5.6.45/conductor-engine-cli-service-5.6.45.jar) |  Amelia Core V5.6 | 31 Dec 2024 |
| [Conductor Engine CLI 5.2.11](https://artifactory.ipsoft.com/artifactory/libs-release/net/ipsoft/conductor/conductor-engine-cli-service/5.2.11/conductor-engine-cli-service-5.2.11.jar) |  Amelia Core V5.2 | 25 Jan 2023 |
| [Conductor Engine CLI 4.3.50](https://artifactory.ipsoft.com/artifactory/libs-release/net/ipsoft/conductor/conductor-engine-cli-service/4.3.50/conductor-engine-cli-service-4.3.50.jar) |  Amelia Core V4 | 16 May 2023 |

</chapter>




## Run the Conductor CLI Tool {% #RunConductorCLI %}

Once you download and start the Conductor CLI file, type this command to run the application:

`java -jar conductor-engine-cli-service-<version>.jar`

Running the application without any options will display an interactive shell. You will see a screen like this one:

![B20-01_0001-Conductor-Screen.png](B20-01_0001-Conductor-Screen.png){width="800"}



## Conductor CLI Commands {% #ConductorCLICommands %}

Use the `conductor-cli:>` prompt to work with commands.

<chapter title="Basic Commands" collapsible="true" level="5">

From the `conductor-cli:>` prompt, typing the `help` command will display all of the available commands.

<code-block lang="Java">
conductor-cli:>help

AVAILABLE COMMANDS

Amelia Aiml Command
amelia-aiml-clean: Delete AIML files from an Amelia instance.
amelia-aiml-export: Export a collection of AIML files from an Amelia instance.
amelia-aiml-import: Import AIML files into an Amelia instance.

Amelia Authentication Command
amelia-authentication-policy-export: Export a collection of authentication policies from an Amelia instance.
amelia-authentication-policy-import: Import a collection of authentication policies into an Amelia instance.
amelia-authentication-system-export: Export a collection of authentication systems from an Amelia instance.
amelia-authentication-system-import: Import a collection of authentication systems into an Amelia instance.
amelia-login: Login to an Amelia instance with a username and password.
amelia-logout: Logout an existing session with an Amelia instance

Amelia Bpn Command
amelia-bpn-clean: Delete a collection of BPNs from an Amelia instance. BPNs that reference BPNs to be deleted will be undeployed.
amelia-bpn-export: Export a collection of BPNs from an Amelia instance.
amelia-bpn-import: Import BPNs into an Amelia instance.

Amelia Classifier Command
amelia-classifier-clean: Delete a collection of classifier models from an Amelia instance.
amelia-classifier-export: Export a collection of classifier models from an Amelia instance.
amelia-classifier-import: Import classifier models into an Amelia instance.

Amelia Domain Command
amelia-domain-export: Export a collection of domains from an Amelia instance.
amelia-domain-import: Import content from an Amelia instance.

Amelia Entity Command
amelia-entity-clean: Clean a collection of entities from an Amelia instance. Requires BPNs to be undeployed before an entity can be deleted if it is used in an 'ask for the slot' task.
amelia-entity-export: Export a collection of entities from an Amelia instance.
amelia-entity-import: Import entities into an Amelia instance.

Amelia Escalation Command
amelia-escalation-queue-clean: Delete collection of escalation queues from an Amelia instance.
amelia-escalation-queue-export: Export a collection of escalation queues from an Amelia instance.
amelia-escalation-queue-import: Import escalation queues into an Amelia instance.
amelia-escalation-team-clean: Delete collection of escalation teams from an Amelia instance.
amelia-escalation-team-export: Export a collection of escalation teams from an Amelia instance.
amelia-escalation-team-import: Import escalation teams into an Amelia instance.

Amelia Grammar Command
amelia-grammar-clean: Delete a collection of grammars from an Amelia instance.
amelia-grammar-export: Export a collection of grammars from an Amelia instance.
amelia-grammar-import: Import grammars into an Amelia instance.

Amelia Integration Command
amelia-integration-asset-clean: Delete a collection of integration assets from an Amelia instance.
amelia-integration-asset-export: Export a collection of integration assets from an Amelia instance.
amelia-integration-asset-import: Import integration assets into an Amelia instance.
amelia-integration-flow-clean: Delete a collection of integration flows from an Amelia instance. To undeploy and delete an integration flow, any BPNs that reference the flow will be undeployed.
amelia-integration-flow-export: Export a collection of integration flows from an Amelia instance.
amelia-integration-flow-import: Import integration flow into an Amelia instance.
amelia-integration-property-set-clean: Delete a collection of integration property sets from an Amelia instance.
amelia-integration-property-set-export: Export a collection of integration property sets from an Amelia instance.
amelia-integration-property-set-import: Import integration property sets into an Amelia instance.

Amelia Intent Command
amelia-intent-clean: Delete a collection of intents from an Amelia instance.
amelia-intent-export: Export a collection of intents from an Amelia instance.
amelia-intent-import: Import intents into an Amelia instance.

Amelia Metrics Command
amelia-metrics-export: Export chat metrics from an Amelia instance for a given date range.

Amelia Multimedia Command
amelia-multimedia-clean: Delete a collection of multimedia resources from an Amelia instance.
amelia-multimedia-export: Export a collection of multimedia resources from an Amelia instance.
amelia-multimedia-import: Import multimedia resources into an Amelia instance.

Amelia Nlu Command
amelia-nlu-export: Export the NLU settings for a domain from an Amelia instance.
amelia-nlu-import: Import the NLU settings for a domain into an Amelia instance.

Amelia Response Pool Command
amelia-response-pool-clean: Delete a collection of response pools and their entries from an Amelia instance.
amelia-response-pool-export: Export a collection of response pools and their entries from an Amelia instance.
amelia-response-pool-import: Import response pools into an Amelia instance.

Amelia Script Command
amelia-script-clean: Delete a collection of script libraries from an Amelia instance.
amelia-script-export: Export a collection of script libraries from an Amelia instance.
amelia-script-import: Import script libraries an Amelia instance.

Amelia Semnet Command
amelia-semnet-clean: Delete SemNet documents from an Amelia instance.
amelia-semnet-export: Export a collection of BPNs from an Amelia instance.
amelia-semnet-import: Import SemNet documents into an Amelia instance.

Amelia Tabular Command
amelia-tabular-clean: Delete tabular data from an Amelia instance.
amelia-tabular-export: Export a collection of tabular data from an Amelia instance.
amelia-tabular-import: Import tabular data into an Amelia instance.

Amelia Training Command
amelia-training-clean: Deleting training documents from an Amelia instance.
amelia-training-export: Export a collection of training documents from an Amelia instance.
amelia-training-import: Import training documents into an Amelia instance.

Amelia UI Command
amelia-ui-bundle-export: Export a collection of UI bundles from an Amelia instance.
amelia-ui-bundle-import: Import UI bundles into an Amelia instance.

Amelia User Command
amelia-user-clean: Delete users from an Amelia instance.
amelia-user-export: Export a collection of users from an Amelia instance.
amelia-user-group-clean: Delete user groups from an Amelia instance.
amelia-user-group-export: Export a collection of user groups from an Amelia instance.
amelia-user-group-import: Import user groups into an Amelia instance.
amelia-user-import: Import users into an Amelia instance.
amelia-user-role-export: Export a collection of user roles from an Amelia instance.
amelia-user-role-import: Import user roles into an Amelia instance.

Built-In Commands
clear: Clear the shell screen.
exit, quit: Exit the shell.
help: Display help about available commands.
history: Display or save the history of previously run commands
script: Read and execute commands from a file.
stacktrace: Display the full stacktrace of the last error.

Git Repository Command
git-add: Clone a git repository to a local directory
git-clone: Clone a git repository to a local directory
git-commit: Clone a git repository to a local directory
git-push: Clone a git repository to a local directory

One Desk Command
amelia-one-desk-export: Export a collection of 1Desk instances from an Amelia instance.
amelia-one-desk-import: Import 1Desk instances into an Amelia instance.

One Rpa Command
amelia-one-rpa-export: Export a collection of 1RPA instances from an Amelia instance.
amelia-one-rpa-import: Import 1RPA instances into an Amelia instance.
</code-block>

</chapter>


<chapter title="Amelia V4.x Commands" collapsible="true" level="5">

In Amelia V4, we added new features. New commands in the CLI 4.x versions support these new features.

<code-block lang="Java">

Amelia Aspect Command
amelia-aspect-clean: Delete a collection of aspects from an Amelia instance.
amelia-aspect-group-clean: Delete a collection of aspect groups from an Amelia instance.
amelia-aspect-export: Export a collection of aspects from an Amelia instance.
amelia-aspect-group-export: Export a collection of aspect groups from an Amelia instance.
amelia-aspect-group-import: Import aspect groups into an Amelia instance.
amelia-aspect-import: Import aspects into an Amelia instance.

Amelia Auto Translation Command
amelia-auto-translation-export: Export a collection of auto translation from an Amelia instance.
amelia-auto-translation-clean: Delete a collection of auto translation from an Amelia instance.
amelia-auto-translation-import: Import a collection of auto translation from an Amelia instance.

Amelia Humanization Resource Command
amelia-affective-memory-resource-import: Import affective memory resources into an Amelia instance.
amelia-affective-memory-resource-export: Export a collection of affective memory resources from an Amelia instance.
amelia-affective-memory-resource-clean: Delete affective memory resources from an Amelia instance.

Amelia Integration Template Command
amelia-integration-template-clean: Delete a collection of integration templates from an Amelia instance.
amelia-integration-template-export: Export a collection of integration templates from an Amelia instance.
amelia-integration-template-import: Import integration template into an Amelia instance.

Amelia Semantic Mapping Command
amelia-semantic-mapping-clean: Delete a collection of semantic mappings from an Amelia instance.
amelia-semantic-mapping-export: Export a collection of semantic mappings from an Amelia instance.
amelia-semantic-mapping-import: Import semantic mappings into an Amelia instance.

Amelia Virtual Host Command
amelia-virtual-host-clean: Delete a collection of virtual hosts from an Amelia instance.
amelia-virtual-host-export: Export a collection of virtual hosts from an Amelia instance.
amelia-virtual-host-import: Import a collection of virtual hosts into an Amelia instance.

Amelia Web Service Command
amelia-consume-web-auth-clean: Delete consume web service auth from an Amelia instance.
amelia-consume-web-auth-export: Export collection of consume web service auth from an Amelia instance.
amelia-consume-web-auth-import: Import consume web service auth into an Amelia instance.
amelia-consume-web-cert-clean: Delete consume web service certificate from an Amelia instance.
amelia-consume-web-cert-export: Export collection of consume web service certificates from an Amelia instance.
amelia-consume-web-cert-import: Import consume web service certificates into an Amelia instance.
amelia-consume-web-proxy-clean: Delete consume web service proxy setting from an Amelia instance.
amelia-consume-web-proxy-export: Export collection of consume web proxy settings from an Amelia instance.
amelia-consume-web-proxy-import: Import consume web proxy settings into an Amelia instance.
amelia-consume-web-urls-clean: Delete consume web service url from an Amelia instance.
amelia-consume-web-urls-export: Export a collection of consume web service urls from an Amelia instance.
amelia-consume-web-urls-import: Import consume web service urls into an Amelia instance.

One Store Command
amelia-one-store-clean: Delete a collection of 1Store instances from an Amelia instance.
amelia-one-store-export: Export a collection of 1Store instances from an Amelia instance.
amelia-one-store-import: Import 1Store instances into an Amelia instance.

</code-block>

</chapter>


<chapter title="Amelia 5.x Commands" collapsible="true" level="5">

In Amelia V5, we added new features. New commands in the CLI 4.x versions support these new features.

<code-block lang="Java">

Amelia Nlu Route Command
amelia-nlu-route-export: Export a collection of nlu route from an Amelia instance.
amelia-nlu-route-import: Import nlu route into an Amelia instance.
amelia-nlu-route-clean: Delete a collection of nlu route from an Amelia instance.

Amelia Web Service Command
amelia-consume-web-action-clean: Delete collection of consume web action from an Amelia instance.
amelia-consume-web-action-export: Export collection of consume web action from an Amelia instance.
amelia-consume-web-action-import: Import collection of consume web action from an Amelia instance.

Deb Flow Command
amelia-deb-flow-import: Import DEB flow into an Amelia instance.
amelia-deb-flow-clean: Delete a collection of DEB flows from an Amelia instance.
amelia-deb-flow-export: Export a collection of DEB flows from an Amelia instance.

Orchestrator Endpoint Command
amelia-endpoint-clean: Delete EndPoint files from an Amelia instance.
amelia-endpoint-export: Export a collection of EndPoint from an Amelia instance.
amelia-endpoint-import: Import EndPoint into an Amelia instance.

Orchestrator Route Command
amelia-route-clean: Delete routes files from an Amelia instance.
amelia-route-export: Export a collection of routes files from an Amelia instance.
amelia-route-import: Import routes files into an Amelia instance.

Amelia Ontology Command
amelia-ontology-action-clean: Delete a collection of ontology action from an Amelia instance.
amelia-ontology-mapping-clean: Delete a collection of ontology intent mapping from an Amelia instance.
amelia-ontology-object-import: Import ontology object into an Amelia instance.
amelia-ontology-mapping-import: Import ontology intent mapping into an Amelia instance.
amelia-ontology-action-export: Export a collection of ontology action from an Amelia instance.
amelia-ontology-object-export: Export a collection of ontology object from an Amelia instance.
amelia-ontology-object-clean: Delete a collection of ontology object from an Amelia instance.
amelia-ontology-mapping-export: Export a collection of ontology intent mapping from an Amelia instance.

</code-block>

</chapter>


<chapter title="Help Commands" collapsible="true" level="5">

Typing the `help` command followed by another command displays more information. This includes available options and default values.

<code-block lang="Java">

conductor-cli:>help amelia-login

NAME
amelia-login - Login to an Amelia instance with a username and password.

SYNOPSYS
amelia-login [--url] string  [[--username] string]  [[--password] string]  [--ignore-cert-errors]

OPTIONS
--url  string

                [Mandatory]
 
        --username  string
                 
                [Optional, default = ]
 
        --password  string
                 
                [Optional, default = ]
 
        --ignore-cert-errors   
                [Optional, default = false]

</code-block>

The `help amelia-bpn-import` command displays different import and deployment strategies.

<code-block lang="Java">

conductor-cli:>help amelia-bpn-import

NAME
amelia-bpn-import - Import BPNs into an Amelia instance.

SYNOPSYS
amelia-bpn-import [--url] string  [--directory] string  [--domain-code] string  [[--names] string]  [[--ids] string]  [[--import-strategy] import-strategy]  [[--deploy-strategy] bpn-deploy-strategy]  [--with-dependencies]

OPTIONS
--url  string
[Mandatory]

	--directory  string
		[Mandatory]

	--domain-code  string
		[Mandatory]

	--names  string
		[Optional, default = ,]

	--ids  string
		[Optional, default = ,]

	--import-strategy  import-strategy
		Following import strategies are available - 
		ADD - import BPN only if it's not available in target.
		MERGE - import and updates the BPN if they are not same.
		OVERWRITE - import the BPN after deleting existing one if available.
		[Optional, default = MERGE]

	--deploy-strategy  bpn-deploy-strategy
		Following BPN deploy strategies are available to choose from :
		0 - No deployment of imported BPNs.
		1 - Attempts to deploy only specific BPNs that are imported (Preserve source deployment status).
		2 - Attempts to deploy all specific BPNs that are imported.
		3 - Deploys the latest revision of dependent BPNs (Preserve source deployment status of imported BPNs).
		4 - Deploys the latest revision of dependent BPNs (Attempts to deploy all imported BPNs).
		5 - Deploy only new or undeployed dependent BPNs (Preserve source deployment status of imported BPNs).
		6 - Deploy only new or undeployed dependent BPNs (Deploys all imported BPNs).
		7 - Deploys all imported and latest revision of dependent BPNs (re-deploys deployed dependent BPNs).
		[Optional, default = 5]

	--with-dependencies	
		Use this flag to import all dependencies associated with the BPN within the domain.
		(for eg. run the workflow tasks, escalation queue, script, integration flow, intent, entity, response pool and multimedia.)
		[Optional, default = false]

conductor-cli:>

</code-block>

</chapter>




## Conductor CLI Scripts {% #ConductorCLIScripts %}

You can write scripts that list commands. This lets you customize repeatable Conductor processes. Scripts files are plain text files created with any text editor. They do not require a specific file extension.

Scripts cannot use variables or conditional logic. But they support comments, using // before a comment. The comment feature uses the Spring Shell. Learn more at the [Spring documentation](https://docs.spring.io/spring-shell/docs/2.0.0.RELEASE/reference/htmlsingle/#script-command) and the [spring.io website](https://spring.io/).

>When using a directory as a value, use the correct operating systems file path separator. This is usually a backslash \ on Windows or forward slash / on macOS and *nix systems.{style="note"}

To run a script file, add it to the application start command. Use an @ symbol before the file path.

`java -jar conductor-engine-cli-service-<version>.jar @path/to/script/file`

>Don't forget to include the exit command at the end of every script file. If this is not present, the CLI application process will continue to run.{style="warning"}


<chapter title="Export Amelia Knowledge and Domain Configuration" collapsible="true" level="5">

This script logs in to the Amelia instance specified by the `--url` option. Note, this will prompt for a username and password. Use the `--username` and `--password` options to prevent prompting for these values.

You can avoid prompting without including `--username` and `--password` in a script. Instead, pass in outside environment variables as shown in this command. This assumes that both the username and password are not included in the script.

`printf "email\npassword\n" | java -jar conductor-engine-cli-<version>.jar @path/to/your/script`

Execute the `amelia-login --url https://Amelia_URL_path/Amelia` command first. This allows any following commands to run using the same Amelia instance URL. Each following command will then run in sequence.

<code-block lang="Java">

//
// This script will export all of the most used knowledge content from an Amelia instance to a local file system directory.
// The domain configuration will also be exported with its dependencies.
// This script will also handle logging in and out of the instance and exiting the CLI application once finished.
//
// login to the specified Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// export a domain and its dependencies. This command will also create directories and files for the dependencies of the domain
// To export domain configuration without RBAC privilege, use flag --no-rbac-authority
amelia-domain-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export AIML content
amelia-aiml-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export BPN content
amelia-bpn-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export NLU settings
amelia-nlu-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export classifier model content (To export latest revisions of classifier (by default: DEPLOYED) use the following : --revisionTarget LATEST)
// To exports classifier in bulk, use the following flag : --bulk
amelia-classifier-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export entity content
amelia-entity-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export grammar content
amelia-grammar-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export affective memory content
amelia-affective-memory-resource-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export glossary/auto translation content
amelia-auto-translation-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export integration asset content
amelia-integration-asset-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export integration property set content
amelia-integration-property-set-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export integration flow content
amelia-integration-flow-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export integration template content
amelia-integration-template-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export intent content
amelia-intent-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export ontology action content
amelia-ontology-action-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export ontology object content
amelia-ontology-object-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export ontology intent mapping content
amelia-ontology-mapping-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export multimedia content in the content manager
amelia-multimedia-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export response pool content
amelia-response-pool-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export script library content (To export specific scripts or recursively, use the following (by default: SPECIFIC): --export-strategy  SPECIFIC/RECURSIVE)
amelia-script-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export semnet document content
amelia-semnet-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export tabular data content
amelia-tabular-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export training document content
amelia-training-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export escalation queues and the escalation teams that are associated with it.
amelia-escalation-queue-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export consume web urls
amelia-consume-web-urls-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export consume web auth (passwords are not exported)
amelia-consume-web-auth-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export consume web proxy (passwords are not exported
amelia-consume-web-proxy-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export consume web action content
amelia-consume-web-action-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export endpoint content
amelia-endpoint-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export route content
amelia-route-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export DEB flow content
amelia-deb-flow-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// export nlu route content
amelia-nlu-route-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain  
// log out of the Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Import No Domain and Content into an Amelia Instance" collapsible="true" level="5">

This script imports content that was exported into another instance. This script logs in to a different instance than the one used in the previous export script. You could combine these two scripts into one. Users can log in to multiple Amelia instances at a time.

The next command imports the domain configuration. The command creates the domain if it does not already exist. Following commands import the content types. The import order takes dependencies into account.

>Content import order is very important. This script takes dependencies into account. For example, it imports BPNs last because they rely on other content types.{style="note"}

<code-block lang="Java">

//
// This script will import all of the most used knowledge content from a local directory into an Amelia instance.
// The local directory used should contain content that was previously exported with Conductor.
// The domain configuration will also be imported with its dependencies.
// The order in which commands are executed matters when importing so dependencies can be properly resolved.
// This example scripts follows the latest recommended import order.
// This script will also handle logging in and out of the instance and exiting the CLI application once finished.
//
// login to the specified Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// import the domain configuration, this will create or update domain and import set of the dependencies required by the domain.
// Give --parent-code to set the parent domain code for the domain which is getting imported.
// Authentication policy setting for the domain will be same if it is already available in target instance otherwise authentication system/policy gets imported.
// To import domain configuration without RBAC privilege, use flag --no-rbac-authority
amelia-domain-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain --parent-code target_parent_domain
// import AIML content, no dependencies required
amelia-aiml-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import tabular data content, no dependencies required
amelia-tabular-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import semnet document content, no dependencies required
amelia-semnet-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import multimedia content, no dependencies required
amelia-multimedia-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import response pool content, no dependencies required
amelia-response-pool-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import grammar content, no dependencies required
amelia-grammar-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import affective memory content
amelia-affective-memory-resource-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import glossary/auto translation content
amelia-auto-translation-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import entity content, dependant on grammars and tabular data
amelia-entity-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import intent content, dependant on entities
amelia-intent-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import ontology action content
amelia-ontology-object-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import ontology intent mapping content
amelia-ontology-mapping-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import training document content, dependant on intents and entities
amelia-training-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import NLU settings
amelia-nlu-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import classifier model content, dependant on intents, entities, and training documents
// To import classifier in bulk, use the following flag : --bulk
amelia-classifier-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import script library content
amelia-script-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import integration asset content
amelia-integration-asset-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import integration property set content
amelia-integration-property-set-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import integration flow content
amelia-integration-flow-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import integration template content
amelia-integration-template-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import escalation queues and the escalation teams that are associated with it.
amelia-escalation-queue-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import consume web auth (Note - password needs to be re-entered in Admin UI)
amelia-consume-web-auth-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import consume web proxy (Note - password needs to be re-entered in Admin UI)
amelia-consume-web-proxy-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import consume web action content
amelia-consume-web-action-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import consume web urls
amelia-consume-web-urls-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import DEB flow content
amelia-deb-flow-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import BPN content
amelia-bpn-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import endpoint content
amelia-endpoint-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import route content
amelia-route-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import nlu route content
amelia-nlu-route-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// import the domain configuration, this will update domain configuration. Give --parent-code to set the parent domain code for the domain which is getting imported.
amelia-domain-import --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain --parent-code target_parent_domain
// log out of the Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Clean Content from No Target Domain" collapsible="true" level="5">

This script cleans and then deletes content in an Amelia instance. The order in which you delete content is also important. This script uses the recommended order. Note that it is the reverse of the import order.

<code-block lang="Java">

//
// This script will clean (delete) all of the most used knowledge content in an Amelia instance.
// The order in which commands are executed matters when cleaning so dependencies can be properly resolved.
// This example script follows the latest recommended import order.
// This script will also handle logging in and out of the instance and exiting the CLI application once finished.
//
// login to the specified Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// clean all BPN content, usually happens first because of the many potential dependencies
amelia-bpn-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all nlu route content from domain
amelia-nlu-route-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all DEB flow content from domain
amelia-deb-flow-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all classifier model content, needs to happen before intents and entities
// Bulk clean can be used to delete all classifier models in a faster way. Use following flag : --bulk
amelia-classifier-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all ontology mapping content
amelia-ontology-mapping-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all ontology object content
amelia-ontology-object-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all ontology action content
amelia-ontology-action-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all entity content, needs to happen before tabular data
// Bulk clean can be used to delete all entities in a faster way. Use following flag : --bulk
amelia-entity-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all intent content, needs to happen before grammars
// Bulk clean can be used to delete all intents in a faster way. Use following flag : --bulk
amelia-intent-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all grammar content
amelia-grammar-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all integration template content
amelia-integration-template-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all integration flow content, needs to happen before assets and property sets
amelia-integration-flow-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all asset content
amelia-integration-asset-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all property set content
amelia-integration-property-set-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all multimedia content
amelia-multimedia-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all response pool content
amelia-response-pool-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all script library content
amelia-script-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all semnet document content
amelia-semnet-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all tabular data content
amelia-tabular-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all training document content
amelia-training-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all AIML content
amelia-aiml-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all escalation queue from domain
amelia-escalation-queue-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean affective memory content
amelia-affective-memory-resource-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean glossary/auto translation content
amelia-auto-translation-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all endpoint from domain
amelia-endpoint-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all route from domain
amelia-route-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all consume web action content from domain
amelia-consume-web-action-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all consume web url
amelia-consume-web-urls-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all consume web auth
amelia-consume-web-auth-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// clean all consume web proxy
amelia-consume-web-proxy-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
// log out of the Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Migrate Authentication Systems and Policies" collapsible="true" level="5">

This script exports authentication polcies and systems from one instance and imports them in another. It will also handle logging in and out of the instances and exiting the CLI application once finished.

<code-block lang="Java">

//
// This script exports authentication polcies and systems from one instance and imports them in another.
// This script will also handle logging in and out of the instances and exiting the CLI application once finished.
//
// log in to the specified Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// export authentication policies and the authentication systems they depend on
amelia-authentication-policy-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain
// log out of Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia

// log in to another Amelia instance
amelia-login --url https://Another_Amelia_URL_path/Amelia
// import authentication polcicies and the authentication systems they depend on
amelia-authentication-policy-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain
// log out of Amelia instance
amelia-logout --url https://Another_Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Escalation Queues and Teams Commands" collapsible="true" level="5">

This script includes the export, import, and clean commands for escalation queues and teams.

<code-block lang="Java">

//
// Below are the export, import and clean commands for escalation queues and teams.
//

// export escalation queues from the domain and the escalation teams they depend on
amelia-escalation-queue-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// import escalation queues and the escalation teams they depend on
amelia-escalation-queue-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// clean escalation queues from target domain
amelia-escalation-queue-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain

// export all escalation teams from Amelia instance
amelia-escalation-team-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain
// import escalation teams in Amelia instance
amelia-escalation-team-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain
// clean all escalation teams from Amelia instance
amelia-escalation-team-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
exit

</code-block>

</chapter>


<chapter title="Users and User Groups Commands" collapsible="true" level="5">

This script includes export, import, and clean commands available for users and user groups in an Amelia instance.

>Imported users will not have passwords set if using the Default Authentication policy, the system does not allow these passwords to be exported.{style="warning"}

<code-block lang="Java">

//
// Below are export, import and clean commands available for users and user groups in an Amelia instance.
// NOTE: Imported users will not have passwords set if using the Default Authentication policy, the system does not allow these passwords to be exported.
//

// export users as well as the groups, roles, and authentication polcies they depend on
amelia-user-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain

// import users as well as the groups, roles, and authentication polcies they depend on
// Use following option for choosing import strategy: --import-strategy  [user-import-strategy][Optional, default = 1]
// Following user import strategies are available to choose from :
//	0 - Import only users (maps with only default authentication policy).
//	1 - Import users and maps existing user group and auth policy only if it's present in target.
//	2 - Import users with dependencies (imports user group & authentication policy if they are not present in target).
amelia-user-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain

// clean all users from target domain
amelia-user-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain

// export user groups from source domain
amelia-user-group-export --url https://Amelia_URL_path/Amelia --domain-code source_domain

// import user groups in target domain
amelia-user-group-import --url https://Another_Amelia_URL_path/Amelia --domain-code target_domain

// clean all user groups from target domain
amelia-user-group-clean --url https://Amelia_URL_path/Amelia --domain-code target_domain
exit

</code-block>

</chapter>


<chapter title="Migrate UI Bundles" collapsible="true" level="5">

This script exports UI bundles from one instance and imports them in another. It also will handle logging in and out of the instances and exiting the CLI application once finished.

<code-block lang="Java">

//
// This script exports UI bundles from one instance and imports them in another.
// This script will also handle logging in and out of the instances and exiting the CLI application once finished.
//
// log in to the specified Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// export UI bundles
amelia-ui-bundle-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain
// log out of Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia

// log in to another Amelia instance
amelia-login --url https://Another_Amelia_URL_path/Amelia
// import UI bundles
amelia-ui-bundle-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain
// log out of Amelia instance
amelia-logout --url https://Another_Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Migrate with Dependencies" collapsible="true" level="5">

This script command exports BPNs or domains configuration along with all dependencies from one instance and imports it into another. Additional notes are in the script.

>Only dependencies which are present in the domain mentioned in the command will get migrated.{style="note"}

<code-block lang="Java">

//
// This script command exports BPNs or domains configuration along with all dependencies from one instance and imports it into another.
// NOTE: Only dependencies which are present in the domain mentioned in the command gets migrated.
// To enable this feature, following flag is required : --with-dependencies
// For migrating  specific BPNs using names or ids, use the following : --names {comma separated names} --ids {comma separated ids}
// This script will also handle logging in and out of the instances and exiting the CLI application once finished.
// NOTE: BPNs and Domains can have a lot of dependencies. It is likely that when running this script more than just a bpn or domain file will be exported.
// The files exported will only contain additional configurations required by the BPN or Domain, NOT the rest of the content that is in the domain.
// The content specific commands are to be used for those activities, these commands are for migrating along with their dependencies.

// log in to the specified Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// export domain configuration and all of its dependencies
amelia-domain-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain --with-dependencies
// log out of Amelia instance
// export BPN content
amelia-bpn-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain --with-dependencies
// log out of Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia

// log in to another Amelia instance
amelia-login --url https://Another_Amelia_URL_path/Amelia
// import a domain and all of its dependencies, give --parent-code to set the parent domain code for the domain which is getting imported.
amelia-domain-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code source_domain --parent-code target_parent_domain --with-dependencies
// import BPN content
amelia-bpn-import --url https://Another_Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-code target_domain --with-dependencies
// log out of Amelia instance
amelia-logout --url https://Another_Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Metrics Export" collapsible="true" level="5">

This script exports Amelia conversation metrics and transcripts. It uses a list of domains for a given date range.

<code-block lang="Java">

//
// This script will export Amelia conversation metrics and transcripts from a list of domains for a given date range.
// This script will also handle logging in and out of the instances and exiting the CLI application once finished.
// To export metrics from list of domain, use comma separated domain codes like : --domain-codes domain1,domain2,domain3
// --start-date and --end-date should be in following date format: yyyy-MM-ddThh:mm:ssZ
// To include context, use following flag : --include-context
// To include escalation, use following flag : --include-escalation
// To include transcript, use following flag : --include-transcript
// To use user language in transcript, use following flag : --use-user-language
// To lookup by summary created date rather than conversation finished date, use following flag : --user-summary-created-dates
// To use different time zone, use following flag : --time-zone
// To create Eddie replay test files for each conversation exported, use following flag : --replay
// log in to another Amelia instance
amelia-login --url https://Amelia_URL_path/Amelia
// export Amelia conversation metrics
amelia-metrics-export --url https://Amelia_URL_path/Amelia --directory /tmp/conductor/source_domain --domain-codes source_domain --start-date 2021-01-01T10:15:30.00Z --end-date 2021-07-19T10:15:30.00Z --include-context --include-escalation --include-transcript --replay
// log out of Amelia instance
amelia-logout --url https://Amelia_URL_path/Amelia
// shut down the application, it is important to include this otherwise the CLI process will not finish and return control back to the parent shell
exit

</code-block>

</chapter>


<chapter title="Configure Thread Pooling" collapsible="true" level="5">

You can customize the maximum number of threads in a thread pool. Use the thread-pool-setting command. The default thread pool size is 16.

<code-block lang="Java">

// below command will increase the maximum thread in thread pool to 20
thread-pool-setting --threadCount 20

</code-block>

</chapter>


<chapter title="Configure Logging" collapsible="true" level="5">

To customize logging behavior, set a configuration file as a system property. Then run the application with this command.

Learn more [here at the Logback documentation](https://logback.qos.ch/manual/configuration.html).

<code-block lang="Java">

java -Dlogging.config=/path/to/logback.xml -jar /path/to/jar

</code-block>

</chapter>


<chapter title="Configure Proxies" collapsible="true" level="5">

Conductor can connect instances via proxy. Use the following arguments when running the application.

<code-block lang="Java">

java -Dhttps.proxyHost=<PROXY_HOST> -Dhttps.proxyPort=<PORT> -Dhttps.proxySet=true -jar conductor-engine-cli-service-<version>.jar

</code-block>

</chapter>






## Conductor File System Output {% #ConductorCLIFileOutput %}

Running export commands creates output at a location specified by the `--directory` setting. Corresponding import commands look for dependencies in the same structure.

>Once written to the file system, do not modify any files or their locations.{style="warning"}

<chapter title="File System Output Example" collapsible="true" level="5">

<code-block lang="Java">

<directory_root> /
	 aiml/
		aiml_list.json - list of AimlObjectListModel metadata.
		*.aiml - There will be an XML file for each AIML file that can be imported into Amelia admin.

	 affective_memory/
	 	affective_memory_resource_list.json - list of HumanizationResourceModel metadata.

 	 auto_translation/
			<locale>_glossary.json - There will be a json for each locale GlossaryModel metadata.
		 	locale_list.json - list of LocaleModel metadata used in glossary.
			export/
				<locale>.csv - There will be a CSV file for each locale.
  
     bpn_migration/bpn/
		bpn_annotation_list.json - list of BpnAnnotationSystemInstanceModel metadata.
		bpn_model_list.json - list of BpnModel metadata.
		bpn_revision_list.json - list of BpnRevisionModel metadata.
		bpn_tree.json - list of BpnTreeNode metadata.
		bpn_validation_export.json - list of BpnValidationModel metadata after export.
		bpn_validation_import.json - list of BpnValidationModel metadata after import.
		. - The folder structure from the instance will be recreated with an XML file or each BPN that can be imported into Amelia admin.

	deb_flow/
	 	deb_flow_list.json - list of ConversationFlowListModel metadata.
	 	deb_flow_revisions.json - list of ConversationFlowRevisionModel metadata.

	classifier/
		classifier_list.json - list of ClassifierModelListModel metadata
		. - There will be a ZIP file for each classifier model exported that can be imported into Amelia admin.
		bulk/
			classifier_bulk_list.json - bulk model metadata.
			domaincode.zip - compressed classifier resource.
		.- The folder structure is created upon using --bulk command during classifier export/import.

 	consume_web/
		 url_list.json - list of consume web url metadata.
		 auth_list.json - list of consume web auth metadata.
		 cert_list.json - list of consume web cert metadata.
		 proxy_list.json - list of consume web proxy metadata.

	consume_web_action/
		 ws_action_tree.json - list of ConsumeWsActionTreeListModel metadata.
		 ws_action_model_list.json - list of ConsumeWsActionModel metadata.

	orchestrator/
		 endpoint/
			endpoint_list.json - list of EndpointDto metadata.
		 route/
			route_list.json - list of RouteDto metadata.
	ontology/
		 object/
		 	ont_object_list.json - list of ontology object metadata.
		 action/
		 	ont_action_list.json - list of ontology action metadata.
		 mapping/
		 	ont_mapping_list.json - list of ontology intent mapping metadata.

	entity/
		entity_list.json - list of EntityListModel metadata.
		entity_question_list.json - list of EntityQuestionModel metadata.
		entites.json - entities JSON file can than be imported into Amelia admin.

	grammar/
		grammar_list.json - list of NluGrammarListModel metadata
		grammars.xml - grammars XML file that can be imported into Amelia admin.

	integration_asset/
		asset_list.json - list of IntegrationAssetModel metadata.
		. - There will be a binary file for each integration asset

	integration_property_set/
		set_list.json - list of IntegrationPropertySetModel metadata
		. - There will be a plain text .properties file for each property set.

	integration_flow_migration/integration_flow/
		flow_list.json - list of IntegrationFlowModel metadata
		. - There will be an XML file for each integration flow main context.

 	integration_template/
	 	template_list.json - list of IntegrationTemplateModel metadata.

	intent/
		intent_faq_annotation_list.json - list of AnnotationSystemInstanceModel metadata
		intent_faq_utterance_list.json - list of IntentUtteranceModel metadata
		intent_list.json - list of  IntentListModel metadata
		intents.tsv - intents TSV file that can be imported into Amelia admin.

	metrics/
		metric_export_timestamp.json - Chat metrics in json format.
		tests/
			test-export-date.replay - Replay conversation file in json format.

	multimedia/
		bucket_list.json - list of ContentBucketModel metadata
		. - There will be a directory for each bucket, and in each directory will be resource_list.json file and a binary file for each resource.
			The resource_list.json file will be a list of ContentResourceMetadata metadata.

 	nlu_routes/
		nlu_route_model_list.json - list of NluRouteModel metadata

	response_pool/
		annotation_list.json - list of AnnotationSystemInstanceModel metadata
		group_list.json - list of  ResponsePoolGroupModel metadata
		pool_list.json - list of ResponsePoolModel metadata
		. - Directories will be created for each response pool group and response pool. 
			For each response pool directory there will be an entry_list.json file which is a list of ResponsePoolEntryModel metadata.

	script/
		script_model_list.json list of ScriptModel metadata
		script_tree.json - list of ScriptTreeNode metadata
		parent_script_list.json - list of parent script included metadata
		. - The folder sctructure from the instance will be recreated with a file for each script.

	semnet/
		 documents/ - Semnet documents which were initially uploaded. 
	     semnet_list.json - list of SemnetDocumentModel metadata
		. - There will be a binary file for each Semnet document that can be imported into Amelia

	system/
		authentication_policy/
			policy_list.json - list of AuthenticationPolicyListModel metadata
		authentication_system/
			system_list.json - list of AuthenticationSystemModel metadata
		ui_bundle/
			bundle_list.json - list of UiBundleModel metadata
			. - There will be a ZIP file for the exported revision of each UI bundle that can be uploaded to Amelia admin.
		nlu/
			nlu_settings.json - NLU settings
		1Desk/
			instance_list.json - list of OneDeskInstanceModel metadata
		1RPA/
			instance_list.json - list of OneRpaInstanceModel metadata
		1Store/
			instance_list.json - list of OneStoreInstanceModel metadata

	escalation_migration/system/
		escalation_queue/
			queue_list.json - list of EscalationQueueModel metadata
		escalation_team/
			team_list.json - list of EscalationTeamModel metadata
	
	user_migration/system/
		user/
			user_list.json - list of AdminUserModel metadata
		user_group/
			group_list.json - list of UserGroupModel metadta
		user_role
			role_list.json - list of RoleModel metadata

	domain_migration/
		. - There can be additional folders inside for domain configuration like escalation_migration, user_migration, bpn_migration
		system/domain/
			domain_list.json - list of AdminDomainModel metadata
			. - There will be an additional JSON file for each domain which contains the subsystem responder metadata.

	tabular/
		tabular_list.json - list of TabularDataModel metadata
		. - There will be a CSV file for each tabular data table that can be imported into Amelia

	training/
		training_list.json - list of DocumentRevisionModel metadata
		. - There will be a JSON file for each training document with its annotations that can be imported into Amelia

</code-block>

</chapter>