# Themes Configuration

## Introduction

To use the Themes workspace, you must understand its features and where to find them. The Themes feature starts with the Light theme and Dark theme. You can adapt one of these themes. Or create your own theme to define a unique look with colors and images that match your brand identity. For example, you can change avatar image or exclude it.

The [Themes Introduction](B01-04_0401-Themes-Intro.md) topic provides basic information about themes.

##Access the Themes Workspace {% #Access %}

{% include from="B01-04_0401-TemplatesAccess.md" element-id="B01-04_0401-TemplatesAccess_snippet" /%}

![B01-04_0401-Themes-Workspace](B01-04_0401-Themes-Workspace.png){width="900" style="block"}

*The Themes Panel with Light Mode Workspace*

## What You'll Learn

In this topic you'll learn how to:

* [Use the Themes Workspace](#Access).
* [Add a Theme](#Add).
* [Edit a Theme](#Edit).
* [Search for a Theme](#Search).
* [Delete a Theme](#Delete).
* [Deploy a Theme](#Deploy).
* [Activate a Theme for a Virtual Host](#Activa).

## The Themes Workspace {id="the-themes-workspace_2"}

The Themes workspace includes tools to create and edit themes used by Amelia pages.

### The Themes Panel

This panel appears between the left edge navigation links and the Home or Themes tab workspace. The panel displays a list of themes.

To toggle open the Themes panel, click the UI link on the left edge navigation links. Then click the Themes link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Themes panel.

![B01-04_0401-Themes-Panel](B01-04_0401-Themes-Panel.png){width="400" style="block"}

*The Themes Panel*

### The Themes Workspace

The Themes workspace has these elements:

* A top panel with buttons to save the theme.

* A workspace to define the theme with Basic and Advanced options.

#### The Top Panel

The top panel includes buttons to perform basic actions.

*Themes Top Panel Elements*

| Element |                   Description                    |
|---------|--------------------------------------------------|
| Save    | Click to save a new theme or changes to a theme. |


#### The Themes Workspace {id="the-themes-workspace_1"}

This workspace includes a Basic tab and Advanced tab with theme configuration options.

<chapter title="The Basic Tab" collapsible="true" level="5">
![B01-04_0401-Themes-Basic](B01-04_0401-Themes-Basic.png){width="900" style="block"}

*The Themes Basic Tab Workspace*

*The Basic Tab Elements*

|     Element      |                                                                                                                                                                                                                       Description                                                                                                                                                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code             | Type a unique identifier for the theme that is URL and JSON safe.                                                                                                                                                                                                                                                                                                                                                                                       |
| Name             | Type a unique name that will appear to users that is distinct, concise, and understandable for users.                                                                                                                                                                                                                                                                                                                                                   |
| Logo Image       | Click the upload button to upload a logo image that appears in the upper left banner. To remove the custom avatar and use the default image, click the Remove Custom Avatar Image checkbox. Uploading a new image causes the existing image to be replaced and discarded.                                                                                                                                                                               |
| Avatar Image     | Click the upload button to upload a small avatar image to replace the Amelia avatar image. A fallback small image of Amelia is used when this image is not configured. The default image is 60x60 pixels. To remove the custom avatar and use the default image, click the Remove Custom Avatar Image checkbox. Uploading a new image causes the existing image to be replaced and discarded.                                                           |
| Background Image | Click the upload button to upload a large avatar image that represents the background when the avatar is not used. A fallback image of Amelia is used when this image is not configured. The default image is 2030 pixels wide and 2316 pixels tall. To remove the custom background avatar and use the default image, click the Remove Custom Background Image checkbox. Uploading a new image causes the existing image to be replaced and discarded. |
| Favicon 32x32    | Click the upload button to upload a logo image that appears in the upper left banner. To remove the custom favicon and use the default image, click the Remove Custom Favicon 32x32 checkbox. Uploading a new image causes the existing image to be replaced and discarded.                                                                                                                                                                             |



</chapter>


<chapter title="The Advanced Tab" collapsible="true" level="5">

![B01-04_0401-Themes-Advanced](B01-04_0401-Themes-Advanced.png){width="900" style="block"}

*The Themes Advanced Tab Workspace*

*The Advanced Tab Elements*

|     Element      |                                                                                                                                                                                                                                                                                  Description                                                                                                                                                                                                                                                                                   |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Your Item | Click the dropdown list to display additional theme settings. Click a setting and the Browse button to choose a setting. * Application Name: Name of the application. Displayed in the header next to the logo. * Primary Color: The primary hex color value associated with this theme. * Secondary Color: The secondary hex color value associated with this theme. * Use Gradient Background: A flag to indicate if the background should be constructed as a gradient. Default is false. * Color Scheme: A string indicating the color scheme to choose. Default is light. |



</chapter>

##Add a Theme {% #Add %}

To add a new theme:

1. Open the Themes panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the **UI** button on the left edge then click the **Themes** link that appears.

2. In the Themes panel, click the **+Add New** button that displays at the top of this panel. A new Themes tab workspace will display.

3. Customize the Themes tab workspace to create the theme.

4. Click the Save button to save the theme.

##Edit a Theme {% #Edit %}

To edit a theme:

1. Open the Themes panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the **UI** button on the left edge then click the **Themes** link that appears.

2. In the Themes panel, find then click a theme name in the list. Its Themes tab workspace will display.

3. Customize the Themes tab workspace to edit the theme.

4. Click the Save button to save the theme

##Search for a Theme {% #Search %}

To search for a theme listed in the Themes panel:

1. Open the Themes panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the **UI** button on the left edge then click the **Themes** link that appears.

2. In the Themes panel, click the Search Here field at the top of the panel. Type a partial or complete phrase. Search results appear dynamically in the panel.

##Delete a Theme {% #Delete %}

Currently it is not possible to delete themes.

##Deploy a Theme {% #Deploy %}

To enable and deploy a theme for all Amelia pages:
{% include from="A02-00_0009-LightDarkAccess.md" element-id="A02-00_0009-LightDarkAccess_snippet" /%}

## Activate a Theme for a Virtual Host {% #Activa %}

You must configure a theme first before using it with one or more virtual hosts. To activate a theme:

To edit or create a theme:

1. From the **top left main** menu, click **Administration**.

2. On the **left-side** menu, click **Security**.

3. On the **flyout** menu, click **Virtual Hosts**. The **Themes** panel shows between the left-side menu and the Home tab.

4. Click an entry in the Virtual Hosts panel to display its tab workspace.

5. In the **Basic tab**, click the **Available Themes** dropdown list to select the appropriate theme.

6. Click the Save button at the top of the Virtual Hosts tab workspace.

## More Resources

For more information, see:

* [Themes Introduction](B01-04_0401-Themes-Intro.md).
* [Light and Dark Mode](A02-00_0009-Light-Dark-Mode.md).

