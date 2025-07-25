# Entity Connection Service

## Introduction

{% include from="B03-04_0474-ConServ-Entity.md" element-id="B03-04_0474-ConServ-Entity_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Entity connection service](#Calling).
* [Use the Entity connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `entity` handle appended to the service operation. For example, `entity:isPresent`. Here the service calls the `isPresent` operation. The operation uses this connection to determine whether the entity being elicited by the current task was properly extracted at some point during the current conversation.

##Operations {% #Operatio %}

Use the `entity` handle to call any of the following operations:

### get()

This operation gets the entity instance itself.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

|     Type     |                                         Description                                          |
|--------------|----------------------------------------------------------------------------------------------|
| SlotInstance | Returns the value of the current `{@link entityInstance}`, if available, and null otherwise. |

### code()

This operation gets the code of the entity definition linked to the current entity.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

|  Type  |                                   Description                                    |
|--------|----------------------------------------------------------------------------------|
| String | Returns the entity code or null, if the context is not associated with a entity. |

### text()

This operation gets the unnormalized value of the entity instance produced by the extractor.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

|  Type  |               Description                |
|--------|------------------------------------------|
| String | Returns the entity's unnormalized value. |

### value()

This operation gets the normalized value of the entity instance. The object type returned is a `{@link net.ipsoft.amelia.cdb.model.datum.Datum}`, resolved according to the data type set while defining the entity.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

|  Type  |              Description               |
|--------|----------------------------------------|
| Object | Returns the entity's normalized value. |

### isPresent()

This operation checks if the entity for the current task was correctly extracted during the conversation.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

|  Type   |                     Description                     |
|---------|-----------------------------------------------------|
| Boolean | Returns true if there's an entity instance present. |

### isNotPresent()

This operation checks whether the entity for the current task doesn't exist.

#### Parameters {id="parameters_6"}

This operation has no parameters.

#### Returns {id="returns_6"}

|  Type   |                   Description                    |
|---------|--------------------------------------------------|
| Boolean | Returns true if a entity instance isn't present. |

### isLatest()

This operation checks if the entity for the current task is new.

#### Parameters {id="parameters_7"}

This operation has no parameters.

#### Returns {id="returns_7"}

|  Type   |     Description      |
|---------|----------------------|
| Boolean | Returns true if new. |

### LatestValue()

This operation gets the value(s) of the latest entity, if any.

#### Parameters {id="parameters_8"}

This operation has no parameters.

#### Returns {id="returns_8"}

|  Type  |                                    Description                                     |
|--------|------------------------------------------------------------------------------------|
| Object | Returns a datum or a collection of datum objects. Or, an empty text datum if none. |

### isAmbiguous()

This operation checks if the current task's entity is ambiguous or unclear.

#### Parameters {id="parameters_9"}

This operation has no parameters.

#### Returns {id="returns_9"}

|  Type   |        Description         |
|---------|----------------------------|
| Boolean | Returns true if ambiguous. |

### yes()

This operation checks if the unnormalized value of the entity is a positive answer.

#### Parameters {id="parameters_10"}

This operation has no parameters.

#### Returns {id="returns_10"}

|  Type   |        Description        |
|---------|---------------------------|
| Boolean | Returns true if positive. |

### no()

This operation checks if the unnormalized value of the entity is a negative answer.

#### Parameters {id="parameters_11"}

This operation has no parameters.

#### Returns {id="returns_11"}

|  Type   |        Description        |
|---------|---------------------------|
| Boolean | Returns true if negative. |

### idk()

This operation checks if the unnormalized value of the entity is an "I Don't Know" answer.

#### Parameters

This operation has no parameters.

#### Returns

|  Type   |                       Description                       |
|---------|---------------------------------------------------------|
| Boolean | Returns true if the entity is an "I Don't Know" answer. |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}