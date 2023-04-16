---
title: １．リストア前の「UserInfo」の情報をバックアップ。
updated: 2017-06-09 13:46:09Z
created: 2017-06-09 13:46:09Z
author: xyvyx10@gmail.com
---

１．リストア前の「UserInfo」の情報をバックアップ。
    （SIDとドメイン名を退避するため）
    ※リストア前の環境に以下のユーザを登録しておき、
      SIDとドメイン名を退避しておく必要が有ります。
      DYNAdmin/Dyn2012

２．SQLServerManagementStudioでデータをリストアします。

３．以下テーブルのサーバ名やドメイン名を書き換えます。
   ①SysServerConfiguration
   ②SysServerSession
   ③BatchServerConfig
   ④BatchServerGroup
   ⑤Batch

４．バックアップしておいた「UserInfo」を反映します。

５．ＡＸを起動し、レポートサーバの設定を修正します。

６．「Microsoft Dynamics AX 2012 Management Shell」から
  アドミニストレーターで以下コマンドを実行します。

  Publish-AXReport -ReportName Dfi*

以上