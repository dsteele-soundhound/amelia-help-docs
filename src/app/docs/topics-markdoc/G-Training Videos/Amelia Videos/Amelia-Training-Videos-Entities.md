# Videos: Entities

## Entities

This section covers the differences in intents and entities as entities are pieces of information that Amelia needs to extract during conversations along with an overview of the best practices for how to recognize entities in the most user-friendly way.

<video src="https://vimeo.com/889351887"/>

## Entity Datum Types

In this video we show how many datum types are built-in out of the box for Amelia’s entities. This can be incredibly useful as these datum types will require less work to implement. It also covers a lot of the different values that we can extract from an entity, such as the value that is normalized in Amelia’s brain or the actual utterance that corresponds to that entity from the end user.

<video src="https://vimeo.com/889351880"/>

## Training Use Case Entities

This walkthrough covers an example of how some entities your company might be interested in extracting might not fall into any of the built-in datum types and if that is the case, how to build a training file and train Amelia to recognize the entity from an end user’s utterance.

<video src="https://vimeo.com/889351854"/>

## Custom Datum Entity

This section is a walkthrough on how we can use custom datum to have Amelia recognize either a single word or a phrase from any user utterance and map it to the proper entity.

<video src="https://vimeo.com/889351836"/>

## Composite Entity

This section reviews the composite entities, which combine two or more other entities and that is useful for ensuring we are not mapping the incorrect value from an end user’s utterance. Avoiding false positives for entities such as integers, when a user might say several different numbers in their initial utterance, requires us to create a composite entity that gives context to ensure we are grabbing the correct information.

<video src="https://vimeo.com/889351803"/>

## Role Entity

This video covers the importance of role entities, where we are using more than one entity of the same datum type within a single conversational flow. The use case for this example is if you have a start and an end date for a conversational flow, both will have the same datum type of “DATE” meaning that we need to train Amelia to recognize which is the start date and which is the end date.

<video src="https://vimeo.com/889351821"/>

## Spanless Entity

This tutorial shows a use case of the spanless entity, where the entity cannot easily be extracted from a well-defined span within an utterance but rather from Amelia recognizing the intent of the overall utterance itself.

<video src="https://vimeo.com/889351792"/>

## More Resources

{% include from="Training-Access-Amelia-Videos.md" element-id="F01-01_0002-Training-Access-Amelia-Videos_snippet" /%}
