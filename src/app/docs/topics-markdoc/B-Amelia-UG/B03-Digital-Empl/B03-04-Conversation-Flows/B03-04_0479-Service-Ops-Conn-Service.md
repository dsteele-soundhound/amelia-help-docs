

# Service Operations Connection Service

{% include from="Page-Under-Editorial-Review-Note.md" element-id="Page-Under-Editorial-Review-Note_snippet" /%}

## Introduction

{% include from="B03-04_0479-ConServ-ServiceSvc.md" element-id="B03-04_0479-ConServ-ServiceSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Service Operations service](#Calling).

* [Use the Service operations](#Operatio).

* [Use the SubsystemResponderResultDto Data Object](#The).

##Calling the service {% #Calling %}

To call the service, use the `sr` handle appended to the service operation. For example, `sr:dontKnowResponsded()`. Here the service calls the `dontKnowResponded` operation. The operation checks if the Don't Know subsystem responded to the most recent utterance.

##Operations {% #Operatio %}

Use the `sr:` handle to call any of these service operations:

### escalateResponded()

This operation checks if the Escalate subsystem responded to the most recent utterance.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

This parameter returns true if the Escalate subsystem responded.

### intentFAQResponded()

This operation checks if the Intent FAQ subsystem responded to the most recent utterance.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

This parameter returns true if the Intent FAQ subsystem responded.

### cqaResponded()

This operation checks if the CQA (Clarifying Question Answer) subsystem responded to the most recent utterance.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This parameter returns true if the CQA subsystem responded.

### toxicLanguageResponded()

This operation checks if the Toxic Language subsystem responded to the most recent utterance.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

This parameter returns true if the Toxic Language subsystem responded.

### qaPairsFAQResponded()

This operation checks if the DOC_FAQ subsystem responded to the most recent utterance.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

This parameter returns true if the DOC_FAQ subsystem responded.

### semanticQaResponded()

This operation checks if the Semantic QA subsystem responded to the most recent utterance.

#### Parameters {id="parameters_6"}

This operation has no parameters.

#### Returns {id="returns_6"}

This parameter returns true if the Semantic QA subsystem responded.

### semnetResponded()

This operation checks if the Semnet subsystem responded to the most recent utterance.

#### Parameters {id="parameters_7"}

This operation has no parameters.

#### Returns {id="returns_7"}

This parameter returns true if the Semnet subsystem responded.

### semanticExecutorResponded()

This operation checks if the Semantic Executor subsystem responded to the most recent utterance.

#### Parameters {id="parameters_8"}

This operation has no parameters.

#### Returns {id="returns_8"}

This parameter returns true if the Semantic Executor subsystem responded.

### eqaResponded()

This operation checks if the EQA subsystem responded to the most recent utterance.

#### Parameters {id="parameters_9"}

This operation has no parameters.

#### Returns {id="returns_9"}

This parameter returns true if the EQA subsystem responded.

### unknownProblemResponded()

This operation checks if the Unknown Problem subsystem responded to the most recent utterance.

#### Parameters {id="parameters_10"}

This operation has no parameters.

#### Returns {id="returns_10"}

This parameter returns true if the Unknown Problem subsystem responded.

### affectiveResponded()

This operation checks if the Inbound Positive subsystem responded to the most recent utterance.

#### Parameters {id="parameters_11"}

This operation has no parameters.

#### Returns {id="returns_11"}

This parameter returns true if the Inbound Positive subsystem responded.

### socialAimlResponded()

This operation checks if the AIML subsystem responded to the most recent utterance.

#### Parameters {id="parameters_12"}

This operation has no parameters.

#### Returns {id="returns_12"}

This parameter returns true if the AIML subsystem responded.

### socialTalkResponded()

This operation checks if the Social Talk subsystem responded to the most recent utterance.

#### Parameters {id="parameters_13"}

This operation has no parameters.

#### Returns {id="returns_13"}

This parameter returns true if the Social Talk subsystem responded.

### humanizerResponded()

This operation checks if the Humanizer subsystem responded to the most recent utterance.

#### Parameters {id="parameters_14"}

This operation has no parameters.

#### Returns {id="returns_14"}

This parameter returns true if the Humanizer subsystem responded.

### acknowledgeDefaultResponded()

This operation checks if the Acknowledge Default subsystem responded to the most recent utterance.

#### Parameters {id="parameters_15"}

This operation has no parameters.

#### Returns {id="returns_15"}

This parameter returns true if the Acknowledge Default subsystem responded.

### naturalDontKnowResponded()

This operation checks if the Natural Don't Know subsystem responded to the most recent utterance.

#### Parameters {id="parameters_16"}

This operation has no parameters.

#### Returns {id="returns_16"}

This parameter returns true if the Natural Don't Know subsystem responded.

### dontKnowResponded()

This operation checks if the Don't Know Default subsystem responded to the most recent utterance.

#### Parameters {id="parameters_17"}

This operation has no parameters.

#### Returns {id="returns_17"}

This parameter returns true if the Don't Know Default subsystem responded.

### result(subsystemResponseName)

This operation obtains the result of a particular subsystem responder

#### Parameters

|       Parameter       |  Type  |       Description        |
|-----------------------|--------|--------------------------|
| subsystemResponseName | String | The name of a responder. |

#### Returns

This operation returns the SubsystemResponderResultDto data object described below.

##The SubsystemResponderResultDto Data Object {% #The %}

This data object includes accessors to retrieve data about a responder response to a user utterance. Retrieved with the `result(subsystemResponseName)` operation.

| Accessor            | Type                               | Description                                                                                                                                                                                                                                                                                                                                        |
|---------------------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name()              | String                             | Returns the subsystem responder name. Not nullable. Possible values: Social-AIML AckDefault BpnStartConversation Bpn AIML Cqa StartConversation Escalate DocumentFaq DontKnow EQA Humanizer Affective IntentFaq LLMAgent NaturalDontKnow QaPairsFaq SemanticExecutor SemanticQA SemanticTranslating Semnet SocialTalk ToxicLanguage UnknownProblem |
| disabled()          | Boolean                            | Returns true if the subsystem responder is disabled. Not nullable.                                                                                                                                                                                                                                                                                 |
| none()              | Boolean                            | Returns true if the subsystem responder did not respond. Not nullable.                                                                                                                                                                                                                                                                             |
| okay()              | Boolean                            | Returns true if the subsystem responder acknowledges that the user input was received but has no response utterance. Not nullable.                                                                                                                                                                                                                 |
| responded()         | Boolean                            | Returns true if the subsystem responder responded with one or more utterances. Not nullable. See the responses() and responsePools() accessors below.                                                                                                                                                                                              |
| notUnderstood()(    | Boolean                            | Returns true if the subsystem responder is sticky and needs to relinquish control. Not nullable.                                                                                                                                                                                                                                                   |
| escalate()          | Boolean                            | Returns true if the subsystem responder escalated. Not nullable.                                                                                                                                                                                                                                                                                   |
| closeConversation() | Boolean                            | Returns true if the subsystem responder needs to close the current conversation. Not Nullable.                                                                                                                                                                                                                                                     |
| timeout()           | Boolean                            | Returns true if the subsystem responder did not finish its execution within the allotted time. Not nullable.                                                                                                                                                                                                                                       |
| error()             | Boolean                            | Returns true if the subsystem responder generated an error during execution. Not nullable.                                                                                                                                                                                                                                                         |
| responses()         | List&lt;String&gt;                 | A list of utterances produced by the subsystems. Non-empty when the subsystem responds with an utterance. A potentially empty list of strings. Not nullable.                                                                                                                                                                                       |
| responsePools()     | List&lt;ResponsePoolIdentifier&gt; | A list of response pool sourced utterances produced by the subsystem. Non-empty when the subsystem responds with a response pool. A potentially empty list of response pool identifiers. Not nullable.                                                                                                                                             |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}

 
