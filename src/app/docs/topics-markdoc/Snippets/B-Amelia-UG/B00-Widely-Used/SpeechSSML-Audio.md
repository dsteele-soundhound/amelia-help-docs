# SpeechSSML-Audio

{is-library="true"}

<snippet id="SpeechSSML-Audio_snippet">



To add recorded audio files and other audio formats with synthesized speech output.

* **Source**: The URI (Uniform Resource Identifier) for your audio media source. The supported protocol is https. This is a required field.

* **Clip Begin**: The beginning point for playback. The default is 0.

* **Clip End**: The end point for playback. The default is infinity.

* **Repeat Count**: The number of times to insert the audio (after clipping, if any, by Clip Begin and/or Clip End). The default is 1, or 10 if you set the Repeat Duration.

* **Repeat Duration**:The duration of the inserted audio after processing the source for Clip Begin, Clip End, Repeat Count, and Speed attributes. If the duration of the processed audio is less than this value, then playback ends at that time.

* **Sound Level**:Adjusts the sound level of the audio using decibels. The sound level ranges from +0dB to +/-40dB. The default is +0dB.

* **Speed**: The ratio output playback rate relative to the normal input rate written as a percentage. The supported range is 50% (slow - half speed) - 200% (fast - double speed). The default is 100%.

See [Google's SSML document](https://cloud.google.com/text-to-speech/docs/ssml#audio) for more information.


</snippet>