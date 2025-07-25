# Response Pools Introduction

## Introduction

{% include from="B03-08_0301-Response-Pools-Intro.md" element-id="B03-08_0301-Response-Pools-Intro_snippet" /%}

To create responses, select or confirm you're in the correct domain. You first create Response groups to organize response pools. Then create a response pool in the new group. You next add responses to the new pool in the new group.

Amelia processes and classifies incoming user sentences with dialog acts and sentence types. Responses can include variables to customize responses, for example, with a user name. And you can annotate responses with HTML and speech modification.

You also can edit and delete your custom response pool groups, pools, and responses. Responses also can include one or more languages within a response pool. See our [Response Pools Management](B03-08_0303-Response-Pools-Management.md) topic for details about using response pools.

> To view the complete list of available response pools, select the global domain. If needed, navigate the Digital Employees, NLU Resources, and then Response Pools links. The Response Pools panel displays the default list of groups, pools, and responses. {style="note"}

## What You'll Learn

In this topic you'll learn about:

* [Using Variables to customize responses](#Using).
* [Dialog Acts and Sentence Types](#Dialog).
* [Annotating responses](#Annotate).
* [Accessing the Response Pools Panel](#Access).

##Using Variables to Customize Response Pool Responses {% #Using %}

Responses in a response pool can include variables. For example, a person's name or other data from an active conversation. Wrap variables in curly braces with a $ prefix like `${variable}`. Amelia uses the Apache JEXL format for variable syntax. Response pools in the global domain have several example responses that use variables.

##Dialog Acts and Sentence Types {% #Dialog %}

Amelia's responses are determined by the type of dialog and sentences she processes in a conversation.

### Dialog Acts

Amelia processes and classifies sentences into one of a set of dialog acts. Dialog acts describe the function of exchanges in a conversation. A "thank you," for example, is usually followed by "you're welcome" or similar response. If a person asks a question to seek information, the response provides information. If a person apologizes, the other person accepts, rejects, or acknowledges the apology.

Dialog acts used in Amelia focus on social obligation management. Response pools provide pre-packaged responses for certain inputs from the user.

* **Agreement**: any positive acknowledgment or positive responses to yes/no questions. ("Yes", "Sounds good", "Perfect", "Please do")
* **Apology**: apologies ("Sorry", "I apologize", "My mistake")
* **Auto feedback negative**: user doesn't understand Amelia ("I don't understand")
* **Closing**: goodbyes ("See you later", "Have a nice day", "Goodnight")
* **Disagreement**: any negative response to a yes/no question ("Nope", "No way")
* **Downplay**: responses to apologies ("No problem", "It was nothing", "Don't worry about it")
* **Greeting**: hello/salutation ("Hi", "Hello there", "Good morning")
* **Pause**: pause the conversation ("Hold on", "One minute while I check on that")
* **Resume**: resume the conversation ("Okay I'm back", "Go ahead")
* **Thanking**: a thank you ("Thanks so much", "I appreciate it")
* **Thanking Reply**: response to a thanking ("You're welcome")
* **Other**: sentence without an explicit social obligation

Amelia's dialog acts extend and adapt the work of Harry Bunt and colleagues. See [http://lrec-conf.org/proceedings/lrec2010/pdf/560_Paper.pdf](http://lrec-conf.org/proceedings/lrec2010/pdf/560_Paper.pdf) for details about their work.

### Sentence Types

Amelia classifies every sentence into one of three types:

* **Interrogative**: Questions or certain imperatives asking Amelia to provide information
* **Imperative**: Statements telling Amelia to do something
* **Declarative**: Sentences that are not an Interrogative or Imperative. For example, the user provides information to Amelia.

Amelia's responses combine these three types with rule-based heuristics. Interrogative sentences elicit an "I don't know" response if Amelia doesn't understand the sentence. In contrast, a Declarative sentence causes Amelia to acknowledge the user's information. For example, Amelia says, "I understand" or "Got it."

There are some exceptions to these rules. For example, Amelia avoids acknowledging sentences that don't provide intelligible information. Single-sentence utterances without verbs that are not answers to Yes/No questions elicit an "I don't know" response. Even if they are declarative sentences. This logic is subject to change.

Subsystems and responders use these labels to determine whether to generate a response. For example, the Digital Employees builder [Amelia Asks blocks](B03-04_0114-Amelia-Asks-Block.md) allow other subsystems to respond to a user reply.

##Annotate Responses {% #Annotate %}

You can annotate responses with HTML and speech modifications. You can make Amelia speak words slowly, for example. And bold or italicize text presented to users. Annotation is available when editing a response in the Response Pools tab workspace. Highlight a word or phrase in the response, then click the Annotate button. Our [Response Pools Management](B03-08_0303-Response-Pools-Management.md) topic has details.

The popup used to annotate a response has two tabs, one for HTML styling and another for speech.

### Styling Tab

The Styling tab controls the visual display of Amelia's chat utterances.

### Speech Tab

The Speech tab controls how Amelia speaks an utterance when in a conversation. You can control speech Volume and Rate. And scroll your mouse to display all settings. Hold your mouse over any option to display inline documentation.

The Speech tab uses SSML (Speech Synthesis Markup Language) as the default.

![B03-08_0303-ResponsePools-Annotate](B03-08_0303-ResponsePools-Annotate.png){width="400" style="block"}

*The Annotation Popup*

##Accessing the Response Pools Panel {% #Access %}

{% include from="B03-08_0301-ResponsePoolsAccess.md" element-id="B03-08_0301-ResponsePoolsAccess_snippet" /%}

## More Resources

For more information, see:

* [Response Pools Management](B03-08_0303-Response-Pools-Management.md).
* [NLU Resources Introduction](B03-08_0002-NLU-Resources-Intro.md).
