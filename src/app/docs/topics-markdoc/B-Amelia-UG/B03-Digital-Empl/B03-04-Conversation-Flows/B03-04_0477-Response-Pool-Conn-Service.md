# Response Pool Connection Service

## Introduction

{% include from="B03-04_0477-ConServ-ResponsePoolSvc.md" element-id="B03-04_0477-ConServ-ResponsePoolSvc_snippet" /%} {% include from="B03-04_0477-ConServ-ResponsePoolSvcDesc.md" element-id="B03-04_0477-ConServ-ResponsePoolSvcDesc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Response Pool connection service](#Calling).
* [Use the Response Pool connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `rp` handle appended to the service operation. For example, `rp:get(responsePoolGroupCode, responsePoolCode)`. Here the service calls the `get(responsePoolGroupCode, responsePoolCode)` operation. The operation gets an evaluated entry from the specified response pool. It uses the variables from the current process instance to construct the evaluation context.

##Operations {% #Operatio %}

Use the `rp` handle to call any of the following operations:

### isTagActive(tag)

This operation checks whether the response pool profile contains the specified tag.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| tag       | String | A response pool tag to be matched. |

#### Returns {id="returns_1"}

|  Type   |                     Description                     |
|---------|-----------------------------------------------------|
| Boolean | Returns true if the tag is matched, null otherwise. |

### isTagNotActive(tag)

This operation checks whether the response pool profile doesn't contain the specified tag.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| tag       | String | A response pool tag to be matched. |

#### Returns {id="returns_2"}

|  Type   |                       Description                       |
|---------|---------------------------------------------------------|
| Boolean | Returns true if the tag is not matched, null otherwise. |

### areAllTagsActive(tags)

This operation checks whether the response pool profile contains all the specified tags.

#### Parameters {id="parameters_3"}

| Parameter |  Type  |            Description            |
|-----------|--------|-----------------------------------|
| tags      | String | Response pool tags to be matched. |

#### Returns {id="returns_3"}

|  Type   |                        Description                        |
|---------|-----------------------------------------------------------|
| Boolean | Returns true if all the tags are matched, null otherwise. |

### isAnyTagActive(tags)

This operation checks whether the response pool profile contains any of the specified tags.

#### Parameters {id="parameters_4"}

| Parameter |  Type  |            Description            |
|-----------|--------|-----------------------------------|
| tags      | String | Response pool tags to be matched. |

#### Returns {id="returns_4"}

|  Type   |                         Description                          |
|---------|--------------------------------------------------------------|
| Boolean | Returns true if any of the tags are matched, null otherwise. |

### activeTags()

This operation gets all active response pool tags.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

|  Type  |               Description                |
|--------|------------------------------------------|
| String | Returns an array of active profile tags. |

### get(responsePoolGroupCode, responsePoolCode)

This operation gets an evaluated entry from the specified response pool. It uses the variables from the current process instance to build the evaluation context.

#### Parameters {id="parameters_6"}

|       Parameter       |  Type  |          Description          |
|-----------------------|--------|-------------------------------|
| responsePoolGroupCode | String | The response pool group code. |
| responsePoolCode      | String | The response pool code.       |

#### Returns {id="returns_6"}

|  Type  |                  Description                   |
|--------|------------------------------------------------|
| String | Returns a response pool entry, null otherwise. |

### get(responsePoolGroupCode, responsePoolCode, entrySelectionStrategy)

This operation gets an evaluated entry from the specified response pool. It uses the variables from the current process instance to build the evaluation context. It also lets you set a response pool entry selection strategy.

#### Parameters

| Parameter              | Type   | Description                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| responsePoolGroupCode  | String | The response pool group code.                                                                                                                                                                                                                                                                                                                                                           |
| responsePoolCode       | String | The response pool code.                                                                                                                                                                                                                                                                                                                                                                 |
| entrySelectionStrategy | String | A response pool selection strategy used to retrieve an entry: <ul><li><strong>UNREPEATABLE_RANDOM</strong>: Pick an entry at random without repeating until Amelia selects all options.</li><li><strong>RANDOM</strong>: Pick an entry at random without regard for repetition.</li><li><strong>ROUND_ROBIN</strong>: Select entries in sequence order.</li></ul> |

#### Returns

|  Type  |                  Description                   |
|--------|------------------------------------------------|
| String | Returns a response pool entry, null otherwise. |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}