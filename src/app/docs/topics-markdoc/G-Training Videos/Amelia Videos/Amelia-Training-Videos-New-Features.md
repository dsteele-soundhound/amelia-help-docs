# Videos: New Features

These videos explore new features in the latest Amelia releases.

## Amelia 6.2 Release

### Amelia Answers

This video explores the features and updates in Amelia Answer version 6.2. It delves into how our LLMs can not only enhance the responses for QA pairs but also increases the ability to respond to utterances related to any source that would fall outside of the QA pairs. It also introduces the automatic refresh feature for websites, which allows customers to not have to reindex their pairs when a website updates, and the enhanced analytics.

<video src="https://vimeo.com/925637591/89b395fa9c"/>

### Amelia Asks a Yes/No Question

In this video, we will explore the Yes/No question block in  Amelia. This feature is commonly used for confirmation questions at the end of conversational flows but can also be used at other points to split the flows, such as asking if they’re aware of certain information and presenting it to them if they aren’t aware. Rather than having to build in these conditions yourself, it now comes included out of the box with useful tools to make branching flows easier.

<video src="https://vimeo.com/925637815"/>

### Intent FAQ

The video covers the hierarchy of the subsystems within Amelia and how, when appropriate, we can create an intent FAQ rather than a traditional FAQ for it to be recognized at the same hierarchical level as intents. An example used in this video is having an intent and a conversational flow for getting guest Wi-Fi access along with FAQs related to the length of Wi-Fi access or who gets Wi-Fi access. In this case we can use the intent FAQ to train Amelia to recognize the difference between a question that we can respond to and someone trying to go through the conversational flow to get Wi-Fi access.

<video src="https://vimeo.com/925638269"/>

### Training Intents with LLMs

In this video, we will explore how Large Language Models (LLMs) are revolutionizing intent training by making the process more efficient in  Amelia. Instead of manually collecting and mapping utterances, LLMs allow us to recognize intents simply based on their name and description. Techniques like few-shot, providing a small number of utterances along with the name and description, and no-shot learning, with just the name and description, are demonstrated.

<video src="https://vimeo.com/925638359"/>

### Amelia As HR Specialist Demo Part 1

The video introduces the concept of using Amelia as a digital HR specialist. It delves into the process of onboarding a new employee and the advantages it brings to HR operations. The creation of a digital employee through conversational flows, user utterances, and intent recognition is discussed. The video emphasizes the built-in datum types that can be used, along with branching when needed, to properly take an employee through the conversational flow.

<video src="https://vimeo.com/925637877"/>

### Amelia As HR Specialist Demo Part 2

The video continues with the onboarding of an employee and the customization of this process. It then delves into the topic of requesting information such as a photo upload, presenting information back to users, branching conversational flows, and the use of 'yes' and 'no' responses. It also introduces the backend block that can be used as a placeholder and eventually used to integrate with your backend systems in production.

<video src="https://vimeo.com/925637991"/>

### Amelia As HR Specialist Demo Part 3

In this video, we will continue to explore the importance of testing and QA for proper functionality. It then delves into the onboarding process, including handling employee details and completing onboarding tasks. Additionally, the use of LLMs for intent recognition is explored, which drastically reduces the amount of time needed to train models and properly test our flows.

<video src="https://vimeo.com/925638124"/>

## Amelia 6.3 Release

### Amelia Answers Settings

The video explores how different settings affect the performance of the Amelia Answers module during face calls. It covers aspects like threshold settings, candidate answers, document FAQ usage, activation of additional information, segment selection threshold, LLM performance, and adjusting segments for answer generation.

<video src="https://vimeo.com/936259074/ca7abda157"/>

### Cognitive Providers and Cognitive Tasks

This video explores various cognitive providers, such as our internal LLMs, OpenAI, and Azure OpenAI. After adding a provider and setting one as default, you can configure cognitive tasks to use a provider other than the default for specific tasks.

<video src="https://vimeo.com/938190232/864d3b7095"/>

### Amelia Builds Amelia (ABA) Demo: Onboarding a New Employee

In this demonstration, we use Amelia Builds Amelia to create the template for onboarding a new employee. We can see how the more information that we provide in our initial utterance, the more built out the template we create is going to be.

<video src="https://vimeo.com/938219151"/>

### Amelia Builds Amelia (ABA) Demo: Grant Guest Wi-Fi Access

In this demonstration, we show how you can build a template for a conversational flow in Amelia to get guest Wi-Fi access. This will create an intent, train a model, and create the entities needed throughout the flow.

<video src="https://vimeo.com/938190780"/>

### Amelia Builds Amelia (ABA) Demo: Reset Password

This demonstration shows how we can create the common process of having to reset a user’s password. It will take in any entities we tell it will be needed, and we can also prompt it to ask a confirmation question before calling our backend.

<video src="https://vimeo.com/938219545"/>

### Amelia Builds Amelia (ABA) Demo: Onboard Employee with Single Utterance

In this video, we will show you how to create a conversational flow just by providing Amelia with a single utterance in the Amelia Builds Amelia (ABA) Module.

<video src="https://vimeo.com/938190104/9771937318"/>

### Amelia Builds Amelia (ABA) Demo: Order Tracking

In this video, we will look at how to create a simple order tracking conversational flow template by using the Amelia Builds Amelia module.

<video src="https://vimeo.com/938189993"/>

### Web Action Inputs

This video shows us a new feature of web actions where we no longer need to use the inputs within the web action and instead can add the necessary entities and variables directly from a conversational flow into the web action.

<video src="https://vimeo.com/938250086/8b9311b5ff"/>

### Default Branches

This walkthrough shows how we have removed the use of bpn:otherwise() in our branches and how instead no statement in either just the invalid or in both the invalid and valid branches correctly corresponds to how Amelia creates a bpn that is run when the intent is triggered.

<video src="https://vimeo.com/938190728"/>

### Training Use Case: Reset Password Walkthrough Part 1

This is a comprehensive walkthrough that shows how to create a conversational flow from start to finish in a 6.3 instance. It includes some additional advanced features, such as how to write a script that can choose the appropriate escalation queue depending on the number of available agents and a PUT HTTP request to an actual database where we can see how the web action works and the update it makes in the database.

<video src="https://vimeo.com/938007147"/>

### Training Use Case: Reset Password Walkthrough Part 2

<video src="https://vimeo.com/938307370"/>

### Training Use Case: Reset Password Walkthrough Part 3

<video src="https://vimeo.com/938307435"/>

### Training Use Case: Reset Password Walkthrough Part 4

<video src="https://vimeo.com/938314057"/>

### Training Use Case: Reset Password Walkthrough Part 5

<video src="https://vimeo.com/938314289"/>


## Amelie 6.4 Release

Web Action Inputs

This video highlights the drastic improvement in passing entities and variables from our conversational flows into the web actions. This makes it much faster and easier for developers to implement API calls using our web actions.

<video src="https://vimeo.com/944651490"/>

### Escalation Queue Service

The escalation queue service is a script service that Amelia can leverage to see which agents are available to handle a particular escalation. While users have long been allowed to choose the queue they’d like a type of issue within the escalation block, this lets us see whether or not there might be available agents on a queue and can ensure that we only escalate conversations to a queue that does have agents who are currently online. Avoiding a customer waiting a long time with no available agents to handle their issue is a great way to improve customer service results.

<video src="https://vimeo.com/944651439"/>

### Response Template with Formatted Text

Amelia makes it easy to have text sent from agents to our end users formatted with bold, italics, underlines, and other traditional markdown formatting. This can either be a response template or uploaded as a document, which is how supervisors would traditionally give responses to their agents, or as a response that the agents can customize themselves.

<video src="https://vimeo.com/949368032"/>

### Custom Statuses for Agents

In addition to our traditional statuses that all agents have, which are online, away, busy, and offline, managers can now set up custom statuses for their agents. Within any escalation team, a manager can add more statuses under the existing categories to give them additional information about the agents’ status and if one agent is currently more available than others.

<video src="https://vimeo.com/949370041"/>

### Agent View User Information

This video shows you how to quickly and easily add user information to what the agents see. It also shows how it’s easily customizable and can be updated depending on the use case.

<video src="https://vimeo.com/944651324"/>

### Segmentation with tags for Amelia Answers

This video demonstrates how we can use our new segmentation tags within Amelia Answers. In this demonstration, the amount of time that a client can access our guest Wi-Fi might vary depending on what company they’re from. Using the segmentation service, we can use information from entities or variables, or depending on which branch a client might take, to have Amelia correctly provide the specific response for that user.

<video src="https://vimeo.com/949371453"/>

### Warnings and Errors Displayed in Blocks

This video showcases the newer feature where Amelia highlights all blocks containing an error or a warning within our digital employee builder (DEB) flows. This makes it much easier to debug and fix any potential errors in conversational flows that could prevent it from deploying or create errors in production when deployed. This advancement is incredibly valuable because debugging errors is a common practice for anyone working with a product like Amelia.

<video src="https://vimeo.com/944651525"/>

### Entity Extraction with LLMs

Many entities that formerly required a large amount of work - such as going through chat logs to find examples of how users would communicate what their desired entity's value to us, uploading those training files into Amelia, and training a model - can now simply use our LLMs. You can choose which of the LLMs set up in the domain you’d prefer to use to extract the entity’s value and choose the use LLMs under the properties tab in that particular entity.

<video src="https://vimeo.com/949620893"/>

### Security Features Featuring Swagger Auth

One of the most important things we can do for our customers is to ensure that we have security features that meet the highest levels of compliance. This video demonstrates how easy it is to set Amelia up to encrypt a user’s password to keep it secure. It also encrypts all types of variables, such as the built-in response variable, to ensure none of those give away the password.

<video src="https://vimeo.com/949624404"/>

### Convert a BPN into a DEB

A long-standing issue is that, in the past, new users of our digital employee builder (DEB) had to reach out to Amelia to convert old v4 and early v5 flows into a DEB or continue just building out the flow in a BPN. However, now in 6.4 we allow you to easily and quickly convert a BPN (business process network) into a DEB that can be worked on and improved upon.

<video src="https://vimeo.com/949625760"/>

## Amelia 6.5 Release

### Amelia Answers Headers

The new headers in Amelia Answers allow Amelia to ingest information on a site that requires authentication. For example, these videos can only be accessed by logging into our docs, and we can now add headers to have Amelia Answers create Q&A pairs from websites such as our docs that previously would have failed to ingest information due to the authentication.

<video src="https://vimeo.com/952037732"/>

### Current Longest Wait Time in Supervisor Dashboard

This video shows how the supervisor dashboard now includes the current longest wait time metric. This metric is available by each queue so supervisors can quickly and easily see which customers have been waiting the longest for assistance, whether overall or within their team.

<video src="https://vimeo.com/952137166"/>

### Export DEB Flows as an Image

This video showcases how our digital employee builder (DEB) flows can now be exported as an SVG image that showcases the overall design of the flow with the branching in addition to our traditional JSON export. This will make it easier for teams to confirm that their flows are set up as expected and make any adjustments needed when communicating between different teams.

<video src="https://vimeo.com/952048713"/>

### Multi-select Queues and Domains in the Supervisor Dashboard

The supervisor dashboard now allows supervisors to select multiple queues or domains. This is useful for managers who are responsible for more than one team and want to view their teams all at a glance.

<video src="https://vimeo.com/952137246"/>

### Save Hotkey in DEB Flows

The digital employee builder (DEB) flows now allow users to simply click a hot key (Ctrl+s or Cmd+s) to save their conversational flows.

<video src="https://vimeo.com/952056894"/>

## More Resources

{% include from="Training-Access-Amelia-Videos.md" element-id="F01-01_0002-Training-Access-Amelia-Videos_snippet" /%}
