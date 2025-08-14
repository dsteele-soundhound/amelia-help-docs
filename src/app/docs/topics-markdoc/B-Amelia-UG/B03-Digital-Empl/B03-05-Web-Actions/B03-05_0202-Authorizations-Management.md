

# Authorizations Management

## Introduction

{% include from="B03-05_0202-Authorization-Intro1.md" element-id="B03-05_0202-Authorization-Intro1_snippet" /%} {% include from="B03-05_0202-Authorization-Intro2.md" element-id="B03-05_0202-Authorization-Intro2_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Access the Authorizations panel](#Access).
* [Create an authorization](#Add).
* [Create a JSON Web Token for OAuth 2.0 client authorization](#JWT).
* [Search for an authorization](#Search).
* [Edit an authorization](#Edit).
* [Delete an authorization](#Delete).

## Access the Authorizations Panel {% #Access %}

To access the Authorizations panel:

1. From the **top left main** menu, click Digital Employees.
2. On the **left-side** menu, click **Web Actions**.
3. On the **flyout** menu, click **Authorizations**.

The Authorizations panel shows between the left-side menu and the Home tab.

![B03-05_0202-Authorizations-Panel](B03-05_0202-Authorizations-Panel.png){width="900" style="block"}

*The Workspace with Authorization Panel Highlighted*

Click the Collapse ( ![Close-Panel-Btn-DEB_Left](Close-Panel-Btn-DEB_Left.png){width="25" style="inline"}) button to close and hide the Authorizations panel.

Open these dropdown to learn more about what you'll see in the Authorizations panel.

<chapter title="Default Authorizations Pane" collapsible="true" level="5">

![B03-05_0202-Authorizations-Panel1](B03-05_0202-Authorizations-Panel1.png){width="400" style="block"}

*The Default Authorizations Panel*

*Authorizations Panel Elements*


|                                                         Element                                                         |                                                                                                         Description                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| + Add New button                                                                                                        | Click to create a new authorization. On button-press, a New Authorization tab opens after the Home page.                                                                                                                    |
| Search Here                                                                                                             | Click and then enter a name or phrase to find one or more authorizations. Click ![Delete_X-Btn-Amelia_Answers](Delete_X-Btn-Amelia_Answers.png){width="25" style="inline"} to clear the search and show all authorizations. |
| Delete ( ![Delete1-Btn-DEB_Inside_Properties](Delete1-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button | Displays on hover-over of an authorization only. Click to delete the associated authorization.                                                                                                                              |


</chapter>

##Add or Create an Authorization {% #Add %}

To create an authorization:

1. In the Authorizations panel, click the **+ Add New** button. A New Authorization page opens after the Home page.

2. Give your authorization **a Name**.

3. Complete remaining settings as needed. Open these dropdowns to learn about the elements you'll see when adding authorizations.

<chapter title="Basic New Authorization" collapsible="true" level="5">

![auth_001.gif](auth_001.gif)

*New Authorization With Basic Type Selected*

*New Authorization Elements: Basic New Authorization*

|    Element    | Default |                                                                                              Description                                                                                               |
|---------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Save button   |         | Saves your new authorization settings. After saving, the page tab renames, using the name you applied to your authorization. Also, a Delete button appears alongside Save.                             |
| Delete button |         | Shows when you select an existing authorization, or when you save an authorization. Clicking delete triggers the Delete Confirmation modal. Here you can opt to continue the delete process or cancel. |
| Name          |         | Sets the name of your authorization. Give your authorization a meaningful name that's easy to find and reference as your instance scales.                                                              |
| Type          | Basic   | Determines the type of authorization you're creating. Options include: {% include from="B03-05_0202-Authorization-Types.md" element-id="B03-05_0202-Authorization-Types_snippet" /%}              |
| Username      |         | Enter the username to use for the authorization.                                                                                                                                                       |
| Password      |         | Enter the password to use for the authorization.                                                                                                                                                       |

</chapter>

<chapter title="Form-based New Authorization" collapsible="true" level="5">

![B03-05_0202-Form-Based-Authorization](B03-05_0202-Form-Based-Authorization.png){width="600" style="block"}

*New Authorization With Form-based Type Selected*

{% include from="B03-05_0202-Unique-Fields-Tip.md" element-id="B03-05_0202-Unique-Fields-Tip_snippet" /%}

*New Authorization Elements: Form-based New Authorization*

| Element                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Username                                                                          | The username to be used by the username field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Password                                                                          | The password to be used by the password field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Username Field Name                                                               | The name of the username field expected by the endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Password Field Name                                                               | The name of the password field expected by the endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Login URL                                                                         | The URL to be used for login.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Login Method                                                                      | Select one of the following methods from the dropdown: <ul><li><strong>GET</strong>: Used to request data (not modify). GET requests can be cached, have length restrictions, stay in browser history and can be bookmarked. Avoid using GET requests with sensitive data.</li><li><strong>POST</strong>: Used to send data to create/update a resource. For example, for non-idempotent requests that create a record, such as a session. POST requests aren't cached, have no length restrictions, don't stay in browser history and can't be bookmarked.</li><li><strong>HEAD</strong>: This method is like the GET method but with a difference. With this method, the server returns the headers without the response body.</li><li><strong>PUT</strong>: Used to send data to create/update a resource. The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request many times always produces the same result. Whereas, calling a POST request repeatedly creates the same resource many times.</li><li><strong>PATCH</strong>: Used to apply partial modifications to a resource.</li><li><strong>DELETE</strong>: Used to delete the specified resource.</li><li><strong>OPTIONS</strong>: Used to describe the communication options for the target resource.</li><li><strong>TRACE</strong>: Used to run a message loop-back test, testing the path for the target resource. This is useful for debugging purposes.</li></ul> |
| Params                                                                            | Parameters used to identify an application and define the permissions you'll grant it. For example, "redirect_uri."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| + Add Param button                                                                | Clicking this button adds a new key-value pair record.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Key                                                                               | A unique identifier in the key-value pair.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Value                                                                             | The variable value in the key-value pair.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Delete ( ![Delete-Btn-DEB](Delete-Btn-DEB.png){width="25" style="inline"}) button | Removes the associated key-value pair record. Take care when deleting key-value pairs as there is no confirmation modal. Deleting a key-value pair can't be undone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


</chapter>

<chapter title="API Key New Authorization" collapsible="true" level="5">

![B03-05_0202-API-Key-Authorization](B03-05_0202-API-Key-Authorization.png){width="600" style="block"}

*New Authorization With API Key Type Selected*

{% include from="B03-05_0202-Unique-Fields-Tip.md" element-id="B03-05_0202-Unique-Fields-Tip_snippet" /%}

*New Authorization Elements: API Key New Authorization*

| Element | Description                                                                                                                                                                                                                    |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key     | The key to be sent to the endpoint.                                                                                                                                                                                            |
| Value   | The value associated with the key to be sent to the endpoint.                                                                                                                                                                  |
| Add To  | Select whether to add to: <ul><li><strong>Header</strong>: Select if the API authorization is sent as a header.</li><li><strong>Query Params</strong>: Select if the API authorization is sent as a query parameter.</li></ul> |


</chapter>

<chapter title="OAuth 2.0 New Authorization" collapsible="true" level="5">

![B03-05_0202-OAuth-Authorizations](B03-05_0202-OAuth-Authorizations.png){width="600" style="block"}

*New Authorization With OAuth 2.0 Type Selected*

*New Authorization Elements: OAuth 2.0 New Authorization*

| Element          | Description                                                                                                                                                                                               |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Access Token URL | The OAuth 2.0 endpoint used to request a token.                                                                                                                                                           |
| Grant Type       | Select one of the following from the dropdown:  <ul><li><strong>Client Credentials</strong>: Select if using client credentials.</li><li><strong>Password</strong>: Select if using a password.</li></ul> |
| Client ID        | If using Client Credentials. The client's assigned ID.                                                                                                                                                    |
| Client Secret    | If using Client Credentials. The secret key provided for OAuth access.                                                                                                                                    |
| Scope            | Optional. Returned as part of the access token properties.                                                                                                                                                |
| Username         | If using Password. The username to be sent to the endpoint.                                                                                                                                               |
| Password         | If using Password. The password to be sent to the endpoint.                                                                                                                                               |


</chapter>

<chapter title="OAuth 2.0 JWT New Authorization" collapsible="true" level="5">

![B03-05_0202-OAuth2_0JWT-Authorization](B03-05_0202-OAuth2_0JWT-Authorization.png){width="600" style="block"}

*New Authorization With OAuth 2.0 Type Selected*

*New Authorization Elements: OAuth 2.0 JWT New Authorization*

| Element     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Algorithm   |         | Using the dropdown, select from the following:<ul><li><strong>RS256</strong>: Uses SHA-256, which produces a 256-bit hash and provides 128 bits of security.</li><li><strong>RS384</strong>: Uses SHA-384, which produces a 48-byte digest value and is described in <a href="https://datatracker.ietf.org/doc/html/rfc7518">RFC7518</a>.</li><li><strong>RS512</strong>: Uses SHA-512, which produces a 64-byte digest value and is described in <a href="https://datatracker.ietf.org/doc/html/rfc7518">RFC7518</a>.</li></ul> |
| Issuer      |         | The unique identifier for the entity that issued the JWT (JSON Web Token).                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Subject     |         | Set as the "client_id" of the OAuth client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Audience    |         | A value that identifies the authorization server as an intended audience. Typically, this is the endpoint URL of the authorization server.                                                                                                                                                                                                                                                                                                                                                                                       |
| Private Key |         | The OAuth client in PEM (Privacy Enhanced Mail) format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |


</chapter>

4. Click **Save**.

##Create a JSON Web Token for OAuth 2.0 {% #JWT %}

You can use the OAuth 2.0 JWT authorization type with any external system that uses JWT authorization.

A JWT encodes security tokens in JSON format. It lets you share identity and security information between different security domains. Identity Providers issue these tokens, and a Relying Party uses them for security.

OAuth 2.0 is a way to authenticate requests to a resource using an access token. Third-party clients get access tokens from an authorization server with the approval of the resource owner. In OAuth, the authorization grant represents the resource owner's authorization. A client uses the grant to get an access token. Different authorization grant types support different client types and user experiences. OAuth also lets you create new grant types to support more clients or connect OAuth with other trust frameworks. Lastly, OAuth offers more authentication mechanisms for clients to use when interacting with the authorization server.

This is an implementation of JWT for OAuth 2.0 client authentication as outlined in the [JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://datatracker.ietf.org/doc/html/rfc7523).

To implement a JWT for OAuth 2.0 client authentication:

1. In the **Authorizations** panel, click the **+ Add New** button. A New Authorization page opens after the Home page.

2. Give your authorization **a Name**.

3. Set the **Type** as **OAuth 2.0 JWT**.

   ![B03-05_0202-OAuth2_0JWT-Authorization](B03-05_0202-OAuth2_0JWT-Authorization.png){width="600" style="block"}

   *New Authorization with OAuth 2.0 JWT Selected*

4. From the **Algorithm** dropdown, select **RS256**, **RS384**, or **RS512**.

   * **RS256**: Uses SHA-256, which produces a 256-bit hash and provides 128 bits of security.

   * **RS384**: Uses SHA-384, which produces a 48-byte digest value and is described in [RFC7518](https://datatracker.ietf.org/doc/html/rfc7518).

   * **RS512**: Uses SHA-512, which produces a 64-byte digest value and is described in [RFC7518](https://datatracker.ietf.org/doc/html/rfc7518).

5. Set the **Issuer** as the unique identifier for the entity that issued the JWT.

6. Set the **Subject** as the "client_id" of the OAuth client.

7. Set the **Audience**. A value that identifies the authorization server as an intended audience. Typically, this is the endpoint URL of the authorization server.

8. Enter the **Private Key** of the OAuth client in PEM (Privacy Enhanced Mail) format.

9. Click **Save**.

##Search for an Authorization {% #Search %}

As you develop your Amelia instance, you'll add to your authorizations. The Authorizations panel shows your authorizations using pagination. This means that a particular authorization might not show on the front page. Searching is a quick and easy way to find an authorization.

To search for an authorization:

1. In the **Authorizations** panel, position your cursor in the Search Here field.

2. Enter a search term. Your search term can include letters, numbers, and special characters.

Amelia calculates search results from the first character entered. If there are no matches, "No **Authorizations** Found" shows.

##Edit an Authorization {% #Edit %}

Things change, and from time-to-time you may need to update your authorizations.

To edit or update an authorization.

1. In the **Authorizations** panel, search for and select an existing authorization. A new tab opens after the Home tab, named with the same name as your selected authorization.

2. Edit the authorization's settings as needed.

3. Click Save.

##Delete an Authorization {% #Delete %}

Removing an authorization is simple. You can delete an authorization direct from the Authorizations panel or from inside it's page tab.

### Delete an Authorization Direct from the Authorizations Panel

To delete an authorization:

1. In the **Authorizations** panel, search for an existing authorization.

2. In the search results, hover over a specific authorization. You'll see a Delete ( ![Delete1-Btn-DEB_Inside_Properties](Delete1-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button to the side of the authorization.

3. Click the **Delete** ( ![Delete1-Btn-DEB_Inside_Properties](Delete1-Btn-DEB_Inside_Properties.png){width="25" style="inline"}) button.

4. At the Delete Confirmation modal, click **Delete**. Or, to stop the process and return to the Authorizations panel, click Cancel.

### Delete an Authorization from the Authorizations Page Tab

To delete an authorization:

1. In the **Authorizations** panel, search for and select an existing authorization. A new tab opens after the Home tab, named with the same name as your selected authorization.
2. Inside the authorization's header area, click Delete.
3. At the Delete Confirmation modal, click **Delete**. Or, to stop the process and return to the authorization's settings, click Cancel.

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}