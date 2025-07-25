# Service Operations Connection Service

## Introduction

{% include from="B03-04_0479-ConServ-ServiceSvc.md" element-id="B03-04_0479-ConServ-ServiceSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Service Operations service](#Calling).

* [Use the Service Operations service](#Operations).

* [SubsystemResponderResultDto Data Structure](#DataStructures).

* [Service Operations service examples](#Examples).


##Call the Service {% #Calling %}

To call the service, use the `sr` handle appended to the service operation. For example, `sr.escalateResponded`. Here the service calls the `escalateResponded` operation. The operation returns a boolean true or false if the Escalation subsystem responder triggered.

##Operations {% #Operations %}

Use the `sr`handle to call any of the following operations:

### escalatedResponded()

This operation determines if the Escalation subsystem responder triggered.

#### Parameters {id="parameters_1"}

There are no parameters for this operation.

#### Returns {id="returns_1"}

| Type    | Description                                                                                               |
|---------|-----------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#ESCALATE} subsystem responded. |

### intentFAQResponded()

This operation determines if the Intent FAQ subsystem responder triggered.

#### Parameters {id="parameters_2"}

There are no parameters for this operation.

#### Returns {id="returns_2"}

| Type    | Description                                                                                                 |
|---------|-------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#INTENT_FAQ} subsystem responded. |

### cqaResponded()

This operation determines if the Clarifying Question Answer (CQA) subsystem responder triggered.

#### Parameters {id="parameters_3"}

There are no parameters for this operation.

#### Returns {id="returns_3"}

| Type    | Description                                                                                          |
|---------|------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#CQA} subsystem responded. |

### toxicLanguageResponded()

This operation determines if the Toxic Language subsystem responder triggered.

#### Parameters {id="parameters_4"}

There are no parameters for this operation.

#### Returns {id="returns_4"}

| Type    | Description                                                                                                     |
|---------|-----------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#TOXIC_LANGUAGE} subsystem responded. |

### qaPairsResponded()

This operation determines if the QA Pairs FAQ subsystem responder triggered.

#### Parameters {id="parameters_5"}

There are no parameters for this operation.

#### Returns {id="returns_5"}

| Type    | Description                                                                                                   |
|---------|---------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#QA_PAIRS_FAQ} subsystem responded. |

### documentFaqResponded()

This operation determines if the Document FAQ subsystem responder triggered.

#### Parameters {id="parameters_6"}

There are no parameters for this operation.

#### Returns {id="returns_6"}

| Type    | Description                                                                                                   |
|---------|---------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#DOCUMENT_FAQ} subsystem responded. |

### semanticQaResponded()

This operation determines if the Semantic Question Answer subsystem responder triggered.

#### Parameters {id="parameters_7"}

There are no parameters for this operation.

#### Returns {id="returns_7"}

| Type    | Description                                                                                             |
|---------|---------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#SEMNET} subsystem responded. |

### semanticExecutorResponded()

This operation determines if the Semantic Executor subsystem responder triggered.

#### Parameters {id="parameters_8"}

There are no parameters for this operation.

#### Returns {id="returns_8"}

| Type    | Description                                                                                                        |
|---------|--------------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#SEMANTIC_EXECUTOR} subsystem responded. |

### eqaResponded()

This operation determines if the Elaborate Question Answer (EQA) subsystem responder triggered.

#### Parameters {id="parameters_9"}

There are no parameters for this operation.

#### Returns {id="returns_9"}

| Type    | Description                                                                                          |
|---------|------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#EQA} subsystem responded. |

### unknownProblemResponded()

This operation determines if the Unknown Problem subsystem responder triggered.

#### Parameters {id="parameters_10"}

There are no parameters for this operation.

#### Returns {id="returns_10"}

| Type    | Description                                                                                                      |
|---------|------------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#UNKNOWN_PROBLEM} subsystem responded. |

### affectiveResponded()

This operation determines if the Affective subsystem responder triggered.

#### Parameters {id="parameters_11"}

There are no parameters for this operation.

#### Returns {id="returns_11"}

| Type    | Description                                                                                                |
|---------|------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#AFFECTIVE} subsystem responded. |

### socialAimlResponded()

This operation determines if the Social AIML subsystem responder triggered.

#### Parameters {id="parameters_12"}

There are no parameters for this operation.

#### Returns {id="returns_12"}

| Type    | Description                                                                                                  |
|---------|--------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#SOCIAL_AIML} subsystem responded. |

### socialTalkResponded()

This operation determines if the Social Talk subsystem responder triggered.

#### Parameters {id="parameters_13"}

There are no parameters for this operation.

#### Returns {id="returns_13"}

| Type    | Description                                                                                                  |
|---------|--------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#SOCIAL_TALK} subsystem responded. |

### humanizerResponded()

This operation determines if the Humanizer subsystem responder triggered.

#### Parameters {id="parameters_14"}

There are no parameters for this operation.

#### Returns {id="returns_14"}

| Type    | Description                                                                                                |
|---------|------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#HUMANIZER} subsystem responded. |

### acknowledgeDefaultResponded()

This operation determines if the Acknowledge Default subsystem responder triggered.

#### Parameters {id="parameters_15"}

There are no parameters for this operation.

#### Returns {id="returns_15"}

| Type    | Description                                                                                                          |
|---------|----------------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#ACKNOWLEDGE_DEFAULT} subsystem responded. |

### naturalDontKnowResponded()

This operation determines if the Natural Don't Know subsystem responder triggered.

#### Parameters {id="parameters_16"}

There are no parameters for this operation.

#### Returns {id="returns_16"}

| Type    | Description                                                                                                        |
|---------|--------------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#NATURAL_DONT_KNOW} subsystem responded. |


### dontKnowResponded()

This operation determines if the Don't Know subsystem responder triggered.

#### Parameters {id="parameters_17"}

There are no parameters for this operation.

#### Returns {id="returns_17"}

| Type    | Description                                                                                                |
|---------|------------------------------------------------------------------------------------------------------------|
| boolean | Returns &lt;code&gt;true&lt;/code&gt; if the {@link SubsystemResponderType#DONT_KNOW} subsystem responded. |


### result(subsystemResponderName)

This operation returns the result from a particular subsystem responder name.

#### Parameters {id="parameters_18"}

| Parameter              | Type   | Description                           |
|------------------------|--------|---------------------------------------|
| subsystemResponderName | String | TThe name of the subsystem responder. |

#### Returns {id="returns_18"}

| Type                      | Description                                                                            |
|---------------------------|----------------------------------------------------------------------------------------|
| SubsystemResponseMetadata | The result of the subsystem responder in a {@link SubsystemResponderResultDto} object. |

### result(subsystemResponderType)

This operation returns the result from a particular subsystem responder type.

#### Parameters {id="parameters_19"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_19"}

| Type                      | Description                                                                            |
|---------------------------|----------------------------------------------------------------------------------------|
| SubsystemResponseMetadata | The result of the subsystem responder in a {@link SubsystemResponderResultDto} object. |

### disabled(subsystemResponderType)

This operation determines whether the specified subsystem responder is disabled.

#### Parameters {id="parameters_20"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_20"}

| Type    | Description                                                                                                             |
|---------|-------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responder is disabled; &lt;code&gt;false&lt;/code&gt; otherwise. |

### none(subsystemResponderType)

This operation determines whether the specified subsystem responder did not respond.

#### Parameters {id="parameters_21"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_21"}

| Type    | Description                                                                                                                 |
|---------|-----------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responder did not respond; &lt;code&gt;false&lt;/code&gt; otherwise. |

### responded(subsystemResponderType)

This operation determines whether the specified subsystem responder did not respond.

#### Parameters {id="parameters_22"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_22"}

| Type    | Description                                                                                                             |
|---------|-------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responder is disabled; &lt;code&gt;false&lt;/code&gt; otherwise. |

### ok(subsystemResponderType)

This operation determines whether the specified subsystem responder acknowledged the user's input, but did not respond.

#### Parameters {id="parameters_23"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_23"}

| Type    | Description                                                                                                           |
|---------|-----------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responded with "ok"; &lt;code&gt;false&lt;/code&gt; otherwise. |

### notUnderstood(subsystemResponderType)

This operation determines whether the specified subsystem responder did not understand the user's input and decided to not respond to the user's input.

#### Parameters {id="parameters_24"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_24"}

| Type    | Description                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responded with "not understood"; &lt;code&gt;false&lt;/code&gt; otherwise. |

### escalate(subsystemResponderType)

This operation determines whether the specified subsystem responder escalated the conversation to a human agent.

#### Parameters {id="parameters_25"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_25"}

| Type    | Description                                                                                                                 |
|---------|-----------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responded with "escalate"; &lt;code&gt;false&lt;/code&gt; otherwise. |

### timeout(subsystemResponderType)

This operation determines whether the specified subsystem responder could not process the user's input within the expected time.

#### Parameters {id="parameters_26"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_26"}

| Type    | Description                                                                                                                 |
|---------|-----------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responded with "time out"; &lt;code&gt;false&lt;/code&gt; otherwise. |

### closeConversation(subsystemResponderType)

This operation determines whether the specified subsystem responder decided to close the conversation.

#### Parameters {id="parameters_27"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_27"}

| Type    | Description                                                                                                                           |
|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responded with "close conversation"; &lt;code&gt;false&lt;/code&gt; otherwise. |

### error(subsystemResponderType)

This operation determines whether the specified subsystem responder encountered an error.

#### Parameters {id="parameters_28"}

| Parameter              |  Type  | Description                          |
|------------------------|--------|--------------------------------------|
| subsystemResponderType | String | The type of the subsystem responder. |

#### Returns {id="returns_28"}

| Type    | Description                                                                                                              |
|---------|--------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns &lt;code&gt;true&lt;/code&gt; if the subsystem responded with "error"; &lt;code&gt;false&lt;/code&gt; otherwise. |


##SubsystemResponderResultDto Data Structure {% #DataStructures %}

The `SubsystemResponderResultDto` object conveys the relevant portions of a subsystem responder result. It includes a number of accessors.

| Accesor             | Data Type                    | Description                                                                                                                                      | Possible Values                                                                                                                                                                                                                                                                                                          |
|---------------------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name()              | String                       | The subsystem responder name. Is not nullable.                                                                                                   | Social-AIML, AckDefault, BpnStartConversation, Bpn, AIML, Cqa, StartConversation, Escalate, DocumentFaq, DontKnow, EQA, Humanizer, Affective, IntentFaq, LLMAgent, NaturalDontKnow, QaPairsFaq, SemanticExecutor, SemanticQA, SemanticTranslating, Semnet, SocialTalk, ToxicLanguage, UnknownProblem                     |
| responseType()      | SubsystemResponderType       | The subsystem responder type. Is not nullable.                                                                                                   | SOCIAL_AIML, ACKNOWLEDGE_DEFAULT, BPN_START_CONVERSATION, BPN, CHIT_CHAT, CQA, START_CONVERSATION, ESCALATE, DOCUMENT_FAQ, DONT_KNOW, EQA, HUMANIZER, AFFECTIVE, INTENT_FAQ, NATURAL_DONT_KNOW, QA_PAIRS_FAQ, SEMANTIC_EXECUTOR, SEMANTIC_QA, SEMANTIC_TRANSLATING, SEMNET, SOCIAL_TALK, TOXIC_LANGUAGE, UNKNOWN_PROBLEM |
| responseType()      | SubsystemResponseType        | The subsystem response type. Is not nullable.                                                                                                    | DISABLED, NONE, OK, RESPONDED, NOT_UNDERSTOOD, ESCALATE, CLOSE_CONVERSATION, TIMEOUT, ERROR                                                                                                                                                                                                                              |
| disabled()          | Boolean                      | true if the subsystem responder is disabled. Is not nullable.                                                                                    | true,false                                                                                                                                                                                                                                                                                                               |
| none()              | Boolean                      | true if the subsystem responder did not respond. Is not nullable.                                                                                | true,false                                                                                                                                                                                                                                                                                                               |
| okay()              | Boolean                      | true if the subsystem responder acknowledges that the user input was received but has no response utterance. Is not nullable.                    | true,false                                                                                                                                                                                                                                                                                                               |
| responded()         | Boolean                      | true if the subsystem responder responded with one or more utterances. See responses() and responsePools(). Is not nullable.                     | true,false                                                                                                                                                                                                                                                                                                               |
| notUnderstood()     | Boolean                      | true if the subsystem responder is sticky and needs to relinquish control. Is not nullable.                                                      | true,false                                                                                                                                                                                                                                                                                                               |
| escalate()          | Boolean                      | true if the subsystem responder escalated. Is not nullable.                                                                                      | true,false                                                                                                                                                                                                                                                                                                               |
| closeConversation() | Boolean                      | true if the subsystem responder needs to close the current conversation. Is not nullable.                                                        | true,false                                                                                                                                                                                                                                                                                                               |
| timeout()           | Boolean                      | true if the subsystem responder did not finish its execution within the allotted time. Is not nullable.                                          | true,false                                                                                                                                                                                                                                                                                                               |
| error()             | Boolean                      | true if an error occurred during subsystem responder execution. Is not nullable.                                                                 | true,false                                                                                                                                                                                                                                                                                                               |
| response()          | List<String>                 | List of utterances produced by the subsystems. Non-empty when the subsystem responds with an utterance. Is not nullable.                         | A potentially empty list of strings.                                                                                                                                                                                                                                                                                     |
| responsePools()     | List<ResponsePoolIdentifier> | List of response pool sourced utterances produced by the subsystem. Non-empty when the subsystem responds with a response pool. Is not nullable. | A potentially empty list of response pool identifiers.                                                                                                                                                                                                                                                                   |

##Examples {% #Examples %}

These examples use BPN task edge or DEB flow edge expressions to return a result.

### Determine if a particular subsystem responder has responded

This edge expression returns true if the Document FAQ subsystem responded. Otherwise, it will return false.

`sr:documentFaqResponded()`

### Obtain an utterance produced by a subsystem responder

This edge expression returns true if the Document FAQ subsystem response includes the word _virus_.

`sr:result(DOCUMENT_FAQ).utterance().contains('virus')`


## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}

 
