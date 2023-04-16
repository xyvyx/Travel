---
title: 'SQL Server 2008 に ODBC 接続するための設定: 結局のところ'
updated: 2017-02-08 06:49:28Z
created: 2017-02-08 06:49:28Z
source: http://korigori.blog.so-net.ne.jp/2014-07-16
tags:
  - SI
---

# SQL Server 2008 に ODBC 接続するための設定 [編集]

１．SQL [Server](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=Server&ic=utf8)のリモート接続の許可

２．SQL Serverの[ネットワーク](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF&ic=utf8)設定

３．SQL Server Browserの設定
４．Windowsファイアウォールの設定
１．SQL Serverのリモート接続の許可（デフォルト＝許可）

   １．スタート > すべてのプログラム > [Microsoft](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=Microsoft&ic=utf8) SQL Server 2008 R2 > 構成ツール > SQL Server Management [Studio](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=Studio&ic=utf8)

   ２．オブジェクトエクスプローラー > HostName\SQLEXPRESS を右クリックし、プロパティを開く
   ３．ページの選択 > 接続 を開く

   ４．右ペインで "この[サーバー](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC&ic=utf8)へのリモート接続を許可する" を[チェック](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF&ic=utf8)して [OK] とする

２．SQL Serverのネットワーク設定

   １．スタート > すべてのプログラム > Microsoft SQL Server 2008 R2 > 構成ツール > SQL Server 構成マネージャー

   ２．SQL Server 構成マネージャー（ローカル）> SQL Server ネットワークの構成 > SQLEXPRESSのプロトコル
   ３．右ペインのプロトコル名で、"TCP/IP" と "名前付きパイプ" を右クリックし、"有効化" を行う
３．SQL Server Browserの設定

   １．スタート > すべてのプログラム > Microsoft SQL Server 2008 R2 > 構成ツール > SQL Server 構成マネージャー

   ２．SQL Server 構成マネージャー（ローカル）> SQL Server のサービス
   ３．右ペインのサービスで、"SQL Server Browser" を右クリックし、プロパティを開く
   ４．［サービス］タブの開始モードを "自動" に変更
   ５．［ログオン］タブの［開始］ボタンをクリックし開始する
   ６．右ペインのサービスで、"SQL Server(SQLEXPRESS)" を右クリックし、"再起動" を実施する
   ※ SQL Server Browserとは

     SQL Server は、複数の名前付きインスタンスを[サポート](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88&ic=utf8)し、個別のポート番号を動的に割り当てる。

     各インスタンスは、そのポート番号で待機し、[クライアント](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88&ic=utf8)からの要求に応答する。

     SQL Server Browserは、UDP 1434ポートを使って、個々の名前付きインスタンスのポート番号を通知する。
４．Windowsファイアウォールの設定

   １．スタート > [コントロール](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB&ic=utf8)パネル > Windowsファイアウォール

   ２．"Windowsファイアウォールを介したプログラムまたは機能を許可する" をクリック
   ３．[設定の変更]ボタンをクリック、続けて[別のプログラムの許可]ボタンをクリック
   ４．[参照] から以下のプログラムを追加

         C:\Program Files\Microsoft SQL Server\MSSQL10_50.SQLEXPRESS\MSSQL\Binn\sqlservr.exe

   ５．許可されたプログラムの一覧に［SQL Server Windows NT］が表示されたことを確認して、［OK］
   ６．[詳細設定]ボタンをクリック
   ７．[受信の規則] > [新しい規則]をクリック
   ８．「規則の種類」で "ポート" を選択し [次へ]
   ９．「プロトコルおよびポート」で "UDP" を選択、特定のローカルポートに "1434" と入力し [次へ]
   １０．「操作」で "接続を許可する" を選択し [次へ]
   １１．「プロファイル」で全てチェックして [次へ]
   １２．「名前」で、任意の名前をつけて [完了]
   １３．続けて [新しい規則]をクリック
   １４．同様に、"TCP" で "1433" を許可する設定を行い [完了]

（Windows Server2008 R2, SQL Server 2008 R2 [Express](http://match.seesaa.jp/afr.pl?hid=25&sid=korigori:000280297531&k=Express&ic=utf8)）