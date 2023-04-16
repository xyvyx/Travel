---
title: >-
  invoke-sqlcmd -query "select
  AROBL.IDCUST,ARCUS.NAMECUST,AROBL.IDINVC,AROBL.DATEDUE,AROBL.DESCINVC from
  AROBL,ARCUS where AROBL.IDCUST=ARCUS.IDCUST "
updated: 2017-06-09 13:46:06Z
created: 2017-06-09 13:46:06Z
author: xyvyx10@gmail.com
---

invoke-sqlcmd -query "select AROBL.IDCUST,ARCUS.NAMECUST,AROBL.IDINVC,AROBL.DATEDUE,AROBL.DESCINVC from AROBL,ARCUS where AROBL.IDCUST=ARCUS.IDCUST "

| Export-Csv $path"C:\temp\ARtest.csv" -Delimiter `t -encoding "UTF8" -notype

NAMECUST,IDCUST ,

"This is a test." | Export-Csv $path"C:\temp\ARtest.csv" -Delimiter `t -encoding "UTF8" -notype

Invoke-Sqlcmd -Query "select AROBL.IDCUST,ARCUS.NAMECUST,AROBL.IDINVC,AROBL.DATEDUE,AROBL.DESCINVC from AROBL,ARCUS where AROBL.IDCUST=ARCUS.IDCUST" -ServerInstance "SAGE300\SAGE"

select AROBL.IDCUST,ARCUS.NAMECUST,AROBL.IDINVC,AROBL.DATEDUE,AROBL.DESCINVC from AROBL,ARCUS where AROBL.IDCUST=ARCUS.IDCUST

bcp SAGE300.SAGE.AROBL out "Currency Types.dat" -T -c