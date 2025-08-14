# B03-07_0201-ModelTrainingFiles

{is-library="true"}

<snippet id="B03-07_0201-ModelTrainingFiles_snippet">



* A test file with many utterances that express the intent. You can source utterances from conversation logs. Or create them with a subject matter expert, or by using Amazon Turk and similar sources.

* A validation file with utterances designed to be difficult for Amelia to connect with the intent. This file often is only 10 or 20 percent of the number of utterances in the test file.

* A negative test file with utterances that clearly are not related to the intent. For example, this file might contain single words related to the intent. And it also might include examples with related words. For example, the utterance, "I'm king for a day" is never used to request a king sized hotel bed.

* A negative validation file with negative utterances designed to be more difficult for Amelia to connect with the intent. This file often is only 10 or 20 percent of the number of utterances in the test file.



</snippet>