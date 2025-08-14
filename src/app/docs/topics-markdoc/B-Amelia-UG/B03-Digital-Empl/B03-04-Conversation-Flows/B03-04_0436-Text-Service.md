# Text Service

## Introduction

{% include from="B03-04_0436-TextSvc.md" element-id="B03-04_0436-TextSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Text service](#Calling).

* [Use the Text service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `textService` handle appended to the service operation. For example, `textService.searchExact`. Here the service calls the `searchExact` operation. The operation searches for a set of values in a sentence.

##Operations {% #Operatio %}

Use the `textService` handle to call the following operations:

### searchExact(values, sentence, caseSensitive)

This operation searches for a set of values in a sentence.

#### Parameters {id="parameters_1"}

|   Parameter   |  Type   |                    Description                     |
|---------------|---------|----------------------------------------------------|
| values        | String  | Set of values to match sentence tokens against.    |
| sentence      | String  | Sentence with one or more single word tokens.      |
| caseSensitive | Boolean | If set to true, use case sensitivity for matching. |

#### Returns {id="returns_1"}

This operation returns a Map of scores. The scores are organized in value:matching token pairs.

### bestExactMatch(values, sentence, caseSensitive)

This operation finds the closest matching occurrence in the specified search.

#### Parameters {id="parameters_2"}

|   Parameter   |  Type   |                    Description                     |
|---------------|---------|----------------------------------------------------|
| values        | String  | Set of values to match sentence tokens against.    |
| sentence      | String  | Sentence with one or more single word tokens.      |
| caseSensitive | Boolean | If set to true, use case sensitivity for matching. |

#### Returns {id="returns_2"}

This operation returns a Map of scores. The scores are organized in value:matching token pairs.

### searchFuzzy(values, sentence, tokenMatchThreshold)

This operation does a fuzzy search match with a set of strings against a sentence.

#### Parameters {id="parameters_3"}

|      Parameter      |  Type  |                        Description                         |
|---------------------|--------|------------------------------------------------------------|
| values              | String | Set of values to match sentence tokens against.            |
| sentence            | String | Sentence with one or more single word tokens.              |
| tokenMatchThreshold | Double | The token similarity 0 to 1 threshold to use for matching. |

#### Returns {id="returns_3"}

This operation returns a result table in Google Guava format. The format is described in [Google documentation](https://guava.dev/releases/19.0/api/docs/com/google/common/collect/Table.html). The format can be converted to JSON if needed.

### bestFuzzyMatch(values, sentence, tokenMatchThreshold)

This operation finds the closest fuzzy match using a set of strings against a sentence.

#### Parameters

|      Parameter      |  Type  |                        Description                         |
|---------------------|--------|------------------------------------------------------------|
| values              | String | Set of values to match sentence tokens against.            |
| sentence            | String | Sentence with one or more single word tokens.              |
| tokenMatchThreshold | Double | The token similarity 0 to 1 threshold to use for matching. |

#### Returns

This operation returns a result table in Google Guava format. The format is described in [Google documentation](https://guava.dev/releases/19.0/api/docs/com/google/common/collect/Table.html). The format can be converted to JSON if needed.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
