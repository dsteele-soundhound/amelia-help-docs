# B03-06_GateCom-AddUserInfoAttr

{is-library="true"}

<snippet id="B03-06_GateCom-AddUserInfoAttr_snippet">



Sets whether to add user information to the initial conversation attributes extracted by Digital Employees builder flows and BPN processes. Set to Yes to enable or No to disable.

The endpoint must supply this information in the inbound message to the gateway. If Amelia can't extract this information from the inbound message, Amelia won't add it to the initial conversation attributes.

This information can help with anonymous conversations and when the BPNs needs it during a conversation. See Authenticated Users for more information.


</snippet>