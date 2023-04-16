---
title: Windows Server 2012 R2を構築したら設定しておくべき設定項目14選！ | あいしんくいっと
updated: 2017-01-26 01:32:37Z
created: 2017-01-26 01:32:37Z
source: http://i-think-it.net/windows2012r2-setup-13/
tags:
  - SI
---

# Windows Server 2012 R2を構築したら設定しておくべき設定項目14選！

2015/07/11
folder [Windows](http://i-think-it.net/category/windows/)
ども。あいしんくいっと（**[@ithinkitnet](https://twitter.com/ithinkitnet)**）です。
インフラエンジニアであれば、AWS上のEC2で**Windows Server 2012 R2**を構築する機会もあるかと思います。
今回はEC2で**Windows Server 2012 R2**を構築する際に設定しておくべき項目を**14**つ挙げておきたいと思います。
sponsored link

## Windows Server 2012 R2を構築する際に設定しておくべき項目14つ + α

### ホスト名設定

当り前だろっ！（怒）と思われるかも知れないですが、当然必要になります。
GUIでの変更手順は知れ渡っているので省略しますが、**PowerShell**で簡単に変更＆再起動が出来たりします。
***Rename-Computer ＜変更したいホスト名＞ -Force -Restart***

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-0.png)

[![windows2012r2-setup-0](../_resources/91506f8705c19da35c47d0b8b66551b7.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-0.png)

コマンドを実行すると即座に再起動がかかるので注意してください。
再起動してホスト名を確認すると無事に変更されていました。

[![windows2012r2-setup-1](../_resources/c40763b0114619067229ce0878c3e7af.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-1.png)

### administratorのパスワード変更

**administratorのパスワード**は必ず変更しましょう。
DOSコマンドで一発変更出来ます。
***net user administrator ＜任意のパスワード＞***

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-3.png)

[![windows2012r2-setup-3](../_resources/5119b7d253b1258222b0fb6a25f1d45c.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-3.png)

画像では例として簡単なパスワードを設定していますのでマネしないでください（笑）
平文で指定する必要があるので実行する際は背後に気をつけましょう。

### Windows Updateの実行/確認

これは必須ですね。**「お使いのコンピュータは最新です」**って表示されるまで実行すると良いでしょう。
手順
そしてWindows Updateが当て終わったら**「自動更新」**は必ず**無効**にしておきます。
適用したパッチの一覧が欲しければ下記のコマンドを実行すると取得できます。
GUIで確認しても良いのですが、こちらのほうが切り貼り加工出来るのでオススメです。
・**PowerShellの場合**
1
2
3
4
5
6
7
`＞Get-WmiObject win32_QuickFixEngineering`
`Source Description HotFixID InstalledBy InstalledOn`
`------ ----------- -------- ----------- -----------`
`WIN-0DUCV7... Security Update KB2894856 NT AUTHORITYSYSTEM 2014/10/15 0:00:00`
`WIN-0DUCV7... Update KB2896496 NT AUTHORITYSYSTEM 2014/06/20 0:00:00`
`WIN-0DUCV7... Update KB2919355 WIN-0DUCV7CCGR4A... 2014/03/18 0:00:00`
`～略～`
**・DOSコマンドの場合**
1
2
3
4
5
6
7
8
9
10
11
`＞systeminfo`
`～略～`
`ホットフィックス: 315 ホットフィックスがインストールされています。`
`[01]: KB2849697`
`[02]: KB2849696`
`[03]: KB2841134`
`[04]: KB2841134`
`[05]: KB2670838`
`[06]: KB2830477`
`[07]: KB2592687`
`～略～`

### IPV6の無効化

IPV4でのIP枯渇問題に対応すべく誕生したIPV6ですが、現状では使うことは無いと思うので**無効化**しておきます。
まず、**ローカル　エリア接続**の**ipv6**のチェックを外します。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-2.png)

[![windows2012r2-setup-2](../_resources/b868bba6cb3a2773631a1c68fb80bf46.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-2.png)

次に**レジストリエディタ**を起動して、**“HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesTCPIP6Prameters”**の「**DisableComponents**」の値を「**oxffffffff**」に変更します。（**10進数だと4294967295**）

[![windows2012r2-setup-5](../_resources/ee6d4d9daecb489f8fe5526daabef07b.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-5.png)**※レジストリ弄るのは危険なのでくれぐれも慎重に作業してください。**

**追記：**コメントにある通り、情報提供を頂きましたのでこちらも参考に設定してください。

**参考**　[IPv6 または Windows のコンポーネントを無効にする方法](https://support.microsoft.com/ja-jp/kb/929852)

以上でIPV6は無効化され、DOSプロンプトで「ipconfig」を実行した場合のIPV6表示もなくなります。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-6.png)

[![windows2012r2-setup-6](../_resources/7cd7294571aac370d8cd5215ae98cad7.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-6.png)

### Windowsファイアウォール無効化

環境によるかもですが、AWS環境だと無効化する事が多いように思います。
無効化する場合は無効化しておきましょう。
**PowerShell**のコマンド一発で有効/無効化出来ます。
・ファイアウォール無効化
***Get-NetFirewallProfile | Set-NetFirewallProfile -Enabled false***
・ファイアウォール有効化
***Get-NetFirewallProfile | Set-NetFirewallProfile -Enabled true***

### リモートデスクトップ接続数

この設定については過去に書いた記事を確認して下さい。

[  あいしんくいっと  2 users  ![](../_resources/bac4e8f0faab3fc8bd5f6150c41e9dfc.png)Windows Server2012 R2でリモートデスクトップの接続数制限解除+ユーザ追加他 http://i-think-it.net/windows2012r2-remotedesktop-setsuzokusu-up  最近、仕事でWindows Server 2012 R2を使う機会が多く、リモートデスクトップ接続を利用する事もしばしば。ですが、Windows Server 2012 R2のリモートデスクトップ接続はデフォルトだと1セッションしか接続出来ない状態になっていて、セッションを奪い合う事があるの...](http://i-think-it.net/windows2012r2-remotedesktop-setsuzokusu-up)

### サーバマネージャの起動抑止

デフォルトだと、OSが起動する度にサーバーマネージャーが起動するので抑止します。
使う時にだけ、任意で起動すれば良いかと。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-7.png)

[![windows2012r2-setup-7](../_resources/4db5c2d771f1cc7f04b294fb8f811386.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-7.png)

※もしかしたら、**EC2ではすでにチェック入っているかも知れません。**入ってれば本項は無視してください。

### 仮想メモリの設定

自動メモリ管理で良いと思いますが、環境に合わせて変更してください。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-8.png)

[![windows2012r2-setup-8](../_resources/b442e1874da9dd788d30dd9b186cca67.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-8.png)

### イベントログのサイズ指定

**イベントビューア**で必要に応じてログの保存容量を設定しておきます。
基本的に**「システム」「Application」「セキュリティ」**あたりを設定しておけば良いと思います。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-9.png)

[![windows2012r2-setup-9](../_resources/24a5598fb5760e6447a52569a5d49f6d.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-9.png)

### 時刻設定

EC2だとロケールがUTCなのでJSTに変更します。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-10.png)

[![windows2012r2-setup-10](../_resources/b40b46f65302ccf7770afe4102ea681f.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-10.png)

### 不要サービスの停止

不要なサービスは停止しておく
実行例）Spoolerサービスを停止する場合
1
2
3
4
5
`Stop-Service -Name Spooler -PassThru`
`Status Name DisplayName`
`------ ---- -----------`
`Stopped Spooler Print Spooler`

### フォルダ表示項目の変更

Windowsサーバを管理する上で、**隠しファイルや拡張子は見えた方が便利**なのでチェックを入れて見えるようにします。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-11.png)

[![windows2012r2-setup-11](../_resources/99d62188b6cb7670bd295fadfbef98e8.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-11.png)

### IE ESCの無効化/セキュリティ設定

サーバでIEを使う機会は少ないとは思いますが、ブラウジングする度にブロックに引っかかるのはどうかと思うので、無効化しておきます。
設定は**サーバーマネージャー**を起動して行います。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-13.png)

[![windows2012r2-setup-13](../_resources/1c0f8d970f1a4b1edef8db46971ad907.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-13.png)

合わせてインターネットオプションの「TLS1.0」「TLS1.1」「TLS1.2」の３つにチェックマークを付け、「SSL2.0」、「SSL3.0」のチェックは外しておきましょう。

[![windows2012r2-setup-12](../_resources/78373106f72e553b472338bd73da34cb.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-12.png)

### 2015/9/2 追記

電源オプションの変更（必須）

EC2の場合、デフォルトだと電源オプションが「バランス（推奨）」になっているので、必ず「ハイパフォーマンス」に変更しておきましょう。でないと本来のパフォーマンスが得られない可能性があります。

[(L)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-131.png)

[![windows2012r2-setup-13](../_resources/c78c37c9f35bb4e7cfd30df2e97295ad.png)](http://i-think-it.net/wp-content/uploads/2015/07/windows2012r2-setup-131.png)

**Windows Server 2012 R2**を構築する上で押さえておきたい設定項目を14つ紹介しました。
また”これは必要だ！”といった設定項目を発見したら、紹介したいと思います。
以上、あいしんくいっとでした。