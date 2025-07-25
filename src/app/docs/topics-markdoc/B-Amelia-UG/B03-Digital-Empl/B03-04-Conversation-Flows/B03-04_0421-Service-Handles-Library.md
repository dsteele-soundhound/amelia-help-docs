# Service Handles Library

## Introduction

Conversations with Amelia can include third-party data. This data is either captured or stored from the conversation or by retrieving data. Conversations also can capture and retrieve user intent. You can capture or retrieve data needed to resolve user intent.

Amelia includes many services to work with data. Each service includes a unique handle and operations. The service handle is a prefix appended to the name of a specific method or operation. Script blocks and tasks can import a service then use its handle and operation to work with data.

Let's say you want to capture the user language locale in a conversation. A Script block could import the Conversation service and use the `conversationService` handle. Then call the `currentUserLanguage()` operation to capture the user locale:
```
import net.ipsoft.amelia.bpn.script.service.conversation.*; locale = conversationService.currentUserLanguage() execution.setVariable("locale",locale)
```

Available services also work with escalations, metrics, logging, content, and other data.

> This topic describes services used by Script blocks and tasks. The [Connection Services topic](B03-04_0470-Connect-Service-Handles-Library.md) covers services used by connections between blocks and tasks.

## What You'll Learn

In this topic you'll get a brief introduction to:

* [](#Content)[The Content Management service](#Service).
* [The Content Pack service](#Content).
* [The Context service](#Context).
* [The Conversation service](#Conversa).
* [The Custom Metric service](#Custom).
* [The Dialog Act service](#Dialog).
* [The Escalation Queue service](#Escalati).
* [The Execution Object service](#Executio).
* [The FAQ service](#FAQ).
* [The Integrations service](#Service2).
* [The Logging service](#Logging).
* [The Message service](#Message).
* [The Quantity service](#Quantity).
* [The Response Pools service](#Service3).
* [The Segmentation service](#Service4).
* [The Tabular Data service](#Service5).
* [The Text service](#Text).
* [The Translation service](#Translat).
* [The Transient Variable service](#Transien).
* [The User service](#User).
* [The Voice Service](#Voice).

##Content Management Service {% #Service %}

{% include from="B03-04_0423-ContentMgmtSvc.md" element-id="B03-04_0423-ContentMgmtSvc_snippet" /%}

Service Handle: cmService

To learn more, see the [full Content Management Service topic](B03-04_0423-Content-Management-Service.md).

##Content Pack Service {% #Content %}

{% include from="B03-04_0444-ContentPackSvc.md" element-id="B03-04_0444-ContentPackSvc_snippet" /%}

Service Handle: contentPackService

To learn more, see the [full Content Pack Service topic](B03-04_0444-Content-Pack-Service.md).

##Context Service {% #Context %}

{% include from="B03-04_0424-ContextSvc.md" element-id="B03-04_0424-ContextSvc_snippet" /%}

Service Handle: contextService

To learn more, see the [full Context Service topic](B03-04_0424-Context-Service.md).

##Conversation Service {% #Conversa %}

{% include from="B03-04_0425-ConversationSvc.md" element-id="B03-04_0425-ConversationSvc_snippet" /%}

Service Handle: conversationService

To learn more, see the [full Conversation Service topic](B03-04_0425-Conversation-Service.md).

##Custom Metric Service {% #Custom %}

{% include from="B03-04_0426-CustomMetrics.md" element-id="B03-04_0426-CustomMetrics_snippet" /%}

Service Handle: customMetricService

To learn more, see the [full Custom Metric Service topic](B03-04_0426-Custom-Metric-Service.md).

##Dialog Act Service {% #Dialog %}

{% include from="B03-04_0427-DialogActSvc.md" element-id="B03-04_0427-DialogActSvc_snippet" /%}

Service Handle: dialogActService

To learn more, see the [full Dialog Act Service topic](B03-04_0427-Dialog-Act-Service.md).

##Escalation Queue Service {% #Escalati %}

{% include from="B03-04_0428-EscalationQSvc.md" element-id="B03-04_0428-EscalationQSvc_snippet" /%}

Service Handle: escalationQueueService

To learn more, see the [full Escalation Queue Service topic](B03-04_0428-Escalation-Queue-Service.md).

##Execution Object Service {% #Executio %}

{% include from="B03-04_0429-ExecutionObjSvc.md" element-id="B03-04_0429-ExecutionObjSvc_snippet" /%}

Service Handle: execution

To learn more, see the [full Execution Object Service topic](B03-04_0429-Execution-Object-Service.md).

##FAQ Service {% #FAQ %}

{% include from="B03-04_0443-FAQSvc.md" element-id="B03-04_0443-FAQSvc_snippet" /%}

Service Handle: faqService

To learn more, see the [full FAQ Service topic](B03-04_0443-FAQ-Service.md).

##Integrations Service {% #Service2 %}

{% include from="B03-04_0430-IntegrationSvc.md" element-id="B03-04_0430-IntegrationSvc_snippet" /%}

Service Handle: integrationService

To learn more, see the [full Integration Service topic](B03-04_0430-Integration-Service.md).

##Logging Service {% #Logging %}

{% include from="B03-04_0431-LoggingSvc.md" element-id="B03-04_0431-LoggingSvc_snippet" /%}

Service Handle: log

To learn more, see the [full Logging Service topic](B03-04_0431-Logging-Service.md).

##Message Service {% #Message %}

{% include from="B03-04_0432-MsgServiceIntro.md" element-id="B03-04_0432-MsgServiceIntro_snippet" /%}

Service Handle: messageService

To learn more, see the [full Message Service topic](B03-04_0432-Message-Service.md).

##Quantity Service {% #Quantity %}

{% include from="B03-04_0433-QuantitySvc.md" element-id="B03-04_0433-QuantitySvc_snippet" /%}

Service Handle: quantityService

To learn more, see the [full Quantity Service topic](B03-04_0433-Quantity-Service.md).

##Response Pools Service {% #Service3 %}

{% include from="B03-04_0434-ResponsePoolSvc.md" element-id="B03-04_0434-ResponsePoolSvc_snippet" /%}

Service Handle: responsePoolService

To learn more, see the [full Response Pools Service topic](B03-04_0434-Response-Pool-Service.md).

##Segmentation Service {% #Service4 %}

{% include from="B04-01_0007-Source-Segmentation-Intro.md" element-id="B04-01_0007-Source-Segmentation-Intro_snippet" /%}

Service Handle: segmentationService

To learn more, see the [full Segmentation Service topic](B03-04_0441-Segmentation-Service.md).

##Tabular Data Service {% #Service5 %}

{% include from="B03-04_0435-TabularSvc.md" element-id="B03-04_0435-TabularSvc_snippet" /%}

Service Handle: tabularDataService

To learn more, see the [full Tabular Data Service topic](B03-04_0435-Tabular-Service.md).

##Text Service {% #Text %}

{% include from="B03-04_0436-TextSvc.md" element-id="B03-04_0436-TextSvc_snippet" /%}

Service Handle: textService

To learn more, see the [full Text Service topic](B03-04_0436-Text-Service.md).

##Translation Service {% #Translat %}

{% include from="B03-04_0437-TranslationSvc.md" element-id="B03-04_0437-TranslationSvc_snippet" /%}

Service Handle: translationService

To learn more, see the [full Translation Service topic](B03-04_0437-Translation-Service.md).

##Transient Variable Service {% #Transien %}

{% include from="B03-04_0438-TransientVariableSvc.md" element-id="B03-04_0438-TransientVariableSvc_snippet" /%}

Service Handle: transientVariableService

To learn more, see the [full Transient Variable Service topic](B03-04_0438-Transient-Variable-Service.md).

##User Service {% #User %}

{% include from="B03-04_0439-UserSvc.md" element-id="B03-04_0439-UserSvc_snippet" /%}

Service Handle: userService

To learn more, see the [full User Service topic](B03-04_0439-User-Service.md).

##Voice Service {% #Voice %}

{% include from="B03-04_0440-VoiceSvc.md" element-id="B03-04_0440-VoiceSvc_snippet" /%}

Service Handle: voiceService

To learn more, see the [full Voice Service topic](B03-04_0440-Voice-Service.md).

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

 
