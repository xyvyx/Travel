---
title: >-
  初めてのWindows Server 2008R2（Active Directory編）：AD DS(Active Directory Domain
  Service)のセットアップ - 放浪するエンジニアの覚え書き
updated: 2017-03-03 05:16:04Z
created: 2017-03-03 05:16:04Z
source: http://d.hatena.ne.jp/tetsuya_odaka/20110321/1300695600
tags:
  - SI
---

#  初めてのWindows Server 2008R2（Active Directory編）：AD DS(Active Directory Domain Service)のセットアップ

[WindowsServer2008R2](http://d.hatena.ne.jp/tetsuya_odaka/searchdiary?word=%2A%5BWindowsServer2008R2%5D) | 17:20 | ![ 初めてのWindows Server 2008R2（Active Directory編）：AD DS(Active Directory Domain Service)のセットアップのブックマークコメント](../_resources/popup.gif)

ファイル共有を目的として[Windows](http://d.hatena.ne.jp/keyword/Windows) Serverを導入した場合、[Active Directory](http://d.hatena.ne.jp/keyword/Active%20Directory)（AD）を利用しないということはまずありえない。

ここまでは、WORKGROUP[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)としての簡単な設定手順を書いたが、全ての役割と機能を削除して、ADを入れてみた。

ADは、[Windows](http://d.hatena.ne.jp/keyword/Windows) Server 2008R2では、複数の役割に分割されている。最初にAD DSを導入しなくてはならない。

#### ネットワークの設定変更

[コンピュータ](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D4%A5%E5%A1%BC%A5%BF)名（hq-fs01）の設定、静的[IPアドレス](http://d.hatena.ne.jp/keyword/IP%A5%A2%A5%C9%A5%EC%A5%B9)の設定（以下の例では、192.168.11.2）は済ませてあるとする。

[DNS](http://d.hatena.ne.jp/keyword/DNS)（正確には、ADの情報を格納するためのDynamicDNS）が一緒に[インストール](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)されるので、[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)の[DNS](http://d.hatena.ne.jp/keyword/DNS)を変える。

「ネットワークと共有センター」を開く。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312142508)

> [![f:id:tetsuya_odaka:20110312142508j:image](../_resources/20110312142508.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312142508)

「アダプターの設定変更」で「ネットワーク」を選択して右クリック。[プロパティ](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%D1%A5%C6%A5%A3)ーを表示する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312142606)

> [![f:id:tetsuya_odaka:20110312142606j:image](../_resources/20110312142606.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312142606)

[IPv4](http://d.hatena.ne.jp/keyword/IPv4)の「[プロパティ](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%D1%A5%C6%A5%A3)ー」を選び、[DNS](http://d.hatena.ne.jp/keyword/DNS)に自分自身のアドレスを設定する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312142709)

> [![f:id:tetsuya_odaka:20110312142709j:image](../_resources/20110312142709.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312142709)

#### AD DSの[インストール](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103058)

> [![f:id:tetsuya_odaka:20110312103058j:image](../_resources/20110312103058.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103058)

「役割の追加」から「[Active Directory](http://d.hatena.ne.jp/keyword/Active%20Directory)[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)サービス」を選択する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103204)

> [![f:id:tetsuya_odaka:20110312103204j:image](../_resources/20110312103204.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103204)

「次へ」を押して[インストール](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)する（途中で「.NET framework3.5の機能の追加」を聞かれるので、それも[インストール](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)する）。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103306)

> [![f:id:tetsuya_odaka:20110312103306j:image](../_resources/20110312103306.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103306)

「[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)マネージャー」で「役割」を開く。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103325)

> [![f:id:tetsuya_odaka:20110312103325j:image](../_resources/20110312103325.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103325)

ここで、「[Active Directory](http://d.hatena.ne.jp/keyword/Active%20Directory)  [ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)サービス」をクリックする。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103406)

> [![f:id:tetsuya_odaka:20110312103406j:image](../_resources/20110312103406.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103406)

「[Active directory](http://d.hatena.ne.jp/keyword/Active%20directory)[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)サービス　ウィザード（dcpromo.exe）を実行してください」と表示されるので、[コマンドプロンプト](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DE%A5%F3%A5%C9%A5%D7%A5%ED%A5%F3%A5%D7%A5%C8)でdcpromoを実行する。すると、以下の画面が出てくる。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103430)

> [![f:id:tetsuya_odaka:20110312103430j:image](../_resources/20110312103430.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103430)

「次へ」を押していくと以下の画面が出るので、「新しいフォレストに新しい[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)を作成する」を選択する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103451)

> [![f:id:tetsuya_odaka:20110312103451j:image](../_resources/20110312103451.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103451)

「フォレスト　ルート　[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)名」には、ルートの[FQDN](http://d.hatena.ne.jp/keyword/FQDN)（eranger.local）を入れ、「次へ」を押す。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103515)

> [![f:id:tetsuya_odaka:20110312103515j:image](../_resources/20110312103515.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103515)

「フォレストの機能レベル」では、[デフォルト](http://d.hatena.ne.jp/keyword/%A5%C7%A5%D5%A5%A9%A5%EB%A5%C8)の[windows](http://d.hatena.ne.jp/keyword/windows) server2003を設定したが、案件ごと（周辺のADとの関係を考慮して）に決める必要がある。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103542)

> [![f:id:tetsuya_odaka:20110312103542j:image](../_resources/20110312103542.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103542)

「[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)の機能レベル」では、Windows2008R2を選択したが、これも案件ごとに決める必要がある。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103610)

> [![f:id:tetsuya_odaka:20110312103610j:image](../_resources/20110312103610.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103610)

「追加[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)コントローラーのオプション」では、[DNS](http://d.hatena.ne.jp/keyword/DNS)がチェックされていることを確認する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103628)

> [![f:id:tetsuya_odaka:20110312103628j:image](../_resources/20110312103628.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103628)

以下の確認がくるので、「はい」を選択する。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312144221)

> [![f:id:tetsuya_odaka:20110312144221j:image](../_resources/20110312144221.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312144221)

以下は[デフォルト](http://d.hatena.ne.jp/keyword/%A5%C7%A5%D5%A5%A9%A5%EB%A5%C8)のままとした。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103702)

> [![f:id:tetsuya_odaka:20110312103702j:image](../_resources/20110312103702.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103702)

次に、ADを復元する際の[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)を聞かれる。[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)のAdminのパスと同じでもOKなので、それを設定した。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103721)

> [![f:id:tetsuya_odaka:20110312103721j:image](../_resources/20110312103721.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103721)

これで[インストール](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)は終了。設定を[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)できるので、適当に[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)する。

ここで、[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)のNetBIOS名が設定される。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103749)

> [![f:id:tetsuya_odaka:20110312103749j:image](../_resources/20110312103749.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103749)

設定には、数分間かかる。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312144701)

> [![f:id:tetsuya_odaka:20110312144701j:image](../_resources/20110312144701.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312144701)

設定が完了すると以下の画面になる。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103822)

> [![f:id:tetsuya_odaka:20110312103822j:image](../_resources/20110312103822.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312103822)

完了ボタンを押すと[再起動](http://d.hatena.ne.jp/keyword/%BA%C6%B5%AF%C6%B0)を聞かれるので、[再起動](http://d.hatena.ne.jp/keyword/%BA%C6%B5%AF%C6%B0)する。

[再起動](http://d.hatena.ne.jp/keyword/%BA%C6%B5%AF%C6%B0)すると、以下の嫌なエラーが表示されるが、とりあえず無視。（確認後に[再起動](http://d.hatena.ne.jp/keyword/%BA%C6%B5%AF%C6%B0)すると出なくなる）

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312144830)

> [![f:id:tetsuya_odaka:20110312144830j:image](../_resources/20110312144830.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312144830)

#### [NTP](http://d.hatena.ne.jp/keyword/NTP)の設定

ここでは、外の[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)に対して設定する（[ファイアウォール](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A1%A5%A4%A5%A2%A5%A6%A5%A9%A1%BC%A5%EB)がある場合には注意する）。

[コマンドプロンプト](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DE%A5%F3%A5%C9%A5%D7%A5%ED%A5%F3%A5%D7%A5%C8)から以下のコマンドを実行

w32tm /config /manualpeerlist:ntp.jst.mfeed.ad.jp /syncfromflags:manual /reliable:yes /update

WindowsTimeサービスを[再起動](http://d.hatena.ne.jp/keyword/%BA%C6%B5%AF%C6%B0)する。
net stop w32time & net start w32time
Windows Time サービスを停止中です.
Windows Time サービスは正常に停止されました。
Windows Time サービスを開始します.
Windows Time サービスは正常に開始されました。

#### OUの追加

ここでは、OU=HQを作成し、そこに、satoruとodakaを追加する。

その前に、[デフォルト](http://d.hatena.ne.jp/keyword/%A5%C7%A5%D5%A5%A9%A5%EB%A5%C8)で適用されている[セキュリティ](http://d.hatena.ne.jp/keyword/%A5%BB%A5%AD%A5%E5%A5%EA%A5%C6%A5%A3)ーポリシーを確認・変更しておく。

「管理ツール」＝＞「グループポリシーの管理」を開き、[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)＝eranger.localのところにある「Default Domain Policy」の設定タブを開く。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145129)

> [![f:id:tetsuya_odaka:20110312145129j:image](../_resources/20110312145129.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145129)

[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)の複雑さ(英数大文字小文字、数字、記号の３種類以上を使った[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)を設定しなくてはならない)が有効になっているので、これを無効にする。

左ペインでDefault Domain Policyを右クリックし、編集を選択する。

「[コンピュータ](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D4%A5%E5%A1%BC%A5%BF)の構成」- 「[windows](http://d.hatena.ne.jp/keyword/windows)の設定」- 「[セキュリティ](http://d.hatena.ne.jp/keyword/%A5%BB%A5%AD%A5%E5%A5%EA%A5%C6%A5%A3)ーの設定」を選択する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145301)

> [![f:id:tetsuya_odaka:20110312145301j:image](../_resources/20110312145301.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145301)

ここで、「[アカウント](http://d.hatena.ne.jp/keyword/%A5%A2%A5%AB%A5%A6%A5%F3%A5%C8)ポリシー」を[ダブルクリック](http://d.hatena.ne.jp/keyword/%A5%C0%A5%D6%A5%EB%A5%AF%A5%EA%A5%C3%A5%AF)する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145352)

> [![f:id:tetsuya_odaka:20110312145352j:image](../_resources/20110312145352.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145352)

そして、「[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)のポリシー」を[ダブルクリック](http://d.hatena.ne.jp/keyword/%A5%C0%A5%D6%A5%EB%A5%AF%A5%EA%A5%C3%A5%AF)する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145438)

> [![f:id:tetsuya_odaka:20110312145438j:image](../_resources/20110312145438.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145438)

「複雑さの用件を満たす必要がある[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)の[プロパティ](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%D1%A5%C6%A5%A3)ー」を無効にする。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145510)

> [![f:id:tetsuya_odaka:20110312145510j:image](../_resources/20110312145510.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145510)

適用後にOKを押す。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145548)

> [![f:id:tetsuya_odaka:20110312145548j:image](../_resources/20110312145548.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145548)

OUの追加に戻る。[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)マネージャーでeranger.localを選び右クリック。新規作成 - 組織単位（OU）を選ぶ。

OU名を入れてOKを押す。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145639)

> [![f:id:tetsuya_odaka:20110312145639j:image](../_resources/20110312145639.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145639)

次にユーザーを登録する。[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)マネージャーで、追加したOUであるHQを選択する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145741)

> [![f:id:tetsuya_odaka:20110312145741j:image](../_resources/20110312145741.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145741)

HQを右クリック。「新規作成」－「ユーザー」を選択し、必要な項目をいれていく。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145825)

> [![f:id:tetsuya_odaka:20110312145825j:image](../_resources/20110312145825.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312145825)

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150041)

> [![f:id:tetsuya_odaka:20110312150041j:image](../_resources/20110312150041.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150041)

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150102)

> [![f:id:tetsuya_odaka:20110312150102j:image](../_resources/20110312150102.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150102)

「完了」ボタンを押すとOU=HQの下にユーザーが作成される。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150136)

> [![f:id:tetsuya_odaka:20110312150136j:image](../_resources/20110312150136.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150136)

ついでに、（共有権限の付与のために）グループを設定する。

[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)マネージャーで、HQを選択する。右クリックで「新規作成」－「グループ」を選択し、必要な項目をいれる。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150255)

> [![f:id:tetsuya_odaka:20110312150255j:image](../_resources/20110312150255.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150255)

これでグループが作成される。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150330)

> [![f:id:tetsuya_odaka:20110312150330j:image](../_resources/20110312150330.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150330)

このグループにユーザーを追加するには、[サーバー](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0%A1%BC)マネージャーで、そのユーザーを選択して右クリックし、「グループに追加」を選択する。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150433)

> [![f:id:tetsuya_odaka:20110312150433j:image](../_resources/20110312150433.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150433)

「選択する[オブジェクト](http://d.hatena.ne.jp/keyword/%A5%AA%A5%D6%A5%B8%A5%A7%A5%AF%A5%C8)名をいれてください」の欄にグループ名をいれて「名前の確認」ボタンを押す。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150516)

> [![f:id:tetsuya_odaka:20110312150516j:image](../_resources/20110312150516.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150516)

OKを押すとグループに追加される。

追加したグループを選択して右クリック。[プロパティ](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%D1%A5%C6%A5%A3)ーのメンバータブをみると、そのグループに属するメンバーを見ることができる。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150552)

> [![f:id:tetsuya_odaka:20110312150552j:image](../_resources/20110312150552.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150552)

[ドメイン](http://d.hatena.ne.jp/keyword/%A5%C9%A5%E1%A5%A4%A5%F3)の管理者は、UsersにあるDomain Adminsに追加しておく。Domain Adminsを選び、メンバータブを開く。

> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150620)

> [![f:id:tetsuya_odaka:20110312150620j:image](../_resources/20110312150620.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150620)

追加ボタンを押すと、追加画面がでるので、「選択する…」に管理ユーザーIDをいれて「名前の確認」ボタンを押す。
> [(L)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150652)

> [![f:id:tetsuya_odaka:20110312150652j:image](../_resources/20110312150652.jpg)](http://f.hatena.ne.jp/tetsuya_odaka/20110312150652)

OKを押すと追加される。