---
title: 'I have completed my current task . Please find the details below:'
updated: 2017-05-22 06:18:01Z
created: 2017-05-22 06:17:46Z
author: xyvyx10@gmail.com
tags:
  - KRI
---

I have completed my current task . Please find the details below:

Work items:  Create a Templates for below Entities for KPEX Data.

    KPEX Data                  Entity Name                         Table Name             Note

1.Route Group               Route Groups                       RouteGroup

                                                                                         RouteJobSetup       Added To the Target Form

2.Operation                    Route operations                 RouteOpr

                                                                                          RouteOprTable

3.Production Order       ProdTable                              ProdTable                Custom

                                          InventDim                             InventDim                Custom

                                          WHSProdTable                     WHSProdTable       Custom

Please let me know if any modification is required or next task to be done.
Thank you !!

Hi Sandhya

Please review my answer bellow.

1. Processing group should contain single entity for configuration? What if input data requires multiple entities to be processed?

Of course, it depends on target data for  single entity configuration. and you can decide if necessary

2. what to do if DMF entities are not present for input data while setting Entity configuration?

Please Yes.

And ,If we need custom entity development, you can skip It and develop others first then you can try if you have time.

Also we will update development database (IP address *.12) this Sunday 8 pm EST and you cannot access around 30 minutes.