---
title: Power BI Serviceのテナント管理
updated: 2016-12-08 12:12:34Z
created: 2016-12-08 12:12:34Z
source: http://enterprisezine.jp/dbonline/detail/8746?p=2
tags:
  - SI
---

# Power BI Serviceのテナント管理

次に、Power BI Service のテナント管理作業の中から、弊社によく問い合わせをいただく項目について、QA形式でまとめてみたいと思います。

##### 　【Q】多数のユーザーにPower BI Service のライセンスを付与したいが、GUIではなくてスクリプトで一括登録できるか？

##### 　【A】Office 365の他のサービスと同様にPower Shellを用いて、ライセンスの一括付与が可能です。

##### 　PowerShell を使ったユーザーへのPower BI Service のライセンス追加は以下の手順で行います。

　① 以下のページを参考に、PowerShellを使ってOffice 365 を管理するために必要となるモジュールをインストールして、Office 365に接続します。

#### Powershell を使ったOffice 365への接続

https://technet.microsoft.com/ja-jp/library/dn975125.aspx

　② 次にPower Shellからユーザーにライセンスを割り当てます

　以下のコマンドを実行すると、テナントで現在保有しているライセンスの状況を確認することができます。

### Get-MsolAccountSku

　実行結果の例（AccountSKUIdの列には[テナント名]:[SKU名]の形式で保有ライセンスが表示されます。）

![](../_resources/08ae7bb044370ba1fc312c7ad29c99b5.png)

　次に以下のコマンドを実行して、ユーザーにライセンスを付与することができます。（-AddLicenses 引数には、上記のPowerShell実行結果のAccountSKUId列の値をそのままコピー＆ペーストします）

### Set-MsolUserLicense -UserPrincipalName "[ユーザーID]" -AddLicenses "[テナント名]:[SKU名]"

　 実行結果の例（正常終了した場合には、メッセージは表示されませんが、エラーの場合はエラーメッセージが表示されます。）

 ![](../_resources/e757bd3772d7445bccde2e74387b1dd2.png)

　上記は一ユーザーに対してライセンスを付与する例ですが、簡単なスクリプトを記述することで、CSVからユーザーリストを読み込んだ値をSet-MsolUserLicenseコマンドに与えてライセンスの一括付与を行う事も可能です。

　 ※各コマンドの詳細につきましては、以下のページをご参照ください。

[　 https://technet.microsoft.com/ja-jp/library/dn771770.aspx](https://technet.microsoft.com/ja-jp/library/dn771770.aspx)

##### 　【Q】エンドユーザーによるPower BI Service へのサインアップを禁止することはできるか？

##### 　【A】はい、可能です。PowerShell からOffice 365に接続し、以下のコマンドを実行するとエンドユーザーが自らPower BI Service にサインアップすることを禁止することができます。

　（この設定を行ったテナントで、ユーザーがPower BI Service にサインアップしようとすると、サインアップは失敗し、管理者に連絡するようメッセージが表示されます）

### Set-MsolCompanySettings -AllowEmailVerifiedUsers $false

##### 　【Q】自分の組織のPower BI Serviceが稼働しているデータセンターの場所を知りたい

##### 　【A】Power BI Service(www.powerbi.com)にログインし、画面右上の[?]を選択、[Power BIについて]を選択するとデータセンターの場所を確認することができます。

![](../_resources/e819bfc5446091c8a1850dcf18046887.png)

##### 　【Q】Power BI Serviceの認証の仕組みはOffice 365と全く同じと考えてよいか？

##### 　【A】はい。Power BI Service は、Office 365の一つのサービスであり、Office 365の認証基盤であるAzure ADを使って認証を行いますので、Office 365と全く同じです。

　Azure ADを用いた多要素認証などの高度な認証基盤を利用することも可能ですし、Office 365用に構築された3rd Party製の認証ソリューションもそのまま利用していただけます。

　今回は、Power BI Service を導入し、管理する上で必ず理解が必要となるOffice 365の「テナント」について紹介させていただきました。

　次回は、企業における大規模分析環境の構築をテーマとして執筆させていただく予定ですので、ご期待ください。