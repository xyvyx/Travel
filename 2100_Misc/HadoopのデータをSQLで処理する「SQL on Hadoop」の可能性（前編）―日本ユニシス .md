---
title: HadoopのデータをSQLで処理する「SQL on Hadoop」の可能性（前編）―日本ユニシス | IT Leaders
updated: 2016-12-07 09:04:54Z
created: 2016-12-07 09:04:54Z
source: http://it.impressbm.co.jp/articles/-/14096
tags:
  - SI
---

# HadoopのデータをSQLで処理する「SQL on Hadoop」の可能性（前編）―日本ユニシス

清酒文人 小原未生（日本ユニシス）

2010年代に入ってから、ビッグデータが多くの企業から注目されている。その理由は、ビッグデータを活用することで、同業他社との差別化を図り、売上拡大や業務効率化により企業価値を向上させることができるからである。ビッグデータを蓄積/処理する基盤としてDWH向けRDBMSやHadoopがあり、成り立ちやアーキテクチャは異なるが、データを格納して、SQLをインタフェースとしてデータにアクセスすることができる点など、利用者から見ると違いが分かり難くなってきている。そこで日本ユニシスでは、DWH向けRDBMSとHadoopを用いて、データロード、データ検索について性能面での比較検証を行い、SQL on Hadoop（Hadoop内のデータをSQLで処理する機能）の適用範囲について考察を行った。本稿では検証結果と考察を報告する・※本稿は日本ユニシス発行の「技報通巻127号」（2016年3月発行）の記事に加筆・編集して掲載しています。

### 前提条件

　検証における前提条件は、下記の通りである。
1）DWH向けRDBMSについては、日本ユニシスで採用しているVerticaを使用する。Verticaの前提条件は下記の通りとする。
ⅰ）スーパープロジェクション（列配置で最適化することにより高いデータ圧縮率を実現したデータセット）を作成する。
ⅱ）テーブルには、パーティションを設定する。
ⅲ）同時実行数はVerticaのデフォルト値（1サーバーのcore数と同じ）を使用する。
2）Hadoopには、日本ユニシスで採用しているMapRを使用する。MapRの前提条件は下記の通りとする。
ⅰ）Hadoopエコシステムの中で、SQLでデータを扱えるHiveとDrillを使用する。
ⅱ）Hiveテーブルには、パーティションを設定する。
ⅲ）Hiveテーブルは，以下二つの形式を作成する。
ア）デフォルト形式（テキストファイル形式）。
イ）列単位にデータ保存を行うParquet形式。
ⅳ）上記のHiveテーブルの形式に適用する圧縮アルゴリズムは、下記の通りとする。
ア）デフォルト形式の場合は、MapR-FS自動圧縮機能によりLZ4で圧縮される。
イ）Parquet形式の場合は、圧縮解凍処理が速く、I/O処理が高速となるsnappyを適用する（以下、P+s圧縮形式）。
ⅴ）DrillはHiveテーブルからデータを検索する。
3）データロードを行う前のデータ形式はcsv形式とする。
4）データロードを行う前のデータはMapR-FSに配置する。
5）データ検索の処理時間は、クエリを発行してから全結果がファイルに出力完了するまでとする。

### 検証環境の構成

　検証環境として、図2、表2のように、VMwareを用いた仮想サーバーを3台作成する。尚、仮想サーバーは物理サーバーと1対1となるように作成する。
　MapRとVerticaのインストールは、リソースの使用状況などOSに関する条件を同じにするため、同じ仮想サーバー3台に対して行う。
　ネットワークは、Verticaで推奨されているPrivate（ノード内通信用）とPublic（外部との通信用）の2系統とする。
　MapRとVerticaの設定値は、1TB程度のデータ量を処理できるように修正している。

[![](../_resources/9c4b2659b32892f595125f92fb341993.jpg)](http://it.impressbm.co.jp/mwimgs/4/c/-/img_4cbe68b65831f1e79170054e5f68242073346.jpg)（図2）

[拡大画像表示](http://it.impressbm.co.jp/mwimgs/4/c/-/img_4cbe68b65831f1e79170054e5f68242073346.jpg)

[![](../_resources/80a5e7fe989f74d2a2c0e8e80cc8d34a.jpg)](http://it.impressbm.co.jp/mwimgs/d/e/-/img_de692be204823e16b2084506cb9cfa8881935.jpg)（表2）

[拡大画像表示](http://it.impressbm.co.jp/mwimgs/d/e/-/img_de692be204823e16b2084506cb9cfa8881935.jpg)

### 検証処理概要

　前節で挙げた検証項目の処理概要は、図3の通りである。

[![](../_resources/39b3fe0014d4eec77d09a528e63cd7f2.jpg)](http://it.impressbm.co.jp/mwimgs/b/9/-/img_b9713c861f83bc671661ca86e645af0365206.jpg)（図3）

[拡大画像表示](http://it.impressbm.co.jp/mwimgs/b/9/-/img_b9713c861f83bc671661ca86e645af0365206.jpg)

　MapR（Hive）のデータロードでは、MapR-FSに格納されたデータをデフォルト形式のHiveテーブルにロードする（①）。P+s圧縮形式のHiveテーブルにデータロードを行う場合は、デフォルト形式のHiveテーブルに格納されたデータをロードする（②）。

　MapR（Hive、Drill）のデータ検索では、各形式のHiveテーブルからデータ検索を行い、出力結果を仮想サーバー1のローカルディスクに出力する（③）。
　Verticaのデータロードでは、NFSマウントしたMapR-FSに格納されたデータをVerticaのテーブルにロードする（④）。
　Verticaのデータ検索では、MapRと同様、出力結果を仮想サーバー1のローカルディスクに出力する（⑤）。

### 検証データ

　検証データのテーブル構造は、図4の通りである。結合するテーブルの件数、サイズの違いによる処理性能を確認するため、検証テーブルと結合するマスターテーブルを3つ用意している。また、同時実行の検証のみ、検証テーブルのサイズを0.33TBとした。

[![](../_resources/cbf9cb6d761224cd6b5bd3a35970b302.jpg)](http://it.impressbm.co.jp/mwimgs/d/8/-/img_d8fd19dde1e700ab12ee51ead93412ad68938.jpg)（図4）

[拡大画像表示](http://it.impressbm.co.jp/mwimgs/d/8/-/img_d8fd19dde1e700ab12ee51ead93412ad68938.jpg)

　　　　　　　　　　　　　　　　　　　　　　　（後編につづく）

### 参考文献

[1] James Manyika、Michael Chui、Brad Brown、Jacques Bughin、Richard Dobbs、Charles Roxburgh、Angela Hung Byers、「Big data: The next frontier for innovation, competition, and productivity」、McKinsey Global Institute 、2011年5月

[2] Sanjay Ghemawat、 Howard Gobioff、 Shun-Tak Leung、「The Google File System」、2003年

[3] Jeffrey Dean and Sanjay Ghemawat、「MapReduce: Simplified Data Processing on Large Clusters」、2004年

[4] Michael Manoochehri、小林啓倫、「ビッグデータテクノロジー完全ガイド」、2014年11月
[5] 山崎慎一、「企業情報システムとデータの活用範囲の拡大」、ユニシス技報、日本ユニシス、Vol.31 No.4 通巻111号、2012年3月
[6] 羽生貴史、「データベース技術の動向」、ユニシス技報、日本ユニシス、Vol.29 No.2、通巻101号、2009年3月
[7] 総務省、「平成24年版情報通信白書」、2012年6月
[8] 総務省、「平成25年版情報通信白書」、2013年7月
[9] 鈴木良介、「ビッグデータビジネスの時代」、株式会社翔泳社、2012年3月

[10] Edward Capriolo、Dean Wampler、Jason Rutherglen、玉川竜司訳、「プログラミングHive」、オライリー･ジャパン（発行元）、2013年6月

[11] W.H.Inmon、藤本康秀、小畑喜一、「初めてのデータウェアハウス構築」、1995年12月
[12] 日本ユニシス、「データ統合・分析共通PaaS」
http://www.unisys.co.jp/solution/biz/bigdata/solution/paas.html
清酒　文人
小原　未生
日本ユニシス