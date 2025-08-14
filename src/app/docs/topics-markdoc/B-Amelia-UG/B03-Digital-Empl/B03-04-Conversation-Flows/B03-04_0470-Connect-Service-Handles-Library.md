# Connection Services Handles Library

## Introduction

Turns in conversations with Amelia can happen for many reasons. For example, a user answer can lead a conversation in one direction. Or retrieved data can drive a conversation in another direction. To manage turns, you can use services to configure connections in a conversation flow.

Connections in a conversation flow have many possible services available. Each service has a unique handle or prefix appended to the name of a method or operation. The connection directs the conversation flow based on the appropriate context and criteria. And connections connect the edge of one block or task to another block or task edge.

> This topic describes services used by connections between blocks and tasks. The [Script Services topic](B03-04_0421-Service-Handles-Library.md) covers services used by Script blocks and tasks.

### Connection Service Handles

For example, let's say you want to confirm a user response is an integer. A connection could use the Response service with the `response` handle. Then call the `isNumber` operation to test if their response includes a number. The syntax would be `response:isNumber()`.

### The Connection Expression Field

To add code to a connection between blocks and tasks, click the connection. The Properties panel displays. Then type service operation or methods into the Expression field. See [the Add an Edge to a Block topic](B03-04_0145-HT-Add-an-Edge-Con-to-a-Block.md) for details about connection property panels.

In this example, the connection between two block edges depends on the size pizza the user wants to order. If the user says large, then the conversation flows through this connection. The Expression field evaluates the user response stored in the pizza_size entity. The `entity.pizza_size` operation uses the `entity` service handle. The `pizza_size` entity name is appended to the service handle.

![B03-04_0470-connection-example](B03-04_0470-connection-example.png){width="900" style="block"}
*Figure 1. Connection Expression Field Example*

## What You'll Learn

In this topic you'll get a brief introduction to:

* [Operators](#Operator).
* [The BPN Operations](#BPN).
* [The Channel Operations](#Channel).
* [The Context Service Operations](#Context).
* [The Dialog Act Operations](#Dialog).
* [The Entity Operations](#Entity).
* [The Math Operations](#Math).
* [The Response Operations](#Response).
* [The Response Pool Operations](#Response2).
* [The Quantity Operations](#Quantity).
* [The Service Operations](#Service).
* [The Tabular Data Operations](#Tabular).
* [The Upload Operations](#Upload).
* [The Utility Operations](#Utility).
* [The Upload Operations](#Upload).
* [The Voice Operations](#Voice).
* [The Working Memory Operations](#Working).

##Operators {% #Operator %}

To learn more, see the full Operators topic.

##BPN Operations {% #BPN %}

{% include from="B03-04_0471-ConServ-BPN.md" element-id="B03-04_0471-ConServ-BPN_snippet" /%}

Service Handle: bpn

To learn more, see the [full BPN Operations topic](B03-04_0471-BPN-Conn-Service.md).

##Channel Operations {% #Channel %}

{% include from="B03-04_0472-ConServ-Channel.md" element-id="B03-04_0472-ConServ-Channel_snippet" /%}

Service Handle: channel

To learn more, see the [full Channel Operations topic](B03-04_0472-Channel-Conn-Service.md).

##Context Service Operations {% #Context %}

See [Context Service operations](B03-04_0424-Context-Service.md).

##Dialog Act Operations {% #Dialog %}

{% include from="B03-04_0473-ConServ-DialogAct.md" element-id="B03-04_0473-ConServ-DialogAct_snippet" /%}

Service Handle: da

To learn more, see the [full Dialog Act Operations topic](B03-04_0473-Dialog-Act-Conn-Service.md).

##Entity Operations {% #Entity %}

{% include from="B03-04_0474-ConServ-Entity.md" element-id="B03-04_0474-ConServ-Entity_snippet" /%}

Service Handle: entity

To learn more, see the [full Entity Operations topic](B03-04_0474-Entity-Conn-Service.md).

##Math Operations {% #Math %}

{% include from="B03-04_0474-ConServ-Math.md" element-id="B03-04_0474-ConServ-Math_snippet" /%}

Service Handle: math

To learn more, see the [full Math Operations topic](B03-04_0475-Math-Conn-Service.md).

##Quantity Operations {% #Quantity %}

{% include from="B03-04_0478-Quantity-Conn-Svc.md" element-id="B03-04_0478-Quantity-Conn-Svc_snippet" /%}

Service Handle: qty

To learn more, see the [full Quantity Operations topic](B03-04_0478-Quantity-Conn-Service.md).

##Response Operations {% #Response %}

{% include from="B03-04_0476-ConServ-ResponseSvc.md" element-id="B03-04_0476-ConServ-ResponseSvc_snippet" /%}

Service Handle: response

To learn more, see the [full Response Operations topic](B03-04_0476-Response-Conn-Service.md).

##Response Pool Operations {% #Response2 %}

{% include from="B03-04_0477-ConServ-ResponsePoolSvc.md" element-id="B03-04_0477-ConServ-ResponsePoolSvc_snippet" /%}

Service Handle: rp

To learn more, see the [full Response Pool Operations topic](B03-04_0477-Response-Pool-Conn-Service.md).

##Service Operations {% #Service %}

{% include from="B03-04_0479-ConServ-ServiceSvc.md" element-id="B03-04_0479-ConServ-ServiceSvc_snippet" /%}

Service Handle: sr

To learn more, see the full Service Operations topic.

##Tabular Data Operations {% #Tabular %}

See [Tabular Data operations](B03-04_0435-Tabular-Service.md).

##Upload Operations {% #Upload %}

{% include from="B03-04_0480-ConServ-UploadSvc.md" element-id="B03-04_0480-ConServ-UploadSvc_snippet" /%}

Service Handle: upload

To learn more, see the [full Upload Operations topic](B03-04_0480-Upload-Conn-Service.md).

##Utility Operations {% #Utility %}

{% include from="B03-04_0481-ConServ-UtilitySvc.md" element-id="B03-04_0481-ConServ-UtilitySvc_snippet" /%}

Service Handle: util

To learn more, see the [full Utility Operations topic](B03-04_0481-Utility-Conn-Service.md).

##Voice Operations {% #Voice %}

{% include from="B03-04_0482-ConServ-VoiceSvc.md" element-id="B03-04_0482-ConServ-VoiceSvc_snippet" /%}

Service Handle: voice

To learn more, see the [full Voice Operations topic](B03-04_0482-Voice-Ops-Conn-Service.md).

##Working Memory Operations {% #Working %}

{% include from="B03-04_0483-ConServ-WorkingMemSvc.md" element-id="B03-04_0483-ConServ-WorkingMemSvc_snippet" /%}

Service Handle: wm

To learn more, see the [full Working Memory Operations topic](B03-04_0483-Working-Memory-Conn-Service.md).

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}