# Voice Best Practices

## Introduction

You can optimize and improve Amelia Voice implementations. This topic describes best practices for tools, evaluations, common problems, and settings. Checking all of these will increase the Speech-To-Text (STT) transcription accuracy levels. And improve your overall success using voice interfaces.

## What You'll Learn

In this topic, you'll learn about:

* [Using Speech-to-Text (STT) tools to evaluate voice interfaces](#STTVoiceTools).
* [Processes to follow when testing voice interfaces](#VoiceTestProcesses).
* [Common problems to test with voice interfaces](#VoiceCommonProblems).
* [Settings that can improve using voice interfaces](#VoiceSettings)


## Use Speech-to-Text Tools {% #STTVoiceTools %}

Amelia includes a tool to test and debug STT accuracy for voice conversations. You can test the same audio with different grammars. Testing different grammars is difficult to test if you only call Amelia by phone. Therefore, please use the STT tool for testing.

<chapter title="Use STT to try different models, grammars, and languages" collapsible="true" level="5">

Most STT engines feature various languages, each with different capabilities and models. You should check a few possible languages for your situation. For example, if you use the Google STT tool, check their [supported languages page](https://cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages).

![C03-00_0001-Google-French-Voice-Models.png](C03-00_0001-Google-French-Voice-Models.png){width="600"}

*Google French Voice Models*

Notice that the enhanced phone_call model above does NOT support the model adaptation option. But the latest_short model does. Google recommends using the newer telephony and telephony_short models. They're the next generation of the phone_call models.

With class tokens support, check the [Google STT class token options](https://cloud.google.com/speech-to-text/docs/class-tokens). You can use various class token with different boost values.


</chapter>


<chapter title="Consider switching STT providers on the fly" collapsible="true" level="5">

It's possible for Amelia to leverage a different STT provider for specific Ask tasks. Starting from AVS version 1.1.26, you can switch the STT engine on run time from Amelia for a particular Ask task.  Change the STT engine in the BPN process or DEB flow settings.

>Keep in mind that you must switch back to the default STT configured on the dialplan on the Amelia BPN. It isn't automatic.{style="warning"}

To make this change to and from a different STT provider, you'll need:

* **MRCP Profile Name:** You need to have the name of the MRCP profile for a STT Engine you want to switch to. Voice team generally use below MRCP profile names for each STT service provider.

    | STT Engine | MRCP Profile Name      | BPN/DEB Value                  |
    |------------|------------------------|--------------------------------|
    | Google     | google-stt-kam-default | unimrcp:google-stt-kam-default |
    | Azure      | azure-stt-kam-default  | unimrcp:azure-stt-kam-default  |
    | Amazon     | amazon-stt-kam-default | unimrcp:amazon-stt-kam-default |

* **STT Grammar Provider ID (Optional):** You can also create a separate STT Grammar provider in Amelia STT Admin for each STT engine. To skip this, create different grammars with different names in the same STT Grammar provider. Example: general_google, general_azure, yesNo_google, yesNo_azure. In this case, provide the grammar name in BPN/DEB Ask custom property for each STT Engine type.

* **Subscription key file (required if switching between Deepgram and Azure):** Specify voice.mrcp_headers.stt.subscription-key-file on the Amelia BPN/DEB if switching between Deepgram and Azure. The property is called the same so a valid value for both cannot be included on the dialplan.

Once you have these settings, you can configure a BPN process or DEB flow Ask task. In the Ask task Properties tab, add these custom properties:

* Add `voice.stt_engine` to specify the STT engine.
* Add `voice.stt_provider` to specify the STT Grammar provider ID.

You also can specify an STT engine specific grammar name. If needed, add the `voice.grammar_name` custom property.

</chapter>




## Voice Testing Processes {% #VoiceTestProcesses %}

There's several ways you can test your voice conversation process. For example, listening to recordings and studying log files. Here's a few test processes to follow on a regular basis.

<chapter title="Focus on trends, not individual occurrences" collapsible="true" level="5">

When you encounter something that does not work as intended, test it well. Have different people test multiple times using different phones, environments, and accents.

If the issue happened on an environment, and you're not sure how to reproduce it, look at multiple occurrences of the same. Once you have enough occurrences, try to discover a pattern. For example, noisy environments, when caller uses jabber, specific Ask task does not usually receive the word xxxx.

Issues that occur hardly ever or one-offs are usually not a wise way of spending time and resources. Issues that occur all the time are usually easy to fix. If you open a voice ticket you must always provide information related to trends and not one-offs.

</chapter>


<chapter title="Look at your voice logs" collapsible="true" level="5">

Many different settings can influence the way STT engines behave. The only way to know what's actually used at the moment is in the log files. Please start with the amelia-voice-ng-service logs, also known as the AVS logs. You also might need to look at the corresponding FreeSWITCH and/or UniMRCP logs.

<code-block lang="Java">
</code-block>

</chapter>


<chapter title="Listen to your recordings" collapsible="true" level="5">

All calls are always recorded by default on the relevant AVG server(s). If you look and listen to them you will be able to understand issues that are hard to see on the logs. For example, audio quality, timing, volume, background noise, customer sentiment.

The location of recordings should be in the Know Your Environment document. If you don't have this information, please open a voice ticket and update your KYE.

</chapter>


<chapter title="Learn to master voice timeouts" collapsible="true" level="5">

Multiple timeout settings can have a huge impact on voice. It's important to understand and use timeout settings correctly. The default values are great for most situations. Do not override default values unless there is a good reason.

* **voice.silence_time_limit:** this configures how long to wait until the user starts speaking. By default there is no limit and the default works in most cases.

    Scenarios where silence_time_limit works successfully include Amelia asking the user for a somewhat involved task. For example, "provide location through an app on the phone where the user is calling from." And Amelia has to keep providing feedback, for example, "I'm still here, take your time..."

* **voice.speech_time_limit:** how long a user can speak. By default there is no limit and it's common to keep it this way.

* **voice.speech_complete_timeout** and **voice.speech_incomplete_timeout:** once the user begins speaking, STT engines consider the user is finished talking once the amount of time with no audio specified by these timeouts has been reached. In other words, STT engines measure silence and if the amount of time reached what's specified on these values, they consider the user to be finished talking.

    Both timeouts should be set to the same value to avoid unexpected behavior from different STT engines. However, in certain circumstances it might make sense to have different values. Please check the specific STT provider documentation to understand how to go about this. For example if the user says "I live in [1500 milliseconds pause] Spain" the STT engines will by default stop listening 1000 milliseconds after the user said "I live in" (default voice.speech_complete_timeout & voice.speech_incomplete_timeout value is 1000 milliseconds).

    These timeouts are very interesting. Adjust them to the type of questions Amelia is asking. As a rule of thumb, you could use 1000 milliseconds for open questions and 250 milliseconds for obvious yes/no questions.

    The noisier the user environment is the shorter you might want to set these timeouts to reduce the time window where the STT can mistakenly pick background noise as speech.

    The shorter these timeouts the more aggressive Amelia will feel to the user; if set too long Amelia will seem too slow. Please test and apply the timeout values that best suit your use case, environment, user base and other specific considerations.


</chapter>




## Common Problems with Voice Interfaces {% #VoiceCommonProblems %}

Amelia and Speech-to-Text tools can struggle to understand voice conversations. Background noise is the most obvious example. But sometimes people talk too soon and cut Amelia off. Or they give addresses, dates, and acronyms that are difficult to parse. You have options to address these issues if they arise.

<chapter title="Handling background environment noise" collapsible="true" level="5">

While you can tune STT engines to handle some background noise. However, noise hurts STT engines accuracy. Having other people talk in the background is usually a blocker issue for STT engines. They cannot filter out speech from multiple speakers.

While some STT engines can differentiate who is talking, dynamically filtering people's voices is not widely available.

You can experiment with voice.mrcp_headers.Sensitivity-Level setting. It has a value from 0.00 to 1.00 which is used in noisy environments. Test the best setting for your environment. For example, Verbio STT engine has been using a low sensitivity of 0.1 or 0.05 successfully. And Azure STT a very high one of 0.95.

Google has worked with sensitivity level values of around 0.95 combined with barge-in. This avoids any small noise cutting Amelia off. That makes the barge-in less aggressive. See also the barge_in best practice below, in the Settings section.

Google and Azure translate the Sensitivity-Level to a parameter called vad-mode. In other words, Sensitivity-Level of 0.1 and 0.2 are the same for Google and Azure. Check the table to see their ranges.

| Sensitivity Levl | vad-mode |
|------------------|----------|
| (0.00 ... 0.25)  | 0        |
| (0.25 ... 0.50)  | 1        |
| (0.50 ... 0.75)  | 2        |
| (0.75 ... 1.00)  | 3        |

The following dialplan and grammar configuration also works successfully in some cases:

<code-block lang="Java">
# On dialplan
CustomPropertyDefaults:
   voice.mrcp_headers.stt.start-of-input: "service-originated"

# On grammar
&lt;meta name="start-of-input" content="service-originated"/&gt;
</code-block>

These diaplan and grammar settings use Amelia's noise detection instead of UniMRCP detection.

* If Amelia recognizes nothing in the audio, then Amelia applies the speech-incomplete-timeout. The timer starts when sound isn't detected.

* If Amelia recognizes text or numbers, then Amelia applies the speech-complete-timeout. The timer starts as soon as sound isn't detected.

>The timer does not start at the end of the meaningful audio. The timer starts at the end of the sound. If background noise is audible, the end user will still have perception of a long waiting time. Regardless if there's a short speech-complete-timeout (1000 or 2000 ms).{style="note"}



</chapter>


<chapter title="Handling low audio levels" collapsible="true" level="5">

When user audio levels are lower than Amelia in recordings, this is a user phone system issue. Some users live in locations with poor phone system quality. One workaround is to increase or decrease the user channel volume. Use the `set_audio_level` setting in your dialplan. A `set_audio_level` of 3 has worked in a few cases.

However, [FreeSWITCH documentation](https://developer.signalwire.com/freeswitch/FreeSWITCH-Explained/Modules/mod-dptools/6587102/#note) says this is not ideal. Using the set_audio_level to address audio volume can cause audio distortion.

</chapter>


<chapter title="Users talking too soon or cutting Amelia off" collapsible="true" level="5">

Amelia always listens as soon as possible. It's not possible to make her listen sooner unless enabling barge_in. However, this is not recommended for most use cases. Sometimes users talk too soon, before Amelia finishes speaking and starts listening. In these cases, you can only influence how the users will feel and talk to Amelia.

To help lead users to speak effectively with Amelia:

* **Be concise:** make sure Amelia is always as concise as possible. Users often don't appreciate when Amelia speaks too much.

* **Don't repeat yourself ("DRY"):** make sure Amelia provides information only once. The exception is when the user asks Amelia to repeat a statement. Carefully write Amelia's utterances. Make sure that they sound natural. And make sure information is not provided multiple times.

* **Adjust speed:** find the right speed according to the audience, use cases, and situation. Having Amelia speak too slow can frustrate users and trigger them to talk too soon. You can customize Amelia's speech using SSML.

</chapter>


<chapter title="Handling short utterance transcription" collapsible="true" level="5">

  Short utterances are harder for STT engines to transcribe. The simple explanation is that the STT engine has less audio to process. And fewer words causes missing one or two words to have a huge impact on the accuracy. Short utterances are more error prone than users talking too soon and cutting Amelia off. Also, the military uses the words affirmative and negative for this same reason. It makes processing more accurate.

  Some best practices to manage short utterances:

  * When using Google, your grammar should specify common short utterances.

    <code-block lang="XML">
    &lt;?xml version="1.0"?>
    &lt;grammar mode="voice" root="yes_no" version="1.0" xml:lang="en-US" xmlns="http://www.w3.org/2001/06/grammar">
        &lt;meta name="scope" content="hint"/>
        &lt;meta name="model" content="telephony_short"/>
        &lt;meta name="speech-start-timeout" content="50"/>
        &lt;meta name="single-utterance" content="true"/>
        &lt;meta name="speech-incomplete-timeout" content="15000"/>
        &lt;meta name="speech-complete-timeout" content="2000"/>
        &lt;rule id="yes_no">
          &lt;one-of>
            &lt;item weight="15"&gt;Sure&lt;/item&gt;
            &lt;item weight="15"&gt;Yes&lt;/item&gt;
            &lt;item weight="15"&gt;No&lt;/item&gt;
            &lt;item weight="15"&gt;go ahead&lt;/item&gt;
            &lt;item weight="15"&gt;No I don't need to&lt;/item&gt;
            &lt;item weight="15"&gt;No I do not&lt;/item&gt;
            &lt;item weight="15"&gt;Okay&lt;/item&gt;
            &lt;item weight="15"&gt;Nope&lt;/item&gt;
            &lt;item weight="15"&gt;No I don't want&lt;/item&gt;
            &lt;item weight="15"&gt;yes, it's correct&lt;/item&gt;
            &lt;item weight="15"&gt;yes, it's perfect&lt;/item&gt;
            &lt;item weight="15"&gt;No,it's wrong&lt;/item&gt;
          &lt;/one-of>
    &lt;/rule>
    &lt;/grammar>
    </code-block>

    * Follow the best practices for users talking too soon or cutting Amelia off, located above.
    * Consider using more open questions and less Yes/No questions.
    * Use a BPN process and DEB flow to handle when Amelia does not understand a user utterance. And provide examples for Amelia to respond by saying Yes or No.
    * Consider using DTMF, especially when Amelia attempts to respond a second or third time. See DTMF topics in the Settings section below.
    * Rephrase Amelia questions to ensure users respond with clear utterances. For example, the question, "Is 12345 your policy number?" might cause users to say Yes or No. Rewrite the question to "Your policy number 12345, correct?" Users may respond with the word _correct_ which is easier to transcribe.
    * Consider setting the speech-start-timeout to a value of around 50. Change this in the grammar:

        <code-block lang="XML">
        &lt;?xml version="1.0"?&gt;
        &lt;grammar mode="voice" root="yes_no" version="1.0" xml:lang="en-US" xmlns="http://www.w3.org/2001/06/grammar"&gt;
            &lt;meta name="scope" content="hint"/&gt;
            &lt;meta name="speech-start-timeout" content="50"/&gt;
            ...
            ...
            ...
        &lt;/grammar&gt;
        </code-block>


</chapter>


<chapter title="Capturing dates in voice conversations" collapsible="true" level="5">

These steps help accurately capture and process dates.

* Requesting dates through natural language. For example, suggest customers use the name of the month rather than a number. Also, Amelia can calculate the correct date from words like "yesterday" and "last Monday."

* Consider adding an example when Amelia asks for a date. Amelia might ask, "When did the event occur (for example, 2 February 2023)"?

* When Amelia does not understand a date, use DTMF or disambiguation. If the user says, "one eleven twenty twenty five", Amelia could ask "Did you mean January 11th or November 1st? Also you can apply some logic to discard dates. If you ask for a past event and one of the options is a future date, most likely the user meant the past date.

* Add the logic to Amelia, not the STT. In general, STT providers have very limited functionality to manage NLP/NLU. Amelia is much more powerful. This also reduces the amount of effort in general. For example, you can reuse existing Amelia artifacts. You can leverage built-in entities and other features for the implementation engineers. It decouples the implementation from the specific STT technology. Also, this approach would make things much easier if you have to move to a different STT provider.


</chapter>


<chapter title="Capturing digit sequences accurately" collapsible="true" level="5">

Capturing digit sequences. Please use Amelia's telephony_short model or on grammars to capture digit sequences. Other models can duplicate digits when used.

</chapter>




<chapter title="Handling challenging use cases like addresses, dates, and acronyms" collapsible="true" level="5">

  Some use cases are challenging for voice and for humans. Keep in mind that your success rate will not be as high as you'd like. It's important to manage users' expectations.

  Our recommendation is to configure the STT engine to the best of its ability for the specific use case. Then do extensive testing. As an optional step, you also can apply some of the workarounds mentioned HERE. Some challenging use cases to handle with care:

  * Alphanumeric strings, for example, 6TYX8YHFD88UCEQ8UJHG. The longer the string the harder, the harder it is to work with.
  * People's first and last names
  * Email addresses
  * Addresses, street names, location names and postal codes
  * Other words that do not appear on the dictionary.
  * Numeric dates, for example, transcribing "one eleven" as "1 11" and not "111".
  * Acronyms

  #### Phone call model
  
  Since all Amelia Voice interactions are over the phone, the use of the phone call model is a must. If it is available in the target language-locale combination. For combinations not supported by a phone call model, follow the best practices below.
  
  #### High-level approaches
  
  The best approach is to avoid the use of any problematic entities. Here are some alternatives to do that:
  
  **Authentication/Validation**
  
  * Use phone numbers or numeric IDs to verify the identity or authenticate users. For example, you could achieve prior registration using the Amelia chat interface.

    * If it is not possible to authenticate callers using a numeric ID, generate a short numeric code. Then tell them to login to the company website using a URL designed for validation and enter the code there. The short numeric code then links the authenticated account with the call. And the caller may proceed with their call after authentication. Amelia also might provide the caller with the web site URL through a text message. Or have Amelia spell the URL. If you opt to spell a URL, keep the URL to a minimal length.
  
  **New customer information**
  
  * When the caller is a new customer for the client, there is no way to verify them against existing data. There are two approaches that could be useful:
  
    * Redirect users to a registration page with Amelia chat to guide them. Associate the caller's number for future retrieval over the phone. And ask new users to type in the problematic entities, for example, Name and Email address. After the registration, Amelia Chat could continue with the use case. Or use Amelia Voice and short numeric code validation to confirm new accounts. Amelia also might provide the caller with the web site URL through a text message. Or have Amelia spell the URL. If you opt to spell a URL, keep the URL to a minimal length.
  
    * Transfer the call to an agent and have the agent enter that new information into their system. After the registration, the agent may continue with the original use case. Or they could transfer the person back to Amelia Voice and finish with the use case through Amelia.
  
  #### Low-level approaches
  
  * Human in the loop: Use whatever information the STT captures. Then let a human confirm, enhance and/or clean up the information. You also could use the call audio.
  
    * Chunking: when spelling alphanumeric sequences, collect information in multiple turns. Let the caller spell only 3 to 5 characters at a time. The number of characters received from the user can also by dynamic. Amelia can listen until the user pauses. So the user can choose how many characters to say. This reduces the number of errors. And if the user has to repeat information, it should be only for the last sequence.
  
    * Use of common words. Let the caller use common words instead of the actual letter. For example, words like apple, baker, vanilla, eight for (ABV8). This approach builds on Google's strength of understanding common words. Using the NATO phonetic alphabet is not recommended in most scenarios. Most people don't know it that well.
  
    * Relax the account lookup mechanism by allowing fuzzy matches. If you try to capture a 7 character alphanumeric sequence but you missed the second one, invoke an API. The API then can provide results based on the information available, for example, "A?CDEF6." Amelia can ask clarifying questions if the API provides multiple results. For example, Amelia could ask, "The second character, is it a B or a C?"
  
    * Try all the models. Google's latest models documentation. People pronounce the same words different ways in different locales. British people pronounce the word four differently than Americans. Use the en-GB models if most of your users are British. And use the en-US models if most users are American. Also, the en-GB model has command_and_search, default, and phone_call models.
  
    * Add more Speech Context (or Speech Adaptations). For example, "the serial number is $OOV_CLASS_ALPHANUMERIC_SEQUENCE" and experiment with different boost values.
  
    * Use a text-based fallback mechanism. For example, send an SMS or email to the customer that she can reply to. Then capture the challenging utterance.


</chapter>





## Settings that can Improve Voice Interfaces {% #VoiceSettings %}

Amelia, Speech-to-Text, and dialplans include settings you can optimize. There are settings to handle audio levels, keypad commands, and background noise. You can earn more about these settings.

<chapter title="Increase or decrease user channel audio levels" collapsible="true" level="5">

When user audio levels are lower than Amelia in recordings, this is a user phone system issue. Some users live in locations with poor phone system quality. One workaround is to increase or decrease the user channel volume. Use the `set_audio_level` setting in your dialplan. A `set_audio_level` of 3 has worked in a few cases.

However, [FreeSWITCH documentation](https://developer.signalwire.com/freeswitch/FreeSWITCH-Explained/Modules/mod-dptools/6587102/#note) says this is not ideal. Using the set_audio_level to address audio volume can cause audio distortion.

</chapter>


<chapter title="Optimize the Confidence Threshold" collapsible="true" level="5">

You can set a property that determines whether to send a transcription to Amelia. It's the `voice.mrcp_headers.Confidence-Threshold` used in a BPN process or DEB flow. It has a value between 0.00 and 1.00. And it defines the confidence level the STT needs to send a transcript. In rare cases, you can set it in the dialplan if you need to apply it across the board. This setting is powerful and requires testing.

</chapter>


<chapter title="Enable DTMF only when needed" collapsible="true" level="5">

Amelia can listen to user responses in three modes: Voice Only, DTMF Only, or Both. DTMF (Dual-Tone-Multi Frequency) captures keypad commands. Use Voice Only in almost all cases. When set to Both, the system will have to detect both and select only one. This can cause unexpected issues. For example, if a user presses a keypad key while Amelia chats and the system switches to DTMF. Only enable DTMF when needed. DTMF has helped improve accuracy when Amelia asks for a numeric value from the user.

</chapter>


<chapter title="DTMF should be evident when enabled" collapsible="true" level="5">

When you use DTMF, it must be obvious to users. For example, Amelia must say, "press 1 for yes or 2 for no". If you aren't obvious, users might press keys by accident or get frustrated. They might want to use their keypad and think it's not available.

</chapter>


<chapter title="Using barge_in and handling background noise" collapsible="true" level="5">

Amelia always listens as soon as possible. It's not possible to make her listen sooner unless enabling the `barge_in` setting. However, this is not recommended for most use cases. Sometimes users talk too soon, before Amelia finishes speaking and starts listening. In these cases, you can only influence how the users will feel and talk to Amelia.

To help lead users to speak effectively with Amelia:

* **Be concise:** make sure Amelia is always as concise as possible. Users often don't appreciate when Amelia speaks too much.

* **Don't repeat yourself ("DRY"):** make sure Amelia provides information only once. The exception is when the user asks Amelia to repeat a statement. Carefully write Amelia's utterances. Make sure that they sound natural. And make sure information is not provided multiple times.

* **Adjust speed:** find the right speed according to the audience, use cases, and situation. Having Amelia speak too slow can frustrate users and trigger them to talk too soon. You can customize Amelia's speech using SSML.

</chapter>


## More Resources

* [Speech-to-Text Supported Languages (Google)](https://cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages).
* [Supported Class Tokens (Google)](https://cloud.google.com/speech-to-text/docs/class-tokens).
* [FreeSWITCH documentation](https://developer.signalwire.com/freeswitch/FreeSWITCH-Explained/Modules/mod-dptools/6587102/#note)