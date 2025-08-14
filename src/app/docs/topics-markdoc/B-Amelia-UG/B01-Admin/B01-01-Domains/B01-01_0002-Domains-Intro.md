# Domains Introduction

## Introduction

Domains organize users, groups, roles, escalation teams, and other systems. The global domain should be the parent to one or more child domains. This allows future changes without affecting the global domain settings.

You can organize domains into parent-child domains. This lets you share knowledge and systems. But no domain can have more than one parent domain. Chats also can use a URL to access a specific domain and its knowledge.

The Domains workspace lets you create, edit, and manage domains.

How you configure domains depends on your organization goals. Our [Domains Management](B01-01_0004-Domains-Management.md) topic describes domain features and settings in more detail.

## What You'll Learn

In this topic, you'll learn about:

* [Domains pre-configuration](#Pre-Conf).
* [Parent and child domains](#Parent).
* [Domain access and priority](#Domain).
* [Filter incoming messages](#Filter-Messages).
* [Filter transcripts](#Filter-Transcripts).
* [Accessing the Domains workspace](#Accessin).

##Pre-Configuration {% #Pre-Conf %}

Using the Domains features requires that you have access to an administrator account. You also need to organize your goals and any information needed to achieve them. For example, the purpose and knowledge focus for each domain. Plus planning the relationships and interactions needed between multiple domains.

Domains organize roles, groups, authorities, and related functionality. Users can access more than one domain. You must explicitly provide user access and assign roles for each domain. There is no hierarchy for permissions. Set up user groups for each distinct set of domains for which a group of users will edit Amelia's knowledge.

##Parent and Child Domains {% #Parent %}

As mentioned above, you can organize domains into parent-child domains. This lets you share knowledge and systems. But no domain can have more than one parent domain. Chats also can use a URL to access a specific domain and its knowledge.

The global domain contains Amelia's default personality and chit chat training. You create parent and child domains below the global domain to segregate knowledge. Parent and child domains can hold active responders, greetings, and rote response behaviors. Amelia uses these before she escalates or closes a conversation. Parent and child domains also can share languages, time zones, and escalation queues. Plus text to speech (TTS), and other features.

Child domains do not inherit intent models used to determine user intent. You can inherit entities, entity models, integrations, and Builder flows. Child domains can inherit the content manager, script library, and tabular data.

##Domain Access and Priority {% #Domain %}

The global domain has access to child domains and their artifacts. For example, entities, entity models, intents, intent models, content manager, script libraries, tabular data, and integrations. Digital Employee builder flows have access using the Subflow block.

The closest element has the highest priority. For example, where a parent or child domain has the same name for an integration flow. Imagine global and parent domains each have an integration flow called Weather. A Digital Employee builder flow calls the Weather flow from the child domain. With no Weather flow defined for the child domain, Amelia calls the parent Weather flow. If parent and child domains have no Weather flow, Amelia calls the global Weather flow.

##Filter Incoming Messages {% #Filter-Messages %}

You can anonymize incoming messages by filtering them. Configure filters as part of creating a domain. Use the Content Masks tab in the Domains tab workspace to create filters. Create match phrases and replacement phrases or masks. For example, to anonymize credit card and social security number information.

You can use regular expressions for match patterns. For example, \d(3)-\d(2)-\d(4) as a match and ###-##-#### as the replacement pattern anonymizes Social Security numbers.

##Filter Transcripts {% #Filter-Transcripts %}

You can anonymize conversation transcripts by filtering them. Configure filters as part of creating a domain. Use the Transcripts tab in the Domains tab workspace to create filters. First, set the Anonymize Users setting to Yes. Then create match phrases and replacement phrases or masks. For example, to anonymize credit card and social security number information.

The default settings replace first name, last name, and email address. The default masks are Firstname, Lastname, and em@il.anon. But you can create more masks if necessary.

You can use regular expressions as match patterns, same as filtering incoming messages.

##Accessing the Domains Workspace {% #Accessin %}

{% include from="B01-01_0002-DomainsAccess.md" element-id="B01-01_0002-DomainsAccess_snippet" /%}

## More Resources

For more information, see:

* [Domains Management](B01-01_0004-Domains-Management.md).
