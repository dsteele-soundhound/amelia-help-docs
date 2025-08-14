# B03-06_0138-Speech-Comp-Timeout

{is-library="true"}

<snippet id="B03-06_0138-Speech-Comp-Timeout_snippet">



Specifies the amount of time in ms to return on detection of a complete (valid) result. To avoid unexpected results from the speech-to-text engines, use the same value as speech_incomplete_timeout.

This header field indicates the required duration of silence after user speech before the speech recognizer finalizes a result. The Speech Complete Timeout value determines how long the recognizer will wait for more input before declaring a match when it has a complete match against an active grammar. By contrast, you'll use the Speech Incomplete Timeout when the speech is an incomplete match to an active grammar.

Enter this value in milliseconds.


</snippet>