# B03-06_GateCom-AuthUsers

{is-library="true"}

<snippet id="B03-06_GateCom-AuthUsers_snippet">



This setting determines how users will start conversations with Amelia. Choose No to start conversations anonymously or Yes to start conversations as authorized users in Amelia.

Make sure that your domain settings match this checkbox setting. If you choose No, your domain must allow for anonymous conversations. If you select Yes, the user starting the conversation must already exist in Amelia or be auto-created using domain settings. Specifically, you must configure the New Conversation User Create group.

To auto-create users, the gateway endpoint must provide the user's first name and email address. If these are not part of the endpoint's inbound message, users cannot be auto-created, and all conversations will be anonymous. If you can extract the user's name, the conversation is still anonymous, but Amelia will use the user's name to identify them in the conversation.

If users are pre-populated in Amelia, the gateway endpoint must supply at least either the user's email address OR a unique ID. This unique ID matches to the Amelia user's External UID. For example, you can use a user's phone number as their External UID to identify them.


</snippet>