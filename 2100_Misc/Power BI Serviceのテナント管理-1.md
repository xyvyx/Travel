---
title: Power BI Serviceのテナント管理
updated: 2016-12-08 12:12:10Z
created: 2016-12-08 12:12:10Z
source: http://enterprisezine.jp/dbonline/detail/8746
tags:
  - SI
---

# Power BI Serviceのテナント管理

※Power BI Service のテナント管理については、本記事とは別に当チームのBlogにも記載していますので併せてご覧ください。

　[Data Platform Tech Sales Team Blog : Power BI と Office 365 のテナント管理](https://blogs.msdn.microsoft.com/dataplatjp/2016/07/06/powerbi-office365/)

　まず、テナントとは何かについて説明をします。

「テナント」とは、簡単に表現するとOffice 365 をはじめとするマイクロソフトが提供するクラウドサービスの「契約単位」です。このテナントに、SharePoint Online 、Exchange Online や Power BI Service などのライセンス情報や、ユーザーやセキュリティーグループなど認証や権限管理に必要な情報が紐づけられています。Power BI Service は独立したサービスではなく、Office 365のサービス群の一つとして提供されています。そのためOffice 365 のテナントを管理・設定することが、すなわち Power BI Service の認証基盤やユーザー管理、ライセンス管理を行うことになります。

　昨今、お客様先でPower BI Serviceのご紹介を行う際に、Power BI Serviceを利用開始するための方法やテナントの管理方法について問い合わせを受けることが多くなっています。そこで、次にPower BI Service を利用開始するための方法とテナントの管理方法について解説します。

　Power BI Serviceを新しく使い始めるには２つの方法があります。

##### 　(1)エンドユーザーが自ら自分の会社のメールアドレスを使ってサインアップする方法

##### 　(2)システム管理者が自社のユーザーをまとめて登録する方法

　実際に上記２つの方法でPower BI Service を使い始める時には、既にOffice 365のテナントがある場合と、テナントが無い場合で作業手順や利用開始後に管理可能な項目が変わってきますので、それぞれの組み合わせでその詳細についてまとめてみたいと思います。

##### 　(1) エンドユーザーが自らサインアップする場合

![www.powerbi.comから「無料でサインアップ」を選ぶと、エンドユーザー自身でPower BI Serviceにサインアップすることが可能](../_resources/605f73312b94473ea49ffb79ee7e742f.png)

[www.powerbi.com](http://www.powerbi.com/)から「無料でサインアップ」を選ぶと、エンドユーザー自身でPower BI Serviceにサインアップすることが可能

##### (a) エンドユーザーが入力したメールアドレスのドメインに紐づけられたOffice 365のテナントがある場合

　サインアップしたユーザーが既に他のOffice 365 のサービスを利用している場合（=既にOffice 365 上にサインアップユーザーのアカウントが存在する場合）には、そのユーザーにPower BI Service(無料)のライセンスが付与されます。

　また、サインアップユーザーが他のOffice 365のサービスを利用していない場合（=Office 365 上にサインアップユーザーのアカウントが存在しない場合）には、アカウントが追加された上でPower BI Services のライセンス（無償版）が付与されます。

　テナント管理者が、どのユーザーがPower BI Serviceにサインアップしたかを確認したい場合には、Office 365の管理センターからサインアップしたユーザーを確認することが可能です。

![テナント管理者がサインアップしたユーザーを確認する方法](../_resources/25edeec12dc5ba45421ea518a75c883f.png)

テナント管理者がサインアップしたユーザーを確認する方法

#####  (b) エンドユーザーが入力したメールアドレスのドメインに紐づけられたOffice 365のテナントがない場合

　この場合は、そのドメインに対するテナントが自動生成されて、Power BI Serviceが利用できるようになります。

　登録されたユーザーは、一般ユーザーとして登録されますので、明示的に管理者ユーザーを登録しない限りそのテナントには管理者がいない状態となります。

　自動生成されたテナントに、管理者ユーザーを登録しテナント管理を行えるようにするには以下の手順で設定を行います。

#### Power BI ドキュメント: 組織内の Power BI を管理する > Microsoft によってユーザーに対して作成されたテナントを管理するにはどうすればよいですか。

https://powerbi.microsoft.com/ja-jp/documentation/powerbi-admin-administering-power-bi-in-your-organization/#what-is-the-process-to-manage-a-tenant-created-by-Microsoft-for-my-users

##### 　(2) システム管理者が自社ユーザーを登録する場合

##### 　(a) 既にOffice 365のテナントがある場合

　Power BI Service のサブスクリプションを購入し、Office 365 の管理画面からユーザーにライセンスの追加をするだけでPower BI Service が利用できるようになります。

　（Power BI Service）

![Office 365 管理ポータルからユーザーにPower BI Service のライセンスを付与する方法](../_resources/d3b1af4efa4912966f748f1460fa67e4.png)

Office 365 管理ポータルからユーザーにPower BI Service のライセンスを付与する方法

##### 　(b) Office 365のテナントがない場合

　この場合は、新たにテナントを作成して、ユーザーを追加します。

　テナントの作成方法は、Office 365 のポータルからサインアップする方法や、上記(1)(b)に記載したテナントの自動生成機能を使う方法など、様々な方法があります。

　但し、実際の導入環境においてはただ単にテナントを作成すればよいという事ではなく、オンプレミスの認証基盤との連携やシングルサインオンの設計など様々な事を考慮して設計をしたのちに実際のテナントを作成する必要があります。

*ページ: 2*
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