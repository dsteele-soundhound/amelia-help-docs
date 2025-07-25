# Segmentation Service

## Introduction

{% include from="B04-01_0007-Source-Segmentation-Intro.md" element-id="B04-01_0007-Source-Segmentation-Intro_snippet" /%}

Amelia Answers now includes the same tagging capability used in response pools. This means you can tag knowledge sources and conversations and define logic to connect them. This knowledge source segmentation is important for personalized responses. For example, you can now tailor answers based on a user's location or their role and expertise. Tags can be set at both the conversation and knowledge source level. Moreover, tags can match exactly, on any tag, or on all tags.

This feature has many advantages. Your users are more likely to interact with a personalized Amelia Answers experience. Creators can build more use cases in an individual domain. Also, Amelia can better support enterprise-grade deployments with requirements for access and provisioning.

To enable this tagging capability, you'll leverage the segmentationService. The segmentationService includes operations for knowledge source tagging profile configuration. Segmentation matching uses the following operators:

* Exact: The set of tags specified in the profile is exactly the same as the tags in the segmentation entry (bijective).

* All: All tags in the profile have a counterpart in the set of tags of the segmentation entry.

* Any: If at least one tag in the profile matches a tag in the segmentation entry.

## What You'll Learn

In this topic, you'll learn how to:

* [Call the Segmentation service](#Calling).

* [Use the Connection service](#Operatio).

##Call the Service {% #Calling %}

To call the service in a Script task or Script block, use the `segmentationService` handle appended to the call service operation. For example, `segmentationService.activateProfile('tag1', 'tag2')`. Here the service calls the `activateProfile` operation to activate two tags named tag1 and tag2.

##Operations {% #Operatio %}

Use the `segmentationService` handle to call the following operations:

### activateProfile

This operation is the entry point for activating a tag profile for the current conversation.

#### Parameters {id="parameters_1"}

| Parameter |  Type  |          Description          |
|-----------|--------|-------------------------------|
| tags      | String | Segmentation entry tag names. |

#### Returns {id="returns_1"}

|            Type            |                                                                                                                                                                                                                                                                                                    Description                                                                                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SegmentationProfileBuilder | The returned instance provides a fluent interface for configuring the profile. The builder exposes the following operations: * lenient(boolean lenient) : SegmentationProfileBuilder: Allows the search for tag entries to pick untagged entries, if no entries result from tag matching. Default value: false. * exactMatch() : void: Selects only entries with tags identical to the set of tags in the profile. * anyMatch() : void: Selects only entries where at least one tag intersects with the tags in the profile. * allMatch() : void: Selects only entries where tags include all tags in the profile. |

#### Examples {id="examples_1"}

This example activates two tags with all matching.
```JavaScript
segmentationService.activateProfile('tag1', 'tag2') .allMatch()
```

This example activates a single tag with all matching and disables lenient search.
```JavaScript
JavaScript segmentationService.activateProfile('tag3') .lenient(true) .allMatch()
 ```

This example activates two tags with exact matching and disables lenient search.
```JavaScript
 segmentationService.activateProfile('tag1', 'tag2') .lenient(true) .exactMatch() 
 ```

### activeProfile

Returns the tag profile associated with the current conversation.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

| Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SegmentationProfile | The segmentation profile associated with the current conversation. Holds the following segmentation profile properties (read-only): <ul><li><strong>tags</strong> : String[]: Tags associated with the profile.</li><li><strong>tagMatchingOperator</strong> : SegmentTagMatchingOperator: Tag matching operator.</li><li><strong>lenient</strong> : boolean:</li></ul> Whether the segment search should let Amelia pick up untagged entries. If no profile is set, Amelia returns the full document (tagged or untagged). If a profile is set and the tag passed with the profile doesn't exist, Amelia returns the following: <ul><li><strong>Lenient (true)</strong>: Sources with zero tags.</li><li><strong>Lenient (false)</strong>: No sources.</li></ul> |

#### Examples

This example gets all active tags.
```JavaScript
def activeProfile = segmentationService.activeProfile() if (null != activeProfile) { // If the response pool profile was activated def tags = activeProfile.tags() } 
```

Or, you can use this example to get all active tags.
```JavaScript
def tags = segmentationService.activeTags() 
```

### clearProfile

Deactivates the tag profile associated with the conversation, if one exists.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

Operation doesn't return a response.

#### Example

This example deactivates all tags.
```JavaScript
responsePoolService.clearProfile() 
```

### getSegmentation {id="getsegmentation_1"}

This operation gets a segmentation evaluated template separated by tag group code and tag code.

#### Parameters {id="parameters_4"}

|    Parameter     |  Type  |     Description     |
|------------------|--------|---------------------|
| groupCode        | String | The tag group code. |
| segmentationCode | String | The tag code.       |

#### Returns {id="returns_4"}

|  Type  |                                   Description                                    |
|--------|----------------------------------------------------------------------------------|
| String | Gets a segmentation evaluated template separated by tag group code and tag code. |

### getSegmentation

This operation gets a segmentation evaluated template separated by tag group code and tag code. The entrySelectionStrategy sets how Amelia picks up the template.

#### Parameters {id="parameters_5"}

| Parameter              | Type   | Description                                                                                                                                                                                                                                                                                                                                                               |
|------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| groupCode              | String | The tag group code.                                                                                                                                                                                                                                                                                                                                                       |
| segmentationCode       | String | The tag code.                                                                                                                                                                                                                                                                                                                                                             |
| entrySelectionStrategy | String | Sets how Amelia picks up the template. Valid values are: <ul><li><strong>UNREPEATABLE_RANDOM</strong>: Pick an entry from random, but do not repeat an entry until all options have been chosen.</li><li><strong>RANDOM</strong>: Select an entry at random without regard for repeats.</li><li><strong>ROUND_ROBIN</strong>: Select entries in sequence order.</li></ul> |

#### Returns {id="returns_5"}

|  Type  |                                   Description                                    |
|--------|----------------------------------------------------------------------------------|
| String | Gets a segmentation evaluated template separated by tag group code and tag code. |

### isTagActive

This operation checks whether the profile contains the tag.

#### Parameters {id="parameters_6"}

| Parameter |  Type  |      Description      |
|-----------|--------|-----------------------|
| tag       | String | The tag for matching. |

#### Returns {id="returns_6"}

|  Type   |      Description       |
|---------|------------------------|
| boolean | Returns true or false. |

### isTagNotActive

This operation checks whether the profile doesn't contain the tag.

#### Parameters {id="parameters_7"}

| Parameter |  Type  |      Description      |
|-----------|--------|-----------------------|
| tag       | String | The tag for matching. |

#### Returns {id="returns_7"}

|  Type   |      Description       |
|---------|------------------------|
| boolean | Returns true or false. |

### areAllTagsActive

This operation checks whether the profile contains all the tags.

#### Parameters {id="parameters_8"}

| Parameter |  Type  |      Description      |
|-----------|--------|-----------------------|
| tag       | String | The tag for matching. |

#### Returns {id="returns_8"}

|  Type   |      Description       |
|---------|------------------------|
| boolean | Returns true or false. |

### isAnyTagActive

This operation checks whether the profile contains any of the tags.

#### Parameters {id="parameters_9"}

| Parameter |  Type  |      Description      |
|-----------|--------|-----------------------|
| tag       | String | The tag for matching. |

#### Returns {id="returns_9"}

|  Type   |      Description       |
|---------|------------------------|
| boolean | Returns true or false. |

### activeTags

This operation returns an array of active profile tags.

#### Parameters

None.

#### Returns

|  Type  |                Description                |
|--------|-------------------------------------------|
| String | Returns the array of active profile tags. |

## More Resources

For more information, see:

* [How-to: Configure Knowledge Source Segmentation](B10-01_0007-HT-Config-KSource-Segmentation.md)
* [Amelia Answers Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md)
* [Amelia Answers Workspace Walkthrough](B10-00_0002-Answer-Agents-Walk.md)
