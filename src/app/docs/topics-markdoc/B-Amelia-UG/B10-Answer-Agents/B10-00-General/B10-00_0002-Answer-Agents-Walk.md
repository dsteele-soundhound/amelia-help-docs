# Answer Agents Workspace Walkthrough

## Introduction

To use the Answer Agents workspace, you must understand its features and where they live. You'll see the left-side menu and Home page on entry into the Answer Agents workspace. This topic gives insight into when and how to use these elements.

![B10-00_0002-AA-Home-Landing](B10-00_0002-AA-Home-Landing.png){width="800" style="block"}

*The Workspace Showing Main Menu, Left-side Menu, and Home Page*

## What You'll Learn

In this topic, you'll learn about:

* [The Amelia main menu](#Main).

* [The Home page](#Home).

* [The left-side menu and related options](#Left-Sid).

* [Best practices for working with Answer Agents](#Best).

##Amelia Main Menu {% #Main %}

On entry into Amelia, you'll find the main menu in the header area at the top left of the application. The main menu is your key entry point into any of the workspaces offered by Amelia.

To go to the Answer Agents workspace, From the **top left main** menu, click Answer Agents.

##Home Page {% #Home %}

The Home page shows as a page tab in the Answer Agents workspace. Home serves as the starting point for your Answer Agents journey. You'll navigate the Home page by moving through the individual cards presented to you.

![B04-00_0002-AA-Home-Landing](B04-00_0002-AA-Home-Landing.png){width="800" style="block"}

*The Workspace Showing the Home Page*

### Get Started with Answer Agents

The Home page showcases a few ways to help you build out your sources:

* **Connect a Website**: Lets you build your knowledge source from any publicly available website.

* **Upload a File**: Lets you leverage your company's data by file upload. Suitable file types include HTML, PDF, XLSX, and DOCX.

* **Connect an External System**: Lets you securely connect your own data for training Amelia and powering Answer Agents.

### Ask a Question

After building your sources, next you'll test them. To do this, you can enter a question in the Start Typing field and click Ask a Question. This takes you to the Predict page, where you can see how Amelia processes individual questions. Besides Intents, Entities, and QAs, you'll also see system NLP (natural language processing) results. These NLP results give insight into sentiment, toxicity, and other subtle processing cues.

### Go To Analytics

The Analytics card is your source for valuable data insights. This data mimics the most important aspects of the Analytics dashboard. The card shows the number of clicks received and the number of responses liked and disliked. Also, you can see the average number of responses given per conversation and the percentage of conversations with common user questions. Go to Analytics is a quick and easy way to jump to the Analytics dashboard directly from the Home page.

### Review Your Responses / Feedback

Clicking the Review Conversations button opens the Queries dashboard as a separate tab after the Home page. This summary is also accessible from the left-side menu Responses button.

This summary table is an auditable view of all past conversations. Here you'll see when a specific conversation occurred, what your user asked, and Amelia's response. You'll also see how long Amelia took to respond and the confidence score related to Amelia's response. And lastly, you'll see any feedback given on the conversation.

### All / Sources

This is an overview of all your domain's knowledge sources and their statuses. Like the Sources panel, you'll see the source name and creation date. Also, you'll see the source's last modification date and status (Live or Processing).

##Left-Side Menu {% #Left-Sid %}

Inside the Answer Agents workspace, you'll also see the left-side menu. Options on this menu are dynamic, changing based on the workspace you've selected.

Inside the Answer Agents workspace, you'll see buttons for Sources, Analytics, Predict, Responses, Tests, and Settings. These are described in more detail below.

### Sources

{% include from="B10-00_0001-Sources-Intro-Part1.md" element-id="B10-00_0001-Sources-Intro-Part1_snippet" /%}

{% include from="B10-00_0002-Sources-Intro-Part2.md" element-id="B10-00_0002-Sources-Intro-Part2_snippet" /%}

> Click the **Collapse** ( ![Close-Panel-Btn-DEB_Left](Close-Panel-Btn-DEB_Left.png){width="25" style="inline"}) button to close and hide the panel.

![B10-00_0002-AA-Sources](B10-00_0002-AA-Sources.png){width="800" style="block"}

*The Workspace With Sources Button and Panel Highlighted*

### Analytics

{% include from="B10-00_0002-Analytics-Intro.md" element-id="B10-00_0002-Analytics-Intro_snippet" /%}

Clicking the Analytics button from the Answer Agents workspace takes you to the Answer Agents Analytics dashboard. You can also access this dashboard from the Analytics workspace or from the Answer Agents Home page.

![B04-00_0002-AA-Analytics](B04-00_0002-AA-Analytics.png){width="800" style="block"}

*The Workspace With Analytics Button and Page Tab Highlighted*

### Predict

{% include from="B04-00_0002-Predict-Intro.md" element-id="B04-00_0002-Predict-Intro_snippet" /%}

Clicking the Predict button opens a Predict tab. Here you can test individual questions or utterances. This differs from Tests in that the Tests tool tests batches of QA pairs (question and answer pairs) stored in XLSX files.

![B10-00_0002-AA-Predict](B10-00_0002-AA-Predict.png){width="800" style="block"}

*The Workspace With Predict Button and Predict Page Tab Highlighted*

### Responses

{% include from="B10-00_0002-FAQ-Responses-Intro.md" element-id="B10-00_0002-FAQ-Responses-Intro_snippet" /%}

Clicking the Responses button opens the dashboard.

![B10-00_0002-AA-Responses](B10-00_0002-AA-Responses.png){width="800" style="block"}

*The Workspace With Responses Button and Page Tab Highlighted*

### Tests

{% include from="B10-00_0002-FAQ-Tester-Intro.md" element-id="B10-00_0002-FAQ-Tester-Intro_snippet" /%}

> Click the **Collapse** ( ![Close-Panel-Btn-DEB_Left](Close-Panel-Btn-DEB_Left.png){width="25" style="inline"}) button to close and hide the panel.

![B10-00_0002-AA-Tests](B10-00_0002-AA-Tests.png){width="800" style="block"}

*The Workspace With Tests Button and Panel Highlighted*

### Settings

{% include from="B10-00_0002-Settings-Intro.md" element-id="B10-00_0002-Settings-Intro_snippet" /%}

See the [Settings Configuration](B10-06_0003-Settings-Configuration.md) topic for more information on these settings.

![B10-00_0002-AA-Settings](B10-00_0002-AA-Settings.png){width="800" style="block"}

*The Workspace With Settings Button and Page Tab Highlighted*

##Best Practices {% #Best %}

To get the most from Answer Agents, follow these best practices:

* The AI landscape has many new players with untrusted baselines. Maintain compliance by partnering with trusted intermediaries.

* The training feedback loops for commercial LLMs (large language models) increase the potential for data privacy leaks. Ensure that you have managed data governance and granular access controls. Also, ensure you have contractual agreements on usage with air gaps provided.

* {% include from="B10-01_0003-BP-Source-Origin.md" element-id="B10-01_0003-BP-Source-Origin_snippet" /%}

* Use specific text for more relevant responses. It's important to ask direct and specific questions. Your prompts should be specific to a topic and convey your intent.

* Encourage users to reply directly to Amelia's clarifying questions.

* Work with Customer Success to customize your prompt file to use a specific format or phrase for an answer. For example, to routinely end a conversation with "Have a nice day!".

* {% include from="B10-01_0003-BP-No-Response.md" element-id="B10-01_0003-BP-No-Response_snippet" /%}

* Consider the user experience.

## More Resources

{% include from="B10-00_0001-AnswerAgentsAccess.md" element-id="B10-00_0001-AnswerAgentsAccess_snippet" /%}
