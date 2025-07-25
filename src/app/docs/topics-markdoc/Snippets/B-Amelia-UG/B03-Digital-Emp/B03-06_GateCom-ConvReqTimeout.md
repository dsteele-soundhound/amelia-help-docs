# B03-06_GateCom-ConvReqTimeout

{is-library="true"}

<snippet id="B03-06_GateCom-ConvReqTimeout_snippet">



The length of time, in seconds, that the gateway waits for a conversation to establish with Amelia. If the wait-time reaches the timeout period then Amelia rejects the conversation request. Default is 30 seconds.

Consider increasing this value if a greeting Digital Employees builder flow or BPN process takes significant time to complete. This might make for lengthy integration calls.

This time also includes the time, if any, required to establish a conversation session with the remote endpoint. This is relevant only if the conversation request is a separate step from establishing a conversation session. This is not a typical scenario.


</snippet>