# Tabular Data Management

## Introduction

To use the Tabular Data workspace, you must understand its features. You can add data in CSV table format for Amelia to use. For example, resolution codes for agents to use when closing escalated conversations. Or zip codes people select during a conversation with Amelia.

This topic describes the Tabular Data workspace, its features and where to find them.

## Access the Tabular Data Workspace

{% include from="B03-04_0601-Tabular-Data-Access.md" element-id="B03-04_0601-Tabular-Data-Access_snippet" /%}

![B03-04_0603-Tabular-Data-Workspace](B03-04_0603-Tabular-Data-Workspace.png){width="900" style="block"}

*The Tabular Data Workspace*

## What You'll Learn

In this topic you'll learn about:

* [Using the Tabular Data workspace](#Using).
* [Using the Tabular Data panel](#Using2).
* [Data requirements for tabular data files](#Data).
* [Adding a tabular data file](#Adding).
* [Searching for a tabular data file](#Searchin).
* [Editing a tabular data file](#Editing).
* [Deleting a tabular data file](#Deleting).
* [Using tabular data for Agent resolution codes](#Using4).
* [Using tabular data in conversation flows](#Using3).

##Using the Tabular Data Workspace {% #Using %}

The Tabular Data workspace includes tools to create and manage tabular data files.

*The Tabular Data Workspace Elements*


| Element           | Description                                                    |
|-------------------|----------------------------------------------------------------|
| Top Panel Buttons |                                                                |
| Save              | Click to save the tabular data.                                |
| Download          | Click to download the tabular data.                            |
| Replace           | Click to upload a file that replaces the current tabular data. |
| Delete            | Click to delete the tabular data.                              |


##Using the Tabular Data Panel {% #Using2 %}

This panel appears between the left edge navigation links and the Builder workspace. The panel displays a list of tabular data files.

To toggle open the Tabular Data panel, click the Conversation Flows icon link on the left edge navigation links. Then click the Tabular Data link in a flyout menu that appears. To close the panel, click the ![B03-04-DEB-Btn-Panel-Close](B03-04-DEB-Btn-Panel-Close.png){width="25" style="inline"} icon at the top right of the Tabular Data panel.

![B03-04_0603-Tabular-Data-Panel](B03-04_0603-Tabular-Data-Panel.png){width="400" style="block"}

*The Tabular Data Panel*

*The Tabular Data Panel Elements*


|   Element   |                              Description                               |
|-------------|------------------------------------------------------------------------|
| + Add New   | Click to display a new asset tab workspace.                            |
| Search Here | Click to type a character or word to filter the list of property sets. |


##Data Requirements {% #Data %}
Before you upload tabular data in CSV format, your data must meet these requirements.

<chapter title="File Rules" collapsible="true" level="5">
<ul>
<li>
<p>The size of the file should not exceed 20 MB.</p></li>
<li>
<p>The file should not be a corrupted file.</p></li>
<li>
<p>The file size should be more than 0 bytes.</p></li>
<li>
<p>The name of the file should be unique with respect to existing tables per domain.</p></li>
<li>
<p>If you have an Excel file, please save it as a (comma|tab|semi-colon|pipe) separated file before uploading.</p></li>
</ul>
</chapter>

<chapter title="File Content Rules" collapsible="true" level="5">
<ul>
<li>
<p>The file should contain data, a blank file would not be uploaded.</p></li>
<li>
<p>Headers for columns are mandatory.</p></li>
<li>
<p>There should exist at least one row other than the header row in the file.</p></li>
<li>
<p>The number of delimiters in each row should be the same.</p></li>
<li>
<p>In cases where your data contains a delimiter, please either remove the delimiter or qualify those values with a text qualifier (single-quote|double-quote).</p></li>
<li>
<p>Do not explicitly add double/single quotes to String related columns. The service can identify the type of the columns based on the data contained.</p></li>
<li>
<p>Each column has data of same type. Example: If the first row has data of type Integer, please make sure that all the following rows have Integer data for that column.</p></li>
<li>
<p>Empty fields in the first row would be treated as String type. Please make sure that your first row is completely populated.</p></li>
<li>
<p>Character support - UTF-8.</p></li>
<li>
<p>No two columns should have the same name.</p></li>
</ul>
</chapter>

<chapter title="Character Encodings" collapsible="true" level="5">
<p>These character encodings are supported:</p>
<ul>
<li>
<p>UTF-8</p></li>
<li>
<p>US-ASCII</p></li>
<li>
<p>ISO 8859-1</p></li>
<li>
<p>ISO 8859-2</p></li>
<li>
<p>ISO 8859-5</p></li>
<li>
<p>ISO 8859-6</p></li>
<li>
<p>ISO 8859-7</p></li>
<li>
<p>ISO 8859-8</p></li>
<li>
<p>ISO 8859-9</p></li>
<li>
<p>Windows-1250</p></li>
<li>
<p>Windows-1251</p></li>
<li>
<p>Windows-1252</p></li>
<li>
<p>Windows-1253</p></li>
<li>
<p>Windows-1254</p></li>
<li>
<p>Windows-1255</p></li>
<li>
<p>Windows-1256</p></li>
</ul>
</chapter>

<chapter title="Data Types" collapsible="true" level="5">
You can upload data in tabular data format with a variety of data types.

*Data Type Formats and Values*


| Data Type Name |    Description    | Acceptable Formats and Values                                                                                                                                                                                                                                                       |
|----------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Boolean        | Boolean           | true, false, T, F, Y, N, yes, no, YES, NO                                                                                                                                                                                                                                           |
| String         | String            | Up to ~2,147,483,647 characters, or available memory                                                                                                                                                                                                                                |
| Integer        | 32-bit integer    | -2,147,483,648 to 2,147,483,647                                                                                                                                                                                                                                                     |
| Long           | 64-bit integer    | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807                                                                                                                                                                                                                             |
| Big Integer    | Unbounded integer | Integers beyond the limits of the Long type                                                                                                                                                                                                                                         |
| Float          | 32-bit decimal    | 1.40239846 x 10-45 to 3.40282347 x 1038                                                                                                                                                                                                                                             |
| Double         | 64-bit decimal    | 4.9406564584124654 x 10-324 to 1.7976931348623157 x 10308                                                                                                                                                                                                                           |
| Big Decimal    | Unbounded decimal | Decimals beyond the limits of the Double type                                                                                                                                                                                                                                       |
| Date           | Date              | MM/dd/yyyy<br/>MM-dd-yyyy<br/>MM.dd.yyyy<br/>M/dd/yyyy<br/>M-dd-yyyy<br/>M.dd.yyyy<br/>MM/dd/yy<br/>M/d/yy<br/>M-d-yy<br/>M.d.yy<br/>yyyy/MM/dd<br/>yyyy-MM-dd<br/>yyyy.MM.dd<br/>yyyy/M/dd<br/>yyyy-M-dd<br/>yyyy.M.dd<br/>yy/M/d<br/>yy-M-d<br/>yy.M.d<br/>yyyymmdd<br/>yyyy-mm-dd                    |
| Time           | Time              | hh:mm a<br/>h:mm a<br/>hh\:mm:ss a<br/>h\:mm:ss a<br/>hh\:mm:ss<br/>h\:mm:ss<br/>HH\:mm:ss<br/>H\:mm:ss<br/>HH:mm<br/>H:mm                                                                                                                                                                         |
| Date-Time      | Date and Time     | yyyy-MM-dd HH\:mm:ss<br/>yyyy-MM-dd hh\:mm:ss a<br/>yyyy/MM/dd HH\:mm:ss<br/>yyyy-MM-dd HH:mm<br/>yyyy/MM/dd hh\:mm:ss a<br/>yyyy/MM/dd hh:mm<br/>M/dd/yy hh:mm a<br/>M/dd/yy hh:mm a<br/>M/dd/yy h:mm a<br/>M/dd/yy HH:mm<br/>M/d/yy HH:mm<br/>M/d/yy H:mm<br/>M/d/yy H:m<br/>yyyy-mm-dd'T'hh\:mm:ss |

</chapter>

##Adding Tabular Data {% #Adding %}

> **Note:** Before you add a tabular data file, please ensure it meets the Data Requirements described in the section above.

To add a new tabular data set:

1. Click the + Add New button in the Tabular Data panel between the left panel navigation and the Digital Employees Home tab workspace. If the panel isn't displayed, click the Conversation Flows icon link on the left edge then click the Tabular Data link that appears. A New Tabular Data tab workspace appears.

   ![B03-04_0603-Tabular-Data-New](B03-04_0603-Tabular-Data-New.png){width="600" style="block"}

   *A New Tabular Data Workspace*

2. Type a unique name in the Name field.

3. Click the File landing spot and use it to upload a CSV file. The file should meet the data requirements described in the section above.

4. Click the Upload button and then find the file to upload. Your data will appear in the workspace. Use this workspace to define any delimiters and text qualifiers before your data is imported.

   ![B03-04_0603-Tabular-Data-New-Save](B03-04_0603-Tabular-Data-New-Save.png){width="600" style="block"}

   *Data in New Tabular Data Workspace*

   *Data Elements in New Tabular Data Workspace*

   |    Element     |                                                                                                       Description                                                                                                        |
   |----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Delimiter      | Select a delimiter to use when your data is processed. Options are Comma, Tab, Semi-colon, and Pipe. Comma is the default.                                                                                               |
   | Text Qualifier | Select a text qualifier to use when your data is processed. Data between these qualifiers will be treated as a single entity when processed. Options are None, ' (single tick), or " (double-tick). None is the default. |
   | Raw Preview    | The raw output of your data.                                                                                                                                                                                             |
   | Preview        | A preview of what your data will look like after processing.                                                                                                                                                             |

5. Click the Save button to process and save your tabular data. Additional options will display in the top panel above the code.

##Searching for Tabular Data {% #Searchin %}

To search for a tabular data set, click the Search Here field at the top of the Tabular Data panel.

##Editing Tabular Data {% #Editing %}

> When editing, data is not available to Amelia for the time stated at the top of the form. {style="none"}

To edit an asset, click an entry in the Tabular Data panel. Then edit and make changes in the tab workspace that appears. Editing a tabular data displays your data in a tabular format. You can change data or the data type.

To delete a row, click the check box to the left of a row then click the Delete button that appears.

![B03-04_0603-Tabular-Data-Edit](B03-04_0603-Tabular-Data-Edit.png){width="900" style="block"}

*The Tabular Data Edit Form*

*Tabular Data Edit Form Elements*

| Element            | Description                                                                                                                                       |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Top Panel Buttons**  |                                                                                                                                                   |
| Save               | Click to save any changes to your tabular data.                                                                                                   |
| Cancel             | Click to cancel the edit. This removes the access lock. Amelia will have access to the tabular data.                                              |
| Lock Message       | When editing, this message displays a countdown clock. Amelia does not have access to the data until the Save or Cancel buttons are clicked.      |
| **Form Elements**      |                                                                                                                                                   |
| +Add Row           | Click to add a blank row at the bottom of the current workspace form.                                                                             |
| Data Type Dropdown | If needed, select a data type for the column of data. Data types are described in the Data Types dropdown in the Data Requirements section above. |
| Row Checkbox       | Click to select a row for deletion. When selected, a Delete button will appear at the top right of the form.                                      |
| Data Fields        | Click in any data field to change its data.                                                                                                       |


##Deleting Tabular Data {% #Deleting %}

To delete tabular data, click an entry in the Tabular Data panel. Then click the Delete button at the top of the Tabular Data tab workspace that appears.

##Using Tabular Data for Agent Resolution Codes {% #Using4 %}

{% include from="B06-00_0001-Agent-Resolution-Codes.md" element-id="B06-00_0001-Agent-Resolution-Codes_snippet" /%}

First, upload your resolution codes using the Tabular Data workspace. Then select Contact Center from the top main menu and then click the Escalation Queues left side icon. The Escalation Queues panel will display. Either click an existing queue listed in the panel or create a new one

Once a queue tab workspace displays, click the Properties tab. Then find the Resolution Codes Table setting. Select your resolution code tabular data file from the drop down list and save your changes. The codes will be available for any conversation escalated to that queue.

##Using Tabular Data in Conversation Flows {% #Using3 %}

It's possible to access tabular data in a Digital Employees builder flow. For example, you could have Amelia display office addresses, postal codes, and phone numbers in a conversation.

Amelia provides a query language that follows the Fluent interface. You can read about Fluent at Martin Fowler's website: https://martinfowler.com/bliki/FluentInterface.html. And also at Wikipedia: https://en.wikipedia.org/wiki/Fluent_interface.

Digital Employees builder Script blocks use a query operator to access tabular data. The query operator takes a minimum of one parameter, the name of the table to query. Following the table name, one can append any number of column names separated with a comma. These column will be projected.

> **Note:** The default name of the table is the same as the name of the file uploaded to the Tabular Data workspaces. You can change the table name at a later point and then use that name to query the tabular data entity.
```JavaScript
tabularDataService.query('tableName', 'columnName1', 'columnName2', ...) 
```

Query operators also can append conditional and ordering operators. This lets you filter and organize results available within a Script block.
```JavaScript
Tabular Data Query Example tabularDataService.query('realestate','beds','baths') .is('beds','2') .isNot('baths','1') .in('type','Condo','Residential') .sortAsc('beds') .sortDesc('baths') .first()['baths']==2 
```

You can order output ascending or descending by column. This is similar to SQL order by operation. Use the sortAsc and sortDesc conditional operators.

You also can sort multiple columns in different sort order. Write the sortAsc and sortDesc queries one after another with column names specified. The query service executes commands in sequence order.

<chapter title="Conditional Operators" collapsible="true" level="5">
<p>Tabular data operations follow generic Excel sheet or SQL query filter operations.</p>
<warning>Empty query parameters can cause processing errors.</warning>

*Conditional Operators*

| Operator |                                                             Example                                                             |                                                                                                                                                                                                                                            Description                                                                                                                                                                                                                                             |
|----------|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| is       | is('city','NYC')                                                                                                                | The is operator is similar to an equals operation. It takes two parameters. The first parameter is the column name to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                                              |
| isNot    | isNot('beds',2)                                                                                                                 | The isNot operator is similar to a not equals operation. It takes two parameters. The first parameter is the column name to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                                        |
| in       | in('baths',1,1.5,2)                                                                                                             | The in operator is similar to the IN operation in SQL. It takes a minimum of two parameters. The first parameter is the column name to compare the value in. There can be any number of parameters following the first parameter. All the rows that satisfy at least one parameter would be returned.                                                                                                                                                                                              |
| notIn    | notIn('beds',1,3)                                                                                                               | The notIn operator is similar to the NOT IN operation in SQL. It takes a minimum of two parameters. The first parameter is the column name to compare the value in. There can be any number of parameters following the first parameter. All the rows that satisfy at least one parameter would be returned.                                                                                                                                                                                       |
| isGt     | isGt('baths',0)                                                                                                                 | The isGt operator is similar to the > operator in most programming languages. It takes two parameters. The first parameter is the column name to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                   |
| isGte    | isGte('baths',1)                                                                                                                | The gte operator is similar to the >= operator in most programming languages. It takes two parameters. The first parameter is the column name to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                   |
| isLt     | isLt('rent', 4000)                                                                                                              | The less operator is similar to the < operator in most programming languages. It takes two parameters. The first parameter is the column name to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                   |
| isLte    | isLte('area',1200)                                                                                                              | The lte operator is similar to the <= operator in most programming languages. It takes two parameters. The first parameter is the column name to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                   |
| like     | like("appName", "bitlocker%") like("appName", "bitlocker") like("appName", "bitlock?r")                                         | The like operator is similar to the like operator in used in SQL queries. The function takes only two parameters and can only compare one value at a time. The first parameter to the function is the column name you want to compare the value in. The second parameter is the String value itself. Two wildcards are supported when comparing the values, % (percent) for any characters and ? (question mark) for matching one value at the character position.                                 |
| likeAny  | likeAny("appName", "bitlocker%", "windows", "?p", "ameliav3.2") likeAny("appName", "bitlocker") likeAny("appName", "bitlock?r") | The likeAny operator is similar to the like operator and can be used to compare String values. The function takes at least two parameters and can compare multiple values at the same time.The first parameter to the function is the column name you want to compare the value in. The second parameter is the String value itself. Two wildcards are supported when comparing the values, % (percent) for any characters and ? (question mark) for matching one value at the character position. |
| sortAsc  | sortAsc('beds')                                                                                                                 | The sortAsc operator sorts in ascending order the column passed as parameter.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sortDesc | sortDesc('beds')                                                                                                                | The sortDesc operator sorts in descending order the column passed as parameter.                                                                                                                                                                                                                                                                                                                                                                                                                    |


</chapter>

<chapter title="Return Value Operators" collapsible="true" level="5">
<p>These operators define what to return from a query.</p>

*Return Value Operators*


| Operator |                                                               Description                                                               |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| first    | Returns the first row that satisfies the query criteria. Returns a map representing a row.                                              |
| last     | Returns the last row that satisfies the query criteria. Returns a map representing a row.                                               |
| list     | Returns all the rows that satisfy the query criteria. Returns a map of maps, where each inner map is a row.                             |
| first(N) | Returns the first N rows that satisfy the query criteria. N should be an integer. Returns a map of maps, where each inner map is a row. |
| last(N)  | Returns the last N rows that satisfy the query criteria. N should be an integer. Returns a map of maps, where each inner map is a row.  |
| index(N) | Returns the row at index N out of rows that satisfy the query criteria. N should be an integer. Returns a map representing a row.       |


</chapter>

## More Resources

For more information, see:

* [Tabular Data Introduction](B03-04_0601-Tabular-Data-Intro.md).
* [Integrations Introduction](B03-06_0201-Integrations-Intro.md).
* [Integrations Management](B03-06_0205-Integrations-Management.md).

