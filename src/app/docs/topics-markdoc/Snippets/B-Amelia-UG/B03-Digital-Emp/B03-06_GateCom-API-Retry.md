# B03-06_GateCom-API-Retry

{is-library="true"}

<snippet id="B03-06_GateCom-API-Retry_snippet"> **Note:** This is the number of attempts the gateway will make for a single API call. Attempts continue until the call either succeeds or the gateway reaches the maximum number. Setting this value to 1 disables retry attempts.

So, if you set the Max Attempts to 6, and keep the Back Off Initial Delay at 250 milliseconds and the Back Off Multiplier at 2, then the retry behavior is as follows:

1. Initial API call (Attempt 1). Failed.

2. Wait 250 milliseconds. Retry API call (Attempt 2). Failed.

3. Wait 500 milliseconds. Retry API call (Attempt 3). Failed.

4. Wait 1000 milliseconds. Retry API call (Attempt 4). Failed.

5. Wait 2000 milliseconds,. Retry API call (Attempt 5). Failed.

6. Wait 4000 milliseconds. Retry API call (Attempt 6). Stop.

So, if there are 6 attempts, then it means there are at most 5 retries. When the API call succeeds, there are no more retries.

> The maximum time to wait between two API calls is 30 seconds (or 30,000 milliseconds).


</snippet>