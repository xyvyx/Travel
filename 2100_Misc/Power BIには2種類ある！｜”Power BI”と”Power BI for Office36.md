---
title: >-
  Power BIには2種類ある！｜”Power BI”と”Power BI for Office365”、それぞれの特徴とその違いについてまとめてみた |
  GiXo Ltd.
updated: 2016-12-06 09:02:56Z
created: 2016-12-06 09:02:56Z
source: http://www.gixo.jp/blog/8069
tags:
  - SI
---

# Power BIには2種類ある！｜”Power BI”と”Power BI for Office365”、それぞれの特徴とその違いについてまとめてみた

## Excelのような表現・分析以外の機能も使用したい場合は「有償」一択。

### Power BIの各製品の役割や違いは分かりにくい

本ブログでは、[Power BI](https://powerbi.microsoft.com/ja-jp/)というBIツールに関する記事が[いくつか](http://www.gixo.jp/tag/power-bi)ありますが、Power BIは2種類の製品群があることをご存知でしょうか。また、それらの製品群の位置づけや違いまでを把握できているでしょうか。Power BIファミリーには多くの製品があり、私も最初は以下のような疑問だらけでどのように扱えばよいのか全くわかりませんでした。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_01_001.png)

[![20160229_powerbi_01_001](../_resources/46d1c858acc3b98c54287f40e982d491.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_01_001.png)

本記事では、ようやく分かり始めてきた2種類のPower BIの役割や違いなどについて説明します。役割や違いを正しく把握できることで、皆さんが今抱えている分析上の課題がどのツールを使えば解消するかを考えられるようになるでしょう。

### 両製品群の最大の違いは導入費用

Power BIには、[**Power BI**](https://powerbi.microsoft.com/ja-jp/)と[**Power BI for Office 365**](https://www.microsoft.com/ja-jp/office/2013/business/powerbi/)という2つの製品群がありますが、最も大きな違いは、Power BIは基本的に無償で使用できることに対して、Power BI for Office 365は月額の使用料がかかるという点です。言うなれば、Power BIは基本無料で遊べて、アプリ内のアイテムに課金する「ソーシャルゲーム」のような製品です。一方、Power BI for Office 365は月額料金を払えば、ゲームのほぼすべてのコンテンツを楽しむことができる「ネットゲーム」のような製品です（最近は、基本無料・アイテム課金のようなネットゲームも増えましたが…）。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_02_001.png)

[![20160229_powerbi_02_001](../_resources/c3521c5ff1ee93151ecfcf82dbbcd368.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_02_001.png)

どちらの製品にも**Power BI**という文言が含まれているため、人と会話する際にPower BIという用語を使用すると、どちらの製品群を指しているのか分からなくなる可能性があります。そのため、以下では、Power BIを無償版、Power BI for Office 365を有償版と表記します。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_03_002.png)

[![20160229_powerbi_03_002](../_resources/9f26ccab384a47556974dda6a4374b96.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_03_002.png)

無償版は、デスクトップ版・ブラウザ版・アプリ版の3製品から構成されています。これらの3製品は、[こちら](http://www.gixo.jp/blog/5312)の記事で詳細に解説していますので、是非ご覧ください。

一方、1ユーザ・ひと月あたり3530円かかる有償版は、Office 365 ProPlus・SharePoint Online (プラン 2) Yammer機能付きの2製品から構成されています。Office 365には、色々なサービスが含まれていますが、具体的にはExcel、分析向けExcel add-on（Power Query・Power View・Power Pivot・Power Map）、Excel Onlineというサービスを使用します。また、SharePoint Onlineのサイトという機能を使用します。

### 両製品群とも一気通貫で分析できるが、細かい機能の違いがある

分析は、対象データを取得し、データを集計しやすいように加工し、レポートを作成し、自分以外の人に共有するという流れで進んでいきます。レポート上では、グラフ、ピボットテーブルのような表形式、地図にマッピングするといった表現方法でデータを可視化できます。また、レポート共有にも、Webブラウザ経由で共有する方法と、iOSやandroidのアプリ経由で共有する方法があります。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_04_001.png)

[![20160229_powerbi_04_001](../_resources/b19c39e3feea177f9de8a691b633a2a1.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_04_001.png)

以下では、Power BIの各製品の担当領域や違いを説明します。

#### データ取得 ～ レポート作成

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_05_002.png)

[![20160229_powerbi_05_002](../_resources/3088b11380846a41d2e455e8ba5f4235.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_05_002.png)

データの取得からレポートの作成までは、無償版ではデスクトップ版が、有償版ではExcel with add-onが担当します。有償版では、Excelとadd-onの組み合わせでサービスを実現しており、データの取得と加工はPower Query、グラフの作成はPower View、表形式の作成はPower Pivot、地図を使ったレポートの作成はPower Mapがそれぞれ担当しています。

デスクトップ版とExcel with add-onは全く別の製品であり、様々な違いがあります。例えば、デスクトップ版の拡張子はpbixですが、Excel with add-onはxlsxです。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_08_002.png)

[![20160229_powerbi_08_002](../_resources/bf23105e3ed1c3d869aa78d0ed0e0e88.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_08_002.png)

2製品の違いを使ってみて感じた違いを上記にまとめました。無償版は、初めからBIツールとして開発された製品であるため、色鮮やかなグラフ、フィルタの細かい適用範囲の調整機能などが盛り込まれています。しかし、まだリリースされてから日が浅いため、ラベルや色付けを細かく定義するといったカスタマイズは苦手です。一方、有償版は、慣れ親しんできたExcelのインタフェースで分析でき、条件付き書式などの機能も使用できますが、もともとデータ分析用に作られた製品ではないため、ビックデータを分析するため物足りない面（1,048,576行しか扱えないなど）があります。製品を選択する前に、どのような表現で可視化したいのかを考えるようにしましょう。

#### レポート共有（ブラウザ）

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_06_002.png)

[![20160229_powerbi_06_002](../_resources/00eea033a845fa313ec0fe70ccf918f3.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_06_002.png)

レポートのブラウザ経由での共有は、無償版ではブラウザ版が担当し、レポートの簡単な編集などもできます。また、Data Connectivity Gatewaysという機能を使用すれば、ブラウザから直接オンプレミスのデータを取得することができます（この機能を使用するためには、[Power BI Pro](https://powerbi.microsoft.com/ja-jp/pricing/)を購入する必要があり、こちらは有償（1ユーザ・ひと月あたり9.99USD）です）。

一方、有償版では、サイトとExcel Onlineの組み合わせで共有機能を実現しています。サイトとは、ブラウザ上でファイルを共有できる製品で、アカウントごとにチームを作り、チーム毎やアカウント毎にファイルの共有範囲を設定することができます。Excel Onlineとは、Googleスプレッドシートのようなブラウザ上でExcelファイルの中身を閲覧できる製品です。これらのサービスを組み合わせることで、あるチームに所属しているアカウントだけにレポート（Excelファイル）を配信することができ、メンバはブラウザ経由でレポートを閲覧することができます。

有償版のExcel Onlineは無償版とは違い、ブラウザ上でファイルを編集することはできません。ファイルを編集するには、一度ローカルにダウンロードして編集し、再度アップロードする必要があります。また、10MBのファイル制限があるため、大きすぎるデータセットのレポートは共有はできますが、ブラウザ上での閲覧ができなくなります。

#### レポート共有（アプリ）

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_07_001.png)

[![20160229_powerbi_07_001](../_resources/156ee35406d32b257b14f2f1d5b92354.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/02/20160229_powerbi_07_001.png)

無償版のレポートはアプリ版を使用することでスマフォから閲覧することができますが、有償版にはそれに相当する機能がありません。スマフォのブラウザからExcel Online経由で閲覧することはできますが、Excel OnlineはSilverlightを使用したサービスである点に注意してください。脆弱性の塊だったFlashがスマフォのブラウザでサポートされなくなって久しいですが、Silverlightにも同様の措置が取られる可能性があります。

### 予算・データ表現の方向性・レポート共有の要件に応じて製品を選択

結局のところ、有償版と無償版のどちらを使用すべきなのでしょうか。現時点では、皆さんが抱えている課題や要件に寄るところが大きいです。ただ、私自身の判断基準を以下に記載するので、参考になさってください。

1. かけられる費用が少ない場合は、無償版を使用しましょう。
2. アクションに繋がりやすいデータの表現方法を定義して、その表現ができる製品を選択しましょう。

3. レポートの共有を組織内で行いたい場合は、要件を整理し、どのような機能を盛り込む必要があるか検討しましょう。基本的には無償版でも事足りるはずですが、組織内コミュニケ―ションの円滑化までを要件に含んでいる場合は、Office 365 ProPlusに含まれる[Skype for Business](http://www.skype.com/ja/business/)や[Yammer](https://www.microsoft.com/ja-jp/yammer/)などを使用することも視野に入ってくるでしょう。

4. Office 365の他の機能を使いたいという要望がなければ無償版を使用しましょう。

##### 関連記事リスト：

旧Power BIに関する記事

- [Power BI無償化でビッグデータ戦略を強化するマイクロソフト/ニュースななめ斬りbyギックス ](http://www.gixo.jp/blog/4553)

* * *

[![](../_resources/7837a71d90f058bdffc134c69c5b88e9.jpg)](http://www.gixo.jp/wp/wp-content/uploads/2015/06/BluePage.jpg)

**萩原 亮（はぎはら りょう）**

金 融業勘定システム・流通業管理会計システム・ゲームログ集約／分析システムなどの構築・運用や、SNS／ゲームログの分析を経験し、現職。現在は Business Analyticsチームの一員として、データを可視化してアブダクションする業務に従事。今、興味をもっているツールはTableauと QuickSight。お気に入りのサービスはRedshift。