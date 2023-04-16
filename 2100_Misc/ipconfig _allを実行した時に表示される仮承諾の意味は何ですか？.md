---
title: ipconfig /allを実行した時に表示される仮承諾の意味は何ですか？
updated: 2017-03-09 00:36:39Z
created: 2017-03-09 00:36:39Z
source: >-
  https://social.msdn.microsoft.com/Forums/vstudio/ja-JP/1a1cc887-5cea-438d-b123-d01c19dcb132/ipconfig-all?forum=vcgeneralja
tags:
  - SI
---

#  ipconfig /allを実行した時に表示される仮承諾の意味は何ですか？

### 質問

いつもお世話になっております。
下記の不明な点がありますので回答をお願い致します。
アダプタにIPアドレスを追加／削除しました。
その後、『ipconfig /all』を実行して、内容を確認すると、下記のようになっております。
『仮承諾』とは、どういう意味でしょうか？
そのまま、接続を試みても良いのでしょうか？
>ｉｐｃｏｎｆｉｇ /all
  DHCP 有効 . . . . . . . . . . . . : いいえ
  自動構成有効. . . . . . . . . . . : はい
  リンクローカル IPv6 アドレス. . . . : fe80::4868:2ffa:c845:765a%18(優先)
  IPv4 アドレス . . . . . . . . . . : 169.254.130.209(仮承諾)
  サブネット マスク . . . . . . . . : 255.255.255.255
IPの追加/削除は、Iphlpapiを使用しています。
使用しているAPIは、
　追加は、AddIPAddress()
　削除は、DeleteIPAddress（）
です。
◆手順の詳細
アダプタには静的なIPが振られている状態になっております。
そこへ、Iphlpapiを使って、
　①追加　静的IPとは違うIPを指定
　②削除　静的IPを削除
しています。
 ◆環境
　　Windows７　VisualStudio 2005 pro
    .NET Framework SP2
お忙しいところ申し訳ありませんが、宜しくお願いいたします。