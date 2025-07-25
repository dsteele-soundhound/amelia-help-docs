# FAQ Service

## Introduction

{% include from="B03-04_0443-FAQSvc.md" element-id="B03-04_0443-FAQSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the FAQ service](#Calling).

* [Use the FAQ service](#Operations).

* [Data Structures for the FAQ Service](#DataStructures).

##Call the Service {% #Calling %}

To call the service, use the `faqService` handle appended to the service operation. For example, `faqService.responder`. Here the service calls the `responder` operation. The operation retrieves the name of the FAQ responder that responded.

##Operations {% #Operations %}

Use the `faqService` handle to call any of the following operations:

### predict(query)

This operation gets the FAQ prediction corresponding to the given query. This prediction is usually framed as a question.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |                                          Description                                           |
|-----------|--------|------------------------------------------------------------------------------------------------|
| query     | String | The user query to generate an FAQ prediction. Is not nullable. Typically framed as a question. |

#### Returns {id="returns_1"}

|          Type          |                                          Description                                           |
|------------------------|------------------------------------------------------------------------------------------------|
| FaqPredictionResultDto | Returns the FAQ Prediction Results object. The object contains the response to the user query. |

### responded()

This operation checks if a responder from the FAQ subsystem has responded. It also checks if there's an intent set up to start this process on receiving the response.

#### Parameters {id="parameters_2"}

There are no parameters for this operation.

#### Returns {id="returns_2"}

|  Type   |      Description      |
|---------|-----------------------|
| Boolean | Returns true or null. |

### responder()

This operation gets the name of the FAQ responder that responded. For example, DocumentFaq, QaPairsFaq, or other responder.

#### Parameters {id="parameters_3"}

There are no parameters for this operation.

#### Returns {id="returns_3"}

|  Type  |                          Description                          |
|--------|---------------------------------------------------------------|
| String | Returns the responder name when available. Or null otherwise. |

### responseType()

This operation checks the type of response. The response is an utterance (RESPONSE) or from a response pool (RESPONSE_POOL).

#### Parameters {id="parameters_4"}

There are no parameters for this operation.

#### Returns {id="returns_4"}

|  Type  |                  Description                  |
|--------|-----------------------------------------------|
| String | Returns the response type. Or null otherwise. |

### utterance()

This operation returns the best utterance from the responding FAQ subsystem. The response happens before the On FAQ Response setting triggers.

#### Parameters {id="parameters_5"}

There are no parameters for this operation.

#### Returns {id="returns_5"}

|  Type  |                Description                |
|--------|-------------------------------------------|
| String | Returns the utterance. Or null otherwise. |

### deferredResponse()

This operation checks if the FAQ system suppressed its response. It's possible another process can check what's in a response. This lets the process decide if the response is acceptable before Amelia utters it.

#### Parameters {id="parameters_6"}

There are no parameters for this operation.

#### Returns {id="returns_6"}

|  Type   |                                                      Description                                                      |
|---------|-----------------------------------------------------------------------------------------------------------------------|
| Boolean | Returns true if one of the FAQ subsystems responded and the On FAQ Response setting is configured to defer responses. |

### responseMetadata()

This operation returns the full FAQ response metadata.

#### Parameters {id="parameters_7"}

There are no parameters for this operation.

#### Returns {id="returns_7"}

|        Type         |                        Description                         |
|---------------------|------------------------------------------------------------|
| FaqResponseMetadata | Returns the full FAQ response metadata. Or null otherwise. |


### winningFaqResponseMetadata()

This method exposes the FAQ response metadata that is obtained when the "On FAQ Response" conversation event (configured at the domain level) triggers. It will contain the response metadata of the winning FAQ subsystem responder. This method returns &lt;code&gt;null&lt;/code&gt; when FAQ responds but doesn't win.

#### Parameters {id="parameters_8"}

There are no parameters for this operation.

#### Returns {id="returns_8"}

| Type                | Description                                                                                               |
|---------------------|-----------------------------------------------------------------------------------------------------------|
| FaqResponseMetadata | An {@link FaqResponseMetadata} when one of the FAQ subsystem responder wins, <code>null</code> otherwise. |

### responseMetadataByResponder()

Obtains the response metadata associated with each of the FAQ subsystem responders which responded. This should only be used when Phased Execution is enabled at the domain level.

#### Parameters {id="parameters_9"}

There are no parameters for this operation.

#### Returns {id="returns_9"}

| Type                                                         | Description                                                                       |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Map&lt;SubsystemResponderType, SubsystemResponseMetadata&gt; | Map of {@link SubsystemResponseMetadata} keyed by {@link SubsystemResponderType}. |

### responseMetadata(faqSubsystemResponderType)

Obtains the response metadata associated with the specified FAQ subsystem responder, regardless of whether it won or not.

#### Parameters {id="parameters_10"}

| Parameter                 | Type                      | Description                       |
|---------------------------|---------------------------|-----------------------------------|
| faqSubsystemResponderType | SubsystemResponseMetadata | The FAQ subsystem responder type. |

#### Returns {id="returns_10"}

| Type                      | Description                                                                       |
|---------------------------|-----------------------------------------------------------------------------------|
| SubsystemResponseMetadata | The FAQ response metadata, if available; &lt;code&gt;null&lt;/code&gt; otherwise. |

### documentFaqResponseMetadata()

Obtains the FAQ response metadata associated with the {@link SubsystemResponderType#DOCUMENT_FAQ} subsystem responder, regardless of whether it won or not.

#### Parameters {id="parameters_11"}

There are no parameters for this operation.

#### Returns {id="returns_11"}

| Type                      | Description                                                                       |
|---------------------------|-----------------------------------------------------------------------------------|
| SubsystemResponseMetadata | The FAQ response metadata, if available; &lt;code&gt;null&lt;/code&gt; otherwise. |

### qaPairsResponseMetadata()

Obtains the FAQ response metadata associated with the {@link SubsystemResponderType#QA_PAIRS_FAQ} subsystem responder, regardless of whether it won or not.

#### Parameters {id="parameters_12"}

There are no parameters for this operation.

#### Returns {id="returns_12"}

| Type                      | Description                                                                       |
|---------------------------|-----------------------------------------------------------------------------------|
| SubsystemResponseMetadata | The FAQ response metadata, if available; &lt;code&gt;null&lt;/code&gt; otherwise. |

##Data Structures {% #DataStructures %}

This section describes the data types utilized by the FAQ Service. This includes the FAQ prediction result instance and subsystem response metadata.

### FAQ Prediction Results Instance (since 6.0.8)

Internally represented by the class FaqPredictionResultDto. This class represents the Data Transfer Object (DTO) for FAQ prediction results.

It contains lists of FAQ prediction results for document-level FAQs (documentFaq) and question-answer pairs (qaPairs).

Objects of this class are typically returned by the subsystem-responder-agnostic predict() methods of faqService.

The FaqPredictionResultDto Prediction Results object includes two accessors.

| Accessor      | Data Type                            | Description                                                                       |
|---------------|--------------------------------------|-----------------------------------------------------------------------------------|
| documentFaq() | List&lt;FaqPredictionResultModel&gt; | Represents the FAQ prediction results at the document level. Is not nullable.     |
| qaPairs()     | List&lt;FaqPredictionResultModel&gt; | Represents the FAQ prediction results for question-answer pairs. Is not nullable. |


### Subsystem Response Metadata (since 6.5.2, 6.5.2, 6.8.1, 6.9.0)

The interface SubsystemResponseMetadata is a high-level representation of a subsystem response. It includes a number of accessors.

| Accessor              | Data Type                             | Description                                                                                                                                                                                                                                                                                                                                                  |
|-----------------------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id()                  | UUID                                  | The FAQ Answer identifier. Is nullable.                                                                                                                                                                                                                                                                                                                      |
| documentId()          | UUID                                  | The response document identifier. Is nullable.                                                                                                                                                                                                                                                                                                               |
| documentName()        | String                                | The response document name. Is nullable.                                                                                                                                                                                                                                                                                                                     |
| documentTitle()       | String                                | The response document title. Is nullable.                                                                                                                                                                                                                                                                                                                    |
| utterance()           | String                                | The FAQ response utterance. Not nullable.                                                                                                                                                                                                                                                                                                                    |
| responsePool()        | ResponsePoolIdentifier                | The FAQ response pool identifier for the response. Is nullable.                                                                                                                                                                                                                                                                                              |
| responsePoolContext() | Map&lt;String, String>                | The FAQ response pool context for a response. Is nullable.                                                                                                                                                                                                                                                                                                   |
| responseType()        | String                                | The FAQ response type. Options are RESPONSE, ECHO, POOL, and NONE.                                                                                                                                                                                                                                                                                           |
| results()             | List&lt;FaqPredictionResultsModel&gt; | All matching responses. Not nullable.                                                                                                                                                                                                                                                                                                                        |
| bestResult()          | SemnetFaqDetail                       | Details about the selected FAQ response. Is nullable.                                                                                                                                                                                                                                                                                                        |
| responder()           | String                                | The name of the responding FAQ subsystem responder. Options are DocumentFaq or QaPairsFaq.                                                                                                                                                                                                                                                                   |
| responseWasDeferred() | Boolean                               | Whether the responding FAQ responder suppressed its own response. This allows the BPNs(Business Process Network) orDigital Employees builderconversation flow to handle the response completely. Configure this feature with the On FAQ Response setting in the Administration Domain workspace. Not nullable. |
| clarifyingQuestion()  | Boolean                               | Whether the FAQ responded with a clarifying question.                                                                                                                                                                                                                                                                                                        |
| sources()             | List&lt;FaqDocumentSource&gt;         | All sources used to generate the FAQ response, scored by relevance. Is nullable.                                                                                                                                                                                                                                                                             |
[Accessors for the FAQ Prediction Results Object]

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}