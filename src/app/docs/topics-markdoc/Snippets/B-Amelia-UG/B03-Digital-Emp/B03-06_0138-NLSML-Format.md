# B03-06_0138-NLSML-Format

{is-library="true"}

<snippet id="B03-06_0138-NLSML-Format_snippet">

Specify the instance tree to use to parse the recognition result out of the NLSLM formatted XML. Providers differ on which XML node contains the correct transcription. Every XML is assumed to contain a result, interpretation, and instance tree. However, inside the instance element, there may be extra nodes. Specify the underlying tree to follow using node.node.node format in this XML. For example, the Nuance MRCPv1 XML looks like this:
```
<madcap:codesnippetbody madcap:uselinenumbers="True" madcap:linenumberstart="1" madcap:continue="False" xml:space="preserve" style="mc-code-lang: XML;">
&lt;?xml version='1.0'?&gt; &lt;result&gt; &lt;interpretation grammar="Digits_Grammar" confidence="71"&gt; &lt;input mode="speech"&gt;one zero eight six one three six&lt;/input&gt; &lt;instance&gt; &lt;SWI_meaning&gt;1086136&lt;/SWI_meaning&gt; &lt;RESULT confidence="71"&gt;1086136&lt;/RESULT&gt; &lt;SWI_literal&gt;one zero eight six one three six&lt;/SWI_literal&gt;. &lt;SWI_grammarName&gt;Digits_Grammar&lt;/SWI_grammarName&gt; &lt;/instance&gt; &lt;/interpretation&gt; &lt;/result&gt;
```

In this case, you'll use the value of SWI_meaning as the result. So, you'll set this variable to "SWI_meaning" in the configuration.

</snippet>