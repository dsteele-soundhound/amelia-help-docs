# Datum Types Library

## Introduction

{% include from="B03-07_0101-Datum-Types-Intro.md" element-id="B03-07_0101-Datum-Types-Intro_snippet" /%}

Here are some of the datum types that you'll use with Amelia:

* **Simple Datum Types**: These datums are similar to the basic data types (Boolean, Integer and Decimal) available in programming languages.

  Simple datums include Boolean, Date, DateTime, Decimal, Email, Integer, Ordinal, Organization, Person, Text, Time, US Phone Number, IBAN (for non-US locales), Nationality, Occupation, Month/Year, and Response.

  Simple range datums include Date Range, Decimal Range, Integer Range, Ordinal Range, and Time Range.
* **Location Datum Types**: These datums represent location-related information. All location datums include geolocation information and support geolocation related operations.

  Location datums include Airport, Capital, Country, US City, US County, US State, US Street Address, US Zipcode, Province, and Prefecture (Japan).
* **Unit Datum Types**: These datums contain a unit to identify the type of information. So, unit datum include the symbols and conversion values.

  Unit datums include Age, Area, Currency, Duration, Length, Percentage, Speed, Temperature, Volume, and Weight.

  Unit range datums include Age Range, Area Range, Currency Range, Duration Range, Length Range, Percentage Range, Speed Range, Temperature Range, Volume Range, and Weight Range.
* **Custom Datum Types**: When a datum doesn't fit an existing datum type, or a datum is created dynamically, a Custom Datum is created. A custom datum includes custom datum field types.

  Custom datums include Custom Datum Field, and Custom Datum.
* **Range Datum Types**: Datums representing ranges belong to two main categories, ranges of simple datum types and ranges of unit datum types. A range datum has two values at maximum and one at minimum. A range with two values is closed and ranges with only one value (either start or end) are open ended. All ranges are closed.

  Simple range datums include Date Range, Decimal Range, Integer Range, Ordinal Range, and Time Range.

  Unit range datums include Age Range, Area Range, Currency Range, Duration Range, Length Range, Percentage Range, Speed Range, Temperature Range, Volume Range, and Weight Range.

All datums have pre-defined normalizers. For example, normalizing the user utterance "Two hundred thirty-two kgs" saves as "232 kilograms" using the weight datum type.

Many datums also include settings to control the data output. You can format a date as a full date, a short date, or a time-zoned date, for example.

This topic describes all the different datums you'll use with examples. See our [Entities Introduction](B03-07-NLU-Comprehension_B03-07_0301-Entities-Intro.md) for information on how to use these datums when creating and managing entities.

## What You'll Learn

In this topic, you'll learn about:

* [Simple datum types](#Simple).

* [Location datum types](#Location).

* [Unit datum types](#Unit).

* [Custom datum types](#Custom).

* [Range datum types](#Range).

##Simple Datum Types {% #Simple %}

Simple datums are similar to the basic data types (Boolean, Integer and Decimal) available in programming languages.

This table shows available simple datums, their matches, stored value type, and relevant examples.

*Simple Datum Types*

| Name &#124; Internal Name &#124; Stored Value Type                                                                                   | Matches                                                                                                                                     | Examples                                                                                                                                                                                                                                                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Boolean &#124; BOOLEAN &#124;Boolean                                                                                                 | A boolean value                                                                                                                             | <ul><li>True</li> <li>False</li></ul>                                                                                                                                                                                                                                                                     |
| Date &#124; DATE &#124; LocalDate                                                                                                    | A date value                                                                                                                                | <ul><li>Wednesday, December 12 2012</li> <li>March 2, 1990</li> <li>11/21/11</li> <li>02/16/2016</li> <li>Today at 3 PM</li> <li>Tomorrow</li> <li>Next Friday</li> <li>Three days from now</li> <li>Five days from today</li> <li>Now</li> <li>March 5 2024</li> <li>The beginning of the year</li></ul> |
| DateTime &#124; DATE_TIME &#124; ZonedDateTime                                                                                       | Date and time value                                                                                                                         | <ul><li>2012/12/01 2:10:53 AM</li> <li>Sat, 1 Dec 2012 16:10:53 -0500</li> <li>2012/12/01 11:10:53 PM EST</li> <li>Today at 6 pm</li></ul>                                                                                                                                                                |
| Decimal &#124; DECIMAL &#124; BigDecimal                                                                                             | Decimal number                                                                                                                              | 3.14                                                                                                                                                                                                                                                                                                      |
| Email &#124;EMAIL &#124;String                                                                                                       | Email value                                                                                                                                 | test@amelia.com                                                                                                                                                                                                                                                                                           |
| Integer &#124; INTEGER &#124; Long                                                                                                   | Integer value                                                                                                                               | <ul><li>150</li> <li>Two hundred thirty</li></ul>                                                                                                                                                                                                                                                         |
| Ordinal &#124; ORDINAL &#124; Long                                                                                                   | Ordinal value                                                                                                                               | <ul><li>5th</li> <li>First</li></ul>                                                                                                                                                                                                                                                                      |
| Organization &#124; ORGANIZATION &#124; String                                                                                       | A string value that represents an organization.                                                                                             | Amelia, Inc                                                                                                                                                                                                                                                                                               |
| Person &#124; PERSON &#124; PersonName <note>See the [Person Datum](#PersonDatum) section below for special case information.</note> | A person's name                                                                                                                             | <ul><li>Mr. James Gosling</li> <li>James Gosling</li> <li>James</li></ul>                                                                                                                                                                                                                                 |
| Text &#124; TEXT &#124; String                                                                                                       | A text value                                                                                                                                | Hello World!                                                                                                                                                                                                                                                                                              |
| Time &#124; TIME &#124; LocalTime                                                                                                    | A time value                                                                                                                                | <ul><li>10:20:50 PM</li> <li>11:20:50 AM</li> <li>10 PM</li> <li>around 3 PM</li> <li>up to 9 AM</li> <li>up to nine AM</li> <li>at one PM</li> <li>4 hours after 6 PM</li> <li>03/02/2017 10:30 PM</li> <li>9:10:10 hrs</li> <li>18:10:10 hrs</li> <li>at 10 PM</li></ul>                                |
| USPhone Number &#124; PHONE_NUMBER &#124; String                                                                                     | A USphone number                                                                                                                            | 1112223333                                                                                                                                                                                                                                                                                                |
| IBAN (for non-US locales) &#124; IBAN &#124; String                                                                                  | Valid IBAN numbers                                                                                                                          | GB82 WEST 1234 5698 7654 32                                                                                                                                                                                                                                                                               |
| Nationality &#124; NATIONALITY &#124; String                                                                                         | Nationalities                                                                                                                               | <ul><li>Français</li> <li>Anglais</li></ul>                                                                                                                                                                                                                                                               |
| Occupation &#124; OCCUPATION &#124; String                                                                                           | Occupations                                                                                                                                 | <ul><li>Pharmacien</li> <li>comptable</li></ul>                                                                                                                                                                                                                                                           |
| Month/Year &#124;YEAR_MONTH &#124; YearMonth                                                                                         | Dates in a month/year format, such as mm/yy for credit card numbers. Assumes mm/yy instead of mm/dd.                                        | <ul><li>6/23</li> <li>6 2023</li></ul>                                                                                                                                                                                                                                                                    |
| Response &#124; RESPONSE &#124; String                                                                                               | Extracts the user's complete response to an Amelia Asks block in a Builder flow or Amelia Asks task in a BPN process. Returns a TEXT datum. | Amelia: Any comments you would like to add? <br/>User: Thank you for being such a great listener! <br/> Captures "Thank you for being such a great listener!"                                                                                                                                             |




###Person Datum {% #PersonDatum %}

The Person datum stores the name related information of a person. It supports the presence of prefix, suffix as well as composite middle and last names. Person is a special case since the value in the Person datum object is another object that contains the details of the person name; prefix, first name, middle name, last name.

To get the datum, call the value method on the datum and then get your chosen parameter by its name. You can also check and retrieve specific values from the datum using the following methods:

* hasFirstName(): Returns true if first name exists for the datum.

* firstName(): Returns the first name of the datum.

* hasMiddleName(): Returns true if middle name exists for the datum.

* middleName(): Returns the middle name of the datum.

* hasLastName(): Returns true if last name exists for the datum.

* lastName(): Returns the last name of the datum.

#### Example

```JavaScript
def personDatum = contextService.latestSlot('person_name'); if (personDatum.value().hasMiddleName()) { String middleName = personDatum.value().middleName(); } 
```

##Location Datum Types {% #Location %}

> Make sure that the inputs provided are valid. Amelia validates and confirms inputs before creating the datum and storing it. {style="warning"}

Location datums represent location-related information, including geolocation information. They also support geolocation-related operations, such as validating a location or finding the distance between two geolocations.

All the formatters for this type return the value of the location as it was originally passed as input. <madcap:conditionaltext madcap:conditions="Default.ContentInternal">
See our Formatters List topic for more information.

This table shows available location datums, their matches, stored value type, and relevant examples.

*Location Datum Types*

| Name &#124; Internal Name &#124; Stored Value Type       | Matches                                                        | Examples                                                                      |
|----------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------------|
| Airport &#124; AIRPORT &#124; String                     | An airport name                                                | <ul><li>Newark International Airport</li> <li>EWR</li></ul>                   |
| Capital &#124; CAPITAL &#124; String                     | Name of a capital                                              | New Delhi                                                                     |
| Country &#124; COUNTRY &#124; String                     | A country name                                                 | <ul><li>Mexico</li> <li>IND</li></ul>                                         |
| US City &#124; US_CITY &#124; String                     | A US city name                                                 | Boston                                                                        |
| US County &#124; US_COUNTY &#124; String                 | Name of a US county                                            | Suffolk                                                                       |
| US State &#124; US_STATE &#124; String                   | Name of a US state                                             | <ul><li>New Jersey</li> <li>MA</li></ul>                                      |
| US Street Address &#124; US_STREET_ADDRESS &#124; String | A US street address                                            | 17 State Street                                                               |
| USZipcode &#124; US_ZIPCODE &#124; String                | A US zip code                                                  | 10004                                                                         |
| Province &#124; PROVINCE &#124; String                   | Name of province or territory                                  | <ul><li>Cáceres</li> <li>Zamora</li> <li>Ontario</li> <li>Champagne</li></ul> |
| Prefecture &#124; PREFECTURE (Japan) &#124; String       | Name of a Japanese prefecture. Only in Japanese language pack. | 東京都                                                                           |



##Unit Datum Types {% #Unit %}

When creating unit datums, you must set a unit type.

These datums contain a unit to identify the type of information. Unit datums include the symbols and conversion values.

Amelia supports both, imperial and metric unit types used interchangeably. However, this is not recommended best practice.

All the formatters for this type would return the value in two forms; one with numeric value followed by the unit and the other with the numeric value in words followed by the unit. <madcap:conditionaltext madcap:conditions="Default.ContentInternal">
See our Formatters List topic for more information.

This table shows available unit datums, their matches, stored value type, and relevant examples.

*Unit Datum Types*

| Name &#124; Internal Name &#124; Stored Value Type | Matches          | Units                                                                                                                                                                                                                                                                                                                                                                       |
|----------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Age &#124; AGE &#124; BigDecimal                   | Age-unit type    | <ul><li>Decade</li> <li>Year</li> <li>Fiscal</li> <li>Month</li> <li>Quarter</li> <li>Day</li> <li>Hours</li> <li>Minutes</li> <li>Seconds</li> <li>Milliseconds</li></ul>                                                                                                                                                                                                  |
| Area &#124; AREA &#124; BigDecimal                 | Area unit        | <ul><li>Square_millimeters</li> <li>Square_centimeters</li> <li>Square_meters</li> <li>Square_kilometers</li> <li>Hectare</li> <li>Square_inches</li> <li>Square_feet</li> <li>Square_miles</li> <li>Square_yards</li> <li>Acre</li></ul>                                                                                                                                   |
| Currency &#124; CURRENCY &#124; BigDecimal         | Currency unit    | <ul><li>Currency symbols</li> <li>Currency names</li></ul>                                                                                                                                                                                                                                                                                                                  |
| Duration &#124; DURATION &#124; Long               | Duration unit    | <ul><li>Decade</li> <li>Year</li> <li>Fiscal</li> <li>Month</li> <li>Quarter</li> <li>Day</li> <li>Hours</li> <li>Minutes</li> <li>Seconds</li> <li>Milliseconds</li></ul>                                                                                                                                                                                                  |
| Percentage &#124; PERCENTAGE &#124; BigDecimal     | Percentage unit  | <ul><li>Percentage</li> <li>Percentile</li></ul>                                                                                                                                                                                                                                                                                                                            |
| Speed &#124; SPEED &#124; BigDecimal               | Speed unit       | <ul><li>Meters per second</li> <li>Kilometers per second</li> <li>Meter per minute</li> <li>Kilometers per hour</li> <li>Meters per hour</li> <li>Kilometer per minute</li> <li>Speed of Light</li> <li>Feet per hour</li> <li>Feet per minute</li> <li>Feet per second</li> <li>Miles per hour</li> <li>Miles per second</li> <li>Mile per minute</li> <li>Knots</li></ul> |
| Temperature &#124; TEMPERATURE &#124; BigDecimal   | Temperature unit | <ul><li>Celsius</li> <li>Fahrenheit</li></ul>                                                                                                                                                                                                                                                                                                                               |
| Volume &#124; VOLUME &#124; BigDecimal             | Volume unit      | <ul><li>Cubic Centimeters</li> <li>Cubic Meters</li> <li>Cubic Kilometers</li> <li>Milliliter</li> <li>Liter</li> <li>Cubic Inches</li> <li>Cubic Feet</li> <li>Cubic Miles</li> <li>Cubic Yards</li> <li>Ounce</li> <li>Gallon</li> <li>Acre Foot</li></ul>                                                                                                                |
| Weight &#124; WEIGHT &#124; BigDecimal             | Weight unit      | <ul><li>Grain</li> <li>Ounce</li> <li>Pound</li> <li>Short Ton</li> <li>Long Ton</li> <li>Milligram</li> <li>Grams</li> <li>Kilogram</li> <li>Tonne</li></ul>                                                                                                                                                                                                               |




##Custom Datum Types {% #Custom %}

When a datum doesn't fit an existing datum type, or a datum is created dynamically, a custom datum is created. A custom datum includes custom datum field types.

A custom datum cannot exist on its own. It requires a container which is defined as a Composite Datum. The composite datum should contain at least one Custom Datum of a type belonging to one of the pre-defined datum types.

There is no upper limit for the custom datum that the composite can hold.

##Range Datum Types {% #Range %}

Datums representing ranges belong to two main categories, ranges of simple datum types and ranges of unit datum types. A range datum has two values at maximum and one at minimum. All ranges include the start and the end value as part of the range.

Ranges can be open ended or closed. If both values are provided to the range, it would act as a closed range else it would act as an open range; either a closed open or an open closed range.

It's important that you provide a valid range to create and store a range datum.

*Range Datum Types*

| Range Type  |                  Description                  |          Example           |
|-------------|-----------------------------------------------|----------------------------|
| Closed      | Both values of the range provided             | From 30° C to 40° C        |
| Open closed | Only the end value of the range provided      | Until 30th of October 2024 |
| Closed open | Only the starting value of the range provided | Starting 10 AM CST         |



### Simple Range Datum Types

The simple range datum types use the Simple Datum types explained here: Simple Datum Types

This table shows available simple range datums, their matches, stored value type, and relevant examples.

*Simple Range Datum Types*

| Name &#124; Internal Name &#124; Stored Value Type        | Matches                               | Examples                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Date Range &#124; DATE_RANGE &#124; Guava Range           | A range of two date datum values      | <ul><li>I want wifi today and tomorrow</li> <li>I want wifi tomorrow</li> <li>By the end of day</li> <li>I need wifi in a day</li> <li>for the day</li> <li>for next 131 days</li> <li>for the next eleven days</li> <li>I want wifi next Sunday</li> <li>I need wifi in a week</li> <li>for the next 14 weeks</li> <li>for second week of April</li> <li>until the end of month</li> <li>nine years from now</li></ul>                                                                                                                                                                                 |
| Date Time Range &#124; DATE_TIME_RANGE &#124; Guava Range | A range of two date time datum values | I want wifi from tomorrow at 10 AM until next Friday at midnight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Decimal Range &#124; DECIMAL_RANGE &#124; Guava Range     | A range of two decimal datum values   | <ul><li>from 2010.5</li> <li>between 15.20 and 117.65</li> <li>from 100.70 to 107.23568</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Integer Range &#124; INTEGER_RANGE &#124; Guava Range     | A range of two integer datum values   | <ul><li>from 2010</li> <li>BETWEEN 15 and 117</li> <li>to 2500</li> <li>to two hundred</li> <li>from one hundred two to two hundred thirty three</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Ordinal Range &#124; ORDINAL_RANGE &#124; Guava Range     | A range of two ordinal datum values   | <ul><li>from 5th</li> <li>from three hundred and first</li> <li>to seventeenth</li> <li>between two thousand two hundred thirty second and ten thousand first</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Time Range &#124; TIME_RANGE &#124; Guava Range           | A range of two time datum values      | <ul><li>from 10 pm</li> <li>starting 10:25 pm</li> <li>after 10:25:10 pm</li> <li>to 10 pm</li> <li>before 10 pm</li> <li>up until 10:25 pm</li> <li>ending 10:25:10 pm</li> <li>from ten pm</li> <li>from eleven thirty five pm</li> <li>to ten pm</li> <li>ending eleven thirty five pm</li> <li>between 10:30 pm and 11 pm</li> <li>ending eleven thirty five pm</li> <li>between ten thirty pm and eleven pm</li> <li>4 hours after 6 pm</li> <li>from 2 pm to 5 pm</li> <li>from two pm to five pm</li> <li>from two thirty five pm to five fifty six pm</li> <li>from two am to five pm</li></ul> |



### Unit Range Datum Types

Like simple range datums, unit range have two unit datum objects, one start and one end.

This table shows available unit range datums, their matches, stored value type, and relevant examples.

*Simple Range Datum Types*

| Name &#124; Internal Name &#124; Stored Value Type            | Matches                                 | Examples                                                                                                                                                                                                                                                      |
|---------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Age Range &#124; AGE_RANGE &#124; Guava Range                 | A range of two age datum values         | from ages 10 to 20                                                                                                                                                                                                                                            |
| Area Range &#124; AREA_RANGE &#124; Guava Range               | A range of two area datum values        | <ul><li>from 200.98 sq meters</li> <li>to 100.70 acre</li> <li>between 80.40 sq meters and 100 sq meters</li> <li>until 100.70 hectare</li> <li>from one hundred sq m to two hundred sq m</li> <li>between three hundred sq m and five hundred sq m</li></ul> |
| Currency Range &#124; CURRENCY_RANGE &#124; Guava Range       | A range of two currency datum values    | from $100 to $200                                                                                                                                                                                                                                             |
| Duration Range &#124; DURATION_RANGE &#124; Guava Range       | A range of two duration datum values    | between 100 days and 200 days                                                                                                                                                                                                                                 |
| Length Range &#124; LENGTH_RANGE &#124; Guava Range           | A range of two length datum values      | <ul><li>from 76 cms</li> <li>starting 32.88 miles</li> <li>to 877 cms</li> <li>at most 12.77 miles</li> <li>BETWEEN 90.88 km and 350 miles</li></ul>                                                                                                          |
| Percentage Range &#124; PERCENTAGE_RANGE &#124; Guava Range   | A range of two percentage datum values  | <ul><li>from 50.65%</li> <li>to 70.50 %</li> <li>between 80 percent and 90 percentage</li> <li>until 56.70 percentile</li></ul>                                                                                                                               |
| Speed Range &#124; SPEED_RANGE &#124; Guava Range             | A range of two speed datum values       | <ul><li>from 100 meter per second</li> <li>starting 30.60 m/s</li> <li>to 100 km/hr</li> <li>at most 30.60 miles per hour</li> <li>BETWEEN 30.60 km/s and 50 m/s</li></ul>                                                                                    |
| Temperature Range &#124; TEMPERATURE_RANGE &#124; Guava Range | A range of two temperature datum values | <ul><li>from 70°C</li> <li>to 100.70 degree celsius</li> <li>between 5 degree celsius and 100 degree fahrenheit</li> <li>until 100.70 f</li></ul>                                                                                                             |
| Volume Range &#124; VOLUME_RANGE &#124; Guava Range           | A range of two volume datum values      | <ul><li>from 320.18 cu meters</li> <li>to 90.30 ounce</li> <li>between 20.10 cu cm and 500 cu cm</li> <li>until 983.76 gallon</li></ul>                                                                                                                       |
| Weight Range &#124; WEIGHT_RANGE &#124; Guava Range           | A range of two weight datum values      | <ul><li>from 200.98 mg</li> <li>to 100.70 oz</li> <li>between 80.40 kilogram and 100 kg</li> <li>until 100.70 tonne</li></ul>                                                                                                                                 |


## More Resources

For more information, see:

* [Entities Introduction](B03-07-NLU-Comprehension_B03-07_0301-Entities-Intro.md)
* [Managing Entities](B03-07_0302-Entities-Management.md)
* [Script Blocks](B03-04_0120-Script-Block.md)