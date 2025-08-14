# Translation Service

## Introduction

{% include from="B03-04_0437-TranslationSvc.md" element-id="B03-04_0437-TranslationSvc_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Translation service](#Calling).

* [Use the Translation service](#Operatio).

##Call the Service {% #Calling %}

To call the service, use the `translationService` handle appended to the service operation. For example, `translationService.setUserLanguage(en-us)`. Here the service calls the `setUserLanguage` operation. The operation sets the conversation language to US English.

##Operations {% #Operatio %}

Use the `translationService` handle to call any of the following operations:

> **Note:** Pass language parameters as a java.util.Locale object. You can create a Locale object from a String like `en-US` with `Locale.forLanguageTag("en-US")`. If the language locale String is location or country agnostic, for example, `en`, then you'll use `Locale locale = new Locale("en")`.

### translate(toTranslate, fromLocale, toLocale)

Translates a word or phrase from one language to another language.

#### Parameters {id="parameters_1"}

|  Parameter  |  Type  |              Description               |
|-------------|--------|----------------------------------------|
| toTranslate | String | The word or phrase to translate.       |
| fromLocale  | Object | The language locale to translate from. |
| toLocale    | Object | The language locale to translate to.   |

#### Returns {id="returns_1"}

|  Type  |                                  Description                                   |
|--------|--------------------------------------------------------------------------------|
| String | Returns a translated string of the toTranslate parameter used for translation. |

### translate(toTranslate, toLocale)

Translates a word or phrase to another language.

#### Parameters {id="parameters_2"}

|  Parameter  |  Type  |             Description              |
|-------------|--------|--------------------------------------|
| toTranslate | String | The word or phrase to translate.     |
| toLocale    | Object | The language locale to translate to. |

#### Returns {id="returns_2"}

|  Type  |                                  Description                                   |
|--------|--------------------------------------------------------------------------------|
| String | Returns a translated string of the toTranslate parameter used for translation. |

### translate(toTranslate)

Translates a word or phrase from the domain language to the user session's current language.

#### Parameters {id="parameters_3"}

|  Parameter  |  Type  |           Description            |
|-------------|--------|----------------------------------|
| toTranslate | String | The word or phrase to translate. |

#### Returns {id="returns_3"}

|  Type  |                                  Description                                   |
|--------|--------------------------------------------------------------------------------|
| String | Returns a translated string of the toTranslate parameter used for translation. |

### setUserSessionLanguage( toLocale)

Translates a word or phrase from one language to another language.

#### Parameters

| Parameter |  Type  |                    Description                    |
|-----------|--------|---------------------------------------------------|
| toLocale  | Object | The user session language locale to translate to. |

#### Returns

This operation doesn't return any notification.

## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}