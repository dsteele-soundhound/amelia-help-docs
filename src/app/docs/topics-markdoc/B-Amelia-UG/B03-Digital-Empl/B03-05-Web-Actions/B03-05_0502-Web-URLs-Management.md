# Web URLs (BPN) Management

## Introduction

Web URLs use a web interface to configure connections to third-party resources. These actions are available to BPN Consume Web Service tasks. This provides an easy way to use and display third-party data in a conversation flow. See the [Web URLs (BPN) Introduction](B03-05_0501-Web-URLs-Intro.md) topic for details.

Web Actions are designed to be a low code or no code alternative to the Integrations feature. Both features connect to third-party data sources and make data available in a conversation flow. However, Web Actions use a web interface instead of Camel code.

## Access the Web URLs (BPN) Panel

{% include from="B03-05_0501-WebURLsAccess.md" element-id="B03-05_0501-WebURLsAccess_snippet" /%}

![B03-05_0501-WebURLs-Workspace](B03-05_0501-WebURLs-Workspace.png){width="900" style="block"}
*Figure 1. Web URLs (BPN) Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Web URLs (BPN) Workspace](#Use2).

* [Add a Web URL](#Add).

* [Use a Web URL in a BPN process](#Use).

* [Edit a Web URL](#Edit).

* [Delete a Web URL](#Delete).

##Use the Web URLs (BPN) Workspace {% #Use2 %}

The Web URLs (BPN) workspace has four fields that are simple to understand.

URLs can include variables, for example, https://example.amelia.com/api/${var}/endpoint where ${var} is a variable in JEXL format.

|    Field     |                                                               Description                                                               |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Name         | Type a unique name for the web URL.                                                                                                     |
| URL          | Type or copy paste the URL to use. If the Is Base URL field is configured as Yes, use the rest of the URL to the right of the base URL. |
| Is Base URL  | Default is No. Select whether or not the URL is a root URL used by other Web URLs (BPN) artifacts.           |
| Use Base URL | If the Is Base URL field is configured as Yes, select a base URL to use as a prefix for the URL field.                                  |
[Web URLs (BPN) Workspace Fields]

 

##Add a Web URL {% #Add %}

To add a Web URL for use in a BPN process, click the Add New button at the top of the Web URLs (BPN) panel. The New Web URL tab workspace will display to the right of the panel.

##Use a Web URL in a BPN Process {% #Use %}

Once created, a Web URL can be used in a BPN process. Create a process that includes a Consume Web Service task. Then configure the Web URL field located under the Name field, as shown in this example.

![B03-05_0502-WebURLs-BPNExample](B03-05_0502-WebURLs-BPNExample.png){width="900" style="block"}
*Figure 2. Consume Web Service Task with Web URL*

##Edit a Web URL {% #Edit %}

To edit a Web URL for use in a BPN process, click a web URL listed in the Web URLs (BPN) panel. A tab workspace will display to the right of the panel.

##Delete a Web URL {% #Delete %}

To edit a Web URL for use in a BPN process, hover your mouse over a web URL listed in the Web URLs (BPN) panel. Click the Delete ( ![Delete1-Btn-DEB_Inside_Properties](Delete1-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button that appears to the right of the name.

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}

 

 
