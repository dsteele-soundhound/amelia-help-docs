# Web Actions Introduction

## Introduction

Web Actions are reusable connections to third-party resources. You can use them in the Digital Employees builderBackend block or the BPN Consume Web Service task.

Imagine you want to display a map with office locations near the user. In a conversation, the user says their address. A web action configures the connection to Google Maps, the API URL and login. The Backend block sends the user address utterance to the web action. A variable captures the return result of the web action. Then a Script block uses the return variable to display a Google Map snippet in the conversation.

Web Actions allow you to integrate third-party resources into conversation flows. They use a web interface instead of Camel code used by Amelia's integration service. You can create connections manually. Or upload a JSON file with the configuration details.

You can create Certificates, Authorizations, and Proxies individually, as needed. Then use them to configure one or more web actions.

## What You'll Learn

In this topic you'll learn about how to access the Web Actions panel:

## Access the Web Actions Panel

{% include from="B03-05_0101-WebActionAccess.md" element-id="B03-05_0101-WebActionAccess_snippet" /%}

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}