# Voice Operations Connection Service

## Introduction

{% include from="B03-04_0482-ConServ-VoiceSvc.md" element-id="B03-04_0482-ConServ-VoiceSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Voice Operations connection service](#Calling).
* [Use the Voice Operations connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `voice` handle appended to the service operation. For example, `voice:repromptCount()`. Here the service calls the `repromptCount` operation. The operation returns the number of consecutive reprompts.

##Operations {% #Operatio %}

Use the `voice:` handle to call any of the following operations:

### inputNotRecognized()

This operation detects when the Voice gateway sends an "input not recognized" signal. This operation only works with the new InboundSttNotRecognizedMessage feature. Use the `response:equal('idk')` to match responses in legacy implementations.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

|  Type   |                         Description                         |
|---------|-------------------------------------------------------------|
| Boolean | Returns true if it receives a non-success completion cause. |

### completionCause(completionCauseCode)

This operation detects when the Voice gateway sends a particular CompletionCause code. This operation only works with the new InboundSttNotRecognizedMessage feature. Use the `response:equal('idk')` to match responses in legacy implementations.

#### Parameters {id="parameters_2"}

|      Parameter      |  Type  |                   Description                   |
|---------------------|--------|-------------------------------------------------|
| completionCauseCode | String | A valid CompletionCause code, for example, 001. |

#### Returns {id="returns_2"}

|  Type   |                               Description                                |
|---------|--------------------------------------------------------------------------|
| Boolean | Returns true if the received completion cause matches the specified one. |

### repromptCount()

This operation obtains the number of consecutive reprompts.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

| Type |                       Description                       |
|------|---------------------------------------------------------|
| Int  | Returns the respective number of consecutive reprompts. |

### askRepromptCount()

This operation gets the number of reprompts associated with the latest Amelia Asks task or block in the conversation flow. This count resets only after the process execution enters a different Amelia Asks task or block.

#### Parameters

This operation has no parameters.

#### Returns

| Type |                 Description                 |
|------|---------------------------------------------|
| Int  | Returns the respective number of reprompts. |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}