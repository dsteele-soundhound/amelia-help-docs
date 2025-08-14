

# Proxies Management

## Introduction

To use the Proxies workspace, you must understand its features and where to find them. Web Actions use a web interface to configure connections to third-party resources. These resources require secure connections. Proxy servers provide a secure way to access third-party data in a conversation flow. Digital Employees builderBackend blocks and BPN Consume Web Service tasks can use proxy server connections to access data. See the [Proxies Introduction](B03-05_0401-Proxies-Intro.md) topic for details.

## Access the Proxies Workspace

{% include from="B03-05_0402-ProxiesAccess.md" element-id="B03-05_0402-ProxiesAccess_snippet" /%}

![B03-05_0402-Proxies-Workspace](B03-05_0402-Proxies-Workspace.png){width="900" style="block"}

*The Proxies Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Proxies workspace](#Use).

* [Add Proxies](#Add).

* [Edit Proxies](#Edit).

* [Delete Proxies](#Delete).

* [Search for Proxies](#Search).

* [Configure Web Actions to use Proxies](#Configur).

##Use the Proxies Workspace {% #Use %}

The Proxies workspace includes tools to create and manage proxies used by web actions.

### The Proxies Panel

This panel appears between the left edge navigation links and the Home or Proxies tab workspace. The panel displays a list of proxies.

To toggle open the Proxies panel, click the Web Actions link on the left edge navigation links. Then click the Proxies link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Proxies panel.

![B03-05_0402-Proxies-Panel](B03-05_0402-Proxies-Panel.png){width="400" style="block"}

*The Proxies Panel*

*Proxies Panel Elements*


|                                     Element                                     |                                     Description                                     |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| +Add New                                                                        | Adds a new proxy for use with web actions.                                          |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"} | Hover over a web action to display the Delete icon. Click to delete the web action. |


### The Proxies Workspace

The Proxies workspace has these elements:

* A top panel with buttons to save and delete the certificate.

* A workspace to define the certificate.

#### The Top Panel

The top panel includes buttons to perform basic actions.

*Proxies Top Panel Elements*


| Element |                                           Description                                           |
|---------|-------------------------------------------------------------------------------------------------|
| Save    | Click to save a new certificate or changes to a certificate.                                    |
| Delete  | Click to delete a certificate. This button appears after a certificate is saved the first time. |


#### The Proxy Workspace

Configure the certificate with this workspace.

*Proxies Workspace Elements*

| Element  |                Description                |
|----------|-------------------------------------------|
| Name     | Type a name for the proxy.                |
| Host     | The proxy host name                       |
| Port     | The port the proxy operates on.           |
| Scheme   | Choose Auto, HTTP, or HTTPS.              |
| Username | The username to access the proxy service. |
| Password | The password to access the proxy service. |


##Add Proxies {% #Add %}

To add a new proxy:

1. Open the Proxies panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Proxies link that appears.

2. In the Proxies panel, click the +Add New button that displays at the top of this panel. A new Proxies tab workspace will display.

3. Customize the Proxies tab workspace to create the certificate.

4. Click the Save button to save the proxy. An additional Delete button option will display in the workspace top panel.

##Edit Proxies {% #Edit %}

To edit a proxy:

1. Open the Proxies panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Proxies link that appears.

2. In the Proxies panel, find then click a proxy name in the list. Its Proxies tab workspace will display.

3. Customize the Proxies tab workspace to create the certificate.

4. Click the Save button to save the proxy

##Delete Proxies {% #Delete %}

To delete a proxy:

1. Open the Proxies panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Proxies link that appears.

2. In the Proxies panel, find the proxy to delete. Hover over the entry to display the Delete ( ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.

3. Click the Delete button to delete the certificate.

##Search for Proxies {% #Search %}

To search for a proxy listed in the Proxies panel:

1. Open the Proxies panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Proxies link that appears.

2. In the Proxies panel, click the Search Here field at the top of the panel. Type a partial or complete phrase. Search results appear dynamically in the panel.

##Configure Web Actions to Use Proxies {% #Configur %}

You must configure a proxy first before using it with one or more web actions. To assign a proxy to a web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Web Actions link that appears.

2. In the Web Actions panel, find the web action to edit and then click the entry to display the web action in a tab workspace.

3. Customize the web action in the Web Actions tab workspace. In the Settings tab, select the proxy in the Proxy dropdown list.

4. Click the Save button to save the web action with the assigned certificate.

![B03-05_0402-Proxies-WebAction](B03-05_0402-Proxies-WebAction.png){width="900" style="block"}

*Proxy Dropdown List in Web Actions Workspace*

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}


