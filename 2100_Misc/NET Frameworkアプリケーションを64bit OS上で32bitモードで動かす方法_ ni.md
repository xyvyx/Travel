---
title: 'NET Frameworkアプリケーションを64bit OS上で32bitモードで動かす方法: niyoな日記'
updated: 2017-03-07 01:00:08Z
created: 2017-03-07 01:00:08Z
source: http://niyodiary.cocolog-nifty.com/blog/2009/05/net-framework64.html
tags:
  - SI
---

# NET Frameworkアプリケーションを64bit OS上で32bitモードで動かす方法

.NET Frameworkアプリケーションを64bit OS上で32bitモードで動かす方法の紹介。

※続編として[NET Frameworkアプリケーションを64bit OS上で32bitモードで動かす方法(その2)](http://niyodiary.cocolog-nifty.com/blog/2009/05/net-framework-1.html)も書いてみた。

**[■最初に]()**
最近64bit Windows OSの利用機会が増えているが、ActiveXやC言語DLLが64bitに対応していないことは多い。

.NET FrameworkアプリケーションはOSに応じて32bit・64bitアプリケーションと自動で切り替えて動作するが、 64bit OSで32bitにしか対応していないライブラリを内部利用したアプリケーションを動かすと以下の例外発生する。

BadImageFormatException
間違ったフォーマットのプログラムを読み込もうとしました。 (HRESULT からの例外: 0x800xxxxx)
この回避方法の1つとして64bit OS環境上で.NET Frameworkアプリケーションを32bitモードで動かす設定方法を紹介する。

なお本ページの環境構成は以下の通り。
・Windows Server 2008 64bit
・IIS 7.0
・Visual Studio 2008
・.NET Framework 3.5 SP1
**[■コンソールアプリケーション・Windowsアプリケーションの32bit化]()**
コンソールアプリケーション・Windowsアプリケーションの設定方法は以下の通り。(Windowsサービスも?)

**手順1**
ソリューションエクスプローラから該当プロジェクトを右クリック、プロパティを選択する。
[(L)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_010_prj.jpg)

[![](../_resources/3eb7edcda9ab8c5264d993e9547adaa3.jpg)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_010_prj.jpg)

**手順2**
「ビルド」タブを選択し、「プラットフォーム ターゲット」を"x86"に設定する。

[![](../_resources/a357f9ee69bf7f0b9a691f5d95626b21.jpg)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_020_prj.jpg)

**結果**
タスクマネジャーから該当アプリケーションが32bitで起動していることが確認できる。

[![](../_resources/fe3054ea5a0221ccd70d963569260717.jpg)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_030_prj.jpg)

**[■ASP.NETアプリケーションの32bit化]()**
ASP.NETはIIS6.0以降、デフォルトではIISの一部として動くため、ワーカプロセス自体を32bitに設定する必要がある。
設定方法は以下の通り。

**手順1**

インターネットインフォメーションサービス(IIS)マネージャを起動し、該当アプリケーションで利用しているアプリケーション プールを選択、右クリックで「詳細設定」を選択する。

[(L)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_040_iis7.jpg)

[![](../_resources/ab65536df088df289d02c3926f127f99.jpg)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_040_iis7.jpg)

**手順2**
「全般」の「32 ビット アプリケーションの有効化」を"true"に設定後、IISを再起動する。

[![](../_resources/b557c5d7383228295fc2ad73e7263403.jpg)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_050_iis7.jpg)

**結果**
タスクマネジャーからワーカープロセス(w3wp.exe)が32bitアプリケーションとして起動していることが確認できる。

[![](../_resources/37e1f47ae300c07a5e0ff79c3aeb0a20.jpg)](http://niyodiary.cocolog-nifty.com/photos/etc/20090502_060_iis7.jpg)

**[■関連ページ]()**

- [NET Frameworkアプリケーションを64bit OS上で32bitモードで動かす方法(その2)](http://niyodiary.cocolog-nifty.com/blog/2009/05/net-framework-1.html)

投稿者 niyo 日時 2009年5月 3日 (日) 00時23分 | [固定リンク](http://niyodiary.cocolog-nifty.com/blog/2009/05/net-framework64.html)