

# Certificates Introduction

## Introduction

Sometimes, a conversation with Amelia needs a secure connection to a third-party resource. You can configure certificates for use in conversation flows. Then use them in the Digital Employees builderBackend block or the BPN Consume Web Service task.

Amelia provides both a Truststore and Keystore capability for certificates. The Trustore is for public certificates. The Keystore holds private keys. For SSL certificates, you need to configure the Trustore and Keystore.

Certificates must be in JKS or PKCS 12 format. They're usually created offline with a command line or software application. You'll need to assign a Truststore password to the certificate. Keystore settings also allow communication with a server over a mutual TLS.

You create certificates independently in  Amelia. Then connect them to one or more web actions. Calling a web action in a conversation flow uses any authorization assigned to the action.

## What You'll Learn

In this topic you'll learn how to access the Certificates panel.:

## Access the Certificates Panel

{% include from="B03-05_0301-CertificatesAccess.md" element-id="B03-05_0301-CertificatesAccess_snippet" /%}

## More Resources

For more information, see:
{% include from="B03-05_0102-WebActionsLinks.md" element-id="B03-05_0102-WebActionsLinks_snippet" /%}

 
