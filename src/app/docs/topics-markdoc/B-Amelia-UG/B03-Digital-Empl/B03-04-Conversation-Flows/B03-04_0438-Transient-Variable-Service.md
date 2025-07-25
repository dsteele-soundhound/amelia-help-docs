# Transient Variable Service

## Introduction

{% include from="B03-04_0438-TransientVariableSvc.md" element-id="B03-04_0438-TransientVariableSvc_snippet" /%}

Transient variables are accessible across all processes executed during a conversation. Variables disappear once the conversation is closed by the user or a timeout occurs.

> If you retrieve and modify a variable, add it back to the Transient service. Otherwise, changes may disappear during a conversation. {style="warning"}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Transient Variable service](#Calling).

* [Use the Transient Variable service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `transientVariableService` handle appended to the service operation. For example, `transientVariableService.hasVariable("test")`. Here the service calls the `hasVariable` operation. The operation determines whether a transient variable exists.

##Operations {% #Operatio %}

Use the `transientVariableService` handle to call the following operations:

### hasVariable(name)

This operation determines whether a transient variable exists.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |                      Description                      |
|-----------|--------|-------------------------------------------------------|
| name      | String | The name of the variable to test to see if it exists. |

#### Returns {id="returns_1"}

This operation returns a boolean true or false value.

### addVariable(name, value)

This operation adds a single variable and value to a process instance's transient variable scope.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |                  Description                   |
|-----------|--------|------------------------------------------------|
| name      | String | The name of the variable to assign a value.    |
| value     | String | The value to be assigned to the variable name. |

#### Returns {id="returns_2"}

This operation returns a boolean true or false value.

### addVariables(variables)

This operation adds multiple variables to a process instance's transient variable scope.

#### Parameters {id="parameters_3"}

| Parameter |    Type    |                           Description                           |
|-----------|------------|-----------------------------------------------------------------|
| variables | Map object | Values tp add as variables organized as string keys and values. |

#### Returns {id="returns_3"}

This operation returns a boolean true or false value.

### getVariable(name)

This operation obtains the value of a variable associated with a process instance.

#### Parameters {id="parameters_4"}

| Parameter |  Type  |                Description                 |
|-----------|--------|--------------------------------------------|
| name      | String | The name of the variable to get its value. |

#### Returns {id="returns_4"}

This operation returns null if the variable does not exist.

### getVariables()

This operation obtains all variables associated with a process instance.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

This operation returns variables enclosed in a Map of Object values, keyed by Strings.

### clearVariables()

This operation removes all variables associated with a process instance.

#### Parameters {id="parameters_6"}

This operation has no parameters.

#### Returns {id="returns_6"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### clearVariables(conversationID)

This operation removes all transient variables associated with a conversation.

#### Parameters

|   Parameter    |  Type  |                             Description                             |
|----------------|--------|---------------------------------------------------------------------|
| conversationID | String | The conversation ID to clear variables stored for the conversation. |

#### Returns

This operation does not return a value. Instead, it changes the state of one or more objects.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
