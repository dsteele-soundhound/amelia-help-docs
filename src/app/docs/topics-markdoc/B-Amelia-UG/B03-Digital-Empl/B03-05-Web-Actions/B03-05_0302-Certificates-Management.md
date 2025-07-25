# Certificates Management

## Introduction

To use the Certificates workspace, you must understand its features and where to find them. Web Actions use a web interface to configure connections to third-party resources. These resources require secure connections. Certificates provide a secure way to use third-party data in a conversation flow. Digital Employees builderBackend blocks and BPN Consume Web Service tasks use certificates to pass data. See the [Certificates Introduction](B03-05_0301-Certificates-Intro.md) topic for details.

## Access the Certificates Workspace

{% include from="B03-05_0301-CertificatesAccess.md" element-id="B03-05_0301-CertificatesAccess_snippet" /%}

![B03-05_0302-Certs-Workspace](B03-05_0302-Certs-Workspace.png){width="900" style="block"}

*The Certificates Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Certificates workspace](#Use).
* [Add Certificates](#Add).
* [Edit Certificates](#Edit).
* [Delete Certificates](#Delete).
* [Search for Certificates](#Search).
* [Configure Web Actions to use Certificates](#Configur).

##Use the Certificates Workspace {% #Use %}

The Certificates workspace includes tools to create and manage web actions.

### The Certificates Panel

This panel appears between the left edge navigation links and the Digital Employees Home workspace. The panel displays a list of web actions.

To toggle open the Certificates panel, click the Web Actions icon link on the left edge navigation links. Then click the Certificates link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Certificates panel.

![B03-05_0302-Certs-Panel](B03-05_0302-Certs-Panel.png){width="400" style="block"}

*The Certificates Panel*

*Certificates Panel Elements*

| Element                                                                          | Description                                                                                                                                                                                                                                                                               |
|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| +Add New                                                                         | Click to add a new web action from an external source: * Upload Content Pack: * Import from Open API: Import API resource URL documentation in OpenAPI format. This generates Web Actions, Authentications, and other artifacts. Swagger's OpenAPI specification is online at swagger.io. |
| ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"} | Hover over a web action to display the Delete icon. Click to delete the web action.                                                                                                                                                                                                       |


### The Certificates Workspace

The Certificates workspace has these elements:

* A top panel with buttons to save and delete the certificate.
* A workspace to define the certificate.

#### The Top Panel

The top panel includes buttons to perform basic actions.

*Certificates Top Panel Elements*


| Element |                                           Description                                           |
|---------|-------------------------------------------------------------------------------------------------|
| Save    | Click to save a new certificate or changes to a certificate.                                    |
| Delete  | Click to delete a certificate. This button appears after a certificate is saved the first time. |


#### The Certificate Workspace

Configure the certificate with this workspace.

*Certificates Workspace Elements*


| Element         | Description                                                                                                                                                                                                     |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Type a name for the certificate.                                                                                                                                                                                |
| Verify Hostname | Select Yes or No. The default is Yes. We would generally recommend not disabling this functionality if possible. Disabling this check increases exposure to attacks, such as a MitM (Man-in-the-middle) attack. |
| **Truststore**  |                                                                                                                                                                                                                 |
| Type            | Select the type of Truststore file: JKS or PKCS 12.                                                                                                                                                             |
| File            | Click the Upload File button to upload the Truststore file in the appropriate file type.                                                                                                                        |
| Password        | Type the password used with the Truststore file.                                                                                                                                                                |
| **Keystore**    |                                                                                                                                                                                                                 |
| Type            | Select the Keystore type, JKS or PKCS 12.                                                                                                                                                                       |
| File            | Click the Upload File button to upload the Keystore file in the appropriate file type.                                                                                                                          |
| Password        | Type the password used with the Keystore file.                                                                                                                                                                  |


##Add Certificates {% #Add %}

To add a new web action:

1. Open the Certificates panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Certificates link that appears.
2. In the Certificates panel, click the +Add New button that displays at the top of this panel. A new Certificates tab workspace will display.
3. Customize the Certificates tab workspace to create the certificate.
4. Click the Save button to save the certificate. An additional Delete button option will display in the workspace top panel.

##Edit Certificates {% #Edit %}

To edit an existing certificate:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Certificates link that appears.
2. In the Certificates panel, find the web action to edit and then click the entry to display the web action in a tab workspace.
3. Customize the web action in the Certificates tab workspace.
4. Click the Save button to save the certificate.

##Delete Certificates {% #Delete %}

To delete a web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Certificates link that appears.
2. In the Certificates panel, find the web action to delete. Hover over the entry to display the Delete ( ![Delete-Btn-DEB_Toolbar](Delete-Btn-DEB_Toolbar.png){width="25" style="inline"}) button.
3. Click the Delete button to delete the certificate.

##Search for Certificates {% #Search %}

To search for a web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Certificates link that appears.
2. In the Certificates panel, click the Search Here field at the top of the panel. Type a partial or complete phrase. Search results appear dynamically in the panel.

##Configure Web Actions to Use Certificates {% #Configur %}

You must configure a certificate first before using it with one or more web actions. To assign a certificate to a web action:

1. Open the Web Actions panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Web Actions icon link on the left edge then click the Web Actions link that appears.
2. In the Web Actions panel, find the web action to edit and then click the entry to display the web action in a tab workspace.
3. Customize the web action in the Web Actions tab workspace. In the Settings tab, select the certificate in the Certificate dropdown list.
4. Click the Save button to save the web action with the assigned certificate.

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}
