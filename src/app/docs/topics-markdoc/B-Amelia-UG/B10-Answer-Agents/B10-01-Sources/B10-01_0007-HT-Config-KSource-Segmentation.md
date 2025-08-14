# How-to: Configure Knowledge Source Segmentation

## Introduction

{% include from="B04-01_0007-Source-Segmentation-Intro.md" element-id="B04-01_0007-Source-Segmentation-Intro_snippet" /%}

The knowledge source segmentation experience follows this flow:

1. Tag Assignment: You assign tags to knowledge sources and conversations (Script blocks/tasks) based on predefined criteria. You apply tags to knowledge sources, in Amelia Answers Sources using the Properties panel. Then you set tags at the conversation level using a Digital Employees greeting flow that includes a Script block. This Script block calls the segmentationService to create a user profile and apply the tags.

2. Query Processing: Your user initiates a session. Amelia checks the user session profile's tags against the knowledge source tags you set.

3. Matching Criteria Check: Amelia Answers uses creator-specified matching criteria to filter and select the best knowledge source answer.

4. Information Delivery: Your user receives a tailored answer generated from matched knowledge sources. Tagging enhances the relevance and accuracy of the information provided.

## What You'll Learn

In this topic you'll learn how to:

* [Apply tags to knowledge sources](#Apply).
* [Set tags and matching at the conversation level](#Set).
* [Set the greeting conversation flow](#Set2).

## Requirements

Before you can set up knowledge source segmentation, you must:

* Complete Amelia Answers pre-configuration. See our [[%=B04-Amelia-Answers.Amelia Answers workspace%] Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md) for more information.

* Create or connect a knowledge source. See [[%=B04-Amelia-Answers.Sources feature%] Management](B10-01_0002-Sources-Management.md) for more information.

## Configuration

Using this tutorial, you'll learn to apply tags to a knowledge source. Then, you'll learn how to set the tags at the conversation level using a greeting flow. 

To get you started, here are possible tags that you could use:

* **Countries**: US, Canada, Sweden, and so on.

* **States**: New York, Florida, Arizona, Georgia, and so on.

* **Groups**: Marketing, Product, DevOps, Agent, Customer, and so on.

* **Channels**: Web, app, phone, in-store, invoice, and so on.

* **Brands**: Brand A, Brand B, Company A, Company B, and so on.

* **Offerings**: Premium, budget, and so on.

###Apply Tags to a Source {% #Apply %}

You'll apply tags to a knowledge source using the Properties panel in the Amelia Answers Sources workspace. These tags apply to the document level of your knowledge source.

1. From the **top left main** menu, click **Amelia Answers**.

2. On the **left-side** menu, click **Sources**. The Sources panel opens between the left-side menu and the Home page.

3. In the **Sources** panel, select a source.

   > Depending on your domain, you may have one or more knowledge sources. The Sources panel shows your sources using pagination. This means that your source might not show on the front page. Searching is a quick and easy way to find a particular source.
4. In the source editor header, click the **Properties** ( ![B04-01_0007-AA-Properties](B04-01_0007-AA-Properties.png){width="25" style="inline"}) button.

5. In the **Properties** panel, enter a **Tag**. For example, add a location or state-based tag like new_york.

   > **Note:** Tags must be in lowercase and without spaces. A tag name with a space will return an "Invalid document tag name" error. To create easily readable names, use hyphens and underscores. The maximum tag length is 64 characters.
6. Press **Enter**.

7. In the **Properties** panel, enter another **Tag**. For example, florida.

8. Press **Enter**.

   ![B04-01_0007-AA-Source-Tag](B04-01_0007-AA-Source-Tag.png){width="900" style="block"}

   *The Amelia Answers Workspace Showing the Properties Panel with the Tags Highlighted*

9. Click **Save**.

After saving, your tags appear on the Amelia Answers Home page. The Sources card lets you view all your sources and their associated tags.

![B04-01_0007-AA-Home-Page-Tags](B04-01_0007-AA-Home-Page-Tags.png){width="900" style="block"}

*The Home Page Showing the Sources Card with the Tags Highlighted*

###Set Tags and Matching at the Conversation Level {% #Set %}

Next, you'll set your tags and matching behavior using a Script block (or Script task). This includes enabling/disabling matching, selecting a match type, and applying leniency. To do this, you'll first open or create a conversation flow. Then, you'll add and configure a Script block.

#### Create or Open a Conversation Flow

To create or open a conversation flow using the Digital Employees Home tab or builder:

1. From the **top left main** menu, click **Digital Employees**.

2. On the **left-side** menu, click **Conversation Flows**.

3. From the flyout menu, click **Conversation Flows**. The Conversation Flows panel opens between the left-side menu and the Home page.

4. To create a conversation flow from scratch, go to the **Home** tab and in the **Flows** card, click the **Plus** ( ![B03-00-Dig-Empl-Home-Plus-Btn](B03-00-Dig-Empl-Home-Plus-Btn.png){width="25" style="inline"}) button.

5. Or, to add the Script block to an existing conversation, search for and open an existing conversation flow.

#### Add a Script block

To add a Script block to your conversation flow:

1. In the **Digital Employees builder**, select the block above where the new Script block must appear.

2. Click the **Plus** ( ![Plus-Btn-DEB_Blocks](Plus-Btn-DEB_Blocks.png){width="25" style="inline"}) button below the block. A popup with a list of available blocks shows.

   ![B03-04_0113-DEB-Amelia-Says-Add-Block](B03-04_0113-DEB-Amelia-Says-Add-Block.png){width="600" style="block"}

   *The Amelia Blocks Popup*

3. **Click** the Script button.

#### Configure the Script Block for Segmentation

To set your Script block for segmentation, set leniency and select the match method:

1. Click the new Script block to display its properties panel. You'll use this properties panel to make the following configuration changes.

2. With the **Settings** tab selected, **Name** your Script block.

3. In the **Script** field, enter `segmentationService.activateProfile('tag1')`.

   In the method above, replace the term `tag1` with your tag reference. For example, if you're using state-based tags, you could set tag1 as either new_york or florida based on our earlier example.

   > **Note:** Tags must be in lowercase and without spaces. A tag name with a space will return an "Invalid document tag name" error. To create easily readable names, use hyphens and underscores. The maximum tag length is 64 characters.
4. In the Script field, enter the leniency method Amelia must use:

   * `.lenient(true)`: Disables lenient search.

   * `.lenient(false)`: Enables lenient search.

5. In the Script field, enter one of the following match methods:

   * `.anyMatch()`: Selects only entries where at least one tag intersects with the tags in the profile. If you enable leniency and there are no sources with criteria that constitutes an any match, then Amelia returns sources with zero tags.

   * `.exactMatch()`: Selects only entries with tags identical to the set of tags in the profile. If you enable leniency and there are no sources with criteria that constitutes an exact match, then Amelia returns sources with zero tags.

   * `.allMatch()`: Selects only entries where tags include all tags in the profile. If you enable leniency and there are no sources with criteria that constitutes an all Match, then Amelia returns sources with zero tags.

   ![B04-01_0007-AA-Script-Block-Prop](B04-01_0007-AA-Script-Block-Prop.png){width="600" style="block"}

   *The Script Block Showing activateProfile Method, Leniency Disabled and Any Match Enabled*

6. Click Save.

###Set the Greeting Conversation Flow {% #Set2 %}

Last, you'll set your conversation flow as the greeting conversation for your domain.

1. From the **top left main** menu, click **Administration**.

2. On the **left-side** menu, click **Domains**. The Domains panel opens between the left-side menu and the Home page.

3. Search for and open a domain.

4. In the domain editor, click the **Conversations** tab.

5. Using the **Greeting Process** dropdown, select your greeting conversation flow.

6. Click **Save**.

## Next Steps

For next steps, see:

* [Amelia Answers Workspace Introduction](B04-00_0001-Amelia-Ans-Intro.md)

* [Sources Management](B10-01_0002-Sources-Management.md)

* [Segmentation Service](B03-04_0441-Segmentation-Service.md)

