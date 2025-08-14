# Conversation Service

## Introduction

{% include from="B03-04_0425-ConversationSvc.md" element-id="B03-04_0425-ConversationSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Conversation service](#Calling).

* [Use the Conversation service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `conversation` handle appended to the service operation. For example, [`conversation.getTranscriptUtterances()`]. Here the service calls the [`getTranscriptUtterances()`] operation. The operation retrieves an object that contains the conversation. Script tasks, Script blocks. and libraries can iterate through the conversation data to find specific information.

##Operations {% #Operatio %}

Use the `conversation` handle to call the following operations:

### getTranscriptUtterances()

Obtains the conversation transcript in a representation. Results can be programmatically formatted. Transcript is in the language configured for the domain. End user Personally Identifiable Information (PII) is not masked.

#### Parameters {id="parameters_1"}

There are no parameters used with this operation.

#### Returns {id="returns_1"}

Retrieves an object with the entire conversation. During iteration, additional operations are available for each part of the conversation.

|      Type       | Description                                                                                                                                                                             |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| sequenceId()    | The number position of the utterance within the conversation.                                                                                                                           |
| utterance()     | The utterance spoken by Amelia or the user.                                                                                                                       |
| sessionId()     | A unique ID assigned to each participant within a conversation session and used only within the conversation. Closing a conversation destroys the sessIonId value                       |
| dateTime()      | YYYY-MM-DD HH:MM:SS:SSS format                                                                                                                                                          |
| sessionMode()   | <code-block>AGENT or USER</code-block>with Amelia as <code-block>AGENT</code-block>by default.                                                                    |
| userId()        | A unique <code-block>ID</code-block>assigned to each participant within a conversation. Used only within the conversation the userId value is unique to each user across conversations. |
| username()      | The full name of the user, typically FirstName LastName.                                                                                                                                |
| userFirstName() | The first name of the user.                                                                                                                                                             |
| userLastName()  | The last name of the user.                                                                                                                                                              |
| locale          | The language locale of the user.                                                                                                                                                        |
| toxicity        | Toxicity information associated with this utterance.                                                                                                                                    |
[Additional Conversation Operations]

### getTranscriptUtterances(inEndUserLanguage)

Obtains the conversation transcript in a representation. Results can be programmatically formatted. If `true` is the `inEndUserLanguage` value passed, the transcript is in the language of the user. Otherwise, the language is configured for the domain. End user Personally Identifiable Information (PII) is not masked.

#### Parameters {id="parameters_2"}

|     Parameter     |  Type   |                                       Description                                        |
|-------------------|---------|------------------------------------------------------------------------------------------|
| inEndUserLanguage | Boolean | If true uses the user's language. Otherwise uses the language configured for the domain. |

#### Returns {id="returns_2"}

See Table 1 above for details about additional operations for use with the object returned.

### getTranscriptUtterances(inEndUserLanguage, anonymizeUser, applyDomainMasking)

Obtains the conversation transcript in a representation. Results can be programmatically formatted. User language, user anonymization, and domain masking options are available.

#### Parameters {id="parameters_3"}

|     Parameter      |  Type   |                                                                                                          Description                                                                                                           |
|--------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| inEndUserLanguage  | Boolean | If true uses the user's language. Otherwise uses the language configured for the domain.                                                                                                                                       |
| anonymizeUser      | Boolean | If true, user Personally Identifiable Information is anonymized and masked.                                                                                                                                                    |
| applyDomainMasking | Boolean | If true, content masking uses masks defined at the domain level. Masks are added in the Domains workspace of the Administration workspaces, in the Content Masks panel for a domain. |

#### Returns {id="returns_3"}

See Table 1 above for details about additional operations for use with the object returned.

### getTranscript()

Obtains the conversation transcript in a standard text format. Results cannot be programmatically formatted. Transcript is in the language configured for the domain. End user Personally Identifiable Information (PII) is not masked.

#### Parameters {id="parameters_4"}

There are no parameters used with this operation.

#### Returns {id="returns_4"}

This operation returns a transcript of the conversation in standard text format.

### getTranscript(inEndUserLanguage)

Obtains the conversation transcript in a standard text format. Results cannot be programmatically formatted. If `true` is the `inEndUserLanguage` value passed, the transcript is in the language of the user. Otherwise, the language is configured for the domain. End user Personally Identifiable Information (PII) is not masked..

#### Parameters {id="parameters_5"}

|     Parameter     |  Type   |                                       Description                                        |
|-------------------|---------|------------------------------------------------------------------------------------------|
| inEndUserLanguage | Boolean | If true uses the user's language. Otherwise uses the language configured for the domain. |

#### Returns {id="returns_5"}

This operation returns a transcript of the conversation in standard text format.

### getTranscript(inEndUserLanguage, anonymizeUser, applyDomainMasking)

Obtains the conversation transcript in a standard text format. Results cannot be programmatically formatted. User language, user anonymization, and domain masking options are available.

#### Parameters {id="parameters_6"}

|     Parameter      |  Type   |                                                                                                          Description                                                                                                           |
|--------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| inEndUserLanguage  | Boolean | If true uses the user's language. Otherwise uses the language configured for the domain.                                                                                                                                       |
| anonymizeUser      | Boolean | If true, user Personally Identifiable Information is anonymized and masked.                                                                                                                                                    |
| applyDomainMasking | Boolean | If true, content masking uses masks defined at the domain level. Masks are added in the Domains workspace of the Administration workspaces, in the Content Masks panel for a domain. |

#### Returns {id="returns_6"}

This operation returns a transcript of the conversation in standard text format.

### getEmotionalSatisfactionScore()

This operation returns the Emotional Satisfaction Score of the conversation. Amelia's affective memory estimates a user's emotional satisfaction score at every turn in a conversation. There are no pre-defined boundaries to determine whether or not a person is happy or upset. These scores are considered reasonable:

* A low satisfaction score is equal to or less than -0.5

* A neutral satisfaction score ranges between -0.2 to 0.2

* A high satisfaction score is equal to or greater than 0.5

The emotional satisfaction score can be captured and used in a BPNs or Digital Employees builder conversation flow to steer the conversation.

#### Parameters {id="parameters_7"}

There are no parameters used with this operation.

#### Returns {id="returns_7"}

This operation returns the Emotional Satisfaction Score of the conversation, from -1.0 to 1.0.

#### Example {id="example_1"}

This example shows how to extract the Emotional Satisfaction Score. Scores are assigned to variables based on their value, low or high, which could be used to steer the conversation flow.

```JavaScript
def score = conversationService.getEmotionalSatisfactionScore();
execution.setVariable("userSatisfactionScore", score);
execution.setVariable("isLowSatisfactionScore", score <= -0.5);
execution.setVariable("isHighSatisfactionScore", score >= 0.5);
```

### toxicity()

This operation returns the current toxicity score. Every user utterance is examined for toxic words, for example, swear words and insults. The toxicity score updates after every user utterance.

#### Parameters {id="parameters_8"}

There are no parameters used with this operation.

#### Returns {id="returns_8"}

This operation returns the current toxicity score of the conversation, from 0.0 to 1.0.

#### Example {id="example_2"}

This example shows how to extract this information. The accessors `.score` and `.type` are described in the table below.
```JavaScript
def toxicity = conversationService.toxicity() // Returns a ToxicityDto object
execution.setVariable("toxicityScore", toxicity.score())
execution.setVariable("toxicityType", toxicity.type())
```

| Accessor | Data Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|----------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| score()  | Double       | Retrieves the toxicity score. Not nullable. Possible values returned range from 0.0 to 1.0.                                                                                                                                                                                                                                                                                                                                                     |
| type()   | ToxicityType | Retrieves the toxicity type. Not nullable. Possible values are: <ul><li><strong>NONE</strong>: Nontoxic</li><li><strong>SEVERE_TOXICITY</strong>: Severe toxicity</li><li><strong>THREAT</strong>: Threat</li><li><strong>IDENTITY_ATTACK</strong>: Attack on a person's identity</li><li><strong>SEXUAL_HARASSMENT</strong>: Sexual harassment</li><li><strong>CURSING</strong>: Cursing</li><li><strong>OBSCENE</strong>: Obscenity</li></ul> |
[Toxicity Accessors]

### escalationInfo()

This operation returns any available escalation info of the current conversation. A pre-escalation BPNsor Digital Employees builder flow can use `escalationInfo()` accessors to capture and manage information about an escalation. This information otherwise might not be accessible.

#### Parameters {id="parameters_9"}

There are no parameters used with this operation.

#### Returns {id="returns_9"}

This operation returns a BpnEscalationDto object if it exists or null.

#### Example {id="example_3"}

This example shows how to extract the escalation information and assign details to variables. The `escalationInfo()` accessors are described in the table below.
```JavaScript
def info = conversationService.escalationInfo();
execution.setVariable('reason', info.reason());
execution.setVariable('source', info.escalationSourceType());
execution.setVariable('responder', info.responder());
execution.setVariable('message', info.message())
execution.setVariable('sourceElement', info.sourceElement())
execution.setVariable('exceptionClass', info.exceptionClass())
execution.setVariable('exceptionMessage', info.exceptionMessage)
execution.setVariable('errorType', info.errorType())
```

| Accessor               | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| escalationQueueCode()  | String    | The escalation queue code, if specified. Is nullable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| reason()               | String    | The escalation reason, if specified. Is nullable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| escalationSourceType() | String    | The escalation source type. Not nullable. Possible values: <ul><li><strong>EXPLICIT</strong>: Explicit escalations from a responder. E.g., "escalate lemma".</li><li><strong>IMPLICIT</strong>: Implicit escalations from the system (due to errors or conflicting states).</li><li><strong>DIRECT</strong>: Direct escalations from the user.</li></ul>                                                                                                                                                              |
| responder()            | String    | The responder that caused the escalation. Is nullable. Possible responder values: <ul><li>AcknowledgeDefault</li><li>Affective</li><li>AIML</li><li>Bpn</li><li>Cqa</li><li>DontKnow</li><li>EpisodicMemory</li><li>EQA</li><li>Escalate</li><li>FAQ</li><li>IntentFAQ</li><li>Semnet</li><li>SemnetDoc</li><li>SocialTalk</li><li>UnknownProblem</li></ul>                                                                                                                                                           |
| message()              | String    | The error message. Is nullable. For example, "Error parsing task 'say ' (id=Activity_1xyowpe)"                                                                                                                                                                                                                                                                                                                                                                                                                        |
| sourceElement()        | String    | The BPNs or Digital Employees builder conversation flow where the error that produced the escalation occurred. Is nullable. For example: <ul><li>Task (id=Activity_1xyowpe, name=say ${})</li><li>Edge (id=Flow_1us0woi, name=x / 0 > 100, default=false)</li></ul>                                                                                                                                                                                                     |
| exceptionClass()       | String    | The fully-qualified class name of the exception associated with the error that produced the escalation. Is nullable. For example, "javax.script.ScriptException"                                                                                                                                                                                                                                                                                                                                                      |
| exceptionMessage()     | String    | The exception message when an exception is available. Is nullable. For example: "Error evaluating edge expression 'x / 0 > 100': [edge-jexl] Failed to evaluate Boolean expression 'x / 0 > 100'"                                                                                                                                                                                                                                                                                                                     |
| errorType()            | String    | General error type to help classify the issue. Is nullable. <ul><li><strong>TASK_EXPRESSION</strong>: Task expression, usually interpolated EL expression.</li><li><strong>EDGE_EXPRESSION</strong>: Edge expression, usually direct EL scripts.</li><li><strong>SCRIPT_CODE</strong>: Script code, usually from a script task or library.</li><li><strong>TASK_DESIGN</strong>: Task design.</li><li><strong>VA_ENGINE</strong>: VA engine programming error.</li><li><strong>NO_ERROR</strong>: No error.</li></ul> |
[escalationInfo Accessors]

### initialUserChannel()

This operation returns the initial user channel of the current conversation. The channel name is defined by default for each gateway configured to interact with  Amelia. The [Gateways documentation](B03-06_0101-Gateway-Integrations-Intro.md) describes configuration and related details.

#### Parameters {id="parameters_10"}

There are no parameters used with this operation.

#### Returns {id="returns_10"}

This operation returns a channel name as a string data type.
```JavaScript
if(conversationService.initialUserChannel())
</code-block>
{ channel = conversationService.initialUserChannel() }
log.info(channel)
def isVoiceConversation = (channel == 'voice') ? true : false
def isTeamsConversation = (channel == 'msteams') ? true : false
def isWebConversation = (channel == 'webchat_coremind') ? true : false"
```

### currentUserLanguage()

This operation returns the current language or Locale of the user in the current conversation.

#### Parameters {id="parameters_11"}

There are no parameters used with this operation.

#### Returns {id="returns_11"}

This operation returns a locale as a string data type, for example, en_US.

The Locale object returned is the standard Java locale object, as described at https://docs.oracle.com/javase/8/docs/api/java/util/Locale.html.

#### Example {id="example_4"}

This example shows how to extract the location information and assign details to a variable.
```JavaScript
locale = conversationService.currentUserLanguage()
execution.setVariable("locale",locale)
```

### customUserInfo(userInfo)

This is a setter operation to set Custom user information. It is used to show information related to user.

#### Parameters {id="parameters_12"}

| Parameter | Type | Description |
|-----------|------|-------------|
| userInfo  |      |             |

#### Returns {id="returns_12"}

This operation returns a Map object with string details in key value pairs.

### customUserInfo()

This is a getter operation for getting custom user information. Currently, these are displayed on Observe View

#### Parameters {id="parameters_13"}

There are no parameters used with this operation.

#### Returns {id="returns_13"}

This operation returns a Map object with string details in key value pairs.

#### Example

This example shows how to define a user variable and then set the custom user information.
```JavaScript
def user = [
        'Name': userService.getUser().firstName + ' ' + userService.getUser().lastName,
        'Email': userService.getUser().email
    ]
conversationService.customUserInfo(user)
```

### userTransactionHistory(transactionHistory)

This is a setter operation to set user transaction details. Used in portlet to show User information.

#### Parameters {id="parameters_14"}

|     Parameter      |  Type  |              Description               |
|--------------------|--------|----------------------------------------|
| transactionHistory | String | Contains the user transaction history. |

#### Returns {id="returns_14"}

This operation returns a boolean value of true if user transaction details are saved.

### userTransactionHistory()

This is a getter operation to retrieve the user transaction history.

#### Parameters {id="parameters_15"}

There are no parameters used with this operation.

#### Returns {id="returns_15"}

This operation returns user transaction history if present.

### setSubject(subject)

This operation sets the subject of a conversation.

#### Parameters {id="parameters_16"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| subject   | String | The subject of a conversation. |

#### Returns {id="returns_16"}

This operation returns a boolean value of true if subject is saved.

### getSubject()

This is a getter operation to retrieve the subject of a conversation.

#### Parameters {id="parameters_17"}

There are no parameters used with this operation.

#### Returns {id="returns_17"}

This operation returns the conversation subject if present.

### getResolutionCodes()

This is a getter operation to retrieve any resolution codes of an escalated conversation.

#### Parameters

There are no parameters used with this operation.

#### Returns

This operation returns a list of resolution codes, if they exist, in ResolutionCodeRequest.ResolutionCodeKeyValue format.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}