# B03-06_0138-Escalate-Target

{is-library="true"}

<snippet id="B03-06_0138-Escalate-Target_snippet">



Specifies the phone number to transfer the call to. Enter either a 4-digit extension number or a 10-digit US phone number here. You can also enter a SIP URI based on `<number>@&lt;ip_address&gt;:&lt;port&gt;`. For example, 1234@12.34.67.89:5060.

A pre-escalate BPN must end on an escalate lemma for your user to get transferred.

URIs are now validated against a regex when doing a SIP REFER. You can fill in your URI info in [The Go Playground](https://go.dev/play/p/9-GN6UKvy2-) and run the snippet to test if yours will pass the check.


</snippet>