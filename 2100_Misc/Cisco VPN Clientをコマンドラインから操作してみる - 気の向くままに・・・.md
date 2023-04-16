---
title: Cisco VPN Clientをコマンドラインから操作してみる - 気の向くままに・・・
updated: 2017-12-15 15:43:21Z
created: 2017-12-15 15:43:21Z
source: http://syo.cocolog-nifty.com/freely/2011/12/cisco-vpn-clien.html
author: xyvyx10
tags:
  - SI
---

# Cisco VPN Clientをコマンドラインから操作してみる

たまたま（？）、Cisco VPN Clientをコマンドライン経由で使えないか、という話があったので、調べてみました。
Webで探してみた範囲では、以下のページが参考資料って感じでしょうか。ただし、クライアントのバージョンにより挙動が違っている可能性があります。

・[VPN Client アドミニストレータ ガイド Release 4.6](http://www.cisco.com/japanese/warp/public/3/jp/service/manual_j/sec/vpncl/vcag2/chapter08/vcAch8.shtml)

・[VPN Client コマンド行インターフェイスの使用](http://www.cisco.com/japanese/warp/public/3/jp/service/manual_j/sec/vpncl/vcag/chapter04/04_vcAch4.html)

多分、きちんと探せば、もっと新しい資料もあるかと思いますが、とりあえず上記２点で事足りたので（＾＾；
今回選択した接続用は、以下のような感じ。
> vpngui.exe -c -sd -user (username) 接続エントリ名

・VPN接続中かどうかが一目でわかるように、タスクトレイ上にアイコンを表示させたい（そのため、-scオプションではなく**-cオプション**を指定。また、vpnclient.exeではなくvpngui.exeを利用）。

・コマンドから切断した際にメッセージダイアログを表示したくない( **-sd オプション**を指定）

・接続エントリ名は、Profilesフォルダに入っている*.pcfファイルの「ファイル名部分」のみを指定（最初、パス付きや拡張子付きで指定してしまって、全然接続できなかった）

ちなみに、接続エントリ名は、GUIの画面でも表示されています（もしかすると、ファイル名と表示名を別々にできるのかもしれませんが・・・）。
認証画面が表示されるので、適切なパスワードを入力すると、そのままVPN接続が完了します。
切断するときは、
> vpnclient.exe disconnect
でさっくりと処理。タスクトレイ上の鍵アイコンも、解錠された状態になります。
まぁ、完全にバッチ処理に組み込むのであれば、鍵アイコンは不要でしょうから、
> vpnclient connect 接続エントリ名 user (username) sd
でも良いと思いますが（ただし、パスワード入力は必須とさせる）。

※/pwdオプション(vpnguiの場合)でパスワードの自動入力も可能となりますが、セキュリティ強度は落ちるので今回は見送り（その端末が厳重に管理された室内に配置され、外部からアクセスできないような環境であればパスワードも含めた完全自動化というのもアリだとは思いますが）。

Posted on 2011.12.12 at 21:17 in [パソコン・インターネット](http://syo.cocolog-nifty.com/freely/cat85749/index.html) | [Permalink](http://syo.cocolog-nifty.com/freely/2011/12/cisco-vpn-clien.html)

## Comments

## Post a comment

Name:(必須)
Email Address:(必須)
(Not displayed with comment.)
URL:(任意)
Remember personal info?

Comments are moderated, and will not appear on this weblog until the author has approved them.

Comments:

## TrackBack

TrackBack URL for this entry:
http://app.cocolog-nifty.com/t/trackback/3959/53470007
（トラックバックは記事投稿者が公開するまで表示されません。）

Listed below are links to weblogs that reference [Cisco VPN Clientをコマンドラインから操作してみる](http://syo.cocolog-nifty.com/freely/2011/12/cisco-vpn-clien.html):