---
title: 機械学習ってなんだろう - learning.ikeay.net
updated: 2016-12-05 11:11:45Z
created: 2016-12-05 11:11:45Z
source: http://learning.ikeay.net/entry/2016/05/02/200503
tags:
  - SI
---

# learning.ikeay.net

## 文系エンジニア、AI勉強中。

こんにちは、[@ikeay](https://twitter.com/ikeay)です。

前回は[人工知能](http://d.hatena.ne.jp/keyword/%BF%CD%B9%A9%C3%CE%C7%BD)とはなんぞやということに触れたので、今回は[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)について学んだことをざっくりまとめます。

[learning.ikeay.net](http://learning.ikeay.net/entry/2016/04/25/090016)

[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)とは、ざっくりいうと何かを学習して何かを予測すること。最近流行ってるDeepLearningというやつも[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)の一種です。

[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)の種類は、大きく３つに分けられます。

1. 教師あり学習
2. 教師なし学習
3. 強化学習

#### 教師あり学習とは？

教師あり学習は、学校のテスト勉強に似ています。問題集を解いて学習してからテストに挑む。これが教師あり学習です。教師といいつつリアル教師は出てこないですが…

問題と答え（[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)ではこの答えのことを「ラベル」と呼びます）のセットから傾向を学習し、新しいデータがどこに分類されるか予測をします。

教師あり学習の中でも、だいたい**分類問題**と**回帰問題**に分けられます。

##### 分類問題

こういうデータは
![f:id:ikeay:20160502151846p:plain](../_resources/20160502151846.png)

こうじゃ！
![f:id:ikeay:20160502151854p:plain](../_resources/20160502151854.png)

だいたい青と緑の境目のところに線を引きます。新しいデータが線の左側にきたら青に近しいデータ、線の右側にきたら緑に近しいデータと分類できます。[スパムメール](http://d.hatena.ne.jp/keyword/%A5%B9%A5%D1%A5%E0%A5%E1%A1%BC%A5%EB)の分類とかに使われてます。

##### 回帰問題

こうやって
![f:id:ikeay:20160502151258p:plain](../_resources/20160502151258.png)

こうじゃ！！
![f:id:ikeay:20160502151322p:plain](../_resources/20160502151322.png)

簡単に言うとデータ群から線を求めるのが回帰問題というやつです。株価の予測とか明日の気温の予測なんかに使われています。

#### 教師なし学習とは？

教師なしというのは、つまり正解不正解のデータがないってことです。そのままデータをつっこんじゃうのがこの学習方法。

**[クラスタリング](http://d.hatena.ne.jp/keyword/%A5%AF%A5%E9%A5%B9%A5%BF%A5%EA%A5%F3%A5%B0)**したり、**外れ値検出**したりして、なんとなく傾向をつかみます。

値が近いデータをまとめて[クラスタリング](http://d.hatena.ne.jp/keyword/%A5%AF%A5%E9%A5%B9%A5%BF%A5%EA%A5%F3%A5%B0)してやったぞ。

![f:id:ikeay:20160502152240p:plain](../_resources/20160502152240.png)

外れ値見てみようぞ。センサーの異常値検出とかにイイね！

![f:id:ikeay:20160502160234p:plain](../_resources/20160502160234.png)
> [> Wikipedia](https://ja.wikipedia.org/wiki/%E5%A4%96%E3%82%8C%E5%80%A4)> より

**[多様体](http://d.hatena.ne.jp/keyword/%C2%BF%CD%CD%C2%CE)学習**と呼ばれるのも教師なし学習の一種。 次元数の多いデータから次元を削減して学習しやすくする何かです。

![f:id:ikeay:20160502155758j:plain](../_resources/20160502155758.jpg)

> [> 知能システム制御研究室 | 情報科学研究科 | NAIST 国立大学法人奈良先端科学技術大学院大学 Webサイト](http://isw3.naist.jp/Contents/Research/ai-02-ja.html)> より

クルってなってるデータを、次元数を削減すると広げられるの！！それで分析すると簡単でしょ？
(ﾟДﾟ)？！？！？！？！

#### 強化学習とは？

[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)には、強化学習という方法もあります。強化学習というのはつまり、いいことをしたら報酬を与えていくという学習方法です。<s>犬のしつけっぽいですね！</s>最初はうまくいかなそうに見えるんですけど、どんどん効率的な方法を学んで賢くなっていくので驚きです。

[youtu.be](https://youtu.be/V1eYniJ0Rnk)

この動画では、ブロックを崩して得られるポイントを報酬としています。試行錯誤を繰り返した末、独自の方法まで編み出してゲームをクリアしてます。

人だったらボールとコントローラーを認識して、ボールの動きにあわせてコントローラーを動かすと思うのですが、コンピューターにはそんなことは認識できません。ピクセル単位でこういう流れで画面が変化すると勝てるって感じで認識しているようです。

最近ではロボット分野でも強化学習が行われています。以下の動画ではロボットが穴の空いた部品に棒を通そうと試行錯誤をしているのですが、その様子がまるで何かを習得しようとしている子どものようで、ちょっと怖いです（[不気味の谷](http://d.hatena.ne.jp/keyword/%C9%D4%B5%A4%CC%A3%A4%CE%C3%AB)現象？）。

[www.youtube.com](https://www.youtube.com/watch?v=JeVppkoloXs)

#### ざっくりしたまとめ

今回は[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)を大きく３つに分けましたが、細かくはいろんな[アルゴリズム](http://d.hatena.ne.jp/keyword/%A5%A2%A5%EB%A5%B4%A5%EA%A5%BA%A5%E0)（モデル）があります。[機械学習](http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC)にどんな種類があるのかを知り、どんなときにどの[アルゴリズム](http://d.hatena.ne.jp/keyword/%A5%A2%A5%EB%A5%B4%A5%EA%A5%BA%A5%E0)が適しているかが分かれば、scikit-learnやAzure上からけっこう簡単に使えるみたいです。

![f:id:ikeay:20160502153857p:plain](../_resources/20160502153857.png)

> [> scikit-learn](http://peekaboo-vision.blogspot.jp/2013/01/machine-learning-cheat-sheet-for-scikit.html)> より

上の図はscikit-learnのWebサイト上で公開されているチャートシートです。どのタイミングでどのモデルを使えばいいかチャート式ならわかりやすいですね。 教師あり学習は、classification（分類問題）、regression（回帰問題）、教師なし学習は、clustering（[クラスタリング](http://d.hatena.ne.jp/keyword/%A5%AF%A5%E9%A5%B9%A5%BF%A5%EA%A5%F3%A5%B0)）、dimensionality reduction（次元削減）に大きくわけられていますね。scikit-learnでは強化学習が扱えないので、この図では強化学習には触れられていません。

今回はここまでです。

* * *

Special Thanks: 松尾研 鈴木さん、PARTY 宮本さん