---
title: SQL Server 仮想マシンに接続する (クラシック)
updated: 2016-12-19 05:31:56Z
created: 2016-12-19 05:31:56Z
source: >-
  https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-sql-connect
tags:
  - SI
---

# Azure での SQL Server 仮想マシンへの接続 (クラシック デプロイ)

 2016/9/22  共同作成者

## Overview

このトピックでは、Azure 仮想マシンで実行されている SQL Server インスタンスへ接続する方法について説明します。 ここでは、[一般的な接続のシナリオ](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-sql-connect#connection-scenarios)をいくつか紹介してから、[Azure VM での SQL Server への接続を構成する手順の詳細](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-sql-connect#steps-for-configuring-sql-server-connectivity-in-an-azure-vm)について説明します。

##### 重要

Azure には、リソースの作成と操作に関して 2 種類のデプロイ モデルがあります。[リソース マネージャー デプロイ モデルとクラシック デプロイ モデル](https://docs.microsoft.com/ja-jp/azure/resource-manager-deployment-model)です。この記事では、クラシック デプロイ モデルの使用方法について説明します。最新のデプロイメントでは、リソース マネージャー モデルを使用することをお勧めします。

Resource Manager モデルを使用している場合は、 [Resource Manager を使用した Azure での SQL Server 仮想マシンへの接続](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-sql-connect)に関する記事を参照してください。

## 接続のシナリオ

クライアントから仮想マシンで実行されている SQL Server に接続する方法は、クライアントの場所と、マシンやネットワークの構成によって異なります。 これらのシナリオは、次のとおりです。

##### メモ

これらの方法のいずれかで接続する前に、 [この記事の接続の構成手順](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-sql-connect#steps-for-configuring-sql-server-connectivity-in-an-azure-vm)を完了する必要があります。

### 同一クラウド サービス内の SQL Server に接続する方法

同じクラウド サービス内で複数の仮想マシンを作成できます。 このような仮想マシンのシナリオについては、「 [仮想マシンを仮想ネットワークまたはクラウド サービスと接続する方法](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-connect-vms#connect-vms-in-a-standalone-cloud-service)」を参照してください。 このシナリオでは、ある仮想マシン上のクライアントから、同じクラウド サービス内の別の仮想マシンで実行されている SQL Server に接続しようとする場合を取り上げます。

このシナリオでは、VM の**名前** (ポータル内では**[コンピューター名]** または **[ホスト名]** とも表示されます) を使用して接続できます。 この名前は、作成時に VM に指定した名前です。 たとえば、SQL VM に **mysqlvm**という名前を付けた場合、同じクラウド サービス内のクライアント VM では次のような文字列を使用して接続できます。

`"Server=mysqlvm;Integrated Security=false;User ID=;Password="`

### インターネット経由で SQL Server に接続する方法

インターネットから、SQL Server データベース エンジンに接続する場合は、着信 TCP 通信用の仮想マシンのエンドポイントを作成する必要があります。 この Azure 構成手順により、仮想マシンからアクセスできる TCP ポートに、着信する TCP ポート トラフィックが送信されます。

インターネット経由で接続するには、VM の DNS 名と VM エンドポイント ポート番号 (この記事の後半で構成します) を使用する必要があります。 DNS 名を確認するには、Azure ポータルに移動し、 **[仮想マシン (クラシック)]**を選択します。 その後、仮想マシンを選択します。 **DNS 名**は、**[概要]** セクションに表示されます。

たとえば、DNS 名が **mysqlvm7777.cloudapp.net** であり、VM エンドポイントが **57500** である **mysqlvm** という名前のクラシック仮想マシンがあるとします。 適切に構成された接続がある場合は、次の接続文字列を使用して、インターネット上の任意の場所から仮想マシンにアクセスできます。

`"Server=mycloudservice.cloudapp.net,57500;Integrated Security=false;User ID=;Password="`

これでクライアントからインターネット経由での接続は有効になりますが、すべてのユーザーが SQL Server に接続できるわけではありません。 外部のクライアントは、ユーザー名とパスワードを修正する必要があります。 セキュリティを強化するために、既知のポート 1433 を仮想マシンのパブリック エンドポイントに使用しないでください。 また可能であれば、エンドポイントに ACL を追加して、許可されたクライアントのみにトラフィックを制限することを検討してください。 エンドポイントで ACL を使用する手順については、「 [エンドポイントの ACL の管理](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-setup-endpoints#manage-the-acl-on-an-endpoint)」を参照してください。

##### メモ

この手法を使用して SQL Server と通信する場合、Azure データセンターからすべての送信データには、通常の [送信データ転送の料金](https://azure.microsoft.com/pricing/details/data-transfers/)が適用されることに注意してください。

### 同一仮想ネットワーク内で SQL Server に接続する方法

[Virtual Network](https://docs.microsoft.com/ja-jp/azure/virtual-network/virtual-networks-overview) では、さらにシナリオが追加されます。 同じ仮想ネットワーク内の VM が異なるクラウド サービスに存在する場合でも、それらの VM に接続できます。 また [サイト間 VPN](https://docs.microsoft.com/ja-jp/azure/vpn-gateway/vpn-gateway-site-to-site-create)を使うと、VM をオンプレミスのネットワークおよびマシンと接続するハイブリッド アーキテクチャを作成できます。

仮想ネットワークを使うと、Azure VM をドメインに参加させることもできます。 これは、SQL Server に Windows 認証を使用する唯一の方法です。 その他の接続シナリオでは、ユーザー名とパスワードによる SQL 認証が必要です。

ドメイン環境と Windows 認証を構成する場合は、この記事の手順を使用してパブリック エンドポイントまたは SQL 認証とログインを構成する必要はありません。 このシナリオでは、接続文字列で SQL Server VM 名を指定することによって、SQL Server インスタンスに接続できます。 次の例は、Windows 認証も構成されていることと、ユーザーが SQL Server インスタンスへのアクセスを許可されていることを前提としています。

`"Server=mysqlvm;Integrated Security=true"`

## Azure VM で SQL Server への接続を構成する手順

次の手順で、SQL Server Management Studio (SSMS) を使用してインターネット経由で SQL Server インスタンスに接続する方法を説明します。 ただし、同じ手順が、アプリケーションのアクセスが可能な SQL Server 仮想マシンを作成し、オンプレミスと Azure の両方で実行するときに適用されます。

別の VM またはインターネットから SQL Server インスタンスに接続するには、次のタスクを完了している必要があります。詳細については、この後のセクションで説明します。

次の図は、接続パスの概要を示したものです。

![SQL Server 仮想マシンに接続する](../_resources/909a806dd5c792f5b587d4750ea82fdf.png)

### 仮想マシン用の TCP エンドポイントを作成する

インターネットから SQL Server にアクセスするには、仮想マシンに、着信する TCP 通信をリッスンするエンドポイントが必要です。 この Azure 構成手順により、仮想マシンからアクセスできる TCP ポートに、着信する TCP ポート トラフィックが送信されます。

##### メモ

同じクラウド サービスまたは仮想ネットワーク内で接続する場合は、公開されたエンドポイントを作成する必要はありません。 その場合は、次のステップに進むことができます。 詳細については、 [Connection Scenarios (接続のシナリオ)](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-sql-connect#connection-scenarios)を参照してください。

1. Azure ポータルで、 **[仮想マシン (クラシック)]**を選択します。
2. SQL Server 仮想マシンを選択します。
3. **[エンドポイント]** を選択し、**[エンドポイント]** ブレードの上部にある [追加] ボタンをクリックします。

![ポータルでのエンドポイント作成手順](../_resources/62fef1af25b45b5dfa334d1ce12e52a5.png)

4. **[エンドポイントの追加]** ブレードの **[名前]** に、SQLEndpoint などの名前を入力します。
5. **[プロトコル]** で **[TCP]** を選択します。
6. **[パブリック ポート]** で、**57500** などのポート番号を指定します。
7. **[プライベート ポート]** で、SQL Server のリスニング ポートを指定します。既定値は **1433** です。
8. **[OK]** をクリックしてエンドポイントを作成します。

### データベース エンジンの既定のインスタンス用に Windows ファイアウォールで TCP ポートを開く

1. リモート デスクトップを使用して仮想マシンに接続します。VM への接続の詳しい手順については、[リモート デスクトップを使用して SQL VM を開く](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-portal-sql-server-provision#open-the-vm-with-remote-desktop)ことに関する記事をご覧ください。

2. ログインしたら、スタート画面で「**WF.msc**」と入力し、Enter キーを押します。

![ファイアウォール プログラムを開始する](../_resources/b4a2f17b26d6a53e736e434a19006abb.png)

3. **[セキュリティが強化された Windows ファイアウォール]** の左ペインで、**[受信の規則]** を右クリックし、[操作] ペインの **[新しい規則]** をクリックします。

![新しい規則](../_resources/3b3b4bd14826983f5e5727e4a7e126ea.png)

4. **新規の受信の規則ウィザード** ダイアログ ボックスの **[規則の種類]** で、**[ポート]** を選択し、**[次へ]** をクリックします。

5. **[プロトコルおよびポート]** ダイアログ ボックスで、既定の **[TCP]** を使用します。**[特定のローカル ポート]** ボックスで、データベース エンジン インスタンスのポート番号を入力します (既定のインスタンスの場合は「**1433**」を指定し、エンドポイントの手順でプライベート ポートに別のポート番号を指定した場合はその番号を指定します)。

![TCP ポート 1433](../_resources/5503908ebcef69ebd98e2e4f05098c85.png)

6. **[次へ]** をクリックします。
7. **[操作]** ダイアログ ボックスで、**[接続を許可する]** を選択し、**[次へ]** をクリックします。

 **セキュリティ上の注意:**  **[セキュリティで保護されている場合、接続を許可する]** を選択すると、セキュリティが追加されます。お使いの環境で追加のセキュリティ オプションを構成する場合はこのオプションを選択してください。

![接続を許可する](../_resources/5430d94f3229d865770a74fc2995ec0f.png)

8. **[プロファイル]** ダイアログ ボックスで、**[パブリック]** 、**[プライベート]** および**[ドメイン]** を選択します。その後、**[次へ]** をクリックします。

 **セキュリティ上の注意:**  **[パブリック]** をオンにすると、インターネット経由のアクセスが許可されます。可能であれば、できるだけ制限の厳しいプロファイルを選択してください。

![パブリック プロファイル](../_resources/3beba7538d50296752ee98f063dce0f7.png)

9. **[名前]** ダイアログ ボックスで、この規則の名前と説明を入力し、**[完了]** をクリックします。

![規則の名前](../_resources/0dcf64250c66f98e28bc826463feac96.png)

必要に応じて他のコンポーネント用に追加のポートを開きます。詳細については、「[SQL Server のアクセスを許可するための Windows ファイアウォールの構成](http://msdn.microsoft.com/library/cc646023.aspx)」を参照してください。

### TCP プロトコルでリッスンするように SQL Server を構成する

1. 仮想マシンに接続している間に、[スタート] ページで「**SQL Server 構成マネージャー**」と入力し、Enter キーを押します。

![SSCM を開く](../_resources/60d2d2b96912a16d8d35aef9d950494c.png)

2. SQL Server 構成マネージャーのコンソール ペインで、**[SQL Server ネットワークの構成]** を展開します。

3. コンソール ペインで、**[MSSQLSERVER のプロトコル]** (既定のインスタンス名) をクリックします。 詳細ウィンドウで、**[TCP]** を右クリックし、有効になっていない場合は **[有効]** をクリックします。

![TCP を有効にする](../_resources/e1c8fbb98f6b9acf966b3c5966fd90b9.png)

4. コンソール ペインで、**[SQL Server のサービス]** をクリックします詳細ペインで **[SQL Server (*インスタンス名*)]** (既定のインスタンスでは **[SQL Server (MSSQLSERVER)]**) を右クリックして、**[再起動]** をクリックします。これにより、SQL Server のインスタンスが停止し、再起動されます。

![データベース エンジンの再起動](../_resources/56d0c78cffb33003df828e2127931e65.png)

5. SQL Server 構成マネージャーを閉じます。

SQL Server データベース エンジン用のプロトコルを有効にする方法の詳細については、「[サーバー ネットワーク プロトコルの有効化または無効化](http://msdn.microsoft.com/library/ms191294.aspx)」を参照してください。

### 混合モード認証用に SQL Server を構成する

ドメイン環境がない場合、SQL Server データベース エンジンで Windows 認証を使用することはできません。別のコンピューターからデータベース エンジンに接続するには、混合モード認証用に SQL Server を構成します。混合モード認証では、SQL Server 認証と Windows 認証の両方が許可されます

##### メモ

構成されたドメイン環境でAzure の Virtual Network を構成した場合は、混合モード認証の構成が不要である可能性があります。

1. 仮想マシンに接続している間に、[スタート] ページで「**SQL Server Management Studio**」と入力し、選択したアイコンをクリックします。

初めて Management Studio を開く場合は、ユーザーの Management Studio 環境の作成が必要になります。これには数分かかることがあります。

2. Management Studio では、**[サーバーへの接続]** ダイアログ ボックスが表示されます。**[サーバー名]** ボックスに、オブジェクト エクスプローラーを使用してデータベース エンジンに接続する仮想マシンの名前を入力します (**[サーバー名]** として、仮想マシン名の代わりに **[(ローカル)]** または単一のピリオドを指定することもできます)。**[Windows 認証]** を選択し、**[ユーザー名]** ボックスで ***your_VM_name**\your_local_administrator* をそのまま使用します。**[接続]** をクリックします。

![サーバーへの接続](../_resources/39afa281df9bdeb4aa14868b3e8176e3.png)

3. SQL Server Management Studio のオブジェクト エクスプローラーで、SQL Server のインスタンス名 (仮想マシン名) を右クリックし、**[プロパティ]** をクリックします。

![サーバー プロパティ](../_resources/34a072cdba3b39243d3288fdeb3b1046.png)

4. **[セキュリティ]** ページの **[サーバー認証]** で、**[SQL Server 認証モードと Windows 認証モード]** を選択し、**[OK]** をクリックします。

![認証モードを選択する](../_resources/b983c91d4ac51c5e0970f51018b6c636.png)

5. [SQL Server Management Studio] ダイアログ ボックスで、SQL Server の再起動が必要であるというメッセージに対して **[OK]** をクリックします。

6. オブジェクト エクスプローラーでサーバーを右クリックし、**[再起動]** をクリックします(実行中であれば、SQL Server エージェントも再起動する必要があります)。

![再起動](../_resources/3a4dd844f1f731d9d16f533c510f768c.png)

7. [SQL Server Management Studio] ダイアログ ボックスで、SQL Server の再起動に同意を求めるメッセージに対して **[はい]** をクリックします。

### SQL Server 認証ログインを作成する

別のコンピューターからデータベース エンジンに接続するには、1 つ以上の SQL Server 認証ログインを作成する必要があります。

1. SQL Server Management Studio のオブジェクト エクスプローラーで、新しいログインを作成するサーバー インスタンスのフォルダーを展開します。

2. **[セキュリティ]** フォルダーを右クリックし、**[新規作成]** をポイントして、**[ログイン]** を選択します。

![新しいログイン](../_resources/29179f71e8be2b1ebf1fc4268be2b116.png)

3. **[ログイン - 新規作成]** ダイアログ ボックスの **[全般]** ページで、新しいユーザーの名前を **[ログイン名]** ボックスに入力します。

4. **[SQL Server 認証]** を選択します。
5. **[パスワード]** ボックスに、新しいユーザーのパスワードを入力します。**[パスワードの確認]** ボックスに、パスワードを再度入力します。

6. 必要なパスワード適用のオプションを選択します (**[パスワード ポリシーを適用する] **、**[パスワードの期限を適用する]**、**[ユーザーは次回ログイン時にパスワードを変更する] **)。ご自分でこのログインを使用する場合は、次回ログイン時にパスワードの変更を要求する必要はありません。

7. **[既定のデータベース]** ボックスの一覧から、ログインの既定のデータベースを選択します。このオプションの既定値は **master** です。ユーザー データベースをまだ作成していない場合は、**master** のままにしておきます。

![ログインのプロパティ](../_resources/75a24749fd60b8db910ee4cb5d098bc2.png)

8. これが初めて作成するログインである場合は、このログインを SQL Server 管理者専用に使用することが考えられます。その場合は、**[サーバー ロール]** ページで、**[sysadmin]** をオンにします。

##### メモ

sysadmin 固定サーバー ロールのメンバーには、データベース エンジンに対する完全な制御権が与えられています。このロールのメンバーは、適切なユーザーのみに限定してください。

![sysadmin](../_resources/df20757b433bfe107a2ac624f67cf390.png)

9. [OK] をクリックします。

SQL Server のログインの詳細については、「[ログインの作成](http://msdn.microsoft.com/library/aa337562.aspx)」を参照してください。

### 仮想マシンの DNS 名を特定する

別のコンピューターから SQL Server データベース エンジンに接続するには、仮想マシンのドメイン ネーム システム (DNS) 名が必要になります(これは、仮想マシンを識別するためにインターネットで使用される名前です。IP アドレスを使用することもできますが、Azure で冗長化またはメンテナンスのためにリソースが移動された場合、IP アドレスは変わる可能性があります。DNS 名は、新しい IP アドレスにリダイレクトできるため、安定しています)。

1. Azure ポータルで (または前の手順から)、**[仮想マシン (クラシック)]** を選択します。
2. SQL VM を選択します。
3. **[仮想マシン]** ブレードで、仮想マシンの **DNS 名**をコピーします。

![DNS name](../_resources/f96dcdf5f857d4d69293979f82fb4514.png)

### 別のコンピューターからデータベース エンジンに接続する

1. インターネットに接続されたコンピューターで、SQL Server Management Studio を開きます。

2. **[サーバーへの接続]** または **[データベース エンジンへの接続]** ダイアログ ボックスで、**[サーバー名]** ボックスに、先のタスクで決定した仮想マシンの DNS 名とパブリック エンドポイントのポート番号を *DNS 名,ポート番号* という形式で入力します (例: **mysqlvm.cloudapp.net,57500**)。

![SSMS を使用した接続](../_resources/a207d963cc827c3c24848566f211f909.png)

以前に作成したパブリック エンドポイントのポート番号を覚えていない場合は、**[仮想マシン]** ブレードの**[エンドポイント]** 領域でポート番号を確認できます。

![パブリック ポート](../_resources/2fc97b4473e1ca2e0e542ac4aef72f14.png)

3. **[認証]** ボックスで、**[SQL Server 認証]** を選択します。
4. **[ログイン]** ボックスに、前のタスクで作成したログインの名前を入力します。
5. **[パスワード]** ボックスに、前のタスクで作成したログインのパスワードを入力します。
6. **[接続]** をクリックします。

## 次のステップ

高可用性と障害復旧のために AlwaysOn 可用性グループを使用する予定もある場合、リスナーの実装を検討してください。 データベース クライアントは、SQL Server インスタンスの 1 つに直接接続せずに、リスナーに接続します。 その上でリスナーがクライアントを可用性グループのプライマリ レプリカにルーティングします。 詳細については、「 [Azure での AlwaysOn 可用性グループの ILB リスナーの構成](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-classic-ps-sql-int-listener)」を参照してください。

Azure の仮想マシンで実行されている SQL Server のセキュリティに関するベスト プラクティスをすべて確認することが重要です。 詳細については、「 [Azure Virtual Machines における SQL Server のセキュリティに関する考慮事項](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-sql-security)」をご覧ください。

[ラーニング パスをご覧ください](https://azure.microsoft.com/documentation/learning-paths/sql-azure-vm/) 。

Azure VM での SQL Server の実行に関するその他のトピックについては、「 [Azure Virtual Machines における SQL Server](https://docs.microsoft.com/ja-jp/azure/virtual-machines/virtual-machines-windows-sql-server-iaas-overview)」を参照してください。