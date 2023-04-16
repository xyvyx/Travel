---
title: Power BIとRの連携はデータビジュアライズの幅を驚異的に広げる！｜Power BIのR Script Visualを使ってみた | GiXo Ltd.
updated: 2016-12-06 09:05:59Z
created: 2016-12-06 09:05:59Z
source: http://www.gixo.jp/blog/8462
tags:
  - SI
---

# Power BIとRの連携はデータビジュアライズの幅を驚異的に広げる！｜Power BIのR Script Visualを使ってみた

[ ギックス](http://www.gixo.jp/author/gixo_member)
1.3k

## Power BIが苦手とする細部のカスタマイズをRで作り込め

[Power BI Desktop](https://powerbi.microsoft.com/ja-jp/)がRスクリプトをサポートしました。本記事では、Power BIとRの役割や、操作・設定方法などを紹介いたします。なお、Power BIに関する記事は[こちら](http://www.gixo.jp/tag/power-bi)にもございますので、是非ご覧ください。また、Rに関する記事は[こちら](http://www.gixo.jp/blog/3053)をご参照ください。

### Rスクリプトの出力結果を表示するコンテナ的な役割

Power BIは、入力されたRスクリプトをRの実行ファイルに渡し、実行後に出力されたイメージを描画するコンテナのような役割を担当しています。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_01.png)

[![20160427_PowerBI_R_01](../_resources/527d79b7024f4e2906a7a45964607f51.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_01.png)

分析や可視化を行うためのRスクリプトが資産として蓄積されている企業様も多いでしょう。既に資産としてあるRスクリプトを活用し、Power BIが苦手としている**グラフや表のカスタマイズをRに任せる**ことで、より解釈しやすいグラフや表を作成できるようになります。逆に、ある程度のプログラミングスキルが必要であったRでの**データ加工を操作が簡単なPower BIに任せる**ことで、分析スキルがそこまで高くない人でも扱えるようになります。また、Rスクリプトを使用して作成したグラフや表は、Power BI DesktopやPower BIブラウザ版で**レポートやダッシュボードにまとめる**ことができるので、共有性が上がり、周囲の人々を分析に巻き込みやすくなります。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_02.png)

[![20160427_PowerBI_R_02](../_resources/e65d680295c50de5832eef7c3e9fc76d.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_02.png)

### Rに渡す列を選択して、Rスクリプトを書くべし！

Power BI Desktopでの主な操作は下記の通りです。
1. R Script Visualをクリック
2. Rに連携する列を値フィールドにドラッグアンドドロップ（Power BI Desktopで追加した列であってもOK）
3. Rスクリプトエディターの欄にRスクリプトを書く

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_03.png)

[![20160427_PowerBI_R_03](../_resources/7d18218c818008cd32ee19171aa39f03.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_03.png)

但し、事前にRのインストールディレクトリを設定する必要があります。ファイル⇒オプションと設定⇒オプションからオプション画面を呼び出し、「R スクリプト」のタブのRのホームディレクトリを設定しましょう。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_04.png)

[![20160427_PowerBI_R_04](../_resources/d732b5da9ebe60e7071984c642995f0d.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_04.png)

#### 例）Excelの条件付き書式設定をしたような表をPower BIで作成

例えば、Power BI Desktopの表では、各セルをExcelの条件付き書式のように数値に基づいて色付けすることができません。しかし、データを表形式に整理し、セルの値に応じて色付けする処理をRスクリプトに実行させると、下記のように表現できます。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_05.png)

[![20160427_PowerBI_R_05](../_resources/fa5b64e82b3593e1c1e3175f5bfd99f2.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_05.png)

### R連携機能はPower BI ブラウザ版では使えない

現在、R連携機能はPreview版のため、Power BI Desktopでしかサポートされていません。もちろん、R連携で描画したグラフを含むレポートであっても、Power BI ブラウザ版にパブリッシュすることはできます。しかし、作成した表やグラフはブラウザ上では表示されず、白紙のページが表示されます。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_06.png)

[![20160427_PowerBI_R_06](../_resources/472a012b13e633d7930148432a8e085b.png)](http://www.gixo.jp/wp/wp-content/uploads/2016/04/20160427_PowerBI_R_06.png)

今後のアップデートで、R連携がPower BIブラウザ版でも使えるようになることを期待しましょう。

##### 関連記事リスト：

旧Power BIに関する記事

- [Power BI無償化でビッグデータ戦略を強化するマイクロソフト/ニュースななめ斬りbyギックス ](http://www.gixo.jp/blog/4553)

* * *

[![](../_resources/7837a71d90f058bdffc134c69c5b88e9.jpg)](http://www.gixo.jp/wp/wp-content/uploads/2015/06/BluePage.jpg)

**萩原 亮（はぎはら りょう）**

金融業勘定システム・流通業管理会計システム・ゲームログ集約／分析システムなどの構築・運用や、SNS／ゲームログの分析を経験し、現職。現在は Business Analyticsチームの一員として、データを可視化してアブダクションする業務に従事。今、興味をもっているツールはTableau。お気に入りのサービスはRedshift。