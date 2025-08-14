# B03-06_0138-Grammar-Name

{is-library="true"}

<snippet id="B03-06_0138-Grammar-Name_snippet">



Specifies the name or names of grammars to use based on those defined in STT Admin. Use a comma to separate multiple values.

To support this parameter, you must configure the phone number or extension with a grammar_server_url. The gateway sends a uri-list to the speech-to-text server in the form of: http://<grammar_server_url>/rawgrammars?name=<voice.grammar_name>.


</snippet>