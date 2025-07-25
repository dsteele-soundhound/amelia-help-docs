# B03-06_GateCom-AgentsPerNode

{is-library="true"}

<snippet id="B03-06_GateCom-AgentsPerNode_snippet">



The number of agents created, per node, to service this escalation queue. The default is 3. The minimum number of agents is 1 while the maximum number is 15.

These agents are auto-created users in Amelia and assigned to the auto-created Escalation Team (see the Escalation Queue setting above) when the integration is saved. Each agent will correspond to a distinct listener process in the gateway service. The service will listen for escalation requests from Amelia.

The number of agents created will depend on the number of nodes that the gateway service is deployed to in the cluster. For a typical 3 node cluster using the default number of agents, 9 agents will be created, 3 per node. If more nodes are added, additional agents will be created specifically for each new node. The agents are created when the new gateway service registers itself with Amelia. Agents are NOT deleted when nodes are taken out of service.

The user profile created in Amelia for each agent will have the following properties:

* First Name: Agent

* Last Name: Upper case value of endpoint type (Ex: INCONTACTAGENT)

* Email: Follows the pattern shown below:

`agent.random-uuid-string@endpoint-type-code.integration-name.ipsoft.com`

Example:

`agent.bffd153c-c5da-401b-8ab9-bcb6c424f72c@incontactagent.incontacttest.ipsoft.com`

* Primary Domain: The domain of the integration

* Time Zone: The time zone of the domain of the integration

* Preferred Locale: Locale of the domain of the integration

* Max Concurrent Chats: 1000 (configurable through properties file)

* Attribute - GWINTEGRATION: The integration name

* Attribute - GWINTEGRATION::gateway: Assigned gateway node, pattern as follows:  

  `gateway-name::node-id`  

  where gateway-name and node-id are assigned via properties file:  

  Example: `Gateway Service::app02`  

The agents created for the integration are NOT assigned any authorities. All authorities to act as agent are assigned to the Gateway Service user.

Admins should NEVER alter the email address, the domain, the attributes or add authorities for these users. Admins should also never disable or delete these users unless the integration itself is deleted.

Admins can alter the agent's name, locale and time zone, if desired, to suit the integration.

Agent Cleanup

When an integration is deleted (not just disabled), Amelia will attempt to delete these agents that are no longer needed. The Escalation Team will also be deleted at this time.

However, rules within Amelia governing the deletion of users still apply. One example is that users cannot be deleted if they are associated with escalation logs. Thus, if these users cannot be deleted for any reason, Amelia will take the following steps:

1. Alter the agents email address, prepending the word DELETED to the email address giving the admin a visual clue that the user is no longer being used in an integration.

2. Add additional attributes to the user's profile to indicate why the user could not be deleted. For example, these attributes may appear:  

   Attribute name: `GWINTEGRATION::deleted`  

   Attribute value: `Delete failed at: 2021-05-27T17:20:00.084073Z`  

   Attribute name: `GWINTEGRATION::delete::error`  

   Attribute value: `Exception: User has escalation logs`  

Agents marked for deletion can safely be removed once the error condition is resolved. For example, escalation logs are deleted as part of the conversation summary cleanup batch job. Once the logs are deleted, these users can then be deleted through the admin UI.


</snippet>