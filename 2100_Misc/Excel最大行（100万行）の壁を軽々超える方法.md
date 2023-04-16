---
title: Excel最大行（100万行）の壁を軽々超える方法
updated: 2021-09-16 04:34:47Z
created: 2021-09-16 04:34:47Z
source: https://atmarkit.itmedia.co.jp/ait/articles/2109/16/news024.html
---

この記事は会員限定です。会員登録（無料）すると全てご覧いただけます。

[![](https://image.itmedia.co.jp/ait/files/20010101/backn2.gif)](https://atmarkit.itmedia.co.jp/ait/series/1751/index.html)

[連載目次](https://atmarkit.itmedia.co.jp/ait/series/1751/index.html)
**対象：**Excel 2016／2019／365

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata01.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata01.png)**Excelで100万行以上のデータを読み込むには？**

Excelでは、104万8576行のデータしか読み取ることができない。これ以上の行数を持つCSVファイルなどは、Power Queryで前処理することで読み取ることが可能だ。

　インターネットやIoTの普及により、最近では多くのデータが簡単に集まるようになってきている。そうしたデータを簡易に「Microsoft Excel（エクセル）」で解析したいということもあるだろう。

　ところがExcelでは、扱うことができる行の最大数が100万行（正確には、104万8576行）までしかない。これより行数の多いデータは、Excelでは直接扱うことができない。しかし、条件を満たせばExcelの限界を超える行数を持つテキストファイルをExcelで処理することは不可能ではない。

　なお確認は、Microsoft 365版のExcelとExcel 2016で行ったが、画面などは、Microsoft 365版を利用している。リボンの一部などに違いはあるが、基本的な操作は同じである。

### 大容量データをExcelで処理する

　大容量データを処理する場合、大きく2つの処理が可能だ。1つは、特定の条件を満たすデータだけを取り出す「フィルタリング」だ。元データの行数にかかわらず、フィルタリングを行った結果が100万行以下になれば、Excelでこれを読み込むことが可能になる。1回Excelに読み込むことができれば、以後の処理は普通のデータ処理と変わらない。

　もう1つは、データを集計する方法だ。大量のデータがあったとしても、その合計値や平均値を求めるような集計処理では、複数の行を集計行の1つにまとめることができるため、Excelで処理することも可能になる。

　例えば、1000万人の学生のテスト結果のデータ（最低でも1000万行になる）であっても、テストの平均値を求めるならそれは1行に集約できる。テストが複数ありデータがリスト形式だとすると、全体の行数は、テストの数×学生数となるが、テストの種類が100万を超えなければ、Excelに集計結果を読み込むことは可能だ。読み込めば、普通のExcelの処理が可能なので、グラフ化や表を整形するといった処理が可能になる。

　ここでは、100万行を超えるデータに対して「フィルタリング」「集計」処理を行う場合を想定して解説を行う。世の中には、さまざまなデータがあり、さまざまな処理方法があるが、多くの場合でこの2つのどちらかは適用が可能だ。逆に、最初にこの処理のどちらかを適用できるのであれば、どんなに大きなデータであっても、Excelで処理が可能になる。

　ただしExcelでは、こうした場合に利用可能なファイル形式は限定され、CSVやタブ区切りなどのテキストベースのファイル形式のみが対象となる。もっとも、こうした大容量データのほとんどは、テキストベースであるため、実用上の問題はないと思われる。

　ここでは、理解しやすいCSV形式のファイルを想定して解説を行う。サンプルデータとして、Mozilla Location Serviceが公開している携帯電話の基地局情報ファイル（CSV形式）を利用する。インターネットから入手可能で、100万行を超えているという条件で選択しただけであり、このデータの内容や意味に関しては解説しない。ただし、自分のデータに対して以下で解説する操作を行う場合には、どの行をフィルタリングすべきか、何を集計すべきかなど、データに関する知識は必須である。つまり、データの意味を理解せずには処理は難しい。

[Mozilla location service Download](https://location.services.mozilla.com/downloads)［英語］（Mozilla）

　データは、上記URLから、2021年9月13日版のデータを入手した（ファイル名は、「MLS-full-cell-export-2021-09-13T000000.csv」）。日々更新されるデータなので、サンプルの集計値などに違いが出ることは理解しておいていただきたい。また、このファイルは約341MB、429万5283行あった。

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata02.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata02.png)**Mozilla location serviceからデータをダウンロードする**

Webブラウザで「[Mozilla location service Download](https://location.services.mozilla.com/downloads)」ページを開き、「Full Cell Exports」欄のリンクをクリックして、データをダウンロードする。gzip形式（拡張子.gz）でアーカイブされているので、7-Zipなどで解凍し、CSVファイルを取り出す。

　このデータは、携帯電話の基地局について、ネットワーク（携帯電話事業者とほぼ同義だが、合併などにより複数のネットワーク番号を持つ事業者もある）と事業者の所属国、通信方式や座標などを集積したものだ。参考までに、CSVデータの構造に関しては、「[Data import and export](https://ichnaea.readthedocs.io/en/latest/import_export.html)」ページに解説がある。

### データをフィルタリングしてExcelで読み込む

　まずは、データから特定の値を持つ行だけを取り出すフィルタリング操作の例として、「mcc」列（所属国を表す国に対して割り当てられたコード）で、日本のコードである「440」と「441」のみを持つデータを取り出してExcelに読み込んでみる。

　Excelを起動して、Excelの［データ］タブにある［データの取得と変換］グループの［テキストまたはCSVから］でデータの読み込みを行う（Excel 2016では、［データ］タブの［新しいクエリ］をクリックし、［ファイルから］−［CSVから］を選択）。CSVファイルをダブルクリックしてExcelを起動してしまうと、全てのデータが読み込めないので注意してほしい。

　［データの取り込み］ダイアログが開くので、読み込みたいCSVファイルを選択する（今回の例では「MLS-full-cell-export-2021-09-13T00000.csv」を選択する）。先頭部分のプレビューが表示される。ここまでは、通常のCSVやテキストファイルの読み込みと同じである。このあたりに関しては、Tech TIPS「[【Excel】毎日集計のCSVファイルもクエリ機能で一発自動更新](https://atmarkit.itmedia.co.jp/ait/articles/2004/15/news036.html)」を参照してほしい。

　ここでダイアログ下の［データの変換］ボタンを押す。ボタンを押すと「Power Queryエディター」が起動する。プレビュー領域に、Excelのような形式で読み込まれたデータが表示されるはずだ。

　ここで、Excelの「フィルター」機能と同じく、見出し部分にある下向き三角（▼）を使って、取り出したい条件を持つ列に表示されるデータを選択する。最初の段階では、データが全て読み込まれていないので、値のチェックリストは一部しか表示されない。そこで、下にある［さらに読み…］リンクをクリックして、データを読み込ませてから、必要な項目を探して、チェックボックスを「オン」にする必要がある。

　次に「（すべての列の選択）」のチェックボックスを「オフ」にした後、上の検索ボックスに「44」と入れると、値の一部に「44」を含むものだけが表示されるようになるので、ここから「440」と「441」を探し、この2つのチェックボックスを「オン」にして［OK］ボタンをクリックする。

　最後に［閉じて読み込む］ボタンを押せば、新規にワークシートが作成されて、そこにテーブルとしてフィルタリングした結果が読み込まれる。サンプルデータには、「mcc」列に「440」または「441」を持つデータは、31万7512行（見出し行を除く）あった。

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata03.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata03.png)**データをフィルタリングしてExcelで読み込む（1）**

［データ］タブの［データの取得と変換］−［テキストまたはCSVから］を選択する。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata04.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata04.png)**データをフィルタリングしてExcelで読み込む（2）**

［データの読み込み］ダイアログが開くので、CSVファイルを選択し、［インポート］ボタンをクリックする。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata05.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata05.png)**データをフィルタリングしてExcelで読み込む（3）**

プレビューが表示されたら［データの変換］ボタンを押す。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata06.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata06.png)**データをフィルタリングしてExcelで読み込む（4）**

Power Queryエディターで読み込んだデータが開く。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata07.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata07.png)**データをフィルタリングしてExcelで読み込む（5）**

「mcc」列の見出しにある［▼］をクリックし、下にある［さらに読み…］リンクをクリックする。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata08.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata08.png)**データをフィルタリングしてExcelで読み込む（6）**

［すべて選択］のチェックを外し、検索ボックスに「44」と入力する。「440」と「441」にチェックを入れたら、［OK］ボタンをクリックする。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata09.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata09.png)**データをフィルタリングしてExcelで読み込む（7）**

「mcc」の値がフィルタリングされ、「440」と「441」である行のみ表示される。［ファイル］タブの［閉じて読み込む］ボタンをクリックする。
▼

[![](https://image.itmedia.co.jp/ait/articles/2109/16/wi-excelbigdata10.png)](https://image.itmedia.co.jp/l/im/ait/articles/2109/16/l_wi-excelbigdata10.png)**データをフィルタリングしてExcelで読み込む（8）**

フィルタリングした結果、データは約32万行になり、Excelでの処理が可能になる。

　このように100万行を超えるデータであっても、条件指定によりフィルタリングを行えば、ワークシートに読み込まれるデータを100万行以下に制限できる。この状態では、普通のExcelのテーブルなので、列を追加したり、並べ替えを行ったりといった普通の操作が全て可能だ。

　逆に言うと、データに対して100万行以下になるようなフィルタリング条件を付けることができるなら、どんなデータであってもExcelで処理ができるようになる。

　また、フィルタリング条件を変えれば、同じやり方で他の条件を持つ別のテーブルをExcelに読み込むことも可能だ。このようにすれば、100万行を超えるデータであっても、分割してExcelに全て読み込むこともできる。

### データを集計してExcelで読み込む

　データを分割して読み込むと全体に対しての集計が難しくなる。逆に全体に対して集計が必要なら、Power Queryで先に集計してしまうことで、行数を減らすことができる。

　今度は、同じデータに対して、集計を行ってみる。CSVファイルを［データ］タブの［データの取得と変換］−［テキストまたはCSVから］で読み込み、プレビューが表示されたら［データの変換］ボタンを押して、「Powe Queryエディター」にCSVファイルを読み込ませる。例として国（「mcc」列）ごとのネットワーク（「net」列）別に通信方式（「Radio」列）で集計を行う。

Copyright© Digital Advantage Corp. All Rights Reserved.