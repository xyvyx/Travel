---
title: Sage ERP 300 (ACCPAC) API Frequently Asked Questions | HUtility
updated: 2017-01-30 05:28:00Z
created: 2017-01-30 05:28:00Z
source: >-
  https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486
tags:
  - SI
---

# Sage ERP 300 (ACCPAC) API Frequently Asked Questions

###  6 Notes

####   [Are there other reference sites that talks about developing and access the Sage 300 APIs?Steve Smith...](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486#collapse-1)

#### **Are there other reference sites that talks about developing and access the Sage 300 APIs?**

Steve Smith's articles and blogs (Stephen Smith is the Chief Architect for Sage.

[Using the Sage 300 ERP View Protocols with .Net](http://smist08.wordpress.com/2013/11/02/using-the-sage-300-erp-view-protocols-with-net/)

[Using the Sage 300 .Net Helper APIs](http://sagecity.na.sage.com/support_communities/sage300_erp/b/sage_300_erp_r_and_d/archive/2014/07/19/using-the-sage-300-net-helper-apis.aspx)

or Just check out Steve's blog at [Steve's blog site](http://smist08.wordpress.com/2013/11/02/using-the-sage-300-erp-view-protocols-with-net/)

######   ** Posted by Henry Uy on October 02, 2014 at 12:57 PM UTC

Edited on October 02, 2014 at 01:01 PM UTC

via [hutility.notedock.com](http://hutility.notedock.com/) | **[Link](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4487)**  **

####   [How do I get to learn how to use the API?Best way to get your feet wet is to record a macro. At leas...](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486#collapse-2)

#### **How do I get to learn how to use the API?**

Best way to get your feet wet is to record a macro. At least that is how I got my start writing programs utilizing the Sage 300 API in VB6 back in 1998.

VB6 Macros are also available in the system if you open Sage 300 and click on Macro and then Edit, it will bring you to an AVB Macro Editor screen.

######   ** Posted by Henry Uy on October 02, 2014 at 12:54 PM UTC

via [hutility.notedock.com](http://hutility.notedock.com/) | **[Link](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486)**  **

####   [Do we have to be a Sage Development Partner to be able to access the API ?You only really need the S...](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486#collapse-3)

#### **Do we have to be a Sage Development Partner to be able to access the API ?**

You only really need the SDK (Software Development Kit) which is supplied to you when subscribed to the Development Parner program if you are developing programs using C/C++ as you will need to use the Header and / or precompiled files for the a4wapi.dll to be able to compile your programs.

DPP is a program designed for Third party developers who creates programs for re-sale and design these programs to be  part of the Sage 300 system as a module that seamlessly integrates with the rest of the Sage 300 System and Modules and to be able to create modules in the system  you need to be able to create these in C/C++.

For those programs or add ins that do not need to be designed as Sage 300 Modules and will run independent of the Sage 300 system, then the built in tools and API libraries taht comes installed with the System will suffice.

######   ** Posted by Henry Uy on October 02, 2014 at 12:51 PM UTC

Edited on October 02, 2014 at 12:52 PM UTC

via [hutility.notedock.com](http://hutility.notedock.com/) | **[Link](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4485)**  **

####   [Do we have to be a Sage Development Partner to be able to access the API ?Sage ERP 300 API are alrea...](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486#collapse-4)

#### **Do we have to be a Sage Development Partner to be able to access the API ?**

Sage ERP 300 API are already built in and available when you install the Programs.

######   ** Posted by Henry Uy on October 02, 2014 at 12:39 PM UTC

via [hutility.notedock.com](http://hutility.notedock.com/) | **[Link](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4484)**  **

####   [Where can I get the API ?The API is available and accessible when you Install Sage 300 ERP (ACCPAC) ...](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486#collapse-5)

#### **Where can I get the API ?**

The API is available and accessible when you Install Sage 300 ERP (ACCPAC) on a computer. All the files necessary are in the Runtime folder. Plus there are tools that is already built in such as

**ACCPACControlsRef.chm** - documentation for various ACCPAC VB6 UI Controls and dlls

**AccpacInfo.ex**e - Tool to list down all the controls available inside an ocx based UI.

**AccpacViewInfo.exe** - Tool to list down view information.
**a4wrvspy.exe** - Roto view call logger.
**a4wdbspy.exe** - database call logger
**a4wdiag.exe** - Tool that lists Environment settings used by the System.

######   ** Posted by Henry Uy on October 02, 2014 at 12:38 PM UTC

via [hutility.notedock.com](http://hutility.notedock.com/) | **[Link](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4483)**  **

####   [Is the API available ?Yes, Sage 300 ERP has APIs available for a variety of Development Platforms an...](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4486#collapse-6)

### **Is the API available ?**

Yes, Sage 300 ERP has APIs available for a variety of Development Platforms and/or Programming Languages.

**Visual Basic 6** - They are available as dlls in the Runtime folder where Sage 300 is installed. They comprise of the following files or dlls  - a4wcomapi.dll, a4wcomex.dll, a4wcomsv.dll. These dlls use COM Technology.

**.NET Framework  -  **They are available as .Net framework wrapper dlls in the Windows\Assembly folder as ACCPAC.Advantage, ACCPAC.Advantage.COMSVR.Interop, ACCPAC.Advantage.Server, ACCPAC.Advantage.RemotingManager, ACCPAC.Advantage.Types

**C/C++ - **This is the language that the System and View or Business layer is written in and the API are available in the Runtime folder as a4wapi.dll and the developers using C/C++ to develop applications will need to subscribe to the Sage Development Partner Program to have access to the header files for a4wapi to compile their programs.

**SDATA -  **Is the REST/JSON Protocol based API from Sage that is standard for all Sage Products including Sage 300 ERP. This comes with the install of the Web Portal components option when installing the Programs. You will need IIS and Apache Tomcat to be able to access the library.

######   ** Posted by Henry Uy on October 02, 2014 at 12:13 PM UTC

Edited on October 02, 2014 at 01:25 PM UTC

via [hutility.notedock.com](http://hutility.notedock.com/) | **[Link](https://hutility.notedock.com/public/4/2032/sage-erp-300-accpac-api-frequently-asked-questions/4482)**  **