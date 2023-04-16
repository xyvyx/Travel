---
title: Azure Machine Learning 分析アルゴリズムの選択 - Qiita
updated: 2016-12-05 11:12:29Z
created: 2016-12-05 11:12:29Z
source: http://qiita.com/hiiyan0402/items/3e1584b25bfb6f453f52
tags:
  - SI
---

# Azure Machine Learning について

- Azure Machine Learning とは、Microsoft が提供するクラウドプラットフォーム Microsoft Azure のサービスの１つである機械学習基盤サービスのことです。

https://azure.microsoft.com/ja-jp/services/machine-learning/

- Web UIベースで、あらかじめ用意されている分析アルゴリズムをつなぎ合わせるだけで、簡単に機械学習分析を行うことができます。分析基盤はクラウドであるため、分析速度も高速です。
- またオリジナルのRスクリプトやPythonスクリプトも実行することができるので、単純に分析スクリプトの実行先として活用することもできます。
- 契約不要、８時間無料で使用することができますので、興味があれば使ってみてください。(機能は制限されますが)

# 分析アルゴリズムの選択

以下の２サイトを参考にすると良いです。
**Microsoft Azure Machine Learning のアルゴリズムの選択方法**

https://azure.microsoft.com/ja-jp/documentation/articles/machine-learning-algorithm-choice/

**Microsoft Azure Machine Learning Studio の機械学習アルゴリズム チート シート**

https://azure.microsoft.com/ja-jp/documentation/articles/machine-learning-algorithm-cheat-sheet/

# アルゴリズムチートシート

基本的に、[アルゴリズムチートシート](https://azure.microsoft.com/ja-jp/documentation/articles/machine-learning-algorithm-cheat-sheet/)を読んで、その通りに分析アルゴリズムを選択すると良いです。以降は、[アルゴリズムの選択方法サイト](https://azure.microsoft.com/ja-jp/documentation/articles/machine-learning-algorithm-choice/)の内容も踏まえての、選択について考察したものとなります。

# アルゴリズムの分類

分析アルゴリズムは大きく以下の４つに分類することができます。

- クラス分類 (教師あり学習, ラベルの予測)
- 回帰分析 (教師あり学習, 数値の予測)
- 異常検知 (教師なし学習, 稀なデータの分類)
- クラスタリング (教師なし学習, データの分類)

「クラス分類」「回帰分析」は正解(想定される結果)を持つデータを分析する教師あり学習。「異常検知」「クラスタリング」は正解を持たないデータを分析する教師なし学習となります。

「クラス分類」は"性別(男性/女性)", "年代(10代/20代/...)"などのラベルを予測します。「回帰分析」は数値を予測します。「異常検知」は発生確率が非常に低いデータの検出を行います。「クラスタリング」は正解データなしでデータの近似性から分類します。

# アルゴリズム選択の考慮点

分析アルゴリズムの分類を選択した次は、以下の点を考慮して、具体的な分析アルゴリズムを選択します。

- 線形性のあるデータであるか (線形/非線形)
- データ分析の精度
- データ分析の速度
- 設定可能なパラメータの数

「線形性のあるデータであるか」は、クラス分類であれば１つの直線/平面で分類できるかどうか、回帰分析であれば、１つの直線/平面で式を算出できるかどうかです。以下の図を見るとわかりやすいかもしれません。「指定可能なパラメータの数」はモジュールの設定項目の数です。数が多いほど自由度が高く、設定次第では高い分析精度を実現することができるようになります。

### 線形性のあるデータ

### 線形性のないデータ(非線形クラス境界)

> 参考：> [> Microsoft Azure Machine Learning のアルゴリズムの選択方法](https://azure.microsoft.com/ja-jp/documentation/articles/machine-learning-algorithm-choice/)

# アルゴリズムの分布 (速度/精度)

[アルゴリズムの選択方法のサイト](https://azure.microsoft.com/ja-jp/documentation/articles/machine-learning-algorithm-choice/)で記載されている表に従い、横軸をトレーニング時間(分析速度)、縦軸を精度としたグラフを作成しました。緑色のアルゴリズムは線形アルゴリズム(線形性のあるデータに使用)、青色のアルゴリズムは非線形アルゴリズムです。アルゴリズム名の右横にある数値は「設定可能なパラメータの数」を表しています。

## クラス分類

[(L)](https://qiita-image-store.s3.amazonaws.com/0/29243/b30ce006-b6e2-fb81-2dcd-cf88a610d8fa.png)

[![クラス分類](../_resources/b30ce006-b6e2-fb81-2dcd-cf88a610d8fa.png)](https://qiita-image-store.s3.amazonaws.com/0/29243/b30ce006-b6e2-fb81-2dcd-cf88a610d8fa.png)

まず２種類の分類を行うのか、３種類以上の分類を行うかで選択するアルゴリズムが異なります。２種類の場合「Two-class ～」という名のアルゴリズムを、３種類以上であれば「Multiclass ～」という名のアルゴリズムを選択します。

「サポートベクタマシン(SVM)」は100以上の特徴(説明変数)を扱う事ができます。「Locally-Deepサポートベクタマシン」は通常のSVMより速度を保ったまま高精度に分析することができます。

ニューラルネットワークは分析に時間がかかりますが、高精度でかつ設定可能なパラメータの数が９つと最も多いため、パラメータの設定次第で非常に高い分析精度を実現することができます。また[Net#](https://azure.microsoft.com/en-us/documentation/articles/machine-learning-azure-ml-netsharp-reference-guide/)という言語を用いて、独自のニューラルネットワークを定義することができるため、[ディープラーニング(深層学習)を行うことも可能です](http://qiita.com/hiiyan0402/items/0c753bedc3c0407bfdbb)。

なんか、お手軽にやるのであれば、デシジョンジャングルの一択でいい気がしてきました・・・。

## 回帰分析

[(L)](https://qiita-image-store.s3.amazonaws.com/0/29243/f5a5b596-ceb2-5853-f198-4a1e32d2ac6a.png)

[![回帰分析](../_resources/f5a5b596-ceb2-5853-f198-4a1e32d2ac6a.png)](https://qiita-image-store.s3.amazonaws.com/0/29243/f5a5b596-ceb2-5853-f198-4a1e32d2ac6a.png)

カウント予測を行うのであれば「ポワソン回帰」を、ランク予測を行うのであれば「順序回帰」を使用します。また分位点で回帰分析を行うのであれば「高速フォレスト分位点回帰」を使用します。あとは、線形 or 非線形、速度 or 精度、でアルゴリズムを選択します。

**> 参考**
> ポワソン回帰：> [http://stat.biopapyrus.net/glm/poisson-regression.html
> 分位点回帰：> [http://blog.n-insight.co.jp/2015/09/blog-post.html

## 異常検知

[(L)](https://qiita-image-store.s3.amazonaws.com/0/29243/abf5f641-d9ac-0637-43b0-e865d492f777.png)

[![異常検知](../_resources/abf5f641-d9ac-0637-43b0-e865d492f777.png)](https://qiita-image-store.s3.amazonaws.com/0/29243/abf5f641-d9ac-0637-43b0-e865d492f777.png)

「サポートベクタマシン」は One-class SVM のことです。チートシートによると、「PCAベース異常検知」の方が分析速度が早いみたいです。異常検知についての理解は[DATUM_STUDIOが行っていたセミナー](https://atnd.org/events/76952)がかなり勉強になりました。