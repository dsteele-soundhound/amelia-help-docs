# Execution Object Service

## Introduction

<include from="B03-04_0429-ExecutionObjSvc.md" element-id="B03-04_0429-ExecutionObjSvc_snippet"/>

For example, the `containsVariable(key)` operation tests whether or not a variable named key exists while the `userDisplayName()` operation captures the full name of the current logged in user.

## What You'll Learn

In this topic you'll learn how to:

* [Call the Execution Object service](#Calling).

* [Use the Execution Object service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `execution` handle appended to the service operation. For example, `execution.domainCode`. Here the service calls the `domainCode` operation. The operation retrieves the current domain code for a conversation.

##Operations {% #Operatio %}

Use the `execution` handle to call any of the following operations.

### Process Operations

### getId()

This operation gets the process instance ID.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

This operation returns the process instance ID.

### processDefinition()

This operation gets the process instance ID.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

This operation returns the process definition ID.

### parentProcessDefinitionId()

This operation gets the parent process instance ID.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This operation returns returns the parent process definition ID.

### currentTaskInstanceId()

This operation gets the current task instance ID.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

This operation returns the current task instance ID.

### conversationId()

This operation gets the conversation ID.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

This operation returns the conversation ID.

### status()

This operation gets the current process instance status.

#### Parameters {id="parameters_6"}

This operation has no parameters.

#### Returns {id="returns_6"}

This operation returns the current process instance status.

### modelName()

This operation obtains the name of the process model whose instance is currently running.

#### Parameters {id="parameters_7"}

This operation has no parameters.

#### Returns {id="returns_7"}

This operation returns the name of the process model.

### Process Variables

### getVariable(key)

This operation gets a variable by its name in given process instance.

#### Parameters {id="parameters_8"}

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| key       | String | The variable name used as a key. |

#### Returns {id="returns_8"}

This operation returns the variable as an Object.

### getVariablesAsMap()

This operation gets all variables in given process instance as map.

#### Parameters {id="parameters_9"}

This operation has no parameters.

#### Returns {id="returns_9"}

This operation returns a map of all variables associated with their keys.

### getVariableNames()

This operation gets all variable names for the given process instance.

#### Parameters {id="parameters_10"}

This operation has no parameters.

#### Returns {id="returns_10"}

This operation returns a set of all variable names.

### hasVariables()

This operation tests if given process instance has one or more variables.

#### Parameters {id="parameters_11"}

This operation has no parameters.

#### Returns {id="returns_11"}

This operation returns true if the given process instance has at least one variable.

### containsVariable(key)

This operation tests if the given process instance has a variable associated with the given variable name.

#### Parameters {id="parameters_12"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| key       | String | The variable name used as key. |

#### Returns {id="returns_12"}

This operation returns true if the process instance contains the variable.

### setVariable(key, value)

This operation adds a variable to given process instance with variable name and value.

#### Parameters {id="parameters_13"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| key       | String | The variable name used as key. |
| value     | String | The variable value.            |

#### Returns {id="returns_13"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### setVariables(variables)

This operation adds variables to a process instance.

#### Parameters {id="parameters_14"}

| Parameter | Type |             Description             |
|-----------|------|-------------------------------------|
| variables | Map  | The variables organized with a map. |

#### Returns {id="returns_14"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### setSecureVariable(key, value)

This operation sets a secure variable which will not be sent back to the UI.

#### Parameters {id="parameters_15"}

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| key       | String | The variable name used as a key. |
| value     | String | The value of the variable.       |

#### Returns {id="returns_15"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### isSecureVariable(key)

This operation tests if the variable is set and whether it is marked secure.

#### Parameters {id="parameters_16"}

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| key       | String | The variable name used as a key. |

#### Returns {id="returns_16"}

This operation returns true if secure, false if not secure.

### removeVariable(key)

This operation removes a variable based on the variable name in given process instance.

#### Parameters {id="parameters_17"}

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| key       | String | The variable name used as a key. |

#### Returns {id="returns_17"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### removeVariables(keys)

This operation removes a set of variables based on variable names in the current process instance. When an Ask, Say, or interactive block or task segment begins, it will refresh the process instance.

#### Parameters {id="parameters_18"}

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| keys      | String | A set of variable names used as keys. |

#### Returns {id="returns_18"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### removeVariables()

This operation removes all variables for the given process instance.

#### Parameters {id="parameters_19"}

This operation has no parameters.

#### Returns {id="returns_19"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### Analytics

### addAnalyticOutcome(name, datum)

This operation adds an analytic outcome to the current context. If outcome with the same name already exists, it will be updated and replaced.

#### Parameters {id="parameters_20"}

| Parameter |  Type  |        Description        |
|-----------|--------|---------------------------|
| name      | String | The name of the outcome.  |
| datum     |        | The value of the outcome. |

#### Returns {id="returns_20"}

This operation does not return a value. Instead, it changes the state of one or more objects.

### Domain Information

### domainId()

This operation obtains the current domain ID.

#### Parameters {id="parameters_21"}

This operation has no parameters.

#### Returns {id="returns_21"}

This operation returns the current domain ID.

### domainCode()

This operation obtains the current domain code.

#### Parameters {id="parameters_22"}

This operation has no parameters.

#### Returns {id="returns_22"}

This operation returns the current domain code.

### domainName()

This operation obtains the current domain name.

#### Parameters {id="parameters_23"}

This operation has no parameters.

#### Returns {id="returns_23"}

This operation returns the current domain name.

### domain()

This operation obtains the domain information as a `DomainDto` data object.

#### Parameters {id="parameters_24"}

This operation has no parameters.

#### Returns {id="returns_24"}

This operation returns a `DomainDto` data object with domain information.

### User Information

### userId()

This operation obtains the current user ID.

#### Parameters {id="parameters_25"}

This operation has no parameters.

#### Returns {id="returns_25"}

This operation returns the current user ID.

### isAnonymous()

This operation determines whether the current conversation is anonymous.

#### Parameters {id="parameters_26"}

This operation has no parameters.

#### Returns {id="returns_26"}

This operation returns true if conversation is anonymous, false if not.

### Custom Conversation Attributes

### getCustomConversationAttribute(name)

This operation gets custom conversation attribute by name.

#### Parameters {id="parameters_27"}

| Parameter |  Type  |                  Description                   |
|-----------|--------|------------------------------------------------|
| name      | String | The name of the custom conversation attribute. |

#### Returns {id="returns_27"}

This operation returns the attribute value or null if not set.

### containsCustomConversationAttribute(name)

This operation checks if a custom conversation attribute has been set.

#### Parameters {id="parameters_28"}

| Parameter |  Type  |                  Description                   |
|-----------|--------|------------------------------------------------|
| name      | String | The name of the custom conversation attribute. |

#### Returns {id="returns_28"}

This operation returns true if an attribute has been set, false if not.

### getCustomConversationAttributesAsMap()

This operation gets all currently set custom conversation attributes.

#### Parameters {id="parameters_29"}

This operation has no parameters.

#### Returns {id="returns_29"}

This operation returns an immutable copy of all set attributes. This protects the source from modification.

### Initial HTTP Headers

### getInitialHttpHeader(name)

This operation gets initial http header from the new conversation request by name. If a multivalued header, will return the first item.

#### Parameters {id="parameters_30"}

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| name      | String | The attribute name. |

#### Returns {id="returns_30"}

This operation returns the attribute value or null if the value is not set.

### getInitialHttpHeaders(name)

This operation gets the values of an http header from the new conversation request by name in a list of values format. If a single valued header, will return the single value in a one-element list.

#### Parameters {id="parameters_31"}

| Parameter |  Type  |        Description        |
|-----------|--------|---------------------------|
| name      | String | The header value by name. |

#### Returns {id="returns_31"}

This operation returns a list of all values in that header. Or an empty list if none are present.

### getInitialHttpHeadersAsMap()

This operation gets an immutable copy of all initial http headers in multivalued list form.

#### Parameters {id="parameters_32"}

This operation has no parameters.

#### Returns {id="returns_32"}

This operation returns an immutable copy of all http headers in the new conversation request. This protects the source from modification.

### Authentication Data

### getExternalAuthenticationDate()

This operation gets external authentication data.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns an immutable copy of external authentication data. This protects the source from modification.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}