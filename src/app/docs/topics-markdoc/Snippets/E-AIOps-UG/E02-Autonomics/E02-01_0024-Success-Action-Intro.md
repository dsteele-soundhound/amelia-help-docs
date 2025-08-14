# E02-01_0024-Success-Action-Intro

{is-library="true"}

<snippet id="E02-01_0024-Success-Action-Intro_snippet">



The Success action is a crucial part of the automation process, building on the success of previous actions. Every automation must have at least one Success action. Autonomics performs actions in the order that you add them to each automation - top to bottom or left to right. If present, your Success action is always the last action to be performed. If the last action carried out is a Success action, Autonomics sees the whole process as successful. If the last action is not a Success action, Autonomics sees the process as a failure. Regardless of the outcome, Autonomics records the outcome in the execution logs.

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then add actions between these points to develop your automation.

When you use generative AI to create an automation, Autonomics follows your prompt to build the automation. Autonomics starts the process with a Start action and finishes with a Success action. The steps between make up the remaining logic. Any changes you make will happen after the Start action but before the Success action.


</snippet>