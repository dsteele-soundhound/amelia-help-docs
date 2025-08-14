# Voice Service

## Introduction

{% include from="B03-04_0440-VoiceSvc.md" element-id="B03-04_0440-VoiceSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Voice service](#Calling).

* [Use the Voice service](#Methods).

##Call the Service {% #Calling %}

To call the service, use the `voiceService` handle appended to the service operation. For example, `voiceService.isNone()`. The `isNone` operation verifies the user response does not include any dialog acts.

##Operations {% #Methods %}

Use the `voiceService` handle to call any of the following operations:

### isNone()

Verifies that the user response doesn't include any dialog acts. Dialog acts describe the purpose of exchanges in a conversation. For example, thankings ("thank you", "I appreciate your help") from the user causes thanking replies from Amelia (such as "you're welcome" or "no problem at all").

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

|  Type  |                        Description                        |
|--------|-----------------------------------------------------------|
| String | Returns <code>true</code> if no dialog acts are detected. |

### latestCompletionCause()

Obtains the code associated with the latest completion-cause received during the current conversation. These are typically received as a reprompt signal. Returns a completion-cause code, or null when no completion-causes are available.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

|  Type  |                                                                                    Description                                                                                    |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| String | Common Codes: * 001 - No Match. Sound was detected, but nothing was able to be transcribed. Ex. Background noise * 002 - Timeout. No sound was detected until a timeout occurred. |

### lastMessageDtmf

Checks the source of the last message, either voice or DTMF number keys. Returns true if DTMF.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

|  Type   |                                                            Description                                                            |
|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns true if previous message was entered with telephone number keys, false if previous message was spoken over the telephone. |

### repromptCount()

Obtains the number of consecutive reprompts. This count is reset after an address verification service (AVS) receives a valid input.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

|  Type   |           Description            |
|---------|----------------------------------|
| Integer | Returns the number of reprompts. |

### askRepromptCount()

Obtains the number of reprompts for the latest Amelia Asks block or Amelia Asks task in the process. This count is reset only after the execution enters a different Ask task or Ask block. Returns the number of reprompts.

#### Parameters

This operation has no parameters.

#### Returns

|  Type   |       Description        |
|---------|--------------------------|
| Integer | The number of reprompts. |

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
