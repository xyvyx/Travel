---
title: SQL Database への接続 - SQL Server Management Studio
updated: 2016-12-19 05:32:55Z
created: 2016-12-19 05:32:55Z
source: >-
  https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-connect-query-ssms
tags:
  - SI
---

# SQL Server Management Studio を使用して SQL Database に接続し、T-SQL サンプル クエリを実行する

 2016/8/17 1 分 (所要時間) 共同作成者

この記事では、SQL Server Management Studio (SSMS) を使用して Azure SQL データベースに接続する方法について説明します。 正常に接続した後、単純な Transact-SQL (T-SQL) クエリを実行して、データベースとの通信を確認します。

## 最新バージョンの SQL Server Management Studio をインストールする

SQL Database を使用する場合は、常に最新バージョンの SQL Server Management Studio (SSMS) を使用する必要があります。 SSMS の最新バージョンは継続的に更新され、Azure および SQL Database との連携が最適化されています。 最新バージョンの SSMS は、サポートされているすべてのバージョンの SQL Server で動作します。 最新バージョンのダウンロードとインストールについては、 [SQL Server Management Studio のダウンロード](https://msdn.microsoft.com/library/mt238290.aspx)に関するページを参照してください。 SSMS は、最新の状態を保つために、新しいバージョンのダウンロードが可能になると、更新を求めるメッセージを表示します。

インストール後、Windows 検索ボックスで「 **Microsoft SQL Server Management Studio** 」と入力し、アプリを起動します。

 ![SQL Server Management Studio](../_resources/7702dcdfcc4dfb11e9cec4469739a481.png)

## SQL Server 認証を使用して Azure SQL Database に接続する

以下の手順は、SSMS で Azure SQL サーバーおよびデータベースに接続する方法を示しています。 サーバーとデータベースがない場合は、 [数分で SQL データベースを作成する](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-get-started) 方法に関するページを参照して、作成してください。

1. Windows 検索ボックスで、「 **Microsoft SQL Server Management Studio** 」と入力して SSMS を起動し、デスクトップ アプリをクリックします。

2. **[サーバーへの接続]** ウィンドウで、次の情報を入力します (SSMS が既に実行されている場合は、**[接続] > [データベース エンジン]** をクリックして、**[サーバーへの接続]** ウィンドウを開きます)。

    - **[サーバーの種類]**: 既定値はデータベース エンジンです。この値は変更しないでください。
    - **[サーバー名]**: *<servername>*.**database.windows.net** の形式で、Azure SQL Database サーバーの完全修飾名を入力します。
    - **[認証の種類]**: この記事では、**SQL Server 認証**を使用して接続する方法を示しています。 Azure Active Directory での接続の詳細については、「[Active Directory 統合認証を使用して接続する](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-aad-authentication#connect-using-active-directory-integrated-authentication)」、「[Active Directory パスワード認証を使用して接続する](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-aad-authentication#connect-using-active-directory-password-authentication)」、[Active Directory ユニバーサル認証を使用した接続](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-ssms-mfa-authentication)に関する記事をご覧ください。
    - **[ユーザー名]**: サーバー上のデータベースへのアクセス権を持つユーザー (たとえば、サーバーを作成するときにセットアップした " *サーバー管理者* ") の名前を入力してください。
    - **[パスワード]**: 指定したユーザーのパスワード (たとえば、サーバーを作成するときにセットアップした " *パスワード* ") を入力してください。

![SQL Server Management Studio: SQL Database サーバーへの接続](../_resources/ee8c0f500dc01e057b45b43aacd72059.png)

3. **[接続]**をクリックします。

4. 既定では、新しいサーバーには定義済みの [ファイアウォール規則](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-firewall-configure) がないため、クライアントは最初は接続をブロックされます。 特定の IP アドレスに接続を許可するファイアウォール規則がまだサーバーにない場合は、SSMS によって、サーバー レベルのファイアウォール規則を作成するように求められます。

 **[サインイン]** をクリックして、サーバー レベルのファイアウォール規則を作成します。 サーバー レベルのファイアウォール規則を作成するには、Azure 管理者である必要があります。

`![SQL Server Management Studio: Connect to SQL Database server](./media/sql-database-sql-server-management-studio-connect-server-principal/newfirewallrule.png)`

5. Azure SQL Database に正常に接続すると、**オブジェクト エクスプローラー**が開きます。これで、データベースにアクセスして、[管理タスクの実行やデータの照会](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-manage-azure-ssms)ができるようになります。

![新しいサーバー レベルのファイアウォール](../_resources/23951f08a9254ad333b1f1702158056a.png)

## ## 接続に関するエラーのトラブルシューティング

接続エラーの最も一般的な理由は、サーバー名の間違いと、ネットワーク接続の問題です。 <*servername*> はデータベースではなくサーバーの名前であり、完全修飾サーバー名 (`<servername>.database.windows.net`) を指定する必要があることに注意してください。

また、ユーザー名とパスワードに入力ミスや余分なスペースが含まれていないことを確認してください (ユーザー名では大文字と小文字が区別されませんが、パスワードでは区別されます)。

サーバー名と共にプロトコルとポート番号を `tcp:servername.database.windows.net,1433`

ネットワーク接続の問題によって、接続エラーとタイムアウトが発生することもあります。 サーバー名、資格情報、およびファイアウォール規則が正しいことを確認してから、単に接続を再試行すると、成功する可能性があります。

接続の問題の詳細については、「[SQL Database の SQL 接続エラーと一時エラーのトラブルシューティング、診断、防止](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-connectivity-issues)」をご覧ください。

## サンプル クエリの実行

サーバーへの接続後、データベースに接続し、サンプル クエリを実行できます。 クエリの作成に慣れていない場合は、 [Transact-SQL ステートメントの記述](https://msdn.microsoft.com/library/ms365303.aspx)に関するページを参照してください。

1. **オブジェクト エクスプローラー**で、サーバー上のデータベース (**AdventureWorks** サンプル データベースなど) に移動します。
2. データベースを右クリックし、 **[新しいクエリ]**を選択します。

![新しいクエリ。 SQL Database サーバーへの接続: SQL Server Management Studio](../_resources/fd88ffa4e8e11ab19a75a7de7ecd6f57.png)

3. クエリ ウィンドウに、次のコードをコピーして貼り付けます。

```
 SELECT
 CustomerId
 ,Title
 ,FirstName
 ,LastName
 ,CompanyName
 FROM SalesLT.Customer;
```

4. **[実行]** ボタンをクリックします。

![成功。 SQL Database サーバーへの接続: SQL Server Management Studio](../_resources/5b69f102d5320425cc34f97950ed7918.png)

## 次のステップ

SQL Server で可能な方法とほぼ同じように、T-SQL ステートメントを使用して Azure にデータベースを作成して管理することもできます。 SQL Server で T-SQL を使用するのに慣れている場合は、「 [Azure SQL Database TRANSACT-SQL 情報](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-transact-sql-information) 」で相違点の概要を参照してください。

T-SQL を初めて使用する場合は、「[チュートリアル: TRANSACT-SQL ステートメントの作成](https://msdn.microsoft.com/library/ms365303.aspx)」と「[TRANSACT-SQL リファレンス (データベース エンジン)](https://msdn.microsoft.com/library/bb510741.aspx)」を参照してください。

データベース ユーザーおよびデータベース ユーザー管理者の作成の概要については、 [Azure SQL Database セキュリティの概要](https://docs.microsoft.com/ja-jp/azure/sql-database/sql-database-get-started-security)

SSMS の詳細については、「 [SQL Server Management Studio の使用](https://msdn.microsoft.com/library/ms174173.aspx)」を参照してください。