

# Gateway Block

## Introduction

{% include from="B03-04_0124-Gateway-Block-Intro.md" element-id="B03-04_0124-Gateway-Block-Intro_snippet" /%}

![B03-04_0124-DEB-Gateway](B03-04_0124-DEB-Gateway.png){width="900" style="block"}

*The Gateway Block Showing the Properties Panel*

## What You'll Learn

In this topic you'll learn how to:

* [Configure a Gateway block](#Propert).
* [Add a block](#Adding).
* [Copy a block](#Copy).
* [Delete a block](#Deleting).
* [Best use of the Gateway block](#Best).

## Property Panel Configuration {% #Propert %}

### Showing the Property Panel

The property panel for a Gateway block displays when you click the block. Or, using the popup to the left of the block, click the Properties ( ![Properties-Btn-DEB_Properties](Properties-Btn-DEB_Properties.png){width="25" style="inline"}) button. The properties panel has a few settings to configure.

### Settings Elements

![B03-04_0124-DEB-Gateway-Properties](B03-04_0124-DEB-Gateway-Properties.png){width="600" style="block"}

*The Properties Panel*

*Properties Panel Elements*


| Element      | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Settings** |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Name         | Gateway   | {% include from="Block-Name.md" element-id="Block-Name_snippet" /%}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Gateway Type | Exclusive | Select the type of gateway. Options include: <ul><li><strong>Exclusive</strong>: The Exclusive type directs the flow along a single path when a specific condition is true. When using this type, only one path applies for a given instance of a process. When a sequence flow evaluates to true, the flow moves along that path without checking any other conditions. Amelia evaluates all outgoing sequence flows in the order that they're defined until one is true. If a condition is not set, it's conceptually treated as 'true' on the sequence flow.</li><li><strong>Inclusive</strong>: The Inclusive type combines the functionality of Exclusive and Parallel type gateways. Like the Exclusive type, you can define conditions on outgoing sequence flows, and the Inclusive type evaluates them. However, like the Parallel type, the Inclusive type can manage more than one sequence flow. Fork behavior has the gateway evaluate all outgoing sequence flow conditions. If the conditions evaluate to true, the flows follow in parallel, creating concurrent executions for each sequence flow. Join behavior has all concurrent executions arriving at the gateway wait until an execution has arrived for each of the incoming sequence flows that have a process token. This is different from the Parallel type, which will wait for all incoming sequence flows before continuing. After the join, the process continues past the Inclusive gateway. If the same Inclusive gateway has multiple incoming and outgoing sequence flows, it can have both fork and join behavior. In this case, the gateway first joins all incoming sequence flows that have a process token. Then the gateway splits into multiple concurrent paths of execution for the outgoing sequence flows with a condition that evaluates to true.</li><li><strong>Parallel</strong>: The Parallel type introduces concurrency into your flow. Concurrency lets a flow fork into multiple execution paths or join from multiple paths. Parallel type gateways can have both fork and join behavior with multiple incoming and outgoing sequence flows. Fork behavior has all outgoing flows run in parallel, creating one concurrent execution for each sequence flow. Join behavior has all concurrent executions wait at the gateway until an execution arrives for each incoming sequence flow. Then the process continues past the Parallel gateway. Parallel gateways don't evaluate conditions. If you define conditions on the sequence flow, they're ignored.</li></ul> |


##Adding a Block {% #Adding %}

To add a Gateway block, you must first identify where the block must appear.

1. In the **Digital Employees builder**, select the block above where the new Gateway block must appear.

2. Click the plus ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. Click the **Gateway** button.

4. On the **top toolba**r, click the **Save** ( ![Save2-Btn-DEB_Toolbar](Save2-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

{id="Copy"}Once you've added the block, click the new block to display its properties panel. Use this properties panel to make any configuration changes.

##Copying a Block {% #Copying %}

{% include from="B03-04_0113-Block-Copy-Paste.md" element-id="B03-04_0113-Block-Copy-Paste_snippet" /%}

##Deleting a Block {% #Deleting %}

{% include from="B03-04_0113-Block-Delete.md" element-id="B03-04_0113-Block-Delete_snippet" /%}

##Best Practices {% #Best %}

* An Exclusive gateway should have only one conditional branch that can be true at any time. It should always have a default branch, except when the gateway performs a simple boolean evaluation.
* Inclusive gateways enable all exit sequence flows to execute if their conditions are met. Since this can split the execution, it's necessary to join the different branches of the Inclusive gateways back together with another Inclusive gateway. Including the joining inclusive gateway helps to avoid errors.
* Parallel gateways split the execution into multiple branches, which then execute simultaneously. Before completing the execution, and to avoid errors, you must join all branches using another parallel gateway.
* You can use gateways and flows to create a loop, which can help users revisit a question they answered incorrectly. For example, you could create a loop where a user must input their annual income. The normal flow continues if their income falls within a specific range. However, if the amount entered is too small or too large, the flow can't continue. Instead of immediately escalating, the loop gives the user one chance to re-enter their income in case of a mistake. Amelia would escalate if the user still inputs a number outside of the accepted range on the second pass through the loop.


## More Resources

For more information, see:

* [Digital Employees Builder Introduction](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Digital Employees Builder Walkthrough](B03-04_0102-Dig-Empl-Builder-Intro.md)
* [Block Library Introduction](B03-04_0111-Flows-Block-Library.md)

