# Response Pool Service

## Introduction

{% include from="B03-04_0434-ResponsePoolSvc.md" element-id="B03-04_0434-ResponsePoolSvc_snippet" /%} {% include from="B03-04_0477-ConServ-ResponsePoolSvcDesc.md" element-id="B03-04_0477-ConServ-ResponsePoolSvcDesc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Response Pool service](#Calling).

* [Use the Response Pool service](#Operatio).

* [Access results with Response Pool objects](#Response).

##Call the Service {% #Calling %}

To call the service, use the `responsePoolService` handle appended to the service operation. For example, `responsePoolService.clearProfile`. Here the service calls the `clearProfile` operation. The operation clears the current active response pool profile for a conversation.

##Operations {% #Operatio %}

Use the `responsePoolService` handle to call the following operations:

### activateProfile(tags)

This operation activates a response pool profile using one or more tags.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| tags      | String | Response pool entry tag names. |

#### Returns {id="returns_1"}

This operation returns a ResponsePoolProfileBuilder instance. This provides an interface to configure the file, as described in the next section below.

#### Example/Examples

This example activates a response pool using two tags, tag1 and tag2.
```JavaScript
responsePoolService.activateProfile('tag1', 'tag2') .lenient(true) .exactMatch()
```

### activeProfile()

This operation retrieves the response pool profile associated with the current conversation.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

This operation returns the name of the response pool associated with the current conversation.

### clearProfile()

This operation deactivates the response pool profile associated with the current conversation. Has no effect if a profile is not associated with the conversation.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### getResponsePool(groupCode, responsePoolCode)

This operation uses a response pool group code and response pool code to retrieve a template.

#### Parameters {id="parameters_4"}

|    Parameter     |  Type  |         Description         |
|------------------|--------|-----------------------------|
| groupCode        | String | A response pool group code. |
| responsePoolCode | String | A response pool code.       |

#### Returns {id="returns_4"}

This operation returns a response pool evaluated template, based upon response pool group code and response pool code.

### getResponsePool(groupCode, responsePoolCode, entrySelectionStrategy)

This operation uses a response pool group code and response pool code to retrieve a template. A specific strategy selects an entry.

#### Parameters {id="parameters_5"}

|       Parameter        |  Type  |                                                                                                                                          Description                                                                                                                                           |
|------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| groupCode              | String | A response pool group code.                                                                                                                                                                                                                                                                    |
| responsePoolCode       | String | A response pool code.                                                                                                                                                                                                                                                                          |
| entrySelectionStrategy | String | Strategy to use to pick up the response pool entry template. * UNREPEATABLE_RANDOM: Pick an entry from random, but do not repeat an entry until all options have been chosen. * RANDOM: Select an entry at random without regard for repeats. * ROUND_ROBIN: Select entries in sequence order. |

#### Returns {id="returns_5"}

This operation returns a response pool evaluated template, based upon response pool group code and response pool code.

### isTagActive(tag)

This operation checks whether the response pool profile contains the tag.

#### Parameters {id="parameters_6"}

| Parameter |  Type  |          Description          |
|-----------|--------|-------------------------------|
| tag       | String | Response pool entry tag name. |

#### Returns {id="returns_6"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### isTagNotActive(tag)

This operation checks whether the profile does not contain the tag.

#### Parameters {id="parameters_7"}

| Parameter |  Type  |          Description          |
|-----------|--------|-------------------------------|
| tag       | String | Response pool entry tag name. |

#### Returns {id="returns_7"}

This operation does not return a value..

### areAllTagActive(tags)

This operation checks whether the profile contains all the tags.

#### Parameters {id="parameters_8"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| tags      | String | Response pool entry tag names. |

#### Returns {id="returns_8"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### isAnyTagActive(tags)

This operation checks whether the profile contains any of the tags.

#### Parameters {id="parameters_9"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| tags      | String | Response pool entry tag names. |

#### Returns {id="returns_9"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### activeTags()

This operation retrieves active profile tags for the response pool profile attached to the current conversation.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns an array of active profile tags.

#### Examples {id="examples_1"}

This example assigns the results to a variable named tags.
```javascript
def tags = responsePoolService.activeTags()
```

This example tests if a response pool profile was activated. And if activated, assigns the results to a variable named tags.
```javascript
def activeProfile = responsePoolService.activeProfile() if (null != activeProfile) { // If the response pool profile was activated def tags = activeProfile.tags() }
```

##Response Pool Objects {% #Response %}

The Response Pool service provides several interfaces to retrieve entries and refine searches.

### ResponsePoolProfileBuilder

`ResponsePoolProfileBuilder` object stores profile configuration data. Exposes these additional operations.

|    Operation     |  Type   |                                                            Description                                                            |
|------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| lenient(lenient) | Boolean | Allows searching for response pool entries to pick untagged entries if no entries result from tag matching. Default value: false. |
| exactMatch()     | void    | Selects only the response pool entries whose set of tags is identical to the set of tags in the profile.                          |
| anyMatch()       | void    | Selects only the response pool entries from which at least one tag intersects with the tags in the profile.                       |
| allMatch()       | void    | Selects only the response pool entries whose tags include all tags in the profile.                                                |

#### Examples

This example uses a tag to activate a profile and disable lenient search.
```javascript
responsePoolService.activateProfile('tag3') .lenient(true) .allMatch()
```

### ResponsePoolTagMatchingOperator

This object defines the possible response pool tag matching operators.

| Operator |                                                   Description                                                    |
|----------|------------------------------------------------------------------------------------------------------------------|
| EXACT    | The set of tags specified in the profile is exactly the same as the tags in the response pool entry (bijective). |
| ALL      | All tags in the profile have a counterpart in the set of tags of the response pool entry.                        |
| ANY      | If at least one tag in the profile matches a tag in the response pool entry.                                     |

### ResponsePoolProfile

This object holds response pool profile properties. Properties are read only.

|                        Operator                         |                                     Description                                     |
|---------------------------------------------------------|-------------------------------------------------------------------------------------|
| tags : String[]                                         | Tags associated with the profile.                                                   |
| tagMatchingOperator : ResponsePoolTagMatchingOperator   | Tag matching operator.                                                              |
| lenient : boolean                                       | Whether the response pool search should allow for untagged entries to be picked up. |

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

 
