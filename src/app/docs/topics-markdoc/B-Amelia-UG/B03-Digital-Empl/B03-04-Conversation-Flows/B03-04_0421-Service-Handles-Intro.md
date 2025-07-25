# Service Handles Introduction (original version - not used)

## Introduction

Conversations with Amelia can include third-party data. This data is either captured or stored from the conversation or by retrieving data. Conversations also can capture and retrieve user intent. You can capture or retrieve data needed to resolve user intent.

Amelia includes many services to work with data. Each service includes a unique handle and operations. The service handle is a prefix appended to the name of a specific method or operation. Script blocks and tasks can import a service then use its handle and operation to work with data.

Let's say you want to capture the user language locale in a conversation. A Script block could import the Conversation service and use the `conversationService` handle. Then call the `currentUserLanguage()` operation to capture the user locale:
```
import net.ipsoft.amelia.bpn.script.service.conversation.*; locale = conversationService.currentUserLanguage() execution.setVariable("locale",locale)
```

Available services also work with escalations, metrics, logging, content, and other data.

## What You'll Learn

In this topic you'll learn about available services.

## Available Services {% #Availab %}

Script services capture and manage a variety of data present during a conversation.

|           Service or Object            |          Handle          |                                                       Description                                                        |
|----------------------------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Contact Pack Service                   | contentPackService       | Manipulate assets in Amelia's content manager.                                                                           |
| Content Management Service             | cmService                | {% include from="B03-04_0423-ContentMgmtSvc.md" element-id="B03-04_0423-ContentMgmtSvc_snippet" /%}                 |
| Context Service                        | contextService           | Expose content pack installation related operations.                                                                     |
| Conversation Service                   | conversationService      | {% include from="B03-04_0425-ConversationSvc.md" element-id="B03-04_0425-ConversationSvc_snippet" /%}               |
| Custom Metric Service                  | customMetricService      | {% include from="B03-04_0426-CustomMetrics.md" element-id="B03-04_0426-CustomMetrics_snippet" /%}                   |
| Dialog Act Service                     | dialogActService         | Detect and modify dialog act messages.                                                                                   |
| Escalation Queue Service               | escalationQueueService   | {% include from="B03-04_0428-EscalationQSvc.md" element-id="B03-04_0428-EscalationQSvc_snippet" /%}                 |
| Execution object                       | execution                | Expose instance, variables, and user data for current conversation flow.                                                 |
| FAQ Service                            | faqService               | {% include from="B03-04_0443-FAQSvc.md" element-id="B03-04_0443-FAQSvc_snippet" /%}                                 |
| Form input data builder                | formInputDataBuilder     | Construct form input data for the custom UI.                                                                             |
| Integration message section builder    | sectionBuilder           | Construct integration message data for custom UI.                                                                        |
| Integration Service                    | integrationService       | <br /> {% include from="B03-04_0430-IntegrationSvc.md" element-id="B03-04_0430-IntegrationSvc_snippet" /%} <br />   |
| Logging Service                        | log                      | {% include from="B03-04_0431-LoggingSvc.md" element-id="B03-04_0431-LoggingSvc_snippet" /%}                         |
| Message Service                        | messageService           | <br /> {% include from="B03-04_0432-MsgServiceIntro.md" element-id="B03-04_0432-MsgServiceIntro_snippet" /%} <br /> |
| Quantity Service                       | quantityService          | {% include from="B03-04_0433-QuantitySvc.md" element-id="B03-04_0433-QuantitySvc_snippet" /%}                       |
| Response Pool Service                  | responsePoolService      | Configure response pool operations.                                                                                      |
| segmentationService | segmentationService      | Manipulate data for the Amelia Answers feature.                                           |
| Tabular Data Service                   | tabularDataService       | Manipulate and query tables uploaded with Tabular Data feature.                                                          |
| Text Service                           | textService              | {% include from="B03-04_0436-TextSvc.md" element-id="B03-04_0436-TextSvc_snippet" /%}                               |
| Translation Service                    | translationService       | {% include from="B03-04_0437-TranslationSvc.md" element-id="B03-04_0437-TranslationSvc_snippet" /%}                 |
| Transient Variable Service             | transientVariableService | {% include from="B03-04_0438-TransientVariableSvc.md" element-id="B03-04_0438-TransientVariableSvc_snippet" /%}     |
| User Service                           | userService              | {% include from="B03-04_0439-UserSvc.md" element-id="B03-04_0439-UserSvc_snippet" /%}                               |
| Voice Service                          | voiceService             | <br /> {% include from="B03-04_0440-VoiceSvc.md" element-id="B03-04_0440-VoiceSvc_snippet" /%} <br />               |
[Available Script Services]

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

 
