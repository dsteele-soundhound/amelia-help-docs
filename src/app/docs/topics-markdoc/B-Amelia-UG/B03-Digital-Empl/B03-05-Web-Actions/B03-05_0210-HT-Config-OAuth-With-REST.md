# How-to: Configure OAuth With REST Gateway

{% include from="Page-Under-Editorial-Review-Note.md" element-id="Page-Under-Editorial-Review-Note_snippet" /%}

## Introduction

Amelia now offers the convenience of using OAuth to log in to the REST gateway.

REST gateway is a way to access some Amelia functions without actually being in  Amelia. For example, uploading/downloading resources, passing Form/Integration messages, publishing debug messages to your client code, and closing conversations.

REST gateway is also a way for client applications to connect to Amelia and hold conversations using simple REST commands, webhook URLs or polling.

Using OAuth to log into the REST gateway has a few benefits:

* **Granular Authorization**: With OAuth, you can control your authorization more precisely. OAuth tokens can provide a high level of granular authorization control, giving you the power you need.
* **Expiration**: OAuth tokens must be set to expire, or have an expiration length. This layer of security ensures your data and resources are always protected.
* **Security Breach Reduction**: OAuth allows apps to access user accounts without using passwords, helping prevent security breaches.

Before you can use OAuth to log into the REST gateway, you must update a few settings in Amelia's application.properties. You'll find the Expires In, AZP and Username information as part of your JWTs (JSON Web Token's) payload. To learn how to access and find this information, see [Map the JWT Payload](#Map) below.

## What You'll Learn

In this topic you'll learn to configure the application.properties file to enable OAuth for logging into the REST gateway.

## Configuration

> Because the REST API is live you must take care when updating configuration settings. Based on your specific credentials, you may have access to a range of permissions. For example, deleting a domain. Acting on or changing these permissions can have far-reaching affect in your Amelia instance. {style="warning"}

> To view Amelia's REST Gateway documentation, you'll append AmeliaRest/docs/ to the end of any Amelia instance URL. So, for example, using https://[your instance].amelia.com/ you'll add AmeliaRest/docs/ as https://[your instance].amelia.com/AmeliaRest/docs/. This takes you to a landing page where you can access the Swagger UI and documentation in HTML or PDF.

###Map the JWT Payload {% #Map %}

Use [jwt.io](https://jwt.io/) to get the payload data from your token. Once you have this data, you can map the standard claims as follows:
```
{
    "iss": "https://localhost",
    "sub": "admin@ipsoft.com",
    "aud": "rest-gateway",
    "azp": "mygroup",
    "exp": 1720814924,
    "nbf": 1720814024,
    "iat": 1720814024,
    "jti": "f6fef667-afbf-424b-be13-0458f4fcc2fd"
}
```
*Figure 1. JWT Payload Example*

| Standard Claims |                                                                                       Description                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| "iss"           | The site that issued the token.                                                                                                                                                         |
| "sub"           | The entity granted the token. Or, the username of the account using this. You'll configure the amelia.rest.server.oauth.configurations[0].username in the applications.properties file. |
| "aud"           | The application(s) this token is good for. The "aud" always shows as "rest-gateway".                                                                                                    |
| "azp"           | The client group this token is for. You'll configure the amelia.rest.server.oauth.configurations[0].azp in the application.properties file.                                             |
| "exp"           | When the JWT token will expire.                                                                                                                                                         |
| "nbf"           | When you created and issued the JWT.                                                                                                                                                    |
| "iat"           | When you created and issued the JWT.                                                                                                                                                    |
| "jti"           | The unique identifier for that token.                                                                                                                                                   |
[JWT Standard Claims]

### Set the JWT Properties

To update these settings, you'll log a ticket with Product Support. For information on how to log this ticket, please see [How-to: Request an Amelia Domain Modification](A02-00_0053-HT-Req-Amelia-Domain-Modification.md). The Create Authentication Policy setting applies in this instance.

Amelia needs the following information to expedite your request:

> Changes to these two properties invalidate all tokens issued under the old configuration. {style="warning"}

> Make both settings instance-specific. But ensure that each application server in the instance has the same value. {style="warning"}

|                 Property                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amelia.rest.server.oauth.jwt-key-alias   | The REST gateway JWT key alias. This is currently unused. You'll need this if or when you begin storing these in the keystore rather than generating them on start-up. This is a required setting.                                                                                                                                                                                                                                      |
| amelia.rest.server.oauth.jwt-signing-key | The REST gateway JWT signing key. The underlying string number must have a byte size of more than 256 bits, or the REST gateway won't start. We use this method to verify that an encrypted token is issued by  Amelia. Amelia strongly recommends encrypting this key in a production-type environment. This is a required setting. <warning>Changing this value and restarting the system sets all issued tokens as invalid.</warning> |
[JWT Properties]

### Set the OAuth Configuration Settings

This is how Amelia configures to have a system. You can set up as many OAuth configurations as you need. Currently, Amelia only supports one type of OAuth, which is client_credentials.

To update these settings, you'll log a ticket with Product Support. For information on how to log this ticket, please see [How-to: Request an Amelia Domain Modification](A02-00_0053-HT-Req-Amelia-Domain-Modification.md). The Create Authentication Policy setting applies in this instance.

Amelia needs the following information to expedite your request:

|                                  Configuration Setting                                   | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amelia.rest.server.oauth.configurations[0].client-id=docker-rest-oauth-client-id         |         | This is the client ID that the token requester must present. This ID must be unique among all configurations.                                                                                                                                                                                                                                                                                                                                                          |
| amelia.rest.server.oauth.configurations[0].client-secret=docker-rest-oauth-client-secret |         | This is the secret the token requester must present. Amelia strongly recommends encrypting this client secret in a production-type environment.                                                                                                                                                                                                                                                                                                                        |
| amelia.rest.server.oauth.configurations[0].expires-in                                    | 3600    | This sets how long the token must last or the token's lifespan, in seconds. <tip>For example, 3600 sets the token to last for an hour. At the end of that hour, the token expires and you must get yourself a new token.</tip> This is a required setting.                                                                                                                                                                                                             |
| amelia.rest.server.oauth.configurations[0].azp                                           |         | These are the allowed groups or authorized parties associated with the token. <tip>For example, this is where you'll set "HR Department", giving this team authorization. Validation takes place against this setting. So, if set and the system fails to see the authorized party, authentication fails.</tip> The "azp" must be unique among all configurations. <warning>Changing this value and restarting the system sets all issued tokens as invalid.</warning> |
| amelia.rest.server.oauth.configurations[0].username                                      |         | The internal password of the Amelia user. Here you'll pick a user with a system type account. This username works in conjunction with the amelia.rest.server.oauth.configurations[0].password mentioned below. This username links back to the "sub" in your JWT.                                                                                                                                                                                                      |
| amelia.rest.server.oauth.configurations[0].password                                      |         | This is the password of the Amelia user. This password works in conjunction with the amelia.rest.server.oauth.configurations[0].username mentioned above. Amelia strongly recommends encrypting this password in a production-type environment.                                                                                                                                                                                                                        |
[OAuth Configuration Settings]

## Next Steps

For more information, see:

* [Navigating Amelia Support](A02-00_0050-Nav-Amelia-Support.md)
