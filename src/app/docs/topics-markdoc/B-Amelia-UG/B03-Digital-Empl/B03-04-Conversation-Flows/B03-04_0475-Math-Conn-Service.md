# Math Connection Service

## Introduction

{% include from="B03-04_0474-ConServ-Math.md" element-id="B03-04_0474-ConServ-Math_snippet" /%}

## What You'll Learn

In this topic you'll learn how to:

* [Call the Math connection service](#Calling).
* [Use the Amelia-specific Math connection service operations](#Operatio).
* [Use system-related Math connection service operations](#System).

##Call the Service {% #Calling %}

To call the service, use the `math` handle appended to the service operation. For example, `math:round`. Here the service calls the `round` operation. The operation uses this connection to round off a floating point number or double to the specified number of decimal places.

##Amelia-Specific Operations {% #Operatio %}

Use the `math` handle to call any of the following operations:

### round(number, decimalPlaces) {id="round-number-decimalplaces_1"}

This operation rounds off a float to the specified number of decimal places.

#### Parameters {id="parameters_1"}

|   Parameter   |  Type   |                  Description                  |
|---------------|---------|-----------------------------------------------|
| number        | Float   | A number.                                     |
| decimalPlaces | Integer | The number of decimal places to round off to. |

#### Returns {id="returns_1"}

| Type  |         Description          |
|-------|------------------------------|
| float | Returns the resulting float. |

### round(number, decimalPlaces)

This operation rounds off a double to the specified number of decimal places.

#### Parameters {id="parameters_2"}

|   Parameter   |  Type   |                  Description                  |
|---------------|---------|-----------------------------------------------|
| number        | Double  | A number                                      |
| decimalPlaces | Integer | The number of decimal places to round off to. |

#### Returns {id="returns_2"}

|  Type  |          Description          |
|--------|-------------------------------|
| double | Returns the resulting double. |

### truncate(number, decimalPlaces) {id="truncate-number-decimalplaces_1"}

This operation truncates a float to the specified number of decimal places.

#### Parameters {id="parameters_3"}

|   Parameter   |  Type   |                  Description                  |
|---------------|---------|-----------------------------------------------|
| number        | Float   | A number                                      |
| decimalPlaces | Integer | The number of decimal places to round off to. |

#### Returns {id="returns_3"}

| Type  |         Description          |
|-------|------------------------------|
| float | Returns the resulting float. |

### truncate(number, decimalPlaces)

This operation truncates a double to the specified number of decimal places.

#### Parameters {id="parameters_4"}

|   Parameter   |  Type   |                  Description                  |
|---------------|---------|-----------------------------------------------|
| number        | Double  | A number                                      |
| decimalPlaces | Integer | The number of decimal places to round off to. |

#### Returns {id="returns_4"}

|  Type  |          Description          |
|--------|-------------------------------|
| double | Returns the resulting double. |

##System Math Operations {% #System %}

The Math service provides operations relying on the implementation provided by Oracle.

Use the `math` handle to call any of the following operations:

### double sin(double number)

Returns the trigonometric sine of an angle. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_5"}

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| a         |      | An angle, in radians. |

#### Returns {id="returns_5"}

| Type | Description                       |
|------|-----------------------------------|
| TBA  | Returns the sine of the argument. |

### double cos(double number)

Returns the trigonometric cosine of an angle. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_6"}

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| a         |      | An angle, in radians. |

#### Returns {id="returns_6"}

| Type |             Description             |
|------|-------------------------------------|
| TBA  | Returns the cosine of the argument. |

### double tan(double number)

Returns the trigonometric tangent of an angle. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_7"}

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| a         |      | An angle, in radians. |

#### Returns {id="returns_7"}

| Type |             Description              |
|------|--------------------------------------|
| TBA  | Returns the tangent of the argument. |

### double asin(double number)

Returns the arc sine of a value; the returned angle is in the range -pi/2 through pi/2. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_8"}

| Parameter | Type |                 Description                 |
|-----------|------|---------------------------------------------|
| a         |      | The value whose arc sine is to be returned. |

#### Returns {id="returns_8"}

| Type |              Description              |
|------|---------------------------------------|
| TBA  | Returns the arc sine of the argument. |

### double acos(double number)

Returns the arc cosine of a value; the returned angle is in the range 0.0 through pi. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_9"}

| Parameter | Type |                  Description                  |
|-----------|------|-----------------------------------------------|
| a         |      | The value whose arc cosine is to be returned. |

#### Returns {id="returns_9"}

| Type |               Description               |
|------|-----------------------------------------|
| TBA  | Returns the arc cosine of the argument. |

### double atan(double number)

Returns the arc tangent of a value; the returned angle is in the range -pi/2 through pi/2. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_10"}

| Parameter | Type |                  Description                   |
|-----------|------|------------------------------------------------|
| a         |      | The value whose arc tangent is to be returned. |

#### Returns {id="returns_10"}

| Type |               Description                |
|------|------------------------------------------|
| TBA  | Returns the arc tangent of the argument. |

### double toRadians(double angleInDegrees)

Converts an angle measured in degrees to an approximately equivalent angle measured in radians. The conversion from degrees to radians is generally inexact.

#### Parameters {id="parameters_11"}

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| angdeg    |      | An angle, in degrees. |

#### Returns {id="returns_11"}

| Type |                       Description                       |
|------|---------------------------------------------------------|
| TBA  | Returns the measurement of the angle angdeg in radians. |

### double toDegrees(double angleInRadians)

Converts an angle measured in radians to an approximately equivalent angle measured in degrees. The conversion from radians to degrees is generally inexact; you should not expect cos(toRadians(90.0)) to equal 0.0.

#### Parameters {id="parameters_12"}

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| angrad    |      | An angle, in radians. |

#### Returns {id="returns_12"}

| Type |                       Description                       |
|------|---------------------------------------------------------|
| TBA  | Returns the measurement of the angle angrad in degrees. |

### double exp(double number)

Returns Euler's number e raised to the power of a double value. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_13"}

| Parameter | Type |         Description         |
|-----------|------|-----------------------------|
| a         |      | The exponent to raise e to. |

#### Returns {id="returns_13"}

| Type |                             Description                              |
|------|----------------------------------------------------------------------|
| TBA  | Returns the value ea, where e is the base of the natural logarithms. |

### double log(double number)

Returns the natural logarithm (base e) of a double value. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_14"}

| Parameter | Type | Description |
|-----------|------|-------------|
| a         |      | A value.    |

#### Returns {id="returns_14"}

| Type |                     Description                     |
|------|-----------------------------------------------------|
| TBA  | Returns the value ln a, the natural logarithm of a. |

### double log10(double number)

Returns the base 10 logarithm of a double value. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_15"}

| Parameter | Type | Description |
|-----------|------|-------------|
| a         |      | A value.    |

#### Returns {id="returns_15"}

| Type |             Description             |
|------|-------------------------------------|
| TBA  | Returns the base 10 logarithm of a. |

### double sqrt(double number)

Returns the correctly rounded positive square root of a double value. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_16"}

| Parameter | Type | Description |
|-----------|------|-------------|
| a         |      | A value.    |

#### Returns {id="returns_16"}

| Type |                                             Description                                             |
|------|-----------------------------------------------------------------------------------------------------|
| TBA  | Returns the positive square root of a. If the argument is NaN or less than zero, the result is NaN. |

### double cbrt(double number)

Returns the cube root of a double value. For positive finite x, cbrt(-x) == -cbrt(x); that is, the cube root of a negative value is the negative of the cube root of that value's magnitude.

#### Parameters {id="parameters_17"}

| Parameter | Type | Description |
|-----------|------|-------------|
| a         |      | A value.    |

#### Returns {id="returns_17"}

| Type |         Description         |
|------|-----------------------------|
| TBA  | Returns the cube root of a. |

### double ceil(double number)

Returns the smallest (closest to negative infinity) double value that is greater than or equal to the argument and is equal to a mathematical integer. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_18"}

| Parameter | Type | Description |
|-----------|------|-------------|
| a         |      | A value.    |

#### Returns {id="returns_18"}

| Type |                                                                          Description                                                                           |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TBA  | Returns the smallest (closest to negative infinity) floating-point value that is greater than or equal to the argument and is equal to a mathematical integer. |

### double floor(double number)

Returns the largest (closest to positive infinity) double value that is less than or equal to the argument and is equal to a mathematical integer. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_19"}

| Parameter | Type | Description |
|-----------|------|-------------|
| a         |      | A value.    |

#### Returns {id="returns_19"}

| Type |                                                                       Description                                                                       |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| TBA  | Returns the largest (closest to positive infinity) floating-point value that less than or equal to the argument and is equal to a mathematical integer. |

### double rint(double number)

Returns the double value that is closest in value to the argument and is equal to a mathematical integer. If two double values that are mathematical integers are equally close, the result is the integer value that is even. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_20"}

| Parameter | Type |   Description   |
|-----------|------|-----------------|
| a         |      | A double value. |

#### Returns {id="returns_20"}

| Type |                                      Description                                       |
|------|----------------------------------------------------------------------------------------|
| TBA  | Returns the closest floating-point value to a that is equal to a mathematical integer. |

### double atan2(double ordinate, double abscissa)

Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta). This method computes the phase theta by computing an arc tangent of y/x in the range of -pi to pi. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_21"}

| Parameter | Type |       Description        |
|-----------|------|--------------------------|
| y         |      | The ordinate coordinate. |
| x         |      | The abscissa coordinate. |

#### Returns {id="returns_21"}

| Type |                                                               Description                                                               |
|------|-----------------------------------------------------------------------------------------------------------------------------------------|
| TBA  | Returns the theta component of the point (r, theta) in polar coordinates that corresponds to the point (x, y) in Cartesian coordinates. |

### double pow(double base, double exponent)

Returns the value of the first argument raised to the power of the second argument. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_22"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | The base.         |
| b         |      | The the exponent. |

#### Returns {id="returns_22"}

| Type |      Description      |
|------|-----------------------|
| TBA  | Returns the value ab. |

### int round(float number)

Returns the closest int to the argument, with ties rounding to positive infinity. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_23"}

| Parameter | Type |                     Description                     |
|-----------|------|-----------------------------------------------------|
| a         |      | A floating-point value to be rounded to an integer. |

#### Returns {id="returns_23"}

| Type |                             Description                             |
|------|---------------------------------------------------------------------|
| TBA  | Returns the value of the argument rounded to the nearest int value. |

### long round(double number)

Returns the closest long to the argument, with ties rounding to positive infinity. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_24"}

| Parameter | Type |                   Description                   |
|-----------|------|-------------------------------------------------|
| a         |      | A floating-point value to be rounded to a long. |

#### Returns {id="returns_24"}

| Type |                             Description                              |
|------|----------------------------------------------------------------------|
| TBA  | Returns the value of the argument rounded to the nearest long value. |

### double random()

Returns a double value with a positive sign, greater than or equal to 0.0 and less than 1.0. Returned values are chosen pseudorandomly with (approximately) uniform distribution from that range.  For more information on first calling this operation, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_25"}

This operation has no parameters.

#### Returns {id="returns_25"}

| Type |                                  Description                                  |
|------|-------------------------------------------------------------------------------|
| TBA  | Returns a pseudorandom double greater than or equal to 0.0 and less than 1.0. |

### int addExact(int firstValue, int secondValue)

Returns the sum of its arguments, throwing an exception if the result overflows an int.

#### Parameters {id="parameters_26"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| x         |      | The first value.  |
| y         |      | The second value. |

#### Returns {id="returns_26"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows an int. |

### long addExact(long firstValue, long secondValue)

Returns the sum of its arguments, throwing an exception if the result overflows a long.

#### Parameters {id="parameters_27"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| x         |      | The first value.  |
| y         |      | The second value. |

#### Returns {id="returns_27"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows a long. |

### int subtractExact(int firstValue, int secondValue)

Returns the difference of the arguments, throwing an exception if the result overflows an int.

#### Parameters {id="parameters_28"}

| Parameter | Type |                 Description                  |
|-----------|------|----------------------------------------------|
| x         |      | The first value.                             |
| y         |      | The second value to subtract from the first. |

#### Returns {id="returns_28"}

| Type |                                   Description                                    |
|------|----------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException - if the result overflows an int. |

### long subtractExact(long firstValue, long secondValue)

Returns the difference of the arguments, throwing an exception if the result overflows a long.

#### Parameters {id="parameters_29"}

| Parameter | Type |                 Description                  |
|-----------|------|----------------------------------------------|
| x         |      | The first value.                             |
| y         |      | The second value to subtract from the first. |

#### Returns {id="returns_29"}

| Type |                                   Description                                    |
|------|----------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException - if the result overflows a long. |

### int multiplyExact(int firstValue, int secondValue)

Returns the product of the arguments, throwing an exception if the result overflows an int.

#### Parameters {id="parameters_30"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| x         |      | The first value.  |
| y         |      | The second value. |

#### Returns {id="returns_30"}

| Type |                                   Description                                    |
|------|----------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException - if the result overflows an int. |

### long multiplyExact(long firstValue, long secondValue)

Returns the product of the arguments, throwing an exception if the result overflows a long.

#### Parameters {id="parameters_31"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| x         |      | The first value.  |
| y         |      | The second value. |

#### Returns {id="returns_31"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows a long. |

### int incrementExact(int number)

Returns the argument incremented by one, throwing an exception if the result overflows an int.

#### Parameters {id="parameters_32"}

| Parameter | Type |       Description       |
|-----------|------|-------------------------|
| a         |      | The value to increment. |

#### Returns {id="returns_32"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows an int. |

### long incrementExact(long number)

Returns the argument incremented by one, throwing an exception if the result overflows a long.

#### Parameters {id="parameters_33"}

| Parameter | Type |       Description       |
|-----------|------|-------------------------|
| a         |      | The value to increment. |

#### Returns {id="returns_33"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows a long. |

### int decrementExact(int number)

Returns the argument decremented by one, throwing an exception if the result overflows an int.

#### Parameters {id="parameters_34"}

| Parameter | Type |       Description       |
|-----------|------|-------------------------|
| a         |      | The value to decrement. |

#### Returns {id="returns_34"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows an int. |

### long decrementExact(long number)

Returns the argument decremented by one, throwing an exception if the result overflows a long.

#### Parameters {id="parameters_35"}

| Parameter | Type |       Description       |
|-----------|------|-------------------------|
| a         |      | The value to decrement. |

#### Returns {id="returns_35"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows a long. |

### int negateExact(int number)

Returns the negation of the argument, throwing an exception if the result overflows an int.

#### Parameters {id="parameters_36"}

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| a         |      | The value to negate. |

#### Returns {id="returns_36"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows an int. |

### long negateExact(long number)

Returns the negation of the argument, throwing an exception if the result overflows a long.

#### Parameters {id="parameters_37"}

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| a         |      | The value to negate. |

#### Returns {id="returns_37"}

| Type |                                  Description                                   |
|------|--------------------------------------------------------------------------------|
| TBA  | Returns the result. Throws ArithmeticException if the result overflows a long. |

### int toIntExact(long value)

Returns the value of the long argument; throwing an exception if the value overflows an int.

#### Parameters {id="parameters_38"}

| Parameter | Type |   Description   |
|-----------|------|-----------------|
| value     |      | The long value. |

#### Returns {id="returns_38"}

| Type |                                         Description                                          |
|------|----------------------------------------------------------------------------------------------|
| TBA  | Returns the argument as an int. Throws ArithmeticException if the argument overflows an int. |

### int floorDiv(int dividend, int divisor)

Returns the largest (closest to positive infinity) int value that is less than or equal to the algebraic quotient. There is one special case, if the dividend is the Integer.MIN_VALUE and the divisor is -1, then integer overflow occurs and the result is equal to the Integer.MIN_VALUE. For more information on this operation, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_39"}

| Parameter | Type |  Description  |
|-----------|------|---------------|
| x         |      | The dividend. |
| y         |      | The divisor.  |

#### Returns {id="returns_39"}

| Type |                                                                               Description                                                                               |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TBA  | Returns the largest (closest to positive infinity) int value that is less than or equal to the algebraic quotient. Throws ArithmeticException if the divisor y is zero. |

### long floorDiv(long dividend, long divisor)

Returns the largest (closest to positive infinity) long value that is less than or equal to the algebraic quotient. There is one special case, if the dividend is the Long.MIN_VALUE and the divisor is -1, then integer overflow occurs and the result is equal to the Long.MIN_VALUE. For more information on this operation, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_40"}

| Parameter | Type |  Description  |
|-----------|------|---------------|
| x         |      | The dividend. |
| y         |      | The divisor.  |

#### Returns {id="returns_40"}

| Type |                                                                               Description                                                                                |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TBA  | Returns the largest (closest to positive infinity) long value that is less than or equal to the algebraic quotient. Throws ArithmeticException if the divisor y is zero. |

### int floorMod(int dividend, int divisor)

Returns the floor modulus of the int arguments. For more information on this operation, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_41"}

| Parameter | Type |  Description  |
|-----------|------|---------------|
| x         |      | The dividend. |
| y         |      | The divisor.  |

#### Returns {id="returns_41"}

| Type |                                               Description                                                |
|------|----------------------------------------------------------------------------------------------------------|
| TBA  | Returns the floor modulus x - (floorDiv(x, y) * y). Throws ArithmeticException if the divisor y is zero. |

### long floorMod(long dividend, long divisor)

Returns the floor modulus of the long arguments.

#### Parameters {id="parameters_42"}

| Parameter | Type |  Description  |
|-----------|------|---------------|
| x         |      | The dividend. |
| y         |      | The divisor.  |

#### Returns {id="returns_42"}

| Type |                                               Description                                                |
|------|----------------------------------------------------------------------------------------------------------|
| TBA  | Returns the floor modulus x - (floorDiv(x, y) * y). Throws ArithmeticException if the divisor y is zero. |

### int abs(int number)

Returns the absolute value of an int value. If the argument is not negative, the argument is returned. If the argument is negative, the negation of the argument is returned.

If the argument is equal to the value of Integer.MIN_VALUE, the most negative representable int value, the result is that same value, which is negative.

#### Parameters {id="parameters_43"}

| Parameter | Type |                      Description                       |
|-----------|------|--------------------------------------------------------|
| a         |      | The argument whose absolute value is to be determined. |

#### Returns {id="returns_43"}

| Type |                 Description                 |
|------|---------------------------------------------|
| TBA  | Returns the absolute value of the argument. |

### long abs(long number)

Returns the absolute value of a long value. If the argument is not negative, the argument is returned. If the argument is negative, the negation of the argument is returned.

If the argument is equal to the value of Long.MIN_VALUE, the most negative representable long value, the result is that same value, which is negative.

#### Parameters {id="parameters_44"}

| Parameter | Type |                      Description                       |
|-----------|------|--------------------------------------------------------|
| a         |      | The argument whose absolute value is to be determined. |

#### Returns {id="returns_44"}

| Type |                 Description                 |
|------|---------------------------------------------|
| TBA  | Returns the absolute value of the argument. |

### float abs(float number)

Returns the absolute value of a float value. If the argument is not negative, the argument is returned. If the argument is negative, the negation of the argument is returned. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_45"}

| Parameter | Type |                      Description                       |
|-----------|------|--------------------------------------------------------|
| a         |      | The argument whose absolute value is to be determined. |

#### Returns {id="returns_45"}

| Type |                 Description                 |
|------|---------------------------------------------|
| TBA  | Returns the absolute value of the argument. |

### double abs(double number)

Returns the absolute value of a double value. If the argument is not negative, the argument is returned. If the argument is negative, the negation of the argument is returned. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_46"}

| Parameter | Type |                      Description                       |
|-----------|------|--------------------------------------------------------|
| a         |      | The argument whose absolute value is to be determined. |

#### Returns {id="returns_46"}

| Type |                 Description                 |
|------|---------------------------------------------|
| TBA  | Returns the absolute value of the argument. |

### int max(int firstValue, int secondValue)

Returns the greater of two int values. That is, the result is the argument closer to the value of Integer.MAX_VALUE. If the arguments have the same value, the result is that same value.

#### Parameters {id="parameters_47"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_47"}

| Type |          Description           |
|------|--------------------------------|
| TBA  | Returns the larger of a and b. |

### long max(long firstValue, long secondValue)

Returns the greater of two long values. That is, the result is the argument closer to the value of Long.MAX_VALUE. If the arguments have the same value, the result is that same value.

#### Parameters {id="parameters_48"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_48"}

| Type |          Description           |
|------|--------------------------------|
| TBA  | Returns the larger of a and b. |

### float max(float firstValue, float secondValue)

Returns the greater of two float values. That is, the result is the argument closer to positive infinity. If the arguments have the same value, the result is that same value. If either value is NaN, then the result is NaN. Unlike the numerical comparison operators, this method considers negative zero to be strictly smaller than positive zero. If one argument is positive zero and the other negative zero, the result is positive zero.

#### Parameters {id="parameters_49"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_49"}

| Type |          Description           |
|------|--------------------------------|
| TBA  | Returns the larger of a and b. |

### double max(double firstValue, double secondValue)

Returns the greater of two double values. That is, the result is the argument closer to positive infinity. If the arguments have the same value, the result is that same value. If either value is NaN, then the result is NaN. Unlike the numerical comparison operators, this method considers negative zero to be strictly smaller than positive zero. If one argument is positive zero and the other negative zero, the result is positive zero.

#### Parameters {id="parameters_50"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_50"}

| Type |          Description           |
|------|--------------------------------|
| TBA  | Returns the larger of a and b. |

### int min(int firstValue, int secondValue)

Returns the smaller of two int values. That is, the result the argument closer to the value of Integer.MIN_VALUE. If the arguments have the same value, the result is that same value.

#### Parameters {id="parameters_51"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_51"}

| Type |           Description           |
|------|---------------------------------|
| TBA  | Returns the smaller of a and b. |

### long min(long firstValue, long secondValue)

Returns the smaller of two long values. That is, the result is the argument closer to the value of Long.MIN_VALUE. If the arguments have the same value, the result is that same value.

#### Parameters {id="parameters_52"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_52"}

| Type |           Description           |
|------|---------------------------------|
| TBA  | Returns the smaller of a and b. |

### float min(float firstValue, float secondValue)

Returns the smaller of two float values. That is, the result is the value closer to negative infinity. If the arguments have the same value, the result is that same value. If either value is NaN, then the result is NaN. Unlike the numerical comparison operators, this method considers negative zero to be strictly smaller than positive zero. If one argument is positive zero and the other is negative zero, the result is negative zero.

#### Parameters {id="parameters_53"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_53"}

| Type |           Description           |
|------|---------------------------------|
| TBA  | Returns the smaller of a and b. |

### double min(double firstValue, double anohterValue)

Returns the smaller of two double values. That is, the result is the value closer to negative infinity. If the arguments have the same value, the result is that same value. If either value is NaN, then the result is NaN. Unlike the numerical comparison operators, this method considers negative zero to be strictly smaller than positive zero. If one argument is positive zero and the other is negative zero, the result is negative zero.

#### Parameters {id="parameters_54"}

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| a         |      | An argument.      |
| b         |      | Another argument. |

#### Returns {id="returns_54"}

| Type |           Description           |
|------|---------------------------------|
| TBA  | Returns the smaller of a and b. |

### double fma(double firstValue, double secondValue, double thirdValue)

 

### float fma(float firstValue, float secondValue, float thirdValue)

### double ulp(double number)

Returns the size of an ulp of the argument. An ulp, unit in the last place, of a double value is the positive distance between this floating-point value and the double value next larger in magnitude. Note that for non-NaN x, ulp(-x) == ulp(x). For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_55"}

| Parameter | Type |                      Description                      |
|-----------|------|-------------------------------------------------------|
| d         |      | The floating-point value whose ulp is to be returned. |

#### Returns {id="returns_55"}

| Type |                 Description                 |
|------|---------------------------------------------|
| TBA  | Returns the size of an ulp of the argument. |

### float ulp(float number)

Returns the size of an ulp of the argument. An ulp, unit in the last place, of a float value is the positive distance between this floating-point value and the float value next larger in magnitude. Note that for non-NaN x, ulp(-x) == ulp(x). For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_56"}

| Parameter | Type |                      Description                      |
|-----------|------|-------------------------------------------------------|
| d         |      | The floating-point value whose ulp is to be returned. |

#### Returns {id="returns_56"}

| Type |                 Description                 |
|------|---------------------------------------------|
| TBA  | Returns the size of an ulp of the argument. |

### double signum(double number)

Returns the signum function of the argument; zero if the argument is zero, 1.0 if the argument is greater than zero, -1.0 if the argument is less than zero. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_57"}

| Parameter | Type |                       Description                        |
|-----------|------|----------------------------------------------------------|
| d         |      | The floating-point value whose signum is to be returned. |

#### Returns {id="returns_57"}

| Type |                 Description                  |
|------|----------------------------------------------|
| TBA  | Returns the signum function of the argument. |

### float signum(float number)

Returns the signum function of the argument; zero if the argument is zero, 1.0f if the argument is greater than zero, -1.0f if the argument is less than zero. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_58"}

| Parameter | Type |                       Description                        |
|-----------|------|----------------------------------------------------------|
| d         |      | The floating-point value whose signum is to be returned. |

#### Returns {id="returns_58"}

| Type |                 Description                  |
|------|----------------------------------------------|
| TBA  | Returns the signum function of the argument. |

### double sinh(double number)

Returns the hyperbolic sine of a double value. The hyperbolic sine of x is defined to be (ex - e-x)/2 where e is Euler's number. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_59"}

| Parameter | Type |                     Description                     |
|-----------|------|-----------------------------------------------------|
| x         |      | The number whose hyperbolic sine is to be returned. |

#### Returns {id="returns_59"}

| Type |            Description            |
|------|-----------------------------------|
| TBA  | Returns the hyperbolic sine of x. |

### double cosh(double number)

Returns the hyperbolic cosine of a double value. The hyperbolic cosine of x is defined to be (ex + e-x)/2 where e is Euler's number. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_60"}

| Parameter | Type |                      Description                      |
|-----------|------|-------------------------------------------------------|
| x         |      | The number whose hyperbolic cosine is to be returned. |

#### Returns {id="returns_60"}

| Type |             Description             |
|------|-------------------------------------|
| TBA  | Returns the hyperbolic cosine of x. |

### double tanh(double number)

Returns the hyperbolic tangent of a double value. The hyperbolic tangent of x is defined to be (ex - e-x)/(ex + e-x), in other words, sinh(x)/cosh(x). Note that the absolute value of the exact tanh is always less than 1. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_61"}

| Parameter | Type |                      Description                       |
|-----------|------|--------------------------------------------------------|
| x         |      | The number whose hyperbolic tangent is to be returned. |

#### Returns {id="returns_61"}

| Type |             Description              |
|------|--------------------------------------|
| TBA  | Returns the hyperbolic tangent of x. |

### double hypot(double firstValue, double secondValue)

Returns sqrt(x2 +y2) without intermediate overflow or underflow. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_62"}

| Parameter | Type | Description |
|-----------|------|-------------|
| x         |      | A value.    |
| y         |      | A value.    |

#### Returns {id="returns_62"}

| Type |                             Description                              |
|------|----------------------------------------------------------------------|
| TBA  | Returns the sqrt(x2 +y2) without intermediate overflow or underflow. |

### double expm1(double number)

Returns ex -1. Note that for values of x near 0, the exact sum of expm1(x) + 1 is much closer to the true result of ex than exp(x). For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_63"}

| Parameter | Type |                       Description                       |
|-----------|------|---------------------------------------------------------|
| x         |      | The exponent to raise e to in the computation of ex -1. |

#### Returns {id="returns_63"}

| Type |        Description        |
|------|---------------------------|
| TBA  | Returns the value ex - 1. |

### double log1p(double number)

Returns the natural logarithm of the sum of the argument and 1.

For small values x, the result of log1p(x) is much closer to the true result of ln(1 + x) than the floating-point evaluation of log(1.0+x).

> For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html). {style="note"}

#### Parameters {id="parameters_64"}

| Parameter | Type | Description |
|-----------|------|-------------|
| x         |      | A value.    |

#### Returns {id="returns_64"}

| Type |                      Description                       |
|------|--------------------------------------------------------|
| TBA  | Returns the value ln(x + 1), the natural log of x + 1. |

### double copySign(double magnitude, double sign)

Returns the first floating-point argument with the sign of the second floating-point argument. Note that unlike the StrictMath.copySign method, this method does not require NaN sign arguments to be treated as positive values; implementations are permitted to treat some NaN arguments as positive and other NaN arguments as negative to allow greater performance.

#### Parameters {id="parameters_65"}

| Parameter | Type |                     Description                      |
|-----------|------|------------------------------------------------------|
| magnitude |      | The parameter providing the magnitude of the result. |
| sign      |      | The parameter providing the sign of the result.      |

#### Returns {id="returns_65"}

| Type |                              Description                              |
|------|-----------------------------------------------------------------------|
| TBA  | Returns a value with the magnitude of magnitude and the sign of sign. |

### float copySign(float magnitude, float sign)

Returns the first floating-point argument with the sign of the second floating-point argument. Note that unlike the StrictMath.copySign method, this method does not require NaN sign arguments to be treated as positive values; implementations are permitted to treat some NaN arguments as positive and other NaN arguments as negative to allow greater performance.

#### Parameters {id="parameters_66"}

| Parameter | Type |                     Description                      |
|-----------|------|------------------------------------------------------|
| magnitude |      | The parameter providing the magnitude of the result. |
| sign      |      | The parameter providing the sign of the result.      |

#### Returns {id="returns_66"}

| Type |                              Description                              |
|------|-----------------------------------------------------------------------|
| TBA  | Returns a value with the magnitude of magnitude and the sign of sign. |

### int getExponent(float number)

Returns the unbiased exponent used in the representation of a float. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_67"}

| Parameter | Type |  Description   |
|-----------|------|----------------|
| f         |      | A float value. |

#### Returns {id="returns_67"}

| Type |                  Description                   |
|------|------------------------------------------------|
| TBA  | Returns the unbiased exponent of the argument. |

### int getExponent(double number)

Returns the unbiased exponent used in the representation of a double. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_68"}

| Parameter | Type |   Description   |
|-----------|------|-----------------|
| f         |      | A double value. |

#### Returns {id="returns_68"}

| Type |                  Description                   |
|------|------------------------------------------------|
| TBA  | Returns the unbiased exponent of the argument. |

### double nextAfter(double start, double direction)

Returns the floating-point number adjacent to the first argument in the direction of the second argument. If both arguments compare as equal the second argument is returned. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_69"}

| Parameter | Type |                                 Description                                  |
|-----------|------|------------------------------------------------------------------------------|
| start     |      | The starting floating-point value.                                           |
| direction |      | The value indicating which of start's neighbors or start should be returned. |

#### Returns {id="returns_69"}

| Type |                                    Description                                     |
|------|------------------------------------------------------------------------------------|
| TBA  | Returns the floating-point number adjacent to start in the direction of direction. |

### float nextAfter(float start, double direction)

Returns the floating-point number adjacent to the first argument in the direction of the second argument. If both arguments compare as equal a value equivalent to the second argument is returned. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_70"}

| Parameter | Type |                                 Description                                  |
|-----------|------|------------------------------------------------------------------------------|
| start     |      | The starting floating-point value.                                           |
| direction |      | The value indicating which of start's neighbors or start should be returned. |

#### Returns {id="returns_70"}

| Type |                                    Description                                     |
|------|------------------------------------------------------------------------------------|
| TBA  | Returns the floating-point number adjacent to start in the direction of direction. |

### double nextUp(double number)

Returns the floating-point value adjacent to d in the direction of positive infinity. This method is semantically equivalent to nextAfter(d, Double.POSITIVE_INFINITY); however, a nextUp implementation may run faster than its equivalent nextAfter call. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_71"}

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| d         |      | The starting floating-point value. |

#### Returns {id="returns_71"}

| Type |                              Description                               |
|------|------------------------------------------------------------------------|
| TBA  | Returns the adjacent floating-point value closer to positive infinity. |

### float nextUp(float number)

Returns the floating-point value adjacent to f in the direction of positive infinity. This method is semantically equivalent to nextAfter(f, Float.POSITIVE_INFINITY); however, a nextUp implementation may run faster than its equivalent nextAfter call. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_72"}

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| f         |      | The starting floating-point value. |

#### Returns {id="returns_72"}

| Type |                              Description                               |
|------|------------------------------------------------------------------------|
| TBA  | Returns the adjacent floating-point value closer to positive infinity. |

### double nextDown(double number)

Returns the floating-point value adjacent to d in the direction of negative infinity. This method is semantically equivalent to nextAfter(d, Double.NEGATIVE_INFINITY); however, a nextDown implementation may run faster than its equivalent nextAfter call. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_73"}

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| d         |      | The starting floating-point value. |

#### Returns {id="returns_73"}

| Type |                              Description                               |
|------|------------------------------------------------------------------------|
| TBA  | Returns the adjacent floating-point value closer to negative infinity. |

### float nextDown(float number)

Returns the floating-point value adjacent to f in the direction of negative infinity. This method is semantically equivalent to nextAfter(f, Float.NEGATIVE_INFINITY); however, a nextDown implementation may run faster than its equivalent nextAfter call. For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_74"}

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| f         |      | The starting floating-point value. |

#### Returns {id="returns_74"}

| Type |                              Description                               |
|------|------------------------------------------------------------------------|
| TBA  | Returns the adjacent floating-point value closer to negative infinity. |

### double scalb(double number, int scaleFactor)

Returns d × 2scaleFactor rounded as if performed by a single correctly rounded floating-point multiply to a member of the double value set. See the Java Language Specification for a discussion of floating-point value sets. If the exponent of the result is between Double.MIN_EXPONENT and Double.MAX_EXPONENT, the answer is calculated exactly. If the exponent of the result would be larger than Double.MAX_EXPONENT, an infinity is returned. Note that if the result is subnormal, precision may be lost; that is, when scalb(x, n) is subnormal, scalb(scalb(x, n), -n) may not equal x. When the result is non-NaN, the result has the same sign as d.

For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters {id="parameters_75"}

|  Parameter  | Type |                Description                 |
|-------------|------|--------------------------------------------|
| d           |      | The number to be scaled by a power of two. |
| scaleFactor |      | The power of 2 used to scale d.            |

#### Returns {id="returns_75"}

| Type |        Description        |
|------|---------------------------|
| TBA  | Returns d × 2scaleFactor. |

### float scalb(float number, int scaleFactor)

Returns f × 2scaleFactor rounded as if performed by a single correctly rounded floating-point multiply to a member of the float value set. See the Java Language Specification for a discussion of floating-point value sets. If the exponent of the result is between Float.MIN_EXPONENT and Float.MAX_EXPONENT, the answer is calculated exactly. If the exponent of the result would be larger than Float.MAX_EXPONENT, an infinity is returned. Note that if the result is subnormal, precision may be lost; that is, when scalb(x, n) is subnormal, scalb(scalb(x, n), -n) may not equal x. When the result is non-NaN, the result has the same sign as f.

For special cases, see [](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html).

#### Parameters

|  Parameter  | Type |                Description                 |
|-------------|------|--------------------------------------------|
| f           |      | The number to be scaled by a power of two. |
| scaleFactor |      | The power of 2 used to scale f.            |

#### Returns

| Type |        Description        |
|------|---------------------------|
| TBA  | Returns f × 2scaleFactor. |

## More Resources

{% include from="B03-04_0470-MoreResources.md" element-id="B03-04_0470-MoreResources_snippet" /%}