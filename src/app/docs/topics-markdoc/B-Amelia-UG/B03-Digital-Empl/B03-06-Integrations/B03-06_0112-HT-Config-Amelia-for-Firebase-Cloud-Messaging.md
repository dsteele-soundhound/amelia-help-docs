# How-to: Configure Amelia for Firebase Cloud Messaging

## Introduction

The Firebase Cloud Messaging (FCM) Gateway sends push notification messages to an Amelia mobile app. The gateway pushes messages using Amelia's Push Notification API.

To push notifications, you must first create a Firebase app. Then write down the FCM Token and FCM Project ID. You'll also need to save your service account credentials. Then you use your token and project ID to register a mobile app with the Amelia gateway.

## What You'll Learn

In this topic you'll learn about:

* [Requirements to install a Firebase gateway](#FirebaseRequirements).

* [Set Up Firebase Cloud Messaging for mobile apps](#FirebaseMobileApps).

* [Using the Firebase gateway with a Custom UI](#CustomUIFirebase).

* [Adding a Firebase gateway to Amelia](#AddFirebase).

* [Configuring the Firebase gateway in Amelia](#ConfigureFirebase).



## Requirements for a Firebase Gateway {% #FirebaseRequirements %}

For this gateway configuration, you'll need the following information:

* The Firebase FCM Project ID.

* The Firebase FCM Token.

* Service Account Credentials (JSON format).


## Set Up Firebase Cloud Messaging with a Custom UI Embedded into a WebView {% #FirebaseMobileApps %}

For mobile apps to interact with Amelia using Firebase, first set up Firebase. Follow the instructions in the official documentation. This will set up Firebase in your mobile app.

* [Firebase Cloud Messaging Introduction](https://firebase.google.com/docs/cloud-messaging).
* [Set up on Apple Platforms](https://firebase.google.com/docs/cloud-messaging/ios/client).
* [Set up on Android Platforms](https://firebase.google.com/docs/cloud-messaging/android/client).


## Using Firebase with a Custom UI Embedded into a WebView {% #CustomUIFirebase %}

If you use a custom UI with Amelia, embedded into a WebView, there is an extra step required to work with the Firebase gateway. For information about the custom UI, see the [Custom UI Guide](B01-04_0303-UI-Bundles-Configuration.md) for details.

Once your Firebase app is set up, you'll need to send your FCM Token and FCM Project ID to Amelia as `firebaseDeviceToken` and `firebaseProjectId` initial conversation attributes. Use this pattern, where `<AmeliaInstance>` the base URL of your Amelia instance and `<YourDomain>` is the name of your Amelia domain.

`https://<AmeliaInstance>/Amelia/ui/ssv/3/chat?domain=<YourDomain>&attrib_firebaseDeviceToken=<FIREBASE_DEVICE_TOKEN>&attrib_firebaseProjectId=<FIREBASE_PROJECT_ID>`


## Add a Firebase Gateway to Amelia {% #AddFirebase %}

To do this:

1. From the **top left main** menu, click Digital Employees.

2. On the **left-side** menu, click **Integrations**. The Gateway Integrations panel opens between the left-side menu and the Home page.

3. In the **Gateway Integrations** panel, click **+ Add New**.

4. From the **Conversation Gateways** group, click **Firebase**. A New Integration Gateway tab panel displays on the right side of the workspace.

5. Configure the tab panel with your Firebase information. Then click the **Save button**.


## Configure the Firebase Gateway {% #ConfigureFirebase %}

To connect %General.%General.Amelia.application%.application% and your **Firebase** account, configure the Basic tab.

![B03-06_0112-Firebase-BasicTab.png](B03-06_0112-Firebase-BasicTab.png){width="800"}

*The New Firebase Integration Showing Basic Tab*

*The Basic Tab Settings*

| Setting                     | Description                                                                                                                                                  |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                        | Type a unique descriptive name for this gateway.                                                                                                             |
| Domain                      | Select an %General.%General.Amelia.application%.application% domain to use with this gateway.                                                                                      |
| Gateway Service             | Select the %General.%General.Amelia.application%.application% gateway service host to use.                                                                                         |
| Deploy                      | Toggle Yes to deploy the gateway or No to disable the gateway. Changes take effect when the Save button is clicked. The default is No.                       |
| Configuration Locale        | Select the locale language for all canned messages.                                                                                                          |
| Firebase Project ID         | Type your Firebase Project ID.                                                                                                                               |
| Service Account Credentials | Type or copy/paste the Firebase service account credentials. Must be in JSON format. Download the file from the Firebase admin console.                      |
| Default Token TTL Days      | Set the default time to live (in days) for a user device token stored on the server. This value can be overridden by the application registering the tokens. |
| Enable Push Notifications   | Toggle Yes to enable push notifications or No to disable push notifications. The default is No.                                                              |





## More Resources

{% include from="B03-06_0105-GatewayMoreLinks.md" element-id="B03-06_0105-GatewayMoreLinks_snippet" /%}