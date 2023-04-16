---
title: 'WebSphereとSAPを連携しよう！: 第3回 SAPアダプターでのトランザクション管理'
updated: 2016-12-15 03:42:48Z
created: 2016-12-15 03:42:48Z
source: http://www.ibm.com/developerworks/jp/websphere/library/esb/adpt_sap/3.html
tags:
  - SI
---

# 第3回 SAPアダプターでのトランザクション管理

## JCAアダプターとしてのSAPアダプター

第1回でもご紹介しましたが、WebSphere AdaptersはJ2EEの標準であるJCA1.5準拠のアダプターです。WebSphere Adaptersのアプリケーション・アダプターの一つであるSAPアダプターもJCAに準拠している製品となっています。

### JCAに準拠しているアダプターとは？

それでは、JCAに準拠しているアダプターとはどのようなことを指すのでしょうか。そもそもJCAとは、J2EE Connector Architectureの略で、J2EE仕様の構成要素のひとつです。Java環境からEnterprise Information System(以下、EIS)へアクセスする標準仕様として定められました。ここでEISとはSAP ERPなどのERPパッケージや、TPモニター製品(CICS、IMSなど)に代表されるレガシーシステムやデータベースシステムなどのことを言います。

この仕様に準拠して、EIS固有のファンクションをラッピングし、Javaアプリケーションに共通のインターフェースを提供するのがリソース・アダプターです。リソース・アダプターは、EISを提供しているベンダーによって提供されます。SAPアダプターはこのリソース・アダプターに位置づけられます。

J2EEアプリケーションとリソース・アダプターの両方で可能となる、EISとの統合環境構築へ向けての標準仕様が、JCAで定められていると言えます。

##### 図1. リソース・アダプター

![図1. リソース・アダプター](../_resources/fig3_1.gif)

### JCAで規定しているsystem contracts

JCAの中では、7つのタイプのsystem contractsを定義していますが、特にQoS(Quality of Service)の観点から以下の3点が重要となってきます。

- Connection Management
    - J2EEアプリケーションサーバーとEISとのコネクションプーリングのメカニズムを規定しています。主要なインタフェースは、ConnectionFactoryと、Connectionと、ConnectionRequestInfoと、ManagedConnectionFactoryと、ManagedConnectionと、ManagedConnectionMetaDataです。 ManagedConnectionFactory、ManagedConnection、およびManagedConnectionMetaDataはリソース・アダプターによって実装されます。
- Transaction Management
    - EIS側が一つのトランザクション内に参加するためのトランザクション管理を規定しています。リソース・アダプターは以下の2つのタイプのトランザクションを選択することができます。
        - ローカル・トランザクション（単一のリソースに対するトランザクション：1フェーズコミット）
        - グローバル・トランザクション（複数リソースに対するトランザクション：2フェーズコミット）
- Security Management
    - EISに対してセキュアにアクセスするためのセキュリティ管理を規定しています。この規定はConnection Managementの延長上にもあり、JAAS認証などのJ2EE仕様にも関係します。

##### 図 2. JCA System contracts

![JCA System contracts](../_resources/fig3_2.gif)

JCAについては、Sun Developer Networkの「J2EE Connector Architecture」に解説と仕様が載っていますので、詳細はそちらをご覧下さい。

http://java.sun.com/j2ee/connector/

[上に戻る](http://www.ibm.com/developerworks/jp/websphere/library/esb/adpt_sap/3.html#ibm-pcon)

## SAPアダプターでのトランザクション管理

実際のSAPサーバーとの連携パターンとしては、同期処理でのリアルタイム連携、非同期によるバッチ更新処理などさまざま考えられます。そのようなシステムを構築する際には、ミドルウエア側のトランザクション制御がどう機能するかが、設計のポイントとなります。

SAPアダプターを使用した際の、トランザクション制御についてはどうでしょうか。

### SAPアダプターはローカル・トランザクション

「JCAで規定しているsystem contracts」の中のTransaction Managementでも記述しましたが、リソース・アダプターは、ローカル・トランザクションとグローバル・トランザクションのどちらかになります。

ここで簡単にローカル・トランザクションとグローバル・トランザクションについて触れておきますと、まずローカル・トランザクションは、単一のリソースに対するトランザクション管理であり、アプリケーションは、リソースを管理するリソース・マネジャに対してトランザクションの開始、トランザクションのコミット、ロールバックを一つのリソースに対して実施します。1フェーズ・コミットとも呼ばれています。

これに対し、グローバル・トランザクションは複数のリソースにまたがるトランザクション管理であり、アプリケーションは、リソースを管理するリソース・マネジャに対してトランザクションの開始、トランザクションのコミット、ロールバックを複数のリソースに対して実施します。2フェーズ・コミットとも呼ばれています。

リソース・アダプターであるSAPアダプターはこの中で、ローカル・トランザクションに当たります。つまり、SAPアダプターを使用するJ2EEアプリケーション、例えばESB製品上で稼動するメディエーション・フローでは、SAPというリソースに対してのみのトランザクション管理となります。WebSphere　AdaptersではSAPアダプターの他にJDBCアダプターが用意されていますが、これはグローバル・トランザクションになります。

ただし、SAPアダプターにはBAPIインターフェースがあり、その中の3つのインターフェースの中で、BAPI作業単位インターフェース（BAPI Work Unit Interface）があることを、「第2回　SAPアダプターを使ってみよう！」でご紹介しました。このBAPI作業単位インターフェース（BAPI Work Unit Interface）についておさらいしますと、一つのUOW（Unit Of Work）で、複数のBAPIを指定された順序で呼び出す処理で、順序性があり、いずれかのBAPIの処理が失敗した場合、すべてを最初の状態に戻すことが必要な場合に使用されます。

このインターフェースを使用すると、いくつか条件がありますが、複数のBAPI呼び出しに関しては、一つのトランザクション内で管理することが可能になります。ここで言う条件とは、SAP社から標準で提供されているBAPIのトランザクションモデルに従い実装されていて、内部でコミットをかけていないBAPIが対象であるとか、CALLする複数BAPIの中で関連性（前のBAPIの結果を次のBAPIで必要とするなど）のないものなどになります。

### WebSphere製品とSAPアダプターの組み合わせでのトランザクション制御

基本的にはSAPアダプターはローカル・トランザクションですが、WebSphere SOA関連製品と組み合わせで使用することにより、さらに高度なトランザクション制御が可能になります。

具体的には、WebSphere Application Server（以下WAS）上で稼動するWebSphere SOA製品であるWebSphere Enterprise Service Bus（以下WESB）、WebSphere Process Server(以下WPS)とSAPアダプターの組み合わせであれば、WASのLast Participantという機能を使用することにより、BAPIとグローバル・トランザクションのリソース・アダプター（例えばJDBCアダプター）とを1つのトランザクションに含めることが可能になります。

WASのLast Participantは、1フェーズ・コミット(1PC)のみをサポートするリソースが一つだけある場合に、そのリソースをグローバル・トランザクションに参加させるための機能です。図3のLast participantのシーケンスが示すように、2フェーズコミットにおいてprepareとcommitの処理の間に1PCリソースへのcommitを発行します。こうすることで、他の全てのリソースがprepareに対してvoteした場合にだけこのリソースに対してcommitが発行されることになります。

これをSAPアダプターに当てはめると、1PCResourceがSAPアダプター（BAPIインターフェース）、XAResourceがJDBCアダプターと考えられます。BAPIをCALLしながら、ログ情報をDBに書くといったシナリオのアプリケーションを開発する際に、SAPアダプターはローカル・トランザクションですが、そのフローを1つのトランザクションに含めて管理することが可能になります。

##### 図 3. Last Participantシーケンス

![Last Participantシーケンス](../_resources/fig3_3.gif)

「WebSphere Application Server V6 Announcement Workshop, 15. WASV6プログラミングモデル Extention」より

ただし、Last Participantを使用しても全体の整合性が保たれるとは限りません。1PCリソースがcommitに対してエラーを返した場合や応答を返さなかった場合、トランザクション・マネージャはそのローカルリソースの処理がcommitされたのかどうか判断できません。アプリケーションをデザインするときに、こうした（ローカルリソースとその他のリソースとの間の）不整合が起こることを考慮する必要があります。

[上に戻る](http://www.ibm.com/developerworks/jp/websphere/library/esb/adpt_sap/3.html#ibm-pcon)

## まとめ

今回は、JCA について簡単に触れながら、SAPアダプターのトランザクション管理についてご紹介をさせていただきました。

次回はJCAのsystem contractsに規定されているセキュリティ・マネージメントの観点から、SAPアダプターを使用した際の、セキュリティ管理についてご紹介します。