# Tabular Service

## Introduction

{% include from="B03-04_0435-TabularSvc.md" element-id="B03-04_0435-TabularSvc_snippet" /%}

Amelia includes the ability to provide data in CSV table format to retrieve data. For example, postal code data or details about insurance plans. The tabular data is stored in Amelia's database. However, the data exists apart from the natural language processing and other features.

## What You'll Learn

In this topic you'll learn how to:

* [Call the Tabular service](#Calling).

* [Use the Tabular service](#Query).

##Call the Service {% #Calling %}

To call the service, use the `tabularDataService` handle appended to the service operation. For example, `tabularDataService.query`. Here the service calls the `query` operation. The operation provides an intuitive query language. You can specify tables, conditions, and other details.

##Query Operations {% #Query %}

The query operator takes a minimum of one parameter, the name of the table to query. Following the table name, you can append any number of column names separated with a comma.

Use the `tabularDataService` handle to call the following operations.

### Query Operator

In this example, the `.query` operator requests a table name and two column names.
```JavaScript
tabularDataService.query('tableName', 'columnName1', 'columnName2') 
```

> **Note:** The default name of the table is the same as the name of the file uploaded to the admin portal. You can change the table name and file name at a later point and then use that name to query the tabular data entity.

Query operators also can append conditional and ordering operators. These operators filter and organize results available within a Script task or Script block.
```JavaScript
tabularDataService.query('realestate','beds','baths') .is('beds','2') .isNot('baths','1') .in('type','Condo','Residential') .sortAsc('beds') .sortDesc('baths') .first()['baths']==2 
```

### Conditional Operators

Tabular service operations are similar to generic Excel Filters and SQL queries.

> Empty parameters in a query can cause execution errors. {style="warning"}

| Query Operator |                                                             Example                                                             |                                                                                                                                                                                                                                               Description                                                                                                                                                                                                                                               |
|----------------|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| is             | is('city','NYC')                                                                                                                | The is operator is similar to an equals operation. It takes two parameters. The first parameter is the column name you want to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                                          |
| isNot          | isNot('beds',2)                                                                                                                 | The isNot operator is similar to a not equals operation. It takes two parameters. The first parameter is the column name you want to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                                                    |
| in             | in('baths',1,1.5,2)                                                                                                             | The in operator is similar to the IN operation in SQL. It takes a minimum of two parameters. The first parameter is the column name you want to compare the value in. There can be any number of parameters following the first parameter. All the rows that satisfy at least one parameter would be returned.                                                                                                                                                                                          |
| notIn          | notIn('beds',1,3)                                                                                                               | The notIn operator is similar to the NOT IN operation in SQL. It takes a minimum of two parameters. The first parameter is the column name you want to compare the value in. There can be any number of parameters following the first parameter. All the rows that satisfy at least one parameter would be returned.                                                                                                                                                                                   |
| isGt           | isGt('baths',0)                                                                                                                 | The isGt operator is similar to the '>' operator in most programming languages. It takes two parameters. The first parameter is the column name you want to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                             |
| isGte          | isGte('baths',1)                                                                                                                | The gte operator is similar to the '>=' operator in most programming languages. It takes two parameters. The first parameter is the column name you want to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                             |
| isLt           | isLt('rent', 4000)                                                                                                              | The less operator is similar to the '<' operator in most programming languages. It takes two parameters. The first parameter is the column name you want to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                             |
| isLte          | isLte('area',1200)                                                                                                              | The lte operator is similar to the '<=' operator in most programming languages. It takes two parameters. The first parameter is the column name you want to compare the value in. The second parameter is the value itself.                                                                                                                                                                                                                                                                             |
| like           | like("appName", "bitlocker%") like("appName", "bitlocker") like("appName", "bitlock?r")                                         | The like operator is similar to the like operator in used in SQL queries. The function takes only two parameters and can only compare one value at a time. The first parameter to the function is the column name you want to compare the value in. The second parameter is the String value itself. Two wildcards are supported while comparing the values: % (percent) for any characters and ? (question mark) for matching one value at the character position.                                     |
| likeAny        | likeAny("appName", "bitlocker%", "windows", "?p", "ameliav3.2") likeAny("appName", "bitlocker") likeAny("appName", "bitlock?r") | The likeAny operator is similar to the like operator and can be used to compare String values. The function takes at least two parameters and can compare multiple values at the same time. The first parameter to the function is the column name you want to compare the value in. All the parameters following are the String values. Two wildcards are supported while comparing the values: % (percent) for any characters and ? (question mark) for matching one value at the character position. |
| sortAsc        | sortAsc('beds')                                                                                                                 | The sortAsc operator sorts the column passed as parameter in ascending order.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| sortDesc       | sortDesc('beds')                                                                                                                | The sortDesc operator sorts the column passed as parameter in descending order.                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Example/Examples

This example uses a number of query operators to build a query.
```JavaScript

tabular:query('realestate','beds','baths') .is('beds',2) .isNot('baths',1) .in('type','Condo','Residential') .sortAsc('beds') .sortDesc('baths') .first().get('baths')==2 
```

### Ordering Operators

As shown in the example below, the output can be ordered ascending and descending by columns. This is similar to SQL order by operation. Two operators, `sortAsc` and `sortDesc`, are provided for the same.

To sort multiple columns in sequence, write sortAsc and sortDesc queries one after another. Specify the column names.
```JavaScript
tabular:query('realestate','beds','baths') .is('beds',2) .isNot('baths',1) .in('type','Condo','Residential') .sortAsc('beds') .sortDesc('baths') .first().get('baths')==2
 ```


### Return Value Operators

Tabular data queries also can use return operators to specify what data to return.

| Return Operator |                                                               Description                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| first           | Returns the first row that satisfies the query criteria. Returns a map representing a row.                                              |
| last            | Returns the last row that satisfies the query criteria. Returns a map representing a row.                                               |
| list            | Returns all the rows that satisfy the query criteria. Returns a map of maps, where each inner map is a row.                             |
| first(N)        | Returns the first N rows that satisfy the query criteria. N should be an integer. Returns a map of maps, where each inner map is a row. |
| last(N)         | Returns the last N rows that satisfy the query criteria. N should be an integer. Returns a map of maps, where each inner map is a row.  |
| index(N)        | Returns the row at index N out of rows that satisfy the query criteria. N should be an integer. Returns a map representing a row.       |

#### Examples

Use array notation to access values provided by queries. Unless changed explicitly, the table name used for queries is the same as the tabular data file name.
```JavaScript
tabular:query('realestate','beds','baths') .is('beds',2) .isNot('baths',1) .in('type','Condo','Residential') .sortAsc('beds') .sortDesc('baths') .first()['baths']==2
 ```


To get the value of a specific column, use this or similar syntax. The first(), last(), and index(N) operators return one row.
```JavaScript
first()['column_name'] last()['column_name'] index(10)['column_name']
 ```


To get the value of a particular row, use this or similar syntax. The list(), firstN(n), and lastN(n) operators return a map of maps. These have the schema <index_number, <column_name, column_value>>.
```JavaScript
list()[index] firstN(10)[index] lastN(10)[index]
 ```


To get the value of a particular row, use this or similar syntax.
```JavaScript
list()[index]['column_name'] firstN(10)[index]['column_name'] lastN(10)[index]['column_name']
 ```


This example uses the list() operator to return the value of a column in a specific row 2.
```JavaScript
def rows = tabularDataService.query('realestate').is('beds',3).list(); // Returns the second row log.info(rows[2]); // Returns the value of the column 'beds' in the second row log.info(rows[2]['beds']); execution.setVariable('value', rows[2]['beds'])
 ```


### Evaluating Output

Tabular data query output values can be accessed with array notation. Also note the table name to query is the same as the name of the uploaded file unless it is change explicitly in code.
```JavaScript
tabularDataService.query('person','first_name','gender','rank') .likeAny('country','%in%','%ic%') .list(); tabularDataService.query('sortAscIndex_1','first_name','gender','rank') .is('gender','Male') .sortAsc('rank') .index(2)['rank']==7;
 ```


## More Resources

{% include from="B03-04_0421-MoreResources.md" element-id="B03-04_0421-MoreResources_snippet" /%}

 
