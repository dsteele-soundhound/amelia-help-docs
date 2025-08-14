# Escalation Queue Service

## Introduction

{% include from="B03-04_0428-EscalationQSvc.md" element-id="B03-04_0428-EscalationQSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Escalation Queue service](#Calling).

* [Use the Escalation Queue service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `escalationQueueService` handle appended to the service operation. For example, `escalationQueueService.lastEscalationQueue()`. Here the service calls the `lastEscalationQueue()` operation. The operation gets the last escalation queue associated with the current conversation.

##Operations {% #Operatio %}

Use the `escalationQueueService` handle to call the following operations:

### getNumberOfAvailableAgentsByQueueCode(queueCode)

This operation returns the number of available agents for an escalation queue. Specifically, the number of agents with less active chats than their configured Max chats setting.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_1"}

This operation returns an integer with the number of available agents.

### getNumberOfAvailableAgentsByQueueName(queueName)

This operation returns the number of available agents for an escalation queue. Specifically, the number of agents with less active chats than their configured Max chats setting.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_2"}

This operation returns an integer with the number of available agents.

### getNumberOfLoggedInAgentsByQueueCode(queueCode)

This operation returns the total number of Ready and Busy agents for an escalation queue.

#### Parameters {id="parameters_3"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_3"}

This operation returns an integer with the number of logged in agents with status set to Ready or Busy.

### getNumberOfLoggedInAgentsByQueueName(queueName)

This operation returns the total number of Ready and Busy agents for an escalation queue.

#### Parameters {id="parameters_4"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_4"}

This operation returns an integer with the number of logged in agents with status set to Ready or Busy.

### getNumberOfBusyAgentsByQueueCode(queueCode)

This operation returns the total number of agents whose status is set to Busy in an escalation queue.

#### Parameters {id="parameters_5"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_5"}

This operation returns an integer with the number of agents with status set to Busy.

### getNumberOfBusyAgentsByQueueName(queueName)

This operation returns the total number of agents whose status is set to Busy in an escalation queue.

#### Parameters {id="parameters_6"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_6"}

This operation returns an integer with the number of agents with status set to Busy.

### getNumberOfReadyAgentsByQueueCode(queueCode)

This operation returns the total number of agents whose status is set to Ready in an escalation queue.

#### Parameters {id="parameters_7"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_7"}

This operation returns an integer with the number of agents with status set to Ready.

### getNumberOfReadyAgentsByQueueName(queueName)

This operation returns the total number of agents whose status is set to Ready in an escalation queue.

#### Parameters {id="parameters_8"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_8"}

This operation returns an integer with the number of agents with status set to Ready.

### getNumberOfQueuedChatsByQueueCode(queueCode)

This operation returns the number of queued chat sessions for an escalation queue.

#### Parameters {id="parameters_9"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_9"}

This operation returns an integer with the number of queued chats for an escalation queue.

### getNumberOfQueuedChatsByQueueName(queueName)

This operation returns the number of queued chat sessions for an escalation queue.

#### Parameters {id="parameters_10"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_10"}

This operation returns the number of queued chat sessions for an escalation queue.

### getNumberOfActiveChatsByQueueCode(queueCode)

This operation returns the number of active chat sessions for an escalation queue.

#### Parameters {id="parameters_11"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_11"}

This operation returns the number of active chat sessions for an escalation queue.

### getNumberOfActiveChatsByQueueName(queueName)

This operation returns the number of queued chat sessions for an escalation queue.

#### Parameters {id="parameters_12"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_12"}

This operation returns the number of active chat sessions for an escalation queue.

### getAvailableAgentsByQueueCode(queueCode)

This operation returns the number of available agents for an escalation queue. Specifically, the number of agents with less active chats than their configured Max chats setting.

#### Parameters {id="parameters_13"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueCode | String | The code for the escalation queue. |

#### Returns {id="returns_13"}

This operation returns an integer with the number of available agents with status set to Ready.

### getAvailableAgentsByQueueName(queueName)

This operation returns the number of available agents for an escalation queue. Specifically, the number of agents with less active chats than their configured Max chats setting.

#### Parameters {id="parameters_14"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_14"}

This operation returns an integer with the number of available agents with status set to Ready.

### avgAnswerSpeed(queueName, start, end)

This operation returns the average answer speed for an escalation queue for a specified time span.

#### Parameters {id="parameters_15"}

| Parameter |  Type  |                 Description                 |
|-----------|--------|---------------------------------------------|
| queueName | String | The name for the escalation queue.          |
| start     | String | The start date and time to begin measuring. |
| end       | String | The end date and time to end measuring.     |

#### Returns {id="returns_15"}

This operation returns the average answer speed for the specified time span.

### avgAnswerSpeedMonthToDate(queueName)

This operation returns the average answer speed for an escalation queue for the month to date.

#### Parameters {id="parameters_16"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_16"}

This operation returns the average answer speed for the month to date.

### avgAnswerSpeedToday(queueName)

This operation returns the average answer speed for an escalation queue for today.

#### Parameters {id="parameters_17"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_17"}

This operation returns the average answer speed for today.

### avgAnswerSpeedWeekToDate(queueName)

This operation returns the average answer speed for an escalation queue for the week to date.

#### Parameters {id="parameters_18"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_18"}

This operation returns the average answer speed for the week to date.

### maxAnswerSpeed(queueName, start, end)

This operation the maximum answer speed for a specified time span.

#### Parameters {id="parameters_19"}

| Parameter |  Type  |                 Description                 |
|-----------|--------|---------------------------------------------|
| queueName | String | The name for the escalation queue.          |
| start     | String | The start date and time to begin measuring. |
| end       | String | The end date and time to end measuring.     |

#### Returns {id="returns_19"}

This operation returns the maximum answer speed for a specified time span.

### maxAnswerSpeedMonthToDate(queueName)

This operation the maximum answer speed for the month to date.

#### Parameters {id="parameters_20"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_20"}

This operation returns the maximum answer speed for the month to date.

### maxAnswerSpeedToday(queueName)

This operation the maximum answer speed for today.

#### Parameters {id="parameters_21"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_21"}

This operation returns the maximum answer speed for the month to date.

### maxAnswerSpeedWeekToDate(queueName)

This operation the maximum answer speed for the week to date.

#### Parameters {id="parameters_22"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_22"}

This operation returns the maximum answer speed for the week to date.

### avgHandleTime(queueName, start, end)

This operation returns the average handle time for an escalation queue for a specified time span.

#### Parameters {id="parameters_23"}

| Parameter |  Type  |                 Description                 |
|-----------|--------|---------------------------------------------|
| queueName | String | The name for the escalation queue.          |
| start     | String | The start date and time to begin measuring. |
| end       | String | The end date and time to end measuring.     |

#### Returns {id="returns_23"}

This operation returns the average handle time for the specified time span.

### avgHandleTimeMonthToDate(queueName)

This operation returns the average handle time for an escalation queue for the month to date.

#### Parameters {id="parameters_24"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_24"}

This operation returns the average handle time for the month to date.

### avgHandleTimeToday(queueName)

This operation returns the average handle time for an escalation queue for today.

#### Parameters {id="parameters_25"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_25"}

This operation returns the average handle time for today.

### avgHandleTimeWeekToDate(queueName)

This operation returns the average handle time for an escalation queue for the week to date.

#### Parameters {id="parameters_26"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_26"}

This operation returns the average handle time for the week to date.

### maxHandleTime(queueName, start, end)

This operation returns the maximum handle time for an escalation queue for a specified time span.

#### Parameters {id="parameters_27"}

| Parameter |  Type  |                 Description                 |
|-----------|--------|---------------------------------------------|
| queueName | String | The name for the escalation queue.          |
| start     | String | The start date and time to begin measuring. |
| end       | String | The end date and time to end measuring.     |

#### Returns {id="returns_27"}

This operation returns the maximum handle time for the specified time span.

### maxHandleTimeMonthToDate(queueName)

This operation returns the maximum handle time for an escalation queue for the month to date.

#### Parameters {id="parameters_28"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_28"}

This operation returns the maximum handle time for the month to date.

### maxHandleTimeToday(queueName)

This operation returns the maximum handle time for an escalation queue for today.

#### Parameters {id="parameters_29"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_29"}

This operation returns the maximum handle time for today.

### maxHandleTimeWeekToDate(queueName)

This operation returns the maximum handle time for an escalation queue for the week to date.

#### Parameters {id="parameters_30"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| queueName | String | The name for the escalation queue. |

#### Returns {id="returns_30"}

This operation returns the maximum handle time for the week to date.

### lastEscalationQueue()

This operation returns the last escalation queue associated with the current conversation.

#### Parameters

This operation has no parameters

#### Returns

This operation returns the BpnEscalationQueue object if an escalation queue is associated with the current conversation. Otherwise, returns null for a conversation that never escalated.

## BpnEscalationQueue Data Object

This data object has several accessors to use to retrieve data.

| Accessor | Data Type |                   Description                   |
|----------|-----------|-------------------------------------------------|
| name()   | String    | The name of the escalation queue.               |
| code()   | String    | The code used to identify the escalation queue. |

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
