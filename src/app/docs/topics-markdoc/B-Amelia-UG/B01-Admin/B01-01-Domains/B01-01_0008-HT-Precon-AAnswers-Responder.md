

# How-to: Preconfigure a Domain for Amelia Answers

## Introduction

Before you can make full use of Amelia Answers, there are a few steps that you must complete.

To use core Amelia Answers functionality, you must enable the DocumentFaq subsystem responder on your domain. And to use QA pairs, you must enable the QaPairFaq subsystem responder on your domain. You can skip the QaPairFaq subsystem responder configuration if you don't use QA pairs.

To avoid timeouts on large documents, you can use LangChain. LangChain typically provides a better pipeline for Amelia Answers.

## What You'll Learn

In this topic, you'll learn how to enable:

* [The DocumentFaq subsystem responder](#Enable).

* [The QaPairFaq subsystem responder](#Enable2).

* [The LangChain document processing service](#Enable3).

## Requirements

To complete these pre-configuration steps, you'll need the following:

* Administrator role for the affected domain.

## Configuration

###Enable the DocumentFaq Subsystem Responder {% #Enable %}

To use core Amelia Answers functionality, you must first enable the DocumentFaq subsystem responder on your domain.

To enable the DocumentFaq subsystem responder:

1. From the **top left main** menu, click **Administration**.

2. On the **left-side** menu, click **Domains**. The Domains panel opens between the left-side menu and the Home page.

3. In the **Domains** panel, find and select your domain.

4. Select the **Subsystem Responders** tab.

   ![B01-01_0008-Subsystem-Responders](B01-01_0008-Subsystem-Responders.png){width="900" style="block"}

   *The Domains Editor with Subsystem Responder Tab Selected*

5. Review the list of existing subsystem responders to look for **DocumentFaq**. If the system responder exists, you can exit the Domains configuration page. If the system responder doesn't exist, you'll add the system responder in the next step.

6. Open the **Select a Responder to Add** dropdown.

7. Find and select **DocumentFaq**. You'll see the Added tab now shows a green badge with the number of system responders added. Your focus moves to the Added tab.

8. Click **Save**.

{% include from="B01-01_0008-Del-Subsystem-Responder.md" element-id="B01-01_0008-Del-Subsystem-Responder_snippet" /%}

###Enable the QaPairFaq Subsystem Responder {% #Enable2 %}

> If you have two parallel pipelines, the QaPairFaq subsystem responder takes precedence over DocumentFaq. {style="note"}

If you choose to use QA pairs, you'll configure the QaPairFaq subsystem responder on your domain. You can skip this step if you don't use QA pairs (question and answer pairs).

To enable the QaPairFaq subsystem responder:

1. From the **top left main** menu, click **Administration**.

2. On the **left-side** menu, click **Domains**. The Domains panel opens between the left-side menu and the Home page.

3. In the **Domains** panel, find and select your domain.

4. Select the **Subsystem Responders** tab.

5. Review the list of existing subsystem responders to look for QaPairsFaq. If the system responder exists, you can exit the Domains configuration page. If the system responder doesn't exist, you'll add the system responder in the next step.

6. Open the **Select a Responder to Add** dropdown.

7. Find and select **QaPairsFaq**. You'll see the Added tab now shows a green badge with the number of system responders added. Your focus moves to the Added tab.

8. Click **Save**.

{% include from="B01-01_0008-Del-Subsystem-Responder.md" element-id="B01-01_0008-Del-Subsystem-Responder_snippet" /%}

###Enable the LangChain Document Processing Service {% #Enable3 %}

To enable the LangChain document processing service:

1. From the **top left main** menu, click Administration.

2. On the **left-side** menu, click Domains. The Domains panel opens between the left-side menu and the Home page.

3. In the **Domains** panel, find and select your domain.

4. Select the **Advanced** tab.

5. Review the list of advanced items to look for **Enable LangChain Service**. If the service exists, you can exit the domain configuration page. If the service doesn't exist, you'll add the service in the next step.

6. Open the **Select Your Item** dropdown.

7. Find and select **Enable LangChain Service**. Or, in the Select Your Item dropdown, enter _Enable LangChain Service_ and select the service from the list.

8. The service appears added at the bottom of the table.

9. In the Enable LangChain Service **Custom Value** field, enter true.

   ![B01-01_0008-Enable-LangChain-Service](B01-01_0008-Enable-LangChain-Service.png){width="900" style="block"}

   *The Domain Editor with LangChain Document Processing Service Selected*

10. Click **Save**.

> If you accidentally add an advanced item, click ![B04-01_0002-AA-Trash-Small](B04-01_0002-AA-Trash-Small.png){width="25" style="inline"} next to the item to delete it. {style="note"}

## More Resources

* [How-to: Enable LLM Cognitive Providers](#introduction)

* [How-to: Enable Cognitive Tasks for Amelia Answers](B03-08_0604-HT-Precon-AAnswers-CogTask.md)

* [Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md)

* [Workspace Walkthrough](B01-00_0002-Administration-Workspace-Walk.md)
