# E02-01_0025-Noop-Action-Intro

{is-library="true"}

<snippet id="E02-01_0025-Noop-Action-Intro_snippet">

The Noop action is the first step in your automation, just like the Start action. But, the Noop action differs from the Start action in that the Noop action can have multiple inputs and outputs. This means that the Noop action works well to create joins in the middle of an automation flow.

Autonomics performs actions in the order that you add them to each automation---top to bottom or left to right. Because of this, when used, a Noop action is the first action performed. Each automation must have at least one start-type action to be successful. Remember, a Noop action can have multiple inputs, and you can initiate these using various methods, such as scheduled times, specific events, or manual activation.

When you manually create an automation using Automation Studio, Autonomics adds a Start and a Success action to help you get started. You can then replace the Start action with a Noop action. Then, you can add actions between the Noop and Success actions to develop your automation.


</snippet>