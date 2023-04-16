---
title: >-
  The specified DSN contains an architecture mismatch between the Driver and
  Application
updated: 2017-03-07 01:08:18Z
created: 2017-03-07 01:08:18Z
source: >-
  https://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted
tags:
  - SI
---

#  The specified DSN contains an architecture mismatch between the Driver and Application

### Question

###  Answers

- On the side note, what odbc interface you used to create connection

|     |
| --- |
| **To manage a data source that connects to a 32-bit driver under 64-bit platform, use c:\windows\sysWOW64\odbcad32.exe. To manage a data source that connects to a 64-bit driver, use c:\windows\system32\odbcad32.exe.** |

**If you use the 64-bit odbcad32.exe to configure or remove a DSN that connects to a 32-bit driver, for example, Driver do Microsoft Access (*.mdb), you will receive the following error message:**

The specified DSN contains an architecture mismatch between the Driver and Application

To resolve this error, use the 32-bit odbcad32.exe to configure or remove the DSN.

A data source associates a particular ODBC driver with the data you want to access through that driver. For example, you might create a data source to use the ODBC dBASE driver to access one or more dBASE files found in a specific directory on your hard disk or a network drive. Using the ODBC Data Source Administrator, you can add, modify, and delete data sources, as described in the following table.

http://msdn.microsoft.com/en-us/library/ms712362(VS.85).aspx

    - Proposed as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Friday, July 23, 2010 9:31 AM

    - Marked as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Monday, July 26, 2010 2:21 AM

- Should have asked in Data Access forum... You may get better answer there

Generally, 32 bit application should not have any problems connecting to a 64 bit SQL Server on the same machine. /p>

**Are you sure you are running a 32 bit (***NOT 16 bit****) application..?**
**FYI...16 bit app will not work in x64 bit enviornment.**

    - Edited by [Chirag Shah](https://social.msdn.microsoft.com/profile/chirag%20%20shah?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Tuesday, July 20, 2010 4:32 PM content

    - Proposed as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Friday, July 23, 2010 9:31 AM

    - Marked as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Monday, July 26, 2010 2:21 AM

###  All replies

- Should have asked in Data Access forum... You may get better answer there

Generally, 32 bit application should not have any problems connecting to a 64 bit SQL Server on the same machine. /p>

**Are you sure you are running a 32 bit (***NOT 16 bit****) application..?**
**FYI...16 bit app will not work in x64 bit enviornment.**

    - Edited by [Chirag Shah](https://social.msdn.microsoft.com/profile/chirag%20%20shah?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Tuesday, July 20, 2010 4:32 PM content

    - Proposed as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Friday, July 23, 2010 9:31 AM

    - Marked as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Monday, July 26, 2010 2:21 AM

- On the side note, what odbc interface you used to create connection

|     |
| --- |
| **To manage a data source that connects to a 32-bit driver under 64-bit platform, use c:\windows\sysWOW64\odbcad32.exe. To manage a data source that connects to a 64-bit driver, use c:\windows\system32\odbcad32.exe.** |

**If you use the 64-bit odbcad32.exe to configure or remove a DSN that connects to a 32-bit driver, for example, Driver do Microsoft Access (*.mdb), you will receive the following error message:**

The specified DSN contains an architecture mismatch between the Driver and Application

To resolve this error, use the 32-bit odbcad32.exe to configure or remove the DSN.

A data source associates a particular ODBC driver with the data you want to access through that driver. For example, you might create a data source to use the ODBC dBASE driver to access one or more dBASE files found in a specific directory on your hard disk or a network drive. Using the ODBC Data Source Administrator, you can add, modify, and delete data sources, as described in the following table.

http://msdn.microsoft.com/en-us/library/ms712362(VS.85).aspx

    - Proposed as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Friday, July 23, 2010 9:31 AM

    - Marked as answer by [Tom Li - MSFTModerator](https://social.msdn.microsoft.com/profile/tom%20li%20-%20msft?type=forum&referrer=http://social.msdn.microsoft.com/Forums/sqlserver/en-US/702f0d9b-6cb9-49cf-9953-80d059711e60/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlgetstarted) Monday, July 26, 2010 2:21 AM

-

> Surfing around for a different item, but saw this.  I had this probelm as well awhile back.  If you are using IIS as well make sure your APPLICATION POOLS are sre set right.  And if you are switching between 64-bit and 32-bit, make sure you either disable or enable 32-bit application support in the pools.

> hope that helps some one with this error someday.

* * *

> Greg

I didn't understand about APPLICATION POOLS Greg.. Can you help me in that?? I have same problem..

Thanks,
NIkunj

- As a side note to other answers:

Using IIS 8 on a Win2012 64-bit server...but this would be the case on any 64-bit box using IIS 7, IIS 7.5 or IIS 8.

Open IIS, expand the triangle next to the machine name, you should have at least 2 entries, Application Pools and Sites. Click on Application pools and it should populate the middle pane with various options (.NET v2.0, .NET v2.0 Classic, Classic .NET AppPool, ClassicAppPool and DefaultAppPool).

Ok, click the triangle next to Sites, it should expand to show your Default Web Site (or whatever you named yours). Click on Default Web Site. in the far right pane, select basic settings. At the top, it will tell you which application pool this site is using. Hopefully, it matches one of the items above from your list of App Pools.

Go back to Application Pools and select the item that matches what your Default Web Site was using, and in the far right pane, select Advanced Settings. Couple items down under the General triangle, you should see "Enable 32-Bit Applications" If it is set to false, set it to true. Do this for as many sites/application pools combinations as you have that use 32-bit applications.

After 6+ hours, Greg's response saved my bacon. Hope it helps.

-
> On the side note, what odbc interface you used to create connection

|     |
| --- |
| **> To manage a data source that connects to a 32-bit driver under 64-bit platform, use c:\windows\sysWOW64\odbcad32.exe. To manage a data source that connects to a 64-bit driver, use c:\windows\system32\odbcad32.exe.** |

**> If you use the 64-bit odbcad32.exe to configure or remove a DSN that connects to a 32-bit driver, for example, Driver do Microsoft Access (*.mdb), you will receive the following error message:**

> The specified DSN contains an architecture mismatch between the Driver and Application

> To resolve this error, use the 32-bit odbcad32.exe to configure or remove the DSN.

> A data source associates a particular ODBC driver with the data you want to access through that driver. For example, you might create a data source to use the ODBC dBASE driver to access one or more dBASE files found in a specific directory on your hard disk or a network drive. Using the ODBC Data Source Administrator, you can add, modify, and delete data sources, as described in the following table.

> [http://msdn.microsoft.com/en-us/library/ms712362(VS.85).aspx
Hi Chirag,
I tried this but didnt work.. and I created new thread.

http://social.msdn.microsoft.com/Forums/sqlserver/en-US/097ff93d-20be-41ed-b318-dc51cca0b811/the-specified-dsn-contains-an-architecture-mismatch-between-the-driver-and-application?forum=sqlintegrationservices