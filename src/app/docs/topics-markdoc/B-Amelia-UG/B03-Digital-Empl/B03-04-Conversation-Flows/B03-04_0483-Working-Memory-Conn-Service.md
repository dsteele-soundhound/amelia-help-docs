# Working Memory Connection Service

## Introduction

{% include from="B03-04_0483-ConServ-WorkingMemSvc.md" element-id="B03-04_0483-ConServ-WorkingMemSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Working Memory connection service](#Calling).
* [Use the Working Memory connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `wm` handle appended to the service operation. For example, `wm:getFact(utterance)`. Here the service calls the `getFact(utterance)` operation. The operation queries the working memory using natural language.

##Operations {% #Operatio %}

Use the `wm:` handle to call the following operation:

### getFact(utterance)

This operation queries the working memory using natural language.

#### Parameters

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| utterance | String | The utterance to use as a query. |

#### Returns

| Type |           Description            |
|------|----------------------------------|
| TBA  | Returns the result of the query. |

#### Example

The user adds a fact to the working memory by saying, "Mel has a car." This expression used in the connection between two task or block edges returns the word, "car."
```JavaScript
wm:getFact('What does Mel have?')
```

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}