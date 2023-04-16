---
title: Accpac API documentation
updated: 2017-01-30 00:37:59Z
created: 2017-01-30 00:37:59Z
source: http://stackoverflow.com/questions/11046711/accpac-api-documentation
tags:
  - SI
---

# Accpac API documentation

 [up vote]() 1 [down vote]()  [favorite](http://stackoverflow.com/questions/11046711/accpac-api-documentation#)

**2**

I'm working on a C# .NET application that needs to integrate to Accpac 5.6. I have not been able to find any useful documentation on the Accpac API. Where can I find Accpac API documentation?

|     |     |
| --- | --- |
|     | And have you tried contacting the company that supplies Accpac? – [J. Steen](http://stackoverflow.com/users/64976/j-steen)  [Jun 15 '12 at 9:41](http://stackoverflow.com/questions/11046711/accpac-api-documentation#comment14452219_11046711) |

 [add a comment]() |

 [up vote]() 1 [down vote]() accepted

There isn't a huge amount of documentation unless you sign up for Sage's Development Partner Program. In general you can record a macro of a process that you want to do through your integration (like creating invoices, for example) and then translate the resulting VBA code into the language that you're using.

Joining the Development Partner Program is likely overkill for what you're needing. Typically you'd ask your dealer (is you're a customer) for the documentation. There are a few other sites around that have some information like Tek-Tips.com. If you have specific questions then we can try to answer them here at SO.

|     |     |
| --- | --- |
|     | answered Jun 18 '12 at 19:48 |

|     |     |
| --- | --- |
|     | Thanks for the reply. I contacted Sage and they also told me that I'll have to sign up for the Development Partner Program. So I'll just record some macros and look at the Accpac Solutions on Tek-Tips.com. – [JJ007](http://stackoverflow.com/users/1456062/jj007)  [Jun 19 '12 at 7:08](http://stackoverflow.com/questions/11046711/accpac-api-documentation#comment14530480_11089983) |

 [add a comment]() |

|     |     |
| --- | --- |
|  [up vote]() 1 [down vote]() | I know this post is old, but hopefully, this answer will be useful to developers that still might have the same problem.<br>ACCPAC comes bundled with two types of APIs, the COM API (AccpacCOMAPI), and the .NET API (ACCPAC.Advantage).<br>In my research, I found some Accpac COM API documentation on the Stephen Smith's blog which you can download [here](https://docs.google.com/file/d/0B3d1md_6mdBRU3NoaWcyWDlIRkk/edit?pli=1). Smith also wrote a [tutorial](https://smist08.wordpress.com/2012/12/15/opening-sage-300-erp-sessions/) in VB to explain some of the workings of the API (a simple connection to Accpac), and he has [several articles](https://smist08.wordpress.com/sage-300-erp-articles/) that discuss the APIs, mainly the .NET API, among other things . The tutorials on Ken's Programming offer a good introduction to the COM API, and they are written in C# (your preferred language). Find them [here](http://startingdotneprogramming.blogspot.com/2013/12/getting-started-with-accpac-programming.html) and [here](http://startingdotneprogramming.blogspot.com/2014/01/working-with-views-in-sage-300-erp.html).<br>Furthermore, the COM API is explored in the ACCPAC 'System Manager User Guide', since it is that API that is used to write Macros. The document, which can be downloaded [here](https://partners.sagenorthamerica.com/irj/go/km/docs/sageKM/Sage%20Accpac%20ERP/Ungated%20Customers/Browsable/Product%20Documentation/Sage%20Accpac%20ERP%205.5%20Documentation/System_Manager_55/Sage%20Accpac%20SM%20User%20Guide.pdf) for ACCPAC 6.0A, explains how different objects relate to each other, their purpose, properties and methods. Read the chapters 13, and 14.<br>Hope this will help whoever's reading.<br>Live long and prosper. |
|     |  [add a comment]() \| |

## Your Answer

### Sign up or [log in](http://stackoverflow.com/users/login?ssrc=question_page&returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f11046711%2faccpac-api-documentation%23new-answer)

Sign up using Google

Sign up using Facebook

Sign up using Email and Password

### Post as a guest

|     |
| --- |
|  Name<br> Email |

[discard](http://stackoverflow.com/questions/11046711/accpac-api-documentation#)

By posting your answer, you agree to the [privacy policy](http://stackexchange.com/legal/privacy-policy) and [terms of service](http://stackexchange.com/legal/terms-of-service).

## Not the answer you're looking for?	Browse other questions tagged [c#](http://stackoverflow.com/questions/tagged/c%23)  [.net](http://stackoverflow.com/questions/tagged/.net)  [accpac](http://stackoverflow.com/questions/tagged/accpac) or [ask your own question](http://stackoverflow.com/questions/ask).