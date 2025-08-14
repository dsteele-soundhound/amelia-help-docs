# Integration Service

## Introduction

{% include from="B03-04_0430-IntegrationSvc.md" element-id="B03-04_0430-IntegrationSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Calling the Integration Service](#Calling)

* [Run integration services synchronously](#Methods)

##Calling the service {% #Calling %}

To call the service, use the `integrationService` handle appended to the service operation. For example, `integrationService.runSynchronously(flowname)`. The `runSynchronously` operation starts a synchronous integration flow with the specified `flowname`.

##Operations {% #Methods %}

Use the integrationService handle to call any of these service operations:

### runSynchronously(String flowName)

Runs the specified integration flow automatically. It builds context from all variables in the current flow execution. When finished, the resulting variables overwrite those from the current execution.

> The number of variables in the current process instance impacts execution speed. {style="warning"}

#### Parameters {id="parameters_1"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| flowName  | String | Name of the integration flow |

#### Returns {id="returns_1"}

This operation does not return a value.

### runSynchronously(String flowName, Map<String, Object> context)

Runs the specified integration flow, using only the specified context as input. Returns the integration flow execution outcome in a map. Instance variables are not automatically overwritten. Returns the integration flow execution outcome.

> Handling more than 10 variables is faster with this operation.

#### Parameters

| Parameter |     Type      |                Description                 |
|-----------|---------------|--------------------------------------------|
| flowName  | String        | Name of the integration flow               |
| Map       | String Object | Context for the integration flow execution |

#### Returns

|  Type  |                   Description                   |
|--------|-------------------------------------------------|
| result | Returns the integration flow execution outcome. |

#### Example/Examples

The runSynchronously operation calls the integration flow and passes a Groovy HashMap. The map has a single value. As a result, the variable sum is available for use by Script tasks and Script blocks.
```JavaScript
def outgoingVariable = execution.getVariable('response');
 
def outgoingVariableMap = new HashMap();
outgoingVariableMap.put('x', outgoingVariable)
 
def incomingVariableMap = integrationService.runSynchronously('multiply', outgoingVariableMap)
 
execution.setVariable('sum', incomingVariableMap.get('result'));
```

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

