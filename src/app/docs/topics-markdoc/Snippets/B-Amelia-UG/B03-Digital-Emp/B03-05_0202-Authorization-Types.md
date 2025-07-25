# B03-05_0202-Authorization-Types

{is-library="true"}

<snippet id="B03-05_0202-Authorization-Types_snippet">



* **Basic**: Use this method to set up authentication for HTTP requests. It uses a header (Authorization) and a base64-encoded version of the username and password. Depending on the situation, you can use this type to authenticate either an application's user or the application itself. The benefits are that Basic is a standardized way to send credentials. The header always looks the same, and the components are easy to implement. Setup is simple. First, name your authorization and choose Basic. Then, set a username and password.
* **Form-based**: Use this method to authenticate using form data. Configuration of the Username, Password Field Names, and other parameters depend on implementation of the external system.

* **API Key**:Use this method to authenticate an application without referencing your actual user. The application adds a key to each API request, letting the API identify the application and authorize the request. The key is then used to perform actions. Different APIs have different ways of sending the key, but the benefit of using this type of authentication is easy setup. After naming your authorization and choosing API Key, set a key-value pair and select whether to Add To the Header or Query Parameters.

* **OAuth 2.0**: This method gives access via a token from a trusted third party and relies on well-documented, standardized, and secure OAuth flows. Currently, OAuth 2.0 is the most used way to get these tokens. If you're working in a zero-trust environment or handling personally identifiable information (PII), the most secure option is to use a token-based system with multi-factor authentication and an external authorization server. After naming your authorization and choosing OAuth 2.0, you'll set the Access Token URL, Grant Type, Client ID and Scope.

* **OAuth 2.0 JWT**: Use this method with any external system that uses JWT authorization. After naming your authorization and choosing OAuth 2.0 JWT, you'll set the Algorithm, Issuer, Subject, Audience and Private Key.



</snippet>