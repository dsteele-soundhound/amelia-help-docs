# E02-01_0004-Automation-If-Limit-Exceeds

{is-library="true"}

<snippet id="E02-01_0004-Automation-If-Limit-Exceeds_snippet">



Sets the action when new automation tries to start, and the concurrency limit is reached.

* Inherit: This means the automation uses the value from the Automation Settings page for the client where the automation resides.

* Auto Abort: This means Autonomics aborts the automation.

* Keep in Scheduled State Until Other Automations Finish: This means the automation queues. The automation will only start when the number of executions for the same automation drops below the concurrency limit.



</snippet>