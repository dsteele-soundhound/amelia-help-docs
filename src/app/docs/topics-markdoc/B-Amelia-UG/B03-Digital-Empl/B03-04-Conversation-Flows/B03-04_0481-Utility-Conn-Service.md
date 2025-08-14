# Utility Connection Service

## Introduction

{% include from="B03-04_0481-ConServ-UtilitySvc.md" element-id="B03-04_0481-ConServ-UtilitySvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Utility connection service](#Calling).
* [Use the Utility connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `util` handle appended to the service operation. For example, `util:map(collection, mapper)`. Here the service calls the `map(collection, mapper)` operation. The operation converts a collection of data into a map using a mapping function.

##Operations {% #Operatio %}

Use the `util:` handle to call any of the following operations:

### map(collection, mapper)

This operation maps the elements of a collection using a mapping function.

#### Parameters {id="parameters_1"}

| Parameter  | Type                     |                            Description                            |
|------------|--------------------------|-------------------------------------------------------------------|
| collection | Collection%lt;Object%gt; | The collection for transformation into a map.                     |
| mapper     | Closure                  | The mapping function to use to transform a collection into a map. |

#### Returns {id="returns_1"}

|        Type        |                       Description                        |
|--------------------|----------------------------------------------------------|
| Collection&lt;Object&gt; | Returns a collection containing the transformed objects. |

#### Example {id="example_1"}

You define at least one entity type as "Email." This example shows how `util:map()` allows for more concise syntax when dealing with a list of complex objects, like EntityDefinitionDto. The function `util:map()` uses a lambda to pick the entity code for each item of the list returned by `ctx:entityDefinitions()`.

`util:map(ctx:slotDefinitions(), (dto)->{ dto.code() })`

When you execute a task named "Say these are the entity definitions: `${util:map(ctx:entityDefinitions(), (dto)->{ dto.code() })}`", Amelia utters the list of entity definition codes visible for the selected domain.

Say the connection between two task or block edges uses the expression `EMAIL' =~ util:map(ctx:entityDefinitions(), (dto)->{ dto.datumType() })`. This is evaluated in a conversation flow as the connection moves from one block to another. The expression returns true if you've defined at least one entity type as "e-mail."

### filter(collection, predicate)

This operation filters the element of a collection using a predicate.

#### Parameters

| Parameter  |        Type        |                            Description                            |
|------------|--------------------|-------------------------------------------------------------------|
| collection | Collection&lt;Object&gt; | The collection to be filtered.                                    |
| predicate  | Closure            | The part of the sentence or clause to use to filter a collection. |

#### Returns

|        Type        |                                     Description                                     |
|--------------------|-------------------------------------------------------------------------------------|
| Collection&lt;Object&gt; | Returns a collection containing the elements where the predicate evaluates to true. |

#### Example

As with the `util:map()` operation, you can filter a list of complex or simple objects with a lambda expression.

For example, your BPNs task or Digital Employees builder block named "say `${util:filter(ctx:slotDefinitions(), (dto)->{ dto.datumType() == 'INTEGER' }).size()}` INTEGER entity have been defined" executes in a conversation flow. Then, Amelia utters the number of INTEGER entities defined for the selected domain.

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}
