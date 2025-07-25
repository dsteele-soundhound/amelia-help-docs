# Response Connection Connection Service

## Introduction

{% include from="B03-04_0476-ConServ-ResponseSvc.md" element-id="B03-04_0476-ConServ-ResponseSvc_snippet" /%}

Amelia 6.4.0+ instances use translated user responses. To use untranslated user responses, Response Connection connection service operations must explicitly pass a `false` parameter to the operation. For example, update operations like `response:idk(false`), `response:contains(false,text)`, `response:equal(false,text)`, and `response:startsWith(false,text)`. Passing false as a value uses the untranslated user response.

## What You'll Learn

In this topic you'll learn how to:

* [Call the Response Connection service](#Calling).
* [Use Response Connection service comparison operations](#Operatio).
* [Use Response Connection service pattern matching operations](#Pattern).

##Call the Service {% #Calling %}

To call the service, use the `response` handle appended to the service operation. For example, `response:contains(text)`. Here the service calls the `contains` operation. The operation uses this connection to do a case sensitive match of the response with the text parameter.

##Comparison Operations {% #Operatio %}

Use the `response` handle to call any of the following operations:

### equal(object)

This operation matches the object in context against another object. For example, a user response with a string, or the current entity against normalized entity values or datums. This method uses several different subclasses. It may behave differently depending on the context.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| object    | Object | Any data used for matching. |

#### Returns {id="returns_1"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### contains(text)

This operation does a case-sensitive string match of the response with the text value.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| text      | String | Any text used for matching. |

#### Returns {id="returns_2"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### containsAny(texts)

This operation does a case-sensitive and exact string match of the response with any of the texts listed.

#### Parameters {id="parameters_3"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| texts     | String | Any texts used for matching. |

#### Returns {id="returns_3"}

|  Type   |                                      Description                                      |
|---------|---------------------------------------------------------------------------------------|
| Boolean | Returns true if at least one of the elements of the array matches the user utterance. |

### containsNone(texts)

This operation does a case-sensitive and exact string match of the response with any of the texts listed.

#### Parameters {id="parameters_4"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| texts     | String | Any texts used for matching. |

#### Returns {id="returns_4"}

|  Type   |                                  Description                                  |
|---------|-------------------------------------------------------------------------------|
| Boolean | Returns true if none of the elements of the array matches the user utterance. |

### startsWith(text)

This operation does a case-sensitive string match to see if the response starts with the provided text.

#### Parameters {id="parameters_5"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| text      | String | Any text used for matching. |

#### Returns {id="returns_5"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### endsWith(text)

This operation does a case-sensitive string match to see if the response ends with the provided text.

#### Parameters {id="parameters_6"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| text      | String | Any text used for matching. |

#### Returns {id="returns_6"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### in(texts)

This operation does a case-sensitive string match to see if the response matches one of the provided texts.

#### Parameters {id="parameters_7"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| texts     | String | Any texts used for matching. |

#### Returns {id="returns_7"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### hasLetters()

This operation does a case-sensitive string match to see if the response contains one or more letters.

#### Parameters {id="parameters_8"}

There are no parameters for this operation.

#### Returns {id="returns_8"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### hasDigits()

This operation does a case-sensitive string match to see if the response contains one or more digits.

#### Parameters {id="parameters_9"}

There are no parameters for this operation.

#### Returns {id="returns_9"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### hasSpace()

This operation does a case-sensitive string match to see if the response contains one or more spaces.

#### Parameters {id="parameters_10"}

There are no parameters for this operation.

#### Returns {id="returns_10"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### isDecimal()

This operation does a case-sensitive string match to see if the response is a decimal number.

#### Parameters {id="parameters_11"}

There are no parameters for this operation.

#### Returns {id="returns_11"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### isNumber()

This operation does a case-sensitive string match to see if the response is an integer or decimal number.

#### Parameters {id="parameters_12"}

There are no parameters for this operation.

#### Returns {id="returns_12"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

This operation r

### isAlphaNumeric()

This operation does a case-sensitive string match to see if the response includes alphabetic and numeric characters.

#### Parameters {id="parameters_13"}

There are no parameters for this operation.

#### Returns {id="returns_13"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### isInteger()

This operation does a case-sensitive string match to see if the response is an integer number.

#### Parameters {id="parameters_14"}

There are no parameters for this operation.

#### Returns {id="returns_14"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### hasLettersOrDigits()

This operation does a case-sensitive string match to see if the response includes letters or numbers.

#### Parameters {id="parameters_15"}

There are no parameters for this operation.

#### Returns {id="returns_15"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### hasLettersAndDigits()

This operation does a case-sensitive string match to see if the response includes letters and numbers.

#### Parameters {id="parameters_16"}

There are no parameters for this operation.

#### Returns {id="returns_16"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### matches(regex)

This operation does a case-sensitive string match to see if the response matches the proved Java regular expression.

#### Parameters {id="parameters_17"}

| Parameter |  Type  |                 Description                  |
|-----------|--------|----------------------------------------------|
| regex     | String | Java regular expression to use for matching. |

#### Returns {id="returns_17"}

|  Type   |           Description            |
|---------|----------------------------------|
| Boolean | Returns true if there's a match. |

### like(sqlLikePattern)

This operation does a case-sensitive string match to see if the response matches the SQL-like wildcard. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_18"}

|   Parameter    |  Type  |                                  Description                                   |
|----------------|--------|--------------------------------------------------------------------------------|
| sqlLikePattern | String | A SQL-like pattern used for matching. For example, "% DOE" matches "John Doe". |

#### Returns {id="returns_18"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### levenshteinDistance(text, similarityScoreThreshold)

This operation calculates the Levenshtein Distance between the response and the provided text.

#### Parameters {id="parameters_19"}

|        Parameter         |  Type  |                  Description                  |
|--------------------------|--------|-----------------------------------------------|
| text                     | String | Any text used for matching.                   |
| similarityScoreThreshold | Double | A similarity score threshold between 0 and 1. |

#### Returns {id="returns_19"}

|  Type   |                                     Description                                     |
|---------|-------------------------------------------------------------------------------------|
| Boolean | Returns true if the similarity score is greater or equal to the provided threshold. |

### fuzzy(text, similarityScoreThreshold)

This operation calculates the fuzzy match between the response and the provided text.

#### Parameters {id="parameters_20"}

|        Parameter         |  Type  |                  Description                  |
|--------------------------|--------|-----------------------------------------------|
| text                     | String | Any text used for matching.                   |
| similarityScoreThreshold | Double | A similarity score threshold between 0 and 1. |

#### Returns {id="returns_20"}

|  Type   |                                     Description                                     |
|---------|-------------------------------------------------------------------------------------|
| Boolean | Returns true if the similarity score is greater or equal to the provided threshold. |

### value()

This operation gets the response.

#### Parameters {id="parameters_21"}

There are no parameters for this operation.

#### Returns {id="returns_21"}

|  Type  |                                 Description                                 |
|--------|-----------------------------------------------------------------------------|
| String | Returns the value of the current response, if available. Or null otherwise. |

### yes()

This operation checks whether the response is an affirmative answer.

#### Parameters {id="parameters_22"}

There are no parameters for this operation.

#### Returns {id="returns_22"}

|  Type   |         Description          |
|---------|------------------------------|
| Boolean | Returns true if affirmative. |

### no()

This operation checks whether the response is a negative answer.

#### Parameters {id="parameters_23"}

There are no parameters for this operation.

#### Returns {id="returns_23"}

|  Type   |        Description        |
|---------|---------------------------|
| Boolean | Returns true if negative. |

### idk()

This operation checks whether the response is an "I Don't Know" answer.

#### Parameters {id="parameters_24"}

There are no parameters for this operation.

#### Returns {id="returns_24"}

|  Type   |                         Description                         |
|---------|-------------------------------------------------------------|
| Boolean | Returns true if the response is an "I Don't Know" response. |

##Pattern Matching Operations {% #Pattern %}

These operations use pattern matching to evaluate user responses in a conversation flow.

Use the `response` handle to call any of the following operations:

### equal(useTranslatedResponse, object)

This operation matches the object in context against another object. For example, the user response with a string, or the current entity against normalized slot values and datums. This method uses several different subclasses. It may behave differently depending on the context.

#### Parameters {id="parameters_25"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| object                | Object  | Any data used for matching.                                                                                                                                                                                                                            |

#### Returns {id="returns_25"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### contains(useTranslatedResponse, text)

This operation does a case-sensitive string match to see if the response contains the text.

#### Parameters {id="parameters_26"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| text                  | String  | Any data used for matching.                                                                                                                                                                                                                            |

#### Returns {id="returns_26"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### containsAny(useTranslatedResponse, texts)

This operation does a case-sensitive exact string match to see if the response contains the texts.

#### Parameters {id="parameters_27"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| texts                 | String  | Any data used for matching.                                                                                                                                                                                                                            |

#### Returns {id="returns_27"}

|  Type   |                                     Description                                      |
|---------|--------------------------------------------------------------------------------------|
| Boolean | Returns true if at least one of the elements of the array matches the user response. |

### containsNone(useTranslatedResponse, texts)

This operation does a case-sensitive exact string match to see if the response contains the texts.

#### Parameters {id="parameters_28"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| texts                 | String  | Any data used for matching.                                                                                                                                                                                                                            |

#### Returns {id="returns_28"}

|  Type   |                                 Description                                  |
|---------|------------------------------------------------------------------------------|
| Boolean | Returns true if none of the elements of the array matches the user response. |

### startsWith(useTranslatedResponse, text)

This operation does a case-sensitive string match to see if the response starts with the text value provided.

#### Parameters {id="parameters_29"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| text                  | String  | Any data used for matching.                                                                                                                                                                                                                            |

#### Returns {id="returns_29"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### endsWith(useTranslatedResponse, text)

This operation does a case-sensitive string match to see if the response ends with the text value provided.

#### Parameters {id="parameters_30"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| text                  | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_30"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### in(useTranslatedResponse, texts)

This operation does a case-sensitive exact string match to see if the response contains one of the texts.

#### Parameters {id="parameters_31"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| texts                 | String  | Any data used for matching.                                                                                                                                                                                                                            |

#### Returns {id="returns_31"}

|  Type   |                                 Description                                  |
|---------|------------------------------------------------------------------------------|
| Boolean | Returns true if none of the elements of the array matches the user response. |

### hasLetters(useTranslatedResponse)

This operation checks if the response includes one or more letters.

#### Parameters {id="parameters_32"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_32"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### hasDigits(useTranslatedResponse)

This operation checks if the response includes one or more digits.

#### Parameters {id="parameters_33"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_33"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### hasSpace(useTranslatedResponse)

This operation checks if the response includes one or more spaces.

#### Parameters {id="parameters_34"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_34"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### isDecimal(useTranslatedResponse)

This operation checks if the response includes a decimal number.

#### Parameters {id="parameters_35"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_35"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### isNumber(useTranslatedResponse)

This operation checks if the response includes an integer or decimal number.

#### Parameters {id="parameters_36"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_36"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### isAlphaNumeric(useTranslatedResponse)

This operation checks if the response includes alphabetic and numeric characters.

#### Parameters {id="parameters_37"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_37"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### isInteger(useTranslatedResponse)

This operation checks if the response includes an integer number.

#### Parameters {id="parameters_38"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_38"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### hasLettersOrDigits(useTranslatedResponse)

This operation checks if the response includes letters or numbers.

#### Parameters {id="parameters_39"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_39"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### hasLettersAndDigits(useTranslatedResponse)

This operation checks if the response includes letters and numbers.

#### Parameters {id="parameters_40"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_40"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### matches(useTranslatedResponse, regex)

This operation does a case-sensitive string match to see if the response matches the proved Java regular expression.

#### Parameters {id="parameters_41"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| regex                 | String  | Java regular expression to use for matching.                                                                                                                                                                                                           |

#### Returns {id="returns_41"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### like(useTranslatedResponse, sqlLikePattern)

This operation does a case-sensitive string match to see if the response matches the SQL-like wildcard. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_42"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, %General.Amelia.application% uses the translated response. If false, %General.Amelia.application% uses the user's exact utterance prior to translation. By default, %General.Amelia.application% uses the translated response. |
| sqlLikePattern        | String  | A SQL LIKE pattern to use for matching. For example, "% DOE" will match "John Doe".                                                                                                                                                                    |

#### Returns {id="returns_42"}

|  Type   |            Description            |
|---------|-----------------------------------|
| Boolean | Returns true if there is a match. |

### levenshteinDistance(useTranslatedResponse, text, similarityScoreThreshold)

This operation calculates the Levenshtein Distance between the response and the provided text.

#### Parameters {id="parameters_43"}

|        Parameter         |  Type   |                                                                                                                      Description                                                                                                                       |
|--------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse    | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| text                     | String  | Any text to use for matching.                                                                                                                                                                                                                          |
| similarityScoreThreshold | Double  | A similarity score threshold between 0 and 1.                                                                                                                                                                                                          |

#### Returns {id="returns_43"}

|  Type   |                                     Description                                     |
|---------|-------------------------------------------------------------------------------------|
| Boolean | Returns true if the similarity score is greater or equal to the provided threshold. |

### fuzzy(useTranslatedResponse, text, similarityScoreThreshold)

This operation calculates the fuzzy match between the response and the provided text.

#### Parameters {id="parameters_44"}

|        Parameter         |  Type   |                                                                                                                      Description                                                                                                                       |
|--------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse    | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |
| text                     | String  | Any text to use for matching.                                                                                                                                                                                                                          |
| similarityScoreThreshold | Double  | A similarity score threshold between 0 and 1.                                                                                                                                                                                                          |

#### Returns {id="returns_44"}

|  Type   |                                     Description                                     |
|---------|-------------------------------------------------------------------------------------|
| Boolean | Returns true if the similarity score is greater or equal to the provided threshold. |

### yes(useTranslatedResponse)

This operation checks whether the response is an affirmative answer.

#### Parameters {id="parameters_45"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_45"}

|  Type   |         Description          |
|---------|------------------------------|
| Boolean | Returns true if affirmative. |

### no(useTranslatedResponse)

This operation checks whether the response is a negative answer.

#### Parameters {id="parameters_46"}

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns {id="returns_46"}

|  Type   |        Description        |
|---------|---------------------------|
| Boolean | Returns true if negative. |

### idk(useTranslatedResponse)

This operation checks whether the response is an "I Don't Know" response.

#### Parameters

|       Parameter       |  Type   |                                                                                                                      Description                                                                                                                       |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, Amelia uses the translated response. If false, Amelia uses the user's exact utterance prior to translation. By default, Amelia uses the translated response. |

#### Returns

|  Type   |                        Description                        |
|---------|-----------------------------------------------------------|
| Boolean | Returns true if the response is an "I Don't Know" answer. |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}

