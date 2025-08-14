# Amelia and Accessibility

## Introduction

People with disabilities need access to the same technology as everyone else. Web accessibility ensures that people with physical and non-physical disabilities have equal access to the web.

> **Note:** Please note that this page applies to the web interfaces customers use to interact with Amelia, also called the custom UI. Accessibility is available with the Custom UI 5.6.0+ releases

Other less actively used pages are not currently designed for widespread accessibility, for example, the administration pages used to define Amelia as well as the 3D Mind interface which shows which parts of Amelia respond within a conversation.

## What You'll Learn

In this article you'll learn about:

* [How much of the Custom UI is accessible](#How).
* [Testing Amelia for Accessibility](#Testing).
* [Screen Reader Accessibility](#Screen).
* [Keyboard Accessibility](#Keyboard).
* [Software Development Aspects](#Software).

##How much of the Custom UI is Accessible? {% #How %}

We follow [Web Content Accessibility Guidelines](http://www.w3.org/TR/WCAG20/) in terms of accessibility, currently WCAG 2.1. For developer convenience, W3 created [a checklist](https://www.w3.org/TR/2006/WD-WCAG20-20060427/appendixB.html) of success criteria which we used during implementation accessibility.

Operating systems such as Windows, iOS, and Android come equipped with accessibility modules that you can easily build into your application, while the W3C's [Accessible Rich Internet Applications Suite](http://www.w3.org/WAI/intro/aria) (ARIA) defines how applications written in Ajax, HTML, JavaScript, and similar scripting languages should provide information on user interaction to assistive technologies.

##Testing Amelia for Accessibility {% #Testing %}

To check our the application for accessibility, we used aXe library. It's automated accessibility testing library which has set out on the road to bring accessibility testing into mainstream web development. It's always possible to use any other tools which run all important accessibility test. [Web Accessibility Evaluation Tool List](https://www.w3.org/WAI/ER/tools/) contains a long list of tools which can be used for testing.

##Screen Reader Accessibility {% #Screen %}

Screen readers convert digital text into synthesized speech. They empower users to hear content and navigate with the keyboard. The technology helps people who are blind or who have low vision to use information technology with the same level of independence and privacy as anyone else. Screen readers are also used by people with certain cognitive or learning disabilities, or users who simply prefer audio content over text.

All operation systems and browsers have their own product for providing screen reading. To activate a screen reader, you have to Install needed application and follow their particular instructions for activation. We used ChromeVox (extension for Chrome) as a basic tool for testing compatibility of out application with a screen reader.

Here the list of popular screen readers for different systems:

* NVDA (Windows)
* Serotek System Access (Windows)
* Apply VoiceOver (OS X)
* ORCA (Linux)
* BRLTTY (Linux)
* Emacspeak (Linux)
* WebAnywhere (All OSs, Web browsers)
* Spoken Web (IE)
* ChromeVox (Google Chrome)
* ChromeVis (Google Chrome)
The following document describes additional messages we used to be pronounced by a screen readers: ScreenReader-messages.html

##Keyboard Accessibility {% #Keyboard %}

Keyboard accessibility is one of the most important aspects of web accessibility. Many users with motor disabilities rely on a keyboard. Blind users also typically use a keyboard for navigation. Some people have tremors which don't allow for fine muscle control. Others have little or no use of their hands. Some people simply do not have hands, whether due to a birth defect, an accident, or amputation. In addition to traditional keyboards, some users may use modified keyboards or other hardware that mimics the functionality of a keyboard.

Amelia Custom UI application provides keyboard accessibility for all element which users can interact with. We provide support of more popular set of key combinations used in a web application:

* Tab - navigate forward
* Shift + Tab - navigate backward
* Enter - replacement for 'click' mouse event
* Esc - close dialog, close menu, cancel some actions
* Arrow keys - navigate between elements (links, options etc)

Before trying this out, you should be sure keyboard accessibility is turn on in your browser. To check it, try to press "Tab" key for a few times and see if you get a focus indicator which should look like a blur around border of an elements. If you don't see it, find an instruction for turning keyboard access on in your particular browser.

##Software Development Aspects {% #Software %}

### Focusable elements

All links and form elements are focusable by default and you can use "Tab" / "Shift + Tab" keys to move focus between them. To make some other selector be able to receive focus, 'tabIndex="0"' attribute can be added to a selector. In some cases you need to disable/enable focusability of an element. In this case, tabIndex value can be switched from 0 to -1 and vice versa. It's very common situation when you don't see a focus indicator. It's usually happens because an element doesn't have any margin and the parent selector has rule "overflow: hidden";

### Clicking elements

When you define some specific behavior for click event, be sure you define 'onKeyPress' event as well to be able to get the same behavior by pressing Enter.

### ARIA

ARIA is a set of special accessibility attributes which can be added to any markup, but is especially suited to HTML. All ARIA attributes described in ARIA documentation as well as other attributes used for accessibility implementation.

* aria-hidden="false"
* aria-label=""
* aria-live="polite"; aria-live="assertive"
* aria-atomic="true/false"
* aria-relevant="additions"
* aria-checked="true/false"
* aria-selected="true/false"
* aria-invalid="false"
* aria-required="true"
* aria-labelledby="loginEmailInput"

### Roles

All interacting elements and important application units should be review in terms of used roles (role attribute with some value). All roles described in ARIA documentation as well as other attributes used for accessibility implementation.

There is a list of roles we used in the application:

* role="main"
* role="navigation"
* role="banner"
* role="complementary"
* role="presentation"
* role="searchbox"
* role="button"
* role="status"
* role="form"
* role="alert", role="alertdialog"
* role="radiogroup", role="radio"
* role="listbox", role="option"
* role="combobox"

### Screen reader messages

In a web application, it's a common practice to add some additional information which is hidden from vision but still visible for screen readers. For this purpose we use `.screen-reader-only` class which hide this sort of information in a specific way defined with CSS.

### Blue Focus Rings

The accessibility blue focus ring in the chat input area is turned off by default. To add it back, please refer to the Add Blue Focus Ring in Chat Input section on the Customize UI with config.json page.

## More Resources

{% include from="A02-00_0007-QuickStartLinks.md" element-id="D02-00_0007-QuickStartLinks_snippet" /%}
