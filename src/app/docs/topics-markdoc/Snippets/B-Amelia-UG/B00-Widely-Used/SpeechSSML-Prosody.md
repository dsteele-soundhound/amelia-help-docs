# SpeechSSML-Prosody

{is-library="true"}

<snippet id="SpeechSSML-Prosody_snippet">



Used to customize the pitch, speaking rate, and volume of text contained by the element. Currently Amelia supports volume, rate, and pitch attributes. Only apply prosody customizations to full sentences. Applying this customization to individual words may cause unwanted pauses in speech.

Select the utterance to customize, then click the Prosody tab. From the dropdowns, choose a selection and save.

* **Volume**: The volume for the contained text. Values are "default," "silent," "x-soft," "soft," "medium," "loud," and "x-loud." The default is +0.0dB.

* **Rate**: The speaking rate for the contained text. Values are: "default," "x-slow," "slow," "medium," "fast," and "x-fast."

* **Pitch**: The baseline pitch for the contained text. Values are: "default," "x-low," "low," "medium," "high," and "x-high."

See [Google's SSML document](https://cloud.google.com/text-to-speech/docs/ssml#prosody) for more information.


</snippet>