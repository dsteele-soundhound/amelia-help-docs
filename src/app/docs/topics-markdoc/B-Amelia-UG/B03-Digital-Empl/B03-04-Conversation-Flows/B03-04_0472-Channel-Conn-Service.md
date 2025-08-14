# Channel Connection Service

## Introduction

{% include from="B03-04_0472-ConServ-Channel.md" element-id="B03-04_0472-ConServ-Channel_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Channel connection service](#Calling).

* [Use the Channel connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `channel` handle appended to the service operation. For example, `channel:name`. Here the service calls the `name` operation. The operation uses this connection to obtain the current user channel for a conversation.

##Operations {% #Operatio %}

Use the `channel` handle to call any of the following operations:

### is(channelName)

This operation determines whether the name of the current channel matches the specified name. Channel names are case-sensitive.

#### Parameters {id="parameters_1"}

|  Parameter  |  Type  |   Description   |
|-------------|--------|-----------------|
| channelName | String | A channel name. |

#### Returns {id="returns_1"}

|  Type   |                            Description                            |
|---------|-------------------------------------------------------------------|
| Boolean | Returns true on exact match (including null), or false otherwise. |

### name()

This operation gets the initial user channel associated with the current conversation.

#### Parameters

This operation has no parameters.

#### Returns

|  Type  |                                    Description                                     |
|--------|------------------------------------------------------------------------------------|
| String | Returns the channel name or null (while the conversation is not joined by a user). |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}
