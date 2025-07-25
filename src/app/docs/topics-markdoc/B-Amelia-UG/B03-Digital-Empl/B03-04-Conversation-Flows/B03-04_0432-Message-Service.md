# Message Service

## Introduction

{% include from="B03-04_0432-MsgServiceIntro.md" element-id="B03-04_0432-MsgServiceIntro_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* Call the Message Service

## Calling the service

To call the service, use the `messageService` handle appended to the service operation. For example, `messageService.sendIntegrationMessage(payload.toJsonString())`. Here the service calls the `sendIntegrationMessage` operation. The operation sends a payload message converted to JSON string format.

## Operations

Use the `messageService` handle to call any of these service operations:

### sendIntegrationMessage

This operation sends a payload as an integration message. The only parameter is the variable name of the integration message payload to send. To convert to JSON format, append the Groovy `.toJsonString()` operation to the variable name.

#### Parameters

| Parameter |  Type  |                      Description                      |
|-----------|--------|-------------------------------------------------------|
| payload   | String | The variable name of the integration message to send. |

#### Returns

This operation does not return a response.

#### Example

```JavaScript
def buildIntegrationMessage() {
    return sectionBuilder.create()
      .title("Address #1")
      .name("address_1")
      .addSubSection()
        .title("Mailing Address")
        .name("mailingAddress")
        .newSectionField()
          .name("line1")
          .value("40 Wall Street")
          .label("Street")
          .backToSection()
      .backToParentSection()
      .build() 
}
 
def payload = buildIntegrationMessage()
messageService.sendIntegrationMessage(payload.toJsonString())
```

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}
