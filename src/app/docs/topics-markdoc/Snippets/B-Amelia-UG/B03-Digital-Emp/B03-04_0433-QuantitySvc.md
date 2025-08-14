# B03-04_0433-QuantitySvc

{is-library="true"}

<snippet id="B03-04_0433-QuantitySvc_snippet"> **Note:** The Quantity service normalizes and formats date references and quantity data. So, if a user says, "day after tomorrow," this service converts the phrase to a date. This date uses the local time zone with your user-specified format.

We refer to this normalized data as datum. There are different datum types, such as location, length, speed, weight, and temperature.

Formatters ensure that datums use formats that Amelia can process. For example, the utterance "3 in the afternoon," is 1500 if formatted with a 24-hour time format.

> Using the Quantity service can affect performance. In these cases, turning off context switching can improve results. In the Amelia Asks block and task properties, set these parameters to No: "If imperative allow others to respond," "If interrogative allow others to respond," and "If declarative allow others to respond."


</snippet>