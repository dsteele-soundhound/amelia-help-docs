# Content Management Service

## Introduction

{% include from="B03-04_0423-ContentMgmtSvc.md" element-id="B03-04_0423-ContentMgmtSvc_snippet" /%}

## What You'll Learn

In this topic, you'll learn how to:

* [Call the Content Management service](#Calling).
* [Use the Content Management service](#Methods).
* [Access the cmObjectMetadata Variable](#cmObject).

##Call the Service {% #Calling %}

To call the service, use the cmService handle appended to the service operation. For example, `cmService.findResourceById(cmObjectMetadataId)`. Here the service calls the findResourceById operation. The operation uses the cmObjectMetadataId to retrieve a file.

##Operations {% #Methods %}

Use the `cmService`prefix to call the following operations:

### addFile(bucketName, fileName,fileBytes)

This operation adds a resource file to the content manager. Resources with the same name in the specified bucket will be overwritten. Returns the cmObjectMetadataId of the newly added or updated file.

#### Parameters {id="parameters_1"}

| Parameter  |  Type   |        Description         |
|------------|---------|----------------------------|
| bucketName | String  | Name of the target bucket. |
| fileName   | String  | Name for the file added.   |
| fileBytes  | Integer | File size in bytes.        |

#### Returns {id="returns_1"}

Returns the `cmObjectMetadataId` described below.

### addFileBase64(bucketName, fileName, base64EncodedFile)

This operation adds a resource file as Base64-encoded to the content manager. Resources with the same name in the specified bucket will be overwritten.

#### Parameters {id="parameters_2"}

|     Parameter     |  Type  |                Description                 |
|-------------------|--------|--------------------------------------------|
| bucketName        | String | Name of the target bucket.                 |
| fileName          | String | Name for the file added.                   |
| base64EncodedFile | String | A file encoded as a base64-encoded string. |

#### Returns {id="returns_2"}

This operation returns the `cmObjectMetadataId` described below.

### getResourceUrl(cmObjectMetadataId)

This operation obtains the URL to get direct access to the specified resource.

#### Parameters {id="parameters_3"}

|     Parameter      | Type  |                       Description                        |
|--------------------|-------|----------------------------------------------------------|
| cmObjectMetadataId | Array | The unique metadata ID stored in the cmObjectMetadataId. |

#### Returns {id="returns_3"}

This operation returns a URL pointing to the resource, for example, `/Amelia/view/K6TKAE3PIAIAA-1/1f0be744-9896-11e7-87d8-685b35c6ba87` or`/Amelia/download/K6TKAE3PIAIAA-1/1f0be744-9896-11e7-87d8-685b35c6ba87`.

### getResourceURL(cmObjectMetadataId, contentDisposition)

This operation obtains the URL to get direct access to the specified resource.

#### Parameters {id="parameters_4"}

|     Parameter      |  Type  |                               Description                                |
|--------------------|--------|--------------------------------------------------------------------------|
| cmObjectMetadataId | Array  | The unique metadata ID stored in the cmObjectMetadataId.                 |
| contentDisposition | String | Defines the content disposition type requested by the controller method. |

#### Returns {id="returns_4"}

This operation returns a URL pointing to the resource, for example, /Amelia/view/K6TKAE3PIAIAA-1/1f0be744-9896-11e7-87d8-685b35c6ba87 or /Amelia/download/K6TKAE3PIAIAA-1/1f0be744-9896-11e7-87d8-685b35c6ba87

### findResourceById(cmObjectMetadataId)

This operation finds the multimedia resource by its CM object metadata ID.

#### Parameters {id="parameters_5"}

|     Parameter      | Type  |                       Description                        |
|--------------------|-------|----------------------------------------------------------|
| cmObjectMetadataId | Array | The unique metadata ID stored in the cmObjectMetadataId. |

#### Returns {id="returns_5"}

This operation returns the resource metadata. Or null if the object does not exist.

### getResourceBytes(cmObjectMetadataId)

This operation gets the bytes of the specified multimedia resource.

#### Parameters {id="parameters_6"}

|     Parameter      | Type  |                       Description                        |
|--------------------|-------|----------------------------------------------------------|
| cmObjectMetadataId | Array | The unique metadata ID stored in the cmObjectMetadataId. |

#### Returns {id="returns_6"}

This operation returns a byte array or null if the resource does not exist.

### getResourceBase64(cmObjectMetadataId)

This operation gets the resource as a base64 encoded string.

#### Parameters {id="parameters_7"}

|     Parameter      | Type  |                       Description                        |
|--------------------|-------|----------------------------------------------------------|
| cmObjectMetadataId | Array | The unique metadata ID stored in the cmObjectMetadataId. |

#### Returns {id="returns_7"}

This operation returns a base64-string representation of the resource file bytes. Or null if the resource does not exist.

### getBucketResources(bucketName)

This operation obtains the metadata of all resources associated with a given bucket.

#### Parameters {id="parameters_8"}

| Parameter  |  Type  |                      Description                       |
|------------|--------|--------------------------------------------------------|
| bucketName | String | Name of the bucket whose resources should be obtained. |

#### Returns {id="returns_8"}

Returns a base64-string representation of the resource file bytes. Or null if the resource does not exist.

### getResourceBytes(cmObjectMetadataId, evaluateTemplates)

This operation gets the bytes of the specified multimedia resource. Optionally, evaluates templates like FreeMarker, if present in the resource. This method should not be used with resources that are not text-based.

#### Parameters {id="parameters_9"}

|     Parameter      |  Type   |                                                          Description                                                           |
|--------------------|---------|--------------------------------------------------------------------------------------------------------------------------------|
| cmObjectMetadataId | Array   | The unique metadata ID stored in the cmObjectMetadataId.                                                                       |
| evaluateTemplates  | Boolean | Whether or not to include templates like FreeMarker for evaluation. If true, the operation will attempt to evaluate templates. |

#### Returns {id="returns_9"}

This operation returns a byte array or null if the resource does not exist.

### getResourceBase64(cmObjectMetadataId, evaluateTemplates)

This operation gets the resource as a base64 encoded string. Optionally, evaluates templates like FreeMarker, if present in the resource. This method should not be used with resources that are not text-based.

#### Parameters {id="parameters_10"}

|     Parameter      |  Type   |                                                          Description                                                           |
|--------------------|---------|--------------------------------------------------------------------------------------------------------------------------------|
| cmObjectMetadataId | Array   | The unique metadata ID stored in the cmObjectMetadataId.                                                                       |
| evaluateTemplates  | Boolean | Whether or not to include templates like FreeMarker for evaluation. If true, the operation will attempt to evaluate templates. |

#### Returns {id="returns_10"}

This operation returns a base64-string representation of the resource file bytes, or null if the resource does not exist.

### getConversationResources()

This operation obtains all resources that are scoped to the current conversation.

#### Parameters {id="parameters_11"}

This operation has no parameters.

#### Returns {id="returns_11"}

This operation returns a list of resources.

### getBucketResource(bucketName, resourceName)

This operation obtains the metadata of all resources associated with a given bucket.

#### Parameters {id="parameters_12"}

|  Parameter   |  Type  |                      Description                       |
|--------------|--------|--------------------------------------------------------|
| bucketName   | String | Name of the bucket whose resources should be obtained. |
| resourceName | String | Name of a resource                                     |

#### Returns

This operation returns the resource metadata or null if the object does not exist.


##CmObjectMetadataDto Properties {% #cmObject %}

`CmObjectMetadataDto` objects store metadata associated with resources in the content manager. It has the same properties as uploaded file metadata in a Request task or Request block.

#### Parameters

| Parameter              | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bucketID               | String | Unique ID for the content bucket.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| bucketName             | String | Unique name of the bucket.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| objectId               | String | Unique ID for the object.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| objectName             | String | Unique name for the object.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| contentType            | String | Content type (aka, mime or media type), e.g., "text/plain" for plain text..                                                                                                                                                                                                                                                                                                                                                                                                    |
| contentLength          | Long   | Length of the content in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| contentDisposition     | String | Resource content disposition. Possible values are: <ul><li><strong>NO_PREVIEW</strong>: Preview shouldn't be made available by the UI for this resource.</li> <li><strong>INLINE_ONLY</strong>: Resource will only be available for inline preview.</li> <li><strong>INLINE_AND_POPUP</strong>: Resource will be available for inline preview and popup preview, inline first.</li> <li><strong>ATTACHMENT</strong>: Resource will only be available for attachment.</li></ul> |
| httpContentDisposition | String | Content disposition mappable to RFC 6266. Possible values are: <ul><li><strong>INLINE</strong>: Best possible effort to display the resource inline.</li> <li><strong>ATTACHMENT</strong>: Amelia serves the file for download.</li></ul>                                                                                                                                                                                                                                      |
| contentMd5             | String | Resource MD5 shash.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| scope                  | String | Scope associated with an object, for example, "CONVERSATION" or "SYSTEM".                                                                                                                                                                                                                                                                                                                                                                                                      |
| url                    | String | Direct access URL for the resource.                                                                                                                                                                                                                                                                                                                                                                                                                                            |


## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

