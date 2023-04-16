---
title: Chrome拡張「Scraper」でWEBページ情報を手軽にスクレイピングしてデータ化する方法
updated: 2018-03-10 12:40:07Z
created: 2018-03-10 12:40:07Z
source: https://nelog.jp/chrome-extension-scraper
author: xyvyx10
tags:
  - Web
---

#  Chrome拡張「Scraper」でWEBページ情報を手軽にスクレイピングしてデータ化する方法

 [Google Chrome](https://nelog.jp/category/windows/google-chrome)

![](../_resources/550acee5694755ad362c5dd047099235.jpg)

[Scraper](https://chrome.google.com/webstore/detail/scraper/mbigbapnjcgaffohmbkdlecaccepngjd)というChrome拡張を最近たまたま見つけたので使ってみました。

この拡張が、かなり有能なやつでして、WEBページ上の情報を、手軽にテーブルデータ化でき、とても便利だったので紹介です。
photo by [Clive Darra](https://www.flickr.com/photos/osde-info/4251472673/)

スポンサーリンク

## Scraperとは

![Scraper拡張](../_resources/d11f0cde68ab2c7d1a58a8a5d378220e.png)

[Scraper](https://chrome.google.com/webstore/detail/scraper/mbigbapnjcgaffohmbkdlecaccepngjd)は、WEBページ上の規則性のあるデータを手軽に取得することができるChrome拡張です。

例えば、テーブルデータや、Aリンクデータ、のような特定のHTML要素に入っている情報を、片っ端から取得してテーブルデータ化することができます。

また、その取得したデータをワンクリックで[Googleスプレットシート](https://www.google.com/intl/ja_jp/sheets/about/)に保存することができます。

テーブルデータのスクレイピングは以下の動画を見た方が分かりやすいかも。

以下では、その使い道などをいくつか考えてみました。

## テーブルデータの取得

最もオーソドックスな使い方と言えば、動画にも出てきたテーブルデータの取得です。

例えば、信長の野望の以下のような[武将データ](http://www17.atpages.jp/nobuyabo/data.html)テーブルがあったとします。

[(L)](https://nelog.jp/wp-content/uploads/2015/05/46082aa67a1c.png)

[![信長の野望の武将データ](../_resources/e217b97c073b214b4a128e00ec933911.png)](https://nelog.jp/wp-content/uploads/2015/05/46082aa67a1c.png)

これを、以下のように選択して、Chromeの右クリックメニューから「Scrape similar（似たものをスクレイプ）」を選択します。
[(L)](https://nelog.jp/wp-content/uploads/2015/05/74d08a31f841.png)

[![信長の野望武将データの選択](../_resources/fa8b16e2c2d3ee3d17d675ccf2e027ec.png)](https://nelog.jp/wp-content/uploads/2015/05/74d08a31f841.png)

すると、新しいウィンドウに、テーブル上の武将データ1192人分が全てスクレイプされて取得されました。[(L)](https://nelog.jp/wp-content/uploads/2015/05/Scraper1.png)

[![Scraperでテーブルデータを取得](../_resources/9af347664dd539989fbd1bb10a2e9171.png)](https://nelog.jp/wp-content/uploads/2015/05/Scraper1.png)

### 項目を絞る

以下のように、左サイドバーで必要なデータのみに絞って再取得（Scrape）すれば、

![主要なデータのみに絞る](../_resources/dc730c3fe5fb7fb406028f07bab7fe76.png)

必要なデータのみを取得することもできます。
[(L)](https://nelog.jp/wp-content/uploads/2015/05/aa53d1a89769.png)

[![主要なデータのみ取得した](../_resources/93e1606afe255cbcf2ebd312a073a02e.png)](https://nelog.jp/wp-content/uploads/2015/05/aa53d1a89769.png)

### Googleスプレッドシートに保存

そして「Export to Google Docs」ボタンを押せば、

![Googleドキュメントにエクスポート](../_resources/aee32960556fc6d545ca967109a644b9.png)

以下のように、Googleドライブの利用許可を求めてくるので「承認する」をクリックします。

![Scraperが次の許可をリクエストしています](../_resources/8f08ffbd79d311deb66fa51b5a8d7b7d.png)

すると、Googleスプレッドシート上にデータが反映されます。

![信長の野望のスプレッドシートデータ](../_resources/f6da6daba186379f300baa7dba55dbac.png)

後のデータ加工は自由自在です。（個人で利用する範囲では）

いろいろ、WEB上に公開されているテーブルデータ（例えば[気象庁のデータ](http://www.jma.go.jp/jma/menu/menureport.html)とか）を手軽に取得するには良いかもしれません。

## Twitterの全ツイートを取得とか

例えば、Twitterのお気に入りの人のツイートを全て取得するなんてこともできます。

### 全ツイートの取得

まずは、ツイートを取得したいユーザーはページを開き、下にスクロールして、取得したい分だけ表示させます。
![取得したい分だけスクロール](../_resources/01d98fd208bcb22930e5f3a3e8b0e229.png)

あとは、取得したいHTML要素上（今回はツイート部分）で右クリックをして、「Scrape similar」を押します。

![取得したい要素上で右クリックして取得する](../_resources/42290d22d768e7dbc01151f9ddeb35a9.png)

すると、表示しているツイート全てが取得されます。
[(L)](https://nelog.jp/wp-content/uploads/2015/05/7ae6b8549d25.png)

[![ツイートが取得される](../_resources/f5879db521a9e6a0565c15840145382d.png)](https://nelog.jp/wp-content/uploads/2015/05/7ae6b8549d25.png)

こんな簡単に、タイムラインのツイートのみを取得することができます。
データを取得するには、「Copy to clipboard」ボタンからもクリップボードに取得することができます。

![クリップボードへコピー](../_resources/3ca33700b7957cc740439b0feb0c7f22.png)

### 本人のみのツイートのみに絞って取得

ただ、このままだと、リツイートも含まれてしまうので、「本人のみのツイートだけを取得したい」なんて場合は、以下のようにします。
厳密に取得するデータを指定するには、以下の手順で行います。
1. Selectorのセレクトボックスで「jQuery」を選択（CSSセレクタで選択するため）

2. Selectorの入力欄に「div[data-screen-name=”MrYhira”] p.ProfileTweet-text」のようにCSSセレクタを記入

3. Scrapeボタンを押してデータを取得

![2015-05-04_12h22_55](../_resources/62f4dee43bae9c91c9a6ee1e9b619dd5.png)

今回は、CSSセレクタで取得データ条件を絞り込むため、「jQuery」をセレクタにしましたが、「XPath」がわかる場合は、XPathで指定してもOKです。
上記のようにすると、目的の人のみ（今回は@MrYhira）のツイートテキストを一括取得することができます。
[(L)](https://nelog.jp/wp-content/uploads/2015/05/cfc5ee71a77f.png)

[![リツイートを取り除いたデータの取得](../_resources/fc8d6b288f96f3453e18f8e6dd6e6987.png)](https://nelog.jp/wp-content/uploads/2015/05/cfc5ee71a77f.png)

ツイート以外にもセレクタの指定次第で、フォロワーの「スクリーンネーム一覧」や、「Twitter ID一覧」なども、手軽に取得できたりします。

## 全リンクデータの取得

![Yahoo! JAPAN](../_resources/ba263534b80a755e8111f8662215bafb.png)

例えば、[Yahoo! JAPAN](http://www.yahoo.co.jp/)のトップページなどで、以下のように設定を書いてスクレイプすると
![Yahoo!Japanでリンクをすべて取得する設定](../_resources/fc6c991cdcf80c3384d597c702e299ee.png)
Yahoo!トップページにある全ての「リンクテキスト」と「リンク先（URL）」を取得するなんてこともできます。
[(L)](https://nelog.jp/wp-content/uploads/2015/05/YahooJapan1.png)

[![Yahoo!Japanのリンクの取得結果](../_resources/3f0d7a4c28a3545a3b315d7893b8de24.png)](https://nelog.jp/wp-content/uploads/2015/05/YahooJapan1.png)

こういった、テキストに加えて属性値も取得できるのは、地味に便利です。

## まとめ

今回は、3つの例のみでしたが、使い方次第では、いろいろなサイトのいろいろな情報を手軽にデータ化することができるようになると思います。（※複数のURLを渡り歩いてスクレイプするということはできません。）

jQueryのCSSセレクタ指定や、XPathの指定は、多少WEBの知識がないと難しいかもしれません。けれど、セレクタ等を知らなくても、感覚的に操作するだけで、ある程度欲しいデータは取得できると思います。

これでWEB上のデータを、エクセルやスプレッドシートに保存しておいて後で見返したり、加えて解析・分析など、個人利用のためのデータ収集の手間が、かなり省けます。
追記：WEBサービスで手軽にスクレイピングする以下のような方法があります。

[URLを入力するだけ！コンテンツをスクレイピングしてデータ化してくれる無料ツール「import.io」](https://nelog.jp/import-io)

現在、無料版は利用できなくなっているようです。 以前、スクレイピングツールとしてChrome拡張を紹介しました。
この「...