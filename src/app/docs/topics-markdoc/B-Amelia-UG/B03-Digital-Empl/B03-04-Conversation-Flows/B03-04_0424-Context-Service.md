# Context Service

## Introduction

{% include from="B03-04_0424-ContextSvc.md" element-id="B03-04_0424-ContextSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Context service](#Calling).

* [Manage conversation artifacts with the Context service](#Operatio).

* [Retrieve data with Context service data objects](#Objects).

##Calling the service {% #Calling %}

To call the service, use the `contextService` handle appended to the service operation. For example, `contextService.newEntities`. Here the service calls the `newEntities` operation. The operation retrieves entities created from the last user response.

##Operations {% #Operatio %}

Use the `contextService` handle to call any of these service operations:

### entities()

This operation obtains all entities associated with the current execution.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

This operation returns a set of entities.

### entities(entityCode)

This operation obtains all entities associated with the current execution by entity code.

#### Parameters {id="parameters_2"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_2"}

This operation returns a list of the `EntityInstanceDto` object, described below.

### latestEntities()

This operation obtains all entities elicited after the last user utterance.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This operation returns a set of entities.

### newEntities()

This operation obtains entity instances that have been elicited for the first time over the last user response.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

This operation returns a list of `EntityInstanceDto` objects.

### modifiedEntities()

This operation obtaines entity instances that have been elicited over the last utterance, but one or more instances already existed in the current context.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

This operation returns a list of `EntityInstanceDto` objects.

### oldEntities()

This operation obtains entity instances that have not been created or updated over the last utterance.

#### Parameters {id="parameters_6"}

This operation has no parameters.

#### Returns {id="returns_6"}

This operation returns a list of `EntityInstanceDto` objects.

### hasEntity(entityCode)

This operation determines whether an entity was elicited.

#### Parameters {id="parameters_7"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_7"}

This operation returns true if detected.

### latestEntity(entityCode)

This operation obtains the value of an entity by its code.

#### Parameters {id="parameters_8"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_8"}

This operation returns the datum instance, or null otherwise.

### previousEntity(entityCode)

This operation obtains the previous value of an entity by its code.

#### Parameters {id="parameters_9"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_9"}

This operation returns the datum instance, or null otherwise.

### hasNewEntitiesForCode(entityCode)

This operation determines whether at least one of the newly elicited entities are associated with a entity definition code.

#### Parameters {id="parameters_10"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_10"}

This operation returns

### modifiedEntitiesForCode(entityCode)

This operation obtains all newly elicited entities that are associated with a entity definition and one or more instances already existed in the current context.

#### Parameters {id="parameters_11"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_11"}

This operation returns all newly elicited entities that are associated with an entity definition.

### isEntityValueModified(entityCode)

This operation determines if the value of a modified entity has changed.

#### Parameters {id="parameters_12"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_12"}

This operation returns true if value is modified.

### hasLatestEntitiesForCode(entityCode)

This operation determines whether at least one of the newly elicited entities are associated with an entity definition.

#### Parameters {id="parameters_13"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_13"}

This operation returns true if at least one of the newly elicited entities are associated with an entity definition.

### latestEntitiesForCode(entityCode)

This operation obtains all newly elicited entities that are associated with an entity definition.

#### Parameters {id="parameters_14"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_14"}

This operation returns all newly elicited entities that are associated with an entity definition.

### hasOldEntitiesForCode(entityCode)

This operation obtains all entities that are associated with an entity definition but have not been created or updated over the last utterance.

#### Parameters {id="parameters_15"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_15"}

This operation returns all entities that are associated with an entity definition.

### oldEntitiesForCode(entityCode)

This operation obtains all entities that are associated with an entity definition but have not been created or updated over the last utterance.

#### Parameters {id="parameters_16"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_16"}

This operation returns all entities that are associated with an entity definition.

### entityDefinitions()

This operation obtains all entity definitions visible from the current domain.

#### Parameters {id="parameters_17"}

This operation has no parameters.

#### Returns {id="returns_17"}

This operation returns a list of entity definitions.

### entityDefinition(entityCode)

This operation obtains an entity definition by its code.

#### Parameters {id="parameters_18"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_18"}

This operation returns the requested entity definition.

### entityDefinitionFromInstance(entityInstanceDto)

This operation obtains the entity definition associated with an entity instance.

#### Parameters {id="parameters_19"}

|     Parameter     |  Type  |         Description         |
|-------------------|--------|-----------------------------|
| entityInstanceDto | Object | The entity instance object. |

#### Returns {id="returns_19"}

This operation returns the requested entity definition.

### isEntityAmbiguous(entityCode)

This operation determines whether multiple instances of the specified entity could be extracted.

#### Parameters {id="parameters_20"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_20"}

This operation returns true if more than one entity could be extracted, false otherwise.

### entitiesAsText(entityCode)

This operation obtains the latest entities as a comma-separated list of values.

#### Parameters {id="parameters_21"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_21"}

This operation returns a comma-separated list of entity values.

### entitiesAsText(entityCode, conjunction)

This operation obtains the textual representation of a list of entities by code, with no delimiter, separated by commas, terminated with an Oxford comma, but allowing for a custom conjunction to be specified.

#### Parameters {id="parameters_22"}

|  Parameter  |  Type  |              Description              |
|-------------|--------|---------------------------------------|
| entityCode  | String | The entity code.                      |
| conjunction | String | A conjunction, for example. and or or |

#### Returns {id="returns_22"}

This operation returns a comma-separated list of entity values.

### entitiesAsText(entityCode, valueToNameMappings, conjunction)

This operation obtains the textual representation of a list of entities by code, with no delimiter, separated by commas, terminated with an Oxford comma, but allowing for a custom conjunction to be specified.

#### Parameters {id="parameters_23"}

|      Parameter      |  Type  |                             Description                             |
|---------------------|--------|---------------------------------------------------------------------|
| entityCode          | String | The entity code.                                                    |
| valueToNameMappings | Map    | Mapping of entity values (string) to human-readable names (string). |
| conjunction         | String | A conjunction, for example. and or or                               |

#### Returns {id="returns_23"}

This operation returns a comma-separated list of entity values.

### entitiesAsText(entityCode, delimiter, separator, conjunction, oxford)

This operation

#### Parameters {id="parameters_24"}

|  Parameter  |  Type  |                                                  Description                                                   |
|-------------|--------|----------------------------------------------------------------------------------------------------------------|
| entityCode  | String | The entity code.                                                                                               |
| delimiter   | String | Delimits each entity value in the list.                                                                        |
| separator   | String | Separates items from one another.                                                                              |
| conjunction | String | A conjunction, for example. and or or                                                                          |
| oxford      | String | Whether to use an oxford-style comma, when comma is specified as used as the separator, for more than 3 items. |

#### Returns {id="returns_24"}

This operation returns a textual representation of the list of entity values.

### entitiesAsText(entityCode, valueToNameMappings, delimiter, separator, conjunction, oxford)

This operation obtains the textual representation of a list of entities by code, with custom delimiter, separator, conjunction, and also allows the comma style to be specified.

#### Parameters {id="parameters_25"}

|      Parameter      |  Type  |                                                  Description                                                   |
|---------------------|--------|----------------------------------------------------------------------------------------------------------------|
| entityCode          | String | The entity code.                                                                                               |
| valueToNameMappings | Map    | Mapping of entity values (string) to human-readable names (string).                                            |
| delimiter           | String | Delimits each entity value in the list.                                                                        |
| separator           | String | Separates items from one another.                                                                              |
| conjunction         | String | A conjunction, for example. and or or                                                                          |
| oxford              | String | Whether to use an oxford-style comma, when comma is specified as used as the separator, for more than 3 items. |

#### Returns {id="returns_25"}

This operation returns a textual representation of the list of entity values.

### hasEntityInScope(entityCode, entityScope)

This operation determines whether an instance of specified entity exists in a certain scope. Scope is where you have stored entities in the CONTEXT, INTENT, or CONVERSATION. This depends on the Scope settings of the entity definition. Configure Scope settings in the Properties tab in the Entities workspace. You can execute this method at any point during a conversation.

#### Parameters {id="parameters_26"}

|  Parameter  |  Type  |                    Description                    |
|-------------|--------|---------------------------------------------------|
| entityCode  | String | The entity code.                                  |
| entityScope | Object | Scopes considered while searching for the entity. |

#### Returns {id="returns_26"}

This operation returns true if an instance of the specified entity exists in the specified context.

### removeEntity(entityCode)

This operation removes instances of the specified entity regardless of their scoping.

#### Parameters {id="parameters_27"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_27"}

This operation returns a set of removed entities.

### removeEntity(entityCode, entityScopes)

This operation removes instances of the specified entity from the specified scope(s).

#### Parameters {id="parameters_28"}

|  Parameter   |  Type   |                    Description                    |
|--------------|---------|---------------------------------------------------|
| entityCode   | String  | The entity code.                                  |
| entityScopes | Objects | Scopes considered while searching for the entity. |

#### Returns {id="returns_28"}

This operation returns a set of removed entities.

### removeEntities(entityCodes)

This operation removes instances of the specified entities regardless their scoping.

#### Parameters {id="parameters_29"}

|  Parameter  |  Type  |             Description              |
|-------------|--------|--------------------------------------|
| entityCodes | String | Codes of the entities to be removed. |

#### Returns {id="returns_29"}

This operation returns a set of removed entities.

### removeEntities(entityCodes, entityScopes)

This operation removes instances of the specified entities from the specified scope(s).

#### Parameters {id="parameters_30"}

|  Parameter   |   Type    |                    Description                    |
|--------------|-----------|---------------------------------------------------|
| entityCodes  | Array     | Codes of the entities to be removed.              |
| entityScopes | Object(s) | Scopes considered while searching for the entity. |

#### Returns {id="returns_30"}

This operation returns a set of removed entities.

### removeAllEntitiesFromScope(entityScope)

This operation removes all entity instances in the specified scope.

#### Parameters {id="parameters_31"}

|  Parameter  |  Type  |                    Description                    |
|-------------|--------|---------------------------------------------------|
| entityScope | Object | Scopes considered while searching for the entity. |

#### Returns {id="returns_31"}

This operation returns a set of removed entities.

### removeAllEntities()

This operation removes all entity instances.

#### Parameters {id="parameters_32"}

This operation has no parameters.

#### Returns {id="returns_32"}

This operation returns a set of removed entities.

### extractFirstEntity(entityCode, value)

This operation extracts the first occurrence of the specified entity.

#### Parameters {id="parameters_33"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |
| value      | String | An utterance.    |

#### Returns {id="returns_33"}

This operation returns an `EntityInstanceDto` object.

### extractFirstEntity(entityCode, entityDefinition, value)

This operation extracts the first occurrence of the specified entity.

#### Parameters {id="parameters_34"}

|    Parameter     |  Type  |       Description        |
|------------------|--------|--------------------------|
| entityCode       | String | The entity code.         |
| entityDefinition | Object | EntityInstanceDto object |
| value            | String | An utterance.            |

#### Returns {id="returns_34"}

This operation returns an `EntityInstanceDto` object.

### extractAllEntities(entityCode, values)

This operation extracts all occurrences of the specified entity.

#### Parameters {id="parameters_35"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |
| value      | String | An utterance.    |

#### Returns {id="returns_35"}

This operation returns a list of the `EntityInstanceDto` object.

### extractAllEntities(entityDefinition, values)

This operation extracts all occurrences of the specified entity.

#### Parameters {id="parameters_36"}

|    Parameter     |  Type  |       Description        |
|------------------|--------|--------------------------|
| entityDefinition | Object | EntityInstanceDto object |
| values           | String | Utterances.              |

#### Returns {id="returns_36"}

This operation returns a list of the `EntityInstanceDto` object.

### extractAllEntities(entityCodeValueMap)

This operation extracts entities of different types in a single step.

#### Parameters {id="parameters_37"}

|     Parameter      | Type |             Description             |
|--------------------|------|-------------------------------------|
| entityCodeValueMap | Map  | A map of entity code and utterance. |

#### Returns {id="returns_37"}

This operation returns a map of entity code and `EntityInstanceDto` object.

### extractAllEntities(entityCodes, text)

This operation extracts entities of different types in a single step.

#### Parameters

|  Parameter  |  Type  |       Description       |
|-------------|--------|-------------------------|
| entityCodes | String | A list of entity codes. |
| text        | String | An utterance.           |

#### Returns

This operation returns a map of entity code and `EntityInstanceDto` object.

##Data Objects {% #Objects %}

Several data objects are available with the Context service. These are the entities handled by the entity and intent related operations. All fields are only accessible with accessors. For example, to obtain the `datum` field from a `entityInstanceDto` object in Groovy, use `def value = entityInstance.datum()`.

### Entity Instance

Internally represented by the class `EntityInstanceDto`.

|       Field        |                                                              Type                                                              |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| id                 | UUID                                                                                                                           |
| entityDefinitionId | UUID                                                                                                                           |
| datum              | Populated DatumDecorator object                                                                                                |
| value              | The value held by the Datum object. The value returned would be different based on the type of DatumDecorator object returned. |
| datumType          | The type of datum. See datum above.                                                                                            |
| entityScope        | EntityScope. See next section.                                                                                                 |

### EntityScope

Scopes to which an intent instance may be associated with. Internally represented by the enumeration EntityScope. Available values are:

* CONTEXT

* INTENT

* CONVERSATION

### Intent Definition

Internally represented by the class `IntentDto`.

|     Element      |           Description            |
|------------------|----------------------------------|
| id               | UUID                             |
| code             | String                           |
| name             | String                           |
| actionType       | Either EXECUTE_BPN or ECHO_GOAL. |
| actionSystemData | String of BPN model name.        |

### Intent Instance

Internally represented by the class `IntentInstanceDto`.

| Field     | Type      | Description |
|-----------|-----------|-------------|
| id        | UUID      |             |
| intent    | IntentDto |             |
| contextId | UUID      |             |
| executed  | Boolean   |             |

### DatumDecorator

Wraps Datum objects. Internally represented by the class `DatumDecorator`.

|   Field   |  Type  |               Description                |
|-----------|--------|------------------------------------------|
| datum     | Datum  | Datum object held by the decorator.      |
| datumType | String | Shorthand accessor to the datum's type.  |
| label     | String | Shorthand accessor to the datum's label. |
| value     | Object | Shorthand accessor to the datum's value. |
| text      | String | Shorthand accessor to the datum's text.  |

### Datum

Internally represented by the class `Datum`.

|   Field   |  Type  |                                         Description                                         |
|-----------|--------|---------------------------------------------------------------------------------------------|
| datumType | String | Type of datum object, for example DATE for a Date datum.                                    |
| label     | String | Human readable label. For example, for an SSN, the label would be "Social Security Number". |
| value     | Object | Normalized value of the Datum.                                                              |
| text      | String | Text covered by the entity in question.                                                     |

## Examples

### Intent Operations

This example demonstrates the use of the intent-related operations provided by `contextService`.

```
execution.setVariable("triggeredIntent", contextService.triggeredIntent())
execution.setVariable("processIntents", contextService.processIntents().collect { it.code() })
execution.setVariable("isTriggeredByIntent", contextService.isCurrentProcessTargetedByIntent("mortgage_help"))
```

### Identify Whether an Intent in History was Executed

A <madcap:annotation madcap:createdate="2024-09-06T11:05:29.4374588-04:00" madcap:creator="TimSlavin" madcap:initials="TI" madcap:comment="Is this new field documented in IntentInstanceDto table above? And is the accessor intentHistory? And/or name?" madcap:editor="TimSlavin" madcap:editdate="2024-09-06T11:06:13.0499127-04:00">
new field was added to IntentInstanceDto in version 5.6.25

```
for (intent in contextService.intentHistory()) {
    if (intent.executed()) {
        log.info("The intent ${intent.intent.name()} was executed.")
    }
}
```

### Remove Entity Instances Programmatically

Context service allows entity instances to be removed in script tasks.

```
// Removing all intent-scoped entities
contextService.removeAllEntitiesFromScope(EntityScope.INTENT)
 
// Removing all conversation-scoped entities
contextService.removeAllEntitiesFromScope(EntityScope.CONVERSATION)
 
// Removing the entity 'dob' from the intent and conversation scopes.
contextService.removeEntity("name", [EntityScope.INTENT, EntityScope.CONVERSATION]);
 
// Removing the entity 'name' from all scopes
contextService.removeEntity("name")
 
// Removing the entities 'name' and 'dob' from all scopes together
contextService.removeEntities(["name", "dob"])
 
// Removing all entities from all scopes
def removed = contextService.removeAllEntities()
log.info("Removed the entity instance(s): ${removed}")
```

### Set Entity Values Programmatically

Operations for extracting entities have been available to script tasks since Amelia version 5.7.0.

This example shows how two previously defined entities ("name", of type Person Name; and "amount", of type Currency) can be extracted programmatically. In other words, their values will be set or updated by a Builder Script block or BPN Script task, as if they were extracted from the user's utterance, through the regular NLP pipeline.

Therefore, setting the values of entities programmatically is constrained by the same rules applied during regular entity extraction. Setting arbitrary values to entities also may not be possible. It depends on the entity type. For example, Text entities are extractable from virtually any inputs. Currency entities are very specific and will only be set (extracted) if the input contains a currency-like text span.

```
// Extracts the value of the "name" and "amount" entities from the input text
def entityCodes = ['name', 'amount'] // Entities we want to set
def input = 'We paid John Doe $53.' // Entity-value-bearing text
 
// This method call will at the same time update the value of the entity in the system and return a returns a Map<String, List<EntityInstanceDto>>
def extractedEntities = contextService.extractAllEntities(entityCodes, input)
 
// Copy the value of the first occurrence of each extracted entity to a variable
def extractedPerson = extractedEntities['name'][0].value()
def extractedAmount = extractedEntities['amount'][0].value()
 
// The value of firstName should be "John"
def firstName = extractedPerson.firstName()
```

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}