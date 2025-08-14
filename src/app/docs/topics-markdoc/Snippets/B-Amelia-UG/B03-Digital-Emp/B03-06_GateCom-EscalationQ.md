# B03-06_GateCom-EscalationQ

{is-library="true"}

<snippet id="B03-06_GateCom-EscalationQ_snippet"> **Note:** Select the Escalation Queue that this integration will serve.

All agents created for the integration will be placed on an Escalation Team assigned to this queue. The Escalation Team is auto-created and assigned to the queue when the integration is saved.

The escalation team name will follow the below pattern when created:

`random-uuid-string.endpoint-type-code`

up to a maximum length of 45 characters.

For example, an inContact Escalation Team name might be:

`bd27569e-28e2-424c-8d24-283eb9a3488d.INCONTAC`

> This escalation team cannot be created by an admin in the UI. It is only generated when saving this integration. Admins should NEVER alter this team name nor the agents created for this team outside of this configuration page. Admins can alter the team's schedule through the normal Escalation Team UI.


</snippet>