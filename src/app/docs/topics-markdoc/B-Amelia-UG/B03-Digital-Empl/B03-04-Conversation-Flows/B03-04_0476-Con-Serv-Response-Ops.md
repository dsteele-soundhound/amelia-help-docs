# Response Connection Service

{% include from="Page-Under-Editorial-Review-Note.md" element-id="Page-Under-Editorial-Review-Note_snippet" /%}

## Introduction

{% include from="B03-04_0476-ConServ-ResponseSvc.md" element-id="B03-04_0476-ConServ-ResponseSvc_snippet" /%}

> **Note:** Translated user responses are used in Amelia 6.4.0+ instances. To use untranslated user responses, Response connection service operations must explicitly pass a `false` parameter to the operation.  
> For example, update operations like `response:idk(false`), `response:contains(false,text)`, `response:equal(false,text)`, and `response:startsWith(false,text)`. Passing false as a value will use the untranslated user response.

## What You'll Learn

In this topic you'll learn how to:

* [Call the Response connection service](#Calling).
* [Use the Response comparison operations](#Operatio).
* [Use the Response pattern matching operations](#Pattern).

##Calling the service {% #Calling %}

To call the service, use the `response` handle appended to the service operation. For example, `response:contains(text)`. Here the service calls the `contains` operation. The operation uses this connection to do a case sensitive match of the response with the text parameter.

##Comparison Operations {% #Operatio %}

Use the `response` handle to call any of these service operations:

### equal(object)

This operation matches the object in context against another object. For example, a user response with a string, or the current entity against normalized entity values or datums. This method also is implemented by several different subclasses. It may behave differently depending on the context.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| object    | Object | Any data used for matching. |

#### Returns {id="returns_1"}

This operation returns true if there is a match.

### contains(text)

This operation does a case-sensitive string match of the response with the text value.

#### Parameters {id="parameters_2"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| text      | String | Any text used for matching. |

#### Returns {id="returns_2"}

This operation returns true if there is a match.

### containsAny(texts)

This operation does a case-sensitive and exact string match of the response with any of the texts listed.

#### Parameters {id="parameters_3"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| texts     | String | Any texts used for matching. |

#### Returns {id="returns_3"}

This operation returns true if at least one of the elements of the array matches the user utterance.

### containsNone(texts)

This operation does a case-sensitive and exact string match of the response with any of the texts listed.

#### Parameters {id="parameters_4"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| texts     | String | Any texts used for matching. |

#### Returns {id="returns_4"}

This operation returns true if none of the elements of the array matches the user utterance.

### startsWith(text)

This operation does a case-sensitive string match to see if the response starts with the provided text.

#### Parameters {id="parameters_5"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| text      | String | Any text used for matching. |

#### Returns {id="returns_5"}

This operation returns true if there is a match.

### endsWith(text)

This operation does a case-sensitive string match to see if the response ends with the provided text.

#### Parameters {id="parameters_6"}

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| text      | String | Any text used for matching. |

#### Returns {id="returns_6"}

This operation returns true if there is a match.

### in(texts)

This operation does a case-sensitive string match to see if the response matches one of the provided texts.

#### Parameters {id="parameters_7"}

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| texts     | String | Any texts used for matching. |

#### Returns {id="returns_7"}

This operation returns true if there is a match.

### hasLetters()

This operation does a case-sensitive string match to see if the response contains one or more letters.

#### Parameters {id="parameters_8"}

There are no parameters for this operation.

#### Returns {id="returns_8"}

This operation returns true if there is a match.

### hasDigits()

This operation does a case-sensitive string match to see if the response contains one or more digits.

#### Parameters {id="parameters_9"}

There are no parameters for this operation.

#### Returns {id="returns_9"}

This operation returns true if there is a match.

### hasSpace()

This operation does a case-sensitive string match to see if the response contains one or more spaces.

#### Parameters {id="parameters_10"}

There are no parameters for this operation.

#### Returns {id="returns_10"}

This operation returns true if there is a match.

### isDecimal()

This operation does a case-sensitive string match to see if the response is a decimal number.

#### Parameters {id="parameters_11"}

There are no parameters for this operation.

#### Returns {id="returns_11"}

This operation returns true if there is a match.

### isNumber()

This operation does a case-sensitive string match to see if the response is an integer or decimal number.

#### Parameters {id="parameters_12"}

There are no parameters for this operation.

#### Returns {id="returns_12"}

This operation returns true if there is a match.

### isAlphaNumeric()

This operation does a case-sensitive string match to see if the response includes alphabetic and numeric characters.

#### Parameters {id="parameters_13"}

There are no parameters for this operation.

#### Returns {id="returns_13"}

This operation returns true if there is a match.

### isInteger()

This operation does a case-sensitive string match to see if the response is an integer number.

#### Parameters {id="parameters_14"}

There are no parameters for this operation.

#### Returns {id="returns_14"}

This operation returns true if there is a match.

### hasLettersOrDigits()

This operation does a case-sensitive string match to see if the response includes letters or digits.

#### Parameters {id="parameters_15"}

There are no parameters for this operation.

#### Returns {id="returns_15"}

This operation returns true if there is a match.

### hasLettersAndDigits()

This operation does a case-sensitive string match to see if the response includes letters and digits.

#### Parameters {id="parameters_16"}

There are no parameters for this operation.

#### Returns {id="returns_16"}

This operation returns true if there is a match.

### matches(regex)

This operation does a case-sensitive string match to see if the response matches the proved Java regular expression.

#### Parameters {id="parameters_17"}

| Parameter |  Type  |                 Description                  |
|-----------|--------|----------------------------------------------|
| regex     | String | Java regular expression to use for matching. |

#### Returns {id="returns_17"}

This operation returns true if there is a match.

### like(sqlLikePattern)

This operation does a case-sensitive string match to see if the response matches the SQL LIKE wildcard matching. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_18"}

|   Parameter    |  Type  |                                     Description                                     |
|----------------|--------|-------------------------------------------------------------------------------------|
| sqlLikePattern | String | A SQL LIKE pattern to use for matching. For example, "% DOE" will match "John Doe". |

#### Returns {id="returns_18"}

This operation returns true if there is a match.

### levenshteinDistance(text, similarityScoreThreshold)

This operation calculates the Levenshtein Distance between the response and the provided text.

#### Parameters {id="parameters_19"}

|        Parameter         |  Type  |                  Description                  |
|--------------------------|--------|-----------------------------------------------|
| text                     | String | Any text to use for matching.                 |
| similarityScoreThreshold | Double | A similarity score threshold between 0 and 1. |

#### Returns {id="returns_19"}

This operation returns true if the similarity score is greater or equal to the provided threshold.

### fuzzy(text, similarityScoreThreshold)

This operation calculates the fuzzy match between the response and the provided text.

#### Parameters {id="parameters_20"}

|        Parameter         |  Type  |                  Description                  |
|--------------------------|--------|-----------------------------------------------|
| text                     | String | Any text to use for matching.                 |
| similarityScoreThreshold | Double | A similarity score threshold between 0 and 1. |

#### Returns {id="returns_20"}

This operation returns true if the similarity score is greater or equal to the provided threshold.

### value()

This operation obtains the response.

#### Parameters {id="parameters_21"}

There are no parameters for this operation.

#### Returns {id="returns_21"}

This operation returns the value of the current response, if available. Or null if otherwise.

### yes()

This operation determines whether the response is an affirmative answer.

#### Parameters {id="parameters_22"}

There are no parameters for this operation.

#### Returns {id="returns_22"}

This operation returns true if affirmative.

### no()

This operation determines whether the response is a negative answer.

#### Parameters {id="parameters_23"}

There are no parameters for this operation.

#### Returns {id="returns_23"}

This operation returns true if negative.

### idk()

This operation determines whether the response is an I Don't Know answer.

#### Parameters {id="parameters_24"}

There are no parameters for this operation.

#### Returns {id="returns_24"}

This operation returns true if the response is an I Don't Know answer.

##Pattern Matching Operations {% #Pattern %}

These operations use pattern matching to evaluate user responses in a conversation flow.

### equal(useTranslatedResponse, object)

This operation matches the object in context against another object. For example, the user response with a string, or the current entity against normalized slot values and datums. This method is implemented by several different subclasses. It may behave differently depending on the context.

#### Parameters {id="parameters_25"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| object                | Object  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_25"}

This operation returns true if there is a match.

### contains(useTranslatedResponse, text)

This operation does a case-sensitive string match to see if the response contains the text.

#### Parameters {id="parameters_26"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| text                  | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_26"}

This operation returns true if there is a match.

### containsAny(useTranslatedResponse, texts)

This operation does a case-sensitive exact string match to see if the response contains the texts.

#### Parameters {id="parameters_27"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| texts                 | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_27"}

This operation returns true if at least one of the elements of the array matches the user response.

### containsNone(useTranslatedResponse, texts)

This operation does a case-sensitive exact string match to see if the response contains the texts.

#### Parameters {id="parameters_28"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| texts                 | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_28"}

This operation returns true if none of the elements of the array matches the user response.

### startsWith(useTranslatedResponse, text)

This operation does a case-sensitive string match to see if the response starts with the text value provided.

#### Parameters {id="parameters_29"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| text                  | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_29"}

This operation returns true if there is a match.

### endsWith(useTranslatedResponse, text)

This operation does a case-sensitive string match to see if the response ends with the text value provided.

#### Parameters {id="parameters_30"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| text                  | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_30"}

This operation returns true if there is a match.

### in(useTranslatedResponse, texts)

This operation does a case-sensitive exact string match to see if the response contains one of the texts.

#### Parameters {id="parameters_31"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| texts                 | String  | Any data used for matching.                                                                                                                                                           |

#### Returns {id="returns_31"}

This operation returns true if none of the elements of the array matches the user response.

### hasLetters(useTranslatedResponse)

This operation determines if the response includes one or more letters.

#### Parameters {id="parameters_32"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_32"}

This operation returns true if there is a match.

### hasDigits(useTranslatedResponse)

This operation determines if the response includes one or more digits.

#### Parameters {id="parameters_33"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_33"}

This operation returns true if there is a match.

### hasSpace(useTranslatedResponse)

This operation determines if the response includes one or more spaces.

#### Parameters {id="parameters_34"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_34"}

This operation returns true if there is a match.

### isDecimal(useTranslatedResponse)

This operation determines if the response includes a decimal number.

#### Parameters {id="parameters_35"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_35"}

This operation returns true if there is a match.

### isNumber(useTranslatedResponse)

This operation determines if the response includes an integer or decimal number.

#### Parameters {id="parameters_36"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_36"}

This operation returns true if there is a match.

### isAlphaNumeric(useTranslatedResponse)

This operation determines if the response includes alphabetic and numeric characters.

#### Parameters {id="parameters_37"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_37"}

This operation returns true if there is a match.

### isInteger(useTranslatedResponse)

This operation determines if the response includes an integer number.

#### Parameters {id="parameters_38"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_38"}

This operation returns true if there is a match.

### hasLettersOrDigits(useTranslatedResponse)

This operation determines if the response includes letters or digits.

#### Parameters {id="parameters_39"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_39"}

This operation returns true if there is a match.

### hasLettersAndDigits(useTranslatedResponse)

This operation determines if the response includes letters and digits.

#### Parameters {id="parameters_40"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_40"}

This operation returns true if there is a match.

### matches(useTranslatedResponse, regex)

This operation does a case-sensitive string match to see if the response matches the proved Java regular expression.

#### Parameters {id="parameters_41"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| regex                 | String  | Java regular expression to use for matching.                                                                                                                                          |

#### Returns {id="returns_41"}

This operation returns true if there is a match.

### like(useTranslatedResponse, sqlLikePattern)

This operation does a case-sensitive string match to see if the response matches the SQL LIKE wildcard matching. The wildcard '?' matches a single character, and '%' matches multiple characters.

#### Parameters {id="parameters_42"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| sqlLikePattern        | String  | A SQL LIKE pattern to use for matching. For example, "% DOE" will match "John Doe".                                                                                                   |

#### Returns {id="returns_42"}

This operation returns true if there is a match.

### levenshteinDistance(useTranslatedResponse, text, similarityScoreThreshold)

This operation calculates the Levenshtein Distance between the response and the provided text.

#### Parameters {id="parameters_43"}

|        Parameter         |  Type   |                                                                                      Description                                                                                      |
|--------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse    | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| text                     | String  | Any text to use for matching.                                                                                                                                                         |
| similarityScoreThreshold | Double  | A similarity score threshold between 0 and 1.                                                                                                                                         |

#### Returns {id="returns_43"}

This operation returns true if the similarity score is greater or equal to the provided threshold.

### fuzzy(useTranslatedResponse, text, similarityScoreThreshold)

This operation calculates the fuzzy match between the response and the provided text.

#### Parameters {id="parameters_44"}

|        Parameter         |  Type   |                                                                                      Description                                                                                      |
|--------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse    | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |
| text                     | String  | Any text to use for matching.                                                                                                                                                         |
| similarityScoreThreshold | Double  | A similarity score threshold between 0 and 1.                                                                                                                                         |

#### Returns {id="returns_44"}

This operation returns true if the similarity score is greater or equal to the provided threshold.

### yes(useTranslatedResponse)

This operation determines whether the response is an affirmative answer.

#### Parameters {id="parameters_45"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_45"}

This operation returns true if affirmative.

### no(useTranslatedResponse)

This operation determines whether the response is a negative answer.

#### Parameters {id="parameters_46"}

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns {id="returns_46"}

This operation returns true if negative.

### idk(useTranslatedResponse)

This operation determines whether the response is an I Don't Know answer.

#### Parameters

|       Parameter       |  Type   |                                                                                      Description                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| useTranslatedResponse | Boolean | True or false. If true, will use the translated response. If false, will use the user's exact utterance prior to translation. The default behavior is to use the translated response. |

#### Returns

This operation returns true if the response is an I Don't Know answer.

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}
