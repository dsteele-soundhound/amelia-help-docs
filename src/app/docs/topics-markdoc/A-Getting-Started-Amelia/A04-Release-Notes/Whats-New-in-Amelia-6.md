# What's New in Amelia 6.x

## Introduction

Updates to Amelia software happen regularly. Changes include new features, improvements, and bug fixes. Our goal is to improve Amelia features, user experience, and performance by optimizing its software.

You also can find release notes on the [Amelia 6.x Release Notes](Amelia-6-x-Release-Notes.md) topic. Please refer to them for the official details about changes, highlights, and breaking changes.

## What You'll Learn

In this topic you'll learn about:

* [How Amelia builds with AI](#Build).
* [How Amelia improves the AI experience](#Experience).
* [How to optimize Amelia using AI](#Optimize).
* [Additions and Changes to Amelia](#Addition).

## Build with AI {% #Build %}

* Next Generation administration role based user interfaces to make building, deploying, and analyzing results easy to find and use.
* A new Amelia Builds Amelia tool powered by LLMs helps to quickly create and modify use cases and prototype workflows.
* 100+ third-party no-code extensible integration templates to connect to common tools and technologies.
* LLM-powered question answering to help Amelia respond in her conversations.

##Experience with AI {% #Experience %}

* FAQs now include LLMs to help optimize Amelia's responses to provide recommended response suggestions.
* FAQs with knowledge-base integration.
* Agents can trigger pre-defined workflows to help respond to escalations and provide exceptional customer service.
* Expanded sentiment detection to trigger escalation if Amelia detects user is frustrated, annoyed, or confused.

##Optimize with AI {% #Optimize %}

* Inductive learning allows Amelia to observe, learn, and improve how agents handle escalations.
* Significant improvements to sentient training tools to identify user intent, detect new use cases, and reduce abandonments.

##Additions and Changes {% #Addition %}

These are new features and updates to specific parts of the Amelia application and platform.  Use `Ctrl + F` or `Cmd + F` to search this topic for all mentions of a specific release.

> Version numbers are in bold, for example, 6.5.0. Multiple paragraphs under a paragraph with a bold version number indicate changes to the same version. {style="note"}

### Breaking Changes

These breaking change notices are sorted by earliest release number.

#### Language Packs and Edge Expressions

**6.5.0**: For all language packs, BPN and Builder edge expressions that rely on untranslated responses must explicitly use methods like `response:idk(false)`, `response:contains(false,text)`, `response:equal(false,text)`, and `response:startsWith(false,text)`. Passing false as a value will use the untranslated response. By default, the translated response is used in Amelia 6.4.0+ instances. This addresses a bug where an IDK edge from an Amelia Asks task did not trigger and instead used a `bpn:otherwise()` path.

#### Finished time is not the same as Ended time in conversation metrics

**6.5.0**: Our conversation report format has changed. A new column labeled "Ended" is added before the "Finished" column. The Ended column contains the time when a conversation actually ended for the user. The Finished column contains the time when a conversation was closed by Amelia after pre-close.

#### Phased Execution feature prevents retrieval of Amelia Answers metadata

**6.5.4/6.9.0**: Phased Execution is an optional domain-level feature. Users can configure whether the system should override any triggered responders. You can configure this feature by edge and conversational turn. For example, if utterances trigger Amelia Answers, you can override the default responder. This lets the conversation continue. However, you can no longer retrieve the Amelia Answers metadata in this situation.

The solution updates the responseMetadata method of the FAQ Services. The object returned by the documentFaqResponseMetadata method includes a .paragraph() accessor. It retrieves the same data as the .answer() accessor in the object returned by the responseMetadata method. Otherwise, the responseMetadata accessors are the same for the documentFaqResponseMetadata method.


#### Whole Package import java.util.* and .setDefault Methods No Longer Possible in Groovy Sandbox Scripts

**6.5.9/6.14.0**: Use of `Locale.setDefault` and `TimeZone.setDefault` causes negative effects when used in a Groovy script sandbox. To address this issue, we have prevented use of whole package `import java.util.*` in scripts.

This affects use of `java.util.*`, `TimeZone.setDefault`, or `Locale.setDefault` in BPNs, DEB Flows, or Groovy scripts. Whole package import also is bad practice in scripts. It is forbidden after this release. All instances must do one of two things prior to using this release:

* **Recommended**: Inventory your scripts and BPNs to see if there are any cases of these methods and use of java.util.*. Create a BPN, DEB flow, or Groovy script that calls `Locale.setDefault(Locale.UK)` or any locale and `TimeZone.setDefault(‘EST’)` or any time zone. There should be no errors except in cases where Locale.setDefault and TimeZone.setDefault methods are used. Use `import java.util.Locale` to work with locale values and `import java.util.TimeZone` to work with timezone value.

* **Maintain current behavior**: This is NOT recommended. It will allow current effects to continue to manifest. However, it can be accomplished by creating one text file called whitelist.config on all hosts at:

    /apps/IPsoft/amelia/amelia-common-config/scripting/groovy/sandbox/whitelist.config

    containing list one line:

    `starImport java.util`

    Again, this is **not recommended** and should only be done if time is needed for people to correct scripts. **Once scripts are corrected, use the recommended approach above**. (AM5-13363)


#### Domain Change Happens When Using a Parent Domain's Intent from a Child Domain

**6.5.9/6.14.0/6.15.1**: Domain switching now requires activating the `Switch Out From Domain During Conversation` setting. Configure this setting in the Configuration tab of a Domains workspace. It's in the Domain Switching panel in the Configuration tab. Domains workspaces are in the Administration module.

This change alters previous domain switching behavior. It may impact cases where domain switching is implied. In these cases, change the `Switch Out From Domain During Conversation` setting to `Yes`.


#### Restrict Malicious File Upload in Amelia Answers

**6.5.9/6.7.0/6.13.0/6.15.0**: Documents with embedded links uploaded into Amelia Answers can trigger an error. Whitelisting these links addresses a security risk. To whitelist document links, set to true the Enable Validation of Parsed Embedded Links setting. It's in the Advanced tab in the Domains workspace in the Administration module. Then add link patterns to the Allowlist URL setting in Settings workspace in the Amelia Answers module.

Uploads are successful if any embedded file links are in the whitelist. Links not found in the whitelist will cause the upload to fail. In those cases, you will then need to update the whitelist then upload. Or remove the embedded link from your document before uploading again. Link validation is only for embedded content like hyperlinks.

The Semnet Configuration API end point also has a new key, `semnetUserWhitelistURLs`. This key has an array value with `semnetWhitelistUrlId` and `url` as keys.


#### Don't allow global response pools to be edited and add auth checks to response pool APIs for domain

**6.5.9/6.14.1/6.15.0**: Users must have the RESPONSE_POOL_EDIT authority for the response pool domain. Previously, users with this authority for any domain could edit response pools. This change also applies to moving a response pool between domains. The user must have this authority for the original and target domains. Users might get a Not Authorized error if they're not assigned the authority for a domain. Assign any missing authorities using the Users workspace in the Administration module.


#### Add Domain Property to Enable or Disable Escalation Learning

**6.6.0**: You can enable or disable escalaTon learning using an advanced domain seZng. The Domain tab workspace includes a new Enable EscalaTon Learning property. It's available in the Advanced tab. It's set to false (off) by default. The AdministraTon module includes the Domain workspace. (AM5-11133)


#### SAML POST Login Authentication and Older Custom UIs with no custom headers

**6.10.0**: With this release, some Amelia instances may have a problem using SAML authentication. On login, a blank page displays for Single Sign-On (SSO) that employ automatic form POSTS like certain SAML providers.

Update the default amelia.content.security.header setting in the application.properties file. For customers with this problem, adding the unsafe-inline and unsafe-eval options in the script-src and style-src definitions will correct the problem:

`amelia.content.security.header=default-src 'self' data: blob:; script-src 'self' data: blob: 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com; object-src 'self' blob: data:; style-src 'self' blob: data: 'unsafe-inline' https://fonts.googleapis.com ' blob: data:; media-src 'self' blob: data:; frame-src 'self' blob: data:; font-src 'self' blob: data: https://fonts.gstatic.com;`

Update the application.properties file in the common-config folder location or the user-web and admin-web folder locations. Where depends on how the instance is configured for inheritance. Settings and values in the common-config application.properties file will be used for all services that do not specify them in their own application.properties file.

If you encounter this problem with SAML authentication using POST, be sure to confirm that the amelia.content.security.header setting is defined with unsafe-inline and unsafe-eval options. If it is not defined, add the options as described above.

Also, if you have an older Custom UI configured with no custom headers, definitely update the amelia.content.security.header setting as described above.


#### Multi-line Widget Ask Task Does Not Capture User Input

**6.12.0**: A boolean Ask task placed directly before a multi-line Ask task does not capture user input. The execution variable `formInputAttributes` is not filled. This release fixes this error. Removing the variable before the multi-line Ask task also works, `execution.variable('formInputAttributes')`. This affects BPN processes and DEB flows. (AM5-12434)


#### Remove the Coref Model from Amelia

**6.15.0**: We've removed the Coref model from  Amelia. This impacts Docker services and the core Amelia application. This change updated the Annotation Service parser. We've removed the Coref model to improve memory performance.

In some cases, the intent and other classifiers might have used the Coref model as a preprocessor. We've addressed this use case. This update should be backwards compatible. Previously deployed models and importing older models should work fine.

If an error does occur when importing a model, or after deployment, retrain your model. Then save and deploy the retrained model. You can retrain any model with the NLU Comprehension workspace. It's part of the Digital Employee module.


#### Add Button to Conversation Export Report Page to Query Conversation Count and Remove Auto Query from Page

**6.15.0**: When exporting a Conversation Analytics report, a new Estimate button appears. Clicking this button counts records that match your criteria in the New Conversation Export workspace. You can make minor changes and quickly estimate the resulting count. The Estimate button replaces the count number on the Create button. It's located in the top panel. Reports are available with the Conversation Analytics workspaces in the Analytics module.


#### Amelia Answers: Add domain setting to unify vector lengths across embeddings providers

**6.15.0**: A new domain setting enforces a standard vector size when using Amelia Answers. It is on by default to help ensure vector length mismatches do not occur. The setting enforces a vector size of 768 across all non-custom embeddings providers.

After an upgrade to this release, either turn off the domain setting “Unify Vector Lengths across Embeddings Providers” or use the “Clear Embeddings” button in Amelia Answers settings. Then reingest all your sources. If you turn this setting off, we recommend turning the setting on for reingestion of sources. It's in the Advanced tab of the Domains workspace in the Administration module.

Failure to either disable the setting or reingest all sources after clearing embeddings will lead to persistent “Vector Size Mismatch” errors in the Predict UI and within conversations. It will happen whenever an Amelia Answers response is required.


#### Create new AUTHORITY_ADMIN_ESCALATION_TEAM_DELETE authority

**6.15.0**: Deleting escalation teams now requires assigning the AUTHORITY_ADMIN_ESCALATION_TEAM_DELETE authority to users. This allows users with the AUTHORITY_ADMIN_ESCALATION_TEAM_EDIT authority to continue editing teams. With this release, the new authority is part of the Agent Supervisor role. Users already assigned the Agent Supervisor role will inherit this new authority. Otherwise, you can assign the new authority to users as needed.


#### Allow intent learning to be enabled/disabled at the domain level

**6.15.0**: Two new settings disable Intent Learning and Escalation Learning features. You can enable or disable one or both on a per domain basis. Both intent and escalation learning use significant system resources. Enable them only if necessary. The new settings are Enable Intent Learning and Enable Escalation Learning. Both are in the Advanced tab of the Domains workspace in the Administration module. Both are set to false by default.

#### Converge response pool and Semnet tagging and add domain segregation for knowledge segmentation tags

**6.15.3**: This release deprecates responsePoolService profiles. Instead, use the more flexible and generic segmentationService to set profiles and tags. Using the segmentation service instead will help avoid future profile conflicts.

The responsePoolService profile feature will no longer work within the next six months. We encourage you to update any use of response pool tags before upgrading to this release. This will ensure compatibility and prevent segmentation-related issues.

Using both profiles will cause segmentation profiles to override response pool profiles.

Before this change with the 6.15.3 release, using this code in a Script task or block:

`responsePoolService.activateProfile("tag1", "tag2")
.anyMatch();
segmentationService.activateProfiles().addProfile("tag3", "tag4").anyMatch().build()`

The activated tags from Response Pool are tag1, tag2. The activated tags from Knowledge Segmentation are tag3 and tag4.
After this change with the 6.15.3 release, using this code in a Script task or block:

`responsePoolService.activateProfile("tag1", "tag2")
.anyMatch();
segmentationService.activateProfiles().addProfile("tag3", "tag4").anyMatch().build()`

The activated tags from Response Pool are tag3 and tag4. The activated tags from Knowledge Segmentation are tag3 and tag4. (AM5-14585)

#### Allow Journey Analytics and NPS Analytics to be disabled

**6.15.3**: We've added two settings in the Advanced tab of the Domains workspace. It's located in the Administration module. The Enable NPS Analytics for the domain setting enables or disables the collection and display of NPS analytics. The Enable Journey Analytics for the domain setting enables or disables the collection and display of Journey Analytics. Both settings are set to disabled (false) by default. To activate one or both features, change their setting value to true. (AM5-13144)

#### The Maintain Detected Language setting overrides existing locale setting

**6.15.3**: The update affects the setUserSessionLanguage method of the translation service. If the Maintain Detected Language setting is set to true, and you call the service in a Script task or block:

`translationService.setUserSessionLanguage(Locale newLocale)`

1.	The newLocale will always override the existing locale value, and
2.	The Maintain Detected Language setting ensures consistent use of the newLocale value.

This behavior was not always guaranteed in earlier versions. The Maintain Detected Language setting is in the Translation tab of the Domains workspace. It's located in the Administration module. (AM5-13910)

#### Create a separate database and service for metric summarization

**6.15.3**: We've created a dedicated database and service called amelia-metrics-batch-service. This new feature stores all your metrics data. The data is separate from conversations and other activities within the Amelia application. This helps to ensure the Amelia software continues to perform efficiently. Our Service Technology team will do the upgrade to take care of database and data related to metrics.

The Amelia [6.15.3 release notes](Amelia-6-x-Release-Notes.md) includes an updated System Architecture drawing that shows this new metrics database and service. (AM5-12365)

#### Remove from REST gateway methods deprecated since Amelia V4

**6.15.3**: These REST URLs have been deprecated since Amelia 4.x. They’re being removed in this release.

* GET /AmeliaRest/api/vi/admin/integrations/clusters
* POST /AmeliaRest/api/vi/admin/integrations/clusters
* GET /AmeliaRest/api/vi/admin/integrations/clusters/{id}
* POST /AmeliaRest/api/vi/admin/integrations/clusters/{id}
* GET /AmeliaRest/api/vi/admin/integrations/hosts/
* POST /AmeliaRest/api/vi/admin/integrations/hosts/
* GET /AmeliaRest/api/vi/admin/integrations/hosts/{id}
* POST /AmeliaRest/api/vi/admin/integrations/hosts/{id}
* GET /AmeliaRest/api/vi/admin/integrations/requests/
* GET /AmeliaRest/api/vi/admin/integrations/requests/{id}
* GET /AmeliaRest/api/vi/admin/integrations/status/

If these URLs are still used in scripts, calling these URLs will generate a 404 message instead of a 202 message. (AM5-13812)


### Highlights

#### Platform

**6.3.0**: We are now using more dedicated and targeted small models in our GenAI empowered features across the platform, moving away from the single Llama2 model currently used for all tasks. This allows us to have better performance for discreet tasks with fine-tuned and bespoke models for different tasks. Read the Amelia Answers Pre-configuration document for details about configuring the NLU and domain settings.

**6.15.0**: A new domain setting configures Amelia to display modern user interfaces by default. This provides up to date efficient technical code and tools. These interfaces have been available for some time as an option. The new setting name is Use New Version of Amelia and Agent UIs. It's in the Advanced tab of the Virtual Hosts workspaces in the Security workspaces. The Security workspaces are part of the Administration module.

#### Amelia Analytics

**6.6.0**: Added a Conversation Summary within Transcripts. Long conversations take time to review and understand. In Analytics View, we've added a GenAI powered summary. This helps supervisors understand what happened. If a summary is empty for closed conversations, you can generate one. And the summary metrics for conversations contains the summary.

#### Amelia Answers (was FAQ)

**6.3.0**: Users now can set up and manage their keys to multiple AI Providers and models. Once set up, they can specify which tasks they want to route to which providers. For example, customers can specify that they want to use GPT-4 for Amelia Builds Amelia and GPT-3.5 for Amelia Answers. Read the Amelia Answers guide and Amelia Answers Pre-configuration document.

**6.4.0**: Amelia Answers now includes the same tagging capability used in response pools. This means that you can tag knowledge sources and conversation profiles and define logic to connect them. This knowledge source segmentation is important for personalized responses. For example, you can now tailor answers based on a user's location or their role and expertise. Tags can be set at both the conversation and knowledge source level. Amelia uses four methods to match conversations to sources - Any, Exact, and All Match with Leniency as a modifier.

This new feature has many advantages. Your users are more likely to interact with a personalized Amelia Answers experience. Creators can build more use cases in an individual domain. Also, Amelia can better support enterprise-grade deployments with requirements for access and provisioning.

To apply tags to knowledge sources, go to the Properties panel in the Amelia Answers Sources workspace. You can set tags at the conversation level using a Digital Employees Builder greeting flow that includes a Script block. This Script block calls a segmentationService to create a user profile that applies the tags.

**6.5.0**: Amelia Answers now includes secure packaging, encryption, and authentication mechanisms. This safeguards the promotion of contents between Amelia instances. This will help reduce issues reported when promoting and migrating content. The feature is available with the Add, Export, and Import buttons in the Sources panel.

Amelia Answers now includes a tool to edit, correct, or refine improperly ingested segments. This tool provides a QA capability when testing segments. However, edits can be overwritten in future ingestions. The original source does not have to be altered and re-ingested. This new tool is ideal for minor corrections, not as a primary way to alter and maintain content. To edit a segment, click on a source listed in the Sources panel and then click on a segment in the source tab workspace.

Amelia Answers can get information from the public internet to create knowledge sources. Now, you can use custom headers with your URL and Sitemap knowledge sources. This lets you input credentials and other headers needed to access information from private internet sources. You can use this feature while uploading documents or URLs in Amelia Answers. We've also added a new requestHeaders parameter to the /sitemapurl and /upload/file APIs.

A knowledge source may not be ready for use in generating live answers. You can now set knowledge source and document status to Active or Inactive. The status applies to any element in a source or document. QA Pairs currently have statuses due to auto-learning. Their statuses will continue, and we'll address these in a future initiative.

**6.7.0**: Amelia is expanding the ability to test Amelia Answers deployments using the Amelia Answers Tests Suite. Amelia had expanded the Test Suite to test responses from LLMs powered by Knowledge Source Segments in addition to QA Pairs. However, those responses didn't contain information about the leveraged sources and segments in the Test Report. Amelia now provides detailed information about the main Source and Segment leveraged to generate the response. Users can also understand what documents and sources will be displayed to end users via the citation modal. This is in addition to the specific response.

**6.15.0**: When adding a website source, you can specify proxy and request header information. Click the Add New button in the Sources panel then select Connect a Website from a dropdown list. The Creating New QA tab workspace now includes a Connection panel. You can configure Authorization, Certificate, and Proxy information. And add one or more request headers. The Sources panel and workspace are part of the Amelia Answers module.

#### Contact Center

**6.5.0**: The Supervisor Dashboard now includes the Current Longest Wait Time metric. This metric tracks the longest pending conversation in each queue. To access the dashboard, click the Contact Center dropdown list at the top left. Then click the Supervisor button at the top left edge.

The Domain and Queues dropdowns in the Supervisor Dashboard are now multi-select. You can configure the dashboard to display data for one or more domains and queues. To access the dashboard, click the Contact Center dropdown list at the top left. Then click the Supervisor button at the top left edge.

The Current Conversations metric in the Supervisor Dashboard is now split into Pending Conversations and Active Conversations columns. This helps clarify the details about current active conversations. To access the dashboard, click the Contact Center dropdown list at the top left. Then click the Supervisor button at the top left edge.

**6.15.0**: We've added a row of escalation Queue Summary data table to the Contact Center Home tab workspace. There are two buttons at the top left next to the Domains dropdown list. By default, the single bar button displays only current active conversations. Click the double bar button to display a Queue Summary table and Conversations table. For each escalation queue, the Queues Summary table includes Name, Current active conversations, Queued escalated conversations, Ready Agents, Busy Agents, Away Agents, and Offline Agents.

**6.15.0**: We've added options to manage escalations, error handling, and agent rejections and timeouts. And how Amelia handles post SLA situations. If an error occurs between agent acceptance and pickup, you can configure two options. Amelia can close the conversation or transfer the conversation back to the escalation queue. You also can transfer conversations back to Amelia for agent rejections and timeouts. And have Amelia handle post SLA handling of escalations. Agent rejections, timeouts, and post SLA handling used to only close a conversation. To configure these new settings, use the Escalation Queues workspace in the Contact Center module.

#### Core Admin (Audit Logs, Chat Overlay)

**6.5.0**: The Audit Logs workspace in the Administration Security area now displays details about who viewed and downloaded conversations and recordings. The records use the CONVERSATION_SUMMARY prefix. Conversation cleanup, export request, and export deleted actions are logged.

Deploying the Amelia chat overlay on customer websites has become much simpler. A small script can be installed on a website. A web-based tool in Amelia allows configuration of key features. Settings that can be configured include button size, background colors, icons, button position, IFrame size, border radius, transitions, header height, close button, and customizing the header height, icon, and label.

#### Core LLM

**6.6.0**: Allow custom instructions for Cognitive Tasks. The Cognitive Tasks feature lets you add custom instructions and override default models for all types of tasks. Previous instructions and existing system prompts can't be ignored. But you can add custom instructions to Amelia's internal prompts. This lets you optimize and refine how Amelia responds. This feature is in the Digital Employees > NLU Resources section.

#### Core NLU

**6.8.0**: Support for Multiple Locale Formats in Currency Entities.

#### Core Orchestrator

**6.8.0**: Accept GET Requests in HyperA Integrations.

#### Custom UI

**6.8.0**: Allow import of exported UI Bundles along with configuration.

#### Digital Employees and Amelia Builds Amelia

**6.3.0**: Importing OpenAPI files automatically generates a corresponding suite of Web Actions for use in Digital Employees flows and Amelia Builds Amelia.

**6.6.0**: We've added a Design Assistant to our DEB and ABA features. This tool has GenAI capabilities. It simplifies creating and modifying new Digital Employees Builder flows. Users sometimes face limitations and inefficiencies when editing Builder flow outputs. Now you can describe configurations for edge flows and Say, Ask, Script, and other blocks. Adding GenAI tools to configure elements helps speed up development.

We've added support for GPT-4o within the Cognitive Providers and Cognitive Tasks features. You can leverage its decreased token cost, decreased latency, and increased context windows. This capability is in the Digital Employees > NLU Resources section.

#### Digital Employees Builder (DEB)

**6.5.0**: DEB flows can be exported as an SVG (Scalable Vector Graphics) image. To access, click the Export button in the Builder workspace. This enables easy sharing without the bother of providing access to the actual flow. The SVG format allows you greatest flexibility displaying a flow in various sizes and image formats.

The Builder workspace now includes a hot key (Ctrl+s or Cmd+s) to save user edits on demand.

The GraalVM JDK (Java Development Kit) replaces the Nashorn JavaScript engine. This helps future-proof the Amelia platform and enable upgrades of other system software.

#### Agent View

**6.3.0**: Users now can prioritize conversations in certain queues over others, to give highest impact clients assistance first.

We expanded the current ability for Supervisors to set canned responses for agents to use. Supervisors now can set responses at the escalation queue level. These responses are shown only for escalations assigned to the selected escalation queue.

When an agent clicks the Logout button and logs out of Agent View, their current URL is preserved.

Resolution codes can be assigned to an escalation queue and then accessed from Script blocks/tasks in a Builder/BPN conversation flow.

Improve escalation distribution logic to route to the agent that was the earliest to change their status to Ready.

**6.4.0**: Agents and supervisors can now format text in the Response Templates that they use to respond to escalations. Agents can select a response template from their My Responses list and edit it using a rich text editor. Supervisors can markup template responses in the Contact Center Responses Templates workspace. This feature lets them format their responses for legibility and accuracy. After editing, agents can send their response to the client as part of a conversation. This new feature helps agents and supervisors create clearer responses to escalations.

Built-in agent statuses are now customizable for a wider range of agent activities. Supervisors can create new statuses for each escalation team on the new Statuses tab of the Contact Center Escalation Team workspace. Agents then see and use these statuses as needed. Supervisors can view real-time agent statuses in the Agent Summary subpanel of the Contact Center Supervisor workspace.

The default statuses, Online, Away, Busy, and Offline, act as parent statuses with other statuses attached to them. For example, there might be several descriptive statuses under the default Away status.

**6.6.0**: We've added an Amelia Answers widget to the Agent View interface. This helps agents get the most accurate information available to handle escalations. Agents can type questions to easily access lots of internal knowledge. They can use it to provide detailed accurate customer service. Amelia Answers content is always context sensitive. Information is relevant for the agents' current needs. This helps reduce the manual effort agents currently do to find information. The widget also allows agents to provide feedback about whether answers are relevant. (AM5-10835, AM5-10951)

A Conversation Summary panel has been added in Agent View. It can be difficult to understand long conversations when picking up an escalation. Working with multiple conversations also can make it difficult to recall context. The Agent View interface now includes a Conversation Summary panel. The summary is a GenAI summary of the current escalated conversation. Agents can generate these summaries. These summaries are visible when they rejoin or reload a conversation.

**6.7.0**: Agents responding to users within the Agent View portal can provide context to their responses via Rich Text Formatting. When creating responses, Agents can bold, italicize, and underline specific sections of their responses. This provides contextual information highlighting specific elements of their response. This allows agents to now match the formatting provided by the Amelia Chat Bot Responses.

Customer service agents can select from multiple Response Templates. These templates are set up by agents and their supervisors to provide a quick brand appropriate response. When the number of Response Templates grows, identifying the correct template becomes a time consuming task. With improved categorization and discoverability tooling, Agents and Supervisors are now able to Tag and Title specific response templates. They also can search these fields, reducing the time agents need to respond to customers in a brand appropriate fashion.

Customer service agents can select from multiple Response Templates. These templates are set up by agents and their supervisors to provide a quick brand appropriate response. When the number of Response Templates grows, identifying the correct template becomes a time-consuming task. Now, upon every conversational turn, Amelia will identify the most appropriate templates and surface them to the agent. Suggested response templates are surfaced within the Response Templates Widget. This reduces the time agents need to respond to customers in a brand-appropriate fashion.

Agents now have access to attributable resolution plans. Agents can summarize a conversation with AI within the Conversation Information widget. The Resolution Plan that's generated will leverage Agent Knowledge Sources set up within Amelia Answers to create resolution plans. These plans are grounded in SOPs and documentation that the Agent can access. These resolution plans help agents quickly understand the customers' problem and walk through the steps needed to resolve it. Now they can easily access the underlying documentation used to generate the plan.

#### Supervisors

**6.3.0**: A column in the Agent Summary grid of the Contact Center > Supervisor workspace has been added to display a Duration value for the duration since last conversation was picked up.

**6.4.0**: Agents and supervisors can now format text in the Response Templates that they use to respond to escalations. Agents can select a response template from their My Responses list and edit it using a rich text editor. Supervisors can markup template responses in the Contact Center Responses Templates workspace. This feature lets them format their responses for legibility and accuracy. After editing, agents can send their response to the client as part of a conversation. This new feature helps agents and supervisors create clearer responses to escalations.

Built-in agent statuses are now customizable for a wider range of agent activities. Supervisors can create new statuses for each escalation team on the new Statuses tab of the Contact Center Escalation Team workspace. Agents then see and use these statuses as needed. Supervisors can view real-time agent statuses in the Agent Summary subpanel of the Contact Center Supervisor workspace.

The default statuses, Online, Away, Busy, and Offline, act as parent statuses with other statuses attached to them. For example, there might be several descriptive statuses under the default Away status.

#### Gateways

Five9 Escalation Gateway

**6.6.0**: We continue to expand Amelia integration with contact center gateways. Now you can connect Amelia to Five9 contact centers for chat and any escalations. This leverages Amelia's cognitive abilities to understand and resolve conversations with fewer escalations.

Genesys Web Messaging Escalation Gateway

**6.7.0**: Amelia is moving our Genesys channels from the Guest Chat API suite to the Web Messaging API Suite. This is in response to Genesys' announcement that they will be deprecating the Guest Chat API suite at the end of 2024. This ensures that service within the Escalation Gateway will continue as normal without interruption for end-users past the 2024 date.

Link Mobility

**6.5.1**: We added three settings -- Webhook Status Callback Gate ID, Maximum Number of Messages in One Send Request, Maximum Wait Time for All Messages Delivery Status Reports -- to queue messages efficiently.

Oracle Gateway

**6.3.0**: We improved the HTML processing to allow users to share formatted hyperlinks in their conversations using the Oracle Chat Gateway.

ServiceNow Gateway

**6.3.0**: We expanded the Service Now (SNOW) chat gateway capabilities, enabling the sharing of files from Amelia through the SNOW chat interface using the Support Present Content setting.

**6.8.0**: Support Multi-Bot Applications within ServiceNow.

Voice Gateway

**6.3.0**: We created a new gateway integration that empowers users to set up a Voice Gateway without requiring assistance from Amelia teams.

Zendesk Sunshine Escalation Gateway

**6.5.0**: Add a Zendesk Sunshine escalation gateway.

### UiPath

**6.3.0**: A UiPath configuration can specify if cloud or on-prem Orchestrator should be used.


## More Resources

{% include from="A02-00_0007-QuickStartLinks.md" element-id="D02-00_0007-QuickStartLinks_snippet" /%}
