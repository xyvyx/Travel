---
title: Windows Server2012 R2でリモートデスクトップの接続数制限解除+ユーザ追加他 | あいしんくいっと
updated: 2017-01-26 01:40:21Z
created: 2017-01-26 01:40:21Z
source: http://i-think-it.net/windows2012r2-remotedesktop-setsuzokusu-up/
tags:
  - SI
---

# Windows Server2012 R2でリモートデスクトップの接続数制限解除

### リモートデスクトップ接続数の上限解除

まず、ファイル名を指定して実行より**「gpedit.msc」**と入力します。
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-0.png)

[![remote-desktop-0](../_resources/51124d5ffed7c6ec222551f373b39275.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-0.png)

次に**「ローカルコンピューターポリシー」-「コンピューターの構成」-「管理用テンプレート」-「Windowsコンポーネント」-「リモートデスクトップサービス」-「リモートデスクトップセッションホスト」-「接続」**を選択します。

[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-1.png)

[![remote-desktop-1](../_resources/1f369e5f7b1d6ff317bc566b8223dacb.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-1.png)

**「リモートデスクトップサービスユーザーに対してリモートデスクトップサービスセッションを１つに制限する」**を**「無効」**に変更。
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-2.png)

[![remote-desktop-2](../_resources/3b8fda80b44e71750e40596835dad27b.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-2.png)

これで**リモートデスクトップ接続数の上限が2**となり、**コンソールと合わせると3セッション**の操作が可能になります。
（同一ユーザでも2セッション張る事が可能）
欲張ってadministratorというか、同一ユーザでリモートデスクトップで3セッション目を張ろうと、怒られますｗ
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-10.png)

[![remote-desktop-10](../_resources/06a274b27b2f34a6a878d43ba8c50c99.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-10.png)

## ユーザ追加 他

### ユーザ追加

**・追加**
**net user ＜任意のユーザ名＞ /ADD**
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-3.png)

[![remote-desktop-3](../_resources/a64e3df3fe9e28dfe2d2c05f33b05292.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-3.png)

**・確認（作成したユーザが存在すること）**
**net user**
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-7.png)

[![remote-desktop-7](../_resources/89282d5ff93225ce9dfcc81e1e4082ee.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-7.png)

### パスワード変更

**・パスワード変更**
**net user ＜変更対象ユーザ名＞ ＜パスワード＞**
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-4.png)

[![remote-desktop-4](../_resources/7acfb8f3ca7050f3e459fbe6a2aeb1cb.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-4.png)

・administratorパスワードもさくっと変更出来ます。
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-8png.png)

[![remote-desktop-8png](../_resources/8d0adc2a7a6fe620fb9d719c194aa23a.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-8png.png)

もしくは、インタラクティブ入力
**net user ＜変更対象ユーザ名＞ ***
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-5.png)

[![remote-desktop-5](../_resources/e44077ba545c1ddd456cf9eceba8636c.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-5.png)

### グループ追加

**・対象ユーザを対象グループへ追加**
**net localgroup ＜対象グループ＞ ＜対象ユーザ＞ /add**
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-6.png)

[![remote-desktop-6](../_resources/dafe5efb7ed1fb0c097d5895e9210d13.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-6.png)

**・確認**
**net localgroup**
[(L)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-9.png)

[![remote-desktop-9](../_resources/c9d23a4be5069edbc909b8602d702e59.png)](http://i-think-it.net/wp-content/uploads/2015/05/remote-desktop-9.png)

どうでしたか。
**リモートデスクトップ接続数の上限を増やす手順**は簡単なんですけど、ついつい忘れちゃうんですよね。
ユーザー追加やグループ追加もGUIでの操作よりも、DOSコマンドで操作したほうがサクッと使えるので便利だと思います。
皆さんの参考になれば。
以上、あいしんくいっとでした。