# Cognitive Providers Management

## Introduction

To use the Cognitive Providers workspace, you must understand its features and where to find them. This feature lets you create

See our [Cognitive Providers Introduction](B03-08_0701-Cog-Provider-Intro.md) topic for details about cognitive provider configurations.

## Accessing the Cognitive Providers Workspace

{% include from="B03-08_0703-CognitiveProvAccess.md" element-id="B03-08_0703-CognitiveProvAccess_snippet" /%}

## What You'll Learn

In this topic you'll learn about:

* [The Cognitive Providers workspace](#The).
* [Add a cognitive provider](#Add).
* [Edit a cognitive provider](#Edit).
* [Test a cognitive provider](#Test).
* [Delete a cognitive provider](#Delete).
* [Search for a cognitive provider](#Search).

## The Cognitive Providers Workspace {% #The %}

Cognitive provider configurations are created and managed with a panel and a tab workspace.

### The Cognitive Providers Panel

This panel lists existing cognitive provider configurations. You can add new providers and search for providers.

![B03-08_0703-CogProviders-Panel](B03-08_0703-CogProviders-Panel.png){width="400" style="block"}

*The Cognitive Providers Panel*

### The Cognitive Providers Tab

You use this tab to create cognitive provider configurations. Amelia uses them for Amelia Answers and other features.

![B03-08_0703-CogProv-Internal-Page](B03-08_0703-CogProv-Internal-Page.png){width="900" style="block"}

*The New Cognitive Providers Tab Settings with Internal Selected*

*Default Cognitive Providers Tab Settings*

| Settings             | Description                                                                                                                                                                                                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                 | Type a unique descriptive name for the cognitive provider.                                                                                                                                                                                                                               |
| Type                 | Select the type of LLM server to display the appropriate settings: <ul><li><strong>Internal:</strong> Use Amelia's internal LLM.</li> <li><strong>OpenAI:</strong> Use the OpenAI LLM.</li> <li><strong>Azure OpenAI:</strong> Use the Azure OpenAI LLM.</li></ul> |
| Enable Configuration | Click to toggle the cognitive provider configuration to be enabled or disabled.                                                                                                                                                                                                          |
| Default              | Click to toggle the cognitive provider configuration to be the default or not.                                                                                                                                                                                                           |
| Test                 | Once the configuration details are defined, click this button to test the connection.                                                                                                                                                                                                    |


The OpenAI and Azure OpenAI cognitive providers include additional settings.


<chapter title="OpenAI Settings" collapsible="true" level="5">

![B03-08_0703-CogProv-OpenAI-Page](B03-08_0703-CogProv-OpenAI-Page.png){width="600" style="block"}

*The OpenAI Configuration Form*

*OpenAI Settings*

|           Element            |                                                            Description                                                             |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| API Key                      | The API key from OpenAI.                                                                                                           |
| Organization ID              | The organization ID from OpenAI.                                                                                                   |
| Chat Completion Model        | The chat completion model name provided to OpenAI. Must match exactly the name used by OpenAI.                                     |
| Chat Completion Model Length | The max output length of the model you specified. In most cases, 4096 is fine.                                                     |
| Support Response Format      | Whether the model supports JSON-mode, if output is confined to valid JSON only.                                                    |
| Support Functions Calling    | Whether the model supports tool use (aka function calling). This is the ability for the model to use internally-defined functions. |

</chapter>

<chapter title="Azure OpenAI Settings" collapsible="true" level="5">

![B03-08_0703-CogProv-Azure-Page](B03-08_0703-CogProv-Azure-Page.png){width="600" style="block"}

*Azure OpenAI Configuration Form*

*Azure OpenAI Settings*

|                 Setting                 |                                                                                                                  Description                                                                                                                   |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API Key                                 | The Azure API key from your Azure account.                                                                                                                                                                                                     |
| Azure OpenAI Endpoint Configuration     | Select the endpoint configuration to use: * Resource Name: Use the Azure resource name. * Proxy Endpoint: Use a full Endpoint URL when using a proxy to access Azure.                                                                          |
| Azure Resource Name (or Proxy Endpoint) | If the Endpoint Configuration is Resource Name, the Azure resource name to invoke through Amelia. Otherwise, if the Endpoint Configuration is Proxy Endpoint, the full URL used to access Azure.                         |
| Chat Completion Deployment ID           | The name of the model deployment in the Azure OpenAI dashboard.                                                                                                                                                                                |
| Chat Completion API Version             | The version of the Azure API to use. This is commonly confused with model version, a field visible in the Azure OpenAI dashboard. 2023-05-15 currently works for both Chat Completion and Embeddings, for all Amelia use cases.                |
| Embedding Deployment ID                 | The name of the model deployment in the Azure OpenAI dashboard. This was set when you deployed the model in Azure. A Chat Completion model deployment and an Embeddings model deployment must exist to create a working Azure OpenAI provider. |
| Embedding API Version                   | The version of the Azure API to use. This is commonly confused with model version, a field visible in the Azure OpenAI dashboard. 2023-05-15 currently works for both Chat Completion and Embeddings, for all Amelia use cases.                |
| Chat Completion Model Length            | The max output length of the model you specified. In most cases, 4096 is fine.                                                                                                                                                                 |
| Support Response Format                 | Whether the model supports JSON-mode, if output is confined to valid JSON only.                                                                                                                                                                |
| Support Functions Calling               | Whether the model supports tool use (aka function calling). This is the ability for the model to use internally-defined functions.                                                                                                             |



</chapter>

##Add a Cognitive Provider {% #Add %}

To create a cognitive provider:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Providers.
2. In the **Cognitive Providers** panel, click the **+ Add Ne**w button. A New Cognitive Provider tab opens after the Home page.
3. Give your provider a Name.
4. Complete remaining settings as needed. Open these drop downs to learn about the elements you'll see when adding providers.

##Edit a Cognitive Provider {% #Edit %}

To edit a cognitive provider:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Providers.

2. In the **Cognitive Providers** panel, find then click a provider name. A Cognitive Provider tab opens after the Home page.

3. Edit settings as needed. Open these drop downs to learn about the elements you'll see when adding a cognitive provider.

##Test a Cognitive Provider {% #Test %}

To test a cognitive provider:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Providers.

2. In the **Cognitive Providers** panel, find then click a provider name. Or click the **+ Add New** button. A Cognitive Provider tab opens after the Home page.

3. The Test button appears when you save a provider configuration, next to the Save button. If the button does not appear, configure the provider and then save. Click the Test button to test the configuration.

##Delete a Cognitive Provider {% #Delete %}

To delete a cognitive provider:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Providers.

2. In the **Cognitive Providers** panel, find then click a provider name. Or click the **+ Add New** button. A Cognitive Provider tab opens after the Home page.

3. The Delete button appears when you save a provider, next to the Save button. If the button does not appear, configure the task and then save. Click the Delete button to delete the task.

##Search for a Cognitive Provider {% #Search %}

To search for a cognitive provider:

1. From the **top left main** menu, click **Digital Employees**. On the **left-side** menu, click NLU Resources. On the **flyout** menu, click Cognitive Providers.

2. In the **Cognitive Providers** panel, click the Search Here field, below the **+Add New** button. Type a few characters or a word to filter the list of tasks. Then click the task you want. A Cognitive Task tab opens.

## More Resources

For more information, see:

* [Cognitive Providers Introduction](B03-08_0701-Cog-Provider-Intro.md).
* [Cognitive Tasks Introduction](B03-08_0601-Cog-Task-Config-Intro.md).

