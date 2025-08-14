# Quantity Service

## Introduction

{% include from="B03-04_0433-QuantitySvc.md" element-id="B03-04_0433-QuantitySvc_snippet" /%}

## What You'll Learn

In this topic, you'll learn how to:

* [Call the Quantity service](#Calling).

* [Extract Datums](#Extracti).

* [Use the Quantity service](#Operatio).

* [Use Datum Types, Formatters, and Time Zones](#Using).

##Call the Service {% #Calling %}

Script tasks and Script blocks use the `quantityService` handle to call service operations. For example, `quantityService.normalizeAndFormat('12/12/2024', DatumType.DATE, Formatters.DATE_IN_WORDS)` uses the `normalizeAndFormat` operation to process the date 12/12/2024 and outputs it as December 12, 2024.

##Extract Datums {% #Extracti %}

To extract data from user utterances, you'll use the [Context service](B03-04_0424-Context-Service.md). Then you'll normalize and the format data using the Quantity service.

##Operations {% #Operatio %}

Use the `quantityService` name to call the following operations:

### normalize(text, DatumType)

The operation converts the given text into a Datum of the specified type (DatumType).

#### Parameters {id="parameters_1"}

| Parameter |  Type  |                                                                         Description                                                                         |
|-----------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| text      | String | The sentence, word, or token to normalize.                                                                                                                  |
| DatumType | String | The datum type you want to normalize the text into. Constants for each datum type are defined with `DatumTypes.Type` usage, for example, `DatumTypes.DATE`. |

#### Returns {id="returns_1"}

|  Type  |                                      Description                                       |
|--------|----------------------------------------------------------------------------------------|
| String | Returns a DatumDecorator object formatted into a string using the DatumType parameter. |

#### Examples {id="examples_1"}

```JavaScript
def datum = quantityService.normalize('Japan', DatumType.COUNTRY);
```

### normalizeAndFormat(text, DatumTypes, Formatters)

This operation normalizes the given text into a Datum of the specified type (DatumType). Then it formats the Datum object into a String using the Formatter provided.

#### Parameters {id="parameters_2"}

| Parameter  |  Type  |                                                                         Description                                                                         |
|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| text       | String | The sentence, word, or token to normalize.                                                                                                                  |
| DatumType  | String | The datum type you want to normalize the text into. Constants for each datum type are defined with `DatumTypes.Type` usage, for example, `DatumTypes.DATE`. |
| Formatters | String | The formatter to use to normalize the text parameter.                                                                                                       |

#### Returns {id="returns_2"}

|  Type  |                                      Description                                       |
|--------|----------------------------------------------------------------------------------------|
| String | Returns a DatumDecorator object formatted into a string using the Formatter parameter. |

#### Examples {id="examples_2"}

```javascript
quantityService.normalizeAndFormat('12/12/2000', DatumType.DATE, Formatters.DATE_IN_WORDS);
```

### normalizeAndFormat(text, DatumType, Formatters, TimeZones)

This operation normalizes the given text into a Datum of the specified type (DatumType). Then it formats the Datum object into a String using the Formatter provided, taking the time zone into consideration.

#### Parameters {id="parameters_3"}

| Parameter  |  Type  |                                                                         Description                                                                         |
|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| text       | String | The sentence, word, or token to normalize.                                                                                                                  |
| DatumType  | String | The datum type you want to normalize the text into. Constants for each datum type are defined with `DatumTypes.Type` usage, for example, `DatumTypes.DATE`. |
| Formatters | String | The formatter to use to normalize the text parameter.                                                                                                       |
| TimeZones  | String | The timezone to use to normalize the text parameter. Constants for each timezone are defined with the `TimeZone.Zone` usage, for example, `TimeZone.UTC`.   |

#### Returns {id="returns_3"}

|  Type  |                                              Description                                               |
|--------|--------------------------------------------------------------------------------------------------------|
| String | Returns a DatumDecorator object formatted into a string using the Formatters and TimeZones parameters. |

#### Examples {id="examples_3"}

```javascript
quantityService.normalizeAndFormat('tomorrow', DatumType.DATE, Formatters.DATE_IN_WORDS, TimeZones.AMERICA_NEW_YORK);
```

### format(datum)

This operation formats the DatumDecorator object provided using the default formatter defined for the datum type.

#### Parameters {id="parameters_4"}

| Parameter |         Type          |                         Description                         |
|-----------|-----------------------|-------------------------------------------------------------|
| datum     | DatumDecorator object | The datum you want to normalize with the default formatter. |

#### Returns {id="returns_4_1"}

|  Type  |                                     Description                                      |
|--------|--------------------------------------------------------------------------------------|
| String | Returns a DatumDecorator object formatted into a string using the default formatter. |

#### Examples {id="examples_4_1"}

```javascript
def datumFormattedUsingDefaultFormatter = quantityService.format(datum);
```
### format(datum, Formatters)

This operation formats the given DatumDecorator object using the formatter as a parameter.

#### Parameters {id="parameters_5_1"}

| Parameter  |         Type          |                         Description                         |
|------------|-----------------------|-------------------------------------------------------------|
| datum      | DatumDecorator object | The datum you want to normalize with the default formatter. |
| Formatters | String                | The formatter to use to normalize the datum parameter.      |

#### Returns {id="returns_4_2"}

|  Type  |                                                     Description                                                     |
|--------|---------------------------------------------------------------------------------------------------------------------|
| String | Returns a DatumDecorator object formatted into a string using thet formatter specified by the Formatters parameter. |

#### Examples {id="examples_4_2"}

```javascript
def datumFormatterByFormatterProvided = quantityService.format(datum, Formatters.COUNTRY);
```

### format(datum, Formatters, TimeZones)

This operation formats the given DatumDecorator object using the formatter as a parameter, and taking the timezone into consideration.

#### Parameters {id="parameters_5"}

| Parameter  |         Type          |                                                                        Description                                                                        |
|------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| datum      | DatumDecorator object | The datum you want to normalize with the default formatter.                                                                                               |
| Formatters | String                | The formatter to use to normalize the datum parameter.                                                                                                    |
| TimeZones  | String                | The timezone to use to normalize the text parameter. Constants for each timezone are defined with the `TimeZone.Zone` usage, for example, `TimeZone.UTC`. |

#### Returns {id="returns_4"}

|  Type  |                                              Description                                               |
|--------|--------------------------------------------------------------------------------------------------------|
| String | Returns a DatumDecorator object formatted into a string using the Formatters and TimeZones parameters. |

#### Examples {id="examples_4"}

```javascript
def datumFormattedWithTimeZone = quantityService.format(datum, Formatters.DATE_TIME_IN_WORDS, TimeZones.AMERICA_TORONTO);
```

##Use Datum Types, Formatters, and Time Zones {% #Using %}

To learn about formatting datums, see our [Datum Types](B03-07_0101-Datum-Types-Library.md), [Formatters](B03-07_0102-Formatters-Library.md), and [Time Zones](B03-07_0103-Time-Zones-Library.md) topics.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
