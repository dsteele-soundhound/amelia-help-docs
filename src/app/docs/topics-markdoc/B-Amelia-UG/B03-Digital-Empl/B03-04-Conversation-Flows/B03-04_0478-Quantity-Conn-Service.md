# Quantity Connection Service

## Introduction

{% include from="B03-04_0478-Quantity-Conn-Svc.md" element-id="B03-04_0478-Quantity-Conn-Svc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Quantity connection service](#Calling).
* [Extract and format datums](#Extracti).
* [Use the Quantity connection service](#Operatio).

##Call the service {% #Calling %}

To call the connection service, use the `qty` handle appended to the service operation. For example, `qty:format(entityCode)`. Here the service calls the `format(entityCode)` operation. The operation uses the connection to format the latest instance of the entity code. It uses the default formatter for the type of object held by the entity instance.

##Extract and Format Datums {% #Extracti %}

To extract data from user utterances, you'll use the [Context Service](B03-04_0424-Context-Service.md). Then you'll normalize and format the data using the [Quantity Connection Service](#).

Once extracted, you'll format the datums. To learn more about formatting, see our [Datum Types](B03-07_0101-Datum-Types-Library.md), [Formatters](B03-07_0102-Formatters-Library.md), and [Time Zones](B03-07_0103-Time-Zones-Library.md) topics.

##Operations {% #Operatio %}

Use the `qty` handle to call any of the following operations:

### format(entityCode)

The operation uses the connection to format the latest instance of the entity code. It uses the default formatter for the type of object held by the entity instance.

#### Parameters {id="parameters_1"}

| Parameter  |  Type  |   Description    |
|------------|--------|------------------|
| entityCode | String | The entity code. |

#### Returns {id="returns_1"}

| Type |         Description          |
|------|------------------------------|
| TBA  | Returns the formatted value. |

#### Example {id="example_1"}

This example formats the user_age entity value.
```JavaScript
qty:format('user_age')
 ```

### format(entityCode, Formatters.FormatterType)

The operation formats the most recent instance of the given entity code. It does this by using the provided formatters name in the method call.

#### Parameters {id="parameters_2"}

|        Parameter         |  Type  |                Description                |
|--------------------------|--------|-------------------------------------------|
| entityCode               | String | The entity code.                          |
| Formatters.FormatterType |        | The formatter to use to format the value. |

#### Returns {id="returns_2"}

| Type |         Description          |
|------|------------------------------|
| TBA  | Returns the formatted value. |

#### Example {id="example_2"}

This example formats the person_name entity value.
```JavaScript
qty:format('person_name', Formatters.PERSON_FIRST_NAME)
 ```

### format(entityCode, Formatters.FormatterType, TimeZones.timeZone)

The operation formats the most recent instance of the entity code using the provided formatter name in the method call. The method uses the time zone to format the datum value.

#### Parameters

|        Parameter         |  Type  |                  Description                   |
|--------------------------|--------|------------------------------------------------|
| entityCode               | String | The entity code.                               |
| Formatters.FormatterType |        | The formatter to use to format the value.      |
| TimeZones.timeZone       |        | The timezone value to use to format the value. |

#### Returns

| Type |         Description          |
|------|------------------------------|
| TBA  | Returns the formatted value. |

#### Example

This example formats the meeting_time entity value.
```JavaScript
qty:format('meeting_time', Formatters.DATE, TimeZones.AMERICA_TORONTO)
 ```

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}
