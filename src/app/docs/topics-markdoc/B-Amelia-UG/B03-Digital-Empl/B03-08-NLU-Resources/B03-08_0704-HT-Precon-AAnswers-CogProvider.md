# How-to: Enable an LLM Cognitive Provider for Amelia Answers

## Introduction

Before useing Amelia Answers with an LLM (large language model), you'll add cognitive provider configurations for each LLM used.

* **Azure OpenAI**: This LLM is recommended for use in a production environment. It's a Microsoft-specific learning model for advanced artificial intelligence. Use this option if you want overall best-in-class performance, scaling and infrastructure support.
* **OpenAI**: Works for all LLM-based functionality.
* **Internal**: Amelia's Internal LLM is self-hosted. Use this option if you want best-in-class data privacy and monitoring.

Cognitive provider controls let you set up and manage your keys across multiple AI providers and models directly in the platform. Once set up, you can specify which tasks you want to route to which provider. For example, you can specify that Amelia uses GPT-3.5 for Amelia Answers and GPT-4 for Amelia Builds Amelia.

## What You'll Learn

In this topic, you'll learn about:

* [Requirements for enabling an LLM](#Requirem).

* [How to enable an LLM cognitive provider in Amelia](#Enable).

##Requirements {% #Requirem %}

To complete these pre-configuration steps, you'll need:

* Administrator role for the affected domain.
* Sales support for non-contracted LLM-related features.
* Configuration details for your chosen LLM API (application programming interface).

##Enable an LLM Cognitive Provider {% #Enable %}

> This is a non-contracted LLM-related feature. Please contact Sales Support for help with these next steps. {style="note"}

To enable an LLM:

1. From the **top left main** menu, click **Digital Employees**.
2. On the **left-side** menu, click **NLU Resources**. The Cognitive Providers panel opens between the left-side menu and the Home page.
3. Click **+ Add New**.
4. Enter a **Name** for your New Cognitive Provider. Use a meaningful name that properly identifies and relates to your LLM type.

5. From the **Type** dropdown, make a selection:

   a. **Internal**: Select this option if you're using Amelia's internal LLM. No further configuration is needed for this option.

   b. **OpenAI**: Choose this option if you're using the OpenAILLM. Open the following dropdown for a description of each element.
      
   <chapter title="OpenAI Configuration Elements" collapsible="true" level="5">
   
   The following table shows descriptions for each OpenAIconfiguration element.

   *OpenAI Configuration Elements*
   
   | Element                      | Default    | Description                                                                                                                                                                             |
   |------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | APIKey                       |            | The unique identifier used to authenticate you with the OpenAI services API (application programming interface).                                                                        |
   | Organization ID              |            | Enter your unique identifier, found on your Organization Settings page. For users who belong to multiple organizations, this ID specifies which organization to use for an API request. |
   | Chat Completion Model        |            | The model (model name) being used for the request.                                                                                                                                      |
   | Chat Completion Model Length |            | The greatest number of tokens generated during the chat's completion. The total length of input and generated tokens, limited by the model's context length.                            |
   | Support Response Format      | Deselected | Enable this to flag if Amelia supports the required response format.                                                                                                                    |
   | Support Functions Calling    | Deselected | Enable this to flag if the model supports the function call.                                                                                                                            |
   
   
   </chapter>

   c. **Azure OpenAI**: Select this option if you use the Azure OpenAI LLM. Open the following dropdown for a description of each element.

   <chapter title="Azure OpenAI Configuration Elements" collapsible="true" level="5">
   The following table shows descriptions for each Azure OpenAIconfiguration element.

   *Azure OpenAI Configuration Elements*
   
   |            Element            |  Default   |                                                                         Description                                                                          |
   |-------------------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | API Key                       |           | The unique identifier used to authenticate you with the Azure AIservices API.                                                                               |
   | Azure Resource Name           |           | This is the descriptive name of your Azure OpenAI resource.                                                                                                  |
   | Chat Completion Deployment ID |           | The deployment name of the chat completion model.                                                                                                            |
   | Chat Completion APIVersion   |           | Using the YYYY-MM-DD date format, enter the API version for use.                                                                                             |
   | Embedding Deployment ID       |           | Enter the deployment name of the embedding model.                                                                                                            |
   | Embedding APIVersion         |           | Using the YYYY-MM-DD date format, enter the API version for use.                                                                                             |
   | Chat Completion Model Length  |           | The greatest number of tokens generated during the chat's completion. The total length of input and generated tokens, limited by the model's context length. |
   | Support Response Format       | Deselected | Enable this to flag if Amelia supports the required response format.                                                                                         |
   | Support Functions Calling     | Deselected | Enable this to flag if the model supports the function call.                                                                                                 |
   
   
   </chapter>
6. Complete the OpenAIor Azure OpenAIConfiguration steps.

7. Click **Save**.

## More Resources

* [How-to: Preconfigure a Domain](B01-01_0008-HT-Precon-AAnswers-Responder.md)

* [How-to: Enable Cognitive Tasks for Amelia Answers](B03-08_0604-HT-Precon-AAnswers-CogTask.md)

* [Amelia Answers Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md)

* [Amelia Answers Workspace Walkthrough](B10-00_0002-Answer-Agents-Walk.md)

