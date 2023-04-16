---
title: 省エネHTML入力！基本Markdown記法のチートシート
updated: 2018-03-10 12:07:02Z
created: 2018-03-10 12:07:02Z
source: https://nelog.jp/markdown
author: xyvyx10
tags:
  - Web
  - 個人事業主
---

#  省エネHTML入力！基本Markdown記法のチートシート

 2015/9/11  [WEB制作](https://nelog.jp/category/website-creation), [ブログ](https://nelog.jp/category/blog)  [0](https://nelog.jp/markdown#reply-title)

![](../_resources/d07ae32666f0ed8da447f2e3eb460a63.jpg)

前回、EvernoteにMarkdown記法でメモを残せるMarxicoを紹介しました。
[EvernoteにMarkdown記法でメモできるChromeアプリ「Marxico」が便利](https://nelog.jp/marxico)
Evernoteはメモを手軽にノートに残せて便利です。 文字を装飾しようと思えば、ツールボタンでも装飾できます。 ただ、文字を選...
これを書くにあたって、Markdown記法の書き方を見返してみたのですが、ほとんど使用してない書き方は、忘れてしまっているものが結構ありました。
Markdown記法は、とても簡単な書き方なので、忘れる人もあまりないとは思います。ただ、僕の場合とても忘れっぽいので、備忘録がてらのまとめ。

スポンサーリンク

## Markdown記法とは

![Markdown記法](../_resources/Markdown.gif)

Markdown記法とは、軽量マークアップ言語のひとつです。

HTMLでマークアップを手打ちしたことがある方ならわかると思うのですが、テキストエディタでタグを打ち込むのは、結構大変ですし、慣れないうちは覚えきれない部分もあります。

ただ、Markdown記法を利用すると、覚えやすいちょっとした書き方を守ってプレーンテキストを書くだけで、HTMLを生成できるようになります。
ですので慣れてしまえば、HTMLを手入力したり、ツールなどでタグ付けなどをするよりは、早く基本的なHTML文書なら作成することができます。
Markdown記法を、ちょっとブラウザから試してみる場合は、以下のツールなどが便利です。
[Online Markdown Editor](http://www.ctrlshift.net/project/markdowneditor/)
Markdown記法のテキストを編集できるWebサービス

## Markdown記法の書き方

Markdown記法を使うと、覚えやすい少ない文字で手軽にHTMLを書ける作りになっており、入力のコストを削減することができます。（※全てのHTMLの能力を利用できるわけではありません。）

### 段落

<p>タグを使った段落です。段落を分けて挿入するには、空行を挟んで文章を書きます。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3 | 段落を分けるには、空行で分ければOKです。<br>このとき、段落をスペースやタブでインデントするのはNG。 |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3 | <p>段落を分けるには、空行で分ければOKです。</p><br><p>このとき、段落をスペースやタブでインデントするのはNG。</p> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-.png)

[![Markdown記法 段落](../_resources/54cda054a13122fea71d84422f9f6681.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-.png)

※見た目は、出力するツールやソフトによって異なります。

### 改行

<br>タグを使った改行です。文末に半角スペースを2つ入れます。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3 | 文中で強制的に改行をするには、<br>文末に半角スペースを2つ入れてください→<br>これで改行されているはずです。 |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3 | <p>文中で強制的に改行をするには、 <br /><br>文末に半角スペースを2つ入れてください→ <br /><br>これで改行されているはずです。</p> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-1.png)

[![Markdown記法 改行 ](../_resources/7a2bd4133a1af4228c754aeaaff3410f.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-1.png)

### テキストの強調

<em>や<strong>を用いた強調表示をするには、「*（アスタリスク）」や、「_（アンダーバー）」で強調したい文字を囲みます。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3 | 通常の強調は*アスタリスク*もしくは_アンダーバー_で囲みます。<br>強い協調は、**アスタリスク2つ**もしくは__アンダーバー2つ__で囲みます。 |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3 | <p>通常の強調は<em>アスタリスク</em>もしくは<em>アンダーバー</em>で囲みます。</p><br><p>強い協調は、<strong>アスタリスク2つ</strong>もしくは<strong>アンダーバー2つ</strong>で囲みます。</p> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-2.png)

[![Markdown記法 テキストの強調](../_resources/d5c7a8c9e1c01e5ca10f645250e753bf.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-2.png)

### 見出し

<h1>～<h6>までの見出しをつけるには、「#（シャープ）」を用います。
h1とh2のみ、「=（イコール）」と、「-（ハイホン）」を用いた書き方もあります。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19 | ##見出し<br>#見出し1<br>見出し1<br>=====<br>##見出し2<br>見出し2<br>--------<br>###見出し3<br>####見出し4<br>#####見出し5<br>######見出し6 |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | <h1>見出し1</h1><br><h1>見出し1</h1><br><h2>見出し2</h2><br><h2>見出し2</h2><br><h3>見出し3</h3><br><h4>見出し4</h4><br><h5>見出し5</h5><br><h6>見出し6</h6> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-3.png)

[![Markdown記法 見出し](../_resources/c2db8056a7da954875baa1f2d6913f83.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-3.png)

### 順序なしリスト

<ul><li>の順序なしリストをマークアップするには、「*（アスタリスク）」、「+（プラス）」、「-（ハイホン）」を文頭において、半角スペースを入れます。

#### 記入例

＊アスタリスク

|     |     |
| --- | --- |
| 1<br>2<br>3 | * リストアイテム1<br>* リストアイテム2<br>* リストアイテム3 |

+プラス

|     |     |
| --- | --- |
| 1<br>2<br>3 | + リストアイテム1<br>+ リストアイテム2<br>+ リストアイテム3 |

-ハイホン

|     |     |
| --- | --- |
| 1<br>2<br>3 | - リストアイテム1<br>- リストアイテム2<br>- リストアイテム3 |

#### HTML出力

上記のものはすべて以下のように出力されます。

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | <ul><br><li>リストアイテム1</li><br><li>リストアイテム2</li><br><li>リストアイテム3</li><br></ul> |

#### 表示例

[![Markdown記法 順序なしリスト](../_resources/f27590ea47a612f3539b852ac34786a0.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-4.png)

### 順序付きリスト

<ol><li>を用いる順序付きリストは、文頭に『「半角数字」＋「.（ドット）」＋「半角スペース」』といったようにマークアップします。「1. 」といったような感じです。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3 | 1. リストアイテム1<br>2. リストアイテム2<br>3. リストアイテム3 |

#### HTML出力

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | <ol><br><li>リストアイテム1</li><br><li>リストアイテム2</li><br><li>リストアイテム3</li><br></ol> |

#### 表示例

[![Markdown記法 順序付リスト](../_resources/fc13b14d8a53b0d8189dcee5eca802ba.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-5.png)

### 引用

<blockquote>を用いる引用は、「>（大なり記号）」＋「半角スペース」を用います。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3 | > 　私はその人を常に先生と呼んでいた。<br>> だからここでもただ先生と書くだけで本名は打ち明けない。<br>> これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。 |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | <blockquote><br><p>　私はその人を常に先生と呼んでいた。<br>  だからここでもただ先生と書くだけで本名は打ち明けない。<br>  これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。</p><br></blockquote> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-6.png)

[![Markdown記法 引用](../_resources/cdbc2c037f164f9547c8f94fce886e48.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-6.png)

### リンク

<a>リンクでマークアップする方法です。以下は、最も簡単なリンク方法です。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | [寝ログ](http://nelog.jp/)<br>[寝ログ](http://nelog.jp/ "リンクのタイトル")<br>[Simplicity](wp-simplicity.com)<br>[Simplicity](wp-simplicity.com "無料のWordpressテーマ") |

URL後に、半角スペースを挟んで文字列を「”（ダブルクォーテーション）」で囲むことにより、title属性を付加することができます。

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | <p><a href="http://nelog.jp/">寝ログ</a></p><br><p><a href="http://nelog.jp/"title="リンクのタイトル">寝ログ</a></p><br><p><a href="wp-simplicity.com">Simplicity</a></p><br><p><a href="wp-simplicity.com"title="無料のWordpressテーマ">Simplicity</a></p> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-7.png)

[![Markdown記法 リンク](../_resources/eb5e383f8faa7073827c1d804b98e970.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-7.png)

### 参照目的のリンク

以下のように、リンク部分を参照として後でまとめて書けるようにもできます。参照目的のリンクを利用することで、文章部分に長いURLが入り込まないことにより、文章が読みやすくなります。

#### 記入例

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | [当サイト][nelog]の名前は、[寝ログ][nelog]と言います。<br>他には、[Simplicity][1]というサイトもやっています。<br>よく[Amazon][2]で買い物をしますが[楽天][3]ではあまり買い物しません。<br>[nelog]: http://nelog.jp/<br>[1]:  wp-simplicity.com "無料Wordpressテーマ"<br>[2]: http://www.amazon.co.jp/<br>[3]: http://www.rakuten.co.jp/ |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3 | <p><a href="http://nelog.jp/">当サイト</a>の名前は、<a href="http://nelog.jp/">寝ログ</a>と言います。<br>他には、<a href="wp-simplicity.com"title="無料Wordpressテーマ">Simplicity</a>というサイトもやっています。<br>よく<a href="http://www.amazon.co.jp/">Amazon</a>で買い物をしますが<a href="http://www.rakuten.co.jp/">楽天</a>ではあまり買い物しません。</p> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-8.png)

[![Markdown記法 参照目的のリンク](../_resources/f020effd6d68b8ad6a3cf4161024d848.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-8.png)

参照目的で、他の部分に書いたURLなどは当然表示されません。

### コード

<code>や<pre>を用いるマークアップ方法です。
インラインコード、<code>は、「’（バッククォート）」で囲みます。
コードを整形済みテキスト<pre>で表示するには、行頭に半角スペースを4つ以上書きます。

#### 記述例

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | インラインコードは、`inline code`のように記述します。<br>    def say_hello<br>      puts "Hello World!"<br>    end<br>    say_hello<br>    #←行頭に半角スペース4つ以上 |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | <p>インラインコードは、<code>inline code</code>のように記述します。</p><br><pre><code>def say_hello<br>  puts "Hello World!"<br>end<br>say_hello<br>#←行頭に半角スペース4つ以上<br></code></pre> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-9.png)

[![Markdown記法 コード](../_resources/40383506e6e998d64a8a9ffb37ad7f98.png)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-9.png)

### 水平線

<hr>を用いた水平線は、1行の中に3つ以上の「*（アスタリスク）」、「-（ハイホン）」、「_（アンダーバー）」を続けると利用できます。
＊、-、_の間には半角スペースを入れてもOK。

#### 記入例

以下のものは、すべて<hr>に変換されます。

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11 | ***<br>* * *<br>---<br>----------------------------<br>___<br>______________ _______________ |

#### HTML出力

XHTML

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11 | <hr /><br><hr /><br><hr /><br><hr /><br><hr /><br><hr /> |

#### 表示例

[(L)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-.jpg)

[![Markdown記法 水平線](../_resources/9182dda1051d3f08ed95bd0f20693e8e.jpg)](https://nelog.jp/wp-content/uploads/2015/09/Markdown-.jpg)

## 今回利用した記入例

とりあえず、今回利用した記入例を以下に載せておきます。

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>94<br>95<br>96<br>97<br>98<br>99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119 | Markdown記法のチートシート<br>===============<br>##段落<br>段落を分けるには、空行で分ければOKです。<br>このとき、段落をスペースやタブでインデントするのはNG。<br>##改行<br>文中で強制的に改行をするには、<br>文末に半角スペースを2つ入れてください→<br>これで改行されているはずです。<br>##テキストの強調<br>通常の強調は*アスタリスク*もしくは_アンダーバー_で囲みます。<br>強い協調は、**アスタリスク2つ**もしくは__アンダーバー2つ__で囲みます。<br>##見出し<br>#見出し1<br>見出し1<br>=====<br>##見出し2<br>見出し2<br>--------<br>###見出し3<br>####見出し4<br>#####見出し5<br>######見出し6<br>##順序なしリスト<br>*で記入<br>* リストアイテム1<br>* リストアイテム2<br>* リストアイテム3<br>*で記入<br>+ リストアイテム1<br>+ リストアイテム2<br>+ リストアイテム3<br>-で記入<br>- リストアイテム1<br>- リストアイテム2<br>- リストアイテム3<br>##順序付きリスト<br>1. リストアイテム1<br>2. リストアイテム2<br>3. リストアイテム3<br>##引用<br>> 　私はその人を常に先生と呼んでいた。<br>> だからここでもただ先生と書くだけで本名は打ち明けない。<br>> これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。<br>##リンク<br>[寝ログ](http://nelog.jp/)<br>[寝ログ](http://nelog.jp/ "リンクのタイトル")<br>[Simplicity](wp-simplicity.com)<br>[Simplicity](wp-simplicity.com "無料のWordpressテーマ")<br>##参照目的のリンク<br>[当サイト][nelog]の名前は、[寝ログ][nelog]と言います。<br>他には、[Simplicity][1]というサイトもやっています。<br>よく[Amazon][2]で買い物をしますが[楽天][3]ではあまり買い物しません。<br>[nelog]: http://nelog.jp/<br>[1]:  wp-simplicity.com "無料Wordpressテーマ"<br>[2]: http://www.amazon.co.jp/<br>[3]: http://www.rakuten.co.jp/<br>##コード<br>インラインコードは、`inline code`のように記述します。<br>    def say_hello<br>      puts "Hello World!"<br>    end<br>    say_hello<br>    #←行頭に半角スペース4つ以上<br>##水平線<br>***<br>* * *<br>---<br>----------------------------<br>___<br>______________ _______________ |

[Online Markdown Editor](http://www.ctrlshift.net/project/markdowneditor/)、もしくは[Marxico](https://nelog.jp/marxico)などを利用して、いろいろ触って遊んでみると、かなり簡単であることがわかると思います。（それでも、しばらく使っていないと一部忘れてしまっていましたが。）

## まとめ

Markdown記法を利用すれば、このように直感的な書き方で、基本的なHTMLなら手軽に利用することができます。
Markdown記法は、サービスによりそれぞれの方言がありますが、上記のものなら、だいたいどのサービスでも利用できるかと思います。
とりあえず、結構僕は面倒臭がりなので、このように少しでもキータッチを少なくできる書き方で、主なHTMLタグをマークアップできるのは、助かります。

[PR]

確定申告の受け付け期間になりました！[MFクラウド](https://af.moshimo.com/af/c/click?a_id=483484&p_id=888&pc_id=1087&pl_id=11753&guid=ON)で申告の手間を軽減！

[無料で使える会計ソフト「MFクラウド確定申告」は零細個人事業主にとっては神ツールなのではないか](https://nelog.jp/mf-cloud)
確定申告、面倒くさいです。
ただでさえ面倒なのに、2014年の確定申告から、僕のような超零細個人事業主でも、記帳義務と保存義務…

スポンサーリンク

[購読する](https://nelog.app.push7.jp/)
395

スポンサーリンク

 [わいひら](https://nelog.jp/author/yhira)

## 同時に読まれている記事

###   [プログラマ向けのメモアプリ「Boostnote」が便利。Markdownメモ、スニペットの管理に。](https://nelog.jp/boostnote)

Markdown記法で装飾したメモを手軽に残したり、ソースコードのスニペットをまとめて保存できるプログラマ用ノートアプリの紹介です。

[記事を読む](https://nelog.jp/boostnote)

###   [EvernoteにMarkdown記法でメモできるChromeアプリ「Marxico」が便利](https://nelog.jp/marxico)

Markdown記法でEvernoteにメモを残す方法です。労力をかけずに文字装飾を施したノートをEvernoteサーバー上に保存することができます。

[記事を読む](https://nelog.jp/marxico)

###   [BoostnoteのメモをDropboxを用いて複数PC間で同期させる方法](https://nelog.jp/how-to-sync-boostnote-memos)

プログラマー向けノートアプリのBoostnote上のメモをDropboxを使用してクラウド上で同期する方法の紹介です。

[記事を読む](https://nelog.jp/how-to-sync-boostnote-memos)

###   [HTML見出しにCSSのみで本の目次のような連番を振る方法](https://nelog.jp/sequential-number-heading)

CSSで自動的に見出しに連番を振る方法の紹介です。本の見出しのように章立てた文章を書きたいときには良いかもしれません。

[記事を読む](https://nelog.jp/sequential-number-heading)

###   [「HTML要素以外のものをCSSで設定したら？」を集めた「CSSユーモア」がクスっときて楽しい](https://nelog.jp/css-humor)

実際にあるものなどをCSSのプロパティーと値で表現する笑えるCSSのまとめサイト「CSS humor」の紹介です。WEB技術者向けの少しマニアックなジョークサイトです。

[記事を読む](https://nelog.jp/css-humor)

###   [コピペで記事を転載する人に全く違う内容のテキストをコピーさせる方法 ※](https://nelog.jp/twitter-invisible-text)

昨日、Twitterが行っている、心遣いの方法を読みました。 これを見て、「へぇ、そんな使い方ができるんだ」と思ったとともに、何か...

[記事を読む](https://nelog.jp/twitter-invisible-text)

###   [クリック一発で既存サイトのワイヤーフレームを作成してくれるブックマークレット「Wirify」](https://nelog.jp/wirify)

サイトのモックアップ（ワイヤフレーム）を手軽に作成することのできるWirifyの紹介です。有料版だと、OmniGraffle、Balsamiq、Visio、SVG形式でエクスポートすることができます。

[記事を読む](https://nelog.jp/wirify)

###   [PHPでCSSやJavaScriptを縮小化するWordPressカスタマイズ方法](https://nelog.jp/php-function-to-minify-html-css-and-javascript)

Wordpressでいて、HTML、CSS、JavaScriptの縮小化を行い、多少の高速化を実現する方法です。AMP対応にも。

[記事を読む](https://nelog.jp/php-function-to-minify-html-css-and-javascript)

###   [オライリー本の表紙みたいな画像を生成できる「O RLY Cover Generator」](https://nelog.jp/o-rly-cover-generator)

オライリー本のブックカバーのような画像を手軽に作ることができるWEBツールの紹介です。コンピューターは技術解説記事のアイキャッチなどに。

[記事を読む](https://nelog.jp/o-rly-cover-generator)

###   [WinSCPでアップロード時にGit関係のフォルダやファイルを除外する方法](https://nelog.jp/winscp-git-exclusion)

ファイル転送（FTP）ソフトのWinSCPで、アップロードしたくないファイルやフォルダを設定する方法です。

[記事を読む](https://nelog.jp/winscp-git-exclusion)

## コメントをどうぞ [コメントをキャンセル](https://nelog.jp/markdown#respond)

メールアドレスが公開されることはありません。 * が付いている欄は必須項目です
名前 *
メールアドレス *
ウェブサイト