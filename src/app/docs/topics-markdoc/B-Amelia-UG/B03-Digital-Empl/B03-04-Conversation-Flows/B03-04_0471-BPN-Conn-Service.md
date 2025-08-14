

# BPN Connection Service

## Introduction

{% include from="B03-04_0471-ConServ-BPN.md" element-id="B03-04_0471-ConServ-BPN_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the BPN connection service](#Calling).

* [Use the BPN connection service](#Basic).

* [Use the variable handling operations](#Variable).

##Call the Service {% #Calling %}

To call the service, use the `bpn` handle appended to the service operation. For example, `bpn:otherwise`. Here the service calls the `otherwise` operation. The operation uses this connection if all of the other outgoing edges off of the same task cannot be followed.

##Basic Operations {% #Basic %}

This service has three operations that don't use variables to direct conversations. Use the `bpn` handle to call the following operations:

### bpn:attempts()

This operation captures the number of attempts to execute a task. The value is available for use in an connection service expression.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

This operation returns the number of consecutive attempts to execute the current task.

#### Example {id="example_1"}

This example....
```JavaScript
bpn:attempts() == 2
```

### bpn:choice(options)

This operation specifies a choice to use to direct the conversation. For example, a user response.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |                              Description                              |
|-----------|--------|-----------------------------------------------------------------------|
| options   | String | One or more text values which may be characters, words, or sentences. |

#### Returns {id="returns_2"}

This operation does not return anything.

#### Example

This example....
```JavaScript
bpn:choice("red") 
```

### bpn:otherwise()

This operation identifies a connection as available if the other outgoing edges cannot be followed. Where `bpn:choice()` finds valid options, `bpn:otherwise()` accepts all invalid options.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This operation does not return anything.

##Variable Handling Operations {% #Variable %}

These operations allow connections to access regular and transient variables from blocks, tasks, and edges. Use the `bpn` handle to call any of these service operations:

### bpn:hasRvar(regularVariableName)

This operation determines whether a regular variable exists or not.

#### Parameters {id="parameters_4"}

|      Parameter      |  Type  |            Description            |
|---------------------|--------|-----------------------------------|
| regularVariableName | String | The name of the regular variable. |

#### Returns {id="returns_4"}

This operation returns true if the variable exists.

### bpn:rvar(regularVariableName)

This operation obtains the value of a regular variable.

#### Parameters {id="parameters_5"}

|      Parameter      |  Type  |            Description            |
|---------------------|--------|-----------------------------------|
| regularVariableName | String | The name of the regular variable. |

#### Returns {id="returns_5"}

This operation returns the value of the variable, or null if the variable does not exist.

### bpn:rvars(regularVariableNames)

This operation obtains the values of all regular variables by name.

#### Parameters {id="parameters_6"}

|      Parameter       |  Type  |             Description             |
|----------------------|--------|-------------------------------------|
| regularVariableNames | String | The names of the regular variables. |

#### Returns {id="returns_6"}

This operation returns a map of variable values keyed by variable name. The map contains all regular variables that could be found..

### bpn:hasTvar(transientVariableName)

This operation determines whether a transient variable exists or not.

#### Parameters {id="parameters_7"}

|       Parameter       |  Type  |             Description             |
|-----------------------|--------|-------------------------------------|
| transientVariableName | String | The name of the transient variable. |

#### Returns {id="returns_7"}

This operation returns true if the variable exists.

### bpn:tvar(transientVariableName)

This operation obtains the value of a transient variable.

#### Parameters {id="parameters_8"}

|       Parameter       |  Type  |             Description             |
|-----------------------|--------|-------------------------------------|
| transientVariableName | String | The name of the transient variable. |

#### Returns {id="returns_8"}

This operation returns the value of the variable, or null if the variable does not exist.

### bpn:tvars(transientVariableNames)

This operation obtains the values of all regular variables by name.

#### Parameters {id="parameters_9"}

|       Parameter        |  Type  |              Description              |
|------------------------|--------|---------------------------------------|
| transientVariableNames | String | The names of the transient variables. |

#### Returns {id="returns_9"}

This operation returns a map of variable values keyed by variable name. The map contains all regular variables that could be found..

### bpn:hasVar(varName)

This operation determines whether a regular or transient variable exists.

#### Parameters {id="parameters_10"}

| Parameter |  Type  |        Description        |
|-----------|--------|---------------------------|
| varName   | String | The name of the variable. |

#### Returns {id="returns_10"}

This operation returns true if the variable exists.

### bpn:var(regularFirst, variableName)

This operation obtains the value of a variable, be it regular or transient. Tries to find it first in one scope, and then in the other. This operation should be used only when variables with the same name may be found in different scopes, or when merging the regular and transient scopes is necessary; do not use it otherwise, as it is resource-intensive.

#### Parameters {id="parameters_11"}

|  Parameter   |  Type   |                                                     Description                                                      |
|--------------|---------|----------------------------------------------------------------------------------------------------------------------|
| regularFirst | Boolean | If true, the regular variables will be considered first. Otherwise the transient variables will be considered first. |
| variableName | String  | The name of the regular or transient variable.                                                                       |

#### Returns {id="returns_11"}

This operation returns the value of the variable, or null if the variable does not exist.

### bpn:var(regularFirst, variableNames)

This operation obtains the value of a variable, be it regular or transient. Tries to find it first in one scope, and then in the other. This operation should be used only when variables with the same name may be found in different scopes, or when merging the regular and transient scopes is necessary; do not use it otherwise, as it is resource-intensive.

#### Parameters {id="parameters_12"}

|   Parameter   |  Type   |                                                     Description                                                      |
|---------------|---------|----------------------------------------------------------------------------------------------------------------------|
| regularFirst  | Boolean | If true, the regular variables will be considered first. Otherwise the transient variables will be considered first. |
| variableNames | String  | The names of the regular or transient variables.                                                                     |

#### Returns {id="returns_12"}

This operation returns a map of variable values keyed by variable name. The map contains all regular variables that could be found..

### bpn:hasTvarLike(sqlLikeVarNamePattern)

This operation determines whether there is at least one transient variable whose name matches the specified pattern. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_13"}

|       Parameter       |  Type   |                 Description                  |
|-----------------------|---------|----------------------------------------------|
| sqlLikeVarNamePattern | Boolean | SQL-like pattern to match the variable name. |

#### Returns {id="returns_13"}

This operation returns true if at least one transient variable matches the pattern.

### bpn:hasVarLike(sqlLikeVarNamePattern)

This operation determines whether there is at least one regular or transient variable whose name matches the specified pattern. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_14"}

|       Parameter       |  Type   |                 Description                  |
|-----------------------|---------|----------------------------------------------|
| sqlLikeVarNamePattern | Boolean | SQL-like pattern to match the variable name. |

#### Returns {id="returns_14"}

This operation returns true if at least one variable matches the pattern.

### bpn:rvarsLike(sqlLikeVarNamePattern)

This operation obtains all regular variables matching the specified pattern. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_15"}

|       Parameter       |  Type   |                 Description                  |
|-----------------------|---------|----------------------------------------------|
| sqlLikeVarNamePattern | Boolean | SQL-like pattern to match the variable name. |

#### Returns {id="returns_15"}

This operation returns a map of variable values keyed by variable name. The map contains all matching regular variables.

### bpn:tvarsLike(sqlLikeVarNamePattern)

This operation obtains all transient variables matching the specified pattern. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_16"}

|       Parameter       |  Type   |                 Description                  |
|-----------------------|---------|----------------------------------------------|
| sqlLikeVarNamePattern | Boolean | SQL-like pattern to match the variable name. |

#### Returns {id="returns_16"}

This operation returns a map of variable values keyed by variable name. The map contains all matching transient variables.

### bpn:varsLike(sqlLikeVarNamePattern)

This operation obtains all regular and transient variables matching the specified pattern.The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters

|       Parameter       |  Type   |                 Description                  |
|-----------------------|---------|----------------------------------------------|
| sqlLikeVarNamePattern | Boolean | SQL-like pattern to match the variable name. |

#### Returns

This operation returns a map of variable values keyed by variable name. The map contains all matching regular and transient variables.

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}

 
