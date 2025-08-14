# Dialog Act Service

## Introduction

{% include from="B03-04_0427-DialogActSvc.md" element-id="B03-04_0427-DialogActSvc_snippet" /%}

Dialog acts provide a way to describe the purpose of conversation exchanges. In addition to a Thanking dialog act, other examples are Apology, Go Back, and Repeat.

## What You'll Learn

In this topic you'll learn how to:

* [Call the Dialog Act service](#Calling).

* [Use the Dialog Act service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `dialogActService` handle appended to the service operation. For example, `dialogActService.isCancel`. Here the service calls the `isCancel` operation. The operation determines if the user response triggered the Cancel dialog act.

##Operations {% #Operatio %}

Use the `dialogActService` handle to call the following operations:

### isNone()

This operation verifies that the user response does not include any dialog acts.

#### Parameters {id="parameters_1"}

This operation has no parameters.

#### Returns {id="returns_1"}

This operation returns true if detected.

### isAgreement()

This operation determines if the user response has the Agreement dialog act.

#### Parameters {id="parameters_2"}

This operation has no parameters.

#### Returns {id="returns_2"}

This operation returns true if detected.

### isApology()

This operation determines if the user response has the Apology dialog act.

#### Parameters {id="parameters_3"}

This operation has no parameters.

#### Returns {id="returns_3"}

This operation returns true if detected.

### isAutoFeedbackNegative()

This operation determines if the user response has the Auto-feedback Negative dialog act.

#### Parameters {id="parameters_4"}

This operation has no parameters.

#### Returns {id="returns_4"}

This operation returns true if detected.

### isCancel()

This operation determines if the user response has the Cancel dialog act.

#### Parameters {id="parameters_5"}

This operation has no parameters.

#### Returns {id="returns_5"}

This operation returns true if detected.

### isClosing()

This operation determines if the user response has the Closing dialog act.

#### Parameters {id="parameters_6"}

This operation has no parameters.

#### Returns {id="returns_6"}

This operation returns true if detected.

### isCloseConversation()

This operation determines if the user response has the Close Conversation dialog act.

#### Parameters {id="parameters_7"}

This operation has no parameters.

#### Returns {id="returns_7"}

This operation returns true if detected.

### isDisagreement()

This operation determines if the user response has the Disagreement dialog act.

#### Parameters {id="parameters_8"}

This operation has no parameters.

#### Returns {id="returns_8"}

This operation returns true if detected.

### isDownplay()

This operation determines if the user response has the Downplay dialog act.

#### Parameters {id="parameters_9"}

This operation has no parameters.

#### Returns {id="returns_9"}

This operation returns true if detected.

### isGoBack()

This operation determines if the user response has the Go Back dialog act.

#### Parameters {id="parameters_10"}

This operation has no parameters.

#### Returns {id="returns_10"}

This operation returns true if detected.

### isGreeting()

This operation determines if the user response has the Greeting dialog act.

#### Parameters {id="parameters_11"}

This operation has no parameters.

#### Returns {id="returns_11"}

This operation returns true if detected.

### isMisunderstanding()

This operation determines if the user response has the Misunderstanding dialog act.

#### Parameters {id="parameters_12"}

This operation has no parameters.

#### Returns {id="returns_12"}

This operation returns true if detected.

### isPause()

This operation determines if the user response has the Pause dialog act.

#### Parameters {id="parameters_13"}

This operation has no parameters.

#### Returns {id="returns_13"}

This operation returns true if detected.

### isReassignment()

This operation determines if the user response has the Reassignment dialog act.

#### Parameters {id="parameters_14"}

This operation has no parameters.

#### Returns {id="returns_14"}

This operation returns true if detected.

### isRepeat()

This operation determines if the user response has the Repeat dialog act.

#### Parameters {id="parameters_15"}

This operation has no parameters.

#### Returns {id="returns_15"}

This operation returns true if detected.

### isResume()

This operation determines if the user response has the Resume dialog act.

#### Parameters {id="parameters_16"}

This operation has no parameters.

#### Returns {id="returns_16"}

This operation returns true if detected.

### isThanking()

This operation determines if the user response has the Thanking dialog act.

#### Parameters {id="parameters_17"}

This operation has no parameters.

#### Returns {id="returns_17"}

This operation returns true if detected.

### isThankingReply()

This operation determines if the user response has the Thanking Reply dialog act.

#### Parameters {id="parameters_18"}

This operation has no parameters.

#### Returns {id="returns_18"}

This operation returns true if detected.

### isWellWishing()

This operation determines if the user response has the Well-wishing dialog act.

#### Parameters

This operation has no parameters.

#### Returns

This operation returns true if detected.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
