# User Service

## Introduction

{% include from="B03-04_0439-UserSvc.md" element-id="B03-04_0439-UserSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the User service](#Calling).

* [Use the User service](#Operatio).

* [Access the BpnUser data structure.](#BpnUser)

* [Access the BpnAgent data structure](#BpnAgent).

##Call the Service {% #Calling %}

To call the service, use the `userService` handle appended to the service operation. For example, `userService.getAgent()`. Here the service calls the `getAgent` operation. The operation retrieves the name of the agent handling the current active conversation.

##Operations {% #Operatio %}

Use the [`userService`] handle to call the following operations:

### getUser()

This operation gets the user information associated with the current conversation.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

This operation returns the BpnUser data structure.

### getAgent()

This operation gets the agent information associated with the current conversation.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

This operation returns the BpnAgent data structure.

### getAgentHistory()

This operation gets information about the agents associated with the current conversation. This includes agents who transferred a conversation. Data is in chronological order.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This operation returns a list of agent names. Or no data if the conversation wasn't picked up by a human agent.

### getLastHumanAgent()

This operation gets information for the last human agent associated with the current conversation. This includes agents who transferred a conversation.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

This operation returns an agent name. Or null.

### registerUser(bpnUser, userGroupName)

This operation registers a new user.

#### Parameters {id="parameters_5"}

|   Parameter   |  Type  |             Description              |
|---------------|--------|--------------------------------------|
| bpnUser       | Object | See BpnUser object details below.    |
| userGroupName | String | Name of user group for the new user. |

#### Returns {id="returns_5"}

This operation returns ...

### updateUser(existingUser)

This operation updates the user associated with the current active conversation.

#### Parameters {id="parameters_6"}

|  Parameter   |  Type  |            Description            |
|--------------|--------|-----------------------------------|
| existingUser | Object | See BpnUser object details below. |

#### Returns {id="returns_6"}

This operation returns ...

### updateConversationUserName(firstName, lastName)

This operation udates the first and last names of an anonymous user in a conversation. Does NOT create an actual user. It only updates the first and last names on the conversation. If the conversation is non-anonymous, updates only the name attached to the conversation. In that case, it does NOT update the name of the user of the conversation.

#### Parameters {id="parameters_7"}

| Parameter |  Type  |                           Description                            |
|-----------|--------|------------------------------------------------------------------|
| firstName | String | The new first name to attach to the current active conversation. |
| lastName  | String | The new last name to attach to the current active conversation.  |

#### Returns {id="returns_7"}

This operation returns an anonymous user with the first and last name assigned to the conversation.

### updateConversationEmail(email)

This operation updates the email of the anonymous user attached to this conversation. Does NOT create an actual user. It only updates the email address attached to the conversation. If the conversation is non-anonymous, updates only the email attached to the conversation. In that case, it does NOT update the email address of the user of the conversation.

#### Parameters {id="parameters_8"}

| Parameter |  Type  |                     Description                      |
|-----------|--------|------------------------------------------------------|
| email     | String | The new email to attach to the current conversation. |

#### Returns {id="returns_8"}

This operation returns an anonymous user with the email assigned to the conversation.

### userExistsWithName(name)

This operation tests the name associated with the current conversation.

#### Parameters {id="parameters_9"}

| Parameter |  Type  |                                         Description                                          |
|-----------|--------|----------------------------------------------------------------------------------------------|
| name      | String | The name to use to test if it matches the name of the user associated with the conversation. |

#### Returns {id="returns_9"}

This operation returns true if a name already exists that matches the name parameter. Null otherwise.

### userExistsWithEmail(email)

This operation tests the email associated with the current conversation.

#### Parameters {id="parameters_10"}

| Parameter |  Type  |                                          Description                                           |
|-----------|--------|------------------------------------------------------------------------------------------------|
| email     | String | The email to use to test if it matches the email of the user associated with the conversation. |

#### Returns {id="returns_10"}

This operation returns true if a email already exists that matches the email parameter. Null otherwise.

### getUserProfileImage()

This operation gets the profile image for the user associated with the current conversation.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns the user profile image. Null otherwise.

##BpnUser Data Structure {% #BpnUser %}

User data is returned as a `BpnUser` data object. There are a number of accessors available to retrieve data within this object.

|   Accessor    |     Data Type      |                               Description                               |
|---------------|--------------------|-------------------------------------------------------------------------|
| userId()      | String             | The unique ID for the user. Defaults to null.                           |
| anonymous()   | Boolean            | Whether user is anonymous.                                              |
| firstName()   | String             | The first name of the user.                                             |
| lastName()    | String             | The last name of the user.                                              |
| email()       | String             | The email address of the user.                                          |
| externalUid() | String             | External ID to connect this user to an external system, if appropriate. |
| attributes()  | Map<String,String> | User attributes                                                         |
| locale()      | Locale             | User locale.                                                            |
[Accessors for BpnUser Data Object]

##BpnAgent Data Structure {% #BpnAgent %}

Agent data is returned as a `BpnAgent` data object. There are a number of accessors available to retrieve data within this object.

|   Accessor    |     Data Type      |                               Description                               |
|---------------|--------------------|-------------------------------------------------------------------------|
| userId()      | String             | The unique ID for the user. Defaults to null.                           |
| anonymous()   | Boolean            | Whether user is anonymous.                                              |
| firstName()   | String             | The first name of the user.                                             |
| lastName()    | String             | The last name of the user.                                              |
| email()       | String             | The email address of the user.                                          |
| externalUid() | String             | External ID to connect this user to an external system, if appropriate. |
| attributes()  | Map<String,String> | User attributes                                                         |
| locale()      | Locale             | User locale.                                                            |
| human()       | Boolean            | Whether agent is human or a software agent.                             |
[Accessors for BpnAgent Data Object]

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}