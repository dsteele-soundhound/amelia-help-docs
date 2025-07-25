# E02-01_0026-Fork-Action-Intro

{is-library="true"}

<snippet id="E02-01_0026-Fork-Action-Intro_snippet">



The Fork action lets you create multiple paths in an automation process. With a Fork, you can split your automation into two or more distinct paths, and there's no limit to the number of paths you can create. The Fork action is an intermediate step in your automation workflow. It's typically used with the Join action, which combines different paths based on specific conditions.

When you use both Fork and Join actions, Autonomics synchronizes the execution. This means that each path waits for the others to reach the Join action before proceeding. Otherwise, the execution is async. All actions after the Fork and before the Join action execute in parallel.


</snippet>