---
title: Using REST/Json web services from NAV
updated: 2017-01-19 02:25:06Z
created: 2017-01-19 02:25:06Z
source: http://www.dynamics.is/?p=2637
tags:
  - SI
---

# Using REST/Json web services from NAV

One of my most popular blog entry is the [one about Json](http://www.dynamics.is/?p=2303).  I have also had some questions outside this website about this topic.

This week I got a task.  We need to communicate with a payment service that uses REST web services and Json file format.

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/POSApi.png)

[![posapi](../_resources/0b69b6bdfd3785cab6494eb1077c6ac8.png)](http://www.dynamics.is/wp-content/uploads/2016/12/POSApi.png)

I got a [document](https://documenter.getpostman.com/view/129507/pos-api/2MuZS9) describing the service.  Some methods use GET and some use POST.  Here is how I did this.

In the heart of it all I use Codeunit 1297, “Http Web Request Mgt.”.
[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAccessToken.png)

[![getaccesstoken](../_resources/07ae46409671bc3ed5483d45bc0ea987.png)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAccessToken.png)

Every time we talk to this POS API we send an Access Token.  If we don’t have the token in memory (single instance Codeunit), we need to get a new one.  That is what the above code does.

The ParameterMgt Codeunit is what I want to focus on.  You can see that I start by inserting my “Authorization Key” into the RequestBodyBlob.  As usual, I use the TempBlob.Blob to get and set my unstructured data.

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/SetApiRequest.png)

[![setapirequest](../_resources/2b885f541a7071c98256ee76e28669e6.png)](http://www.dynamics.is/wp-content/uploads/2016/12/SetApiRequest.png)

The interesting part here is that I use an XMLPort to create the data I need to post to the Api.

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/APIAuthenticateXml.png)

[![apiauthenticatexml](../_resources/4de6f731ba259cc25d4226e7362b16e1.png)](http://www.dynamics.is/wp-content/uploads/2016/12/APIAuthenticateXml.png)

A simple one in this example, but nothing says it can’t be complex.  Then I convert the Xml to Json with a single function.

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/ConvertToJson.png)

[![converttojson](../_resources/f8868b8e6ee064f0297763f44a916926.png)](http://www.dynamics.is/wp-content/uploads/2016/12/ConvertToJson.png)

The last TRUE variable means the the Document Element will be skipped and the Json will look like it is supposed to.

[![apikey](../_resources/0925514a8ef1d9acd296c11d34225a55.png)](http://www.dynamics.is/wp-content/uploads/2016/12/ApiKey.png)

The REST service response is Json.

[![token](../_resources/aa8a97a6c8dcc7f08ea133bcb64eeb2a.png)](http://www.dynamics.is/wp-content/uploads/2016/12/Token.png)

And to read the Json response we take a look at the GetAccessToken function.

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAccessTokenFunction.png)

[![getaccesstokenfunction](../_resources/ef83fe6506ad362abe97767959b4e83d.png)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAccessTokenFunction.png)

Here I start by converting from Json to Xml.
[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/ConvertFromJson.png)

[![convertfromjson](../_resources/37632a950a78c275cccdb887f824f98f.png)](http://www.dynamics.is/wp-content/uploads/2016/12/ConvertFromJson.png)

And make sure my Document Element name is “posApi”.
[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/ApiAccessTokenXml.png)

[![apiaccesstokenxml](../_resources/c66c2fb602a415a387d21de836ea9758.png)](http://www.dynamics.is/wp-content/uploads/2016/12/ApiAccessTokenXml.png)

And I have the result.

As you can see from the documentation some of the Json data is more complex.  This method will work nevertheless.

For more complex date I always create tables that matches the Json structure.  These table I use temporary through the whole process so the don’t need to be licensed tables.  Here is an example where this XMLPORT

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAuthorization.png)

[![getauthorization](../_resources/e5838154dad123cfe42e1418cdcfa340.png)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAuthorization.png)

will read this Json

[(L)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAuthorizationJson.png)

[![getauthorizationjson](../_resources/06ff0a262e4e2499bdd7458037318abd.png)](http://www.dynamics.is/wp-content/uploads/2016/12/GetAuthorizationJson.png)

I suggest that with our current NAV this is the easiest way to handle REST web services and Json.

### Like this: