# B03-06_0138-Escalate-Type

{is-library="true"}

<snippet id="B03-06_0138-Escalate-Type_snippet">



This is the type of escalation to perform. Options include:

* REFER (standard blind transfer).

* BRIDGE (outbound call).

* AGENT (Agent View WebRTC pickup, or SIP INVITE, with Amelia listening in).

When using AGENT pickup through Amelia, set this property to AGENT. Don't set an Escalation Target value. If you set an Escalation Target value, it functions like the BRIDGE option, except Amelia remains on the call to listen.


</snippet>