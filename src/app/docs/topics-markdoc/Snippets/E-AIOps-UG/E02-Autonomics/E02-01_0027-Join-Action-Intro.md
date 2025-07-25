# E02-01_0027-Join-Action-Intro

{is-library="true"}

<snippet id="E02-01_0027-Join-Action-Intro_snippet">



The Join action lets you merge separate paths in an automation, bringing them together. It serves as an intermediate step in your automation workflow. The Join action is typically used with the Fork action, which creates different paths based on conditions. There's no limit to the number of paths into a Join action.

When you use both Fork and Join actions, Autonomics synchronizes the execution. This means that each path waits for the others to reach the Join action before proceeding. Otherwise, the execution is async. All actions after the Fork and before the Join action execute in parallel.


</snippet>