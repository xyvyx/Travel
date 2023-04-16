---
title: Power BIのラインアップは「デスクトップ」「ブラウザ」「スマホアプリ」の3種類｜新バージョン Power BI の紹介 | GiXo Ltd.
updated: 2016-12-06 09:03:25Z
created: 2016-12-06 09:03:25Z
source: http://www.gixo.jp/blog/5312
tags:
  - SI
---

# Power BIのラインアップは「デスクトップ」「ブラウザ」「スマホアプリ」の3種類｜新バージョン Power BI の紹介

[ ギックス](http://www.gixo.jp/author/gixo_member)
5.4k

## データ分析基盤と分析結果共有基盤を手軽に構築できる

こんにちは、分析チームの萩原です。

ギックスが以前から「安くて、早くて、易しいツール」の一つとして注目している分析ツール「Microsoft Power BI」の新バージョンがリリースされました。先日、[Power BI Desktopのリリースに関する記事](http://www.gixo.jp/blog/5184)を掲載しましたが、本記事では、新Power BIのラインアップを紹介いたします。

### 新Power BIのラインアップは3つのサービス

新Power BIは、下記の3つのサービスで構成されています。なお、Power BI ブラウザ版を使用するためには、アカウントが必要ですので、[公式サイト](https://powerbi.microsoft.com/)で登録しましょう。

- Power BI Desktop
- Power BI ブラウザ版（※）
- Power BI スマホアプリ版（※）

※Power BI ブラウザ版とスマホアプリ版は正式名称ではありません。どちらも製品名はMicrosoft Power BIと記載されておりましたので、本記事では区別するためにブラウザ版とスマホアプリ版と記載します。

3つのサービスの役割は異なり、分析環境の構築／分析業務を担当するDesktop、分析環境の共有／複数人での分析業務／スマホアプリ用の画面の作成を担当するブラウザ版、スマホアプリ用の画面の閲覧／アラートルールの設定を担当するスマホアプリ版に分かれています。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_018.png)

[![20150728_graffe_018](../_resources/763445acdd7b33510e25dbb67c9211e2.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_018.png)

それでは、3つのサービスでできることを紹介いたします。

#### Power BI Desktop

Power BI Desktopでは、データの取り込みや取り込んだデータの加工などといった分析環境の構築ができ、その環境を分析用ファイル（pbixファイル）として保存することができます。なお、データの取り込み時にタスクマネージャを確認すると、メモリの使用率が増加し、ディスクアクセスが頻繁に行われていることが分かります。どうやら、Power BIはデータをローカルに取り込み、メモリ上に展開するツールのようです。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_02.png)

[![20150728_graffe_02](../_resources/54abbfe6cc3783daf7998bca72be0638.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_02.png)

また、ページといわれるフィールドにグラフやテキストボックスや画像を自由に挿入することで、レポートを作成することができます。
[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_033.png)

[![20150728_graffe_033](../_resources/06cdbfc9b7f9e83722feb83680105efe.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_033.png)

ところで、Power BIのインタフェースは、データの加工画面ではExcelのような印象を、レポートの作成画面ではPowerpointのような印象を受けました。ExcelとPowerpointの良いところを兼ね合わせたツールになりそうな予感がします。

分析用ファイルとレポートの作成後、クラウドにpbixファイルをアップロードして共有しますが、この作業はPower BI DesktopとPower BI ブラウザ版の両方で実施できます。

#### Power BI ブラウザ版

Power BI ブラウザ版では、アップロードしたpbixファイルのレポートを編集できます。ただし、Desktop版でできていた一部の作業がブラウザ版ではできないといった制約があるようです。例えば、Desktopではできていた画像の挿入がブラウザ版ではできません。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_04.png)

[![20150728_graffe_04](../_resources/c03323521524e336a04020165b45d7a3.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_04.png)

また、pbixファイルの共有グループを作成でき、作成したグループへレポートを共有することができます。グループへの共有手順については、後日、別記事にて記載します。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_07.png)

[![20150728_graffe_07](../_resources/1a7b38edef6c2c2687c79201c93755d2.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_07.png)

さらに、スマホアプリ版で確認するための画面をダッシュボードとして作成し、このダッシュボードにレポートのグラフをピン止めすることで、スマホでもレポートのグラフを閲覧することができるようになります。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_08.png)

[![20150728_graffe_08](../_resources/3d1c14ad2e36a8db93487bf45cf3c27c.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_08.png)

#### Power BI スマホアプリ版

Power BI スマホアプリ版では、ブラウザ版で作成したダッシュボードを閲覧することができます。また、ダッシュボード内のグラフにアラートルールを設定することができます。なお、2015/7/28現在、アラートルールを設定できるのは数値を表示する「カードタイル」のみです。数値に対して上下の閾値を設定でき、閾値を上回ったり、下回ったりすると通知が届くようになっています。

[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_05.png)

[![20150728_graffe_05](../_resources/0148913abcbc0c061d6003c256b34d2a.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_05.png)

### 適材適所の運用を目指す

3つのサービスでできることを下記にまとめました。
[(L)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_063.png)

[![20150728_graffe_063](../_resources/ab5b553741030f64c0263c948f7fc77d.png)](http://www.gixo.jp/wp/wp-content/uploads/2015/07/20150728_graffe_063.png)

各サービスでできることを理解したうえで、適切な役割の人が適切なサービスを使用するようにしましょう。なお、Power BIは基本的に無償で使用できるので、これらの3つのサービスを組み合わせて活用することで、分析基盤と分析結果共有基盤を安価かつ容易に構築できます。

##### 関連記事リスト：

旧Power BIに関する記事

- [Power BI無償化でビッグデータ戦略を強化するマイクロソフト/ニュースななめ斬りbyギックス ](http://www.gixo.jp/blog/4553)

* * *

[![](../_resources/7837a71d90f058bdffc134c69c5b88e9.jpg)](http://www.gixo.jp/wp/wp-content/uploads/2015/06/BluePage.jpg)

**萩原 亮（はぎはら りょう）**

金融業勘定システム・流通業管理会計システム・ゲームログ集約／分析システムなどの構築・運用や、SNS／ゲームログの分析を経験し、現職。現在は Business Analyticsチームの一員として、データを可視化してアブダクションする業務に従事。今、興味をもっているツールはTableauとPower BI。お気に入りのAWSのサービスはRedshift。