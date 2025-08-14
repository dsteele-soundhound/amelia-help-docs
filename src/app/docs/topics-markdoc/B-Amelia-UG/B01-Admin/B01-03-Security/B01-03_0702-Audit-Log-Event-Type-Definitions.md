# Audit Log Event Types

## Introduction

You can view a wide range of Amelia event types for actions performed in the application. Not only login actions but also deleting FAQs, updating domains, and more. This topic describes all the event types currently available.

## Accessing the Audit Workspace

{% include from="B01-03_0701-AuditAccess.md" element-id="B01-03_0701-AuditAccess_snippet" /%}

## What You'll Learn

In this topic, you'll learn about Audit log event types.

## Audit Log Event Types

There are over 200 possible event types that appear in log files. We've organized them by their prefixes below.

<chapter title="AGENT_ to CLASSIFIER_" collapsible="true" level="5">

| Log Event Type                    | Description |
|-----------------------------------|-------------|
| AGENT_PORTLET_UPDATED             | Event Data displays old and new Agent Portlet models. |
| AUDIT_DATA_CLEANUP | Data cleaned from Amelia database. Event Data displays deletionDate and rowsDeleted. | 
| AUTHENTICATION_FAILURE | Authentication failed. Event Data displays Type and failure Message. | 
| AUTHENTICATION_POLICY_CREATED | An authentication policy was created. Event Data displays entity with policy details and elements. | 
| AUTHENTICATION_POLICY_UPDATED | An authentication policy was updated.  | 
| AUTHENTICATION_SUCCESS | User logged in successfully. No Event Data displayed. | 
| AUTHENTICATION_SYSTEM_CREATED | An authentication system was created. Event Data displays entity with authentication system details. | 
| AUTHENTICATION_SYSTEM_UPDATED | An authentication system was updated. Event Data displays entity with authentication system details. | 
| AUTHORIZATION_FAILURE | User failed to log in successfully. Event Data displays Source, Type, and Message. | 
| AVATAR_CREATED                    |             |
| AVATAR_DELETED                    |             |
| AVATAR_UPDATED                    |             |
| AVATAR_VOICE_CREATED              |             |
| AVATAR_VOICE_DELETED              |             |
| AVATAR_VOICE_UPDATED              |             |
| BPN_MODEL_CREATED | A BPN model has been created. Event Data displays entity with details about the BPN. | 
| BPN_MODEL_DELETED | A BPN model has been deleted. Event Data displays entity with details about the BPN. | 
| BPN_MODEL_REVISION_CREATED | A BPN model has been revised. Event Data displays entity with details about the BPN revisions. | 
| BPN_MODEL_REVISION_DELETED | A BPN model revision has been deleted. | 
| BPN_MODEL_REVISION_UPDATED | A BPN model revision has been updated. Event Data displays entity with before and after details about the BPN revision. | 
| BPN_MODEL_UPDATED | A BPN model has been updated. Event Data displays entity with before and after details about the BPN update. | 
| BPN_PATH_CREATED | A BPN file folder path has been created. Event Data displays entity with details about the BPN file path. | 
| BPN_PATH_DELETED | A BPN file folder path has been deleted. Event Data displays entity with details about the BPN file path. | 
| BPN_PATH_UPDATED | A BPN file folder path has been updated. Event Data displays entity with before and after details about the BPN file path. | 
| CARD_CREATED                      |             |
| CARD_DELETED                      |             |
| CARD_UPDATED                      |             |
| CLASSIFIER_REVISION_APPROVED | A classifier revision has been approved. | 
| CLASSIFIER_REVISION_CREATED | A classifier revision has been created. Event Data displays encoderModel with details about the classifier. | 
| CLASSIFIER_REVISION_DELETED | A classifier revision has been deleted. | 

</chapter>

<chapter title="CM_ to CONSUMEWS_" collapsible="true" level="5">

| Log Event Type                    | Description |
|---|---|
| CM_BUCKET_CREATED | A bucket folder has been created in the Process Memory > Content Manager. Event Data displays entity with details about the bucket. | 
| CM_BUCKET_DELETED | A bucket folder has been deleted in the Process Memory > Content Manager. Event Data displays entity with details about the bucket. | 
| CM_BUCKET_UPDATED | A bucket folder has been updated in the Process Memory > Content Manager. Event Data displays entity with before and after details about the bucket. | 
| CM_RESOURCE_CREATED | A resource has been created in the Process Memory > Content Manager. Event Data displays entity with details about the resource. | 
| CM_RESOURCE_DELETED | A resource has been deleted in the Process Memory > Content Manager. Event Data displays entity with details about the resource. | 
| CM_RESOURCE_UPDATED | A resource has been updated in the Process Memory > Content Manager. Event Data displays entity with before and after details about the resource. | 
| COGNITIVE_AGENTIC_CONFIG_ADDED |  |
| COGNITIVE_AGENTIC_CONFIG_UPDATED |  |
| COGNITIVE_AGENT_ADDED |  |
| COGNITIVE_AGENT_DELETED |  |
| COGNITIVE_AGENT_REVISION_ADDED |  |
| COGNITIVE_AGENT_REVISION_DELETED |  |
| COGNITIVE_AGENT_REVISION_UPDATED |  |
| COGNITIVE_AGENT_UPDATED |  |
| COGNITIVE_FUNCTION_ADDED |  |
| COGNITIVE_FUNCTION_DELETED |  |
| COGNITIVE_FUNCTION_UPDATED |  |
| COGNITIVE_PROMPT_ADDED |  |
| COGNITIVE_PROMPT_DELETED |  |
| COGNITIVE_PROMPT_UPDATED |  |
| COGNITIVE_PROVIDER_CONFIG_ADDED |  |
| COGNITIVE_PROVIDER_CONFIG_DELETED |  |
| COGNITIVE_PROVIDER_CONFIG_UPDATED |  |
| COGNITIVE_TASK_CONFIG_ADDED |  |
| COGNITIVE_TASK_CONFIG_DELETED |  |
| COGNITIVE_TASK_CONFIG_UPDATED |  |
| CONSUMEWS_ACTION_CREATED |  |
| CONSUMEWS_ACTION_DELETED |  |
| CONSUMEWS_ACTION_UPDATED |  |

</chapter>

<chapter title="CONTACT_ to ENTITY_" collapsible="true" level="5">

| Log Event Type                    | Description |
|---|---|
| CONTACT_POINT_DELETED | No longer in use | 
| CONTACT_POINT_UPDATED | No longer in use | 
| CONTACT_PREFERENCE_DELETED | No longer in use | 
| CONTACT_PREFERENCE_UPDATED | No longer in use | 
| CONVERSATION_SUMMARY_CLEANUP | The conversation summary cleanup job has been requested by a user. This is also logged by the service once the job completes. In the first case, the information logged is the requester. In the latter it is the outcome of the job (how many rows deleted.) Event Data displays ElapsedTime and TotalSummariesCleaned. | 
| CONVERSATION_SUMMARY_EXPORT_DELETED | A conversation export report has been deleted. Event Data displays Report ID and Deleted By. | 
| CONVERSATION_SUMMARY_EXPORT_DOWNLOADED | A conversation export report has been downloaded. Event Data displays Downloaded By and Report ID. | 
| CONVERSATION_SUMMARY_EXPORT_REQUEST | A conversation export report has been requested. Event Data displays Domains, Time Zone, Format, Report ID, From, To, Requested By. | 
| CORPUS_REVISION_CREATED | A revision to an existing Corpus has been created. Event Data displays revisionId, corpusId, Documents, Name. | 
| CORPUS_REVISION_DELETED | No longer in use | 
| DATA_ENCRYPTION_KEYS_CREATED |  |
| DATA_ENCRYPTION_KEYS_MIGRATED |  |
| DATA_ENCRYPTION_KEYS_ROTATED |  |
| DATA_ENCRYPTION_KEYS_ROTATION_FAILED |  |
| DOCUMENT_CREATED | A document has been created in the Amelia Trainer > Annotate workspace. Event Data displays entity with details about the document. | 
| DOCUMENT_DELETED | A document has been deleted in the Amelia Trainer > Annotate workspace. Event Data displays entity with details about the document | 
| DOCUMENT_REVISION_CREATED | A document has been revised in the Amelia Trainer > Annotate workspace. Event Data displays entity with details about the document revision. | 
| DOCUMENT_REVISION_DELETED | A revised document has been deleted in the Amelia Trainer > Annotate workspace. Event Data displays entity with details about the deleted document. | 
| DOCUMENT_UPDATED | A document has been created in the Amelia Trainer > Annotate workspace. Event Data displays DocumentId. | 
| DOMAIN_CREATED | A domain has been created. Event Data displays entity with details about the domain. | 
| DOMAIN_UPDATED | A domain has been updated. Event Data displays entity with before and after details about the domain update. | 
| DRAFT_CONVERSATION_FLOW_CREATED |  |
| DRAFT_CONVERSATION_FLOW_DELETED |  |
| DRAFT_CONVERSATION_FLOW_EDITED |  |
| DRAFT_INTENT_CREATED |  |
| DRAFT_INTENT_DELETED |  |
| DRAFT_INTENT_EDITED |  |
| ENTITY_DURATION_SUMMARY_CLEANUP | Event Data displays deletionDate, rowsDeleted, daysRetained, and durationType. | 

</chapter>

<chapter title="ESCALATION_ to GATEWAY_" collapsible="true" level="5">

| Log Event Type                    | Description |
|---|---|
| ESCALATION_QUEUE_AGENT_UPDATED | An agent assigned to an Escalation Team has changed their status. Event Data displays the escalation team, escalation queue, agent id an email. | 
| ESCALATION_QUEUE_CREATED | An escalation queue has been created. Event Data displays entity with details about the escalation queue. | 
| ESCALATION_QUEUE_DELETED | An escalation queue has been deleted. Event Data displays entity with details about the escalation queue. | 
| ESCALATION_QUEUE_SUPERVISOR_UPDATED | The Exclusive Supervisor Group setting has been updated. | 
| ESCALATION_QUEUE_TEAMS_UPDATED | One or more teams have been assigned or removed from an escalation queue.
| ESCALATION_QUEUE_UPDATED | An escalation queue has been updated.  | 
| ESCALATION_TEAM_CREATED | An escalation team has been created. Event Data displays entity with details about the escalation team. | 
| ESCALATION_TEAM_DELETED | An escalation team has been deleted. Event Data displays entity with details about the escalation team. | 
| ESCALATION_TEAM_MEMBERS_UPDATED | Members have been added to an escalation team. Event displays escalationTeamId, escalationTeamName, addedUserIds, removedUserIds. | 
| ESCALATION_TEAM_UPDATED | An escalation team record has been updated. Event Data displays entity with before and after details about the escalation team. | 
| FAQS_DELETED | An FAQ file has been deleted. Event Data displays Files Deleted. | 
| FAQS_UPLOADED | An FAQ file has been uploaded. Event Data displays Files Uploaded. | 
| FAQ_PAIR_ADDED | An FAQ question and answer pair has been added. Event Data displays entity with details about the FAQ pair. | 
| FAQ_PAIR_DELETED | An FAQ question and answer pair has been deleted. Event Data displays entity with details about the FAQ pair. | 
| FAQ_PAIR_UPDATED | An FAQ question and answer pair has been updated. Event Data displays entity with before and after details about the FAQ pair. | 
| GATEWAY_INTEGRATION_CREATED | A gateway integration has been created. Event Data displays entity with details about the gateway integration. | 
| GATEWAY_INTEGRATION_DELETED | A gateway integration has been deleted. Event Data displays entity with details about the gateway integration. | 
| GATEWAY_INTEGRATION_DISABLED | A gateway integration has been disabled. Event Data displays entity with details about the gateway integration. | 
| GATEWAY_INTEGRATION_ENABLED | A gateway integration has been enabled. Event Data displays entity with details about the gateway integration. | 
| GATEWAY_INTEGRATION_LOG_CLEANUP | The gateway service log cleanup job has run successfully. Event Data displays the details of the job. |
| GATEWAY_INTEGRATION_PUSH_NOTIFICATION_CLEANUP | The gateway service push notifications cleanup job has run successfully. Expired tokens and users have been deleted. Event Data displays the details of the job. |
| GATEWAY_INTEGRATION_UPDATED | A gateway integration has been updated. Event Data displays entity with before and after details about the gateway integration. | 

</chapter>

<chapter title="GOAL_ to ONT_" collapsible="true" level="5">

| Log Event Type                    | Description |
|---|---|
| GOAL_CREATED | A goal has been created. Event Data displays intent with before and after details about the goal. | 
| GOAL_DELETED | A goal has been deleted. Event Data displays entity with before and after details about the goal. | 
| GOAL_UPDATED | A goal has been updated. Event Data displays entity with before and after details about the goal. | 
| GRAMMAR_ADDED | A grammar has been created. Event Data displays entity with details about the grammar. | 
| GRAMMAR_DELETED | A grammar has been deleted. Event Data displays entity with details about the grammar. | 
| GRAMMAR_TEST_CASE_UPDATED | A grammar test case has been updated. Event Data displays entity with details about the grammar test case. | 
| GRAMMAR_UPDATED | A grammar has been updated. Event Data displays entity with details about the grammar. | 
| GUARDRAILS_CREATED |  |
| GUARDRAILS_DELETED |  |
| GUARDRAILS_UPDATED |  |
| HUMANIZATION_RESOURCE_FILE_UPDATED | A new file has been uploaded to the Affective Memory > Humanization > Resources workspace. | 
| INTEGRATION_FLOW_DEPLOYED | An integration flow has been deployed. Event Data displays entity with domainCode, revisionNumber, requestId, serviceId, message, and status. |
| INTEGRATION_FLOW_UNDEPLOYED	| An integration flow has been undeployed. Event Data displays entity with domainCode, revisionNumber, requestId, serviceId, message, and status. |
| INTEGRATION_TEMPLATE_GROUP_CREATED |  |
| INTEGRATION_TEMPLATE_GROUP_DELETED |  |
| INTEGRATION_TEMPLATE_GROUP_UPDATED |  |
| LICENSE_UPDATED |  |
| NLU_ROUTE_ENTRY_CREATED |  |
| NLU_ROUTE_ENTRY_DELETED |  |
| NLU_ROUTE_ENTRY_UPDATED |  |
| ONE_RPA_INSTANCE_CREATED | A connection to 1RPA has been created. | 
| ONE_RPA_INSTANCE_DELETED | A connection to 1RPA has been deleted. | 
| ONE_RPA_INSTANCE_UPDATED | A connection to 1RPA has been updated. | 
| ONE_STORE_INSTANCE_CREATED | A connection to 1Store has been created. | 
| ONE_STORE_INSTANCE_DELETED | A connection to 1Store has been deleted. | 
| ONE_STORE_INSTANCE_UPDATED | A connection to 1Store has been updated. | 
| ONT_ACTION_CREATED |  |
| ONT_ACTION_DELETED |  |
| ONT_ACTION_UPDATED |  |
| ONT_MAPPING_CREATED |  |
| ONT_MAPPING_DELETED |  |
| ONT_MAPPING_UPDATED |  |
| ONT_OBJECT_CREATED |  |
| ONT_OBJECT_DELETED |  |
| ONT_OBJECT_UPDATED |  |

</chapter>

<chapter title="ORCHESTRATOR_ to SCHEDULED_" collapsible="true" level="5">

| Log Event Type                    | Description |
|---|---|
| ORCHESTRATOR_DIAGRAM_CREATED |  |
| ORCHESTRATOR_DIAGRAM_UPDATED |  |
| ORCHESTRATOR_ENDPOINT_CREATED |  |
| ORCHESTRATOR_ENDPOINT_DELETED |  |
| ORCHESTRATOR_ENDPOINT_UPDATED |  |
| ORCHESTRATOR_ROUTE_CREATED |  |
| ORCHESTRATOR_ROUTE_DELETED |  |
| ORCHESTRATOR_ROUTE_EDITED |  |
| PII_RULE_ADDED |  |
| PII_RULE_DELETED |  |
| PII_RULE_UPDATED |  |
| PUBLISH_PREVIEW_CREATED |  |
| PUBLISH_PREVIEW_DELETED |  |
| PUBLISH_PREVIEW_UPDATED |  |
| RESPONSEGROUP_CREATED | A response pool group has been created. Event Data displays entity with details about the response pool group. | 
| RESPONSEGROUP_DELETED | A response pool group has been deleted. Event Data displays entity with details about the response pool group. | 
| RESPONSEGROUP_UPDATED | A response pool group has been updated. Event Data displays entity with details about the response pool group. | 
| RESPONSEPOOLENTRY_CREATED | A response pool entry has been created. Event Data displays entity with details about the response pool entry. | 
| RESPONSEPOOLENTRY_DELETED | A response pool entry has been deleted. Event Data displays entity with details about the response pool entry. | 
| RESPONSEPOOLENTRY_UPDATED | A response pool entry has been updated. Event Data displays entity with before and after details about the response pool entry. | 
| RESPONSEPOOL_CREATED | A response pool has been created. Event Data displays entity with details about the response pool. | 
| RESPONSEPOOL_DELETED | A response pool has been deleted. Event Data displays entity with details about the response pool. | 
| RESPONSEPOOL_UPDATED | A response pool has been updated. Event Data displays entity with before and after details about the response pool. | 
| ROLE_CREATED | A role has been created. Event Data displays entity with details about the role. | 
| ROLE_DELETED | A role has been deleted. Event Data displays entity with details about the role. | 
| ROLE_UPDATED | A role has been updated. Event Data displays entity with before and after details about the role. | 
| SCHEDULED_ASYNC_EVENT_GENERATOR_CREATED |  |
| SCHEDULED_ASYNC_EVENT_GENERATOR_DELETED |  |
| SCHEDULED_ASYNC_EVENT_GENERATOR_UPDATED |  |

</chapter>

<chapter title="SCRIPT_ to SESSION_" collapsible="true" level="5">

| Log Event Type                    | Description |
|---|---|
| SCRIPT_LIBRARY_CREATED | A script library has been created. Event Data displays entity with details about the script library. | 
| SCRIPT_LIBRARY_DELETED | A script library has been deleted. Event Data displays entity with details about the script library. | 
| SCRIPT_LIBRARY_UPDATED | A script library has been updated. Event Data displays entity with before and after details about the script library. | 
| SCRIPT_PATH_CREATED | A script folder path has been created. Event Data displays entity with details about the script folder path. | 
| SCRIPT_PATH_DELETED | A script folder path has been deleted. Event Data displays entity with details about the script folder path. | 
| SCRIPT_PATH_UPDATED | A script folder path has been updated. Event Data displays entity with before and after details about the script folder path. | 
| SEMANTIC_MAPPING_CREATED | A semantic mapping has been created. Event Data displays entity with details about the semantic mapping. | 
| SEMANTIC_MAPPING_DELETED | A semantic mapping has been deleted. Event Data displays entity with details about the semantic mapping. | 
| SEMANTIC_MAPPING_UPDATED | A semantic mapping has been updated. Event Data displays entity with before and after details about the semantic mapping. | 
| SEMNET_DOCUMENT_COLLECTION_CREATED |  |
| SEMNET_DOCUMENT_COLLECTION_DELETED |  |
| SEMNET_DOCUMENT_COLLECTION_EDITED |  |
| SEMNET_DOCUMENT_CREATED |  |
| SEMNET_DOCUMENT_DELETED |  |
| SEMNET_DOCUMENT_EDITED |  |
| SEMNET_DOCUMENT_REINDEX |  |
| SEMNET_DOCUMENT_REVISION_CREATED |  |
| SEMNET_DOCUMENT_REVISION_DELETED |  |
| SEMNET_DOCUMENT_REVISION_EDITED |  |
| SEMNET_DOCUMENT_SECTION_DELETED |  |
| SEMNET_DOCUMENT_SECTION_EDITED |  |
| SEMNET_EXPORT_DOWNLOADED |  |
| SEMNET_EXPORT_JOB_ABORTED |  |
| SEMNET_EXPORT_JOB_CREATED |  |
| SEMNET_EXPORT_JOB_DELETED |  |
| SEMNET_IMPORT_JOB_ABORTED |  |
| SEMNET_IMPORT_JOB_CREATED |  |
| SEMNET_IMPORT_JOB_DELETED |  |
| SEMNET_INDEX_DELETED |  |
| SESSION_DESTROYED | All logoffs trigger this audit log entry. Event Data displays session, session_last_access, and session_created. | 

</chapter>

<chapter title="SLOT_ to VOICE_" collapsible="true" level="5">

| Log Event Type                              | Description                                                                                                                                                                                |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SLOT_CREATED                                | A slot has been created. Event Data displays entity with details about the slot.                                                                                                           | 
| SLOT_DELETED                                | A slot has been deleted. Event Data displays entity with details about the slot.                                                                                                           | 
| SLOT_QUESTION_DELETED                       | A slot question as been deleted. Event Data displays entity with details about the slot question.                                                                                          | 
| SLOT_QUESTION_UPDATED                       | A slot question as been updated. Event Data displays entity with details about the slot question.                                                                                          | 
| SLOT_UPDATED                                | A slot has been updated. Event Data displays entity with details about the slot.                                                                                                           | 
| SLOT_UTTERANCE_DELETED                      | A slot utterance has been deleted. Event Data displays entity with details about the slot utterance.                                                                                       | 
| SLOT_UTTERANCE_UPDATED                      | A slot utterance has been updated. Event Data displays entity with details about the slot utterance.                                                                                       | 
| TABULAR_DATA_COLUMN_CREATED                 | A column has been added to a tabular data file. Event Data displays entity with details about the column.                                                                                  | 
| TABULAR_DATA_COLUMN_UPDATED                 | A column has been updated in a tabular data file. Event Data displays entity with details about the column.                                                                                | 
| TABULAR_DATA_CREATED                        | A tabular data file has been created. Event Data displays entity with details about the tabular data file.                                                                                 | 
| TABULAR_DATA_DELETED                        | A tabular data file has been deleted. Event Data displays entity with details about the tabular data file.                                                                                 | 
| TABULAR_DATA_UPDATED                        | A tabular data file has been updated. Event Data displays entity with before and after details about the tabular data file.                                                                | 
| UI_PATH_CONFIG_CREATED                      |                                                                                                                                                                                            |
| UI_PATH_CONFIG_DELETED                      |                                                                                                                                                                                            |
| UI_PATH_CONFIG_UPDATED                      |                                                                                                                                                                                            |
| USER_CREATED                                | A user record has been created. Event Data displays entity with details about the user record.                                                                                             | 
| USER_DELETED                                | A user record has been deleted. Event Data displays entity with details about the user record.                                                                                             | 
| USER_EXPIRED                                | A user record has expired. Event Data displays entity with details about the user record.                                                                                                  | 
| USER_GROUP_CREATED                          | A user group has been created. Event Data displays entity with details about the user group.                                                                                               | 
| USER_GROUP_DELETED                          | A user group has been deleted. Event Data displays entity with details about the user group.                                                                                               | 
| USER_GROUP_MEMBERS_UPDATED                  | The members of a user group have been updated. Event Data displays entity with details about the user group.                                                                               | 
| USER_GROUP_UPDATED                          | A user group has been updated. Event Data displays entity with before and after details about the user group.                                                                              | 
| USER_MEMBERS_UPDATE                         | Groups assigned to a user have updated. Event Data displays removedUserGroupIds, addedUserGroupIds, userName, and userId.                                                                  | 
| USER_PASSWORD_UPDATED                       | The password for a user record has been updated. Event Data displays user.                                                                                                                 | 
| USER_PASSWORD_UPDATE_AUTHENTICATION_FAILURE | A user attempting to change their password did not supply their correct current password. . Event data displays user email address.                                                        | 
| USER_REACTIVATED                            | A user record has been reactivated.                                                                                                                                                        | 
| USER_UNLOCKED                               | A user record has been unlocked.                                                                                                                                                           | 
| USER_UPDATED                                | A user record has been updated. Event Data displays entity with before and after details about the user.                                                                                   | 
| VARIABLE_TO_WM_FACT_BINDING_CREATED         | A variable has been created in Process Memory > Variable Bindings. Event Data displays entity with details about the variable.                                                             | 
| VARIABLE_TO_WM_FACT_BINDING_DELETED         | A variable has been deleted in Process Memory > Variable Bindings. Event Data displays entity with details about the variable.                                                             | 
| VARIABLE_TO_WM_FACT_BINDING_UPDATED         | A variable has been updated in Process Memory > Variable Bindings. Event Data displays entity with before and after details about the variable.                                            | 
| VIRTUAL_HOST_CREATED                        | A virtual host record has been created. Event Data displays entity with VirtualHostModel, created, createdBy, modified, modifiedBy, name, hostNames, description, uiBundle, and isDefault. 
| VIRTUAL_HOST_DELETED                        | A virtual host record has been deleted. Event Data displays data about the deleted virtual host.                                                                                           |
| VIRTUAL HOST_UPDATED                        | A virtual host has been updated. Event Data displays entity with before and after data.                                                                                                    | 
| VOICE_RECORDINGS_EXPORT_DELETED             |                                                                                                                                                                                            |
| VOICE_RECORDINGS_EXPORT_REQUEST             |                                                                                                                                                                                            |

</chapter>


## More Resources

{% include from="B01-03_0001-SecurityMoreResources.md" element-id="B01-03_0001-SecurityMoreResources_snippet" /%}