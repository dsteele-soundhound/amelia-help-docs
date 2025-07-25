# B03-06_0138-Addit-CDR

{is-library="true"}

<snippet id="B03-06_0138-Addit-CDR_snippet">



Enter details here to send to the Freeswitch CDR (call detail record). Set this custom property once per BPN (Business Process Network) flow. You can use any content as its value. Once set, Amelia copies the value into a Freeswitch channel variable amelia_cdr_info. Make sure to add amelia_cdr_info to the cdr_csv configuration file in Freeswitch. Once you end the call, Amelia writes all content to the cdr_csv configuration file.


</snippet>