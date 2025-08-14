# Best Practices: Prompt Engineering

## Introduction

Prompts use natural language to talk with an AI. Prompt engineering uses natural language so that an AI model understands and responds. Prompts tell an AI what you want and how you want it done.

Prompts may contain any of these elements:

* **Instruction**: In the form of a specific task or instruction you want the model to perform.
* **Context**: To further define the instruction with external details that steer the model to a better response.
* **Input data**: That describes the input or the question you're interested in to get a response.
* **Output indicator**: That describes the format of the output from the model.

Amelia uses prompts in two ways:

* To describe digital employees created with the Amelia Builds Amelia feature. The Amelia Builds Amelia interface includes a prompt field and chat interface. Both are used to give prompts to Amelia to create a digital employee.

* To define how Amelia responds to questions in Amelia Answers. Use the File Upload feature to upload prompts for use with Amelia Answers.

## What You'll Learn

In this article you'll learn about:

* [Prompt types](#PromptTypes).
* [Using the CLEAR framework](#UsingCLEARFramework).
* [General guidelines for writing prompts](#GeneralPromptGuidelines).
* [Testing prompts](#TestingPrompts).
* [More resources for writing prompts](#More).

## Prompt Types {% #PromptTypes %}

There are several ways to use prompts with AI.

* **Zero-shot prompts**: Use simple queries that leverage basic knowledge the AI knows. For example, asking a model to classify a statement as neutral, negative, or positive.

  | Prompt Example                                                                                                | Output Example |
  |---------------------------------------------------------------------------------------------------------------|----------------|
  | Clarify the text into neutral, negative, or positive. Text: Please tell me what medications you take. | Neutral        |

* **Few-shot prompts**: Provide an example to the AI and then ask it to use the example to return a result.

  | Prompt Example                                                                                                                                                                                                                                                                                                                                                                 |                               Output Example                               |
  |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
  | Auto insurance is used to reimburse drivers after an accident. An example of a sentence that uses the phrase auto insurance is: Sam bought auto insurance to protect their new car in case of an accident. A policy is an agreement between an insurance company and a customer to pay expenses if an accident happens. An example of a sentence that uses the word policy is: | When Sam bought their car, they bought a policy from an insurance company. |

* **Naive prompts**: These are simple queries. These prompts return generic answers, often of limited value.

  |         Prompt Example          | Output Example |
  |---------------------------------|----------------|
  | What's the best way to get fit? | Exercise       |

* **Persona prompts**: Include two parts, instructions for processing and a prompt.

  |                                                                                                                   Prompt Example                                                                                                                    |                  Output Example                   |
  |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
  | You'll act as a fitness expert who's current with the latest research data and provide very detailed step-by-step instructions in reply to my queries. Create a gym workout program to lose weight and build strength for an out-of-shape beginner. | (AI returns a detailed exercise and dietary plan) |

* **Interview prompts** include two parts, processing instructions and a prompt.

  |                                                                                                                                                                     Prompt Example                                                                                                                                                                     |                                                                                           Output Example                                                                                           |
  |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | You'll act as a fitness expert who's current with the latest research data and provide very detailed step-by-step instructions in reply to my queries. You'll interview me, asking me all the relevant questions necessary for you to generate the best possible answer to my queries. Create a gym workout program to lose weight and build strength. | (AI interrogates your user based on researching current data about ideal gym workout plans for losing weight and building strength. Then the AI researches and builds an ideal step-by-step plan.) |

* **Chain-of-Thought prompts** include processing instructions and a prompt. The instructions tell the AI in detail all the elements of a topic to consider and describe. For example, you might describe ten bullet point topics about space exploration. Then the prompt might be, "What is space exploration?"

  |                                     Prompt Example                                     |                                                 Output Example                                                  |
  |----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
  | (Describe ten bullet point topics about space exploration. What is space exploration?) | (AI returns a detailed overview description of space exploration that includes the ten points from the prompt.) |

* **Prompt chaining**: Breaks a task into subtasks, queries an AI with the first task and uses the response as input to another prompt. The result is a chain of prompt operations.

## Using the CLEAR Framework {% #UsingCLEARFramework %}

Prompts must be crafted carefully to optimize output and reduce the need for repeated inquiries. A well-crafted prompt follows the CLEAR framework developed by Leo Lo, a librarian and professor at the University of New Mexico. Prompts must be Concise (or Clear), Logical, Explicit, Adaptive, and Reflective.

Here are a few examples of Amelia-related prompts using the CLEAR Framework.

* **Concise**: To be concise, or clear, look at the key words that you're asking the AI to analyze. Leave out as many needless or confusing words as you can.

  |                                                                                                                                                   Good Prompt                                                                                                                                                   | Prompt Needs Improvement                                                                                                                                                                                                  |
  |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Create a digital employee to ask patients what medications they're on and, for each medication, what days and times they take the medication. Then ask for their phone and email address and remind them to take their medications based on their medications and the days and times they take each medication. | Create a digital employee to manage medication usage. <tip>It's unclear what the phrase manage medication usage means. The phrase could mean ordering medication, as well as reminding patients to take medication.</tip> |

* **Logical**: Confirm that your prompt describes concepts accurately and in the correct logical order. AIs are software. They look for structure, for example, relationships between words and concepts and their logical order. A question that doesn't make sense to you probably won't make sense to an AI.

  |                                           Good Prompt                                            | Prompt Needs Improvement                                                                                                                                                     |
  |--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | What are the most common and successful steps to ensure patients take their medications on time? | How can we ensure patients take their medications? <tip>This question is unlikely to return a response that includes common steps and measurable and successful steps.</tip> |

* **Explicit**: Give the AI clear directions about the output that you need. This helps ensure a useful answer.

  |                                                                          Good Prompt                                                                           |                   Prompt Needs Improvement                    |
  |----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
  | What are the most common, measurable, and successful tasks that doctors and nurses perform to ensure that their patients take medications at the correct time? | What do doctors do to ensure their patients take medications? |

* **Adaptive**: If you need to refine your prompt query with additional prompts, use any keywords or topics that the AI returns in their output. Also look to see if the AI tool has settings for seeding or providing guidance about how to structure prompts. Can you specify words or concepts to ignore, for example? If you try different settings, compare and evaluate the different outputs you receive.

* **Reflective**: Look at the AI output to confirm the response makes intuitive sense. If research is cited, is it from older sources or new? And if the output is complete, are there perspectives that may need to be added? You may need additional prompts to get the most comprehensive results.

##General Guidelines for Writing Prompts {% #GeneralPromptGuidelines %}

When writing prompts, it is important to define your goals. Research and collect information about roles, tasks, and other details your digital employee will need to function well. Writing effective prompts requires patience, trial and error, and flexibility. For example, at times combining prompts in a particular order can achieve a more precise result.

What follows are basic guidelines to get started writing prompts. Models also have their own preferences. Refer to their documentation for ideas about how to optimize prompts for their models.

* A generic prompt generates a generic response. Be concise, specific, and clear to add context to a prompt. More detail also reduces the chance an AI will guess an answer in a confident way.
* While precision matters, strike a balance between being too specific and too generic.
* Asking your language model to adopt a role can give additional context. For example, asking for a recipe given by a personal trainer yields different results than a generic request.
* Use the words do and don't to clarify the results needed and those to be avoided.
* How you organize information matters. Telling your model the task to be accomplished first and then giving details works best in many cases. Otherwise, the model collects details before understanding how they relate to the task.
* Include reference text and examples of preferred behavior and results, if needed. This helps the AI understand your request.
* Split complex tasks into simpler sub-tasks. This helps avoid confusion and makes the relationships between tasks clearer.
* Split tasks into steps, if you can, and mark them clearly in the prompt.
* Use delimiters - for example, triple quotation marks, XML tags, and section titles -- to identify the sections in the prompt.
* Give an AI time to think before giving an answer. This lets the model work out a solution before reaching a conclusion. For example, include a possible solution and then ask the model to determine the accuracy of the solution. This helps the model improve its understanding of the request.

##How to Test Prompts {% #TestingPrompts %}

While there are tools to test prompts, engaging an AI model with prompts is a back-and-forth process. Test changes to your prompt in a systematic way to isolate what works and doesn't work. Keep records of your goals, inputs, roles, and prompts, as well as AI responses and other details.

##More Resources {% #More %}

> We've provided these Prompt Engineering Guide links for convenience and information only. Amelia can't control external content and can't guarantee its accuracy.
{style="warning"}

* [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)
* [Azure OpenAI Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
* [Prompt Engineering Guide](https://www.promptingguide.ai/)
* [Amelia Builds Amelia Workspace Walkthrough](B03-03_0003-ABA-Workspace-Walkthrough.md)
* [Amelia Answers Walkthrough](B10-00_0002-Answer-Agents-Walk.md)

