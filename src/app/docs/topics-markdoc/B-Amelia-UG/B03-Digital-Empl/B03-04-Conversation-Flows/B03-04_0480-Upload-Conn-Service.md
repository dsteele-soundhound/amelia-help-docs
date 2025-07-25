# Upload Connection Service

## Introduction

{% include from="B03-04_0480-ConServ-UploadSvc.md" element-id="B03-04_0480-ConServ-UploadSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Upload connection service](#Calling).

* [Use the Upload connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `upload` handle appended to the service operation. For example, `upload:succeeded`. Here the service calls the `succeeded()` operation. The operation checks whether the file(s) uploaded successfully.

##Operations {% #Operatio %}

Use the `upload` handle to call any of the following operations:

### succeeded()

This operation checks whether the file(s) uploaded successfully.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

|  Type   |                            Description                            |
|---------|-------------------------------------------------------------------|
| Boolean | Returns true if file(s) uploaded successfully, or null otherwise. |

### canceled()

This operation checks whether the user canceled the file upload request.

> This only applies when the edge stems from a Request task or block configured to allow upload cancellations. {style="note"}

#### Parameters

This operation has no parameters.

#### Returns

|  Type   |                               Description                                |
|---------|--------------------------------------------------------------------------|
| Boolean | Returns true if the user canceled the upload request, or null otherwise. |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}