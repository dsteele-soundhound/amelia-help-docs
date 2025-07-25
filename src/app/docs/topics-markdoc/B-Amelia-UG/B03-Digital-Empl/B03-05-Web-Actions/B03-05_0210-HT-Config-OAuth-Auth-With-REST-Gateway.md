# How-to: Configure OAuth With REST Gateway

> This page is under editorial review and may contain incomplete information. Please check back later for updates.
{style="warning"}

## Introduction

Amelia now offers the convenience of using OAuth to log in to the REST gateway.

REST gateway is a way to access some Amelia functions without actually being in  Amelia. For example, uploading/downloading resources, passing Form/Integration messages, publishing debug messages to your client code, and closing conversations.

REST gateway is also a way for client applications to connect to Amelia and hold conversations using simple REST commands, webhook URLs or polling.

Using OAuth to log into the REST gateway has a few benefits:

* **Granular Authorization:** With OAuth, you can control your authorization more precisely. OAuth tokens can provide a high level of granular authorization control, giving you the power you need.

* **Expiration:** OAuth tokens must be set to expire, or have an expiration length. This layer of security ensures your data and resources are always protected.

* **Security Breach Reduction:** OAuth allows apps to access user accounts without using passwords, helping prevent security breaches.

Before you can use OAuth to log into the REST gateway, you must update a few settings in Amelia's application.properties.

## What You'll Learn

In this topic you'll learn to configure the application.properties to use OAuth to log in to the REST gateway.

## Configuration

Because the REST API is live you must take care when updating configuration settings. Based on your specific credentials, you may have access to a range of permissions. For example, deleting a domain. Acting on or changing these permisions can have far-reaching affect in your domain.

### JWT Properties

To update these settings, you'll log a ticket with Product Support. For information on how to log this ticket, please see TBA

Amelia needs the following information to expedite your request:

Changes to these two properties invalidate all tokens issued under the old configuration.

Make both settings instance-specific. But ensure that each application server in the instance has the same value.

|          Configuration Setting           |                                                                                                                                                Description                                                                                                                                                |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amelia.rest.server.oauth.jwt-key-alias   | =rest-gateway-jwt-key-alias This is currently unused. You'll need this if/when you start storing these in the keystore rather than generating them on start-up.                                                                                                                                           |
| amelia.rest.server.oauth.jwt-signing-key | These don't need to be in plain text, they can be encrypted. =rest-gateway-jwt-signing-key-of-at-least-256-bit-length As a security measure, remember to encrypt this key in production. Also, the underlying string number must have a byte size of more than 256 bits, or the REST gateway won't start. |

### OAuth Configurations

You can have any number of OAuth configurations. Amelia currently supports client_credentials only.

To update these settings, you'll log a ticket with Product Support. For information on how to log this ticket, please see TBA

Amelia needs the following information to expedite your request:

|                                  Configuration Setting                                   | Default |                                                                                                                                         Description                                                                                                                                         |
|------------------------------------------------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amelia.rest.server.oauth.configurations[0].client-id=docker-rest-oauth-client-id         |         | # client-id will be the client id the token requester must present. Must be unique among all configurations.                                                                                                                                                                                |
| amelia.rest.server.oauth.configurations[0].client-secret=docker-rest-oauth-client-secret |         | These don't need to be in plain text, they can be encrypted. # client-secret is the secret the token requester must present (should be encrypted in properties) # this test only value is docker-rest-oauth-client-secret, it should be encrypted in production                             |
| amelia.rest.server.oauth.configurations[0].expires-in                                    | 3600    | # expires-in is the length of the token life, in seconds                                                                                                                                                                                                                                    |
| amelia.rest.server.oauth.configurations[0].azp                                           |         | # aud is the authorized party claim the token must be intended for. Must be unique among all configurations, and will be checked on # each request. If it does not match, e.g. if this is changed, it will invalidate tokens issued under the old aud.                                      |
| amelia.rest.server.oauth.configurations[0].username                                      |         | # username is the username of the internal password user at  Amelia.                                                                                                                                                                                                                         |
| amelia.rest.server.oauth.configurations[0].password                                      |         | These don't need to be in plain text, they can be encrypted. # password is the password of the user at Amelia (should be encrypted in properties) # this test only value is the value of our standard docker-only admin@ipsoft.com test user, encrypted with the secret docker-rest-gateway |

## Next Steps

For next steps, see:

