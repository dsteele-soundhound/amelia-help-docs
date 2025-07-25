# Logging Service

## Introduction

{% include from="B03-04_0431-LoggingSvc.md" element-id="B03-04_0431-LoggingSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Logging service](#Calling).

* [Use the Logging service](#Operatio).

* [Add log entries](#Examples).

##Call the Service {% #Calling %}

To call the service, use the `log` handle appended to the service operation. For example, `log.warn()`. Here the service calls the `warn` operation. The operation adds a warning to Amelia's audit logs.

##Operations {% #Operatio %}

Use the `log` handle to call any of the following operations:

### debug(somethingThrowable)

This operation logs a message as a debug entry in the log file.

#### Parameters {id="parameters_1"}

|     Parameter      |          Type           |              Description              |
|--------------------|-------------------------|---------------------------------------|
| somethintThrowable | String, Object, or Link | The message to enter in the log file. |

#### Returns {id="returns_1"}

This operation doesn't return anything when called.

### info(somethingThrowable)

This operation logs a message as an info entry in the log file.

#### Parameters {id="parameters_2"}

|     Parameter      |          Type           |              Description              |
|--------------------|-------------------------|---------------------------------------|
| somethintThrowable | String, Object, or Link | The message to enter in the log file. |

#### Returns {id="returns_2"}

This operation doesn't return anything when called.

### warn(somethingThrowable)

This operation logs a message as a warn entry in the log file.

#### Parameters {id="parameters_3"}

|     Parameter      |          Type           |              Description              |
|--------------------|-------------------------|---------------------------------------|
| somethintThrowable | String, Object, or Link | The message to enter in the log file. |

#### Returns {id="returns_3"}

This operation doesn't return anything when called.

### error(somethingThrowable)

This operation logs a message as an error entry in the log file.

#### Parameters

|     Parameter      |          Type           |              Description              |
|--------------------|-------------------------|---------------------------------------|
| somethintThrowable | String, Object, or Link | The message to enter in the log file. |

#### Returns

This operation doesn't return anything when called.

##Examples {% #Examples %}

The Logging service is available in Script tasks, Script blocks, and libraries.

These examples show two different ways to add a custom entry to log files. The first example shows a direct call to add an entry to the log file. The second example shows how to use try/catch to add an entry to the log file.
```JavaScript
log.info("Hello world!")

try {
    foo()
} catch(TestException e) {
    log.info("Error fooing", e)
}
```

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
