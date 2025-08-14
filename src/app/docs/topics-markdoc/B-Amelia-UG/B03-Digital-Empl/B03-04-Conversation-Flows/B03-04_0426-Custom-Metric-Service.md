# Custom Metric Service

{% include from="B03-04_0426-CustomMetrics.md" element-id="B03-04_0426-CustomMetrics_snippet" /%}

## What You'll Learn

In this topic, you'll learn how to:

* [Call the Custom Metric service](#Calling).

* [Add, update, delete, and retrieve custom metrics and values.](#Operatio)

* [Export conversation reports to view custom metrics data.](#Export)

##Calling the Service {% #Calling %}

To call the service, use the `customMetricService` service handle appended to the service operation. For example,`customMetricService.upsertMetric("resolution","1")`. The service calls the `upsertMetric` operation to create a metric called `resolution` with a value of `1`.

##Operations {% #Operatio %}

Use the `customMetricService` service handle to call any of these service operations:

### upsertMetric(name, value)

This operation saves or updates a custom metric value for the conversation.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| name      | String | The unique name of the metric. |
| value     | String | The value of the metric.       |

#### Returns {id="returns_1"}

Operation does not return a value.

### deleteMetric(name)

This operation deletes a previously saved custom metric value.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| name      | String | The unique name of the metric. |

#### Returns {id="returns_2"}

Operation does not return a value.

### getMetric(name)

This operation retrieves a previously saved custom metric value. Returns the metric value or null if the value does not exist.

#### Parameters

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| name      | String | The unique name of the metric. |

#### Returns {id="returns_3"}

Metric value or null if value does not exist.

### getAllMetrics

This operation returns a map of all custom metrics saved for the current conversation.

#### Returns

Returns a map of all custom metrics currently saved for the current conversation.

## Example

A new variable, `trained_perf`, is assigned the contents of a Transient Variable captured in a conversation. The Metrics service converts the `trained_perf` contents to a string. Then the upsert operation adds the data to metrics. The metrics are available along with the default metrics.
```JavaScript
def trained_perf = transientVariableService.getVariable("trained_performance")
customMetricService.upsertMetric("trained_performance", trained_perf.toString())
```

##Export Custom Metric Data {% #Export %}

To export and view data collected with the Custom Metric service, see [How to Export Conversation Data in JSON](B08-02_0300-HT-Export-Conversation-Data-in-JSON.md).

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}