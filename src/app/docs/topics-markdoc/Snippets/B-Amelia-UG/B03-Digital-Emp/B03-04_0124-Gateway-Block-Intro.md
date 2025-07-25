# B03-04_0124-Gateway-Block-Intro

{is-library="true"}

<snippet id="B03-04_0124-Gateway-Block-Intro_snippet">



Gateway blocks signal that a decision must be made or that a conversation flow must be split or merged. The flow is routed based upon different factors, for example, user utterances, Amelia's cognitive understanding, or the nature of the gateways. For example, if your conversation flow requests 2 forms of identification from a user and one of these forms requires the user to be older than 18 years of age, you could ask for the first form of identification to be submitted. Then, you can ask whether the user is 18 years or older. In this case, you'll use a gateway to handle the decision loop.

Amelia supports 3 gateway types, namely Exclusive, Parallel and Inclusive.

Exclusive gateways allow only one possible flow from a gateway. Inclusive gateways allow all exit flow sequences if their conditions are met, and Parallel gateways fork the flow into multiple parallel processes executed simultaneously.

Using the Gateway block is as easy as selecting the block from the blocks popup, adding it to a flow, and choosing a gateway type.


</snippet>