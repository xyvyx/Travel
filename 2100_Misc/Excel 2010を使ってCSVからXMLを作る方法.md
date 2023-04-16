---
title: Excel 2010を使ってCSVからXMLを作る方法
updated: 2015-08-21 02:34:33Z
created: 2015-08-21 02:34:33Z
source: http://snowadays.jp/2013/09/1976
tags:
  - SI
  - 旅行
---

<div style="display: none;">

</div>

- [![twitter-icon](../_resources/35940dc2a4c79886f1370f671d72ce0f.png)](http://twitter.com/snowadays)
- [![facebook-icon](../_resources/32cfca6f44cc8da0a3acd3259cc581cb.png)](http://www.facebook.com/Sunday.in)
- [![gplus-icon](../_resources/d9143eccc99ca1d43ac5f8d0ac76634b.png)](https://plus.google.com/116801697049993132283?rel=author)
- [![email-icon](../_resources/d7578f9059c9813af15029d32f78c03f.png)](http://snowadays.jp/?page_id=237)
- [![rss-icon](../_resources/727d5c2c4671db36e582512424bf32e5.png)](http://snowadays.jp/?feed=rss2)

[Sunday In The Park](http://snowadays.jp/)

ソーシャルメディア・Web関連のマーケティング・技術情報と、スノーボード・旅行など休日の遊びを記録したブログ。

- [Home](http://snowadays.jp/)
- [SocialMedia](http://snowadays.jp/category/socialmedia)
- [WebTech](http://snowadays.jp/category/webtech)
- [SnowBoard](http://snowadays.jp/category/snowboard)
- [PasTime](http://snowadays.jp/category/pastime)
- [お問合わせ](http://snowadays.jp/contact)

# [Excel 2010を使ってCSVからXMLを作る方法](http://snowadays.jp/2013/09/1976)

9.10
2013
Category: [WebTech](http://snowadays.jp/category/webtech)

 Tags: [CSV→XML](http://snowadays.jp/tag/csv%e2%86%92xml), [CSV変換](http://snowadays.jp/tag/csv%e5%a4%89%e6%8f%9b), [Excel](http://snowadays.jp/tag/excel), [XML作成](http://snowadays.jp/tag/xml%e4%bd%9c%e6%88%90)

[![csvtoxml](../_resources/csvtoxml.png)](http://i2.wp.com/snowadays.jp/wp-content/uploads/csvtoxml.png)

Excel 2010を使ってCSVからXMLを作る方法です。
仕事でXMLデータの作成が必要になりました。
まあ手打ちで作ってもいいんですが、データ量が多ければそういうわけにもいかず。
しかも、元のデータはCSVデータです。
無料の変換ツールをググりましたがどれもこれも古いツールばかり。
（もう時代遅れなんすかね、XMLとか。）
なのでExcelで作業することでツール不要で実現。

あくまでも簡単にやりたい俺のための作業メモみたいなもんなので、本格的な方法を求めている人は他所へどうぞ。

#### CSVデータを作る

[![csv](../_resources/csv-e1378738818607.png)](http://i0.wp.com/snowadays.jp/wp-content/uploads/csv.png)

↑こういうCSVを作ります。
まあ、ブログ記事の更新情報をXMLデータにしたい、とでも思ってください。

#### XML Schemaデータを作る

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
`<?``xml`  `version``=``"1.0"`  `encoding``=``"utf-8"``?>`
`<``xsd:schema`  `xmlns:xsd``=``"http://www.w3.org/2001/XMLSchema"``>`
```<``xsd:element`  `name``=``"contents"``>`
```<``xsd:complexType``>`
```<``xsd:sequence``>`
```<``xsd:element`  `ref``=``"entry"`  `maxOccurs``=``"unbounded"``/>`
```</``xsd:sequence``>`
```</``xsd:complexType``>`
```</``xsd:element``>`
```<``xsd:element`  `name``=``"entry"``>`
```<``xsd:complexType``>`
```<``xsd:sequence``>`
```<``xsd:element`  `ref``=``"id"``/>`
```<``xsd:element`  `ref``=``"blog_name"``/>`
```<``xsd:element`  `ref``=``"blog_url"``/>`
```<``xsd:element`  `ref``=``"date"``/>`
```<``xsd:element`  `ref``=``"entry_title"``/>`
```<``xsd:element`  `ref``=``"entry_url"``/>`
```<``xsd:element`  `ref``=``"category"``/>`
```</``xsd:sequence``>`
```</``xsd:complexType``>`
```</``xsd:element``>`
```<``xsd:element`  `name``=``"id"`  `type``=``"xsd:integer"``/>`
```<``xsd:element`  `name``=``"blog_name"`  `type``=``"xsd:string"``/>`
```<``xsd:element`  `name``=``"blog_url"`  `type``=``"xsd:anyURI"``/>`
```<``xsd:element`  `name``=``"date"`  `type``=``"xsd:dateTime"``/>`
```<``xsd:element`  `name``=``"entry_title"`  `type``=``"xsd:string"``/>`
```<``xsd:element`  `name``=``"entry_url"`  `type``=``"xsd:anyURI"``/>`
```<``xsd:element`  `name``=``"category"`  `type``=``"xsd:string"``/>`
`</``xsd:schema``>`
↑面倒なんで、このソースをそのままコピペすればいいと思います。
メモ帳かなんかでこれを作って、ファイル名を「***.xsd」で保存してください。文字コードはUTF-8です。
上から順番に、XMLのタグの入れ子を外側から定義していくイメージですね。
最も子要素である、実際にデータが入ってくるタグについては、そのデータの型を「type=」で指定します。

- 文字列：string
- 数値：integer
- URL：anyURI
- 日付：dateTime

こんな感じ。
*> “*

> [> 豊富に用意されたデータ型を利用する](http://www.atmarkit.co.jp/ait/articles/0403/02/news094.html)> ｜＠IT

**
↑データ型については、こちらのサイトに非常に詳しく説明があります。

#### Excelで「XMLデータの対応付け」を行う

１．CSVとXSDファイルが完成したら、まずはCSVファイルをExcelで開きます。
２．そして、Excelのメニューから、[開発]メニューの[XML]タブの[ソース]を選択。
３．すると、右側に「XML ソース」という作業ウインドウが開きます。
４．作業ウインドウの一番下に「XMLの対応付け」というボタンがあるのでクリック
５．開いたウインドウの「追加」をクリックし、作成したXSDファイルを選択

６．すると、「複数のルートノードが含まれている・・・」というようなメッセージが出ますが、作成したXMLスキーマの中で定義してある、最も外側のタグの名前を選択してください。（※上記のサンプルの例なら「contents」です。）

７．OKを押すと、３の作業ウインドウの中にタグの名前がツリー上に表示されます。

８．CSVのデータを紐づけたいのは最下層の子要素だと思いますが、その親要素を作業ウインドウ内で選択。そのままCSVのデータの起点（左上）までドラッグ&ドロップ。

※上のサンプルなら、「entry」をドラッグ&ドロップします。
９．CSVのデータが表のように装飾されたら完成。
１０．ファイルに名前を付けて保存　→　ファイル形式を「XMLデータ」で保存。
画面キャプチャとかを取るのが面倒なので、テキストで。
*> “*

> [> たのしいXML: XMLをOfficeで扱う](http://www6.airnet.ne.jp/manyo/xml/office/step3.html)

**
なお、こちらのサイトでキャプチャ付きで詳しく解説されています。（Excel2003ですが、そんなに変わらないです。）
なお、手順２の[開発]メニューが見つからない方。
Excel2010ってホント糞ですよね。
Excelの画面上部、「ファイル｜ホーム｜挿入・・・・」とかってあるところの下のスペース、ここを「リボン」と呼ぶらしいんですが。
そのリボンの上で、どこでもいいので、右クリックしてください。
そこから、「リボンのユーザー設定」を選びます。
で、開いた画面の右側、「リボンのユーザー設定＞メインタブ」の中で、「開発」にチェックが入っていないと、メニューが表示されないです。
そもそもリボンすら表示されてない人は、画面右上の×印の近くのはてなマークの隣に、「Ｖ」←こんなマークありません？
それ押せばリボンが表示されます。

#### 完成したXMLデータ

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48

`<?``xml`  `version``=``"1.0"`  `encoding``=``"UTF-8"`  `standalone``=``"yes"``?>`

`<``contents``>`
```<``entry``>`
```<``id``>1</``id``>`
```<``blog_name``>Sunday In The Park</``blog_name``>`
```<``blog_url``>http://snowadays.jp/</``blog_url``>`
```<``date``>2013-09-07T12:54:00.000</``date``>`

```<``entry_title``>ウェブサイトに設置するソーシャルボタンの設定やサイズについてまとめ（Facebookいいね！ボタン）</``entry_title``>`

```<``entry_url``>http://snowadays.jp/2013/09/1922</``entry_url``>`
```<``category``>Facebook</``category``>`
```</``entry``>`
```<``entry``>`
```<``id``>2</``id``>`
```<``blog_name``>Sunday In The Park</``blog_name``>`
```<``blog_url``>http://snowadays.jp/</``blog_url``>`
```<``date``>2013-09-07T12:49:00.000</``date``>`

```<``entry_title``>ウェブサイトに設置するソーシャルボタンの設定やサイズについてまとめ（Twitterツイートボタン）</``entry_title``>`

```<``entry_url``>http://snowadays.jp/2013/09/1940</``entry_url``>`
```<``category``>Facebook</``category``>`
```</``entry``>`
```<``entry``>`
```<``id``>3</``id``>`
```<``blog_name``>Sunday In The Park</``blog_name``>`
```<``blog_url``>http://snowadays.jp/</``blog_url``>`
```<``date``>2013-08-28T14:45:00.000</``date``>`

```<``entry_title``>Facebook規約変更、Facebookページ上でのプロモーションがアプリ無しでも可能に</``entry_title``>`

```<``entry_url``>http://snowadays.jp/2013/08/1903</``entry_url``>`
```<``category``>Facebook</``category``>`
```</``entry``>`
```<``entry``>`
```<``id``>4</``id``>`
```<``blog_name``>Sunday In The Park</``blog_name``>`
```<``blog_url``>http://snowadays.jp/</``blog_url``>`
```<``date``>2013-08-22T20:00:00.000</``date``>`

```<``entry_title``>ブログやWebページにFacebookの投稿埋め込む場合の注意点まとめ。JavaScript SDKの設置など。</``entry_title``>`

```<``entry_url``>http://snowadays.jp/2013/08/1870</``entry_url``>`
```<``category``>Facebook</``category``>`
```</``entry``>`
```<``entry``>`
```<``id``>5</``id``>`
```<``blog_name``>Sunday In The Park</``blog_name``>`
```<``blog_url``>http://snowadays.jp/</``blog_url``>`
```<``date``>2013-08-21T20:55:00.000</``date``>`
```<``entry_title``>今年は富士山に登るのはやめた。ストリートビューでも見る。</``entry_title``>`
```<``entry_url``>http://snowadays.jp/2013/08/1797</``entry_url``>`
```<``category``>旅行</``category``>`
```</``entry``>`
`</``contents``>`
結構仕事中にこの手のハックをググって習得することが多いのですが、探すのに結構苦労することも多いです。
そのまま使わないと忘れてしまったりすることもあるので、こうして共有することで自分も助かるかも、ということでこんな話もこれからは少し書いていこうかと。

- [**ツイート](https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fsnowadays.jp%2F2013%2F09%2F1976&ref_src=twsrc%5Etfw&text=Excel%202010%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6CSV%E3%81%8B%E3%82%89XML%E3%82%92%E4%BD%9C%E3%82%8B%E6%96%B9%E6%B3%95%20&tw_p=tweetbutton&url=http%3A%2F%2Fsnowadays.jp%2F2013%2F09%2F1976&via=snowadays)

****[2](https://twitter.com/search?ref_src=twsrc%5Etfw&q=http%3A%2F%2Fsnowadays.jp%2F2013%2F09%2F1976)

このページは2回共有されました。これらのツイートを見る。
-

|     |     |
| --- | --- |
| いいね！ | 4<br><s></s>** |

- [![LINEで送る](../_resources/6a13e27f8b4a56a3121b9d142d4de5dd.png)](http://line.naver.jp/R/msg/text/?Excel%202010%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6CSV%E3%81%8B%E3%82%89XML%E3%82%92%E4%BD%9C%E3%82%8B%E6%96%B9%E6%B3%95%0D%0Ahttp://snowadays.jp/2013/09/1976%3futm_source%3dsocial%26utm_medium%3dline%26utm_campaign%3dline)

- [![B!](../_resources/button-counter.gif)    **5**](http://b.hatena.ne.jp/entry/snowadays.jp/2013/09/1976)
- [*10*********]()

-

0

[« Facebookいいね！ボタン ウェブサイト設置方法まとめ（サイズや設定など）](http://snowadays.jp/2013/09/1922)[» Twitterのツイートボタンが「0」のままカウントアップされない場合の対処法](http://snowadays.jp/2013/09/2130)

#### カテゴリ：[WebTech](http://snowadays.jp/category/webtech)の最新記事

- 2014.12.04 - [FacebookのJava Script SDKを「sdk.js」にした場合、APIバージョン指定が必須に](http://snowadays.jp/2014/12/3454)
- 2014.11.12 - [JavaScript SDK を all.js からsdk.js に変更しましょう。（2015年4月30日までに）](http://snowadays.jp/2014/11/3307)
- 2014.11.04 - [Facebook API v2.2 リリース 「token_for_business」についてまとめ](http://snowadays.jp/2014/11/3262)
- 2014.10.01 - [Facebook OGP画像の最新サイズ（※2014年9月）、もう正方形は不要](http://snowadays.jp/2014/10/3199)
- 2014.09.30 - [同じドメインで毎年コンテンツを更新している場合のOGP設定の要注意点](http://snowadays.jp/2014/09/3187)

[おしらせ](http://blog.zenback.jp/zenback-oshirase.html?utm_source=zenback&utm_medium=http%3A//snowadays.jp/2013/09/1976&utm_campaign=zb_oshiraselabel)<div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 [![original.jpg](../_resources/original.jpg)](http://dsp.logly.co.jp/click?ad=Jnibe0HpMCClS7Qsr-T0UdOak0cmEkKp5ayKzlRO5ZnJkDfJjSMcydCMA_G43oELfbVoMPQUMR1nI8Gy6ih4nA-HOy3JjxUcYAXoo5g7fwrshZmNVHECd3KjIMCvej_FRQWZJFYLvelmhV_Osj9EKTu11ccmTjqfkk8qupUwa57r6g-NK9SV2n0eJKHQHHtFYQZObngRqBdR-99O2mAr_2LuY-ruNXFOFUgxeJutpxo_gBcRmwh9fGzMQjS1Ds55eSKWGN1SzHoh5DcWaWUftYyL3-cyx16z152WmMg1jV2HaE2x0IdQGgDJH1dUv_VdSf9AwrjiaBJXLox2aylWGxTeOWQzgfAmjOjB_Jqx1_1hWjN8DjcS-kAGGjIgB_sZOITLqGj5GPo23Ja27vCsC7wJBTSDWSKxv4qVfmdtykU&sp=26_2_0x0_0)  <div style="display: none;"></div>

 <div style="display: none;"></div>

 [【動画】モニター募集！１日２粒で年間トマト約８００個分](http://dsp.logly.co.jp/click?ad=Jnibe0HpMCClS7Qsr-T0UdOak0cmEkKp5ayKzlRO5ZnJkDfJjSMcydCMA_G43oELfbVoMPQUMR1nI8Gy6ih4nA-HOy3JjxUcYAXoo5g7fwrshZmNVHECd3KjIMCvej_FRQWZJFYLvelmhV_Osj9EKTu11ccmTjqfkk8qupUwa57r6g-NK9SV2n0eJKHQHHtFYQZObngRqBdR-99O2mAr_2LuY-ruNXFOFUgxeJutpxo_gBcRmwh9fGzMQjS1Ds55eSKWGN1SzHoh5DcWaWUftYyL3-cyx16z152WmMg1jV2HaE2x0IdQGgDJH1dUv_VdSf9AwrjiaBJXLox2aylWGxTeOWQzgfAmjOjB_Jqx1_1hWjN8DjcS-kAGGjIgB_sZOITLqGj5GPo23Ja27vCsC7wJBTSDWSKxv4qVfmdtykU&sp=26_2_0x0_0)  <div style="display: none;"></div>

 トマトに含まれる話題の健康成分「リコピン」が今なら初回購入５０％ＯＦＦ！ (カゴメ)  <div style="display: none;"></div>

 ![bc.gif](../_resources/e72fa39da4ccecd564155edc4dcaa21c.jpeg)  <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

<div style="display: none;"></div>

 [![original.jpg20150820-20636-4rbvb7.jpg](../_resources/original.jpg20150820-20636-4rbvb7.jpg)](http://dsp.logly.co.jp/click?ad=Jnibe0HpMCClS7Qsr-T0UdOak0cmEkKp5ayKzlRO5ZmT3XpIsC50aEyIIaP_FW0Dlai3Xkx3B8wQqnr_e2h9kZeZ8lZN5nnzzoRaZ_uJwBPqzTa8WjSFpbeY33lksdH58erpYdTiZCveV8MnBfyOtFP26py-tzJKifnxq6O0u3BYUVi-mx6Vd9_TRGXOfyCRf3EfDN4e43iXfKiRrNuiAPzPFBhWugR3fc-Wc2fvOFfamWW1SKgcBO0w5C8d71Ya5cv1ScwGErkPzMTTmBKzgMx6w5XeLAchV0niA-If9TyhlfHmuipOE-1t_rezMjMWa8xg8Y8ng_ZbrHWztgEQx9Mmx7MsV2f5seuB-WfRWLlg2h3booyvsnyeOyZ74cw3qiJum1mqBos&sp=26_2_0x0_0)  <div style="display: none;"></div>

 <div style="display: none;"></div>

 [話題の機能性表示食品とは？乾燥肌の悩みにはヒアルロン酸。](http://dsp.logly.co.jp/click?ad=Jnibe0HpMCClS7Qsr-T0UdOak0cmEkKp5ayKzlRO5ZmT3XpIsC50aEyIIaP_FW0Dlai3Xkx3B8wQqnr_e2h9kZeZ8lZN5nnzzoRaZ_uJwBPqzTa8WjSFpbeY33lksdH58erpYdTiZCveV8MnBfyOtFP26py-tzJKifnxq6O0u3BYUVi-mx6Vd9_TRGXOfyCRf3EfDN4e43iXfKiRrNuiAPzPFBhWugR3fc-Wc2fvOFfamWW1SKgcBO0w5C8d71Ya5cv1ScwGErkPzMTTmBKzgMx6w5XeLAchV0niA-If9TyhlfHmuipOE-1t_rezMjMWa8xg8Y8ng_ZbrHWztgEQx9Mmx7MsV2f5seuB-WfRWLlg2h3booyvsnyeOyZ74cw3qiJum1mqBos&sp=26_2_0x0_0)  <div style="display: none;"></div>

 食品メーカーだから安心。マヨネーズのキユーピーだからできた！高純度の秘密。 (トウ・キユーピー)  <div style="display: none;"></div>

 ![bc.gif](../_resources/e72fa39da4ccecd564155edc4dcaa21c.jpeg)  <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

<div style="display: none;"></div>

<div style="display: none;"></div>

<div style="display: none;"></div>

[Sponsored](http://www.logly.co.jp/privacy.html)<div style="display: none;"></div>

<div style="display: none;"></div>

<div style="display: none;"></div>

<div style="display: none;"></div>

<div style="display: none;"></div>

**関連する記事**<div style="display: none;"></div>

- [![](../_resources/8a91c5723d48a45158865d11b97ca796.jpg)](http://snowadays.jp/2012/11/977)  <div style="display: none;"></div>

 [Facebookインサイトの日時がPST(太平洋標準時)から...](http://snowadays.jp/2012/11/977)  <div style="display: none;"></div>

 <div style="display: none;"></div>

- [![](../_resources/e6d9621623dfabb72ea2d2c52a1ffc43.png)](http://snowadays.jp/2012/12/1009)  <div style="display: none;"></div>

 [Facebookインサイトの日時がまたPST(太平洋標準時)...](http://snowadays.jp/2012/12/1009)  <div style="display: none;"></div>

 <div style="display: none;"></div>

- [![](../_resources/9428ddab1f2116d6ad18246e9a33434b.jpg)](http://snowadays.jp/2012/10/898)  <div style="display: none;"></div>

 [iPadから誤って写真を消してしまったが、iCloudのバッ...](http://snowadays.jp/2012/10/898)  <div style="display: none;"></div>

 <div style="display: none;"></div>

- [![](../_resources/7324a0c863dabe7a96df4bbcf08980e3.png)](http://snowadays.jp/2012/06/722)  <div style="display: none;"></div>

 [話題数とリーチ数に振り回された挙句見えてきたつまらないオチ](http://snowadays.jp/2012/06/722)  <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

[Twitter(最新 1)](#)<div style="display: none;"></div>

-

 [![LE________20111219_02_normal.JPG.jpg](../_resources/LE________20111219_02_normal.JPG.jpg)  @snowadays](http://twitter.com/snowadays)    [09月10日](http://twitter.com/snowadays/status/377088984754556928)    <div style="display: none;"></div>

 ブログ更新しました→ Excel 2010を使ってCSVからXMLを作る方法｜http://t.co/716c1gwIth    [![Reply](../_resources/reply.png)](http://twitter.com/intent/tweet?in_reply_to=377088984754556928&url=http%3A//snowadays.jp/2013/09/1976&lang=ja)  [![Retweet](../_resources/retweet.png)](http://twitter.com/intent/retweet?tweet_id=377088984754556928&lang=ja)  [![Favorite](../_resources/favorite.png)](http://twitter.com/intent/favorite?tweet_id=377088984754556928&lang=ja)    <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

**関連するみんなの記事**<div style="display: none;"></div>

- ![article-no-image16x16_out.png](../_resources/article-no-image16x16_out.png)  <div style="display: none;"></div>

 [CSVファイルOPC Diary](http://opcdiary.net/?p=236&utm_source=zenback&utm_medium=http%3A//snowadays.jp/2013/09/1976&utm_campaign=zb_related_links)  <div style="display: none;"></div>

 <div style="display: none;"></div>

- ![article-no-image16x16_out.png](../_resources/article-no-image16x16_out.png)  <div style="display: none;"></div>

 [CSV ファイルから XML ファイルを生成する（やっつけ仕事）](http://www.machu.jp/diary/20070308.html?utm_source=zenback&utm_medium=http%3A//snowadays.jp/2013/09/1976&utm_campaign=zb_related_links)  <div style="display: none;"></div>

 <div style="display: none;"></div>

- ![article-no-image16x16_out.png](../_resources/article-no-image16x16_out.png)  <div style="display: none;"></div>

 [Excel and CSV Conversion to JSON and XML in JavaSc...](http://wdn.publog.jp/archives/32481002.html?utm_source=zenback&utm_medium=http%3A//snowadays.jp/2013/09/1976&utm_campaign=zb_related_links)  <div style="display: none;"></div>

 <div style="display: none;"></div>

- ![article-no-image16x16_out.png](../_resources/article-no-image16x16_out.png)  <div style="display: none;"></div>

 [PerlでExcelのデータを操作する](http://www.h-fj.com/blog/archives/2013/12/29-110824.php?utm_source=zenback&utm_medium=http%3A//snowadays.jp/2013/09/1976&utm_campaign=zb_related_links)  <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 <div style="display: none;"></div>

 [![Powered by zenback](../_resources/poweredby.png)](https://zenback.jp/?utm_source=zenback&utm_medium=http%3A//snowadays.jp/2013/09/1976&utm_campaign=zb_footerlogo)  <div style="display: none;"></div>

#### Google Ad

#### Tag Cloud

[1000円自販機](http://snowadays.jp/tag/1000%e5%86%86%e8%87%aa%e8%b2%a9%e6%a9%9f)[Business Mapping API](http://snowadays.jp/tag/business-mapping-api)[Facebook](http://snowadays.jp/tag/facebook)[Facebook API](http://snowadays.jp/tag/facebook-api)[Facebook API v2.0](http://snowadays.jp/tag/facebook-api-v2-0)[Facebook Business Manager](http://snowadays.jp/tag/facebook-business-manager)[Facebook developers](http://snowadays.jp/tag/facebook-developers)[Facebook Login](http://snowadays.jp/tag/facebook-login)[Facebookアプリ](http://snowadays.jp/tag/facebook%e3%82%a2%e3%83%97%e3%83%aa)[Facebookページ](http://snowadays.jp/tag/facebook%e3%83%9a%e3%83%bc%e3%82%b8)[Facebook広告](http://snowadays.jp/tag/facebook%e5%ba%83%e5%91%8a)[Google Analytics](http://snowadays.jp/tag/google-analytics)[JavaScript SDK](http://snowadays.jp/tag/javascript-sdk)[OGP](http://snowadays.jp/tag/ogp)[OGP画像](http://snowadays.jp/tag/ogp%e7%94%bb%e5%83%8f)[PR](http://snowadays.jp/tag/pr)[publish_actions](http://snowadays.jp/tag/publish_actions)[SocialMedia](http://snowadays.jp/tag/socialmedia)[Twitter](http://snowadays.jp/tag/twitter)[いいね！ボタン](http://snowadays.jp/tag/%e3%81%84%e3%81%84%e3%81%ad%ef%bc%81%e3%83%9c%e3%82%bf%e3%83%b3)[うなぎ](http://snowadays.jp/tag/%e3%81%86%e3%81%aa%e3%81%8e)[かぐら](http://snowadays.jp/tag/%e3%81%8b%e3%81%90%e3%82%89)[ごはん](http://snowadays.jp/tag/%e3%81%94%e3%81%af%e3%82%93)[アクセス解析](http://snowadays.jp/tag/%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9%e8%a7%a3%e6%9e%90)[ゴールデンウィーク](http://snowadays.jp/tag/%e3%82%b4%e3%83%bc%e3%83%ab%e3%83%87%e3%83%b3%e3%82%a6%e3%82%a3%e3%83%bc%e3%82%af)[スキー場情報](http://snowadays.jp/tag/%e3%82%b9%e3%82%ad%e3%83%bc%e5%a0%b4%e6%83%85%e5%a0%b1)[スノーボード](http://snowadays.jp/tag/%e3%82%b9%e3%83%8e%e3%83%bc%e3%83%9c%e3%83%bc%e3%83%89)[ニセコ](http://snowadays.jp/tag/%e3%83%8b%e3%82%bb%e3%82%b3)[モヤさま](http://snowadays.jp/tag/%e3%83%a2%e3%83%a4%e3%81%95%e3%81%be)[モヤモヤ](http://snowadays.jp/tag/%e3%83%a2%e3%83%a4%e3%83%a2%e3%83%a4)[ラーメン](http://snowadays.jp/tag/%e3%83%a9%e3%83%bc%e3%83%a1%e3%83%b3)[丸沼](http://snowadays.jp/tag/%e4%b8%b8%e6%b2%bc)[初滑り](http://snowadays.jp/tag/%e5%88%9d%e6%bb%91%e3%82%8a)[大分](http://snowadays.jp/tag/%e5%a4%a7%e5%88%86)[投票](http://snowadays.jp/tag/%e6%8a%95%e7%a5%a8)[旅行](http://snowadays.jp/tag/%e6%97%85%e8%a1%8c)[水族館](http://snowadays.jp/tag/%e6%b0%b4%e6%97%8f%e9%a4%a8)[温泉](http://snowadays.jp/tag/%e6%b8%a9%e6%b3%89)[熊本](http://snowadays.jp/tag/%e7%86%8a%e6%9c%ac)[石打丸山](http://snowadays.jp/tag/%e7%9f%b3%e6%89%93%e4%b8%b8%e5%b1%b1)[花見](http://snowadays.jp/tag/%e8%8a%b1%e8%a6%8b)[蕎麦](http://snowadays.jp/tag/%e8%95%8e%e9%ba%a6)[選挙](http://snowadays.jp/tag/%e9%81%b8%e6%8c%99)[野沢温泉](http://snowadays.jp/tag/%e9%87%8e%e6%b2%a2%e6%b8%a9%e6%b3%89)[鎌倉](http://snowadays.jp/tag/%e9%8e%8c%e5%80%89)

#### Recent Posts

- [![かけ放題ガラケーとMVNOスマホで通信費を約半分に節約した](../_resources/ce671faacfa92d2e383e3911d489ec58.jpg)](http://snowadays.jp/2015/05/3513)[かけ放題ガラケーとMVNOスマホで通信費を約半分に節約した](http://snowadays.jp/2015/05/3513)  2015/05/01
- [![Facebookの投稿は未だにタグ付けされると公開範囲が変わるのね](../_resources/35e589818ecbadf1f2eed7de53acc90c.jpg)](http://snowadays.jp/2015/01/3488)[Facebookの投稿は未だにタグ付けされると公開範囲が変わるのね](http://snowadays.jp/2015/01/3488)  2015/01/30
- [アジャイルメディア・ネットワークを退職しました](http://snowadays.jp/2015/01/3504)  2015/01/30
- [![Facebookアプリを使えばいとも簡単にメールアドレスを抜けると言うことを知らない人が多すぎる](../_resources/e361f97db16fcbdb84d00ed481538cde.png)](http://snowadays.jp/2014/12/3471)[Facebookアプリを使えばいとも簡単にメールアドレスを抜けると言うことを知らない人が多すぎる](http://snowadays.jp/2014/12/3471)  2014/12/22
- [![スタッドレスタイヤへの交換はお済みですか？タイヤ保管サービスのすすめ。](../_resources/5e8b7de8b5f9f4296b50f1608f0a8815.jpg)](http://snowadays.jp/2014/12/3364)[スタッドレスタイヤへの交換はお済みですか？タイヤ保管サービスのすすめ。](http://snowadays.jp/2014/12/3364)  2014/12/08

#### Categories

- [Others](http://snowadays.jp/category/others) (18)
- [SnowBoard](http://snowadays.jp/category/snowboard) (39)
- [WebTech](http://snowadays.jp/category/webtech) (41)
- [PasTime](http://snowadays.jp/category/pastime) (43)
- [SocialMedia](http://snowadays.jp/category/socialmedia) (58)

#### Facebook Page

- [Home](http://snowadays.jp/)
- [SocialMedia](http://snowadays.jp/category/socialmedia)
- [WebTech](http://snowadays.jp/category/webtech)
- [SnowBoard](http://snowadays.jp/category/snowboard)
- [PasTime](http://snowadays.jp/category/pastime)
- [お問合わせ](http://snowadays.jp/contact)

© [Sunday In The Park](http://snowadays.jp/) 2015

Social Network Icon Pack ([Komodo Media, Rogie King](http://komodomedia.com/)) / [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)

Theme by [Themify](http://themify.me/member/go.php?r=34090&i=l1) "[Funki](http://themify.me/member/go.php?r=34090&i=l16)".